import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Bed, Bath, Maximize2, Ruler, Check, ArrowLeft, Home, Wrench, Truck, Shield, Star } from 'lucide-react'

const products = [
  {
    id: '20ft',
    name: 'ALB Home™ 20FT Stockman Classic',
    title: '20FT STOCKMAN CLASSIC 1 BED',
    tagline: 'Compact living, maximum comfort',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
    idealFor: 'Single-person accommodation, worker housing, or a compact on-site living space. Compact and functional, it offers a self-contained solution that is practical and low maintenance.',
    specs: [
      { icon: Bed, label: '1 Bed' },
      { icon: Bath, label: '1 Bath' },
      { icon: Maximize2, label: '38m²' },
      { icon: Ruler, label: '20ft' },
    ],
    price: 32500,
    priceLabel: '$32,500',
    comparePrice: 99999,
    priceNote: 'Excludes GST, delivery & site works',
    financeAvailable: true,
    classicFeatures: [
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
    ],
    estateFeatures: [
      'E-Tint glazing for improved energy efficiency',
      'Oversized 1125mm windows for more natural light',
      'Premium SPC flooring throughout the home',
      'Integrated modern ceiling lighting system',
      'Truss gable roof for improved insulation and drainage',
      'Upgraded exterior cladding options and colour finishes',
      'Optional outdoor decking and canopy for extended living space',
    ],
    specifications: {
      structure: [
        'Approx. Area: 38m²',
        'Available in Timber Frame, Light Steel, or Aluminium construction',
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
    floorplan: '/floorplan-20ft.svg',
    options: [
      { id: 'structure', label: 'Structural System', required: true, choices: [
        { label: 'Timber Frame -$2,000', price: -2000, value: 'timber' },
        { label: 'Light Steel Frame (Standard)', price: 0, value: 'steel' },
        { label: 'Aluminium Frame +$3,000', price: 3000, value: 'aluminium' },
      ]},
      { id: 'gutter', label: 'Gutter System', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Gutter System +$720', price: 720, value: 'yes' }] },
      { id: 'decking', label: 'Decking', choices: [{ label: 'None', price: 0, value: '' }, { label: '2m Decking +$2,500', price: 2500, value: '2m' }, { label: '3m Decking +$3,300', price: 3300, value: '3m' }] },
      { id: 'verandah', label: 'Verandah', choices: [{ label: 'None', price: 0, value: '' }, { label: '2m Verandah +$4,180', price: 4180, value: '2m' }, { label: '3m Verandah +$5,000', price: 5000, value: '3m' }] },
      { id: 'trailer', label: 'Custom Trailer', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Custom Trailer +$14,000', price: 14000, value: 'yes' }] },
      { id: 'ac', label: 'Air Conditioning', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Air Conditioning +$1,050', price: 1050, value: 'yes' }] },
      { id: 'hotWater', label: 'Hot Water System', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Hot Water System +$590', price: 590, value: 'yes' }] },
    ],
    interiorImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    ],
  },
  {
    id: '30ft',
    name: 'ALB Home™ 30FT Outback Classic',
    title: '30FT OUTBACK CLASSIC 2 BED',
    tagline: 'Spacious living with room to move',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
    idealFor: 'A couple, an overseer, or guest accommodation — balancing compact living with room to move. Separate bedroom capability allows for privacy.',
    specs: [
      { icon: Bed, label: '2 Bed' },
      { icon: Bath, label: '1 Bath' },
      { icon: Maximize2, label: '58m²' },
      { icon: Ruler, label: '30ft' },
    ],
    price: 54500,
    priceLabel: '$54,500',
    comparePrice: 129999,
    priceNote: 'Excludes GST, delivery & site works',
    financeAvailable: true,
    classicFeatures: [
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
    ],
    estateFeatures: [
      'E-Tint glazing for improved energy efficiency',
      'Oversized 1125mm windows for more natural light',
      'Premium SPC flooring throughout the home',
      'Integrated modern ceiling lighting system',
      'Truss gable roof for improved insulation and drainage',
      'Upgraded exterior cladding options and colour finishes',
      'Optional outdoor decking and canopy for extended living space',
    ],
    specifications: {
      structure: [
        'Approx. Area: 58m²',
        'Available in Timber Frame, Light Steel, or Aluminium construction',
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
    floorplan: '/floorplan-30ft.svg',
    options: [
      { id: 'structure', label: 'Structural System', required: true, choices: [
        { label: 'Timber Frame -$2,000', price: -2000, value: 'timber' },
        { label: 'Light Steel Frame (Standard)', price: 0, value: 'steel' },
        { label: 'Aluminium Frame +$3,000', price: 3000, value: 'aluminium' },
      ]},
      { id: 'gutter', label: 'Gutter System', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Gutter System +$960', price: 960, value: 'yes' }] },
      { id: 'decking', label: 'Decking', choices: [{ label: 'None', price: 0, value: '' }, { label: '2m Decking +$2,500', price: 2500, value: '2m' }, { label: '3m Decking +$3,300', price: 3300, value: '3m' }] },
      { id: 'verandah', label: 'Verandah', choices: [{ label: 'None', price: 0, value: '' }, { label: '2m Verandah +$4,180', price: 4180, value: '2m' }, { label: '3m Verandah +$5,000', price: 5000, value: '3m' }] },
      { id: 'trailer', label: 'Custom Trailer', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Custom Trailer +$18,000', price: 18000, value: 'yes' }] },
      { id: 'ac', label: 'Air Conditioning', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Air Conditioning +$1,050', price: 1050, value: 'yes' }] },
      { id: 'hotWater', label: 'Hot Water System', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Hot Water System +$590', price: 590, value: 'yes' }] },
    ],
    interiorImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    ],
  },
  {
    id: '40ft',
    name: 'ALB Home™ 40FT Homestead Classic',
    title: '40FT HOMESTEAD CLASSIC 3 BED',
    tagline: 'Premium independent living at its finest',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1400&q=80',
    idealFor: 'Extended family, permanent independent living, or dual-occupancy — a proper home with room to breathe. Includes defined spaces for living and dining.',
    specs: [
      { icon: Bed, label: '3 Bed' },
      { icon: Bath, label: '1 Bath' },
      { icon: Maximize2, label: '76m²' },
      { icon: Ruler, label: '40ft' },
    ],
    price: 58000,
    priceLabel: '$58,000',
    comparePrice: 149999,
    priceNote: 'Excludes GST, delivery & site works',
    financeAvailable: true,
    classicFeatures: [
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
    ],
    estateFeatures: [
      'E-Tint glazing for improved energy efficiency',
      'Oversized 1125mm windows for more natural light',
      'Premium SPC flooring throughout the home',
      'Integrated modern ceiling lighting system',
      'Truss gable roof for improved insulation and drainage',
      'Upgraded exterior cladding options and colour finishes',
      'Optional outdoor decking and canopy for extended living space',
    ],
    specifications: {
      structure: [
        'Approx. Area: 76m²',
        'Available in Timber Frame, Light Steel, or Aluminium construction',
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
    floorplan: '/floorplan-40ft.svg',
    options: [
      { id: 'structure', label: 'Structural System', required: true, choices: [
        { label: 'Timber Frame -$2,000', price: -2000, value: 'timber' },
        { label: 'Light Steel Frame (Standard)', price: 0, value: 'steel' },
        { label: 'Aluminium Frame +$3,000', price: 3000, value: 'aluminium' },
      ]},
      { id: 'gutter', label: 'Gutter System', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Gutter System +$1,200', price: 1200, value: 'yes' }] },
      { id: 'decking', label: 'Decking', choices: [{ label: 'None', price: 0, value: '' }, { label: '2m Decking +$2,500', price: 2500, value: '2m' }, { label: '3m Decking +$3,300', price: 3300, value: '3m' }] },
      { id: 'verandah', label: 'Verandah', choices: [{ label: 'None', price: 0, value: '' }, { label: '2m Verandah +$4,180', price: 4180, value: '2m' }, { label: '3m Verandah +$5,000', price: 5000, value: '3m' }] },
      { id: 'trailer', label: 'Custom Trailer', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Custom Trailer +$20,000', price: 20000, value: 'yes' }] },
      { id: 'ac', label: 'Air Conditioning', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Air Conditioning +$1,050', price: 1050, value: 'yes' }] },
      { id: 'hotWater', label: 'Hot Water System', choices: [{ label: 'None', price: 0, value: '' }, { label: 'Hot Water System +$590', price: 590, value: 'yes' }] },
    ],
    interiorImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    ],
  },
]

function formatPrice(n) {
  return '$' + n.toLocaleString('en-AU')
}

const installationSteps = [
  {
    icon: Home,
    title: 'Select Your Home',
    description: 'Choose from our range of 20FT, 30FT, or 40FT expandable homes. Customise with optional extras to match your needs and budget.',
  },
  {
    icon: Wrench,
    title: 'Prepare Your Site',
    description: 'Ensure your site is level and accessible. Our team can advise on site preparation requirements including slab or stump foundations.',
  },
  {
    icon: Truck,
    title: 'Manufacture & Delivery',
    description: 'Your home is precision-engineered and manufactured in our facility. Delivered directly to your site on a custom trailer for easy setup.',
  },
  {
    icon: Shield,
    title: 'Installation Complete',
    description: 'Your expandable home is unfolded, assembled, and ready for connection to services. Move in and enjoy your new space.',
  },
]

export default function ProductPage() {
  const { productId } = useParams()
  const [selectedOptions, setSelectedOptions] = useState({ structure: 'steel' })

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-primary mb-4">Product Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    )
  }

  const toggleOption = (optionId, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  const getTotal = () => {
    const base = product.price
    const extras = product.options.reduce((sum, opt) => {
      const sel = selectedOptions[opt.id]
      if (!sel) return sum
      const choice = opt.choices.find((c) => c.value === sel)
      return sum + (choice ? choice.price : 0)
    }, 0)
    return base + extras
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* ===== Section 1: Hero Banner ===== */}
      <div className="relative min-h-[420px] sm:min-h-[520px] overflow-hidden bg-neutral-900">
        <img
          src={product.heroImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-accent text-sm mb-6 transition"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Product Info */}
            <div>
              <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                {product.title}
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
                {product.name}
              </h1>

              <p className="text-white/60 text-base sm:text-lg mt-4 max-w-xl leading-relaxed">
                {product.idealFor}
              </p>

              {/* Price Display */}
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-5xl sm:text-6xl font-heading font-bold text-accent">
                  {product.priceLabel}
                </span>
                {product.comparePrice && (
                  <span className="text-2xl text-white/30 line-through">
                    ${product.comparePrice.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-white/40 text-xs mt-1">{product.priceNote}</p>

              {/* Feature Specs Grid */}
              <div className="mt-6 flex flex-wrap gap-3">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2.5 rounded-xl border border-white/10"
                  >
                    <spec.icon size={16} className="text-accent" />
                    <span className="text-sm text-white/80 font-medium">{spec.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA + Finance Badge */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="mailto:service@albhome.com.au"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-3.5 rounded-xl transition-all text-base uppercase tracking-wider"
                >
                  Get a Quote
                </a>
                {product.financeAvailable && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2.5 rounded-xl border border-white/10">
                    <Star size={14} className="text-accent" />
                    <span className="text-xs text-white/70 font-medium">FINANCE AVAILABLE — Flexible options to suit your budget</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="hidden lg:block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 2: Classic Key Features ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">
              Key Features
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.heroImage}
                alt="ALB Home interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {product.classicFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} className="text-accent" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 3: Estate Upgrade Features ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">
              Estate Upgrade Features
            </h2>
          </div>
          <p className="text-gray-500 mb-8 max-w-2xl">
            Includes all Classic features plus upgrades for improved comfort, design, and functionality.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 order-2 lg:order-1">
              {product.estateFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-sm text-gray-700 bg-surface rounded-xl p-4 border border-surface-dark">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} className="text-accent" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                alt="Premium upgrades"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 4: Floorplan & Specifications ===== */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">
              Floorplan & Specifications
            </h2>
          </div>
          <p className="text-gray-500 mb-8">Understand the layout and key specifications before you build.</p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-center">
              <img
                src={product.floorplan}
                alt={`${product.name} Floorplan`}
                className="w-full max-w-md object-contain"
              />
            </div>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, items]) => (
                <div key={key} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-bold text-primary uppercase text-sm mb-3 tracking-wide">
                    {key === 'structure' && 'Structure'}
                    {key === 'interior' && 'Interior'}
                    {key === 'windows' && 'Windows & Doors'}
                    {key === 'electrical' && 'Electrical & Compliance'}
                  </h3>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Installation Method ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">
              Installation Method
            </h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Our experienced modular team guides you through every step, from selecting your home to final installation. We make the process simple and straightforward.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationSteps.map((step, idx) => (
              <div
                key={step.title}
                className="relative bg-surface rounded-2xl p-6 border border-surface-dark text-center group hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <step.icon size={24} className="text-accent" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{idx + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-primary uppercase text-sm tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 6: Interior Gallery ===== */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">
              Interior Showhouse
            </h2>
          </div>
          <p className="text-gray-500 mb-8 max-w-2xl">
            Take a closer look at the interior finishes and layout of your future home.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {product.interiorImages.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Interior view ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 7: Build Your Package ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">
              Choose Your Options
            </h2>
          </div>
          <p className="text-gray-500 mb-8 max-w-2xl">
            Select additional options to customise your {product.name}.
          </p>

          <div className="max-w-2xl space-y-4">
            {product.options.map((opt) => (
              <div
                key={opt.id}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  opt.required
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <label className="flex items-center gap-3 flex-1 cursor-pointer" htmlFor={`opt-${product.id}-${opt.id}`}>
                  <span className="text-sm font-medium text-gray-800 min-w-[140px]">{opt.label}</span>
                  {opt.required && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded-full">Required</span>
                  )}
                </label>
                <select
                  id={`opt-${product.id}-${opt.id}`}
                  value={selectedOptions[opt.id] || (opt.required ? 'steel' : '')}
                  onChange={(e) => toggleOption(opt.id, e.target.value)}
                  className={`text-sm rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent cursor-pointer min-w-[200px] ${
                    opt.required
                      ? 'border-2 border-accent font-semibold'
                      : 'border border-gray-200'
                  }`}
                >
                  {opt.choices.map((choice) => (
                    <option key={choice.value} value={choice.value}>
                      {choice.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Total + CTA */}
          <div className="mt-10 bg-primary rounded-2xl p-8 shadow-lg max-w-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="text-white/60 text-sm">Estimated Total</p>
                <p className="text-4xl sm:text-5xl font-heading font-bold text-accent">
                  {formatPrice(getTotal())}
                </p>
                <p className="text-white/40 text-xs mt-1">Excludes GST, delivery & site works</p>
              </div>
              <a
                href="mailto:service@albhome.com.au"
                className="w-full sm:w-auto text-center bg-accent hover:bg-accent-dark text-primary font-bold px-10 py-4 rounded-xl transition-all text-base uppercase tracking-wider"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}