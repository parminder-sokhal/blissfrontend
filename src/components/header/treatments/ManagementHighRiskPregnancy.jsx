import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Adjust image path if needed
  sidebarLinks: [
    { title: "Antenatal And Postnatal Care", link: "/AntenatalAndPostnatal" },
    { title: "Normal Vaginal Delivery", link: "/NormalVaginalDelivery" },
    { title: "Caesarean Section", link: "/CaesareanSection" },
    { title: "Management Of High-Risk Pregnancy", link: "/ManagementHighRiskPregnancy" },
    { title: "Ultrasound And Fetal Monitoring", link: "/Ultrasound" },
    { title: "Epidural Anaesthesia During Labor", link: "/EpiduralAnaesthesia" },
  ],
};

const ManagementHighRiskPregnancy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Management of High-Risk Pregnancy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              A high-risk pregnancy is one in which the mother, the fetus, or both are at increased risk for complications that could affect their health and well-being. Proper management is essential to ensure the best possible outcomes for both mother and baby.
            </p>

            <h2 className="text-xl font-semibold">What is a High-Risk Pregnancy?</h2>
            <p>
              Factors that can categorize a pregnancy as high risk include maternal age (teenage or over 35), pre-existing health conditions (such as diabetes, hypertension, or heart disease), pregnancy-related complications (like preeclampsia or gestational diabetes), or fetal issues (such as growth restriction or genetic conditions).
            </p>

            <h2 className="text-xl font-semibold">Key Aspects of Managing a High-Risk Pregnancy</h2>

            <h3 className="font-semibold text-lg mt-4">1. Early Detection and Regular Monitoring</h3>
            <p>
              Early identification of risk factors is crucial. Regular prenatal visits, ultrasounds, blood tests, and fetal monitoring help assess the health of both mother and baby. Close surveillance allows for timely intervention if problems arise.
            </p>

            <h3 className="font-semibold text-lg mt-4">2. Individualized Care Plan</h3>
            <p>
              Every high-risk pregnancy requires a tailored care plan that considers the specific risk factors. This plan may involve consultations with specialists such as obstetricians, maternal-fetal medicine experts, endocrinologists, or cardiologists.
            </p>

            <h3 className="font-semibold text-lg mt-4">3. Lifestyle Modifications and Medications</h3>
            <p>
              Appropriate lifestyle changes, including a balanced diet, adequate rest, and avoidance of harmful substances, are advised. Medications may be prescribed to manage underlying conditions like hypertension or diabetes.
            </p>

            <h3 className="font-semibold text-lg mt-4">4. Nutritional Support</h3>
            <p>
              Proper nutrition plays a vital role. Nutritional counseling ensures that the mother receives essential nutrients needed for her health and fetal development.
            </p>

            <h3 className="font-semibold text-lg mt-4">5. Management of Complications</h3>
            <p>
              Prompt treatment of complications such as preeclampsia, gestational diabetes, or placental issues is essential. This could include medications, bed rest, or interventions like early delivery if maternal or fetal health is at risk.
            </p>

            <h3 className="font-semibold text-lg mt-4">6. Preparation for Delivery</h3>
            <p>
              Planning the timing and mode of delivery helps prevent or manage potential complications during childbirth. In some cases, early delivery might be necessary for the safety of mother and baby.
            </p>

            <h3 className="font-semibold text-lg mt-4">7. Psychological Support</h3>
            <p>
              Emotional and psychological support can help manage anxiety and stress related to high-risk pregnancy, contributing to better health outcomes.
            </p>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              Managing a high-risk pregnancy requires a comprehensive and multidisciplinary approach. With vigilant monitoring, personalized care, and timely interventions, the risks can be minimized, ensuring a healthy pregnancy and safe delivery.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Obstetrics</h2>
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

export default ManagementHighRiskPregnancy;