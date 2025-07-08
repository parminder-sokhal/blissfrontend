import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/IVfluids.jpeg", // Replace with your actual image path
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

const IVfluids = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          IV Fluids and Electrolyte Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              IV (intravenous) fluids and electrolyte management are critical components of patient care, especially in acute and chronic medical conditions. Proper management ensures that patients maintain hydration and electrolyte balance, which is vital for overall health and physiological function.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Importance of IV Fluids</h2>
            <p><strong>Overview:</strong> IV fluids deliver hydration, medications, and nutrients directly into the bloodstream for rapid treatment.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Dehydration:</strong> Caused by vomiting, diarrhea, or sweating.</li>
              <li><strong>Surgical Procedures:</strong> To maintain fluid balance during and after operations.</li>
              <li><strong>Critical Illness:</strong> Intensive care fluid resuscitation.</li>
              <li><strong>Nutritional Support:</strong> When oral intake isn't possible.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Types of IV Fluids</h2>
            <p><strong>Crystalloids:</strong> Solutions of electrolytes that move freely across membranes.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Normal Saline (0.9% NaCl):</strong> For hydration and resuscitation.</li>
              <li><strong>Lactated Ringer’s:</strong> Used in surgery and trauma.</li>
              <li><strong>Dextrose (e.g., D5W):</strong> Provides hydration and calories.</li>
            </ul>
            <p><strong>Colloids:</strong> Large molecules that stay in blood vessels to expand volume.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Hydroxyethyl Starch (HES):</strong> Used in critical care.</li>
              <li><strong>Albumin:</strong> For low protein levels or severe burns.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Electrolyte Management</h2>
            <p><strong>Overview:</strong> Electrolytes control nerve signals, hydration, and muscle function.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sodium (Na⁺):</strong> Fluid balance and blood pressure regulation.</li>
              <li><strong>Potassium (K⁺):</strong> Heart and muscle function.</li>
              <li><strong>Calcium (Ca²⁺):</strong> Bone, muscle, and nerve function.</li>
              <li><strong>Magnesium (Mg²⁺):</strong> Energy production and over 300 reactions.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">4. Common Electrolyte Imbalances</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Hypernatremia:</strong> High sodium; treat with low-sodium IV fluids.</li>
              <li><strong>Hyponatremia:</strong> Low sodium; treat with saline or medication.</li>
              <li><strong>Hyperkalemia:</strong> High potassium; may need insulin, calcium, or meds.</li>
              <li><strong>Hypokalemia:</strong> Low potassium; treated with supplements or potassium IVs.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">5. Monitoring and Management</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Assessment:</strong> Monitor vitals, fluid input/output, and lab values.</li>
              <li><strong>Adjustments:</strong> Modify fluids or electrolytes based on ongoing needs.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              IV fluids and electrolyte management are essential for treating many conditions. Proper use and monitoring improve patient outcomes and prevent complications. Skilled care ensures hydration, balance, and recovery.
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

export default IVfluids;
