'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // only after this effect runs do we know the real theme
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="grid grid-cols-4 gap-8 text-sm py-2">
            <div><button ><a href="#home" >Home</a></button></div>
            <div><button><a href="#projects">Work</a></button></div>
            <div><button><a href="#about">About</a></button></div>

            {/* until mounted, render a placeholder so server vs client HTML matches */}
            <div>
                {mounted ? (
                    <button
                        onClick={() =>
                            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                        }
                    >
                        {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
                    </button>
                ) : (
                    // placeholder of same shape & size
                    <button className="px-4 py-1 rounded bg-gray-200 opacity-0">
                        placeholder
                    </button>
                )}
            </div>
        </div>
    )
}
