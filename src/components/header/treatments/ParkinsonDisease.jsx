import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/ParkinsonDisease.jpeg", // You can update this with a Parkinson's-specific image
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

const ParkinsonDisease = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Parkinson’s Disease Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Parkinson’s disease (PD) is a progressive neurodegenerative disorder characterized primarily by motor symptoms such as tremors, rigidity, bradykinesia (slowness of movement), and postural instability. It can also involve non-motor symptoms like depression, sleep disturbances, and cognitive impairment. Our comprehensive approach aims to improve quality of life through early diagnosis, personalized treatment plans, and ongoing support.
            </p>

            <h2 className="text-xl font-semibold mt-4">Our Approach to Parkinson’s Disease Management</h2>

            <h3 className="text-lg font-semibold mt-4">1. Accurate Diagnosis</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detailed clinical evaluation of motor and non-motor symptoms.</li>
              <li>Neurological examination.</li>
              <li>Supportive investigations such as DaT scans or neuroimaging, if necessary, to confirm diagnosis and assess disease severity.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">2. Pharmacological Therapy</h3>
            <p>Medications are the cornerstone of PD treatment, aimed at replenishing dopamine or mimicking its effects:</p>

            <h4 className="font-semibold">Levodopa/Carbidopa:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>The most effective medication for symptom control.</li>
              <li>Converts to dopamine in the brain, alleviating motor symptoms.</li>
              <li>Often combined with carbidopa to reduce side effects.</li>
            </ul>

            <h4 className="font-semibold">Dopamine Agonists:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Examples: pramipexole, ropinirole, rotigotine.</li>
              <li>Mimic dopamine effects, used alone in early stages or with Levodopa later.</li>
            </ul>

            <h4 className="font-semibold">MAO-B Inhibitors:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Examples: selegiline and rasagiline.</li>
              <li>Help increase dopamine and may delay progression.</li>
            </ul>

            <h4 className="font-semibold">COMT Inhibitors:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Examples: entacapone, tolcapone.</li>
              <li>Extend Levodopa's effectiveness by slowing its breakdown.</li>
            </ul>

            <h4 className="font-semibold">Other Medications:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anticholinergics for tremor control.</li>
              <li>Amantadine for dyskinesia and motor fluctuations.</li>
              <li>Drugs to manage depression, hallucinations, and sleep issues.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">3. Surgical and Advanced Therapies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Deep Brain Stimulation (DBS):</strong> Electrodes are implanted in specific brain areas to reduce motor symptoms and medication needs.</li>
              <li><strong>Medication Pump Systems:</strong> Continuous infusion of Levodopa or Apomorphine for advanced cases.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">4. Physical and Occupational Therapy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Physiotherapy:</strong> Enhances gait, strength, and balance.</li>
              <li><strong>Occupational Therapy:</strong> Helps maintain independence in daily tasks.</li>
              <li><strong>Speech Therapy:</strong> Supports speech and swallowing functions.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">5. Supportive and Rehabilitative Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Exercise Programs:</strong> Promote mobility and general health.</li>
              <li><strong>Psychological Support:</strong> For managing emotional health and coping strategies.</li>
              <li><strong>Nutritional Counseling:</strong> To support health and medication effectiveness.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">6. Ongoing Monitoring and Personalized Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Routine check-ins to adjust therapies as needed.</li>
              <li>Monitoring for medication side effects and disease progression.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Expert Movement Disorder Specialists:</strong> Highly trained team focused on Parkinson’s care.</li>
              <li><strong>Multidisciplinary Approach:</strong> Integrating neurology, rehabilitation, and psychological support.</li>
              <li><strong>Advanced Treatment Options:</strong> From medication to surgery and holistic therapies.</li>
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

export default ParkinsonDisease;