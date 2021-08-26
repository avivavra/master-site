import React from 'react';
import { childrenPropType } from '../propTypes/reactPropTypes';
import './layout.css';

const Layout = ({ children }) => (
    <div id="layout">
        {children}
    </div>
);

Layout.propTypes = {
    children: childrenPropType.isRequired
};

export default Layout;
