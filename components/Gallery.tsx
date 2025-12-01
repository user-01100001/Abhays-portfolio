import React, { useState } from 'react';
import { X, ZoomIn, Grid } from 'lucide-react';
import { Artwork } from '../types';

const INITIAL_IMAGES: Artwork[] = [
  { id: '1', title: 'Gan 11 M Pro', category: 'collection', imageUrl: 'https://picsum.photos/seed/cube1/600/600', description: 'My main speedcube.' },
  { id: '2', title: 'Mirror Cube', category: 'collection', imageUrl: 'https://picsum.photos/seed/cube2/600/600', description: 'Reflective chaos.' },
  { id: '3', title: 'Megaminx', category: 'collection', imageUrl: 'https://picsum.photos/seed/cube3/600/600', description: '12 faces of fun.' },
  { id: '4', title: 'Custom Sticker Mod', category: 'collection', imageUrl: 'https://picsum.photos/seed/cube4/600/600', description: 'Handmade sticker modification.' },
  { id: '5', title: 'Pyraminx Speed', category: 'collection', imageUrl: 'https://picsum.photos/seed/cube5/600/600', description: 'Fastest pyramid solver.' },
  { id: '6', title: 'Vintage 1980s', category: 'collection', imageUrl: 'https://picsum.photos/seed/cube6/600/600', description: 'Where it all started.' },
];

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Artwork[]>(INITIAL_IMAGES);
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

  return (
    <section className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-cubeOrange font-bold tracking-widest uppercase mb-2">My Collection</h2>
            <h3 className="text-4xl font-bold">Cube <span className="text-white">Gallery</span></h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-800 cursor-pointer border border-gray-700 hover:border-cubeBlue transition-colors"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.imageUrl} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
                <p className="text-gray-300 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.description}</p>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full">
                    <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-8 right-8 text-white hover:text-cubeRed transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl shadow-cubeBlue/20" 
            />
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-gray-400 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;