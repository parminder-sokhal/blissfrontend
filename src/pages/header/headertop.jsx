// header.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Headertop = () => {
  return (
    <header className="bg-pink-500 text-white h-10 py-2 px-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-around space-x-4">
        {/* Left Section: Mobile View */}
        <div className="flex items-center space-x-6 text-sm sm:block md:flex lg:hidden">
          <Link
            to="tel:+919872334233"
            className="flex items-center space-x-2 hover:text-black"
          >
            <FaPhoneAlt className="text-xl" />
          </Link>
          <Link
            to="mailto:blisshospital@gmail.com"
            className="flex items-center space-x-2 hover:text-black"
          >
            <FaEnvelope className="text-xl" />
          </Link>
          <Link
            to="https://www.instagram.com/the_blisshospital?igsh=ejJmMjExb21mcDdp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-xl hover:text-black" />
          </Link>
        </div>

        {/* Right Section: Desktop View - Full Contact Info and Social Icons */}
        <div className="container mx-auto items-center justify-around space-x-4 hidden lg:flex">
          <div className="flex items-center space-x-6 text-sm">
            <Link
              to="tel:+919872334233"
              className="flex items-center space-x-2 hover:text-black"
            >
              <FaPhoneAlt className="text-xl" />
              <span>+91 9872334233</span>
            </Link>
            <Link
              to="mailto:blisshospital@gmail.com"
              className="flex items-center space-x-2 hover:text-black"
            >
              <FaEnvelope className="text-xl" />
              <span>blisshospital20@gmail.com</span>
            </Link>
            <Link
              to="https://maps.app.goo.gl/AR1WvaZ6PNzR9Fos7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-black"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>Sector 20, Panchkula, Haryana 134117</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-xl hover:text-red-600" />
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-xl hover:text-pink-600" />
            </Link>
            <Link
              to="https://www.instagram.com/the_blisshospital?igsh=ejJmMjExb21mcDdp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-xl hover:text-pink-500" />
            </Link>
          </div>
        </div>

        {/* Book Appointment Button (Visible only on sm and md, hidden on lg and above) */}
        <div className="sm:block md:flex lg:hidden items-center justify-center space-x-4">
          <Link
            to="/doctors"
            className="bg-white text-black px-1.5 py-1 rounded-sm text-sm hover:bg-black transition-all whitespace-nowrap"
          >
            OPD Availability
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Headertop;
