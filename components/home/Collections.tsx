'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const collections = [
  {
    id: 'candles',
    name: 'Artisan Candles',
    description: 'Hand-poured candles with natural soy wax and essential oils',
    image: 'https://images.pexels.com/photos/4203091/pexels-photo-4203091.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/collections/candles',
    featured: true
  },
  {
    id: 'shirts',
    name: 'Mindful Apparel',
    description: 'Comfortable, sustainable clothing for conscious living',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/collections/shirts',
    featured: true
  },
  {
    id: 'wellness',
    name: 'Wellness Sets',
    description: 'Curated collections for your perfect self-care ritual',
    image: 'https://images.pexels.com/photos/6143181/pexels-photo-6143181.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/collections/wellness',
    featured: false
  }
];

export default function Collections() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections designed to bring tranquility and style to your life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className={`group relative overflow-hidden rounded-2xl ${
                collection.featured ? 'lg:col-span-1' : 'lg:col-span-1'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-white/90 mb-4 line-clamp-2">{collection.description}</p>
                  
                  <Link href={collection.href}>
                    <Button 
                      className="bg-white text-gray-900 hover:bg-purple-100 rounded-full px-6 py-2 transition-all duration-300 transform group-hover:scale-105"
                    >
                      Explore Collection
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}