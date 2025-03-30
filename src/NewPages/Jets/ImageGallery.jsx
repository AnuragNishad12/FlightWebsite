import React, { useState } from 'react';
import Footer from '../Footer';

// Sample aircraft data in JSON format with the expanded details structure
const aircraftData = [
  {
    id: 1,
    name: "Global 6000",
    images: [
      "https://media.lunajets.com/media/bombardier-global-express-6000.jpg?width=1640&format=webp",
      "https://tse1.mm.bing.net/th?id=OIP.fuau-D_S6wbLQuPRHvwWlAHaE8&pid=Api&P=0&h=180",
      "https://www.avconjet.at/wp-content/uploads/2020/02/IMG_9983-scaled.jpg",
      "https://tse1.mm.bing.net/th?id=OIP.l2vzp47olupEMGqWGcqylQHaE7&pid=Api&P=0&h=180"
    ],
    shortDescription: "The Global 6000 aircraft has class-leading power for mission equipment, almost 17 hours of endurance, proven reliability with class-leading maintenance intervals and ample cabin space for workstations and mission equipment.",
    aircraftDetails: {
      guestCapacity: 15,
      numberOfPilots: 2,
      numberOfFlightAttendants: 1,
      luggageCapacity: 0,
      numberOfLavatory: 1,
      wifiAvailable: "No"
    },
    technicalSpecifications: {
      exterior: {
        length: "99.5 ft",
        wingspan: "94 ft",
        height: "25 ft"
      },
      range: {
        rangeKm: "11112 Km"
      },
      speed: {
        highSpeed: "944 Km/Hr",
        typicalCruiseSpeed: "944 Km/Hr"
      },
      engines: {
        engineModel: "--",
        thrustKN: "--",
        flatRatedTo: "--"
      },
      airfieldPerformance: {
        takeOffDistance: "6476 ft",
        landingDistance: "2236 ft"
      },
      avionics: "--",
      operatingAltitude: "51,000 ft"
    }
  },
  {
    id: 2,
    name: "Global 7500",
    images: [
      "https://globaljet.aero/sites/default/files/2022-06/Bombardier%20Global%207500_Exterior%203%20[1600x1200].JPG",
      "https://globaljet.aero/sites/default/files/2024-01/Bombardier%20Global%207500_Fwd%20Cabin%201%20[1600x1200]_1.jpg",
      "https://resources.globalair.com/aircraftforsale/images/ads/91427_ext1a.png",
      "https://imgproc.airliners.net/photos/airliners/1/9/7/6395791.jpg?v=v4b1828ddf91"
    ],
    shortDescription: "The Global 7500 is the world's largest and longest range business jet, with an unmatched cabin experience featuring four true living spaces and a dedicated crew suite.",
    aircraftDetails: {
      guestCapacity: 19,
      numberOfPilots: 2,
      numberOfFlightAttendants: 2,
      luggageCapacity: 0,
      numberOfLavatory: 2,
      wifiAvailable: "Yes"
    },
    technicalSpecifications: {
      exterior: {
        length: "111 ft",
        wingspan: "104 ft",
        height: "27 ft"
      },
      range: {
        rangeKm: "14260 Km"
      },
      speed: {
        highSpeed: "982 Km/Hr",
        typicalCruiseSpeed: "956 Km/Hr"
      },
      engines: {
        engineModel: "GE Passport",
        thrustKN: "73.5 KN",
        flatRatedTo: "ISA+20°C"
      },
      airfieldPerformance: {
        takeOffDistance: "5800 ft",
        landingDistance: "2240 ft"
      },
      avionics: "Bombardier Vision flight deck",
      operatingAltitude: "51,000 ft"
    }
  },
  {
    id: 3,
    name: "Challenger 350",
    images: [
        "https://bombardier.com/sites/default/files/styles/retina_1060x750/public/2020-11/DDBA0634_Challenger350_16A2593_V77_compress.jpg?itok=TUGlNr6l",
      "https://www.evojets.com/wp-content/uploads/2018/04/challenger-350.jpg",
      "https://www.silverair.com/wp-content/uploads/2023/06/2.jpg",
      "https://img.jamesedition.com/listing_images/2019/11/25/14/28/47/1f24181c-221a-4059-8d23-821621ac455a/je/2000xxs.jpg"
    ],
    shortDescription: "The Challenger 350 aircraft features the widest cabin in its class, a smooth ride, and excellent operating costs with powerful engines and exceptional short-field performance.",
    aircraftDetails: {
      guestCapacity: 10,
      numberOfPilots: 2,
      numberOfFlightAttendants: 1,
      luggageCapacity: 106,
      numberOfLavatory: 1,
      wifiAvailable: "Yes"
    },
    technicalSpecifications: {
      exterior: {
        length: "68.8 ft",
        wingspan: "69 ft",
        height: "20 ft"
      },
      range: {
        rangeKm: "5926 Km"
      },
      speed: {
        highSpeed: "870 Km/Hr",
        typicalCruiseSpeed: "820 Km/Hr"
      },
      engines: {
        engineModel: "Honeywell HTF7350",
        thrustKN: "33.9 KN",
        flatRatedTo: "ISA+15°C"
      },
      airfieldPerformance: {
        takeOffDistance: "4835 ft",
        landingDistance: "2364 ft"
      },
      avionics: "Collins Pro Line 21 Advanced",
      operatingAltitude: "45,000 ft"
    }
  }
];

// Image Gallery Component
const ImageGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <div className="w-full">
      <div className="w-full h-64 md:h-80 mb-2 overflow-hidden">
        <img 
          src={images[activeImage]} 
          alt="Aircraft view"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`h-16 w-16 cursor-pointer border-2 ${activeImage === index ? 'border-red-500' : 'border-gray-300'}`}
            onClick={() => setActiveImage(index)}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index+1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Individual Aircraft Card Component
const AircraftCard = ({ aircraft }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-1/2 p-4">
          <ImageGallery images={aircraft.images} />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{aircraft.name}</h2>
          <div className="border-b border-gray-300 mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
          <p className="text-gray-600 mb-4">{aircraft.shortDescription}</p>
          
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="text-red-500 font-medium hover:text-red-700 transition duration-150"
          >
            {showDetails ? "Hide Details" : "See Details"}
          </button>
        </div>
      </div>
      
      {showDetails && (
        <div className="p-6 border-t border-gray-200">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Aircraft Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Guest Capacity:</span>
                <span className="text-gray-600 ml-2">{aircraft.aircraftDetails.guestCapacity}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Number of pilots:</span>
                <span className="text-gray-600 ml-2">{aircraft.aircraftDetails.numberOfPilots}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Number of flight attendants:</span>
                <span className="text-gray-600 ml-2">{aircraft.aircraftDetails.numberOfFlightAttendants}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Luggage capacity (ft³):</span>
                <span className="text-gray-600 ml-2">{aircraft.aircraftDetails.luggageCapacity}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Number of lavatory:</span>
                <span className="text-gray-600 ml-2">{aircraft.aircraftDetails.numberOfLavatory}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Wifi available:</span>
                <span className="text-gray-600 ml-2">{aircraft.aircraftDetails.wifiAvailable}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
            
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Exterior</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Length:</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.exterior.length}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Wingspan:</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.exterior.wingspan}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Height:</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.exterior.height}</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Range</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Range (Km):</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.range.rangeKm}</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Speed</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">High speed (Km/Hr):</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.speed.highSpeed}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Typical cruise speed (Km/Hr):</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.speed.typicalCruiseSpeed}</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Engines</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Engine model:</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.engines.engineModel}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Thrust (KN):</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.engines.thrustKN}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Flat rated to:</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.engines.flatRatedTo}</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Airfield performance</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Take-off distance (ft):</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.airfieldPerformance.takeOffDistance}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Landing distance (ft):</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.airfieldPerformance.landingDistance}</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Avionics & Operating Altitude</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Avionics:</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.avionics}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold text-gray-700">Operating Altitude:</span>
                <span className="text-gray-600 ml-2">{aircraft.technicalSpecifications.operatingAltitude}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Aircraft Showcase Component
const AircraftShowcase = () => {
  return (
    <div>
        <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Premium Aircraft Collection</h1>
        
        {aircraftData.map(aircraft => (
          <AircraftCard key={aircraft.id} aircraft={aircraft} />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default AircraftShowcase;