import React from "react";
import "../../styles.css";

export default function LandingPageLoginModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <div className="login-left">
          <img src="login-image-1.png" />
          <div className="login-overlay-text">
            "Embrace the art of cooking, where flavors come alive!"
          </div>
        </div>

        <div className="login-right">
          <button className="close-btn" onClick={onClose}>✕</button>

          <h2>Login</h2>
          <p>Enter your email to log in.</p>

          <input placeholder="Enter your email" className="login-input" />

          <button className="continue-btn">Continue</button>

          <div className="divider">OR</div>

          <button className="social-btn google">Continue with Google</button>
          <button className="social-btn facebook">Continue with Facebook</button>
          <button className="social-btn apple">Continue with Apple</button>
        </div>
      </div>
    </div>
  );
}