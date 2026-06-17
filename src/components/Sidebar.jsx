import { useState } from 'react'
import { Menu, X, Phone, ChevronDown, Home, Building2, Maximize2, Image, Info, MapPin, Mail } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  {
    label: 'Modular Homes',
    icon: Building2,
    children: [
      { label: 'Expandable Homes', href: '#modular-homes' },
      { label: 'Custom Design', href: '#modular-homes' },
    ],
  },
  {
    label: 'Expandable Homes',
    icon: Maximize2,
    children: [
      { label: '20ft Models', href: '#modular-homes' },
      { label: '30ft Models', href: '#modular-homes' },
      { label: '40ft Models', href: '#modular-homes' },
    ],
  },
  { label: 'Gallery', href: '#gallery', icon: Image },
  { label: 'About Us', href: '#about', icon: Info },
  { label: 'Locations', href: '#locations', icon: MapPin },
  { label: 'Contact', href: '#contact', icon: Mail },
]

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState({})

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#" className="text-white font-heading font-bold text-xl">
            ALB <span className="text-accent">Home</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="tel:1300000000" className="text-accent">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-1"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-primary shadow-2xl lg:hidden transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <a href="#" className="text-white font-heading font-bold text-xl">
            ALB <span className="text-accent">Home</span>
          </a>
          <button onClick={() => setMobileOpen(false)} className="text-white/70">
            <X size={20} />
          </button>
        </div>
        <div className="overflow-y-auto h-full pb-20 sidebar-scroll">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition"
                  >
                    <span className="flex items-center gap-3 text-sm font-medium">
                      {item.icon && <item.icon size={16} />}
                      {item.label}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openDropdowns[item.label] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdowns[item.label] && (
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
                  className="flex items-center gap-3 px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition text-sm font-medium"
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-primary z-30">
        <div className="flex items-center gap-2 px-6 py-6 border-b border-white/10">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <Home size={20} className="text-primary" />
          </div>
          <div>
            <a href="#" className="text-white font-heading font-bold text-lg">
              ALB <span className="text-accent">Home</span>
            </a>
            <p className="text-xs text-text-muted">Premium Living Solutions</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 sidebar-scroll">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full px-6 py-2.5 text-white/70 hover:text-accent hover:bg-white/5 transition text-sm"
                  >
                    <span className="flex items-center gap-3">
                      {item.icon && <item.icon size={16} />}
                      {item.label}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openDropdowns[item.label] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdowns[item.label] && (
                    <div className="bg-white/5">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-11 py-2 text-xs text-white/50 hover:text-accent transition"
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
                  className="flex items-center gap-3 px-6 py-2.5 text-white/70 hover:text-accent hover:bg-white/5 transition text-sm"
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="px-6 py-4 border-t border-white/10">
          <a
            href="tel:1300000000"
            className="flex items-center gap-2 text-accent hover:text-accent-light transition text-sm font-medium"
          >
            <Phone size={14} />
            1300 000 000
          </a>
          <p className="text-xs text-text-muted mt-1">Call us today</p>
        </div>
      </aside>
    </>
  )
}