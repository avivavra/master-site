import { withStyles } from '@material-ui/core';
import Section from '../../../../layouts/sectionsLayout/section';

const styles = {
    root: {
        padding: '10px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        alignSelf: 'center'
    },
    subSections: {
        display: 'flex',
        flexDirection: 'column'
    },
    subSectionContainer: {
        margin: '15px 0',
        alignSelf: 'center',
        justifyContent: 'center'
    }
};

export default withStyles(styles)(Section);
