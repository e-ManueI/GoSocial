import React, { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/api/users/register", {
            email,
            password,
            fname,
            lname,
            });

            // Show success toast
            toast.success("Succesfully registered", {
                 position: toast.POSITION.TOP_RIGHT
            });

            // Redirect to the login page with delay to show toast
            setTimeout(() => {
                navigate("/");
            }, 3000);

        } catch (error) {
            // Handle registration error
            console.error(error);
        }
    }

    return (
        <>
            <ToastContainer
                className="auth-toast"
                toastStyle={{
                    fontSize: "12px",
                    maxHeight: "20px",
                    padding: "15px",
                    }}/>

            <div className="App auth-form-container">
                <h1 className="heading fs-1 mb-3">GoSocial</h1>
                <h4 className="subheading my-4 fw-bold">Sign Up to meet your friends!</h4>

                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="fname">First Name</label>
                    <input value={fname}  onChange={(e) => setFname(e.target.value)} name="fname" id="fname" placeholder="First Name" required/>
                    <label htmlFor="lname">Last Name</label>
                    <input value={lname} onChange={(e) => setLname(e.target.value)} name="lname" id="lname" placeholder="Last Name"/>    
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" required/>
                    <p className="terms mt-1">By signing up, you agree to our Terms,</p>
                    <p className="terms">Privacy Policy and Cookies Policy.</p>
                    <button type="submit" className="btn btn-light mt-2">Register</button>
                </form>
                <button className="link-btn" onClick={() => navigate("/")}>Already have an account? Login here.</button>
            </div>    
        </>
    )
}