import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/AntenatalAndPostnatal.jpeg", // Update with actual background image
  sidebarLinks: [
    { title: "Antenatal And Postnatal Care", link: "/AntenatalAndPostnatal" },
    { title: "Normal Vaginal Delivery", link: "/NormalVaginalDelivery" },
    { title: "Caesarean Section", link: "/CaesareanSection" },
    { title: "Management Of High-Risk Pregnancy", link: "/ManagementHighRiskPregnancy" },
    { title: "Ultrasound And Fetal Monitoring", link: "/Ultrasound" },
    { title: "Epidural Anaesthesia During Labor", link: "/EpiduralAnaesthesia" },
  ],
};

const AntenatalAndPostnatal = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Antenatal and Postnatal Care
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">1. Antenatal Care</h2>
            <p>
              Antenatal care (also known as prenatal care) refers to the health care provided to a pregnant woman before the birth of her baby. It aims to monitor the health of both the mother and the fetus, identify any potential complications, and provide education and support throughout the pregnancy.
            </p>

            <h3 className="font-semibold text-lg mt-4">a. Objectives of Antenatal Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Monitor Fetal Development:</strong> Assess growth, heart rate, and overall health of the fetus.</li>
              <li><strong>Screen for Complications:</strong> Identify conditions like gestational diabetes, hypertension, and infections.</li>
              <li><strong>Provide Education:</strong> Inform about nutrition, exercise, labor, delivery, and breastfeeding.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Components of Antenatal Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Regular Check-ups:</strong> Monthly visits until 28 weeks, biweekly until 36 weeks, and weekly until delivery.</li>
              <li><strong>Physical Examinations:</strong> Weight, blood pressure, and fetal measurements.</li>
              <li><strong>Laboratory Tests:</strong> Blood tests (anemia, blood type, infections), and urinalysis (protein, glucose).</li>
              <li><strong>Vaccinations:</strong> Tdap and flu vaccines to protect mother and baby.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">c. Lifestyle and Nutritional Guidance</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dietary Recommendations:</strong> Balanced diet with fruits, vegetables, grains, and lean proteins.</li>
              <li><strong>Exercise:</strong> Safe physical activity to maintain health.</li>
              <li><strong>Avoiding Harmful Substances:</strong> No smoking, alcohol, or unsafe medications.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">2. Postnatal Care</h2>
            <p>
              Postnatal care refers to the support and medical care provided to a mother and her newborn after childbirth. It focuses on recovery from delivery, monitoring the baby’s health, and addressing physical or emotional challenges.
            </p>

            <h3 className="font-semibold text-lg mt-4">a. Objectives of Postnatal Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Support Recovery:</strong> Assist the mother in healing post-delivery.</li>
              <li><strong>Monitor Infant Health:</strong> Ensure the newborn is feeding, growing, and healthy.</li>
              <li><strong>Provide Education:</strong> Guidance on infant care, breastfeeding, and maternal health.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Components of Postnatal Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Follow-up Appointments:</strong> Usually within 6 weeks after delivery.</li>
              <li><strong>Physical Examinations:</strong> Monitor healing and signs of complications.</li>
              <li><strong>Mental Health Support:</strong> Screening for postpartum depression and access to support.</li>
              <li><strong>Breastfeeding Support:</strong> Help with latching, milk production, and challenges.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">c. Family Planning and Contraceptive Counseling</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Discuss postpartum contraception and future pregnancy planning.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Importance of Antenatal and Postnatal Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Improved Outcomes:</strong> Reduces risk of complications for mother and baby.</li>
              <li><strong>Empowerment through Education:</strong> Promotes confidence in parenting.</li>
              <li><strong>Emotional Support:</strong> Helps mothers navigate the journey of pregnancy and motherhood.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
            <p>
              Antenatal and postnatal care are essential for the well-being of both mothers and newborns. Through regular check-ups, proper guidance, and emotional support, these services enhance outcomes and promote a positive experience during and after pregnancy.
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

export default AntenatalAndPostnatal;