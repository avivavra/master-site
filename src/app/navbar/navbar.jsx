import React from 'react';
import { AppBar, MenuItem, Toolbar } from '@material-ui/core';
import { childrenPropType } from '../propTypes/reactPropTypes';
import './navbar.css';

const Navbar = ({ children: navBarItems }) => (
    <AppBar position="static">
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
    children: childrenPropType
};

Navbar.defaultProps = {
    children: null
};

export default Navbar;
