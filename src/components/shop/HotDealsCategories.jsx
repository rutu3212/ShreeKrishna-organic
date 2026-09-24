import React from "react";

const HotDealsCategories = () => {
  const categories = [
    {
      id: "best-sellers",
      icon: "🔥",
      title: "Best Sellers",
    },
    {
      id: "limited-time",
      icon: "⚡",
      title: "Flash Deals",
    },
    {
      id: "under-999",
      icon: "🏷️",
      title: "Under ₹999",
    },
    {
      id: "combo-deals",
      icon: "🎁",
      title: "Combo Deals",
    },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hot-deals-categories">
      <div className="hot-deals-categories-track">

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className="hot-deals-category-button"
            onClick={() => handleScroll(category.id)}
          >
            <span className="hot-deals-category-icon">
              {category.icon}
            </span>

            <span>{category.title}</span>
          </button>
        ))}

      </div>
    </section>
  );
};

export default HotDealsCategories;