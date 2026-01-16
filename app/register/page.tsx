'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';

export default function RegisterPage() {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Navbar Animation (reused)
            gsap.from(".logo", {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
            gsap.from(".links a", {
                y: -20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.3
            });

            // Form Animation
            gsap.from(".registration-form", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.5
            });

            // Footer
            gsap.from("footer p", {
                y: 20,
                opacity: 0,
                duration: 1,
                delay: 0.8
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={container}>
            <div id="app">
                <Navbar />
                <div style={{ paddingTop: '100px', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <RegistrationForm />
                </div>
                <Footer />
            </div>
        </main>
    );
}
