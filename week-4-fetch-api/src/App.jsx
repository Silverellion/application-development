import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      setUsers(data)
      console.log(data)
    })
  }, [])


return (
  <>
    {users.map((user) => (
      <>
        <div key={user.id}>
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
          <br />
        </div>
      </>
    ))}
  </>
);
}

export default App
