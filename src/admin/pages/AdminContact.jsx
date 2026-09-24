import React, { useEffect, useState } from "react";
import { Save } from "lucide-react";

const STORAGE_KEY = "shreekrishna_contact";

const defaultContact = {
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
};

const AdminContact = () => {
  const [contact, setContact] =
    useState(defaultContact);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ||
        JSON.stringify(defaultContact)
    );

    setContact(data);
  }, []);

  const handleChange = (event) => {
    setContact((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const saveContact = (event) => {
    event.preventDefault();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(contact)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div>

      <div className="admin-page-heading">

        <span>WEBSITE</span>

        <h1>Contact Information</h1>

        <p>
          Update the contact details displayed
          across your website.
        </p>

      </div>

      <div className="admin-content-card">

        <form
          className="admin-form"
          onSubmit={saveContact}
        >

          <div className="admin-form-grid">

            <div className="admin-form-group">
              <label>Phone</label>

              <input
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="admin-form-group">
              <label>WhatsApp</label>

              <input
                name="whatsapp"
                value={contact.whatsapp}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="admin-form-group">
              <label>Email</label>

              <input
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="care@shreekrishna.com"
              />
            </div>

            <div className="admin-form-group admin-full">
              <label>Address</label>

              <textarea
                name="address"
                value={contact.address}
                onChange={handleChange}
                rows="4"
                placeholder="Business address"
              />
            </div>

          </div>

          <button
            type="submit"
            className="admin-primary-button"
          >
            <Save size={18} />

            Save Contact Information
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

export default AdminContact;