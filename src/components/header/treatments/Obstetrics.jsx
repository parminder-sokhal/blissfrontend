import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Obstetric.jpeg", // Update with actual background image
  sidebarLinks: [
    { title: "Antenatal And Postnatal Care", link: "/AntenatalAndPostnatal" },
    { title: "Normal Vaginal Delivery", link: "/NormalVaginalDelivery" },
    { title: "Caesarean Section", link: "/CaesareanSection" },
    { title: "Management Of High-Risk Pregnancy", link: "/ManagementHighRiskPregnancy" },
    { title: "Ultrasound And Fetal Monitoring", link: "/Ultrasound" },
    { title: "Epidural Anaesthesia During Labor", link: "/EpiduralAnaesthesia" },
  ],
};

const Obstetrics = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ✅ Hero Image */}
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Page Content */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Common Obstetric Treatments
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Obstetric treatments focus on the care of women during pregnancy, childbirth, and the postpartum period. These treatments can include routine care, interventions for complications, and support for maternal and fetal health.
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Prenatal Care</h2>

            <h3 className="font-semibold text-lg mt-4">a. Routine Check-ups</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Frequency:</strong> Monthly until 28 weeks, biweekly until 36 weeks, weekly thereafter.</li>
              <li><strong>Purpose:</strong> Monitor fetal development, maternal health, and manage any complications.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Screenings and Tests</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ultrasound:</strong> Assess fetal growth, anatomy, and placental location.</li>
              <li><strong>Blood Tests:</strong> Check for anemia, blood type, infections, and perform genetic screening.</li>
              <li><strong>Glucose Tolerance Test:</strong> Screen for gestational diabetes.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">2. Medications</h2>

            <h3 className="font-semibold text-lg mt-4">a. Prenatal Vitamins</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Folic Acid:</strong> Prevents neural tube defects.</li>
              <li><strong>Iron and Calcium:</strong> Support maternal and fetal health.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Medications for Complications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Antihypertensives:</strong> Manage high blood pressure.</li>
              <li><strong>Insulin or Metformin:</strong> Treat gestational diabetes.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Labor and Delivery Interventions</h2>

            <h3 className="font-semibold text-lg mt-4">a. Induction of Labor</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Methods:</strong> Medications (e.g., oxytocin) or mechanical methods (e.g., amniotomy).</li>
              <li><strong>Indications:</strong> Post-term pregnancy, preeclampsia, or fetal distress.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Pain Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Epidural Anesthesia:</strong> Most common method for labor pain relief.</li>
              <li><strong>Nitrous Oxide:</strong> Alternative pain relief option.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">c. Cesarean Delivery (C-Section)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Indications:</strong> Fetal distress, labor arrest, or maternal health issues.</li>
              <li><strong>Types:</strong> Elective or emergency cesarean deliveries.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">4. Postpartum Care</h2>

            <h3 className="font-semibold text-lg mt-4">a. Monitoring and Recovery</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Physical Examination:</strong> Check healing, uterus involution, and surgical sites.</li>
              <li><strong>Emotional Support:</strong> Screen for postpartum depression and offer resources.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Contraceptive Counseling</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Discuss postpartum birth control options and future family planning.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">5. Special Considerations</h2>

            <h3 className="font-semibold text-lg mt-4">a. High-Risk Pregnancies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Management:</strong> Extra monitoring for diabetes, hypertension, twins/multiples.</li>
              <li><strong>Consultations:</strong> Maternal-fetal medicine specialists for complex care.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Nutritional Counseling</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personalized advice on healthy eating and activity during pregnancy.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">6. Education and Support</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Childbirth Education Classes:</strong> Prepare for delivery, pain management, and newborn care.</li>
              <li><strong>Support Groups:</strong> Connect with other parents for shared experiences and emotional support.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
            <p>
              Common obstetric treatments encompass a wide range of care options designed to ensure the health and well-being of both the mother and the baby throughout pregnancy and after delivery. Regular prenatal care, appropriate interventions during labor, and comprehensive postpartum support are essential components of successful obstetric care. Always consult with a healthcare provider for personalized advice and treatment options.
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

export default Obstetrics;