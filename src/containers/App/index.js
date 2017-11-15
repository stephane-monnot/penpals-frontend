import React from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from '../HomeScreen';
import AboutScreen from '../AboutScreen';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import Navigation from "../../components/Navigation/index";
import NavLink from "../../components/NavLink/index";

const App = () => (
  <div>
    <header>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us.html">About us</NavLink>
        <NavLink to="/login.html">Login</NavLink>
        <NavLink to="/signup.html">Register</NavLink>
      </Navigation>
    </header>

    <main>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/about-us.html" component={AboutScreen} />
      <Route exact path="/login.html" component={LoginScreen} />
      <Route exact path="/signup.html" component={RegisterScreen} />
    </main>
  </div>
);

export default App;
