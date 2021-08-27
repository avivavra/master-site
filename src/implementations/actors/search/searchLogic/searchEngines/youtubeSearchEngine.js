import { openInNewTab } from '../../../../../utils/navigation';

const LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/640px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png';

const youtubeSearchEngine = {
    engineName: 'Youtube',
    logoUrl: LOGO_URL,
    performSearch: (text) => {
        openInNewTab(`https://www.youtube.com/results?search_query=${text}`);
    }
};

export default youtubeSearchEngine;
