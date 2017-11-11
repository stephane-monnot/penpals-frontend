import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = (props) => (
  <li>
    <Link {...props} />
  </li>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default NavLink;
