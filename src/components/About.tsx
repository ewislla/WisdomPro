import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Zap, Shield, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Web3 Integration', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Conversion Optimization', level: 92 },
  ];

  const highlights = [
    {
      icon: Target,
      title: 'UX Clarity Specialist',
      description: 'I make complex ideas instantly understandable'
    },
    {
      icon: Shield,
      title: 'Trust Redesign Expert',
      description: 'Transform skepticism into confidence'
    },
    {
      icon: Zap,
      title: 'Conversion-Focused Builder',
      description: 'Every element serves a purpose'
    },
    {
      icon: TrendingUp,
      title: 'Web2 & Web3 Experience',
      description: 'Bridging traditional and blockchain worlds'
    },
  ];

  return (
    <section id="about" className="py-20 bg-light-100 dark:bg-dark-700">
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
              Who I Work With
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
              I work with founders who want to stand out without saying a word. 
              I don't just build pages — I design trust systems that make people say: 
              <span className="text-primary-500 font-semibold"> "Okay, this is serious."</span>
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-8"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-400 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-600 dark:text-dark-50 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-dark-400 dark:text-dark-200">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-dark-500 rounded-2xl p-8 shadow-xl border border-dark-100 dark:border-dark-400">
                <h3 className="text-2xl font-bold text-dark-600 dark:text-dark-50 mb-6">
                  Technical Expertise
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-dark-600 dark:text-dark-100">
                          {skill.name}
                        </span>
                        <span className="text-sm text-dark-400 dark:text-dark-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-dark-200 dark:bg-dark-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                          className="h-2 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2 }}
                className="bg-gradient-to-br from-primary-500/10 to-accent-400/10 dark:from-primary-500/20 dark:to-accent-400/20 rounded-2xl p-6 border border-primary-500/20"
              >
                <blockquote className="text-lg italic text-dark-600 dark:text-dark-100 mb-4">
                  "If your site doesn't build trust in 5 seconds, it's costing you money."
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

export default About;