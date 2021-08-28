import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, MenuItem, Toolbar } from '@material-ui/core';
import { childrenPropType } from '../propTypes/reactPropTypes';

const Navbar = ({ children: navBarItems, classes }) => (
    <AppBar position="static" className={classes.root}>
        <Toolbar>
            {
                navBarItems?.map((navBarItem) => (
                    <MenuItem>{navBarItem}</MenuItem>
                ))
            }
        </Toolbar>
    </AppBar>
);

Navbar.propTypes = {
    children: childrenPropType,
    classes: PropTypes.instanceOf(Object)
};

Navbar.defaultProps = {
    children: null,
    classes: {}
};

export default Navbar;
