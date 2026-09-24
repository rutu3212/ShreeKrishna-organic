// import React from "react";
// import { Star, ShoppingCart, Zap } from "lucide-react";
// import { Link } from "react-router-dom";

// import useCart from "../../hooks/useCart";

// const ProductCard = ({ product }) => {
//   // Cart function
//   const { addToCart } = useCart();

//   if (!product) return null;

//   const finalPrice = product.salePrice || product.price;

//   const hasSale =
//     product.salePrice &&
//     Number(product.salePrice) < Number(product.price);

//   // =========================================================
//   // ADD PRODUCT TO CART
//   // =========================================================

//   const handleAddToCart = (event) => {
//     // Prevent Link/card click if button is inside another clickable area
//     event.preventDefault();
//     event.stopPropagation();

//     addToCart(product);

//     // Tell Navbar that cart has changed
//     window.dispatchEvent(new Event("cartUpdated"));
//   };

//   return (
//     <article className="product-card">

//       {/* =====================================================
//           PRODUCT IMAGE
//       ===================================================== */}

//       <div className="product-card-image">

//         <Link to={`/product/${product.id}`}>
//           <img
//             src={product.image}
//             alt={product.name}
//           />
//         </Link>

//         {/* Discount */}

//         {product.discount && (
//           <span className="product-discount">
//             {product.discount}
//           </span>
//         )}

//         {/* Badge */}

//         {product.badge && (
//           <span className="product-badge">
//             ★ {product.badge}
//           </span>
//         )}

//         {/* Selling Fast */}

//         {product.sellingFast && (
//           <span className="product-selling-fast">
//             <Zap
//               size={15}
//               fill="currentColor"
//             />

//             Selling Fast
//           </span>
//         )}

//         {/* ===================================================
//             ADD TO CART BUTTON
//         =================================================== */}

//         <button
//           type="button"
//           className="product-add-button"
//           onClick={handleAddToCart}
//         >
//           <span>
//             ADD
//           </span>

//           <ShoppingCart
//             size={19}
//           />
//         </button>

//       </div>

//       {/* =====================================================
//           PRODUCT CONTENT
//       ===================================================== */}

//       <div className="product-card-content">

//         {/* Category */}

//         {product.categoryName && (
//           <p className="product-card-category">
//             {product.categoryName}
//           </p>
//         )}

//         {/* Product Name */}

//         <Link
//           to={`/product/${product.id}`}
//           className="product-card-title-link"
//         >
//           <h3 className="product-card-title">
//             {product.name}
//           </h3>
//         </Link>

//         {/* Rating */}

//         <div className="product-card-rating">

//           <Star
//             size={16}
//             fill="currentColor"
//           />

//           <strong>
//             {product.rating || "4.8"}
//           </strong>

//           <span>
//             ({product.reviews || 0} reviews)
//           </span>

//         </div>

//         {/* Price */}

//         <div className="product-card-price">

//           {hasSale && (
//             <span className="product-card-old-price">
//               ₹
//               {Number(
//                 product.price
//               ).toLocaleString("en-IN")}
//             </span>
//           )}

//           <span className="product-card-current-price">
//             ₹
//             {Number(
//               finalPrice
//             ).toLocaleString("en-IN")}
//           </span>

//         </div>

//         {/* Best Price */}

//         {product.bestPrice && (
//           <div className="product-best-price">

//             <span>
//               🏷
//             </span>

//             <span>
//               Best Price ₹
//               {Number(
//                 product.bestPrice
//               ).toLocaleString("en-IN")}
//             </span>

//           </div>
//         )}

//       </div>

//     </article>
//   );
// };

// export default ProductCard;


import React from "react";
import { Star, ShoppingCart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import useCart from "../../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const finalPrice = product.salePrice || product.price;

  const hasSale =
    product.salePrice &&
    Number(product.salePrice) < Number(product.price);

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();

    addToCart(product);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <article className="product-card">
      {/* PRODUCT IMAGE */}
      <div className="product-card-image">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
          />
        </Link>

        {product.discount && (
          <span className="product-discount">
            {product.discount}
          </span>
        )}

        {product.badge && (
          <span className="product-badge">
            ★ {product.badge}
          </span>
        )}

        {product.sellingFast && (
          <span className="product-selling-fast">
            <Zap
              size={15}
              fill="currentColor"
            />
            Selling Fast
          </span>
        )}

        {/* ADD TO CART */}
        <button
          type="button"
          className="product-add-button"
          onClick={handleAddToCart}
        >
          <span>ADD</span>

          <ShoppingCart size={19} />
        </button>
      </div>

      {/* PRODUCT CONTENT */}
      <div className="product-card-content">
        {product.categoryName && (
          <p className="product-card-category">
            {product.categoryName}
          </p>
        )}

        <Link
          to={`/product/${product.id}`}
          className="product-card-title-link"
        >
          <h3 className="product-card-title">
            {product.name}
          </h3>
        </Link>

        {/* RATING */}
        <div className="product-card-rating">
          <Star
            size={16}
            fill="currentColor"
          />

          <strong>
            {product.rating || "4.8"}
          </strong>

          <span>
            ({product.reviews || 0} reviews)
          </span>
        </div>

        {/* PRICE */}
        <div className="product-card-price">
          {hasSale && (
            <span className="product-card-old-price">
              ₹
              {Number(product.price).toLocaleString("en-IN")}
            </span>
          )}

          <span className="product-card-current-price">
            ₹
            {Number(finalPrice).toLocaleString("en-IN")}
          </span>
        </div>

        {/* BEST PRICE */}
        {product.bestPrice && (
          <div className="product-best-price">
            <span>🏷</span>

            <span>
              Best Price ₹
              {Number(product.bestPrice).toLocaleString("en-IN")}
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;