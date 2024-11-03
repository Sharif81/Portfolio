import React from 'react'
import { FaDownload } from 'react-icons/fa';
// import HomeImage from '../assets/AboutBG.jpg'

function About() {
    // const backgroundStyle = {
    //     backgroundImage: `url(${HomeImage})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     color: 'white',   
    //     opacity: '60%',     
    //   };
  return (
    <section id="about" className="min-h-screen bg-base-200">
      <div class="container mx-auto">
        <h1 class="text-5xl md:text-9xl font-bold text-gray-200 text-center py-20">
          ABOUT ME
        </h1>
        <h1 class="text-2xl md:text-4xl font-bold text-center -mt-12 md:-mt-44 mb-20 sm:-mt-20">
          Know <span class="border-b-4 border-indigo-500">More</span> Me
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-24">
          <div class="md:col-span-2 p-4">
            <h1 className='text-2xl font-bold mb-5'>I'm <span className='text-primary'>Sharif Ahmed Alif</span>, Software Engineer (.NET)</h1>
            <p>Born in Hatiya, Noakhali, Bangladesh, I graduated with a degree in Computer Science and Engineering from the University of Creative Technology. With a solid coding foundation, I am skilled in various frameworks that enhance the development process. My expertise lies in maintaining software architecture and implementing design patterns according to industry best practices.
            </p><br />
            <p>I am passionate about continuous learning, which enables me to explore innovative ideas and foster personal growth.</p>
          </div>
          <div class="md:col-span-1 p-4">
            <p className=''><strong>Name: </strong>Sharif Ahmed Alif</p>
            <div class="border-t border-gray-300 my-4"></div>
            <p><strong>Email: </strong><span className='text-green-500'>sharifahamedalif@gmail.com</span></p>
            <div class="border-t border-gray-300 my-4"></div>
            <p><strong>Age: </strong>29</p>
            <div class="border-t border-gray-300 my-4"></div>
            <p><strong>From: </strong>Agrabad, Chattogram</p>
            <button className='btn btn-primary rounded-full mt-5'> <FaDownload />Download CV</button>
          </div>
        </div>
      </div>

    </section>

  )
}

export default About