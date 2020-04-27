import { createUseStyles } from 'react-jss';

const styles = {
    '@global': {
        'body, html': {
            height: '100%',
            fontFamily: 'sans-serif',
        },
        'body > *': {
            position: 'relative',
            height: '100%',
        },
        '.flex': {
            display: 'flex',
        },
        '.m-r--1': {
            marginRight: '2em',
        },
        '.m-r--last0:last-child': {
            marginRight: 0,
        },
        '.center': {
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            height: '100%',
        },
    },
};

export default createUseStyles(styles);
