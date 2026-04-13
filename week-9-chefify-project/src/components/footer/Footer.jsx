import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <section className="footer__about">
          <h3 className="footer__title">About Us</h3>
          <p className="footer__text">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>

          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <label className="footer__label" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              className="footer__input"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
            <button className="footer__button" type="submit">
              Send
            </button>
          </form>
        </section>

        <nav className="footer__col">
          <h3 className="footer__title">Learn More</h3>
          <a className="footer__link" href="#">
            Our Cooks
          </a>
          <a className="footer__link" href="#">
            See Our Features
          </a>
          <a className="footer__link" href="#">
            FAQ
          </a>
        </nav>

        <nav className="footer__col">
          <h3 className="footer__title">Shop</h3>
          <a className="footer__link" href="#">
            Gift Subscription
          </a>
          <a className="footer__link" href="#">
            Send Us Feedback
          </a>
        </nav>

        <nav className="footer__col">
          <h3 className="footer__title">Recipes</h3>
          <a className="footer__link" href="#">
            What to Cook This Week
          </a>
          <a className="footer__link" href="#">
            Pasta
          </a>
          <a className="footer__link" href="#">
            Dinner
          </a>
          <a className="footer__link" href="#">
            Healthy
          </a>
          <a className="footer__link" href="#">
            Vegetarian
          </a>
          <a className="footer__link" href="#">
            Vegan
          </a>
          <a className="footer__link" href="#">
            Christmas
          </a>
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="footer__brand">
          <img className="footer__logo" src="/footer/chefify-logo-2.png" alt="Chefify logo" />
        </div>

        <div className="footer__legal">
          <span>2023 Chefify Company</span>
          <a className="footer__legalLink" href="#">
            Terms of Service
          </a>
          <a className="footer__legalLink" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
