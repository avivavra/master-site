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
import { classesPropType } from '../../../../propTypes/materialUIPropTypes';

const SingleEngineSearch = ({ searchEngine, autoFocus, classes }) => {
    const input = useRef();

    const clearInput = useCallback(() => {
        input.current.value = '';
    }, [input]);

    const performSearch = useCallback(() => {
        searchEngine.performSearch(input.current.value);
        clearInput();
    }, [searchEngine, input, clearInput]);

    const searchText = `Search${searchEngine ? ` ${searchEngine.engineName}` : ''}`;

    return (
        <Paper component="form" className={classes.root}>
            {
                searchEngine
                && (
                    <IconButton aria-label="search-site-link" className={classes.searchLink} onClick={searchEngine.emptySearch}>
                        <img alt="site-link" src={searchEngine.logoUrl} className={classes.searchLinkImage} />
                    </IconButton>
                )
            }
            <InputBase
                placeholder={searchText}
                inputProps={{ 'aria-label': 'search', ref: input }}
                autoFocus={autoFocus}
                className={classes.searchInput}
            />
            <IconButton aria-label="search" disabled={!searchEngine} onClick={performSearch}>
                <SearchIcon />
            </IconButton>
            <IconButton color="primary" aria-label="clear" onClick={clearInput}>
                <ClearIcon />
            </IconButton>
        </Paper>
    );
};

SingleEngineSearch.propTypes = {
    searchEngine: searchEnginePropType,
    autoFocus: PropTypes.bool,
    classes: classesPropType
};

SingleEngineSearch.defaultProps = {
    searchEngine: null,
    autoFocus: false,
    classes: {}
};

export default SingleEngineSearch;
