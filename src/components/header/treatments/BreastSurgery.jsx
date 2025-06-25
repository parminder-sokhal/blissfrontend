import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/BreastSurgery.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: "Appendectomy", link: "/Appendectomy" },
    { title: "Hernia Repair", link: "/HerniaRepair" },
    { title: "Gallbladder Surgery", link: "/GallbladderSurgery" },
    { title: "Thyroid Surgery", link: "/ThyroidSurgery" },
    { title: "Breast Surgery", link: "/BreastSurgery" },
    { title: "Haemorrhoidectomy", link: "/Haemorrhoidectomy" },
    { title: "Colon and Rectal surgery", link: "/ColonAndRectalSurgery" },
    { title: "Trauma Surgery", link: "/TraumaSurgery" },
    { title: "Wound care and abscess drainage", link: "/WoundCareDrainage" },
  ],
};

const BreastSurgery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Breast Surgery: Lumpectomy and Mastectomy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Breast surgery encompasses a variety of procedures aimed at treating
              benign and malignant conditions affecting the breast tissue. Whether for
              cancer treatment, risk reduction, or benign disease, these surgeries are
              performed with precision and care to promote healing and preserve quality
              of life.
            </p>

            <h2 className="font-semibold text-xl mt-4">Types of Breast Surgery</h2>

            <h3 className="font-semibold mt-2">Lumpectomy (Breast-Conserving Surgery)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>What is it?</strong> A procedure where only the cancerous lump and
                surrounding healthy tissue are removed, preserving most of the breast.
              </li>
              <li>
                <strong>Purpose:</strong> Used for early-stage breast cancer or benign tumors.
              </li>
              <li>
                <strong>Advantages:</strong> Maintains breast appearance; often followed by radiation.
              </li>
              <li>
                <strong>Procedure Details:</strong> Performed under general anesthesia via a
                small incision over the tumor site.
              </li>
            </ul>

            <h3 className="font-semibold mt-4">Mastectomy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>What is it?</strong> Complete removal of one or both breasts, usually for
                advanced or high-risk breast cancer.
              </li>
              <li>
                <strong>Types:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Simple (Total) Mastectomy:</strong> Removes all breast tissue.</li>
                  <li><strong>Modified Radical Mastectomy:</strong> Removes breast tissue, nipple-areola, and lymph nodes.</li>
                  <li><strong>Skin/Nipple-Sparing:</strong> Preserves appearance, often combined with reconstruction.</li>
                </ul>
              </li>
              <li>
                <strong>Indications:</strong> Large/multicentric tumors, recurrence, or BRCA gene mutations.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">The Surgical Process</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preoperative Assessment:</strong> Imaging, biopsy confirmation, and patient counseling.
              </li>
              <li>
                <strong>Anesthesia:</strong> General anesthesia is used for both procedures.
              </li>
              <li>
                <strong>Surgical Steps:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Incisions made to reduce visible scarring.</li>
                  <li>Lumpectomy or mastectomy performed depending on diagnosis.</li>
                  <li>Lymph nodes evaluated (sentinel node or axillary dissection).</li>
                </ul>
              </li>
              <li>
                <strong>Postoperative Care:</strong> Includes wound care, pain management, and drain monitoring.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Reconstruction Options</h2>
            <p>
              Many patients opt for breast reconstruction, performed at the same time as
              mastectomy or later. Techniques include implants or autologous tissue (using
              the patient’s own tissue).
            </p>

            <h2 className="font-semibold text-xl mt-4">Recovery and Follow-up</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Recovery Time:</strong> Initial recovery in days; full recovery over weeks.</li>
              <li><strong>Monitoring:</strong> Regular follow-ups, imaging, and possibly radiation or chemo.</li>
              <li><strong>Emotional Support:</strong> Support groups and counseling services are available.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Experienced breast surgeons using the latest techniques.</li>
              <li>Focus on both cancer control and cosmetic outcomes.</li>
              <li>Comprehensive pre-op and post-op care.</li>
              <li>Supportive environment with emotional and psychological resources.</li>
            </ul>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">General Surgery</h2>
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

export default BreastSurgery;