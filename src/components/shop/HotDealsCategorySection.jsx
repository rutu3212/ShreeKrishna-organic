import React from "react";
import ProductCard from "../common/ProductCard";

const HotDealsCategorySection = ({
  title,
  subtitle,
  badge,
  products = [],
}) => {
  if (!products.length) {
    return null;
  }

  return (
    <section className="hot-deals-category-section">

      {/* Section Header */}
      <div className="hot-deals-section-header">

        <div>
          {badge && (
            <span className="hot-deals-section-badge">
              {badge}
            </span>
          )}

          <h2>{title}</h2>

          <p>{subtitle}</p>
        </div>

        <span className="hot-deals-product-count">
          {products.length} products
        </span>

      </div>

      {/* Horizontal Products */}
      <div className="hot-deals-products-wrapper">

        <div className="hot-deals-products-track">

          {products.map((product) => (
            <div
              className="hot-deals-product-item"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HotDealsCategorySection;