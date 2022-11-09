import React, { Component } from "react";
import './Navbar.css';
import { Button } from "../Button";
import { Link, useMatch, useResolvedPath } from "react-router-dom"


class Navbar extends Component {
    state = {
        active: false
    }

    handleClick = () => {
        this.setState({ active: !this.state.active })
    }
    render() {

        return (
            <nav className="NavbarItems">
                    <h1 className="navbar-logo">The Debuggers</h1>

                    <div class="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>

                        <CustomLink to="/Home" class = "custom">Home </CustomLink>
                        <CustomLink to="/About">About </CustomLink>
                        <CustomLink to="/IDK">IDK </CustomLink>
                        <CustomLink to="/ShoppingCart">Shopping Cart </CustomLink>
                        <CustomLink to="/CheckOut">Check out </CustomLink>

                        <CustomLink to="/Product">Product </CustomLink>
                        <CustomLink to="/Login"><Button> Login </Button></CustomLink>


                        {/* {MenuItems.map((item, index) => {
        return (
            <li key={index}>
                <a className={item.cName} to="">
                    {item.title}
                </a>
            </li>
        )
    })} */}
                    </ul>
                    
                </nav>
        )
    }
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


export default Navbar;