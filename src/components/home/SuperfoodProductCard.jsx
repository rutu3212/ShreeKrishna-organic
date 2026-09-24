import React from "react";

import { Link } from "react-router-dom";

import {
  ShoppingCart,
  Star,
  Tag,
} from "lucide-react";


const SuperfoodProductCard = ({ product }) => {

  if (!product) {
    return null;
  }


  const finalPrice =
    product.salePrice || product.price;


  return (
    <article className="superfood-card">


      {/* =================================================
          DISCOUNT BADGE
      ================================================= */}

      {product.discount && (
        <div className="superfood-discount">

          {product.discount
            .split(" ")
            .map((text, index) => (
              <span key={index}>
                {text}
              </span>
            ))}

        </div>
      )}


      {/* =================================================
          TOP BADGE
      ================================================= */}

      {product.badge && (
        <div className="superfood-badge">
          {product.badge}
        </div>
      )}


      {/* =================================================
          PRODUCT IMAGE
      ================================================= */}

      <Link
        to={`/product/${product.id}`}
        className="superfood-image-wrapper"
      >

        <img
          src={product.image}
          alt={product.name}
          className="superfood-image"
          loading="lazy"
        />

      </Link>


      {/* =================================================
          ADD / SOLD OUT BUTTON
      ================================================= */}

      <div className="superfood-action">

        <button
          type="button"
          disabled={product.soldOut}
          className={`superfood-add-button ${
            product.soldOut
              ? "superfood-sold-out"
              : ""
          }`}
        >

          {product.soldOut ? (
            "Sold out"
          ) : (
            <>
              <span>
                ADD
              </span>

              <ShoppingCart
                size={17}
                strokeWidth={2}
              />
            </>
          )}

        </button>

      </div>


      {/* =================================================
          PRODUCT CONTENT
      ================================================= */}

      <div className="superfood-content">


        {/* PRODUCT NAME */}

        <Link
          to={`/product/${product.id}`}
          className="superfood-title-link"
        >

          <h3 className="superfood-title">
            {product.name}
          </h3>

        </Link>


        {/* =================================================
            RATING
        ================================================= */}

        <div className="superfood-rating">

          <Star
            size={15}
            fill="#f5b400"
            color="#f5b400"
            strokeWidth={1.5}
          />

          <span>
            {product.rating}
          </span>

          <span className="superfood-reviews">
            ({product.reviews} reviews)
          </span>

        </div>


        {/* =================================================
            PRICE
        ================================================= */}

        <div className="superfood-price">

          {product.salePrice &&
            product.salePrice <
              product.price && (

              <span className="superfood-old-price">

                ₹
                {product.price.toLocaleString(
                  "en-IN"
                )}

              </span>

            )}


          <span className="superfood-current-price">

            ₹
            {finalPrice.toLocaleString(
              "en-IN"
            )}

          </span>

        </div>


        {/* =================================================
            OFFER
        ================================================= */}

        <div className="superfood-offer">

          <Tag
            size={14}
            strokeWidth={1.7}
          />

          <strong>
            {product.offer}
          </strong>

          {product.offerText && (
            <span>
              {product.offerText}
            </span>
          )}

        </div>


      </div>

    </article>
  );
};


export default SuperfoodProductCard;