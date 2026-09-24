import React from "react";

import SupplementCategories from "../shop/SupplementCategories";
import SupplementCategorySection from "../shop/SupplementCategoriesSection";
import healthSupplementProducts from "../data/healthSupplementProducts";

const HealthSupplement = () => {
  const getProducts = (category) => {
    return healthSupplementProducts.filter(
      (product) => product.category === category
    );
  };

  return (
    <main className="category-page">

      {/* Supplement Icons */}
      <SupplementCategories />

      {/* Health Supplements */}
      <section id="health-supplements">
        <SupplementCategorySection
          title="Health Supplements"
          subtitle="Natural nutrition for your everyday wellness."
          bannerImage="YOUR_HEALTH_SUPPLEMENT_BANNER_URL"
          products={getProducts("health-supplement")}
        />
      </section>

      {/* Immunity */}
      <section id="immunity">
        <SupplementCategorySection
          title="Immunity Support"
          subtitle="Natural goodness for everyday wellness."
          bannerImage="YOUR_IMMUNITY_BANNER_URL"
          products={getProducts("immunity")}
        />
      </section>

      {/* Digestive Wellness */}
      <section id="digestion">
        <SupplementCategorySection
          title="Digestive Wellness"
          subtitle="Natural support for your daily wellness."
          bannerImage="YOUR_DIGESTION_BANNER_URL"
          products={getProducts("digestion")}
        />
      </section>

      {/* Daily Wellness */}
      <section id="daily-wellness">
        <SupplementCategorySection
          title="Daily Wellness"
          subtitle="Nourishing products for your everyday routine."
          bannerImage="YOUR_DAILY_WELLNESS_BANNER_URL"
          products={getProducts("daily-wellness")}
        />
      </section>

      {/* Superfoods */}
      <section id="superfoods">
        <SupplementCategorySection
          title="Natural Superfoods"
          subtitle="Pure and natural goodness for your lifestyle."
          bannerImage="YOUR_SUPERFOODS_BANNER_URL"
          products={getProducts("superfood")}
        />
      </section>

    </main>
  );
};

export default HealthSupplement;