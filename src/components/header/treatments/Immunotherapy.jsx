import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Immunotherapy.jpeg", // Replace with a relevant image for immunotherapy if desired
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

const Immunotherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Immunotherapy</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Immunotherapy is a type of cancer treatment that harnesses the body's immune system to recognize and destroy cancer cells. Unlike traditional treatments like chemotherapy and radiation, which directly target cancer cells, immunotherapy aims to enhance the immune response against tumors.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Purpose of Immunotherapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Enhancing Immune Response:</strong> Boost the body’s ability to attack cancer cells.</li>
              <li><strong>Targeting Specific Cancer Characteristics:</strong> Focus on unique antigens on cancer cells.</li>
              <li><strong>Improving Long-Term Control:</strong> Achieve sustained remission through immune memory.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Types of Immunotherapy</h2>

            <h3 className="text-xl font-semibold mt-2">a. Monoclonal Antibodies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Rituximab (Rituxan):</strong> Targets CD20 in B-cell lymphomas.</li>
              <li><strong>Trastuzumab (Herceptin):</strong> Targets HER2 in breast cancer.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">b. Immune Checkpoint Inhibitors</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pembrolizumab (Keytruda):</strong> Blocks PD-1, used in melanoma and lung cancer.</li>
              <li><strong>Nivolumab (Opdivo):</strong> Also targets PD-1 for various cancers.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">c. Cancer Vaccines</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Preventive Vaccines:</strong> Like HPV vaccine to prevent cervical cancer.</li>
              <li><strong>Therapeutic Vaccines:</strong> Sipuleucel-T (Provenge) for prostate cancer.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">d. Adoptive Cell Transfer (ACT)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>CAR T-cell Therapy:</strong> Modifies T-cells to target cancer-specific antigens.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">e. Cytokine Therapy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Interleukin-2 (IL-2):</strong> Used for kidney cancer and melanoma.</li>
              <li><strong>Interferons:</strong> Treat some types of leukemia and melanoma.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Mechanisms of Action</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Direct Activation of Immune Cells:</strong> Stimulate immune response against tumors.</li>
              <li><strong>Inhibition of Tumor Growth:</strong> Block immune evasion pathways in tumors.</li>
              <li><strong>Enhancing Immune Memory:</strong> Train the immune system to prevent recurrence.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Side Effects</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Immune-Related Adverse Events:</strong> Inflammation of organs like colon, liver, lungs.</li>
              <li><strong>Flu-like Symptoms:</strong> Fatigue, chills, fever.</li>
              <li><strong>Skin Reactions:</strong> Rashes, itching, dryness.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">5. Advances in Immunotherapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Combination Therapies:</strong> Enhanced effect with chemo/radiation or targeted therapy.</li>
              <li><strong>Biomarker Development:</strong> Personalized treatment through predictive markers.</li>
              <li><strong>New Drug Development:</strong> Ongoing clinical trials for novel immune drugs.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Immunotherapy represents a groundbreaking approach in cancer treatment, offering hope for many patients, especially those with advanced or resistant cancers. Understanding its mechanisms, types, and potential side effects can empower patients and caregivers in making informed treatment decisions.
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

export default Immunotherapy;
