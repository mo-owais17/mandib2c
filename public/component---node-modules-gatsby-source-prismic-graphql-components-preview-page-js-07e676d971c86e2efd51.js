(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    cOCo: function (e, t, n) {
      'use strict';
      n('sC2a'), n('sPse'), n('pJf4'), n('Ll4R'), n('v9g0');
      var r = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var a = r(n('RIqP')),
        i = r(n('o0o1')),
        o = r(n('yXPU')),
        u = r(n('lwsE')),
        c = r(n('W8MJ')),
        s = r(n('a1gu')),
        f = r(n('Nsbk')),
        p = r(n('PJYZ')),
        l = r(n('7W2i')),
        d = r(n('lSNA')),
        h = r(n('q1tI')),
        v = r(n('yXRw')),
        g = n('w2iB'),
        k = n('vAmO'),
        w = r(n('vRGJ')),
        x = (function (e) {
          function t() {
            var e, n;
            (0, u.default)(this, t);
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
              a[c] = arguments[c];
            return (
              (n = (0, s.default)(
                this,
                (e = (0, f.default)(t)).call.apply(e, [this].concat(a))
              )),
              (0, d.default)(
                (0, p.default)(n),
                'redirect',
                (function () {
                  var e = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r, a, o;
                      return i.default.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (t) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (window.location = '/'), e.abrupt('return')
                              );
                            case 3:
                              return (
                                (r = (0, g.linkResolver)(t)),
                                (a = (n.config.pages || [])
                                  .map(function (e) {
                                    var t = [],
                                      n = (0, w.default)(e.match, t).exec(r);
                                    return n
                                      ? n.slice(1).reduce(function (e, n, r) {
                                          return (
                                            e +
                                            (t[r]
                                              ? ''
                                                  .concat(
                                                    ((a = e),
                                                    -1 === a.indexOf('?')
                                                      ? '?'
                                                      : '&')
                                                  )
                                                  .concat(t[r].name, '=')
                                                  .concat(n)
                                              : n)
                                          );
                                          var a;
                                        }, e.path)
                                      : null;
                                  })
                                  .find(function (e) {
                                    return !!e;
                                  })),
                                (e.next = 7),
                                fetch(r).then(function (e) {
                                  return e.status;
                                })
                              );
                            case 7:
                              (e.t0 = e.sent),
                                (o = 200 === e.t0),
                                (window.location = !o && a ? a : r);
                            case 10:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              n
            );
          }
          var n;
          return (
            (0, l.default)(t, e),
            (0, c.default)(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.preview();
                },
              },
              {
                key: 'preview',
                value:
                  ((n = (0, o.default)(
                    i.default.mark(function e() {
                      var t, n, r, o, u, c, s, f, p, l, d, h, w;
                      return i.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.props.location),
                                  (n = (0, k.parseQueryString)(
                                    String(t.search).substr(1)
                                  )),
                                  (r = n.get('token')),
                                  (o = n.get('experiment')),
                                  (u = n.get('documentId')),
                                  (c = new Date()).setHours(c.getHours() + 1),
                                  (e.next = 9),
                                  v.default.getApi(
                                    'https://'.concat(
                                      this.config.repositoryName,
                                      '.cdn.prismic.io/api/v2'
                                    )
                                  )
                                );
                              case 9:
                                if (((s = e.sent), !r)) {
                                  e.next = 22;
                                  break;
                                }
                                return (
                                  (e.next = 13),
                                  s.previewSession(r, g.linkResolver, '/')
                                );
                              case 13:
                                if (
                                  ((document.cookie = ''
                                    .concat(v.default.previewCookie, '=')
                                    .concat(r, '; expires=')
                                    .concat(c.toUTCString(), '; path=/')),
                                  u)
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                return e.abrupt('return', this.redirect());
                              case 16:
                                return (e.next = 18), s.getByID(u);
                              case 18:
                                return (
                                  (f = e.sent),
                                  e.abrupt('return', this.redirect(f))
                                );
                              case 22:
                                if (!o) {
                                  e.next = 28;
                                  break;
                                }
                                (p = []),
                                  s.experiments.running &&
                                    s.experiments.running.length &&
                                    p.concat.apply(
                                      p,
                                      (0, a.default)(
                                        s.experiments.running.map(function (e) {
                                          return e.data.variations;
                                        })
                                      )
                                    ),
                                  o &&
                                    p.length &&
                                    (l = p.find(function (e) {
                                      return (
                                        e.label
                                          .toLowerCase()
                                          .replace(' ', '-') === o
                                      );
                                    })) &&
                                    ((document.cookie = ''
                                      .concat(v.default.experimentCookie, '=')
                                      .concat(l.ref, '; expires=')
                                      .concat(c.toUTCString(), '; path=/')),
                                    this.redirect()),
                                  (e.next = 35);
                                break;
                              case 28:
                                if (!u) {
                                  e.next = 35;
                                  break;
                                }
                                return (
                                  (d = (0, g.getCookies)()),
                                  (e.next = 32),
                                  s.getByID(u)
                                );
                              case 32:
                                (h = e.sent),
                                  (w =
                                    d.has(v.default.previewCookie) ||
                                    d.has(v.default.experimentCookie)),
                                  this.redirect(w && h);
                              case 35:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: 'render',
                value: function () {
                  return null;
                },
              },
              {
                key: 'config',
                get: function () {
                  return this.props.prismic.options;
                },
              },
            ]),
            t
          );
        })(h.default.Component);
      t.default = x;
    },
  },
]);
//# sourceMappingURL=component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js-07e676d971c86e2efd51.js.map
