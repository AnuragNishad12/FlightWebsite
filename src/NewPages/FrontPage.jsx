import React from "react";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full">
  <iframe 
    className="w-full h-full absolute top-0 left-0"
    src="https://www.pexels.com/video/1650628/embed/"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
  ></iframe>
</div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      
      {/* Navbar */}
      {/* <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-5 text-white bg-black bg-opacity-40">
        <h1 className="text-3xl font-bold text-red-500">XO</h1>
        <ul className="flex space-x-6 text-lg">
          <li>Private Jet</li>
          <li>The Fleet</li>
          <li>How It Works</li>
          <li>Charter Membership</li>
          <li>Shared Flights</li>
          <li>Contact Us</li>
          <li>Get Started</li>
        </ul>
      </nav> */}

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        {/* <p className="text-lg uppercase">Fly Beyond.™</p>
        <h1 className="text-5xl font-bold">The World's Premier</h1>
        <h2 className="text-5xl font-bold text-red-500">Private Aviation Network</h2> */}
      </div>
    </div>
  );
};

export default HomePage;