import React from 'react';
import { Mail, Phone, MapPin, Award, User, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Profile Image/Card */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cubeBlue to-cubeRed rounded-2xl transform rotate-3 scale-105 opacity-50 blur-lg group-hover:rotate-6 transition-transform duration-500"></div>
              
              <div className="relative glass-card rounded-2xl p-2 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/abhay/600/700" 
                  alt="Abhay Haswani" 
                  className="w-full h-auto rounded-xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/5]"
                />
                
                {/* Float info */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold text-white">Abhay Haswani</h3>
                    <p className="text-cubeOrange font-medium">Speedcuber & Mosaic Artist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-cubeBlue font-bold tracking-widest uppercase mb-2">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Turning Chaos Into <span className="text-white">Art</span></h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I am a passionate Speedcuber and Mosaic Artist based in India. My journey began with a simple curiosity to solve the 3x3 cube, which quickly evolved into an obsession with speed and patterns. 
                <br /><br />
                Today, I don't just solve cubes; I use them as pixels to create large-scale portraits and intricate designs. I also dedicate my time to teaching the next generation of cubers, helping them improve their cognitive skills and patience through the art of cubing.
              </p>
            </div>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                <Award className="w-8 h-8 text-cubeYellow mb-3" />
                <h4 className="text-2xl font-bold text-white">7+ Years</h4>
                <p className="text-sm text-gray-500">Experience</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                <Layers className="w-8 h-8 text-cubeGreen mb-3" />
                <h4 className="text-2xl font-bold text-white">10+</h4>
                <p className="text-sm text-gray-500">Mosaics Created</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                <User className="w-8 h-8 text-cubeRed mb-3" />
                <h4 className="text-2xl font-bold text-white">50+</h4>
                <p className="text-sm text-gray-500">Students Taught</p>
              </div>
            </div>

            {/* Contact Details Small */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cubeBlue" />
                    <span>+91 7433076424</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-cubeOrange" />
                    <span>abhayhaswani2424@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cubeGreen" />
                    <span>India</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;