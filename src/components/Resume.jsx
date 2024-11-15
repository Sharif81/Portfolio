import React from 'react'
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    return (
        <section id="resume" className="min-h-screen bg-base-200">
            <div class="container mx-auto">
                <h1 class="text-5xl md:text-9xl font-bold text-gray-200 text-center py-20">
                    SUMMARY
                </h1>
                <h1 class="text-2xl md:text-4xl font-bold text-center -mt-12 md:-mt-44 mb-20 sm:-mt-20">
                    R<span class="border-b-4 border-indigo-500">esum</span>e
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-24">
                    <div class="md:col-span-1 p-4">
                        <h1 className='text-2xl font-bold mb-5'>My Education</h1>
                        <div className="hero bg-white border-2 border-gray-200  shadow-md py-2 px-2 rounded mb-6">
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <button className="btn btn-sm btn-primary">2020 - 2024</button>
                                    <h1 className="text-2xl py-3 font-bold">Bsc in Computer Science Engineering</h1>
                                    <h1 className="text-1xl font-bold text-orange-500">University Of Creative Technology</h1>
                                    <p className="py-3">
                                        I graduated with a Bachelor of Science in Computer Science Engineering from the University of Creative Technology. This experience provided me with strong programming skills and a solid foundation in software development.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hero bg-white border-2 border-gray-200 shadow-md py-2 px-2 rounded mb-6">
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <button className="btn btn-sm btn-primary">2012 - 2016</button>
                                    <h1 className="text-2xl py-3 font-bold">Diploma in Computer Science Engineering</h1>
                                    <h1 className="text-1xl font-bold text-orange-500">Chittagong Polytechnic Institute</h1>
                                    <p className="py-3">
                                        I successfully completed my Diploma in Computer Science Engineering at Chittagong Polytechnic Institute. This program equipped me with essential technical skills in programming, networking, hardware and software development. I gained hands-on experience through various projects and practical work, preparing me for a career in the tech industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hero bg-white border-2 border-gray-200 shadow-md py-2 px-2 rounded mb-6">
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <button className="btn btn-sm btn-primary">2012 - 2016</button>
                                    <h1 className="text-2xl py-3 font-bold">Secondary School Certificate</h1>
                                    <h1 className="text-1xl font-bold text-orange-500">Char Iswar Roy Dasher Hat High School</h1>
                                    <p className="py-3">
                                        I completed my Secondary School Certificate (SSC) at Char Iswar Roy Dasher Hat High School. This foundational education provided me with a strong academic background and essential skills that prepared me for further studies. I am grateful for the support and guidance I received from my teachers and peers during this important phase of my education.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:col-span-1 p-4">
                        <h1 className='text-2xl font-bold mb-5'>My Experience</h1>
                        <div className="hero bg-white border-2 border-gray-200  shadow-md py-2 px-2 rounded mb-6">
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <button className="btn btn-sm btn-primary">2022 - Present</button>
                                    <h1 className="text-2xl py-3 font-bold">Software Engineer (.NET)</h1>
                                    <h1 className="text-1xl font-bold text-orange-500">Asian Group</h1>
                                    <p className="py-3">
                                        I am currently a Software Engineer (.NET) at Asian Group, where I develop and maintain applications using the .NET framework, collaborating with teams to deliver high-quality software solutions and tackle complex challenges.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hero bg-white border-2 border-gray-200  shadow-md py-2 px-2 rounded mb-6">
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <button className="btn btn-sm btn-primary">2021 - 2022</button>
                                    <h1 className="text-2xl py-3 font-bold">Information Technology Executive</h1>
                                    <h1 className="text-1xl font-bold text-orange-500">Asian Group</h1>
                                    <p className="py-3">
                                        In this role, I managed IT operations, supported system maintenance, and ensured seamless inter-departmental communication. I also handled ERP issues, provided training, and managed payroll processes. This experience strengthened my technical skills and understanding of IT infrastructure, preparing me for my current role as a Software Engineer (.NET).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hero bg-white border-2 border-gray-200  shadow-md py-2 px-2 rounded mb-6">
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <button className="btn btn-sm btn-primary">2018 - 2021</button>
                                    <h1 className="text-2xl py-3 font-bold">Information Technology Officer</h1>
                                    <h1 className="text-1xl font-bold text-orange-500">Mohara Asian Apparels Limited (An Unit Of Asian Group)</h1>
                                    <p className="py-3">
                                        I joined Mohara Asian Apparels Limited, a unit of Asian Group, as an Information Technology Officer. In this role, I oversee IT operations, manage system maintenance, and support users in effectively utilizing technology. I am excited to contribute to the organization's success and enhance its IT infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center py-5">
                    <button className='btn btn-outline btn-primary rounded-full' onClick={() => window.open('https://drive.google.com/file/d/1AuJ_nhals6ukdKYK-GaW13vhH6CR3mcc/view?usp=sharing', '_blank')}> <FaDownload />Download CV</button>
                </div>
            </div>

        </section>
    )
}

export default Resume