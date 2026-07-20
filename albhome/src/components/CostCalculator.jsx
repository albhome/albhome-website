import { useState } from 'react'
import { Eye, X } from 'lucide-react'

const options = {
  type: {
    label: 'Bathroom Type',
    options: [
      { value: 'ensuite', label: 'Ensuite / Powder room', multiplier: 0.78 },
      { value: 'main', label: 'Main bathroom', multiplier: 1.0 },
      { value: 'family', label: 'Family bathroom + separate toilet', multiplier: 1.18 },
    ],
  },
  size: {
    label: 'Demolition Area Size',
    options: [
      { value: 'small', label: 'Up to 10 m²', cost: 1000 },
      { value: 'medium', label: 'Up to 15 m²', cost: 1500 },
      { value: 'large', label: 'Up to 20 m²', cost: 2000 },
    ],
  },
  finish: {
    label: 'Waterproofing Area Size',
    options: [
      { value: 'small', label: 'Up to 10 m²', cost: 1000 },
      { value: 'medium', label: 'Up to 15 m²', cost: 1500 },
      { value: 'large', label: 'Up to 20 m²', cost: 2000 },
    ],
  },
  layout: {
    label: 'Tiling Area (300 × 600 mm tiles)',
    options: [
      { value: 'small', label: 'Up to 10 m²', supplyCost: 1000, installCost: 1500 },
      { value: 'medium', label: 'Up to 15 m²', supplyCost: 1500, installCost: 2000 },
      { value: 'large', label: 'Up to 20 m²', supplyCost: 2000, installCost: 2500 },
    ],
  },
  storey: {
    label: 'Shower Screen',
    options: [
      { value: 'single', label: 'Single Panel', cost: 1200 },
      { value: 'lshaped', label: 'L-Shaped', cost: 1500 },
      { value: 'ushaped', label: 'U-Shaped', cost: 2000 },
    ],
  },
  age: {
    label: 'Shower System',
    options: [
      { value: 'set', label: 'Shower Set', cost: 379, productLink: 'https://www.smarthomeware.com.au/products/shower-head-set-shower-on-rail-3-functions-abs-hand-shower-203208' },
      { value: 'rain', label: 'Rain Shower Set', cost: 639, productLink: 'https://www.smarthomeware.com.au/products/100108-2-shower-set-solid-brass-body-8-overhead-handheld-shower-chrome-matte-black-finish' },
      { value: 'panel', label: 'Shower Panel', cost: 1325, productLink: 'https://www.smarthomeware.com.au/products/1300mm-white-aluminium-smart-shower-panel-set-with-led-overhead-es001-2ah' },
    ],
  },
  vanity: {
    label: 'Bathroom Vanity',
    options: [
      { value: '600mm', label: '600mm', cost: 1500 },
      { value: '750mm', label: '750mm', cost: 2000 },
      { value: '900mm', label: '900mm', cost: 2500 },
    ],
  },
  benchtop: {
    label: 'Stone Benchtop',
    options: [
      { value: '600mm', label: '600mm', cost: 500 },
      { value: '750mm', label: '750mm', cost: 700 },
      { value: '900mm', label: '900mm', cost: 900 },
    ],
  },
  floorDrain: {
    label: 'Floor Drain',
    options: [
      { value: 'round', label: 'Floor Drain Round', cost: 18, productLink: 'https://www.smarthomeware.com.au/products/floor-drain-round-floor-waste-110-110mm-100mm-outlet-h108-1' },
      { value: 'square', label: 'Floor Drain Square', cost: 18, productLink: 'https://www.smarthomeware.com.au/products/floor-drain-square-floor-waste-110-110mm-100mm-outlet-bd078' },
      { value: 'long', label: 'Long Floor Drain', cost: 110, productLink: 'https://www.smarthomeware.com.au/products/long-floor-drain-linear-floor-waste-h010' },
    ],
  },
  basinMixer: {
    label: 'Basin Mixer Option',
    options: [
      { value: 'vessel', label: 'Vessel Mixer', cost: 199 },
      { value: 'black', label: 'Black Mixer', cost: 179 },
      { value: 'gold', label: 'Gold Mixer', cost: 179 },
    ],
  },
  mirror: {
    label: 'LED Mirror Type',
    options: [
      { value: 'round', label: 'Round LED Mirror', cost: 280 },
      { value: 'rect', label: 'Rectangle LED Mirror', cost: 320 },
      { value: 'pill', label: 'Pill Shape LED Mirror', cost: 380 },
    ],
  },
  mirrorOptions: {
    label: 'Mirror Options',
    options: [
      { value: 'round', label: 'Round Frameless', cost: 129 },
      { value: 'blackRect', label: 'Black Frame Rectangle', cost: 109 },
      { value: 'decorative', label: 'Decorative Frame Rectangle', cost: 189 },
    ],
  },
  towelRail: {
    label: 'Towel Rail',
    options: [
      { value: 'double', label: 'Double Rail', cost: 69 },
      { value: 'heated', label: 'Heated Rail', cost: 375 },
      { value: 'heatedBlack', label: 'Heated Rail Black', cost: 395 },
    ],
  },
  ledDownlights: {
    label: 'LED Downlights (Supply & Installation)',
    options: [
      { value: '2', label: '2 × Round LED Downlights', cost: 200 },
      { value: '3', label: '3 × Round LED Downlights', cost: 300 },
      { value: '4', label: '4 × Round LED Downlights', cost: 400 },
    ],
  },
  exhaustFan: {
    label: 'Exhaust Fan (Supply & Installation)',
    options: [
      { value: 'standard', label: 'Standard', cost: 200 },
      { value: 'heaterLight', label: 'Heater & Light', cost: 500 },
      { value: 'heaterLED', label: 'Heater + LED Panel', cost: 1000 },
    ],
  },
  toilet: {
    label: 'Toilet (Supply & Installation)',
    options: [
      { value: 'standard', label: 'Standard Toilet', cost: 500 },
      { value: 'premium', label: 'Premium Toilet', cost: 1000 },
      { value: 'smart', label: 'Smart Toilet', cost: 3000 },
    ],
  },
  bathtub: {
    label: 'Bathtub (Supply & Installation)',
    options: [
      { value: '1700', label: '1700 mm Bathtub', cost: 1000 },
      { value: '1900', label: '1900 mm Bathtub', cost: 1200 },
      { value: 'spa', label: 'Spa Bathtub', cost: 3000 },
    ],
  },
}

const productImages = {
  single: '/floorplans/product-placeholder.svg',
  lshaped: '/floorplans/product-placeholder.svg',
  ushaped: '/floorplans/product-placeholder.svg',
  set: '/floorplans/shower-set.png',
  rain: '/floorplans/rain-shower.png',
  panel: '/floorplans/shower-panel.png',
  '600mm': '/floorplans/product-placeholder.svg',
  '750mm': '/floorplans/product-placeholder.svg',
  '900mm': '/floorplans/product-placeholder.svg',
  round: '/floorplans/floor-drain-round.png',
  square: '/floorplans/floor-drain-square.png',
  long: '/floorplans/floor-drain-long.png',
  vessel: '/floorplans/product-placeholder.svg',
  black: '/floorplans/product-placeholder.svg',
  gold: '/floorplans/product-placeholder.svg',
  rect: '/floorplans/product-placeholder.svg',
  pill: '/floorplans/product-placeholder.svg',
  blackRect: '/floorplans/product-placeholder.svg',
  decorative: '/floorplans/product-placeholder.svg',
  double: '/floorplans/product-placeholder.svg',
  heated: '/floorplans/product-placeholder.svg',
  heatedBlack: '/floorplans/product-placeholder.svg',
  '2': '/floorplans/product-placeholder.svg',
  '3': '/floorplans/product-placeholder.svg',
  '4': '/floorplans/product-placeholder.svg',
  standard: '/floorplans/product-placeholder.svg',
  heaterLight: '/floorplans/product-placeholder.svg',
  heaterLED: '/floorplans/product-placeholder.svg',
  premium: '/floorplans/product-placeholder.svg',
  smart: '/floorplans/product-placeholder.svg',
  '1700': '/floorplans/product-placeholder.svg',
  '1900': '/floorplans/product-placeholder.svg',
  spa: '/floorplans/product-placeholder.svg',
}

const features = [
  { value: 'bath', label: 'Freestanding bath', cost: 2500 },
  { value: 'vanity', label: 'Double vanity', cost: 1800 },
  { value: 'heating', label: 'Underfloor heating', cost: 1600 },
  { value: 'rail', label: 'Heated towel rail', cost: 450 },
  { value: 'screen', label: 'Frameless shower screen', cost: 900 },
  { value: 'niche', label: 'Shower niche / bench seat', cost: 600 },
  { value: 'toilet', label: 'Smart toilet', cost: 1200 },
  { value: 'skylight', label: 'Skylight', cost: 1500 },
]

export default function CostCalculator() {
  const [previewProduct, setPreviewProduct] = useState(null)
  const [form, setForm] = useState({
    type: [],
    size: [],
    finish: [],
    layout: [],
    storey: [],
    age: [],
    vanity: [],
    benchtop: [],
    floorDrain: [],
    basinMixer: [],
    mirror: [],
    mirrorOptions: [],
    towelRail: [],
    ledDownlights: [],
    exhaustFan: [],
    toilet: [],
    bathtub: [],
    postcode: '',
  })
  const [selectedFeatures, setSelectedFeatures] = useState([])

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }))
  const toggle = (key, value) => {
    setForm((prev) => {
      const arr = prev[key] || []
      if (arr.includes(value)) {
        return { ...prev, [key]: [] }
      }
      return { ...prev, [key]: [value] }
    })
  }

  const toggleFeature = (value) => {
    setSelectedFeatures((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const selected = (key) => form[key] || []
  const sumCost = (key) =>
    selected(key).reduce((sum, v) => {
      const opt = options[key].options.find((o) => o.value === v)
      return sum + (opt?.cost || 0)
    }, 0)
  const sumSupply = (key) =>
    selected(key).reduce((sum, v) => {
      const opt = options[key].options.find((o) => o.value === v)
      return sum + (opt?.supplyCost || 0)
    }, 0)
  const sumInstall = (key) =>
    selected(key).reduce((sum, v) => {
      const opt = options[key].options.find((o) => o.value === v)
      return sum + (opt?.installCost || 0)
    }, 0)

  const labourMap = { ensuite: 2000, main: 3000, family: 4000 }
  const sizeCost = sumCost('size')
  const finishCost = sumCost('finish')
  const layoutSupplyCost = sumSupply('layout')
  const layoutInstallCost = sumInstall('layout')
  const storeyCost = sumCost('storey')
  const ageCost = sumCost('age')
  const vanityCost = sumCost('vanity')
  const benchtopCost = sumCost('benchtop')
  const floorDrainCost = sumCost('floorDrain')
  const basinMixerCost = sumCost('basinMixer')
  const mirrorCost = sumCost('mirror')
  const mirrorOptionsCost = sumCost('mirrorOptions')
  const towelRailCost = sumCost('towelRail')
  const ledDownlightsCost = sumCost('ledDownlights')
  const exhaustFanCost = sumCost('exhaustFan')
  const toiletCost = sumCost('toilet')
  const bathtubCost = sumCost('bathtub')
  const labourCost = selected('type').reduce((sum, v) => sum + (labourMap[v] || 0), 0)

  const featureCost = selectedFeatures.reduce((sum, f) => {
    const feat = features.find((fe) => fe.value === f)
    return sum + (feat?.cost || 0)
  }, 0)

  const totalCost = Math.round(sizeCost + finishCost + layoutSupplyCost + layoutInstallCost + storeyCost + ageCost + vanityCost + benchtopCost + floorDrainCost + basinMixerCost + mirrorCost + mirrorOptionsCost + towelRailCost + ledDownlightsCost + exhaustFanCost + toiletCost + bathtubCost + labourCost + featureCost)

  const formatCurrency = (n) => '$' + n.toLocaleString('en-AU')

  const selectedItems = []
  Object.entries(options).forEach(([key, group]) => {
    if (key === 'type') return
    ;(form[key] || []).forEach((v) => {
      const opt = group.options.find((o) => o.value === v)
      if (opt) {
        const cost = (opt.cost || 0) + (opt.supplyCost || 0) + (opt.installCost || 0)
        selectedItems.push({ label: `${group.label}: ${opt.label}`, cost })
      }
    })
  })
  selectedFeatures.forEach((f) => {
    const feat = features.find((fe) => fe.value === f)
    if (feat) {
      selectedItems.push({ label: feat.label, cost: feat.cost })
    }
  })
  if (labourCost > 0) {
    const typeLabel = selected('type').map((v) => {
      const opt = options.type.options.find((o) => o.value === v)
      return opt?.label || v
    }).join(', ')
    selectedItems.push({ label: `Labour & Management (${typeLabel})`, cost: labourCost })
  }

  return (
    <>
    <div className="py-20 sm:py-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-badge">Cost Calculator</span>
        </div>
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Bathroom Renovation Cost Calculator
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Get an instant estimate for your bathroom renovation project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 space-y-5">
            {Object.entries(options).map(([key, group]) => (
              <div key={key}>
                <label className="block text-sm font-semibold text-primary mb-2">{group.label}</label>
                <div className="flex flex-wrap gap-2">
                  {group.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => toggle(key, opt.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        (form[key] || []).includes(opt.value)
                          ? 'bg-accent text-primary border-accent'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-accent'
                      }`}
                    >
                      <span className="flex flex-col items-center">
                      <span className="flex items-center gap-1.5">
                        {opt.label}
                        {productImages[opt.value] && (
                          <button
                            onClick={(e) => { e.stopPropagation(); setPreviewProduct({ label: opt.label, image: productImages[opt.value], link: opt.productLink }) }}
                            className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 hover:bg-accent hover:text-primary transition-all"
                            title="View product"
                          >
                            <Eye size={10} />
                          </button>
                        )}
                      </span>
                      {opt.supplyCost !== undefined && (
                        <span className="text-[10px] opacity-70 mt-0.5">
                          Supply ${opt.supplyCost.toLocaleString('en-AU')} · Install ${opt.installCost.toLocaleString('en-AU')}
                        </span>
                      )}
                    </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Postcode */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Postcode</label>
              <input
                type="text"
                value={form.postcode}
                onChange={(e) => update('postcode', e.target.value)}
                placeholder="Enter your WA postcode"
                className="w-full px-4 py-2.5 rounded-lg text-sm border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              />
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Add features</label>
              <div className="flex flex-wrap gap-2">
                {features.map((feat) => (
                  <button
                    key={feat.value}
                    onClick={() => toggleFeature(feat.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      selectedFeatures.includes(feat.value)
                        ? 'bg-accent text-primary border-accent'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-accent'
                    }`}
                  >
                    {feat.label} (+{formatCurrency(feat.cost)})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-xl p-6 sm:p-8 border border-gray-100 sticky top-24">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Estimated Cost</p>
              <p className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                {formatCurrency(totalCost)}
              </p>
              {totalCost > 0 && <p className="text-xs text-gray-400 mt-1">Total estimated cost</p>}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Selected Items</p>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedItems.length === 0 ? (
                    <p className="text-xs text-gray-400">No items selected</p>
                  ) : (
                    selectedItems.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-semibold text-primary">{formatCurrency(item.cost)}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-400 leading-relaxed">
                  This is an indicative estimate only. Actual costs may vary based on site conditions, material choices, and scope of work. Contact us for a detailed quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Product Preview Modal */}
    {previewProduct && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={() => setPreviewProduct(null)}
      >
        <div
          className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h3 className="font-heading font-bold text-primary text-sm">{previewProduct.label}</h3>
            <button
              onClick={() => setPreviewProduct(null)}
              className="text-gray-400 hover:text-primary transition"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-5">
            <div className="aspect-square bg-surface rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={previewProduct.image}
                alt={previewProduct.label}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = '<div class="text-gray-400 text-sm">Product image not available</div>'
                }}
              />
            </div>
            {previewProduct.link && (
              <a
                href={previewProduct.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full text-center bg-accent hover:bg-accent-dark text-primary font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
              >
                View Product Details
              </a>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  )
}