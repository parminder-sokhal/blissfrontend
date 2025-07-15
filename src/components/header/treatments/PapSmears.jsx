import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const sidebarLinks = [
  { title: "Hormonal Therapy", link: "/HormonalTherapy" },
  { title: "Pap smears and cervical biopsies", link: "/PapSmears" },
  { title: "Hysterectomy", link: "/Hysterectomy" },
  { title: "Dilation and Curettage", link: "/DilationAndCurettage" },
  { title: "Treatment for STIs", link: "/TreatmentForSTI" },
  { title: "Infertility treatment", link: "/InfertilityTreatment" },
  { title: "Laparoscopy And Hysteroscopy", link: "/LaparoscopyAndHysteroscopy" },
];

const PapSmears = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/img/PapSmears.jpeg)" }}
      ></div>

      <div className="px-6 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Pap Smears and Cervical Biopsies</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Pap smears and cervical biopsies are essential tools in gynecological health, aiding in the early detection of cervical cancer and abnormalities.
            </p>

            <h2 className="text-xl font-semibold">1. Pap Smears</h2>

            <h3 className="font-semibold mt-4">a. Purpose</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detects abnormal cervical cells that could lead to cervical cancer.</li>
              <li>Helps identify the presence of high-risk HPV (human papillomavirus).</li>
            </ul>

            <h3 className="font-semibold mt-4">b. Procedure</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Avoid intercourse, tampons, and douching for 24–48 hours beforehand.</li>
              <li>Performed with a speculum; a small brush or spatula collects cervical cells.</li>
              <li>Takes only a few minutes and is usually painless.</li>
            </ul>

            <h3 className="font-semibold mt-4">c. Frequency</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Start screening at age 21.</li>
              <li>Every 3 years (ages 21–29).</li>
              <li>Every 3–5 years with HPV testing (ages 30–65).</li>
            </ul>

            <h2 className="text-xl font-semibold">2. Cervical Biopsies</h2>

            <h3 className="font-semibold mt-4">a. Purpose</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Used to examine abnormal Pap results or visible cervical lesions.</li>
              <li>Confirms diagnosis of dysplasia or cancer.</li>
            </ul>

            <h3 className="font-semibold mt-4">b. Types</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Colposcopic Biopsy:</strong> Guided by a magnifying device to target abnormal areas.</li>
              <li><strong>Endocervical Curettage (ECC):</strong> Scrapes cells from the cervical canal.</li>
              <li><strong>Cone Biopsy:</strong> Removes a larger, cone-shaped section, sometimes used as treatment.</li>
            </ul>

            <h3 className="font-semibold mt-4">c. Procedure</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Patient lies on an exam table; speculum is inserted.</li>
              <li>Tissue is collected with minimal discomfort.</li>
              <li>Takes 10–15 minutes in most cases.</li>
            </ul>

            <h3 className="font-semibold mt-4">d. Recovery and Follow-Up</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Light bleeding and discharge for a few days is normal.</li>
              <li>Lab results typically available within a week.</li>
              <li>Follow-up may include further monitoring or treatment depending on the findings.</li>
            </ul>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              Regular Pap smears and timely cervical biopsies are key to preventing cervical cancer. They ensure early detection and intervention, which significantly improves outcomes in women’s health.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Gynaecological</h2>
            <ul className="space-y-4">
              {sidebarLinks.map((item, index) => (
                <li key={index} className="flex items-center text-pink-600 hover:text-pink-800">
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

export default PapSmears;