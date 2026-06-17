import { Check, X } from 'lucide-react'

const features = [
  'Custom floor plans',
  'Premium fixtures & fittings',
  'Energy-efficient design',
  'Full insulation package',
  'Internal wall finishes',
  'Electrical package included',
  'Plumbing package included',
  'Kitchen & bathroom',
  'Flooring included',
  'Paint & finishes',
  'Landscaping',
  'Site preparation',
  'DA/CDC approval assistance',
  'Transport & delivery',
  'On-site installation',
]

const expanderFeatures = [
  true, true, true, true, true,
  true, true, true, true, true,
  false, false, true, true, true,
]

const modularFeatures = [
  true, true, true, true, true,
  true, true, true, true, true,
  true, true, true, false, false,
]

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Comparison</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Expander vs Modular
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Compare our two main home types to find the perfect solution for your needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 w-1/3" />
                <th className="p-4 text-center bg-surface rounded-tl-xl">
                  <p className="font-heading font-bold text-primary text-lg">Expandable</p>
                  <p className="text-accent font-heading font-bold text-2xl mt-1">From $100k+</p>
                </th>
                <th className="p-4 text-center bg-primary rounded-tr-xl">
                  <p className="font-heading font-bold text-white text-lg">Modular</p>
                  <p className="text-accent font-heading font-bold text-2xl mt-1">From $100k+</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={feature} className={idx % 2 === 0 ? 'bg-surface' : 'bg-white'}>
                  <td className="p-4 text-gray-700 font-medium border-t border-gray-100">
                    {feature}
                  </td>
                  <td className="p-4 text-center border-t border-gray-100">
                    {expanderFeatures[idx] ? (
                      <Check size={20} className="text-green-500 mx-auto" />
                    ) : (
                      <X size={20} className="text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center border-t border-gray-100">
                    {modularFeatures[idx] ? (
                      <Check size={20} className="text-green-500 mx-auto" />
                    ) : (
                      <X size={20} className="text-red-400 mx-auto" />
                    )}
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
            Enquire About Expandable
          </a>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Enquire About Modular
          </a>
        </div>
      </div>
    </section>
  )
}