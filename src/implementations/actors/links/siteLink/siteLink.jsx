import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';
import SimpleActor from '../../simpleActor';

const SiteLink = ({
    title,
    iconUrl,
    url,
    classes
}) => (
    <SimpleActor title={title}>
        <Button>
            <Link href={url} target="_blank" className={classes.link}>
                <img alt="site-link" src={iconUrl} className={classes.linkImage} />
            </Link>
        </Button>
    </SimpleActor>
);

SiteLink.propTypes = {
    title: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    classes: PropTypes.instanceOf(Object)
};

SiteLink.defaultProps = {
    title: null,
    classes: {}
};

export default SiteLink;
