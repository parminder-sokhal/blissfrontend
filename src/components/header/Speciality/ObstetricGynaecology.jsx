import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "ADHD", link: "/ADHD" },
    { title: "Autism", link: "/autism" },
    { title: "Incontinence", link: "/incontinence" },
    { title: "Behaviour Issues", link: "/behaviour-issues" },
    { title: "Conduct Disorder", link: "/conduct-disorder" },
    { title: "Learning Disability", link: "/learning-disability" },
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
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome to Bliss Hospital
            </h2>
            <p>
              We specialize in providing exceptional care in obstetrics and
              gynecology. Our mission is to support women’s health through every
              stage of life, from adolescence to menopause and beyond. Our
              experienced team is here to offer personalized, compassionate care
              tailored to your unique needs.
            </p>

            <h2 className="font-semibold text-xl mt-4">What is Obstetrics?</h2>
            <p>
              Obstetrics is a branch of medicine that focuses on pregnancy,
              childbirth, and the postpartum period. Our obstetric services
              include:
            </p>

            <h3 className="font-medium mt-2">Comprehensive Prenatal Care:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Regular check-ups to monitor the health of both mother and baby.
              </li>
              <li>
                Screenings and tests to detect any potential complications
                early.
              </li>
              <li>
                Nutritional counseling and lifestyle advice to promote a healthy
                pregnancy.
              </li>
            </ul>

            <h3 className="font-medium mt-4">Labor and Delivery:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personalized birthing plans that consider your preferences and
                medical history.
              </li>
              <li>
                Continuous support during labor, including pain management
                options such as epidurals or natural methods.
              </li>
              <li>
                Immediate care for newborns, including assessments and
                vaccinations.
              </li>
            </ul>

            <h3 className="font-medium mt-4">Postpartum Care:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Follow-up appointments to monitor recovery and address any
                physical or emotional concerns.
              </li>
              <li>Support for breastfeeding and newborn care.</li>
            </ul>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Women’s Health Services
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
