// import React from "react";
// import OilCategories from "./OilCategories";
// import ProductFocusCard from "./ProductFocusCard";
// import products from "../data/products";

// const ProductFocus = () => {
//   const groundnutProducts = products.filter(
//     (product) => product.category === "groundnut-oil"
//   );

//   return (
//     <section className="product-focus-section">

//       {/* ================= HEADER ================= */}

//       <div className="product-focus-header">

//         <p className="product-focus-label">
//           Product in Focus:
//         </p>

//         <h2>
//           Explore Our Cold-Pressed Oils
//         </h2>

//       </div>

//       {/* ================= CATEGORIES ================= */}

//       <OilCategories />

//       {/* ================= PRODUCTS ================= */}

//       <div className="product-focus-products">

//         {groundnutProducts.map((product) => (
//           <ProductFocusCard
//             key={product.id}
//             product={product}
//           />
//         ))}

//       </div>

//     </section>
//   );
// };

// export default ProductFocus;

import React, { useMemo, useState } from "react";
import ProductFocusCard from "./ProductFocusCard";

import a2GheeProducts from "../data/a2GheeProducts";
import products from "../data/products";
import healthSupplementProducts from "../data/healthSupplementProducts";
import jaggeryProducts from "../data/jaggeryProducts";
import healthComboProducts from "../data/healthComboProducts";
import hotDealsProducts from "../data/hotDealsProducts";

const ProductFocus = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  /* 
   * ================================
   * ALL PRODUCTS
   * ================================
   */

  const allProducts = useMemo(() => {
    return [
      ...products,
      ...a2GheeProducts,
      ...healthSupplementProducts,
      ...jaggeryProducts,
      ...healthComboProducts,
      ...hotDealsProducts,
    ];
  }, []);

  /* 
   * ================================
   * CATEGORY FILTER
   * ================================
   */

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return allProducts;
    }

    return allProducts.filter((product) => {
      const category = String(
        product.category || ""
      ).toLowerCase();

      const categoryName = String(
        product.categoryName || ""
      ).toLowerCase();

      if (activeCategory === "oils") {
        return (
          category.includes("oil") ||
          categoryName.includes("oil")
        );
      }

      if (activeCategory === "ghee") {
        return (
          category.includes("ghee") ||
          categoryName.includes("ghee")
        );
      }

      if (activeCategory === "jaggery") {
        return (
          category.includes("jaggery") ||
          categoryName.includes("jaggery")
        );
      }

      if (activeCategory === "combos") {
        return (
          category.includes("combo") ||
          categoryName.includes("combo")
        );
      }

      if (activeCategory === "wellness") {
        return (
          category.includes("wellness") ||
          category.includes("supplement") ||
          category.includes("immunity") ||
          category.includes("digestion") ||
          categoryName.includes("wellness") ||
          categoryName.includes("supplement")
        );
      }

      if (activeCategory === "superfoods") {
        return (
          category.includes("superfood") ||
          categoryName.includes("superfood")
        );
      }

      return true;
    });
  }, [activeCategory, allProducts]);

  /* 
   * ================================
   * CATEGORY BUTTONS
   * ================================
   */

  const categories = [
    {
      id: "all",
      icon: "🌿",
      label: "All",
    },
    {
      id: "oils",
      icon: "💧",
      label: "Oils",
    },
    {
      id: "ghee",
      icon: "🥛",
      label: "Ghee",
    },
    {
      id: "jaggery",
      icon: "🧊",
      label: "Jaggery",
    },
    {
      id: "combos",
      icon: "🎁",
      label: "Combos",
    },
    {
      id: "wellness",
      icon: "🌱",
      label: "Wellness",
    },
    {
      id: "superfoods",
      icon: "⭐",
      label: "Superfoods",
    },
  ];

  /* 
   * ================================
   * JSX
   * ================================
   */

  return (
    <section className="product-focus-section">

      {/* ================= HEADER ================= */}

      <div className="product-focus-header">

        <p className="product-focus-subtitle">
          OUR COLLECTION
        </p>

        <h2>
          You're One Step Closer to Purity
        </h2>

      </div>

      {/* ================= CATEGORIES ================= */}

      <div className="product-focus-categories">

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`product-focus-category ${
              activeCategory === category.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveCategory(category.id)
            }
          >

            <span className="product-focus-category-icon">
              {category.icon}
            </span>

            <span className="product-focus-category-name">
              {category.label}
            </span>

          </button>
        ))}

      </div>

      {/* ================= PRODUCTS ================= */}

      <div className="product-focus-products">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductFocusCard
              key={`${product.id}-${product.name}`}
              product={product}
            />
          ))
        ) : (
          <div className="product-focus-empty">
            No products found.
          </div>
        )}

      </div>

    </section>
  );
};

export default ProductFocus;