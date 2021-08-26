import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import './navbar-button.css';

const NavbarButton = ({ path, name }) => (
    <Typography className="navbar-button" color="inherit" variant="h6">
        <Link to={path}>{name}</Link>
    </Typography>
);

NavbarButton.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default NavbarButton;
