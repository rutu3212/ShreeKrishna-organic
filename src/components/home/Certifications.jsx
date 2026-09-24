import React from "react";

import certifications from "../data/certifications";

import "../../styles/certifications.css";


const CertificationBadge = ({ certification }) => {
  const {
    type,
    title,
    subtitle,
  } = certification;


  /* =========================================
     ISO
  ========================================= */

  if (type === "iso") {
    return (
      <div className="certification-item">

        <div className="certification-iso">

          <div className="iso-globe">
            <span />
            <span />
            <span />
          </div>

          <div className="iso-text">
            {title}
          </div>

        </div>

        <div className="iso-year">
          {subtitle}
        </div>

      </div>
    );
  }


  /* =========================================
     FSSAI
  ========================================= */

  if (type === "fssai") {
    return (
      <div className="certification-item">

        <div className="certification-fssai">

          <div className="fssai-symbol">
            <span />
            <span />
          </div>

          <div className="fssai-text">
            fssai
          </div>

        </div>

      </div>
    );
  }


  /* =========================================
     FDA
  ========================================= */

  if (type === "fda") {
    return (
      <div className="certification-item">

        <div className="certification-fda">

          <div className="fda-symbol">
            FDA
          </div>

        </div>

      </div>
    );
  }


  /* =========================================
     GMP
  ========================================= */

  if (type === "gmp") {
    return (
      <div className="certification-item">

        <div className="certification-seal">

          <div className="seal-top">
            GOOD MANUFACTURING
          </div>

          <div className="seal-circle">

            <strong>
              GMP
            </strong>

            <span>
              CERTIFIED
            </span>

          </div>

          <div className="seal-bottom">
            PRACTICE
          </div>

        </div>

      </div>
    );
  }


  /* =========================================
     INTERNATIONAL ACCREDITATION
  ========================================= */

  if (type === "accreditation") {
    return (
      <div className="certification-item">

        <div className="certification-seal accreditation-seal">

          <div className="seal-top">
            INTERNATIONAL ACCREDITATION
          </div>

          <div className="accreditation-symbol">
            ✓
          </div>

          <div className="seal-bottom">
            CERTIFIED
          </div>

        </div>

      </div>
    );
  }


  /* =========================================
     HACCP
  ========================================= */

  if (type === "haccp") {
    return (
      <div className="certification-item">

        <div className="certification-seal haccp-seal">

          <div className="seal-top">
            CERTIFIED
          </div>

          <div className="haccp-symbol">
            ✦
          </div>

          <strong>
            HACCP
          </strong>

          <div className="seal-bottom">
            CERTIFIED
          </div>

        </div>

      </div>
    );
  }


  /* =========================================
     IAF
  ========================================= */

  if (type === "iaf") {
    return (
      <div className="certification-item">

        <div className="certification-seal iaf-seal">

          <div className="seal-top">
            INTERNATIONAL
          </div>

          <strong>
            IAF
          </strong>

          <div className="iaf-symbol">
            ✓
          </div>

          <div className="seal-bottom">
            ACCREDITATION FORUM
          </div>

        </div>

      </div>
    );
  }


  return null;
};


const Certifications = () => {
  return (
    <section className="certifications-section">

      <div className="certifications-container">

        <div className="certifications-scroll">

          {certifications.map(
            (certification) => (
              <CertificationBadge
                key={certification.id}
                certification={certification}
              />
            )
          )}

        </div>

      </div>

    </section>
  );
};


export default Certifications;