import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Mail, Clock, Car, Home, CreditCard } from 'lucide-react'

const infoCards = [
  {
    icon: <MapPin size={24} className="text-secondary" />,
    title: 'Main Studio & Showroom',
    content: 'Ashok Colony Gali No. 1, Near Mahadev Ji Mandir, Jodhpur, Rajasthan — 342001'
  },
  {
    icon: <Phone size={24} className="text-secondary" />,
    title: 'Call / WhatsApp',
    content: '+91 9828995897 | +91 6376721477 (WA Only)'
  },
  {
    icon: <Mail size={24} className="text-secondary" />,
    title: 'Email Communications',
    content: 'hello@mithaimahal.com | orders@mithaimahal.com'
  },
  {
    icon: <Clock size={24} className="text-secondary" />,
    title: 'Working Hours',
    content: 'Mon–Sat: 9 AM–8 PM | Sun: 10 AM–6 PM'
  }
]

const LocationMap = () => {
  return (
    <div id="find-us" className="bg-[#1A0A00] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4 italic">Visit Our <span className="text-secondary">Studio</span></h2>
          <p className="text-gray-400">Experience our craftsmanship in person. We're located in the heart of Jodhpur.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoCards.map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="mb-4 bg-white/10 p-3 rounded-xl inline-block">
                  {card.icon}
                </div>
                <h3 className="text-lg font-heading text-white mb-2">{card.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {card.content}
                </p>
              </motion.div>
            ))}
            
            {/* Payment Info Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 md:col-span-2"
            >
              <div className="flex items-center gap-4">
                 <div className="bg-secondary p-3 rounded-xl text-white">
                    <CreditCard size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-heading text-white">Offline Payment Only</h3>
                    <p className="text-xs text-secondary/80 font-medium">Cash | Bank Transfer | UPI QR shared on WhatsApp</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[480px] rounded-[3rem] overflow-hidden border-4 border-secondary/20 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSarafa+Bazaar+Jodhpur!5e0!3m2!1sen!2sin!4v1234"
              width="100%" height="100%" style={{ border: 0, filter: 'sepia(20%) contrast(1.05)' }}
              allowFullScreen="" loading="lazy" title="Jodhpur Factory Map"
            />
            
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
               <a 
                 href="https://goo.gl/maps/jodhpur-sarafa" 
                 target="_blank" rel="noreferrer"
                 className="flex-1 px-6 py-3 bg-white text-primary font-bold rounded-2xl shadow-lg hover:bg-gray-100 transition-colors text-center text-sm"
               >
                 Get Directions
               </a>
               <a 
                 href="https://wa.me/919828995897"
                 className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
               >
                 <MessageCircle size={20} />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LocationMap
