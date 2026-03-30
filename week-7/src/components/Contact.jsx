import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div>
            <h3>You are in Contact!</h3>
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

export default Contact
