import React from "react";

const CategoryHero = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <section className="category-hero">

      <div className="category-hero-pattern pattern-one" />
      <div className="category-hero-pattern pattern-two" />

      <div className="category-hero-content">

        <span className="category-eyebrow">
          {eyebrow}
        </span>

        <h1>
          {title}
        </h1>

        <p>
          {description}
        </p>

      </div>

    </section>
  );
};

export default CategoryHero;