import { useState } from "react";
import { motion } from "framer-motion";

const options = [
  {
    name: "Private Jet",
    image: "https://images.unsplash.com/photo-1566827267844-39de9bcad5ee?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Luxury private jet for your exclusive travel needs.",
  },
  {
    name: "Helicopter",
    image: "https://images.unsplash.com/photo-1628707094060-bdc917562569?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fast and convenient helicopter services for city transport.",
  },
  {
    name: "Car",
    image: "https://images.unsplash.com/photo-1616789916189-3a0d215b6122?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Luxury and sports cars for an elite driving experience.",
  },
  {
    name: "Yacht",
    image: "https://images.unsplash.com/photo-1614350391736-ed8619d63c06?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Luxury yachts for your ocean adventures and parties.",
  },
];

export default function VerticalNavbar() {
  const [selected, setSelected] = useState(options[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 p-4 items-center justify-center">
      {/* Mobile Menu Toggle Button (visible only on small screens) */}
      <div className="md:hidden w-full mb-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full p-3 bg-[#9333ea] text-white rounded-lg flex justify-between items-center"
        >
          <span>Select Transport</span>
          <span>{isMenuOpen ? '↑' : '↓'}</span>
        </button>
      </div>

      {/* Sidebar - Responsive */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-60 bg-white text-black flex flex-col space-y-4 p-6 rounded-xl shadow-md mb-4 md:mb-0`}>
        {/* Force vertical layout with w-full on all buttons */}
        {options.map((option) => (
          <button
            key={option.name}
            className={`p-4 text-left rounded-lg transition duration-300 w-full ${
              selected.name === option.name
                ? "bg-[#9333ea] text-white font-medium"
                : "hover:bg-[#9333ea20] text-gray-700"
            }`}
            onClick={() => {
              setSelected(option);
              setIsMenuOpen(false);
            }}
          >
            {option.name}
          </button>
        ))}
      </div>
            
      {/* Card Section */}
      <div className="flex-1 flex items-center justify-center md:ml-8">
        <motion.div
          key={selected.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-lg md:max-w-xl text-center border-t-4 border-[#9333ea]"
        >
          <img src={selected.image} alt={selected.name} className="w-full h-40 md:h-48 object-cover rounded-lg shadow-sm" />
          <h2 className="text-xl md:text-2xl font-bold mt-4 md:mt-6 text-[#9333ea]">{selected.name}</h2>
          <p className="text-gray-600 mt-2 md:mt-3">{selected.description}</p>
        </motion.div>
      </div>
    </div>
  );
}