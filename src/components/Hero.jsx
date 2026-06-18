import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="ALB Home - Modular Building Solutions"
          className="w-full h-full object-cover opacity-50 hero-bg-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-accent font-heading tracking-[0.2em] text-sm uppercase mb-4">
            Designed with care, built without compromise
          </p>

          {/* Main heading - Oswald all-caps style like SnapBuild */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight uppercase">
            ALB Home
            <br />
            <span className="gradient-text">Refined</span>
            <br />
            <span className="text-white/90">Expandable Homes</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
            ALB Home delivers premium modular building and housing solutions across Western Australia.
            From custom homes to complete renovations, we bring quality craftsmanship and innovative
            design to every project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#modular-homes"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 text-sm uppercase tracking-wider"
            >
              View Our Homes
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-accent hover:text-accent px-8 py-3.5 rounded-lg transition-all text-sm uppercase tracking-wider"
            >
              <Play size={16} />
              Get a Quote
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-white/10 max-w-lg">
            {[
              { value: '150+', label: 'Homes Delivered' },
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Happy Families' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}