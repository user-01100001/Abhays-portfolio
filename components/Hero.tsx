import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cubeBlue/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cubeOrange/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cubeRed/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="mb-6 flex justify-center">
          <span className="px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-sm text-cubeYellow font-medium uppercase tracking-wider">
            Rubik's Cube Artist & Instructor
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            ABHAY HASWANI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
          Mastering the art of speedcubing and creating breathtaking portraits, 
          one <span className="text-cubeBlue font-semibold">pixel</span> at a time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#collection"
            className="px-8 py-4 rounded-full bg-white text-darkBg font-bold text-lg hover:bg-gray-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            View My Art
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#teaching"
            className="px-8 py-4 rounded-full border border-gray-600 hover:border-cubeBlue hover:text-cubeBlue bg-transparent text-white font-bold text-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            Start Learning
          </a>
        </div>
      </div>

      {/* Decorative Cube Elements */}
      <div className="absolute bottom-10 left-10 opacity-20 animate-bounce delay-700 hidden md:block">
        <div className="w-16 h-16 bg-gradient-to-br from-cubeGreen to-transparent border border-cubeGreen/30 rounded-xl transform rotate-12"></div>
      </div>
      <div className="absolute top-32 right-10 opacity-20 animate-bounce hidden md:block">
        <div className="w-12 h-12 bg-gradient-to-br from-cubeRed to-transparent border border-cubeRed/30 rounded-lg transform -rotate-12"></div>
      </div>
    </section>
  );
};

export default Hero;