import React from "react";
import { Truck, Sparkles } from "lucide-react";

const AnnouncementBar = () => {
  const announcementContent = (
    <>
      <div className="announcement-item">
        <Truck className="announcement-icon" />

        <span>
          Free Shipping on Orders Above{" "}
          <strong>₹999</strong>
        </span>
      </div>

      <span className="announcement-separator">•</span>

      <div className="announcement-item">
        <Sparkles className="announcement-icon announcement-gold" />

        <span>
          Use Code{" "}
          <strong className="announcement-code">
            SHREEKRISHNA10
          </strong>{" "}
          for 10% Off
        </span>
      </div>

      <span className="announcement-separator">•</span>

      <div className="announcement-item">
        <Truck className="announcement-icon" />

        <span>
          Pure Tradition, Naturally
        </span>
      </div>

      <span className="announcement-separator">•</span>

      <div className="announcement-item">
        <Sparkles className="announcement-icon announcement-gold" />

        <span>
          100% Natural & Traditional
        </span>
      </div>

      <span className="announcement-separator">•</span>
    </>
  );

  return (
    <div className="announcement-bar">

      <div className="announcement-track">

        {/* First copy */}
        <div className="announcement-content">
          {announcementContent}
        </div>

        {/* Second copy - creates seamless loop */}
        <div
          className="announcement-content"
          aria-hidden="true"
        >
          {announcementContent}
        </div>

      </div>

    </div>
  );
};

export default AnnouncementBar;