import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBannerSlider from "../components/HomeTwo/MainBannerSlider";
import FeaturedCard from "../components/HomeTwo/FeaturedCard";
import ServicesCard from "../components/Common/ServicesCard";
import ComparisonsTable from "../components/Common/ComparisonsTable";
import OurFeaturesContent from "../components/Common/OurFeaturesContent";
import EasyPaymentBorrow from "../components/Common/EasyPaymentBorrow";
import FunFacts from "../components/HomeTwo/FunFacts";
import CustomersFeedback from "../components/Common/CustomersFeedback";
import PartnerContent from "../components/Common/PartnerContent";
import AppDownloadContent from "../components/HomeTwo/AppDownloadContent";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import BlogCard from "../components/Common/BlogCard";
import Footer from "../components/Layouts/Footer";
import Rates from "../components/Rates/Rates";

const IndexPage2 = () => {
  return (
    <>
      <Navbar />

      <MainBannerSlider />

      <FeaturedCard />

      <Rates />

      <ServicesCard />

      <ComparisonsTable />

      <OurFeaturesContent />

      <EasyPaymentBorrow />

      <FunFacts />

      <CustomersFeedback />

      <PartnerContent />

      <AppDownloadContent />

      <AccountCreateArea />

      <BlogCard />

      <Footer />
    </>
  );
};

export default IndexPage2;
