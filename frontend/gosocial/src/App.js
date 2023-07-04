import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
