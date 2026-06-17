import { Building, HardHat, Hammer, TrendingUp } from 'lucide-react'

const audiences = [
  {
    icon: Building,
    title: 'Property Developers',
    desc: 'Streamlined modular solutions for development projects. Faster turnaround times and cost-effective builds that maximise your return on investment.',
  },
  {
    icon: HardHat,
    title: 'Owner Builders',
    desc: 'Expert guidance and quality construction for owner builders. We help bring your vision to life with professional support every step of the way.',
  },
  {
    icon: Hammer,
    title: 'Builders',
    desc: 'Reliable building partner for construction professionals. Quality workmanship, consistent delivery, and strong project collaboration for successful outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Investors',
    desc: 'Smart investment properties built to maximise rental returns and long-term value. Durable construction with low-maintenance design for peace of mind.',
  },
]

export default function IdealFor() {
  return (
    <section className="py-20 sm:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">Who We Serve</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Ideal For
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4 text-lg">
            Tailored building solutions for every type of client and project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 border border-white/5 group"
            >
              <div className="w-16 h-16 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <item.icon size={30} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}