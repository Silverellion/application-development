import React from "react";
import "./FoodCard.css";

const FoodCard = ({
  imageSrc = "/landing-page/landing-page-food-8.png",
  title = "Salad with cabbage\nand shrimp",
  time = "32 minutes",
  onBookmark,
}) => {
  return (
    <article className="foodCard">
      <div className="foodCard__imageWrap">
        <img className="foodCard__image" src={imageSrc} alt={title} />
      </div>

      <div className="foodCard__body">
        <div className="foodCard__header">
          <h3 className="foodCard__title">{title}</h3>
          <button
            className="foodCard__bookmark"
            type="button"
            aria-label="Bookmark"
            onClick={onBookmark}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M7 3.75C7 2.7835 7.7835 2 8.75 2h6.5C16.2165 2 17 2.7835 17 3.75v18.1c0 .768-.834 1.246-1.5.86L12 20.8l-3.5 1.91c-.666.386-1.5-.092-1.5-.86V3.75z" />
            </svg>
          </button>
        </div>

        <span className="foodCard__time" aria-label={`Time: ${time}`}>
          {time}
        </span>
      </div>
    </article>
  );
};

export default FoodCard;
