import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
    const [clients, setClients] = useState([]);
    const [displayClients, setDisplayClients] = useState([]);
    const [searchClientText, setSearchClientText] = useState("");
    const url = "http://localhost:3000/clients"

    useEffect(() => {
        if(clients.length === 0 || !clients) {
                    fetch(url).then((response) => {
            return response.json()
            }).then((data) => {
                console.log("Fetched Clients successfully!")
                setClients(data)
            })
        }
    }, [])

    function buttonSearch() {
        setDisplayClients([])
        var tempSearchClient = searchClientText;
        setSearchClientText("");
        const filteredClient = clients.filter(c =>
            JSON.stringify(c).toLowerCase().includes(tempSearchClient.toLocaleLowerCase())
        )
        setDisplayClients(filteredClient);
        console.log(displayClients);
    }

    return(
        <>
            Look up client:
            <input type="text" 
                placeholder="Enter client's details here!"
                value = {searchClientText}
                onChange={(e) => setSearchClientText(e.target.value)}
            /> 

            <button onClick={buttonSearch}>
                Search
            </button>

            {clients.map((client, index) => (
                <div key={client.id}>
                    <h1>Client #{index + 1}'s</h1>
                    <p>Client's name: {client.name}</p>
                    <p>Client's gender: {client.gender}</p>
                    <p>Client's age: {client.age}</p>
                </div>
            ))}
        </>
    )

}



export default App
