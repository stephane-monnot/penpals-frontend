import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Navigation from "../../components/Navigation/index";
import NavLink from "../../components/NavLink/index";

const App = () => (
  <div>
    <header>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About us</NavLink>
      </Navigation>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;

