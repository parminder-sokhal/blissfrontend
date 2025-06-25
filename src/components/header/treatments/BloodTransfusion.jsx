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

const BloodTransfusion = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Blood Transfusions
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Blood transfusions are medical procedures used to replace lost blood or its components in patients. They are crucial in treating various medical conditions, including trauma, surgery, and certain diseases.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Purpose of Blood Transfusions</h2>
            <p><strong>Overview:</strong> Blood transfusions restore blood volume, improve oxygen delivery, and correct blood component deficiencies.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Severe Anemia:</strong> Increases red blood cells and oxygen capacity.</li>
              <li><strong>Trauma or Surgery:</strong> Replaces lost blood.</li>
              <li><strong>Coagulation Disorders:</strong> Supplies clotting factors.</li>
              <li><strong>Bone Marrow Disorders:</strong> Treats impaired blood production.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Types of Blood Components</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Whole Blood:</strong> Contains all components; rarely used today.</li>
              <li><strong>Red Blood Cells (RBCs):</strong> Treats anemia and improves oxygen delivery.</li>
              <li><strong>Platelets:</strong> Helps in low platelet conditions like leukemia or chemo.</li>
              <li><strong>Plasma:</strong> Used for liver disease, burns, and clotting issues.</li>
              <li><strong>Cryoprecipitate:</strong> Rich in clotting factors for bleeding disorders.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Blood Typing and Crossmatching</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Blood Typing:</strong> Identifies A, B, AB, or O and Rh factor to ensure compatibility.</li>
              <li><strong>Crossmatching:</strong> Lab test to ensure donor and recipient blood compatibility.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">4. Transfusion Process</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Preparation:</strong> Confirm identity and get patient consent.</li>
              <li><strong>Administration:</strong> Use sterile IV setup, monitor vitals, and start slowly to observe reactions.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">5. Risks and Complications</h2>
            <p>While generally safe, blood transfusions carry some risks:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Allergic Reactions:</strong> Rash or itching.</li>
              <li><strong>Febrile Reactions:</strong> Fever/chills due to immune response.</li>
              <li><strong>Hemolytic Reactions:</strong> Severe immune attack on red blood cells.</li>
              <li><strong>Infections:</strong> Rare due to screening, but risks include HIV or hepatitis.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">6. Post-Transfusion Monitoring</h2>
            <p>
              Patients are monitored for any adverse reactions after transfusion. Vitals are checked frequently, and symptoms like fever or shortness of breath are addressed immediately.
            </p>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Blood transfusions are vital procedures that save lives by replacing lost or deficient blood components. Understanding their purpose, administration, and potential risks ensures effective and safe patient care.
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

export default BloodTransfusion;