import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/GeneralSurgery.jpeg", // Replace with your actual image path
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

const GeneralSurgery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ✅ Background Section */}
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          General Surgery
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">
              Welcome to Bliss Hospital
            </h2>
            <p>
              At Bliss Hospital, we are committed to providing exceptional
              surgical care to our patients. Our team of skilled surgeons and
              healthcare professionals is dedicated to ensuring a safe and
              effective surgical experience.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              What is General Surgery?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Abdominal Surgery:</strong> Operations on the stomach,
                intestines, liver, gallbladder, and pancreas.
              </li>
              <li>
                <strong>Bariatric Surgery:</strong> Weight-loss procedures like
                gastric bypass and sleeve gastrectomy.
              </li>
              <li>
                <strong>Hernia Repair:</strong> Correction of abdominal wall
                hernias.
              </li>
              <li>
                <strong>Appendectomy:</strong> Emergency removal of the
                appendix.
              </li>
              <li>
                <strong>Thyroid Surgery:</strong> Treatment for thyroid
                disorders including thyroidectomy.
              </li>
              <li>
                <strong>Breast Surgery:</strong> Biopsies and mastectomies for
                various breast conditions.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Preoperative Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Medical History Review:</strong> Reviewing your health
                and medications.
              </li>
              <li>
                <strong>Diagnostic Tests:</strong> Blood tests, imaging, and
                assessments.
              </li>
              <li>
                <strong>Patient Education:</strong> Information about the
                procedure and recovery.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Surgical Procedures</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Open Surgery:</strong> Larger incisions for direct
                access.
              </li>
              <li>
                <strong>Laparoscopic Surgery:</strong> Minimally invasive with
                smaller incisions.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Postoperative Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pain Management:</strong> Medications and strategies.
              </li>
              <li>
                <strong>Follow-Up Appointments:</strong> Monitoring recovery.
              </li>
              <li>
                <strong>Rehabilitation:</strong> Physical activity guidance.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Why Choose Bliss Hospital?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Experienced Surgeons:</strong> Board-certified and
                highly trained.
              </li>
              <li>
                <strong>Patient-Centered Approach:</strong> We involve you at
                every step.
              </li>
              <li>
                <strong>Advanced Technology:</strong> Latest tools and methods.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Patient Resources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educational resources and recovery tips.</li>
              <li>Online appointment scheduling portal.</li>
              <li>Secure patient portal access to records.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Schedule an Appointment
            </h2>
            <p>
              Your health is our priority. Contact us today to schedule an
              appointment or to learn more about our general surgery services.
              At Bliss Hospital, we are here to support you through every step
              of your surgical journey.
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

export default GeneralSurgery;