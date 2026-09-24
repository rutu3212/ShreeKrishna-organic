// import React from "react";

// import AnnouncementBar from "./components/common/AnnouncementBar";
// import Navbar from "./components/layout/Navbar";
// import AppRoutes from "./routes/AppRoutes";
// import Footer from "./components/layout/Footer";



// const App = () => {
//   return (
//     <>
//       {/* =========================
//           ANNOUNCEMENT BAR
//       ========================= */}
//       <AnnouncementBar />

//       {/* =========================
//           NAVBAR
//       ========================= */}
//       <Navbar />

//       {/* =========================
//           PAGE ROUTES
//       ========================= */}
//       <AppRoutes />

//       <Footer/>


//     </>
//   );
// };

// export default App;

import React from "react";

import AnnouncementBar from "./components/common/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";


const App = () => {

  // =========================
  // CHECK ADMIN ROUTE
  // =========================
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <>
      {/* =========================
          ANNOUNCEMENT BAR
      ========================= */}
      {!isAdminRoute && <AnnouncementBar />}

      {/* =========================
          NAVBAR
      ========================= */}
      {!isAdminRoute && <Navbar />}

      {/* =========================
          PAGE ROUTES
      ========================= */}
      <AppRoutes />

      {/* =========================
          FOOTER
      ========================= */}
      {!isAdminRoute && <Footer />}

    </>
  );
};

export default App;