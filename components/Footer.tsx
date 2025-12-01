import React from 'react';
import { Grid3x3 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Grid3x3 className="w-6 h-6 text-cubeOrange" />
            <span className="text-xl font-bold tracking-tighter text-white">AH.</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#teaching" className="hover:text-white transition-colors">Courses</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Abhay Haswani. All rights reserved.</p>
          <div className="flex space-x-1 mt-2 md:mt-0">
             <span>Designed with</span>
             <span className="text-red-500 animate-pulse">♥</span>
             <span>for Cubing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;