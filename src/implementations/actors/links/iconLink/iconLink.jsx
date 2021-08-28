import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import SimpleActor from '../../simpleActor';

const IconLink = ({
    title,
    iconUrl,
    action,
    classes
}) => (
    <SimpleActor title={title}>
        <Button onClick={action} className={classes.link}>
            <img alt="icon" src={iconUrl} className={classes.linkImage} />
        </Button>
    </SimpleActor>
);

IconLink.propTypes = {
    title: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    classes: PropTypes.instanceOf(Object)
};

IconLink.defaultProps = {
    title: null,
    classes: {}
};

export default IconLink;
