/** @format */

import React from "react";

import "../App.css";

import Spotlight from "../components/Landingpage/Spotlight";
import AboutUsSection from "../components/Landingpage/AboutUsSection";
import ProductSection from "../components/Landingpage/ProductSection";
import Testimonials from "../components/Landingpage/Testimonials";
import ContactUsSection from "../components/Landingpage/ContactUsSection";

function LandingPage() {
  return (
    <>
      <Spotlight />
      <AboutUsSection />
      <ProductSection />

      <Testimonials />
      <ContactUsSection />
    </>
  );
}

export default LandingPage;
