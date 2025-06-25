import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with a more relevant image if needed
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

const AntiEpilepticDrugs = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Anti-Epileptic Drugs (AEDs)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Anti-epileptic drugs (AEDs)</strong> are medications used to control and prevent seizures in individuals with epilepsy. These drugs help stabilize electrical activity in the brain, reducing the frequency and severity of seizures, and improving quality of life.
            </p>

            <h2 className="text-xl font-semibold mt-4">Understanding Epilepsy and the Role of AEDs</h2>
            <p>
              Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures resulting from abnormal electrical discharges in the brain. AEDs are the cornerstone of epilepsy management, and their selection depends on factors such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Type of seizures (focal, generalized, or mixed)</li>
              <li>Patient's age and overall health</li>
              <li>Potential side effects</li>
              <li>Interactions with other medications</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Common Types of AEDs</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Phenytoin:</strong> Used for focal and generalized seizures; requires blood level monitoring.</li>
              <li><strong>Carbamazepine:</strong> Effective for focal seizures and trigeminal neuralgia.</li>
              <li><strong>Valproate (Valproic Acid):</strong> Broad-spectrum AED suitable for various seizure types.</li>
              <li><strong>Levetiracetam:</strong> Well-tolerated, with fewer drug interactions; used for various seizures.</li>
              <li><strong>Lamotrigine:</strong> Effective and generally well-tolerated; used for focal and generalized seizures.</li>
              <li><strong>Topiramate:</strong> Used for various seizure types; also for migraine prevention.</li>
              <li><strong>Oxcarbazepine:</strong> Similar to carbamazepine, with fewer side effects.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">How AEDs Are Prescribed</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Individualized Treatment:</strong> Tailored AED selection based on patient factors.</li>
              <li><strong>Monitoring:</strong> Regular blood tests to monitor drug levels and organ function.</li>
              <li><strong>Adherence:</strong> Consistent intake is critical to prevent breakthrough seizures.</li>
              <li><strong>Adjustments:</strong> Dose modifications may be required for efficacy and tolerance.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Managing Side Effects</h2>
            <p>
              Common side effects vary depending on the medication and may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Drowsiness or fatigue</li>
              <li>Dizziness</li>
              <li>Weight changes</li>
              <li>Mood alterations</li>
              <li>Skin rashes</li>
              <li>Gastrointestinal issues</li>
            </ul>
            <p>
              Serious side effects are rare but require immediate medical attention.
            </p>

            <h2 className="text-xl font-semibold mt-4">Long-term Considerations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Duration of Therapy:</strong> Some patients may require lifelong AED use; others may taper off safely.</li>
              <li><strong>Drug Interactions:</strong> AEDs can affect and be affected by other medications—communication with your provider is key.</li>
              <li><strong>Pregnancy:</strong> Some AEDs are safer during pregnancy; planning is essential for women of childbearing age.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Specialized Care:</strong> Neurologists and epilepsy experts guiding your treatment plan.</li>
              <li><strong>Comprehensive Monitoring:</strong> Regular reviews and tests ensure effective and safe medication use.</li>
              <li><strong>Patient Education:</strong> Empowering patients to understand and manage their condition confidently.</li>
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

export default AntiEpilepticDrugs;