import { useEffect, useState } from 'react';
import video from '/videos/heroVideo.mp4';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { useScramble } from "use-scramble";
import Aos from 'aos';
import "aos/dist/aos.css";
import '../styles/Hero.css';
import ScrambleText from './Scrambletext';
import AnimatedGradientText from './magicui/AnimatedGradientText';

const HeroSection = () => {

    const strings = [
        "Hi, I'm Shree Varshan",
        "A Passionate Software Developer",
    ];

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="hidden md:flex lg:flex h-25 w-full video-container" name="home">
                    <div className="backdrop-desktop"></div>
                    <video src={video} autoPlay loop muted />
                    <div className="overlay-content w-full">
                        <div style={{ marginTop: '100px' }}>
                            <h1 style={{ fontSize: "60px" }} className='text--gradient'>
                                <ScrambleText strings={strings} />
                            </h1>
                        </div>
                        <div>
                            <p className='text-2xl'>
                                <Typewriter
                                    options={{
                                        strings: ['While destiny != "achieved" do { Keep coding(); }'],
                                        autoStart: true,
                                        loop: true,
                                    }} /></p>
                            <div className='flex justify-center' style={{ paddingTop: '40px' }}>
                                <a href="https://drive.google.com/file/d/17XWfn4XRJxJGDm2p8sTb3SkyRW6UroF7/view?usp=sharing" target='_blank'>
                                    <AnimatedGradientText className="text-xl">
                                        View Resume
                                    </AnimatedGradientText>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
