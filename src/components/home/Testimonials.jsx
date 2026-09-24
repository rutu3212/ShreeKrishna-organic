
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import TestimonialCard from "./TestimonialCard";

import testimonials from "../data/testimonials";

import "../../styles/testimonials.css";


const Testimonials = () => {

  const sliderRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);


  /*
   * Number of cards visible approximately
   */
  const getCardsPerView = () => {

    if (window.innerWidth <= 700) {
      return 1;
    }

    if (window.innerWidth <= 1100) {
      return 2;
    }

    return 3;
  };


  /*
   * Scroll to selected group
   */
  const scrollToIndex = (index) => {

    const slider = sliderRef.current;

    if (!slider) {
      return;
    }


    const card = slider.querySelector(
      ".testimonial-card"
    );

    if (!card) {
      return;
    }


    const gap = 24;

    const cardWidth =
      card.offsetWidth + gap;


    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });


    setActiveIndex(index);
  };


  /*
   * Previous
   */
  const handlePrevious = () => {

    const cardsPerView =
      getCardsPerView();

    const maxIndex = Math.max(
      0,
      testimonials.length - cardsPerView
    );


    setActiveIndex((current) => {

      const next =
        current <= 0
          ? maxIndex
          : current - 1;


      setTimeout(() => {
        scrollToIndex(next);
      }, 0);


      return next;
    });
  };


  /*
   * Next
   */
  const handleNext = () => {

    const cardsPerView =
      getCardsPerView();

    const maxIndex = Math.max(
      0,
      testimonials.length - cardsPerView
    );


    setActiveIndex((current) => {

      const next =
        current >= maxIndex
          ? 0
          : current + 1;


      setTimeout(() => {
        scrollToIndex(next);
      }, 0);


      return next;
    });
  };


  /*
   * Detect manual scrolling
   */
  const handleScroll = () => {

    const slider = sliderRef.current;

    if (!slider) {
      return;
    }


    const card = slider.querySelector(
      ".testimonial-card"
    );

    if (!card) {
      return;
    }


    const gap = 24;

    const cardWidth =
      card.offsetWidth + gap;


    const index = Math.round(
      slider.scrollLeft / cardWidth
    );


    setActiveIndex(index);
  };


  /*
   * Auto slide
   */
  useEffect(() => {

    const interval = setInterval(() => {
      handleNext();
    }, 6000);


    return () => {
      clearInterval(interval);
    };

  }, []);


  return (
    <section className="testimonials-section">

      <div className="testimonials-container">


        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="testimonials-heading">

          <h2>
            What Do Our Customers Say
          </h2>

        </div>


        {/* ==========================================
            CARDS
        ========================================== */}

        <div
          className="testimonials-slider"
          ref={sliderRef}
          onScroll={handleScroll}
        >

          {testimonials.map(
            (testimonial) => (

              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />

            )
          )}

        </div>


        {/* ==========================================
            CONTROLS
        ========================================== */}

        <div className="testimonials-controls">


          {/* PREVIOUS */}

          <button
            type="button"
            className="testimonial-arrow"
            onClick={handlePrevious}
            aria-label="Previous testimonials"
          >

            <ChevronLeft
              size={19}
            />

          </button>


          {/* DOTS */}

          <div className="testimonial-dots">

            {testimonials.map(
              (testimonial, index) => (

                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`Go to testimonial ${
                    index + 1
                  }`}
                  className={`testimonial-dot ${
                    activeIndex === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    scrollToIndex(index)
                  }
                />

              )
            )}

          </div>


          {/* NEXT */}

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-next"
            onClick={handleNext}
            aria-label="Next testimonials"
          >

            <ChevronRight
              size={19}
            />

          </button>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;