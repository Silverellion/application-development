import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/footer/chefify-logo-2.png" className="footer-logo" />

          <p className="footer-desc">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>

          <div className="footer-input">
            <input placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Learn More</h4>
            <a>Our Cooks</a>
            <a>See Our Features</a>
            <a>FAQ</a>
          </div>

          <div>
            <h4>Shop</h4>
            <a>Gift Subscription</a>
            <a>Send Us Feedback</a>
          </div>

          <div>
            <h4>Recipes</h4>
            <a>What to Cook This Week</a>
            <a>Pasta</a>
            <a>Dinner</a>
            <a>Healthy</a>
            <a>Vegetarian</a>
            <a>Vegan</a>
            <a>Christmas</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Chefify Company</span>
        <span>Terms of Service | Privacy Policy</span>
      </div>
    </footer>
  );
}