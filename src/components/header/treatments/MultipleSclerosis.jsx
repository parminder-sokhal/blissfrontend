import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with a more relevant image if available
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

const MultipleSclerosis = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Multiple Sclerosis Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Multiple Sclerosis (MS)</strong> is a chronic, often unpredictable neurological condition in which the immune system mistakenly attacks the protective covering (myelin) of nerve fibers in the central nervous system (brain and spinal cord). This results in communication problems between the brain and the rest of the body, leading to a wide range of symptoms.
            </p>
            <p>
              Our multidisciplinary team offers personalized, state-of-the-art care to manage MS effectively, aiming to reduce symptoms, slow disease progression, and enhance quality of life.
            </p>

            <h2 className="text-xl font-semibold mt-4">Key Aspects of MS Management</h2>

            <h3 className="text-lg font-semibold mt-4">1. Diagnostic Evaluation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Neurological Examination:</strong> To assess motor, sensory, coordination, and cognitive functions.</li>
              <li><strong>Imaging:</strong> MRI scans to detect demyelinating plaques.</li>
              <li><strong>Laboratory Tests:</strong> Analyses including cerebrospinal fluid (CSF) studies to support diagnosis.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">2. Disease-Modifying Therapies (DMTs)</h3>
            <p>
              These medications are designed to modify the course of MS by reducing relapse rates and delaying disability progression. Commonly used DMTs include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Injectable medications:</strong> Interferon beta-1a, Interferon beta-1b, Glatiramer acetate.</li>
              <li><strong>Oral agents:</strong> Fingolimod, Dimethyl fumarate, Teriflunomide, Siponimod.</li>
              <li><strong>Infusion therapies:</strong> Natalizumab, Ocrelizumab, Alemtuzumab.</li>
            </ul>
            <p>
              The choice of DMT depends on disease activity, side effect profiles, and patient preferences.
            </p>

            <h3 className="text-lg font-semibold mt-4">3. Symptom Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fatigue:</strong> Energy conservation techniques and medications like amantadine.</li>
              <li><strong>Muscle Spasticity:</strong> Physical therapy, stretching, and medications such as baclofen or tizanidine.</li>
              <li><strong>Pain:</strong> Medications, nerve blocks, or other interventions.</li>
              <li><strong>Bladder and Bowel Dysfunction:</strong> Medications, lifestyle modifications.</li>
              <li><strong>Cognitive and Emotional Support:</strong> Cognitive therapy, counseling, and support groups.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">4. Relapse Treatment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Corticosteroids:</strong> High-dose intravenous or oral steroids to reduce inflammation during relapses.</li>
              <li><strong>Plasma Exchange:</strong> In severe or resistant cases.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">5. Rehabilitation and Supportive Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Physiotherapy:</strong> To improve mobility, balance, and strength.</li>
              <li><strong>Occupational Therapy:</strong> To assist with daily activities and adaptive strategies.</li>
              <li><strong>Speech Therapy:</strong> For speech and swallowing difficulties.</li>
              <li><strong>Psychological Counseling:</strong> To address emotional and mental health issues, including depression and anxiety.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">6. Lifestyle and Education</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular exercise, healthy diet, smoking cessation, and stress management.</li>
              <li>Education about disease progression and symptom management.</li>
              <li>Vaccination guidance and infection prevention.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Specialized Expertise:</strong> MS specialists who tailor treatment plans for your needs.</li>
              <li><strong>Patient-Centered Care:</strong> Holistic, supportive services that address the whole patient.</li>
              <li><strong>Comprehensive Approach:</strong> Combining DMTs, rehab, and symptom relief for optimal outcomes.</li>
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

export default MultipleSclerosis;