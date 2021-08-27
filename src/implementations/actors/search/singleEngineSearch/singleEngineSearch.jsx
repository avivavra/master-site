import React from 'react';
import { Button, TextField } from '@material-ui/core';
import searchEnginePropType from '../propTypes/searchEnginePropType';

const SingleEngineSearch = ({ searchEngine }) => (
    <div className="single-engine-search">
        <Button className="search-button">
            Search
        </Button>
        <TextField
            className="search-input"
            label={`Search ${searchEngine.engineName}`}
            variant="outlined"
        />
    </div>
);

SingleEngineSearch.propTypes = {
    searchEngine: searchEnginePropType.isRequired
};

export default SingleEngineSearch;
