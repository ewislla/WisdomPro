import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-light-50 dark:bg-dark-600">
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
              What Founders Say
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
              Real results from real founders who transformed their digital presence.
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-500 rounded-2xl p-8 shadow-xl border border-dark-100 dark:border-dark-400 hover:shadow-2xl hover:border-primary-500/20 dark:hover:border-primary-500/30 transition-all duration-300 h-full relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4 pt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-accent-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-dark-600 dark:text-dark-100 mb-6 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500/20">
                      <img
                        src={testimonial.avatar || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <cite className="text-dark-600 dark:text-dark-50 font-semibold not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="text-dark-400 dark:text-dark-300 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '340%', label: 'Avg. Conversion Increase' },
              { number: '24h', label: 'Response Time' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-400 dark:text-dark-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-400/10 dark:from-primary-500/20 dark:to-accent-400/20 rounded-2xl p-8 border border-primary-500/20 max-w-4xl mx-auto">
              <blockquote className="text-2xl font-bold text-dark-600 dark:text-dark-50 mb-4">
                "I redesign doubt into belief."
              </blockquote>
              <p className="text-dark-400 dark:text-dark-200">
                Every project is an opportunity to transform skepticism into trust, 
                visitors into customers, and ideas into profitable realities.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;