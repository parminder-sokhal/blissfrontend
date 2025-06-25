import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/BladderCancer.jpeg", // Update to your actual image path
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

const BladderCancer = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Bladder Cancer Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Bladder cancer begins in the lining of the bladder and can range from
              non-invasive to metastatic. A comprehensive approach is necessary for
              effective diagnosis, treatment, and ongoing care.
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Diagnosis</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Symptoms:</strong> Blood in urine, frequent urination, painful urination, and lower back pain.
              </li>
              <li>
                <strong>Tests:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Urinalysis to detect cancer cells or blood.</li>
                  <li>Cystoscopy to visualize and biopsy bladder tissue.</li>
                  <li>CT, MRI, or ultrasound to assess spread.</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">2. Staging</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Non-Muscle Invasive (Stage 0–I):</strong> Confined to the bladder lining.
              </li>
              <li>
                <strong>Muscle-Invasive (Stage II–III):</strong> Invades the bladder muscle or nearby tissues.
              </li>
              <li>
                <strong>Metastatic (Stage IV):</strong> Spread to distant organs.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">3. Treatment Options</h2>
            <p className="font-semibold">Non-Muscle Invasive Bladder Cancer:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Transurethral Resection of Bladder Tumor (TURBT)</li>
              <li>Intravesical therapy with BCG or chemotherapy</li>
            </ul>

            <p className="font-semibold mt-4">Muscle-Invasive Bladder Cancer:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Radical cystectomy (removal of bladder and surrounding organs)</li>
              <li>Neoadjuvant/adjuvant chemotherapy</li>
              <li>Radiation therapy (sometimes with chemo)</li>
            </ul>

            <p className="font-semibold mt-4">Metastatic Bladder Cancer:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Systemic chemotherapy</li>
              <li>Immunotherapy (e.g., checkpoint inhibitors)</li>
              <li>Targeted therapy based on genetic markers</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">4. Follow-Up Care</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Routine cystoscopies to detect recurrence</li>
              <li>Scheduled imaging to monitor progression</li>
              <li>Supportive care including counseling and rehabilitation</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">5. Lifestyle and Support</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintain a healthy diet and regular exercise</li>
              <li>Join support groups for emotional well-being</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              Bladder cancer treatment is personalized and involves a team of specialists.
              Early detection and proper management lead to the best outcomes.
              Don’t hesitate to seek medical guidance for any symptoms or concerns.
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

export default BladderCancer;