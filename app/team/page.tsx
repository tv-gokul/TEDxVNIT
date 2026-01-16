'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
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

            // Team Animation
            gsap.utils.toArray(".team-card").forEach((card: any, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1
                });
            });

            // Footer
            gsap.from("footer p", {
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 90%"
                },
                y: 20,
                opacity: 0,
                duration: 1
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={container}>
            <div id="app">
                <Navbar />
                <div style={{ paddingTop: '80px' }}>
                    <Team />
                </div>
                <Footer />
            </div>
        </main>
    );
}
