import React, { useState } from "react";
import Img from "../assets/Images/imgEg.jpeg";
import { FaHeart } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { Link } from "react-router-dom";

function PodCards() {
  const [heartRed, setHeartRed] = useState(false);
  const handleHeart = () => {
    setHeartRed(!heartRed);
  };
  return (
    <div>
      <div className="w-64 bg-gray-800 p-2 rounded-lg overflow-hidden shadow-lg relative group hover:-translate-y-1 transition-all duration-300">
        <button
          onClick={handleHeart}
          className="absolute top-2 right-2 bg-gray-800 p-2 shadow-lg rounded-full transition-all duration-300"
        >
          {heartRed ? (
            <span className="transition-transform transform scale-125 ease-in-out duration-200">
              <FaHeart className="text-red-400 cursor-pointer" />
            </span>
          ) : (
            <span className="transition-transform transform scale-100 ease-in-out duration-200">
              <FaHeart className="text-gray-300 cursor-pointer" />
            </span>
          )}
        </button>
        <Link to={`/podcast/1`}>
          <img
            src={Img}
            alt="Podcast Cover"
            className="w-full rounded-lg h-36 object-cover"
          />

          <div className="absolute right-4 top-32 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-gray-600 p-3 rounded-full shadow-lg hover:bg-gray-700">
              <FiHeadphones className="text-white" />
            </button>
          </div>

          <div className="p-3">
            <h3 className="text-white font-bold text-lg">
              The Tim Ferriss Show
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              The Tim Ferriss Show is a podcast hosted by Tim Ferriss, an
              author,...
            </p>
          </div>

          <div className="flex items-center justify-between px-3 pb-3">
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/30"
                alt="User"
                className="w-6 h-6 rounded-full"
              />
              <p className="text-gray-300 text-xs font-medium">RISHAV CHANDA</p>
            </div>
            <p className="text-gray-400 text-xs">• 1185 Views</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PodCards;
