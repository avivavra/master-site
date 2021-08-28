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
import { childrenPropType } from '../../../../propTypes/reactPropTypes';
import { classesPropType } from '../../../../propTypes/materialUIPropTypes';

const Section = ({
    name,
    children: subSections,
    dividers,
    classes
}) => (
    <Card className={classes.root}>
        <CardHeader
            className={classes.header}
            title={name}
        />
        <CardContent className={classes.subSections}>
            <List>
                {
                    subSections.map((subSection, index) => (
                        <>
                            <ListItem className={classes.subSectionContainer}>
                                {subSection}
                            </ListItem>
                            {
                                dividers
                                && index !== subSections.length - 1
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
    children: childrenPropType.isRequired,
    dividers: PropTypes.bool,
    classes: classesPropType
};

Section.defaultProps = {
    dividers: true,
    classes: {}
};

export default Section;
