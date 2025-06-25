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

const InfertilityTreatment = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/pictures/ADHD.jpeg)" }}
      ></div>

      <div className="px-6 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Infertility Treatment: IVF and IUI</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Infertility is defined as the inability to conceive after one year of regular, unprotected intercourse. IVF and IUI are two widely used treatments to assist in conception.
            </p>

            <h2 className="text-xl font-semibold">1. Intrauterine Insemination (IUI)</h2>

            <h3 className="font-semibold mt-4">a. What is IUI?</h3>
            <p>
              IUI is a fertility procedure that introduces prepared sperm directly into a woman’s uterus during ovulation to enhance the chances of fertilization.
            </p>

            <h3 className="font-semibold mt-4">b. Indications for IUI</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unexplained infertility</li>
              <li>Mild male factor infertility</li>
              <li>Cervical mucus issues</li>
              <li>Ovulation problems</li>
              <li>Same-sex couples or single women</li>
            </ul>

            <h3 className="font-semibold mt-4">c. Procedure</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Monitoring ovulation through ultrasounds and blood tests</li>
              <li>Collecting and preparing the sperm sample</li>
              <li>Inserting sperm into the uterus with a thin catheter during ovulation</li>
            </ol>

            <h3 className="font-semibold mt-4">d. Success Rates</h3>
            <p>
              IUI success rates range from 10% to 20% per cycle, depending on factors such as age and fertility diagnosis.
            </p>

            <h2 className="text-xl font-semibold">2. In Vitro Fertilization (IVF)</h2>

            <h3 className="font-semibold mt-4">a. What is IVF?</h3>
            <p>
              IVF involves fertilizing eggs outside the body and transferring resulting embryos into the uterus. It is more complex but offers higher success rates.
            </p>

            <h3 className="font-semibold mt-4">b. Indications for IVF</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Blocked or damaged fallopian tubes</li>
              <li>Severe male infertility</li>
              <li>Endometriosis</li>
              <li>Genetic disorders</li>
              <li>Unexplained infertility</li>
              <li>Failed IUI attempts</li>
            </ul>

            <h3 className="font-semibold mt-4">c. Procedure</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Stimulating ovaries to produce multiple eggs</li>
              <li>Monitoring through tests and ultrasounds</li>
              <li>Retrieving mature eggs</li>
              <li>Fertilizing with sperm in a lab (may include ICSI)</li>
              <li>Culturing embryos for several days</li>
              <li>Transferring one or more embryos into the uterus</li>
            </ol>

            <h3 className="font-semibold mt-4">d. Success Rates</h3>
            <p>
              IVF success varies by age and health conditions, generally ranging from 20% to over 40% per cycle, with the highest success in younger women.
            </p>

            <h2 className="text-xl font-semibold">3. Considerations for Both Treatments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cost:</strong> Treatments can be expensive; coverage varies.</li>
              <li><strong>Emotional Support:</strong> Counseling and support groups can be helpful.</li>
              <li><strong>Healthy Lifestyle:</strong> Nutrition, exercise, and avoiding harmful substances can improve success rates.</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Conclusion</h2>
            <p>
              IVF and IUI provide viable options for couples and individuals facing infertility. A fertility specialist can help guide the choice of treatment based on medical and personal needs.
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

export default InfertilityTreatment;