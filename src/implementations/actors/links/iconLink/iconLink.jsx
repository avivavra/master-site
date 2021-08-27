import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import './icon-link.css';
import '../link.css';

const IconLink = ({ iconUrl, action }) => (
    <Button onClick={action} className="icon-link">
        <img alt="icon" src={iconUrl} className="icon-link-img" />
    </Button>
);

IconLink.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

export default IconLink;
