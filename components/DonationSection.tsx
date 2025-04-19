'use client';

import { useEffect } from "react";

const DonationSection: React.FC = () => {
  useEffect(() => {
    // Load Ko-fi script
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).kofiWidgetOverlay !== "undefined") {
        (window as any).kofiWidgetOverlay.draw("areszyn", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Tip Us",
          "floating-chat.donateButton.background-color": "#f45d22",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
      <iframe
        src="https://nowpayments.io/embeds/donation-widget?api_key=93H6N7Y-V304Y6S-H3E3M38-2SEWBQZ"
        width="346"
        height="623"
        frameBorder="0"
        scrolling="no"
        style={{ overflowY: "hidden", border: "none" }}
        title="Donate with NOWPayments"
      >
        Can't load widget
      </iframe>
    </div>
  );
};

export default DonationSection;
