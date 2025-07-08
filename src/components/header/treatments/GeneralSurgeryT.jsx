import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/GeneralSurgeryT.jpeg", // Replace with your actual image path
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

const GeneralSurgeryT = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          General Surgery
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">What is General Surgery?</h2>
            <p>
              General Surgery is a vital medical specialty that deals with a broad
              spectrum of surgical conditions affecting various organs and tissues in
              the body. It encompasses the diagnosis, surgical treatment, and
              postoperative management of many common and complex procedures, helping
              improve patient health and quality of life.
            </p>

            <h2 className="font-semibold text-xl mt-4">Scope of General Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Digestive system:</strong> stomach, intestines, liver, gall bladder, pancreas, spleen</li>
              <li><strong>Hernias:</strong> inguinal, umbilical, femoral, diaphragmatic</li>
              <li><strong>Gallstones and biliary tract diseases</strong></li>
              <li><strong>Appendicitis and bowel diseases</strong></li>
              <li><strong>Colorectal conditions:</strong> hemorrhoids, fissures, fistulas, cancerous growths</li>
              <li><strong>Skin and soft tissue infections, abscesses, and tumors</strong></li>
              <li><strong>Thyroid and parathyroid surgery</strong></li>
              <li><strong>Trauma care:</strong> injuries from accidents or violence</li>
              <li><strong>Lumps, cysts, lipomas, and benign tumors</strong></li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Common Surgical Procedures</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Appendectomy:</strong> Removal of inflamed appendix</li>
              <li><strong>Hernia Repair:</strong> Fixing hernias to prevent complications</li>
              <li><strong>Cholecystectomy:</strong> Removal of gallstones or diseased gallbladder</li>
              <li><strong>Bowel Resection:</strong> Removing diseased segments of intestines</li>
              <li><strong>Hysterectomy and other abdominal surgeries in women</strong></li>
              <li><strong>Laparoscopic surgeries:</strong> Smaller incisions, less pain, faster recovery</li>
              <li><strong>Emergency surgeries:</strong> For trauma, perforations, obstructions, bleeding</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Modern Techniques</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Laparoscopy:</strong> Keyhole surgery with less pain and quicker recovery</li>
              <li><strong>Robotic Surgery:</strong> Enhanced precision in complex surgeries</li>
              <li><strong>Image-Guided Surgery:</strong> Guided by CT, MRI, or ultrasound</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Role of a General Surgeon</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Diagnosis:</strong> Thorough exams and imaging</li>
              <li><strong>Surgical Intervention:</strong> Using the best techniques to minimize risks</li>
              <li><strong>Preoperative Care:</strong> Patient evaluation and procedure explanation</li>
              <li><strong>Postoperative Care:</strong> Pain management and follow-ups</li>
              <li><strong>Emergency Response:</strong> Immediate care for trauma or acute conditions</li>
              <li><strong>Patient Education:</strong> Helping patients understand conditions and recovery</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Experienced Surgeons:</strong> Skilled and compassionate professionals</li>
              <li><strong>Advanced Techniques:</strong> Including laparoscopic and robotic methods</li>
              <li><strong>Comprehensive Care:</strong> From diagnosis to recovery</li>
              <li><strong>Patient-Centered Approach:</strong> Focus on comfort, safety, and outcomes</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Schedule a Consultation</h2>
            <p>
              Your health and recovery are our priority. Book an appointment to explore
              surgical options or get expert guidance from our general surgery team.
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

export default GeneralSurgeryT;
