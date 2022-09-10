import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function AboutLink(){
        return (
            <div className="boutdiv">
                <h1> About Page</h1>
                <ul>
                    <CustomLink to="/Ahmed">Ahmed </CustomLink>
                    <CustomLink to="./pages/Aisha">Aisha </CustomLink>
                    <CustomLink to="/Chris">Chris </CustomLink>
                    <CustomLink to="/Mandy">Mandy </CustomLink>
                    <CustomLink to="/Ruqaiyah">Ruqaiyah </CustomLink>
                    <CustomLink to="/Shahriz">Shahriz </CustomLink>
                </ul>
            </div>
        )
}

function CustomLink({ to , children, ...props }){
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