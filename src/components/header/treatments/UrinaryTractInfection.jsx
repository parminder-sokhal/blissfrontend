import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/UrinaryTractInfection.jpeg", // Update the path as needed
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

const UrinaryTractInfection = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Urinary Tract Infection (UTI) Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              A <strong>Urinary Tract Infection (UTI)</strong> is an infection that can affect any part
              of the urinary system, including kidneys, ureters, bladder, and urethra. Though more common in women,
              UTIs can affect anyone. Prompt treatment is key to relief and prevention of complications.
            </p>

            <h2 className="text-xl font-semibold mt-4">Symptoms of a UTI</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Frequent urge to urinate</li>
              <li>Burning sensation during urination</li>
              <li>Cloudy or strong-smelling urine</li>
              <li>Pelvic pain or discomfort</li>
              <li>Blood in urine (hematuria)</li>
              <li>Fever (in some cases)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Treatment Options</h2>

            <h3 className="font-semibold">1. Antibiotics</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Overview:</strong> The first line of treatment is antibiotics, chosen based on
                the type of bacteria and the patient’s health.
              </li>
              <li>
                <strong>Common Antibiotics:</strong> Bactrim, Macrobid, Monurol, Ciprofloxacin.
              </li>
              <li>
                <strong>Duration:</strong> Typically 3 to 7 days depending on infection severity.
              </li>
            </ul>

            <h3 className="font-semibold">2. Pain Relief Medications</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ibuprofen or acetaminophen for pain and fever.</li>
              <li>
                <strong>Phenazopyridine:</strong> Relieves urinary burning and urgency. May cause orange/red urine.
              </li>
            </ul>

            <h3 className="font-semibold">3. Increased Fluid Intake</h3>
            <p>Staying hydrated helps flush bacteria from the urinary tract.</p>

            <h3 className="font-semibold">4. Home Remedies</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Cranberry Products:</strong> May reduce recurrence in some individuals.
              </li>
              <li>
                <strong>Probiotics:</strong> Help maintain healthy bacteria balance in the urinary tract.
              </li>
            </ul>

            <h3 className="font-semibold">5. Preventive Measures</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Taking low-dose antibiotics for recurring UTIs.</li>
              <li>Urinating after intercourse.</li>
              <li>Wiping front to back.</li>
              <li>Staying well-hydrated and limiting bladder irritants.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">When to See a Doctor</h2>
            <p>
              Always consult a healthcare provider if symptoms worsen, recur frequently, or if you're pregnant. 
              Early treatment prevents complications like kidney infections.
            </p>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              UTIs are common and highly treatable with antibiotics and supportive care. 
              If you're experiencing symptoms, don't wait—get medical advice for quick recovery and future prevention.
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

export default UrinaryTractInfection;