import React, { useState } from "react";
import "../../styles.css"
const slides = ["", "", ""];

export default function LandingPageModal({ onClose }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
    else onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✕</button>

        <img src="modal-image-1.png" alt="Discover Chefify" className="modal-title-img" />

        <p className="subtitle">
          Easy and delicious cooking instructions right here.
        </p>

        <img src={slides[index]} className="modal-image" />

        <div className="dots">
          {slides.map((_, i) => (
            <span key={i} className={i === index ? "dot active" : "dot"} />
          ))}
        </div>

        <button className="next-btn" onClick={next}>Next</button>
        <button className="skip-btn" onClick={onClose}>Skip</button>
      </div>
    </div>
  );
}