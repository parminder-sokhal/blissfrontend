import React from "react";
// import SpecialitiesSlider from '../../components/home/SpecialitiesSlider.jsx'
import VideoPlayHeader from "../../components/home/videoplayheader.jsx";
import BlissService from "../../components/home/BlissService.jsx";
import OurApproach from "../../components/home/ourapproach.jsx";
import Doctors from "../../components/home/Doctors.jsx";
import PhotoGallery from "../../components/home/PhotoGallery.jsx";
// import TrendingYoutube from "../../components/home/TrendingYoutube.jsx";
import InstagramSlider from "../../components/home/InstagramSlider.jsx";
import PatientReview from "../../components/home/PatientReview.jsx";
import BlissTreatments from "../../components/home/BlissTreatments.jsx";
import OurFacility from "../../components/home/OurFacility.jsx";
import HospitalStructure from "../../components/home/HospitalStructure.jsx";
import Certificates from "../../components/home/Certificates.jsx";

function Home() {
  return (
    <>
      <VideoPlayHeader />
      <BlissService />
      <HospitalStructure />
      <OurApproach />
      <Doctors />
      <BlissTreatments />
      <PatientReview />
      <Certificates/>
      <OurFacility />
      <PhotoGallery />
      {/* <TrendingYoutube /> */}
      <InstagramSlider />
    </>
  );
}

export default Home;
