import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/OncoSurgeryN.jpeg", // Replace with the actual background image path
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

const OncoSurgery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Onco Surgery</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Welcome to Bliss Hospital</h2>
            <p>
              At Bliss Hospital, we specialize in the surgical treatment of cancer. Our dedicated team of experienced onco surgeons, medical professionals, and support staff is committed to providing comprehensive care tailored to each patient's needs. We understand that a cancer diagnosis can be overwhelming, and we are here to support you every step of the way.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is Onco Surgery?</h2>
            <p>
              Onco surgery, or surgical oncology, focuses on the surgical management of cancer. This includes removal of tumors, surrounding tissues, and lymph nodes to treat cancer effectively. It often works in conjunction with chemotherapy and radiation therapy.
            </p>

            <h2 className="font-semibold text-xl mt-4">Types of Onco Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Curative Surgery:</strong> Completely removes cancer when it’s localized and has not spread.
              </li>
              <li>
                <strong>Debulking Surgery:</strong> Removes as much tumor as possible when full removal isn’t possible. It helps other treatments work better.
              </li>
              <li>
                <strong>Palliative Surgery:</strong> Focuses on relieving symptoms and improving quality of life in advanced cancer cases.
              </li>
              <li>
                <strong>Preventive Surgery:</strong> Removes non-cancerous tissue with a high risk of becoming cancerous, such as preventive mastectomy.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Comprehensive Cancer Assessments:</strong> Evaluation to guide treatment.</li>
              <li><strong>Surgical Procedures:</strong> Customized surgeries, including minimally invasive techniques.</li>
              <li><strong>Multidisciplinary Care:</strong> Coordination with oncologists and specialists for holistic treatment.</li>
              <li><strong>Post-Operative Care:</strong> Monitoring and support for recovery and complications.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient-Centered Approach</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personalized Treatment Plans:</strong> Based on the patient’s condition and preferences.</li>
              <li><strong>Open Communication:</strong> Patients are encouraged to ask questions and stay informed.</li>
              <li><strong>Support Services:</strong> Counseling, nutrition guidance, and support groups.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Advances in Onco Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Minimally Invasive Surgery:</strong> Laparoscopic and robotic techniques that reduce recovery time.</li>
              <li><strong>Enhanced Recovery Protocols:</strong> Best practices to improve outcomes and reduce hospital stays.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Bliss Hospital?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Expertise:</strong> Board-certified onco surgeons with vast experience.</li>
              <li><strong>State-of-the-Art Facilities:</strong> Equipped with advanced surgical technologies.</li>
              <li><strong>Comprehensive Support:</strong> Full care from diagnosis to recovery under one roof.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Schedule an Appointment</h2>
            <p>
              If you or a loved one is facing a cancer diagnosis, seek expert care. Contact us today to schedule an appointment or learn more about our onco surgery services. At Bliss Hospital, we are committed to compassionate and effective cancer care.
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

export default OncoSurgery;
