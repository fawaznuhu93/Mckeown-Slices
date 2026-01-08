import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, MapPin, Pizza } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  // Custom scroll function
  const scrollToSection = (hash) => {
    setIsOpen(false);
    
    // Small delay to ensure menu closes first
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without page jump
        window.history.pushState(null, null, hash);
      } else {
        console.warn(`Element ${hash} not found`);
      }
    }, 100);
  };

  // Handle click on nav items
  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  // Listen for hash changes in URL
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
          <div className="flex items-center gap-3">
            <Pizza className="w-8 h-8 text-pizza-red" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                MCKEOWN'S SLICES
              </h1>
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-3 h-3" />
                Levenshulme, Manchester
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  activeHash === item.href 
                    ? 'text-pizza-red dark:text-pizza-red' 
                    : 'text-gray-700 dark:text-gray-300'
                } hover:text-pizza-red dark:hover:text-pizza-red font-medium transition-colors relative group bg-transparent border-none cursor-pointer`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pizza-red group-hover:w-full transition-all duration-300"></span>
              </motion.button>
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
                {navItems.map((item, ) => (
                  <button
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`${
                      activeHash === item.href 
                        ? 'text-pizza-red dark:text-pizza-red' 
                        : 'text-gray-700 dark:text-gray-300'
                    } hover:text-pizza-red dark:hover:text-pizza-red font-medium py-2 border-b border-gray-200 dark:border-gray-700 text-left bg-transparent border-none cursor-pointer`}
                  >
                    {item.label}
                  </button>
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