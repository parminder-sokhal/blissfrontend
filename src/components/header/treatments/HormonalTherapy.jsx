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

const HormonalTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/pictures/ADHD.jpeg)" }}
      ></div>

      <div className="px-6 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Hormonal Therapy</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Hormonal therapy involves the use of hormones to treat various
              conditions related to hormonal imbalances, including PCOS and
              menopause. This therapy can help alleviate symptoms and improve
              the quality of life for affected individuals.
            </p>

            <h2 className="text-xl font-semibold">1. Hormonal Therapy for PCOS</h2>
            <p>
              Polycystic Ovary Syndrome (PCOS) is a common endocrine disorder.
              Hormonal therapy can help manage symptoms associated with PCOS.
            </p>

            <h3 className="font-semibold mt-4">a. Goals of Hormonal Therapy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regulate menstrual cycles</li>
              <li>Reduce androgen levels</li>
              <li>Manage acne, hirsutism, and weight gain</li>
            </ul>

            <h3 className="font-semibold mt-4">b. Common Hormonal Treatments</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Combined Oral Contraceptives (COCs):</strong> Regulate
                cycles, reduce bleeding and androgens.
              </li>
              <li>
                <strong>Progestin Therapy:</strong> Regulates periods and
                protects the uterine lining.
              </li>
              <li>
                <strong>Anti-Androgens (e.g., Spironolactone):</strong> Reduce
                hirsutism and acne.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">2. Hormonal Therapy for Menopause</h2>
            <p>
              Menopause marks the end of reproductive years. Hormonal therapy
              helps relieve symptoms and prevent long-term health issues.
            </p>

            <h3 className="font-semibold mt-4">a. Goals of Hormonal Therapy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Relieve hot flashes, night sweats, and dryness</li>
              <li>Prevent osteoporosis</li>
            </ul>

            <h3 className="font-semibold mt-4">b. Common Treatments</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hormone Replacement Therapy (HRT):</strong> Includes ET
                or CHT based on uterine status.
              </li>
              <li>
                <strong>Low-Dose Antidepressants:</strong> Help with mood and hot
                flashes.
              </li>
              <li>
                <strong>Vaginal Estrogen:</strong> Treats local dryness and
                discomfort.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">3. Considerations and Risks</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Risks:</strong> Blood clots, stroke, cancer (long-term use).
              </li>
              <li>
                <strong>Side Effects:</strong> Nausea, headaches, mood changes.
              </li>
              <li>
                <strong>Consultation:</strong> Always discuss your medical history
                with a healthcare provider.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              Hormonal therapy plays a significant role in managing conditions
              like PCOS and menopause. By restoring hormonal balance and
              alleviating symptoms, it greatly improves quality of life for many
              women.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Gynaecological</h2>
            <ul className="space-y-4">
              {sidebarLinks.map((item, index) => (
                <li key={index} className="flex items-center text-pink-600 hover:text-pink-800">
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

export default HormonalTherapy;