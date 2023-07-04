import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();

    const handleLogout = () => {
      // Clear user authentication tokens
      localStorage.removeItem('token'); // or sessionStorage.removeItem('token')

      // Reset state (Example using Redux)
      // dispatch(resetAuthState());
      // dispatch(resetUserData());

      // Redirect to the home page or any other desired location
      navigate('/');
    };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            GoSocial
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/register">
            Add User
          </Link>

          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}