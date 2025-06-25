import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path
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

const OncologicalImagingBiopsy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Oncological Imaging and Biopsy Services
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Oncological imaging and biopsy services are critical components in the diagnosis, treatment planning, and monitoring of cancer. These services help healthcare providers visualize tumors, assess their characteristics, and obtain tissue samples for accurate diagnosis.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Oncological Imaging</h2>
            <p>Oncological imaging refers to various techniques used to visualize cancerous tissues and monitor disease progression. Common imaging modalities include:</p>

            <h3 className="text-xl font-semibold">a. X-rays</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Uses radiation to produce images of internal structures.</li>
              <li><strong>Use:</strong> Commonly for detecting bone metastases and tumors.</li>
            </ul>

            <h3 className="text-xl font-semibold">b. Computed Tomography (CT) Scans</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Combines X-ray images to create detailed cross-sections.</li>
              <li><strong>Use:</strong> Measures tumor size, shape, and lymph node involvement.</li>
            </ul>

            <h3 className="text-xl font-semibold">c. Magnetic Resonance Imaging (MRI)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Uses magnetic fields and radio waves to produce detailed images.</li>
              <li><strong>Use:</strong> Ideal for brain, spinal cord, and soft tissue evaluation.</li>
            </ul>

            <h3 className="text-xl font-semibold">d. Positron Emission Tomography (PET) Scans</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Nuclear imaging using radioactive tracers to show metabolic activity.</li>
              <li><strong>Use:</strong> Detects cancer spread and treatment response.</li>
            </ul>

            <h3 className="text-xl font-semibold">e. Ultrasound</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Sound wave–based imaging for soft tissues.</li>
              <li><strong>Use:</strong> Common in guiding biopsies and assessing abdominal tumors.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Biopsy Services</h2>
            <p>A biopsy involves taking a tissue sample from a suspicious area to determine the presence and nature of cancer.</p>

            <h3 className="text-xl font-semibold">a. Fine Needle Aspiration (FNA)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Thin needle used to extract fluid or tissue.</li>
              <li><strong>Use:</strong> Effective for breast, thyroid, and lymph node evaluations.</li>
            </ul>

            <h3 className="text-xl font-semibold">b. Core Needle Biopsy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Larger needle obtains a core tissue sample.</li>
              <li><strong>Use:</strong> Suitable for breast and prostate tissues.</li>
            </ul>

            <h3 className="text-xl font-semibold">c. Excisional Biopsy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Entire lump or abnormal area is surgically removed.</li>
              <li><strong>Use:</strong> Often used for breast lumps or skin lesions.</li>
            </ul>

            <h3 className="text-xl font-semibold">d. Incisional Biopsy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Only part of a large tumor is removed for testing.</li>
              <li><strong>Use:</strong> Used when full removal is not feasible initially.</li>
            </ul>

            <h3 className="text-xl font-semibold">e. Endoscopic Biopsy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Description:</strong> Tissue sampled using an endoscope from internal organs.</li>
              <li><strong>Use:</strong> For lung, GI tract, and bladder biopsies.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Importance of Imaging and Biopsy Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accurate Diagnosis:</strong> Confirms cancer type, stage, and grade.</li>
              <li><strong>Treatment Planning:</strong> Helps develop personalized treatment approaches.</li>
              <li><strong>Monitoring:</strong> Tracks treatment effectiveness and detects recurrence.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Considerations for Patients</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Preparation:</strong> Follow instructions before scans or procedures.</li>
              <li><strong>Risks:</strong> Understand possible side effects or radiation exposure.</li>
              <li><strong>Follow-Up:</strong> Ongoing appointments to manage care based on results.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Oncological imaging and biopsy services play a vital role in cancer care. They enable timely diagnosis, guide treatment, and help monitor progress effectively. At Bliss Hospital, we ensure patients receive the most accurate and compassionate care using advanced diagnostic tools.
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

export default OncologicalImagingBiopsy;