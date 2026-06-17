import { Building2, CookingPot, Bath, Shirt, GanttChartSquare, Briefcase } from 'lucide-react'

const solutions = [
  {
    icon: Building2,
    title: 'Modular Housing',
    desc: 'Fully customizable modular homes built to Australian standards. Designed for comfort, energy efficiency, and rapid on-site assembly.',
  },
  {
    icon: CookingPot,
    title: 'Kitchens',
    desc: 'Premium kitchen design and installation with custom cabinetry, quality benchtops, and modern appliances for the heart of your home.',
  },
  {
    icon: Bath,
    title: 'Bathrooms',
    desc: 'Complete bathroom solutions including design, waterproofing, tiling, and premium fixture installation for a flawless finish.',
  },
  {
    icon: Shirt,
    title: 'Laundries',
    desc: 'Functional and stylish laundry room designs with custom storage, benchtops, and efficient layout planning.',
  },
  {
    icon: GanttChartSquare,
    title: 'Structural Steel',
    desc: 'High-quality structural steel fabrication and installation for residential and commercial building projects.',
  },
  {
    icon: Briefcase,
    title: 'Commercial Building',
    desc: 'Full-service commercial construction solutions from site assessment to project delivery, meeting all regulatory requirements.',
  },
]

export default function BuildingSolutions() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">What We Offer</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Building Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Comprehensive modular and residential building services across Western Australia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group bg-surface rounded-xl p-6 hover:bg-accent hover:text-white transition-all duration-300 border border-gray-100 hover:border-accent"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed group-hover:text-white/80 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}