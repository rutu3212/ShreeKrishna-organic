import React from "react";
import ProductCard from "../common/ProductCard";

const OilCategorySection = ({
  title,
  subtitle,
  bannerImage,
  products = [],
}) => {
  return (
    <section className="oil-category-section">

      {/* =========================
          BANNER
      ========================= */}

      <div
        className="oil-category-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >

        <div className="oil-category-banner-overlay">

          <div className="oil-category-banner-content">

            <span>
              Pure • Traditional • Natural
            </span>

            <h2>
              {title}
            </h2>

            <p>
              {subtitle}
            </p>

          </div>

        </div>

      </div>


      {/* =========================
          RELATED PRODUCTS
      ========================= */}

      {products.length > 0 && (
        <div className="oil-category-products">

          <div className="oil-category-products-track">

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

export default OilCategorySection;