import React from "react";

const managementData = [
  {
    name: "Dr. Vinod Nimbran ",
    poisition: "Managing Director | Bliss Hospital",
    description: `Dr. Vinod Nimbran is a distinguished Radiation Oncologist with extensive experience in the field. As the Managing Director of Bliss Hospital, he is committed to providing exceptional patient care and advancing innovative treatment options in oncology. His leadership and expertise ensure the highest standards of medical excellence at our facility.`,
    image: "/img/Vinod.jpeg",
  },
  {
    name: "Dr. Rajni Parihar",
    poisition: "Managing Director | Bliss Hospital",
    description: `Dr. Rajni Parihar is a distinguished MD in Gynaecology and serves as the Managing Director of Bliss Hospital. With extensive experience in women's health, she is dedicated to providing exceptional medical care and leading innovative practices within the hospital.`,
    image: "/img/Rajni.jpeg",
  },
  {
    name: "Ishant Bhardwaj",
    poisition: "Unit Head | Bliss Hospital",
    description: `With over 16 years of experience in healthcare management, Ishant Bhardwaj leads our team at Bliss Hospital. His extensive expertise in hospital operations and patient care ensures the highest standards of service and efficiency. Ishant is committed to fostering a collaborative environment that prioritizes both staff and patient well-being.`,
    image: "/img/Ishant.jpg",
  },
  {
    name: "Deepali Parmar",
    poisition: "Operations Manager | Bliss Hospital",
    description: `With over 5 years of experience in hospital operations, Deepali Parmar has been instrumental in enhancing efficiency and patient care at Bliss Hospital. She holds an MBA in Hospital and Healthcare Management, equipping her with the expertise to drive operational excellence and implement strategic initiatives in a healthcare setting.`,
    image: "/img/Deepali.jpeg",
  },
];

const Management = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex justify-center items-center mt-34 w-full h-60 sm:h-140 bg-cover bg-no-repeat bg-center bg-[url('/img/photo_6240115743811291761_y.jpg')]">
        <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-wide drop-shadow-md">
          Meet Our Team
        </h1>
      </div>

      {/* Team Section */}
      <div className="container mx-auto bg-white px-6 sm:px-12 lg:px-40 py-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-16">
          Our Team of Experts
        </h2>

        <div className="space-y-20">
            {managementData.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover object-top rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-2/3 text-left">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 text-lg font-bold leading-relaxed my-2">
                    {member.poisition}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default Management;
