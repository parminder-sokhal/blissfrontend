import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/ObstetricsAndGynecology.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "Obstetric And Gynaecology", link: "/ObstetricGynaecology" },
    { title: "Oncology", link: "/Oncology" },
    { title: "General surgery", link: "/GeneralSurgery" },
    { title: "General medicine", link: "/GeneralMedicine" },
    { title: "Urology", link: "/Urology" },
    { title: "Orthopaedic", link: "/Orthopaedic" },
    { title: "Onco surgery", link: "/OncoSurgery" },
  ],
};

const ObstetricGynaecology = () => {
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
          <h2 className="text-2xl font-semibold">Welcome to Bliss Hospital</h2>
          <p>
            We specialize in providing exceptional care
            in obstetrics and gynecology. Our mission is to support women’s
            health through every stage of life, from adolescence to menopause
            and beyond. Our experienced team is here to offer personalized,
            compassionate care tailored to your unique needs.
          </p>

          <h2 className="font-semibold text-xl mt-4">What is Obstetrics?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Comprehensive Prenatal Care:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Regular check-ups to monitor the health of both mother and baby.</li>
                <li>Screenings and tests to detect any potential complications early.</li>
                <li>Nutritional counseling and lifestyle advice to promote a healthy pregnancy.</li>
              </ul>
            </li>
            <li>
              <strong>Labor and Delivery:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Personalized birthing plans tailored to your needs.</li>
                <li>Pain management options including epidurals or natural methods.</li>
                <li>Immediate care for newborns, including assessments and vaccinations.</li>
              </ul>
            </li>
            <li>
              <strong>Postpartum Care:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Follow-up appointments and emotional support.</li>
                <li>Support for breastfeeding and newborn care.</li>
              </ul>
            </li>
          </ul>

          <h2 className="font-semibold text-xl mt-4">What is Gynecology?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Routine Exams:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Annual pelvic exams and Pap smears.</li>
                <li>Breast exams and discussions about breast health.</li>
              </ul>
            </li>
            <li>
              <strong>Family Planning:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contraception counseling and fertility awareness.</li>
                <li>Assisted reproductive technologies if needed.</li>
              </ul>
            </li>
            <li>
              <strong>Menopause Management:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Care for menopausal symptoms with HRT or alternatives.</li>
                <li>Lifestyle education to manage symptoms effectively.</li>
              </ul>
            </li>
            <li>
              <strong>Gynecological Surgery:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Minimally invasive procedures for fibroids, endometriosis, etc.</li>
                <li>Hysterectomy and other surgical interventions.</li>
              </ul>
            </li>
          </ul>

          <h2 className="font-semibold text-xl mt-4">Why Choose Bliss Hospital?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Expert Team:</strong> Board-certified doctors providing top care.</li>
            <li><strong>Patient-Centered Approach:</strong> Empowering patients through education and trust.</li>
            <li><strong>State-of-the-Art Facilities:</strong> Advanced technology in a welcoming environment.</li>
          </ul>

          <h2 className="font-semibold text-xl mt-4">Patient Resources</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Educational materials on women’s health.</li>
            <li>Online appointment scheduling system.</li>
            <li>Patient portal for accessing records and communication.</li>
          </ul>

          <h2 className="font-semibold text-xl mt-4">Schedule an Appointment</h2>
          <p>
            Your health is essential. Contact us today to schedule an appointment or to learn more about our services. At Bliss Hospital, we are here to support you in every aspect of your health journey.
          </p>
        </div>

        {/* ✅ Sidebar */}
        <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Speciality
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

export default ObstetricGynaecology;
