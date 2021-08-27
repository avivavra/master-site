import youtubeSearchEngine from './youtubeSearchEngine';

const searchEngines = [youtubeSearchEngine];

const searchEnginesEnum = {};

searchEngines.forEach((searchEngine) => {
    searchEnginesEnum[searchEngine.name] = searchEngine;
});

export default searchEnginesEnum;
