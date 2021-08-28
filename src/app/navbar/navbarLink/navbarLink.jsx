import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import './navbar-link.css';

const NavbarLink = ({ path, name }) => (
    <Typography className="navbar-link" color="inherit" variant="h6">
        <Link to={path}>{name}</Link>
    </Typography>
);

NavbarLink.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default NavbarLink;
