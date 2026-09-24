import React from "react";
import ProductCard from "../common/ProductCard";

const ProductGrid = ({ products = [] }) => {
  return (
    <div className="shop-product-grid">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
};

export default ProductGrid;