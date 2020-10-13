(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    OUb6: function (t, e, n) {
      'use strict';
      n('sC2a');
      var a = n('9eSz'),
        i = n.n(a),
        r = n('2A+t'),
        o = n('izhR'),
        l = {
          wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            minHeight: [130, 270],
            borderRadius: 6,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
            '::after': {
              content: '""',
              display: 'block',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(to top, rgba(0, 0, 0, 0.48) , rgba(0, 0, 0, 0))',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            },
            '.gatsby-image-wrapper': {
              width: '100%',
              position: 'absolute !important',
              height: '100%',
              left: '0',
              top: '0',
            },
          },
          bannerContent: {
            color: 'white',
            position: 'relative',
            zIndex: 1,
            h1: {
              fontSize: ['17px', 4],
              fontWeight: '600',
              textTransform: 'capitalize',
            },
          },
        };
      e.a = function (t) {
        var e,
          n,
          a = t.title,
          c = t.subtitle,
          d = t.bgImage,
          p =
            null == d ||
            null === (e = d.localFile) ||
            void 0 === e ||
            null === (n = e.childImageSharp) ||
            void 0 === n
              ? void 0
              : n.fluid;
        return Object(r.c)(
          o.a,
          { as: 'section', sx: l.wrapper },
          p ? Object(r.c)(i.a, { fluid: p }) : null,
          Object(r.c)(
            o.a,
            { as: 'header', sx: l.bannerContent },
            Object(r.c)(o.f, { as: 'h1' }, a.replace(/-/g, ' ')),
            c && Object(r.c)(o.h, { as: 'p' }, c)
          )
        );
      };
    },
    cPc8: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'query', function () {
          return d;
        });
      var a = n('q1tI'),
        i = n.n(a),
        r = n('H8eV'),
        o = n('2BIS'),
        l = n('OUb6'),
        c = n('ca1K'),
        d = {
          id: '386300387',
          source:
            '\n\tquery($handle: String!) {\n\t\tshopifyCollection(handle: { eq: $handle }) {\n\t\t\timage {\n\t\t\t\tid\n\t\t\t\tsrc\n\t\t\t\tlocalFile {\n\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\tfluid(maxWidth: 910) {\n\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tproducts {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\thandle\n\t\t\t\tcreatedAt\n\t\t\t\tshopifyId\n\t\t\t\tavailableForSale\n\t\t\t\tvariants {\n\t\t\t\t\tid\n\t\t\t\t\tprice\n\t\t\t\t\tpriceV2 {\n\t\t\t\t\t\tamount\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t}\n\t\t\t\t\tshopifyId\n\t\t\t\t\tavailableForSale\n\t\t\t\t}\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\toriginalSrc\n\t\t\t\t\tlocalFile {\n\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\tfluid(maxWidth: 910, quality: 100) {\n\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        };
      e.default = function (t) {
        var e = t.data,
          n = t.pageContext,
          a = e.shopifyCollection,
          d = a.image,
          p = a.products,
          s = null == n ? void 0 : n.handle,
          h = s.charAt(0).toUpperCase() + s.slice(1);
        return i.a.createElement(
          o.a,
          {
            fluid: !0,
            homeLink: '/minimal',
            pathPrefix: '/minimal/collection',
            showNoticeBar: !1,
          },
          i.a.createElement(r.a, { title: h }),
          i.a.createElement(l.a, { title: h, bgImage: d }),
          i.a.createElement(c.a, {
            id: 'category',
            products: p,
            withLink: !0,
            isCategoryProduct: !0,
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-minimal-category-page-tsx-1e1e30ac7ff0ac45a69f.js.map
