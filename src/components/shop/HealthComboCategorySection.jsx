import React from "react";
import ProductCard from "../common/ProductCard";

const HealthComboCategorySection = ({
  title,
  subtitle,
  bannerImage,
  products = [],
}) => {
  return (
    <section className="health-combo-category-section">

      {/* Banner */}
      <div
        className="health-combo-category-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="health-combo-category-banner-overlay">

          <div className="health-combo-category-banner-content">

            <span>
              Natural • Healthy • Nourishing
            </span>

            <h2>{title}</h2>

            <p>{subtitle}</p>

          </div>

        </div>
      </div>

      {/* Products */}
      {products.length > 0 && (
        <div className="health-combo-category-products">

          <div className="health-combo-category-products-track">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>
      )}

    </section>
  );
};

export default HealthComboCategorySection;