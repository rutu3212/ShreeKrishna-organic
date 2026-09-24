// import React, { useState } from "react";
// import {
//   Mail,
//   Lock,
//   User,
//   Eye,
//   EyeOff,
//   Leaf,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Account = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       console.log("Customer Login:", {
//         email: formData.email,
//         password: formData.password,
//       });

//       alert("Login form submitted");
//     } else {
//       console.log("Customer Signup:", formData);

//       alert("Account created successfully");
//     }
//   };

//   return (
//     <main className="account-page">

//       {/* Background decorative leaves */}
//       <div className="account-leaf account-leaf-1">
//         <Leaf size={55} />
//       </div>

//       <div className="account-leaf account-leaf-2">
//         <Leaf size={45} />
//       </div>

//       <div className="account-leaf account-leaf-3">
//         <Leaf size={50} />
//       </div>

//       <div className="account-container">

//         {/* Logo */}
//         <div className="account-brand">

//           <div className="account-brand-icon">
//             <Leaf size={28} strokeWidth={1.7} />
//           </div>

//           <div>
//             <h1>SHREEKRISHNA</h1>
//             <span>ORGANICS</span>
//           </div>

//         </div>

//         {/* Heading */}
//         <div className="account-heading">

//           <h2>
//             {isLogin ? "Welcome Back!" : "Create Your Account"}
//           </h2>

//           <p>
//             {isLogin
//               ? "Log in to your account"
//               : "Join ShreeKrishna Organics today"}
//           </p>

//         </div>

//         {/* Form */}
//         <form
//           className="account-form"
//           onSubmit={handleSubmit}
//         >

//           {/* Name - Signup only */}
//           {!isLogin && (
//             <div className="account-field">

//               <label htmlFor="name">
//                 1. Full Name
//               </label>

//               <div className="account-input-wrapper">

//                 <User
//                   size={19}
//                   strokeWidth={1.7}
//                 />

//                 <input
//                   id="name"
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />

//               </div>

//             </div>
//           )}

//           {/* Email */}
//           <div className="account-field">

//             <label htmlFor="email">
//               {isLogin ? "1." : "2."} Email Address
//             </label>

//             <div className="account-input-wrapper">

//               <Mail
//                 size={19}
//                 strokeWidth={1.7}
//               />

//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />

//             </div>

//           </div>

//           {/* Password */}
//           <div className="account-field">

//             <label htmlFor="password">
//               {isLogin ? "2." : "3."} Password
//             </label>

//             <div className="account-input-wrapper">

//               <Lock
//                 size={19}
//                 strokeWidth={1.7}
//               />

//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />

//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={() =>
//                   setShowPassword((previous) => !previous)
//                 }
//                 aria-label={
//                   showPassword
//                     ? "Hide password"
//                     : "Show password"
//                 }
//               >
//                 {showPassword ? (
//                   <EyeOff size={18} />
//                 ) : (
//                   <Eye size={18} />
//                 )}
//               </button>

//             </div>

//           </div>

//           {/* Login options */}
//           {isLogin && (
//             <div className="account-options">

//               <label className="remember-me">

//                 <input
//                   type="checkbox"
//                 />

//                 <span>
//                   Remember Me
//                 </span>

//               </label>

//               <button
//                 type="button"
//                 className="forgot-password"
//                 onClick={() =>
//                   alert("Password reset option")
//                 }
//               >
//                 Forgot Password?
//               </button>

//             </div>
//           )}

//           {/* Submit */}
//           <button
//             type="submit"
//             className="account-submit"
//           >
//             {isLogin ? "Log In" : "Create Account"}
//           </button>

//         </form>

//         {/* Switch login/signup */}
//         <div className="account-switch">

//           {isLogin ? (
//             <>
//               <span>
//                 Don't have an account?
//               </span>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsLogin(false);
//                   setFormData({
//                     name: "",
//                     email: "",
//                     password: "",
//                   });
//                 }}
//               >
//                 Sign Up
//               </button>
//             </>
//           ) : (
//             <>
//               <span>
//                 Already have an account?
//               </span>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsLogin(true);
//                   setFormData({
//                     name: "",
//                     email: "",
//                     password: "",
//                   });
//                 }}
//               >
//                 Log In
//               </button>
//             </>
//           )}

//         </div>

//         {/* Back */}
//         <Link
//           to="/"
//           className="account-back"
//         >
//           ← Back to ShreeKrishna Organics
//         </Link>

//       </div>
//     </main>
//   );
// };

// export default Account;

      import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Customer Login:", {
        email: formData.email,
        password: formData.password,
      });

      alert("Login form submitted");
    } else {
      console.log("Customer Signup:", formData);

      alert("Account created successfully");
    }
  };

  const switchMode = (loginMode) => {
    setIsLogin(loginMode);
    setShowPassword(false);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <main className="account-page">

      {/* =====================================
          FULL SCREEN BACKGROUND
      ===================================== */}

      <img
        src=""
        alt=""
        className="account-background-image"
      />

      <div className="account-overlay"></div>


      {/* =====================================
          FLOATING LEAVES
      ===================================== */}

      <div className="account-leaf account-leaf-1">
        <Leaf size={48} />
      </div>

      <div className="account-leaf account-leaf-2">
        <Leaf size={42} />
      </div>

      <div className="account-leaf account-leaf-3">
        <Leaf size={52} />
      </div>

      <div className="account-leaf account-leaf-4">
        <Leaf size={38} />
      </div>


      {/* =====================================
          CENTER FORM
      ===================================== */}

      <div className="account-container">

        <div className="account-card">


          {/* =================================
              LOGO
          ================================= */}

          <div className="account-brand">

            <div className="account-brand-icon">
              <Leaf
                size={28}
                strokeWidth={1.7}
              />
            </div>

            <div className="account-brand-text">
              <h1>SHREEKRISHNA</h1>
              <span>ORGANICS</span>
            </div>

          </div>


          {/* =================================
              HEADING
          ================================= */}

          <div className="account-heading">

            <h2>
              {isLogin
                ? "Welcome Back!"
                : "Create Your Account"}
            </h2>

            <p>
              {isLogin
                ? "Log in to your account"
                : "Join ShreeKrishna Organics today"}
            </p>

          </div>


          {/* =================================
              FORM
          ================================= */}

          <form
            className="account-form"
            onSubmit={handleSubmit}
          >


            {/* NAME */}

            {!isLogin && (
              <div className="account-field">

                <label htmlFor="name">
                  1. Full Name
                </label>

                <div className="account-input-wrapper">

                  <User size={19} />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>
            )}


            {/* EMAIL */}

            <div className="account-field">

              <label htmlFor="email">
                {isLogin ? "1." : "2."} Email Address
              </label>

              <div className="account-input-wrapper">

                <Mail size={19} />

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="account-field">

              <label htmlFor="password">
                {isLogin ? "2." : "3."} Password
              </label>

              <div className="account-input-wrapper">

                <Lock size={19} />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="account-password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            {/* =================================
                REMEMBER / FORGOT
            ================================= */}

            {isLogin && (
              <div className="account-options">

                <label className="remember-me">

                  <input
                    type="checkbox"
                  />

                  <span>
                    Remember Me
                  </span>

                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert(
                      "Password reset option"
                    )
                  }
                >
                  Forgot Password?
                </button>

              </div>
            )}


            {/* =================================
                LOGIN BUTTON
            ================================= */}

            <button
              type="submit"
              className="account-submit"
            >
              {isLogin
                ? "Log In"
                : "Create Account"}
            </button>

          </form>


          {/* =================================
              SIGN UP
          ================================= */}

          <div className="account-switch">

            {isLogin ? (
              <>
                <span>
                  Don't have an account?
                </span>

                <button
                  type="button"
                  onClick={() =>
                    switchMode(false)
                  }
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <span>
                  Already have an account?
                </span>

                <button
                  type="button"
                  onClick={() =>
                    switchMode(true)
                  }
                >
                  Log In
                </button>
              </>
            )}

          </div>


          {/* =================================
              BACK
          ================================= */}

          <Link
            to="/"
            className="account-back"
          >
            ← Back to ShreeKrishna Organics
          </Link>

        </div>

      </div>

    </main>
  );
};

export default Account;
  