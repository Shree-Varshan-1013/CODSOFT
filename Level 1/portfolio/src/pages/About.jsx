import { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div className='hidden lg:flex w-full h-screen'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000">
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", marginTop: "100px" }}>
                        <div style={{ width: "50%", marginTop: "50px" }}>
                            <div style={{ flexDirection: "column" }}>
                                <div>
                                    <h1 className='text--gradient'>About Me</h1>
                                </div>
                                <div style={{ color: "white" }}>
                                    <p style={{ fontSize: "1.3rem", fontWeight: "100", textAlign: "justify" }}>
                                        Highly motivated and detail-oriented Software Developer with a strong background in team collaboration,
                                        punctuality, and creative problem-solving. Experienced in developing innovative software solutions and
                                        proficient in multiple programming languages. Skilled in analyzing complex problems and implementing
                                        effective solutions to drive project success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img src='/img/shree-photo.jpg' style={{ marginTop:"40px", boxShadow: "-60px -50px 0 -40px #68b8d1, 50px 50px 0 -40px #68b8d1" }} width={200} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='block lg:hidden w-full' style={{ marginTop: "80px" }}>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000">
                    <div style={{ width: "100%" }}>
                        <div style={{ margin: "40px" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div>
                                    <h1 className='text--gradient' style={{ fontSize: "50px", lineHeight: "70px" }}>Welcome to the Magical World</h1>
                                </div>
                                <div>
                                    <img src='/img/stars.gif' width={350} />
                                </div>
                            </div>
                            <div style={{ color: "white" }}>
                                <p style={{ fontSize: "1.2rem", fontWeight: "100", textAlign: "justify" }}>
                                    Step into a realm where imagination reigns supreme,
                                    and tales come alive with every turn of the page.
                                    Welcome to the enchanting world of stories, a place where words weave their magic,
                                    transporting you to distant lands, igniting emotions, and unveiling mysteries beyond imagination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About