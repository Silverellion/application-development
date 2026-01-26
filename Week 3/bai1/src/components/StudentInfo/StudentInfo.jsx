import React from 'react'
import "./StudentInfo.css"

const StudentInfo = ({studentName, studentId, studentClass, studentImage}) => {
  return (
    <div className='student-card'>
        <img src={studentImage} alt="" />
        <p>{studentId}</p>
        <p>{studentName}</p>
        <p>{studentClass}</p>
    </div>
  )
}

export default StudentInfo
