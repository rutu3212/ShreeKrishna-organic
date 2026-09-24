import React from "react";
import ProductCard from "../common/ProductCard";

const JaggeryCategorySection = ({
  title,
  subtitle,
  bannerImage,
  products = [],
}) => {
  return (
    <section className="jaggery-category-section">

      {/* Banner */}
      <div
        className="jaggery-category-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="jaggery-category-banner-overlay">

          <div className="jaggery-category-banner-content">

            <span>
              Pure • Natural • Traditional
            </span>

            <h2>{title}</h2>

            <p>{subtitle}</p>

          </div>

        </div>
      </div>

      {/* Products */}
      {products.length > 0 && (
        <div className="jaggery-category-products">

          <div className="jaggery-category-products-track">

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

export default JaggeryCategorySection;