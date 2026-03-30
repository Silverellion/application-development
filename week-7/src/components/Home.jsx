import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h3>You are in Home!</h3>
      <ul>
        <li>
            <Link to = "/">Home</Link>
        </li>
        <li>
            <Link to = "/about">About</Link>
        </li>
        <li>
            <Link to = "/contact">Contact</Link>
        </li>
      </ul>
      <br />
      <h3>Product list:</h3>
      <ul>
        <li>
            <Link to = "/products/1">Iphone</Link>
        </li>
        <li>
            <Link to = "/products/2">Samsung</Link>
        </li>
        <li>
            <Link to = "/products/3">Laptop</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
