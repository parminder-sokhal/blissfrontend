import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/Urology.jpeg", // Replace with your actual image path if different
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

const ProstateSurgery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Prostate Surgery Options
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Prostate surgery is often recommended for men experiencing significant symptoms due to 
              prostate enlargement or prostate cancer. Two common surgical procedures are 
              <strong> Transurethral Resection of the Prostate (TURP)</strong> and 
              <strong> Laser Prostatectomy</strong>. Here’s an overview of each:
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Transurethral Resection of the Prostate (TURP)</h2>
            <p>
              <strong>TURP</strong> is a traditional surgical procedure used to treat benign prostatic hyperplasia (BPH), 
              which is the non-cancerous enlargement of the prostate gland.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>How it Works:</strong> A resectoscope is inserted through the urethra to remove excess prostate tissue 
                that is blocking urine flow.
              </li>
              <li>
                <strong>Advantages:</strong> Highly effective for relieving urinary symptoms; usually requires a short hospital stay.
              </li>
              <li>
                <strong>Considerations:</strong> Possible side effects include bleeding, infection, and retrograde ejaculation. 
                Recovery may take a few weeks.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">2. Laser Prostatectomy</h2>
            <p>
              <strong>Laser Prostatectomy</strong> uses laser energy to remove or vaporize overgrown prostate tissue. 
              Procedures include HoLEP and PVP.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>How it Works:</strong> A laser fiber is passed through the urethra and delivers energy to destroy prostate tissue.
              </li>
              <li>
                <strong>Advantages:</strong> Less bleeding, quicker recovery, shorter catheter time compared to TURP.
              </li>
              <li>
                <strong>Considerations:</strong> Not suitable for all cases. Risks may include urinary incontinence and erectile dysfunction.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              Both TURP and laser prostatectomy are effective treatments for managing prostate enlargement and urinary issues. 
              The best option depends on individual health, prostate size, and patient preference. A consultation with a urologist 
              will help determine the most appropriate approach to improve quality of life and outcomes.
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

export default ProstateSurgery;