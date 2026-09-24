import React from "react";
import ProductCard from "../common/ProductCard";

const GheeCategorySection = ({
  title,
  subtitle,
  bannerImage,
  products = [],
}) => {
  return (
    <section className="ghee-category-section">

      {/* ================= BANNER ================= */}

      <div
        className="ghee-category-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >

        <div className="ghee-category-banner-overlay">

          <div className="ghee-category-banner-content">

            <span>
              Pure • Traditional • Bilona
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


      {/* ================= PRODUCTS ================= */}

      {products.length > 0 && (

        <div className="ghee-category-products">

          <div className="ghee-category-products-track">

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

export default GheeCategorySection;