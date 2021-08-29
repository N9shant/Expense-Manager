import React from 'react'
import { Link } from 'react-router-dom'

export default function navBar() {
    return (
        <nav>
            <div className="nav-wrapper blue">
                <Link to="/" className="brand-logo">Expense Manager</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/signup">signup</Link></li>
                    <li><button className="btn grey">logout</button></li>
                </ul>
            </div>
        </nav>
    )
}
