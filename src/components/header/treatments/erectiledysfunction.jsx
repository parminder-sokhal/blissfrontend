import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ErectileDysfunction.jpeg", // Replace with actual image path
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

const ErectileDysfunction = () => {
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
              Erectile dysfunction (ED) is the inability to achieve or maintain an erection sufficient for satisfactory sexual performance. It can be caused by physical, psychological, or a combination of factors. Effective management of ED involves a comprehensive approach tailored to the individual.
            </p>

            <h2 className="text-xl font-semibold mt-4">1. Diagnosis</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Medical History:</strong> Discussion of health conditions, medications, and lifestyle.</li>
              <li><strong>Physical Examination:</strong> Check for anatomical or physiological issues.</li>
              <li><strong>Laboratory Tests:</strong> Hormone levels, cholesterol, and blood sugar testing.</li>
              <li><strong>Psychological Assessment:</strong> Identifying stress, anxiety, or depression.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">2. Lifestyle Modifications</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Healthy Diet:</strong> Emphasis on fruits, vegetables, and whole grains.</li>
              <li><strong>Exercise:</strong> Regular physical activity improves blood flow and health.</li>
              <li><strong>Weight Management:</strong> Essential for overall sexual and cardiovascular health.</li>
              <li><strong>Quitting Smoking:</strong> Improves circulation and erectile function.</li>
              <li><strong>Limiting Alcohol:</strong> Helps restore normal sexual performance.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">3. Psychological Counseling</h2>
            <p>Counseling is effective for men with ED related to psychological causes.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Addresses negative thoughts and behaviors.</li>
              <li><strong>Couples Therapy:</strong> Encourages open communication and intimacy.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">4. Medical Treatments</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Oral Medications (PDE5 inhibitors):</strong></li>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sildenafil (Viagra)</li>
                <li>Tadalafil (Cialis)</li>
                <li>Vardenafil (Levitra)</li>
                <li>Avanafil (Stendra)</li>
              </ul>
              <li><strong>Self-Injection Therapy:</strong> Alprostadil injections directly into the penis.</li>
              <li><strong>Urethral Suppositories:</strong> Alprostadil inserted into the urethra.</li>
              <li><strong>Vacuum Erection Devices (VED):</strong> Creates an erection using vacuum pressure.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">5. Surgical Options</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Penile Implants:</strong> Surgically inserted devices to allow erections.</li>
              <li><strong>Vascular Surgery:</strong> Improves blood supply to the penis.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">6. Hormone Therapy</h2>
            <p>
              If low testosterone is a factor, hormone replacement therapy (HRT) may be considered under medical supervision.
            </p>

            <h2 className="text-xl font-semibold mt-4">Conclusion</h2>
            <p>
              Erectile dysfunction is a common condition that can often be successfully managed with a combination of therapies. Early consultation with a healthcare professional leads to better outcomes, improved confidence, and overall well-being.
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

export default ErectileDysfunction;