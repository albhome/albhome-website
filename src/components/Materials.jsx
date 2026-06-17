import { Columns, Wrench, Layers, Shield } from 'lucide-react'

const materials = [
  {
    icon: Columns,
    title: 'Structural Steel',
    desc: 'High-grade structural steel framing and components offering superior strength, durability, and termite resistance for long-lasting buildings.',
  },
  {
    icon: Wrench,
    title: 'Timber',
    desc: 'Premium timber framing and finishes sourced from sustainable Australian suppliers, providing natural beauty and structural integrity.',
  },
  {
    icon: Shield,
    title: 'Insulation & Wall Systems',
    desc: 'Advanced insulation solutions and wall systems designed for energy efficiency, sound reduction, and year-round comfort.',
  },
  {
    icon: Layers,
    title: 'Hardware & Accessories',
    desc: 'Quality hardware and accessories from leading brands, ensuring every detail of your build meets the highest standards.',
  },
]

export default function Materials() {
  return (
    <section id="materials" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">Building Materials</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Quality Materials
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            We source only the finest materials to ensure your project stands the test of time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {materials.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <item.icon size={26} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary">{item.title}</h3>
                  <p className="text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}