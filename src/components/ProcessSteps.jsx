import { Search, FileText, Truck, Heart } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Choose',
    desc: 'Browse our range of premium expandable and modular homes. Our team will guide you through the options.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Order',
    desc: 'Confirm your selection with all the relevant information. We handle the paperwork and approvals.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Delivery',
    desc: 'We schedule a delivery time that works for you. Our team manages logistics from factory to site.',
  },
  {
    icon: Heart,
    step: '04',
    title: 'Enjoy',
    desc: 'Get set up and make it your own. Your new ALB Home is ready for you to enjoy from day one.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Our Process</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            From initial consultation to moving in, we make the journey simple and transparent.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200">
            <div className="absolute inset-0 bg-accent" style={{ width: '0%' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={item.step} className="relative text-center group">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300 relative z-10">
                  <item.icon size={32} />
                </div>
                <span className="text-5xl font-heading font-bold text-gray-200 absolute top-0 right-4 -z-10">
                  {item.step}
                </span>
                <h3 className="font-heading font-bold text-xl text-primary mt-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}