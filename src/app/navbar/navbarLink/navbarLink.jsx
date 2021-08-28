import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const NavbarLink = ({ path, name, classes }) => (
    <Typography className={classes?.root} variant="h6">
        <Link to={path}>{name}</Link>
    </Typography>
);

NavbarLink.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    classes: PropTypes.instanceOf(Object)
};

NavbarLink.defaultProps = {
    classes: null
};

export default NavbarLink;
