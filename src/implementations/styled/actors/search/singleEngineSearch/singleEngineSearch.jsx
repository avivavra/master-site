import { withStyles } from '@material-ui/core';
import SingleEngineSearch from '../../../../actors/search/singleEngineSearch';

const styles = {
    searchLink: {
        width: '4rem'
    },
    searchLinkImage: {
        width: 'inherit',
        height: 'inherit'
    }
};

export default withStyles(styles)(SingleEngineSearch);
