import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { SimpleActor } from '../../simpleActor';
import './icon-link.css';
import '../link.css';

const IconLink = ({ title, iconUrl, action }) => (
    <SimpleActor title={title}>
        <Button onClick={action} className="icon-link">
            <img alt="icon" src={iconUrl} className="icon-link-img" />
        </Button>
    </SimpleActor>
);

IconLink.propTypes = {
    title: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

IconLink.defaultProps = {
    title: null
};

export default IconLink;
