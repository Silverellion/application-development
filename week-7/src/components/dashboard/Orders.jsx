import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div>
      <h3>You are in Orders!</h3>
      <p>Back to home: <Link to = "/">Home</Link></p>
      <p>Back to home: <Link to = "/Dashboard">Dashboard</Link></p>
    </div>
  )
}

export default Orders
