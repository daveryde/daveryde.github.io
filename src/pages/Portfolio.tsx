import AboutSection from '../components/AboutSection';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import WorkSection from '../components/WorkSection';

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <WorkSection />
            <AboutSection />
            <ConnectSection />
            <Footer />
        </>
    )
}

export default Portfolio;
