import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path if different
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

const NonInvasiveDiagnostic = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Non-Invasive Diagnostic Procedures
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Non-invasive diagnostic procedures are essential tools in modern medicine, allowing healthcare providers to assess and diagnose various medical conditions without surgical intervention. These procedures are generally safe, quick, and provide valuable insights into a patient's health.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Electrocardiogram (ECG or EKG)</h2>
            <p><strong>Overview:</strong> Measures the heart’s electrical activity to diagnose heart conditions.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Electrode Placement:</strong> Electrodes are placed on chest, arms, and legs.</li>
              <li><strong>Recording:</strong> Displays wave patterns on a monitor or paper.</li>
              <li><strong>Uses:</strong> Diagnoses arrhythmias, heart attacks, and heart structure issues.</li>
              <li><strong>Advantages:</strong> Fast, painless, and gives immediate results.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Chest X-Ray</h2>
            <p><strong>Overview:</strong> Uses X-rays to visualize heart, lungs, and bones.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Procedure:</strong> Patient stands in front of the machine; X-rays capture internal images.</li>
              <li><strong>Uses:</strong> Detects pneumonia, tuberculosis, tumors, and fractures.</li>
              <li><strong>Advantages:</strong> Fast, widely available, and involves low radiation.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Echocardiography</h2>
            <p><strong>Overview:</strong> Ultrasound-based imaging of heart structure and function.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Procedure:</strong> Transducer on the chest emits waves that create heart images.</li>
              <li><strong>Uses:</strong> Evaluates heart valves, pumping function, and congenital conditions.</li>
              <li><strong>Advantages:</strong> No radiation and gives real-time structural and functional details.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Non-invasive diagnostics like ECG, chest X-ray, and echocardiography are vital in detecting, assessing, and managing health conditions. Their safety and reliability make them indispensable tools in clinical care.
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

export default NonInvasiveDiagnostic;