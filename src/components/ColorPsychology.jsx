import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Sparkles, Heart, Leaf, Shield, Gem } from 'lucide-react'

const colors = [
  {
    name: 'Royalty Gold',
    hex: '#C9952A',
    effect: 'Evokes luxury, celebration, and festive grandeur.',
    emotions: ['Success', 'Prestige', 'Quality'],
    occasion: 'Weddings & High-end Gifting',
    gradient: 'from-[#C9952A]/20 to-[#1A0A00]',
    glow: 'shadow-[#C9952A]/30'
  },
  {
    name: 'Blushing Rose',
    hex: '#D4547A',
    effect: 'Represents love, romance, and delicate craftsmanship.',
    emotions: ['Tenderness', 'Passion', 'Grace'],
    occasion: 'Anniversaries & Bridal Collections',
    gradient: 'from-[#D4547A]/20 to-[#1A0A00]',
    glow: 'shadow-[#D4547A]/30'
  },
  {
    name: 'Emerald Purity',
    hex: '#2E7D32',
    effect: 'Symbolizes nature, freshness, and traditional purity.',
    emotions: ['Harmony', 'Growth', 'Serenity'],
    occasion: 'Organic & Traditional Ghee Sweets',
    gradient: 'from-[#2E7D32]/20 to-[#1A0A00]',
    glow: 'shadow-[#2E7D32]/30'
  },
  {
    name: 'Royal Sapphire',
    hex: '#1565C0',
    effect: 'Instills trust, reliability, and professional excellence.',
    emotions: ['Reliability', 'Calm', 'Confidence'],
    occasion: 'Corporate Gifting & Wholesale',
    gradient: 'from-[#1565C0]/20 to-[#1A0A00]',
    glow: 'shadow-[#1565C0]/30'
  },
  {
    name: 'Imperial Plum',
    hex: '#6A1B9A',
    effect: 'Inspires creativity, mystery, and premium exclusivity.',
    emotions: ['Imagination', 'Ambition', 'Luxury'],
    occasion: 'Limited Edition Festive Boxes',
    gradient: 'from-[#6A1B9A]/20 to-[#1A0A00]',
    glow: 'shadow-[#6A1B9A]/30'
  }
]

const ColorPsychology = () => {
  return (
    <div className="bg-[#1A0A00] py-24 px-4 relative overflow-hidden">
      {/* Background diagonal grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:24px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4 italic">The <span className="text-secondary">Psychology</span> of Celebration</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We choose our colors with intention. Every shade is curated to evoke the right emotion for your precious moments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {colors.map((color, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-8 rounded-3xl bg-gradient-to-b ${color.gradient} border border-white/5 shadow-2xl transition-all duration-300 ${color.glow} hover:border-white/10`}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-20 h-20 rounded-full mb-6 shadow-inner animate-pulse"
                  style={{ backgroundColor: color.hex, boxShadow: `0 0 20px ${color.hex}66` }}
                />
                <h3 className="text-xl font-heading text-white mb-2">{color.name}</h3>
                <code className="text-xs text-secondary mb-4 opacity-70 tracking-widest">{color.hex}</code>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {color.effect}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {color.emotions.map((emo, eIdx) => (
                    <span key={eIdx} className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full text-gray-300 border border-white/10 uppercase tracking-tighter">
                      {emo}
                    </span>
                  ))}
                </div>
                <div className="mt-auto text-[10px] font-bold text-secondary uppercase tracking-widest border-t border-white/5 pt-4 w-full">
                   Suits: {color.occasion}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorPsychology
