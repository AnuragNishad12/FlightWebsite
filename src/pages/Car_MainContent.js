import React, { useState } from 'react';
import "./FlightSearch.css";

const cardData = [
  {
    img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1729595890~exp=1729599490~hmac=39628bd738d3d79f62b0683e1cec809efbf1438e5a92503cf2f540f0b23eb7b5&w=900",
    title: "Audi A5",
    description: "Convertable",
    totalTime: "19 Hrs 30 Min",
    pax: 6,
    price: "INR 28,75,400/-"
  },
  {
    img: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2017-bugatti-chiron.jpg",
    title: "Bugatti Chiron",
    description: "Bugatti Chiron",
    totalTime: "19 Hrs 30 Min",
    pax: 6,
    price: "INR 28,75,400/-"
  },
  {
    img: "https://th.bing.com/th/id/OIP.Ogo7SswTG3ARSaqUgNyCmAHaEK?rs=1&pid=ImgDetMain",
    title: "Lamborghini Aventador",
    description: "Lamborghini Aventador",
    totalTime: "19 Hrs 30 Min",
    pax: 6,
    price: "INR 28,75,400/-"
  },
  {
    img: "https://www.classicdriver.com/sites/default/files/cars_images/feed_681175/mclaren-p1-033.jpg",
    title: "McLaren P1",
    description: "McLaren P1",
    totalTime: "19 Hrs 30 Min",
    pax: 6,
    price: "INR 28,75,400/-"
  },
  {
      img: "https://s1.cdn.autoevolution.com/images/gallery/PORSCHE-918-Spyder-5142_26.jpg",
      title: "Porsche 918 Spyder",
      description: "Porsche 918 Spyder",
      totalTime: "19 Hrs 30 Min",
      pax: 6,
      price: "INR 28,75,400/-"
    },
    {
      img: "https://th.bing.com/th/id/OIP.MA4MAptPvidIi1XFQy25SQHaEK?rs=1&pid=ImgDetMain",
      title: "Koenigsegg Jesko",
      description: "Koenigsegg Jesko",
      totalTime: "19 Hrs 30 Min",
      pax: 6,
      price: "INR 28,75,400/-"
    },
    {
      img: "https://th.bing.com/th/id/OIP.5nlRTc_kqwbX7ZuuUt4f3wHaEK?rs=1&pid=ImgDetMain",
      title: "Aston Martin Valkyrie",
      description: "Twin Engine Turboprop",
      totalTime: "19 Hrs 30 Min",
      pax: 6,
      price: "INR 28,75,400/-"
    }
];

export default function CarComponent() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [filteredJets, setFilteredJets] = useState(cardData);

  const handleFilter = () => {
    const filtered = cardData.filter(
      (car) =>
        (departure ? car.title.toLowerCase().includes(departure.toLowerCase()) : true) &&
        (destination ? parseInt(car.price.replace(/[^0-9]/g, ""), 10) <= parseInt(destination, 10) : true)
    );
    setFilteredJets(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
    {/* Search Bar */}
    <div className="flex justify-center gap-4 mb-8">
      <input 
        type="text" 
        placeholder="Enter car name" 
        value={departure} 
        onChange={(e) => setDeparture(e.target.value)}
        className="px-4 py-2 border rounded-md w-64"
      />

      <input 
        type="number" 
        placeholder="Max Price (INR)" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)}
        className="px-4 py-2 border rounded-md w-64"
      />

      <button 
        onClick={handleFilter} 
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>

    {/* No Cars Message */}
    {filteredJets.length === 0 ? (
      <p className="text-center text-gray-600">No cars available for that filter.</p>
    ) : (
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {filteredJets.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={car.img} alt={car.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{car.title}</h3>
                <p className="text-gray-600 mb-2">{car.description}</p>
                <p className="mb-1"><strong>Travel Time:</strong> {car.totalTime}</p>
                <p className="mb-1"><strong>Passengers:</strong> {car.pax}</p>
                <p className="text-green-600 font-semibold">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  );
}
