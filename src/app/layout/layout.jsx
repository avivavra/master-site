import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

const Layout = ({ children }) => (
    <div id="layout">
        {children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Layout;
