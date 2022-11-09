import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function SignupLink() {
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
            <h1>Signup</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required></input>
                    <span></span>
                    <label>Name</label>
                </div>
                <div class="txt_field">
                    <input type="text" required></input>
                    <span></span>
                    <label>Age</label>
                </div>
                <div class="txt_field">
                    <input type="text" required></input>
                    <span></span>
                    <label>E-mail</label>
                </div>
                <div class="txt_field">
                    <input type="text" required></input>
                    <span></span>
                    <label>Student ID</label>
                </div>
                <div class="txt_field">
                    <input type="text" required></input>
                    <span></span>
                    <label>Grade Level</label>
                </div>
                <div class="txt_field">
                    <input type="password" required></input>
                    <label>Password</label>
                    <span></span>
                </div>
                <div class="txt_field">
                    <input type="password" required></input>
                    <label>Confirm Password</label>
                    <span></span>
                </div>
            
                <input type="submit" value="Create Account"></input>
                <div class="login_link">
                    Already have an account? <a href="#"><Link to="/Login">Login</Link></a>
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