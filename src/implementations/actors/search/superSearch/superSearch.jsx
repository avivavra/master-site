import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import searchEnginePropType from '../propTypes/searchEnginePropType';
import SelectSearchEngine from '../selectSearchEngine/selectSearchEngine';
import SingleEngineSearch from '../../../styled/actors/search/singleEngineSearch';

const SuperSearch = ({ searchEngines, defaultSearchEngineId }) => {
    const [currentSearchEngineId, setCurrentSearchEngineId] = useState(defaultSearchEngineId);

    const searchEngine = useMemo(() => (
        searchEngines[currentSearchEngineId]
    ), [searchEngines, currentSearchEngineId]);

    return (
        <div>
            <SelectSearchEngine
                searchEngines={searchEngines}
                currentSearchEngineId={currentSearchEngineId}
                setCurrentSearchEngineId={setCurrentSearchEngineId}
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
    // classes: PropTypes.instanceOf(Object)
};

SuperSearch.defaultProps = {
    // classes: {},
    defaultSearchEngineId: null
};

export default SuperSearch;
