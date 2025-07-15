import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const sidebarLinks = [
  { title: "Hormonal Therapy", link: "/HormonalTherapy" },
  { title: "Pap smears and cervical biopsies", link: "/PapSmears" },
  { title: "Hysterectomy", link: "/Hysterectomy" },
  { title: "Dilation and Curettage", link: "/DilationAndCurettage" },
  { title: "Treatment for STIs", link: "/TreatmentForSTI" },
  { title: "Infertility treatment", link: "/InfertilityTreatment" },
  { title: "Laparoscopy And Hysteroscopy", link: "/LaparoscopyAndHysteroscopy" },
];

const Hysterectomy = () => (
  <div className="w-full min-h-screen bg-white font-sans">
    <div
      className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/img/Hysterectomy.jpeg)" }}
    ></div>

    <div className="px-6 lg:px-40 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Hysterectomy</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="lg:w-3/4 space-y-6 text-gray-700">
          <p>
            A hysterectomy is a surgical procedure to remove the uterus. It may also involve the removal of adjacent structures, such as the cervix, ovaries, and fallopian tubes, depending on the underlying reason.
          </p>

          <h2 className="text-xl font-semibold">1. Indications for Hysterectomy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uterine fibroids</li>
            <li>Endometriosis</li>
            <li>Uterine prolapse</li>
            <li>Abnormal uterine bleeding</li>
            <li>Chronic pelvic pain</li>
            <li>Certain cancers (e.g., uterine, cervical)</li>
          </ul>

          <h2 className="text-xl font-semibold">2. Types of Hysterectomy</h2>

          <h3 className="font-semibold mt-4">a. Laparoscopic Hysterectomy</h3>
          <div className="pl-6 space-y-2">
            <p>
              Minimally invasive surgery with small abdominal incisions guided by a laparoscope.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Benefits:</strong> Less pain, faster recovery, minimal scarring.</li>
              <li><strong>Procedure:</strong> Done under anesthesia through several small incisions.</li>
              <li><strong>Risks:</strong> Bleeding, infection, or nearby organ injury.</li>
            </ul>
          </div>

          <h3 className="font-semibold mt-4">b. Open (Abdominal) Hysterectomy</h3>
          <div className="pl-6 space-y-2">
            <p>
              Traditional surgery via a larger abdominal incision.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Benefits:</strong> Helps in complex cases with direct organ view.</li>
              <li><strong>Procedure:</strong> Performed under general anesthesia through an extended incision.</li>
              <li><strong>Risks:</strong> Greater postoperative pain and longer recovery.</li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold">3. Recovery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Laparoscopic:</strong> Often same-day or short stay; full recovery in 2–4 weeks.
            </li>
            <li>
              <strong>Open:</strong> Usually 2–3 days in hospital; full recovery in 6–8 weeks.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">4. Postoperative Care</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regular follow-ups to monitor healing and detect complications.</li>
            <li>Activity restrictions—avoid heavy lifting and strenuous tasks.</li>
            <li>Emotional support—counseling may help with hormonal changes and psychosocial impact.</li>
          </ul>

          <h2 className="text-xl font-semibold">Conclusion</h2>
          <p>
            A hysterectomy can resolve a variety of gynecological issues, but the type of surgery and recovery pathway depend on individual needs and medical guidance. Discussing options and expectations with a trusted healthcare provider ensures the best outcome.
          </p>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Gynaecological</h2>
          <ul className="space-y-4">
            {sidebarLinks.map((item, idx) => (
              <li key={idx} className="flex items-center text-pink-600 hover:text-pink-800">
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

export default Hysterectomy;