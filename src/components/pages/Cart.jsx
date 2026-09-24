import React from "react";
import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

import useCart from "../../hooks/useCart";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    subtotal,
  } = useCart();

  // =========================================================
  // EMPTY CART
  // =========================================================

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-empty">

          <div className="cart-empty-icon">
            <ShoppingBag size={42} />
          </div>

          <h1>Your Cart Is Empty</h1>

          <p>
            You haven't added any products to your cart yet.
          </p>

          <Link
            to="/"
            className="cart-continue-button"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">

      {/* =====================================================
          CART HEADER
      ===================================================== */}

      <section className="cart-header">

        <div>
          <p className="cart-eyebrow">
            SHREEKRISHNA ORGANICS
          </p>

          <h1>
            Your Shopping Cart
          </h1>

          <p>
            {cart.length}{" "}
            {cart.length === 1
              ? "product"
              : "products"}{" "}
            in your cart
          </p>
        </div>

        <button
          type="button"
          className="cart-clear-button"
          onClick={clearCart}
        >
          <Trash2 size={17} />
          Clear Cart
        </button>

      </section>

      {/* =====================================================
          CART CONTENT
      ===================================================== */}

      <section className="cart-content">

        {/* ===================================================
            PRODUCTS
        =================================================== */}

        <div className="cart-products">

          {cart.map((product) => {
            const price = Number(
              product.salePrice || product.price || 0
            );

            const quantity =
              product.quantity || 1;

            const itemTotal =
              price * quantity;

            return (
              <article
                className="cart-product"
                key={product.id}
              >

                {/* Product Image */}

                <Link
                  to={`/product/${product.id}`}
                  className="cart-product-image"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </Link>

                {/* Product Details */}

                <div className="cart-product-details">

                  {product.categoryName && (
                    <span className="cart-product-category">
                      {product.categoryName}
                    </span>
                  )}

                  <Link
                    to={`/product/${product.id}`}
                    className="cart-product-name"
                  >
                    {product.name}
                  </Link>

                  {/* Price */}

                  <div className="cart-product-price">

                    {product.salePrice && (
                      <span className="cart-old-price">
                        ₹
                        {Number(
                          product.price
                        ).toLocaleString("en-IN")}
                      </span>
                    )}

                    <span>
                      ₹
                      {price.toLocaleString("en-IN")}
                    </span>

                  </div>

                  {/* Quantity */}

                  <div className="cart-product-bottom">

                    <div className="cart-quantity">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(product.id)
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>

                      <span>
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(product.id)
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>

                    </div>

                    <strong className="cart-item-total">
                      ₹
                      {itemTotal.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                  </div>

                </div>

                {/* Remove */}

                <button
                  type="button"
                  className="cart-remove-button"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                  aria-label={`Remove ${product.name}`}
                >
                  <Trash2 size={19} />
                </button>

              </article>
            );
          })}

        </div>

        {/* ===================================================
            ORDER SUMMARY
        =================================================== */}

        <aside className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <div className="cart-summary-row">
            <span>
              Subtotal
            </span>

            <strong>
              ₹
              {Number(subtotal).toLocaleString(
                "en-IN"
              )}
            </strong>
          </div>

          <div className="cart-summary-row">
            <span>
              Shipping
            </span>

            <strong className="cart-free">
              FREE
            </strong>
          </div>

          <div className="cart-summary-divider" />

          <div className="cart-summary-total">
            <span>
              Total
            </span>

            <strong>
              ₹
              {Number(subtotal).toLocaleString(
                "en-IN"
              )}
            </strong>
          </div>

          <button
            type="button"
            className="cart-checkout-button"
          >
            Proceed to Checkout
          </button>

          <Link
            to="/"
            className="cart-continue-link"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>

        </aside>

      </section>

    </main>
  );
};

export default Cart;