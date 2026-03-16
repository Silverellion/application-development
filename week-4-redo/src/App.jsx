import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
    const [users, setUsers] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users"



    useEffect(() => {
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            setUsers(data)
        })
    }, [])

  return (
    <>
        {users.map((user) => (
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <br />
            </div>
        ))}
    </>
  )
}

export default App
