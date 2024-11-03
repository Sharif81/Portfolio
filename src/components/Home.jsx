import React from 'react'
import TypingEffect from './TypingEffect'
import HeroImage from '../assets/alif.png'



const Home = () => {  
    const texts = [
        "Hello! I'm Sharif Ahmed Alif ",
        "I'm a Software Engineer (.NET) "
    ];
    return (
        <div className="hero min-h-screen" id='home'>
            <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                <img
                    src={HeroImage}
                    className="max-w-sm rounded-lg shadow-2xl" width={400} />
                <div>
                    <TypingEffect text={texts} speed={100} />
                    <p className="py-4 text-gray-800">
                        I am an experienced ASP.NET Developer skilled in building dynamic web applications. My expertise includes technologies such as SQL Server, Oracle, JavaScript, jQuery, Bootstrap, Tailwind, and GitHub. I prioritize clean code, performance optimization, and responsive design, delivering high-quality solutions that effectively meet user and business needs. Additionally, I have experience with RDLC reports and am continuously learning new technologies to enhance my skill set.
                    </p>
                    <button className="btn btn-outline btn-primary">Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Home