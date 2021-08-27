const youtubeSearchEngine = {
    engineName: 'Youtube',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/640px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png',
    performSearch: (text) => {
        console.log(`searching ${text} in youtube`);
    }
};

export default youtubeSearchEngine;
