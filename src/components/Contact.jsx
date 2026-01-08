import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Pizza, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    amount: '' ,
   
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Using FormSubmit.co
    const form = e.target;
    form.submit();
    
    // Show success message
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', message: '', orderType: 'collection' });
    }, 100);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-pizza-light/20 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-pizza-red/20 to-pizza-orange/20 rounded-full text-pizza-red dark:text-pizza-orange font-semibold mb-6">
            CALL NOW
          </span>
          <h2 className="text-5xl md:text-6xl font-nyc font-bold mb-6">
            <span className="nyc-gradient-text">Get Your Slice</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Call us directly to book your slices or send your Booking detail via the form below . We're open Friday 5PM-10PM & Saturday 1PM-8PM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <div>
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Us",
                  details: ["3a Chapel St", "Levenshulme", "Manchester M19 3QB"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call to Order",
                  details: ["0161 123 4567"],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Opening Hours",
                  details: ["Fri: 5PM - 10PM", "Sat: 1PM - 8PM", "Sun-Thu: Closed"],
                  color: "from-purple-500 to-violet-500"
                },
                {
                  icon: <Pizza className="w-6 h-6" />,
                  title: "Price Range",
                  details: ["£10 - £20 per person"],
                  color: "from-pizza-red to-pizza-orange"
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${info.color} rounded-2xl mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-400 mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-0 overflow-hidden shadow-lg"
            >
              <div className="h-96 rounded-2xl overflow-hidden">
                <iframe
                  title="Mckeown's Slices Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.123456!2d-2.200000!3d53.444444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1234567890%3A0xabcdef123456789!2s3a%20Chapel%20St%2C%20Levenshulme%2C%20Manchester%20M19%203QB!5e0!3m2!1sen!2suk!4v1234567890!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Order Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    We'll call you shortly to confirm your order. Estimated wait time: 30-45 minutes.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="btn-pizza"
                  >
                    Send Another Booking
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-3xl font-bold mb-8">Book Now</h3>
                  
                  {/* FORM SUBMIT FORM */}
                  <form 
                    action="https://formsubmit.co/fawaznuhu93@gmail.com"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* FormSubmit Hidden Fields */}
                    <input type="hidden" name="_subject" value="New Booking Enquiry - Mckeown's Slices" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pizza-red transition"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pizza-red transition"
                        placeholder="4461 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Amount (Number of Pizzas) *
                     </label>
                     <input
                     type="number"
                     name="amount"
                     required
                     min="1"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pizza-red transition"
                    placeholder=" 10 pizzas"
                     />
                   </div>
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Booking Details *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pizza-red transition resize-none"
                        placeholder="1x Pepperoni Pizza (Thin crust), 1x Garlic Herb dip, 2x Coca Cola..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full btn-pizza text-lg py-4"
                    >
                      <Send className="inline-block w-5 h-5 mr-2" />
                      Reserve your Slice
                    </motion.button>
                  </form>
                  
                  {/* Direct Contact */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                      Prefer to call directly?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="tel:01611234567" 
                        className="px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors text-center"
                      >
                        📞 Call Now
                      </a>
                      <a 
                        href="https://instagram.com/mckeowns.slices" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-xl font-medium hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors text-center"
                      >
                        📸 Instagram DM
                      </a>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;