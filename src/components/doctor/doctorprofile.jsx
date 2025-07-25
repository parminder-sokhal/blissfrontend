import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorById } from "../../redux/actions/doctorAction";
import { FaGraduationCap, FaAward, FaUserMd } from "react-icons/fa";

const DoctorProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { doctor, loading, error } = useSelector((state) => state.doctor);

  const [showAbout, setShowAbout] = useState(false);
  const [showAwards, setShowAwards] = useState(false);

  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [visitType] = useState("Video Call");

  useEffect(() => {
    dispatch(getDoctorById(id));
  }, [dispatch, id]);

  const handleBookNow = () => {
    if (!selectedDate || !selectedTimeSlot) {
      alert("Please select a date and a time slot.");
      return;
    }

    const doctorData = {
      _id: doctor?._id,
      image: { url: doctor?.image?.url }, // make sure this exists!
      name: doctor?.name,
      hospital: doctor?.hospital,
      specialists: doctor?.specialization,
      visitType, // <- dynamically selected
      availableDate: selectedDate,
      availableTimeSlot: selectedTimeSlot,
    };

    navigate("/appointment", {
      state: {
        doctor: doctorData,
      },
    });
  };

  if (loading)
    return <p className="text-center mt-10">Loading doctor info...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="container mt-34 mx-auto my-10 px-4 sm:px-10 md:px-20 lg:px-40">
      {/* Top Section */}
      <div className="bg-white py-8 px-4 sm:px-10 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-15">
          {/* Left - Doctor Image */}
          <div className="w-60  rounded-3xl overflow-hidden border-2 border-pink-500 shadow-md">
            <img
              src={doctor?.image?.url || "/images/doctor1.jpeg"}
              alt={doctor?.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right - Details */}
          <div className="flex flex-col w-full">
            {/* Name, Hospital, Specialization */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-pink-800">
                {doctor?.name}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 font-semibold">
                {doctor?.specialization}
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                {doctor?.hospital}
              </p>
            </div>

            {/* Experience & Fees Badges */}
            <div className="flex gap-4 mt-4 flex-wrap">
              <div className="bg-pink-50 border border-pink-200 px-5 py-3 rounded-md shadow-sm flex flex-col items-center w-40 text-center">
                <span className="text-xl flex font-semibold text-pink-700">
                  {doctor?.experience}
                  <span className="text-md items-center justify-center flex text-pink-700 ml-1">
                    Years
                  </span>
                </span>
                <span className="text-sm text-gray-600">Experience</span>
              </div>
              <div className="bg-green-50 border border-green-200 px-5 py-3 rounded-md shadow-sm flex flex-col items-center w-40 text-center">
                <span className="text-xl font-semibold text-green-700">
                  ₹ {doctor?.fees}
                </span>
                <span className="text-sm text-gray-600">Consultation Fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details & Booking Section */}
      <div className="flex flex-col lg:flex-row mt-10 gap-6">
        {/* Doctor Details */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-pink-700">
              <FaUserMd /> <h3 className="text-2xl font-semibold">About</h3>
            </div>
            <p className="text-gray-700 text-md">
              {showAbout ? doctor?.about : `${doctor?.about?.slice(0, 150)}...`}
            </p>
            <button
              className="text-pink-700 text-md mt-2 hover:underline"
              onClick={() => setShowAbout(!showAbout)}
            >
              {showAbout ? "Read Less" : "Read More"}
            </button>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-pink-700">
              <FaGraduationCap />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-700 text-md">{doctor?.qualification}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-pink-700">
              <FaAward />{" "}
              <h3 className="text-2xl font-semibold">Achievements</h3>
            </div>
            <p className="text-gray-700 text-md">
              {showAwards
                ? doctor?.awards
                : `${doctor?.awards?.slice(0, 100)}...`}
            </p>
            <button
              className="text-pink-700 text-sm mt-2 hover:underline"
              onClick={() => setShowAwards(!showAwards)}
            >
              {showAwards ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-pink-700 mb-4">
            OPD Availability Timing
          </h2>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-gray-700">
              Available Time Slots:
            </div>

            {/* Time Slots */}
            <div className="flex flex-wrap gap-2">
              {doctor?.videoSlots?.map((time, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 border ${
                    selectedTimeSlot === time
                      ? "bg-pink-700 text-white"
                      : "text-pink-700 hover:bg-pink-700 hover:text-white"
                  } border-pink-700 rounded-md text-sm transition`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
