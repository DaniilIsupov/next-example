import React from 'react';
import Head from 'next/head';
import Nav from '../Nav/nav';

import './styles.scss';

const Layout = (props) => {
    const { children, title } = props;
    
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Nav
                links={[
                    { href: '/', label: 'Home' },
                    { href: '/contacts', label: 'Contacts' },
                ]}
            />

            {children}
        </div>
    );
};

export default Layout;
