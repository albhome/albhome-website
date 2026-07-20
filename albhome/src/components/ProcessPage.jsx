import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const timelineStages = [
  { duration: '1–2 wks', name: 'Consultation & Design' },
  { duration: '6–10 wks', name: 'Approvals & Permits' },
  { duration: '8–12 wks', name: 'Factory Build' },
  { duration: '1–2 days', name: 'Delivery & Install' },
  { duration: 'Done', name: 'Move In' },
]

const steps = [
  {
    num: '01',
    phase: 'Phase 1 · Week 1',
    title: 'Free Consultation',
    body: 'Your journey starts with a no-obligation call. We listen to your project — your land, your budget, your timeline. We\'ll advise which ALB Home model suits your situation, explain the WA approval process, and give you an initial cost estimate including site works.',
    tags: [{ label: 'ALB Home — We lead this. Free.', color: 'green' }],
  },
  {
    num: '02',
    phase: 'Phase 1 · Week 1–2',
    title: 'Site Assessment & Product Selection',
    body: 'We review your land — zoning, access, services, bushfire and flood risk. You select your model (20FT, 30FT or 40FT), structural system (Timber Frame, Light Steel or Aluminium), and optional extras. We prepare a detailed quote with full inclusions.',
    boxes: [
      {
        title: 'What you choose',
        items: [
          'Home model: 20FT / 30FT / 40FT',
          'Structural system: Timber Frame, Light Steel, or Aluminium',
          'Optional extras: gutter, decking, verandah, air conditioning',
        ],
      },
    ],
    tags: [
      { label: 'ALB Home', color: 'green' },
      { label: 'You', color: 'blue' },
    ],
  },
  {
    num: '03',
    phase: 'Phase 1 · Week 2',
    title: 'Fixed-Price Contract Signed',
    body: 'Once you\'re happy with the quote and inclusions, you sign a fixed-price contract and pay a deposit. The price you sign is the price you pay — no variations, no hidden extras. Your dedicated project contact is assigned at this point.',
    tags: [
      { label: 'ALB Home', color: 'green' },
      { label: 'You', color: 'blue' },
    ],
  },
  {
    num: '04',
    phase: 'Phase 2 · Weeks 2–10 (concurrent)',
    title: 'Council Approval & Engineering',
    body: 'Our approval partners prepare all required documentation — engineering drawings, site plans, and council application forms. They manage all council correspondence on your behalf. This runs concurrently with the factory build.',
    boxes: [
      {
        title: 'Estimated approval timeline — Western Australia',
        rows: [
          { label: 'Development Application (DA)', value: '8–14 weeks' },
          { label: 'Certified Building Survey', value: '4–6 weeks' },
        ],
      },
    ],
    tags: [{ label: 'Our Approval Partners', color: 'green' }],
  },
  {
    num: '05',
    phase: 'Phase 2 · Weeks 4–12 (concurrent)',
    title: 'Factory Build',
    body: 'Your ALB Home is precision-engineered and built in a controlled facility. The build progresses through quality-inspected stages. You receive progress updates and photos throughout.',
    progress: [
      'Structural frame',
      'Roof & wall panels',
      'Electrical rough-in',
      'Plumbing rough-in',
      'Insulation & linings',
      'Kitchen & bathroom fit-out',
      'Windows & doors',
      'Final finishes',
      'Quality inspection',
    ],
    tags: [{ label: 'ALB Home Factory', color: 'green' }],
  },
  {
    num: '06',
    phase: 'Phase 3 · Pre-Delivery',
    title: 'Site Preparation',
    body: 'While the build finishes, your site needs preparation — foundation (concrete slab or steel piers) and service connections (water, sewer, power). Arranged by you through your own trades, or we can connect you with our partner network.',
    boxes: [
      {
        title: 'Typical site preparation costs (WA)',
        rows: [
          { label: 'Concrete slab', value: '$8,000–$15,000' },
          { label: 'Steel pier system', value: '$5,000–$12,000' },
          { label: 'Plumber (connections)', value: '$2,000–$5,000' },
          { label: 'Electrician (connections)', value: '$1,500–$3,500' },
        ],
      },
    ],
    tags: [
      { label: 'You arrange', color: 'blue' },
      { label: 'Or our partner network', color: 'green' },
    ],
  },
  {
    num: '07',
    phase: 'Phase 3 · Delivery Day',
    title: 'Delivery & Installation',
    body: 'Your completed home is loaded onto a semi-trailer and delivered to your site. For our expandable homes, the side wings are unfolded and locked on-site — the entire process takes 1–2 days. Once positioned on your foundation, your home is ready for final connections.',
    tags: [{ label: 'ALB Home — We manage delivery logistics', color: 'green' }],
  },
  {
    num: '08',
    phase: 'Phase 4 · Done',
    title: 'Handover & Move In',
    body: 'Keys handed over. Home manual provided. You\'re in! Your ALB Home comes with structural and workmanship warranties. We remain available for any post-handover questions.',
    tags: [
      { label: 'ALB Home', color: 'green' },
      { label: 'You', color: 'blue' },
    ],
  },
]

const roles = [
  {
    title: 'ALB Home Manages',
    items: [
      'Product design & engineering',
      'Factory build & quality control',
      'Delivery logistics & installation',
      'Project communication',
      'Warranty & post-handover support',
    ],
  },
  {
    title: 'Our Partners Manage',
    items: [
      'Council approval & certification',
      'Engineering drawings',
      'Energy rating',
      'Foundation & site works (optional)',
      'Occupancy certificate',
    ],
  },
  {
    title: 'You Arrange',
    items: [
      'Land purchase (if needed)',
      'Soil test',
      'Foundation / slab',
      'Water & power connections',
      'Finance (if needed)',
    ],
  },
]

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ===== Hero ===== */}
      <section className="py-20 sm:pt-28 sm:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="section-badge">How It Works</span>
          </div>
          <div className="text-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary uppercase tracking-wide">
              From First Call to Front Door
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
              A clear, transparent journey with no surprises on cost or timeline. Most clients go from first call to moving in within 6–9 months.
            </p>
          </div>

          {/* Timeline Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
            {timelineStages.map((stage) => (
              <div
                key={stage.name}
                className="text-center p-4 sm:p-5 bg-surface rounded-xl border border-gray-200 hover:border-accent hover:-translate-y-0.5 transition-all"
              >
                <p className="font-heading text-lg font-bold text-accent">{stage.duration}</p>
                <p className="text-xs sm:text-sm font-semibold text-primary mt-1">{stage.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Detailed Steps ===== */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">
              What Happens at Each Stage
            </h2>
          </div>

          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`grid grid-cols-[auto_1fr] gap-4 sm:gap-8 py-8 sm:py-10 ${
                  idx < steps.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-sm sm:text-lg font-bold text-white">{step.num}</span>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-accent mb-1.5">{step.phase}</p>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-primary">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed max-w-3xl">{step.body}</p>

                  {step.boxes?.map((box, bi) => (
                    <div key={bi} className="mt-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-200">
                      <p className="text-xs font-bold text-primary mb-2">{box.title}</p>
                      {box.items && (
                        <ul className="space-y-1 text-sm text-gray-600">
                          {box.items.map((item, ii) => (
                            <li key={ii} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {box.rows && (
                        <table className="w-full text-sm">
                          <tbody>
                            {box.rows.map((row, ri) => (
                              <tr key={ri} className="border-b border-gray-100 last:border-b-0">
                                <td className="py-2 pr-4 text-gray-800 font-medium">{row.label}</td>
                                <td className="py-2 text-gray-500 text-right">{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))}

                  {step.progress && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.progress.map((p) => (
                        <span
                          key={p}
                          className="text-[10px] sm:text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  )}

                  {step.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                            tag.color === 'blue'
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-accent/10 text-accent'
                          }`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Roles & Responsibilities ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide">
              Roles & Responsibilities
            </h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-2xl">Who does what throughout the process.</p>

          <div className="grid sm:grid-cols-3 gap-5">
            {roles.map((role) => (
              <div key={role.title} className="bg-surface rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h3 className="font-heading font-bold text-primary text-base mb-5">{role.title}</h3>
                <ul className="space-y-2.5">
                  {role.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-accent font-bold">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 sm:py-20 bg-primary text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            Ready to Start?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Book your free consultation. We'll walk you through everything specific to your land and your situation.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-bold px-10 py-4 rounded-xl transition-all text-base uppercase tracking-wider mt-8"
          >
            Book a Free Call
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}