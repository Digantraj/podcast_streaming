import React from "react";
import { Link } from "react-router-dom";
import PodCards from "./podCards";

function Dashboard() {
  const cardData = [
    { title: "Most Popular", link: "mostpopular" },
    { title: "Comedy", link: "comedy" },
    { title: "News", link: "news" },
    { title: "Culture", link: "culture" },
    { title: "Business", link: "business" },
    { title: "Education", link: "education" },
    { title: "Health", link: "health" },
    { title: "Science", link: "science" },
    { title: "History", link: "history" },
    { title: "Religion", link: "religion" },
    { title: "Development", link: "development" },
    { title: "Sports", link: "sports" },
    { title: "Crime", link: "crime" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-5">
        {cardData.map((card, index) => (
          <div key={index} className="bg-gray-100  rounded-xl p-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-gray-900 font-bold">{card.title}</h2>
              <Link
                to={`/showpodcasts/${card.link}`}
                className="text-violet-500"
              >
                Show All
              </Link>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-3 gap-10">
                <PodCards />
                <PodCards />
                <PodCards />
                <PodCards />
                <PodCards />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
