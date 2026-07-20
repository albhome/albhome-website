import { Home, Zap, Building2, Shield, Thermometer, Wind, Weight, Droplets } from 'lucide-react'

const systems = [
  {
    title: 'Timber Frame',
    tag: 'Classic & Sustainable',
    icon: Home,
    iconBg: 'bg-emerald-100 text-emerald-700',
    accent: 'border-emerald-600',
    headerBg: 'bg-emerald-700',
    description: 'A traditional, cost-effective building method using sustainably sourced timber. Offers excellent natural insulation and is ideal for residential projects across WA.',
    specs: [
      { icon: Thermometer, label: 'Thermal Performance', value: 'Excellent' },
      { icon: Weight, label: 'Weight', value: 'Moderate' },
      { icon: Shield, label: 'Fire Rating', value: 'Good (with treatment)' },
      { icon: Droplets, label: 'Termite Resistance', value: 'Requires treatment' },
    ],
    price: 'Most Affordable',
    bestFor: 'Homes, granny flats, budget-conscious projects',
  },
  {
    title: 'Light Steel',
    tag: 'Strong & Durable',
    icon: Zap,
    iconBg: 'bg-blue-100 text-blue-700',
    accent: 'border-blue-700',
    headerBg: 'bg-blue-800',
    description: 'High-strength galvanised steel framing that delivers superior durability, termite resistance, and dimensional stability. Perfect for both residential and commercial applications.',
    specs: [
      { icon: Thermometer, label: 'Thermal Performance', value: 'Good (with insulation)' },
      { icon: Weight, label: 'Weight', value: 'Light' },
      { icon: Shield, label: 'Fire Rating', value: 'Excellent' },
      { icon: Droplets, label: 'Termite Resistance', value: 'Naturally resistant' },
    ],
    price: 'Standard — Included in base price',
    bestFor: 'Permanent homes, commercial, high-wind areas',
  },
  {
    title: 'Aluminium',
    tag: 'Lightweight & Premium',
    icon: Building2,
    iconBg: 'bg-slate-100 text-slate-700',
    accent: 'border-slate-600',
    headerBg: 'bg-slate-600',
    description: 'Premium aluminium construction offering exceptional corrosion resistance and ultra-lightweight performance. Ideal for coastal environments and modern architectural designs.',
    specs: [
      { icon: Thermometer, label: 'Thermal Performance', value: 'Good (with insulation)' },
      { icon: Weight, label: 'Weight', value: 'Lightest' },
      { icon: Shield, label: 'Fire Rating', value: 'Excellent' },
      { icon: Droplets, label: 'Termite Resistance', value: 'Naturally resistant' },
    ],
    price: 'Premium (+$3,000)',
    bestFor: 'Coastal properties, modern designs, remote transport',
  },
]

export default function BuildingSystems() {
  return (
    <section id="building-systems" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">Building Systems</span>
        </div>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 uppercase tracking-wide">
            Choose Your Structural System
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mt-4 text-lg">
            Every ALB Home is available in three structural options — Timber Frame, Light Steel, or Aluminium.
            Select the system that best suits your project, budget, and location.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {systems.map((sys) => (
            <div
              key={sys.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className={`${sys.headerBg} px-6 py-5`}>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-11 h-11 rounded-xl ${sys.iconBg} flex items-center justify-center`}>
                    <sys.icon size={22} />
                  </div>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-wider">{sys.tag}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">{sys.title}</h3>
              </div>

              {/* Description */}
              <div className="px-6 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">{sys.description}</p>
              </div>

              {/* Specs */}
              <div className="px-6 pt-4 space-y-2.5">
                {sys.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <spec.icon size={14} className="text-accent" />
                      <span>{spec.label}</span>
                    </div>
                    <span className="font-semibold text-primary">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="px-6 pt-4 mt-auto">
                <div className={`border-l-4 ${sys.accent} pl-3 py-2`}>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Pricing</p>
                  <p className="text-sm font-bold text-primary">{sys.price}</p>
                </div>
              </div>

              {/* Best for */}
              <div className="px-6 pb-6 pt-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Best For</p>
                <p className="text-xs text-gray-500">{sys.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}