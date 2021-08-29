import React, { useState } from 'react'
import '../Styles/Login.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div className="Login center container">
            <h3>Login page</h3>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="input-field">
                    <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="btn blue">Login</button>
                    {/* <label for="first_name">First Name</label> */}
                </div>
            </form>
        </div>
    )
}
