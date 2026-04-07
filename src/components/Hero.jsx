import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary/80">
      {/* Visual background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-[80px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl"
      >
        <span className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium tracking-wide animate-bounce">
          ⭐ Wholesale Only — Starting at 50 Boxes
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 leading-tight drop-shadow-2xl">
          Celebrate Every Moment with <br />
          <span className="text-secondary italic">Krishna Box Maker</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Handcrafted Sweet Boxes from the Heart of Jodhpur — Wholesale Prices, 
          <span className="font-bold"> Minimum Order: 50 Boxes.</span> 
          Premium quality for your most precious moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#catalog"
            className="btn-secondary !py-4 !px-10 text-lg flex items-center gap-3 w-full sm:w-auto"
          >
            Explore Our Boxes <ArrowRight size={20} />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919828995897"
            className="px-10 py-4 bg-[#25D366] text-white font-bold rounded-full transition-all duration-300 shadow-lg flex items-center gap-3 w-full sm:w-auto"
          >
            <MessageCircle size={24} /> WhatsApp Now
          </motion.a>
        </div>
      </motion.div>

      {/* Decorative Mandala */}
      <motion.img 
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.1, rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        src="https://www.svgrepo.com/show/305341/mandala.svg"
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] pointer-events-none"
      />
    </div>
  )
}

export default Hero
