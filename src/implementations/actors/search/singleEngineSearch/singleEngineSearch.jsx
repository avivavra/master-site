import React, { useRef, useCallback } from 'react';
import {
    IconButton,
    InputBase,
    Paper,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import searchEnginePropType from '../propTypes/searchEnginePropType';
import './single-engine-search.css';

const SingleEngineSearch = ({ searchEngine }) => {
    const input = useRef();

    const performSearch = useCallback(() => {
        searchEngine.performSearch(input.current.value);
    }, [searchEngine, input]);

    const searchText = `Search ${searchEngine.engineName}`;

    return (
        <div className="single-engine-search">
            <Paper component="form">
                <IconButton aria-label="search-site-link" className="search-site-link">
                    <img alt="site-link" src={searchEngine.logoUrl} className="search-site-link-img" />
                </IconButton>
                <InputBase
                    placeholder={searchText}
                    inputProps={{ 'aria-label': 'search google maps', ref: input }}
                />
                <IconButton type="submit" aria-label="search" onClick={performSearch}>
                    <SearchIcon />
                </IconButton>
                <IconButton color="primary" aria-label="clear">
                    <ClearIcon />
                </IconButton>
            </Paper>
        </div>
    );
};

SingleEngineSearch.propTypes = {
    searchEngine: searchEnginePropType.isRequired
};

export default SingleEngineSearch;
