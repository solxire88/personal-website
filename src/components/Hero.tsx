import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {

    return (
        <div id='home' className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-8 text-lg min-h-screen items-center pt-20 md:pt-40">
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className='col-span-2 lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-serif font-bold items-center '>
                Chementel Naoufel <br /> "solxire."
            </motion.div>
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className='col-span-2 lg:text-4xl md:text-4xl sm:text-3xl  text-3xl font-serif font-bold items-center'>Building Applications & Manipulating Data</motion.div>
            <div className='col-span-2 text-4xl font-serif font-bold items-center'></div>
            <div className='col-span-1 text-lg font-sans font-bold flex gap-3 align-center justify-end md:justify-start py-0 md:py-25'>
                <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.3 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://github.com/solxire88' className='text-right md:text-left tracking-tight h-5'>
                    <motion.div whileHover={{ scale: 1.1 }}
                    >Github</motion.div>
                </motion.a>
                <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.4 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/naoufel-chementel-606b3a300/' className='text-right md:text-left tracking-tight h-5'>
                    <motion.div whileHover={{ scale: 1.1 }}
                    >
                        LinkedIn
                    </motion.div>
                </motion.a>

            </div>
        </div>
    )
}
