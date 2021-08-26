import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    Divider
} from '@material-ui/core';
import { childrenPropType } from '../propTypes/reactPropTypes';
import './section.css';

const Section = ({ name, children: subSections }) => (
    <Card className="section">
        <CardHeader
            className="section-header"
            title={name}
        />
        <CardContent className="sub-sections">
            <List>
                {
                    subSections.map((subSection, index) => (
                        <>
                            <ListItem className="sub-section">
                                {subSection}
                            </ListItem>
                            {
                                index !== subSections.length - 1
                                && <Divider />
                            }
                        </>
                    ))
                }
            </List>
        </CardContent>
    </Card>
);

Section.propTypes = {
    name: PropTypes.string.isRequired,
    children: childrenPropType.isRequired
};

export default Section;
