// treatment.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";

//Speciality

import ObstetricGynaecology from '../../components/header/Speciality/ObstetricGynaecology.jsx'
import Oncology from '../../components/header/Speciality/Oncology.jsx';
import GeneralSurgery from '../../components/header/Speciality/GeneralSurgery.jsx';
import GeneralMedicine from '../../components/header/Speciality/GeneralMedicine.jsx';
import Urology from '../../components/header/Speciality/Urology.jsx';
import Orthopaedic from '../../components/header/Speciality/Orthopaedic.jsx';
import OncoSurgery from '../../components/header/Speciality/OncoSurgery.jsx';

// Bliss Treatments

// General Medicine
import GeneralMedicineT from '../../components/header/treatments/GeneralMedicineT.jsx';
import MedicationForChronic from '../../components/header/treatments/MedicationForChronic.jsx';
import IVfluids from '../../components/header/treatments/IVfluids.jsx';
import BloodTransfusion from '../../components/header/treatments/BloodTransfusion.jsx';
import AntibioticTherapy from '../../components/header/treatments/AntibioticTherapy.jsx';
import NonInvasiveDiagnostic from '../../components/header/treatments/NonInvasiveDiagnostic.jsx';
import ManagementInfections from '../../components/header/treatments/ManagementInfections.jsx';
import LifestyleCounselling from '../../components/header/treatments/LifestyleCounselling.jsx';
import Vaccinations from '../../components/header/treatments/Vaccinations.jsx';
import PoisoningAndDrug from '../../components/header/treatments/PoisoningAndDrug.jsx';


// Oncology
import OncologyT from '../../components/header/treatments/OncologyT.jsx';
import Chemotherapy from '../../components/header/treatments/Chemotherapy.jsx';
import RadiationTherapy from '../../components/header/treatments/RadiationTherapy.jsx';
import SurgicalOncology from '../../components/header/treatments/SurgicalOncology.jsx';
import TargetedTherapy from '../../components/header/treatments/TargetedTherapy.jsx';
import Immunotherapy from '../../components/header/treatments/Immunotherapy.jsx';
import BoneMarrow from '../../components/header/treatments/BoneMarrow.jsx';
import PalliativeCare from '../../components/header/treatments/PalliativeCare.jsx';
import HormoneTherapy from '../../components/header/treatments/HormoneTherapy.jsx';
import OncologicalImagingBiopsy from '../../components/header/treatments/OncologicalImagingBiopsy.jsx';

// Gynaecology and Obstetrics
import ObstetricsAndGynaecologyT from '../../components/header/treatments/ObstetricsAndGynaecologyT.jsx';

// Obstetrics
import Obstetrics from '../../components/header/treatments/Obstetrics.jsx';

import AntenatalAndPostnatal from '../../components/header/treatments/AntenatalAndPostnatal.jsx';
import NormalVaginalDelivery from '../../components/header/treatments/NormalVaginalDelivery.jsx';
import CaesareanSection from '../../components/header/treatments/CaesareanSection.jsx';
import ManagementHighRiskPregnancy from '../../components/header/treatments/ManagementHighRiskPregnancy.jsx';
import Ultrasound from '../../components/header/treatments/Ultrasound.jsx';
import EpiduralAnaesthesia from '../../components/header/treatments/EpiduralAnaesthesia.jsx';

// Gynaecology
import Gynaecology from '../../components/header/treatments/Gynaecology.jsx';

import HormonalTherapy from '../../components/header/treatments/HormonalTherapy.jsx';
import PapSmears from '../../components/header/treatments/PapSmears.jsx';
import Hysterectomy from '../../components/header/treatments/Hysterectomy.jsx';
import DilationAndCurettage from '../../components/header/treatments/DilationAndCurettage.jsx';
import TreatmentForSTI from '../../components/header/treatments/TreatmentForSTI.jsx';
import InfertilityTreatment from '../../components/header/treatments/InfertilityTreatment.jsx';
import LaparoscopyAndHysteroscopy from '../../components/header/treatments/LaparoscopyAndHysteroscopy.jsx';

// General Surgery
import GeneralSurgeryT from '../../components/header/treatments/GeneralSurgeryT.jsx';
import Appendectomy from '../../components/header/treatments/Appendectomy.jsx';
import HerniaRepair from '../../components/header/treatments/HerniaRepair.jsx';
import GallbladderSurgery from '../../components/header/treatments/GallbladderSurgery.jsx';
import ThyroidSurgery from '../../components/header/treatments/ThyroidSurgery.jsx';
import BreastSurgery from '../../components/header/treatments/BreastSurgery.jsx';
import Haemorrhoidectomy from '../../components/header/treatments/Haemorrhoidectomy.jsx';
import ColonAndRectalSurgery from '../../components/header/treatments/ColonAndRectalSurgery.jsx';
import TraumaSurgery from '../../components/header/treatments/TraumaSurgery.jsx';
import WoundCareDrainage from '../../components/header/treatments/WoundCareDrainage.jsx';

// Neurology
import NeurologyT from '../../components/header/treatments/NeurologyT.jsx';
import StrokeManagement from '../../components/header/treatments/StrokeManagement.jsx';
import AntiEpilepticDrugs from '../../components/header/treatments/AntiEpilepticDrugs.jsx';
import MultipleSclerosis from '../../components/header/treatments/MultipleSclerosis.jsx';
import MigraineChronicHeadache from '../../components/header/treatments/MigraineChronicHeadache.jsx';
import ParkinsonDisease from '../../components/header/treatments/ParkinsonDisease.jsx';
import NeuropathyAndMyopathy from '../../components/header/treatments/NeuropathyAndMyopathy.jsx';
import Neuroimaging from '../../components/header/treatments/Neuroimaging.jsx';
import LumbarPuncture from '../../components/header/treatments/LumbarPuncture.jsx';
import BotoxTherapy from '../../components/header/treatments/BotoxTherapy.jsx';

// Urology
import UrologyT from '../../components/header/treatments/UrologyT.jsx';
import KidneyStoneTreatment from '../../components/header/treatments/KidneyStoneTreatment.jsx';
import ProstateSurgery from '../../components/header/treatments/ProstateSurgery.jsx';
import UrinaryTractInfection from '../../components/header/treatments/UrinaryTractInfection.jsx';
import BladderCancer from '../../components/header/treatments/BladderCancer.jsx';
import MaleInfertility from '../../components/header/treatments/MaleInfertility.jsx';
import Cystoscopy from '../../components/header/treatments/Cystoscopy.jsx';
import Vasectomy from '../../components/header/treatments/Vasectomy.jsx';
import ReconstructiveUrological from '../../components/header/treatments/ReconstructiveUrological.jsx';
import ErectileFunction from '../../components/header/treatments/ErectileFunction.jsx';

const TreatmentAndSpeciality = (
  <>
    {/* Speciality */}
    <Route path="/ObstetricGynaecology" element={<ObstetricGynaecology />} />
    <Route path="/Oncology" element={<Oncology />} />
    <Route path="/GeneralSurgery" element={<GeneralSurgery />} />
    <Route path="/GeneralMedicine" element={<GeneralMedicine />} />
    <Route path="/Urology" element={<Urology />} />
    <Route path="/Orthopaedic" element={<Orthopaedic />} />
    <Route path="/OncoSurgery" element={<OncoSurgery />} />
    
    {/* Bliss Treatments */}

    {/* General Medicine */}
    <Route path="/GeneralMedicineT" element={<GeneralMedicineT />} />
    <Route path="/MedicationForChronic" element={<MedicationForChronic />} />
    <Route path="/IVfluids" element={<IVfluids />} />
    <Route path="/BloodTransfusion" element={<BloodTransfusion />} />
    <Route path="/AntibioticTherapy" element={<AntibioticTherapy />} />
    <Route path="/NonInvasiveDiagnostic" element={<NonInvasiveDiagnostic />} />
    <Route path="/ManagementInfections" element={<ManagementInfections />} />
    <Route path="/LifestyleCounselling" element={<LifestyleCounselling />} />
    <Route path="/Vaccinations" element={<Vaccinations />} />
    <Route path="/PoisoningAndDrug" element={<PoisoningAndDrug />} />

    {/* Oncology */}

    <Route path="/OncologyT" element={<OncologyT />} />
    <Route path="/Chemotherapy" element={<Chemotherapy />} />
    <Route path="/RadiationTherapy" element={<RadiationTherapy />} />
    <Route path="/SurgicalOncology" element={<SurgicalOncology />} />
    <Route path="/TargetedTherapy" element={<TargetedTherapy />} />
    <Route path="/Immunotherapy" element={<Immunotherapy />} />
    <Route path="/BoneMarrow" element={<BoneMarrow />} />
    <Route path="/PalliativeCare" element={<PalliativeCare />} />
    <Route path="/HormoneTherapy" element={<HormoneTherapy />} />
    <Route path="/OncologicalImagingBiopsy" element={<OncologicalImagingBiopsy />} />

    {/* Gynaecology and Obstetrics */}
    <Route path="/ObstetricsAndGynaecologyT" element={<ObstetricsAndGynaecologyT />} />

    {/* Obstetrics */}
    <Route path="/Obstetrics" element={<Obstetrics />} />

    <Route path="/AntenatalAndPostnatal" element={<AntenatalAndPostnatal />} />
    <Route path="/NormalVaginalDelivery" element={<NormalVaginalDelivery />} />
    <Route path="/CaesareanSection" element={<CaesareanSection />} />
    <Route path="/ManagementHighRiskPregnancy" element={<ManagementHighRiskPregnancy />} />
    <Route path="/Ultrasound" element={<Ultrasound />} />
    <Route path="/EpiduralAnaesthesia" element={<EpiduralAnaesthesia />} />


    {/* Gynaecology */}
    <Route path="/Gynaecology" element={<Gynaecology />} />

    <Route path="/HormonalTherapy" element={<HormonalTherapy />} />
    <Route path="/PapSmears" element={<PapSmears />} />
    <Route path="/Hysterectomy" element={<Hysterectomy />} />
    <Route path="/DilationAndCurettage" element={<DilationAndCurettage />} />
    <Route path="/TreatmentForSTI" element={<TreatmentForSTI />} />
    <Route path="/InfertilityTreatment" element={<InfertilityTreatment />} />
    <Route path="/LaparoscopyAndHysteroscopy" element={<LaparoscopyAndHysteroscopy />} />

    {/* General Surgery */}

    <Route path="/GeneralSurgeryT" element={<GeneralSurgeryT />} />
    <Route path="/Appendectomy" element={<Appendectomy />} />
    <Route path="/HerniaRepair" element={<HerniaRepair />} />
    <Route path="/GallbladderSurgery" element={<GallbladderSurgery />} />
    <Route path="/ThyroidSurgery" element={<ThyroidSurgery />} />
    <Route path="/BreastSurgery" element={<BreastSurgery />} />
    <Route path="/Haemorrhoidectomy" element={<Haemorrhoidectomy />} />
    <Route path="/ColonAndRectalSurgery" element={<ColonAndRectalSurgery />} />
    <Route path="/TraumaSurgery" element={<TraumaSurgery />} />
    <Route path="/WoundCareDrainage" element={<WoundCareDrainage />} />

    {/* Neurology */}
    
    <Route path="/NeurologyT" element={<NeurologyT />} />
    <Route path="/StrokeManagement" element={<StrokeManagement />} />
    <Route path="/AntiEpilepticDrugs" element={<AntiEpilepticDrugs />} />
    <Route path="/MultipleSclerosis" element={<MultipleSclerosis />} />
    <Route path="/MigraineChronicHeadache" element={<MigraineChronicHeadache />} />
    <Route path="/ParkinsonDisease" element={<ParkinsonDisease />} />
    <Route path="/NeuropathyAndMyopathy" element={<NeuropathyAndMyopathy />} />
    <Route path="/Neuroimaging" element={<Neuroimaging />} />
    <Route path="/LumbarPuncture" element={<LumbarPuncture />} />
    <Route path="/BotoxTherapy" element={<BotoxTherapy />} />

    {/* Urology */}
    <Route path="/UrologyT" element={<UrologyT />} />
    <Route path="/KidneyStoneTreatment" element={<KidneyStoneTreatment />} />
    <Route path="/ProstateSurgery" element={<ProstateSurgery />} />
    <Route path="/UrinaryTractInfection" element={<UrinaryTractInfection />} />
    <Route path="/BladderCancer" element={<BladderCancer />} />
    <Route path="/MaleInfertility" element={<MaleInfertility />} />
    <Route path="/Cystoscopy" element={<Cystoscopy />} />
    <Route path="/Vasectomy" element={<Vasectomy />} />
    <Route path="/ReconstructiveUrological" element={<ReconstructiveUrological />} />
    <Route path="/ErectileDysfunction" element={<ErectileFunction />} />

  </>
);

export default TreatmentAndSpeciality;
