import React from 'react';
import PropTypes from 'prop-types';
import { childrenPropType } from '../../../propTypes/reactPropTypes';

const displayTypes = {
    ROW: 'row',
    COLUMN: 'column'
};

const SubSection = ({ displayType, children, classes }) => {
    const displayTypeToClassName = {
        [displayTypes.ROW]: classes.rootRow,
        [displayTypes.COLUMN]: classes.rootColumn
    };

    const rootClassName = `${classes.root} ${displayTypeToClassName[displayType]}`;

    return (
        <div className={rootClassName}>
            {children}
        </div>
    );
};

SubSection.propTypes = {
    displayType: PropTypes.oneOf(Object.values(displayTypes)),
    children: childrenPropType.isRequired,
    classes: PropTypes.instanceOf(Object)
};

SubSection.defaultProps = {
    displayType: displayTypes.ROW,
    classes: {}
};

export { displayTypes };
export default SubSection;
