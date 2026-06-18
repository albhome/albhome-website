import { Home, Zap, Building2, ChevronRight } from 'lucide-react'

const structuralOptions = [
  {
    title: 'Timber Frame',
    subtitle: 'Modular System',
    color: 'bg-emerald-700',
    iconBg: 'bg-emerald-600',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&q=80',
    features: [
      'Excellent thermal insulation',
      'Fast and efficient installation',
      'Eco-friendly modern design',
      'Ideal for homes and lifestyle projects',
    ],
  },
  {
    title: 'Light Steel',
    subtitle: 'Structure System',
    color: 'bg-blue-800',
    iconBg: 'bg-blue-700',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1590674899484-d5640d7d0550?w=600&q=80',
    features: [
      'Strong and durable structure',
      'Excellent wind resistance',
      'Suitable for residential & commercial use',
      'Long-lasting performance',
    ],
  },
  {
    title: 'Aluminium',
    subtitle: 'Modular System',
    color: 'bg-slate-600',
    iconBg: 'bg-slate-500',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    features: [
      'Lightweight and corrosion resistant',
      'Ideal for coastal environments',
      'Modern architectural appearance',
      'Premium modular building solution',
    ],
  },
]

export default function Materials() {
  return (
    <section id="materials" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-badge">Our Systems</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 uppercase tracking-wide">
            Multiple Structural Options
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Choose the right system for your project — each built to high Australian standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {structuralOptions.map((opt) => (
            <div
              key={opt.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Header with color */}
              <div className={`${opt.color} px-5 py-4`}>
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider leading-tight">
                  {opt.title}
                  <br />
                  {opt.subtitle}
                </h3>
              </div>

              {/* Building image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={opt.image}
                  alt={opt.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Features list */}
              <div className="flex-1 px-5 py-5">
                <ul className="space-y-2.5">
                  {opt.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="text-accent mt-0.5 flex-shrink-0">
                        <ChevronRight size={14} />
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom icon */}
              <div className="px-5 pb-5">
                <div className={`w-12 h-12 rounded-lg ${opt.iconBg} flex items-center justify-center`}>
                  <opt.icon size={22} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}