import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with actual path
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

const ReconstructiveUrological = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Reconstructive Urological Surgery
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Reconstructive urological surgery</strong> involves surgical procedures aimed at restoring the normal function and anatomy of the urinary tract and reproductive system. This type of surgery can address a variety of conditions resulting from congenital abnormalities, trauma, cancer, or other medical issues.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Indications for Reconstructive Urological Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Congenital Anomalies:</strong> Hypospadias, bladder exstrophy, etc.</li>
              <li><strong>Trauma:</strong> Injuries from accidents or surgical complications.</li>
              <li><strong>Cancer:</strong> Reconstruction after bladder, prostate, or kidney tumor removal.</li>
              <li><strong>Strictures:</strong> Urethral narrowing from scarring or inflammation.</li>
              <li><strong>Urinary Incontinence:</strong> Surgeries to restore bladder control.</li>
              <li><strong>Pelvic Organ Prolapse:</strong> Surgical correction of pelvic floor dysfunction.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Types of Reconstructive Urological Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Urethroplasty:</strong> Repairs to the urethra for strictures or injuries.</li>
              <li><strong>Cystoplasty:</strong> Bladder reconstruction, including neobladder creation.</li>
              <li><strong>Nephrectomy with Reconstruction:</strong> Urinary tract repair post-kidney removal.</li>
              <li><strong>Penile Reconstruction:</strong> Repairs due to trauma, congenital defects, or prior surgeries.</li>
              <li><strong>Vesicovaginal Fistula Repair:</strong> Fixes abnormal connections between bladder and vagina.</li>
              <li><strong>Artificial Urinary Sphincter (AUS):</strong> Helps control male incontinence.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Surgical Techniques</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Open Surgery:</strong> Traditional method with larger incisions.</li>
              <li><strong>Laparoscopic Surgery:</strong> Minimally invasive with quicker recovery.</li>
              <li><strong>Robotic-Assisted Surgery:</strong> High-precision technique for complex procedures.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">4. Risks and Complications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Infection:</strong> Risk of urinary tract or surgical site infection.</li>
              <li><strong>Bleeding:</strong> During or after surgery.</li>
              <li><strong>Urinary Leakage:</strong> From surgical areas.</li>
              <li><strong>Nerve Damage:</strong> Potential issues with sexual function or sensation.</li>
              <li><strong>Recurrence:</strong> Original symptoms might reappear.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">5. Recovery and Follow-Up</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Postoperative Care:</strong> Includes catheter use for healing.</li>
              <li><strong>Follow-Up Appointments:</strong> To monitor recovery and address concerns.</li>
              <li><strong>Rehabilitation:</strong> May include pelvic floor therapy or physical rehabilitation.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Reconstructive urological surgery plays a crucial role in restoring urinary and reproductive health. It requires careful evaluation and an experienced urologist to determine the best approach and ensure optimal recovery and results.
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

export default ReconstructiveUrological;