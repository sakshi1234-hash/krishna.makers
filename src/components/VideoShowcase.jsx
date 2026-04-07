import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Phone, User, Star } from 'lucide-react'

const VideoShowcase = () => {
  const videoRef = useRef(null)
  const [showEndCard, setShowEndCard] = useState(false)

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || showEndCard) return

    // Trigger the end-card 3 seconds before the end
    if (video.duration && video.currentTime >= video.duration - 3) {
      video.pause() // Pause the original video's "bad" end part
      setShowEndCard(true)
      
      // Hold the end-card for 5 seconds, then restart everything
      setTimeout(() => {
        setShowEndCard(false)
        if (videoRef.current) {
          videoRef.current.currentTime = 0
          videoRef.current.play()
        }
      }, 5000)
    }
  }

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 text-primary">Our Craft in Motion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic font-medium">✨ Premium packaging for your high-end sweet business.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video lg:aspect-[16/9] max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border-4 border-white shadow-primary/20 bg-black"
        >
          {/* Main Video Element */}
          <video 
            ref={videoRef}
            src="/promo.mp4"
            autoPlay 
            muted 
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className={`w-full h-full object-cover transition-all duration-1000 ${showEndCard ? 'blur-md scale-110 opacity-40' : 'blur-0 scale-100 opacity-100'}`}
          />

          {/* Cinematic End Card Overlay */}
          <AnimatePresence>
            {showEndCard && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-t from-primary/80 via-transparent to-primary/80"
              >
                <motion.div 
                  initial={{ scale: 0.8, y: 30, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
                  className="text-center p-8 md:p-16 rounded-[40px] border-2 border-secondary/30 bg-white/10 backdrop-blur-xl shadow-2xl relative"
                >
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-secondary">
                     <Star size={48} fill="currentColor" className="animate-pulse" />
                  </div>

                  <h3 className="text-5xl md:text-7xl font-heading text-secondary drop-shadow-2xl mb-4 tracking-wider uppercase">
                    KRISHNA BOX MAKER
                  </h3>
                  
                  <div className="w-32 h-1 bg-secondary mx-auto mb-8 rounded-full" />
                  
                  <div className="space-y-6">
                    <motion.div 
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.6 }}
                       className="flex items-center justify-center gap-3 text-white"
                    >
                      <User size={24} className="text-secondary" />
                      <span className="text-xl md:text-2xl font-medium">Manmohan Ji Joshi & Kuldeep Joshi</span>
                    </motion.div>

                    <motion.div 
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.8 }}
                       className="flex items-center justify-center gap-3 text-secondary text-2xl md:text-3xl font-bold"
                    >
                      <Phone size={28} fill="currentColor" />
                      <span>+91 7014164930</span>
                    </motion.div>
                  </div>

                  <p className="mt-12 text-white/60 uppercase tracking-[0.3em] text-xs font-bold">Made with Love in Jodhpur</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Regular Hover Overlay (only if not showing end card) */}
          {!showEndCard && (
            <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl hidden md:block">
              <h3 className="text-xl font-heading text-primary flex items-center gap-2">
                <Play size={18} fill="currentColor" /> Krishna Box Maker Craft
              </h3>
            </div>
          )}
        </motion.div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  )
}

export default VideoShowcase
