import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path
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

const AntibioticTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Antibiotic Therapy for Infections
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Antibiotic therapy is a crucial component of treating bacterial infections. It involves the use of medications that kill or inhibit the growth of bacteria, helping to manage and resolve infections effectively.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Purpose of Antibiotic Therapy</h2>
            <p><strong>Overview:</strong> Antibiotic therapy aims to eliminate bacterial pathogens responsible for infections and prevent complications associated with these infections.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Bacterial Infections:</strong> Pneumonia, UTIs, skin infections, and sepsis.</li>
              <li><strong>Prophylaxis:</strong> To prevent infection in surgical or immunocompromised patients.</li>
              <li><strong>Specific Conditions:</strong> Like tuberculosis or bacterial meningitis.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Types of Antibiotics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bactericidal Antibiotics:</strong> Kill bacteria directly.
                <ul className="list-disc pl-6 space-y-1">
                  <li>Examples: Penicillins (e.g., amoxicillin), cephalosporins, vancomycin.</li>
                </ul>
              </li>
              <li><strong>Bacteriostatic Antibiotics:</strong> Inhibit growth, letting the immune system eliminate bacteria.
                <ul className="list-disc pl-6 space-y-1">
                  <li>Examples: Tetracyclines (e.g., doxycycline), macrolides (e.g., azithromycin).</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Spectrum of Activity</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Broad-Spectrum Antibiotics:</strong> Effective against a wide range of bacteria.
                <ul className="list-disc pl-6 space-y-1">
                  <li>Examples: Amoxicillin-clavulanate, ciprofloxacin.</li>
                </ul>
              </li>
              <li><strong>Narrow-Spectrum Antibiotics:</strong> Target specific bacteria.
                <ul className="list-disc pl-6 space-y-1">
                  <li>Examples: Penicillin G.</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">4. Mechanism of Action</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Inhibition of Cell Wall Synthesis:</strong> e.g., Penicillins.</li>
              <li><strong>Inhibition of Protein Synthesis:</strong> e.g., Tetracyclines, Macrolides.</li>
              <li><strong>Inhibition of Nucleic Acid Synthesis:</strong> e.g., Fluoroquinolones.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">5. Administration of Antibiotics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Oral:</strong> For mild/moderate infections.</li>
              <li><strong>Intravenous (IV):</strong> For severe or urgent cases.</li>
              <li><strong>Topical:</strong> Used for local skin infections.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">6. Considerations and Monitoring</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Antibiotic Resistance:</strong> Caused by overuse/misuse — use only when necessary.</li>
              <li><strong>Side Effects:</strong> Nausea, diarrhea, allergic reactions, drug interactions.</li>
              <li><strong>Monitoring:</strong> Track improvement and any adverse effects, adjust based on culture or response.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">7. Conclusion</h2>
            <p>
              Antibiotic therapy is a fundamental tool in fighting bacterial infections. Its responsible use, combined with a clear understanding of types and mechanisms, ensures effective treatment and limits resistance risks.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">General Medicine</h2>
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

export default AntibioticTherapy;