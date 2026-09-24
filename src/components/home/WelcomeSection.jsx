import React, { useMemo, useState } from "react";
import {
  Leaf,
  ShoppingCart,
  Star,
  Tag,
  ArrowRight,
} from "lucide-react";

const categories = [
  { id: "all", name: "All", icon: "🌿" },
  { id: "oils", name: "Oils", icon: "💧" },
  { id: "ghee", name: "Ghee", icon: "🥛" },
  { id: "jaggery", name: "Jaggery", icon: "🧊" },
  { id: "combos", name: "Combos", icon: "🎁" },
  { id: "wellness", name: "Wellness", icon: "🌱" },
  { id: "superfoods", name: "Superfoods", icon: "⭐" },
];

const products = [
  {
    id: 1,
    name: "Wood Pressed Mustard Oil - 1L",
    category: "oils",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=85",
    discount: "5% OFF",
    badge: "Best Seller",
    rating: "4.8",
    reviews: "120 reviews",
    oldPrice: "₹560",
    price: "₹532",
    quantity: "1L",
    offer: "100% PURE & NATURAL",
  },

  {
    id: 2,
    name: "High Protein Atta - Pack of 3",
    category: "wellness",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85",
    discount: "3% OFF",
    badge: "New Launch",
    rating: "4.8",
    reviews: "32 reviews",
    oldPrice: "₹1,200",
    price: "₹1,164",
    quantity: "3 × 1kg",
    offer: "Best Price ₹989 with PURE15",
  },

  {
    id: 3,
    name: "Khapli Atta Combo Pack - 5kg + 5kg",
    category: "combos",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85",
    discount: "22% OFF",
    badge: "Selling Fast",
    rating: "4.6",
    reviews: "156 reviews",
    oldPrice: "₹2,200",
    price: "₹1,716",
    quantity: "5kg × 2",
    offer: "Save ₹484 on this combo",
  },

  {
    id: 4,
    name: "A2 Gir Cow Ghee - 1L Jar",
    category: "ghee",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=85",
    discount: "15% OFF",
    badge: "Best Seller",
    rating: "4.9",
    reviews: "1371 reviews",
    oldPrice: "₹2,800",
    price: "₹2,400",
    quantity: "1L",
    offer: "Traditional Bilona Process",
  },

  {
    id: 5,
    name: "Organic Jaggery Powder - 500g",
    category: "jaggery",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=85",
    discount: "6% OFF",
    badge: "New Launch",
    rating: "4.8",
    reviews: "82 reviews",
    oldPrice: "₹450",
    price: "₹399",
    quantity: "500g",
    offer: "Naturally Processed Jaggery",
  },

  {
    id: 6,
    name: "Premium Dry Fruits & Nuts Mix",
    category: "superfoods",
    image:
      "https://images.unsplash.com/photo-1599599810694-57a6d7e9e3a2?auto=format&fit=crop&w=700&q=85",
    discount: "7% OFF",
    badge: "Top Rated",
    rating: "4.8",
    reviews: "580 reviews",
    oldPrice: "₹1,200",
    price: "₹1,099",
    quantity: "500g",
    offer: "Premium Quality Selection",
  },
];

const WelcomeSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-[#f5f1df] py-14 sm:py-16 lg:py-20">
      {/* Decorative leaves */}

      <Leaf
        size={150}
        strokeWidth={0.8}
        className="pointer-events-none absolute -left-12 top-20 hidden rotate-[-25deg] text-[#839464] opacity-20 md:block"
      />

      <Leaf
        size={150}
        strokeWidth={0.8}
        className="pointer-events-none absolute -right-12 top-20 hidden rotate-[205deg] text-[#839464] opacity-20 md:block"
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">

        {/* =========================
            HEADING
        ========================== */}

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="hidden h-px w-24 bg-[#c8a753] sm:block" />

            <Leaf
              size={24}
              strokeWidth={1.7}
              className="text-[#176653]"
            />

            <span className="hidden h-px w-24 bg-[#c8a753] sm:block" />
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight text-[#7b5719] sm:text-5xl lg:text-[56px]">
            Welcome to Shreekrishna Organics!
          </h2>

          <p className="mt-3 font-serif text-xl text-[#49725e] sm:text-3xl lg:text-[36px]">
            You're One Step Closer to Purity
          </p>
        </div>

        {/* =========================
            CATEGORIES
        ========================== */}

        <div className="mt-10 overflow-x-auto pb-3 welcome-scrollbar">
          <div className="mx-auto flex min-w-max justify-center gap-5 sm:gap-8 lg:gap-12">
            {categories.map((category) => {
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex min-w-[68px] flex-col items-center gap-2 pb-4 transition-all duration-300 ${
                    active
                      ? "text-[#176653]"
                      : "text-[#4f584d] hover:text-[#176653]"
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-3xl transition-all duration-300 ${
                      active
                        ? "scale-110 bg-[#e2ebd9]"
                        : "hover:bg-[#e9edde]"
                    }`}
                  >
                    {category.icon}
                  </span>

                  <span className="text-sm font-semibold">
                    {category.name}
                  </span>

                  <span
                    className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#176653] transition-all duration-300 ${
                      active ? "w-16" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================
            PRODUCTS
        ========================== */}

        <div className="mt-7 flex gap-4 overflow-x-auto pb-6 welcome-scrollbar">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group min-w-[280px] overflow-hidden rounded-2xl border border-[#dbd8c8] bg-[#fffef8] shadow-[0_5px_18px_rgba(30,70,55,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(30,70,55,0.16)] sm:min-w-[300px] lg:min-w-[310px]"
            >
              {/* Image */}

              <div className="relative h-[265px] overflow-hidden bg-[#f0efe6]">

                {/* Discount */}

                <span className="absolute left-3 top-3 z-20 rounded-lg bg-[#12614d] px-3 py-2 text-[11px] font-bold text-white shadow">
                  {product.discount}
                </span>

                {/* Badge */}

                {product.badge && (
                  <span className="absolute right-3 top-3 z-20 rounded-lg bg-[#d49a20] px-3 py-2 text-[11px] font-bold text-white shadow">
                    ★ {product.badge}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Add button */}

                <button
                  type="button"
                  className="absolute bottom-3 right-3 z-20 flex items-center gap-2 rounded-xl bg-[#176653] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#0f5141] hover:-translate-y-1"
                >
                  ADD

                  <ShoppingCart size={17} />
                </button>
              </div>

              {/* Product content */}

              <div className="p-4">

                <h3 className="min-h-[52px] font-serif text-[18px] leading-6 text-[#173e34]">
                  {product.name}
                </h3>

                {/* Rating */}

                <div className="mt-3 flex items-center gap-1">
                  <Star
                    size={16}
                    color="#f2ae00"
                    fill="#f2ae00"
                  />

                  <span className="text-sm font-bold text-[#264c42]">
                    {product.rating}
                  </span>

                  <span className="ml-1 text-xs text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Prices */}

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>

                  <span className="text-xl font-bold text-[#153f35]">
                    {product.price}
                  </span>
                </div>

                {/* Quantity */}

                <div className="mt-3">
                  <span className="rounded-full bg-[#e9f2e5] px-3 py-1 text-xs font-bold text-[#176653]">
                    {product.quantity}
                  </span>
                </div>

                {/* Offer */}

                <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#e8f3e7] px-3 py-2 text-xs font-semibold text-[#176653]">
                  <Tag size={14} />

                  <span className="truncate">
                    {product.offer}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No product */}

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-serif text-2xl text-[#176653]">
              Products coming soon
            </p>
          </div>
        )}

        {/* =========================
            BUTTON
        ========================== */}

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className="group flex items-center gap-3 rounded-full border border-[#176653] bg-[#176653] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#104f40] hover:shadow-lg"
          >
            Explore All Products

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* =========================
            TRUST INFORMATION
        ========================== */}

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-[#d8ddca] bg-white/60 backdrop-blur-sm sm:grid-cols-4">

          <div className="border-b border-r border-[#d8ddca] p-5 text-center sm:border-b-0">
            <p className="text-xl font-bold text-[#176653]">
              100%
            </p>

            <p className="mt-1 text-xs text-[#687062]">
              Natural
            </p>
          </div>

          <div className="border-b border-[#d8ddca] p-5 text-center sm:border-b-0 sm:border-r">
            <p className="text-xl font-bold text-[#176653]">
              Pure
            </p>

            <p className="mt-1 text-xs text-[#687062]">
              Ingredients
            </p>
          </div>

          <div className="border-r border-[#d8ddca] p-5 text-center">
            <p className="text-lg font-bold text-[#176653]">
              Traditional
            </p>

            <p className="mt-1 text-xs text-[#687062]">
              Processing
            </p>
          </div>

          <div className="p-5 text-center">
            <p className="text-xl font-bold text-[#176653]">
              Quality
            </p>

            <p className="mt-1 text-xs text-[#687062]">
              You Can Trust
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;