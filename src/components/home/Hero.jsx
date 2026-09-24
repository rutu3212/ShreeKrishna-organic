import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Leaf,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   HERO SLIDES
========================================================= */

const HERO_SLIDES = [
  {
    id: 1,

    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1800&q=90",

    smallTitle: "100% PURE & TRADITIONAL",

    title: "Wood-Pressed Oils",

    subtitle: "Purity You Can Taste",

    description:
      "Traditionally extracted at low temperature to preserve natural nutrition, aroma and authentic taste.",

    button: "SHOP NOW",

    link: "/shop?category=wood-press-oil",

    accent: "Natural goodness from every drop.",
  },

  {
    id: 2,

    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1800&q=90",

    smallTitle: "TRADITIONALLY PREPARED",

    title: "Pure A2 Cow Ghee",

    subtitle: "Golden Goodness For Your Family",

    description:
      "Made using traditional methods for rich aroma, authentic flavour and wholesome goodness.",

    button: "EXPLORE GHEE",

    link: "/shop?category=a2-ghee",

    accent: "Tradition in every golden spoon.",
  },

  {
    id: 3,

    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=90",

    smallTitle: "FROM FARM TO YOUR HOME",

    title: "Naturally Sourced",

    subtitle: "Ingredients With Honest Origins",

    description:
      "Carefully selected ingredients sourced with a focus on purity, quality and traditional food practices.",

    button: "EXPLORE PRODUCTS",

    link: "/shop",

    accent: "Simple ingredients. Honest food.",
  },
];

/* =========================================================
   HERO COMPONENT
========================================================= */

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => {
        return (current + 1) % HERO_SLIDES.length;
      });
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = () => {
    setCurrentSlide((current) => {
      return (current + 1) % HERO_SLIDES.length;
    });
  };

  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const previousSlide = () => {
    setCurrentSlide((current) => {
      return (
        (current - 1 + HERO_SLIDES.length) %
        HERO_SLIDES.length
      );
    });
  };

  /* =======================================================
     CURRENT SLIDE
  ======================================================= */

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-[#f1f5e9]">

      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            scale: 1.06,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
            "
          />

          {/* =================================================
              IMAGE OVERLAY
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#eef4e8]
              via-[#eef4e8]/90
              via-[45%]
              to-transparent
            "
          />

          {/* Additional subtle overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/10
              via-transparent
              to-transparent
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          HERO CONTENT CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1450px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        "
      >

        <div
          className="
            min-h-[520px]
            sm:min-h-[570px]
            lg:min-h-[650px]

            flex
            items-center
          "
        >

          {/* =================================================
              CONTENT
          ================================================= */}

          <AnimatePresence mode="wait">

            <motion.div
              key={slide.id}
              className="
                w-full
                max-w-[680px]
                py-16
                sm:py-20
                lg:py-24
              "

              initial={{
                opacity: 0,
                x: -45,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              exit={{
                opacity: 0,
                x: -25,
              }}

              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
            >

              {/* =================================================
                  SMALL LABEL
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.6,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2

                  px-4
                  py-2

                  rounded-full

                  bg-[#596443]
                  text-white

                  text-[10px]
                  sm:text-xs

                  font-semibold

                  tracking-[0.18em]

                  shadow-sm
                "
              >

                <Leaf
                  size={14}
                  strokeWidth={2}
                />

                <span>
                  {slide.smallTitle}
                </span>

              </motion.div>

              {/* =================================================
                  MAIN TITLE
              ================================================= */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.7,
                }}
                className="
                  mt-6

                  text-[42px]
                  leading-[1.02]

                  sm:text-5xl
                  md:text-6xl
                  lg:text-[76px]

                  font-serif
                  font-bold

                  tracking-[-1.5px]

                  text-[#34482f]
                "
              >
                {slide.title}
              </motion.h1>

              {/* =================================================
                  SUBTITLE
              ================================================= */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                }}
                className="
                  mt-4

                  text-2xl
                  sm:text-3xl
                  lg:text-[38px]

                  leading-tight

                  font-serif
                  font-medium

                  text-[#27695e]
                "
              >
                {slide.subtitle}
              </motion.h2>

              {/* =================================================
                  DECORATIVE LINE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: 1,
                  width: 75,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                }}
                className="
                  h-[3px]

                  mt-5

                  rounded-full

                  bg-[#d7bf76]
                "
              />

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.7,
                }}
                className="
                  mt-5

                  max-w-[570px]

                  text-sm
                  sm:text-base
                  lg:text-lg

                  leading-7

                  text-[#59615a]
                "
              >
                {slide.description}
              </motion.p>

              {/* =================================================
                  ACCENT TEXT
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                }}
                className="
                  mt-4

                  text-sm

                  font-medium

                  italic

                  text-[#806c43]
                "
              >
                {slide.accent}
              </motion.p>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.7,
                }}
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-4

                  mt-8
                "
              >

                {/* Primary button */}

                <Link
                  to={slide.link}
                  className="
                    group

                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    min-h-[50px]

                    px-7
                    sm:px-9

                    rounded-full

                    bg-[#27695e]

                    text-white

                    text-sm

                    font-bold

                    tracking-wide

                    shadow-lg
                    shadow-[#27695e]/15

                    transition-all
                    duration-300

                    hover:bg-[#1c554c]
                    hover:-translate-y-1

                    hover:shadow-xl
                  "
                >

                  <ShoppingBag
                    size={18}
                    strokeWidth={2}
                  />

                  <span>
                    {slide.button}
                  </span>

                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />

                </Link>

                {/* Secondary button */}

                <Link
                  to="/shop"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    min-h-[50px]

                    px-7

                    rounded-full

                    border
                    border-[#596443]/30

                    bg-white/60

                    backdrop-blur-sm

                    text-[#3e4d31]

                    text-sm

                    font-semibold

                    transition-all
                    duration-300

                    hover:bg-white
                    hover:border-[#596443]
                    hover:-translate-y-1
                  "
                >
                  Explore Collection
                </Link>

              </motion.div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

      {/* =====================================================
          SLIDE NAVIGATION
      ===================================================== */}

      {/* Previous */}

      <motion.button
        type="button"
        onClick={previousSlide}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          absolute
          z-20

          left-3
          sm:left-5
          lg:left-8

          top-1/2
          -translate-y-1/2

          w-10
          h-10

          sm:w-11
          sm:h-11

          lg:w-12
          lg:h-12

          rounded-full

          bg-white/75
          hover:bg-white

          backdrop-blur-sm

          border
          border-white/50

          text-[#3e4d31]

          shadow-lg

          flex
          items-center
          justify-center

          transition-colors
          duration-300
        "
        aria-label="Previous slide"
      >
        <ChevronLeft
          size={21}
          strokeWidth={1.8}
        />
      </motion.button>

      {/* Next */}

      <motion.button
        type="button"
        onClick={nextSlide}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          absolute
          z-20

          right-3
          sm:right-5
          lg:right-8

          top-1/2
          -translate-y-1/2

          w-10
          h-10

          sm:w-11
          sm:h-11

          lg:w-12
          lg:h-12

          rounded-full

          bg-white/75
          hover:bg-white

          backdrop-blur-sm

          border
          border-white/50

          text-[#3e4d31]

          shadow-lg

          flex
          items-center
          justify-center

          transition-colors
          duration-300
        "
        aria-label="Next slide"
      >
        <ChevronRight
          size={21}
          strokeWidth={1.8}
        />
      </motion.button>

      {/* =====================================================
          SLIDE INDICATORS
      ===================================================== */}

      <div
        className="
          absolute
          z-20

          bottom-7
          sm:bottom-8

          left-1/2

          -translate-x-1/2

          flex
          items-center

          gap-2
        "
      >

        {HERO_SLIDES.map((item, index) => (

          <button
            type="button"
            key={item.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              index === currentSlide
                ? "true"
                : "false"
            }
            className="
              group

              h-2.5

              rounded-full

              overflow-hidden

              transition-all
              duration-500
            "
          >

            <span
              className={`
                block
                h-full
                rounded-full
                transition-all
                duration-500

                ${
                  index === currentSlide
                    ? "w-10 bg-[#27695e]"
                    : "w-2.5 bg-white/80 group-hover:bg-white"
                }
              `}
            />

          </button>

        ))}

      </div>

      {/* =====================================================
          BOTTOM DECORATIVE SHAPE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-10

          bg-gradient-to-t
          from-[#f8f5ed]/30
          to-transparent

          pointer-events-none
        "
      />

    </section>
  );
};

export default Hero;