import React from "react";
import "./FoodReviewCard.css";

const FoodReviewCard = ({
  imageSrc = "/landing-page/landing-page-food-8.png",
  title = "Stuffed sticky rice ball",
  time = "34 minutes",
  userName = "Jennifer King",
  userAvatarSrc = "/users/user-circles/user-7.png",
  description =
    "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
  onBookmark,
}) => {
  return (
    <article className="foodReviewCard">
      <div className="foodReviewCard__media">
        <img className="foodReviewCard__image" src={imageSrc} alt={title} />
      </div>

      <div className="foodReviewCard__content">
        <div className="foodReviewCard__top">
          <div>
            <h3 className="foodReviewCard__title">{title}</h3>
            <p className="foodReviewCard__time">{time}</p>
          </div>

          <button
            className="foodReviewCard__bookmark"
            type="button"
            aria-label="Bookmark"
            onClick={onBookmark}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M7 3.75C7 2.7835 7.7835 2 8.75 2h6.5C16.2165 2 17 2.7835 17 3.75v18.1c0 .768-.834 1.246-1.5.86L12 20.8l-3.5 1.91c-.666.386-1.5-.092-1.5-.86V3.75z" />
            </svg>
          </button>
        </div>

        <div className="foodReviewCard__user">
          <img className="foodReviewCard__avatar" src={userAvatarSrc} alt={userName} />
          <span className="foodReviewCard__name">{userName}</span>
        </div>

        <p className="foodReviewCard__desc">{description}</p>
      </div>
    </article>
  );
};

export default FoodReviewCard;
