import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "Antenatal And Postnatal Care", link: "/AntenatalAndPostnatal" },
    { title: "Normal Vaginal Delivery", link: "/NormalVaginalDelivery" },
    { title: "Caesarean Section", link: "/CaesareanSection" },
    { title: "Management Of High-Risk Pregnancy", link: "/ManagementHighRiskPregnancy" },
    { title: "Ultrasound And Fetal Monitoring", link: "/Ultrasound" },
    {
      title: "Epidural Anaesthesia During Labor",
      link: "/EpiduralAnaesthesia",
    },
  ],
};
const data1 = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "Hormonal Therapy", link: "/HormonalTherapy" },
    { title: "Pap smears and cervical biopsies", link: "/PapSmears" },
    { title: "Hysterectomy ", link: "/Hysterectomy" },
    { title: "Dilation and Curettage ", link: "/DilationAndCurettage" },
    { title: "Treatment for STIs", link: "/TreatmentForSTI" },
    { title: "Infertility treatment ", link: "/InfertilityTreatment" },
    { title: "Laparoscopy And Hysteroscopy ", link: "/LaparoscopyAndHysteroscopy" },
  ],
};

const ObstetricsAndGynaecologyT = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Obstetrics and Gynecology
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Obstetrics and Gynecology are medical specialties focused on
              women's reproductive health. While they are often practiced
              together, they address different aspects of women's health.
            </p>

            <h2 className="text-xl font-semibold">1. Obstetrics</h2>
            <p>
              Obstetrics is the branch of medicine that focuses on pregnancy,
              childbirth, and the postpartum period.
            </p>

            <h3 className="font-semibold text-lg mt-4">
              a. Key Areas of Focus
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Prenatal Care:</strong> Monitoring the health of the
                mother and fetus during pregnancy, including routine check-ups
                and screenings.
              </li>
              <li>
                <strong>Labor and Delivery:</strong> Management of the birthing
                process, including pain relief options and delivery methods
                (vaginal or cesarean).
              </li>
              <li>
                <strong>Postpartum Care:</strong> Support and monitoring of the
                mother after childbirth, addressing physical and emotional
                health.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Common Procedures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Ultrasound:</strong> Imaging technique used to monitor
                fetal development and detect abnormalities.
              </li>
              <li>
                <strong>Amniocentesis:</strong> Procedure to collect amniotic
                fluid for genetic testing.
              </li>
              <li>
                <strong>Epidural Anesthesia:</strong> Pain relief method used
                during labor.
              </li>
              <li>
                <strong>Cesarean Section (C-section):</strong> Surgical
                procedure for delivering a baby through the abdomen.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">2. Gynecology</h2>
            <p>
              Gynecology is the branch of medicine that deals with the female
              reproductive system, including the diagnosis and treatment of
              disorders and diseases.
            </p>

            <h3 className="font-semibold text-lg mt-4">
              a. Key Areas of Focus
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Menstrual Disorders:</strong> Management of irregular
                periods, heavy bleeding, and premenstrual syndrome (PMS).
              </li>
              <li>
                <strong>Reproductive Health:</strong> Issues related to
                fertility, contraception, and sexually transmitted infections
                (STIs).
              </li>
              <li>
                <strong>Menopause:</strong> Management of symptoms and health
                issues related to menopause.
              </li>
              <li>
                <strong>Gynecological Cancers:</strong> Screening, diagnosis,
                and treatment of cancers such as cervical, ovarian, and uterine
                cancer.
              </li>
              <li>
                <strong>Pelvic Disorders:</strong> Conditions like
                endometriosis, fibroids, and pelvic inflammatory disease (PID).
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">b. Common Procedures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pap Smear:</strong> Screening test for cervical cancer.
              </li>
              <li>
                <strong>Colposcopy:</strong> Examination of the cervix using a
                magnifying instrument.
              </li>
              <li>
                <strong>Hysteroscopy:</strong> Procedure to view the inside of
                the uterus.
              </li>
              <li>
                <strong>Laparoscopy:</strong> Minimally invasive surgery to
                diagnose and treat conditions within the pelvis.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">
              3. Importance of Gynecology and Obstetrics
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preventive Care:</strong> Regular check-ups and
                screenings help in early detection and prevention of diseases.
              </li>
              <li>
                <strong>Comprehensive Care:</strong> Addresses the full spectrum
                of women's health, from adolescence through menopause and
                beyond.
              </li>
              <li>
                <strong>Education and Counseling:</strong> Provides women with
                information about reproductive health, family planning, and
                healthy lifestyle choices.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">
              4. Considerations for Patients
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Regular Check-Ups:</strong> Women are encouraged to have
                regular gynecological exams, starting in their teenage years.
              </li>
              <li>
                <strong>Open Communication:</strong> Patients should feel
                comfortable discussing any health concerns with their healthcare
                provider.
              </li>
              <li>
                <strong>Holistic Approach:</strong> Consideration of physical,
                emotional, and social factors affecting women's health.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              Obstetrics and Gynecology are essential fields that play a crucial
              role in maintaining women's health throughout their lives. By
              providing comprehensive care, education, and support, healthcare
              professionals in these specialties help women navigate their
              reproductive health effectively.
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
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Gynaecology
            </h2>
            <ul className="space-y-4">
              {data1.sidebarLinks.map((item, index) => (
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

export default ObstetricsAndGynaecologyT;
