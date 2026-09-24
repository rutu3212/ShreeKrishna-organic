import React from "react";
import {
  Beef,
  Droplets,
  Wheat,
  Apple,
  Gift,
  Package,
  Leaf,
} from "lucide-react";

const CategoryQuickCategories = () => {
  const categories = [
    {
      name: "Ghee",
      icon: Beef,
    },
    {
      name: "Oil",
      icon: Droplets,
      active: true,
    },
    {
      name: "Atta",
      icon: Wheat,
    },
    {
      name: "Superfoods",
      icon: Apple,
    },
    {
      name: "Gift Card",
      icon: Gift,
    },
    {
      name: "Combo",
      icon: Package,
    },
    {
      name: "All",
      icon: Leaf,
    },
  ];

  return (
    <section className="quick-category-section">
      <div className="quick-category-container">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              className={`quick-category-item ${
                category.active ? "active" : ""
              }`}
              key={category.name}
            >
              <div className="quick-category-icon">
                <Icon size={27} strokeWidth={1.7} />
              </div>

              <span>{category.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryQuickCategories;