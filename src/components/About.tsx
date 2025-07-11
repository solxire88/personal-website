import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <div>
            <div>
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='md:text-5xl text-4xl text-center font-serif font-bold lg:py-20 py-30'>About</motion.h1>
            </div>
            <div
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 items-stretch grid-rows-1  min-h-1/2 ">

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className=" col-span-2 md:col-span-2 lg:col-span-2 text-2xl leading-tight lg:pr-25 row-span-2 items-center flex lg:text-justify text-center justify-center  " >
                    I'm a software developer and data scientist who loves design. I co-founded Pelorus and Literature & Science Bookshelf. I speak English, French, and Arabic, and enjoy working on meaningful ideas.
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 w-full lg:px-5  dark:hidden flex justify-center items-center">
                        <picture>
                            <img src="https://tntaizamsozuvsaecpsl.supabase.co/storage/v1/object/public/portfolio/logos/LSlogoblack.svg"></img>
                        </picture>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 w-fill lg:px-5  light:hidden flex justify-center items-center">
                        <picture>
                            <img src="https://tntaizamsozuvsaecpsl.supabase.co/storage/v1/object/public/portfolio/logos/LSlogowhite.svg"></img>
                        </picture>
                    </motion.div>
                </motion.div>
                <div className="col-span-1 w-fill p-5  ">
                </div>
                <div className="col-span-1 w-fill p-5  ">
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 w-fill lg:px-5  dark:hidden flex justify-center items-center">
                        <picture>
                            <img src="https://tntaizamsozuvsaecpsl.supabase.co/storage/v1/object/public/portfolio/images/Pelorus%20light%201.svg"></img>
                        </picture>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 w-fill lg:px-5  light:hidden flex justify-center items-center">
                        <picture>
                            <img src="https://tntaizamsozuvsaecpsl.supabase.co/storage/v1/object/public/portfolio/images/Pelorus%20Black%201.svg"></img>
                        </picture>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
} 
