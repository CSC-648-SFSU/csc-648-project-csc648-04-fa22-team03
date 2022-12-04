import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

export default function LoginLink() {

    

 
    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListOfUsers(response.data)
        })

        Axios.get("http://13.52.100.0/getUsers").then((response) => {
            setListOfUsers(response.data)
        })
    })

      const [listOfUsers, setListOfUsers] = useState([]);


      const [email02, setEmail02] = useState('');
      const [password02, setPassword02] = useState('');

      function redirect() {
            window.location.replace("/Home");
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
    {listOfUsers.map((users) => {
        let userEmails=[];
        userEmails = users.email;
          function handleSubmit(e) {
            console.log('handleSubmit ran');           
            e.preventDefault();
            setEmail02('');
    }

    if(users.email == email02 && users.password == password02){
        setTimeout(redirect, 2000);
    }

       
                return (
        <div class="center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div class="txt_field">
                    <input type="text" name="email02"   id="email02"  onChange={event => setEmail02(event.target.value)}   value={email02}></input>
                    <label>email</label>
                </div>
                <div class="txt_field">
                    <input type="password" name="password02"   id="password02"  onChange={event => setPassword02(event.target.value)}   value={password02}></input>
                    <label>password</label>
                </div>
                <div class="pass">Forgot Password?</div>
                <input type="submit"></input>
                <div class="signup_link">
                    Not a member? <a href="#"><Link to="/Signup">Signup</Link></a>
                </div>
            </form>
        </div>
          )
        })}
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