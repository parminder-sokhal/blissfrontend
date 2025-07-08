import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/SurgicalOncology.jpeg", // Replace with an appropriate surgical oncology image
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

const SurgicalOncology = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Surgical Oncology Procedures
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Surgical oncology is a specialized field of surgery that focuses on the diagnosis, treatment, and management of cancer. Surgical procedures can be used for various purposes, including the removal of tumors, staging of cancer, and alleviating symptoms.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Purpose of Surgical Oncology</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Curative Surgery:</strong> Remove cancerous tumors and surrounding tissue.</li>
              <li><strong>Diagnostic Surgery:</strong> Obtain tissue samples for biopsy.</li>
              <li><strong>Staging Surgery:</strong> Determine how far cancer has spread.</li>
              <li><strong>Palliative Surgery:</strong> Relieve symptoms like pain or obstruction.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Types of Surgical Oncology Procedures</h2>
            <h3 className="text-xl font-semibold mt-2">a. Curative Procedures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lumpectomy:</strong> Removes tumor and small margin of surrounding tissue.</li>
              <li><strong>Mastectomy:</strong> Removes one or both breasts.</li>
              <li><strong>Resection:</strong> Tumor removal along with surrounding healthy tissue.</li>
              <li><strong>Colectomy:</strong> Removes part or all of the colon.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">b. Diagnostic Procedures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Needle Biopsy:</strong> Uses a needle to extract tissue samples.</li>
              <li><strong>Excisional Biopsy:</strong> Removes the entire tumor for examination.</li>
              <li><strong>Incisional Biopsy:</strong> Removes a portion of a tumor.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">c. Staging Procedures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Laparoscopy:</strong> Minimally invasive exam of abdominal organs.</li>
              <li><strong>Thoracotomy:</strong> Open chest surgery to stage lung cancers.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">d. Palliative Procedures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Debulking Surgery:</strong> Reduces tumor size to relieve symptoms.</li>
              <li><strong>Biliary Bypass:</strong> Bypasses bile duct obstructions caused by cancer.</li>
              <li><strong>Colostomy/Ileostomy:</strong> Creates abdominal wall openings for waste removal.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Surgical Techniques</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Open Surgery:</strong> Traditional technique with larger incisions.</li>
              <li><strong>Minimally Invasive Surgery:</strong> Includes laparoscopy and robotic-assisted procedures.</li>
              <li><strong>Cryosurgery:</strong> Destroys tumors using extreme cold.</li>
              <li><strong>Electrosurgery:</strong> Uses electrical current to cut tissue or coagulate blood vessels.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Preoperative Considerations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Imaging Studies:</strong> CT, MRI, PET scans to assess tumor location.</li>
              <li><strong>Blood Tests:</strong> Evaluate overall health before surgery.</li>
              <li><strong>Discussion of Risks:</strong> Includes benefits, recovery expectations, and potential complications.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">5. Postoperative Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pain Management:</strong> Medications to control discomfort.</li>
              <li><strong>Wound Care:</strong> Monitoring healing and infection signs.</li>
              <li><strong>Rehabilitation:</strong> May involve physical therapy or nutritional support.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">6. Advances in Surgical Oncology</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Robotic Surgery:</strong> Improves precision in complex operations.</li>
              <li><strong>ERAS (Enhanced Recovery After Surgery):</strong> Promotes quicker recovery through optimized care protocols.</li>
              <li><strong>Targeted Therapies:</strong> Combines surgery with targeted cancer treatments.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Surgical oncology is a vital aspect of cancer care. Understanding the various procedures, techniques, and innovations allows patients and caregivers to make informed treatment decisions and support better outcomes.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Oncology</h2>
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

export default SurgicalOncology;
