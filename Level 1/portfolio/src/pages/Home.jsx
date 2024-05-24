import HeroSection from './HeroSection';
import Navbar from './Navbar';
import ContactPage from './Contact';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';

const Home = () => {

    return (
        <div id="smooth-wrapper">
            <Navbar/>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <ContactPage />
            <Footer/>
        </div>
    )
}

export default Home;