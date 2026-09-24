// import React from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, Star, Zap } from "lucide-react";

// const ProductFocusCard = ({ product }) => {
//   if (!product) return null;

//   const finalPrice = product.salePrice || product.price;

//   return (
//     <article className="oil-product-card">

//       {/* ================= IMAGE ================= */}

//       <div className="oil-product-image-wrapper">

//         {product.discount && (
//           <span className="oil-discount-badge">
//             {product.discount}
//           </span>
//         )}

//         {product.badge && (
//           <span className="oil-product-badge">
//             {product.badge}
//           </span>
//         )}

//         <Link to={`/product/${product.id}`}>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="oil-product-image"
//           />
//         </Link>

//         <button
//           type="button"
//           className="oil-add-button"
//         >
//           ADD
//           <ShoppingCart size={17} />
//         </button>
//       </div>

//       {/* ================= CONTENT ================= */}

//       <div className="oil-product-content">

//         <Link
//           to={`/product/${product.id}`}
//           className="oil-product-title-link"
//         >
//           <h3 className="oil-product-title">
//             {product.name}
//           </h3>
//         </Link>

//         {/* Rating */}

//         <div className="oil-product-rating">

//           <Star
//             size={16}
//             fill="currentColor"
//           />

//           <span>{product.rating}</span>

//           <span className="oil-review-count">
//             ({product.reviews} reviews)
//           </span>

//         </div>

//         {/* Price */}

//         <div className="oil-product-price">

//           {product.price > finalPrice && (
//             <span className="oil-old-price">
//               ₹{product.price.toLocaleString("en-IN")}
//             </span>
//           )}

//           <span className="oil-current-price">
//             ₹{finalPrice.toLocaleString("en-IN")}
//           </span>

//         </div>

//         {/* Best Price */}

//         <div className="oil-best-price">
//           <span>♢</span>

//           <strong>
//             Best Price ₹
//             {Math.round(finalPrice * 0.85).toLocaleString("en-IN")}
//           </strong>

//           <span>with PURE15</span>
//         </div>

//         {/* Selling Fast */}

//         {product.badge === "Selling Fast" && (
//           <div className="oil-selling-fast">
//             <Zap size={14} fill="currentColor" />
//             Selling Fast
//           </div>
//         )}

//       </div>
//     </article>
//   );
// };

// export default ProductFocusCard;

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Zap } from "lucide-react";
import useCart from "../../hooks/useCart";

const ProductFocusCard = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const finalPrice = product.salePrice || product.price;

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();

    addToCart(product);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <article className="oil-product-card">

      <div className="oil-product-image-wrapper">

        {product.discount && (
          <span className="oil-discount-badge">
            {product.discount}
          </span>
        )}

        {product.badge && (
          <span className="oil-product-badge">
            {product.badge}
          </span>
        )}

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="oil-product-image"
            loading="lazy"
          />
        </Link>

        <button
          type="button"
          className="oil-add-button"
          onClick={handleAddToCart}
        >
          ADD
          <ShoppingCart size={17} />
        </button>

      </div>

      <div className="oil-product-content">

        <Link
          to={`/product/${product.id}`}
          className="oil-product-title-link"
        >
          <h3 className="oil-product-title">
            {product.name}
          </h3>
        </Link>

        <div className="oil-product-rating">

          <Star
            size={16}
            fill="currentColor"
          />

          <span>
            {product.rating || "4.8"}
          </span>

          <span className="oil-review-count">
            ({product.reviews || 0} reviews)
          </span>

        </div>

        <div className="oil-product-price">

          {Number(product.price) > Number(finalPrice) && (
            <span className="oil-old-price">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </span>
          )}

          <span className="oil-current-price">
            ₹{Number(finalPrice).toLocaleString("en-IN")}
          </span>

        </div>

        <div className="oil-best-price">

          <span>♢</span>

          <strong>
            Best Price ₹
            {Math.round(
              Number(finalPrice) * 0.85
            ).toLocaleString("en-IN")}
          </strong>

          <span>
            with PURE15
          </span>

        </div>

        {product.badge === "Selling Fast" && (
          <div className="oil-selling-fast">

            <Zap
              size={14}
              fill="currentColor"
            />

            Selling Fast

          </div>
        )}

      </div>
    </article>
  );
};

export default ProductFocusCard;