import React from 'react';
import { Grid } from '@material-ui/core';
import { childrenPropType } from '../propTypes/reactPropTypes';
import './layout.css';

const Layout = ({ children }) => (
    <Grid container id="layout">
        {
            children.map((child) => (
                <Grid item xs={6}>
                    {child}
                </Grid>
            ))
        }
    </Grid>
);

Layout.propTypes = {
    children: childrenPropType.isRequired
};

export default Layout;
