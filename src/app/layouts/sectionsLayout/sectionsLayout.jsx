import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { childrenPropType } from '../../propTypes/reactPropTypes';
import './sections-layout.css';

const sectionWidths = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    HALF_SCREEN: 'half-screen',
    FULL_SCREEN: 'full-screen'
};

const SectionsLayout = ({ children, sectionWidth }) => {
    const sectionWidthToSize = {
        [sectionWidths.EXTRA_SMALL]: 2,
        [sectionWidths.SMALL]: 3,
        [sectionWidths.MEDIUM]: 4,
        [sectionWidths.HALF_SCREEN]: 6,
        [sectionWidths.LARGE]: 9,
        [sectionWidths.FULL_SCREEN]: 12,
    };

    const sectionSize = sectionWidthToSize[sectionWidth];

    return (
        <Grid container id="layout">
            {
                children.map((child) => (
                    <Grid item xs={sectionSize}>
                        {child}
                    </Grid>
                ))
            }
        </Grid>
    );
};

SectionsLayout.propTypes = {
    children: childrenPropType.isRequired,
    sectionWidth: PropTypes.oneOf(Object.values(sectionWidths))
};

SectionsLayout.defaultProps = {
    sectionWidth: sectionWidths.MEDIUM
};

export { sectionWidths };
export default SectionsLayout;
