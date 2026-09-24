import React from "react";

const OilCategories = () => {
  const categories = [
    {
      name: "Wood Pressed Oil",
      icon: "🫙",
      target: "wood-pressed-oil",
    },
    {
      name: "Groundnut Oil",
      icon: "🥜",
      target: "groundnut-oil",
    },
    {
      name: "Sunflower Oil",
      icon: "🌻",
      target: "sunflower-oil",
    },
    {
      name: "Mustard Oil",
      icon: "🌱",
      target: "mustard-oil",
    },
    {
      name: "Olive Oil",
      icon: "🫒",
      target: "olive-oil",
    },
    {
      name: "Coconut Oil",
      icon: "🥥",
      target: "coconut-oil",
    },
    {
      name: "Sesame Oil",
      icon: "🌾",
      target: "sesame-oil",
    },
  ];

  const handleOilClick = (target) => {
    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="oil-categories">

      <div className="oil-categories-container">

        <p className="oil-categories-label">
          Explore Our Oils
        </p>

        <h2>
          Choose Your Oil
        </h2>

        <div className="oil-categories-list">

          {categories.map((category) => (
            <button
              key={category.target}
              type="button"
              className="oil-category-item"
              onClick={() => handleOilClick(category.target)}
            >

              <span className="oil-category-icon">
                {category.icon}
              </span>

              <span className="oil-category-name">
                {category.name}
              </span>

            </button>
          ))}

        </div>

      </div>

    </section>
  );
};

export default OilCategories;