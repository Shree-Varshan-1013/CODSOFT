import { useEffect } from 'react'
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
            <div className='hidden lg:flex w-full h-screen' name="about">
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', marginTop: '100px' }}>
                        <div style={{ width: '50%', marginTop: '50px' }}>
                            <div>
                                <div>
                                    <h1 className='text-7xl border-l-4 border-red-600 text-white pl-3'>About Me</h1>
                                </div>
                                <div className='mt-9 text-white'>
                                    <p style={{ fontSize: '1.3rem', fontWeight: '100', textAlign: 'justify' }}>
                                        Highly motivated and detail-oriented Software Developer with a strong background in team collaboration,
                                        punctuality, and creative problem-solving. Experienced in developing innovative software solutions and
                                        proficient in multiple programming languages. Skilled in analyzing complex problems and implementing
                                        effective solutions to drive project success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='relative' style={{ width: '300px', height: '300px' }}>
                            {/* <BorderBeam className='absolute inset-0 z-10' colorFrom='#ff5b5b' colorTo='#e20000' borderWidth={3} size={200} duration={12} delay={9} /> */}
                            <img src='/img/sample.jpg' className='w-full h-full object-cover rounded' alt='Shree Photo' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About