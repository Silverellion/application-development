import React, { useState } from "react";
import "../../styles.css";
import Footer from "../../footer";
import LandingPageLoginModal from "./LandingPageLoginModal";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    "landing-page/modal/slide1.png",
    "landing-page/modal/slide2.png",
    "landing-page/modal/slide3.png"
  ];

  const summer = [
    "landing-page/summer/s1.png",
    "landing-page/summer/s2.png",
    "landing-page/summer/s3.png",
    "landing-page/summer/s4.png"
  ];

  const video = [
    "landing-page/video/v1.png",
    "landing-page/video/v2.png",
    "landing-page/video/v3.png",
    "landing-page/video/v4.png"
  ];

  const editor = [
    "landing-page/editor/e1.png",
    "landing-page/editor/e2.png",
    "landing-page/editor/e3.png",
    "landing-page/editor/e4.png"
  ];

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
    else setShowModal(false);
  };

  return (
    <div className="page">
      <header className="header">
        <img src="/chefify-logo-1.png" className="logo-img" />

        <input className="search" placeholder="What would you like to cook?" />

        <nav className="nav">
          <a>What to cook</a>
          <a>Recipes</a>
          <a>Ingredients</a>
          <a>Occasions</a>
          <a>About Us</a>
        </nav>

        <div className="actions">
          <button className="btn login" onClick={() => setShowLogin(true)}>Login</button>
          <button className="btn subscribe">Subscribe</button>
        </div>
      </header>

      <section className={`hero ${showModal ? "blurred" : ""}`}>
        <img src="/landing-page/landing-page-woman.png" className="hero-bg" />

        <div className="hero-card">
          <span className="tag">Recipe of the day</span>
          <h2>Salad Caprese</h2>
          <p>Classic Italian salad made with fresh mozzarella, herbs, olive oil.</p>
          <button className="view-btn">View recipe</button>
        </div>
      </section>

      <section className={`section ${showModal ? "blurred" : ""}`}>
        <h2 className="section-title">This Summer Recipes</h2>
        <p className="section-sub">We have all your Independence Day sweets covered.</p>

        <div className="card-grid">
          {summer.map((img, i) => (
            <div className="recipe-item" key={i}>
              <img src={img} />
              <h4>Italian-style tomato</h4>
              <span className="time">15 minutes</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`section alt ${showModal ? "blurred" : ""}`}>
        <h2 className="section-title">Recipes With Videos</h2>
        <p className="section-sub">Cooking Up Culinary Creations with Step-by-Step Videos</p>

        <div className="card-grid">
          {video.map((img, i) => (
            <div className="recipe-item" key={i}>
              <img src={img} />
              <h4>Salad with cabbage</h4>
              <span className="time">20 minutes</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`section ${showModal ? "blurred" : ""}`}>
        <h2 className="section-title">Editor's pick</h2>
        <p className="section-sub">Curated Culinary Delights: Handpicked Favorites</p>

        <div className="editor-grid">
          {editor.map((img, i) => (
            <div className="editor-card" key={i}>
              <img src={img} />
              <div className="editor-info">
                <h4>Stuffed sticky rice ball</h4>
                <p>Delicious traditional recipe</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>

            <img src={slides[index]} className="modal-image" />

            <p className="subtitle">Easy and delicious cooking instructions right here.</p>

            <div className="dots">
              {slides.map((_, i) => (
                <span key={i} className={i === index ? "dot active" : "dot"} />
              ))}
            </div>

            <button className="next-btn" onClick={next}>Next</button>
            <button className="skip-btn" onClick={() => setShowModal(false)}>Skip</button>
          </div>
        </div>
      )}

      {showLogin && (
        <LandingPageLoginModal onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
}