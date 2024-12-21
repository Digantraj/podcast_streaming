// import React, { useState } from "react";
// import Img from "../assets/Images/imgEg.jpeg";
// import { FaHeart } from "react-icons/fa";
// import { FiHeadphones } from "react-icons/fi";
// import { Link } from "react-router-dom";

// function PodCards({ items }) {
//   const [heartRed, setHeartRed] = useState(false);
//   const handleHeart = () => {
//     setHeartRed(!heartRed);
//   };
//   return (
//     <div>
//       <Link to={`/podcast/${items._id}`}>
//         <div className="w-64 bg-gray-200 p-2 rounded-lg overflow-hidden shadow-lg relative group hover:-translate-y-1 transition-all duration-300">
//           <button
//             onClick={handleHeart}
//             className="absolute top-2 right-2 bg-gray-50 p-2 shadow-lg rounded-full transition-all duration-300"
//           >
//             {heartRed ? (
//               <span className="transition-transform transform scale-125 ease-in-out duration-200">
//                 <FaHeart className="text-red-400 cursor-pointer" />
//               </span>
//             ) : (
//               <span className="transition-transform transform scale-100 ease-in-out duration-200">
//                 <FaHeart className="text-[#E0E0E0] cursor-pointer" />
//               </span>
//             )}
//           </button>
//           <Link to={`/podcast/1`}>
//             <img
//               src={Img}
//               alt="Podcast Cover"
//               className="w-full rounded-lg h-36 object-cover"
//             />

//             <div className="absolute right-4 top-32 opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <button className="bg-[#FF5722] p-3 rounded-full shadow-lg hover:bg-gray-700">
//                 <FiHeadphones className="text-white" />
//               </button>
//             </div>

//             <div className="p-3">
//               <h3 className="text-gray-700 font-bold text-lg">
//                 The Tim Ferriss Show
//               </h3>
//               <p className="text-gray-500 text-sm mt-1">
//                 The Tim Ferriss Show is a podcast hosted by Tim Ferriss, an
//                 author,...
//               </p>
//             </div>

//             <div className="flex items-center justify-between px-3 pb-3">
//               <div className="flex items-center gap-2">
//                 <img
//                   src="https://i.pravatar.cc/30"
//                   alt="User"
//                   className="w-6 h-6 rounded-full"
//                 />
//                 <p className="text-gray-600 text-xs font-medium">
//                   RISHAV CHANDA
//                 </p>
//               </div>
//               <p className="text-gray-700 text-xs">• 1185 Views</p>
//             </div>
//           </Link>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default PodCards;

// {
//   /* <div className="w-64 bg-gray-200 p-2 rounded-lg overflow-hidden shadow-lg relative group hover:-translate-y-1 transition-all duration-300">
//   <button
//     onClick={handleHeart}
//     className="absolute top-2 right-2 bg-gray-50 p-2 shadow-lg rounded-full transition-all duration-300"
//   >
//     {heartRed ? (
//       <span className="transition-transform transform scale-125 ease-in-out duration-200">
//         <FaHeart className="text-red-400 cursor-pointer" />
//       </span>
//     ) : (
//       <span className="transition-transform transform scale-100 ease-in-out duration-200">
//         <FaHeart className="text-[#E0E0E0] cursor-pointer" />
//       </span>
//     )}
//   </button>
//   <Link to={`/podcast/1`}>
//     <img
//       src={Img}
//       alt="Podcast Cover"
//       className="w-full rounded-lg h-36 object-cover"
//     />

//     <div className="absolute right-4 top-32 opacity-0 group-hover:opacity-100 transition-all duration-300">
//       <button className="bg-[#FF5722] p-3 rounded-full shadow-lg hover:bg-gray-700">
//         <FiHeadphones className="text-white" />
//       </button>
//     </div>

//     <div className="p-3">
//       <h3 className="text-gray-700 font-bold text-lg">
//         The Tim Ferriss Show
//       </h3>
//       <p className="text-gray-500 text-sm mt-1">
//         The Tim Ferriss Show is a podcast hosted by Tim Ferriss, an
//         author,...
//       </p>
//     </div>

//     <div className="flex items-center justify-between px-3 pb-3">
//       <div className="flex items-center gap-2">
//         <img
//           src="https://i.pravatar.cc/30"
//           alt="User"
//           className="w-6 h-6 rounded-full"
//         />
//         <p className="text-gray-600 text-xs font-medium">RISHAV CHANDA</p>
//       </div>
//       <p className="text-gray-700 text-xs">• 1185 Views</p>
//     </div>
//   </Link>
// </div> */
// }

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { playerActions } from "../store/player";
import { useSelector } from "react-redux";

function PodCards({ items }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [heartRed, setHeartRed] = useState(false);
  const dispatch = useDispatch();

  const handleHeart = () => {
    setHeartRed(!heartRed);
  };

  const handlePlay = (e) => {
    if (isLoggedIn) {
      e.preventDefault();
      dispatch(playerActions.changeSong(`http://localhost:5003/${items.audioFile}` ));
      dispatch(playerActions.changeImg(`http://localhost:5003/${items.frontImage}` ));
      dispatch(playerActions.setDiv());
    } else {
      alert("Please login to play the podcast");
    }
  };

  return (
    <div className="w-64 bg-gray-200 p-2 rounded-lg overflow-hidden shadow-lg relative group hover:-translate-y-1 transition-all duration-300">
      <button
        onClick={handleHeart}
        className="absolute top-2 right-2 bg-gray-50 p-2 shadow-lg rounded-full transition-all duration-300"
      >
        {heartRed ? (
          <span className="transition-transform transform scale-125 ease-in-out duration-200">
            <FaHeart className="text-red-400 cursor-pointer" />
          </span>
        ) : (
          <span className="transition-transform transform scale-100 ease-in-out duration-200">
            <FaHeart className="text-[#E0E0E0] cursor-pointer" />
          </span>
        )}
      </button>

      {/* <Link to={`/podcast/${items._id}`}> */}
      <img
        src={`http://localhost:5003/${items.frontImage}` || "default-image.jpg"}
        alt={items.title || "Podcast Cover"}
        className="w-full rounded-lg h-36 object-cover"
      />

      {/* Play Now */}
      <div className="absolute right-4 top-32 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={handlePlay}
          className="bg-[#FF5722] p-3 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FiHeadphones className="text-white" />
        </button>
      </div>

      <div className="p-3">
        <h3 className="text-gray-700 font-bold text-lg">
          {items.title || "Podcast Title"}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          {items.description || "Podcast Description"}
        </p>
        <p className="text-gray-500 text-sm mt-1">
          {items.category.categoryName || "Podcast Description"}
        </p>
      </div>

      <div className="flex items-center justify-between px-3 pb-3">
        <div className="flex items-center gap-2">
          <img
            src={items.hostImage || "https://i.pravatar.cc/30"} // Dynamic host image or fallback
            alt={items.hostName || "Host"}
            className="w-6 h-6 rounded-full"
          />
          <p className="text-gray-600 text-xs font-medium">
            {items.hostName || "Host Name"}
          </p>
        </div>
        <p className="text-gray-700 text-xs">• {items.views || 0} Views</p>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default PodCards;
