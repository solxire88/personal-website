import React from 'react'
import ProjectUnit from './ProjectUnit'
import Project from '../types/project'
import projects from '../data/projects.json'
import { motion } from 'framer-motion'

export default function Projects() {


    return (
        <div className='min-h-screen'>
            <motion.h1
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='md:text-5xl text-4xl text-center font-serif font-bold lg:py-20 py-30'>Selected Projects</motion.h1>
            <div>
                {projects.map((project: Project) => (
                    <ProjectUnit key={project.id} id={project.id} projectTitle={project.title} url={project.url} field={project.field} tools={project.tools} about={project.about} images={project.images} />
                ))}
            </div>
        </div>
    )
}
