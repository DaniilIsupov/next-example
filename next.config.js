const withSass = require('@zeit/next-sass')

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    withSass
], {
    publicRuntimeConfig: {
        localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
            ? process.env.LOCALE_SUBPATHS
            : 'none',
    },
});

// module.exports = withSass({
//   /* config options here */
// })