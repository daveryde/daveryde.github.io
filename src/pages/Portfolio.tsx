import { useRef } from "react";

import AboutSection from '../components/AboutSection';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import WorkSection from '../components/WorkSection';

const Portfolio = () => {
    const sectionRefs = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null)
    ];

    const handleScroll = (sectionRefIndex: number) => {
        console.log('sectionIndex: ', sectionRefIndex)
        sectionRefs[sectionRefIndex].current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Navbar
                sectionRefs={sectionRefs}
                handleScroll={handleScroll} />
            <div ref={sectionRefs[0]}>
                <HeroSection handleScroll={handleScroll} />
            </div>
            <div ref={sectionRefs[1]}>
                <WorkSection />
            </div>
            <div ref={sectionRefs[2]}>
                <AboutSection handleScroll={handleScroll} />
            </div>
            <div ref={sectionRefs[3]}>
                <ConnectSection />
            </div>
            <Footer />
        </>
    )
}

export default Portfolio;
