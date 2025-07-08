import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Haemorrhoidectomy.jpeg", // Replace with your actual image path
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

const Haemorrhoidectomy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Haemorrhoidectomy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Haemorrhoidectomy</strong> is a surgical procedure performed to remove
              hemorrhoids—swollen blood vessels in the lower part of the anus and rectum.
              When conservative treatments fail, haemorrhoidectomy offers a definitive
              solution.
            </p>

            <h2 className="font-semibold text-xl mt-4">What Are Hemorrhoids?</h2>
            <p>
              Hemorrhoids are enlarged, swollen veins in the anus and lower rectum, either
              internal or external. Common symptoms include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Bleeding during bowel movements</li>
              <li>Pain or discomfort</li>
              <li>Itching or irritation</li>
              <li>Swelling or lumps around the anus</li>
              <li>Prolapse (hemorrhoids protruding outside the anus)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Is Haemorrhoidectomy Recommended?</h2>
            <p>
              When hemorrhoids are large, prolapsed, or thrombosed, and don't respond to
              conservative treatments, surgical removal provides effective and lasting relief.
            </p>

            <h2 className="font-semibold text-xl mt-4">The Haemorrhoidectomy Procedure</h2>
            <h3 className="font-semibold mt-2">When and how is it performed?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preparation:</strong> May include bowel preparation; anesthesia is chosen
                based on patient needs (local, regional, or general).
              </li>
              <li>
                <strong>Surgical Steps:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Patient is positioned appropriately (lithotomy or prone jackknife).</li>
                  <li>Hemorrhoids are excised carefully and bleeding is controlled.</li>
                  <li>The area may be sutured or left open depending on the technique.</li>
                </ul>
              </li>
            </ul>

            <h3 className="font-semibold mt-4">Types of Haemorrhoidectomy Techniques</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Open Haemorrhoidectomy:</strong> Traditional method involving excision and healing by secondary intention.
              </li>
              <li>
                <strong>Stapled Haemorrhoidopexy:</strong> Less painful method that repositions hemorrhoids with a stapling device.
              </li>
              <li>
                <strong>Laser Haemorrhoidoplasty:</strong> Minimally invasive technique using laser energy.
              </li>
              <li>
                <em>Note:</em> Traditional excisional haemorrhoidectomy remains the most definitive method.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Postoperative Care and Recovery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pain Management:</strong> Pain is common post-op; medications are prescribed.
              </li>
              <li>
                <strong>Diet:</strong> High-fiber foods and hydration promote healing and prevent constipation.
              </li>
              <li>
                <strong>Hygiene:</strong> Sitz baths and gentle cleaning help soothe and heal the area.
              </li>
              <li>
                <strong>Activity:</strong> Rest is advised initially; normal activities resume in about a week.
              </li>
              <li>
                <strong>Follow-up:</strong> Scheduled visits monitor healing and manage any issues.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Potential Complications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pain and swelling</li>
              <li>Bleeding</li>
              <li>Infection</li>
              <li>Urinary retention</li>
              <li>Initial difficulty in bowel movements</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <p>
              Our expert surgical team uses the latest haemorrhoidectomy techniques to
              minimize discomfort and ensure fast recovery. We prioritize your safety,
              dignity, and quality of life throughout the entire process.
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

export default Haemorrhoidectomy;