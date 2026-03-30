import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h3>You are in Dashboard!</h3>
      <ul>
        <li>
          <Link to = "profile">Profile</Link>
        </li>
        <li>
          <Link to = "orders">Orders</Link>
        </li>
        <li>
          <Link to = "settings">Settings</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Dashboard
