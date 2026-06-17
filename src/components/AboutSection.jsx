import { Info } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Modern home"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-5 rounded-xl shadow-xl max-w-[200px]">
              <p className="text-3xl font-heading font-bold gradient-text">10+</p>
              <p className="text-xs text-white/70 mt-1">Years of industry experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-badge">
              <Info size={14} />
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 leading-tight">
              Building Australia's
              <br />
              <span className="gradient-text">Finest Modular Homes</span>
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              ALB Home Australia creates premium expandable and modular homes designed for
              comfortable Australian living. Our company was founded on hands-on experience
              in modular construction, and every home we build has been carefully refined to
              improve on earlier expandable designs.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              We combine innovative construction techniques with premium materials to deliver
              homes that exceed expectations. From initial consultation to final handover,
              our team is committed to providing exceptional quality, value, and service
              to every client.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Homes Delivered', value: '150+' },
                { label: 'Years Experience', value: '10+' },
                { label: 'Service Areas', value: '4 States' },
                { label: 'Happy Families', value: '500+' },
              ].map((item) => (
                <div key={item.label} className="bg-surface rounded-xl p-4">
                  <p className="font-heading text-2xl font-bold gradient-text">{item.value}</p>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}