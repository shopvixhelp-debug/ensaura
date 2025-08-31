'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Heart, Sparkles, Award } from 'lucide-react';
import Header from '@/components/layout/Header';

const values = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Sustainable',
    description: 'We use eco-friendly materials and sustainable production practices in everything we create.'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Mindful',
    description: 'Every product is designed to promote wellness, self-care, and mindful living.'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Artisan Quality',
    description: 'Handcrafted with meticulous attention to detail and premium materials.'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Ethically Made',
    description: 'Fair trade practices and ethical sourcing guide our entire supply chain.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
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
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Creating moments of peace and mindfulness through thoughtfully crafted products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Founded on Wellness
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Ensaura, we believe wellness is not just about what you use, 
                but how it makes you feel. Founded by Kavya Pugh, a psychology 
                graduate with a deep understanding of mental wellness, Ensaura 
                combines mindful design with thoughtful craftsmanship.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Rooted in the philosophy of self-kindness, Ensaura combines 
                information, design, mental health and guided promoting practices 
                to help individuals reconnect with themselves. Each product is 
                designed to encourage practices like meditation, breathwork, 
                and everyday healing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                More than a brand, Ensaura is a reminder that healing is 
                accessible, taking place through our everyday products, 
                interactions and practices that fit seamlessly into your life.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Ensaura founder story"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ensaura
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 bg-purple-100 rounded-full text-purple-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To empower people to embrace beautiful rituals that bring calm, 
              balance, and self-kindness. We create products that inspire 
              self-reflection, emotional well-being, and meaningful sustainable 
              way through sustainable practices and thoughtful design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Unique Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-600">Years of Wellness</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}