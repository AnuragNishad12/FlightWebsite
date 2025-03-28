import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import FloatingButton from './components/FloatingButton.jsx';
import FaqSection from './components/FaqSection.jsx';
import OffersSection from './components/OffersSection.jsx';
import TestimonialSection from './components/TestimonialSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';

function App() {
    return ( 
      <div>
        <Navbar /> 
       < HeroSection /> 
       < WhyChooseUs />
       < OffersSection />
       < TestimonialSection />
       < FaqSection />
       < Footer /> 
       < FloatingButton />

      </div>

  
  );
}

export default App;