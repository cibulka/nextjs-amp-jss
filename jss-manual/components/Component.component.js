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
            <p>I implement JSS by manually printing styles to Head element.</p>

            <h2>Result</h2>
            {isAmp ? (
                <>
                    <p>Validation error: "The mandatory attribute 'amp-custom' is missing in tag 'style amp-custom'."</p>
                    <p>I can see one style tag in markup without 'amp-custom' attribute. And second without the attribute and with styles.</p>
                    <p>Styles are applied (but AMP is probably broken).</p>
                    <p>Also there are some visual changes, as AMP version does not have `__next` wrapper around markup.</p>
                </>
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
