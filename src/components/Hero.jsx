import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Pizza, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pizza-red/90 via-pizza-orange/80 to-pizza-brown/90" />
        
        {/* INSERT YOUR PIZZA BACKGROUND IMAGE HERE */}
        {/* Replace the div below with your actual image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1920')] bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: 'url()' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Rating Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-lg text-white">
              4.8/5 <span className="text-pizza-light">(13 Reviews)</span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-nyc font-bold"
          >
            <span className="nyc-gradient-text">MCKEOWN'S</span>
            <br />
            <span className="text-white">SLICES</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl text-pizza-light font-italian italic">
              "Italian Inspired, New York Style"
            </p>
            <p className="text-xl text-pizza-light font-manchester">
              Made in Manchester • 14" Full Pies • Fresh Daily
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-pizza text-lg px-12 py-4"
            >
              View Our Menu
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:border-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              Contact Now
            </motion.a>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12"
          >
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "3a Chapel St",
                desc: "Levenshulme, Manchester M19 3QB"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Open Today",
                desc: "Friday: 5PM - 10PM"
              },
              {
                icon: <Pizza className="w-8 h-8" />,
                title: "Premium Pizza",
                desc: "£10 - £20 per person"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="inline-block p-3 bg-gradient-to-br from-pizza-red/20 to-pizza-orange/10 rounded-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-pizza-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-pizza-yellow animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;