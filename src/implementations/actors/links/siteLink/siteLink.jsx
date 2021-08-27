import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';
import './site-link.css';
import '../link.css';

const SiteLink = ({ iconUrl, url }) => (
    <Link href={url} target="_blank" className="icon-link">
        <img alt="site-link" src={iconUrl} className="icon-link-img" />
    </Link>
);

SiteLink.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default SiteLink;
