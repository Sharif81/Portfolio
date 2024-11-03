import React, { useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50">
            <div className="navbar bg-gray-900 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul                        
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='hover:bg-gray-800 rounded-md'><NavLink  to='/'>Home</NavLink ></li>
                            <li className='hover:bg-gray-800 rounded-md'><NavLink  to='/about'>About</NavLink ></li>
                            <li className='hover:bg-gray-800 rounded-md'><NavLink  to='/skills'>What I Do</NavLink > </li>
                            <li className='hover:bg-gray-800 rounded-md'><NavLink  to='/resume'>Resume</NavLink></li>
                            <li className='hover:bg-gray-800 rounded-md'><NavLink  to='/project'>Project</NavLink ></li>
                            <li className='hover:bg-gray-800 rounded-md'><NavLink  to='/contact'>Contact</NavLink ></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Sharif Ahmed Alif</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:bg-gray-800 rounded-md'><NavLink to='/'>Home</NavLink></li>
                        <li className='hover:bg-gray-800 rounded-md'><NavLink to='/about'>About</NavLink></li>
                        <li className='hover:bg-gray-800 rounded-md'><NavLink to='/skills'>What I Do</NavLink></li>
                        <li className='hover:bg-gray-800 rounded-md'><NavLink to='/resume'>Resume</NavLink></li>
                        <li className='hover:bg-gray-800 rounded-md'><NavLink to='/project'>Project</NavLink></li>
                        <li className='hover:bg-gray-800 rounded-md'><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex'>
                        <div className="tooltip" data-tip="GitHub" >
                            <a href="https://github.com/Sharif81" target="_blank" rel="noopener noreferrer">
                                <FaGithub href='' className='mr-3 text-2xl cursor-pointer hover:text-gray-400' />
                            </a>
                        </div>
                        <div className="tooltip" data-tip="LinkedIn">
                            <a href="https://www.linkedin.com/in/sharif-uddin-/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="mr-3 text-2xl cursor-pointer hover:text-gray-400" />
                            </a>
                        </div>

                        <div className="tooltip" data-tip="Facebook">
                            <a href="https://www.facebook.com/al.if.526" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='mr-3 text-2xl cursor-pointer hover:text-gray-400' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
