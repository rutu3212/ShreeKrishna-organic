import React from "react";
import { Link } from "react-router-dom";
import {
  CircleDot,
  Droplets,
  Sun,
  Leaf,
  Circle,
  Flower2,
} from "lucide-react";

const OilCategories = () => {
  const categories = [
    {
      name: "Groundnut",
      slug: "groundnut-oil",
      icon: CircleDot,
    },
    {
      name: "Mustard",
      slug: "mustard-oil",
      icon: Droplets,
    },
    {
      name: "Sunflower",
      slug: "sunflower-oil",
      icon: Sun,
    },
    {
      name: "Olive",
      slug: "olive-oil",
      icon: Leaf,
    },
    {
      name: "Coconut",
      slug: "coconut-oil",
      icon: Circle,
    },
    {
      name: "Sesame",
      slug: "sesame-oil",
      icon: Flower2,
    },
  ];

  return (
    <div className="oil-categories">
      {categories.map((category) => {
        const Icon = category.icon;

        return (
          <Link
            key={category.slug}
            to={`/shop?category=${category.slug}`}
            className="oil-category"
          >
            <div className="oil-category-icon">
              <Icon size={48} strokeWidth={1.5} />
            </div>

            <span>{category.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default OilCategories;