import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pizza, Star, Flame, Leaf, ChefHat } from 'lucide-react';
import pizzaData from '../data/Pizzas';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Pizzas', icon: <Pizza /> },
    { id: 'classic', label: 'Classic', icon: <ChefHat /> },
    { id: 'spicy', label: 'Spicy', icon: <Flame /> },
    { id: 'veggie', label: 'Veggie', icon: <Leaf /> }
  ];

  const filteredPizzas = selectedCategory === 'all' 
    ? pizzaData 
    : pizzaData.filter(pizza => pizza.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-pizza-light/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-pizza-red/20 to-pizza-orange/20 rounded-full text-pizza-red dark:text-pizza-orange font-semibold mb-6">
            OUR SIGNATURE PIES
          </span>
          <h2 className="text-5xl md:text-6xl font-nyc font-bold mb-6">
            <span className="nyc-gradient-text">14" FULL PIES</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Authentic New York style pizza with Italian inspiration. All pizzas are 14" and made fresh daily.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-pizza text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPizzas.map((pizza, index) => (
            <motion.div
              key={pizza.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="pizza-card group"
            >
              {/* Pizza Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                {/* INSERT YOUR PIZZA IMAGE HERE */}
                {/* Replace the div below with your actual image */}
                <div 
                  className="w-full h-full bg-gray-200 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${pizza.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full">
                  <span className="font-bold text-lg">£{pizza.price}</span>
                </div>
                
                {/* Spicy Badge */}
                {pizza.spicy && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SPICY
                  </div>
                )}
              </div>

              {/* Pizza Info */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{pizza.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{pizza.description}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-bold">{pizza.rating}</span>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Ingredients:</p>
                  <div className="flex flex-wrap gap-2">
                    {pizza.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-pizza-red/10 text-pizza-red dark:text-pizza-orange rounded-full text-xs font-medium"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Customization Options */}
                <div className="space-y-3 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Crust Type
                    </label>
                    <div className="flex gap-2">
                      {['Thin', 'Thick', 'Stuffed'].map(crust => (
                        <button
                          key={crust}
                          className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:border-pizza-red hover:text-pizza-red transition-colors"
                        >
                          {crust}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Extra Toppings (£1 each)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Pepperoni', 'Mushrooms', 'Olives', 'Jalapeños'].map(topping => (
                        <button
                          key={topping}
                          className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full hover:border-pizza-red hover:text-pizza-red transition-colors"
                        >
                          + {topping}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Order Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-pizza"
                  href="#contact"
                >
                  Call To Reserve
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dips & Drinks Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-nyc font-bold text-center mb-8 nyc-gradient-text">
            DIPS & DRINKS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Dips */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Dips (£1.50)</h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span>Garlic Herb</span>
                  <span className="font-bold">£1.50</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span>Hot Honey</span>
                  <span className="font-bold">£1.50</span>
                </li>
              </ul>
            </div>
            
            {/* Drinks */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Drinks</h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span>Still Water (500ml)</span>
                  <span className="font-bold">£1.50</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span>Coca Cola (330ml)</span>
                  <span className="font-bold">£2.50</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span>Fanta Orange (330ml)</span>
                  <span className="font-bold">£2.50</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;