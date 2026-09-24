import React from "react";
import ProductCard from "../common/ProductCard";

const SupplementCategorySection = ({
  title,
  subtitle,
  bannerImage,
  products = [],
}) => {
  return (
    <section className="supplement-category-section">

      {/* Banner */}

      <div
        className="supplement-category-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="supplement-category-banner-overlay">

          <div className="supplement-category-banner-content">

            <span>
              Natural • Pure • Nourishing
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

      {/* Related Products */}

      {products.length > 0 && (
        <div className="supplement-category-products">

          <div className="supplement-category-products-track">

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

export default SupplementCategorySection;