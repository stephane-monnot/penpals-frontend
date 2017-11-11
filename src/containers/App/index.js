import React from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from '../HomeScreen';
import AboutScreen from '../AboutScreen';
import LoginScreen from '../LoginScreen';
import Navigation from "../../components/Navigation/index";
import NavLink from "../../components/NavLink/index";

const App = () => (
  <div>
    <header>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About us</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Navigation>
    </header>

    <main>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/about-us" component={AboutScreen} />
      <Route exact path="/login" component={LoginScreen} />
    </main>
  </div>
);

export default App;

