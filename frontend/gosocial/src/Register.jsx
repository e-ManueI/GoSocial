import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>GoSocial</h1>
            <h4>Sign Up to meet your friends!</h4>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input value={fname}  onChange={(e) => setFname(e.target.value)} name="fname" id="fname" placeholder="First Name" />
                <label htmlFor="lname">Last Name</label>
                <input value={lname} onChange={(e) => setLname(e.target.value)} name="lname" id="lname" placeholder="Last Name" />    
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
                <p className="terms">By signing up, you agree to our Terms,</p>
                <p className="terms">Privacy Policy and Cookies Policy.</p>
                <button type="submit">Register</button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>    
    )
}