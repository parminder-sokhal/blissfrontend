import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path if needed
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

const LumbarPuncture = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Lumbar Puncture (Spinal Tap)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              A lumbar puncture, also known as a spinal tap, is a minimally invasive diagnostic procedure used to collect cerebrospinal fluid (CSF) from the lower back. This test provides vital information about the health of your central nervous system and helps diagnose various neurological conditions.
            </p>

            <h2 className="text-xl font-semibold mt-4">What is a Lumbar Puncture?</h2>
            <p>
              A lumbar puncture involves inserting a thin, hollow needle into the lumbar region (lower part of the spine) to withdraw CSF, which surrounds the brain and spinal cord. The procedure is performed under sterile conditions and local anesthesia.
            </p>

            <h2 className="text-xl font-semibold mt-4">Why is a Lumbar Puncture Performed?</h2>
            <p>It is used to evaluate and diagnose conditions such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Multiple sclerosis (MS) — detecting oligoclonal bands or immunoglobulins in CSF.</li>
              <li>Meningitis — identifying infectious causes like bacterial, viral, or fungal infections.</li>
              <li>Subarachnoid hemorrhage — detecting blood in CSF.</li>
              <li>Encephalitis and other inflammatory or autoimmune disorders.</li>
              <li>Elevated intracranial pressure.</li>
              <li>Certain cancers affecting the central nervous system.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">The Procedure</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You will lie on your side with knees drawn up or sit upright with a rounded back.</li>
              <li>The skin over the puncture site is cleaned and numbed with local anesthesia.</li>
              <li>A thin needle is carefully inserted into the lumbar subarachnoid space.</li>
              <li>CSF is collected into sterile tubes for analysis.</li>
              <li>The procedure typically takes 30–45 minutes.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Post-Procedure Care</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Rest for a short period to reduce headache risk.</li>
              <li>Hydration is encouraged.</li>
              <li>You may experience mild headache, which usually resolves with rest and fluids.</li>
              <li>Rarely, complications such as headache, bleeding, or infection may occur; serious adverse events are very uncommon.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Experienced Team:</strong> Our neurologists and staff perform lumbar punctures with precision and care.</li>
              <li><strong>Safe Environment:</strong> Procedures are done under sterile conditions with a focus on minimizing discomfort.</li>
              <li><strong>Comprehensive Diagnosis:</strong> CSF analysis helps guide targeted treatment for optimal outcomes.</li>
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

export default LumbarPuncture;