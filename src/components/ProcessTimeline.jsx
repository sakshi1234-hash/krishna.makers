import React from 'react'
import { motion } from 'framer-motion'
import { Ruler, Palette, PenTool, CheckCircle, Package, Truck } from 'lucide-react'

const steps = [
  {
    icon: <Ruler size={32} className="text-secondary" />,
    title: 'Choose Box Size',
    description: 'Select from 8+ standard sizes or request bespoke dimensions.'
  },
  {
    icon: <Palette size={32} className="text-secondary" />,
    title: 'Pick Your Theme',
    description: 'Gold, Rose, Emerald or Deep Plum — choose your emotional vibe.'
  },
  {
    icon: <PenTool size={32} className="text-secondary" />,
    title: 'Share Branding',
    description: 'Send us your logo, family name or custom message for printing.'
  },
  {
    icon: <CheckCircle size={32} className="text-secondary" />,
    title: 'Design Preview',
    description: 'We send a high-fidelity mockup via WhatsApp for your approval.'
  },
  {
    icon: <Package size={32} className="text-secondary" />,
    title: 'Confirm & Produce',
    description: 'Handcrafted production with premium materials & artisanal care.'
  },
  {
    icon: <Truck size={32} className="text-secondary" />,
    title: 'Express Delivery',
    description: 'Safe transit to your doorstep. Payment collected on delivery.'
  }
]

const ProcessTimeline = () => {
  return (
    <div className="py-24 px-4 bg-secondary/5 relative overflow-hidden">
      {/* Subtle gold dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C9952A_1px,transparent_1px)] bg-[length:24px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4 italic">Our <span className="text-secondary">Artisanal</span> Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From concept to your doorstep — how we bring your vision to life.</p>
        </div>

        <div className="relative">
          {/* Horizontal Line on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-1 bg-gradient-to-r from-primary/10 via-secondary/40 to-primary/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative">
             {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-[88px] h-[88px] rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-secondary/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading text-primary mb-3">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light px-4">
                    {step.description}
                  </p>
                </motion.div>
             ))}
          </div>
        </div>

        <div className="mt-20 text-center bg-white/70 backdrop-blur-md inline-block px-10 py-4 rounded-full border border-secondary/10 shadow-sm mx-auto flex items-center justify-center font-bold text-primary group cursor-pointer hover:bg-primary hover:text-white transition-all transform hover:scale-105">
           <span className="text-secondary mr-2 group-hover:text-white transition-colors">✦</span>
           Ready to start? Get a quote today!
           <span className="text-secondary ml-2 group-hover:text-white transition-colors">✦</span>
        </div>
      </div>
    </div>
  )
}

export default ProcessTimeline
