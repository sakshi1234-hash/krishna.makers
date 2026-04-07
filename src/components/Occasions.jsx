import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Gift, Briefcase, Boxes, Palette } from 'lucide-react'

const occasions = [
  {
    title: 'Diwali Boxes 🪔',
    description: 'Traditional mithais in designer diya-shaped boxes.',
    icon: <Sparkles className="text-secondary" size={40} />,
    color: 'bg-red-50'
  },
  {
    title: 'Wedding Packing 💍',
    description: 'Luxe baraati boxes, shagun packing, ladoo boxes.',
    icon: <Heart className="text-secondary" size={40} />,
    color: 'bg-pink-50'
  },
  {
    title: 'Birthday Boxes 🎂',
    description: 'Colorful custom printed boxes with name printing.',
    icon: <Gift className="text-secondary" size={40} />,
    color: 'bg-blue-50'
  },
  {
    title: 'Corporate Gifting 🏢',
    description: 'Premium branded boxes for business occasions.',
    icon: <Briefcase className="text-secondary" size={40} />,
    color: 'bg-slate-50'
  },
  {
    title: 'Bulk Orders 📦',
    description: '50+ boxes at unbeatable wholesale prices.',
    icon: <Boxes className="text-secondary" size={40} />,
    color: 'bg-orange-50'
  },
  {
    title: 'Custom Design 🎨',
    description: 'Your design, your brand, our craftsmanship.',
    icon: <Palette className="text-secondary" size={40} />,
    color: 'bg-purple-50'
  }
]

const Occasions = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading mb-4 text-primary">We Pack Every Celebration</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Specialized designs for every life milestone. Handcrafted with traditional Rajasthani motifs and modern aesthetics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {occasions.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="flex-card h-64 cursor-pointer"
          >
            <div className="flip-card-inner shadow-xl">
              {/* Front */}
              <div className={`flip-card-front ${item.color} flex flex-col items-center justify-center p-8 border-2 border-primary/10`}>
                 <div className="mb-4 bg-white p-4 rounded-full shadow-md">
                   {item.icon}
                 </div>
                 <h3 className="text-2xl font-heading text-primary">{item.title}</h3>
                 <p className="text-sm text-gray-500 mt-2 italic">Hover to explore</p>
              </div>
              
              {/* Back */}
              <div className="flip-card-back bg-primary flex flex-col items-center justify-center p-8 text-white">
                <p className="text-lg font-body mb-6 font-medium leading-relaxed">
                  {item.description}
                </p>
                <a 
                  href={`https://wa.me/919828995897?text=I'm interested in ${item.title}`}
                  className="px-6 py-2 bg-secondary text-white font-bold rounded-full hover:bg-secondary-hover transition-colors shadow-lg"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Occasions
