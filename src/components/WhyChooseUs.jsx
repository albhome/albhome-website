import { Shield, Clock, DollarSign, Wrench, Award, Headphones } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Australian Standards Compliance',
    desc: 'All our work meets or exceeds Australian building standards and regulations for complete peace of mind.',
  },
  {
    icon: Clock,
    title: 'Rapid Installation & Delivery',
    desc: 'Streamlined processes and efficient project management ensure your build is completed on time, every time.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Solutions',
    desc: 'Competitive pricing with transparent quotes and no hidden costs. Quality outcomes that respect your budget.',
  },
  {
    icon: Wrench,
    title: 'Quality Craftsmanship',
    desc: 'Experienced tradespeople and premium materials deliver exceptional results that stand the test of time.',
  },
  {
    icon: Award,
    title: 'End-to-End Project Management',
    desc: 'From initial consultation to final handover, we manage every detail so you can relax and enjoy the process.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Customer Support',
    desc: 'Clear communication throughout your project with a dedicated team ready to answer your questions.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">
            <Shield size={14} />
            Why Alb Home
          </span>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Why Choose Alb Home?
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4 text-lg">
            We deliver exceptional building solutions backed by experience, quality, and genuine care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">{item.title}</h3>
                  <p className="text-white/50 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}