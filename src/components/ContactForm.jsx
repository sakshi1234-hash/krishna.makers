import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, Phone, MapPin, MessageCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'
import confetti from 'canvas-confetti'
import toast from 'react-hot-toast'

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data) => {
    try {
      // Save to Supabase
      const { error: supabaseError } = await supabase.from('orders').insert([
        { 
          name: data.name, 
          phone: data.phone, 
          occasion: data.occasion, 
          quantity: parseInt(data.quantity), 
          message: data.message 
        }
      ])

      if (supabaseError) {
        console.error('Supabase Error:', supabaseError.message, supabaseError.details);
        throw new Error(supabaseError.message);
      }

      // Trigger Confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C0392B', '#D4AC0D', '#E67E22']
      })

      setSuccess(true)
      toast.success("Enquiry sent successfully!")
      
      // WhatsApp Link redirect
      const waMessage = encodeURIComponent(`Hello Krishna Box Maker, I'm ${data.name}. I'd like to inquire about ${data.quantity} boxes for a ${data.occasion}. Message: ${data.message || 'No additional message'}`)
      const waUrl = `https://wa.me/919828995897?text=${waMessage}`
      
      // Reset form
      reset()
      
      // Optional: Open WhatsApp in new tab after a brief delay
      setTimeout(() => window.open(waUrl, '_blank'), 1500)

    } catch (err) {
      console.error('Submission Catch Block:', err)
      toast.error(`Error: ${err.message || 'Failed to send enquiry'}`)
    }
  }

  return (
    <div className="py-20 px-4 bg-primary text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-heading mb-6 drop-shadow-lg">Ready to Start Your Order?</h2>
          <p className="text-white/80 text-xl mb-12">Fill out the form below, and our experts will contact you within 2 hours with a custom quote.</p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-2xl"><MapPin /></div>
              <div>
                <h4 className="font-bold text-secondary">Visit Us</h4>
                <p className="text-sm opacity-80">Mahadev Temple, Ashok Colony Gali No. 1, Ramsagar Circle, Jodhpur</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-2xl"><Phone /></div>
              <div>
                <h4 className="font-bold text-secondary">Call Us</h4>
                <a href="tel:+917014164930" className="text-xl font-bold hover:underline">+91 7014164930</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-2xl"><MessageCircle /></div>
              <div>
                <h4 className="font-bold text-secondary">Main Owner</h4>
                <p className="text-sm opacity-80">Manmohan Ji Joshi & Kuldeep Joshi</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[40px] text-text shadow-2xl relative overflow-hidden"
        >
          {success ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <Send size={44} className="animate-bounce" />
              </div>
              <h3 className="text-4xl font-heading text-primary mb-4">Request Received!</h3>
              <p className="text-gray-600 mb-8 font-medium leading-relaxed px-4">
                Thank you, <span className="text-primary font-bold">Krishna Box Maker</span> team has received your enquiry. 
                <br />
                <span className="text-secondary font-black">✦ We will call you within 2 hours ✦</span>
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href={`https://wa.me/919828995897?text=Hi, I just submitted an enquiry on your website.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white font-black rounded-2xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
                <button 
                  onClick={() => setSuccess(false)}
                  className="text-gray-400 text-xs hover:text-primary transition-colors hover:underline"
                >
                  Need to send another enquiry?
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Full Name*</label>
                  <input 
                    {...register('name', { required: true })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="e.g. Manmohan Joshi"
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1 font-bold">Name is required</span>}
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Phone Number*</label>
                  <input 
                    {...register('phone', { required: true })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="98289 XXXXX"
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 mt-1 font-bold">Valid phone required</span>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Occasion*</label>
                  <select 
                    {...register('occasion', { required: true })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                  >
                    <option value="">Select celebration</option>
                    <option value="Wedding">💍 Wedding Packing</option>
                    <option value="Diwali">🪔 Diwali Boxes</option>
                    <option value="Birthday">🎂 Birthday Box</option>
                    <option value="Corporate">💼 Corporate Gifting</option>
                    <option value="Bulk">📦 Custom Bulk Order</option>
                  </select>
                  {errors.occasion && <span className="text-[10px] text-red-500 mt-1 font-bold">Select an occasion</span>}
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Quantity (Min. 50)*</label>
                  <input 
                    type="number"
                    {...register('quantity', { required: true, min: 50 })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="50"
                  />
                  {errors.quantity && <span className="text-[10px] text-red-500 mt-1 font-bold">Min wholesale order: 50</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Special Requests</label>
                <textarea 
                  {...register('message')}
                  rows={3}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  placeholder="Need custom branding or specific dimensions?"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white !py-5 rounded-2xl font-black flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl hover:bg-secondary-hover transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-[0.2em] text-sm"
              >
                {isSubmitting ? 'Processing...' : (
                  <>Get My Quote Now <Send size={20} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}


export default ContactForm
