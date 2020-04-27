import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './Component.styles';

const Component = props => {
    const classes = useStyles();
    const isAmp = props.pageCurrent === 'amp';

    return (
        <div className={classes.wrap}>
            <h1>{isAmp ? 'AMP on' : 'AMP off'}</h1>

            <h2>What should happen</h2>
            <p>I should be centered (from global className in wrapper) and <span className={classes.bold}>this should be bold</span> from (locale className).</p>

            <h2>How do I do it?</h2>
            <p>I apply jss styles as said in the <a href="https://github.com/zeit/next.js/tree/canary/examples/with-react-jss">official example</a>.</p>

            <h2>Result</h2>
            {isAmp ? (
                <p>Styles do not get applied at all. I can see empty style tag with "amp-custom" attribute in markup.</p>
            ) : (
                <p>Works as expected.</p>
            )}
        </div>
    );
};

Component.propTypes = {
    pageCurrent: PropTypes.string.isRequired,
};

export default Component;
