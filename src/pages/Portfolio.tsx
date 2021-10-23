import { useRef } from "react";

import AboutSection from '../components/AboutSection';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import WorkSection from '../components/WorkSection';

import { navigationClickEventGA } from "../utils/analytics";

const Portfolio = () => {
    const sectionRefs = [
        useRef<HTMLElement | null>(null),
        useRef<HTMLElement | null>(null),
        useRef<HTMLElement | null>(null),
        useRef<HTMLElement | null>(null)
    ];

    const handleScroll = (sectionRefIndex: number) => {
        navigationClickEventGA(sectionRefs[sectionRefIndex].current?.id!);
        sectionRefs[sectionRefIndex].current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Navbar
                sectionRefs={sectionRefs}
                handleScroll={handleScroll} />
            <main>
                <section ref={sectionRefs[0]} id="hero">
                    <HeroSection handleScroll={handleScroll} />
                </section>
                <section ref={sectionRefs[1]} id="work">
                    <WorkSection />
                </section>
                <section ref={sectionRefs[2]} id="about">
                    <AboutSection handleScroll={handleScroll} />
                </section>
                <section ref={sectionRefs[3]} id="connect">
                    <ConnectSection />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Portfolio;
