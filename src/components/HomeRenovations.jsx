import { Wrench, Bath, Shirt, ArrowRight } from 'lucide-react'

const renovationServices = [
  {
    icon: Wrench,
    title: 'Custom Cabinetry',
    desc: 'Tailor-made cabinetry solutions for your kitchen, living areas, and home office. Crafted from premium materials with precision fit and flawless finish.',
  },
  {
    icon: Bath,
    title: 'Bathroom Renovations',
    desc: 'Complete bathroom transformations from design to installation. Modern fixtures, quality tiling, and smart storage solutions for a space you\'ll love.',
  },
  {
    icon: Shirt,
    title: 'Wardrobe Design',
    desc: 'Custom wardrobe and storage solutions designed to maximize your space. Built-in shelving, hanging systems, and organized storage tailored to your needs.',
  },
]

export default function HomeRenovations() {
  return (
    <section id="renovations" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching flyer style */}
        <div className="text-center mb-4">
          <span className="section-badge">Renovations</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary uppercase tracking-wide">
            Home Renovations
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Your trusted partner for high-quality home renovations and custom building solutions in Western Australia.
          </p>
        </div>

        {/* Three service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {renovationServices.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-accent-dark text-sm font-semibold mt-5 group/link"
              >
                Learn More
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}