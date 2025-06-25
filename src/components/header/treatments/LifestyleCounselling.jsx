import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: "Medications for chronic illnesses", link: "/MedicationForChronic" },
    { title: "IV fluids and electrolyte management", link: "/IVfluids" },
    { title: "Blood transfusions", link: "/BloodTransfusion" },
    { title: "Antibiotic therapy for infections", link: "/AntibioticTherapy" },
    { title: "Non-invasive diagnostic procedures", link: "/NonInvasiveDiagnostic" },
    { title: "Management of infectious diseases ", link: "/ManagementInfections" },
    { title: "Lifestyle counselling ", link: "/LifestyleCounselling" },
    { title: "Vaccinations and immunizations", link: "/Vaccinations" },
    { title: "Management of poisoning and drug overdose ", link: "/PoisoningAndDrug" },
  ],
};

const LifestyleCounselling = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Lifestyle Counseling
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Lifestyle counseling is an essential component of health promotion and disease prevention. It involves guiding individuals to make healthier choices regarding their diet, physical activity, and habits like smoking. Effective counseling can lead to improved health outcomes and overall well-being.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Diet</h2>
            <p><strong>Overview:</strong> Nutrition plays a crucial role in maintaining health and preventing chronic diseases such as obesity, diabetes, and heart disease.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Balanced Diet:</strong> Encourage:
                <ul className="list-disc pl-6">
                  <li><strong>Fruits and Vegetables:</strong> At least 5 servings per day.</li>
                  <li><strong>Whole Grains:</strong> Choose over refined grains.</li>
                  <li><strong>Lean Proteins:</strong> Such as fish, poultry, legumes, and nuts.</li>
                  <li><strong>Healthy Fats:</strong> Use olive oil, nuts, and avoid trans fats.</li>
                </ul>
              </li>
              <li><strong>Counseling Tips:</strong>
                <ul className="list-disc pl-6">
                  <li>Teach portion control.</li>
                  <li>Promote mindful eating habits.</li>
                  <li>Help with meal planning for consistency.</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Exercise</h2>
            <p><strong>Overview:</strong> Regular physical activity helps maintain healthy weight, improves cardiovascular health, and enhances mental well-being.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Recommendations:</strong>
                <ul className="list-disc pl-6">
                  <li>150 minutes/week of moderate-intensity activity or 75 minutes of vigorous activity.</li>
                  <li>Include strength training twice per week.</li>
                </ul>
              </li>
              <li><strong>Counseling Tips:</strong>
                <ul className="list-disc pl-6">
                  <li>Encourage fun, sustainable physical activities.</li>
                  <li>Set realistic goals with measurable milestones.</li>
                  <li>Advise on increasing daily movement (e.g., stairs, short walks).</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Smoking Cessation</h2>
            <p><strong>Overview:</strong> Smoking is a leading preventable cause of illness and death. Counseling helps support long-term cessation.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Strategies:</strong>
                <ul className="list-disc pl-6">
                  <li>Behavioral counseling for coping with triggers.</li>
                  <li>Pharmacotherapy (NRT, bupropion, varenicline).</li>
                  <li>Support groups to build accountability and encouragement.</li>
                </ul>
              </li>
              <li><strong>Counseling Tips:</strong>
                <ul className="list-disc pl-6">
                  <li>Identify and manage smoking triggers.</li>
                  <li>Celebrate milestones in smoke-free living.</li>
                  <li>Educate on health benefits like better lung function and heart health.</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Lifestyle counseling in diet, exercise, and smoking cessation is crucial for promoting health and preventing chronic diseases. By providing personalized guidance and support, healthcare professionals can empower individuals to make sustainable lifestyle changes that enhance their overall well-being.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              General Medicine
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

export default LifestyleCounselling;