
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Search,
//   UserRound,
//   ShoppingCart,
//   Menu,
//   X,
//   ChevronDown,
//   Leaf,
//   Gift,
//   Users,
// } from "lucide-react";

// import useCart from "../../hooks/useCart";

// const Navbar = () => {
//   const [shopOpen, setShopOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigate = useNavigate();

//   const shopItems = [
//     {
//       name: "Family Value Deal",
//       description: "Save more with family packs",
//       href: "/shop/family-value-deal",
//       icon: Users,
//     },
//     {
//       name: "Superfoods",
//       description: "Natural goodness for everyday health",
//       href: "/shop/superfoods",
//       icon: Leaf,
//     },
//     {
//       name: "Healthy Gifting",
//       description: "Thoughtful gifts for your loved ones",
//       href: "/shop/healthy-gifting",
//       icon: Gift,
//     },
//   ];

//   const closeMobileMenu = () => {
//     setMobileOpen(false);
//     setShopOpen(false);
//   };

//   const handleShopClick = () => {
//     setShopOpen((previous) => !previous);
//   };

//   const handleSearchToggle = () => {
//     setSearchOpen((previous) => !previous);
//   };

//   const handleSearchSubmit = () => {
//     const query = searchQuery.trim();

//     if (!query) {
//       return;
//     }

//     navigate(`/shop?search=${encodeURIComponent(query)}`);
//     setSearchOpen(false);
//   };

//   return (
//     <header className="navbar-wrapper">

//       {/* =====================================================
//           MAIN NAVBAR
//       ===================================================== */}

//       <nav className="navbar">

//         {/* ===================================================
//             LOGO
//         =================================================== */}

//         <Link
//           to="/"
//           className="navbar-logo"
//           onClick={() => {
//             setShopOpen(false);
//             setMobileOpen(false);
//           }}
//         >
//           <div className="navbar-logo-mark">
//             <svg
//               viewBox="0 0 100 100"
//               xmlns="http://www.w3.org/2000/svg"
//               aria-label="ShreeKrishna Organics logo"
//               role="img"
//             >
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="47"
//                 fill="#596443"
//               />

//               <circle
//                 cx="50"
//                 cy="50"
//                 r="42"
//                 fill="none"
//                 stroke="#d8c77f"
//                 strokeWidth="2"
//               />

//               <circle
//                 cx="50"
//                 cy="50"
//                 r="34"
//                 fill="none"
//                 stroke="#d8c77f"
//                 strokeWidth="1"
//                 opacity="0.6"
//               />

//               <path
//                 d="
//                   M28 38
//                   C33 29, 42 26, 49 27
//                   C45 35, 38 41, 28 38Z
//                 "
//                 fill="#d8c77f"
//               />

//               <path
//                 d="
//                   M72 38
//                   C67 29, 58 26, 51 27
//                   C55 35, 62 41, 72 38Z
//                 "
//                 fill="#d8c77f"
//               />

//               <text
//                 x="50"
//                 y="60"
//                 textAnchor="middle"
//                 fontSize="24"
//                 fontWeight="700"
//                 fill="#f7e7a8"
//                 fontFamily="Arial, sans-serif"
//               >
//                 श्री
//               </text>

//               <path
//                 d="M34 69 Q50 75 66 69"
//                 fill="none"
//                 stroke="#d8c77f"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>

//           <div className="navbar-logo-text">
//             <span className="navbar-logo-main">
//               SHREEKRISHNA
//             </span>

//             <span className="navbar-logo-sub">
//               ORGANICS
//             </span>
//           </div>
//         </Link>

//         {/* ===================================================
//             DESKTOP NAVIGATION
//         =================================================== */}

//         <div className="navbar-links">

//           {/* All Products */}
//           <Link
//             to="/"
//             className="navbar-link"
//           >
//             All Products
//           </Link>

//           {/* Wood Press Oil */}
//           <Link
//             to="/wood-pressed-oil"
//             className="navbar-link"
//           >
//             Wood Press Oil
//           </Link>

//           {/* Health Supplement */}
//           <Link
//             to="/health-supplement"
//             className="navbar-link"
//           >
//             Health Supplement
//           </Link>

//           {/* A2 Ghee */}
//           <Link
//             to="/a2-ghee"
//             className="navbar-link"
//           >
//             A2 Ghee
//           </Link>

//           {/* Jaggery */}
//           <Link
//             to="/jaggery"
//             className="navbar-link"
//           >
//             Jaggery
//           </Link>

//           {/* Health Combo */}
//           <Link
//             to="/health-combo"
//             className="navbar-link"
//           >
//             Health Combo
//           </Link>

//           {/* =================================================
//               SHOP DROPDOWN
//           ================================================= */}

//           <div className="shop-dropdown-wrapper">

//             <button
//               type="button"
//               className={`navbar-link shop-button ${
//                 shopOpen ? "shop-button-active" : ""
//               }`}
//               onClick={handleShopClick}
//               aria-expanded={shopOpen}
//               aria-haspopup="true"
//             >
//               <span>Shop</span>

//               <ChevronDown
//                 size={15}
//                 strokeWidth={2}
//                 className={`shop-chevron ${
//                   shopOpen ? "shop-chevron-open" : ""
//                 }`}
//               />
//             </button>

//             {shopOpen && (
//               <div className="shop-dropdown-menu">

//                 <div className="shop-dropdown-content">

//                   <div className="shop-dropdown-header">
//                     <h3>Shop</h3>

//                     <p>
//                       Explore our natural collection
//                     </p>
//                   </div>

//                   {shopItems.map((item) => {
//                     const Icon = item.icon;

//                     return (
//                       <Link
//                         key={item.name}
//                         to={item.href}
//                         className="shop-dropdown-item"
//                         onClick={() => setShopOpen(false)}
//                       >
//                         <div className="shop-dropdown-icon">
//                           <Icon
//                             size={19}
//                             strokeWidth={1.8}
//                           />
//                         </div>

//                         <div className="shop-dropdown-text">
//                           <span className="shop-dropdown-name">
//                             {item.name}
//                           </span>

//                           <span className="shop-dropdown-description">
//                             {item.description}
//                           </span>
//                         </div>
//                       </Link>
//                     );
//                   })}

//                   <Link
//                     to="/shop"
//                     className="shop-dropdown-view-all"
//                     onClick={() => setShopOpen(false)}
//                   >
//                     <span>
//                       View All Products
//                     </span>

//                     <span className="view-all-arrow">
//                       →
//                     </span>
//                   </Link>

//                 </div>
//               </div>
//             )}

//           </div>

//           {/* =================================================
//               HOT DEALS
//           ================================================= */}

//           <Link
//             to="/hot-deals"
//             className="navbar-link hot-deals-link"
//           >
//             <span>
//               Hot Deals
//             </span>

//             <span className="hot-deals-badge">
//               HOT
//             </span>
//           </Link>

//         </div>

//         {/* ===================================================
//             NAVBAR ACTIONS
//         =================================================== */}

//         <div className="navbar-actions">

//           {/* Search */}

//           <button
//             type="button"
//             className="navbar-action"
//             aria-label="Search"
//             onClick={handleSearchToggle}
//           >
//             <Search
//               size={22}
//               strokeWidth={1.8}
//             />
//           </button>

//           {/* My Account */}

//           <Link
//             to="/account"
//             className="navbar-action"
//             aria-label="My Account"
//           >
//             <UserRound
//               size={22}
//               strokeWidth={1.8}
//             />
//           </Link>

//           {/* Cart */}

//           <Link
//             to="/cart"
//             className="navbar-action cart-action"
//             aria-label="Shopping Cart"
//           >
//             <ShoppingCart
//               size={23}
//               strokeWidth={1.8}
//             />

//             <span className="cart-count">
//               0
//             </span>
//           </Link>

//           {/* Mobile menu */}

//           <button
//             type="button"
//             className="mobile-menu-button"
//             aria-label="Mobile Menu"
//             onClick={() => {
//               setMobileOpen((previous) => !previous);
//               setShopOpen(false);
//             }}
//           >
//             {mobileOpen ? (
//               <X
//                 size={24}
//                 strokeWidth={1.8}
//               />
//             ) : (
//               <Menu
//                 size={24}
//                 strokeWidth={1.8}
//               />
//             )}
//           </button>

//         </div>

//       </nav>

//       {/* =====================================================
//           SEARCH BAR
//       ===================================================== */}

//       <div
//         className={`navbar-search ${
//           searchOpen ? "navbar-search-open" : ""
//         }`}
//       >
//         <div className="navbar-search-inner">

//           <Search
//             size={20}
//             strokeWidth={1.8}
//             className="navbar-search-icon"
//           />

//           <input
//             type="text"
//             placeholder="Search for oils, ghee, jaggery..."
//             aria-label="Search products"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 e.preventDefault();
//                 handleSearchSubmit();
//               }
//             }}
//           />

//           <button
//             type="button"
//             className="navbar-search-close"
//             onClick={() => {
//               setSearchOpen(false);
//               setSearchQuery("");
//             }}
//             aria-label="Close Search"
//           >
//             <X
//               size={19}
//               strokeWidth={1.8}
//             />
//           </button>

//         </div>
//       </div>

//       {/* =====================================================
//           MOBILE NAVIGATION
//       ===================================================== */}

//       <div
//         className={`mobile-navbar ${
//           mobileOpen ? "mobile-navbar-open" : ""
//         }`}
//       >
//         <div className="mobile-navbar-inner">

//           {/* All Products */}

//           <Link
//             to="/"
//             className="mobile-nav-link"
//             onClick={closeMobileMenu}
//           >
//             All Products
//           </Link>

//           {/* Wood Press Oil */}

//           <Link
//             to="/wood-pressed-oil"
//             className="mobile-nav-link"
//             onClick={closeMobileMenu}
//           >
//             Wood Press Oil
//           </Link>

//           {/* Health Supplement */}

//           <Link
//             to="/health-supplement"
//             className="mobile-nav-link"
//             onClick={closeMobileMenu}
//           >
//             Health Supplement
//           </Link>

//           {/* A2 Ghee */}

//           <Link
//             to="/a2-ghee"
//             className="mobile-nav-link"
//             onClick={closeMobileMenu}
//           >
//             A2 Ghee
//           </Link>

//           {/* Jaggery */}

//           <Link
//             to="/jaggery"
//             className="mobile-nav-link"
//             onClick={closeMobileMenu}
//           >
//             Jaggery
//           </Link>

//           {/* Health Combo */}

//           <Link
//             to="/health-combo"
//             className="mobile-nav-link"
//             onClick={closeMobileMenu}
//           >
//             Health Combo
//           </Link>

//           {/* =================================================
//               MOBILE SHOP
//           ================================================= */}

//           <div className="mobile-shop-wrapper">

//             <button
//               type="button"
//               className={`mobile-shop-button ${
//                 shopOpen
//                   ? "mobile-shop-button-active"
//                   : ""
//               }`}
//               onClick={() =>
//                 setShopOpen((previous) => !previous)
//               }
//             >
//               <span>
//                 Shop
//               </span>

//               <ChevronDown
//                 size={17}
//                 className={`mobile-shop-chevron ${
//                   shopOpen
//                     ? "mobile-shop-chevron-open"
//                     : ""
//                 }`}
//               />
//             </button>

//             <div
//               className={`mobile-shop-dropdown ${
//                 shopOpen
//                   ? "mobile-shop-dropdown-open"
//                   : ""
//               }`}
//             >

//               {shopItems.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className="mobile-shop-item"
//                     onClick={closeMobileMenu}
//                   >
//                     <span className="mobile-shop-icon">
//                       <Icon
//                         size={17}
//                         strokeWidth={1.8}
//                       />
//                     </span>

//                     <span>
//                       {item.name}
//                     </span>
//                   </Link>
//                 );
//               })}

//             </div>

//           </div>

//           {/* Hot Deals */}

//           <Link
//             to="/hot-deals"
//             className="mobile-nav-link mobile-hot-link"
//             onClick={closeMobileMenu}
//           >
//             <span>
//               Hot Deals
//             </span>

//             <span className="mobile-hot-badge">
//               HOT
//             </span>
//           </Link>

//           {/* Mobile Account / Cart */}

//           <div className="mobile-extra-links">

//             <Link
//               to="/account"
//               onClick={closeMobileMenu}
//             >
//               <UserRound
//                 size={18}
//               />

//               <span>
//                 My Account
//               </span>
//             </Link>

//             <Link
//               to="/cart"
//               onClick={closeMobileMenu}
//             >
//               <ShoppingCart
//                 size={18}
//               />

//               <span>
//                 My Cart
//               </span>
//             </Link>

//           </div>

//         </div>
//       </div>

//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  UserRound,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Leaf,
  Gift,
  Users,
} from "lucide-react";

import useCart from "../../hooks/useCart";

const Navbar = () => {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Navbar cart count
  const [navbarCartCount, setNavbarCartCount] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shreekrishna_cart");

      const cart = savedCart ? JSON.parse(savedCart) : [];

      return cart.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );
    } catch (error) {
      console.error("Error loading navbar cart:", error);
      return 0;
    }
  });

  const navigate = useNavigate();

  // Keep useCart available for the existing cart system
  useCart();

  // =========================================================
  // UPDATE NAVBAR CART COUNT
  // =========================================================

  useEffect(() => {
    const updateNavbarCart = () => {
      try {
        const savedCart = localStorage.getItem(
          "shreekrishna_cart"
        );

        const cart = savedCart ? JSON.parse(savedCart) : [];

        const count = cart.reduce(
          (total, item) => total + (item.quantity || 1),
          0
        );

        setNavbarCartCount(count);
      } catch (error) {
        console.error(
          "Error updating navbar cart:",
          error
        );

        setNavbarCartCount(0);
      }
    };

    window.addEventListener(
      "cartUpdated",
      updateNavbarCart
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateNavbarCart
      );
    };
  }, []);

  // =========================================================
  // SHOP ITEMS
  // =========================================================

  const shopItems = [
    {
      name: "Family Value Deal",
      description: "Save more with family packs",
      href: "/shop/family-value-deal",
      icon: Users,
    },
    {
      name: "Superfoods",
      description: "Natural goodness for everyday health",
      href: "/shop/superfoods",
      icon: Leaf,
    },
    {
      name: "Healthy Gifting",
      description: "Thoughtful gifts for your loved ones",
      href: "/shop/healthy-gifting",
      icon: Gift,
    },
  ];

  // =========================================================
  // CLOSE MOBILE MENU
  // =========================================================

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setShopOpen(false);
  };

  // =========================================================
  // SHOP DROPDOWN
  // =========================================================

  const handleShopClick = () => {
    setShopOpen((previous) => !previous);
  };

  // =========================================================
  // SEARCH
  // =========================================================

  const handleSearchToggle = () => {
    setSearchOpen((previous) => !previous);
  };

  const handleSearchSubmit = () => {
    const query = searchQuery.trim();

    if (!query) {
      return;
    }

    navigate(`/shop?search=${encodeURIComponent(query)}`);

    setSearchOpen(false);
  };

  return (
    <header className="navbar-wrapper">

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <nav className="navbar">

        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            setShopOpen(false);
            setMobileOpen(false);
          }}
        >
          <div className="navbar-logo-mark">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="ShreeKrishna Organics logo"
              role="img"
            >
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="#596443"
              />

              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#d8c77f"
                strokeWidth="2"
              />

              <circle
                cx="50"
                cy="50"
                r="34"
                fill="none"
                stroke="#d8c77f"
                strokeWidth="1"
                opacity="0.6"
              />

              <path
                d="
                  M28 38
                  C33 29, 42 26, 49 27
                  C45 35, 38 41, 28 38Z
                "
                fill="#d8c77f"
              />

              <path
                d="
                  M72 38
                  C67 29, 58 26, 51 27
                  C55 35, 62 41, 72 38Z
                "
                fill="#d8c77f"
              />

              <text
                x="50"
                y="60"
                textAnchor="middle"
                fontSize="24"
                fontWeight="700"
                fill="#f7e7a8"
                fontFamily="Arial, sans-serif"
              >
                श्री
              </text>

              <path
                d="M34 69 Q50 75 66 69"
                fill="none"
                stroke="#d8c77f"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="navbar-logo-text">
            <span className="navbar-logo-main">
              SHREEKRISHNA
            </span>

            <span className="navbar-logo-sub">
              ORGANICS
            </span>
          </div>
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <div className="navbar-links">

          {/* All Products */}

          <Link
            to="/"
            className="navbar-link"
          >
            All Products
          </Link>

          {/* Wood Press Oil */}

          <Link
            to="/wood-pressed-oil"
            className="navbar-link"
          >
            Wood Press Oil
          </Link>

          {/* Health Supplement */}

          <Link
            to="/health-supplement"
            className="navbar-link"
          >
            Health Supplement
          </Link>

          {/* A2 Ghee */}

          <Link
            to="/a2-ghee"
            className="navbar-link"
          >
            A2 Ghee
          </Link>

          {/* Jaggery */}

          <Link
            to="/jaggery"
            className="navbar-link"
          >
            Jaggery
          </Link>

          {/* Health Combo */}

          <Link
            to="/health-combo"
            className="navbar-link"
          >
            Health Combo
          </Link>

          {/* =================================================
              SHOP DROPDOWN
          ================================================= */}

          <div className="shop-dropdown-wrapper">

            <button
              type="button"
              className={`navbar-link shop-button ${
                shopOpen ? "shop-button-active" : ""
              }`}
              onClick={handleShopClick}
              aria-expanded={shopOpen}
              aria-haspopup="true"
            >
              <span>Shop</span>

              <ChevronDown
                size={15}
                strokeWidth={2}
                className={`shop-chevron ${
                  shopOpen
                    ? "shop-chevron-open"
                    : ""
                }`}
              />
            </button>

            {shopOpen && (
              <div className="shop-dropdown-menu">

                <div className="shop-dropdown-content">

                  <div className="shop-dropdown-header">
                    <h3>Shop</h3>

                    <p>
                      Explore our natural collection
                    </p>
                  </div>

                  {shopItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="shop-dropdown-item"
                        onClick={() =>
                          setShopOpen(false)
                        }
                      >
                        <div className="shop-dropdown-icon">
                          <Icon
                            size={19}
                            strokeWidth={1.8}
                          />
                        </div>

                        <div className="shop-dropdown-text">

                          <span className="shop-dropdown-name">
                            {item.name}
                          </span>

                          <span className="shop-dropdown-description">
                            {item.description}
                          </span>

                        </div>
                      </Link>
                    );
                  })}

                  <Link
                    to="/shop"
                    className="shop-dropdown-view-all"
                    onClick={() =>
                      setShopOpen(false)
                    }
                  >
                    <span>
                      View All Products
                    </span>

                    <span className="view-all-arrow">
                      →
                    </span>
                  </Link>

                </div>
              </div>
            )}

          </div>

          {/* =================================================
              HOT DEALS
          ================================================= */}

          <Link
            to="/hot-deals"
            className="navbar-link hot-deals-link"
          >
            <span>
              Hot Deals
            </span>

            <span className="hot-deals-badge">
              HOT
            </span>
          </Link>

        </div>

        {/* ===================================================
            NAVBAR ACTIONS
        =================================================== */}

        <div className="navbar-actions">

          {/* Search */}

          <button
            type="button"
            className="navbar-action"
            aria-label="Search"
            onClick={handleSearchToggle}
          >
            <Search
              size={22}
              strokeWidth={1.8}
            />
          </button>

          {/* Account */}

          <Link
            to="/account"
            className="navbar-action"
            aria-label="My Account"
          >
            <UserRound
              size={22}
              strokeWidth={1.8}
            />
          </Link>

          {/* =================================================
              CART
          ================================================= */}

          <Link
            to="/cart"
            className="navbar-action cart-action"
            aria-label="Shopping Cart"
          >
            <ShoppingCart
              size={23}
              strokeWidth={1.8}
            />

            <span className="cart-count">
              {navbarCartCount}
            </span>
          </Link>

          {/* Mobile Menu */}

          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Mobile Menu"
            onClick={() => {
              setMobileOpen(
                (previous) => !previous
              );

              setShopOpen(false);
            }}
          >
            {mobileOpen ? (
              <X
                size={24}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={24}
                strokeWidth={1.8}
              />
            )}
          </button>

        </div>
      </nav>

      {/* =====================================================
          SEARCH BAR
      ===================================================== */}

      <div
        className={`navbar-search ${
          searchOpen
            ? "navbar-search-open"
            : ""
        }`}
      >
        <div className="navbar-search-inner">

          <Search
            size={20}
            strokeWidth={1.8}
            className="navbar-search-icon"
          />

          <input
            type="text"
            placeholder="Search for oils, ghee, jaggery..."
            aria-label="Search products"
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                handleSearchSubmit();
              }
            }}
          />

          <button
            type="button"
            className="navbar-search-close"
            onClick={() => {
              setSearchOpen(false);
              setSearchQuery("");
            }}
            aria-label="Close Search"
          >
            <X
              size={19}
              strokeWidth={1.8}
            />
          </button>

        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`mobile-navbar ${
          mobileOpen
            ? "mobile-navbar-open"
            : ""
        }`}
      >
        <div className="mobile-navbar-inner">

          {/* All Products */}

          <Link
            to="/"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            All Products
          </Link>

          {/* Wood Press Oil */}

          <Link
            to="/wood-pressed-oil"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Wood Press Oil
          </Link>

          {/* Health Supplement */}

          <Link
            to="/health-supplement"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Health Supplement
          </Link>

          {/* A2 Ghee */}

          <Link
            to="/a2-ghee"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            A2 Ghee
          </Link>

          {/* Jaggery */}

          <Link
            to="/jaggery"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Jaggery
          </Link>

          {/* Health Combo */}

          <Link
            to="/health-combo"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Health Combo
          </Link>

          {/* =================================================
              MOBILE SHOP
          ================================================= */}

          <div className="mobile-shop-wrapper">

            <button
              type="button"
              className={`mobile-shop-button ${
                shopOpen
                  ? "mobile-shop-button-active"
                  : ""
              }`}
              onClick={() =>
                setShopOpen(
                  (previous) => !previous
                )
              }
            >
              <span>
                Shop
              </span>

              <ChevronDown
                size={17}
                className={`mobile-shop-chevron ${
                  shopOpen
                    ? "mobile-shop-chevron-open"
                    : ""
                }`}
              />
            </button>

            <div
              className={`mobile-shop-dropdown ${
                shopOpen
                  ? "mobile-shop-dropdown-open"
                  : ""
              }`}
            >
              {shopItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="mobile-shop-item"
                    onClick={closeMobileMenu}
                  >
                    <span className="mobile-shop-icon">
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

          </div>

          {/* Hot Deals */}

          <Link
            to="/hot-deals"
            className="mobile-nav-link mobile-hot-link"
            onClick={closeMobileMenu}
          >
            <span>
              Hot Deals
            </span>

            <span className="mobile-hot-badge">
              HOT
            </span>
          </Link>

          {/* =================================================
              MOBILE ACCOUNT / CART
          ================================================= */}

          <div className="mobile-extra-links">

            <Link
              to="/account"
              onClick={closeMobileMenu}
            >
              <UserRound
                size={18}
              />

              <span>
                My Account
              </span>
            </Link>

            <Link
              to="/cart"
              onClick={closeMobileMenu}
            >
              <ShoppingCart
                size={18}
              />

              <span>
                My Cart
              </span>

              {navbarCartCount > 0 && (
                <span className="mobile-cart-count">
                  {navbarCartCount}
                </span>
              )}
            </Link>

          </div>

        </div>
      </div>

    </header>
  );
};

export default Navbar;