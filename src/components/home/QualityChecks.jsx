import React from "react";

const qualityCards = [
  {
    title: "In-House Lab Testing According to FSSAI Parameters",
    description: "Unlike others, we don't outsource safety.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "40+ Quality Checks. Every Single Batch.",
    description:
      "Fatty acid profile. Texture. Moisture. Adulteration. Nothing gets missed.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Extensive Quality Checks",
    description:
      "We test at sourcing, processing, and packaging. For purity, aroma, and nutrition.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "See the Proof. Don't Just Trust Us.",
    description:
      "Lab reports for every batch. Because real trust is built on transparency.",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=85",
    note: "(This representation is for reference only)",
  },
];

const QualityChecks = () => {
  return (
    <section className="quality-checks-section">
      {/* Decorative background */}
      <div className="quality-decoration quality-decoration-left">
        ❧
      </div>

      <div className="quality-decoration quality-decoration-right">
        ❧
      </div>

      <div className="quality-checks-container">

        {/* Heading */}
        <div className="quality-checks-heading">
          <h2>Only Perfect Makes The Cut</h2>
        </div>

        {/* Cards */}
        <div className="quality-checks-grid">
          {qualityCards.map((card, index) => (
            <article
              className="quality-check-card"
              key={index}
            >
              {/* Decorative sun */}
              <span className="quality-sun">
                ☀
              </span>

              {/* Text */}
              <div className="quality-card-content">
                <h3>{card.title}</h3>

                <p>{card.description}</p>
              </div>

              {/* Image */}
              <div className="quality-card-image">
                <img
                  src={card.image}
                  alt={card.title}
                />

                {card.note && (
                  <span className="quality-card-note">
                    {card.note}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityChecks;