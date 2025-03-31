import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    title: "🛩️ Private Jets",
    subtitle: "Luxury in the Sky – Your Private Jet Awaits!",
    features: [
      "✅ Personalized In-Flight Services",
      "✅ Ultra-Comfortable Interiors",
      "✅ Fly Anytime, Anywhere"
    ],
    cta: "✈️ Book Now for an Exclusive Experience",
    image: "https://images.unsplash.com/photo-1657409845132-6c3096724946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "🚘 Luxury Cars",
    subtitle: "Drive the Dream – Experience Luxury on Wheels!",
    features: [
      "🚗 Chauffeur & Self-Drive Options",
      "🏎️ Top Supercars & Luxury Sedans",
      "💎 Unmatched Comfort & Performance"
    ],
    cta: "🔥 Rent Yours Today!",
    image: "https://images.unsplash.com/photo-1723264680621-65c8ead231c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "🛥️ Yachts",
    subtitle: "Sail in Style – Your Luxury Yacht Awaits!",
    features: [
      "🌊 Private Parties & Getaways",
      "🍾 Premium Onboard Services",
      "⛵ Explore Exotic Destinations"
    ],
    cta: "🚢 Book Your Exclusive Yacht Now",
    image: "https://images.unsplash.com/photo-1541379503258-8fd7ca30fc55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "🚁 Helicopters",
    subtitle: "Skip the Traffic – Fly in Luxury!",
    features: [
      "🚁 Instant Transfers & City Tours",
      "🛡️ Safety & Comfort Guaranteed",
      "🌎 Reach Remote Destinations with Ease"
    ],
    cta: "💼 Perfect for Business & Leisure",
    image: "https://images.unsplash.com/photo-1484249326436-4e8628de5c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const LuxurySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,          // Enables automatic sliding
        autoplaySpeed: 1000,     // Sets the interval to 1 second (1000ms)
        nextArrow: <button className="absolute bottom-5 right-10 bg-white p-2 rounded-full shadow-lg">➡️</button>,
        prevArrow: <button className="absolute bottom-5 left-10 bg-white p-2 rounded-full shadow-lg">⬅️</button>,
      };
      
  
    return (
      <div className="w-600 h-600 overflow-hidden relative">
        <Slider {...settings} className="w-full h-full">
          {data.map((item, index) => (
            <div key={index} className="relative w-screen h-screen">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-5 left-5 text-white p-5 rounded-xl">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p className="text-lg italic mt-2">{item.subtitle}</p>
                <ul className="mt-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-base">{feature}</li>
                  ))}
                </ul>
                <p className="mt-4 font-semibold text-lg">{item.cta}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default LuxurySlider;
