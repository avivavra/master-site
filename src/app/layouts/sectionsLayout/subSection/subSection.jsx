import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { childrenPropType } from '../../../../propTypes/reactPropTypes';
import { classesPropType } from '../../../../propTypes/materialUIPropTypes';

const displayTypes = {
    ROW: 'row',
    COLUMN: 'column'
};

const SubSection = ({
    displayType,
    children,
    classes
}) => {
    const displayTypeToClassName = {
        [displayTypes.ROW]: classes.rootRow,
        [displayTypes.COLUMN]: classes.rootColumn
    };

    const rootClassName = clsx(classes.root, displayTypeToClassName[displayType]);

    return (
        <div className={rootClassName}>
            {children}
        </div>
    );
};

SubSection.propTypes = {
    displayType: PropTypes.oneOf(Object.values(displayTypes)),
    children: childrenPropType.isRequired,
    classes: classesPropType
};

SubSection.defaultProps = {
    displayType: displayTypes.ROW,
    classes: {}
};

export { displayTypes };
export default SubSection;
