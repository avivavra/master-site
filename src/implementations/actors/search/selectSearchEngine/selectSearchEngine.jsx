import React from 'react';
import PropTypes from 'prop-types';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from '@material-ui/core';
import searchEnginePropType from '../propTypes/searchEnginePropType';
import { classesPropType } from '../../../../propTypes/materialUIPropTypes';

const SelectSearchEngine = ({
    searchEngines,
    currentSearchEngineId,
    setCurrentSearchEngineId,
    classes
}) => {
    const handleChange = (event) => {
        setCurrentSearchEngineId(event.target.value);
    };

    return (
        <FormControl component="span" variant="outlined" className={classes.root}>
            <InputLabel id="search-engine">Search Engine</InputLabel>
            <Select
                labelId="search-engine"
                id="search-engine"
                value={currentSearchEngineId}
                onChange={handleChange}
                label="Search Engine"
            >
                {
                    searchEngines.map((searchEngine, i) => (
                        <MenuItem key={searchEngine.engineName} value={i}>
                            {searchEngine.engineName}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};

SelectSearchEngine.propTypes = {
    searchEngines: PropTypes.arrayOf(searchEnginePropType.isRequired).isRequired,
    currentSearchEngineId: PropTypes.number,
    setCurrentSearchEngineId: PropTypes.func.isRequired,
    classes: classesPropType
};

SelectSearchEngine.defaultProps = {
    currentSearchEngineId: null,
    classes: {}
};

export default SelectSearchEngine;
