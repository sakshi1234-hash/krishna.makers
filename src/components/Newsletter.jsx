import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Bell, Star } from 'lucide-react'
import toast from 'react-hot-toast'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    toast.success('🎉 Welcome! Your 15% discount code has been sent to your email.')
    setEmail('')
  }

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-r from-[#C9952A] to-[#FF8C00] rounded-[3rem] p-12 md:p-20 text-white shadow-2xl overflow-hidden"
      >
        {/* Polka-dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:16px_16px]" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-sm font-black tracking-widest uppercase">
               <Star size={14} className="fill-white" /> Exclusive Offer
            </div>
            <h2 className="text-4xl md:text-6xl font-heading leading-tight">Get 15% Off Your <br /> <span className="italic">First Order</span></h2>
            <p className="text-white/80 max-w-md font-light leading-relaxed">
              Subscribe for exclusive offers, new designs and festive deals. 
              Be the first to know when we launch our luxury seasonal collections.
            </p>
          </div>

          <div className="flex flex-col gap-4">
             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <button 
                  type="submit"
                  className="px-10 py-4 bg-white text-primary font-black rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                  Subscribe <Send size={18} />
                </button>
             </form>
             <p className="text-[10px] text-white/60 text-center sm:text-left flex items-center gap-1">
                <Bell size={10} /> We respect your privacy. Unsubscribe anytime.
             </p>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full border border-white/10"
        />
      </motion.div>
    </div>
  )
}

export default Newsletter
