import React, { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const STORAGE_KEY = "shreekrishna_categories";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setCategories(
      JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      )
    );
  }, []);

  const save = (data) => {
    setCategories(data);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  };

  const addCategory = (event) => {
    event.preventDefault();

    if (!name.trim()) return;

    save([
      ...categories,
      {
        id: Date.now(),
        name: name.trim(),
      },
    ]);

    setName("");
  };

  const deleteCategory = (id) => {
    save(
      categories.filter(
        (category) => category.id !== id
      )
    );
  };

  return (
    <div>

      <div className="admin-page-heading">

        <span>CATALOG</span>

        <h1>Categories</h1>

        <p>
          Manage your product categories.
        </p>

      </div>

      <div className="admin-content-card">

        <form
          className="admin-inline-form"
          onSubmit={addCategory}
        >

          <input
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Category name"
          />

          <button
            type="submit"
            className="admin-primary-button"
          >
            <Plus size={18} />
            Add Category
          </button>

        </form>

        <div className="admin-category-list">

          {categories.map((category) => (
            <div
              key={category.id}
              className="admin-category-item"
            >

              <span>{category.name}</span>

              <button
                type="button"
                onClick={() =>
                  deleteCategory(category.id)
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

export default AdminCategories;