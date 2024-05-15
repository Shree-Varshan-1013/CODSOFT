import HeroSection from './HeroSection';
import Features from './Features';
import Navbar from './Navbar';
import ContactPage from './Contact';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {

    return (
        <>
            <Navbar/>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Features />
            <ContactPage />
        </>
    )
}

export default Home;