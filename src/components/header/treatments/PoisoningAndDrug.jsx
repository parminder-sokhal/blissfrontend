import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/PoisoningAndDrug.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "Medications for chronic illnesses", link: "/MedicationForChronic" },
    { title: "IV fluids and electrolyte management", link: "/IVfluids" },
    { title: "Blood transfusions", link: "/BloodTransfusion" },
    { title: "Antibiotic therapy for infections", link: "/AntibioticTherapy" },
    { title: "Non-invasive diagnostic procedures", link: "/NonInvasiveDiagnostic" },
    { title: "Management of infectious diseases ", link: "/ManagementInfections" },
    { title: "Lifestyle counselling ", link: "/LifestyleCounselling" },
    { title: "Vaccinations and immunizations", link: "/Vaccinations" },
    { title: "Management of poisoning and drug overdose ", link: "/PoisoningAndDrug" },
  ],
};

const PoisoningAndDrug = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Management of Poisoning and Drug Overdose
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Poisoning and drug overdose are critical medical emergencies that require prompt recognition and treatment. Effective management can significantly reduce morbidity and mortality.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Initial Assessment</h2>
            <h3 className="font-semibold mt-2">A. Scene Safety</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ensure the environment is safe for both the patient and responders.</li>
            </ul>

            <h3 className="font-semibold mt-2">B. Primary Survey</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Airway:</strong> Check for patency; provide support if obstructed.</li>
              <li><strong>Breathing:</strong> Assess ventilation; provide oxygen if needed.</li>
              <li><strong>Circulation:</strong> Check pulse, BP, capillary refill.</li>
            </ul>

            <h3 className="font-semibold mt-2">C. History Taking</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Identify the substance, amount, timing, and any co-ingestants.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Decontamination</h2>

            <h3 className="font-semibold mt-2">A. Oral Poisoning</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Activated Charcoal:</strong> 1 g/kg up to 50 g, if conscious and within 1 hour.</li>
              <li><strong>Gastric Lavage:</strong> Rarely used, for severe cases only.</li>
            </ul>

            <h3 className="font-semibold mt-2">B. Dermal Exposure</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Remove contaminated clothing and wash skin thoroughly.</li>
            </ul>

            <h3 className="font-semibold mt-2">C. Inhalation</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Move the patient to fresh air immediately.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Specific Antidotes</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Acetaminophen:</strong> N-acetylcysteine (NAC)</li>
              <li><strong>Opioids:</strong> Naloxone</li>
              <li><strong>Benzodiazepines:</strong> Flumazenil (with caution)</li>
              <li><strong>Methanol/Ethylene Glycol:</strong> Fomepizole or ethanol</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">4. Supportive Care</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Monitoring:</strong> Vitals and mental status continuously.</li>
              <li><strong>Fluid Resuscitation:</strong> IV fluids for hypotension or dehydration.</li>
              <li><strong>Symptomatic Treatment:</strong> Manage seizures, agitation, respiratory distress.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">5. Advanced Interventions</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Intubation:</strong> If airway protection is compromised.</li>
              <li><strong>Hemodialysis:</strong> For lithium, methanol, salicylates, and renal failure.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">6. Transport to a Medical Facility</h2>
            <p>
              If initial management is insufficient, the patient should be transported to a hospital for further care and observation.
            </p>

            <h2 className="font-semibold text-xl mt-4">7. Prevention and Education</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Public Awareness:</strong> Educate about drug safety and overdose risks.</li>
              <li><strong>Poison Control Centers:</strong> Use hotlines for real-time poisoning advice.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              The management of poisoning and drug overdose involves quick assessment, decontamination, appropriate antidotes, supportive care, and transport if necessary. Timely intervention can be life-saving and reduce complications.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              General Medicine
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

export default PoisoningAndDrug;