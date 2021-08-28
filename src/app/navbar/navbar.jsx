import React from 'react';
import { AppBar, MenuItem, Toolbar } from '@material-ui/core';
import { childrenPropType } from '../../propTypes/reactPropTypes';
import { classesPropType } from '../../propTypes/materialUIPropTypes';

const Navbar = ({ children: navBarItems, classes }) => (
    <AppBar position="static" className={classes.root}>
        <Toolbar>
            {
                navBarItems?.map((navbarItem) => (
                    <MenuItem>{navbarItem}</MenuItem>
                ))
            }
        </Toolbar>
    </AppBar>
);

Navbar.propTypes = {
    children: childrenPropType,
    classes: classesPropType
};

Navbar.defaultProps = {
    children: null,
    classes: {}
};

export default Navbar;
