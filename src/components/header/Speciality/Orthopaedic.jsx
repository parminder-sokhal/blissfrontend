import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Orthopaedics.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: "Obstetric And Gynaecology", link: "/ObstetricGynaecology" },
    { title: "Oncology", link: "/Oncology" },
    { title: "General surgery", link: "/GeneralSurgery" },
    { title: "General medicine", link: "/GeneralMedicine" },
    { title: "Urology", link: "/Urology" },
    { title: "Orthopaedic", link: "/Orthopaedic" },
    { title: "Onco surgery", link: "/OncoSurgery" },
  ],
};

const Orthopaedic = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Orthopaedics</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">
              Welcome to Bliss Hospital
            </h2>
            <p>
              At Bliss Hospital, we specialize in diagnosing and treating a
              wide range of musculoskeletal disorders. Our team of experienced
              orthopaedic surgeons and healthcare professionals is dedicated to
              providing high-quality care and innovative treatment options to
              help you regain mobility and improve your quality of life.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is Orthopaedics?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fractures:</strong> Broken bones that require medical intervention.</li>
              <li><strong>Arthritis:</strong> Inflammation of joints leading to pain and stiffness.</li>
              <li><strong>Sports Injuries:</strong> Injuries sustained during athletic activities, such as ligament tears and tendonitis.</li>
              <li><strong>Back and Neck Pain:</strong> Conditions affecting the spine and surrounding muscles.</li>
              <li><strong>Joint Replacement:</strong> Surgical procedures to replace damaged joints, typically in the hips or knees.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Diagnostic Evaluations:</strong> Advanced imaging techniques, such as X-rays, MRIs, and CT scans.</li>
              <li><strong>Non-Surgical Treatments:</strong> Physical therapy, medication management, and injections.</li>
              <li><strong>Surgical Interventions:</strong> Arthroscopy, joint replacement, and other procedures.</li>
              <li><strong>Rehabilitation Programs:</strong> Customized plans to aid recovery and restore function.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient-Centered Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Individualized Treatment Plans:</strong> Tailored to each patient’s diagnosis and goals.</li>
              <li><strong>Open Communication:</strong> Encouraging patient involvement in decisions.</li>
              <li><strong>Follow-Up Care:</strong> Ongoing check-ins for optimal recovery and results.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Preventive Health</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Education on Injury Prevention:</strong> Tips for avoiding injuries in daily life.</li>
              <li><strong>Regular Screenings:</strong> Monitoring musculoskeletal health to catch issues early.</li>
              <li><strong>Lifestyle Counseling:</strong> Support with exercise, diet, and weight management.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Why Choose Bliss Hospital?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Experienced Orthopaedic Surgeons:</strong> Board-certified experts in multiple subspecialties.</li>
              <li><strong>Comprehensive Care:</strong> Full-spectrum services in one convenient location.</li>
              <li><strong>State-of-the-Art Facilities:</strong> Cutting-edge technology for top-tier diagnosis and treatment.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educational materials on orthopaedic conditions and care.</li>
              <li>Online appointment scheduling.</li>
              <li>Secure patient portal access.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Schedule an Appointment</h2>
            <p>
              Your musculoskeletal health is our priority. Contact us today to
              schedule an appointment or learn more about our services. At Bliss
              Hospital, we are committed to helping you achieve optimal health
              and mobility.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Speciality
            </h2>
            <ul className="space-y-4">
              {data.sidebarLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-pink-600 hover:text-pink-800 cursor-pointer"
                >
                  <FaAngleRight className="mr-2" />
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orthopaedic;
