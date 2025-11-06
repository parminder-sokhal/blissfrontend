// src/pages/career/Careers.jsx
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CareersPage = () => {
  const formUrl = "https://forms.gle/ztBSnhRbj7eSfEBj7";

  return (
    <div className="p-4 md:p-8 mt-34 max-w-6xl mx-auto ">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Careers at Bliss Hospital</h1>
        <p className="text-gray-500">Join our mission-driven team</p>
      </header>

      <section className="space-y-4 bg-white  rounded-xl p-6 ">
        <div>
          <h2 className="text-xl font-semibold mb-2">Welcome to Bliss Hospital</h2>
          <p className="text-gray-700 leading-relaxed">
            A leading healthcare institution that embodies excellence in patient care and medical
            innovation. Nestled in the heart of Sector 20, Panchkula, our state-of-the-art, 40-bedded
            facility is proudly accredited by the National Accreditation Board for Hospitals &amp;
            Healthcare Providers (NABH). This prestigious accreditation reflects our unwavering
            commitment to maintaining the highest standards of quality, safety, and efficiency in
            healthcare delivery.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            At The Bliss Hospital, our mission is to provide exceptional healthcare services that
            prioritize the well-being and comfort of our patients. We believe that every individual
            deserves access to high-quality medical care, delivered with compassion and respect. Our
            dedicated team of healthcare professionals is committed to fostering a healing environment
            where patients and their families feel supported throughout their healthcare journey.
          </p>
        </div>

       

        <div className="pt-4">
          <h3 className="text-lg font-semibold mb-3">Apply for Careers</h3>
          <p className="text-gray-700 mb-4">
            Ready to be part of Bliss Hospital? Please submit your application using the Google Form
            below. Fill in your details and attach your resume — our team will review and contact you
            if there’s a fit.
          </p>

          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-3 rounded-lg transition"
          >
            Apply via Google Form <FaExternalLinkAlt />
          </a>

          <p className="text-xs text-gray-500 mt-3">
            The application form opens in a new tab.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
