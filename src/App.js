import './App.css';
import Alert from './components/Alert.js';
import About from './components/About.js'
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import About from './components/About';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
  })
  setTimeout(()=>{
    setalert(null);
  }, 1100);
  }
  const toggleMode = () => {
    // let box = document.getElementById('flexSwitchCheckDefault');
    if (mode === 'light') {
      setmode('dark');
      showAlert("Dark Mode enabled", "success");
      document.body.style.backgroundColor = '#181a1b';
      document.body.style.color = 'white';
    }
    else {
      setmode('light');
      showAlert("Light Mode enabled", "success");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
      <div style = {{height : "50px"}}>
      <Alert alert={alert} />
      </div>

      <div className="container my-3">
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the Text to analyse" mode ={mode} showAlert = {showAlert}/>}></Route>
          <Route exact path="/about" element={<About mode = {mode}/>}></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;