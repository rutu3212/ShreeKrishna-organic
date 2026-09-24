import React from "react";

const SupplementCategories = () => {
  const categories = [
    {
      name: "Health Supplements",
      icon: "🌿",
      target: "health-supplements",
    },
    {
      name: "Immunity Support",
      icon: "🛡️",
      target: "immunity",
    },
    {
      name: "Digestive Wellness",
      icon: "🌱",
      target: "digestion",
    },
    {
      name: "Daily Wellness",
      icon: "❤️",
      target: "daily-wellness",
    },
    {
      name: "Natural Superfoods",
      icon: "🥗",
      target: "superfoods",
    },
  ];

  const handleCategoryClick = (target) => {
    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="supplement-categories">

      <div className="supplement-categories-container">

        <p className="supplement-categories-label">
          Explore Our Wellness Range
        </p>

        <h2>
          Choose Your Supplement
        </h2>

        <div className="supplement-categories-list">

          {categories.map((category) => (
            <button
              key={category.target}
              type="button"
              className="supplement-category-item"
              onClick={() =>
                handleCategoryClick(category.target)
              }
            >
              <span className="supplement-category-icon">
                {category.icon}
              </span>

              <span className="supplement-category-name">
                {category.name}
              </span>
            </button>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SupplementCategories;