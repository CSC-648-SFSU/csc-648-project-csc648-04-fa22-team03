import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Axios from "axios"
import { useState, useEffect } from "react"
import './SignupLink.css';





export default function SignupLink() {

    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListOfUsers(response.data)
        })

        Axios.get("http://13.52.100.0:3001/getUsers").then((response) => {
            setListOfUsers(response.data)
        })
    }, 
    
    []);

    //Users
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
   
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const createUser = () => {
        redirect();
        Axios.post("http://13.52.100.0:3001/createUser", {
            name, email, password
        }).then((response) => {
            setListOfUsers([...listOfUsers,  {
                name, email, password
            }])
        })

        Axios.post("http://localhost:3001/createUser", {
            name, email, password
        }).then((response) => {
            setListOfUsers([...listOfUsers,  {
                name, email, password
            }])
        })
    }

    function redirect() {
        window.location.replace("/Login");
      }


    return (
        <html lang="en" dir="ltr">
        <body>
          <div class="wrapper">
            <h2>Registration</h2>
            <form action="#">
              <div class="input-box">
                <input role="name" type="text" placeholder="Enter your name" onChange={(event) => {
                    setName(event.target.value);
                }}/>
              </div>
              <div class="input-box">
                <input role="email" type="text" placeholder="Enter your email"  onChange={(event) => {
                    setEmail(event.target.value);
                }}/>
              </div>
              <div class="input-box">
                <input role="password" type="password" placeholder="Create password" onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
              </div>
              <div class="input-box">
                <input role="password" type="password" placeholder="Confirm password" required></input>
              </div>
              <div class="policy">
                <input type="checkbox"></input>
                <h3>I accept all terms & condition</h3>
              </div>
              <div class="input-box button">
                <input type="Submit" onClick={createUser} value="Register Now"></input>
              </div>
              <div class="text">
                <button onClick={redirect}><h3>Already have an account? Login now</h3></button>
              </div>
            </form>
          </div>
        </body>
        </html>
        

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}