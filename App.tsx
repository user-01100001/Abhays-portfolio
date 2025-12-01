import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import MosaicGallery from './components/MosaicGallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-cubeBlue selection:text-white">
      <Navbar />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="collection">
          <Gallery />
        </div>
        
        <div id="mosaics">
          <MosaicGallery />
        </div>
        
        <div id="teaching">
          <Services />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-cubeBlue hover:bg-blue-500 text-white shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;