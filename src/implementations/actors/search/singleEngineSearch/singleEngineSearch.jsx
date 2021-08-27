import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    IconButton,
    InputBase,
    Paper
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import searchEnginePropType from '../propTypes/searchEnginePropType';
import './single-engine-search.css';

const SingleEngineSearch = ({ searchEngine, autoFocus }) => {
    const input = useRef();

    const clearInput = useCallback(() => {
        input.current.value = '';
    }, [input]);

    const performSearch = useCallback(() => {
        searchEngine.performSearch(input.current.value);
        clearInput();
    }, [searchEngine, input, clearInput]);

    const searchText = `Search ${searchEngine.engineName}`;

    return (
        <Paper component="form" className="single-engine-search">
            <IconButton aria-label="search-site-link" className="search-site-link" onClick={searchEngine.emptySearch}>
                <img alt="site-link" src={searchEngine.logoUrl} className="search-site-link-img" />
            </IconButton>
            <InputBase
                placeholder={searchText}
                inputProps={{ 'aria-label': 'search google maps', ref: input }}
                autoFocus={autoFocus}
            />
            <IconButton aria-label="search" onClick={performSearch}>
                <SearchIcon />
            </IconButton>
            <IconButton color="primary" aria-label="clear" onClick={clearInput}>
                <ClearIcon />
            </IconButton>
        </Paper>
    );
};

SingleEngineSearch.propTypes = {
    searchEngine: searchEnginePropType.isRequired,
    autoFocus: PropTypes.bool.isRequired
};

export default SingleEngineSearch;
