import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from "react"

export default function ProductLink() {
    return (
        <div className="boutdiv">
            <h1> Product Page</h1>
            <section>
		<div class="main-container">
			<ul class="grid-wrapper">
				<li class = "box" id = "box-01">
                    <div class = "product-title">
                    <CustomLink to="/Awake">Awake </CustomLink>
                    </div>
                    <div class = "caption">Mitigates the efects of sleep deprivation</div>
                </li>
				<li class = "box" id = "box-02"> 
                <div class = "product-title">
                <CustomLink to="/Relax">Relax </CustomLink>
                </div>
                <div class = "caption">Comforts when around strangers</div>
                </li>
				<li class = "box" id = "box-03">  
                <div class = "product-title">
                    <CustomLink to="/Neutralize">Neutralize </CustomLink>
                    </div>
                <div class = "caption">Neutralize ones own smell</div>
                </li>

			</ul>
		</div>
	</section>
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