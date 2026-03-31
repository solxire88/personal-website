import React from 'react'
import { motion } from 'framer-motion'

const tutoringServices = [
    'Web development',
    'Machine learning',
    'Data engineering',
    'Data analysis',
    'Project guidance',
]

const freelanceServices = [
    'Custom websites / E-commerce solutions',
    'Data pipelines',
    'Dashboarding / Data analysis',
    'Web scraping',
    'Scripting / Automation',
]

export default function Services() {
    return (
        <div id='services' className='min-h-screen pb-24 md:pb-32 lg:pb-40'>
            <motion.h1
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='md:text-5xl text-4xl text-center font-serif font-bold lg:py-20 py-30'
            >
                Services
            </motion.h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 px-2 md:px-8 lg:px-16 font-sans text-sm tracking-tight'>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className='flex flex-col items-center gap-7 md:gap-8 px-2 md:px-6 lg:px-8 py-4 md:py-6'
                >
                    <h2 className='text-base md:text-lg text-center'>Tutoring & Mentorship</h2>
                    <div className='h-px w-full max-w-md bg-black/20 dark:bg-white/20' />
                    <p className='max-w-md leading-tight opacity-80 text-left'>
                        Personalized support for students, beginners, and builders.
                        I help you learn through practical, hands-on guidance tailored to your goals.
                    </p>
                    <div className='flex flex-col gap-2 md:gap-3 opacity-80 w-full max-w-md'>
                        {tutoringServices.map((service) => (
                            <p key={service} className='leading-tight text-left'>
                                • {service}
                            </p>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className='flex flex-col items-center gap-7 md:gap-8 px-2 md:px-6 lg:px-8 py-4 md:py-6'
                >
                    <h2 className='text-base md:text-lg text-center'>Freelance Projects</h2>
                    <div className='h-px w-full max-w-md bg-black/20 dark:bg-white/20' />
                    <p className='max-w-md leading-tight opacity-80 text-left'>
                        I build practical solutions for clients and businesses.
                        Whether you need a website or a data-driven solution, I deliver work that is clear, efficient, and reliable.
                    </p>
                    <div className='flex flex-col gap-2 md:gap-3 opacity-80 w-full max-w-md'>
                        {freelanceServices.map((service) => (
                            <p key={service} className='leading-tight text-left'>
                                • {service}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='flex justify-center pt-16 md:pt-20'
            >
                <a
                    href='#contact'
                    className='font-sans text-sm md:text-base tracking-tight bg-transparent border-0 p-0 underline underline-offset-4'
                >
                    Request a Service
                </a>
            </motion.div>
        </div>
    )
}
