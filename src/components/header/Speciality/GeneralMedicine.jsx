import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your image path
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

const GeneralMedicine = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ✅ Hero Image */}
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">General Medicine</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Welcome to Bliss Hospital</h2>
            <p>
              At Bliss Hospital, we are dedicated to providing comprehensive healthcare
              services to our patients. Our team of experienced physicians and healthcare
              professionals is committed to delivering high-quality medical care tailored
              to your individual needs.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is General Medicine?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chronic Disease Management:</strong> Care for diabetes, hypertension, asthma, heart disease, and more.</li>
              <li><strong>Preventive Care:</strong> Regular check-ups, vaccinations, and screenings.</li>
              <li><strong>Acute Care:</strong> Immediate treatment for infections, respiratory, and GI issues.</li>
              <li><strong>Health Assessments:</strong> Comprehensive evaluations to detect health risks early.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Annual Physical Exams:</strong> Complete health evaluations.</li>
              <li><strong>Laboratory Services:</strong> On-site blood work, urinalysis, and diagnostics.</li>
              <li><strong>Chronic Disease Management:</strong> Personalized treatment and lifestyle guidance.</li>
              <li><strong>Referrals to Specialists:</strong> Coordination with specialists for advanced care.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient-Centered Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personalized Treatment Plans:</strong> Tailored to each patient’s health needs.</li>
              <li><strong>Open Communication:</strong> Transparent, two-way doctor-patient interactions.</li>
              <li><strong>Follow-Up Care:</strong> Routine monitoring and updates to care plans.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Preventive Health</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vaccinations:</strong> Immunizations to prevent infectious diseases.</li>
              <li><strong>Screening Tests:</strong> Tests for blood pressure, cholesterol, cancer, and more.</li>
              <li><strong>Lifestyle Counseling:</strong> Guidance on diet, exercise, and stress management.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Bliss Hospital?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Experienced Physicians:</strong> Board-certified internists.</li>
              <li><strong>Comprehensive Care:</strong> Multiple services under one roof.</li>
              <li><strong>State-of-the-Art Facilities:</strong> Modern technology for effective treatments.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educational health topic materials.</li>
              <li>Online appointment scheduling.</li>
              <li>Patient portal for medical records and communication.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Schedule an Appointment</h2>
            <p>
              Your health is our priority. Contact us today to schedule an appointment or to
              learn more about our general medicine services. At Bliss Hospital, we are here
              to support you in achieving and maintaining your best health.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Speciality</h2>
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

export default GeneralMedicine;
