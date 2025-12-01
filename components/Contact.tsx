import React, { useState } from 'react';
import { Send, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: '', email: '', subject: 'Inquiry', message: '' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cubeOrange/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cubeBlue/10 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info Side */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-cubeBlue font-bold tracking-widest uppercase mb-2">Get in Touch</h2>
              <h3 className="text-4xl font-bold text-white">Let's <span className="text-cubeOrange">Connect</span></h3>
              <p className="text-gray-400 mt-4">
                Interested in a mosaic commission, a workshop, or private lessons? Drop me a message.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl glass-card">
                <div className="p-3 bg-cubeBlue/20 rounded-lg text-cubeBlue">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Me</p>
                  <p className="text-lg font-semibold text-white">+91 7433076424</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl glass-card">
                <div className="p-3 bg-cubeOrange/20 rounded-lg text-cubeOrange">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="text-lg font-semibold text-white">abhayhaswani2424@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-white font-bold mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white transition-colors text-gray-400"><Instagram size={20} /></a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-700 hover:text-white transition-colors text-gray-400"><Linkedin size={20} /></a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-gray-400"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cubeBlue transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cubeBlue transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <select 
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cubeBlue transition-colors"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>Book a Workshop</option>
                  <option>Private Lessons</option>
                  <option>Mosaic Commission</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cubeBlue transition-colors resize-none"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cubeBlue to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;