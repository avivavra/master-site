import React from 'react';
import PropTypes from 'prop-types';
import { childrenPropType } from '../propTypes/reactPropTypes';
import './section.css';

const Section = ({ name, children }) => (
    <div className="section">
        <div className="section-name">
            {name}
        </div>
        <div className="sub-sections">
            {children}
        </div>
    </div>
);

Section.propTypes = {
    name: PropTypes.string.isRequired,
    children: childrenPropType.isRequired
};

export default Section;
