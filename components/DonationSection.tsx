'use client';

import { useEffect } from "react";

const DonationSection = () => {
  useEffect(() => {
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
    <div
      style={{
        position: "fixed",
        bottom: "90px",
        left: "20px",
        zIndex: 1000,
      }}
    >
      <a
        href="https://nowpayments.io/donation?api_key=93H6N7Y-V304Y6S-H3E3M38-2SEWBQZ"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://nowpayments.io/images/embeds/donation-button-black.svg"
          alt="Crypto donation button by NOWPayments"
          width={180}
        />
      </a>
    </div>
  );
};

export default DonationSection;
