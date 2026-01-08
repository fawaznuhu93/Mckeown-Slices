import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, MapPin, Pizza } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'Menu', href: 'menu' },
    { label: 'Gallery', href: 'gallery' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-pizza rounded-full flex items-center justify-center">
              <Pizza className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-nyc font-bold nyc-gradient-text">
                MCKEOWN'S SLICES
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Levenshulme, Manchester
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 dark:text-gray-300 hover:text-pizza-red dark:hover:text-pizza-red font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pizza-red to-pizza-orange group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/mckeowns.slices"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-2 rounded-full hover:shadow-lg transition-shadow"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            
            {/* Theme Toggle */}
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 dark:text-gray-300 hover:text-pizza-red dark:hover:text-pizza-red font-medium py-2 border-b border-gray-200 dark:border-gray-700"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex items-center justify-between pt-4">
                  <motion.a
                    href="https://instagram.com/mckeowns.slices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-600"
                  >
                    <Instagram className="w-5 h-5" />
                    @mckeowns.slices
                  </motion.a>
                  <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;