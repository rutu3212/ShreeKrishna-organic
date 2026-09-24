import React from "react";
import { ShoppingCart, Star, Zap, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const ComboProductCard = ({ product }) => {
  const finalPrice = product.salePrice || product.price;

  return (
    <article className="combo-card">
      {/* DISCOUNT */}
      {product.discount && (
        <div className="combo-discount">
          {product.discount.split(" ").map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      )}

      {/* TOP BADGE */}
      {product.badge && (
        <div className="combo-badge">
          {product.badge}
        </div>
      )}

      {/* IMAGE */}
      <Link
        to={`/product/${product.id}`}
        className="combo-image-wrapper"
      >
        <img
          src={product.image}
          alt={product.name}
          className="combo-image"
        />
      </Link>

      {/* SELLING FAST */}
      {product.sellingFast && (
        <div className="combo-selling-fast">
          <Zap size={16} fill="currentColor" />
          Selling Fast
        </div>
      )}

      {/* BUTTON */}
      <div className="combo-action-row">
        <button
          type="button"
          className={`combo-add-button ${
            product.soldOut ? "sold-out" : ""
          }`}
          disabled={product.soldOut}
        >
          {product.soldOut ? (
            "Sold out"
          ) : (
            <>
              ADD
              <ShoppingCart size={17} />
            </>
          )}
        </button>
      </div>

      {/* DETAILS */}
      <div className="combo-card-content">
        <Link to={`/product/${product.id}`}>
          <h3 className="combo-title">
            {product.name}
          </h3>
        </Link>

        {/* RATING */}
        <div className="combo-rating">
          <Star
            size={15}
            fill="#f4b400"
            color="#f4b400"
          />

          <span className="combo-rating-value">
            {product.rating}
          </span>

          <span className="combo-reviews">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* PRICE */}
        <div className="combo-price-row">
          {product.salePrice &&
            product.salePrice < product.price && (
              <span className="combo-old-price">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            )}

          <span className="combo-current-price">
            ₹{finalPrice.toLocaleString("en-IN")}
          </span>

          {!product.soldOut && (
            <span className="combo-popular-pill">
              🔥 1k+
            </span>
          )}
        </div>

        {/* OFFER */}
        <div className="combo-offer">
          <Tag size={15} />

          <strong>{product.offer}</strong>

          <span>— {product.offerText}</span>
        </div>
      </div>
    </article>
  );
};

export default ComboProductCard;