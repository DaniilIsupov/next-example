import React from 'react';
import Layout from '../components/Layout/layout';

import './styles.scss';

const Home = () => (
    <Layout title={'Home'}>
        <div className='hero'>
            <h1 className='title'>Welcome to Next.js!</h1>
            <p className='description'>
                NEXT.JS With SASS
            </p>

            <div className='row'>
                <a href='https://nextjs.org/docs' className='card'>
                    <h3>Documentation &rarr;</h3>
                    <p>Learn more about Next.js in the documentation.</p>
                </a>
                <a href='https://nextjs.org/learn' className='card'>
                    <h3>Next.js Learn &rarr;</h3>
                    <p>Learn about Next.js by following an interactive tutorial!</p>
                </a>
                <a
                    href='https://github.com/zeit/next.js/tree/master/examples'
                    className='card'
                >
                    <h3>Examples &rarr;</h3>
                    <p>Find other example boilerplates on the Next.js GitHub.</p>
                </a>
            </div>
        </div>
    </Layout>
);

export default Home;
