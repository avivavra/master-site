import PropTypes from 'prop-types';

export const childrenPropType = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]);

export const refPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
        current: PropTypes.elementType
    })
]);
