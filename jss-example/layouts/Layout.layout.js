import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import useGlobalStyles from '../styles/global.styles';

const MENU = [
    { label: 'Index', page: 'index', },
    { label: 'AMP on', page: 'amp', },
    { label: 'AMP off', page: 'noamp', },
];

const Layout = props => {
    useGlobalStyles();
    return (
        <div className="center">
            <ul className="flex">
                {MENU.map(({ label, page }) => (
                    <li className="m-r--1 m-r--last0" key={page}>
                        {page === props.pageCurrent ? (
                            <strong>{label}</strong>
                        ) : (
                            <Link href={`/${page}`} as={`/${page}`}>
                                <a>{label}</a>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
            {props.children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageCurrent: PropTypes.string.isRequired,
};

export default Layout;
