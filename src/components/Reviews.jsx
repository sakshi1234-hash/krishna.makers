import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import { supabase } from '../lib/supabase'

const fallbackReviews = [
  { reviewer_name: 'Ravi Sharma', location: 'Jodhpur', rating: 5, review_text: "Best mithai boxes in Jodhpur! Ordered 200 boxes for my daughter's wedding — everyone was impressed. Quality is outstanding!" },
  { reviewer_name: 'Sunita Agarwal', location: 'Jaipur', rating: 5, review_text: "Corporate gifting sorted! Krishna Box Maker delivered 500 branded boxes on time. Highly recommend for bulk orders." },
  { reviewer_name: 'Mohit Verma', location: 'Jodhpur', rating: 5, review_text: "Diwali boxes were a hit! Beautiful packaging, amazing sweets. Will definitely order again this year!" },
  { reviewer_name: 'Priya Mehta', location: 'Udaipur', rating: 5, review_text: "Custom birthday boxes with name printing — my kids loved it! Very affordable for bulk." },
  { reviewer_name: 'Ramesh Gupta', location: 'Jodhpur', rating: 5, review_text: "Manmohan ji and Kuldeep ji are so professional. Placed order for shagun boxes — perfect quality!" }
]

const ReviewCard = ({ review }) => (
  <div className="mx-4 p-6 bg-white rounded-3xl border border-primary/5 shadow-sm w-80 h-full flex flex-col justify-between">
    <div>
      <div className="flex gap-1 mb-4 text-secondary">
        {[...Array(review?.rating || 5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{review?.review_text || 'Excellent service!'}"</p>
    </div>
    <div className="flex items-center gap-3 mt-auto">
      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold uppercase">
        {review?.reviewer_name?.[0] || review?.name?.[0] || 'K'}
      </div>
      <div>
        <h4 className="font-bold text-sm text-primary">{review?.reviewer_name || review?.name || 'Customer'}</h4>
        <div className="flex items-center gap-1 text-[10px] text-gray-400">
          <MapPin size={10} /> {review?.location || review?.city || 'Jodhpur'}
        </div>
      </div>
    </div>
  </div>
)

const Reviews = () => {
  const [reviews, setReviews] = useState(fallbackReviews)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (data && data.length > 0) {
          setReviews(data)
        }
      } catch (err) {
        console.error('Supabase fetch failed, using fallback:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  return (
    <div className="py-20 bg-background overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-heading mb-4 text-primary">What Our Customers Say</h2>
        <p className="text-gray-600">Join 5,000+ happy clients across Rajasthan.</p>
      </div>

      <Marquee pauseOnHover={true} speed={40} className="py-4">
        {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
      </Marquee>
      
      <Marquee pauseOnHover={true} speed={30} direction="right" className="py-4">
        {reviews.slice().reverse().map((r, i) => <ReviewCard key={i} review={r} />)}
      </Marquee>
    </div>
  )
}

export default Reviews
