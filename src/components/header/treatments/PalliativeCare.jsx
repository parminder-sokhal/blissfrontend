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

const PalliativeCare = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Palliative Care and Pain Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Palliative care is a specialized medical approach focused on providing relief from the symptoms and stress of serious illness. Its primary goal is to improve the quality of life for both the patient and their family. Pain management is a critical component of palliative care.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Purpose of Palliative Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Symptom Relief:</strong> Alleviating pain, nausea, fatigue, and other distressing symptoms.</li>
              <li><strong>Emotional Support:</strong> Addressing mental, social, and spiritual concerns.</li>
              <li><strong>Improving Quality of Life:</strong> Enhancing comfort during serious illness.</li>
              <li><strong>Facilitating Communication:</strong> Supporting informed decision-making and end-of-life planning.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Key Components of Palliative Care</h2>

            <h3 className="text-xl font-semibold mt-2">a. Multidisciplinary Team Approach</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Doctors:</strong> Specialized in palliative medicine.</li>
              <li><strong>Nurses:</strong> Deliver consistent and compassionate care.</li>
              <li><strong>Social Workers:</strong> Assist with emotional, financial, and logistical challenges.</li>
              <li><strong>Chaplains:</strong> Provide spiritual care and support.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">b. Symptom Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pain:</strong> Managed with medications and therapies.</li>
              <li><strong>Nausea and Vomiting:</strong> Treated with antiemetics and diet adjustments.</li>
              <li><strong>Fatigue:</strong> Addressed through energy conservation techniques.</li>
              <li><strong>Breathlessness:</strong> Managed with medications and breathing strategies.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Pain Management in Palliative Care</h2>

            <h3 className="text-xl font-semibold mt-2">a. Assessment of Pain</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Comprehensive Evaluation:</strong> Understanding intensity, duration, and type of pain.</li>
              <li><strong>Patient Self-Report:</strong> Encouraging patients to describe their experience.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-2">b. Pain Management Strategies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Medications:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Non-opioids: Acetaminophen, NSAIDs.</li>
                  <li>Opioids: Morphine, oxycodone for severe pain.</li>
                  <li>Adjuvants: Antidepressants, anticonvulsants for nerve pain.</li>
                </ul>
              </li>
              <li><strong>Non-Pharmacological Interventions:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Physical therapy.</li>
                  <li>Acupuncture.</li>
                  <li>Massage therapy.</li>
                </ul>
              </li>
              <li><strong>Psychosocial Support:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Counseling and emotional support.</li>
                  <li>Cognitive Behavioral Therapy (CBT).</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Benefits of Palliative Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Improved Quality of Life:</strong> Physical and emotional well-being.</li>
              <li><strong>Enhanced Communication:</strong> Clear understanding of treatment goals.</li>
              <li><strong>Family Support:</strong> Guidance for caregivers and loved ones.</li>
              <li><strong>Coordinated Care:</strong> Smooth transitions between services.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">5. When to Consider Palliative Care</h2>
            <p>
              Palliative care is appropriate at any stage of a serious illness and can be provided alongside curative treatments. It is commonly used in conditions such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancer</li>
              <li>Heart failure</li>
              <li>Chronic obstructive pulmonary disease (COPD)</li>
              <li>Kidney failure</li>
              <li>Neurodegenerative diseases like Alzheimer’s or Parkinson’s</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Palliative care and pain management are essential components of comprehensive healthcare for individuals facing serious illnesses. By focusing on symptom relief, emotional support, and improved quality of life, palliative care teams play a vital role in enhancing the overall experience for patients and their families.
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

export default PalliativeCare;