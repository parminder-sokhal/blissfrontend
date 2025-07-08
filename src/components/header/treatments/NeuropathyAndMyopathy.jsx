import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/NeuropathyAndMyopathy.jpeg", // Replace with appropriate image
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

const NeuropathyAndMyopathy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Neuropathy and Myopathy Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Neuropathy and myopathy are neurological and muscular disorders, respectively, that can cause weakness, pain, numbness, and functional impairment. Our specialized team offers personalized evaluation and treatment strategies to manage these conditions effectively, aiming to improve quality of life and functional independence.
            </p>

            <h2 className="text-xl font-semibold mt-4">Understanding Neuropathy and Myopathy</h2>

            <h3 className="text-lg font-semibold mt-4">Neuropathy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Numbness, tingling, or burning sensations</li>
              <li>Weakness in extremities</li>
              <li>Loss of coordination</li>
              <li>Pain that may be sharp, stabbing, or aching</li>
            </ul>
            <p><strong>Common causes:</strong> Diabetes, nerve compression, autoimmune diseases, infections, toxins, nutritional deficiencies, and hereditary factors.</p>

            <h3 className="text-lg font-semibold mt-4">Myopathy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Muscle weakness</li>
              <li>Fatigue</li>
              <li>Muscle cramps</li>
              <li>Sometimes swelling or tenderness</li>
            </ul>
            <p><strong>Common causes:</strong> Inflammatory, metabolic, genetic, drug-induced, or endocrine disorders.</p>

            <h2 className="text-xl font-semibold mt-4">Our Approach to Treatment</h2>

            <h3 className="text-lg font-semibold mt-4">1. Accurate Diagnosis</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clinical history and neurological exam</li>
              <li>Nerve conduction studies (NCS) and EMG</li>
              <li>Blood tests for metabolic, autoimmune, or infectious causes</li>
              <li>Muscle or nerve biopsy in select cases</li>
              <li>Imaging studies if needed</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">2. Addressing Underlying Causes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Diabetes Control:</strong> Tight glucose management</li>
              <li><strong>Autoimmune Conditions:</strong> Immunosuppressants or steroids</li>
              <li><strong>Nutritional Deficiencies:</strong> Supplementation (B12, folate, etc.)</li>
              <li><strong>Toxin/Drug Management:</strong> Adjusting or stopping harmful agents</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">3. Pharmacological Management</h3>

            <h4 className="font-semibold">For Neuropathy:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gabapentin, pregabalin, amitriptyline, duloxetine</li>
              <li>Anticonvulsants and antidepressants for nerve pain</li>
              <li>Topicals like lidocaine patches or capsaicin</li>
            </ul>

            <h4 className="font-semibold">For Myopathy:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Steroids or immunosuppressants for inflammatory types</li>
              <li>Metabolic treatments and supportive care</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">4. Physical and Occupational Therapy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strength training to preserve muscle function</li>
              <li>Balance and gait improvement</li>
              <li>Adaptive tools to aid mobility</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">5. Supportive Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pain management strategies</li>
              <li>Braces, orthotics, or compression devices</li>
              <li>Diet, exercise, and lifestyle changes</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">6. Regular Monitoring</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Follow-ups for therapy effectiveness</li>
              <li>Adjusting medications as needed</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Expert Neurology Team:</strong> Experienced in neuromuscular diagnosis and management</li>
              <li><strong>Comprehensive Care:</strong> Tailored medication, therapy, and rehabilitation</li>
              <li><strong>Holistic Support:</strong> Multidisciplinary team to guide recovery and function</li>
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

export default NeuropathyAndMyopathy;