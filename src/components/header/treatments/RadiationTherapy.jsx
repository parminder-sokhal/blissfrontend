import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/RadiationTherapy.jpeg", // Replace with a relevant image for Radiation Therapy
  sidebarLinks: [
    { title: "Chemotherapy", link: "/Chemotherapy" },
    { title: "Radiation therapy", link: "/RadiationTherapy" },
    { title: "Surgical oncology procedures", link: "/SurgicalOncology" },
    { title: "Targeted therapy", link: "/TargetedTherapy" },
    { title: "Immunotherapy", link: "/Immunotherapy" },
    { title: "Bone marrow or stem cell transplant", link: "/BoneMarrow" },
    { title: "Palliative care and pain management", link: "/PalliativeCare" },
    { title: "Hormone therapy", link: "/HormoneTherapy" },
    { title: "Oncological imaging and biopsy services", link: "/OncologicalImagingBiopsy" },
  ],
};

const RadiationTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Radiation Therapy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Radiation therapy, also known as radiotherapy, is a cancer treatment that uses high doses of radiation to kill or damage cancer cells. It can be used alone or in combination with other treatments such as surgery and chemotherapy.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Purpose of Radiation Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Curative Treatment:</strong> Aims to eliminate cancer cells in localized tumors.</li>
              <li><strong>Adjuvant Therapy:</strong> After surgery to destroy remaining cancer cells.</li>
              <li><strong>Neoadjuvant Therapy:</strong> Before surgery to shrink tumors.</li>
              <li><strong>Palliative Care:</strong> Relieves symptoms like pain or bleeding.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Types of Radiation Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>External Beam Radiation Therapy (EBRT):</strong> Delivers radiation from outside the body using a linear accelerator.</li>
              <li><strong>Internal Radiation Therapy (Brachytherapy):</strong> Places radioactive sources inside or near the tumor.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Mechanism of Action</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ionizing Radiation:</strong> Breaks chemical bonds in cancer cell DNA using X-rays or gamma rays.</li>
              <li><strong>Radiation-Induced Cell Death:</strong> Damaged cancer cells undergo apoptosis (cell death).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Treatment Planning</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Simulation:</strong> CT scans and other imaging to locate the tumor.</li>
              <li><strong>Dosimetry:</strong> Calculation of radiation dose and angles.</li>
              <li><strong>Marking the Treatment Area:</strong> Temporary skin marks for precision.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">5. Administration</h2>
            <p>
              Radiation therapy is usually delivered in short, daily sessions over several weeks. Each session lasts a few minutes and is painless.
            </p>

            <h2 className="text-2xl font-semibold mt-4">6. Side Effects</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Skin Reactions:</strong> Redness or peeling in treated areas.</li>
              <li><strong>Fatigue:</strong> Common during and after treatment.</li>
              <li><strong>Localized Symptoms:</strong> Like sore throat or diarrhea, depending on site.</li>
              <li><strong>Long-term Effects:</strong> Possible risk of secondary cancers or tissue damage.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">7. Advances in Radiation Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Intensity-Modulated Radiation Therapy (IMRT):</strong> Precise delivery with minimal exposure to healthy tissue.</li>
              <li><strong>Stereotactic Radiosurgery (SRS):</strong> High-dose delivery to small tumors, often in the brain.</li>
              <li><strong>Proton Therapy:</strong> Uses protons for targeted treatment with fewer side effects.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Radiation therapy plays a critical role in treating various cancers. With careful planning and modern techniques, it can be highly effective while minimizing harm to healthy tissues.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Oncology
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

export default RadiationTherapy;