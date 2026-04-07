import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, ShieldCheck, PenTool, Timer } from 'lucide-react'

const features = [
  {
    title: '25+ Years of Craftsmanship',
    description: 'A legacy of box making through generations in Jodhpur.',
    icon: <Landmark className="text-secondary" />
  },
  {
    title: '100% Pure & Hygienic',
    description: 'We ensure all packaging materials are food-grade and safe.',
    icon: <ShieldCheck className="text-secondary" />
  },
  {
    title: 'Custom Design & Branding',
    description: 'Get your logo and brand colors printed on every single box.',
    icon: <PenTool className="text-secondary" />
  },
  {
    title: 'On-Time Delivery',
    description: 'Guaranteed delivery for your weddings and festive events.',
    icon: <Timer className="text-secondary" />
  }
]

const Features = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-primary/5 shadow-sm"
          >
            <div className="mb-6 p-4 bg-white rounded-full shadow-lg">
              {f.icon}
            </div>
            <h3 className="text-xl font-heading text-primary mb-3">{f.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Features
