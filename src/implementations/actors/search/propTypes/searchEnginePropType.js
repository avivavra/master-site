import { PropTypes } from 'prop-types';

const searchEnginePropType = PropTypes.shape({
    engineName: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    performSearch: PropTypes.func.isRequired
});

export default searchEnginePropType;
