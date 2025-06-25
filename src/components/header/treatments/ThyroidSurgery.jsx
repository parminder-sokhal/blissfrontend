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

const ThyroidSurgery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Thyroid Surgery
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Thyroid surgery</strong> is a common procedure performed to treat
              various conditions affecting the thyroid gland, a butterfly-shaped organ at
              the base of the neck that regulates metabolism, energy, and overall health.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is the Thyroid Gland?</h2>
            <p>
              The thyroid is a vital endocrine gland that produces hormones such as
              thyroxine (T4) and triiodothyronine (T3), which control metabolism. It also
              regulates heart rate, body temperature, and growth.
            </p>

            <h2 className="font-semibold text-xl mt-4">Reasons for Thyroid Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Thyroid nodules:</strong> Lumps that may be benign or malignant.</li>
              <li><strong>Thyroid cancer:</strong> Surgical removal is essential for treatment.</li>
              <li><strong>Goiter:</strong> Enlarged thyroid causing cosmetic or compressive symptoms.</li>
              <li><strong>Hyperthyroidism:</strong> When medical treatment fails.</li>
              <li><strong>Compression symptoms:</strong> Difficulty swallowing, breathing, or voice changes.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Types of Thyroid Surgery</h2>

            <h3 className="font-semibold">Total Thyroidectomy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Removes the entire thyroid gland.</li>
              <li>Often used for cancer or large goiters.</li>
            </ul>

            <h3 className="font-semibold mt-2">Hemithyroidectomy (Lobectomy)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Removes one lobe of the thyroid.</li>
              <li>Used for benign nodules or isolated disease.</li>
            </ul>

            <h3 className="font-semibold mt-2">Additional Procedures</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Lymph node dissection:</strong> Performed when cancer has spread to lymph nodes.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">The Surgical Process: What to Expect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Preoperative Evaluation:</strong> Blood tests, imaging, and biopsy as needed.</li>
              <li><strong>Anesthesia:</strong> Surgery is performed under general anesthesia.</li>
              <li><strong>Surgical Steps:</strong> 
                <ul className="list-disc pl-6 space-y-1">
                  <li>Incision is made in a natural skin crease.</li>
                  <li>Thyroid gland is carefully removed.</li>
                  <li>Nerves and parathyroid glands are preserved.</li>
                </ul>
              </li>
              <li><strong>Recovery:</strong> Most patients are discharged within 1–2 days and recover in about a week.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Benefits of Thyroid Surgery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Effective treatment for thyroid cancer and other disorders</li>
              <li>Improved breathing and swallowing if a goiter is compressive</li>
              <li>Relief from symptoms of overactive thyroid</li>
              <li>Improved cosmetic appearance and peace of mind</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Risks and Postoperative Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Potential risks:</strong> Nerve injury (hoarseness), low calcium, bleeding, infection</li>
              <li><strong>Monitoring:</strong> Regular blood tests to monitor calcium and hormone levels</li>
              <li><strong>Hormone therapy:</strong> Lifelong thyroid hormone replacement after total removal</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expert endocrine surgeons with years of experience</li>
              <li>Minimally invasive techniques and nerve-monitoring tools</li>
              <li>Personalized care and thorough postoperative follow-up</li>
              <li>Advanced diagnostics and imaging support</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Schedule a Consultation</h2>
            <p>
              If you're experiencing symptoms or have been diagnosed with a thyroid disorder,
              our surgical team is here to guide you with care and expertise. Contact us today to learn more.
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

export default ThyroidSurgery;
