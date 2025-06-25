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

const TraumaSurgery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Trauma Surgery</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Trauma surgery</strong> is a specialized field focused on the urgent and
              emergent management of traumatic injuries resulting from accidents, falls,
              assaults, or other sudden, severe injuries. Our team provides prompt, expert
              care to stabilize patients, repair injuries, and improve outcomes in
              life-threatening situations.
            </p>

            <h2 className="font-semibold text-xl mt-4">What Is Trauma Surgery?</h2>
            <p>
              Trauma surgery involves the comprehensive assessment and treatment of injuries
              to vital organs, bones, blood vessels, and soft tissues caused by traumatic
              events. It requires rapid decision-making and coordination with emergency
              services to save lives and prevent long-term disability.
            </p>

            <h2 className="font-semibold text-xl mt-4">Conditions and Injuries Treated</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Blunt trauma:</strong> Car accidents, falls, or assaults.</li>
              <li><strong>Penetrating injuries:</strong> Stab wounds, gunshot wounds, impalements.</li>
              <li><strong>Fractures:</strong> Broken bones, dislocations, soft tissue injuries.</li>
              <li><strong>Head and spine injuries:</strong> Brain trauma, spinal cord injury.</li>
              <li><strong>Vascular injuries:</strong> Bleeding from damaged arteries or veins.</li>
              <li><strong>Abdominal injuries:</strong> Liver, spleen, kidney, or bowel trauma.</li>
              <li><strong>Chest injuries:</strong> Rib fractures, pneumothorax, hemothorax.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Our Approach to Trauma Care</h2>

            <h3 className="font-semibold mt-2">Rapid Assessment & Resuscitation</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>ATLS protocol: airway, breathing, circulation, disability, exposure.</li>
              <li>Immediate stabilization and triage in emergency scenarios.</li>
            </ul>

            <h3 className="font-semibold mt-4">Diagnostic Evaluation</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fast imaging: X-ray, CT scan, ultrasound.</li>
              <li>Continuous monitoring of vital signs and organ function.</li>
            </ul>

            <h3 className="font-semibold mt-4">Surgical Intervention</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Emergency operations to stop bleeding or repair organs.</li>
              <li>Damage control surgery: staged procedures starting with life-saving actions.</li>
            </ul>

            <h3 className="font-semibold mt-4">Multidisciplinary Management</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Team includes trauma surgeons, orthopedics, neurosurgeons, and ICU specialists.</li>
              <li>Ongoing care in intensive and rehabilitation units post-surgery.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Recovery and Rehabilitation</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Postoperative care:</strong> Pain relief, wound care, infection prevention.</li>
              <li><strong>Rehabilitation:</strong> Mobility restoration through physiotherapy.</li>
              <li><strong>Emotional support:</strong> For trauma-related psychological stress.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <p>
              Our trauma center operates 24/7 with advanced emergency resources. We are
              committed to fast, compassionate care that maximizes survival and minimizes
              complications—helping you through your recovery journey with support and expertise.
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

export default TraumaSurgery;