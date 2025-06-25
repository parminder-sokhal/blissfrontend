import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with actual path to your neuroimaging image if needed
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

const Neuroimaging = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Neuroimaging and Electrophysiological Tests
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Accurate diagnosis of neurological conditions often relies on advanced imaging and electrophysiological studies. Our center offers state-of-the-art techniques including CT scans, MRI, EEG, and EMG to help identify the underlying cause of your symptoms and guide appropriate treatment.
            </p>

            <h2 className="text-xl font-semibold mt-4">Neuroimaging Techniques</h2>

            <h3 className="text-lg font-semibold mt-4">1. Computed Tomography (CT) Brain</h3>
            <p><strong>What it is:</strong> A fast, X-ray-based imaging modality that provides detailed cross-sectional images of the brain.</p>
            <p><strong>Uses:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Detecting bleeding (hemorrhage) or traumatic injury</li>
              <li>Identifying tumors, cysts, or structural abnormalities</li>
              <li>Evaluating stroke</li>
              <li>Detecting calcifications or bone fractures</li>
            </ul>
            <p><strong>Advantages:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Quick and widely available</li>
              <li>Excellent for emergency assessment</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">2. Magnetic Resonance Imaging (MRI) Brain</h3>
            <p><strong>What it is:</strong> A highly detailed imaging technique using strong magnetic fields and radio waves to produce images of brain structures.</p>
            <p><strong>Uses:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Diagnosing multiple sclerosis (MS) plaques</li>
              <li>Detecting tumors, infections, or inflammatory conditions</li>
              <li>Evaluating vascular abnormalities and stroke</li>
              <li>Assessing degenerative brain diseases</li>
            </ul>
            <p><strong>Advantages:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Superior soft tissue contrast</li>
              <li>No ionizing radiation</li>
              <li>Can include functional MRI sequences</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Electrophysiological Tests</h2>

            <h3 className="text-lg font-semibold mt-4">3. Electroencephalogram (EEG)</h3>
            <p><strong>What it is:</strong> A non-invasive procedure that records electrical activity of the brain via electrodes placed on the scalp.</p>
            <p><strong>Uses:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Diagnosing epilepsy and seizure disorders</li>
              <li>Detecting abnormal brain activity</li>
              <li>Evaluating encephalopathies or brain death</li>
              <li>Monitoring during neurosurgical procedures</li>
            </ul>
            <p><strong>Procedure:</strong> Typically lasts 20–60 minutes and may include stimulation techniques like hyperventilation or flashing lights.</p>

            <h3 className="text-lg font-semibold mt-4">4. Electromyography (EMG) and Nerve Conduction Studies (NCS)</h3>
            <p><strong>What they are:</strong> EMG measures muscle electrical activity, while NCS evaluates how well and how fast nerves conduct signals.</p>
            <p><strong>Uses:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Diagnosing neuromuscular disorders like neuropathy and myopathy</li>
              <li>Identifying pinched nerves or nerve root compression</li>
              <li>Differentiating between muscle and nerve causes of weakness</li>
            </ul>
            <p><strong>Procedure:</strong> Involves placing electrodes on the skin and inserting small needles into muscles for brief testing. Some discomfort is expected but is generally well-tolerated.</p>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Advanced Technology:</strong> Equipped with the latest imaging and testing equipment</li>
              <li><strong>Experienced Professionals:</strong> Tests interpreted by expert neurologists and radiologists</li>
              <li><strong>Accurate Diagnosis:</strong> Enables early intervention and targeted treatment planning</li>
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

export default Neuroimaging;