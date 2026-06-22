import { useState } from 'react'
import { ArrowRight, Bed, Bath, Maximize2, Ruler, X, Check } from 'lucide-react'

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
    price: 32500,
    priceLabel: '$32,500',
    priceNote: 'Excludes GST, delivery & site works',
    idealFor: 'Single-person accommodation, worker housing, or a compact on-site living space. Compact and functional, it offers a self-contained solution that is practical and low maintenance.',
    keyFeatures: [
      'Front double panel lockable entry door',
      'Crime safe tested lockable stainless steel security door',
      'Double panel lockable windows with stainless steel screens',
      'Wet/Dry bathroom with non-slip tiled flooring',
      'Integrated toilet & vanity with faced-level storage',
      'Non-slip waterproof shower with hand-held shower head',
      'Integrated ventilation fan',
      'L-shaped soft-close kitchen with overhead cabinetry',
      'Quartz stone benchtops',
      'LED soft shell ceiling lights',
      'PVC floor sites',
      'Sunshade canopy over entry',
      'E-Tint glazing for improved energy efficiency',
      'Oversized 1125mm windows for more natural light',
      'Premium SPC flooring throughout the home',
      'Integrated modern ceiling lighting system',
      'Truss gable roof for improved insulation and drainage',
      'Upgraded exterior cladding options and colour finishes',
    ],
    specifications: {
      structure: [
        'Approx. Area: 38m²',
        'High-strength expandable modular steel frame',
        'Foldable design for efficient transport and rapid installation',
      ],
      interior: [
        '1-bedroom configuration with open-plan living and kitchen',
        'Fully fitted bathroom with vanity, toilet and shower',
        '18mm magnesium oxide subfloor with 2-4mm durable PVC/SPC finish',
      ],
      windows: [
        'Aluminium-framed windows and sliding doors with double glazing',
        'Acoustic performance, flyscreens, and secure auto-locking system',
      ],
      electrical: [
        'Fully pre-wired and pre-plumbed',
        'Designed to meet AU/NZS standards',
      ],
    },
    floorplan: 'https://cdn.prod.website-files.com/66e8e57dc70ce836ff114e50/69def32cd05274044d9e45f7_20ft%20print.png',
    options: [
      { id: 'gutter', label: 'Gutter System', price: 720 },
      { id: 'decking', label: '2m Decking', price: 2500 },
      { id: 'trailer', label: 'Custom Trailer', price: 14000 },
      { id: 'ac', label: 'Air Conditioning', price: 1050 },
      { id: 'hotWater', label: 'Hot Water System', price: 590 },
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
    price: 54500,
    priceLabel: '$54,500',
    priceNote: 'Excludes GST, delivery & site works',
    idealFor: 'A couple, an overseer, or guest accommodation — balancing compact living with room to move. Separate bedroom capability allows for privacy.',
    keyFeatures: [
      'Front double panel lockable entry door',
      'Crime safe tested lockable stainless steel security door',
      'Double panel lockable windows with stainless steel screens',
      'Wet/Dry bathroom with non-slip tiled flooring',
      'Integrated toilet & vanity with faced-level storage',
      'Non-slip waterproof shower with hand-held shower head',
      'Integrated ventilation fan',
      'LED soft shell ceiling lights',
      'PVC floor sites',
      'Sunshade canopy over entry',
      'E-Tint glazing for improved energy efficiency',
      'Oversized 1125mm windows for more natural light',
      'Premium SPC flooring throughout the home',
      'Integrated modern ceiling lighting system',
      'Truss gable roof for improved insulation and drainage',
      'Upgraded exterior cladding options and colour finishes',
    ],
    specifications: {
      structure: [
        'Approx. Area: 58m²',
        'High-strength expandable modular steel frame',
        'Foldable design for efficient transport and rapid installation',
      ],
      interior: [
        '2-bedroom configuration with open-plan living and kitchen',
        'Fully fitted bathroom with vanity, toilet and shower',
        '18mm magnesium oxide subfloor with 2-4mm durable PVC/SPC finish',
      ],
      windows: [
        'Aluminium-framed windows and sliding doors with double glazing',
        'Acoustic performance, flyscreens, and secure auto-locking system',
      ],
      electrical: [
        'Fully pre-wired and pre-plumbed',
        'Designed to meet AU/NZS standards',
      ],
    },
    floorplan: 'https://cdn.prod.website-files.com/66e8e57dc70ce836ff114e50/69c5cba1b2600b65bc97cd95_30ft%202%20bed%20print.png',
    options: [
      { id: 'gutter', label: 'Gutter System', price: 960 },
      { id: 'decking', label: '3m Decking', price: 3300 },
      { id: 'trailer', label: 'Custom Trailer', price: 18000 },
      { id: 'ac', label: 'Air Conditioning', price: 1050 },
      { id: 'hotWater', label: 'Hot Water System', price: 590 },
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
    price: 58000,
    priceLabel: '$58,000',
    priceNote: 'Excludes GST, delivery & site works',
    idealFor: 'Extended family, permanent independent living, or dual-occupancy — a proper home with room to breathe. Includes defined spaces for living and dining.',
    keyFeatures: [
      'Front double panel lockable entry door',
      'Crime safe tested lockable stainless steel security door',
      'Double panel lockable windows with stainless steel screens',
      'Wet/Dry bathroom with non-slip tiled flooring',
      'Integrated toilet & vanity with faced-level storage',
      'Non-slip waterproof shower with hand-held shower head',
      'Integrated ventilation fan',
      'LED soft shell ceiling lights',
      'PVC floor sites',
      'Sunshade canopy over entry',
      'E-Tint glazing for improved energy efficiency',
      'Oversized 1125mm windows for more natural light',
      'Premium SPC flooring throughout the home',
      'Integrated modern ceiling lighting system',
      'Truss gable roof for improved insulation and drainage',
      'Upgraded exterior cladding options and colour finishes',
    ],
    specifications: {
      structure: [
        'Approx. Area: 76m²',
        'High-strength expandable modular steel frame',
        'Foldable design for efficient transport and rapid installation',
      ],
      interior: [
        '3-bedroom configuration with open-plan living and kitchen',
        'Fully fitted bathroom with vanity, toilet and shower',
        '18mm magnesium oxide subfloor with 2-4mm durable PVC/SPC finish',
      ],
      windows: [
        'Aluminium-framed windows and sliding doors with double glazing',
        'Acoustic performance, flyscreens, and secure auto-locking system',
      ],
      electrical: [
        'Fully pre-wired and pre-plumbed',
        'Designed to meet AU/NZS standards',
      ],
    },
    floorplan: 'https://cdn.prod.website-files.com/66e8e57dc70ce836ff114e50/69e17bdc62e693765afa71ec_40ft%203%20bed%20print%201.png',
    options: [
      { id: 'gutter', label: 'Gutter System', price: 1200 },
      { id: 'decking', label: '3m Decking', price: 3300 },
      { id: 'trailer', label: 'Custom Trailer', price: 20000 },
      { id: 'ac', label: 'Air Conditioning', price: 1050 },
      { id: 'hotWater', label: 'Hot Water System', price: 590 },
    ],
  },
]

function formatPrice(n) {
  return '$' + n.toLocaleString('en-AU')
}

export default function ModularHomes() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState({})

  const toggleOption = (product, optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [product]: {
        ...prev[product],
        [optionId]: !(prev[product]?.[optionId] || false),
      },
    }))
  }

  const getTotal = (product) => {
    const base = product.price
    const extras = product.options.reduce((sum, opt) => {
      if (selectedOptions[product.id]?.[opt.id]) {
        return sum + opt.price
      }
      return sum
    }, 0)
    return base + extras
  }

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
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

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

                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-primary uppercase tracking-wide leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{product.tagline}</p>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl font-heading font-bold text-accent">{product.priceLabel}</span>
                    <span className="text-[10px] text-gray-400">*</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5">{product.priceNote}</p>

                  <ul className="mt-4 space-y-1.5">
                    {product.keyFeatures.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedProduct(product)
                      setSelectedOptions((prev) => ({
                        ...prev,
                        [product.id]: {},
                      }))
                    }}
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

          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="fixed top-6 right-6 z-[60] w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Image header */}
            <div className="relative h-56 sm:h-72 overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 sm:left-8">
                <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide drop-shadow-lg">
                  {selectedProduct.name}
                </h2>
                <p className="text-white/70 text-sm mt-1 max-w-lg">{selectedProduct.idealFor}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Specs & Price row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="grid grid-cols-4 gap-4 bg-gray-50 rounded-xl p-4 flex-1 max-w-lg">
                  {selectedProduct.specs.map((spec) => (
                    <div key={spec.label} className="flex flex-col items-center gap-1">
                      <spec.icon size={20} className="text-accent" />
                      <span className="text-xs text-gray-500 font-medium">{spec.label}</span>
                    </div>
                  ))}
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-3xl font-heading font-bold text-accent">{selectedProduct.priceLabel}</p>
                  <p className="text-[10px] text-gray-400">{selectedProduct.priceNote}</p>
                  <p className="text-[10px] text-gray-400 mt-1">Finance Available — Flexible options</p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {selectedProduct.keyFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floorplan & Specifications */}
              <div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">
                  Floorplan & Specifications
                </h3>
                <p className="text-sm text-gray-500 mb-4">Understand the layout and key specifications before you build.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Floorplan image */}
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                    <img
                      src={selectedProduct.floorplan}
                      alt="Floorplan"
                      className="w-full max-w-sm object-contain"
                    />
                  </div>

                  {/* Specs text */}
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-heading font-bold text-primary uppercase text-sm mb-1">Structure</h4>
                      {selectedProduct.specifications.structure.map((s) => (
                        <p key={s} className="text-gray-600">{s}</p>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary uppercase text-sm mb-1">Interior</h4>
                      {selectedProduct.specifications.interior.map((s) => (
                        <p key={s} className="text-gray-600">{s}</p>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary uppercase text-sm mb-1">Windows & Doors</h4>
                      {selectedProduct.specifications.windows.map((s) => (
                        <p key={s} className="text-gray-600">{s}</p>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary uppercase text-sm mb-1">Electrical & Compliance</h4>
                      {selectedProduct.specifications.electrical.map((s) => (
                        <p key={s} className="text-gray-600">{s}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional Extras Builder */}
              <div>
                <h3 className="font-heading font-bold text-xl text-primary mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">
                  Build Your Package — Optional Extras
                </h3>
                <p className="text-sm text-gray-500 mb-4">Select additional options to customise your home.</p>
                <div className="space-y-3 max-w-lg">
                  {selectedProduct.options.map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedOptions[selectedProduct.id]?.[opt.id]
                          ? 'border-accent bg-accent/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                            selectedOptions[selectedProduct.id]?.[opt.id]
                              ? 'bg-accent border-accent'
                              : 'border-gray-300'
                          }`}
                        >
                          {selectedOptions[selectedProduct.id]?.[opt.id] && (
                            <Check size={12} className="text-white" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{opt.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-accent">{formatPrice(opt.price)}</span>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedOptions[selectedProduct.id]?.[opt.id] || false}
                        onChange={() => toggleOption(selectedProduct.id, opt.id)}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Total + CTA */}
              <div className="bg-gray-50 rounded-xl p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Estimated Total</p>
                    <p className="text-3xl sm:text-4xl font-heading font-bold text-accent">
                      {formatPrice(getTotal(selectedProduct))}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Excludes GST, delivery & site works</p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="w-full sm:w-auto text-center bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-3.5 rounded-xl transition-all text-sm uppercase tracking-wider"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}