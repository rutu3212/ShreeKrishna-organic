import React from "react";

const GheeCategories = () => {
  const categories = [
    {
      name: "A2 Ghee",
      icon: "🫙",
      target: "a2-ghee",
    },

    {
      name: "Gir Cow Ghee",
      icon: "🐄",
      target: "gir-ghee",
    },

    {
      name: "Desi Cow Ghee",
      icon: "🥛",
      target: "desi-cow-ghee",
    },

    {
      name: "Buffalo Ghee",
      icon: "🐃",
      target: "buffalo-ghee",
    },

    {
      name: "Ghee Combo",
      icon: "🎁",
      target: "ghee-combo",
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
    <section className="ghee-category-icons">

      <div className="ghee-category-icons-container">

        <p className="ghee-category-label">
          Explore Our Pure Ghee
        </p>

        <h2>
          Choose Your Ghee
        </h2>

        <div className="ghee-category-icons-list">

          {categories.map((category) => (
            <button
              key={category.target}
              type="button"
              className="ghee-category-icon-item"
              onClick={() =>
                handleCategoryClick(category.target)
              }
            >

              <span className="ghee-category-main-icon">
                {category.icon}
              </span>

              <span className="ghee-category-icon-name">
                {category.name}
              </span>

            </button>
          ))}

        </div>

      </div>

    </section>
  );
};

export default GheeCategories;