import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/NormalVaginalDelivery.jpeg", // Replace with relevant image
  sidebarLinks: [
    { title: "Antenatal And Postnatal Care", link: "/AntenatalAndPostnatal" },
    { title: "Normal Vaginal Delivery", link: "/NormalVaginalDelivery" },
    { title: "Caesarean Section", link: "/CaesareanSection" },
    { title: "Management Of High-Risk Pregnancy", link: "/ManagementHighRiskPregnancy" },
    { title: "Ultrasound And Fetal Monitoring", link: "/Ultrasound" },
    { title: "Epidural Anaesthesia During Labor", link: "/EpiduralAnaesthesia" },
  ],
};

const NormalVaginalDelivery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Normal Vaginal Delivery
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Normal vaginal delivery is the process through which a baby is born through the birth canal without the need for surgical intervention. It is the most common method of childbirth and typically involves several stages.
            </p>

            <h2 className="text-xl font-semibold">1. Stages of Normal Vaginal Delivery</h2>

            <h3 className="font-semibold text-lg mt-4">a. First Stage: Labor</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Latent Phase:</strong> 
                <ul className="pl-4 list-disc">
                  <li><strong>Duration:</strong> Can last hours to days.</li>
                  <li><strong>Cervical Changes:</strong> The cervix begins to soften, thin (efface), and open (dilate) to about 3–4 cm.</li>
                  <li><strong>Contractions:</strong> Mild and irregular contractions begin.</li>
                </ul>
              </li>
              <li>
                <strong>Active Phase:</strong>
                <ul className="pl-4 list-disc">
                  <li><strong>Duration:</strong> Usually lasts 4–8 hours.</li>
                  <li><strong>Cervical Dilation:</strong> Progresses from 4 cm to 10 cm.</li>
                  <li><strong>Contractions:</strong> More frequent, intense, and regular (every 3–5 minutes).</li>
                </ul>
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Second Stage: Delivery of the Baby</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pushing Phase:</strong> Begins when the cervix is fully dilated (10 cm). The mother pushes with contractions.
              </li>
              <li>
                <strong>Birth:</strong> The baby’s head emerges first, followed by the body. Airway is cleared and the newborn is assessed.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">c. Third Stage: Delivery of the Placenta</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Duration:</strong> Occurs within 5–30 minutes after birth.</li>
              <li><strong>Process:</strong> The placenta detaches and is expelled through the birth canal.</li>
              <li><strong>Assessment:</strong> Provider checks that the placenta is intact.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">2. Benefits of Normal Vaginal Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Shorter Recovery Time:</strong> Faster recovery than cesarean section.</li>
              <li><strong>Lower Risk of Complications:</strong> Avoids surgical risks and anesthesia complications.</li>
              <li><strong>Immediate Skin-to-Skin Contact:</strong> Encourages bonding and breastfeeding.</li>
              <li><strong>Hormonal Benefits:</strong> Labor hormones promote bonding and milk production.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Considerations for Normal Vaginal Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pain Management:</strong> Natural methods (breathing, relaxation) or medical (epidural, nitrous oxide).</li>
              <li><strong>Monitoring:</strong> Fetal heart rate may be continuously monitored.</li>
              <li><strong>Support System:</strong> Supportive companions enhance the experience.</li>
              <li><strong>Potential Complications:</strong> May include prolonged labor, fetal distress, or tearing.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">4. Post-Delivery Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Immediate Care for Baby:</strong> Apgar scoring, warming, and early feeding.</li>
              <li><strong>Maternal Recovery:</strong> Bleeding checks, pain relief, emotional support.</li>
              <li><strong>Follow-Up:</strong> Postnatal visits to ensure both are recovering well.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
            <p>
              Normal vaginal delivery is a natural process allowing for the safe birth of a baby through the birth canal. With good prenatal care, labor support, and post-delivery follow-up, most women can experience a healthy and fulfilling birth. Always consult healthcare professionals for personalized advice.
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

export default NormalVaginalDelivery;