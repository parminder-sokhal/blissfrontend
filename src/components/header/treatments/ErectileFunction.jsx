import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/ErectileFunction.jpeg", // You can replace with a more relevant ED image
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

const ErectileFunction = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Erectile Dysfunction Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Erectile dysfunction (ED) is a common condition that affects many men at various stages of life. 
              Effective management is essential for restoring sexual health and improving quality of life. 
              Here’s an overview of the approaches to managing erectile dysfunction:
            </p>

            <h2 className="text-xl font-semibold mt-4">Understanding Erectile Dysfunction</h2>
            <p>ED is defined as the inability to achieve or maintain an erection sufficient for satisfactory sexual performance. It can be caused by a variety of factors, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Physical Causes:</strong> Conditions such as diabetes, hypertension, heart disease, and hormonal imbalances.</li>
              <li><strong>Psychological Causes:</strong> Stress, anxiety, depression, and relationship issues.</li>
              <li><strong>Lifestyle Factors:</strong> Smoking, excessive alcohol consumption, obesity, and lack of physical activity.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Management Strategies</h2>

            <h3 className="font-semibold">1. Consultation with a Healthcare Provider</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Diagnosis:</strong> A thorough evaluation by a healthcare professional to determine the underlying causes of ED.</li>
              <li><strong>Tailored Treatment Plan:</strong> Based on individual needs and health conditions.</li>
            </ul>

            <h3 className="font-semibold mt-4">2. Medications</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Oral Medications:</strong> PDE5 inhibitors like Viagra, Cialis, and Levitra enhance blood flow to the penis.</li>
              <li><strong>Hormone Therapy:</strong> Testosterone replacement therapy if hormonal imbalances are found.</li>
            </ul>

            <h3 className="font-semibold mt-4">3. Psychological Counseling</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Therapy:</strong> CBT and other counseling can address stress and emotional causes.</li>
              <li><strong>Couples Therapy:</strong> Helps improve communication and intimacy with a partner.</li>
            </ul>

            <h3 className="font-semibold mt-4">4. Lifestyle Modifications</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Healthy Diet:</strong> Focus on whole foods and balanced nutrition.</li>
              <li><strong>Regular Exercise:</strong> Improves circulation, mood, and stamina.</li>
              <li><strong>Smoking Cessation:</strong> Major improvement in erectile function.</li>
              <li><strong>Limiting Alcohol:</strong> Helps reduce ED risk.</li>
            </ul>

            <h3 className="font-semibold mt-4">5. Alternative Treatments</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Vacuum Erection Devices:</strong> Create a vacuum to draw blood into the penis.</li>
              <li><strong>Penile Injections:</strong> Medications injected to trigger erection directly.</li>
              <li><strong>Urethral Suppositories:</strong> Medication pellets inserted into the urethra.</li>
            </ul>

            <h3 className="font-semibold mt-4">6. Surgical Options</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Penile Implants:</strong> Surgical solution for non-responders to other treatments.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              Erectile dysfunction is a manageable condition, and various treatment options are available. 
              If you or a loved one is experiencing ED, it’s important to seek professional help. 
              Early intervention can lead to effective management and improved quality of life.
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

export default ErectileFunction;