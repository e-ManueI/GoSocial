import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:8080/api/users/login", {
                email,
                password,
            });

            const token = response.data; // JWT token
            // Store the token in localStorage or as a cookie
            localStorage.setItem("token", token); 
            // Redirect to the desired page (e.g., home page) 
            // ...using react router or any other navigation method
            console.log("Successfully logged in")
        } catch (error) {
            //Handle login error
            console.log("Failed to sign in");
            console.error(error);
            
        }
    };

    return (
        <div className="auth-form-container">
            <h1>GoSocial</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            
            <button className="link-btn" onClick={() => navigate("/register")}>Don't have an account? Register here.</button>
        </div>    
    )
}