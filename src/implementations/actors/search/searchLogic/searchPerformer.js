import searchEngines from './searchEngines';

class SearchPerformer {
    constructor(searchEngine) {
        this.searchEngine = searchEngine;
    }

    perfromSearch = (text) => {
        this.searchEngine.perfromSearch(text);
    }
}

export { searchEngines };
export default SearchPerformer;
