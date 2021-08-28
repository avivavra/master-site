import { withStyles } from '@material-ui/core';

const styles = {
    link: {
        width: '5rem',
        height: '5rem',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    linkImage: {
        width: 'inherit',
        height: 'inherit'
    }
};

const styledLink = (Component) => withStyles(styles)(Component);

export default styledLink;
