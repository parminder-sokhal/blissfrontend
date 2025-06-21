import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path
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

const Urology = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Urology</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Welcome to Bliss Hospital</h2>
            <p>
              At Bliss Hospital, we specialize in diagnosing and treating conditions related
              to the urinary tract and male reproductive system. Our dedicated team of
              urologists is committed to providing compassionate care and advanced
              treatment options to our patients.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is Urology?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Urinary Tract Infections (UTIs):</strong> Infections affecting the kidneys, bladder, or urethra.</li>
              <li><strong>Kidney Stones:</strong> Hard mineral and salt deposits that form in the kidneys and can cause severe pain.</li>
              <li><strong>Prostate Disorders:</strong> Conditions affecting the prostate gland, including BPH and prostate cancer.</li>
              <li><strong>Bladder Conditions:</strong> Issues such as overactive bladder, incontinence, and bladder cancer.</li>
              <li><strong>Male Infertility:</strong> Evaluation and treatment of male reproductive health issues.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Diagnostic Evaluations:</strong> Advanced imaging and laboratory tests to accurately diagnose conditions.</li>
              <li><strong>Minimally Invasive Procedures:</strong> Laparoscopic surgery and endoscopy for faster recovery.</li>
              <li><strong>Surgical Treatments:</strong> Interventions for kidney stones, prostate issues, and tumors.</li>
              <li><strong>Medication Management:</strong> Prescriptions to manage symptoms and treat conditions.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient-Centered Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personalized Treatment Plans:</strong> Tailored approaches for each patient.</li>
              <li><strong>Open Communication:</strong> Encouraging questions and active patient involvement.</li>
              <li><strong>Follow-Up Care:</strong> Regular monitoring and treatment adjustments.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Preventive Health</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Regular Screenings:</strong> For prostate cancer and other urological conditions.</li>
              <li><strong>Lifestyle Counseling:</strong> Advice on diet, exercise, and hydration.</li>
              <li><strong>Patient Education:</strong> Resources for understanding health and prevention.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Bliss Hospital?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Experienced Urologists:</strong> Board-certified specialists with deep expertise.</li>
              <li><strong>Comprehensive Care:</strong> All services available under one roof.</li>
              <li><strong>State-of-the-Art Facilities:</strong> Modern tools for accurate diagnosis and effective treatment.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educational materials on urological health.</li>
              <li>Online appointment scheduling system.</li>
              <li>Secure patient portal for records and communication.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Schedule an Appointment</h2>
            <p>
              Your urological health is our priority. Contact us today to schedule an appointment
              or to learn more about our urology services. At Bliss Hospital, we are here to
              support you in achieving and maintaining optimal health.
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

export default Urology;