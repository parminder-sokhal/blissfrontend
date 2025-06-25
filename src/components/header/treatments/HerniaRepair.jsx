import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/hernia.jpg", // Replace with actual image path
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

const HerniaRepair = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Hernia Repair</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              A hernia occurs when an internal organ or tissue protrudes through a weak
              spot or opening in the surrounding muscle or tissue wall. Hernia repair is
              a common surgical procedure designed to correct this condition and restore
              normal anatomy.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is a Hernia?</h2>
            <p>
              A hernia typically appears as a bulge or swelling, most commonly in the
              abdomen or groin. It occurs when a part of an organ pushes through a
              weakened area of the abdominal wall.
            </p>

            <h3 className="font-semibold mt-4">Common Types of Hernias:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Inguinal Hernia:</strong> In the groin area; most common in men.</li>
              <li><strong>Umbilical Hernia:</strong> Near the belly button; common in infants and adults.</li>
              <li><strong>Femoral Hernia:</strong> Just below the groin; more common in women.</li>
              <li><strong>Hiatal Hernia:</strong> Stomach pushes through the diaphragm into the chest cavity.</li>
              <li><strong>Incisional Hernia:</strong> At the site of a previous surgical incision.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Symptoms of a Hernia</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visible bulge in the affected area</li>
              <li>Discomfort or pain when lifting, coughing, or bending</li>
              <li>Heaviness or dragging sensation</li>
              <li>Nausea or bowel issues in severe cases</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why is Hernia Repair Necessary?</h2>
            <p>
              Most hernias enlarge over time and can cause discomfort or serious
              complications like:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Incarceration:</strong> Trapped tissue that can’t return to its place.</li>
              <li><strong>Strangulation:</strong> Cut-off blood supply causing tissue death (medical emergency).</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Types of Hernia Repair</h2>

            <h3 className="font-semibold mt-2">Open Surgery</h3>
            <p>
              A larger incision is made over the hernia, the tissue is repositioned, and
              mesh may be used to strengthen the wall.
            </p>

            <h3 className="font-semibold mt-2">Laparoscopic Surgery</h3>
            <p>
              Small incisions with a camera and tools are used to fix the hernia from
              inside. Preferred for less pain, faster recovery, and smaller scars.
            </p>

            <h3 className="font-semibold mt-2">Robotic-Assisted Surgery</h3>
            <p>
              Similar to laparoscopic but with robotic precision for more complex or
              delicate repairs.
            </p>

            <h2 className="font-semibold text-xl mt-4">Benefits of Hernia Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eliminates pain and discomfort</li>
              <li>Prevents serious complications</li>
              <li>Restores normal physical activity</li>
              <li>Minimally invasive methods reduce downtime and risk</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Recovery and Aftercare</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most patients return home the same day or after one night</li>
              <li>Follow-up visits ensure healing is on track</li>
              <li>Avoid heavy lifting for a few weeks</li>
              <li>Pain is typically mild and managed easily</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Skilled surgeons with vast experience in all types of hernia repairs</li>
              <li>Advanced techniques including laparoscopic and robotic procedures</li>
              <li>Patient-focused care with fast recovery and minimal discomfort</li>
              <li>High success rates and low recurrence risk</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Get Started Today</h2>
            <p>
              If you suspect a hernia or have been diagnosed with one, contact us today
              for a consultation. Our expert team is ready to help you get back to a
              healthy and active life.
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

export default HerniaRepair;