import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

const ADMIN_EMAIL = "admin@shreekrishna.com";
const ADMIN_PASSWORD = "Admin@123";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const isLoggedIn =
    localStorage.getItem("shreekrishna_admin") === "true";

  if (isLoggedIn) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    if (
      email.trim().toLowerCase() === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      localStorage.setItem("shreekrishna_admin", "true");
      navigate("/admin/dashboard");
      return;
    }

    setError("Invalid email or password.");
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-logo">
          SK
        </div>

        <p className="admin-login-label">
          SHREEKRISHNA ORGANICS
        </p>

        <h1>Admin Panel</h1>

        <p className="admin-login-description">
          Sign in to manage your website.
        </p>

        <form onSubmit={handleLogin}>

          <div className="admin-input-group">

            <label>Email</label>

            <div className="admin-input-wrapper">
              <Mail size={18} />

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="admin@shreekrishna.com"
                required
              />
            </div>

          </div>

          <div className="admin-input-group">

            <label>Password</label>

            <div className="admin-input-wrapper">

              <Lock size={18} />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Enter password"
                required
              />

              <button
                type="button"
                className="admin-password-button"
                onClick={() =>
                  setShowPassword(!showPassword)
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

          {error && (
            <div className="admin-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="admin-login-button"
          >
            Login to Admin Panel
          </button>

        </form>

        <p className="admin-login-note">
          Admin access only
        </p>

      </div>

    </div>
  );
};

export default AdminLogin;