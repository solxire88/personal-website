import React from 'react'
import { useState } from 'react'
import { supabase } from '../data/supabase'
import { motion } from 'framer-motion'

export default function ProjectUnit({ id, projectTitle, url, tools, images, field, about }: { id: number, projectTitle: any, url: any, tools: any, images: any, field: any, about: any }) {

    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

    const openLightbox = (src: string) => setLightboxSrc(src)
    const closeLightbox = () => setLightboxSrc(null)

    console.log(url)

    return (
        <div className='py-20'>

            {lightboxSrc && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeLightbox}
                >
                    <img
                        src={lightboxSrc}
                        alt="Enlarged"
                        className="max-w-3/4 max-h-3/4 rounded-lg shadow-lg"
                    />
                </div>
            )}
            <div className="flex justify-between ">
                <motion.a
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    whileHover={{ opacity: 0.5 }}
                    className='md:text-3xl text-xl text-center font-bold opacity-80 hover:opacity-69 tracking-tight'
                    href={url}

                >{projectTitle}</motion.a>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    className='md:text-3xl text-xl text-center font-bold opacity-80 tracking-tight'>
                    [0{id}]
                </motion.div>
            </div>
            <hr className='h-1 my-2 text-black/30 dark:text-white/60' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="col-span-1 ">
                    <p className='text-sm opacity-50 pb-1 tracking-tight ' >Field</p>
                    {field.map((f: any) => (
                        <p className=' text-sm max-h-5 opacity-80 tracking-tight ' key={Math.random()}>{f}</p>
                    ))}
                </ motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.15, duration: 0.5, ease: 'easeInOut' }}
                    className="col-span-1 ">
                    <p className='text-sm opacity-50 pb-1 tracking-tight' >Tools</p>

                    {tools.map((t: any) => (
                        <p className=' text-sm max-h-5 opacity-80 tracking-tight' key={Math.random()}>{t}</p>
                    ))}
                </ motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: 'easeInOut' }}
                    className="col-span-1 md:col-span-2">
                    <p className='text-sm opacity-50 pb-1 tracking-tight'>About</p>
                    <p className=' text-sm leading-tight opacity-80 tracking-tight'>{about}</p>

                </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-16">
                {/* <div className="col-span-1 w-full h-auto flex flex-col justify-start gap-2"> */}
                {/*     <img className="w-full h-auto" src={imgObject} alt="Image 1" /> */}
                {/*     <p className="text-center">Image 1</p> */}
                {/* </div> */}

                {images.map(
                    (img: any, i: number) => (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: i * 0.15 + 0.3, duration: 0.5, ease: 'easeInOut' }}
                            key={Math.random()} className="col-span-1 w-full h-auto flex flex-col justify-start gap-2" onClick={() => openLightbox(img.url)}>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                className="w-full h-auto" src={img.url} alt={img.alt} />
                            <p className="text-xs text-start opacity-50 tracking-tight">{img.alt}</p>
                        </motion.div>
                    ))}
            </div>
        </ div>
    )
}
