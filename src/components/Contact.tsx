import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <div
            id='contact'
            className='grid grid-cols-1 md:grid-cols-2 '>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='md:text-5xl text-4xl text-start font-serif font-bold py-10 '>Contact</motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center items-start ">
                <p className='text-sm opacity-50'> Email </p>
                <p className='text-sm '>n.chementel@esi-sba.dz</p>
            </motion.div>
        </div>
    )
}
