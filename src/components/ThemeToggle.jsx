import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-pizza-orange to-pizza-red dark:from-gray-700 dark:to-gray-800 p-1 transition-all duration-500 shadow-lg hover:shadow-xl"
    >
      <motion.div
        animate={{ x: darkMode ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center"
      >
        {darkMode ? (
          <Moon className="w-4 h-4 text-pizza-orange" />
        ) : (
          <Sun className="w-4 h-4 text-pizza-red" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
};

export default ThemeToggle;