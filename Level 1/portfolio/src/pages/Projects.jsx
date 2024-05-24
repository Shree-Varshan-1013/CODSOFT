import React from 'react';
import GradientBtn from './GradientBtn';
import AnimatedGradientText from './magicui/AnimatedGradientText';

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
        <div style={{ marginBottom: "100px" }}>
            <div style={{ marginTop: "80px", display: "flex", justifyContent: "center" }}>
                <h1 className='text-white text-7xl border-l-4 border-red-600 pl-5 mb-5' name="features">Projects</h1>
            </div>
            <div style={{ margin: "50px" }}>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((ele) => (
                        <div key={ele.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={ele.img} alt="content" />
                            <div className="px-6 py-4" style={{ backgroundColor: "#131315" }}>
                                <div className="font-bold text-xl mb-2 text-white">{ele.title}</div>
                                <p className="text-base" style={{ color: "#637592" }}>{ele.description}</p>
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
    );
}

export default Projects;
