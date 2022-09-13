import { useState, useEffect } from "react"
import Axios from "axios"

export default function IDK(){
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        Axios.get("http://13.52.253.222:3000/getUsers").then((response) => {
            setListOfUsers(response.data)
        })
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListOfUsers(response.data)
        })
    }, []);

    const createUser = () => {
        Axios.post("http://13.52.253.222:3000/createUser", {
            name, age, username
        }).then((response) => {

        })

        Axios.post("http://localhost:3001/createUser", {
            name, age, username
        }).then((response) => {
            setListOfUsers([...listOfUsers,  {
                name, age, username
            }])
        })
    }

    return (
        <div className="IDK">
            <div className="usersDisplay"> 
                {listOfUsers.map((user) => {
                    return (
                        <div>
                            <h1>Name: {user.name}</h1>
                            <h1>Age: {user.age}</h1>
                            <h1>Username: {user.username}</h1>
                        </div>
                    )
                })}
            </div>

            <div>
                <input type="text" placeholder="Name..." onChange={(event) => {
                    setName(event.target.value);
                }}/>
                <input type="number" placeholder="Age..." onChange={(event) => {
                    setAge(event.target.value);
                }} />
                <input type="text" placeholder="UserName..." onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                <button onClick={createUser}>Create User </button>
            </div>
        </div>
    )
}