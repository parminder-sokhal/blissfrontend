import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/Urology.jpeg", // Replace with your actual image path
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

const KidneyStoneTreatment = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Kidney Stone Treatment Options
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Kidney stones are hard deposits made of minerals and salts that form inside the kidneys. 
              They can cause severe pain and discomfort, and various treatment options are available 
              depending on the size, type, and location of the stones. Here are three common treatment methods:
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Lithotripsy</h2>
            <p>
              <strong>Lithotripsy</strong> is a non-invasive procedure used to break down kidney stones into 
              smaller pieces, making them easier to pass through the urinary tract.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>How it Works:</strong> The most common type is <em>Extracorporeal Shock Wave Lithotripsy (ESWL)</em>, 
                which uses shock waves generated outside the body to target and fragment the stones.
              </li>
              <li><strong>Advantages:</strong> Non-invasive, minimal recovery time, usually outpatient-based.</li>
              <li><strong>Considerations:</strong> Not suitable for very large stones or certain stone locations.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">2. Ureteroscopy</h2>
            <p>
              <strong>Ureteroscopy</strong> involves the use of a thin, flexible tube called a ureteroscope, which is 
              inserted through the urethra and bladder to reach the ureter or kidney.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>How it Works:</strong> The urologist can visualize and remove or break the stone using laser energy.
              </li>
              <li><strong>Advantages:</strong> Ideal for ureter or lower kidney stones. Direct and precise.</li>
              <li><strong>Considerations:</strong> May require general anesthesia. Some post-procedure discomfort.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">3. Percutaneous Nephrolithotomy (PCNL)</h2>
            <p>
              <strong>PCNL</strong> is a minimally invasive surgical procedure used for large kidney stones.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>How it Works:</strong> A small incision is made in the back, and a nephroscope is used 
                to access and remove the stone directly.
              </li>
              <li><strong>Advantages:</strong> Ideal for large or multiple stones. One-time complete removal.</li>
              <li><strong>Considerations:</strong> Requires anesthesia and hospitalization. Risk of bleeding or infection.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              Choosing the right treatment for kidney stones depends on factors like size, location, and patient health. 
              Consulting with a urologist ensures the most appropriate, effective, and safe method is selected. 
              Early diagnosis and treatment can reduce pain and prevent complications.
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

export default KidneyStoneTreatment;