import { Check, X } from 'lucide-react'

const materials = [
  {
    name: 'Timber Frame',
    subtitle: 'Traditional & Cost-Effective',
    price: 'Most Affordable',
    color: 'bg-amber-50',
    headerBg: 'bg-amber-800',
  },
  {
    name: 'Light Steel',
    subtitle: 'Strong & Durable',
    price: 'Mid-Range',
    color: 'bg-slate-50',
    headerBg: 'bg-slate-700',
  },
  {
    name: 'Aluminium',
    subtitle: 'Lightweight & Premium',
    price: 'Premium',
    color: 'bg-blue-50',
    headerBg: 'bg-blue-700',
  },
]

const features = [
  { label: 'Weight', timber: 'Moderate', steel: 'Light', aluminium: 'Lightest' },
  { label: 'Structural Strength', timber: 'Good', steel: 'Excellent', aluminium: 'Very Good' },
  { label: 'Termite Resistance', timber: 'Requires treatment', steel: 'Naturally resistant ✓', aluminium: 'Naturally resistant ✓' },
  { label: 'Fire Resistance', timber: 'Good (treated)', steel: 'Excellent (non-combustible)', aluminium: 'Excellent (non-combustible)' },
  { label: 'Corrosion Resistance', timber: 'Good (treated)', steel: 'Good (galvanised)', aluminium: 'Excellent (naturally)' },
  { label: 'Thermal Insulation', timber: 'Excellent (natural)', steel: 'Good (with insulation)', aluminium: 'Good (with insulation)' },
  { label: 'Construction Speed', timber: 'Fast', steel: 'Very Fast', aluminium: 'Fast' },
  { label: 'Design Flexibility', timber: 'Good', steel: 'Excellent', aluminium: 'Excellent' },
  { label: 'Maintenance', timber: 'Moderate', steel: 'Low', aluminium: 'Very Low' },
  { label: 'Lifespan', timber: '50+ years', steel: '100+ years', aluminium: '100+ years' },
  { label: 'Sustainability', timber: 'Renewable resource', steel: '100% Recyclable', aluminium: '100% Recyclable' },
  { label: 'Cost Efficiency', timber: '$$', steel: '$$$', aluminium: '$$$$' },
]

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Materials</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Timber Frame vs Light Steel vs Aluminium
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Compare our three structural systems to choose the best option for your project.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr>
                <th className="text-left p-4 w-1/4" />
                {materials.map((m) => (
                  <th key={m.name} className={`p-4 text-center ${m.headerBg} text-white first:rounded-tl-xl last:rounded-tr-xl`}>
                    <p className="font-heading font-bold text-lg">{m.name}</p>
                    <p className="text-white/70 text-sm mt-1">{m.subtitle}</p>
                    <p className="text-accent font-heading font-bold text-xl mt-2">{m.price}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, idx) => (
                <tr key={feat.label} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4 text-gray-700 font-semibold border-t border-gray-100">
                    {feat.label}
                  </td>
                  <td className="p-4 text-center text-sm text-gray-600 border-t border-gray-100">
                    {feat.timber}
                  </td>
                  <td className="p-4 text-center text-sm text-gray-600 border-t border-gray-100">
                    {feat.steel}
                  </td>
                  <td className="p-4 text-center text-sm text-gray-600 border-t border-gray-100">
                    {feat.aluminium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Enquire About Your Build
          </a>
          <a
            href="#services"
            className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Explore Our Materials
          </a>
        </div>
      </div>
    </section>
  )
}