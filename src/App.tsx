import React from 'react';
import {TikTakToe} from "./components/TikTakToe";
import Logo from './assets/images/logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="App-logo" src={Logo} alt="Logo"/>
      <TikTakToe />
    </div>
  );
}

export default App;
