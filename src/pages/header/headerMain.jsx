import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeaderMain() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownNavbarOpen, setIsDropdownNavbarOpen] = useState(false);
  const [isDropdownNavbarOpenservices, setIsDropdownNavbarOpenservices] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownNavbarOpen(false);
    setIsDropdownNavbarOpenservices(false);
  };

  const toggleNavbarDropdownservices = () => {
    setIsDropdownNavbarOpenservices(!isDropdownNavbarOpenservices);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpen(false);
  };

  const toggleNavbarDropdown = () => {
    setIsDropdownNavbarOpen(!isDropdownNavbarOpen);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpenservices(false);
  };

  const handleDropdownHover = () => {
    setIsDropdownOpen(true);
    setIsDropdownNavbarOpen(false);
    setIsDropdownNavbarOpenservices(false);
  };

  const handleNavbarDropdownHover = () => {
    setIsDropdownNavbarOpen(true);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpenservices(false);
  };

  const handleNavbarDropdownHoverservices = () => {
    setIsDropdownNavbarOpenservices(true);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  // Manage body scroll locking
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest("nav") === null) {
        setIsDropdownOpen(false);
        setIsDropdownNavbarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // const handleDropdownLeave = () => {
  //   setIsDropdownOpen(false);
  // };

  const handleNavbarDropdownLeave = () => {
    setIsDropdownNavbarOpen(false);
  };
  const handleNavbarDropdownLeaveservices = () => {
    setIsDropdownNavbarOpenservices(false);
  };

  return (
    <nav className="bg-white border-black top-10 fixed w-full z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo/blisslogo1.png"
              className="h-12 sm:h-16"
              alt="blisshospital Logo"
            />
            <img
              src="/img/NABH.jpeg"
              className="h-10 sm:h-12"
              alt="blisshospital Logo"
            />
            <img
              src="/img/logo.png"
              className="h-10"
              alt="blisshospital Logo"
            />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex text-md flex-grow justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0"
                >
                  About
                </Link>
              </li>
              <li onMouseEnter={handleDropdownHover}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Treatment
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>

              <li onMouseEnter={handleNavbarDropdownHoverservices}>
                <button
                  onClick={toggleNavbarDropdownservices}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Speciality
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservices ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeaveservices}
                  onClick={handleNavbarDropdownLeaveservices}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto px-2 absolute mt-2 ${isDropdownNavbarOpenservices ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <Link
                        to="/ObstetricGynaecology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Obstetric And Gynaecology
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Oncology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Oncology
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/GeneralSurgery"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        General surgery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/GeneralMedicine"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        General medicine
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Urology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Urology
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Orthopaedic"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Orthopaedic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/OncoSurgery"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Onco surgery
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li onMouseEnter={handleNavbarDropdownHover}>
                <button
                  onClick={toggleNavbarDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Media
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeave}
                  onClick={handleNavbarDropdownLeave}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute mt-2 ${isDropdownNavbarOpen ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <Link
                        to="/Pictures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pictures Gallery
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/Youtube"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Video Gallery
                      </Link>
                    </li> */}

                    <li>
                      <Link
                        to="/Instagram"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/management"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0"
                >
                  Management
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block text-xl">
            <Link
              to="/doctors"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
            >
              OPD Availability
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="block lg:hidden text-black"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* ✅ Desktop Mega Menu */}
        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(false)}
        >
          {isDropdownOpen && (
            <div className="hidden md:block mt-2 absolute left-0 w-full bg-white z-40">
              <div className="grid px-40 py-5 mx-auto text-gray-900 gap-6 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 ">
                {/* General Medicine */}
                <ul>
                  <li>
                    <Link
                      to="/GeneralMedicineT"
                      className="font-semibold text-md  hover:text-pink-700"
                    >
                      General Medicine
                    </Link>
                    <Link
                      to="/MedicationForChronic"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Medications for Chronic Illnesses
                    </Link>
                    <Link
                      to="/IVfluids"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      IV Fluids and Electrolyte Management
                    </Link>
                    <Link
                      to="/BloodTransfusion"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Blood Transfusions
                    </Link>
                    <Link
                      to="/AntibioticTherapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Antibiotic Therapy for Infections
                    </Link>
                    <Link
                      to="/NonInvasiveDiagnostic"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Non-Invasive Diagnostic Procedures
                    </Link>
                    <Link
                      to="/ManagementInfections"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Management of Infectious Diseases
                    </Link>
                    <Link
                      to="/LifestyleCounselling"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Lifestyle Counselling
                    </Link>
                    <Link
                      to="/Vaccinations"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Vaccinations and Immunizations
                    </Link>
                    <Link
                      to="/PoisoningAndDrug"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Management of Poisoning and Drug Overdose
                    </Link>
                  </li>
                </ul>

                {/* Oncology */}
                <ul>
                  <li>
                    <Link
                      to="/OncologyT"
                      className="font-semibold text-md  hover:text-pink-700"
                    >
                      Oncology
                    </Link>
                    <Link
                      to="/Chemotherapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Chemotherapy
                    </Link>

                    <Link
                      to="/SurgicalOncology"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Surgical Oncology Procedures
                    </Link>
                    <Link
                      to="/TargetedTherapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Targeted Therapy
                    </Link>
                    <Link
                      to="/Immunotherapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Immunotherapy
                    </Link>

                    <Link
                      to="/PalliativeCare"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Palliative care and pain management
                    </Link>
                    <Link
                      to="/HormoneTherapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Hormone therapy
                    </Link>
                    <Link
                      to="/OncologicalImagingBiopsy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Oncological biopsy services
                    </Link>
                  </li>
                </ul>

                {/* Gynaecology and Obstetrics */}

                <ul>
                  <li>
                    <Link to="" className="font-semibold text-md">
                      Gynaecology and Obstetrics
                    </Link>
                    <Link
                      to="/Obstetrics"
                      className="font-semibold block p-1 text-md"
                    >
                      Obstetrics
                    </Link>
                    <Link
                      to="/AntenatalAndPostnatal"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Antenatal And Postnatal Care
                    </Link>
                    <Link
                      to="/NormalVaginalDelivery"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Normal Vaginal Delivery
                    </Link>
                    <Link
                      to="/CaesareanSection"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Caesarean Section
                    </Link>
                    <Link
                      to="/ManagementHighRiskPregnancy"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Management Of High-Risk Pregnancy
                    </Link>
                    <Link
                      to="/Ultrasound"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Ultrasound And Fetal Monitoring
                    </Link>
                    <Link
                      to="/EpiduralAnaesthesia"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Epidural Anaesthesia During Labor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Gynaecology"
                      className="font-semibold block p-1 text-md"
                    >
                      Gynaecology
                    </Link>

                    <Link
                      to="/HormonalTherapy"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Hormonal Therapy
                    </Link>
                    <Link
                      to="/PapSmears"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Pap Smears And Cervical Biopsies
                    </Link>
                    <Link
                      to="/Hysterectomy"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Hysterectomy
                    </Link>
                    <Link
                      to="/DilationAndCurettage"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Dilation And Curettage
                    </Link>
                    <Link
                      to="/TreatmentForSTI"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Treatment For STIs
                    </Link>
                    <Link
                      to="/InfertilityTreatment"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Infertility Treatment
                    </Link>
                    <Link
                      to="/LaparoscopyAndHysteroscopy"
                      className="block p-1 text-xs rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Laparoscopy And Hysteroscopy
                    </Link>
                  </li>
                </ul>

                {/* General Surgery*/}
                <ul>
                  <li>
                    <Link
                      to="/GeneralSurgeryT"
                      className="font-semibold text-md  hover:text-pink-700"
                    >
                      General Surgery
                    </Link>
                    <Link
                      to="/Appendectomy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Appendectomy
                    </Link>
                    <Link
                      to="/HerniaRepair"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Hernia Repair
                    </Link>
                    <Link
                      to="/GallbladderSurgery"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Gallbladder Surgery
                    </Link>
                    <Link
                      to="/ThyroidSurgery"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Thyroid Surgery
                    </Link>
                    <Link
                      to="/BreastSurgery"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Breast Surgery
                    </Link>
                    <Link
                      to="/Haemorrhoidectomy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Haemorrhoidectomy
                    </Link>
                    <Link
                      to="/ColonAndRectalSurgery"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Colon and Rectal surgery
                    </Link>
                    <Link
                      to="/TraumaSurgery"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Trauma Surgery
                    </Link>
                    <Link
                      to="/WoundCareDrainage"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Wound care and abscess drainage
                    </Link>
                  </li>
                </ul>

                {/* Neurology */}
                <ul>
                  <li>
                    <Link
                      to="/NeurologyT"
                      className="font-semibold text-md  hover:text-pink-700"
                    >
                      Neurology
                    </Link>
                    <Link
                      to="/StrokeManagement"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Stroke Management
                    </Link>
                    <Link
                      to="/AntiEpilepticDrugs"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Anti-Epileptic Drugs
                    </Link>
                    <Link
                      to="/MultipleSclerosis"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Multiple Sclerosis Management
                    </Link>
                    <Link
                      to="/MigraineChronicHeadache"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Migraine And Chronic Headache Management
                    </Link>
                    <Link
                      to="/ParkinsonDisease"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Parkinson’s disease treatment
                    </Link>
                    <Link
                      to="/NeuropathyAndMyopathy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Neuropathy And Myopathy Treatment
                    </Link>
                    <Link
                      to="/Neuroimaging"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Neuroimaging
                    </Link>
                    <Link
                      to="/LumbarPuncture"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Lumbar Puncture
                    </Link>
                    <Link
                      to="/BotoxTherapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Botox Therapy for Neurological Disorders
                    </Link>
                  </li>
                </ul>

                {/* Urology */}
                <ul>
                  <li>
                    <Link
                      to="/UrologyT"
                      className="font-semibold text-md  hover:text-pink-700"
                    >
                      Urology
                    </Link>
                    <Link
                      to="/KidneyStoneTreatment"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Kidney Stone Treatment
                    </Link>
                    <Link
                      to="/ProstateSurgery"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Prostate Surgery
                    </Link>
                    <Link
                      to="/UrinaryTractInfection"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Urinary Tract Infection Treatment
                    </Link>
                    <Link
                      to="/BladderCancer"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Bladder Cancer Management
                    </Link>
                    <Link
                      to="/MaleInfertility"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Male Infertility Treatment
                    </Link>
                    <Link
                      to="/ErectileDysfunction"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Erectile Dysfunction Management
                    </Link>
                    <Link
                      to="/Cystoscopy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Cystoscopy
                    </Link>
                    <Link
                      to="/Vasectomy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Vasectomy And Vasectomy Reversal
                    </Link>
                    <Link
                      to="/ReconstructiveUrological"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Reconstructive Urological Surgery
                    </Link>
                  </li>
                </ul>

                {/* Headache Clinic */}
                {/* <ul>
                  <li>
                    <Link
                      to="/headache-clinic"
                      className="font-semibold text-md  hover:text-pink-700"
                    >
                      Headache Clinic
                    </Link>
                    <Link
                      to="/migraine"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Migraine
                    </Link>
                    <Link
                      to="/tension-headache"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Tension Headache
                    </Link>
                  </li>
                </ul> */}

                {/* Pediatrics Treatment & Care*/}
                <ul>
                  <li>
                    <Link
                      to="/Pediatrics"
                      className="font-semibold text-md  hover:text-pink-700"
                    >
                      Pediatrics Treatment & Care
                    </Link>
                    {/* <Link
                      to="/seizure"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Seizure
                    </Link> */}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* ✅ Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-30 z-50 bg-white overflow-y-auto transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <div className="overflow-y-auto  py-10 px-10">
            <ul className="flex flex-col text-lg space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMobileMenu}
                  to="/about"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Treatment
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  onClick={toggleNavbarDropdownservices}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Speciality
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservices ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  onClick={toggleMobileMenu}
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-2 ${isDropdownNavbarOpenservices ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/ObstetricGynaecology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Obstetrics and Gynecology
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Oncology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Oncology
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/GeneralSurgery"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        General Surgery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/GeneralMedicine"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        General Medicine
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Urology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Urology
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Orthopaedic"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Orthopaedic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/OncoSurgery"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Onco Surgery
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  onClick={toggleNavbarDropdown}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Media
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  onClick={toggleMobileMenu}
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-2 ${isDropdownNavbarOpen ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/Pictures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pictures Gallery
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/youtube"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Video Gallery
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="/Instagram"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  onClick={toggleMobileMenu}
                  to="/careers"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/management"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-800 md:p-0"
                >
                  Management
                </Link>
              </li>
            </ul>

            <div onClick={toggleMobileMenu}>
              {isDropdownOpen && (
                <div className=" overflow-y-auto pt-10 bg-white ">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* General Medicine */}
                    <ul>
                      <li>
                        <Link
                          to="/GeneralMedicineT"
                          className="font-semibold text-md  hover:text-pink-700"
                        >
                          General Medicine
                        </Link>
                        <Link
                          to="/MedicationForChronic"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Medications for Chronic Illnesses
                        </Link>
                        <Link
                          to="/IVfluids"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          IV Fluids and Electrolyte Management
                        </Link>
                        <Link
                          to="/BloodTransfusion"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Blood Transfusions
                        </Link>
                        <Link
                          to="/AntibioticTherapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Antibiotic Therapy for Infections
                        </Link>
                        <Link
                          to="/NonInvasiveDiagnostic"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Non-Invasive Diagnostic Procedures
                        </Link>
                        <Link
                          to="/ManagementInfections"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Management of Infectious Diseases
                        </Link>
                        <Link
                          to="/LifestyleCounselling"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Lifestyle Counselling
                        </Link>
                        <Link
                          to="/Vaccinations"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Vaccinations and Immunizations
                        </Link>
                        <Link
                          to="/PoisoningAndDrug"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Management of Poisoning and Drug Overdose
                        </Link>
                      </li>
                    </ul>

                    {/* Oncology */}
                    <ul>
                      <li>
                        <Link
                          to="/OncologyT"
                          className="font-semibold text-md  hover:text-pink-700"
                        >
                          Oncology
                        </Link>
                        <Link
                          to="/Chemotherapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Chemotherapy
                        </Link>

                        <Link
                          to="/SurgicalOncology"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Surgical Oncology Procedures
                        </Link>
                        <Link
                          to="/TargetedTherapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Targeted Therapy
                        </Link>
                        <Link
                          to="/Immunotherapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Immunotherapy
                        </Link>

                        <Link
                          to="/PalliativeCare"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Palliative care and pain management
                        </Link>
                        <Link
                          to="/HormoneTherapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Hormone therapy
                        </Link>
                        <Link
                          to="/OncologicalImagingBiopsy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Oncological biopsy services
                        </Link>
                      </li>
                    </ul>

                    {/* Gynaecology and Obstetrics */}

                    <ul>
                      <li>
                        <Link
                          to="/ObstetricsAndGynaecologyT"
                          className="font-semibold text-md  hover:text-pink-700"
                        >
                          Obstetrics And Gynaecology
                        </Link>

                        <Link
                          to="/Obstetrics"
                          className="font-semibold block p-1 text-md"
                        >
                          Obstetrics
                        </Link>
                        <Link
                          to="/AntenatalAndPostnatal"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Antenatal And Postnatal Care
                        </Link>
                        <Link
                          to="/NormalVaginalDelivery"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Normal Vaginal Delivery
                        </Link>
                        <Link
                          to="/CaesareanSection"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Caesarean Section
                        </Link>
                        <Link
                          to="/ManagementHighRiskPregnancy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Management Of High-Risk Pregnancy
                        </Link>
                        <Link
                          to="/Ultrasound"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Ultrasound And Fetal Monitoring
                        </Link>
                        <Link
                          to="/EpiduralAnaesthesia"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Epidural Anaesthesia During Labor
                        </Link>

                        <Link
                          to="/Gynaecology"
                          className="font-semibold block p-1 text-md"
                        >
                          Gynaecology
                        </Link>

                        <Link
                          to="/HormonalTherapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Hormonal Therapy
                        </Link>
                        <Link
                          to="/PapSmears"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Pap Smears And Cervical Biopsies
                        </Link>
                        <Link
                          to="/Hysterectomy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Hysterectomy
                        </Link>
                        <Link
                          to="/DilationAndCurettage"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Dilation And Curettage
                        </Link>
                        <Link
                          to="/TreatmentForSTI"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Treatment For STIs
                        </Link>
                        <Link
                          to="/InfertilityTreatment"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Infertility Treatment
                        </Link>
                        <Link
                          to="/LaparoscopyAndHysteroscopy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Laparoscopy And Hysteroscopy
                        </Link>
                      </li>
                    </ul>

                    {/* General Surgery*/}
                    <ul>
                      <li>
                        <Link
                          to="/GeneralSurgeryT"
                          className="font-semibold text-md  hover:text-pink-700"
                        >
                          General Surgery
                        </Link>
                        <Link
                          to="/Appendectomy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Appendectomy
                        </Link>
                        <Link
                          to="/HerniaRepair"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Hernia Repair
                        </Link>
                        <Link
                          to="/GallbladderSurgery"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Gallbladder Surgery
                        </Link>
                        <Link
                          to="/ThyroidSurgery"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Thyroid Surgery
                        </Link>
                        <Link
                          to="/BreastSurgery"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Breast Surgery
                        </Link>
                        <Link
                          to="/Haemorrhoidectomy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Haemorrhoidectomy
                        </Link>
                        <Link
                          to="/ColonAndRectalSurgery"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Colon and Rectal surgery
                        </Link>
                        <Link
                          to="/TraumaSurgery"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Trauma Surgery
                        </Link>
                        <Link
                          to="/WoundCareDrainage"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Wound care and abscess drainage
                        </Link>
                      </li>
                    </ul>

                    {/* Neurology */}
                    <ul>
                      <li>
                        <Link
                          to="/NeurologyT"
                          className="font-semibold text-md  hover:text-pink-700"
                        >
                          Neurology
                        </Link>
                        <Link
                          to="/StrokeManagement"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Stroke Management
                        </Link>
                        <Link
                          to="/AntiEpilepticDrugs"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Anti-Epileptic Drugs
                        </Link>
                        <Link
                          to="/MultipleSclerosis"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Multiple Sclerosis Management
                        </Link>
                        <Link
                          to="/MigraineChronicHeadache"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Migraine And Chronic Headache Management
                        </Link>
                        <Link
                          to="/ParkinsonDisease"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Parkinson’s disease treatment
                        </Link>
                        <Link
                          to="/NeuropathyAndMyopathy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Neuropathy And Myopathy Treatment
                        </Link>
                        <Link
                          to="/Neuroimaging"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Neuroimaging
                        </Link>
                        <Link
                          to="/LumbarPuncture"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Lumbar Puncture
                        </Link>
                        <Link
                          to="/BotoxTherapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Botox Therapy for Neurological Disorders
                        </Link>
                      </li>
                    </ul>

                    {/* Urology */}
                    <ul>
                      <li>
                        <Link
                          to="/UrologyT"
                          className="font-semibold text-md  hover:text-pink-700"
                        >
                          Urology
                        </Link>
                        <Link
                          to="/KidneyStoneTreatment"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Kidney Stone Treatment
                        </Link>
                        <Link
                          to="/ProstateSurgery"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Prostate Surgery
                        </Link>
                        <Link
                          to="/UrinaryTractInfection"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Urinary Tract Infection Treatment
                        </Link>
                        <Link
                          to="/BladderCancer"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Bladder Cancer Management
                        </Link>
                        <Link
                          to="/MaleInfertility"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Male Infertility Treatment
                        </Link>
                        <Link
                          to="/ErectileDysfunction"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Erectile Dysfunction Management
                        </Link>
                        <Link
                          to="/Cystoscopy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Cystoscopy
                        </Link>
                        <Link
                          to="/Vasectomy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Vasectomy And Vasectomy Reversal
                        </Link>
                        <Link
                          to="/ReconstructiveUrological"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                        >
                          Reconstructive Urological Surgery
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link
                          to="/Pediatrics"
                          className="font-semibold text-md  hover:text-pink-700"
                        >
                          Pediatrics Treatment & Care
                        </Link>
                        {/* <Link
                      to="/seizure"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-pink-700"
                    >
                      Seizure
                    </Link> */}
                      </li>
                    </ul>
                    {/* Add other mega menu sections here for mobile if needed */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderMain;
