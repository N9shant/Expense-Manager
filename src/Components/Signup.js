import React, { useState } from 'react'
import '../Styles/Signup.css'

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div className="Signup center container">
            <h3>Signup page</h3>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="input-field">
                    <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="btn blue">Sign up</button>
                    {/* <label for="first_name">First Name</label> */}
                </div>
            </form>
        </div>
    )
}
