import React from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaAngular, FaDatabase, FaCogs } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCsharp, SiDotnet } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { BiSolidReport } from "react-icons/bi";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen">
            <div class="container mx-auto">
                <h1 class="text-5xl md:text-9xl font-bold text-gray-200 text-center py-20">
                    SKILLS
                </h1>
                <h1 class="text-2xl md:text-4xl font-bold text-center -mt-12 md:-mt-44 mb-20">
                    Wh<span class="border-b-4 border-indigo-500">at I D</span>o?
                </h1>
                {/* Skills Section */}
                <div className="md:col-span-2 p-4 mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Frontend Skills */}
                        <div>
                            <h3 className='text-xl text-primary font-bold mb-5'>Frontend</h3>
                            <div className="flex items-center">
                                <FaHtml5 className='text-orange-600 mr-2' size={30} />
                                <span>HTML5</span>
                            </div>
                            <Progress percent={90} status="success" />

                            <div className="flex items-center mt-4">
                                <FaCss3Alt className='text-blue-600 mr-2' size={30} />
                                <span>CSS3</span>
                            </div>
                            <Progress percent={85} status="success" />

                            <div className="flex items-center mt-4">
                                <FaBootstrap className='text-purple-600 mr-2' size={30} />
                                <span>Bootstrap</span>
                            </div>
                            <Progress percent={85} status="success" />


                            <div className="flex items-center mt-4">
                                <RiTailwindCssFill className='text-info mr-2' size={30} />
                                <span>Tailwind</span>
                            </div>
                            <Progress percent={60} status="success" />

                            <div className="flex items-center mt-4">
                                <FaJsSquare className='text-yellow-500 mr-2' size={30} />
                                <span>JavaScript</span>
                            </div>
                            <Progress percent={65} status="success" />

                            <div className="flex items-center mt-4">
                                <FaJsSquare className='text-blue-600 mr-2' size={30} />
                                <span>jQuery</span>
                            </div>
                            <Progress percent={75} status="success" />

                            <div className="flex items-center mt-4">
                                <FaReact className='text-blue-500 mr-2' size={30} />
                                <span>React</span>
                            </div>
                            <Progress percent={60} status="success" />

                            <div className="flex items-center mt-4">
                                <FaAngular className='text-red-600 mr-2' size={30} />
                                <span>Angular</span>
                            </div>
                            <Progress percent={50} status="success" />


                        </div>

                        {/* Backend Skills */}
                        <div>
                            <h3 className='text-xl text-primary font-bold mb-5'>Backend & Database</h3>

                            <div className="flex items-center">
                                <SiCsharp className='text-purple-800 mr-2' size={30} />
                                <span>C Sharp</span>
                            </div>
                            <Progress percent={80} status="success" />

                            <div className="flex items-center mt-4">
                                <DiDotnet className='text-purple-800 mr-2' size={30} />
                                <span>ASP.NET</span>
                            </div>
                            <Progress percent={85} status="success" />

                            <div className="flex items-center mt-4">
                            <DiDotnet className='text-purple-800' size={30}/> <SiDotnet className='text-purple-800 mr-2' size={30} />
                                <span>Core Web API</span>
                            </div>
                            <Progress percent={65} status="success" />

                            <div className="flex items-center mt-4">
                                <FaDatabase className='text-blue-600 mr-2' size={30} />
                                <span>SQL Server</span>
                            </div>
                            <Progress percent={85} status="success" />

                            <div className="flex items-center mt-4">
                                <FaDatabase className='text-orange-600 mr-2' size={30} />
                                <span>Oracle</span>
                            </div>
                            <Progress percent={75} status="success" />

                            <div className="flex items-center mt-4">
                                <FaCogs className='text-gray-600 mr-2' size={30} />
                                <span>ADO.NET</span>
                            </div>
                            <Progress percent={70} status="success" />

                            <div className="flex items-center mt-4">
                                <FaCogs className='text-gray-600 mr-2' size={30} />
                                <span>Entity Framework Core</span>
                            </div>
                            <Progress percent={75} status="success" />

                            <div className="flex items-center mt-4">
                                <BiSolidReport className='text-pink-600 mr-2' size={30} />
                                <span>RDLC Reports</span>
                            </div>
                            <Progress percent={80} status="success" />
                            
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills