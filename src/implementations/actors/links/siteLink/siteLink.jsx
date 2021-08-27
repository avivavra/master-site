import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';
import SimpleActor from '../../simpleActor';
import './site-link.css';
import '../link.css';

const SiteLink = ({ title, iconUrl, url }) => (
    <SimpleActor title={title}>
        <Button>
            <Link href={url} target="_blank" className="icon-link">
                <img alt="site-link" src={iconUrl} className="icon-link-img" />
            </Link>
        </Button>
    </SimpleActor>
);

SiteLink.propTypes = {
    title: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

SiteLink.defaultProps = {
    title: null
};

export default SiteLink;
