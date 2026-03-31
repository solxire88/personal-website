'use client'

import React, { useState } from 'react'
import ProjectUnit from './ProjectUnit'
import Project from '../types/project'
import projects from '../data/projects.json'
import { motion } from 'framer-motion'

export default function Projects() {
    const projectList = projects as Project[]
    const [activeTab, setActiveTab] = useState<Project['category']>('dev')
    const filteredProjects = projectList.filter(
        (project) => project.category === activeTab
    )


    return (
        <div id='projects' className='min-h-screen'>
            <motion.h1
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='md:text-5xl text-4xl text-center font-serif font-bold lg:py-20 py-30'>Selected Projects</motion.h1>
            <div className='flex items-center justify-center gap-6 pb-12 font-sans text-sm md:text-base tracking-tight'>
                <button
                    type='button'
                    onClick={() => setActiveTab('dev')}
                    className={`bg-transparent border-0 p-0 ${activeTab === 'dev' ? 'underline underline-offset-4' : ''}`}
                >
                    Software
                </button>
                <button
                    type='button'
                    onClick={() => setActiveTab('data')}
                    className={`bg-transparent border-0 p-0 ${activeTab === 'data' ? 'underline underline-offset-4' : ''}`}
                >
                    Data
                </button>
            </div>
            <div>
                {filteredProjects.map((project, index) => (
                    <ProjectUnit key={project.id} id={index} projectTitle={project.title} url={project.url} field={project.field} tools={project.tools} about={project.about} images={project.images} />
                ))}
            </div>
        </div>
    )
}
