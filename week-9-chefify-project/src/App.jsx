import React from 'react'
import "./App.css"
import Footer from './components/footer/Footer'
import FoodCard from './components/cards/FoodCard'
import FoodReviewCard from './components/cards/FoodReviewCard'
import LandingNavbar from './components/landing-navbar/LandingNavbar'

const App = () => {
  return (
    <div>
      <LandingNavbar />
      <FoodCard imageSrc="/landing-page/landing-page-food-8.png" />
      <FoodReviewCard
        imageSrc="/landing-page/landing-page-food-1.png"
        userAvatarSrc="/users/user-circles/user-7.png"
      />
    </div>
  )
}

export default App
