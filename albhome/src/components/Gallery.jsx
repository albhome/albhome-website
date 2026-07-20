import { useState } from 'react'
import { X, Expand } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    alt: 'Modern home exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    alt: 'Living room interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    alt: 'Modern kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    alt: 'Bedroom design',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    alt: 'Bathroom interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Outdoor living area',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    alt: 'Dining room',
  },
  {
    src: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80',
    alt: 'Home exterior night',
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    alt: 'Open plan living',
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Gallery</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Our Work
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Browse through our portfolio of completed ALB Home projects across Australia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-primary p-2.5 rounded-full">
                  <Expand size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition"
          >
            <X size={28} />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}