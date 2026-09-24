import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const finalPrice = product.salePrice || product.price;

  return (
    <article className="shop-product-card">

      {/* IMAGE */}
      <div className="shop-product-image-wrapper">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="shop-product-image"
          />
        </Link>

        {product.discount && (
          <span className="shop-product-discount">
            {product.discount}
          </span>
        )}

        {product.badge && (
          <span className="shop-product-badge">
            {product.badge}
          </span>
        )}

      </div>


      {/* CONTENT */}
      <div className="shop-product-content">

        <p className="shop-product-category">
          {product.categoryName || product.category}
        </p>


        <Link
          to={`/product/${product.id}`}
          className="shop-product-title-link"
        >
          <h3 className="shop-product-title">
            {product.name}
          </h3>
        </Link>


        {/* RATING */}
        <div className="shop-product-rating">

          <Star
            size={15}
            fill="currentColor"
          />

          <span>
            {product.rating || "4.8"}
          </span>

          <span className="shop-review-count">
            ({product.reviews || 0} reviews)
          </span>

        </div>


        {/* PRICE */}
        <div className="shop-product-price">

          {product.salePrice &&
            product.salePrice < product.price && (
              <span className="shop-old-price">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            )}

          <span className="shop-current-price">
            ₹{finalPrice.toLocaleString("en-IN")}
          </span>

        </div>


        {/* BUTTON */}
        <button
          type="button"
          className="shop-add-button"
        >
          <ShoppingCart size={17} />

          <span>
            Add to Cart
          </span>
        </button>

      </div>

    </article>
  );
};

export default ProductCard;