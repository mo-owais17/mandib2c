// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': () =>
    import(
      './dev-404-page.js' /* webpackChunkName: "component---cache-dev-404-page-js" */
    ),
  'component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js': () =>
    import(
      './../node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js' /* webpackChunkName: "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js" */
    ),
  'component---src-pages-404-tsx': () =>
    import(
      './../src/pages/404.tsx' /* webpackChunkName: "component---src-pages-404-tsx" */
    ),
  'component---src-pages-index-tsx': () =>
    import(
      './../src/pages/index.tsx' /* webpackChunkName: "component---src-pages-index-tsx" */
    ),
  'component---src-pages-minimal-tsx': () =>
    import(
      './../src/pages/minimal.tsx' /* webpackChunkName: "component---src-pages-minimal-tsx" */
    ),
  'component---src-pages-modern-tsx': () =>
    import(
      './../src/pages/modern.tsx' /* webpackChunkName: "component---src-pages-modern-tsx" */
    ),
  'component---src-templates-category-page-sidebar-tsx': () =>
    import(
      './../src/templates/category-page-sidebar.tsx' /* webpackChunkName: "component---src-templates-category-page-sidebar-tsx" */
    ),
  'component---src-templates-category-page-tsx': () =>
    import(
      './../src/templates/category-page.tsx' /* webpackChunkName: "component---src-templates-category-page-tsx" */
    ),
  'component---src-templates-minimal-category-page-tsx': () =>
    import(
      './../src/templates/minimal-category-page.tsx' /* webpackChunkName: "component---src-templates-minimal-category-page-tsx" */
    ),
  'component---src-templates-product-page-tsx': () =>
    import(
      './../src/templates/product-page.tsx' /* webpackChunkName: "component---src-templates-product-page-tsx" */
    ),
};
