import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Sunny Days and Smiles: Welcoming Visitors to Your New Modular Home',
    date: 'January 15, 2025',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    category: 'Living',
  },
  {
    title: 'What Is an Expandable Home? Exploring the Future of Affordable Housing',
    date: 'December 20, 2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    category: 'Guide',
  },
  {
    title: 'Affordable Modular Homes in Australia: Your Complete Guide for 2025',
    date: 'November 10, 2024',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    category: 'Guide',
  },
  {
    title: '5 Reasons Why Expandable Homes Are Perfect for Your Backyard',
    date: 'October 5, 2024',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    category: 'Tips',
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Our Blog</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Latest News & Insights
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Stay informed with the latest in modular and expandable home living.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="group bg-surface rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-accent text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <p className="text-gray-400 text-xs">{post.date}</p>
                <h3 className="font-heading font-bold text-primary text-sm mt-2 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-accent-dark text-xs font-semibold mt-3 group/link"
                >
                  Read More
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}