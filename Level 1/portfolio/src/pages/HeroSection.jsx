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
        "a passionate full-stack developer",
        "Coding with passion and purpose.",
    ];

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div data-aos="zoom-out" data-aos-duration="2000">
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
                                <AnimatedGradientText className="text-xl">
                                    View Resume
                                </AnimatedGradientText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
