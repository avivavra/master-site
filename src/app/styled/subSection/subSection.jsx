import { withStyles } from '@material-ui/core';
import SubSection from '../../subSection';

const styles = {
    root: {
        display: 'flex'
    },
    rootRow: {
        'flex-direction': 'row'
    },
    rootColumn: {
        'flex-direction': 'column'
    }
};

export default withStyles(styles)(SubSection);
