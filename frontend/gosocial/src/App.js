import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./pages/home/Home";
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  useEffect(() => {
    document.title = currentForm === 'login' ? 'GoSocial | Login' : 'GoSocial | Register';
  }, [currentForm]);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
