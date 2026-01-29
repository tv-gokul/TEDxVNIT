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
        <nav className={`fixed top-0 left-0 w-full px-[5%] py-6 md:py-8 flex justify-between items-center z-[100] transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'mix-blend-difference'}`}>
            <div className="logo text-TED-red font-black text-2xl tracking-tighter relative z-[101]">
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

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[101]"
                aria-label="Toggle Menu"
            >
                <span className={`block w-6 h-0.5 bg-[#E62B1E] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#E62B1E] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
                {navLinks.map((item, index) => (
                    <Link
                        key={item}
                        href={getHref(item)}
                        className={`text-2xl font-bold uppercase tracking-widest text-white hover:text-[#E62B1E] transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
