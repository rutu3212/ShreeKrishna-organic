import React, { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const STORAGE_KEY = "shreekrishna_offers";

const AdminOffers = () => {
  const [offers, setOffers] = useState([]);
  const [title, setTitle] = useState("");
  const [discount, setDiscount] = useState("");

  useEffect(() => {
    setOffers(
      JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      )
    );
  }, []);

  const saveOffers = (data) => {
    setOffers(data);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  };

  const addOffer = (event) => {
    event.preventDefault();

    if (!title.trim() || !discount.trim()) return;

    saveOffers([
      ...offers,
      {
        id: Date.now(),
        title,
        discount,
      },
    ]);

    setTitle("");
    setDiscount("");
  };

  const deleteOffer = (id) => {
    saveOffers(
      offers.filter(
        (offer) => offer.id !== id
      )
    );
  };

  return (
    <div>

      <div className="admin-page-heading">

        <span>MARKETING</span>

        <h1>Offers & Discounts</h1>

        <p>
          Manage promotions and special offers.
        </p>

      </div>

      <div className="admin-content-card">

        <form
          className="admin-inline-form"
          onSubmit={addOffer}
        >

          <input
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            placeholder="Offer title"
          />

          <input
            value={discount}
            onChange={(event) =>
              setDiscount(event.target.value)
            }
            placeholder="15% OFF"
          />

          <button
            type="submit"
            className="admin-primary-button"
          >
            <Plus size={18} />
            Add Offer
          </button>

        </form>

        <div className="admin-category-list">

          {offers.map((offer) => (
            <div
              key={offer.id}
              className="admin-category-item"
            >

              <div>
                <strong>{offer.title}</strong>
                <span>{offer.discount}</span>
              </div>

              <button
                type="button"
                onClick={() =>
                  deleteOffer(offer.id)
                }
              >
                <Trash2 size={17} />
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default AdminOffers;