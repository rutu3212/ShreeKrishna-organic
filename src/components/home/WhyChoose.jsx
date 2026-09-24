import React from "react";
import {
  Leaf,
  Settings,
  ClipboardCheck,
  Tractor,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Native Sourcing",
    description:
      "Highest quality raw material sourced from native regions across India.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Traditional Processing",
    description:
      "Minimally processed using time-tested traditional methods for maximum nutrition.",
    icon: Settings,
  },
  {
    id: 3,
    title: "Extensive Quality Checks",
    description:
      "Every product goes through strict quality checks to ensure purity and consistency.",
    icon: ClipboardCheck,
  },
  {
    id: 4,
    title: "Better Rural Lives",
    description:
      "We support farming communities and encourage better livelihoods through every product.",
    icon: Tractor,
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose-section">

      {/* Decorative background elements */}

      <div className="why-decoration why-decoration-left">
        <Leaf size={180} strokeWidth={0.7} />
      </div>

      <div className="why-decoration why-decoration-right">
        <Leaf size={180} strokeWidth={0.7} />
      </div>

      <div className="why-choose-container">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="why-choose-heading">

          <div className="why-heading-decoration">
            <span></span>

            <Leaf
              size={24}
              strokeWidth={1.6}
            />

            <span></span>
          </div>

          <h2>
            Why Choose Shree Krishna?
          </h2>

          <p>
            Pure choices for a healthier and more natural lifestyle.
          </p>

          <div className="why-heading-line"></div>
        </div>

        {/* =========================
            FEATURES
        ========================== */}

        <div className="why-choose-grid">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                className="why-feature"
                key={feature.id}
              >

                {/* Icon */}

                <div className="why-icon-wrapper">
                  <div className="why-icon-circle">
                    <Icon
                      size={58}
                      strokeWidth={1.4}
                    />
                  </div>
                </div>

                {/* Content */}

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

                {/* Bottom accent */}

                <div className="why-feature-accent"></div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;