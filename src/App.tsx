import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import CursorTrail from './components/CursorTrail';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-50 dark:bg-dark-600 relative overflow-x-hidden">
        {/* Fixed Elements */}
        <ScrollProgress />
        <CursorTrail />
        <FloatingShapes />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        
        {/* Enhanced Footer */}
        <footer className="bg-dark-700 text-dark-100 py-16 border-t border-primary-500/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
                <div className="md:col-span-2">
                  <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-400 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">W</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full animate-pulse" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-primary-500 font-mono">&lt;/&gt;</span>
                      <span className="text-2xl font-bold">WisdomPro</span>
                    </div>
                  </div>
                  <p className="text-dark-300 text-lg leading-relaxed max-w-md">
                    Building trust through design. Creating landing pages that convert visitors into believers.
                    <span className="block mt-2 text-primary-400 font-semibold">
                      "The difference between 'meh' and 'money' is first impression design."
                    </span>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-6 text-primary-400">Quick Links</h4>
                  <ul className="space-y-3 text-dark-300">
                    {[
                      { name: 'About', href: '#about' },
                      { name: 'Projects', href: '#projects' },
                      { name: 'Services', href: '#services' },
                      { name: 'Contact', href: '#contact' }
                    ].map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="hover:text-primary-400 transition-colors duration-300 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-6 text-accent-400">Connect</h4>
                  <ul className="space-y-3 text-dark-300">
                    {[
                      { name: 'GitHub', href: '#' },
                      { name: 'Twitter', href: '#' },
                      { name: 'LinkedIn', href: '#' },
                      { name: 'Email', href: 'mailto:hello@wisdompro.dev' }
                    ].map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="hover:text-accent-400 transition-colors duration-300 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-dark-600 pt-8 mt-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-dark-400 text-sm">
                    © {new Date().getFullYear()} WisdomPro. Built with React, TypeScript, and lots of ☕
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-dark-400">
                    <span>🟢 Available for new projects</span>
                    <span>⚡ Usually responds in 2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;