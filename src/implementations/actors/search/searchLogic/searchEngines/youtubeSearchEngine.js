import { openInNewTab } from '../../../../../utils/navigation';

const APP_URL = 'https://www.youtube.com';
const LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/640px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png';

const emptySearch = () => {
    openInNewTab(APP_URL);
};

const performSearch = (text) => {
    if (text) {
        openInNewTab(`${APP_URL}/results?search_query=${text}`);
    } else {
        emptySearch();
    }
};

const youtubeSearchEngine = {
    engineName: 'Youtube',
    logoUrl: LOGO_URL,
    emptySearch,
    performSearch
};

export default youtubeSearchEngine;
