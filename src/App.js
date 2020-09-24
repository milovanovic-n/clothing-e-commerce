import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
