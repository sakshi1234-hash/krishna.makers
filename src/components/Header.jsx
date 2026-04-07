import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Occasions', href: '#occasions' },
    { name: 'Our Boxes', href: '#catalog' },
    { name: 'Size Guide', href: '#size-guide' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#enquire' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-xl py-2' : 'bg-transparent py-4'}`}>
      {/* Top Bar - hidden when scrolled */}
      {!isScrolled && (
        <div className="hidden md:flex justify-between items-center px-8 border-b border-white/20 pb-2 text-white/80 text-sm">
          <span>Owners: Manmohan Ji Joshi & Kuldeep Joshi</span>
          <div className="flex gap-4 items-center">
            <a href="tel:+917014164930" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone size={14} /> +91 7014164930
            </a>
          </div>
        </div>
      )}

      <nav className="container mx-auto px-4 flex justify-between items-center text-white">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-white rounded-lg p-1.5 shadow-lg">
             <span className="text-primary font-heading text-2xl font-bold tracking-tight px-1">KM</span>
          </div>
          <span className="font-heading text-2xl lg:text-3xl font-bold text-secondary">Krishna Box Maker</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-medium hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/919828995897" 
            className="btn-secondary !py-2 !px-5 flex items-center gap-2 text-sm"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-8 items-center text-lg">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
