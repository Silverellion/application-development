import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <div>
      <h3>You are in Settings!</h3>
      <p>Back to home: <Link to = "/">Home</Link></p>
      <p>Back to home: <Link to = "/Dashboard">Dashboard</Link></p>
    </div>
  )
}

export default Settings
