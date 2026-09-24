import React from "react";

const JaggeryCategories = () => {
  const categories = [
    {
      name: "Jaggery Blocks",
      icon: "🟫",
      target: "jaggery-block",
    },
    {
      name: "Jaggery Powder",
      icon: "🍯",
      target: "jaggery-powder",
    },
    {
      name: "Jaggery Cubes",
      icon: "⬜",
      target: "jaggery-cubes",
    },
    {
      name: "Jaggery Combos",
      icon: "🎁",
      target: "jaggery-combo",
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
    <section className="jaggery-categories">
      <div className="jaggery-categories-container">

        <p className="jaggery-categories-label">
          Explore Our Jaggery Range
        </p>

        <h2>Choose Your Jaggery</h2>

        <div className="jaggery-categories-list">
          {categories.map((category) => (
            <button
              key={category.target}
              type="button"
              className="jaggery-category-item"
              onClick={() =>
                handleCategoryClick(category.target)
              }
            >
              <span className="jaggery-category-icon">
                {category.icon}
              </span>

              <span className="jaggery-category-name">
                {category.name}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JaggeryCategories;