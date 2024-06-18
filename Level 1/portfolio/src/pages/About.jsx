import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                <div className='m-10'>
                    <div className='flex justify-center'>
                        <h1 className='text-5xl lg:text-7xl border-l-4 border-red-600 text-white pl-3'>About Me</h1>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-6' name="about">
                        <div className='flex justify-center align-middle'>
                            <img src='/img/sample.jpg' className='rounded object-fill w-80 lg:w-90 lg:mr-20' alt='Shree Photo' />
                        </div>
                        <div className='text-white content-center'>
                            <p className='text-xl text-justify font-thin lg:text-2xl'>
                                Highly motivated and detail-oriented Software Developer with a strong background in team collaboration,
                                punctuality, and creative problem-solving. Experienced in developing innovative software solutions and
                                proficient in multiple programming languages. Skilled in analyzing complex problems and implementing
                                effective solutions to drive project success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
