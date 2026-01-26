import React from 'react'
import "./Header.css"

const Header = ({studentName, studentImage}) => {
  return (
    <div className='header'>
        <div className='info-box'>
            <p>{studentName}</p>
            <img src={studentImage} alt="" />
        </div>
    </div>
  )
}

export default Header
