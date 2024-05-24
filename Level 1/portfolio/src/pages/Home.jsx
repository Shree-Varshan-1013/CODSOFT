import HeroSection from './HeroSection';
import Navbar from './Navbar';
import ContactPage from './Contact';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import Education from './Education';

const Home = () => {

    return (
        <div id="smooth-wrapper">
            <Navbar />
            <HeroSection /> 
            <About />
            <Education />
            <Skills />
            <Projects />
            <ContactPage />
            <Footer />
        </div>
    )
}

export default Home;