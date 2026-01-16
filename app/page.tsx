'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import Hero from '@/components/Hero';
import Speakers from '@/components/Speakers';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Loading Animation
      const tl = gsap.timeline();

      tl.from(".loader-content span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      })
        .to(".loader-content", {
          scale: 1.1,
          duration: 1,
          ease: "power2.inOut"
        })
        .to("#loader", {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut"
        }, "+=0.2")
        .from(".logo", {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.5")
        .from(".links a", {
          y: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.8")
        .from(".hero-content h1", {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out"
        }, "-=0.8")
        .from(".hero-content p", {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.6")
        .from(".cta-container", {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8")
        .from(".hero-visual", {
          opacity: 0,
          scale: 0.8,
          duration: 2,
          ease: "power2.out"
        }, "-=1.5");

      // Scroll Animations
      // Speakers
      gsap.utils.toArray(".speaker-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1
        });
      });

      // Gallery
      gsap.utils.toArray(".gallery-item").forEach((item: any, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.05
        });
      });

      // About Section
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Contact
      gsap.from("#contact", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 70%"
        },
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
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
      <Loader />
      <div id="app">
        <Navbar />
        <Hero />
        <About />
        <Speakers />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
