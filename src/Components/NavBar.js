import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css'

export default function navBar() {
    return (
        <nav className="NavBar">
            <div className="nav-wrapper red">
                <Link to="/" className="brand-logo">Expense Manager</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link className="size" to="/login">Login</Link></li>
                    <li><Link className="size" to="/signup">Signup</Link></li>
                    <li><button className="btn grey">logout</button></li>
                </ul>
            </div>
        </nav>
    )
}
