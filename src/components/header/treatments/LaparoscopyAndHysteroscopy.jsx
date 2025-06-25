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

const LaparoscopyAndHysteroscopy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/pictures/ADHD.jpeg)" }}
      ></div>

      <div className="px-6 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Laparoscopy and Hysteroscopy
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Both laparoscopy and hysteroscopy are diagnostic and therapeutic procedures used to examine and treat conditions affecting the female reproductive system. Being minimally invasive, they typically result in less pain and faster recovery compared to traditional surgeries.
            </p>

            <h2 className="text-xl font-semibold">1. Laparoscopy</h2>

            <h3 className="font-semibold mt-4">a. What is Laparoscopy?</h3>
            <p>
              Laparoscopy, or "keyhole surgery," involves small abdominal incisions through which a camera-equipped laparoscope and surgical tools are inserted to visualize and operate on pelvic organs.
            </p>

            <h3 className="font-semibold mt-4">b. Indications for Laparoscopy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diagnosis and treatment of endometriosis</li>
              <li>Ovarian cysts or tumors</li>
              <li>Ectopic pregnancy</li>
              <li>Pelvic inflammatory disease (PID)</li>
              <li>Fibroids</li>
              <li>Infertility evaluation</li>
              <li>Tubal ligation or reversal</li>
            </ul>

            <h3 className="font-semibold mt-4">c. Procedure</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>General or regional anesthesia is administered</li>
              <li>Small abdominal incisions are made</li>
              <li>A laparoscope is inserted, and CO₂ inflates the abdomen</li>
              <li>Surgical tools are used for treatment</li>
              <li>Incisions are closed with sutures or strips</li>
            </ol>

            <h3 className="font-semibold mt-4">d. Recovery</h3>
            <p>
              Most patients return home the same day, with full recovery in a few days to a week depending on the complexity of the procedure.
            </p>

            <h2 className="text-xl font-semibold">2. Hysteroscopy</h2>

            <h3 className="font-semibold mt-4">a. What is Hysteroscopy?</h3>
            <p>
              Hysteroscopy uses a thin, lighted scope inserted through the vagina and cervix into the uterus to examine or treat intrauterine conditions.
            </p>

            <h3 className="font-semibold mt-4">b. Indications for Hysteroscopy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Abnormal uterine bleeding</li>
              <li>Uterine fibroids or polyps</li>
              <li>Uterine septum</li>
              <li>Intrauterine adhesions (Asherman’s syndrome)</li>
              <li>Fertility assessments</li>
            </ul>

            <h3 className="font-semibold mt-4">c. Procedure</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Local or general anesthesia may be used</li>
              <li>The cervix may be dilated</li>
              <li>The hysteroscope is inserted through the cervix into the uterus</li>
              <li>The uterine cavity is examined and treated as needed</li>
              <li>No external incisions are required</li>
            </ol>

            <h3 className="font-semibold mt-4">d. Recovery</h3>
            <p>
              Recovery is usually quick; many women resume normal activities within 1–2 days.
            </p>

            <h2 className="text-xl font-semibold">3. Key Differences</h2>

            <div className="overflow-auto">
              <table className="table-auto w-full text-left border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Feature</th>
                    <th className="border px-4 py-2">Laparoscopy</th>
                    <th className="border px-4 py-2">Hysteroscopy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Access</td>
                    <td className="border px-4 py-2">Abdominal incisions</td>
                    <td className="border px-4 py-2">Vaginal and cervical entry</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Examination Area</td>
                    <td className="border px-4 py-2">Pelvic organs</td>
                    <td className="border px-4 py-2">Uterine cavity</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Common Uses</td>
                    <td className="border px-4 py-2">Endometriosis, cysts, infertility</td>
                    <td className="border px-4 py-2">Abnormal bleeding, fibroids</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Recovery Time</td>
                    <td className="border px-4 py-2">Few days to a week</td>
                    <td className="border px-4 py-2">1–2 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-semibold">4. Conclusion</h2>
            <p>
              Laparoscopy and hysteroscopy are highly effective minimally invasive procedures used to diagnose and treat a range of gynecological conditions. They offer faster recovery and reduced surgical risk. Speak with your healthcare provider to determine the most appropriate approach for your condition.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Gynaecological</h2>
            <ul className="space-y-4">
              {sidebarLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-pink-600 hover:text-pink-800"
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

export default LaparoscopyAndHysteroscopy;