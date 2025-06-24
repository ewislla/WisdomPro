import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web3', name: 'Web3' },
    { id: 'web2', name: 'Web2' },
    { id: 'dashboard', name: 'Dashboards' },
    { id: 'landing', name: 'Landing Pages' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-light-100 dark:bg-dark-700">
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
              Featured Work
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
              Real projects that transformed businesses and built trust with their audiences.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-400 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-500 text-dark-600 dark:text-dark-100 hover:bg-primary-50 dark:hover:bg-dark-400 border border-dark-200 dark:border-dark-400'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-white dark:bg-dark-500 rounded-2xl overflow-hidden shadow-xl border border-dark-100 dark:border-dark-400 hover:shadow-2xl hover:border-primary-500/20 dark:hover:border-primary-500/30 transition-all duration-500">
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-white/90 dark:bg-dark-600/90 rounded-lg backdrop-blur-sm hover:bg-primary-500 hover:text-white transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                        {project.codeUrl && (
                          <motion.a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-white/90 dark:bg-dark-600/90 rounded-lg backdrop-blur-sm hover:bg-primary-500 hover:text-white transition-colors duration-200"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm capitalize">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-dark-600 dark:text-dark-50 mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3 italic">
                        {project.tagline}
                      </p>
                      
                      <p className="text-dark-400 dark:text-dark-200 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-100 dark:bg-dark-600 text-dark-600 dark:text-dark-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View More */}
                      <div className="flex items-center text-primary-500 dark:text-primary-400 text-sm font-medium group-hover:text-accent-400 transition-colors duration-300">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/wisdompro"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-500 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-dark-600/90 rounded-lg backdrop-blur-sm hover:bg-red-500 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-dark-600 dark:text-dark-50">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full capitalize">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-primary-600 dark:text-primary-400 text-lg font-medium mb-4 italic">
                  {selectedProject.tagline}
                </p>

                <p className="text-dark-400 dark:text-dark-200 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Full Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-dark-600 dark:text-dark-50 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-100 dark:bg-dark-600 text-dark-600 dark:text-dark-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-400 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live</span>
                    </motion.a>
                  )}
                  
                  {selectedProject.codeUrl && (
                    <motion.a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;