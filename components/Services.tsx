import React from 'react';
import { Clock, Users, Zap, CheckCircle } from 'lucide-react';
import { Course } from '../types';

const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Beginner Mastery',
    level: 'Beginner',
    description: 'Learn to solve the 3x3 cube from scratch. No prior experience needed.',
    duration: '1 Month',
    price: '₹1,500',
    features: ['Layer-by-layer Method', 'Finger Tricks Basics', 'Logic Building', 'Certificate of Completion']
  },
  {
    id: 'c2',
    title: 'Speedcubing Pro',
    level: 'Advanced',
    description: 'Cut down your times with advanced algorithms (CFOP) and look-ahead techniques.',
    duration: '2 Months',
    price: '₹3,000',
    features: ['CFOP Method Deep Dive', 'Advanced Finger Tricks', 'Look-ahead Training', 'Competition Prep']
  },
  {
    id: 'c3',
    title: 'Mosaic Workshop',
    level: 'Intermediate',
    description: 'Learn how to design and assemble stunning cube portraits and art.',
    duration: '3 Days',
    price: '₹2,500',
    features: ['Pixel Art Theory', 'Color Management', 'Team Building Activity', 'Create Your First Portrait']
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900" id="teaching">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cubeRed font-bold tracking-widest uppercase mb-2">Teaching & Workshops</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cubeOrange to-cubeYellow">Potential</span></h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Whether you want to solve your first cube or break a national record, I have a structured curriculum designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="glass-card rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-cubeBlue flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide 
                  ${course.level === 'Beginner' ? 'bg-green-900/50 text-green-400' : 
                    course.level === 'Advanced' ? 'bg-red-900/50 text-red-400' : 'bg-blue-900/50 text-blue-400'}`}>
                  {course.level}
                </span>
                <Clock size={20} className="text-gray-500" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{course.description}</p>

              <div className="text-3xl font-bold text-white mb-6">
                {course.price} <span className="text-sm text-gray-500 font-normal">/ course</span>
              </div>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <CheckCircle size={16} className="text-cubeGreen mr-2 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-white text-darkBg font-bold hover:bg-cubeBlue hover:text-white transition-colors">
                Book a Class
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;