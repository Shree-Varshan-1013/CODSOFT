import { useState } from 'react'
import HeroSection from './HeroSection';
import Features from './Features';
import Interactive from './Interactive';
import Progress from './Progress';
import Navbar from './Navbar';
import Bookmark from './Bookmark';
import ContactPage from './Contact';
import About from './About';
import Card from './Card';

const Home = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <>
            {/* <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
            <HeroSection />
            <About />
            <Features />
            <Interactive />
            <Progress />
            <Bookmark /> */}
            {/* <ContactPage /> */}
            <Card/>
        </>
    )
}

export default Home;