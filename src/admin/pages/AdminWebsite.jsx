import React, { useEffect, useState } from "react";
import { Save } from "lucide-react";

const STORAGE_KEY = "shreekrishna_website";

const defaultWebsite = {
  heroTitle: "Pure Tradition, Naturally",
  heroSubtitle:
    "Authentic Indian food products made with care.",
  heroImage: "",
  welcomeTitle:
    "Welcome to ShreeKrishna Organics",
  welcomeDescription:
    "Pure, traditional and naturally sourced products.",
};

const AdminWebsite = () => {
  const [website, setWebsite] =
    useState(defaultWebsite);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ||
        JSON.stringify(defaultWebsite)
    );

    setWebsite(data);
  }, []);

  const handleChange = (event) => {
    setWebsite((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(website)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div>

      <div className="admin-page-heading">

        <span>CONTENT</span>

        <h1>Website Content</h1>

        <p>
          Manage homepage and hero content.
        </p>

      </div>

      <div className="admin-content-card">

        <form
          className="admin-form"
          onSubmit={handleSave}
        >

          <div className="admin-form-grid">

            <div className="admin-form-group admin-full">
              <label>Hero Title</label>

              <input
                name="heroTitle"
                value={website.heroTitle}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group admin-full">
              <label>Hero Subtitle</label>

              <textarea
                name="heroSubtitle"
                value={website.heroSubtitle}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="admin-form-group admin-full">
              <label>Hero Image URL</label>

              <input
                name="heroImage"
                value={website.heroImage}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

            <div className="admin-form-group admin-full">
              <label>Welcome Heading</label>

              <input
                name="welcomeTitle"
                value={website.welcomeTitle}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group admin-full">
              <label>Welcome Description</label>

              <textarea
                name="welcomeDescription"
                value={website.welcomeDescription}
                onChange={handleChange}
                rows="4"
              />
            </div>

          </div>

          <button
            type="submit"
            className="admin-primary-button"
          >
            <Save size={18} />

            Save Website Content
          </button>

          {saved && (
            <span className="admin-save-message">
              Saved successfully.
            </span>
          )}

        </form>

      </div>

    </div>
  );
};

export default AdminWebsite;