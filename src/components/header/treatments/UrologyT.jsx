import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/Urology.jpeg", // Replace with the actual image path
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

const UrologyT = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Urology Department
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Understanding Urology</h2>
            <p>
              <strong>Urology</strong> is a specialized branch of medicine that focuses on
              the diagnosis, treatment, and management of disorders related to the urinary
              system and male reproductive organs. Urologists treat both men and women,
              making the field crucial to comprehensive health care.
            </p>

            <h2 className="font-semibold text-xl mt-4">What Urologists Do</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Kidney Disorders:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Kidney Stones:</strong> Managed with diet, medication, or surgery.</li>
                  <li><strong>Chronic Kidney Disease:</strong> Monitored and treated to slow progression.</li>
                </ul>
              </li>
              <li>
                <strong>Bladder Health:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Urinary Incontinence:</strong> Managed with exercises, meds, or surgery.</li>
                  <li><strong>Bladder Infections:</strong> Treatment for UTIs and chronic bladder issues.</li>
                </ul>
              </li>
              <li>
                <strong>Prostate Issues:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Benign Prostatic Hyperplasia (BPH):</strong> Treated with medications or procedures.</li>
                  <li><strong>Prostate Cancer:</strong> Diagnosed early and treated with surgery or radiation.</li>
                </ul>
              </li>
              <li>
                <strong>Male Reproductive Health:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Erectile Dysfunction:</strong> Diagnosed and treated with various methods.</li>
                  <li><strong>Infertility:</strong> Evaluated and managed with targeted therapies.</li>
                </ul>
              </li>
              <li>
                <strong>Pediatric Urology:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Treatment for congenital and acquired urological issues in children.</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Advanced Techniques and Technologies</h2>
            <p>
              Urology has embraced modern techniques such as laparoscopic and robotic-assisted surgeries,
              offering patients faster recovery and less postoperative pain. Imaging tools like ultrasound,
              CT scans, and cystoscopy are vital for accurate diagnoses.
            </p>

            <h2 className="font-semibold text-xl mt-4">Importance of Regular Check-ups</h2>
            <p>
              Regular urology visits help detect problems early. Men should begin prostate screenings by age 50,
              or earlier if there's a family history. Women should also seek urological care for issues like
              urinary incontinence or recurring UTIs.
            </p>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Urologists play a key role in maintaining urinary and reproductive health. If you're experiencing
              symptoms like pain, urinary changes, or reproductive concerns, consult a urologist for professional
              care. Your well-being is our priority.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Urology
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

export default UrologyT;