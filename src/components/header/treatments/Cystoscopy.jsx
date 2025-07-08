import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Cystoscopy.jpeg", // Replace with your actual image path
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

const Cystoscopy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Cystoscopy</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Cystoscopy is a medical procedure used to examine the bladder and urethra using a thin, flexible tube called a cystoscope. This procedure allows healthcare providers to diagnose and treat various conditions affecting the urinary tract.
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Indications for Cystoscopy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Diagnosis of Urinary Tract Disorders:</strong> Investigation of blood in urine, frequent or painful urination.</li>
              <li><strong>Detection of Bladder Conditions:</strong> Identify stones, tumors, or inflammation.</li>
              <li><strong>Assessment of Urethral Issues:</strong> Evaluate strictures or abnormalities.</li>
              <li><strong>Biopsy:</strong> Obtain tissue samples for analysis.</li>
              <li><strong>Treatment Procedures:</strong> Remove stones, tumors, or foreign objects.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">2. Types of Cystoscopy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Flexible Cystoscopy:</strong> More comfortable, typically outpatient.</li>
              <li><strong>Rigid Cystoscopy:</strong> Used in surgical settings, may require anesthesia.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">3. Procedure Overview</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Preparation:</strong> May involve fasting and urine testing.</li>
              <li><strong>Anesthesia:</strong> Local numbing or sedation for comfort.</li>
              <li><strong>Insertion of Cystoscope:</strong> Inserted through the urethra into the bladder.</li>
              <li><strong>Examination:</strong> Saline may be used for visibility; inspection for abnormalities.</li>
              <li><strong>Completion:</strong> Cystoscope removed, short monitoring before discharge.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">4. Risks and Complications</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Infection:</strong> Possible urinary tract infection (UTI).</li>
              <li><strong>Bleeding:</strong> Mild bleeding, especially post-biopsy.</li>
              <li><strong>Perforation:</strong> Rare injury to the bladder or urethra.</li>
              <li><strong>Discomfort:</strong> Mild pain or burning during urination after procedure.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">5. Aftercare</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Hydration:</strong> Drink fluids to flush the urinary tract.</li>
              <li><strong>Monitoring Symptoms:</strong> Watch for signs of infection or heavy bleeding.</li>
              <li><strong>Follow-up:</strong> Necessary to discuss results and next steps.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              Cystoscopy is a safe and effective method for diagnosing and treating urinary tract conditions. If recommended by your healthcare provider, it’s important to follow pre- and post-procedure instructions and communicate any concerns you may have.
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

export default Cystoscopy;