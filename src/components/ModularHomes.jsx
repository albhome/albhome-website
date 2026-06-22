import { useState } from 'react'
import { ArrowRight, Bed, Bath, Maximize2, X, Ruler, DollarSign } from 'lucide-react'

const products = [
  {
    id: '20ft',
    name: 'ALB Home™ 20FT Stockman Classic',
    tagline: 'Compact living, maximum comfort',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    specs: [
      { icon: Bed, label: '1 Bed' },
      { icon: Bath, label: '1 Bath' },
      { icon: Maximize2, label: '38m²' },
      { icon: Ruler, label: '20ft' },
    ],
    price: '$32,500',
    priceNote: 'Excludes GST, delivery & site works',
    idealFor: 'Single-person accommodation, worker housing, or a compact on-site living space.',
    features: [
      'Wet/Dry bathroom with non-slip tiled flooring',
      'L-shaped soft-close kitchen with overhead cabinetry',
      'LED soft shell ceiling lights throughout',
      'Oversized 1125mm windows for natural light',
      'Open-plan living and kitchen layout',
      '18mm magnesium oxide subfloor with PVC/SPC finish',
    ],
    optional: [
      'Outdoor decking and canopy',
    ],
  },
  {
    id: '30ft',
    name: 'ALB Home™ 30FT Outback Classic',
    tagline: 'Spacious living with room to move',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    specs: [
      { icon: Bed, label: '2 Bed' },
      { icon: Bath, label: '1 Bath' },
      { icon: Maximize2, label: '58m²' },
      { icon: Ruler, label: '30ft' },
    ],
    price: '$54,500',
    priceNote: 'Excludes GST, delivery & site works',
    idealFor: 'A couple, an overseer, or guest accommodation — balancing compact living with room to move.',
    features: [
      'Wet/Dry bathroom with non-slip tiled flooring',
      'Separate bedroom capability for privacy',
      'LED soft shell ceiling lights throughout',
      'Oversized 1125mm windows for natural light',
      'Open-plan living and kitchen layout',
      '18mm magnesium oxide subfloor with PVC/SPC finish',
    ],
    optional: [
      'Outdoor decking and canopy',
    ],
  },
  {
    id: '40ft',
    name: 'ALB Home™ 40FT Homestead Classic',
    tagline: 'Premium independent living at its finest',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    specs: [
      { icon: Bed, label: '3 Bed' },
      { icon: Bath, label: '1 Bath' },
      { icon: Maximize2, label: '76m²' },
      { icon: Ruler, label: '40ft' },
    ],
    price: '$56,500',
    priceNote: 'Excludes GST, delivery & site works',
    idealFor: 'Extended family, permanent independent living, or dual-occupancy — a proper home with room to breathe.',
    features: [
      'Wet/Dry bathroom with non-slip tiled flooring',
      'Defined spaces for living and dining',
      'LED soft shell ceiling lights throughout',
      'Oversized 1125mm windows for natural light',
      '3-bedroom open-plan living and kitchen',
      '18mm magnesium oxide subfloor with PVC/SPC finish',
    ],
    optional: [
      'Outdoor decking and canopy',
    ],
  },
]

export default function ModularHomes() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <section id="modular-homes" className="py-20 sm:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="section-badge">Our Homes</span>
          </div>
          <div className="text-center mb-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary uppercase tracking-wide">
              20FT / 30FT / 40FT Extended Homes
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
              Eco-friendly, customisable modular homes designed for modern Australian living.
            </p>
          </div>

          {/* Product cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Spec badges row */}
                <div className="grid grid-cols-4 border-b border-gray-100">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col items-center gap-1 py-3 border-r border-gray-100 last:border-r-0"
                    >
                      <spec.icon size={16} className="text-accent" />
                      <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
                        {spec.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-primary uppercase tracking-wide leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{product.tagline}</p>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl font-heading font-bold text-accent">{product.price}</span>
                    <span className="text-[10px] text-gray-400">*</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5">{product.priceNote}</p>

                  {/* Key Features */}
                  <ul className="mt-4 space-y-1.5">
                    {product.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm mt-4 hover:gap-2 transition-all"
                  >
                    View Full Details
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              {/* Title & Price */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-500 mt-1">{selectedProduct.idealFor}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-heading font-bold text-accent">{selectedProduct.price}</p>
                  <p className="text-[10px] text-gray-400">{selectedProduct.priceNote}</p>
                </div>
              </div>

              {/* Specs bar */}
              <div className="grid grid-cols-4 gap-4 bg-gray-50 rounded-xl p-4 mb-6">
                {selectedProduct.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col items-center gap-1">
                    <spec.icon size={20} className="text-accent" />
                    <span className="text-xs text-gray-500 font-medium">{spec.label}</span>
                  </div>
                ))}
              </div>

              {/* Full Features */}
              <div className="mb-6">
                <h3 className="font-heading font-bold text-lg text-primary mb-3 uppercase tracking-wide">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Extras */}
              <div className="mb-6">
                <h3 className="font-heading font-bold text-lg text-primary mb-3 uppercase tracking-wide">Optional Extras</h3>
                <ul className="space-y-2">
                  {selectedProduct.optional.map((opt) => (
                    <li key={opt} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floorplan teaser */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <h3 className="font-heading font-bold text-lg text-primary mb-2 uppercase tracking-wide">
                  Floorplan & Specifications
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {selectedProduct.specs.find(s => s.icon === Bed)?.label} configuration with open-plan living and kitchen.
                  Fully fitted bathroom with vanity, toilet and shower.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                    18mm magnesium oxide subfloor with 2-4mm durable PVC/SPC finish
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                    Fully insulated walls, floor and ceiling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                    Pre-wired and pre-plumbed — ready for connection
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => setSelectedProduct(null)}
                className="block w-full text-center bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-3.5 rounded-xl transition-all text-sm uppercase tracking-wider"
              >
                Enquire About This Home
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}