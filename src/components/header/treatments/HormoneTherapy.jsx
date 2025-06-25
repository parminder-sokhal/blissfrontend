import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: "Chemotherapy", link: "/Chemotherapy" },
    { title: "Radiation therapy", link: "/RadiationTherapy" },
    { title: "Surgical oncology procedures", link: "/SurgicalOncology" },
    { title: "Targeted therapy", link: "/TargetedTherapy" },
    { title: "Immunotherapy", link: "/Immunotherapy" },
    { title: "Bone marrow or stem cell transplant", link: "/BoneMarrow" },
    { title: "Palliative care and pain management", link: "/PalliativeCare" },
    { title: "Hormone therapy", link: "/HormoneTherapy" },
    { title: "Oncological imaging and biopsy services", link: "/OncologicalImagingBiopsy" },
  ],
};

const HormoneTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Hormone Therapy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Hormone therapy, also known as hormone replacement therapy (HRT), involves the use of hormones to treat various medical conditions. It is commonly used in the management of hormonal imbalances, particularly during menopause, and in certain cancers.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Purpose of Hormone Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Relieving Symptoms:</strong> Reducing hot flashes, mood swings, and night sweats.</li>
              <li><strong>Preventing Bone Loss:</strong> Decreasing the risk of osteoporosis in postmenopausal women.</li>
              <li><strong>Treating Hormone-Sensitive Cancers:</strong> Supporting treatment for breast and prostate cancer.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Types of Hormone Therapy</h2>

            <h3 className="text-xl font-semibold">a. Estrogen Therapy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Indications:</strong> Menopausal symptom relief and osteoporosis prevention.</li>
              <li><strong>Forms:</strong> Pills, patches, gels, or vaginal creams.</li>
            </ul>

            <h3 className="text-xl font-semibold">b. Progesterone Therapy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Indications:</strong> Used with estrogen to reduce endometrial cancer risk.</li>
              <li><strong>Forms:</strong> Pills, injections, or IUDs.</li>
            </ul>

            <h3 className="text-xl font-semibold">c. Testosterone Therapy</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Indications:</strong> For men with low testosterone and some women with imbalances.</li>
              <li><strong>Forms:</strong> Injections, patches, gels, or pellets.</li>
            </ul>

            <h3 className="text-xl font-semibold">d. Combination Therapy</h3>
            <p>Estrogen and progesterone combined, typically used for women during menopause.</p>

            <h2 className="text-2xl font-semibold mt-4">3. Indications for Hormone Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Menopausal symptoms such as hot flashes and vaginal dryness</li>
              <li>Osteoporosis prevention in postmenopausal women</li>
              <li>Hormone-sensitive cancers like breast and prostate cancer</li>
              <li>Hypogonadism in men (low testosterone)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Benefits of Hormone Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Symptom Relief:</strong> Significant reduction in menopausal discomfort.</li>
              <li><strong>Improved Quality of Life:</strong> Better physical and emotional balance.</li>
              <li><strong>Bone Health:</strong> Helps maintain bone density.</li>
              <li><strong>Cardiovascular Health:</strong> May support heart health when started early.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">5. Risks and Side Effects</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Increased risk of breast and endometrial cancer with long-term use</li>
              <li>Possible cardiovascular risks: blood clots, stroke, or heart disease</li>
              <li>Side effects: bloating, breast tenderness, mood swings, headaches</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">6. Considerations Before Starting Hormone Therapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Review personal and family medical history</li>
              <li>Discuss symptoms and treatment goals with your doctor</li>
              <li>Select the appropriate type and dosage of therapy</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">7. Monitoring and Follow-Up</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Routine physical exams to monitor response and safety</li>
              <li>Regular screenings like mammograms and pelvic exams</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Hormone therapy is a valuable treatment option for managing hormonal changes and improving quality of life during menopause and certain cancers. Patients should work closely with their healthcare provider to make informed decisions and receive tailored care.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Oncology</h2>
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

export default HormoneTherapy;