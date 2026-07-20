import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'David W',
    location: 'NSW',
    text: "ALB Home provided us with an affordable and stylish living solution. The quality exceeded our expectations and the team was professional throughout the entire process.",
    rating: 5,
  },
  {
    name: 'Ben Williams',
    location: 'Melbourne',
    text: "The entire experience was efficient and completely stress-free. From initial consultation to handover, the ALB Home team delivered exactly what they promised. Highly recommend.",
    rating: 5,
  },
  {
    name: 'Sam Dan',
    location: 'Sydney',
    text: "What a practical and well-built home! The build quality is exceptional and the open-plan design makes the space feel much larger than expected. Couldn't be happier.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">
            <Star size={14} />
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Hear from homeowners who have chosen ALB Home for their living solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 card-hover relative"
            >
              <Quote size={32} className="text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic">"{item.text}"</p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-heading font-bold text-primary">{item.name}</p>
                <p className="text-gray-400 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}