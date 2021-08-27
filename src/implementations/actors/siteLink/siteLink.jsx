import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';
import './site-link.css';

const IconLink = ({ iconUrl, url }) => (
    <Link href={url} className="site-link">
        <img alt="icon" src={iconUrl} className="site-link-img" />
    </Link>
);

IconLink.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default IconLink;
