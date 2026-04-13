import React from 'react'
import "./App.css"
import Footer from './components/footer/Footer'
import FoodCard from './components/cards/FoodCard'
import FoodReviewCard from './components/cards/FoodReviewCard'

const App = () => {
  return (
    <div>
      <FoodCard />
      <FoodReviewCard />
      <Footer />
    </div>
  )
}

export default App
