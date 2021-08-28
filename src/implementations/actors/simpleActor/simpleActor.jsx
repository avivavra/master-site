import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { childrenPropType } from '../../../app/propTypes/reactPropTypes';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
};

const SimpleActor = ({ title, children, classes }) => (
    <span className={classes.root}>
        {children}
        {
            title
            && (
                <Typography variant="caption" component="span">
                    {title}
                </Typography>
            )
        }
    </span>
);

SimpleActor.propTypes = {
    title: PropTypes.string,
    children: childrenPropType.isRequired,
    classes: PropTypes.instanceOf(Object)
};

SimpleActor.defaultProps = {
    title: null,
    classes: {}
};

export default withStyles(styles)(SimpleActor);
