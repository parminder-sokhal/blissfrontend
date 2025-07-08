import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/StrokeManagement.jpeg", // Replace with an actual stroke-related image if available
  sidebarLinks: [
    { title: "Stroke Management", link: "/StrokeManagement" },
    { title: "Anti-Epileptic Drugs", link: "/AntiEpilepticDrugs" },
    { title: "Multiple Sclerosis Management", link: "/MultipleSclerosis" },
    { title: "Migraine And Chronic Headache Management", link: "/MigraineChronicHeadache" },
    { title: "Parkinson’s disease treatment", link: "/ParkinsonDisease" },
    { title: "Neuropathy And Myopathy Treatment", link: "/NeuropathyAndMyopathy" },
    { title: "Neuroimaging", link: "/Neuroimaging" },
    { title: "Lumbar Puncture", link: "/LumbarPuncture" },
    { title: "Botox Therapy for Neurological Disorders", link: "/BotoxTherapy" },
  ],
};

const StrokeManagement = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Stroke Management</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              A <strong>stroke</strong> is a medical emergency that occurs when blood flow to a part of the brain is interrupted, leading to brain cell death. Prompt and effective management is crucial to minimize brain damage and improve recovery outcomes.
            </p>
            <p>
              Our dedicated stroke team provides rapid, comprehensive care—from emergency treatment to ongoing rehabilitation—to help patients regain function and lead fulfilling lives.
            </p>

            <h2 className="text-xl font-semibold mt-4">Types of Stroke We Treat</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ischemic Stroke:</strong> Caused by a blood clot blocking an artery in the brain.</li>
              <li><strong>Hemorrhagic Stroke:</strong> Caused by bleeding in the brain due to ruptured blood vessels.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Emergency and Acute Care</h2>

            <h3 className="font-semibold mt-2">Immediate Response</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Rapid assessment:</strong> Using stroke scales and neuroimaging (CT or MRI).</li>
              <li><strong>Airway and vital management:</strong> Ensuring oxygenation and stability.</li>
              <li><strong>Blood pressure control:</strong> Preventing further brain injury.</li>
            </ul>

            <h3 className="font-semibold mt-4">Thrombolysis</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>What is it?</strong> Administration of clot-dissolving drugs like tPA to restore blood flow.</li>
              <li><strong>Criteria:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Within 4.5 hours of symptom onset.</li>
                  <li>No contraindications such as recent surgery or active bleeding.</li>
                </ul>
              </li>
              <li><strong>Procedure:</strong> IV medication given after evaluation; monitored closely for complications.</li>
            </ul>

            <h3 className="font-semibold mt-4">Other Emergency Treatments</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Endovascular Therapy:</strong> Catheter-based clot removal for large vessel occlusions.</li>
              <li><strong>Supportive Care:</strong> Stabilizing glucose, vitals, and preventing aspiration pneumonia.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Post-Acute Management</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Monitoring:</strong> Frequent assessments, imaging, and vital sign checks.</li>
              <li><strong>Secondary Prevention:</strong> Managing blood pressure, diabetes, cholesterol, and lifestyle factors.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Neuro-Rehabilitation</h2>
            <p>
              Recovery after a stroke involves re-learning skills and regaining independence. Our multidisciplinary team supports patients with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Physiotherapy:</strong> To regain movement, balance, and coordination.</li>
              <li><strong>Occupational Therapy:</strong> To relearn everyday tasks like dressing or cooking.</li>
              <li><strong>Speech and Language Therapy:</strong> For difficulties with communication or swallowing.</li>
              <li><strong>Psychological Support:</strong> Mental health support post-stroke.</li>
              <li><strong>Assistive Devices:</strong> Wheelchairs, braces, or communication tools.</li>
            </ul>

            <h3 className="font-semibold mt-4">Goals of Rehabilitation</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maximize recovery and independence.</li>
              <li>Prevent complications like pressure sores or contractures.</li>
              <li>Support reintegration into family and society.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Expert Team:</strong> Stroke specialists available 24/7.</li>
              <li><strong>Advanced Interventions:</strong> tPA, thrombectomy, and imaging within minutes.</li>
              <li><strong>Holistic Recovery Plan:</strong> Emphasis on early rehab, mental health, and long-term care.</li>
            </ul>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Neurology</h2>
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

export default StrokeManagement;