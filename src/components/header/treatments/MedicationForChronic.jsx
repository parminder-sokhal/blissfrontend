import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/MedicationForChronic.jpeg", // Replace with your actual image path if different
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

const MedicationForChronic = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Medications for Chronic Illnesses
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Chronic illnesses require ongoing management, and medications play a crucial role
              in controlling symptoms, preventing complications, and improving the quality of life
              for patients. Below is an overview of common chronic illnesses and their associated
              medications.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Diabetes</h2>
            <p><strong>Overview:</strong> A metabolic disorder with high blood sugar due to insulin issues.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Insulin:</strong> Essential for Type 1 and sometimes Type 2 diabetes.</li>
              <li><strong>Oral Hypoglycemics:</strong></li>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Metformin:</strong> Reduces liver glucose production.</li>
                <li><strong>Sulfonylureas:</strong> Stimulate insulin release (e.g., glipizide).</li>
                <li><strong>DPP-4 Inhibitors:</strong> Enhance insulin secretion (e.g., sitagliptin).</li>
                <li><strong>SGLT2 Inhibitors:</strong> Increase glucose excretion via urine (e.g., canagliflozin).</li>
              </ul>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Hypertension</h2>
            <p><strong>Overview:</strong> High blood pressure increases cardiovascular risks.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Diuretics:</strong> Help reduce fluid volume (e.g., hydrochlorothiazide).</li>
              <li><strong>ACE Inhibitors:</strong> Relax vessels (e.g., lisinopril).</li>
              <li><strong>ARBs:</strong> Block vessel-constricting chemicals (e.g., losartan).</li>
              <li><strong>Calcium Channel Blockers:</strong> Improve blood flow (e.g., amlodipine).</li>
              <li><strong>Beta-Blockers:</strong> Reduce heart workload (e.g., metoprolol).</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Asthma</h2>
            <p><strong>Overview:</strong> Chronic airway inflammation causing breathing difficulties.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Inhaled Corticosteroids:</strong> Reduce inflammation (e.g., fluticasone).</li>
              <li><strong>LABAs:</strong> Long-term airway muscle relaxation (e.g., salmeterol).</li>
              <li><strong>SABAs:</strong> Quick relief (e.g., albuterol).</li>
              <li><strong>Leukotriene Modifiers:</strong> Reduce allergic inflammation (e.g., montelukast).</li>
              <li><strong>Biologics:</strong> Target immune responses (e.g., omalizumab).</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">4. Thyroid Disorders</h2>
            <p><strong>Overview:</strong> Affect metabolic regulation—hypo- and hyperthyroidism.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Hypothyroidism:</strong> Levothyroxine replaces deficient hormone.</li>
              <li><strong>Hyperthyroidism:</strong></li>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Antithyroid Medications:</strong> Reduce hormone levels (e.g., methimazole).</li>
                <li><strong>Beta-Blockers:</strong> Manage symptoms like palpitations (e.g., propranolol).</li>
                <li><strong>Radioactive Iodine:</strong> Destroys overactive thyroid cells.</li>
              </ul>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Managing chronic illnesses requires tailored treatment plans combining medications with
              lifestyle adjustments. Close collaboration with healthcare providers ensures safety,
              efficacy, and improved quality of life for those living with chronic diseases.
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

export default MedicationForChronic;
