import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function LoginLink() {
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
            <form method="post">
                <div class="txt_field">
                    <input type="text" required></input>
                    <span></span>
                    <label>email</label>
                </div>
                <div class="txt_field">
                    <input type="password" required></input>
                    <label>password</label>
                    <span></span>
                </div>
                <div class="pass">Forgot Password?</div>
                <input type="submit" value="Login"></input>
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