import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/TargetedTherapy.jpeg", // Replace with an image related to Targeted Therapy if available
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

const TargetedTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Targeted Therapy</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Targeted therapy is a type of cancer treatment that uses drugs or other substances to precisely identify and attack cancer cells, usually while doing little or no damage to normal cells. This approach is different from traditional chemotherapy, which can affect both cancerous and healthy cells.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Purpose of Targeted Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Block Cancer Cell Growth:</strong> Inhibit growth and division of cancer cells.</li>
              <li><strong>Prevent Metastasis:</strong> Stop cancer from spreading to other organs.</li>
              <li><strong>Enhance Immune Response:</strong> Boost immune system to fight cancer cells.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Mechanisms of Action</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Inhibition of Specific Molecules:</strong> Like tyrosine kinase inhibitors that disrupt cancer cell function.</li>
              <li><strong>Blocking Angiogenesis:</strong> Stops tumors from forming new blood vessels (e.g., VEGF inhibitors).</li>
              <li><strong>Modulating the Immune System:</strong> Boost immune cells’ ability to destroy cancer (e.g., monoclonal antibodies).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Types of Targeted Therapy</h2>

            <h3 className="text-xl font-semibold mt-2">a. Monoclonal Antibodies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Trastuzumab (Herceptin):</strong> Targets HER2-positive breast cancer.</li>
              <li><strong>Rituximab (Rituxan):</strong> Targets CD20 protein in B-cell lymphomas.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">b. Small Molecule Inhibitors</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Imatinib (Gleevec):</strong> Targets BCR-ABL in chronic myeloid leukemia.</li>
              <li><strong>Erlotinib (Tarceva):</strong> Targets EGFR in non-small cell lung cancer.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">c. Angiogenesis Inhibitors</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bevacizumab (Avastin):</strong> Blocks VEGF to prevent blood supply to tumors.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">d. Checkpoint Inhibitors</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pembrolizumab (Keytruda):</strong> Blocks PD-1 to unleash immune system against cancer.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Biomarker Testing</h2>
            <p>
              Before beginning targeted therapy, biomarker testing helps identify genetic mutations or proteins in a patient's cancer. This ensures the most appropriate and effective treatment is selected.
            </p>

            <h2 className="text-2xl font-semibold mt-4">5. Side Effects</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Skin Reactions:</strong> Such as rash or dry skin.</li>
              <li><strong>Gastrointestinal Issues:</strong> Nausea, diarrhea, or appetite loss.</li>
              <li><strong>Fatigue:</strong> Tiredness and general weakness.</li>
              <li><strong>Organ Toxicity:</strong> Some therapies may impact liver, lungs, or heart.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">6. Advances in Targeted Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personalized Medicine:</strong> Custom treatment plans based on genetic profiles.</li>
              <li><strong>Combination Therapies:</strong> Used alongside chemotherapy or immunotherapy for better results.</li>
              <li><strong>New Drug Development:</strong> Ongoing research to fight resistant cancer cells.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Targeted therapy represents a powerful tool in modern cancer care, offering precise, effective treatments with fewer side effects than traditional methods. Patients and families can benefit from understanding these options and working with oncology teams to find the best path forward.
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

export default TargetedTherapy;
