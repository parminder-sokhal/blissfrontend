import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace if needed
  sidebarLinks: [
    { title: "Antenatal And Postnatal Care", link: "/AntenatalAndPostnatal" },
    { title: "Normal Vaginal Delivery", link: "/NormalVaginalDelivery" },
    { title: "Caesarean Section", link: "/CaesareanSection" },
    { title: "Management Of High-Risk Pregnancy", link: "/ManagementHighRiskPregnancy" },
    { title: "Ultrasound And Fetal Monitoring", link: "/Ultrasound" },
    { title: "Epidural Anaesthesia During Labor", link: "/EpiduralAnaesthesia" },
  ],
};

const EpiduralAnaesthesia = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Epidural Anaesthesia During Labor
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Epidural anaesthesia is a popular and effective method of pain relief used by many women during labor. It provides significant comfort while allowing the mother to remain alert and participate actively in the birthing process.
            </p>

            <h2 className="text-xl font-semibold">What is an Epidural?</h2>
            <p>
              An epidural is a regional anesthesia technique that involves injecting medication into the epidural space, the area surrounding the spinal cord and nerve roots in the lower back. This numbs the nerves that transmit pain from the uterus and birth canal, significantly reducing discomfort during labor and delivery.
            </p>

            <h2 className="text-xl font-semibold">How is an Epidural Administered?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The mother is usually seated or lying on her side.</li>
              <li>The healthcare provider cleans the area with an antiseptic.</li>
              <li>A small local anesthetic may be used to numb the skin.</li>
              <li>A thin catheter (tube) is inserted into the epidural space in the lower back.</li>
              <li>Medication, typically a combination of local anesthetics and opioids, is infused through the catheter continuously or in doses as needed.</li>
            </ul>

            <h2 className="text-xl font-semibold">Benefits of Epidural Analgesia</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Relief from Labor Pain:</strong> Provides excellent pain control during contractions and delivery.</li>
              <li><strong>Alertness:</strong> The mother remains conscious and able to participate in labor.</li>
              <li><strong>Tension Reduction:</strong> Less stress and exhaustion during labor.</li>
              <li><strong>Flexibility:</strong> Dosage can be adjusted according to needs.</li>
              <li><strong>Assistive Delivery:</strong> Often used in conjunction with instruments like forceps or vacuum if needed.</li>
            </ul>

            <h2 className="text-xl font-semibold">Possible Risks and Considerations</h2>
            <p>Although epidurals are generally safe, they can have side effects, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Drop in blood pressure</li>
              <li>Headache</li>
              <li>Nausea or dizziness</li>
              <li>Temporary numbness or weakness in the legs</li>
              <li>Rarely, nerve damage or infection</li>
            </ul>
            <p>Careful monitoring during administration helps manage and minimize these risks.</p>

            <h2 className="text-xl font-semibold">Is Epidural Suitable for Everyone?</h2>
            <p>
              Most women can safely receive an epidural; however, certain medical conditions or situations (such as bleeding disorders or spinal abnormalities) may influence its use. Discussing your medical history with your healthcare provider ensures the best approach for your labor.
            </p>

            <h2 className="text-xl font-semibold">Summary</h2>
            <p>
              Epidural anaesthesia is a safe, effective, and widely used method of pain relief during labor. It allows women to experience a more comfortable labor while remaining alert and actively involved in the birth process, ensuring both comfort and safety.
            </p>
          </div>

          {/* Sidebar */}
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

export default EpiduralAnaesthesia;