import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/BoneMarrow.jpeg", // Replace with relevant image
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

const BoneMarrow = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Bone Marrow and Stem Cell Transplant
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Bone marrow and stem cell transplants are medical procedures used to replace damaged or diseased bone marrow with healthy stem cells. These transplants are often used to treat various cancers and blood disorders.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Purpose of Bone Marrow and Stem Cell Transplant</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Restoring Blood Cell Production:</strong> Replace damaged marrow to restart healthy blood cell formation.</li>
              <li><strong>Treating Blood Disorders:</strong> Used in leukemia, lymphoma, multiple myeloma, and more.</li>
              <li><strong>High-Dose Chemotherapy Support:</strong> Enables intense treatments by regenerating marrow afterward.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Types of Transplants</h2>

            <h3 className="text-xl font-semibold mt-2">a. Autologous Transplant</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Definition:</strong> Uses the patient’s own stem cells.</li>
              <li><strong>Process:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Stem cells are collected from the patient.</li>
                  <li>High-dose chemo or radiation follows.</li>
                  <li>The stem cells are then reinfused.</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">b. Allogeneic Transplant</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Definition:</strong> Uses donor stem cells.</li>
              <li><strong>Process:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>A compatible donor is identified.</li>
                  <li>Patient undergoes conditioning therapy.</li>
                  <li>Healthy donor cells are infused.</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Stem Cell Sources</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bone Marrow:</strong> Collected via needle from hip bone.</li>
              <li><strong>Peripheral Blood:</strong> Stimulated collection through bloodstream.</li>
              <li><strong>Umbilical Cord Blood:</strong> Collected after childbirth and rich in stem cells.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Indications for Transplant</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Leukemias:</strong> AML, ALL and others.</li>
              <li><strong>Lymphomas:</strong> Hodgkin and non-Hodgkin.</li>
              <li><strong>Multiple Myeloma:</strong> Cancer of plasma cells.</li>
              <li><strong>Aplastic Anemia:</strong> Bone marrow failure syndrome.</li>
              <li><strong>Inherited Disorders:</strong> Sickle cell anemia, thalassemia.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">5. Risks and Complications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Infection:</strong> High risk due to immune suppression.</li>
              <li><strong>Graft-versus-Host Disease (GVHD):</strong> Immune attack by donor cells.</li>
              <li><strong>Organ Damage:</strong> Caused by intense pre-transplant therapies.</li>
              <li><strong>Disease Recurrence:</strong> Possibility of relapse.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">6. Recovery and Follow-Up</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hospital Stay:</strong> Typically several weeks post-procedure.</li>
              <li><strong>Regular Check-Ups:</strong> Ongoing monitoring and blood tests.</li>
              <li><strong>Long-Term Care:</strong> Includes medication and immune system monitoring.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Bone marrow and stem cell transplants are vital treatment options for various hematological conditions. Understanding the types, processes, risks, and recovery involved can help patients and caregivers navigate this complex treatment pathway effectively.
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

export default BoneMarrow;