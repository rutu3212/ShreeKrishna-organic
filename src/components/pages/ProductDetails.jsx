// // import React from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { ShoppingBag, ArrowLeft } from "lucide-react";


// // const ProductDetails = () => {
// //   const { slug } = useParams();

// //   console.log("URL slug:", slug);
// //   console.log("Available products:", products);

// //   const product = products.find(
// //     (item) =>
// //       item.slug.trim().toLowerCase() ===
// //       slug?.trim().toLowerCase()
// //   );

// //   if (!product) {
// //     return (
// //       <main className="sk-product-not-found">
// //         <div>

// //           <h1>
// //             Product Not Found
// //           </h1>

// //           <p>
// //             Product URL:
// //             <strong> {slug}</strong>
// //           </p>

// //           <Link
// //             to="/products"
// //             className="sk-back-link"
// //           >
// //             <ArrowLeft size={18} />
// //             Back to Products
// //           </Link>

// //         </div>
// //       </main>
// //     );
// //   }

// //   return (
// //     <>
// //       <ProductSchema product={product} />

// //       <main className="sk-product-page">

// //         <div className="sk-product-container">

// //           <Link
// //             to="/products"
// //             className="sk-back-link"
// //           >
// //             <ArrowLeft size={18} />
// //             Back to Products
// //           </Link>

// //           <div className="sk-product-details">

// //             {/* IMAGE */}

// //             <div className="sk-product-image-wrapper">

// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className="sk-product-image"
// //               />

// //             </div>

// //             {/* INFORMATION */}

// //             <div className="sk-product-info">

// //               <p className="sk-product-category">
// //                 {product.category}
// //               </p>

// //               <h1 className="sk-product-title">
// //                 {product.name}
// //               </h1>

// //               <p className="sk-product-description">
// //                 {product.description}
// //               </p>

// //               <div className="sk-product-price-area">

// //                 {product.salePrice &&
// //                   product.salePrice < product.price && (
// //                     <span className="sk-old-price">
// //                       ₹
// //                       {product.price.toLocaleString("en-IN")}
// //                     </span>
// //                   )}

// //                 <span className="sk-product-price">
// //                   ₹
// //                   {(
// //                     product.salePrice ||
// //                     product.price
// //                   ).toLocaleString("en-IN")}
// //                 </span>

// //               </div>

// //               <p className="sk-product-sku">
// //                 SKU: {product.sku}
// //               </p>

// //               <div className="sk-product-tags">

// //                 {product.tags?.map((tag) => (
// //                   <span
// //                     key={tag}
// //                     className="sk-product-tag"
// //                   >
// //                     {tag}
// //                   </span>
// //                 ))}

// //               </div>

// //               <button
// //                 type="button"
// //                 className="sk-add-cart"
// //               >
// //                 <ShoppingBag size={20} />
// //                 Add to Cart
// //               </button>

// //             </div>

// //           </div>

// //         </div>

// //       </main>
// //     </>
// //   );
// // };



// // export default ProductDetails;


// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { ShoppingBag, ArrowLeft } from "lucide-react";

// import products from "../data/products";
// import healthSupplementProducts from "../data/healthSupplementProducts";
// import hotDealsProducts from "../data/hotDealsProducts";

// const ProductDetails = () => {
//   const { id, slug } = useParams();

//   // Combine existing oil products + health supplement products
//   const allProducts = [
//     ...products,
//     ...healthSupplementProducts,
//   ];

//   // Support both /product/207 and slug-based URLs
//   const productKey = id || slug;

//   console.log("Product ID/Slug:", productKey);
//   console.log("Available products:", allProducts);

//   const product = allProducts.find(
//     (item) =>
//       String(item.id) === String(productKey) ||
//       item.slug?.trim().toLowerCase() ===
//         productKey?.trim().toLowerCase()
//   );

//   if (!product) {
//     return (
//       <main className="sk-product-not-found">
//         <div>
//           <h1>
//             Product Not Found
//           </h1>

//           <p>
//             Product URL:
//             <strong> {productKey}</strong>
//           </p>

//           <Link
//             to="/products"
//             className="sk-back-link"
//           >
//             <ArrowLeft size={18} />
//             Back to Products
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <>
//       <main className="sk-product-page">

//         <div className="sk-product-container">

//           <Link
//             to="/products"
//             className="sk-back-link"
//           >
//             <ArrowLeft size={18} />
//             Back to Products
//           </Link>

//           <div className="sk-product-details">

//             {/* IMAGE */}

//             <div className="sk-product-image-wrapper">

//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="sk-product-image"
//               />

//             </div>

//             {/* INFORMATION */}

//             <div className="sk-product-info">

//               <p className="sk-product-category">
//                 {product.categoryName || product.category}
//               </p>

//               <h1 className="sk-product-title">
//                 {product.name}
//               </h1>

//               <p className="sk-product-description">
//                 {product.description || ""}
//               </p>

//               <div className="sk-product-price-area">

//                 {product.salePrice &&
//                   product.salePrice < product.price && (
//                     <span className="sk-old-price">
//                       ₹
//                       {product.price.toLocaleString("en-IN")}
//                     </span>
//                   )}

//                 <span className="sk-product-price">
//                   ₹
//                   {(
//                     product.salePrice ||
//                     product.price
//                   ).toLocaleString("en-IN")}
//                 </span>

//               </div>

//               {product.sku && (
//                 <p className="sk-product-sku">
//                   SKU: {product.sku}
//                 </p>
//               )}

//               <div className="sk-product-tags">

//                 {product.tags?.map((tag) => (
//                   <span
//                     key={tag}
//                     className="sk-product-tag"
//                   >
//                     {tag}
//                   </span>
//                 ))}

//               </div>

//               <button
//                 type="button"
//                 className="sk-add-cart"
//               >
//                 <ShoppingBag size={20} />
//                 Add to Cart
//               </button>

//             </div>

//           </div>

//         </div>

//       </main>
//     </>
//   );
// };

// export default ProductDetails;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";

import products from "../data/products";
import gheeProducts from "../data/gheeProducts";
import healthSupplementProducts from "../data/healthSupplementProducts";
import jaggeryProducts from "../data/jaggeryProducts";
import healthComboProducts from "../data/healthComboProducts";
import hotDealsProducts from "../data/hotDealsProducts";

import useCart from "../../hooks/useCart";

const ProductDetails = () => {
  const { id, slug } = useParams();

  const { addToCart } = useCart();

  // Combine all products
  const allProducts = [
    ...products,
    ...gheeProducts,
    ...healthSupplementProducts,
    ...jaggeryProducts,
    ...healthComboProducts,
    ...hotDealsProducts,
  ];

  // Get product ID or slug from URL
  const productKey = id || slug;

  // Find product
  const product = allProducts.find((item) => {
    const itemIdMatches =
      String(item.id) === String(productKey);

    const itemSlugMatches =
      item.slug &&
      String(item.slug).trim().toLowerCase() ===
        String(productKey).trim().toLowerCase();

    return itemIdMatches || itemSlugMatches;
  });

  // Add product to cart
  const handleAddToCart = (event) => {
    event.preventDefault();

    if (!product) {
      return;
    }

    addToCart(product);

    // Update navbar cart count
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // Product not found
  if (!product) {
    return (
      <main className="sk-product-not-found">
        <div>
          <h1>Product Not Found</h1>

          <p>
            Product URL:
            <strong> {productKey}</strong>
          </p>

          <Link
            to="/products"
            className="sk-back-link"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const finalPrice =
    product.salePrice || product.price;

  const hasSale =
    product.salePrice &&
    Number(product.salePrice) <
      Number(product.price);

  return (
    <main className="sk-product-page">
      <div className="sk-product-container">

        {/* BACK TO PRODUCTS */}

        <Link
          to="/products"
          className="sk-back-link"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="sk-product-details">

          {/* PRODUCT IMAGE */}

          <div className="sk-product-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="sk-product-image"
            />
          </div>

          {/* PRODUCT INFORMATION */}

          <div className="sk-product-info">

            {/* CATEGORY */}

            <p className="sk-product-category">
              {product.categoryName ||
                product.category ||
                ""}
            </p>

            {/* NAME */}

            <h1 className="sk-product-title">
              {product.name}
            </h1>

            {/* DESCRIPTION */}

            <p className="sk-product-description">
              {product.description || ""}
            </p>

            {/* PRICE */}

            <div className="sk-product-price-area">

              {hasSale && (
                <span className="sk-old-price">
                  ₹
                  {Number(
                    product.price
                  ).toLocaleString("en-IN")}
                </span>
              )}

              <span className="sk-product-price">
                ₹
                {Number(
                  finalPrice
                ).toLocaleString("en-IN")}
              </span>

            </div>

            {/* SKU */}

            {product.sku && (
              <p className="sk-product-sku">
                SKU: {product.sku}
              </p>
            )}

            {/* TAGS */}

            {product.tags &&
              product.tags.length > 0 && (
                <div className="sk-product-tags">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="sk-product-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            {/* ADD TO CART */}

            <button
              type="button"
              className="sk-add-cart"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={20} />

              <span>
                Add to Cart
              </span>
            </button>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;