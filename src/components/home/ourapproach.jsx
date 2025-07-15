import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Importing phone icon
import { Link } from "react-router-dom";
import { useSwipeCarousel } from "../hook/useSwipeCarousel.js";

const OurApproach = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Learning And Development Training",
      description:
        "Learning and development training involves structured programs aimed at enhancing employees' skills, knowledge, and competencies to improve individual and organizational performance.",
      image: "/img/LearningAndDevelopment.jpeg",
    },
    {
      title: "Team Building Activities",
      description:
        "Team building activities are engaging exercises designed to enhance collaboration, communication, and trust among team members, fostering a positive work environment.",
      image: "/img/TeamBuildingActivities.jpeg",
    },
    // {
    //   title: "Gym ",
    //   description:
    //     "DEMO mental health, boost mood, and enhance overall well-being through physical activity and social interaction.",
    //   image: "/pictures/gym.jpeg",
    // },
    // {
    //   title: "Recreational activities",
    //   description:
    //     "DEMO pastimes to promote relaxation, social interaction, and mental well-being while reducing stress and enhancing overall life satisfaction.",
    //   image: "/pictures/recreational.jpeg",
    // },
  ];

  const itemsPerPage = 2;
  const pagesCount = Math.ceil(data.length / itemsPerPage);

  const getItemsToShow = () => {
    const startIndex = currentIndex * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage); // Slice the array to show only two items
  };

  // const handlePagination = (index) => {
  //   setCurrentIndex(index);
  // };
  const handleNext = () => {
    if (currentIndex < pagesCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const swipeHandlers = useSwipeCarousel({
    onNext: handleNext,
    onPrev: handlePrev,
  });

  return (
    <div className="bg-cover py-15 px-4 bg-[url(/images/bgourapp.jpeg)]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Centered vertically */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-start space-y-4 mb-8 md:mb-0 sm:px-10 px-4">
          <h2 className="text-3xl text-black font-bold">Our Vision</h2>
          <p className="text-lg text-black text-start flex items-center ">
            Our Vision is to be a beacon of hope and healing in the healthcare landscape, recognized for our commitment to excellence, innovation, and compassionate care. We aim to continuously enhance our services and facilities, ensuring that we remain a trusted choice for patients and their families.
          </p>
          <div className="flex items-center flex-row space-x-2">
            <Link
              to="tel:+919872334233"
              className="flex items-center space-x-2"
            >
              <div className="flex items-center ">
                <FaPhoneAlt
                  size={30}
                  className="text-red-700 hover:text-pink-800"
                />
              </div>
              <div to="tel:+919872334233">
                <span className="text-md text-black hover:text-pink-900 ">
                  For more information, call
                </span>
                <span className="text-lg text-black flex  hover:text-pink-900 transition-colors ">
                  +91 9872334233
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div
          className="w-full md:w-3/5 flex flex-col space-y-8"
          {...swipeHandlers}
        >
          <div className="flex flex-col md:flex-row ">
            {getItemsToShow().map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 p-4"
                style={{
                  minHeight: "400px",
                }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <div
                    className="h-62 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      loading: `lazy`,
                    }}
                    loading="lazy"
                  ></div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center space-x-2">
            {[...Array(pagesCount)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePagination(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-yellow-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
