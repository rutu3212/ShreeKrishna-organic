import React from "react";
import { Leaf, ArrowRight } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "From Native Regions",
    subtitle: "To Naturally Better Ingredients",
    description:
      "We carefully source ingredients from regions known for their traditional farming practices and natural quality.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    title: "What Do We Look For?",
    subtitle: "Not Just Yield. Not Just Cost.",
    description:
      "We look for authentic ingredients with natural flavour, nutrition, purity and traditional value.",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    title: "Purity In. Impurities Out.",
    subtitle: "Only The Best Makes The Cut.",
    description:
      "Every ingredient is carefully selected so that what reaches your family is clean, natural and trustworthy.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    title: "From Healthy Farms",
    subtitle: "To Your Family's Table",
    description:
      "We believe better ingredients begin with responsible farming, healthy soil and naturally grown produce.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=90",
  },
];

const NativeIngredients = () => {
  return (
    <section className="native-section">
      {/* Decorative leaves */}
      <div className="native-decoration native-decoration-left">
        <Leaf size={220} />
      </div>

      <div className="native-decoration native-decoration-right">
        <Leaf size={220} />
      </div>

      <div className="native-container">

        {/* Heading */}
        <div className="native-heading">

          <div className="native-heading-top">
            <span></span>

            <Leaf size={22} />

            <span></span>
          </div>

          <h2>Native Ingredients. No Substitutes.</h2>

          <p>
            We believe great products begin with great ingredients.
          </p>

          <div className="native-heading-line"></div>
        </div>

        {/* Cards */}
        <div className="native-grid">

          {cards.map((card) => (
            <article
              className="native-card"
              key={card.id}
            >
              <img
                src={card.image}
                alt={card.title}
                className="native-image"
              />

              <div className="native-overlay"></div>

              <div className="native-content">

                <span className="native-number">
                  0{card.id}
                </span>

                <h3>{card.title}</h3>

                <h4>{card.subtitle}</h4>

                <p>{card.description}</p>

                <div className="native-arrow">
                  <ArrowRight size={18} />
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom message */}
        <div className="native-bottom">
          <Leaf size={18} />

          <span>
            Naturally sourced. Traditionally respected.
          </span>

          <Leaf size={18} />
        </div>

      </div>
    </section>
  );
};

export default NativeIngredients;