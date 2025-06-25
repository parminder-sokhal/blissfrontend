import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with actual chemotherapy-related image path
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

const Chemotherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Chemotherapy</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Chemotherapy is a type of cancer treatment that uses drugs to kill or inhibit the growth of cancer cells. It can be used alone or in combination with other treatments such as surgery or radiation therapy.
            </p>

            <h2 className="text-2xl font-semibold mt-4">1. Purpose of Chemotherapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Curative Treatment:</strong> Aims to eliminate cancer cells completely.</li>
              <li><strong>Adjuvant Therapy:</strong> Used after surgery to reduce recurrence risk.</li>
              <li><strong>Neoadjuvant Therapy:</strong> Given before surgery to shrink tumors.</li>
              <li><strong>Palliative Care:</strong> Relieves symptoms in advanced cancer cases.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">2. Mechanism of Action</h2>
            <p>
              Chemotherapy targets rapidly dividing cells. While it affects cancer cells, it can also impact normal fast-growing cells, leading to side effects.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Alkylating Agents:</strong> Damage DNA (e.g., cyclophosphamide).</li>
              <li><strong>Antimetabolites:</strong> Disrupt DNA/RNA synthesis (e.g., methotrexate).</li>
              <li><strong>Antitumor Antibiotics:</strong> Interfere with DNA replication (e.g., doxorubicin).</li>
              <li><strong>Mitotic Inhibitors:</strong> Prevent cell division (e.g., paclitaxel).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">3. Administration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Intravenous (IV):</strong> Common method for many regimens.</li>
              <li><strong>Oral:</strong> Pills or capsules taken at home.</li>
              <li><strong>Intramuscular/Subcutaneous:</strong> Injection into muscle or under skin.</li>
              <li><strong>Regional:</strong> Delivered to specific body areas (e.g., intrathecal).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">4. Treatment Regimens</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Single-Agent Therapy:</strong> One chemotherapy drug is used.</li>
              <li><strong>Combination Therapy:</strong> Multiple drugs used for greater effect.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">5. Side Effects</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nausea and Vomiting:</strong> Managed with medications.</li>
              <li><strong>Fatigue:</strong> Often due to blood cell impact.</li>
              <li><strong>Hair Loss:</strong> Varies by drug used.</li>
              <li><strong>Infection Risk:</strong> Lowered white blood cell count.</li>
              <li><strong>Mouth Sores:</strong> Due to mucosal damage.</li>
              <li><strong>Appetite Changes:</strong> Can lead to weight fluctuation.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">6. Monitoring and Follow-Up</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Blood Tests:</strong> Monitor organ function and blood cells.</li>
              <li><strong>Imaging Studies:</strong> Track tumor response to treatment.</li>
              <li><strong>Symptom Management:</strong> Address and control side effects.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">7. Advances in Chemotherapy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personalized Medicine:</strong> Treatments based on tumor genetics.</li>
              <li><strong>Targeted Therapies:</strong> Focused on specific cell pathways.</li>
              <li><strong>Immunotherapy Combination:</strong> Boosting immune response alongside chemo.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4">Conclusion</h2>
            <p>
              Chemotherapy is a cornerstone of cancer treatment, playing a vital role in curing, controlling, or alleviating symptoms. Understanding how it works, its side effects, and the evolving landscape of chemo helps patients and families make informed decisions.
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

export default Chemotherapy;
