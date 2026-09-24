import React from "react";

import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) {
    return null;
  }

  return (
    <article className="testimonial-card">

      {/* REVIEW */}
      <div className="testimonial-review">
        {testimonial.review}
      </div>


      {/* CUSTOMER */}
      <div className="testimonial-customer">

        {/* IMAGE */}
        <div className="testimonial-image-wrapper">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
            loading="lazy"
          />
        </div>


        {/* NAME + RATING */}
        <div className="testimonial-customer-info">

          <h3 className="testimonial-name">
            {testimonial.name}
          </h3>


          <div className="testimonial-rating">

            {Array.from({
              length: testimonial.rating || 5,
            }).map((_, index) => (
              <Star
                key={index}
                size={14}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}

          </div>

        </div>

      </div>

    </article>
  );
};

export default TestimonialCard;