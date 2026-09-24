import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ComboProductCard from "./ComboProductCard";
import comboProducts from "../data/comboProducts";

const ComboPacks = () => {
  const scrollRef = useRef(null);

  return (
    <section className="combo-section">
      <div className="combo-section-container">

        {/* HEADING */}
        <div className="combo-section-heading">
          <h2>Healthy Combo Packs</h2>
        </div>

        {/* PRODUCTS */}
        <div
          className="combo-products-scroll"
          ref={scrollRef}
        >
          {comboProducts.map((product) => (
            <ComboProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* BOTTOM AREA */}
        <div className="combo-bottom-row">
          <div className="combo-scroll-line">
            <span />
          </div>

          <Link
            to="/shop?category=health-combo"
            className="combo-see-all"
          >
            See All Combo Packs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComboPacks;