import { withStyles } from '@material-ui/core';
import Section from '../../../../layouts/sectionsLayout/section';

const styles = {
    root: {
        padding: '10px',
        margin: '10px',
        display: 'flex',
        'flex-direction': 'column'
    },
    header: {
        'align-self': 'center'
    },
    subSections: {
        display: 'flex',
        'flex-direction': 'column'
    },
    subSectionContainer: {
        margin: '15px 0',
        'align-self': 'center',
        'justify-content': 'center'
    }
};

export default withStyles(styles)(Section);
