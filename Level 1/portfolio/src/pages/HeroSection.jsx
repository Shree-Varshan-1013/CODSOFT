import { useEffect } from 'react';
import video from '/videos/heroVideo.mp4';
import Aos from 'aos';
import ScrambleText from './Scrambletext';
import AnimatedGradientText from './magicui/AnimatedGradientText';
import Typewriter from 'typewriter-effect';
import { TiHeart } from "react-icons/ti";
import "aos/dist/aos.css";
import '../styles/Hero.css';

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
            <div className="relative h-screen" name="home">
                <video className='w-full h-full object-cover lg:object-fill' autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center lg:m-10'>
                    <h1 className='text--gradient text-4xl lg:text-7xl'>
                        <ScrambleText strings={strings} />
                    </h1>
                    <p className='text-xl text-white m-10 lg:text-4xl lg:mt-7 font-thin'>
                        <Typewriter
                            options={{
                                strings: ["Embarking on adventures, exploring life with joy and excitement !"],
                                cursor: '✨',
                                autoStart: true,
                                loop: true,
                            }} /></p>
                    <div className='flex justify-center text-white'>
                        <a href="https://drive.google.com/file/d/17XWfn4XRJxJGDm2p8sTb3SkyRW6UroF7/view?usp=sharing" target='_blank'>
                            <AnimatedGradientText className="text-xl">
                                View Resume
                            </AnimatedGradientText>
                        </a>
                    </div>  
                </div>

            </div>
        </>
    );
}

export default HeroSection;
