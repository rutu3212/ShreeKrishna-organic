import React, { useEffect, useState } from "react";
import { Image, Trash2, Plus } from "lucide-react";

const STORAGE_KEY = "shreekrishna_images";

const AdminImages = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setImages(
      JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      )
    );
  }, []);

  const saveImages = (data) => {
    setImages(data);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  };

  const addImage = (event) => {
    event.preventDefault();

    if (!url.trim()) return;

    saveImages([
      ...images,
      {
        id: Date.now(),
        name: name || "Website Image",
        url: url.trim(),
      },
    ]);

    setName("");
    setUrl("");
  };

  const deleteImage = (id) => {
    saveImages(
      images.filter((image) => image.id !== id)
    );
  };

  return (
    <div>

      <div className="admin-page-heading">

        <span>MEDIA</span>

        <h1>Images</h1>

        <p>
          Manage homepage, hero and product images.
        </p>

      </div>

      <div className="admin-content-card">

        <form
          className="admin-image-form"
          onSubmit={addImage}
        >

          <input
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Image name"
          />

          <input
            value={url}
            onChange={(event) =>
              setUrl(event.target.value)
            }
            placeholder="https://image-url.com/image.jpg"
            required
          />

          <button
            type="submit"
            className="admin-primary-button"
          >
            <Plus size={18} />
            Add Image
          </button>

        </form>

      </div>

      <div className="admin-image-grid">

        {images.map((image) => (
          <div
            className="admin-image-card"
            key={image.id}
          >

            <img
              src={image.url}
              alt={image.name}
            />

            <div>

              <strong>
                {image.name}
              </strong>

              <button
                type="button"
                onClick={() =>
                  deleteImage(image.id)
                }
              >
                <Trash2 size={17} />
              </button>

            </div>

          </div>
        ))}

      </div>

      {images.length === 0 && (
        <div className="admin-empty-state">
          <Image size={42} />
          <h3>No images yet</h3>
          <p>
            Add image URLs above.
          </p>
        </div>
      )}

    </div>
  );
};

export default AdminImages;