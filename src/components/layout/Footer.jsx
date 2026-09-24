// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Send,
//   ChevronRight,
// } from "lucide-react";

// import "../../styles/footer.css";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (event) => {
//     event.preventDefault();

//     if (!email.trim()) {
//       return;
//     }

//     alert("Thank you for subscribing!");

//     setEmail("");
//   };

//   return (
//     <footer className="site-footer">

//       {/* =====================================================
//           MAIN FOOTER
//       ===================================================== */}

//       <div className="footer-main">

//         <div className="footer-container">

//           {/* =================================================
//               BRAND COLUMN
//           ================================================= */}

//           <div className="footer-brand">

//             <Link
//               to="/"
//               className="footer-logo"
//             >
//               <span className="footer-logo-main">
//                 ShreeKrishna
//               </span>

//               <span className="footer-logo-sub">
//                 ORGANICS
//               </span>
//             </Link>


//             <p className="footer-tagline">
//               Pure Tradition, Naturally.
//             </p>


//             <p className="footer-description">
//               Bringing the goodness of traditionally
//               crafted, natural and wholesome products
//               directly to your home.
//             </p>


//             {/* Social buttons */}

//             <div className="footer-social">

//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="footer-social-link"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <rect
//                     x="3"
//                     y="3"
//                     width="18"
//                     height="18"
//                     rx="5"
//                   />

//                   <circle
//                     cx="12"
//                     cy="12"
//                     r="4"
//                   />

//                   <circle
//                     cx="17.5"
//                     cy="6.5"
//                     r="1"
//                     fill="currentColor"
//                     stroke="none"
//                   />
//                 </svg>
//               </a>


//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="footer-social-link"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z"
//                   />
//                 </svg>
//               </a>


//               <a
//                 href="#"
//                 aria-label="YouTube"
//                 className="footer-social-link"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M21.5 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.5.5a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.5 4.8a2.8 2.8 0 0 0 2 2c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a2.8 2.8 0 0 0 2-2c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8Z"
//                   />

//                   <path
//                     d="m10 15.5 5-3.5-5-3.5v7Z"
//                     fill="white"
//                     stroke="none"
//                   />
//                 </svg>
//               </a>


//               <a
//                 href="#"
//                 aria-label="WhatsApp"
//                 className="footer-social-link"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.2 1.6 6L.1 24l6.2-1.6a12 12 0 0 0 5.8 1.5h.1c6.6 0 11.8-5.3 11.8-11.9 0-3.2-1.2-6.2-3.5-8.5Z"
//                   />

//                   <path
//                     d="M8.5 6.8c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .4-.3.3-1.3 1.2-1.3 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 4 6.1 5.5 3 1.3 3.6 1 4.2.9.6-.1 2- .8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4-.4-.2-2-.9-2.3-1-.3-.1-.5-.2-.7.2-.2.4-.8 1-1 1.2-.2.2-.4.2-.8.1-.4-.2-1.4-.5-2.6-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.8-.9-2.4Z"
//                     fill="white"
//                     stroke="none"
//                   />
//                 </svg>
//               </a>

//             </div>

//           </div>


//           {/* =================================================
//               SHOP
//           ================================================= */}

//           <div className="footer-column">

//             <h3 className="footer-heading">
//               Shop
//             </h3>


//             <ul className="footer-links">

//               <li>
//                 <Link to="/shop">
//                   <ChevronRight size={15} />
//                   All Products
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/shop?category=groundnut-oil">
//                   <ChevronRight size={15} />
//                   Wood Pressed Oils
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/shop?category=gir-ghee">
//                   <ChevronRight size={15} />
//                   A2 Ghee
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/shop?category=health-supplement">
//                   <ChevronRight size={15} />
//                   Health Supplements
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/shop?category=jaggery">
//                   <ChevronRight size={15} />
//                   Jaggery
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/shop?category=ghee-combo">
//                   <ChevronRight size={15} />
//                   Health Combos
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/shop?category=hot-deals">
//                   <ChevronRight size={15} />
//                   Hot Deals
//                 </Link>
//               </li>

//             </ul>

//           </div>


//           {/* =================================================
//               QUICK LINKS
//           ================================================= */}

//           <div className="footer-column">

//             <h3 className="footer-heading">
//               Quick Links
//             </h3>


//             <ul className="footer-links">

//               <li>
//                 <Link to="/">
//                   <ChevronRight size={15} />
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/shop">
//                   <ChevronRight size={15} />
//                   Shop
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/about">
//                   <ChevronRight size={15} />
//                   About Us
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/contact">
//                   <ChevronRight size={15} />
//                   Contact Us
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/faq">
//                   <ChevronRight size={15} />
//                   FAQs
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/track-order">
//                   <ChevronRight size={15} />
//                   Track Order
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/offers">
//                   <ChevronRight size={15} />
//                   Offers
//                 </Link>
//               </li>

//             </ul>

//           </div>


//           {/* =================================================
//               CUSTOMER CARE
//           ================================================= */}

//           <div className="footer-column">

//             <h3 className="footer-heading">
//               Customer Care
//             </h3>


//             <ul className="footer-links">

//               <li>
//                 <Link to="/shipping-policy">
//                   <ChevronRight size={15} />
//                   Shipping Policy
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/return-policy">
//                   <ChevronRight size={15} />
//                   Return & Refund
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/privacy-policy">
//                   <ChevronRight size={15} />
//                   Privacy Policy
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/terms">
//                   <ChevronRight size={15} />
//                   Terms & Conditions
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/cancellation-policy">
//                   <ChevronRight size={15} />
//                   Cancellation Policy
//                 </Link>
//               </li>

//             </ul>


//             <div className="footer-contact">

//               <a href="tel:+919876543210">

//                 <Phone size={17} />

//                 <span>
//                   +91 98765 43210
//                 </span>

//               </a>


//               <a href="mailto:care@shreekrishnaorganics.com">

//                 <Mail size={17} />

//                 <span>
//                   care@shreekrishnaorganics.com
//                 </span>

//               </a>

//             </div>

//           </div>


//           {/* =================================================
//               NEWSLETTER
//           ================================================= */}

//           <div className="footer-newsletter">

//             <h3 className="footer-heading">
//               Stay Connected
//             </h3>


//             <p className="newsletter-description">
//               Get healthy living tips, product updates,
//               exclusive offers and more directly in
//               your inbox.
//             </p>


//             <form
//               className="newsletter-form"
//               onSubmit={handleSubscribe}
//             >

//               <div className="newsletter-input-wrapper">

//                 <Mail size={18} />

//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   value={email}
//                   onChange={(event) =>
//                     setEmail(event.target.value)
//                   }
//                   required
//                 />

//               </div>


//               <button
//                 type="submit"
//                 aria-label="Subscribe"
//               >
//                 <Send size={18} />
//               </button>

//             </form>


//             <div className="footer-location">

//               <MapPin size={18} />

//               <span>
//                 Made with care in India
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           TRUST STRIP
//       ===================================================== */}

//       <div className="footer-trust-strip">

//         <div className="footer-trust-container">

//           <div className="footer-trust-item">
//             <span className="trust-icon">
//               ✓
//             </span>

//             <span>
//               100% Natural Products
//             </span>
//           </div>


//           <div className="footer-trust-item">
//             <span className="trust-icon">
//               ✓
//             </span>

//             <span>
//               Traditional Processing
//             </span>
//           </div>


//           <div className="footer-trust-item">
//             <span className="trust-icon">
//               ✓
//             </span>

//             <span>
//               Quality Tested
//             </span>
//           </div>


//           <div className="footer-trust-item">
//             <span className="trust-icon">
//               ✓
//             </span>

//             <span>
//               Secure Payments
//             </span>
//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           BOTTOM FOOTER
//       ===================================================== */}

//       <div className="footer-bottom">

//         <div className="footer-bottom-container">

//           <p>
//             © {new Date().getFullYear()} ShreeKrishna
//             Organics. All Rights Reserved.
//           </p>


//           <div className="footer-bottom-links">

//             <Link to="/privacy-policy">
//               Privacy
//             </Link>

//             <span>•</span>

//             <Link to="/terms">
//               Terms
//             </Link>

//             <span>•</span>

//             <Link to="/contact">
//               Contact
//             </Link>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// };


// export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronRight,
} from "lucide-react";

import "../../styles/footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    alert("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <footer className="site-footer">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="footer-container">

          {/* =================================================
              BRAND COLUMN
          ================================================= */}

          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >
              <span className="footer-logo-main">
                ShreeKrishna
              </span>

              <span className="footer-logo-sub">
                ORGANICS
              </span>
            </Link>

            <p className="footer-tagline">
              Pure Tradition, Naturally.
            </p>

            <p className="footer-description">
              Bringing the goodness of traditionally
              crafted, natural and wholesome products
              directly to your home.
            </p>

            {/* Social buttons */}

            <div className="footer-social">

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="footer-social-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="footer-social-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* YouTube */}

              <a
                href="#"
                aria-label="YouTube"
                className="footer-social-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M21.5 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.5.5a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.5 4.8a2.8 2.8 0 0 0 2 2c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a2.8 2.8 0 0 0 2-2c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8Z"
                    fill="currentColor"
                  />

                  <path
                    d="M10 15.5l5-3.5-5-3.5v7Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* WhatsApp */}

              <a
                href="#"
                aria-label="WhatsApp"
                className="footer-social-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {/* WhatsApp outer icon */}

                  <path
                    d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.2 1.6 6L.1 24l6.2-1.6a12 12 0 0 0 5.8 1.5h.1c6.6 0 11.8-5.3 11.8-11.9 0-3.2-1.2-6.2-3.5-8.5Z"
                    fill="currentColor"
                  />

                  {/* WhatsApp phone */}

                  <path
                    d="M8.5 6.8c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .4-.3.3-1.3 1.2-1.3 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 4 6.1 5.5 3 1.3 3.6 1 4.2.9.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4-.4-.2-2-.9-2.3-1-.3-.1-.5-.2-.7.2-.2.4-.8 1-1 1.2-.2.2-.4.2-.8.1-.4-.2-1.4-.5-2.6-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.8-.9-2.4Z"
                    fill="white"
                  />
                </svg>
              </a>

            </div>

          </div>

          {/* =================================================
              SHOP
          ================================================= */}

          <div className="footer-column">

            <h3 className="footer-heading">
              Shop
            </h3>

            <ul className="footer-links">

              <li>
                <Link to="/shop">
                  <ChevronRight size={15} />
                  All Products
                </Link>
              </li>

              <li>
                <Link to="/shop?category=groundnut-oil">
                  <ChevronRight size={15} />
                  Wood Pressed Oils
                </Link>
              </li>

              <li>
                <Link to="/shop?category=gir-ghee">
                  <ChevronRight size={15} />
                  A2 Ghee
                </Link>
              </li>

              <li>
                <Link to="/shop?category=health-supplement">
                  <ChevronRight size={15} />
                  Health Supplements
                </Link>
              </li>

              <li>
                <Link to="/shop?category=jaggery">
                  <ChevronRight size={15} />
                  Jaggery
                </Link>
              </li>

              <li>
                <Link to="/shop?category=ghee-combo">
                  <ChevronRight size={15} />
                  Health Combos
                </Link>
              </li>

              <li>
                <Link to="/shop?category=hot-deals">
                  <ChevronRight size={15} />
                  Hot Deals
                </Link>
              </li>

            </ul>

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="footer-column">

            <h3 className="footer-heading">
              Quick Links
            </h3>

            <ul className="footer-links">

              <li>
                <Link to="/">
                  <ChevronRight size={15} />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/shop">
                  <ChevronRight size={15} />
                  Shop
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <ChevronRight size={15} />
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <ChevronRight size={15} />
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/faq">
                  <ChevronRight size={15} />
                  FAQs
                </Link>
              </li>

              <li>
                <Link to="/track-order">
                  <ChevronRight size={15} />
                  Track Order
                </Link>
              </li>

              <li>
                <Link to="/offers">
                  <ChevronRight size={15} />
                  Offers
                </Link>
              </li>

            </ul>

          </div>

          {/* =================================================
              CUSTOMER CARE
          ================================================= */}

          <div className="footer-column">

            <h3 className="footer-heading">
              Customer Care
            </h3>

            <ul className="footer-links">

              <li>
                <Link to="/shipping-policy">
                  <ChevronRight size={15} />
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link to="/return-policy">
                  <ChevronRight size={15} />
                  Return & Refund
                </Link>
              </li>

              <li>
                <Link to="/privacy-policy">
                  <ChevronRight size={15} />
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms">
                  <ChevronRight size={15} />
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link to="/cancellation-policy">
                  <ChevronRight size={15} />
                  Cancellation Policy
                </Link>
              </li>

            </ul>

            <div className="footer-contact">

              <a href="tel:+919876543210">
                <Phone size={17} />

                <span>
                  +91 98765 43210
                </span>
              </a>

              <a href="mailto:care@shreekrishnaorganics.com">
                <Mail size={17} />

                <span>
                  care@shreekrishnaorganics.com
                </span>
              </a>

            </div>

          </div>

          {/* =================================================
              NEWSLETTER
          ================================================= */}

          <div className="footer-newsletter">

            <h3 className="footer-heading">
              Stay Connected
            </h3>

            <p className="newsletter-description">
              Get healthy living tips, product updates,
              exclusive offers and more directly in
              your inbox.
            </p>

            <form
              className="newsletter-form"
              onSubmit={handleSubscribe}
            >

              <div className="newsletter-input-wrapper">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />

              </div>

              <button
                type="submit"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>

            </form>

            <div className="footer-location">

              <MapPin size={18} />

              <span>
                Made with care in India
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <div className="footer-trust-strip">

        <div className="footer-trust-container">

          <div className="footer-trust-item">
            <span className="trust-icon">
              ✓
            </span>

            <span>
              100% Natural Products
            </span>
          </div>

          <div className="footer-trust-item">
            <span className="trust-icon">
              ✓
            </span>

            <span>
              Traditional Processing
            </span>
          </div>

          <div className="footer-trust-item">
            <span className="trust-icon">
              ✓
            </span>

            <span>
              Quality Tested
            </span>
          </div>

          <div className="footer-trust-item">
            <span className="trust-icon">
              ✓
            </span>

            <span>
              Secure Payments
            </span>
          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM FOOTER
      ===================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} ShreeKrishna
            Organics. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <Link to="/privacy-policy">
              Privacy
            </Link>

            <span>•</span>

            <Link to="/terms">
              Terms
            </Link>

            <span>•</span>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;