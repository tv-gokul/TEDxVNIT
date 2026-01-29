'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = ['Home', 'About', 'Speakers', 'Gallery', 'Team', 'Contact'];

    const getHref = (item: string) => {
        if (item === 'Home') return '/';
        if (item === 'Team') return '/team';
        // If we're not on the home page, link to home page with hash
        if (pathname !== '/') {
            return `/#${item.toLowerCase()}`;
        }
        return `#${item.toLowerCase()}`;
    };

    return (
        <>
            {/* Mobile Menu Overlay - Outside nav for proper stacking */}
            <div className={`fixed inset-0 z-[999] md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Solid background */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Red accent line */}
                <div className={`absolute left-0 top-0 w-1 bg-gradient-to-b from-[#E62B1E] to-transparent transition-all duration-700 ${isMenuOpen ? 'h-full' : 'h-0'}`}></div>
                
                {/* Close button */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`absolute top-6 right-[5%] w-12 h-12 flex items-center justify-center z-20 transition-all duration-500 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
                    style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
                    aria-label="Close Menu"
                >
                    <div className="relative w-6 h-6">
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#E62B1E] -translate-y-1/2 rotate-45 rounded-full"></span>
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#E62B1E] -translate-y-1/2 -rotate-45 rounded-full"></span>
                    </div>
                </button>
                
                {/* Navigation */}
                <div className={`relative z-10 h-full flex flex-col justify-center px-8 pt-20 pb-24 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((item, index) => (
                            <Link
                                key={item}
                                href={getHref(item)}
                                className={`group flex items-center gap-3 transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
                                style={{ transitionDelay: isMenuOpen ? `${100 + index * 80}ms` : '0ms' }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-[#E62B1E]/50 text-xs font-mono w-6">0{index + 1}</span>
                                <span className="text-2xl font-bold uppercase tracking-wider text-white group-hover:text-[#E62B1E] transition-colors duration-300">{item}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                
                {/* Footer branding */}
                <div className={`absolute bottom-8 left-8 right-8 flex justify-between items-center transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isMenuOpen ? '500ms' : '0ms' }}>
                    <span className="text-white/30 text-[10px] tracking-[0.15em] uppercase">Ideas Worth Spreading</span>
                    <div className="flex items-center text-xs font-bold">
                        <span className="text-[#E62B1E]">TED</span>
                        <sup className="text-[#E62B1E] text-[0.5em]">x</sup>
                        <span className="text-white">VNIT</span>
                    </div>
                </div>
            </div>

            <nav className={`fixed top-0 left-0 w-full px-[5%] py-6 md:py-8 flex justify-between items-center z-[1000] transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'mix-blend-difference'}`}>
                <div className="logo text-TED-red font-black text-2xl tracking-tighter">
                    <span className="text-[#E62B1E]">TED</span>
                    <sup className="text-[0.6em] ml-[-2px] text-[#E62B1E]">x</sup>
                    <span className="text-white">VNIT</span>
                </div>

                {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
                {navLinks.map((item) => (
                    <Link
                        key={item}
                        href={getHref(item)}
                        className="text-white text-sm uppercase tracking-widest relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E62B1E] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden group relative w-12 h-12 flex justify-center items-center focus:outline-none z-[102]"
                aria-label="Toggle Menu"
            >
                {/* Animated ring */}
                <span className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${isMenuOpen ? 'border-[#E62B1E] scale-100 rotate-90' : 'border-white/40 scale-90 rotate-0'}`}></span>
                {/* Hamburger lines */}
                <div className="relative w-5 h-4 flex flex-col justify-between items-center">
                    <span className={`block h-[2px] rounded-full transition-all duration-400 origin-center ${isMenuOpen ? 'w-5 bg-[#E62B1E] rotate-45 translate-y-[7px]' : 'w-5 bg-white'}`}></span>
                    <span className={`block w-3 h-[2px] bg-[#E62B1E] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                    <span className={`block h-[2px] rounded-full transition-all duration-400 origin-center ${isMenuOpen ? 'w-5 bg-[#E62B1E] -rotate-45 -translate-y-[7px]' : 'w-5 bg-white'}`}></span>
                </div>
            </button>
        </nav>
        </>
    );
}
