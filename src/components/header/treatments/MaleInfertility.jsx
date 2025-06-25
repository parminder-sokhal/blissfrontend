import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/MaleInfertility.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: "Kidney Stone Treatment", link: "/KidneyStoneTreatment" },
    { title: "Prostate Surgery", link: "/ProstateSurgery" },
    { title: "Urinary Tract Infection Treatment", link: "/UrinaryTractInfection" },
    { title: "Bladder Cancer Management", link: "/BladderCancer" },
    { title: "Male Infertility Treatment", link: "/MaleInfertility" },
    { title: "Erectile Dysfunction Management", link: "/ErectileDysfunction" },
    { title: "Cystoscopy", link: "/Cystoscopy" },
    { title: "Vasectomy And Vasectomy Reversal", link: "/Vasectomy" },
    { title: "Reconstructive Urological Surgery", link: "/ReconstructiveUrological" },
  ],
};

const MaleInfertility = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Male Infertility Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Male infertility refers to the inability to contribute to conception due to issues with sperm production, function, or delivery. Proper diagnosis and treatment are essential in addressing infertility concerns.
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Diagnosis</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Medical History:</strong> Review of past health, lifestyle, and family history.</li>
              <li><strong>Physical Examination:</strong> To check for anatomical concerns.</li>
              <li><strong>Semen Analysis:</strong> Evaluating sperm count, motility, and morphology.</li>
              <li><strong>Hormonal Testing:</strong> Assessment of testosterone and related hormones.</li>
              <li><strong>Genetic Testing:</strong> Identifying inherited conditions affecting fertility.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">2. Treatment Options</h2>

            <p className="font-semibold">Lifestyle Changes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Healthy diet and regular exercise</li>
              <li>Avoiding environmental toxins</li>
              <li>Reducing alcohol and quitting smoking</li>
              <li>Stress management techniques</li>
            </ul>

            <p className="font-semibold mt-4">Medications:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hormonal therapy to correct imbalances</li>
              <li>Antibiotics for infections</li>
              <li>Anti-inflammatory drugs for specific conditions like varicocele</li>
            </ul>

            <p className="font-semibold mt-4">Surgical Interventions:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Varicocele repair</li>
              <li>Vasectomy reversal</li>
              <li>Sperm retrieval techniques (TESE, PESA)</li>
            </ul>

            <p className="font-semibold mt-4">Assisted Reproductive Technologies (ART):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Intrauterine Insemination (IUI):</strong> Sperm is inserted into the uterus at ovulation.</li>
              <li><strong>In Vitro Fertilization (IVF):</strong> Eggs are fertilized with sperm in a lab.</li>
              <li><strong>Intracytoplasmic Sperm Injection (ICSI):</strong> A single sperm is injected into an egg.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">3. Psychological Support</h2>
            <p>
              Infertility can cause emotional stress. Counseling and support groups can help couples navigate the mental and emotional aspects of treatment.
            </p>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              Male infertility is treatable in many cases with proper medical care, lifestyle improvements, and assisted reproductive techniques. Seeking early evaluation and support is key to achieving a successful outcome.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Urology Services
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

export default MaleInfertility;