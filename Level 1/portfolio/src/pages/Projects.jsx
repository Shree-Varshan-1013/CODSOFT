import React from 'react';
import GradientBtn from './GradientBtn';

function Projects() {

    const data = [
        {
            id: 1,
            title: "Lab Management",
            description: "Spearheaded the digital transformation of laboratory to reduce the paper work",
            link: "https://github.com/Shree-Varshan-1013/Lab-Digitalization",
            type: "FullStack",
            techs: ["Laravel", "SqLite"]
        },
        {
            id: 2,
            title: "Dialog Duo",
            description: "Career guidance support to students and Resume Generator for job seekers",
            link: "https://github.com/Shree-Varshan-1013/DialogDuo",
            type: "FullStack",
            techs: ["MongoDB", "Express JS", "React JS", "Node JS"]
        },
        {
            id: 3,
            title: "Zerver",
            description: "Web-based application for managing server loggings for AICTE",
            link: "https://github.com/Shree-Varshan-1013/Zerver",
            type: "FrontEnd",
            techs: ["HTML", "CSS", "Javascript"]
        },
        {
            id: 4,
            title: "Webzy",
            description: "Online mobile recharge web application to recharge their mobile services",
            link: "https://github.com/Shree-Varshan-1013/webZy",
            type: "FullStack",
            techs: ["React JS", "SpringBoot", "PostgreSQL"]
        },
    ];

    return (
        <div style={{ marginBottom: "100px" }}>
            <h1 className='text-white text-center text--gradient' name="features">Projects</h1>
            <div style={{ margin: "50px" }}>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((ele) => (
                        <div key={ele.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src="https://dummyimage.com/1201x501" alt="content" />
                            <div className="px-6 py-4" style={{ backgroundColor: "#131315" }}>
                                <div className="font-bold text-xl mb-2 text-white">{ele.title}</div>
                                <p className="text-base" style={{ color: "#637592" }}>{ele.description}</p>
                            </div>
                            <div className="px-6 py-4" style={{ backgroundColor: "#131315" }}>
                                <a className={`inline-block bg-gradient-to-r from-thBlue to-thYellow py-2 px-6 text-black rounded-lg duration-150 hover:scale-110`} href={ele.link} target="_blank" rel="noopener noreferrer">Github</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
