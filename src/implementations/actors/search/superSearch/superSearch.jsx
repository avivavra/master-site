import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import searchEnginePropType from '../propTypes/searchEnginePropType';
import SelectSearchEngine from '../../../styled/actors/search/selectSearchEngine';
import SingleEngineSearch from '../../../styled/actors/search/singleEngineSearch';

const SuperSearch = ({ searchEngines, defaultSearchEngineId, classes }) => {
    const [currentSearchEngineId, setCurrentSearchEngineId] = useState(defaultSearchEngineId);

    const searchEngine = useMemo(() => (
        searchEngines[currentSearchEngineId]
    ), [searchEngines, currentSearchEngineId]);

    return (
        <div className={classes.root}>
            <SelectSearchEngine
                searchEngines={searchEngines}
                currentSearchEngineId={currentSearchEngineId}
                setCurrentSearchEngineId={setCurrentSearchEngineId}
                classes={classes.selectSearchEngine}
            />
            {
                searchEngine
                && <SingleEngineSearch searchEngine={searchEngine} />
            }
        </div>
    );
};

SuperSearch.propTypes = {
    searchEngines: PropTypes.arrayOf(searchEnginePropType.isRequired).isRequired,
    defaultSearchEngineId: PropTypes.number,
    classes: PropTypes.instanceOf(Object)
};

SuperSearch.defaultProps = {
    defaultSearchEngineId: null,
    classes: {}
};

export default SuperSearch;
