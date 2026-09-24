import React from "react";

const GheeCategories = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = [
    {
      name: "All",
      slug: "all",
      icon: "🧈",
    },
    {
      name: "Gir",
      slug: "gir-ghee",
      icon: "🐄",
    },
    {
      name: "Desi Cow",
      slug: "desi-cow-ghee",
      icon: "🐄",
    },
    {
      name: "Buffalo",
      slug: "buffalo-ghee",
      icon: "🐃",
    },
    {
      name: "Combo",
      slug: "ghee-combo",
      icon: "🥫",
    },
  ];

  const handleCategoryClick = (slug) => {
    console.log("Selected category:", slug);

    onCategoryChange(slug);
  };

  return (
    <div className="ghee-categories">
      {categories.map((category) => (
        <button
          key={category.slug}
          type="button"
          className={`ghee-category ${
            selectedCategory === category.slug
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleCategoryClick(category.slug)
          }
        >
          <div className="ghee-category-icon">
            {category.icon}
          </div>

          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default GheeCategories;