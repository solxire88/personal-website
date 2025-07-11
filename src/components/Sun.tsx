import React from 'react'
import { motion } from 'framer-motion'


export default function Sun() {


    return (
        <div className='flex flex-col gap-16 justify-center items-center w-full py-20 '>
            <motion.div
                whileHover={{ scale: 1.1 }}
            >
                <picture>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className='animate-spin-slow dark:hidden' src="https://tntaizamsozuvsaecpsl.supabase.co/storage/v1/object/public/portfolio/images/sunblack.svg" ></motion.img>
                </picture>
                <picture>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className='animate-spin-slow light:hidden' src="https://tntaizamsozuvsaecpsl.supabase.co/storage/v1/object/public/portfolio/images/sunwhite.svg" ></motion.img>
                </picture>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className='text-2xl md:text-3xl lg:text-3xl font-bold font-serif text-center '>
                <p>“I will stay behind, to gaze at the sun. </p>
                <p>The sun is a wondrous body.</p>
                <p>Like a magnificent father!</p>
                <p>If only I could be so grossly incandescent! ”</p>
                <p>-Solaire Of Astora</p>
            </motion.div>
        </div>
    )
}
