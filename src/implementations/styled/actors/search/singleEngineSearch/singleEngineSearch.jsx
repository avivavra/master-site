import { withStyles } from '@material-ui/core';
import SingleEngineSearch from '../../../../actors/search/singleEngineSearch';

const styles = {
    root: {
        border: '0.1px solid',
        borderColor: 'lightgrey',
        '&:focus-within': {
            borderColor: 'blue'
        }
    },
    searchLink: {
        maxWidth: '4rem'
    },
    searchLinkImage: {
        width: 'inherit',
        height: 'inherit'
    },
    searchInput: {
        padding: '10px'
    }
};

export default withStyles(styles)(SingleEngineSearch);
