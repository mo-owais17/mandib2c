module.exports = [
  {
    plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
    options: { plugins: [] },
  },
  {
    plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
    options: {
      plugins: [],
      component:
        'C:\\NEW VOLUME D\\Codes And Programs\\Mandi Express\\B2C PWA\\src\\components\\layout\\layout.tsx',
    },
  },
  {
    plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
    options: {
      plugins: [],
      repositoryName: 'mandixpress',
      path: '/preview',
      previews: true,
      sharpKeys: [{}],
    },
  },
  {
    plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
    options: { plugins: [], color: '#333', showSpinner: false },
  },
  {
    plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
    options: {
      plugins: [],
      name: 'Picksy',
      short_name: 'Picksy',
      start_url: '/',
      background_color: '#ffffff',
      theme_color: '#292929',
      display: 'standalone',
      icon: 'src/images/favicon.png',
      cache_busting_mode: 'query',
      include_favicon: true,
      legacy: true,
      theme_color_in_head: true,
      cacheDigest: '7d00e7556cbe4e5b4ca8627166b8a20d',
    },
  },
  {
    plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
    options: { plugins: [] },
  },
  {
    plugin: require('../gatsby-browser.js'),
    options: { plugins: [] },
  },
];
