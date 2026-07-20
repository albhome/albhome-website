import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Check, Shield, Thermometer, Wind, Weight, Droplets, Home, Zap, Building2, Ruler } from 'lucide-react'

const systemsData = {
  'timber-frame': {
    id: 'timber-frame',
    slug: 'timber-frame',
    name: 'Timber Frame',
    tagline: 'Classic, Sustainable, Cost-Effective',
    heroBg: 'bg-emerald-700',
    accent: 'emerald',
    icon: Home,
    description: 'A traditional, cost-effective building method using sustainably sourced timber. Timber frame construction offers excellent natural insulation properties and is ideal for residential projects across Western Australia.',
    overview: [
      'Timber frame construction is one of Australia\'s most trusted building methods. At ALB Home, we use high-grade, sustainably sourced timber to create structurally sound, energy-efficient homes and accessory dwelling units (ADUs).',
      'Our timber frame systems are precision-engineered in our facility supplied in flat-pack form for easy transport, and can be assembled on-site in days — not weeks. The LUNA series of granny flats and compact homes are a perfect example, offering 57–59m² of smartly designed living space in a 20ft (6m) footprint.',
      'With proper treatment and maintenance, timber frame homes offer exceptional longevity, natural warmth, and a lower carbon footprint — all at the most affordable price point of our three structural systems.',
    ],
    keyFeatures: [
      'Excellent natural thermal insulation — keeps homes cooler in summer and warmer in winter',
      'Sustainably sourced Australian timber — environmentally responsible choice',
      'Cost-effective — most affordable structural option, starting at $2,000 less than steel',
      'Fast installation — precision-engineered panels for quick on-site assembly',
      'Design flexibility — easily modified for custom layouts and future renovations',
      'Natural aesthetic — warm, character-filled finish that suits any style',
    ],
    applications: [
      'Primary residences — permanent family homes',
      'Granny flats and secondary dwellings',
      'Worker accommodation in low-risk environments',
      'Holiday retreats and weekenders',
      'Budget-conscious projects without compromising quality',
    ],
    floorplans: [
      {
        name: 'LUNA I — 1 Bed + Study',
        slug: 'luna-i',
        area: '58.21m²',
        bedrooms: 1,
        external: { length: '12,600mm', width: '4,910mm' },
        wallHeight: '2,700mm',
        roofType: 'Flat roof',
        rooms: [
          { label: 'Living & Kitchen', dim: '5,490 × 3,760mm', area: '20.6m²' },
          { label: 'Bedroom', dim: '3,200 × 2,780mm', area: '8.90m²' },
          { label: 'WC', dim: '1,520 × 1,100mm', area: '1.68m²' },
        ],
        features: [
          'Fully insulated external walls', 'Double-glazed windows', 'Pre-wired for solar ready',
          'Internal wall lining — 9mm MGO board', 'External cladding — weatherboard finish',
          'Aluminium entry door with security screen',
        ],
        images: [
          '/floorplans/luna-i-photo-1.png',
          '/floorplans/luna-i-interior.png',
        ],
      },
      {
        name: 'LUNA II — 2 Bedroom',
        slug: 'luna-ii',
        area: '59.13m²',
        bedrooms: 2,
        external: { length: '11,340mm', width: '5,040mm' },
        wallHeight: '2,700mm',
        roofType: 'Flat roof',
        rooms: [
          { label: 'Bedroom 1', dim: '3,400 × 5,040mm', area: '17.1m²' },
          { label: 'Bedroom 2', dim: '5,600 × 2,800mm', area: '15.7m²' },
          { label: 'Living / Dining', dim: '3,500 × 2,240mm', area: '7.84m²' },
          { label: 'Kitchen', dim: '2,760 × 2,240mm', area: '6.18m²' },
          { label: 'WC / Shower', dim: '1,680 × 2,240mm', area: '3.76m²' },
        ],
        features: [
          'Fully insulated external walls', 'Double-glazed windows', 'Pre-wired for solar ready',
          'Internal wall lining — 9mm MGO board', 'External cladding — weatherboard finish',
          'Aluminium entry door with security screen',
        ],
        images: [
          '/floorplans/luna-ii-exterior.png',
          '/floorplans/luna-ii-interior.png',
        ],
      },
      {
        name: 'LUNA III — 4 Bedroom',
        slug: 'luna-iii',
        area: '57.50m²',
        bedrooms: 4,
        external: { length: '9,380mm', width: '5,580mm' },
        wallHeight: '2,700mm',
        roofType: 'Flat roof',
        rooms: [
          { label: 'Bedroom 1', dim: '2,900 × 2,830mm', area: '8.20m²' },
          { label: 'Bedroom 2', dim: '1,790 × 2,830mm', area: '5.06m²' },
          { label: 'Bedroom 3', dim: '1,790 × 2,830mm', area: '5.06m²' },
          { label: 'Bedroom 4', dim: '2,900 × 2,830mm', area: '8.20m²' },
          { label: 'Bathroom', dim: '1,790 × 1,000mm', area: '1.79m²' },
          { label: 'Bathroom', dim: '2,920 × 1,000mm', area: '2.92m²' },
          { label: 'WC', dim: '1,790 × 1,000mm', area: '1.79m²' },
          { label: 'Kitchen', dim: '4,690 × 1,750mm', area: '8.20m²' },
          { label: 'Living', dim: '4,710 × 1,750mm', area: '8.24m²' },
        ],
        features: [
          'Fully insulated external walls', 'Double-glazed windows', 'Pre-wired for solar ready',
          'Internal wall lining — 9mm MGO board', 'External cladding — weatherboard finish',
          'Aluminium entry door with security screen',
        ],
        images: [
          '/floorplans/luna-iii-photo-1.png',
          '/floorplans/luna-iii-photo-2.png',
        ],
      },
      {
        name: 'LUNA IV — 3 Bedroom',
        slug: 'luna-iv',
        area: '59.48m²',
        bedrooms: 3,
        external: { length: '12,600mm', width: '4,910mm' },
        wallHeight: '2,700mm',
        roofType: 'Flat roof',
        rooms: [
          { label: 'Living & Kitchen', dim: '5,490 × 3,680mm', area: '20.2m²' },
          { label: 'Bedroom 1', dim: '3,420 × 2,930mm', area: '10.0m²' },
          { label: 'Bedroom 2', dim: '2,800 × 2,680mm', area: '7.50m²' },
          { label: 'Bedroom 3', dim: '2,800 × 2,680mm', area: '7.50m²' },
          { label: 'Bathroom', dim: '2,200 × 1,800mm', area: '3.96m²' },
        ],
        features: [
          'Fully insulated external walls', 'Double-glazed windows', 'Pre-wired for solar ready',
          'Internal wall lining — 9mm MGO board', 'External cladding — weatherboard finish',
          'Aluminium entry door with security screen',
        ],
        images: [
          '/floorplans/luna-iv-exterior.png',
          '/floorplans/luna-iv-interior.png',
        ],
      },
      {
        name: 'LUNA V — 1 Bed + Large Living',
        slug: 'luna-v',
        area: '59.44m²',
        bedrooms: 1,
        external: { length: '12,600mm', width: '4,910mm' },
        wallHeight: '2,700mm',
        roofType: 'Flat roof',
        rooms: [
          { label: 'Living & Kitchen', dim: '6,580 × 3,420mm', area: '22.5m²' },
          { label: 'Bedroom 1 + WIR', dim: '3,420 × 3,240mm', area: '11.1m²' },
          { label: 'Walk-in Robe', dim: '1,800 × 1,200mm', area: '2.16m²' },
          { label: 'Bathroom', dim: '2,200 × 1,800mm', area: '3.96m²' },
          { label: 'Laundry', dim: '1,600 × 1,200mm', area: '1.92m²' },
        ],
        features: [
          'Fully insulated external walls', 'Double-glazed windows', 'Pre-wired for solar ready',
          'Internal wall lining — 9mm MGO board', 'External cladding — weatherboard finish',
          'Aluminium entry door with security screen',
        ],
        images: [
          '/floorplans/luna-v-exterior.png',
          '/floorplans/luna-v-bedroom.png',
        ],
      },
      {
        name: 'LUNA VI — 2 Bed + WIR',
        slug: 'luna-vi',
        area: '58.50m²',
        bedrooms: 2,
        external: { length: '12,600mm', width: '4,910mm' },
        wallHeight: '2,700mm',
        roofType: 'Flat roof',
        rooms: [
          { label: 'Living & Kitchen', dim: '5,490 × 3,680mm', area: '20.2m²' },
          { label: 'Bedroom 1 + WIR', dim: '3,420 × 2,930mm', area: '10.0m²' },
          { label: 'Walk-in Robe', dim: '1,800 × 1,200mm', area: '2.16m²' },
          { label: 'Bedroom 2', dim: '2,800 × 2,560mm', area: '7.17m²' },
          { label: 'Bathroom', dim: '2,200 × 1,800mm', area: '3.96m²' },
        ],
        features: [
          'Fully insulated external walls', 'Double-glazed windows', 'Pre-wired for solar ready',
          'Internal wall lining — 9mm MGO board', 'External cladding — weatherboard finish',
          'Aluminium entry door with security screen',
        ],
        images: [
          '/luna-vi-render.png',
        ],
      },
    ],
    specs: [
      { icon: Shield, label: 'Fire Rating', value: 'Good (with fire-retardant treatment)' },
      { icon: Thermometer, label: 'Thermal Insulation', value: 'Excellent — R-value up to 4.5' },
      { icon: Wind, label: 'Wind Resistance', value: 'Suitable for wind regions N1–N2' },
      { icon: Weight, label: 'Weight', value: 'Moderate — approx. 8–10 tonnes (40ft)' },
      { icon: Droplets, label: 'Moisture / Termite', value: 'Requires treatment and proper ventilation' },
      { icon: Ruler, label: 'Lifespan', value: '50+ years with proper maintenance' },
    ],
    image: '/luna-render.png',
    gallery: [
      '/luna-render.png',
      '/luna-i-render.png',
      '/luna-ii-render.png',
      '/luna-iii-render.png',
    ],
  },
  'light-steel': {
    id: 'light-steel',
    slug: 'light-steel',
    name: 'Light Steel',
    tagline: 'Strong, Durable, Termite-Proof',
    heroBg: 'bg-blue-800',
    accent: 'blue',
    icon: Zap,
    description: 'High-strength galvanised steel framing that delivers superior durability, termite resistance, and dimensional stability. The ideal choice for permanent homes and commercial applications.',
    overview: [
      'Light steel frame construction uses cold-formed galvanised steel sections to create a strong, lightweight structural framework. This method is increasingly popular in Australian modular construction for its precision and durability.',
      'ALB Home uses high-tensile galvanised steel that is 100% termite-proof, fire-resistant, and dimensionally stable — it won\'t warp, shrink, or twist over time.',
      'Steel is also 100% recyclable, making it an environmentally responsible choice. Our steel frames are precision-manufactured in our facility for perfect fit and fast on-site assembly.',
    ],
    keyFeatures: [
      'Termite-proof — naturally resistant, no chemical treatment needed',
      'Superior fire resistance — non-combustible material',
      'Dimensional stability — won\'t warp, shrink, or twist',
      'High strength-to-weight ratio — strong yet lightweight',
      'Precision-engineered — CNC-cut for perfect fit, no on-site cutting',
      '100% recyclable — environmentally sustainable choice',
    ],
    applications: [
      'Permanent family homes — long-term durability',
      'Commercial buildings — offices, retail, accommodation',
      'High-wind areas — excellent structural performance',
      'Remote locations — durable during transport',
      'Mining and industrial accommodation',
    ],
    specs: [
      { icon: Shield, label: 'Fire Rating', value: 'Excellent — non-combustible (A1)' },
      { icon: Thermometer, label: 'Thermal Insulation', value: 'Good (with insulation — R-value 3.5+)' },
      { icon: Wind, label: 'Wind Resistance', value: 'Suitable for wind regions N1–N4' },
      { icon: Weight, label: 'Weight', value: 'Light — approx. 6–8 tonnes (40ft)' },
      { icon: Droplets, label: 'Moisture / Termite', value: 'Naturally resistant — no treatment needed' },
      { icon: Ruler, label: 'Lifespan', value: '100+ years with minimal maintenance' },
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    ],
  },
  aluminium: {
    id: 'aluminium',
    slug: 'aluminium',
    name: 'Aluminium',
    tagline: 'Ultra-Lightweight, Corrosion-Resistant, Premium',
    heroBg: 'bg-slate-600',
    accent: 'slate',
    icon: Building2,
    description: 'Premium aluminium construction offering exceptional corrosion resistance and ultra-lightweight performance. Perfect for coastal environments and modern architectural designs.',
    overview: [
      'Aluminium frame construction represents the premium tier of modular building. Its unique combination of ultra-lightweight strength and natural corrosion resistance makes it ideal for challenging environments.',
      'ALB Home\'s aluminium systems are fabricated from high-grade marine-grade aluminium alloys, ensuring decades of maintenance-free performance even in the harshest Australian conditions.',
      'The lightweight nature of aluminium reduces transport costs and enables installation in locations with limited access. It\'s the preferred choice for coastal properties, remote island locations, and premium architectural projects.',
    ],
    keyFeatures: [
      'Corrosion-resistant — ideal for coastal and marine environments',
      'Ultra-lightweight — reduces transport costs and enables challenging installations',
      'Zero maintenance — no painting, treating, or sealing required',
      'Modern aesthetic — clean lines suited to contemporary architecture',
      'Fire-resistant — non-combustible material',
      'Fully recyclable — 100% sustainable at end of life',
    ],
    applications: [
      'Coastal properties — corrosion resistance in salt-air environments',
      'Premium architectural homes — modern, high-end designs',
      'Remote or difficult-access locations — ultra-lightweight transport',
      'Island and marine installations',
      'High-end commercial developments',
    ],
    specs: [
      { icon: Shield, label: 'Fire Rating', value: 'Excellent — non-combustible (A1)' },
      { icon: Thermometer, label: 'Thermal Insulation', value: 'Good (with insulation — R-value 3.5+)' },
      { icon: Wind, label: 'Wind Resistance', value: 'Suitable for wind regions N1–N4' },
      { icon: Weight, label: 'Weight', value: 'Lightest — approx. 5–6 tonnes (40ft)' },
      { icon: Droplets, label: 'Moisture / Corrosion', value: 'Naturally corrosion-resistant — ideal coastal choice' },
      { icon: Ruler, label: 'Lifespan', value: '100+ years with zero maintenance' },
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    ],
  },
}

export default function SystemPage() {
  const { system } = useParams()
  const data = systemsData[system]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-primary mb-4">System Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    )
  }

  const Icon = data.icon

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Hero Banner ===== */}
      <div className={`relative min-h-[320px] sm:min-h-[400px] overflow-hidden ${data.heroBg}`}>
        <img
          src={data.image}
          alt={data.name}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className={`w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5`}>
              <Icon size={28} className="text-white" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
              {data.name}
            </h1>
            <p className="text-white/70 text-base sm:text-lg mt-3 max-w-xl">{data.tagline}</p>
            <p className="text-white/60 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">{data.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-3.5 rounded-xl transition-all text-sm uppercase tracking-wider"
              >
                Get a Quote
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-accent hover:text-accent px-8 py-3.5 rounded-xl transition-all text-sm uppercase tracking-wider"
              >
                View Our Homes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Overview ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">Overview</h2>
          </div>
          <div className="max-w-3xl space-y-4">
            {data.overview.map((p, i) => (
              <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">Key Features</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {data.keyFeatures.map((f) => (
              <div key={f} className="flex items-start gap-3 text-sm text-gray-700 bg-white rounded-xl p-4 border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={13} className="text-accent" />
                </div>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Technical Specs ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">Technical Specifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {data.specs.map((spec) => (
              <div key={spec.label} className="bg-surface rounded-xl p-5 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <spec.icon size={16} className="text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{spec.label}</span>
                </div>
                <p className="text-sm font-semibold text-primary">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Applications ===== */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">Best Applications</h2>
          </div>
          <p className="text-gray-500 mb-8">Where {data.name} construction excels:</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.applications.map((app) => (
              <div key={app} className="flex items-start gap-3 text-sm text-gray-700 bg-white rounded-xl p-4 border border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Floor Plans (Timber Frame only) ===== */}
      {data.floorplans && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-accent rounded-full" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">Standard Floor Plans</h2>
            </div>
            <p className="text-gray-500 mb-2">Our timber frame accessory dwelling units (LUNA series) are available in a range of configurations — each designed for efficient use of space and practical living within a compact 20ft (6m) footprint.</p>
            <p className="text-gray-400 text-sm mb-8">All models 57–60m² · External: 12,600mm × 4,910mm · Internal wall height: 2,700mm · Flat roof</p>

            <div className="space-y-8">
              {data.floorplans.map((fp) => (
                <div key={fp.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  {/* Header */}
                  <div className="px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">{fp.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-accent/15 text-accent px-2.5 py-0.5 rounded-md">{fp.area}</span>
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-0.5 rounded-md">{fp.bedrooms} Bed</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href="/#contact" className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all whitespace-nowrap">
                        Get a Quote
                      </a>
                    </div>
                  </div>

                  {/* Floor Plan SVG */}
                  <div className="bg-white p-6 sm:p-10 flex items-center justify-center">
                    <img
                      src={`/floorplans/${fp.slug}-plan.png`}
                      alt={`${fp.name} floor plan`}
                      className="w-full h-auto max-w-xl"
                      onError={(e) => { e.target.src = `/floorplans/${fp.slug}.svg`; e.target.onerror = null; }}
                    />
                  </div>

                  {/* Details: Two-column (Capsul style) */}
                  <div className="grid sm:grid-cols-2 gap-0">
                    {/* Left: Building specs + Room table */}
                    <div className="p-6 sm:p-8 border-r border-gray-100">
                      {/* Building specs */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="bg-surface rounded-lg px-3 py-2.5 text-center">
                          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">External</p>
                          <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">{fp.external.length} × {fp.external.width}</p>
                        </div>
                        <div className="bg-surface rounded-lg px-3 py-2.5 text-center">
                          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Wall</p>
                          <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">{fp.wallHeight}</p>
                        </div>
                        <div className="bg-surface rounded-lg px-3 py-2.5 text-center">
                          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Roof</p>
                          <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">{fp.roofType}</p>
                        </div>
                      </div>

                      {/* Room specs — Capsul-style spec table */}
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left pb-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 w-[45%]">Room</th>
                            <th className="text-left pb-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Dimensions</th>
                            <th className="text-right pb-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Area</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fp.rooms.map((room, ri) => (
                            <tr key={room.label} className={ri < fp.rooms.length - 1 ? 'border-b border-gray-100' : ''}>
                              <td className="py-2.5 pr-3 text-sm text-gray-700 font-medium">{room.label}</td>
                              <td className="py-2.5 pr-3 text-sm text-gray-500">{room.dim}</td>
                              <td className="py-2.5 text-right text-sm font-semibold text-primary">{room.area}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Right: Features + Pricing + Gallery */}
                    <div className="p-6 sm:p-8 space-y-6">
                      {/* Features */}
                      <div>
                        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Features</p>
                        <ul className="space-y-2.5">
                          {fp.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Gallery photos */}
                      {fp.images && fp.images.length > 0 && (
                        <div>
                          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">Photos</p>
                          <div className="grid grid-cols-2 gap-2">
                            {fp.images.map((img, gi) => (
                              <div key={gi} className="aspect-[4/3] rounded-lg overflow-hidden bg-surface">
                                <img
                                  src={img}
                                  alt={`${fp.name} ${gi === 0 ? 'render' : 'photo'}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className={`py-16 sm:py-20 ${data.heroBg} text-center`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            Build With {data.name}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Contact us today to discuss your project and get a free quote for your {data.name} home.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-bold px-10 py-4 rounded-xl transition-all text-base uppercase tracking-wider mt-8"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}