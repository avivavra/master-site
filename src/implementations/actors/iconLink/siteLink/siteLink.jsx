import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { openInNewTab } from '../../../../utils/navigation';
import IconLink from '../iconLink';

const SiteLink = ({ iconUrl, url }) => {
    const openUrl = useCallback(() => openInNewTab(url));

    return (
        <IconLink iconUrl={iconUrl} action={openUrl} />
    );
};

SiteLink.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default SiteLink;
