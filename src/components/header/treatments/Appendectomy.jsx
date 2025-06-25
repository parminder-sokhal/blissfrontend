import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Appendectomy.jpeg", // Update this path to match your actual image
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

const Appendectomy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Appendectomy</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">What is an Appendectomy?</h2>
            <p>
              An appendectomy is the surgical removal of the appendix. It is most often
              performed as an emergency procedure when a patient has acute appendicitis—
              a condition in which the appendix becomes inflamed and infected.
            </p>

            <h2 className="font-semibold text-xl mt-4">Symptoms of Appendicitis</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sudden pain in the lower right abdomen</li>
              <li>Nausea and vomiting</li>
              <li>Loss of appetite</li>
              <li>Fever and abdominal swelling</li>
              <li>Inability to pass gas</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Is It Performed?</h2>
            <p>
              If appendicitis is left untreated, the appendix can rupture, leading to a
              serious and potentially life-threatening infection called peritonitis.
              Appendectomy is the definitive treatment to prevent these complications.
            </p>

            <h2 className="font-semibold text-xl mt-4">Types of Appendectomy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Laparoscopic Appendectomy:</strong> Minimally invasive surgery using small
                incisions and a camera. Quicker recovery and less postoperative pain.
              </li>
              <li>
                <strong>Open Appendectomy:</strong> Traditional approach with a larger incision,
                often used if the appendix has ruptured.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Recovery and Aftercare</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most patients go home the same day or next day after surgery.</li>
              <li>Recovery time is typically 1 to 3 weeks depending on the surgical method.</li>
              <li>Follow-up care includes wound care, managing pain, and monitoring for signs of infection.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Risks and Complications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infection at the surgical site</li>
              <li>Bleeding or blood clots</li>
              <li>Injury to nearby organs (rare)</li>
              <li>Adhesion formation in the abdomen</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Skilled Surgeons:</strong> Board-certified and experienced in emergency and minimally invasive procedures.</li>
              <li><strong>Advanced Techniques:</strong> Laparoscopic tools for quicker recovery and fewer complications.</li>
              <li><strong>Compassionate Care:</strong> Patient-first approach throughout diagnosis, surgery, and recovery.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Book a Consultation</h2>
            <p>
              If you're experiencing symptoms of appendicitis or have been advised to
              undergo an appendectomy, contact us immediately. Our surgical team is here
              to provide safe and effective care with state-of-the-art facilities.
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

export default Appendectomy;