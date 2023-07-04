import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


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

            // Show success toast
            toast.success("Succesfully login", {
                 position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            //Handle login error
            console.log("Failed to sign in");
            console.error(error);
            
        }
    };

    return (
        <>
            <ToastContainer
                className="auth-toast"
                toastStyle={{
                    fontSize: "12px",
                    color:"#fff",
                    maxHeight: "20px",
                    padding: "15px",
                }} />
            
            <div className="App auth-form-container">
                <h1 className="heading fs-1 mb-3">GoSocial</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
                    <button type="submit" className="btn btn-light mt-2">Log In</button>
                </form>
                
                <button className="link-btn" onClick={() => navigate("/register")}>Don't have an account? Register here.</button>
            </div>    
        </>
    )
}