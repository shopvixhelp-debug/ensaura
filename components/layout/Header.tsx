'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Candles', href: '/collections/candles' },
    { name: 'Shirts', href: '/collections/shirts' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <motion.div
                className="text-2xl font-bold tracking-wide"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className={`${isScrolled ? 'text-purple-600' : 'text-white'} transition-colors`}>
                  Ensaura
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Right navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className={`${isScrolled ? 'text-gray-900 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`${isScrolled ? 'text-gray-900 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-900 font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4 border-t">
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}