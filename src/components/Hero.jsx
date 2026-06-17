import { Star, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-20 w-96 h-96 border border-white/10 rounded-full" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:pl-8 lg:pr-12 py-24 lg:py-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
          <Star size={14} className="fill-accent" />
          Australia's Best Value Expandable Homes
        </div>

        {/* Tagline */}
        <p className="text-white/60 text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
          Designed with care, built without compromise
        </p>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
          ALB HOME
          <br />
          <span className="gradient-text">Premium Modular</span>
          <br />
          Living Solutions
        </h1>

        {/* Description */}
        <p className="text-white/60 text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
          ALB Home creates premium expandable and modular homes designed for
          comfortable Australian living. Founded on hands-on experience in
          modular construction, our homes are carefully refined to deliver
          exceptional quality and value.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#modular-homes"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Explore Our Homes
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-accent hover:text-accent px-8 py-3.5 rounded-lg transition-all"
          >
            Get a Quote
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg">
          {[
            { value: '150+', label: 'Homes Delivered' },
            { value: '5+', label: 'Years Experience' },
            { value: '98%', label: 'Happy Clients' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  )
}