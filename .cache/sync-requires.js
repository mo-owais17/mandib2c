const { hot } = require('react-hot-loader/root');

// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  'component---cache-caches-gatsby-plugin-offline-app-shell-js': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/.cache/caches/gatsby-plugin-offline/app-shell.js')
    )
  ),
  'component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js')
    )
  ),
  'component---src-pages-404-tsx': hot(
    preferDefault(require('/Users/owais/Documents/mandib2c/src/pages/404.tsx'))
  ),
  'component---src-pages-index-tsx': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/src/pages/index.tsx')
    )
  ),
  'component---src-pages-minimal-tsx': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/src/pages/minimal.tsx')
    )
  ),
  'component---src-pages-modern-tsx': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/src/pages/modern.tsx')
    )
  ),
  'component---src-templates-category-page-sidebar-tsx': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/src/templates/category-page-sidebar.tsx')
    )
  ),
  'component---src-templates-category-page-tsx': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/src/templates/category-page.tsx')
    )
  ),
  'component---src-templates-minimal-category-page-tsx': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/src/templates/minimal-category-page.tsx')
    )
  ),
  'component---src-templates-product-page-tsx': hot(
    preferDefault(
      require('/Users/owais/Documents/mandib2c/src/templates/product-page.tsx')
    )
  ),
};
