import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/NeurologyT.jpeg", // Replace if needed
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

const NeurologyT = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Neurology</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Neurology</strong> is a specialized branch of medicine that deals with the diagnosis, treatment, and management of disorders of the nervous system. This intricate network includes the brain, spinal cord, peripheral nerves, and muscles.
            </p>
            <p>
              Our neurology department offers comprehensive, compassionate care for a broad spectrum of neurological diseases, using the latest diagnostic tools and therapeutic approaches to help patients regain function and improve their quality of life.
            </p>

            <h2 className="text-xl font-semibold mt-4">Our Neurology Services</h2>

            <h3 className="font-semibold mt-2">Conditions We Expertly Manage</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Stroke (Ischemic & Hemorrhagic):</strong> Emergency treatment, rehabilitation, and prevention strategies.</li>
              <li><strong>Epilepsy and Seizure Disorders:</strong> Diagnosis with EEG/imaging, personalized treatment plans.</li>
              <li><strong>Peripheral Nerve Disorders:</strong> Carpal tunnel, neuropathies, managed through therapy or surgery.</li>
              <li><strong>Multiple Sclerosis (MS):</strong> Tailored therapies and ongoing support.</li>
              <li><strong>Parkinson’s Disease:</strong> Medication, physiotherapy, and counseling support.</li>
              <li><strong>Migraine and Headache Disorders:</strong> Medication and lifestyle-based comprehensive care.</li>
              <li><strong>Dementia and Alzheimer’s Disease:</strong> Diagnosis, cognitive care, and caregiver support.</li>
              <li><strong>Muscle Diseases:</strong> Myasthenia gravis, muscular dystrophies—diagnosis and long-term care.</li>
              <li><strong>Neuroinfectious Diseases:</strong> Meningitis, encephalitis—urgent and thorough management.</li>
              <li><strong>Neurovascular Disorders:</strong> Including aneurysms and vascular malformations.</li>
            </ul>

            <h3 className="font-semibold mt-4">Advanced Diagnostic Tools</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Clinical Examination:</strong> Detailed neurological assessments to identify issues.</li>
              <li><strong>Imaging Studies:</strong> MRI, CT, MR angiography for brain and spine evaluation.</li>
              <li><strong>Electrophysiological Tests:</strong> EEG, EMG, and NCV for nerves and muscles.</li>
              <li><strong>Laboratory Tests:</strong> Blood and CSF analysis for infections or immune causes.</li>
            </ul>

            <h3 className="font-semibold mt-4">Treatment & Rehabilitation</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Medications:</strong> For epilepsy, Parkinson’s, MS, and more.</li>
              <li><strong>Lifestyle and Supportive Measures:</strong> Counseling, therapy, and assistive devices.</li>
              <li><strong>Interventional Procedures:</strong> Deep brain stimulation, Botox for migraines, neurostimulation.</li>
              <li><strong>Psychological Support:</strong> Mental health care for chronic conditions.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Our Approach</h2>
            <p>
              We emphasize a multidisciplinary approach combining neurology expertise, advanced diagnostics, and personalized care. Early diagnosis, patient education, and integrated rehabilitation are core to our treatment model.
            </p>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Board-certified neurologists with subspecialty expertise.</li>
              <li>State-of-the-art diagnostic and therapeutic technologies.</li>
              <li>Compassionate, holistic care focused on restoring quality of life.</li>
              <li>Collaborative rehabilitation and long-term management plans.</li>
            </ul>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Neurology
            </h2>
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

export default NeurologyT;