import React, { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import ProductCard from "../common/ProductCard";

const ProductListing = ({
  products = [],
  title = "Products",
}) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = useMemo(() => {
    const result = [...products];

    if (sortBy === "low-high") {
      result.sort(
        (a, b) =>
          (a.salePrice || a.price) -
          (b.salePrice || b.price)
      );
    }

    if (sortBy === "high-low") {
      result.sort(
        (a, b) =>
          (b.salePrice || b.price) -
          (a.salePrice || a.price)
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) =>
          (b.rating || 0) -
          (a.rating || 0)
      );
    }

    return result;
  }, [products, sortBy]);

  return (
    <section className="product-listing">

      <div className="product-listing-container">

        {/* HEADER */}
        <div className="product-listing-header">

          <div className="product-listing-title">
            <span className="listing-small-title">
              SHREEKRISHNA ORGANICS
            </span>

            <h2>{title}</h2>

            <p>{products.length} products</p>
          </div>

          {/* SORT */}
          <div className="product-sort">

            <SlidersHorizontal size={18} />

            <label htmlFor="sort">
              Sort:
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">
                Featured
              </option>

              <option value="low-high">
                Price: Low to High
              </option>

              <option value="high-low">
                Price: High to Low
              </option>

              <option value="rating">
                Top Rated
              </option>
            </select>

          </div>

        </div>

        {/* PRODUCT GRID */}
        {sortedProducts.length > 0 ? (

          <div className="shop-product-grid">

            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="no-products">
            <h3>
              No products found
            </h3>

            <p>
              New products are coming soon.
            </p>
          </div>

        )}

      </div>

    </section>
  );
};

export default ProductListing;