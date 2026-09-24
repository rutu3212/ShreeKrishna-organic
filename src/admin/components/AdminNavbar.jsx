import React from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <header className="admin-navbar">

      <div>
        <p>Administration</p>
        <h2>ShreeKrishna Organics</h2>
      </div>

      <Link
        to="/"
        target="_blank"
        className="admin-view-site"
      >
        <ExternalLink size={17} />
        View Website
      </Link>

    </header>
  );
};

export default AdminNavbar;