import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ColorPsychology from './components/ColorPsychology'
import Catalog from './components/Catalog'
import Features from './components/Features'
import Occasions from './components/Occasions'
import SizeGuide from './components/SizeGuide'
import ProcessTimeline from './components/ProcessTimeline'
import Reviews from './components/Reviews'
import LocationMap from './components/LocationMap'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import VideoShowcase from './components/VideoShowcase'
import { Toaster } from 'react-hot-toast'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary selection:text-white">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <div className="text-center">
              <motion.h1 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-4xl font-heading text-primary"
              >
                Krishna Box Maker
              </motion.h1>
              <div className="w-48 h-1 bg-gray-200 mt-4 rounded-full overflow-hidden mx-auto">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <Marquee />

        <section id="occasions">
          <Occasions />
        </section>

        <ColorPsychology />

        <VideoShowcase />

        <section id="catalog" className="bg-white/30">
          <Catalog />
        </section>

        <section id="features" className="bg-primary/5 py-12">
          <Features />
        </section>

        <section id="size-guide">
          <SizeGuide />
        </section>

        <section id="process">
          <ProcessTimeline />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <LocationMap />

        <section id="enquire">
          <ContactForm />
        </section>
      </main>

      <Footer />
      <FloatingActions />
      
      {/* Toast notifications */}
      <Toaster position="bottom-center" />
    </div>
  )
}

export default App
