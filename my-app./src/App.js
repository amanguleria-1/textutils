import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert1 from './components/Alert';
// import React from "react";
import React, {  useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message:  message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);     
    }, 2000);
  }
 const toggleMode = () =>{
      if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor='black';
        showAlert(" dark mode has been enabled" , "success");
        // document.title='Dark mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert(" light mode has been enabled" , "success");
        // document.title='Light mode';
      }
}  
  return(
   <>
   <Router>
<Navbar title= "TextUtils" mode = {mode} toggleMode={toggleMode} aboutText="About us"/>
<Alert alert={alert}/>
<div className ="container">
<Switch>
          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter your text below" mode = {mode}/>
          <About/>
          </Route>
</Switch>
</div>
</Router>
   </>
   );
}

export default App;
