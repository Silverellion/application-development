import React from "react";
import "./Landing.css";

import LandingNavbar from "../../components/landing-navbar/LandingNavbar";
import FoodCard from "../../components/cards/FoodCard";
import FoodReviewCard from "../../components/cards/FoodReviewCard";
import RecipeOfTheDay from "../../components/others/recipe-of-the-day/RecipeOfTheDay";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <div className="landing">
      <LandingNavbar />

      <main className="landing__main">
        <header className="landing__hero" aria-label="Chefify landing">
          <div className="landing__heroInner">
            <img
              className="landing__heroWoman"
              src="/landing-page/landing-page-woman.png"
              alt=""
              aria-hidden="true"
            />
            <div className="landing__heroRotd">
              <RecipeOfTheDay
                title="Spaghetti Carbonara"
                description="A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
                userImage="/users/user-circles/user-1.png"
                userName="Chef Mario"
              />
            </div>
          </div>
        </header>

        <section className="landing__section" id="what-to-cook" aria-label="Summer recipes">
          <div className="landing__sectionHeader">
            <h2 className="landing__sectionTitle">Summer recipes</h2>
            <a className="landing__sectionLink" href="#recipes">
              View all
            </a>
          </div>

          <div className="landing__grid landing__grid--cards">
            <FoodCard imageSrc="/landing-page/landing-page-food-1.png" title="Tomato basil salad" time="15 minutes" />
            <FoodCard imageSrc="/landing-page/landing-page-food-2.png" title="Grilled chicken bowl" time="25 minutes" />
            <FoodCard imageSrc="/landing-page/landing-page-food-3.png" title="Fresh summer pasta" time="30 minutes" />
            <FoodCard imageSrc="/landing-page/landing-page-food-4.png" title="Avocado toast deluxe" time="10 minutes" />
            <FoodCard imageSrc="/landing-page/landing-page-food-5.png" title="Lemon seafood plate" time="22 minutes" />
            <FoodCard imageSrc="/landing-page/landing-page-food-6.png" title="Watermelon feta salad" time="12 minutes" />
            <FoodCard imageSrc="/landing-page/landing-page-food-7.png" title="Berry yogurt parfait" time="8 minutes" />
            <FoodCard imageSrc="/landing-page/landing-page-food-8.png" title="Cabbage & shrimp salad" time="32 minutes" />
          </div>
        </section>

        <section className="landing__section" id="videos" aria-label="Recipes with videos">
          <div className="landing__sectionHeader">
            <h2 className="landing__sectionTitle">Recipes with videos</h2>
            <a className="landing__sectionLink" href="#recipes">
              View all
            </a>
          </div>

          <div className="landing__grid landing__grid--cards">
            <FoodCard imageSrc="/landing-page/video/v1.png" title="Quick ramen upgrade" time="18 minutes" />
            <FoodCard imageSrc="/landing-page/video/v2.png" title="Perfect omelette" time="9 minutes" />
            <FoodCard imageSrc="/landing-page/video/v3.png" title="One-pan garlic shrimp" time="16 minutes" />
            <FoodCard imageSrc="/landing-page/video/v4.png" title="Creamy pesto pasta" time="21 minutes" />
          </div>
        </section>

        <section className="landing__section" id="editors" aria-label="Editors pick">
          <div className="landing__sectionHeader">
            <h2 className="landing__sectionTitle">Editors’ pick</h2>
            <a className="landing__sectionLink" href="#recipes">
              View all
            </a>
          </div>

          <div className="landing__grid landing__grid--reviews">
            <FoodReviewCard
              imageSrc="/landing-page/editor/e1.png"
              title="Stuffed sticky rice ball"
              time="34 minutes"
              userName="Jennifer King"
              userAvatarSrc="/users/user-circles/user-7.png"
            />
            <FoodReviewCard
              imageSrc="/landing-page/editor/e2.png"
              title="Matcha crepe cake"
              time="45 minutes"
              userName="Samuel Lee"
              userAvatarSrc="/users/user-circles/user-4.png"
              description="Thin crepes layered with matcha cream for a light, elegant dessert..."
            />
            <FoodReviewCard
              imageSrc="/landing-page/editor/e3.png"
              title="Crispy salmon bites"
              time="28 minutes"
              userName="Ava Johnson"
              userAvatarSrc="/users/user-circles/user-2.png"
              description="Golden salmon bites with a tangy dip—perfect for weeknights..."
            />
            <FoodReviewCard
              imageSrc="/landing-page/editor/e4.png"
              title="Vegan buddha bowl"
              time="20 minutes"
              userName="Noah Perez"
              userAvatarSrc="/users/user-circles/user-5.png"
              description="Colorful grains and greens topped with a creamy tahini dressing..."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
