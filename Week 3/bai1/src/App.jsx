import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import StudentInfo from './components/StudentInfo/StudentInfo'

const App = () => {
  return (
    <div>
      <Header
        studentName = "Hoàng Trí Minh Tâm"
        studentImage = "assets\images\default-user.png"
      />
      <StudentInfo 
        studentName = "Hoàng Trí Minh Tâm"
        studentId = "23669821"
        studentClass = "DHKPTM19BTT"
        studentImage = "assets\images\default-user.png"
      />
    </div>
  )
}

export default App
