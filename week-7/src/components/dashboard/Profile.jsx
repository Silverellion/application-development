import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <h3>You are in Profile!</h3>
      <p>Back to home: <Link to = "/">Home</Link></p>
      <p>Back to home: <Link to = "/Dashboard">Dashboard</Link></p>
    </div>
  )
}

export default Profile
