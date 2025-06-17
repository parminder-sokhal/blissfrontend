import React from "react";

// Certificates data array
const certificateData = [
  {
    image: "/pictures/JCI.jpg",
    heading: "JCI",
    subheading: "Joint Commission International",
  },
  {
    image: "/pictures/NABH.jpg",
    heading: "NABH",
    subheading:
      "National Accreditation Board for Hospitals & Healthcare Providers",
  },
  {
    image: "/pictures/NABL.jpg",
    heading: "NABL",
    subheading:
      "National Accreditation Board for Testing and Calibration Laboratories",
  },
];

const Certificates = () => {
  return (
    <div className="container mx-auto  lg:px-30 px-8 py-10">
      <h2 className="text-2xl font-bold text-start  w-full mb-6">
        Accreditations for Bliss Hospital
      </h2>

      <div className="flex flex-wrap gap-4 sm:justify-start justify-center items-center">
        {certificateData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-sm flex flex-col items-center justify-start w-64 aspect-square p-2 text-center hover:shadow-md transition-shadow"
          >
            <img
              src={item.image}
              alt={item.heading}
              loading="lazy"
              className="w-20 h-20 object-contain mb-3"
            />
            <h3 className="text-xl font-semibold text-black mb-1">
              {item.heading}
            </h3>
            <p className="text-lg text-gray-800">{item.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
