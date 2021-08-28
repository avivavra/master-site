import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { childrenPropType } from '../../../app/propTypes/reactPropTypes';
import './simple-actor.css';

const SimpleActor = ({ title, children }) => (
    <span className="simple-actor">
        {children}
        {
            title
            && (
                <Typography variant="caption" component="span" className="actor-title">
                    {title}
                </Typography>
            )
        }
    </span>
);

SimpleActor.propTypes = {
    title: PropTypes.string,
    children: childrenPropType.isRequired
};

SimpleActor.defaultProps = {
    title: null
};

export default SimpleActor;
