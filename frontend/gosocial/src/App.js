import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';

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
      <div className="App">
        <Routes>
          <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
