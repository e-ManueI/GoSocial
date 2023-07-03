import React, {useState, useEffect} from 'react';
import './App.css';
import { Login } from "./Login";
import { Register } from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  useEffect(() => {
    document.title = currentForm === 'login' ? 'GoSocial | Login' : 'GoSocial | Register';
  }, [currentForm]);
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
