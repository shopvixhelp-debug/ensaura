'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';

const shirts = [
  {
    id: '1',
    name: 'Zen Harmony Tee',
    price: 45,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 89,
    material: 'Organic Cotton',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Mindful Moments Hoodie',
    price: 68,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 93,
    material: 'Bamboo Blend',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Wellness Warriors Tank',
    price: 38,
    image: 'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 156,
    material: 'Hemp Cotton',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '4',
    name: 'Balance Crewneck',
    price: 55,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 78,
    material: 'Recycled Polyester',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];

export default function ShirtsCollection() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mindful Apparel
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comfortable, sustainable clothing designed for conscious living and self-expression
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {shirts.map((shirt, index) => (
              <motion.div
                key={shirt.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={shirt.image}
                    alt={shirt.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(shirt.rating) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({shirt.reviews})</span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {shirt.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-900">${shirt.price}</span>
                    <span className="text-sm text-gray-600">{shirt.material}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {shirt.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {size}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-2 transition-all duration-300 transform group-hover:scale-105">
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}