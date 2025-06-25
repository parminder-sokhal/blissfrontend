import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/MigraineChronicHeadache.jpeg", // Replace with a more relevant image if needed
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

const MigraineChronicHeadache = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Migraine and Chronic Headache Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Headaches are a common neurological problem, but migraines and chronic headaches can be debilitating and significantly impact daily life. At our center, we provide specialized care for the diagnosis and treatment of migraines and various types of chronic headaches, aiming to reduce frequency, severity, and improve your quality of life.
            </p>

            <h2 className="text-xl font-semibold mt-4">Understanding Migraine and Chronic Headaches</h2>

            <h3 className="text-lg font-semibold mt-4">What is a Migraine?</h3>
            <p>
              A migraine is a neurological condition characterized by intense, throbbing headaches often accompanied by symptoms such as nausea, vomiting, visual disturbances (aura), and sensitivity to light or sound. Migraines may last from a few hours to several days and can be triggered by various factors like stress, certain foods, hormonal changes, or environmental stimuli.
            </p>

            <h3 className="text-lg font-semibold mt-4">Types of Chronic Headaches</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Migraine:</strong> Episodic or chronic, with or without aura.</li>
              <li><strong>Tension Headache:</strong> Mild to moderate pain often described as a tight band around the head.</li>
              <li><strong>Cluster Headache:</strong> Severe, unilateral headaches occurring in cyclical clusters.</li>
              <li><strong>Others:</strong> Sinus headaches, medication-overuse headaches, and secondary headaches related to other medical conditions.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Our Approach to Management</h2>

            <h3 className="text-lg font-semibold mt-4">1. Accurate Diagnosis</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detailed history taking to identify headache patterns, triggers, and associated symptoms.</li>
              <li>Neurological examination.</li>
              <li>Diagnostic tests like MRI or CT scans if necessary to rule out other causes.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">2. Lifestyle and Trigger Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identifying and avoiding personal triggers such as certain foods, stress, sleep disturbances, or hormonal fluctuations.</li>
              <li>Maintaining regular sleep, diet, and hydration routines.</li>
              <li>Stress management techniques including relaxation, meditation, and physical activity.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">3. Pharmacological Treatment</h3>
            <p>Our goal is to tailor medication strategies to each patient's specific type and severity of headache:</p>

            <h4 className="font-semibold">Acute (Abortive) Medications</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pain relievers such as NSAIDs (ibuprofen, naproxen).</li>
              <li>Triptans (sumatriptan, rizatriptan): Specific to migraines, helping to alleviate pain if taken early.</li>
              <li>Anti-nausea medications.</li>
            </ul>

            <h4 className="font-semibold">Preventive (Prophylactic) Medications</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Beta-blockers (propranolol).</li>
              <li>Antidepressants (amitriptyline).</li>
              <li>Anticonvulsants (topiramate, valproate).</li>
              <li>Botox injections for chronic migraines.</li>
              <li>Calcium channel blockers or other emerging therapies.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">4. Advanced Modalities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Botox:</strong> Approved for chronic migraine prevention.</li>
              <li><strong>Neuromodulation Devices:</strong> Non-invasive devices that modulate nerve activity to reduce headache frequency.</li>
              <li><strong>Acupuncture and other complementary therapies:</strong> Used alongside conventional treatments with promising results.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">5. Patient Education and Support</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educating about migraine management and lifestyle modifications.</li>
              <li>Headache diaries to identify triggers and evaluate treatment effectiveness.</li>
              <li>Cognitive-behavioral therapy (CBT) for managing stress and reducing headache frequency.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Expert Specialists:</strong> Experienced in treating all types of headaches.</li>
              <li><strong>Individualized Treatment:</strong> Customized plans for each patient’s condition and lifestyle.</li>
              <li><strong>Comprehensive Care:</strong> Integrating medical, psychological, and alternative therapies for optimal relief.</li>
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

export default MigraineChronicHeadache;