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

const DilationAndCurettage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/img/DilationAndCurettage.jpeg)" }}
      ></div>

      <div className="px-6 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Dilation and Curettage (D&C)
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Dilation and Curettage (D&C) is a surgical procedure used to
              remove tissue from the inside of the uterus. It is commonly
              performed for both diagnostic and therapeutic purposes.
            </p>

            <h2 className="text-xl font-semibold">1. Indications for D&C</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Abnormal uterine bleeding</li>
              <li>Incomplete miscarriage</li>
              <li>Endometrial biopsy</li>
              <li>Removal of uterine polyps or fibroids</li>
              <li>Postpartum retained tissue</li>
            </ul>

            <h2 className="text-xl font-semibold">2. Procedure</h2>

            <h3 className="font-semibold mt-4">a. Preparation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Consultation:</strong> A thorough medical review is done
                prior to scheduling the procedure.
              </li>
              <li>
                <strong>Anesthesia:</strong> Performed under local or general
                anesthesia based on individual factors.
              </li>
            </ul>

            <h3 className="font-semibold mt-4">b. Steps of the Procedure</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The cervix is gently dilated.</li>
              <li>
                A curette is used to scrape or suction tissue from the uterine
                lining.
              </li>
              <li>Procedure typically lasts 10–30 minutes.</li>
            </ol>

            <h2 className="text-xl font-semibold">3. Recovery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Brief monitoring in a recovery area is common.</li>
              <li>
                Avoid heavy lifting and intercourse for a few days to weeks.
              </li>
              <li>
                A follow-up may be needed to review biopsy results or further
                treatment.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">4. Risks and Complications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infection</li>
              <li>Heavy or prolonged bleeding</li>
              <li>Rare uterine perforation</li>
              <li>
                Possible scarring of the uterine lining (Asherman’s syndrome)
              </li>
            </ul>

            <h2 className="text-xl font-semibold">5. Conclusion</h2>
            <p>
              Dilation and Curettage is a common and generally safe procedure
              for diagnosing and treating various uterine issues. A detailed
              discussion with a healthcare provider is essential to understand
              its benefits and risks in your specific situation.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Gynaecological
            </h2>
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

export default DilationAndCurettage;