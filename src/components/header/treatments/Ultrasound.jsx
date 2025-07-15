import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Ultrasound.jpeg", // Change if needed
  sidebarLinks: [
    { title: "Antenatal And Postnatal Care", link: "/AntenatalAndPostnatal" },
    { title: "Normal Vaginal Delivery", link: "/NormalVaginalDelivery" },
    { title: "Caesarean Section", link: "/CaesareanSection" },
    { title: "Management Of High-Risk Pregnancy", link: "/ManagementHighRiskPregnancy" },
    { title: "Ultrasound And Fetal Monitoring", link: "/Ultrasound" },
    { title: "Epidural Anaesthesia During Labor", link: "/EpiduralAnaesthesia" },
  ],
};

const Ultrasound = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Ultrasound and Fetal Monitoring
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Monitoring the health and development of the fetus during pregnancy is a vital aspect of prenatal care. Two key tools used for this purpose are <strong>ultrasound imaging</strong> and <strong>fetal monitoring</strong>. These techniques help healthcare providers assess fetal well-being, identify potential complications early, and plan appropriate interventions.
            </p>

            <h2 className="text-xl font-semibold">Ultrasound in Pregnancy</h2>

            <h3 className="font-semibold text-lg mt-4">What is an Ultrasound?</h3>
            <p>
              An ultrasound is a non-invasive imaging technique that uses high-frequency sound waves to create pictures of the developing fetus inside the uterus. It provides valuable visual information about the pregnancy.
            </p>

            <h3 className="font-semibold text-lg mt-4">Types of Ultrasound</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Transabdominal Ultrasound:</strong> The most common type, where a gel-covered probe is moved over the abdomen.</li>
              <li><strong>Transvaginal Ultrasound:</strong> A more detailed imaging from inside the vagina, used in early pregnancy or for detailed assessments.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">Reasons for Ultrasound</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm pregnancy and estimate gestational age</li>
              <li>Check fetal heartbeat and development</li>
              <li>Detect multiple pregnancies (twins, triplets)</li>
              <li>Assess fetal growth and anatomy</li>
              <li>Monitor amniotic fluid levels</li>
              <li>Identify placental placement and abnormalities</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">Timing of Ultrasounds</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>First Trimester:</strong> Confirm pregnancy, estimate due date</li>
              <li><strong>Second Trimester:</strong> Detailed anatomy scan (around 18–22 weeks)</li>
              <li><strong>Third Trimester:</strong> Growth, position, and well-being checks</li>
            </ul>

            <hr className="my-6" />

            <h2 className="text-xl font-semibold">Fetal Monitoring</h2>

            <h3 className="font-semibold text-lg mt-4">What is Fetal Monitoring?</h3>
            <p>
              Fetal monitoring involves tracking the fetus's heart rate and activity to assess its health, especially in high-risk pregnancies or when there are concerns about fetal well-being.
            </p>

            <h3 className="font-semibold text-lg mt-4">Types of Fetal Monitoring</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Non-Stress Test (NST):</strong> Measures fetal heart rate in response to movements, usually after 28 weeks.</li>
              <li><strong>Contraction Stress Test (CST):</strong> Checks fetal response to uterine contractions in certain cases.</li>
              <li><strong>Kick Counts:</strong> The mother counts fetal movements over time to assess activity.</li>
              <li><strong>Continuous Electronic Monitoring:</strong> Uses devices like cardiotocographs (CTG) during labor for real-time tracking.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">Why Fetal Monitoring is Important</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detects signs of fetal distress</li>
              <li>Guides decision-making for timely intervention</li>
              <li>Ensures the fetus is thriving, especially in complicated pregnancies</li>
            </ul>

            <hr className="my-6" />

            <h2 className="text-xl font-semibold">Summary</h2>
            <p>
              <strong>Ultrasound and fetal monitoring</strong> are essential components of prenatal care, providing critical information about the health and development of the fetus. Regular ultrasounds and monitoring help detect potential issues early, allowing for appropriate management to ensure a safe and healthy pregnancy for both mother and baby.
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

export default Ultrasound;