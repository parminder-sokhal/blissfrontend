import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with the appropriate image path
  sidebarLinks: [
    { title: "Antenatal And Postnatal Care", link: "/AntenatalAndPostnatal" },
    { title: "Normal Vaginal Delivery", link: "/NormalVaginalDelivery" },
    { title: "Caesarean Section", link: "/CaesareanSection" },
    { title: "Management Of High-Risk Pregnancy", link: "/ManagementHighRiskPregnancy" },
    { title: "Ultrasound And Fetal Monitoring", link: "/Ultrasound" },
    { title: "Epidural Anaesthesia During Labor", link: "/EpiduralAnaesthesia" },
  ],
};

const CaesareanSection = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Caesarean Section (C-Section)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              A caesarean section, commonly referred to as a C-section, is a surgical procedure used to deliver a baby through incisions made in the mother's abdomen and uterus. It may be planned in advance or performed as an emergency procedure during labor.
            </p>

            <h2 className="text-xl font-semibold">1. Indications for a C-Section</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Previous C-Section:</strong> Prior delivery by C-section may lead to repeat procedures.</li>
              <li><strong>Fetal Distress:</strong> Signs the baby is not getting enough oxygen or is in distress.</li>
              <li><strong>Breech Presentation:</strong> Baby positioned feet-first or sideways instead of head-first.</li>
              <li><strong>Multiple Pregnancies:</strong> Delivering twins or more may require a C-section.</li>
              <li><strong>Placenta Previa:</strong> Placenta covers the cervix, blocking the baby’s exit.</li>
              <li><strong>Prolonged Labor:</strong> Labor stalls or doesn’t progress adequately.</li>
              <li><strong>Maternal Health Issues:</strong> Conditions like hypertension or diabetes complicate vaginal birth.</li>
            </ul>

            <h2 className="text-xl font-semibold">2. Procedure of a C-Section</h2>

            <h3 className="font-semibold text-lg mt-4">a. Preparation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Informed Consent:</strong> Procedure is explained and consent obtained.</li>
              <li><strong>Anesthesia:</strong> Usually spinal or epidural, allowing mother to remain awake. General anesthesia in emergencies.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Surgical Steps</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Incision:</strong> Horizontal incision on the lower abdomen (bikini line), or vertical in some cases.</li>
              <li><strong>Uterine Incision:</strong> Opening made in the uterus to access the baby.</li>
              <li><strong>Delivery:</strong> Baby is delivered and airways are cleared.</li>
              <li><strong>Placenta Removal:</strong> The placenta is removed and uterus closed with sutures.</li>
              <li><strong>Abdominal Closure:</strong> Incisions are stitched or stapled closed in layers.</li>
            </ol>

            <h2 className="text-xl font-semibold">3. Recovery After a C-Section</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hospital Stay:</strong> Typically 2–4 days for monitoring and recovery.</li>
              <li><strong>Pain Management:</strong> Pain medication is provided for comfort.</li>
              <li><strong>Mobility:</strong> Early walking is encouraged to prevent blood clots.</li>
              <li><strong>Wound Care:</strong> Careful cleaning and monitoring to avoid infection.</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Potential Risks and Complications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Infection:</strong> May occur at the incision site or within the uterus.</li>
              <li><strong>Hemorrhage:</strong> Risk of significant blood loss.</li>
              <li><strong>Blood Clots:</strong> Can lead to deep vein thrombosis or pulmonary embolism.</li>
              <li><strong>Injury to Organs:</strong> Rare but possible injury to bladder, bowel, or uterus.</li>
              <li><strong>Longer Recovery:</strong> Healing time is generally longer than vaginal birth.</li>
            </ul>

            <h2 className="text-xl font-semibold">5. Future Pregnancies</h2>
            <p>
              Women who’ve had a C-section can often have a vaginal birth afterward (VBAC), but it depends on individual circumstances. A healthcare provider will assess the risks and advise accordingly.
            </p>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              A caesarean section is a crucial surgical option when vaginal delivery is not safe for the mother or baby. Understanding the indications, procedure, recovery, and risks can help expecting mothers make informed decisions about childbirth. Consult your healthcare provider for personalized guidance.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Obstetrics
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

export default CaesareanSection;