import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Github, Twitter, Mail, Code, Zap, Shield } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { displayText, isComplete } = useTypewriter(
    "I build landing pages that launch like your pitch deck promised.",
    50
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-600">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 animate-gradient"
            style={{
              background: 'linear-gradient(135deg, #00F6A3 0%, #FFD369 25%, #00F6A3 50%, #FFD369 75%, #00F6A3 100%)',
              backgroundSize: '400% 400%',
            }}
          />
        </div>
        
        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00F6A3 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #FFD369 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Code Snippets */}
     

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated Stats - Top Right */}
     

      {/* Live Activity Feed - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-8 hidden xl:block"
      >
        
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Enhanced Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              {/* Enhanced Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50"
                />
                
              </motion.div>

              {/* Enhanced Main Headline */}
              <div className="space-y-6">
                <h1 className="text-hero-mobile lg:text-hero font-bold text-dark-50 leading-tight">
                  <span className="block">
                    {displayText}
                    {!isComplete && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-primary-500 ml-1"
                      >
                        |
                      </motion.span>
                    )}
                  </span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="text-xl lg:text-2xl text-dark-100 max-w-2xl leading-relaxed font-medium"
                >
                  For Web2 & Web3 founders who need more than just a website — 
                  they need{' '}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-primary-500 font-bold bg-primary-500/10 px-2 py-1 rounded-md cursor-default"
                  >
                    trust
                  </motion.span>
                  ,{' '}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-accent-400 font-bold bg-accent-400/10 px-2 py-1 rounded-md cursor-default"
                  >
                    clarity
                  </motion.span>
                  , and{' '}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-primary-500 font-bold bg-primary-500/10 px-2 py-1 rounded-md cursor-default"
                  >
                    conversion
                  </motion.span>
                  .
                </motion.p>
              </div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-dark-600 rounded-xl font-bold text-lg shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative flex items-center justify-center space-x-3">
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>View Project</span>
                  </span>
                </motion.button>

                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 border-2 border-accent-400 text-accent-400 rounded-xl font-bold text-lg hover:bg-accent-400 hover:text-dark-600 transition-all duration-300 shadow-lg hover:shadow-accent-400/30"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Let's Build</span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
                className="space-y-6"
              >
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'Framer Motion', 'Firebase', 'Solidity', 'Tailwind'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3.2 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-dark-500/50 backdrop-blur-sm border border-primary-500/20 text-primary-400 text-sm font-medium rounded-lg hover:border-primary-500/40 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-6">
                  <span className="text-sm text-dark-300 font-medium">
                    Connect with me:
                  </span>
                  <div className="flex items-center space-x-4">
                    {[
                      { icon: Github, href: 'https://github.com/ewislla', label: 'GitHub', color: 'hover:text-white' },
                      { icon: Twitter, href: 'https://x.com/WisdomPr0', label: 'Twitter', color: 'hover:text-blue-400' },
                      { icon: Mail, href: '#contact', label: 'Email', color: 'hover:text-primary-400' }
                    ].map(({ icon: Icon, href, label, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-xl bg-dark-500/50 backdrop-blur-sm border border-dark-400 text-dark-200 ${color} transition-all duration-300 hover:border-primary-500/40 hover:shadow-lg`}
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Professional Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative lg:justify-self-end"
            >
              <div className="relative max-w-lg mx-auto">
                {/* Enhanced Glassmorphism Frame */}
                <motion.div
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-400/20 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl"
                />
                
                {/* Main Visual Container */}
                <div className="relative bg-gradient-to-br from-primary-500 to-accent-400 p-1 rounded-3xl shadow-2xl">
                  {/* Professional Workspace Visual */}
                  <div className="relative bg-dark-500 rounded-3xl p-8 overflow-hidden">
                    {/* Code Editor Mockup */}
                    <div className="bg-dark-600 rounded-xl p-4 mb-4 border border-dark-400">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-dark-300 text-xs ml-4">WisdomPro.tsx</span>
                      </div>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="text-primary-400">const <span className="text-accent-400">buildTrust</span> = () =&gt; &#123;</div>
                        <div className="text-dark-200 ml-4">return <span className="text-primary-400">'conversion-focused'</span>;</div>
                        <div className="text-primary-400">&#125;;</div>
                      </div>
                    </div>

                    {/* Metrics Display */}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-dark-600 rounded-lg p-3 border border-primary-500/20 hover:border-primary-500/40 transition-colors duration-300"
                      >
                        <div className="text-primary-400 text-xs font-medium">Conversion Rate</div>
                        <div className="text-white text-lg font-bold">+340%</div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-dark-600 rounded-lg p-3 border border-accent-400/20 hover:border-accent-400/40 transition-colors duration-300"
                      >
                        <div className="text-accent-400 text-xs font-medium">Trust Score</div>
                        <div className="text-white text-lg font-bold">98%</div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute -top-6 -right-6 bg-dark-500/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-primary-500/20 hover:border-primary-500/40 transition-colors duration-300"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">50+</div>
                    <div className="text-xs text-dark-300">Projects</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute -bottom-6 -left-6 bg-dark-500/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-accent-400/20 hover:border-accent-400/40 transition-colors duration-300"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">2hrs</div>
                    <div className="text-xs text-dark-300">Response</div>
                  </div>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-1/4 -left-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-1/4 -right-8 w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Shield className="w-6 h-6 text-dark-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center space-y-2 text-dark-300 hover:text-primary-400 transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center group-hover:border-primary-400 transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;