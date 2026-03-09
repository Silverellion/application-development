import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {

  // BÀI 1 & 2
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)

  // useEffect(() => {
  //   async function fetchData() {
  //     setTimeout(() => {
  //       setLoading(false)
  //         const url = "https://jsonplaceholder.typicode.com/users"
  //         fetch(url).then((response) => {
  //           if(!response.ok)
  //             setError(true);
  //           return response.json()
  //         }).then((data) => {
  //           if(!data || data.length === 0) {
  //             setError(true)
  //           } else {
  //             setUsers(data)
  //           }
  //           console.log(data)
  //         })
  //     }, 1000)
  //   }
  //   fetchData()
  // }, [])

  // return (
  //   <>
  //     {loading?"Loading....":"Finished Loading!"}
  //     <br />
  //     {error?"Error!":""}
  //     {users.map((user) => (
  //       <>
  //         <div key={user.id}>
  //           <p>Username: {user.name}</p>
  //           <p>Email: {user.email}</p>
  //           <br />
  //         </div>
  //       </>
  //     ))}
  //   </>
  // );

  // BÀI 3:
  // const [tempUserId, setTempUserId] = useState("");
  // const [url, setUrl] = useState("")
  // const [user, setUser] = useState("")
  // const [error, setError] = useState(false)

  // const urlTemplate = "https://jsonplaceholder.typicode.com/users/"

  // function searchButton() {
  //   setUrl("")
  //   setUser("")
  //   setError(false)

  //   if(tempUserId === "")
  //     return;

  //   const newUrl = urlTemplate + tempUserId;
  //   setUrl(newUrl)
  //   console.log(url)

  //   setTempUserId("")

  //   fetch(newUrl)
  //     .then((response) => { 
  //       if(!response.ok) {
  //         setError(true)
  //         return;
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       if(!data || data.length === 0) {
  //         setError(true)
  //         return;
  //       }

  //       setError(false)
  //       setUser(data);
  //       console.log(data)
  //     })
  // }

  // return (
  //   <>
  //     <div>
  //       <input
  //         type="text" 
  //         value={tempUserId}
  //         onChange={((e) => (setTempUserId(e.target.value)))}
  //         />
  //     </div>
  //     <button onClick={searchButton} className='search-button'>
  //       Search
  //     </button>

  //     {!error && (
  //       <div>
  //         <p>{user.name}</p>
  //         <p>{user.phone}</p>
  //         <p>{user.email}</p>
  //       </div>
  //     )}

  //     {error && (
  //       <div>
  //         Error loading data!
  //       </div>
  //     )}
  //   </>
  // )

  // BÀI 4:

  const [searchText, setSearchText] = useState("")
  const [fetchedData, setFetchedData] = useState([])
  const [error, setError] = useState(false)
  const [displayPosts, setDisplayPosts] = useState([])

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setError(false)
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchedData(data)
        console.log(data)
      })
  }, [])

  function searchButton() {
    setDisplayPosts([])
    setError(false)
    
    const filteredData = fetchedData.filter((temp) => temp.title.toLowerCase().includes(searchText.toLowerCase()))
    console.log(filteredData)

    if(!filteredData || filteredData.length == 0) {
      setError(true)
      return;
    }
    else
      setDisplayPosts(filteredData)
  }

  return (
    <>
      <div>
        <input 
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}  
        />
        <button onClick={searchButton} className='search-button'>
          Search post titles
        </button>
      </div>
      {error && (
        <div>
          No posts found!
        </div>
      )}
      {!error && (
        displayPosts.map((displayPost) => (
          <div key = {displayPost.id}>
            <h1>{displayPost.title}</h1>
            <p>{displayPost.body}</p>
          </div>
        ))
      )}
    </>
  )
};

export default App
