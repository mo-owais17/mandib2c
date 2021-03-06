var plugins = [
  {
    plugin: require('C:/NEW VOLUME D/Codes And Programs/Mandi Express/B2C PWA/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
    options: { plugins: [] },
  },
  {
    plugin: require('C:/NEW VOLUME D/Codes And Programs/Mandi Express/B2C PWA/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
    options: { plugins: [] },
  },
  {
    plugin: require('C:/NEW VOLUME D/Codes And Programs/Mandi Express/B2C PWA/node_modules/gatsby-plugin-layout/gatsby-ssr'),
    options: {
      plugins: [],
      component:
        'C:\\NEW VOLUME D\\Codes And Programs\\Mandi Express\\B2C PWA\\src\\components\\layout\\layout.tsx',
    },
  },
  {
    plugin: require('C:/NEW VOLUME D/Codes And Programs/Mandi Express/B2C PWA/node_modules/gatsby-source-prismic-graphql/gatsby-ssr'),
    options: {
      plugins: [],
      repositoryName: 'mandixpress',
      path: '/preview',
      previews: true,
      sharpKeys: [{}],
    },
  },
  {
    plugin: require('C:/NEW VOLUME D/Codes And Programs/Mandi Express/B2C PWA/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
    options: {
      plugins: [],
      fonts: ['Open Sans:400,600,700', 'Poppins:400,600,700'],
      display: 'swap',
    },
  },
  {
    plugin: require('C:/NEW VOLUME D/Codes And Programs/Mandi Express/B2C PWA/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
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
    plugin: require('C:/NEW VOLUME D/Codes And Programs/Mandi Express/B2C PWA/node_modules/gatsby-plugin-offline/gatsby-ssr'),
    options: { plugins: [] },
  },
];
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`);

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map((plugin) => {
    if (!plugin.plugin[api]) {
      return undefined;
    }
    const result = plugin.plugin[api](args, plugin.options);
    if (result && argTransform) {
      args = argTransform({ args, result });
    }
    return result;
  });

  // Filter out undefined results.
  results = results.filter((result) => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
