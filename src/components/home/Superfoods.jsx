import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import SuperfoodProductCard from "./SuperfoodProductCard";
import superfoodProducts from "../data/superfoodProducts";

import "../../styles/superfoods.css";

const Superfoods = () => {
  return (
    <section className="superfood-section">

      <div className="superfood-container">

        {/* HEADING */}
        <div className="superfood-heading">
          <h2>Explore our Superfoods</h2>
        </div>

        {/* PRODUCTS */}
        <div className="superfood-scroll">
          {superfoodProducts.map((product) => (
            <SuperfoodProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* BOTTOM */}
        <div className="superfood-bottom">

          <div className="superfood-scroll-track">
            <div className="superfood-scroll-thumb" />
          </div>

          <Link
            to="/shop?category=superfoods"
            className="superfood-view-all"
          >
            <span>View all superfoods</span>

            <ArrowRight size={20} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Superfoods;