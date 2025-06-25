import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: "Medications for chronic illnesses", link: "/MedicationForChronic" },
    { title: "IV fluids and electrolyte management", link: "/IVfluids" },
    { title: "Blood transfusions", link: "/BloodTransfusion" },
    { title: "Antibiotic therapy for infections", link: "/AntibioticTherapy" },
    { title: "Non-invasive diagnostic procedures", link: "/NonInvasiveDiagnostic" },
    { title: "Management of infectious diseases ", link: "/ManagementInfections" },
    { title: "Lifestyle counselling ", link: "/LifestyleCounselling" },
    { title: "Vaccinations and Immunizations", link: "/Vaccinations" },
    { title: "Management of poisoning and drug overdose ", link: "/PoisoningAndDrug" },
  ],
};

const Vaccinations = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Vaccinations and Immunizations
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Vaccinations are a crucial public health tool used to prevent infectious diseases. They work by stimulating the immune system to recognize and fight pathogens, thereby reducing the incidence and severity of diseases.
            </p>

            <h2 className="font-semibold text-xl mt-4">1. Importance of Vaccinations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Disease Prevention:</strong> Prevents diseases like measles, polio, and influenza.</li>
              <li><strong>Herd Immunity:</strong> Protects vulnerable individuals who cannot be vaccinated.</li>
              <li><strong>Reduction of Healthcare Costs:</strong> Minimizes expenses associated with treating infectious diseases.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">2. Types of Vaccines</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Live Attenuated Vaccines:</strong> Weakened pathogens (e.g., MMR, yellow fever).</li>
              <li><strong>Inactivated Vaccines:</strong> Killed pathogens (e.g., polio, hepatitis A).</li>
              <li><strong>Subunit, Recombinant, and Conjugate Vaccines:</strong> Use parts of pathogens (e.g., HPV, pertussis).</li>
              <li><strong>mRNA Vaccines:</strong> Genetic instructions to produce an immune response (e.g., COVID-19 vaccines).</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">3. Recommended Vaccination Schedules</h2>

            <h3 className="font-semibold mt-2">Childhood Vaccines (Birth to 2 Years)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hepatitis B</li>
              <li>DTaP (Diphtheria, Tetanus, Pertussis)</li>
              <li>Hib (Haemophilus influenzae type b)</li>
              <li>IPV (Inactivated Poliovirus)</li>
              <li>MMR (Measles, Mumps, Rubella)</li>
              <li>Varicella (Chickenpox)</li>
              <li>PCV13 (Pneumococcal conjugate)</li>
            </ul>

            <h3 className="font-semibold mt-2">Adolescent Vaccines (Ages 11–12)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tdap (Tetanus, Diphtheria, Pertussis)</li>
              <li>HPV (Human Papillomavirus)</li>
              <li>Meningococcal conjugate</li>
            </ul>

            <h3 className="font-semibold mt-2">Adult Vaccines</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Influenza (annually)</li>
              <li>Tdap (booster every 10 years)</li>
              <li>Shingles (adults over 50)</li>
              <li>Pneumococcal vaccines (for older adults and those with health risks)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">4. Special Considerations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Travel Vaccines:</strong> Yellow fever, typhoid, etc. for specific destinations.</li>
              <li><strong>Immunocompromised Individuals:</strong> Some vaccines may be contraindicated.</li>
              <li><strong>Pregnancy:</strong> Tdap and influenza are typically recommended during pregnancy.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">5. Addressing Concerns</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vaccine Safety:</strong> All vaccines undergo strict safety and efficacy testing.</li>
              <li><strong>Misinformation:</strong> Correct myths with evidence-based education.</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Vaccinations and immunizations are vital for individual and public health. They prevent the spread of infectious diseases, protect vulnerable populations, and contribute to overall community health. Staying informed about vaccination schedules and recommendations is essential for maintaining health and preventing disease outbreaks.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              General Medicine
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

export default Vaccinations;