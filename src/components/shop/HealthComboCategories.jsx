import React from "react";

const HealthComboCategories = () => {
  const categories = [
    {
      name: "Daily Wellness",
      icon: "🌿",
      target: "daily-wellness",
    },
    {
      name: "Family Combo",
      icon: "👨‍👩‍👧‍👦",
      target: "family-combo",
    },
    {
      name: "Immunity Combo",
      icon: "🛡️",
      target: "immunity-combo",
    },
    {
      name: "Breakfast Combo",
      icon: "🥣",
      target: "breakfast-combo",
    },
    {
      name: "Traditional Essentials",
      icon: "🌾",
      target: "traditional-combo",
    },
    {
      name: "Healthy Living",
      icon: "❤️",
      target: "healthy-living",
    },
    {
      name: "Complete Wellness",
      icon: "✨",
      target: "complete-wellness",
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
    <section className="health-combo-categories">
      <div className="health-combo-categories-container">

        <p className="health-combo-categories-label">
          Explore Our Wellness Combos
        </p>

        <h2>Choose Your Healthy Combo</h2>

        <div className="health-combo-categories-list">
          {categories.map((category) => (
            <button
              key={category.target}
              type="button"
              className="health-combo-category-item"
              onClick={() =>
                handleCategoryClick(category.target)
              }
            >
              <span className="health-combo-category-icon">
                {category.icon}
              </span>

              <span className="health-combo-category-name">
                {category.name}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HealthComboCategories;