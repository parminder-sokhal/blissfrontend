import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Gynaecology.jpeg", // Replace with actual image
  sidebarLinks: [
    { title: "Hormonal Therapy", link: "/HormonalTherapy" },
    { title: "Pap smears and cervical biopsies", link: "/PapSmears" },
    { title: "Hysterectomy", link: "/Hysterectomy" },
    { title: "Dilation and Curettage", link: "/DilationAndCurettage" },
    { title: "Treatment for STIs", link: "/TreatmentForSTI" },
    { title: "Infertility treatment", link: "/InfertilityTreatment" },
    {
      title: "Laparoscopy And Hysteroscopy",
      link: "/LaparoscopyAndHysteroscopy",
    },
  ],
};

const Gynaecology = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ✅ Hero Banner */}
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Common Gynecological Treatments
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Gynecological treatments address various conditions affecting the
              female reproductive system. These treatments can range from
              conservative management to surgical interventions. Below are some
              of the most common treatments:
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Medications</h2>

            <h3 className="font-semibold text-lg mt-4">
              a. Hormonal Treatments
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Birth Control Pills:</strong> Regulate menstrual cycles,
                reduce bleeding, and manage PCOS symptoms.
              </li>
              <li>
                <strong>Hormone Replacement Therapy (HRT):</strong> Alleviates
                menopausal symptoms by replacing diminished hormones.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Antibiotics</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>For Infections:</strong> Treats bacterial conditions
                like PID and STIs.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">c. Pain Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>NSAIDs:</strong> Used for menstrual cramps and pelvic
                pain.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">
              2. Minimally Invasive Procedures
            </h2>

            <h3 className="font-semibold text-lg mt-4">a. Hysteroscopy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Thin, lighted scope inserted
                through the vagina into the uterus.
              </li>
              <li>
                <strong>Uses:</strong> Removal of fibroids, polyps, or abnormal
                tissues.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Laparoscopy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Camera-assisted surgery through
                small abdominal incisions.
              </li>
              <li>
                <strong>Uses:</strong> Diagnosis and treatment of ovarian cysts,
                endometriosis, or ectopic pregnancy.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">
              3. Surgical Treatments
            </h2>

            <h3 className="font-semibold text-lg mt-4">a. Hysterectomy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Surgical removal of the uterus.
              </li>
              <li>
                <strong>Indications:</strong> Uterine fibroids, cancers, or
                chronic bleeding.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Oophorectomy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Surgical removal of ovaries.
              </li>
              <li>
                <strong>Indications:</strong> Ovarian cysts, tumors, or cancer.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">c. Myomectomy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Surgical removal of fibroids,
                preserving the uterus.
              </li>
              <li>
                <strong>Indications:</strong> Heavy bleeding or pain from
                fibroids.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">4. Other Treatments</h2>

            <h3 className="font-semibold text-lg mt-4">a. Cryotherapy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Freezing technique to remove
                abnormal cervical tissue.
              </li>
              <li>
                <strong>Uses:</strong> Treatment for precancerous cervical
                lesions.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">
              b. Dilation and Curettage (D&C)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Scraping of uterine lining for
                diagnostic or therapeutic purposes.
              </li>
              <li>
                <strong>Uses:</strong> Abnormal bleeding or incomplete
                miscarriage.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">
              c. Endometrial Ablation
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Destroys uterine lining to reduce
                menstrual bleeding.
              </li>
              <li>
                <strong>Indications:</strong> Chronic heavy periods unresponsive
                to medication.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">
              5. Lifestyle and Supportive Treatments
            </h2>

            <h3 className="font-semibold text-lg mt-4">
              a. Nutritional Counseling
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Personalized dietary guidance to
                support hormone and reproductive health.
              </li>
              <li>
                <strong>Uses:</strong> Management of PCOS, menopause, or general
                wellness.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Physical Therapy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Description:</strong> Pelvic floor therapy for
                strengthening muscles.
              </li>
              <li>
                <strong>Uses:</strong> Pelvic pain, incontinence, or
                post-surgical rehabilitation.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
            <p>
              Common gynecological treatments encompass a wide range of options
              tailored to individual patient needs. From medication and
              minimally invasive procedures to surgical interventions, these
              treatments aim to manage and alleviate various gynecological
              conditions, ultimately improving women's health and quality of
              life.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Gynaecology
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

export default Gynaecology;
