import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/OncologyN.jpeg", // Replace with the actual image path
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

const Oncology = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Oncology</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Welcome to Bliss Hospital</h2>
            <p>
              At Bliss Hospital, we are dedicated to providing comprehensive care
              for patients diagnosed with cancer. Our team of experienced oncologists
              and healthcare professionals is committed to delivering personalized
              treatment plans and support throughout your cancer journey.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is Oncology?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Diagnosis:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Comprehensive evaluations including physical exams, imaging (CT/MRI), and biopsies.</li>
                  <li>Genetic testing and counseling to assess hereditary risks.</li>
                </ul>
              </li>

              <li>
                <strong>Treatment Options:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Chemotherapy:</strong> Drugs that kill or stop cancer cell growth.</li>
                  <li><strong>Radiation Therapy:</strong> High-energy radiation to destroy cancer cells.</li>
                  <li><strong>Surgery:</strong> Tumor or tissue removal procedures.</li>
                  <li><strong>Immunotherapy:</strong> Boosting the immune system to fight cancer.</li>
                  <li><strong>Targeted Therapy:</strong> Drugs that target specific cancer cell mutations or proteins.</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Support Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nutritional Counseling:</strong> Diet plans to manage symptoms and maintain strength.</li>
              <li><strong>Psychosocial Support:</strong> Counselors and groups to support emotional health.</li>
              <li><strong>Palliative Care:</strong> Symptom relief and quality of life support for all cancer stages.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Bliss Hospital?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Expert Team:</strong> Board-certified oncologists with training in advanced treatments.</li>
              <li><strong>Patient-Centered Approach:</strong> Personalized plans and shared decision-making.</li>
              <li><strong>State-of-the-Art Facilities:</strong> Advanced technology and a comfortable environment.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educational materials about cancer types and treatments.</li>
              <li>Online appointment booking for your convenience.</li>
              <li>Patient portal for secure access to records and communication.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Schedule an Appointment</h2>
            <p>
              Your health and well-being are our top priorities. Contact us today to
              schedule an appointment or to learn more about our oncology services.
              At Bliss Hospital, we are here to support you every step of the way in your fight against cancer.
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

export default Oncology;