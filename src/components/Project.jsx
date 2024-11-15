import React from 'react';
import { FaCode } from "react-icons/fa";
import LiveWeather from '../assets/LiveWeather.PNG';
import DigitalMarketing from '../assets/DigitalMarketing.PNG';
import Elibary from '../assets/digitalBook.jpg';
import Attendance from '../assets/AttendanceManagement.png';
import WeddingClient from '../assets/WeddingLetterClient.PNG';
import WeddingAPI from '../assets/WeddingLetterAPI.PNG'

const Project = () => {
  return (
    <section id="skills" className="min-h-screen">   
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main title section */}
        <h1 className="text-5xl md:text-9xl font-bold text-gray-200 text-center py-20">
          PROJECT
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-center -mt-12 md:-mt-44 mb-20 sm:-mt-20">
          M<span className="border-b-4 border-indigo-500">Y Wor</span>k
        </h1>

        {/* Project Cards Section */}
        <div className="mx-auto max-w-2xl lg:max-w-none lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative shadow-lg border-2 border-gray-200 p-5 rounded-lg ">
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white transform transition-transform duration-500 group-hover:scale-110">
                <img src={DigitalMarketing} alt="Live Weather Update Project" className="h-full w-full object-cover object-center" />
              </div>
              <h5 className="text-xl font-bold text-primary py-5">Digital Marketing</h5>
              <p className="text-base font-semibold text-gray-400 flex items-center">
                <FaCode className="mr-2" size={30} />
                HTML, Bootstrap
              </p>
              <div className="divider"></div>
              <div className="mt-3 flex space-x-2">
               <a href="https://sharif81.github.io/digital-marketing/" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">Live Link</button></a>
               <a href="https://github.com/Sharif81/digital-marketing" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">GitHub</button></a>
              </div>
            </div>         

            {/* Project Card 2 */}
            <div className="group relative shadow-lg border-2 border-gray-200 p-5 rounded-lg ">
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white transform transition-transform duration-500 group-hover:scale-110">
                <img src={LiveWeather}  className="h-full w-full object-cover object-center" />
              </div>
              <h5 className="text-xl font-bold text-primary py-5">Live Weather</h5>
              <p className="text-base font-semibold text-gray-400 flex items-center">
                <FaCode className="mr-2" size={30} />
                HTML, CSS, JavaScript
              </p>
              <div className="divider"></div>
              <div className="mt-3 flex space-x-2">
               <a href="https://weather-live-update.netlify.app/" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">Live Link</button></a>
               <a href="https://github.com/Sharif81/live-weather" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">GitHub</button></a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative shadow-lg border-2 border-gray-200 p-5 rounded-lg ">
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white transform transition-transform duration-500 group-hover:scale-110">
                <img src={Elibary}  className="h-full w-full object-cover object-center" />
              </div>
              <h5 className="text-xl font-bold text-primary py-5">E-Library Management</h5>
              <p className="text-base font-semibold text-gray-400 flex items-center">
                <FaCode className="mr-2" size={30} />
                HTML, Bootstrap, JQuery, C#, ASP.NET, SQLServer, ADO.NET, RDLC Report
              </p>
              <div className="divider"></div>
              <div className="mt-3 flex space-x-2">
               <a href="https://github.com/Sharif81/ElibraryManagment" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">Live Link</button></a>
               <a href="https://github.com/Sharif81/ElibraryManagment" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">GitHub</button></a>
              </div>
            </div>

             {/* Project Card 1 */}
             <div className="group relative shadow-lg border-2 border-gray-200 p-5 rounded-lg ">
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white transform transition-transform duration-500 group-hover:scale-110">
                <img src={Attendance}  className="h-full w-full object-cover object-center" />
              </div>
              <h5 className="text-xl font-bold text-primary py-5">Attendance Management</h5>
              <p className="text-base font-semibold text-gray-400 flex items-center">
                <FaCode className="mr-2" size={30} />
                HTML, Bootstrap, JQuery, C#, ASP.NET, SQLServer, ADO.NET, RDLC Report
              </p>
              <div className="divider"></div>
              <div className="mt-3 flex space-x-2">
               <a href="https://github.com/Sharif81/AttendanceManagment" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">Live Link</button></a>
               <a href="https://github.com/Sharif81/AttendanceManagment" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">GitHub</button></a>
              </div>
            </div>         

            {/* Project Card 2 */}
            <div className="group relative shadow-lg border-2 border-gray-200 p-5 rounded-lg ">
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white transform transition-transform duration-500 group-hover:scale-110">
                <img src={WeddingClient}  className="h-full w-full object-cover object-center" />
              </div>
              <h5 className="text-xl font-bold text-primary py-5">Wedding Letter Client</h5>
              <p className="text-base font-semibold text-gray-400 flex items-center">
                <FaCode className="mr-2" size={30} />
                HTML, Bootstrap, Angular, Toastr, SweetAlert
              </p>
              <div className="divider"></div>
              <div className="mt-3 flex space-x-2">
               <a href="https://github.com/Sharif81/WeddingLetterClient" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">Live Link</button></a>
               <a href="https://github.com/Sharif81/WeddingLetterClient" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">GitHub</button></a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative shadow-lg border-2 border-gray-200 p-5 rounded-lg ">
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white transform transition-transform duration-500 group-hover:scale-110">
                <img src={WeddingAPI} alt="Live Weather Update Project" className="h-full w-full object-cover object-center" />
              </div>
              <h5 className="text-xl font-bold text-primary py-5">Wedding Letter API</h5>
              <p className="text-base font-semibold text-gray-400 flex items-center">
                <FaCode className="mr-2" size={30} />
                C#, .NET Core Web API, SQLServer, Entity Framework
              </p>
              <div className="divider"></div>
              <div className="mt-3 flex space-x-2">
               <a href="https://github.com/Sharif81/WeddingLetterApp" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">Live Link</button></a>
               <a href="https://github.com/Sharif81/WeddingLetterApp" target="_blank"> <button className="btn btn-outline btn-primary btn-sm">GitHub</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
