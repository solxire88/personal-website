'use client'
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Sun from "@/components/Sun"

export default function Home() {
    return (
        <div className="min-h-screen transition-all duration-400 ">
            <div className="flex flex-col mx-8 ">
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Contact />
                <Sun />
            </div>
        </div>
    );
}
