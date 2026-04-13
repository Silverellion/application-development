import React from "react";
import "./RecipeOfTheDay.css";

const RecipeOfTheDay = ({ title, description, userImage, userName }) => {
  return (
    <section className="rotd" aria-label="Recipe of the day">
      <div className="rotd__badge">Recipe of the day</div>

      <div className="rotd__card">
        <h2 className="rotd__title">{title}</h2>
        <p className="rotd__description">{description}</p>

        <div className="rotd__user">
          <img className="rotd__avatar" src={userImage} alt={userName} loading="lazy" />
          <div className="rotd__userName">{userName}</div>
        </div>

        <button className="rotd__cta" type="button">
          View now <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
};

export default RecipeOfTheDay;
