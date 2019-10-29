import React from 'react';
import Link from 'next/link';

import './styles.scss';

const Nav = (props) => {
    const { links } = props;

    return (
        <nav>
            <ul>
                {links.map(({ href, label }) => (
                    <li key={`nav-link-${href}-${label}`}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
