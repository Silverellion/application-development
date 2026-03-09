import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // useEffect(() => {
  //   const url = "https://jsonplaceholder.typicode.com/users"
  //   fetch(url).then((response) => {
  //     return response.json()
  //   }).then((data) => {
  //     setUsers(data)
  //     console.log(data)
  //   })
  // }, [])

  useEffect(() => {
    async function fetchData() {
      setTimeout(() => {
        setLoading(false)
          const url = "https://jsonplaceholder.typicode.com/users"
          fetch(url).then((response) => {
            if(!response.ok)
              setError(true);
            return response.json()
          }).then((data) => {
            if(!data || data.length === 0) {
              setError(true)
            } else {
              setUsers(data)
            }
            console.log(data)
          })
      }, 1000)
    }
    fetchData()
  }, [])

return (
  <>
    {loading?"Loading....":"Finished Loading!"}
    <br />
    {error?"Error!":""}
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
