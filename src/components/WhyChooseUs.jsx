import { CheckCircle, Star, RefreshCw, Truck, Heart, MessageCircle, Award, DollarSign } from 'lucide-react'

const benefits = [
  {
    icon: RefreshCw,
    title: 'Refined Through Experience',
    desc: 'Every design iteration improves on the last, drawing from real-world feedback and expert knowledge.',
  },
  {
    icon: Heart,
    title: 'Uncompromising Attention to Detail',
    desc: 'From material selection to final finishing, we maintain the highest standards at every stage.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Our streamlined manufacturing and logistics ensure your home is delivered on time, every time.',
  },
  {
    icon: Star,
    title: 'Designed Around Real Living',
    desc: 'Open-plan layouts, natural light, and smart storage make every home functional and beautiful.',
  },
  {
    icon: MessageCircle,
    title: 'Clear, End-to-End Support',
    desc: 'Your dedicated project manager guides you from design to handover with transparent communication.',
  },
  {
    icon: Award,
    title: 'Realistic Timelines',
    desc: 'We set achievable milestones and communicate openly about schedules and progress.',
  },
  {
    icon: DollarSign,
    title: 'Budget-Friendly',
    desc: 'Competitive pricing with no hidden costs. Quality living that respects your budget.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">
            <Star size={14} />
            Why ALB Home
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Why Choose ALB Home?
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4 text-lg">
            We deliver exceptional modular homes backed by experience, quality, and genuine care.
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