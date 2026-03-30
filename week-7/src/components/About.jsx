import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div>
            <h3>You are in About!</h3>
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
        </div>
    </div>
  )
}

export default About
