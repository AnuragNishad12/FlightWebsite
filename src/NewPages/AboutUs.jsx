import React, { useState } from 'react';
import Footer from './Footer';

import Navbar from '../components/Navbar';

const teamMembers = [
  { name: 'Kanika Tekriwal', role: 'Founder', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, // Role corrected
  { name: 'Akshat Aggarwal', role: 'CFO', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Arijit Moulik', role: 'Sr. VP Commercial', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Hinata', role: 'Co-Founder', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  return (
    <div>
    <Navbar/>
    <div className="max-h-screen flex items-center justify-center mt-10  min-h-screen" >
  
      <div className="container mx-auto p-8 ">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h1 className="text-5xl font-bold mb-4 text-black">
            About Us
          </h1>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Our team Provide  Luxurious Experience.
            </h2>
            <p className="text-lg text-black">
            At SkyWings Aviation, we are committed to redefining air travel with cutting-edge technology and exceptional service. With a fleet of modern, fuel-efficient aircraft, we connect passengers to over 100 destinations worldwide, ensuring safety, comfort, and sustainability at every altitude.
            </p>
          </div>
        </div>
  
        {/* Team Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-black rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-black p-1"
                  />
                </div>
                <h3 className="text-1xl font-bold mb-2 text-white">
                  {member.name.toUpperCase()}
                </h3>
                <p className="text-sm text-white font-medium tracking-wide">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
  
          {/* Navigation Arrows - Hidden on medium screens and up */}
          <div className="flex justify-center mt-6 space-x-4 md:hidden">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-black hover:text-white"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-black hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  
  
  );
}

export default AboutUs;