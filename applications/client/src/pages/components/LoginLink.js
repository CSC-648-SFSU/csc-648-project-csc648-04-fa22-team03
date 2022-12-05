import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

export default function LoginLink() {


    useEffect(() => {
        Axios.get("http://localhost:3001/getLogin").then((response) => {
            setListOfLogin(response.data)
        })

        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListOfUsers(response.data)
        })

        Axios.get("http://13.52.100.0/getLogin").then((response) => {
            setListOfLogin(response.data)
        })

        Axios.get("http://13.52.100.0/getUsers").then((response) => {
            setListOfUsers(response.data)
        })
    })


    const [listOfLogin, setListOfLogin] = useState([]);
    const [listOfUsers, setListOfUsers] = useState([]);

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    var loginEmail = [];
    var loginPassword = [];
    {
        listOfLogin.map((login) => {
            loginEmail = login.email;
            loginPassword = login.password;

        })
    }

    var usersssEmail = [];
    var userssssPasword = [];

    {
        listOfUsers.map((user) => {
            usersssEmail = user.email;
            userssssPasword = user.password;
        })
    }

    const createLogin = () => {
        Axios.post("http://localhost:3001/createLogin", {
            email, password
        }).then((response) => {
            setListOfLogin([...listOfLogin, {
                email, password
            }])
        })

        Axios.post("http://13.52.100.0/createLogin", {
            email, password
        }).then((response) => {
            setListOfLogin([...listOfLogin, {
                email, password
            }])
        })
    }



    return (
        <div className="boutdiv">
            <html lang="en">
                <head>
                    <meta charset="utf-8"></meta>
                    <title>Login Form</title>
                    <link rel="stylesheet" href="LoginLink.css"></link>
                </head>
                <body>
                    <div class="center">
                        <h1>Login</h1>
                        <form >
                            <div class="txt_field">
                                <input type="text" onChange={(event) => {
                                    setEmail(event.target.value);
                                }} />
                                <label>email</label>
                            </div>
                            <div class="txt_field">
                                <input type="password" onChange={(event) => {
                                    setPassword(event.target.value);
                                }} />
                                <label>password</label>
                            </div>
                            <div class="pass">Forgot Password?</div>
                            <input onClick={createLogin} type="submit"></input>
                            <div class="signup_link">
                                Not a member? <a href="#"><Link to="/Signup">Signup</Link></a>
                            </div>
                        </form>
                    </div>
                </body>
            </html>
            <ul>

            </ul>
        </div>
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