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

const SingleEngineSearch = ({ searchEngine, autoFocus, classes }) => {
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
        <Paper component="form" className={classes.root}>
            <IconButton aria-label="search-site-link" className={classes.searchLink} onClick={searchEngine.emptySearch}>
                <img alt="site-link" src={searchEngine.logoUrl} className={classes.searchLinkImage} />
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
    autoFocus: PropTypes.bool.isRequired,
    classes: PropTypes.instanceOf(Object)
};

SingleEngineSearch.defaultProps = {
    classes: {}
};

export default SingleEngineSearch;
