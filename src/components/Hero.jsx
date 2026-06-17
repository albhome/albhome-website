import { Phone, Globe, CheckCircle, Clock, DollarSign } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-20 w-96 h-96 border border-white/10 rounded-full" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:pl-8 lg:pr-12 py-24 lg:py-0">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
          <Globe size={14} />
          Western Australia
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          Modular Building &amp;
          <br />
          <span className="gradient-text">Housing Solutions</span>
        </h1>

        {/* Description */}
        <p className="text-white/60 text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
          ALB Home delivers premium modular building and housing solutions across Western Australia.
          From custom homes to complete renovations, we bring quality craftsmanship and innovative
          design to every project.
        </p>

        {/* Feature badges from flyer */}
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2.5 rounded-lg border border-white/10">
            <CheckCircle size={18} className="text-accent" />
            <span className="text-sm font-medium">Australian Standard Compliance</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2.5 rounded-lg border border-white/10">
            <Clock size={18} className="text-accent" />
            <span className="text-sm font-medium">Rapid Installation</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2.5 rounded-lg border border-white/10">
            <DollarSign size={18} className="text-accent" />
            <span className="text-sm font-medium">Cost-Effective Solutions</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-accent hover:text-accent px-8 py-3.5 rounded-lg transition-all"
          >
            Get a Quote
          </a>
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
          <a href="tel:08-6261 9255" className="flex items-center gap-2 text-white/70 hover:text-accent transition text-sm">
            <Phone size={16} className="text-accent" />
            08-6261 9255
          </a>
          <a href="tel:0452 218 881" className="flex items-center gap-2 text-white/70 hover:text-accent transition text-sm">
            <Phone size={16} className="text-accent" />
            0452 218 881
          </a>
          <a href="https://www.albhome.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-accent transition text-sm">
            <Globe size={16} className="text-accent" />
            www.albhome.com.au
          </a>
        </div>
      </div>
    </section>
  )
}