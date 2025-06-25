import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path
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

const GallbladderSurgery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Gallbladder Surgery (Cholecystectomy)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Gallbladder surgery, known as <strong>cholecystectomy</strong>, is a common
              and highly effective procedure to remove the gallbladder—an organ that plays
              a role in digesting fats. It is typically recommended when gallstones or other
              issues cause pain, infection, or digestive problems.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is the Gallbladder?</h2>
            <p>
              The <strong>gallbladder</strong> is a small, pear-shaped organ located beneath
              the liver. It stores bile, a digestive fluid that helps break down fats. When
              the gallbladder becomes diseased or blocked—commonly due to gallstones—surgical
              removal may be required.
            </p>

            <h2 className="font-semibold text-xl mt-4">Why is Gallbladder Removal Needed?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Gallstones (Cholelithiasis):</strong> Hardened deposits that block bile flow and cause pain.</li>
              <li><strong>Cholecystitis:</strong> Inflammation often triggered by gallstones.</li>
              <li><strong>Blocked Bile Ducts:</strong> Gallstones can obstruct bile drainage.</li>
              <li><strong>Gallbladder Polyps or Cancer:</strong> Rare reasons for surgical intervention.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Symptoms of Gallbladder Problems</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Severe pain in the upper right abdomen</li>
              <li>Nausea, vomiting, and indigestion</li>
              <li>Bloating, especially after fatty meals</li>
              <li>Fever and chills (if infection is present)</li>
              <li>Jaundice (yellow skin or eyes due to bile blockage)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Types of Gallbladder Surgery</h2>

            <h3 className="font-semibold">Laparoscopic Cholecystectomy</h3>
            <p>
              The most common and preferred method:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Performed via 3–4 small incisions in the abdomen</li>
              <li>Uses a camera and small instruments to remove the gallbladder</li>
              <li>Minimally invasive with quick recovery and low scarring</li>
            </ul>

            <h3 className="font-semibold mt-2">Open Cholecystectomy</h3>
            <p>
              Used for complex cases or complications:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Requires a larger abdominal incision</li>
              <li>Longer recovery but equally effective</li>
              <li>Reserved for emergency or high-risk cases</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">What to Expect During Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Preparation:</strong> Fasting, pre-op blood tests or imaging</li>
              <li><strong>Anesthesia:</strong> Procedure is performed under general anesthesia</li>
              <li><strong>Procedure:</strong> Gallbladder is removed using laparoscopic or open approach</li>
              <li><strong>Recovery:</strong> Most go home the same day; full recovery in about a week</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Benefits of Laparoscopic Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Smaller incisions and minimal scarring</li>
              <li>Faster recovery and return to normal life</li>
              <li>Reduced postoperative pain and complications</li>
              <li>Shorter hospital stays (often outpatient)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Postoperative Care & Lifestyle</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gradual reintroduction of normal foods</li>
              <li>Low-fat diet may be needed temporarily</li>
              <li>Avoid heavy lifting for at least 1 week</li>
              <li>Watch for infection signs (redness, fever, or drainage)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Experienced surgeons using cutting-edge techniques</li>
              <li>State-of-the-art facilities for minimal pain and optimal outcomes</li>
              <li>Personalized care from consultation to recovery</li>
              <li>Supportive team ensuring comfort and safety at every step</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Book a Consultation</h2>
            <p>
              If you are experiencing symptoms or have been diagnosed with gallbladder issues,
              contact us today to schedule a consultation with our surgical team.
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

export default GallbladderSurgery;