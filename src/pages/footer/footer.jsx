import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-pink-500 text-white ">
        <div className="container mx-auto  lg:px-20 px-10 py-15">
          <div className="flex flex-col gap-4 sm:flex-row md:flex-row lg:flex-row justify-center space-y-8 sm:space-y-0 lg:space-y-0 sm:space-x-0 md:space-x-8 lg:space-x-8">
            {/* 1st div - Specialty and Treatments */}
            <div className="flex justify-around gap-15 w-1/3 sm:flex-col md:flex-row lg:flex-row space-y-8 sm:space-y-0 transform hover:scale-105 transition duration-300 ease-in-out">
              {/* Speciality Links */}
              <div className="flex flex-col space-y-2 w-full">
                <h3 className="text-2xl font-semibold">Services</h3>
                <Link
                  to="/psychiatric-care"
                  className="text-md hover:text-black"
                >
                  Obstetric and gynaecology
                </Link>
                <Link to="/deaddiction" className="text-sm hover:text-black">
                  Oncology
                </Link>
                <Link
                  to="/sexual-wellness"
                  className="text-md hover:text-black"
                >
                  General surgery 
                </Link>
                <Link
                  to="#"
                  className="text-md hover:text-black"
                >
                  General medicine
                </Link>
                <Link
                  to="#"
                  className="text-md hover:text-black"
                >
                  Urology
                </Link>
                <Link
                  to="#"
                  className="text-md hover:text-black"
                >
                  Orthopaedic
                </Link>
                <Link
                  to="#"
                  className="text-md hover:text-black"
                >
                  Onco surgery
                </Link>
              </div>
              {/* Treatments Links */}
              <div className="flex flex-col space-y-2 w-full">
                <h3 className="text-2xl font-semibold">Treatments</h3>
                <Link to="/psychiatry" className="text-md hover:text-black">
                  Psychiatry
                </Link>
                <Link
                  to="/counselling-and-therapy"
                  className="text-md hover:text-black"
                >
                  Counselling and therapy
                </Link>
                <Link
                  to="/mental-health-children"
                  className="text-md hover:text-black"
                >
                  Mental health issues and children
                </Link>
                <Link to="/deaddiction" className="text-md hover:text-black">
                  De-addiction programme
                </Link>
                <Link
                  to="/sexual-wellness-program"
                  className="text-md hover:text-black"
                >
                  sexual wellness program
                </Link>
                <Link
                  to="/headache-clinic"
                  className="text-md hover:text-black"
                >
                  Headache clinic
                </Link>
                <Link
                  to="/epilepsy-clinic"
                  className="text-md hover:text-black"
                >
                  Epilepsy clinic
                </Link>
                <Link to="/sleep-clinic" className="text-md hover:text-black">
                  Sleep clinic
                </Link>
              </div>
            </div>

            {/* 2nd div - Logo and Contact Information */}
            <div className="flex flex-col items-center space-y-4  sm:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out  lg:border-x-2  py-10 hover:border-x-black">
              <div className="w-4/5 justify-center">
                <img
                  src="/logo/blisslogo1.png"
                  alt="Hospital Logo"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Social Media</h3>
                <div className="flex justify-center space-x-4">
                  <Link
                    to="https://www.youtube.com/l"
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
                    <FaFacebook className="text-white text-xl hover:text-pink-600 hover:bg-white rounded-3xl" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/the_blisshospital?igsh=ejJmMjExb21mcDdp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-white text-xl hover:text-red-500" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 space-y-1 text-white">
                <span className="text-md font-semibold">
                  Having issues? Contact us
                </span>
                <Link
                  to="tel:+919815490081"
                  className="flex items-center space-x-2 hover:text-black"
                >
                  <FaPhoneAlt className="text-lg" />
                  <span>01722923333</span>
                </Link>
              </div>
            </div>

            {/* 3rd div - Contact Info */}
            <div className="flex flex-col justify-center space-y-4 sm:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex flex-col space-y-2 gap-4">
                <h3 className="text-2xl font-semibold">Contact Info</h3>
                <Link
                  to="https://maps.app.goo.gl/AR1WvaZ6PNzR9Fos7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-black"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  <span>
                    The Bliss Hospital, Sector 20, Panchkula, Haryana 134117
                  </span>
                </Link>

                <Link
                  to="tel:+919872334233"
                  className="flex items-center space-x-2 hover:text-black"
                >
                  <FaPhoneAlt className="text-lg" />
                  <span>+91 9872334233</span>
                </Link>
                <Link
                  to="mailto:blisshospital@gmail.com"
                  className="flex items-center space-x-2 hover:text-black"
                >
                  <FaEnvelope className="text-lg" />
                  <span>blisshospital@gmail.com</span>
                </Link>
              </div>

              <div className="space-y-2 py-5">
                <h3 className="text-xl font-semibold">About Hospital</h3>
                <p className="text-sm w-4/5 hover:text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, iste facilis velit dolor quam doloremque minus ratione id corrupti. Impedit, repellat commodi consectetur ad ab explicabo! Cum doloribus omnis in dolores nam iste tempora error quam, labore voluptatibus! Corporis veniam amet accusantium vero temporibus ut alias omnis veritatis enim minima!
                  </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
        </div>
        <div className="flex w-full text-center justify-center bg-white text-black">
          <p className="sm:text-sm px-4 py-2">
            DEMO Hospital© 2025 All Rights Reserved. | Designed & Developed
            by:&nbsp;
            <Link to="/dashboard" className="hover:text-gray-700">
              DEMO Hospital
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
