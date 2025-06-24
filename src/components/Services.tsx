import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Shield, TrendingUp, Brain, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Rocket,
  Shield,
  TrendingUp,
  Brain,
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-light-50 dark:bg-dark-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold text-dark-600 dark:text-dark-50 mb-4"
            >
              What I Build
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-dark-400 dark:text-dark-200 max-w-3xl mx-auto"
            >
              Specialized services that transform visitors into believers and browsers into buyers.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-dark-500 rounded-2xl p-8 shadow-xl border border-dark-100 dark:border-dark-400 hover:shadow-2xl hover:border-primary-500/20 dark:hover:border-primary-500/30 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-dark-600 dark:text-dark-50 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-dark-400 dark:text-dark-200 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + featureIndex * 0.05 }}
                            className="flex items-center space-x-3 text-sm text-dark-500 dark:text-dark-300"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center space-x-2 text-primary-500 dark:text-primary-400 font-semibold mt-6 group-hover:text-accent-400 transition-colors duration-300"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-400/10 dark:from-primary-500/20 dark:to-accent-400/20 rounded-2xl p-8 border border-primary-500/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-dark-600 dark:text-dark-50 mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-dark-400 dark:text-dark-200 mb-6">
                Let's discuss how we can build trust, increase conversions, and create an unforgettable user experience.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;