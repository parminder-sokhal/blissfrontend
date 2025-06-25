import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/ColonAndRectalSurgery.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "Appendectomy", link: "/Appendectomy" },
    { title: "Hernia Repair", link: "/HerniaRepair" },
    { title: "Gallbladder Surgery", link: "/GallbladderSurgery" },
    { title: "Thyroid Surgery", link: "/ThyroidSurgery" },
    { title: "Breast Surgery", link: "/BreastSurgery" },
    { title: "Haemorrhoidectomy", link: "/Haemorrhoidectomy" },
    { title: "Colon and Rectal surgery", link: "/ColonAndRectalSurgery" },
    { title: "Trauma Surgery", link: "/TraumaSurgery" },
    { title: "Wound care and abscess drainage", link: "/WoundCareDrainage" },
  ],
};

const ColonAndRectalSurgery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Colon and Rectal Surgery
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Colon and rectal surgery</strong> involves the diagnosis and treatment
              of a wide range of conditions affecting the colon (large intestine),
              rectum, and anus. Our skilled surgical team utilizes state-of-the-art
              techniques to provide personalized care and optimal outcomes.
            </p>

            <h2 className="font-semibold text-xl mt-4">Conditions Treated</h2>
            <p>We treat both benign and malignant disorders, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Colorectal cancer:</strong> Tumor removal in colon/rectum.</li>
              <li><strong>Diverticulitis:</strong> Infected or inflamed colon pouches.</li>
              <li><strong>IBD (Crohn’s, Ulcerative Colitis):</strong> Surgical intervention when necessary.</li>
              <li><strong>Hemorrhoids & fissures:</strong> Advanced treatment for complex cases.</li>
              <li><strong>Rectal prolapse:</strong> Surgical correction of protruding rectum.</li>
              <li><strong>Diverticulosis:</strong> Management of non-inflamed diverticula.</li>
              <li><strong>Congenital anomalies:</strong> Including Hirschsprung’s disease.</li>
              <li><strong>Obstructions/strictures:</strong> Due to scar tissue or tumors.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Our Surgical Approach</h2>
            <h3 className="font-semibold mt-2">Minimally Invasive Surgery</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Laparoscopy:</strong> Small incisions, camera guidance, faster healing.
              </li>
              <li>
                <strong>Robotic surgery:</strong> Greater precision and less trauma for complex cases.
              </li>
              <li>
                These methods offer reduced pain, smaller scars, and shorter hospital stays.
              </li>
            </ul>

            <h3 className="font-semibold mt-4">Open Surgery</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Required for extensive disease or when less invasive methods are not possible.
              </li>
              <li>
                Offers direct visualization and access to affected tissues.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Common Procedures</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Hemicolectomy:</strong> Partial removal of colon.</li>
              <li><strong>Low anterior resection:</strong> For rectal cancer with sphincter preservation.</li>
              <li><strong>Abdominoperineal resection:</strong> Full rectum/anus removal with colostomy.</li>
              <li><strong>Colostomy/Ileostomy:</strong> External stoma for waste diversion.</li>
              <li><strong>Polyp removal:</strong> Endoscopic or surgical excision of growths.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">What to Expect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Preoperative:</strong> Imaging, bowel prep, labs, colonoscopy.
              </li>
              <li>
                <strong>During Surgery:</strong> Precision tissue resection under anesthesia.
              </li>
              <li>
                <strong>Postoperative:</strong> Pain control, early mobilization, wound care.
              </li>
              <li>
                <strong>Recovery:</strong> Hospital stay and gradual return to normal activity.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <p>
              We provide expert colorectal care with minimally invasive options to reduce pain and speed recovery. From initial diagnosis to recovery, our team is committed to your safety, comfort, and long-term health.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">General Surgery</h2>
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

export default ColonAndRectalSurgery;