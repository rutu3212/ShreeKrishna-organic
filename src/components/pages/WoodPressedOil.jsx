import React from "react";

import OilCategories from "../shop/OilCategories";
import OilCategorySection from "../shop/OilCategorySection";

import products from "../data/products";

const WoodPressedOil = () => {
  const getProducts = (category) => {
    return products.filter(
      (product) =>
        String(product.category || "").toLowerCase().trim() ===
        category.toLowerCase().trim()
    );
  };

  return (
    <main className="category-page">

      {/* =====================================================
          CHOOSE YOUR OIL
      ===================================================== */}

      <OilCategories />


      {/* =====================================================
          WOOD PRESSED OILS
      ===================================================== */}

      <section id="wood-pressed-oil">
        <OilCategorySection
          title="Wood Pressed Oils"
          subtitle="Pure oils. Traditional extraction. Nothing unnecessary."
          bannerImage="YOUR_WOOD_PRESSED_BANNER_URL"
          products={getProducts("wood-pressed-oil")}
        />
      </section>


      {/* =====================================================
          GROUNDNUT OIL
      ===================================================== */}

      <section id="groundnut-oil">
        <OilCategorySection
          title="Groundnut Oil"
          subtitle="Nutty aroma | Zero blending | Just honest oil"
          bannerImage="YOUR_GROUNDNUT_BANNER_URL"
          products={getProducts("groundnut-oil")}
        />
      </section>


      {/* =====================================================
          SUNFLOWER OIL
      ===================================================== */}

      <section id="sunflower-oil">
        <OilCategorySection
          title="Sunflower Oil"
          subtitle="Light and naturally extracted sunflower oil."
          bannerImage="YOUR_SUNFLOWER_BANNER_URL"
          products={getProducts("sunflower-oil")}
        />
      </section>


      {/* =====================================================
          MUSTARD OIL
      ===================================================== */}

      <section id="mustard-oil">
        <OilCategorySection
          title="Mustard Oil"
          subtitle="Traditional mustard oil with its natural aroma."
          bannerImage="YOUR_MUSTARD_BANNER_URL"
          products={getProducts("mustard-oil")}
        />
      </section>


      {/* =====================================================
          OLIVE OIL
      ===================================================== */}

      <section id="olive-oil">
        <OilCategorySection
          title="Olive Oil"
          subtitle="Naturally sourced olive oil for your kitchen."
          bannerImage="YOUR_OLIVE_BANNER_URL"
          products={getProducts("olive-oil")}
        />
      </section>


      {/* =====================================================
          COCONUT OIL
      ===================================================== */}

      <section id="coconut-oil">
        <OilCategorySection
          title="Coconut Oil"
          subtitle="Pure coconut oil made using traditional methods."
          bannerImage="YOUR_COCONUT_BANNER_URL"
          products={getProducts("coconut-oil")}
        />
      </section>


      {/* =====================================================
          SESAME OIL
      ===================================================== */}

      <section id="sesame-oil">
        <OilCategorySection
          title="Sesame Oil"
          subtitle="Rich natural aroma with traditional goodness."
          bannerImage="YOUR_SESAME_BANNER_URL"
          products={getProducts("sesame-oil")}
        />
      </section>

    </main>
  );
};

export default WoodPressedOil;