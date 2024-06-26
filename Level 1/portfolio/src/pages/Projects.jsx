import React from 'react';
import GradientBtn from './GradientBtn';
import AnimatedGradientText from './magicui/AnimatedGradientText';
import BorderBeam from './magicui/BorderBeam';
import ShinyText from './magicui/ShinyText';

function Projects() {

    const data = [
        {
            id: 1,
            title: "Lab Management",
            description: "Spearheaded the digital transformation of laboratory to reduce the paper work",
            link: "https://github.com/Shree-Varshan-1013/Lab-Digitalization",
            img: "/img/lab-bi.png",
            type: "FullStack",
            techs: ["Laravel", "SqLite"]
        },
        {
            id: 2,
            title: "Dialog Duo",
            description: "Career guidance support to students and Resume Generator for job seekers",
            link: "https://github.com/Shree-Varshan-1013/DialogDuo",
            img: "/img/chatbot-bi.png",
            type: "FullStack",
            techs: ["MongoDB", "Express JS", "React JS", "Node JS"]
        },
        {
            id: 3,
            title: "Zerver",
            description: "Web-based application for managing server loggings for AICTE",
            link: "https://github.com/Shree-Varshan-1013/Zerver",
            img: "/img/server-bi.png",
            type: "FrontEnd",
            techs: ["HTML", "CSS", "Javascript"]
        },
        {
            id: 4,
            title: "Webzy",
            description: "Online mobile recharge web application to recharge their mobile services",
            link: "https://github.com/Shree-Varshan-1013/webZy",
            img: "/img/webzy-bi.png",
            type: "FullStack",
            techs: ["React JS", "SpringBoot", "PostgreSQL"]
        },
    ];

    return (
        <>
            <div style={{ marginBottom: "100px", marginTop:"50px" }} name="projects">
                <div data-aos="zoom-in-up"
                    data-aos-duration="3000">
                    <div className='flex justify-center'>
                        <h1 className='text-white text-5xl lg:text-7xl border-l-4 border-red-600 pl-5 mb-3' name="features">Projects</h1>
                    </div>
                    <div style={{ margin: "50px" }}>
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {data.map((ele) => (
                                <div key={ele.id} className="relative max-w-sm rounded overflow-hidden shadow-lg">
                                    <BorderBeam className="absolute inset-0 z-100" size={250} duration={12} delay={9} />
                                    <img className="w-full" src={ele.img} alt="content" />
                                    <div className="px-6 py-4" style={{ backgroundColor: "#131315" }}>
                                        <div className="font-bold text-xl mb-2 text-white">{ele.title}</div>
                                        <ShinyText className="text-base" style={{ color: "#637592" }}>{ele.description}</ShinyText>
                                    </div>
                                    <div className="px-6 py-4" style={{ backgroundColor: "#131315" }}>
                                        <a href={ele.link} target="_blank" rel="noopener noreferrer">
                                            <AnimatedGradientText className="text-xl text-white">
                                                Github
                                            </AnimatedGradientText>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
}

export default Projects;
