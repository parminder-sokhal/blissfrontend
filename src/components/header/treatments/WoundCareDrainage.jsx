import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path if different
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

const WoundCareDrainage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Wound Care and Abscess Drainage
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Proper wound management and timely drainage of abscesses are essential to prevent complications, promote healing, and reduce pain. Our team offers expert care tailored to each patient's needs, ensuring effective treatment and optimal recovery.
            </p>

            <h2 className="font-semibold text-xl mt-4">Wound Care</h2>

            <h3 className="font-semibold mt-2">Types of Wounds Treated</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Surgical incisions</li>
              <li>Chronic wounds (diabetic ulcers, pressure sores)</li>
              <li>Traumatic cuts and abrasions</li>
              <li>Burns</li>
              <li>Skin infections</li>
            </ul>

            <h3 className="font-semibold mt-4">Our Wound Care Services</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Assessment and Classification:</strong> Evaluating wound size, depth, infection, and tissue health.</li>
              <li><strong>Cleaning and Debridement:</strong> Removing dead or infected tissue to promote healing.</li>
              <li><strong>Dressing and Bandaging:</strong> Advanced wound dressings for moisture balance and infection prevention.</li>
              <li><strong>Infection Control:</strong> Antibiotics and topical treatments as needed.</li>
              <li><strong>Specialized Treatments:</strong> Negative pressure wound therapy, skin grafts, and more.</li>
              <li><strong>Patient Education:</strong> Wound hygiene guidance and signs of complications.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Abscess Drainage</h2>

            <h3 className="font-semibold mt-2">What Is an Abscess?</h3>
            <p>
              An abscess is a localized collection of pus due to bacterial infection, often causing swelling, pain, redness, and tenderness.
            </p>

            <h3 className="font-semibold mt-4">When Is Drainage Needed?</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Large abscesses with significant pain or pressure</li>
              <li>Failure to improve with antibiotics</li>
              <li>To prevent the spread of infection</li>
            </ul>

            <h3 className="font-semibold mt-4">The Drainage Procedure</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Preparation:</strong> Sterile environment, local anesthesia or sedation.</li>
              <li><strong>Technique:</strong> Small incision, gentle pus removal, cleaning, and possible drain placement.</li>
              <li><strong>Post-procedure Care:</strong> Antibiotics, wound dressing, and hygiene instructions.</li>
            </ul>

            <h3 className="font-semibold mt-4">Recovery</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pain management and anti-inflammatory medications</li>
              <li>Warm compresses and clean dressing</li>
              <li>Monitoring for recurrence or complications</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <p>
              Our experienced team prioritizes patient comfort, infection prevention, and swift healing through meticulous wound management and expert abscess drainage techniques. We ensure a safe, sterile environment and provide comprehensive aftercare guidance to support your recovery.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              General Surgery
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

export default WoundCareDrainage;