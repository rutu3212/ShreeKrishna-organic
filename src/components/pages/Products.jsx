// import React, { useEffect, useState } from "react";
// import {
//   Link,
//   useSearchParams,
// } from "react-router-dom";
// import {
//   Star,
//   ArrowLeft,
//   ShoppingCart,
// } from "lucide-react";

// import products from "../data/products";
// import gheeProducts from "../data/gheeProducts";
// import healthSupplementProducts from "../data/healthSupplementProducts";
// import jaggeryProducts from "../data/jaggeryProducts";
// import healthComboProducts from "../data/healthComboProducts";
// import hotDealsProducts from "../data/hotDealsProducts";

// import useCart from "../../hooks/useCart";

// const ADMIN_PRODUCTS_KEY =
//   "shreekrishna_admin_products";

// const Products = () => {
//   const [searchParams] =
//     useSearchParams();

//   const { addToCart } = useCart();

//   // ================================
//   // ADMIN PRODUCTS
//   // ================================

//   const [adminProducts, setAdminProducts] =
//     useState([]);

//   useEffect(() => {
//     const loadAdminProducts = () => {
//       try {
//         const saved = JSON.parse(
//           localStorage.getItem(
//             ADMIN_PRODUCTS_KEY
//           ) || "[]"
//         );

//         setAdminProducts(
//           Array.isArray(saved)
//             ? saved
//             : []
//         );
//       } catch (error) {
//         console.error(
//           "Error loading admin products:",
//           error
//         );

//         setAdminProducts([]);
//       }
//     };

//     // Load products when page opens
//     loadAdminProducts();

//     // Update when admin adds/edits/deletes
//     window.addEventListener(
//       "adminProductsUpdated",
//       loadAdminProducts
//     );

//     // Update when localStorage changes
//     window.addEventListener(
//       "storage",
//       loadAdminProducts
//     );

//     return () => {
//       window.removeEventListener(
//         "adminProductsUpdated",
//         loadAdminProducts
//       );

//       window.removeEventListener(
//         "storage",
//         loadAdminProducts
//       );
//     };
//   }, []);

//   const category =
//     searchParams.get("category");

//   const searchQuery =
//     searchParams.get("search") || "";

//   const categoryNames = {
//     "groundnut-oil":
//       "Groundnut Oil",

//     "mustard-oil":
//       "Mustard Oil",

//     "sunflower-oil":
//       "Sunflower Oil",

//     "olive-oil":
//       "Olive Oil",

//     "coconut-oil":
//       "Coconut Oil",

//     "sesame-oil":
//       "Sesame Oil",
//   };

//   const selectedCategoryName =
//     categoryNames[category] ||
//     "All Products";

//   // ================================
//   // COMBINE ALL PRODUCT DATA
//   // ================================

//   const allProducts = [
//     ...products,
//     ...gheeProducts,
//     ...healthSupplementProducts,
//     ...jaggeryProducts,
//     ...healthComboProducts,
//     ...hotDealsProducts,

//     // ADMIN PRODUCTS
//     ...adminProducts,
//   ];

//   // ================================
//   // NORMALIZE SEARCH TEXT
//   // ================================

//   const normalizeSearch = (
//     value
//   ) =>
//     String(value || "")
//       .toLowerCase()
//       .replace(/[^a-z0-9]/g, "");

//   const normalizedQuery =
//     normalizeSearch(searchQuery);

//   // ================================
//   // FILTER BY CATEGORY
//   // ================================

//   const categoryFilteredProducts =
//     category
//       ? allProducts.filter(
//           (product) =>
//             product.category ===
//             category
//         )
//       : allProducts;

//   // ================================
//   // FILTER BY SEARCH
//   // ================================

//   const filteredProducts =
//     normalizedQuery
//       ? categoryFilteredProducts.filter(
//           (product) => {
//             const searchableText = [
//               product.name,
//               product.category,
//               product.categoryName,
//               product.badge,
//               product.description,
//             ]
//               .filter(Boolean)
//               .map(normalizeSearch)
//               .join("");

//             return searchableText.includes(
//               normalizedQuery
//             );
//           }
//         )
//       : categoryFilteredProducts;

//   // ================================
//   // ADD TO CART
//   // ================================

//   const handleAddToCart = (
//     event,
//     product
//   ) => {
//     // Prevent opening Product Details
//     event.preventDefault();
//     event.stopPropagation();

//     // Add product
//     addToCart(product);

//     // Update Navbar cart count
//     window.dispatchEvent(
//       new Event("cartUpdated")
//     );
//   };

//   return (
//     <main className="products-page">

//       <div className="products-page-container">

//         {/* ================= HEADER ================= */}

//         <div className="products-page-header">

//           <Link
//             to="/"
//             className="products-back-link"
//           >
//             <ArrowLeft size={18} />
//             Back to Home
//           </Link>

//           <p className="products-small-title">
//             ShreeKrishna Organics
//           </p>

//           <h1>
//             {searchQuery
//               ? `Search Results for "${searchQuery}"`
//               : selectedCategoryName}
//           </h1>

//           <div className="products-divider"></div>

//           <p>
//             Pure, natural and traditionally
//             cold-pressed oils.
//           </p>

//         </div>

//         {/* ================= PRODUCTS ================= */}

//         {filteredProducts.length > 0 ? (

//           <div className="products-grid">

//             {filteredProducts.map(
//               (product) => {

//                 const finalPrice =
//                   product.salePrice ||
//                   product.price;

//                 return (

//                   <Link
//                     key={product.id}
//                     to={`/product/${product.id}`}
//                     className="shop-product-card"
//                   >

//                     {/* ================= IMAGE ================= */}

//                     <div className="shop-product-image">

//                       {product.discount && (
//                         <span className="shop-discount">
//                           {product.discount}
//                         </span>
//                       )}

//                       <img
//                         src={product.image}
//                         alt={product.name}
//                       />

//                     </div>

//                     {/* ================= CONTENT ================= */}

//                     <div className="shop-product-content">

//                       <span className="shop-category">

//                         {product.categoryName ||
//                           product.category ||
//                           "ShreeKrishna Organics"}

//                       </span>

//                       <h2>
//                         {product.name}
//                       </h2>

//                       {/* ================= RATING ================= */}

//                       <div className="shop-rating">

//                         <Star
//                           size={15}
//                           fill="currentColor"
//                         />

//                         <span>
//                           {product.rating ||
//                             "4.8"}
//                         </span>

//                         <span>
//                           (
//                           {product.reviews ||
//                             0}{" "}
//                           reviews)
//                         </span>

//                       </div>

//                       {/* ================= PRICE ================= */}

//                       <div className="shop-price">

//                         {product.price >
//                           finalPrice && (

//                           <span className="shop-old-price">
//                             ₹
//                             {Number(
//                               product.price
//                             ).toLocaleString(
//                               "en-IN"
//                             )}
//                           </span>

//                         )}

//                         <strong>
//                           ₹
//                           {Number(
//                             finalPrice || 0
//                           ).toLocaleString(
//                             "en-IN"
//                           )}
//                         </strong>

//                       </div>

//                       {/* ================= ACTIONS ================= */}

//                       <div className="shop-product-actions">

//                         <span className="shop-view-product">
//                           View Product →
//                         </span>

//                         <button
//                           type="button"
//                           className="shop-add-cart"
//                           onClick={(event) =>
//                             handleAddToCart(
//                               event,
//                               product
//                             )
//                           }
//                         >

//                           <ShoppingCart
//                             size={18}
//                             strokeWidth={2}
//                           />

//                           <span>
//                             Add to Cart
//                           </span>

//                         </button>

//                       </div>

//                     </div>

//                   </Link>
//                 );
//               }
//             )}

//           </div>

//         ) : (

//           /* ================= NO PRODUCTS ================= */

//           <div className="no-products">

//             <h2>
//               No products found
//             </h2>

//             <Link to="/shop">
//               View All Products
//             </Link>

//           </div>

//         )}

//       </div>

//     </main>
//   );
// };

// export default Products;


import React, { useEffect, useState } from "react";
import {
  Link,
  useSearchParams,
} from "react-router-dom";
import {
  Star,
  ArrowLeft,
  ShoppingCart,
} from "lucide-react";

/* =========================================================
   PRODUCT DATA
========================================================= */

import products from "../data/products";
import gheeProducts from "../data/gheeProducts";
import healthSupplementProducts from "../data/healthSupplementProducts";
import jaggeryProducts from "../data/jaggeryProducts";
import healthComboProducts from "../data/healthComboProducts";
import hotDealsProducts from "../data/hotDealsProducts";

import useCart from "../../hooks/useCart";


/* =========================================================
   ADMIN PRODUCT STORAGE
========================================================= */

const ADMIN_PRODUCTS_KEY =
  "shreekrishna_admin_products";


/* =========================================================
   PRODUCTS PAGE
========================================================= */

const Products = () => {

  /* =======================================================
     SEARCH PARAMS
  ======================================================= */

  const [searchParams] =
    useSearchParams();


  /* =======================================================
     CART
  ======================================================= */

  const { addToCart } = useCart();


  /* =======================================================
     ADMIN PRODUCTS
  ======================================================= */

  const [adminProducts, setAdminProducts] =
    useState([]);


  /* =======================================================
     LOAD ADMIN PRODUCTS
  ======================================================= */

  useEffect(() => {

    const loadAdminProducts = () => {

      try {

        const saved =
          localStorage.getItem(
            ADMIN_PRODUCTS_KEY
          );

        const parsedProducts =
          saved ? JSON.parse(saved) : [];

        setAdminProducts(
          Array.isArray(parsedProducts)
            ? parsedProducts
            : []
        );

      } catch (error) {

        console.error(
          "Error loading admin products:",
          error
        );

        setAdminProducts([]);

      }

    };


    /* Load when page opens */
    loadAdminProducts();


    /* Update when Admin Products changes */
    window.addEventListener(
      "adminProductsUpdated",
      loadAdminProducts
    );


    /* Update when localStorage changes */
    window.addEventListener(
      "storage",
      loadAdminProducts
    );


    return () => {

      window.removeEventListener(
        "adminProductsUpdated",
        loadAdminProducts
      );

      window.removeEventListener(
        "storage",
        loadAdminProducts
      );

    };

  }, []);


  /* =======================================================
     URL PARAMETERS
  ======================================================= */

  const category =
    searchParams.get("category");

  const searchQuery =
    searchParams.get("search") || "";


  /* =======================================================
     CATEGORY NAMES
  ======================================================= */

  const categoryNames = {

    "groundnut-oil":
      "Groundnut Oil",

    "mustard-oil":
      "Mustard Oil",

    "sunflower-oil":
      "Sunflower Oil",

    "olive-oil":
      "Olive Oil",

    "coconut-oil":
      "Coconut Oil",

    "sesame-oil":
      "Sesame Oil",

    "a2-ghee":
      "A2 Ghee",

    "gir-ghee":
      "Gir Ghee",

    "desi-cow-ghee":
      "Desi Cow Ghee",

    "buffalo-ghee":
      "Buffalo Ghee",

    "ghee-combo":
      "Ghee Combo",

    "health-supplement":
      "Health Supplement",

    "jaggery":
      "Jaggery",

    "health-combo":
      "Health Combo",

    "hot-deals":
      "Hot Deals",

  };


  const selectedCategoryName =
    categoryNames[category] ||
    "All Products";


  /* =======================================================
     COMBINE ALL PRODUCTS
  ======================================================= */

  const allProducts = [

    ...products,

    ...gheeProducts,

    ...healthSupplementProducts,

    ...jaggeryProducts,

    ...healthComboProducts,

    ...hotDealsProducts,

    /* ADMIN PRODUCTS */
    ...adminProducts,

  ];


  /* =======================================================
     NORMALIZE SEARCH / CATEGORY
  ======================================================= */

  const normalizeSearch = (value) => {

    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

  };


  /* =======================================================
     NORMALIZED SEARCH QUERY
  ======================================================= */

  const normalizedQuery =
    normalizeSearch(searchQuery);


  /* =======================================================
     NORMALIZED CATEGORY
     
     Example:
     
     "A2 Ghee"
          ↓
     "a2ghee"
     
     "a2-ghee"
          ↓
     "a2ghee"
     
     Both will match.
  ======================================================= */

  const normalizedCategory =
    normalizeSearch(category);


  /* =======================================================
     FILTER BY CATEGORY
  ======================================================= */

  const categoryFilteredProducts =
    category

      ? allProducts.filter((product) => {

          const productCategory =
            normalizeSearch(
              product.category
            );

          const productCategoryName =
            normalizeSearch(
              product.categoryName
            );

          return (
            productCategory ===
              normalizedCategory ||

            productCategoryName ===
              normalizedCategory
          );

        })

      : allProducts;


  /* =======================================================
     FILTER BY SEARCH
  ======================================================= */

  const filteredProducts =
    normalizedQuery

      ? categoryFilteredProducts.filter(
          (product) => {

            const searchableText = [

              product.name,

              product.category,

              product.categoryName,

              product.badge,

              product.description,

            ]
              .filter(Boolean)

              .map(normalizeSearch)

              .join("");


            return searchableText.includes(
              normalizedQuery
            );

          }
        )

      : categoryFilteredProducts;


  /* =======================================================
     ADD TO CART
  ======================================================= */

  const handleAddToCart = (
    event,
    product
  ) => {

    /*
      Prevent Product Details page
      from opening.
    */

    event.preventDefault();

    event.stopPropagation();


    /* Add product to cart */

    addToCart(product);


    /*
      Update Navbar cart count.
    */

    window.dispatchEvent(
      new Event("cartUpdated")
    );

  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <main className="products-page">

      <div className="products-page-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="products-page-header">


          {/* BACK TO HOME */}

          <Link
            to="/"
            className="products-back-link"
          >

            <ArrowLeft size={18} />

            Back to Home

          </Link>


          {/* BRAND */}

          <p className="products-small-title">

            ShreeKrishna Organics

          </p>


          {/* PAGE TITLE */}

          <h1>

            {searchQuery

              ? `Search Results for "${searchQuery}"`

              : selectedCategoryName

            }

          </h1>


          {/* DIVIDER */}

          <div className="products-divider"></div>


          {/* DESCRIPTION */}

          <p>

            Pure, natural and traditionally
            cold-pressed oils.

          </p>


        </div>



        {/* =================================================
            PRODUCTS
        ================================================= */}

        {filteredProducts.length > 0 ? (

          <div className="products-grid">


            {filteredProducts.map(
              (product) => {

                /* =========================================
                   PRICE
                ========================================= */

                const price =
                  Number(
                    product.price || 0
                  );


                const salePrice =
                  product.salePrice
                    ? Number(
                        product.salePrice
                      )
                    : 0;


                const finalPrice =
                  salePrice > 0
                    ? salePrice
                    : price;


                return (

                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="shop-product-card"
                  >


                    {/* =====================================
                        IMAGE
                    ===================================== */}

                    <div className="shop-product-image">


                      {/* DISCOUNT */}

                      {product.discount && (

                        <span className="shop-discount">

                          {product.discount}

                        </span>

                      )}


                      {/* PRODUCT IMAGE */}

                      {product.image ? (

                        <img
                          src={product.image}
                          alt={
                            product.name ||
                            "Product"
                          }
                        />

                      ) : (

                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#075f4e",
                            fontWeight: "700",
                            fontSize: "18px",
                          }}
                        >

                          ShreeKrishna Organics

                        </div>

                      )}

                    </div>



                    {/* =====================================
                        CONTENT
                    ===================================== */}

                    <div className="shop-product-content">


                      {/* CATEGORY */}

                      <span className="shop-category">

                        {product.categoryName ||

                          product.category ||

                          "ShreeKrishna Organics"

                        }

                      </span>


                      {/* PRODUCT NAME */}

                      <h2>

                        {product.name}

                      </h2>


                      {/* ===================================
                          RATING
                      =================================== */}

                      <div className="shop-rating">


                        <Star
                          size={15}
                          fill="currentColor"
                        />


                        <span>

                          {product.rating ||
                            "4.8"}

                        </span>


                        <span>

                          (
                          {product.reviews ||
                            0}

                          {" "}
                          reviews)

                        </span>


                      </div>



                      {/* ===================================
                          PRICE
                      =================================== */}

                      <div className="shop-price">


                        {/* OLD PRICE */}

                        {salePrice > 0 &&
                          price > salePrice && (

                            <span className="shop-old-price">

                              ₹
                              {price.toLocaleString(
                                "en-IN"
                              )}

                            </span>

                          )}


                        {/* CURRENT PRICE */}

                        <strong>

                          ₹
                          {finalPrice.toLocaleString(
                            "en-IN"
                          )}

                        </strong>


                      </div>



                      {/* ===================================
                          ACTIONS
                      =================================== */}

                      <div className="shop-product-actions">


                        {/* VIEW PRODUCT */}

                        <span className="shop-view-product">

                          View Product →

                        </span>


                        {/* ADD TO CART */}

                        <button
                          type="button"
                          className="shop-add-cart"
                          onClick={(event) =>
                            handleAddToCart(
                              event,
                              product
                            )
                          }
                        >

                          <ShoppingCart
                            size={18}
                            strokeWidth={2}
                          />


                          <span>

                            Add to Cart

                          </span>


                        </button>


                      </div>


                    </div>


                  </Link>

                );

              }
            )}


          </div>

        ) : (


          /* ===============================================
             NO PRODUCTS
          =============================================== */

          <div className="no-products">


            <h2>

              No products found

            </h2>


            <Link to="/shop">

              View All Products

            </Link>


          </div>

        )}


      </div>

    </main>

  );

};


export default Products;