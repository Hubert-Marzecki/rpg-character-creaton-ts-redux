import React from 'react';
import logo from './logo.svg';
import { Stats } from './features/stats/Stats';
import {Login} from './features/login/Login';
import {Landing} from './features/landing/Landing';
import {Race} from './features/race/Race';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
           <Landing/>
           
      <header className="App-header">
    
     

      <Login />
      
        <Stats />

      </header>

      <Race />
    </div>
  );
}

export default App;
