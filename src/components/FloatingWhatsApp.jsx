import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-text text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl">
        Chat with us!
      </div>
      
      {/* Pulse Rings */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-50" />
      
      {/* Main Button */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919828995897?text=Hello Krishna Box Maker! I'd like to inquire about your boxes."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform"
      >
        <MessageCircle size={32} fill="currentColor" className="text-white" />
      </motion.a>
    </div>
  )
}

export default FloatingWhatsApp
