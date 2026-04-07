import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Dry Fruit & Nut Boxes',
    subtitle: 'Kaju, Badam, Pista & Kishmish',
    images: [
      '/images/collections/dryfruit-premium.jpg',
      '/images/collections/classic-partition.jpg'
    ]
  },
  {
    title: 'Premium Wedding Boxes',
    subtitle: 'Luxe Rajasthani & "Mithas" Collection',
    images: [
      '/images/collections/rajasthani-wedding-open.jpg',
      '/images/collections/rajasthani-wedding-closed.jpg'
    ]
  },
  {
    title: 'Floral Gift Sets',
    subtitle: 'Elegant Rose & Floral Motifs',
    images: [
      '/images/collections/premium-floral-stack.jpg',
      '/images/collections/floral-mockup-1.jpg'
    ]
  },
  {
    title: 'Seasonal Special',
    subtitle: 'Ghewaar, Malpua & Festive Exclusives',
    images: [
      '/images/collections/ghewar-special.jpg',
      '/images/collections/jalebi-special.png'
    ]
  },
  {
    title: 'Industrial & Cartoon Boxes',
    subtitle: 'Corrugated Master Cartons & Shipping Boxes',
    images: [
      '/images/collections/industrial-pack.png',
      '/images/collections/cartoon-boxes.png'
    ]
  }
]

const Catalog = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading mb-4 text-primary">Our Box Collections</h2>
        <p className="text-gray-600">Premium wholesale collection for every taste. Minimum order: 50 boxes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <div className="border-b-2 border-secondary pb-2 mb-4">
               <h3 className="text-2xl font-heading text-primary leading-tight">{cat.title}</h3>
               <p className="text-xs text-gray-500 uppercase tracking-widest">{cat.subtitle}</p>
            </div>
            {cat.images.map((img, imgIdx) => (
              <motion.div 
                key={imgIdx}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-primary/5"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[#1A0A00]/80 backdrop-blur-md text-secondary px-3 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center gap-1.5 border border-secondary/20 shadow-lg">
                     <span className="animate-pulse">✦</span> AI-CURATED DESIGN
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">MIN. 50 BOXES</span>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="font-bold text-sm">Wholesale Price</span>
                    <a 
                      href={`https://wa.me/919828995897?text=I'd like to know the price for ${cat.title}`}
                      className="text-primary text-xs font-bold underline hover:text-accent transition-colors"
                    >
                      Get Price
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalog
