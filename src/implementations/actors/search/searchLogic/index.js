import SearchPerformer from './searchPerformer';
import searchEngines from './searchEngines';

const searchEnginesEnum = {};

searchEngines.forEach((searchEngine) => {
    searchEnginesEnum[searchEngine.engineName.toUpperCase()] = searchEngine;
});

export { searchEnginesEnum as searchEngines };
export default SearchPerformer;
