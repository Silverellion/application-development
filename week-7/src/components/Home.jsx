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
      <h3>Dashboard:</h3>
      <ul>
        <li>
            <Link to = "/dashboard/profile">Profile</Link>
        </li>
        <li>
            <Link to = "/dashboard/orders">Orders</Link>
        </li>
        <li>
            <Link to = "/dashboard/settings">Settings</Link>
        </li>
      </ul>
      <h3>Protected Routes:</h3>
      <ul>
        <li>
          <Link to= "/login">Login</Link>
        </li>
        <li>
          <Link to= "/protected-routes/protected-orders">Protected Orders</Link>
        </li>
        <li>
          <Link to= "/protected-routes/protected-profile">Protected Profiles</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
