import React from "react";

import GheeCategories from "../shop/GheeCategories";
import GheeCategorySection from "../shop/GheeCategorySection";

import a2GheeProducts from "../data/a2GheeProducts";

const A2Ghee = () => {

  const getProducts = (category) => {
    return a2GheeProducts.filter(
      (product) =>
        product.category === category
    );
  };

  return (
    <main className="category-page">

      {/* =====================================================
          GHEE CATEGORY ICONS
      ===================================================== */}

      <GheeCategories />


      {/* =====================================================
          A2 GHEE
      ===================================================== */}

      <section id="a2-ghee">

        <GheeCategorySection
          title="A2 Ghee"
          subtitle="Pure A2 ghee made using traditional methods."
          bannerImage="YOUR_A2_GHEE_BANNER_URL"
          products={getProducts("a2-ghee")}
        />

      </section>


      {/* =====================================================
          GIR COW GHEE
      ===================================================== */}

      <section id="gir-ghee">

        <GheeCategorySection
          title="Gir Cow Ghee"
          subtitle="Traditional bilona ghee made from Gir cow milk."
          bannerImage="YOUR_GIR_GHEE_BANNER_URL"
          products={getProducts("gir-ghee")}
        />

      </section>


      {/* =====================================================
          DESI COW GHEE
      ===================================================== */}

      <section id="desi-cow-ghee">

        <GheeCategorySection
          title="Desi Cow Ghee"
          subtitle="Rich aroma and traditional goodness in every spoon."
          bannerImage="YOUR_DESI_COW_GHEE_BANNER_URL"
          products={getProducts("desi-cow-ghee")}
        />

      </section>


      {/* =====================================================
          BUFFALO GHEE
      ===================================================== */}

      <section id="buffalo-ghee">

        <GheeCategorySection
          title="Buffalo Ghee"
          subtitle="Rich and creamy traditional buffalo ghee."
          bannerImage="YOUR_BUFFALO_GHEE_BANNER_URL"
          products={getProducts("buffalo-ghee")}
        />

      </section>


      {/* =====================================================
          GHEE COMBO
      ===================================================== */}

      <section id="ghee-combo">

        <GheeCategorySection
          title="Ghee Combo"
          subtitle="Value packs of our traditional ghee collection."
          bannerImage="YOUR_GHEE_COMBO_BANNER_URL"
          products={getProducts("ghee-combo")}
        />

      </section>

    </main>
  );
};

export default A2Ghee;