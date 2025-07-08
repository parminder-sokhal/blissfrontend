import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Vasectomy.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "Kidney Stone Treatment", link: "/KidneyStoneTreatment" },
    { title: "Prostate Surgery", link: "/ProstateSurgery" },
    { title: "Urinary Tract Infection Treatment", link: "/UrinaryTractInfection" },
    { title: "Bladder Cancer Management", link: "/BladderCancer" },
    { title: "Male Infertility Treatment", link: "/MaleInfertility" },
    { title: "Erectile Dysfunction Management", link: "/ErectileDysfunction" },
    { title: "Cystoscopy", link: "/Cystoscopy" },
    { title: "Vasectomy And Vasectomy Reversal", link: "/Vasectomy" },
    { title: "Reconstructive Urological Surgery", link: "/ReconstructiveUrological" },
  ],
};

const Vasectomy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Vasectomy and Vasectomy Reversal
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>Vasectomy</strong> is a surgical procedure for male sterilization, while <strong>vasectomy reversal</strong> is a procedure to restore fertility after a vasectomy. Here’s a detailed overview of both procedures.
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Vasectomy</h2>

            <p><strong>Definition:</strong></p>
            <p>
              A vasectomy is a minor surgical procedure that involves cutting and sealing the vas deferens, the tubes that carry sperm from the testicles to the urethra. This prevents sperm from mixing with semen during ejaculation.
            </p>

            <p><strong>Indications:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Permanent contraception for men who are certain they do not want more children.</li>
              <li>Couples who have completed their family or do not wish to have children.</li>
            </ul>

            <p><strong>Procedure:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Preparation:</strong> Typically performed in an outpatient setting with local anesthesia.</li>
              <li><strong>Technique:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Conventional Vasectomy:</strong> Involves small incisions in the scrotum to access the vas deferens.</li>
                  <li><strong>No-Scalpel Vasectomy:</strong> Uses a small puncture, reducing recovery time and complications.</li>
                </ul>
              </li>
              <li><strong>Recovery:</strong> Most men can resume normal activities within a few days. Avoid strenuous activity for about a week.</li>
            </ul>

            <p><strong>Effectiveness:</strong></p>
            <p>
              Vasectomy is over 99% effective as a form of contraception. However, sperm may remain in the semen for a few months, so follow-up testing is required.
            </p>

            <h2 className="text-xl font-semibold mt-4">2. Vasectomy Reversal</h2>

            <p><strong>Definition:</strong></p>
            <p>
              A vasectomy reversal (vasovasostomy) reconnects the vas deferens to restore sperm flow and potentially regain fertility.
            </p>

            <p><strong>Indications:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Men who wish to father children after having a vasectomy.</li>
              <li>Couples who have changed their minds about having children.</li>
            </ul>

            <p><strong>Procedure:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Preparation:</strong> Usually done under general anesthesia in a surgical setting.</li>
              <li><strong>Technique:</strong>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Surgeon reconnects the severed vas deferens.</li>
                  <li>If needed, vasoepididymostomy may be performed to connect vas deferens to epididymis.</li>
                </ul>
              </li>
              <li><strong>Recovery:</strong> Several weeks, with limitations on strenuous activity.</li>
            </ul>

            <p><strong>Effectiveness:</strong></p>
            <p>
              Success depends on time since vasectomy and surgical technique. Pregnancy rates range from 30% to over 90%.
            </p>

            <h2 className="text-xl font-semibold mt-4">3. Risks and Considerations</h2>

            <p><strong>Vasectomy Risks:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Infection, bleeding, or pain at the surgical site.</li>
              <li>Post-vasectomy pain syndrome (chronic scrotal pain).</li>
            </ul>

            <p><strong>Vasectomy Reversal Risks:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Infection and bleeding similar to vasectomy.</li>
              <li>Pregnancy not guaranteed—depends on multiple factors.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              Both vasectomy and vasectomy reversal are significant decisions. Consulting with a qualified urologist can help you understand the risks, benefits, and outcomes, enabling an informed choice regarding male reproductive health.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Urology Services
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

export default Vasectomy;