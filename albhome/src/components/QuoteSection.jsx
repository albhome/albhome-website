import { useState } from 'react'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react'

const contactChannels = [
  { icon: Phone, label: 'Phone', value: '08-6261 9255', href: 'tel:08-6261 9255' },
  { icon: Mail, label: 'Email', value: 'service@albhome.com.au', href: 'mailto:service@albhome.com.au' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri 9:30am–4:30pm / Sat 9:30am–1:30pm' },
  { icon: MapPin, label: 'Service Area', value: 'All regions of Western Australia' },
]

const steps = [
  'We review your enquiry and respond within 24 hours',
  'We schedule a free consultation (30–45 min) to understand your project needs',
  'We provide a written quote including home price, approvals, delivery, and site works',
]

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">Get a Quote</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Request Your Free Quote
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Tell us about your project and we'll get back to you within 24 hours with a comprehensive quote — including home pricing, delivery, and site works.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Channels */}
            <div className="space-y-5">
              {contactChannels.map((item, idx) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-surface border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-heading font-bold text-accent">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-primary hover:text-accent transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What Happens Next */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-heading font-bold text-primary text-base mb-5">What Happens Next?</h3>
              <div className="space-y-4">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-white">{idx + 1}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-surface rounded-2xl p-6 sm:p-8 border border-gray-200">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Enquiry Sent!</h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  A member of our team will be in touch within 24 hours. If it's urgent, call us on{' '}
                  <a href="tel:08-6261 9255" className="text-accent font-semibold">08-6261 9255</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-6">Send Us a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      First Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Last Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      State / Region <span className="text-accent">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                    >
                      <option value="">Select your region</option>
                      <option>Perth Metro</option>
                      <option>South West WA</option>
                      <option>Wheatbelt WA</option>
                      <option>Mid West WA</option>
                      <option>Goldfields WA</option>
                      <option>Pilbara WA</option>
                      <option>Kimberley WA</option>
                      <option>Other WA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Land Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition">
                      <option value="">Select land type</option>
                      <option>Residential (metro / suburban)</option>
                      <option>Rural residential / acreage</option>
                      <option>Farming / primary production</option>
                      <option>Remote / mining accommodation</option>
                      <option>I don't own land yet</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Product Interest
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition">
                      <option value="">What are you looking at?</option>
                      <option>20FT Stockman Classic (1 Bed)</option>
                      <option>30FT Outback Classic (2 Bed)</option>
                      <option>40FT Homestead Classic (3 Bed)</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Intended Use
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition">
                      <option value="">How will you use it?</option>
                      <option>Primary residence</option>
                      <option>Worker / staff accommodation</option>
                      <option>Granny flat for family</option>
                      <option>Rental / investment</option>
                      <option>Airbnb / short-stay</option>
                      <option>Holiday retreat</option>
                      <option>Commercial / business</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-y"
                    placeholder="Your land location, budget, timeline, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all text-sm uppercase tracking-wider"
                >
                  <Send size={14} />
                  Send Enquiry — We'll Be in Touch Within 24 Hours
                </button>

                <p className="text-xs text-gray-400 mt-3 text-center">
                  Your details are kept private. We will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}