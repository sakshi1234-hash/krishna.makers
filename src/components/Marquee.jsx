import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  const items = [
    '✦ Trusted by 500+ Sweet Shops',
    '✦ Bulk Orders Welcome',
    '✦ Same-Day Dispatch Available',
    '✦ 100% Eco Materials',
    '✦ Free Design Consultation',
    '✦ Rajasthan\'s #1 Mithai Packaging',
    '✦ Pan-India Delivery',
    '✦ Custom Branding Available'
  ]

  return (
    <div className="bg-primary/95 py-4 overflow-hidden border-y border-secondary/20 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set of items */}
        <div className="flex gap-12 items-center px-6">
          {items.map((item, idx) => (
            <span key={idx} className="text-white font-heading text-lg md:text-xl tracking-wider uppercase opacity-90">
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-12 items-center px-6">
          {items.map((item, idx) => (
            <span key={`clone-${idx}`} className="text-white font-heading text-lg md:text-xl tracking-wider uppercase opacity-90">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
