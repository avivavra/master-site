import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { childrenPropType } from '../../../app/propTypes/reactPropTypes';

const SimpleActor = ({ title, children }) => (
    <span className="simple-actor">
        {
            title
            && (
                <Typography className="actor-title">
                    {title}
                </Typography>
            )
        }
        {children}
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
