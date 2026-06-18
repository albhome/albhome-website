import { ArrowRight } from 'lucide-react'

const materials = [
  {
    title: 'Structural Steel',
    desc: 'High-grade structural steel framing and components offering superior strength, durability, and termite resistance for long-lasting buildings.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56bd286?w=400&q=80',
  },
  {
    title: 'Timber',
    desc: 'Premium timber framing and finishes sourced from sustainable Australian suppliers, providing natural beauty and structural integrity.',
    image: 'https://images.unsplash.com/photo-1513094735237-8f8f64505f1e?w=400&q=80',
  },
  {
    title: 'Insulation & Cladding',
    desc: 'Advanced insulation solutions and cladding systems designed for energy efficiency, sound reduction, and year-round comfort.',
    image: 'https://images.unsplash.com/photo-1590767958814-3915a608d332?w=400&q=80',
  },
]

export default function Materials() {
  return (
    <section id="materials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">Materials</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 uppercase">
            Premium Materials
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            We source only the finest materials to ensure your project stands the test of time.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {materials.map((item) => (
            <div
              key={item.title}
              className="group text-center"
            >
              {/* Circular image */}
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gray-100 group-hover:border-accent/30 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm mt-4 group/link"
              >
                Read More
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}