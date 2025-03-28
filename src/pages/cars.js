import React from 'react'
import Footer from './footer';
import Hero from './hero';
import CarMainContent from './Car_MainContent';
import ContactForm from './Contactform';
import Navbar from '../components/Navbar';


export default function Cars() {
  return (
    <div>
        <div>
            <Navbar />
            <Hero backgroundImage="https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/mclaren-750s-driving-dynamic-hero-1920x774px.ashx" />
            <CarMainContent />
            <ContactForm />
            <Footer />
        </div>
    </div>
  )
}
