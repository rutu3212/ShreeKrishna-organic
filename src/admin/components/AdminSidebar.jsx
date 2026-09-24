import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Tags,
  Image,
  BadgePercent,
  Phone,
  Globe,
  LogOut,
  Leaf,
} from "lucide-react";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("shreekrishna_admin");
    navigate("/admin");
  };

  const links = [
    {
      path: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/admin/products",
      label: "Products",
      icon: Package,
    },
    {
      path: "/admin/categories",
      label: "Categories",
      icon: Tags,
    },
    {
      path: "/admin/images",
      label: "Images",
      icon: Image,
    },
    {
      path: "/admin/offers",
      label: "Offers",
      icon: BadgePercent,
    },
    {
      path: "/admin/contact",
      label: "Contact",
      icon: Phone,
    },
    {
      path: "/admin/website",
      label: "Website Content",
      icon: Globe,
    },
  ];

  return (
    <aside className="admin-sidebar">

      <div className="admin-brand">

        <div className="admin-brand-icon">
          <Leaf size={23} />
        </div>

        <div>
          <strong>SHREEKRISHNA</strong>
          <span>ADMIN PANEL</span>
        </div>

      </div>

      <nav className="admin-navigation">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `admin-nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Icon size={19} />
              <span>{link.label}</span>
            </NavLink>
          );
        })}

      </nav>

      <button
        type="button"
        className="admin-logout"
        onClick={handleLogout}
      >
        <LogOut size={19} />
        Logout
      </button>

    </aside>
  );
};

export default AdminSidebar;