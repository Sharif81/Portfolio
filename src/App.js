import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <About />
            <Skills />
            <Resume />
            <Project />
            <Contact />
          </div>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {isVisible && (
   
        <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-2 bg-primary text-white border-none rounded cursor-pointer transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
       <FaArrowAltCircleUp />
      </button>
      )}
    </BrowserRouter>
  );
}

export default App;
