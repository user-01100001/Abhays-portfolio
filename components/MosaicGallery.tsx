import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { Artwork } from '../types';

const INITIAL_MOSAICS: Artwork[] = [
  { id: '101', title: 'Iron Man Portrait', category: 'mosaic', imageUrl: 'https://picsum.photos/seed/mosaic1/800/600', description: 'Composed of 400 Rubik\'s Cubes.' },
  { id: '102', title: 'Virat Kohli', category: 'mosaic', imageUrl: 'https://picsum.photos/seed/mosaic2/800/600', description: 'Tribute to the legend. 600 Cubes.' },
  { id: '103', title: 'Geometric Abstract', category: 'mosaic', imageUrl: 'https://picsum.photos/seed/mosaic3/800/800', description: 'Exploration of patterns and depth.' },
  { id: '104', title: 'Local Landscape', category: 'mosaic', imageUrl: 'https://picsum.photos/seed/mosaic4/800/500', description: 'City skyline in 6 colors.' },
];

const MosaicGallery: React.FC = () => {
  const [mosaics, setMosaics] = useState<Artwork[]>(INITIAL_MOSAICS);
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 relative">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cubeBlue/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-cubeGreen font-bold tracking-widest uppercase mb-2">Cube Artistry</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Mosaic <span className="text-white">Masterpieces</span></h3>
            <p className="text-gray-400">
              Mosaic art is about seeing the bigger picture. Using hundreds of cubes, I manually twist each one to a specific face to create detailed pixel art portraits and landscapes.
            </p>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {mosaics.map((art) => (
            <div 
              key={art.id} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveId(art.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <img 
                src={art.imageUrl} 
                alt={art.title} 
                className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 ${activeId === art.id ? 'opacity-100' : 'opacity-0'}`}>
                <h4 className="text-2xl font-bold text-white mb-2">{art.title}</h4>
                <p className="text-cubeYellow font-medium mb-4">{art.description}</p>
                <button className="flex items-center space-x-2 text-sm uppercase tracking-wider font-bold hover:text-cubeRed transition-colors">
                    <Heart size={16} /> 
                    <span>Like Artwork</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Process Strip */}
        <div className="mt-20 border-t border-gray-800 pt-12">
            <h4 className="text-center text-xl font-bold mb-8">The Process</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                    { step: '01', title: 'Design', desc: 'Pixelating image' },
                    { step: '02', title: 'Calculation', desc: 'Mapping colors' },
                    { step: '03', title: 'Solving', desc: 'Twisting cubes' },
                    { step: '04', title: 'Assembly', desc: 'Final framing' }
                ].map((item) => (
                    <div key={item.step} className="p-6 glass-card rounded-xl">
                        <div className="text-4xl font-black text-gray-800 mb-2">{item.step}</div>
                        <h5 className="text-lg font-bold text-white">{item.title}</h5>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicGallery;