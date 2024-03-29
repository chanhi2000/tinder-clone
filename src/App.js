import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from './TinderCards';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am chatpage</h1>
          </Route>
          {/* Always put default one at bottom */}
          <Route path="/">
            <TinderCards/>
          </Route>
          
          {/* Buttons below tinder cards */}
        
          {/* Chats screen */}
          {/* Individual chat screen */}
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
