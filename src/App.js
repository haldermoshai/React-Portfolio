import React, { useRef, useState, useEffect } from 'react';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import FrameCarousel from './component/FrameCarousel';
import Contact from './component/Contact';
import Footer from './component/Footer';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import './App.css';

const buttonStyle = {
  width: '50px',
  height: '50px',
  position: 'fixed',
  bottom: '75px',
  right: '12px',
  cursor: 'pointer',
  color: '#aa5007',
};

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [showScrollToTop, setShowScrollToTop] = useState(false); // handle scroll state
  const [activeNavItem, setActiveNavItem] = useState(null); // Track active nav item

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollToTop(scrollTop > 0); // If scrollTop is greater than 0, user is not on the home screen
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Reset activeNavItem when scrolling to top
    setActiveNavItem(null);
  };

  return (
    <div className="App">
      <Navbar
        scrollToHome={() => {
          scrollToRef(homeRef);
          setActiveNavItem(0); // Set Home as active when scrolled to top
        }}
        scrollToAbout={() => {
          scrollToRef(aboutRef);
          setActiveNavItem(1);
        }}
        scrollToSkills={() => {
          scrollToRef(skillsRef);
          setActiveNavItem(2);
        }}
        scrollToContact={() => {
          scrollToRef(contactRef);
          setActiveNavItem(3);
        }}
        activeNavItem={activeNavItem} // Pass activeNavItem to Navbar
      />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <FrameCarousel />
      <div ref={contactRef}><Contact /></div>
      <Footer />

      {/* Button to scroll to top */}
      {showScrollToTop && (
        <ArrowCircleUpIcon style={buttonStyle} onClick={scrollToTop} />
      )}
    </div>
  );
}

export default App;