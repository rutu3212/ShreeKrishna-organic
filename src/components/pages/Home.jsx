import React from "react";

import Hero from "../home/Hero";
import WelcomeSection from "../home/WelcomeSection";
import WhyChoose from "../home/WhyChoose";
import NativeIngredients from "../home/NativeIngredients";
import ProductFocus from "../home/ProductFocus";
import GheeProductFocus from "../home/GheeProductFocus";
import QualityChecks from "../home/QualityChecks";
import ComboPacks from "../home/ComboPacks";
import Superfoods from "../home/Superfoods";
import Testimonials from "../home/Testimonials";
import Certifications from "../home/Certifications";

const Home = () => {
  return (
    <main className="home-page">

      {/* =========================
          HERO SECTION
      ========================= */}
      <Hero />

      <WelcomeSection />

  {/* =========================
          WHY CHOOSE US
      ========================= */}
      <WhyChoose />

      {/* =========================
          PRODUCT FOCUS
      ========================= */}
      
      <NativeIngredients />
      <ProductFocus />
      <GheeProductFocus />
      
      <QualityChecks />

      <ComboPacks />
      <Superfoods />

      <Testimonials />

      <Certifications />


    </main>
  );
};

export default Home;