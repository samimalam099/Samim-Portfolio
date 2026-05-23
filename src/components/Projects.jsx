import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { PROJECTS } from '../constants/data'
import { containerVariants, itemVariants } from '../utils/animations'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-xl glass cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-slate-800">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-slate-700 text-accent rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-slate-700 text-slate-400 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.link}
            className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-dark text-slate-900 text-sm font-semibold rounded-lg transition-colors flex-1 justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiExternalLink />
            View
          </motion.a>
          <motion.a
            href={project.github}
            className="flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-slate-900 text-sm font-semibold rounded-lg transition-colors flex-1 justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiCode />
            Code
          </motion.a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -top-1 -right-1 w-40 h-40 bg-accent opacity-0 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
    </motion.div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section id="projects" className="py-20 px-4 bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-accent mx-auto" />
          <motion.p variants={itemVariants} className="text-slate-400 mt-6 text-lg">
            Showcase of my recent and notable work
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'frontend', 'fullstack', 'mobile'].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-accent text-slate-900'
                  : 'glass text-slate-300 hover:text-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            variants={itemVariants}
            className="inline-block px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-slate-900 font-bold rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
