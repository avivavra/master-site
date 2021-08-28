import React from 'react';
import { Grid } from '@material-ui/core';
import { childrenPropType } from '../../propTypes/reactPropTypes';
import './sections-layout.css';

const SectionsLayout = ({ children }) => (
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

SectionsLayout.propTypes = {
    children: childrenPropType.isRequired
};

export default SectionsLayout;
