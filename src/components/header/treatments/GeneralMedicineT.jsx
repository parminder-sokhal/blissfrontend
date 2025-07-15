import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/GMedicine.jpeg", // Replace with actual image path
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

const GeneralMedicineT = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          General Medicine: An In-Depth Overview
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">What is General Medicine?</h2>
            <p>
              General Medicine, or internal medicine, focuses on the prevention, diagnosis,
              and treatment of adult diseases. It encompasses a broad scope of care and plays a
              foundational role in maintaining long-term health and wellness.
            </p>

            <h2 className="font-semibold text-xl mt-4">Key Components of General Medicine</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Preventive Care</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Health screenings for blood pressure, cholesterol, diabetes, cancer, etc.</li>
                  <li>Vaccinations (flu shots, hepatitis, etc.).</li>
                  <li>Lifestyle counseling (diet, exercise, smoking cessation).</li>
                </ul>
              </li>
              <li>
                <strong>Chronic Disease Management</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Diabetes care and blood sugar monitoring.</li>
                  <li>Hypertension treatment and lifestyle modifications.</li>
                  <li>Asthma and COPD control using medications and education.</li>
                  <li>Thyroid disorder management.</li>
                </ul>
              </li>
              <li>
                <strong>Acute Care</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Treatment of infections, injuries, allergic reactions.</li>
                  <li>Emergency interventions for strokes, heart attacks, etc.</li>
                  <li>Management of poisoning and drug overdose.</li>
                </ul>
              </li>
              <li>
                <strong>Health Assessments</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Comprehensive health evaluations and routine check-ups.</li>
                  <li>Non-invasive diagnostics like ECG, chest X-ray, echocardiography.</li>
                </ul>
              </li>
              <li>
                <strong>Supportive Treatments</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IV fluids and electrolyte balance.</li>
                  <li>Blood transfusions when necessary.</li>
                  <li>Antibiotic therapy for bacterial infections.</li>
                </ul>
              </li>
              <li>
                <strong>Infectious Disease Management</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Dengue, malaria, tuberculosis (TB), and more.</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why General Medicine Matters</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Whole-Person Focus:</strong> General Medicine considers physical, emotional, and social factors.</li>
              <li><strong>Continuity of Care:</strong> Your general physician coordinates with specialists when needed.</li>
              <li><strong>Empowered Patients:</strong> Education and engagement help patients take control of their health.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Medical Team in General Medicine</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Internists:</strong> Experts in diagnosing and treating adult illnesses.</li>
              <li><strong>Family Physicians:</strong> Provide long-term care for families and individuals.</li>
              <li><strong>Nurses:</strong> Deliver critical care, education, and support.</li>
              <li><strong>Allied Health Staff:</strong> Dietitians, pharmacists, physiotherapists, and more.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Benefits of Choosing General Medicine</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personalized Care:</strong> Tailored to each patient’s history and lifestyle.</li>
              <li><strong>Convenience:</strong> A wide range of services in one location.</li>
              <li><strong>Trust and Accessibility:</strong> Your go-to source for health advice and intervention.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              General Medicine serves as the cornerstone of adult healthcare. With a strong emphasis on
              prevention, chronic condition management, and whole-patient care, it empowers individuals to lead healthier,
              more informed lives.
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

export default GeneralMedicineT;
