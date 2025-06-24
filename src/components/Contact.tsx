import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Send, Mail, MessageCircle, Github, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactForm>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      project: '',
      budget: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const projectTypes = [
    'Landing Page',
    'Web Application',
    'E-commerce Site',
    'Portfolio Website',
    'Web3/DeFi Platform',
    'Dashboard/Admin Panel',
    'Mobile App (React Native)',
    'Other'
  ];

  const budgetRanges = [
    '$5K - $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K+'
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@wisdompro.dev',
      href: 'mailto:hello@wisdompro.dev',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: '@wisdompro',
      href: 'https://t.me/wisdompro',
      color: 'from-sky-500 to-sky-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/wisdompro',
      href: 'https://github.com/wisdompro',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@wisdompro',
      href: 'https://twitter.com/wisdompro',
      color: 'from-blue-400 to-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-light-100 dark:bg-dark-700">
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
              Ready to Build Trust?
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
              className="text-xl text-dark-400 dark:text-dark-200 max-w-3xl mx-auto leading-relaxed"
            >
              You don't need a site that just "exists." You need one that makes people say: 
              <span className="text-primary-500 font-semibold"> "Okay, this is serious."</span> Let's build that.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-white dark:bg-dark-500 rounded-2xl p-8 shadow-xl border border-dark-100 dark:border-dark-400">
                <h3 className="text-2xl font-bold text-dark-600 dark:text-dark-50 mb-6">
                  Start Your Project
                </h3>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-green-700 dark:text-green-300">
                      Message sent successfully! I'll respond within 24 hours.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg flex items-center space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span className="text-red-700 dark:text-red-300">
                      Something went wrong. Please try again or contact me directly.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-600 dark:text-dark-100 mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-light-50 dark:bg-dark-600 text-dark-600 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-dark-200 dark:border-dark-500 focus:border-primary-500'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-600 dark:text-dark-100 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-light-50 dark:bg-dark-600 text-dark-600 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-dark-200 dark:border-dark-500 focus:border-primary-500'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-dark-600 dark:text-dark-100 mb-2">
                      Project Type *
                    </label>
                    <select
                      {...register('project', { required: 'Please select a project type' })}
                      id="project"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-light-50 dark:bg-dark-600 text-dark-600 dark:text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                        errors.project 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-dark-200 dark:border-dark-500 focus:border-primary-500'
                      }`}
                    >
                      <option value="">Select project type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.project && (
                      <p className="mt-1 text-sm text-red-500">{errors.project.message}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-dark-600 dark:text-dark-100 mb-2">
                      Budget Range
                    </label>
                    <select
                      {...register('budget')}
                      id="budget"
                      className="w-full px-4 py-3 rounded-lg border-2 border-dark-200 dark:border-dark-500 focus:border-primary-500 transition-colors duration-300 bg-light-50 dark:bg-dark-600 text-dark-600 dark:text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select budget range...</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-600 dark:text-dark-100 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      {...register('message', { 
                        required: 'Please describe your project',
                        minLength: { value: 10, message: 'Please provide more details (minimum 10 characters)' }
                      })}
                      id="message"
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-light-50 dark:bg-dark-600 text-dark-600 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-vertical ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-dark-200 dark:border-dark-500 focus:border-primary-500'
                      }`}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting || !isValid
                        ? 'bg-dark-300 dark:bg-dark-600 text-dark-500 dark:text-dark-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-500 to-accent-400 text-white hover:shadow-primary-500/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-white dark:bg-dark-500 rounded-2xl p-8 shadow-xl border border-dark-100 dark:border-dark-400">
                <h3 className="text-2xl font-bold text-dark-600 dark:text-dark-50 mb-6">
                  Quick Connect
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-light-50 dark:bg-dark-600 hover:bg-primary-50 dark:hover:bg-dark-400 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-dark-600 dark:text-dark-100">
                          {method.label}
                        </div>
                        <div className="text-dark-400 dark:text-dark-300 text-sm">
                          {method.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="bg-gradient-to-br from-primary-500/10 to-accent-400/10 dark:from-primary-500/20 dark:to-accent-400/20 rounded-2xl p-6 border border-primary-500/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    Currently Available
                  </span>
                </div>
                <p className="text-dark-600 dark:text-dark-100 mb-4">
                  I'm accepting new projects for Q1 2025. Let's discuss how we can transform your digital presence.
                </p>
                <div className="space-y-2 text-sm text-dark-500 dark:text-dark-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                    <span>Project start: 1-2 weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                    <span>Free consultation available</span>
                  </div>
                </div>
              </motion.div>

              {/* Trust Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="bg-white dark:bg-dark-500 rounded-2xl p-6 shadow-xl border border-dark-100 dark:border-dark-400"
              >
                <blockquote className="text-lg italic text-dark-600 dark:text-dark-100 mb-4">
                  "The difference between 'meh' and 'money' is first impression design."
                </blockquote>
                <cite className="text-primary-500 font-semibold">
                  — My design philosophy
                </cite>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;