import React from "react";

const CategoryBanner = () => {
  return (
    <section className="category-banner">
      <div className="category-banner-overlay">

        <div className="category-banner-content">
          <span className="category-banner-small">
            SHREEKRISHNA ORGANICS
          </span>

          <h2>
            Pure oils.
            <br />
            Honest goodness.
          </h2>

          <p>
            Naturally extracted from carefully selected seeds using
            traditional wood pressing methods.
          </p>

          <button type="button">
            Explore Oils
          </button>
        </div>

      </div>
    </section>
  );
};

export default CategoryBanner;