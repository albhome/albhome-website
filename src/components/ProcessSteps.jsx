import { Search, FileCheck, Truck, Heart } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Select',
    desc: 'Browse our range of premium expandable and modular homes. Our expert team will guide you through the options to find the perfect fit.',
  },
  {
    icon: FileCheck,
    step: '02',
    title: 'Confirm',
    desc: 'Finalise your design selection, lock in all details, and confirm your production schedule. We handle the paperwork.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Manufacture & Deliver',
    desc: 'Built in a controlled environment to Australian standards. Our team coordinates logistics from factory to your site.',
  },
  {
    icon: Heart,
    step: '04',
    title: 'Settle In',
    desc: 'Your home arrives ready for installation. Get set up, add your personal touch, and start enjoying your new ALB Home.',
  },
]

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">Our Process</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 uppercase tracking-wide">
            Service Process
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Designed to be clear, efficient, and stress-free from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="relative text-center group">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300 relative z-10">
                  <item.icon size={32} />
                </div>
                <span className="text-5xl font-heading font-bold text-gray-200 absolute top-0 right-4 -z-10">
                  {item.step}
                </span>
                <h3 className="font-heading font-bold text-xl text-primary mt-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}