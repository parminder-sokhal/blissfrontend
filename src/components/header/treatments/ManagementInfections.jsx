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

const ManagementInfections = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Management of Infectious Diseases
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Infectious diseases pose significant health challenges worldwide. Effective management involves prevention, diagnosis, treatment, and control measures tailored to each disease.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Dengue Fever</h2>
            <p><strong>Overview:</strong> Dengue is a viral infection transmitted by Aedes mosquitoes, leading to flu-like symptoms or severe hemorrhagic forms.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Diagnosis:</strong> Clinical evaluation and lab tests (NS1 antigen, IgM/IgG).</li>
              <li><strong>Supportive Care:</strong> Hydration (oral/IV), acetaminophen for fever (avoid NSAIDs).</li>
              <li><strong>Monitoring:</strong> Platelet count and hematocrit monitoring.</li>
              <li><strong>Prevention:</strong> Mosquito control, repellents, and Dengvaxia for pre-infected individuals in endemic zones.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Malaria</h2>
            <p><strong>Overview:</strong> Malaria is caused by Plasmodium parasites via Anopheles mosquito bites, presenting with fever and chills.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Diagnosis:</strong> Blood smear microscopy or rapid diagnostic tests (RDTs).</li>
              <li><strong>Treatment:</strong> 
                <ul className="list-disc pl-6">
                  <li>Uncomplicated: ACTs like artemether-lumefantrine.</li>
                  <li>Severe: IV artesunate or quinine, then oral ACTs.</li>
                </ul>
              </li>
              <li><strong>Prevention:</strong> Insecticide-treated nets, indoor spraying, and chemoprophylaxis for travelers.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Tuberculosis (TB)</h2>
            <p><strong>Overview:</strong> TB is a bacterial infection by Mycobacterium tuberculosis, mainly affecting lungs but can be systemic.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Diagnosis:</strong> Symptoms, skin test (TST), IGRAs, chest X-ray, and sputum analysis.</li>
              <li><strong>Treatment:</strong> 
                <ul className="list-disc pl-6">
                  <li>Standard therapy (HRZE) for 6+ months.</li>
                  <li>DOT (Directly Observed Therapy) to ensure adherence.</li>
                  <li>Drug-resistant TB needs second-line medications.</li>
                </ul>
              </li>
              <li><strong>Prevention:</strong> BCG vaccination and airborne precautions in healthcare and communities.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Managing infectious diseases like dengue, malaria, and TB requires timely diagnosis, proper treatment, and public health interventions. Prevention and education are essential in minimizing their impact and spread within communities.
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

export default ManagementInfections;