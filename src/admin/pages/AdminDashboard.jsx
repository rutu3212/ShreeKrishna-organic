import React from "react";
import {
  Package,
  Tags,
  Image,
  BadgePercent,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

const AdminDashboard = () => {
  const products = JSON.parse(
    localStorage.getItem("shreekrishna_admin_products") || "[]"
  );

  const categories = JSON.parse(
    localStorage.getItem("shreekrishna_categories") || "[]"
  );

  const offers = JSON.parse(
    localStorage.getItem("shreekrishna_offers") || "[]"
  );

  const images = JSON.parse(
    localStorage.getItem("shreekrishna_images") || "[]"
  );

  const stats = [
    {
      title: "Products",
      value: products.length,
      icon: Package,
    },
    {
      title: "Categories",
      value: categories.length,
      icon: Tags,
    },
    {
      title: "Images",
      value: images.length,
      icon: Image,
    },
    {
      title: "Offers",
      value: offers.length,
      icon: BadgePercent,
    },
  ];

  return (
    <div>

      <div className="admin-page-heading">

        <div>
          <span>OVERVIEW</span>
          <h1>Dashboard</h1>
          <p>
            Manage your ShreeKrishna Organics website.
          </p>
        </div>

      </div>

      <div className="admin-stats-grid">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className="admin-stat-card"
              key={stat.title}
            >
              <div className="admin-stat-icon">
                <Icon size={23} />
              </div>

              <div>
                <span>{stat.title}</span>
                <strong>{stat.value}</strong>
              </div>
            </div>
          );
        })}

      </div>

      <div className="admin-dashboard-grid">

        <div className="admin-dashboard-card">

          <div className="admin-dashboard-card-header">
            <div>
              <span>WEBSITE MANAGEMENT</span>
              <h2>Quick Actions</h2>
            </div>
          </div>

          <div className="admin-quick-actions">

            <a href="/admin/products">
              <Package size={21} />
              <span>
                <strong>Manage Products</strong>
                Add, edit or delete products
              </span>
            </a>

            <a href="/admin/images">
              <Image size={21} />
              <span>
                <strong>Manage Images</strong>
                Homepage and product images
              </span>
            </a>

            <a href="/admin/offers">
              <BadgePercent size={21} />
              <span>
                <strong>Manage Offers</strong>
                Discounts and promotions
              </span>
            </a>

            <a href="/admin/website">
              <TrendingUp size={21} />
              <span>
                <strong>Website Content</strong>
                Homepage dynamic content
              </span>
            </a>

          </div>

        </div>

        <div className="admin-dashboard-card admin-welcome-card">

          <ShoppingBag size={38} />

          <h2>
            Welcome to your Admin Panel
          </h2>

          <p>
            Manage your products, images, offers,
            categories and website content from one
            place.
          </p>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;