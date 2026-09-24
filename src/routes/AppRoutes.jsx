// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Home from "../components/pages/Home";
// import Products from "../components/pages/Products";
// import ProductDetails from "../components/pages/ProductDetails";

// import WoodPressedOil from "../components/pages/WoodPressedOil";
// import HealthSupplement from "../components/pages/HealthSupplement";
// import A2Ghee from "../components/pages/A2Ghee";
// import Jaggery from "../components/pages/Jaggery";
// import HealthCombo from "../components/pages/HealthCombo";
// import HotDeals from "../components/pages/HotDeals";
// import Account from "../components/pages/Account";
// import Cart from "../components/pages/Cart";

// const AppRoutes = () => {
//   return (
//     <Routes>

//       {/* HOME */}
//       <Route
//         path="/"
//         element={<Home />}
//       />


//       {/* MAIN SHOP */}
//       <Route
//         path="/shop"
//         element={<Products />}
//       />

//       <Route
//         path="/products"
//         element={<Products />}
//       />


//       {/* NAVBAR CATEGORY PAGES */}

//       <Route
//         path="/wood-pressed-oil"
//         element={<WoodPressedOil />}
//       />

//       <Route
//         path="/health-supplement"
//         element={<HealthSupplement />}
//       />

//       <Route
//         path="/a2-ghee"
//         element={<A2Ghee />}
//       />

//       <Route
//         path="/jaggery"
//         element={<Jaggery />}
//       />

//       <Route
//         path="/health-combo"
//         element={<HealthCombo />}
//       />

//       <Route
//         path="/hot-deals"
//         element={<HotDeals />}
//       />

//         {/* CART */}
//       <Route
//         path="/cart"
//         element={<Cart />}
//       />


//       {/* PRODUCT DETAILS */}

//       <Route
//         path="/product/:id"
//         element={<ProductDetails />}
//       />

//        <Route
//         path="/account"
//         element={<Account />}
//       />

//       {/* FALLBACK */}

//       <Route
//         path="*"
//         element={<Home />}
//       />

//     </Routes>
//   );
// };

// export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import ProductDetails from "../components/pages/ProductDetails";

import WoodPressedOil from "../components/pages/WoodPressedOil";
import HealthSupplement from "../components/pages/HealthSupplement";
import A2Ghee from "../components/pages/A2Ghee";
import Jaggery from "../components/pages/Jaggery";
import HealthCombo from "../components/pages/HealthCombo";
import HotDeals from "../components/pages/HotDeals";
import Account from "../components/pages/Account";
import Cart from "../components/pages/Cart";

/* =====================================================
   ADMIN IMPORTS
   ===================================================== */

import AdminLogin from "../admin/pages/AdminLogin";
import AdminDashboard from "../admin/pages/AdminDashboard";
import AdminProducts from "../admin/pages/AdminProducts";
import AdminCategories from "../admin/pages/AdminCategories";
import AdminImages from "../admin/pages/AdminImages";
import AdminOffers from "../admin/pages/AdminOffers";
import AdminContact from "../admin/pages/AdminContact";
import AdminWebsite from "../admin/pages/AdminWebsite";

import ProtectedAdminRoute from "../admin/components/ProtectedAdminRoute";
import AdminLayout from "../admin/components/AdminLayout";


const AppRoutes = () => {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />


      {/* MAIN SHOP */}
      <Route
        path="/shop"
        element={<Products />}
      />

      <Route
        path="/products"
        element={<Products />}
      />


      {/* NAVBAR CATEGORY PAGES */}

      <Route
        path="/wood-pressed-oil"
        element={<WoodPressedOil />}
      />

      <Route
        path="/health-supplement"
        element={<HealthSupplement />}
      />

      <Route
        path="/a2-ghee"
        element={<A2Ghee />}
      />

      <Route
        path="/jaggery"
        element={<Jaggery />}
      />

      <Route
        path="/health-combo"
        element={<HealthCombo />}
      />

      <Route
        path="/hot-deals"
        element={<HotDeals />}
      />


      {/* CART */}
      <Route
        path="/cart"
        element={<Cart />}
      />


      {/* PRODUCT DETAILS */}

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />


      <Route
        path="/account"
        element={<Account />}
      />


      {/* =====================================================
          ADMIN LOGIN
          ===================================================== */}

      <Route
        path="/admin"
        element={<AdminLogin />}
      />


      {/* =====================================================
          ADMIN DASHBOARD
          ===================================================== */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </ProtectedAdminRoute>
        }
      />


      {/* =====================================================
          ADMIN PRODUCTS
          ===================================================== */}

      <Route
        path="/admin/products"
        element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <AdminProducts />
            </AdminLayout>
          </ProtectedAdminRoute>
        }
      />


      {/* =====================================================
          ADMIN CATEGORIES
          ===================================================== */}

      <Route
        path="/admin/categories"
        element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <AdminCategories />
            </AdminLayout>
          </ProtectedAdminRoute>
        }
      />


      {/* =====================================================
          ADMIN IMAGES
          ===================================================== */}

      <Route
        path="/admin/images"
        element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <AdminImages />
            </AdminLayout>
          </ProtectedAdminRoute>
        }
      />


      {/* =====================================================
          ADMIN OFFERS
          ===================================================== */}

      <Route
        path="/admin/offers"
        element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <AdminOffers />
            </AdminLayout>
          </ProtectedAdminRoute>
        }
      />


      {/* =====================================================
          ADMIN CONTACT
          ===================================================== */}

      <Route
        path="/admin/contact"
        element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <AdminContact />
            </AdminLayout>
          </ProtectedAdminRoute>
        }
      />


      {/* =====================================================
          ADMIN WEBSITE CONTENT
          ===================================================== */}

      <Route
        path="/admin/website"
        element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <AdminWebsite />
            </AdminLayout>
          </ProtectedAdminRoute>
        }
      />


      {/* FALLBACK */}

      <Route
        path="*"
        element={<Home />}
      />

    </Routes>
  );
};

export default AppRoutes;