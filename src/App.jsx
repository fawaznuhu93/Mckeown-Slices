import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Create floating pizza slices
  const renderFloatingPizzas = () => {
    return [...Array(8)].map((_, i) => (
      <div
        key={i}
        className="floating-pizza opacity-20 dark:opacity-10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${6 + Math.random() * 4}s`
        }}
      >
        <div className="w-16 h-16 border-2 border-pizza-red/30 rounded-full" />
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pizza-light/50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500 overflow-hidden relative">
      {/* Floating pizza background elements */}
      {renderFloatingPizzas()}
      
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;