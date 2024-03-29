import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Common/PageBannerContent";
import AboutContent from "../components/AboutUs/AboutContent";
import TeamMember from "../components/AboutUs/TeamMember";
import PartnerContent from "../components/Common/PartnerContent";
import AppDownloadContent from "../components/HomeOne/AppDownloadContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      <PageBannerContent 
        pageTitle="About Us" 
        pageCaption="The Haiper story" 
        bgImage="/images/page-title-bg1.jpg" 
      />

      <AboutContent />

      <TeamMember />

      <PartnerContent />

      <AppDownloadContent />

      <AccountCreateArea />

      <Footer />
    </>
  );
};

export default AboutUsPage;
