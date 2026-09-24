import React from "react";

import JaggeryCategories from "../shop/JaggeryCategories";
import JaggeryCategorySection from "../shop/JaggeryCategorySection";

import jaggeryProducts from "../data/jaggeryProducts";

const Jaggery = () => {

  const getProducts = (category) => {
    return jaggeryProducts.filter(
      (product) => product.category === category
    );
  };

  return (
    <main className="category-page">

      {/* Choose Jaggery */}
      <JaggeryCategories />

      {/* Jaggery Blocks */}
      <section id="jaggery-block">
        <JaggeryCategorySection
          title="Jaggery Blocks"
          subtitle="Traditional jaggery made naturally for everyday sweetness."
          bannerImage="YOUR_JAGGERY_BLOCK_BANNER_URL"
          products={getProducts("jaggery-block")}
        />
      </section>

      {/* Jaggery Powder */}
      <section id="jaggery-powder">
        <JaggeryCategorySection
          title="Jaggery Powder"
          subtitle="Naturally sweet jaggery powder, easy to use every day."
          bannerImage="YOUR_JAGGERY_POWDER_BANNER_URL"
          products={getProducts("jaggery-powder")}
        />
      </section>

      {/* Jaggery Cubes */}
      <section id="jaggery-cubes">
        <JaggeryCategorySection
          title="Jaggery Cubes"
          subtitle="Convenient natural sweetness in easy-to-use cubes."
          bannerImage="YOUR_JAGGERY_CUBES_BANNER_URL"
          products={getProducts("jaggery-cubes")}
        />
      </section>

      {/* Jaggery Combos */}
      <section id="jaggery-combo">
        <JaggeryCategorySection
          title="Jaggery Combos"
          subtitle="Thoughtfully packed jaggery combinations for your family."
          bannerImage="YOUR_JAGGERY_COMBO_BANNER_URL"
          products={getProducts("jaggery-combo")}
        />
      </section>

    </main>
  );
};

export default Jaggery;