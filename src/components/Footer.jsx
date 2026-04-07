import React from 'react'
import { Instagram, Smartphone, MapPin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-text text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-heading text-secondary">Krishna Box Maker</h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Wholesale manufacturers of premium sweet boxes in Jodhpur. Combining tradition with modern elegance since decades.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/919828995897" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-500 transition-all">
              <Smartphone size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#occasions" className="hover:text-white">Occasions</a></li>
            <li><a href="#catalog" className="hover:text-white">Our Boxes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary uppercase tracking-widest text-xs">Our Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Custom Branding</li>
            <li>Wedding Shagun Boxes</li>
            <li>Diwali Dry Fruit Boxes</li>
            <li>Corporate Gift Packs</li>
            <li>Ladoo Packing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-secondary uppercase tracking-widest text-xs">Factory Address</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin className="text-secondary shrink-0" size={18} />
              <span>Mahadev Temple, Ashok Colony Gali No. 1, Ramsagar Circle, Jodhpur</span>
            </li>
            <li className="flex gap-3">
              <Smartphone className="text-secondary shrink-0" size={18} />
              <span>+91 7014164930 | +91 9828995897</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-secondary shrink-0" size={18} />
              <span>krishnamakers@jodhpur.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
        <p className="mb-2">© 2024 Krishna Box Maker. All Rights Reserved. Owners: Manmohan Ji Joshi & Kuldeep Joshi</p>
        <p className="flex items-center justify-center gap-1 font-medium text-gray-400">
          Made with <Heart size={14} className="text-primary fill-primary" /> in Jodhpur
        </p>
      </div>
    </footer>
  )
}

export default Footer
