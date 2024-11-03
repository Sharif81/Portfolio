import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa';


export const Contact = () => {
    return (
        <section id="resume" className="min-h-screen bg-base-200">
            <div class="container mx-auto">
                <h1 class="text-5xl md:text-9xl font-bold text-gray-200 text-center py-20">
                    CONTACT
                </h1>
                <h1 class="text-2xl md:text-4xl font-bold text-center -mt-12 md:-mt-44 mb-20 sm:-mt-20">
                    Get <span class="border-b-4 border-indigo-500">In To</span>uch
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-6 gap-5 mt-24">
                    <div className="md:col-span-2 p-4">
                        <h1 className="text-2xl font-bold mb-5">ADDRESS</h1>
                        <p>
                            4th Floor, Marvelous Villa, <br />
                            Santibag, Shyamoli Residential Area, <br />
                            Agrabad, Chattogram.
                        </p> <br />
                        <p className="flex items-center">
                            <FaMobileAlt className='text-primary mr-2' />+8801762-629582
                        </p>
                        <p className="flex items-center py-1">
                            <MdMailOutline className='text-primary mr-2' />sharifahamedalif@gmail.com
                        </p>

                        <p className="flex items-center mb-5">
                            <FaWhatsapp className='text-primary mr-2' />+8801828-462281
                        </p>


                        <h1 className="text-2xl font-bold py-2">FOLLOW ME</h1>
                        <div className='flex'>
                            <div className="tooltip" data-tip="GitHub" >
                                <a href="https://github.com/Sharif81" target="_blank" rel="noopener noreferrer">
                                    <FaGithub href='' className='mr-3 text-2xl text-primary cursor-pointer hover:text-blue-400' />
                                </a>
                            </div>
                            <div className="tooltip" data-tip="LinkedIn">
                                <a href="https://www.linkedin.com/in/sharif-uddin-/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className='mr-3 text-2xl text-primary cursor-pointer hover:text-blue-400' />
                                </a>
                            </div>

                            <div className="tooltip" data-tip="Facebook">
                                <a href="https://www.facebook.com/al.if.526" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className='mr-3 text-2xl text-primary cursor-pointer hover:text-blue-400' />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="md:col-span-4 p-4">
                        <h1 className="text-2xl font-bold mb-5">SEND US A NOTE</h1>
                        <div className="flex gap-4 mb-7">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered input-primary w-full"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered input-primary w-full"
                            />
                        </div>

                        <div className="flex mb-4">
                            <textarea
                                placeholder="Tell us more about your needs...."
                                className="textarea textarea-bordered textarea-primary w-full"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button className="btn btn-primary w-full max-w-xs">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
