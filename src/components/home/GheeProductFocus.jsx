import React, { useState } from "react";

import GheeCategories from "./GheeCategories";
import ProductFocusCard from "./ProductFocusCard";

import gheeProducts from "../data/gheeProducts";

const GheeProductFocus = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? gheeProducts
      : gheeProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="ghee-product-focus">
      <div className="ghee-product-focus-container">

        {/* HEADER */}
        <div className="ghee-product-focus-header">
          <p className="ghee-product-focus-small-title">
            Product in Focus:
          </p>

          <h2>
            Explore Our A2 Desi Ghee
          </h2>
        </div>

        {/* CATEGORIES */}
        <GheeCategories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* PRODUCTS */}
        <div
          className="ghee-products-scroll"
          key={selectedCategory}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductFocusCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="ghee-no-products">
              <h3>No products found.</h3>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default GheeProductFocus;