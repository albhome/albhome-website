import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: 'Modular Homes',
    href: '#modular-homes',
    children: [
      { label: '20ft Modular', href: '#modular-homes' },
      { label: '30ft Modular', href: '#modular-homes' },
      { label: '40ft Modular', href: '#modular-homes' },
    ],
  },
  { label: 'Accessories', href: '#services' },
  { label: 'Service & Installation', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'FAQs', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a href="tel:08-6261 9255" className="flex items-center gap-1.5 text-white/60 hover:text-accent transition">
                <Phone size={12} className="text-accent" />
                08-6261 9255
              </a>
              <a href="tel:0452 218 881" className="flex items-center gap-1.5 text-white/60 hover:text-accent transition">
                <Phone size={12} className="text-accent" />
                0452 218 881
              </a>
              <a href="mailto:service@albhome.com.au" className="flex items-center gap-1.5 text-white/60 hover:text-accent transition">
                <Mail size={12} className="text-accent" />
                service@albhome.com.au
              </a>
              <span className="flex items-center gap-1.5 text-white/40">
                <MapPin size={12} className="text-accent" />
                1 Longfellow Court, Belmont WA 6104
              </span>
            </div>
            <span className="text-white/40 font-heading tracking-wider text-xs">
              WA'S LOWEST PRICE SUPPLY-ONLY EXPANDABLE HOMES
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Nav */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src="/logo.webp" alt="ALB Home" className="h-10 sm:h-12 w-auto" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center gap-1 px-3 py-2 text-white/70 hover:text-accent transition text-sm font-medium rounded-lg hover:bg-white/5"
                      >
                        {item.label}
                        <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-44 bg-primary-light border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-white/60 hover:text-accent hover:bg-white/5 transition"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="px-3 py-2 text-white/70 hover:text-accent transition text-sm font-medium rounded-lg hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-primary font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
              >
                Get a Quote
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-1"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Nav */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-primary shadow-2xl lg:hidden transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <a href="#">
            <img src="/logo.webp" alt="ALB Home" className="h-8 w-auto" />
          </a>
          <button onClick={() => setMobileOpen(false)} className="text-white/70">
            <X size={20} />
          </button>
        </div>
        <div className="overflow-y-auto h-full pb-20">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition"
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-white/5">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-10 py-2.5 text-sm text-white/60 hover:text-accent transition"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition text-sm font-medium"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <div className="px-6 mt-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-accent hover:bg-accent-dark text-primary font-semibold px-5 py-3 rounded-lg transition-all"
            >
              Get a Quote
            </a>
          </div>
          <div className="px-6 mt-6 space-y-3">
            <a href="tel:08-6261 9255" className="flex items-center gap-2 text-white/50 text-sm hover:text-accent transition">
              <Phone size={14} className="text-accent" />
              08-6261 9255
            </a>
            <a href="mailto:service@albhome.com.au" className="flex items-center gap-2 text-white/50 text-sm hover:text-accent transition">
              <Mail size={14} className="text-accent" />
              service@albhome.com.au
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}