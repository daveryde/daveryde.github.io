import { useRef } from "react";

import AboutSection from '../components/AboutSection';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import WorkSection from '../components/WorkSection';

const Portfolio = () => {
    const sectionRefs = [
        useRef<HTMLElement | null>(null),
        useRef<HTMLElement | null>(null),
        useRef<HTMLElement | null>(null),
        useRef<HTMLElement | null>(null)
    ];

    const handleScroll = (sectionRefIndex: number) => {
        sectionRefs[sectionRefIndex].current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Navbar
                sectionRefs={sectionRefs}
                handleScroll={handleScroll} />
            <main>
                <section ref={sectionRefs[0]}>
                    <HeroSection handleScroll={handleScroll} />
                </section>
                <section ref={sectionRefs[1]}>
                    <WorkSection />
                </section>
                <section ref={sectionRefs[2]}>
                    <AboutSection handleScroll={handleScroll} />
                </section>
                <section ref={sectionRefs[3]}>
                    <ConnectSection />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Portfolio;
