import { FaPlane, FaCar, FaShip, FaHelicopter } from "react-icons/fa";
import TransportationExplorer from "./TransportationExplorer";

const services = [
  {
    icon: <FaPlane className="text-3xl text-[#9333ea]" />, 
    title: "Private Jet Charter", 
    description: "Fly in luxury with our private jet charters, offering comfort, speed, and personalized in-flight services.",
  },
  {
    icon: <FaCar className="text-3xl text-[#9333ea]" />, 
    title: "Luxury Car Rentals", 
    description: "Choose from high-end luxury and exotic cars for a stylish and smooth ride to your destination.",
  },
  {
    icon: <FaShip className="text-3xl text-[#9333ea]" />, 
    title: "Yacht Charter", 
    description: "Sail the seas in style with our exclusive yacht rentals, complete with luxury amenities and crew.",
  },
  {

    icon: <FaHelicopter className="text-3xl text-[#9333ea]" />, 
    title: "Helicopter Services", 
    description: "Skip traffic with our elite helicopter transfers and city tours, offering speed and scenic aerial views.",
  },
];

function Card({ children, className }) {
  return <div className={`bg-white p-3 rounded-xl shadow-lg text-center border-2 border-[#9333ea] h-44 w-64 ${className}`}>{children}</div>;
}

function CardContent({ children }) {
  return <div className="text-gray-600 text-sm mt-1">{children}</div>;
}

export default function Services() {
  return (
    <div className="container mx-auto px-0 py-0 text-center">
      <h1 className="text-black text-3xl font-bold mb-6">Our Services</h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Card key={index}>
              <div className="flex justify-center mb-1">{service.icon}</div>
              <h2 className="text-md font-semibold mb-1">{service.title}</h2>
              <CardContent>{service.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
      <TransportationExplorer/>
    </div>
  );
}