import React, { useEffect, useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  X,
  Save,
  Package,
} from "lucide-react";

const STORAGE_KEY = "shreekrishna_admin_products";

const emptyProduct = {
  id: "",
  name: "",
  category: "",
  description: "",
  price: "",
  salePrice: "",
  image: "",
  rating: "4.8",
  reviews: "0",
  badge: "",
  discount: "",
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyProduct);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // =========================
  // LOAD PRODUCTS
  // =========================

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      setProducts(
        Array.isArray(saved) ? saved : []
      );
    } catch (error) {
      console.error(
        "Error loading products:",
        error
      );

      setProducts([]);
    }
  }, []);

  // =========================
  // SAVE PRODUCTS
  // =========================

  const saveProducts = (updatedProducts) => {
    setProducts(updatedProducts);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedProducts)
    );

    // Notify customer website
    window.dispatchEvent(
      new Event("adminProductsUpdated")
    );
  };

  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // =========================
  // OPEN ADD FORM
  // =========================

  const openAddForm = () => {
    setForm({
      ...emptyProduct,
      id: Date.now(),
    });

    setEditingId(null);
    setShowForm(true);
  };

  // =========================
  // OPEN EDIT FORM
  // =========================

  const openEditForm = (product) => {
    setForm({
      ...emptyProduct,
      ...product,
    });

    setEditingId(product.id);
    setShowForm(true);
  };

  // =========================
  // CLOSE FORM
  // =========================

  const closeForm = () => {
    setForm(emptyProduct);
    setEditingId(null);
    setShowForm(false);
  };

  // =========================
  // SAVE / UPDATE PRODUCT
  // =========================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      alert("Product name is required.");
      return;
    }

    if (!form.price) {
      alert("Product price is required.");
      return;
    }

    if (editingId) {
      const updated = products.map(
        (product) =>
          product.id === editingId
            ? {
                ...form,
                id: editingId,
                price: Number(form.price),
                salePrice: form.salePrice
                  ? Number(form.salePrice)
                  : "",
              }
            : product
      );

      saveProducts(updated);
    } else {
      const newProduct = {
        ...form,
        id: form.id || Date.now(),
        price: Number(form.price),
        salePrice: form.salePrice
          ? Number(form.salePrice)
          : "",
      };

      saveProducts([
        ...products,
        newProduct,
      ]);
    }

    closeForm();
  };

  // =========================
  // DELETE PRODUCT
  // =========================

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    const updated = products.filter(
      (product) => product.id !== id
    );

    saveProducts(updated);
  };

  return (
    <div>

      {/* =========================
          PAGE HEADING
      ========================= */}

      <div className="admin-page-heading admin-heading-row">

        <div>
          <span>CATALOG</span>

          <h1>Products</h1>

          <p>
            Add, edit and manage your products.
          </p>
        </div>

        <button
          type="button"
          className="admin-primary-button"
          onClick={openAddForm}
        >
          <Plus size={18} />
          Add Product
        </button>

      </div>

      {/* =========================
          ADD / EDIT PRODUCT MODAL
      ========================= */}

      {showForm && (
        <div className="admin-modal-overlay">

          <div className="admin-modal">

            {/* MODAL HEADER */}

            <div className="admin-modal-header">

              <div>
                <span>PRODUCT</span>

                <h2>
                  {editingId
                    ? "Edit Product"
                    : "Add Product"}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeForm}
                aria-label="Close"
              >
                <X size={21} />
              </button>

            </div>

            {/* PRODUCT FORM */}

            <form onSubmit={handleSubmit}>

              <div className="admin-form-grid">

                {/* PRODUCT NAME */}

                <div className="admin-form-group admin-full">

                  <label>
                    Product Name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="A2 Gir Cow Ghee"
                    required
                  />

                </div>

                {/* CATEGORY */}

                <div className="admin-form-group">

                  <label>
                    Category
                  </label>

                  <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="A2 Ghee"
                  />

                </div>

                {/* PRICE */}

                <div className="admin-form-group">

                  <label>
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="1200"
                    min="0"
                    required
                  />

                </div>

                {/* SALE PRICE */}

                <div className="admin-form-group">

                  <label>
                    Sale Price
                  </label>

                  <input
                    type="number"
                    name="salePrice"
                    value={form.salePrice}
                    onChange={handleChange}
                    placeholder="999"
                    min="0"
                  />

                </div>

                {/* DISCOUNT */}

                <div className="admin-form-group">

                  <label>
                    Discount
                  </label>

                  <input
                    name="discount"
                    value={form.discount}
                    onChange={handleChange}
                    placeholder="20% OFF"
                  />

                </div>

                {/* IMAGE URL */}

                <div className="admin-form-group admin-full">

                  <label>
                    Image URL
                  </label>

                  <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://example.com/product.jpg"
                  />

                </div>

                {/* DESCRIPTION */}

                <div className="admin-form-group admin-full">

                  <label>
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Product description..."
                    rows="5"
                  />

                </div>

              </div>

              {/* MODAL ACTIONS */}

              <div className="admin-modal-actions">

                <button
                  type="button"
                  className="admin-secondary-button"
                  onClick={closeForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="admin-primary-button"
                >
                  <Save size={18} />

                  {editingId
                    ? "Update Product"
                    : "Save Product"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

      {/* =========================
          PRODUCT TABLE
      ========================= */}

      <div className="admin-table-card">

        {products.length === 0 ? (

          /* EMPTY STATE */

          <div className="admin-empty-state">

            <Package size={42} />

            <h3>
              No products added yet
            </h3>

            <p>
              Click "Add Product" to create your
              first product.
            </p>

          </div>

        ) : (

          /* PRODUCT TABLE */

          <div className="admin-table-wrapper">

            <table className="admin-table">

              <thead>

                <tr>

                  <th>
                    Product
                  </th>

                  <th>
                    Category
                  </th>

                  <th>
                    Price
                  </th>

                  <th>
                    Sale Price
                  </th>

                  <th>
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {products.map((product) => (

                  <tr key={product.id}>

                    {/* PRODUCT */}

                    <td>

                      <div className="admin-product-cell">

                        {product.image ? (

                          <img
                            src={product.image}
                            alt={product.name}
                          />

                        ) : (

                          <div className="admin-product-placeholder">
                            SK
                          </div>

                        )}

                        <strong>
                          {product.name}
                        </strong>

                      </div>

                    </td>

                    {/* CATEGORY */}

                    <td>
                      {product.category || "-"}
                    </td>

                    {/* PRICE */}

                    <td>
                      ₹
                      {Number(
                        product.price || 0
                      ).toLocaleString("en-IN")}
                    </td>

                    {/* SALE PRICE */}

                    <td>

                      {product.salePrice
                        ? `₹${Number(
                            product.salePrice
                          ).toLocaleString("en-IN")}`
                        : "-"}

                    </td>

                    {/* ACTIONS */}

                    <td>

                      <div className="admin-table-actions">

                        {/* EDIT */}

                        <button
                          type="button"
                          onClick={() =>
                            openEditForm(product)
                          }
                          title="Edit"
                          aria-label={`Edit ${product.name}`}
                        >
                          <Edit size={17} />
                        </button>

                        {/* DELETE */}

                        <button
                          type="button"
                          className="danger"
                          onClick={() =>
                            handleDelete(product.id)
                          }
                          title="Delete"
                          aria-label={`Delete ${product.name}`}
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
};

export default AdminProducts;