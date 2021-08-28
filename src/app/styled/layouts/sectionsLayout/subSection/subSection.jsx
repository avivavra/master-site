import { withStyles } from '@material-ui/core';
import SubSection from '../../../../layouts/sectionsLayout/subSection';

const styles = {
    root: {
        display: 'flex'
    },
    rootRow: {
        flexDirection: 'row'
    },
    rootColumn: {
        flexDirection: 'column'
    }
};

export default withStyles(styles)(SubSection);
