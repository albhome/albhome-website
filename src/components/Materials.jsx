import { ArrowRight, Columns, Wrench, Layers } from 'lucide-react'

const materials = [
  {
    icon: Columns,
    title: 'Cladding',
    desc: 'Premium exterior cladding options including Colorbond steel, weatherboard, and James Hardie materials for durability and style.',
  },
  {
    icon: Layers,
    title: 'Decking',
    desc: 'High-quality hardwood and composite decking solutions that extend your living space outdoors with elegance and longevity.',
  },
  {
    icon: Wrench,
    title: 'Tiling & Flooring',
    desc: 'Professional-grade tiling and flooring options from leading Australian suppliers, suited to every room and lifestyle.',
  },
]

export default function Materials() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Premium Materials</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Quality Materials & Finishes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            We source only the finest materials to ensure your home stands the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <item.icon size={26} />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">{item.title}</h3>
              <p className="text-gray-500 mt-3 leading-relaxed">{item.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-accent-dark text-sm font-semibold mt-4 group/link"
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