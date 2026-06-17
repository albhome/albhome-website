import { ArrowRight, Home, Expand, Sun, Package } from 'lucide-react'

const homeTypes = [
  {
    icon: Home,
    title: 'Modular Homes',
    desc: 'Fully customizable modular homes designed to your exact specifications. Built off-site and delivered ready to enjoy.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    icon: Expand,
    title: 'Expandable Homes',
    desc: 'Innovative expandable living solutions that grow with your needs. Perfect for flexible, affordable housing.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    icon: Sun,
    title: 'Off-Grid Homes',
    desc: 'Self-sufficient living solutions with solar integration and sustainable systems for remote or eco-conscious living.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
  },
  {
    icon: Package,
    title: 'Accessories',
    desc: 'Complete your setup with our range of premium accessories including decking, awnings, and storage solutions.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  },
]

export default function ModularHomes() {
  return (
    <section id="modular-homes" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">
            <Home size={14} />
            Our Homes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Premium Living Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            From compact expandable units to spacious modular designs, find the perfect home for your lifestyle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeTypes.map((item, idx) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-accent/90 text-primary p-2 rounded-lg">
                  <item.icon size={20} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-primary">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-accent-dark text-sm font-semibold mt-4 group/link"
                >
                  View More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}