import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/About';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
