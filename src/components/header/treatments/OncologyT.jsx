import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/OncologyN.jpeg", // Replace with your actual image
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

const OncologyT = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Oncology</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer. It encompasses a wide range of practices and specialties aimed at managing this complex group of diseases.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Types of Cancer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Carcinomas:</strong> Cancers that begin in the skin or tissues that line internal organs.</li>
              <li><strong>Sarcomas:</strong> Cancers in connective tissues such as bone, fat, or muscle.</li>
              <li><strong>Leukemias:</strong> Cancers of the blood-forming tissues.</li>
              <li><strong>Lymphomas:</strong> Cancers in the lymphatic system.</li>
              <li><strong>Central Nervous System Cancers:</strong> Cancers in the brain and spinal cord.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Genetic Factors:</strong> Family history, genetic mutations like BRCA1/2.</li>
              <li><strong>Environmental Factors:</strong> Exposure to carcinogens like tobacco, chemicals, and radiation.</li>
              <li><strong>Lifestyle Factors:</strong> Poor diet, lack of activity, obesity, and alcohol use.</li>
              <li><strong>Infections:</strong> Viruses like HPV and hepatitis B/C can increase risk.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Symptoms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unexplained weight loss</li>
              <li>Fatigue</li>
              <li>Pain</li>
              <li>Changes in appetite or bowel habits</li>
              <li>Persistent cough or difficulty breathing</li>
              <li>Skin changes such as new or evolving moles</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Diagnosis</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Medical History and Exam:</strong> Assessment of symptoms and risks.</li>
              <li><strong>Imaging:</strong> X-rays, CT scans, MRI, PET scans.</li>
              <li><strong>Biopsy:</strong> Sample tissue analysis.</li>
              <li><strong>Lab Tests:</strong> Blood work, tumor markers, etc.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">5. Treatment Options</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Surgery:</strong> Tumor removal.</li>
              <li><strong>Radiation Therapy:</strong> High-energy rays to kill cancer cells.</li>
              <li><strong>Chemotherapy:</strong> Drug treatment to target cancer cells.</li>
              <li><strong>Targeted Therapy:</strong> Drugs targeting specific cancer features.</li>
              <li><strong>Immunotherapy:</strong> Boosting the immune system against cancer.</li>
              <li><strong>Hormone Therapy:</strong> Treating hormone-sensitive cancers.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">6. Palliative Care</h2>
            <p>
              Palliative care provides relief from symptoms and stress of serious illness. It enhances quality of life for both patients and families and can be part of treatment at any stage.
            </p>

            <h2 className="text-2xl font-semibold mt-4">7. Follow-Up and Survivorship</h2>
            <p>
              Continued care after treatment helps monitor for recurrence, manage long-term effects, and support recovery. Survivorship programs provide holistic post-treatment support.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Oncology is a vital field committed to fighting cancer. Ongoing research and innovation continue to enhance diagnosis, treatment, and survival rates. Early detection, personalized therapies, and compassionate care are key pillars of effective cancer management.
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

export default OncologyT;
