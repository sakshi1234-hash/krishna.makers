import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, ArrowUp } from 'lucide-react'

const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400)
    }
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-center">
      {/* Back to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/80 backdrop-blur-md border border-primary/10 rounded-full flex items-center justify-center text-primary shadow-xl hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Us */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+919828995897"
        className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-secondary-hover transition-all animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <Phone size={28} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919828995897"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:opacity-90 transition-all relative group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-20 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/5">
           Chat with Owner
        </span>
      </motion.a>
    </div>
  )
}

export default FloatingActions
