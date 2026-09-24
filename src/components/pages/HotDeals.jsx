import React from "react";
import HotDealsCategories from "../shop/HotDealsCategories";
import HotDealsCategorySection from "../shop/HotDealsCategorySection";
import hotDealsProducts from "../data/hotDealsProducts";

const HotDeals = () => {
  const getProducts = (category) => {
    return hotDealsProducts.filter(
      (product) => product.category === category
    );
  };

  return (
    <main className="category-page hot-deals-page">

      {/* Page Header */}
      <section className="hot-deals-header">
        <div className="hot-deals-header-inner">
          <span className="hot-deals-brand">
            SHREEKRISHNA ORGANICS
          </span>

          <h1>Today's Hot Deals</h1>

          <p>
            {hotDealsProducts.length} products
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <HotDealsCategories />

      {/* Best Sellers */}
      <section id="best-sellers">
        <HotDealsCategorySection
          title="Best Sellers"
          subtitle="Our most-loved products, now available at special prices."
          badge="🔥 Best Sellers"
          products={getProducts("best-sellers")}
        />
      </section>

      {/* Flash Deals */}
      <section id="limited-time">
        <HotDealsCategorySection
          title="Flash Deals"
          subtitle="Limited-time offers on your everyday natural essentials."
          badge="⚡ Flash Deals"
          products={getProducts("limited-time")}
        />
      </section>

      {/* Under ₹999 */}
      <section id="under-999">
        <HotDealsCategorySection
          title="Under ₹999"
          subtitle="Premium natural products at prices you'll love."
          badge="🏷 Under ₹999"
          products={getProducts("under-999")}
        />
      </section>

      {/* Combo Deals */}
      <section id="combo-deals">
        <HotDealsCategorySection
          title="Combo Deals"
          subtitle="Save more with thoughtfully curated natural wellness combos."
          badge="🎁 Combo Deals"
          products={getProducts("combo-deals")}
        />
      </section>

    </main>
  );
};

export default HotDeals;