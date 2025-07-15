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

const TreatmentForSTI = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/img/TreatmentForSTI.jpeg)" }}
      ></div>

      <div className="px-6 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Treatment for STIs</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Sexually transmitted infections (STIs) are spread mainly through
              sexual contact. Treatment depends on the type of infection and
              early diagnosis is critical for effective management.
            </p>

            <h2 className="text-xl font-semibold">1. Common Types of STIs and Their Treatments</h2>

            <h3 className="font-semibold mt-4">a. Bacterial STIs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Chlamydia:</strong> Treated with antibiotics like
                azithromycin or doxycycline. Partners must be treated to prevent reinfection.
              </li>
              <li>
                <strong>Gonorrhea:</strong> Usually treated with ceftriaxone and
                azithromycin. Due to increasing resistance, combination therapy is standard.
              </li>
              <li>
                <strong>Syphilis:</strong> Treated with benzathine penicillin G.
                Follow-up testing is important to confirm eradication.
              </li>
            </ul>

            <h3 className="font-semibold mt-4">b. Viral STIs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>HIV:</strong> Managed with antiretroviral therapy (ART). No cure, but lifelong management is effective.
              </li>
              <li>
                <strong>Herpes (HSV):</strong> Antiviral meds like acyclovir or
                valacyclovir reduce outbreaks and symptoms.
              </li>
              <li>
                <strong>HPV:</strong> No cure for the virus, but warts and
                precancerous lesions can be treated. HPV vaccination is
                preventive.
              </li>
            </ul>

            <h3 className="font-semibold mt-4">c. Parasitic STIs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Trichomoniasis:</strong> Treated with metronidazole or
                tinidazole. Both partners must be treated.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">2. General Treatment Guidelines</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Testing:</strong> Regular STI screening is recommended,
                especially for sexually active individuals with multiple
                partners.
              </li>
              <li>
                <strong>Partner Notification:</strong> Crucial to control spread.
              </li>
              <li>
                <strong>Abstinence During Treatment:</strong> Avoid sexual
                activity until treatment is complete.
              </li>
              <li>
                <strong>Follow-Up Care:</strong> Ensure infection clearance and
                monitor complications.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">3. Prevention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use condoms and dental dams consistently and correctly.</li>
              <li>Vaccinate against HPV and hepatitis B.</li>
              <li>Routine screenings even when asymptomatic.</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Conclusion</h2>
            <p>
              Prompt and appropriate treatment of STIs not only benefits the
              individual but also reduces public health risks. Education, safe
              practices, and regular check-ups are essential in combating the
              spread and consequences of STIs.
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

export default TreatmentForSTI;