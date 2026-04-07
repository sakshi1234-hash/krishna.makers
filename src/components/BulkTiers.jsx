import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Award, Gem, Crown } from 'lucide-react'

const tiers = [
  {
    range: '50–99 boxes',
    discount: 'Base Price',
    badge: 'Starter',
    icon: <Zap className="text-yellow-500" />,
    color: 'border-yellow-200'
  },
  {
    range: '100–199 boxes',
    discount: '5% OFF',
    badge: 'Silver',
    icon: <Award className="text-slate-400" />,
    color: 'border-slate-200'
  },
  {
    range: '200–499 boxes',
    discount: '10% OFF',
    badge: 'Gold',
    icon: <Star className="text-secondary" />,
    color: 'border-secondary/40',
    popular: true
  },
  {
    range: '500–999 boxes',
    discount: '15% OFF',
    badge: 'Platinum',
    icon: <Gem className="text-blue-400" />,
    color: 'border-blue-200'
  },
  {
    range: '1000+ boxes',
    discount: '20% OFF',
    badge: 'Royal',
    icon: <Crown className="text-primary" />,
    color: 'border-primary/40'
  }
]

const BulkTiers = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading mb-4 text-primary">More You Order, More You Save!</h2>
        <p className="text-gray-600">All prices are wholesale market rates. Minimum order starts at 50 boxes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {tiers.map((tier, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className={`relative flex flex-col items-center p-6 rounded-3xl border-2 bg-white transition-all shadow-sm ${tier.color} ${tier.popular ? 'ring-2 ring-secondary ring-offset-2' : ''}`}
          >
            {tier.popular && (
              <span className="absolute -top-3 bg-secondary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-lg">Most Popular</span>
            )}
            <div className="mb-4 p-3 bg-gray-50 rounded-2xl">
              {tier.icon}
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{tier.badge}</span>
            <h3 className="text-xl font-bold mt-2">{tier.range}</h3>
            <div className="my-4 text-3xl font-heading text-primary">{tier.discount}</div>
            <ul className="space-y-2 mb-6 text-sm text-gray-600 text-left w-full">
              <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Wholesale Rates</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Custom Branding</li>
              {tier.badge === 'Royal' && <li className="flex items-center gap-2 text-primary font-bold"><Check size={14} /> FREE DELIVERY</li>}
            </ul>
            <a 
              href={`https://wa.me/919828995897?text=I'd like to place a bulk order for ${tier.range}`}
              className={`mt-auto w-full py-2 rounded-xl font-bold text-sm transition-colors text-center ${tier.popular ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Select Tier
            </a>
          </motion.div>
        ))}
      </div>
      
      <p className="text-center mt-12 text-sm text-gray-500 italic">Call us for custom pricing on special occasions or larger quantities.</p>
    </div>
  )
}

export default BulkTiers
