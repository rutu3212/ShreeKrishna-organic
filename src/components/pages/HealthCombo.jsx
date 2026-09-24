import React from "react";

import HealthComboCategories from "../shop/HealthComboCategories";
import HealthComboCategorySection from "../shop/HealthComboCategorySection";

import healthComboProducts from "../data/healthComboProducts";

const HealthCombo = () => {
  const getProducts = (category) => {
    return healthComboProducts.filter(
      (product) => product.category === category
    );
  };

  return (
    <main className="category-page">

      {/* Choose Your Combo */}
      <HealthComboCategories />

      {/* Daily Wellness */}
      <section id="daily-wellness">
        <HealthComboCategorySection
          title="Daily Wellness Combo"
          subtitle="A thoughtfully selected combination for your everyday wellness."
          bannerImage="YOUR_DAILY_WELLNESS_BANNER_URL"
          products={getProducts("daily-wellness")}
        />
      </section>

      {/* Family Combo */}
      <section id="family-combo">
        <HealthComboCategorySection
          title="Family Combo"
          subtitle="Natural everyday essentials for the whole family."
          bannerImage="YOUR_FAMILY_COMBO_BANNER_URL"
          products={getProducts("family-combo")}
        />
      </section>

      {/* Immunity Combo */}
      <section id="immunity-combo">
        <HealthComboCategorySection
          title="Immunity Wellness Combo"
          subtitle="A natural combination designed for your wellness routine."
          bannerImage="YOUR_IMMUNITY_COMBO_BANNER_URL"
          products={getProducts("immunity-combo")}
        />
      </section>

      {/* Breakfast Combo */}
      <section id="breakfast-combo">
        <HealthComboCategorySection
          title="Healthy Breakfast Combo"
          subtitle="Start your morning with simple and nourishing choices."
          bannerImage="YOUR_BREAKFAST_COMBO_BANNER_URL"
          products={getProducts("breakfast-combo")}
        />
      </section>

      {/* Traditional Essentials */}
      <section id="traditional-combo">
        <HealthComboCategorySection
          title="Traditional Essentials"
          subtitle="Bring traditional goodness into your everyday kitchen."
          bannerImage="YOUR_TRADITIONAL_COMBO_BANNER_URL"
          products={getProducts("traditional-combo")}
        />
      </section>

      {/* Healthy Living */}
      <section id="healthy-living">
        <HealthComboCategorySection
          title="Healthy Living Combo"
          subtitle="A carefully selected collection for a healthier lifestyle."
          bannerImage="YOUR_HEALTHY_LIVING_BANNER_URL"
          products={getProducts("healthy-living")}
        />
      </section>

      {/* Complete Wellness */}
      <section id="complete-wellness">
        <HealthComboCategorySection
          title="Complete Wellness Combo"
          subtitle="A complete collection of natural everyday essentials."
          bannerImage="YOUR_COMPLETE_WELLNESS_BANNER_URL"
          products={getProducts("complete-wellness")}
        />
      </section>

    </main>
  );
};

export default HealthCombo;