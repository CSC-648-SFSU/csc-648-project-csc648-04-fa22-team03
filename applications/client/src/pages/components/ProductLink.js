import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function ProductLink() {
    return (
        <div className="boutdiv">
            <h1> Product Page</h1>
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