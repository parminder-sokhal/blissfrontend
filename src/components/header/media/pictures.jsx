import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useSwipeCarousel } from "../../hook/useSwipeCarousel"; 

function Pictures() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Corrected URLs for Google Drive
  const photos = [
    "/img/photo_6240115743811291757_y.jpg",
    "/img/photo_6240115743811291758_y.jpg",
    "/img/photo_6240115743811291759_y.jpg",
    // "/img/photo_6240115743811291760_y.jpg",
    "/img/photo_6240115743811291761_y.jpg",
    "/img/photo_6240115743811291762_y.jpg",
    "/img/photo_6240115743811291763_y.jpg",
    // "/img/photo_6240115743811291764_y.jpg",
    // "/img/photo_6240115743811291765_y.jpg",
    // "/img/photo_6240115743811291766_y.jpg",
    "/img/photo_6240115743811291767_y.jpg",
    // "/img/photo_6240115743811291768_y.jpg",
    "/img/photo_6240115743811291769_y.jpg",
    // "/img/photo_6240115743811291770_y.jpg",
    // "/img/photo_6240115743811291771_y.jpg",
    // "/img/photo_6240115743811291772_y.jpg",
    "/img/photo_6240115743811291773_y.jpg",
    "/img/photo_6240115743811291774_y.jpg",
    // "/img/photo_6240115743811291775_y.jpg",
    // "/img/photo_6240115743811291776_y.jpg",
    "/img/photo_6240115743811291777_y.jpg",
    // "/img/photo_6240115743811291778_y.jpg",
    // "/img/photo_6240115743811291779_y.jpg",
    "/img/photo_6240115743811291780_y.jpg",
    // "/img/photo_6240115743811291781_y.jpg",   
  ];

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
const handlers = useSwipeCarousel({
    onNext: handleNext,
    onPrev: handlePrev,
  });
  return (
    <>
      <div className="flex justify-center  w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/img/photo_6240115743811291761_y.jpg')]">
        <span className="flex justify-center items-center sm:text-8xl text-5xl font-bold text-white">Image Gallery </span>
      </div>
      <div className="container mx-auto lg:px-30 px-15 py-20 " {...handlers}>
        <div className="text-center flex flex-col justify-between mb-8">
          <h1 className="sm:text-6xl text-2xl justify-start flex text-black">
            Bliss Hospital
          </h1>
          
        </div>

        {/* Image Grid (Responsive: 2 columns for sm/md, 4 columns for lg) */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4" >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="w-full h-auto cursor-pointer rounded-sm overflow-hidden"
              onClick={() => handleOpen(index)}
            >
              <img
                src={photo}
                alt={`Photo ${index}`}
                className="w-full h-full object-cover rounded-sm"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 backdrop-blur-xs bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <div
              className="relative "
              style={{ width: "90vw", height: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[currentIndex]}
                alt="Fullscreen"
                className="w-full h-full object-contain rounded-lg"
              />
              {/* Close Button (X icon) */}
              <button
                className="absolute top-0 right-0 text-white transform -translate-y-1/2 bg-gray-800 p-2 rounded-full  text-md lg:text-xl"
                onClick={handleClose}
              >
                <FaTimes />
              </button>

              {/* Image Count */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
                {currentIndex + 1}/{photos.length}
              </div>

              {/* Left Navigation Button */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>

              {/* Right Navigation Button */}
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Pictures;
