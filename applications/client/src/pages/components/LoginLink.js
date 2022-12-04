import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

export const validateInput = (str = "") => str.includes("@");


export default function LoginLink({ handleSubmit }) {

    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListOfUsers(response.data)
        })
    })

    const [listOfUsers, setListOfUsers] = useState([]);

    const [formData, setFormData] = useState({});
    const handleOnChange = ({ target: { name, value } }) => setFormData((prev) => ({ ...prev, [name]: value }));

    const [email02, setEmail02] = useState('');
    const [password02, setPassword02] = useState('');

    function redirect() {
        window.location.replace("/Home");
    }

    return (
        <div className="login">

            <html lang="en">
                <head>
                    <meta charset="utf-8"></meta>
                    <title>Login Form</title>
                    <link rel="stylesheet" href="LoginLink.css"></link>
                </head>
                <body>
                    {listOfUsers.map((users) => {
                        let userEmails = [];
                        userEmails = users.email;
                        function handleSubmit(e) {
                            console.log('handleSubmit ran');
                            e.preventDefault();
                            setEmail02('');
                        }

                        if (users.email == email02 && users.password == password02) {
                            setTimeout(redirect, 2000);
                        }

                        return (
                            <div class="center">
                                <h1>Login</h1>
                                <form onSubmit={handleSubmit}>
                                    <div class="txt_field">
                                        <input data-testid="text-input-element" type="text" name="email02" id="email02" onChange={event => setEmail02(event.target.value)} value={email02} ></input>
                                        <label htmlFor="email">email</label>
                                    </div>
                                    {formData.email && !validateInput(formData.email)} 
                                    <div class="txt_field">
                                        <input data-testid="password-input-element" type="password" name="password02" id="password02" onChange={event => setPassword02(event.target.value)} value={password02}></input>
                                        <label htmlFor="password">password</label>
                                    </div>
                                    <div class="pass">Forgot Password?</div>
                                    <input data-testid="login-button-element" role="button" type="submit"></input>
                                    <div class="signup_link">
                                        Not a member? <a href="#"><Link to="/Signup">Signup</Link></a>
                                    </div>
                                </form>
                            </div>
                        )
                    })}
                </body>
            </html>
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