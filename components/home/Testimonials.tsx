'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wellness Enthusiast',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: "Ensaura's candles have transformed my evening routine. The lavender scent is absolutely divine and the quality is unmatched.",
    product: 'Lavender Dreams Candle'
  },
  {
    id: 2,
    name: 'Emily Chen',
    role: 'Mindful Living Advocate',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: "The shirts are incredibly soft and the messaging aligns perfectly with my values. I wear them everywhere!",
    product: 'Zen Harmony Tee'
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Yoga Instructor',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: "I use Ensaura candles in all my yoga classes. They create the perfect ambiance for mindfulness and relaxation.",
    product: 'Eucalyptus Mint Candle'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Ensaura part of their wellness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="text-sm text-purple-600 font-medium">
                Purchased: {testimonial.product}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}