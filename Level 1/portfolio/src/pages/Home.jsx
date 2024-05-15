import { useState } from 'react'
import HeroSection from './HeroSection';
import Features from './Features';
import Interactive from './Interactive';
import Progress from './Progress';
import Navbar from './Navbar';
import Bookmark from './Bookmark';
import ContactPage from './Contact';

const Home = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <>
            <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
            <HeroSection />
            <Features />
            <Interactive />
            <Progress />
            <Bookmark />
            <ContactPage />
        </>
    )
}

export default Home;