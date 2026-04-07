import React from 'react'
import { motion } from 'framer-motion'
import { Ruler, ShoppingBag, Gift, PartyPopper, Heart, Gem, Star, Trophy } from 'lucide-react'

const sizes = [
  { name: 'Petit', dims: '8×6×4 cm', cap: '50g', best: 'Single Mithai / Guest Gifting', price: '₹15', icon: <Heart size={16} /> },
  { name: 'Mini', dims: '12×8×5 cm', cap: '100g', best: 'Small Token Gifts', price: '₹25', icon: <Gift size={16} /> },
  { name: 'Classic', dims: '15×10×6 cm', cap: '250g', best: 'Casual Gifting / Festive Half-Sets', price: '₹45', icon: <Star size={16} /> },
  { name: 'Standard', dims: '20×15×7 cm', cap: '500g', best: 'Standard Festival Large मिठाई', price: '₹85', icon: <ShoppingBag size={16} /> },
  { name: 'Family', dims: '25×20×8 cm', cap: '1kg', best: 'Large Family Party Packs', price: '₹149', icon: <PartyPopper size={16} /> },
  { name: 'Deluxe', dims: '30×22×10 cm', cap: '2kg', best: 'Premium Wedding Celebration', price: '₹249', icon: <Gem size={16} /> },
  { name: 'Royal', dims: '35×28×12 cm', cap: '3kg', best: 'Royal Gifting & Hampers', price: '₹399', icon: <Trophy size={16} /> },
  { name: 'Grand', dims: '45×35×15 cm', cap: '5kg', best: 'Grand Celebrations & Corporate Baskets', price: '₹599', icon: <Star size={16} /> }
]

const SizeGuide = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading mb-4 text-primary italic">Find Your <span className="text-secondary">Perfect Size</span></h2>
        <p className="text-gray-600">From a single mithai box to grand 5kg presentation trays. Hand-measured for precision.</p>
      </div>

      <div className="overflow-x-auto rounded-[2rem] border border-primary/10 shadow-2xl bg-white mb-20">
        <table className="w-full text-left border-collapse">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-6 font-heading tracking-widest text-sm uppercase">Size Name</th>
              <th className="p-6 font-heading tracking-widest text-sm uppercase">Dimensions</th>
              <th className="p-6 font-heading tracking-widest text-sm uppercase">Capacity</th>
              <th className="p-6 font-heading tracking-widest text-sm uppercase">Best For</th>
              <th className="p-6 font-heading tracking-widest text-sm uppercase text-right">Start Price</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-primary/5 hover:bg-primary/[0.02] transition-colors group"
              >
                <td className="p-6 font-bold text-primary flex items-center gap-3">
                   <div className="p-2 bg-secondary/10 rounded-lg text-secondary group-hover:scale-110 transition-transform">
                      {size.icon}
                   </div>
                   {size.name}
                </td>
                <td className="p-6 text-gray-500 font-mono text-xs">{size.dims}</td>
                <td className="p-6 text-gray-700 font-medium">{size.cap}</td>
                <td className="p-6 text-gray-600 text-sm">{size.best}</td>
                <td className="p-6 text-right font-black text-primary">{size.price}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visual Size Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-secondary/5 rounded-[3rem] p-12 border border-secondary/20">
        <div className="space-y-6">
          <h3 className="text-3xl font-heading text-primary leading-tight">Visual Size <br /> Comparison</h3>
          <p className="text-gray-600 leading-relaxed font-light">
            Need a custom size? We can manufacture bespoke dimensions tailored to your branding requirements. 
            Minimum wholesale quantity for custom sizes is 500 units.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg"
          >
            Custom Quote →
          </motion.a>
        </div>
        
        <div className="relative h-64 flex items-end justify-center gap-2">
            {[10, 15, 20, 30, 45, 60, 80, 100].map((h, i) => (
               <motion.div 
                 key={i}
                 initial={{ height: 0 }}
                 whileInView={{ height: `${h}%` }}
                 transition={{ delay: i * 0.1, duration: 1 }}
                 className="w-full max-w-[40px] bg-gradient-to-t from-primary to-secondary rounded-t-lg shadow-lg relative cursor-help group"
               >
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] bg-primary text-white px-2 py-1 rounded">
                   {sizes[i].name}
                 </div>
               </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SizeGuide
