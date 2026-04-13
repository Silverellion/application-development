import React from "react";
import "./LandingNavbar.css";

const LandingNavbar = () => {
  return (
    <header className="landing-navbar" role="banner">
      <div className="landing-navbar__container">
        <a className="landing-navbar__brand" href="/" aria-label="Chefify home">
          <img
            className="landing-navbar__logo"
            src="/chefify-logo-1.png"
            alt="Chefify"
          />
        </a>

        <form className="landing-navbar__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <span className="landing-navbar__searchIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5 21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <input
            className="landing-navbar__searchInput"
            type="search"
            placeholder="What would you like to cook?"
            aria-label="Search recipes"
          />
        </form>

        <nav className="landing-navbar__nav" aria-label="Primary">
          <a className="landing-navbar__link" href="#what-to-cook">What to cook</a>
          <a className="landing-navbar__link" href="#recipes">Recipes</a>
          <a className="landing-navbar__link" href="#ingredients">Ingredients</a>
          <a className="landing-navbar__link" href="#occasions">Occasions</a>
          <a className="landing-navbar__link" href="#about">About Us</a>
        </nav>

        <div className="landing-navbar__actions">
          <a className="landing-navbar__btn landing-navbar__btn--ghost" href="#login">
            Login
          </a>
          <a className="landing-navbar__btn landing-navbar__btn--primary" href="#subscribe">
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
