(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '064o': function (t, e, a) {
      'use strict';
      a('E5k/');
      var n = a('q1tI'),
        l = a('2A+t'),
        r = a('izhR'),
        c = a('wG+1'),
        o = a('Bi3C'),
        i = a.n(o),
        s = a('JuHP'),
        d = {
          banner: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: ['center', 'center right'],
            minHeight: [280, 350],
            padding: [20, 30, 60],
            borderRadius: 6,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
            '::after': {
              content: '""',
              display: 'block',
              width: '100%',
              height: '100%',
              background: [
                'linear-gradient(to right, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0))',
                'linear-gradient(to right, rgba(0, 0, 0, 0.48) , rgba(0, 0, 0, 0))',
              ],
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            },
            a: { display: 'inline-block' },
          },
          bannerContent: {
            color: 'white',
            position: 'relative',
            zIndex: 1,
            h1: {
              fontSize: [3, 4],
              lineHeight: [1.7, '45px'],
              marginBottom: [15, 30],
            },
            button: {
              minWidth: 146,
              marginTop: [27, 35],
              svg: { position: 'relative', top: [0, '1px'] },
            },
          },
        };
      e.a = function (t) {
        var e = Object(s.a)(),
          a = Object(n.useState)(60),
          o = a[0],
          p = a[1],
          f = t.callUsBanner,
          h = t.callUsTitle,
          u = t.callUsButtonText,
          m = t.scrollTo,
          b = void 0 === m ? '#feature' : m;
        return (
          Object(n.useEffect)(
            function () {
              p(e < 1081 ? 80 : 60);
            },
            [e]
          ),
          Object(l.c)(
            r.a,
            {
              as: 'section',
              className: 'call-us-banner',
              sx: Object.assign(
                { backgroundImage: 'url(' + (f && f.url ? f.url : '') + ')' },
                d.banner
              ),
            },
            Object(l.c)(
              r.a,
              { as: 'header', sx: d.bannerContent },
              c.RichText.render(h),
              Object(l.c)(
                i.a,
                {
                  href: b,
                  style: { textDecoration: 'none' },
                  offset: function () {
                    return o;
                  },
                },
                Object(l.c)(
                  r.b,
                  { variant: 'white' },
                  Object(l.c)(
                    r.h,
                    { as: 'span' },
                    u ? c.RichText.asText(u) : 'Shop Now'
                  ),
                  Object(l.c)(
                    'svg',
                    { width: '15.394', height: '10', viewBox: '0 0 15.394 10' },
                    Object(l.c)('path', {
                      d:
                        'M13.674,6.343,12.427,7.6l2.89,2.877-12.025.012,0,1.768,11.992-.012L12.444,15.1,13.7,16.343l4.988-5.012Z',
                      transform: 'translate(-3.292 -6.343)',
                    })
                  )
                )
              )
            )
          )
        );
      };
    },
    '35ZX': function (t, e, a) {
      t.exports =
        a.p + 'static/home-banner-ae85195d6a21675c58f46ff62d79bf69.png';
    },
    BIS1: function (t) {
      t.exports = JSON.parse('{"data":{"allShopifyProduct":{"edges":[]}}}');
    },
    Bi3C: function (t, e, a) {
      var n;
      a('klQ5'),
        a('1dPr'),
        a('n7j8'),
        a('LagC'),
        a('pS08'),
        a('sc67'),
        a('E5k/'),
        a('R48M'),
        'undefined' != typeof self && self,
        (n = function (t) {
          return (function (t) {
            var e = {};
            function a(n) {
              if (e[n]) return e[n].exports;
              var l = (e[n] = { i: n, l: !1, exports: {} });
              return (
                t[n].call(l.exports, l, l.exports, a), (l.l = !0), l.exports
              );
            }
            return (
              (a.m = t),
              (a.c = e),
              (a.d = function (t, e, n) {
                a.o(t, e) ||
                  Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: n,
                  });
              }),
              (a.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return a.d(e, 'a', e), e;
              }),
              (a.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (a.p = ''),
              a((a.s = 0))
            );
          })([
            function (t, e, a) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n,
                l = a(1),
                r = (n = l) && n.__esModule ? n : { default: n };
              e.default = r.default;
            },
            function (t, e, a) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n,
                l =
                  Object.assign ||
                  function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var a = arguments[e];
                      for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) &&
                          (t[n] = a[n]);
                    }
                    return t;
                  },
                r = (function () {
                  function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                      var n = e[a];
                      (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n);
                    }
                  }
                  return function (e, a, n) {
                    return a && t(e.prototype, a), n && t(e, n), e;
                  };
                })(),
                c = a(2),
                o = (n = c) && n.__esModule ? n : { default: n },
                i = (function (t) {
                  function e(t) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, e);
                    var a = (function (t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ('object' != typeof e && 'function' != typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (a.smoothScroll = a.smoothScroll.bind(a)), a;
                  }
                  return (
                    (function (t, e) {
                      if ('function' != typeof e && null !== e)
                        throw new TypeError(
                          'Super expression must either be null or a function, not ' +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    r(e, [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          a(3).polyfill();
                        },
                      },
                      {
                        key: 'smoothScroll',
                        value: function (t) {
                          var e = this;
                          t.preventDefault();
                          var a = function () {
                            return 0;
                          };
                          void 0 !== this.props.offset &&
                            (a =
                              this.props.offset &&
                              this.props.offset.constructor &&
                              this.props.offset.apply
                                ? this.props.offset
                                : function () {
                                    return parseInt(e.props.offset);
                                  });
                          var n = t.currentTarget.getAttribute('href').slice(1),
                            l =
                              document.getElementById(n).getBoundingClientRect()
                                .top + window.pageYOffset;
                          window.scroll({ top: l - a(), behavior: 'smooth' }),
                            this.props.onClick && this.props.onClick(t);
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var t = this.props,
                            e =
                              (t.offset,
                              (function (t, e) {
                                var a = {};
                                for (var n in t)
                                  e.indexOf(n) >= 0 ||
                                    (Object.prototype.hasOwnProperty.call(
                                      t,
                                      n
                                    ) &&
                                      (a[n] = t[n]));
                                return a;
                              })(t, ['offset']));
                          return o.default.createElement(
                            'a',
                            l({}, e, { onClick: this.smoothScroll })
                          );
                        },
                      },
                    ]),
                    e
                  );
                })(c.Component);
              e.default = i;
            },
            function (e, a) {
              e.exports = t;
            },
            function (t, e, a) {
              !(function () {
                'use strict';
                t.exports = {
                  polyfill: function () {
                    var t = window,
                      e = document;
                    if (
                      !('scrollBehavior' in e.documentElement.style) ||
                      !0 === t.__forceSmoothScrollPolyfill__
                    ) {
                      var a,
                        n = t.HTMLElement || t.Element,
                        l = {
                          scroll: t.scroll || t.scrollTo,
                          scrollBy: t.scrollBy,
                          elementScroll: n.prototype.scroll || o,
                          scrollIntoView: n.prototype.scrollIntoView,
                        },
                        r =
                          t.performance && t.performance.now
                            ? t.performance.now.bind(t.performance)
                            : Date.now,
                        c =
                          ((a = t.navigator.userAgent),
                          new RegExp(
                            ['MSIE ', 'Trident/', 'Edge/'].join('|')
                          ).test(a)
                            ? 1
                            : 0);
                      (t.scroll = t.scrollTo = function () {
                        void 0 !== arguments[0] &&
                          (!0 !== i(arguments[0])
                            ? u.call(
                                t,
                                e.body,
                                void 0 !== arguments[0].left
                                  ? ~~arguments[0].left
                                  : t.scrollX || t.pageXOffset,
                                void 0 !== arguments[0].top
                                  ? ~~arguments[0].top
                                  : t.scrollY || t.pageYOffset
                              )
                            : l.scroll.call(
                                t,
                                void 0 !== arguments[0].left
                                  ? arguments[0].left
                                  : 'object' != typeof arguments[0]
                                  ? arguments[0]
                                  : t.scrollX || t.pageXOffset,
                                void 0 !== arguments[0].top
                                  ? arguments[0].top
                                  : void 0 !== arguments[1]
                                  ? arguments[1]
                                  : t.scrollY || t.pageYOffset
                              ));
                      }),
                        (t.scrollBy = function () {
                          void 0 !== arguments[0] &&
                            (i(arguments[0])
                              ? l.scrollBy.call(
                                  t,
                                  void 0 !== arguments[0].left
                                    ? arguments[0].left
                                    : 'object' != typeof arguments[0]
                                    ? arguments[0]
                                    : 0,
                                  void 0 !== arguments[0].top
                                    ? arguments[0].top
                                    : void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 0
                                )
                              : u.call(
                                  t,
                                  e.body,
                                  ~~arguments[0].left +
                                    (t.scrollX || t.pageXOffset),
                                  ~~arguments[0].top +
                                    (t.scrollY || t.pageYOffset)
                                ));
                        }),
                        (n.prototype.scroll = n.prototype.scrollTo = function () {
                          if (void 0 !== arguments[0])
                            if (!0 !== i(arguments[0])) {
                              var t = arguments[0].left,
                                e = arguments[0].top;
                              u.call(
                                this,
                                this,
                                void 0 === t ? this.scrollLeft : ~~t,
                                void 0 === e ? this.scrollTop : ~~e
                              );
                            } else {
                              if (
                                'number' == typeof arguments[0] &&
                                void 0 === arguments[1]
                              )
                                throw new SyntaxError(
                                  'Value could not be converted'
                                );
                              l.elementScroll.call(
                                this,
                                void 0 !== arguments[0].left
                                  ? ~~arguments[0].left
                                  : 'object' != typeof arguments[0]
                                  ? ~~arguments[0]
                                  : this.scrollLeft,
                                void 0 !== arguments[0].top
                                  ? ~~arguments[0].top
                                  : void 0 !== arguments[1]
                                  ? ~~arguments[1]
                                  : this.scrollTop
                              );
                            }
                        }),
                        (n.prototype.scrollBy = function () {
                          void 0 !== arguments[0] &&
                            (!0 !== i(arguments[0])
                              ? this.scroll({
                                  left: ~~arguments[0].left + this.scrollLeft,
                                  top: ~~arguments[0].top + this.scrollTop,
                                  behavior: arguments[0].behavior,
                                })
                              : l.elementScroll.call(
                                  this,
                                  void 0 !== arguments[0].left
                                    ? ~~arguments[0].left + this.scrollLeft
                                    : ~~arguments[0] + this.scrollLeft,
                                  void 0 !== arguments[0].top
                                    ? ~~arguments[0].top + this.scrollTop
                                    : ~~arguments[1] + this.scrollTop
                                ));
                        }),
                        (n.prototype.scrollIntoView = function () {
                          if (!0 !== i(arguments[0])) {
                            var a = f(this),
                              n = a.getBoundingClientRect(),
                              r = this.getBoundingClientRect();
                            a !== e.body
                              ? (u.call(
                                  this,
                                  a,
                                  a.scrollLeft + r.left - n.left,
                                  a.scrollTop + r.top - n.top
                                ),
                                'fixed' !== t.getComputedStyle(a).position &&
                                  t.scrollBy({
                                    left: n.left,
                                    top: n.top,
                                    behavior: 'smooth',
                                  }))
                              : t.scrollBy({
                                  left: r.left,
                                  top: r.top,
                                  behavior: 'smooth',
                                });
                          } else
                            l.scrollIntoView.call(
                              this,
                              void 0 === arguments[0] || arguments[0]
                            );
                        });
                    }
                    function o(t, e) {
                      (this.scrollLeft = t), (this.scrollTop = e);
                    }
                    function i(t) {
                      if (
                        null === t ||
                        'object' != typeof t ||
                        void 0 === t.behavior ||
                        'auto' === t.behavior ||
                        'instant' === t.behavior
                      )
                        return !0;
                      if ('object' == typeof t && 'smooth' === t.behavior)
                        return !1;
                      throw new TypeError(
                        'behavior member of ScrollOptions ' +
                          t.behavior +
                          ' is not a valid value for enumeration ScrollBehavior.'
                      );
                    }
                    function s(t, e) {
                      return 'Y' === e
                        ? t.clientHeight + c < t.scrollHeight
                        : 'X' === e
                        ? t.clientWidth + c < t.scrollWidth
                        : void 0;
                    }
                    function d(e, a) {
                      var n = t.getComputedStyle(e, null)['overflow' + a];
                      return 'auto' === n || 'scroll' === n;
                    }
                    function p(t) {
                      var e = s(t, 'Y') && d(t, 'Y'),
                        a = s(t, 'X') && d(t, 'X');
                      return e || a;
                    }
                    function f(t) {
                      var a;
                      do {
                        a = (t = t.parentNode) === e.body;
                      } while (!1 === a && !1 === p(t));
                      return (a = null), t;
                    }
                    function h(e) {
                      var a,
                        n,
                        l,
                        c,
                        o = (r() - e.startTime) / 468;
                      (c = o = o > 1 ? 1 : o),
                        (a = 0.5 * (1 - Math.cos(Math.PI * c))),
                        (n = e.startX + (e.x - e.startX) * a),
                        (l = e.startY + (e.y - e.startY) * a),
                        e.method.call(e.scrollable, n, l),
                        (n === e.x && l === e.y) ||
                          t.requestAnimationFrame(h.bind(t, e));
                    }
                    function u(a, n, c) {
                      var i,
                        s,
                        d,
                        p,
                        f = r();
                      a === e.body
                        ? ((i = t),
                          (s = t.scrollX || t.pageXOffset),
                          (d = t.scrollY || t.pageYOffset),
                          (p = l.scroll))
                        : ((i = a),
                          (s = a.scrollLeft),
                          (d = a.scrollTop),
                          (p = o)),
                        h({
                          scrollable: i,
                          method: p,
                          startTime: f,
                          startX: s,
                          startY: d,
                          x: n,
                          y: c,
                        });
                    }
                  },
                };
              })();
            },
          ]);
        }),
        (t.exports = n(a('q1tI')));
    },
    Dppf: function (t) {
      t.exports = JSON.parse(
        '{"data":{"prismic":{"allHomes":{"edges":[{"node":{"banner":{"dimensions":{"width":1200,"height":500},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/6f9a8864-6b3e-408f-b4de-75bc3536b826_home-banner.png?auto=compress,format"},"banner_button_text":[{"type":"paragraph","text":"Order Now","spans":[]}],"banner_subtitle":[{"type":"paragraph","text":"Banner Subtitle","spans":[]}],"banner_title":[{"type":"paragraph","text":"Banner Title","spans":[]}],"category_block":[{"category_slug":"vegetables","category_title":[{"type":"heading1","text":"Vegetables","spans":[]}],"image":{"dimensions":{"width":380,"height":280},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg?auto=compress,format"},"imageSharp":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'295\'%20viewBox=\'0%200%20400%20295\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2012l1%2013v1l-1%207c0%205%200%206%201%205l4-6%203-6%201-3c2%200%201-5-2-7-2-3-2-3-1-5V8C3%208%204%207%206%205c3-3%203-5-2-5H0v12m29-7l-3%2014-2%2010-5%207C11%2045%207%2051%208%2051l12%201c11%201%2012%201%2010%204-4%204-19%202-22-2-1-2-4-1-5%201l-2%203-1%2020a117%20117%200%20009%2051c1%203%202%204%202%201l-3-8c-2-5-2-7-2-17L5%2089%203%2077v-8h4c5%200%207%201%207%205%200%202%203%204%204%202%201-1%208%200%2010%202%201%202%201%202-4%208l-4%207%201%2018c2%2036%206%2057%2017%2081a219%20219%200%200064%2098c3%207%204-1%207-30%200-8%201-9%208-8%203%201%205%200%206-1l5-2c3-2%204-2%204-4-1-1-1-1%201-1%201%201%203%200%206-1%202-2%206-3%208-3%204-1%2010%202%2010%203-1%202%207%202%2017%200l6-1-2-2-2-2h8c2-2%207-1%207%200l-2%202c-2%201-2%201%201%201l4-2%202-3c3%200%206-17%203-19l-1-2v-1c-1-1-2-6-1-8%200-2%207-5%2018-8l7-2%208%202c16%204%2044%2017%2044%2020%200%202-3%204-5%203l-3%201%203%201%203%202c0%201-2%204-4%204h-1l-1%201-1-1-3-2-17-4c-3-1-2%202%201%205%209%207%209%207%208%2010l-7%205-6%204c0%202-8%207-10%207l-2%201-2%201-10%202h-2c0-4-13-12-17-11l-1%204%202%207c0%203%200%204%204%203%203%200%204%201%208%207%203%205%203%208%200%2011s-2%206%201%203l2-3%203-3h7l1%201c1%200%202-1%202-5l2-4v2l3%203%202%201-2%203c-2%203-2%203-1%204s6-1%206-3l2-3a374%20374%200%200027-36c2-3%202-3%2010-3%2013%202%2013%202%2016%208a297%20297%200%200113%2046v5h96v-74a892%20892%200%2000-2-73c0-4-6-14-8-13h-1c0-2%203-2%205%200%201%202%201%202%202%200%201-1%201-1%201%201l1%204c1%202%202-70%201-85V43h-4c-15%200-42-14-48-26%200-2-2-3-3-3l-1-2-2-3-2-1c0%202%205%2010%2011%2016%2011%2011%2028%2036%2028%2039%200%202-2%201-4-4-7-13-34-44-38-44-2%200-9-5-7-5l-1-1-2-2-2-4c-3-3-3-3-15-3-13%200-14%201-6%205%205%203%207%205%206%206h-2c-2-2-2-1%200%201%202%203%201%203-3%202-4-2-5-3-5-5s0-2%203-1l3%202-7-5-7-5h-23l-24%201%203%204%202%204c-2%200-8-4-8-7l-1-2h-15c-13%200-14%200-14%202s-3%204-4%201l-2-1-2-1-2-1-1%201c1%201-3%205-9%206h-4c0-1-2-1-4%201-4%202-8%202-6%200%200-1-1-4-3-4h-1l2-1%201-1%202-1c1-1%200-1-2-1l-4%201h-2l-6-1c-5%200-5%200-4%202%202%202%202%202%200%203-1%201-1%201%201%202l3%202-4%202c-4%201-5%202-4%204%200%202-1%203-3%200-2-1-2-1-3%201%200%202-3%203-5%202h-2l-1%201-5%201-5%202-1%201-1%201c-1-1-4%201-4%203s-1%203-3%201l-2-2v2c3%202%202%202-2%201l-4-1c-2%200%200%203%202%204%204%201-1%205-7%205-3%200-5%202-3%203v2l-1%202c0%203-3%204-12%204-6%201-7%201-8-1v-5l4-2%204-4%202-1-1-2-2-1-4%201-7%207-1%203c-1%202-2%202-3%201-1-3-4%202-5%207%200%205-4%2014-6%2014-1-1-2-2-2-9V45c-1%201-2%202-3%201l-1%201v2c-2%200-5-4-5-5l-2%201c-2%203-4%203-4%200l-4-9-4-8%205-3A340%20340%200%200186%201L58%200H29v5m337-2c-1%203%201%207%208%2013%206%204%2013%2011%2019%2018l4%203c3%200%204-1%201-3v-1c2%200%202%200%201-1l-3-2-7-4c0-2%203-3%205-1l4%201c2-2%201-3-2-3-3-1-5-3-3-3l2-2h1l2%203c2%201%202%201%202-10V0h-13l-13%201h-1l-3-1c-3%200-4%200-4%203M200%2014c0%202-2%203-6%203s-6%202-11%206l-6%204c-2%200-3%201-3%203l-1%203c-4%202-7%2013-5%2016l1%204c0%202%201%204%209%2012l8%209-2-1c-2-2-6%200-7%203%200%202%201%203%205%207l3%204-2-1-1-1-1%202%201%201%201%202c0%201-8%201-14-1h-3c-1%203-7-1-7-4l-1-1c-2%200-4-4-4-6v-3c-1-1-2-2-1-3l-3-6c-3-4-3-4-8-4l-7%202c-4%203-13%201-13-3v-4c-1-2-1-2%201-1h4l6-1%203-1%203-4%204-5c0-2%202-3%203-3%202-2%203-3%201-2l-2-1%202-2c7-3%200-4-9-1-3%200-3%200-3-2v-1c-4%201-13%2010-13%2012l-1%201v3l-1%201c0%203-2%203-4%202-6-6-16-1-17%207-1%201-2%202-9%202-4%200-7%200-6-1%202-1%203-2%201-3l2-1%204-3c2-1%202-1-3-1l-7%201c-2%201-4%204-2%205l-2%202c-8%202-10%2010-3%2010l7%203c3%203%203%204-5%202-10-2-15%202-7%205%202%201%202%201-1%203l-7%202-3%201v16l-2-3c-2-2-3-3-5-3l-2%201v11l1%2012c1%201-4%207-6%207-1%200-2-4-1-7a16%2016%200%20000-7c0-2-6-1-7%201l-1%204-2%208-2%207c-1%203%201%208%203%208%201%200%204-4%204-7%201-2%203-4%206-3l2-1c2-2%203-1%203%201-1%201%200%202%201%202%202%201%206-1%206-2h4c5%200%206-1%205-4%200-3%201-2%203%200l2%203%201-3%201-1%204-3c3-3%203-3%202-5-2-1-2-2%200-1l1-1%202-1c2%201%204-2%202-3-2-2-1-3%201-3h1v-3c2-2-3-6-7-6-3%200-3%200-6-5s-3-5-1-5l2-1%202%201%203%203%203-2c1-2%203-3%205-3s2%200%201%201c-2%201-1%202%205%207%207%205%209%205%203-1-3-3-3-3-1-2l14%206%203%203-3%201c-3%202-3%205%200%209%202%203%209%204%209%201%200-2%204-5%206-4%201%200%202%201%202%204v4l-3%201c-4%200-15%206-15%208l-4%203c-4%201-5%203-7%206l-2%204-6-5c-7-7-10-8-14-4-2%203-2%204-1%204v3c0%203%202%206%206%208%203%202%207%203%207%202l1-1c1%201%205-1%205-2-1-1%203-4%206-4s4%201%205%202c3%204%205%202%206-4v-7l1%201c0%205%208%200%208-5%201-5%201-6%202-4%202%203%204%202%205-1s4-4%207-1l2%202c2-1%204%203%204%206l1%203%203%201c3%201%205-1%203-3l1-1c2%200%202-1%201-5%200-5%200-6%202-7h2l1%202c1%200%200%2010-2%2011l-1%206c0%203%205%202%206%200l2-2%203%201%202%201c0%203%203%203%205%201l2-1v2l1-2h2l2%202%206-4h-3c-2%202-5%201-4-1l-1-1c-2%201-3%200-1-2%201-1%201-1-1-1s-2%200%200-1h2l1%201h3c4%205%2011-1%207-6l-7-10v-2l4%201%202%201%202%201%201%201h3c1%201%201%200%201-2-1-4%201-4%202%200v4l1-3%201-3%201-1c0-1-1-2-2-1v-1c0-2%201-2%204%200l2%201h3c2%201%202%201%200%204-2%204-1%207%201%207%202%201%202%200%202-2s1-3%203-1c1%201%202%200%203-2%201-3%203-3%203-1%200%203%2029%2017%2034%2017l-1%201%201%201c1-1%201-1%200%200l1%201c1-1%204%200%206%201a378%20378%200%200142%2030c8%205%2016%2010%2020%2011l8%202%204%202h3c2%201%203%200%200-2-2-2%200-2%204%200l9%203%208%203c5%203%208%202%208-2%200-3%202-2%208%203%207%205%207%204%209%202s2-3%202-6c-1-4-1-4-29-17a9162%209162%200%2001-44-20%20280%20280%200%2001-31-19l-51-37c-19-15-22-17-23-14h-1l-1-1c-3%200-12-8-12-10%201-1%200-2-1-3h-7l1-2c1-1%202-4%201-6-2-2-1-2%201-1%201%201%202%202%203%201%202-2%201-3-1-3l-4-2-4-3h-1l2-3%201-2%201-1%201-4c2-5%2010-4%2010%201%200%202%206%204%2010%205%203%200%203%200%202-2l-1-3v-4c3%202%208-3%207-8-1-3-8-11-8-9m92%207l-2%202c1%201%200%201-1%201s-2%200-1%202l-1%201-1-1h-1c-1%201-2%203-1%204%200%202%200%203-2%203-2%201-3%203-1%203s4-2%204-5l1-2%201%202%204%201c4-1%205-1%207%201%203%202%204%202%204%201-1-4%200-7%202-7l1%201c-1%201%202%203%203%202l4%201%204%202c2-1-5-5-7-5l-2-1-2-2-7-3c-4-3-5-3-6-1m36%202c-2%201-1%203%201%206l1%203v1l9%2012-8-1c-1-2-4-1-4%201h-1c-3-1-2%201%202%205s4%204%207%203l2-2-1-2c0-2%204-3%204-1v1c-3-2-2%200%200%203l1%204%202%204h2c-2-4%201-4%203-1l2%204%201%202%202%203%201%202%203%205%202%202%205%208c7%2011%207%209%200-5-7-13-8-18-3-12l4%204%202%202%202%202v-2l-1-4c0-4-2-6-3-4-1%201-1%201-2-1-1-1-3-2-4-1l-1-1-1-1c-2%200-5-4-11-14a356%20356%200%2000-18-25m-57%2012h-4l-1%201%202%201-2%201c-4-1-3%202%201%203%202%201%203%200%203-1h1c0%202%201%202%202%202h2l3%201%203%202%202%201c1%200%202%201%201%203%200%203%200%203%202%202l2-3%201-2%201%202c-1%202%201%203%206%201%201%200%206-6%206-8s-13%200-14%202l-4%201c-1-1-1-1%201-2l2-2c-1-1-7-3-8-2l-1-1-1-1h-2c0-2-3-3-4-1m56%2022c-1%203-1%204%202%207%207%207%2018%2023%2017%2026%200%202%202%204%203%202%202-2%201-3-2-8l-15-20-3-7v-4l-2%204m59-2l2%206%202%204c2%200%205%204%205%206%200%203%201%205%202%203v-5l-1-3-1-5c0-4-1-7-3-7h-1c-2-1-5%200-5%201m-143%201c-2%201-2%201%202%205s4%204%209%205l5-1c1-2-5-8-6-7l-2-1c-2-1-5-2-8-1m-12%208c-3%206-3%2010%201%2010s11-11%209-14c-3-4-6-2-10%204m-130-3c2%202%201%208-1%209l-4%203-2%203h2l3%201h11l-2-3c-3-2-4-8-2-8%203%200-1-4-4-5h-1m214%202c-1%204-1%204%203%205l3%201%202%203%202%204c0%204%207%2011%2010%2010%202-2%201-4-3-7-1-1-5-5-6-9-3-5-4-7-7-8-4-1-4-1-4%201m-17%2011l-4%202c-1%201-1%201%201%201l3%201c0%202%2013%208%2013%206%201-3%200-7-2-8-2-3-9-4-11-2m-153%207h-3l-1%201c0%205-12%207-17%203-1-2-2-2-2-1l-2%201-2%201-3%2014%209%201c4%201%205%201%207-2%203-3%203-5%200-2-2%202-5%202-11-1l-3-2%203-1%204-2%207-1%209-1c3-2%206-6%206-8h-1m-58%2027c-2%201-1%205%201%206l1%203h1c0-2%202-1%202%201l1%202c1-1%204%201%203%202l1%201%205%201c5%200%207-1%207-5%200-2-1-3-10-7-10-5-11-6-12-4m107%2016c-7%205-11%2012-7%2015l1%203c0%202%206%2011%207%2011l1-1h6c1-1%201-1-1-3-3-2-2-4%202-3l5-1h3c1-1%200-2-2-3-6-2-11-10-9-13v-1l1-1v-1c-2%200-2%200-1-1%203-4-1-4-6-1M1%20200c0%2047%200%2052%202%2053v6l-2%2013v8l3%201%202%202-1%201c0%202%204%206%206%205l3%201c1%201%201%201-2%203-4%202-8%201-10-2l-1-2v6h24c23%200%2024%200%2023-2a160%20160%200%2001-8-17c-9-20-12-32-17-59-2-15-3-18-8-32L5%20159l-4-9v50m119-45v3c1%203%201%205-1%205l-3%202-2%202c-2%201-2%202-2%204%200%204%200%204%203%204s3%200%203%204c0%203%200%204%202%204s8-5%207-6l2-1h5c1-1%202-3%200-2s-3-1-2-3%201-2%202-1c1%202%201-6-1-10l1-3%206%203c-1%201%202%204%204%204%203-1%204-3%201-3s-4-1-2-3h3c1%202%203%201%202-1-3-4-14-3-18%202l-4%202-1%202c0%202-2%201-3-2%200-5-2-8-2-6m-36%208l-1%201%201%202%201%201%201-1c-1-1%202-3%203-2v4l2-1h2c0%201%201%202%203%201%202%200%202%200%201%201-2%201-2%201%201%201%205%201%205%201%206-1%200-2%200-2%201-1%202%202%202%202%203%200%202-2%201-2-6-4s-14-2-18-1m-15%202l-1%203-1%203-1-2c0-3%200-3-2-3s-3%200-3%202c1%203%202%204%204%203l2%202c0%202%204%203%204%201l1-2v2c-1%206-1%209%201%209s4-3%205-7l1-6c2-4%201-6-4-6l-6%201m246%2019c-3%201-3%203%200%206%202%201%202%202%201%204-2%204%204%208%207%204%202-2%201-10-1-12s-4-3-7-2m26%202c-3%200-5%202-4%203l-1%203v2l1%204c0%206%207%206%2012%200%203-3%204-8%202-9l-2-1c0-2-4-3-8-2M48%20258l12%2027%205%2010h6c6%200%207-1%204-4a351%20351%200%2001-27-33\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.3605442176870748,"src":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/e1133/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg","srcSet":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/116d1/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg 200w,\\n/static/7eeb8b7b52cbbb116228d4de98bc2b8a/e1133/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg 380w","srcWebp":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/3546a/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp","srcSetWebp":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/8f92f/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp 200w,\\n/static/7eeb8b7b52cbbb116228d4de98bc2b8a/3546a/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp 380w","sizes":"(max-width: 380px) 100vw, 380px"}}}}],"call_us_banner":{"dimensions":{"width":1200,"height":500},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/6f9a8864-6b3e-408f-b4de-75bc3536b826_home-banner.png?auto=compress,format"},"call_us_button_text":[{"type":"paragraph","text":"Call us button","spans":[]}],"call_us_title":[{"type":"paragraph","text":"Call us text","spans":[]}],"how_it_works_subtitle":[{"type":"paragraph","text":"Let\'s see how it works","spans":[]}],"how_it_works_title":[{"type":"heading1","text":"How it Works","spans":[]}],"trending_block_title":[{"type":"paragraph","text":"Trending Product","spans":[]}],"view_more_text":[{"type":"paragraph","text":"View More","spans":[]}],"how_it_works_group":[{"title":[{"type":"paragraph","text":"1st way","spans":[]}],"description":[{"type":"paragraph","text":"Some description","spans":[]}],"image":{"dimensions":{"width":60,"height":60},"alt":null,"copyright":null,"url":"https://prismic-io.s3.amazonaws.com/mandixpress/3bd8b77b-d36f-4a57-81d8-ae48140b954d_feature-2.svg"}}]}}]}}}}'
      );
    },
    MIeJ: function (t, e, a) {
      'use strict';
      var n = a('BIS1'),
        l = a('q1tI'),
        r = a.n(l),
        c = a('Wbzz'),
        o = a('ca1K'),
        i = {
          id: '73481108',
          source:
            '\n\tquery {\n\t\tallShopifyProduct(filter: { tags: { eq: "Trending" } }, limit: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\thandle\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tshopifyId\n\t\t\t\t\tavailableForSale\n\t\t\t\t\tvariants {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprice\n\t\t\t\t\t\tpriceV2 {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\tshopifyId\n\t\t\t\t\t\tavailableForSale\n\t\t\t\t\t}\n\t\t\t\t\timages {\n\t\t\t\t\t\tid\n\t\t\t\t\t\toriginalSrc\n\t\t\t\t\t\tlocalFile {\n\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\tfluid {\n\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        };
      e.a = function (t) {
        var e = t.withLink,
          a = void 0 !== e && e;
        return r.a.createElement(c.StaticQuery, {
          query: '' + i,
          render: function (t) {
            var e = t.allShopifyProduct,
              n = null == e ? void 0 : e.edges;
            return r.a.createElement(o.a, {
              id: 'trendingProducts',
              withLink: a,
              gridTitle: 'Trending Product',
              products: n,
            });
          },
          data: n,
        });
      };
    },
    QeBL: function (t, e, a) {
      'use strict';
      a.r(e);
      var n = a('Dppf'),
        l = a('q1tI'),
        r = a.n(l),
        c = a('Wbzz'),
        o = a('mwIZ'),
        i = a.n(o),
        s = a('H8eV'),
        d = a('2BIS'),
        p = a('tSJS'),
        f = a('2A+t'),
        h = a('izhR'),
        u = a('9eSz'),
        m = a.n(u),
        b = a('wG+1'),
        g = a('IdFE'),
        v = {
          wrapper: {
            a: {
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
            },
            '&:hover': {
              '.gatsby-image-wrapper': { transform: 'scale(1.1)' },
              figcaption: {
                background:
                  'linear-gradient(to top, rgba(0, 0, 0, 0.7) , rgba(0, 0, 0, 0))',
                h3: { bottom: 'calc(50% - 20px)' },
                '.textBtn': { opacity: 1, visibility: 'visible' },
              },
            },
          },
          figure: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            borderRadius: 6,
            overflow: 'hidden',
            '.gatsby-image-wrapper': {
              width: '100%',
              height: [120, 280],
              transition: 'all 0.2s ease',
            },
          },
          figcaption: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: ['center', 'flex-end'],
            padding: [20, 30],
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            background: [
              'linear-gradient(to top, rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0))',
              'linear-gradient(to top, rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0))',
            ],
            h3: {
              fontSize: ['17px', 2],
              fontWeight: '600',
              position: 'absolute',
              width: 'calc(100% - 60px)',
              bottom: ['calc(50% - 17px)', 30],
              transition: 'bottom 0.25s ease-out',
            },
          },
          textBtn: {
            opacity: 0,
            visibility: 'hidden',
            position: 'absolute',
            bottom: 30,
            fontWeight: '700',
            textTransform: 'capitalize',
            width: 'calc(100% - 60px)',
            display: ['none', 'flex'],
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.2s ease',
            svg: {
              width: 20,
              height: 'auto',
              marginLeft: 10,
              position: 'relative',
              marginTop: 1,
            },
          },
        },
        w = function (t) {
          var e = t.thumbnail,
            a = t.title,
            n = t.path,
            l = t.btnTex,
            r = b.RichText.asText(a);
          return Object(f.c)(
            h.a,
            { sx: v.wrapper },
            Object(f.c)(
              c.Link,
              { to: '/collection/' + n },
              Object(f.c)(
                h.a,
                { as: 'figure', sx: v.figure },
                e ? Object(f.c)(m.a, { fluid: e, alt: r }) : null,
                Object(f.c)(
                  h.a,
                  { as: 'figcaption', sx: v.figcaption },
                  Object(f.c)(h.f, { as: 'h3' }, r),
                  Object(f.c)(
                    h.h,
                    { className: 'textBtn', sx: v.textBtn },
                    Object(f.c)(h.h, { as: 'span' }, l || 'View Items', ' '),
                    Object(f.c)(g.i, null)
                  )
                )
              )
            )
          );
        },
        y = {
          wrapper: { py: [20, 30] },
          grid: {
            gridGap: [20, 30],
            gridTemplateColumns: '1fr',
            '@media only screen and (min-width: 568px)': {
              gridTemplateColumns: '1fr 1fr',
            },
            '@media only screen and (min-width: 992px)': {
              gridTemplateColumns: '1fr 1fr 1fr',
            },
          },
        },
        x = function (t) {
          var e,
            a = t.categoryBlock,
            n =
              ((e = []),
              a.forEach(function (t, a) {
                e.push({
                  id: 'category-' + a,
                  title: t.category_title,
                  thumbnail: t.imageSharp.childImageSharp.fluid,
                  path: t.category_slug,
                });
              }),
              e);
          return Object(f.c)(
            h.a,
            { sx: y.wrapper },
            Object(f.c)(
              h.e,
              { sx: y.grid },
              n.map(function (t) {
                return Object(f.c)(w, {
                  key: 'category-block--key' + t.id,
                  path: t.path,
                  thumbnail: t.thumbnail,
                  title: t.title,
                });
              })
            )
          );
        },
        _ = a('rLBy'),
        S = a('ca1K'),
        k = {
          id: '3588962736',
          source:
            '\n\tquery {\n\t\tallShopifyProduct(sort: { fields: [createdAt], order: DESC }, limit: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\thandle\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tshopifyId\n\t\t\t\t\tavailableForSale\n\t\t\t\t\tvariants {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprice\n\t\t\t\t\t\tpriceV2 {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\tshopifyId\n\t\t\t\t\t\tavailableForSale\n\t\t\t\t\t}\n\t\t\t\t\timages {\n\t\t\t\t\t\tid\n\t\t\t\t\t\toriginalSrc\n\t\t\t\t\t\tlocalFile {\n\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\tfluid {\n\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        },
        E = function () {
          return r.a.createElement(c.StaticQuery, {
            query: '' + k,
            render: function (t) {
              var e = t.allShopifyProduct,
                a = null == e ? void 0 : e.edges;
              return r.a.createElement(S.a, {
                id: 'latestProducts',
                gridTitle: 'Latest Product',
                products: a,
              });
            },
            data: _,
          });
        },
        O = a('trlm'),
        j = {
          wrapper: {
            paddingTop: 45,
            paddingBottom: [25, 45],
            paddingX: [20, 45, 75],
            marginBottom: [20, 30],
            borderRadius: 6,
            textAlign: ['left', 'center'],
            backgroundColor: 'white',
            '@media only screen and (max-width: 767px)': {
              '.featureCard': {
                paddingTop: 20,
                paddingBottom: 20,
                textAlign: 'left',
              },
            },
          },
          header: {
            marginBottom: [25, 45],
            h3: { color: 'primary', fontSize: ['17px', 2], marginBottom: 10 },
          },
        },
        A = function (t) {
          var e = t.howItWorksTitle,
            a = t.howItWorksSubtitle,
            n = t.howItWorksGroup;
          return Object(f.c)(
            h.a,
            { as: 'section', sx: j.wrapper },
            Object(f.c)(
              h.a,
              { as: 'header', sx: j.header },
              Object(f.c)(h.f, { as: 'h3' }, b.RichText.asText(e)),
              Object(f.c)(h.h, null, b.RichText.asText(a))
            ),
            Object(f.c)(
              h.e,
              { gap: [0, 20, 50, 105], columns: ['1fr', '1fr 1fr 1fr'] },
              n.map(function (t, e) {
                return Object(f.c)(O.a, {
                  key: e,
                  thumbnail: t.image.url,
                  title: b.RichText.asText(t.title),
                  shortInfo: b.RichText.asText(t.description),
                });
              })
            )
          );
        },
        T = a('ZLvs'),
        M = a('MIeJ'),
        I = a('064o'),
        Z = {
          id: '907026492',
          source:
            '\n\tquery {\n\t\tprismic {\n\t\t\tallHomes {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tbanner\n\t\t\t\t\t\tbanner_button_text\n\t\t\t\t\t\tbanner_subtitle\n\t\t\t\t\t\tbanner_title\n\t\t\t\t\t\tcategory_block {\n\t\t\t\t\t\t\tcategory_slug\n\t\t\t\t\t\t\tcategory_title\n\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\timageSharp {\n\t\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\t\tfluid {\n\t\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcall_us_banner\n\t\t\t\t\t\tcall_us_button_text\n\t\t\t\t\t\tcall_us_title\n\t\t\t\t\t\thow_it_works_subtitle\n\t\t\t\t\t\thow_it_works_title\n\t\t\t\t\t\ttrending_block_title\n\t\t\t\t\t\tview_more_text\n\t\t\t\t\t\thow_it_works_group {\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\timage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        };
      e.default = function () {
        return r.a.createElement(c.StaticQuery, {
          query: '' + Z,
          render: function (t) {
            var e = i()(t, 'prismic.allHomes.edges[0].node'),
              a = e.banner.url,
              n = e.banner_title,
              l = e.banner_subtitle,
              c = e.banner_button_text,
              o = e.category_block,
              f = e.call_us_banner,
              h = e.call_us_title,
              u = e.call_us_button_text,
              m = e.how_it_works_title,
              b = e.how_it_works_subtitle,
              g = e.how_it_works_group;
            return r.a.createElement(
              d.a,
              null,
              r.a.createElement(s.a, { title: 'Home' }),
              r.a.createElement(p.a, {
                banner: a,
                bannerTitle: n,
                bannerSubTitle: l,
                bannerButtonText: c,
              }),
              r.a.createElement(x, { categoryBlock: o }),
              r.a.createElement(T.a, null),
              r.a.createElement(M.a, null),
              r.a.createElement(A, {
                howItWorksTitle: m,
                howItWorksSubtitle: b,
                howItWorksGroup: g,
              }),
              r.a.createElement(E, null),
              r.a.createElement(I.a, {
                callUsBanner: f,
                callUsTitle: h,
                callUsButtonText: u,
              })
            );
          },
          data: n,
        });
      };
    },
    ZLvs: function (t, e, a) {
      'use strict';
      var n = a('cPq4'),
        l = a('q1tI'),
        r = a.n(l),
        c = a('Wbzz'),
        o = a('ca1K'),
        i = {
          id: '2039974797',
          source:
            '\n\tquery {\n\t\tallShopifyProduct(filter: { tags: { eq: "Featured" } }, limit: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\thandle\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tshopifyId\n\t\t\t\t\tavailableForSale\n\t\t\t\t\tvariants {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprice\n\t\t\t\t\t\tpriceV2 {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\tshopifyId\n\t\t\t\t\t\tavailableForSale\n\t\t\t\t\t}\n\t\t\t\t\timages {\n\t\t\t\t\t\tid\n\t\t\t\t\t\toriginalSrc\n\t\t\t\t\t\tlocalFile {\n\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\tfluid {\n\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        };
      e.a = function (t) {
        var e = t.withLink,
          a = void 0 !== e && e;
        return r.a.createElement(c.StaticQuery, {
          query: '' + i,
          render: function (t) {
            var e = t.allShopifyProduct,
              n = null == e ? void 0 : e.edges;
            return r.a.createElement(o.a, {
              id: 'feature',
              withLink: a,
              gridTitle: 'Featured Product',
              products: n,
            });
          },
          data: n,
        });
      };
    },
    cPq4: function (t) {
      t.exports = JSON.parse('{"data":{"allShopifyProduct":{"edges":[]}}}');
    },
    rLBy: function (t) {
      t.exports = JSON.parse(
        '{"data":{"allShopifyProduct":{"edges":[{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzQwNDcxMTc0NzM=","title":"Spinach","handle":"spinach","createdAt":"2020-10-13T08:14:50Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzQwNDcxMTc0NzM=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1MzU2MzIxNjAzMw==","price":"150.00","priceV2":{"amount":"150.0","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1MzU2MzIxNjAzMw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODEzNzgxOTk3MTM=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/41WVSdCpo_L.jpg?v=1602576891","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'519\'%20viewBox=\'0%200%20400%20519\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M97%2011L85%2025c-6%209-8%2019-9%2033l-2%2019c-3%207-4%2026-2%2027v1l1%206%202%206-2%204c-4%205-4%205%201%2011l4%205v9c0%2010%202%2016%206%2020l3%202h-5a41%2041%200%2001-12-4l-12-2c-5%200-5%200-6%203l1%205c2%202%202%203%201%205l-1%201-3-1h-4l3-1c3-1%203-1-1-1l-7-1c-2%200-2%200-1%201%204%202-4%201-11-2-3-2-12-2-13%200l2%202%207%207c6%207%2018%2017%2025%2018l6%203%207%203c4%202%204%202%204%200s-6-5-9-5h-1l-2-1c-1-1-1-1%201-1h3l-3-1c-2-1-2-1-1-2l10%205%204%203c3%200%203%200%202%202v1l1-1h1l-2%204c-4%205-7%2012-7%2015%200%205%206%2016%2013%2024%202%201%203%204%204%206%201%206%206%2011%2012%2014%204%202%205%203%206%205%200%204%209%2013%2016%2016%205%203%2011%209%2010%2010l1%205c2%204%202%204%204%203l4-2c4-2%204%201%202%2010l-2%2017c0%205-1%209-3%2014-3%2011-2%2013%207%2010l6-2v6c0%205%200%205%205%209l5%206%201%201c3-1%203%200%202%202l-2%204-1%203v11l2%204%202%2011%201%208%203-13c0-4%204-14%204-11%200%202%200%202%202-1l1-6%201-2c1%200%202%201%201%203l-5%2023-1%2010c-2%204%200%2035%203%2045%201%208%204%2015%209%2019%203%204%204%203%201-1l-3-6-2-6c-5-5-6-36-3-59l3-17c1-7%202-8%204-5%201%203%201%2015-1%2019l1%203v3l1%2013%201%2017%202%206%201%205%201%205%203%208c4%206%206%2020%204%2021-3%202-10%200-14-2h-2v1l3%202h2v1c-2%201%203%206%206%206h3c2%201%206%202%207%201l3-1%2014-2c12-2%2014-2%2016-1%201%201%201%200%201-1%200-2%200-2%201-1%202%202%201-1%200-5-2-4-5-7-10-9l-3-4-1-4c-2-3%200-11%203-12%202-1%2010%209%2011%2013%201%203%206%209%208%209%203%200%203%207%200%2010v2h2l2-1c1%201%204%200%204-2s3-2%205%200c1%202%202%202%205%202%204-1%204-3%201-9-2-4-2-5-1-7l6-13c1-3%201-3%203-2%202%202%205%200%206-4l2-4%201-8%201-8c2-2-1-43-3-52-5-20-4-18-2-21l3-3%202%202c4%205%206-4%203-18-1-7%203-13%2011-17%204-2%204-2%208%200%206%203%2010%201%2010-6%201-7%208-23%2011-24s6-5%206-8l2-4c5-6%207-14%207-19v-8l2-8%204-7%204-7%204-8%203-6c2-8%202-12%202-20l-3-23c-3-15-3-18%205-33%206-13%207-18%205-28-1-7-1-7-4-6-3%200-13%206-16%209l-3%202-1-2-4-5c-4-3-10-13-10-15l-3-7a1708%201708%200%2001-26-53c0-6-26-24-32-22h-1c-1-1-6-1-5%201h-2l-13-2-2%201v1c2%202%201%204-2%202-1-1-10%201-10%202l-1%201c0-1-3%201-5%204l-3%204%202-1h1c1%202%201%203-1%203h-3c-2%200-4%202-5%203-3%203-3%203-1%204l4%201h1c0%202-4%202-6%201-2-3-7%203-7%208l-1%208-1%204-3-2c-4-5-12-5-11%200v1l-1-1-2-4-2-2-1%204c0%203%200%203%202%204l8%208c-1%201-5-3-12-10-8-8-21-17-22-16h-3c0%201-1%201-2-1l-1-3%202%201c1%201%201%201%201-1%203-9-35-34-50-34l-5%201m138%20406l1%2012c0%203%200%203-1%202s-1-1-1%201v3l-1-5-1-6c-1-2-1-2-1%203v6a496%20496%200%20012%2031c1%201%202%204%204%204%203%200%204-16%201-32l-2-18-2-10%201%209m-37%208l-3%208c0%204-2%203-1-1%201-7-3-1-4%207-2%208-2%2011%200%206%203-8%203-9%204-7l-1%203-2%208v13c-1%208%200%2015%202%2015l2-4c0-2%200-3-1-2l-1-1%201-1v-3l5-30%203-14c0-3-2-2-4%203m-56%2010l1%202%201%204v2c1-1%202-1%202%202%200%204%202%208%203%208%203-2-4%2010-11%2018v2l4-5%2010-12c7-8%207-10%203-13l-7-4c-5-5-6-5-6-4\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":0.7692307692307693,"src":"/static/cb39e0ff3040d80d40092dcf4a0e30e4/72de5/41WVSdCpo_L.jpg","srcSet":"/static/cb39e0ff3040d80d40092dcf4a0e30e4/116d1/41WVSdCpo_L.jpg 200w,\\n/static/cb39e0ff3040d80d40092dcf4a0e30e4/72de5/41WVSdCpo_L.jpg 385w","srcWebp":"/static/cb39e0ff3040d80d40092dcf4a0e30e4/dc6c3/41WVSdCpo_L.webp","srcSetWebp":"/static/cb39e0ff3040d80d40092dcf4a0e30e4/8f92f/41WVSdCpo_L.webp 200w,\\n/static/cb39e0ff3040d80d40092dcf4a0e30e4/dc6c3/41WVSdCpo_L.webp 385w","sizes":"(max-width: 385px) 100vw, 385px"}}}}]}}]}}}'
      );
    },
    s9Uc: function (t, e, a) {
      'use strict';
      a.d(e, 'e', function () {
        return r;
      }),
        a.d(e, 'd', function () {
          return c;
        }),
        a.d(e, 'f', function () {
          return o;
        }),
        a.d(e, 'g', function () {
          return i;
        }),
        a.d(e, 'a', function () {
          return s;
        }),
        a.d(e, 'b', function () {
          return d;
        }),
        a.d(e, 'c', function () {
          return p;
        });
      var n = a('q1tI'),
        l = a.n(n),
        r = function () {
          return l.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '25.517',
              height: '27.17',
              viewBox: '0 0 25.517 27.17',
            },
            l.a.createElement(
              'g',
              { transform: 'translate(0.26 0.25)' },
              l.a.createElement('path', {
                d:
                  'M24.884,7.63,22.746,5.492a1.633,1.633,0,0,0-.773-.435A1.221,1.221,0,0,0,21.9,3.942,1.226,1.226,0,0,0,22.493,2.9V1.225A1.227,1.227,0,0,0,21.268,0H3.73A1.227,1.227,0,0,0,2.5,1.225V2.9a1.226,1.226,0,0,0,.588,1.047,1.222,1.222,0,0,0-.068,1.114,1.633,1.633,0,0,0-.773.435L.113,7.63A.391.391,0,0,0,.389,8.3a3.141,3.141,0,0,1,.873.109A5.839,5.839,0,0,0,.553,12.8l2.91,12.285A2.054,2.054,0,0,0,5.468,26.67H19.529a2.054,2.054,0,0,0,2.005-1.586L24.444,12.8a5.84,5.84,0,0,0-.709-4.393,3.148,3.148,0,0,1,.873-.109.39.39,0,0,0,.276-.667Zm-21.6-6.4A.445.445,0,0,1,3.73.781H21.268a.445.445,0,0,1,.444.444V2.9c0,.245-.418,1.425-.418,1.67a.445.445,0,0,1-.444.444H4.148A.445.445,0,0,1,3.7,4.566c0-.245-.418-1.425-.418-1.67Zm20.4,11.394L20.774,24.9a1.275,1.275,0,0,1-1.245.985H5.468A1.275,1.275,0,0,1,4.223,24.9L1.314,12.619A5.055,5.055,0,0,1,1.981,8.73c.073.043.145.088.22.134a3.73,3.73,0,0,0,2.223.685,3.731,3.731,0,0,0,2.224-.685A2.953,2.953,0,0,1,8.459,8.3a2.954,2.954,0,0,1,1.812.568A3.733,3.733,0,0,0,12.5,9.55a3.731,3.731,0,0,0,2.224-.685,3.177,3.177,0,0,1,3.625,0,3.956,3.956,0,0,0,4.45,0c.074-.046.148-.091.221-.135a5.055,5.055,0,0,1,.668,3.889ZM22.383,8.2a3.179,3.179,0,0,1-3.626,0,3.954,3.954,0,0,0-4.449,0,2.953,2.953,0,0,1-1.812.568A2.955,2.955,0,0,1,10.684,8.2a3.733,3.733,0,0,0-2.224-.685A3.732,3.732,0,0,0,6.235,8.2a2.953,2.953,0,0,1-1.812.567A2.952,2.952,0,0,1,2.613,8.2a3.981,3.981,0,0,0-1.364-.6L2.8,6.044a.857.857,0,0,1,.61-.253h2.5l-.629.961a.391.391,0,1,0,.654.428l.909-1.389h8.717l.23.545a.391.391,0,0,0,.72-.3l-.1-.24h5.173a.856.856,0,0,1,.609.253L23.748,7.6a3.994,3.994,0,0,0-1.366.6Zm0,0',
                transform: 'translate(0)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.5',
              }),
              l.a.createElement('path', {
                d:
                  'M109.282,464.938H96.545a.393.393,0,0,0,0,.781h12.737a.393.393,0,0,0,0-.781Zm0,0',
                transform: 'translate(-90.415 -442.72)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.5',
              })
            )
          );
        },
        c = function () {
          return l.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '36.945',
              height: '33.668',
              viewBox: '0 0 36.945 33.668',
            },
            l.a.createElement(
              'g',
              {
                transform:
                  'matrix(0.891, -0.454, 0.454, 0.891, -29.054, -43.403)',
              },
              l.a.createElement(
                'g',
                { transform: 'translate(0 63.998)' },
                l.a.createElement(
                  'g',
                  {
                    id: 'Group_4060',
                    'data-name': 'Group 4060',
                    transform: 'translate(0 0)',
                  },
                  l.a.createElement('path', {
                    d:
                      'M29.921,75.568A14.672,14.672,0,0,0,18.5,67.854C16.086,64.8,8.512,64.033,8.185,64a.625.625,0,0,0-.643.847,50.391,50.391,0,0,1,1.7,5.017,21.245,21.245,0,0,0-3.353,1.856C4.213,69.031.782,69,.625,69A.625.625,0,0,0,0,69.623c0,3.621,1.262,5.439,2.106,6.25C1.262,76.684,0,78.5,0,82.123a.625.625,0,0,0,.625.625c.157,0,3.588-.034,5.269-2.723a24.442,24.442,0,0,0,4.755,2.457A6.645,6.645,0,0,0,10,85.873a.625.625,0,0,0,.625.625c.186,0,4.436-.037,6.553-2.52a14.653,14.653,0,0,0,12.743-7.8A.625.625,0,0,0,29.921,75.568ZM9.077,65.37c2.1.3,5.548,1.052,7.5,2.391a19.787,19.787,0,0,0-6.167,1.6C10.129,68.264,9.516,66.547,9.077,65.37Zm2.188,19.842c.083-1.739.484-2.183.6-2.274a20.336,20.336,0,0,0,3.572.938A9.051,9.051,0,0,1,11.265,85.212Zm.524-2.3v0l.005,0Zm5.086-.167c-3.652,0-9.624-3-10.73-4.13A.624.624,0,0,0,5.7,78.43a.659.659,0,0,0-.114.01.625.625,0,0,0-.46.367,4.771,4.771,0,0,1-3.858,2.636c.2-3.917,2.049-4.963,2.144-5.014a.628.628,0,0,0,0-1.111c-.084-.045-1.948-1.084-2.145-5.011a4.806,4.806,0,0,1,3.858,2.632.625.625,0,0,0,1.021.189C7.251,72,13.223,69,16.875,69a13.409,13.409,0,0,1,11.78,6.875A13.409,13.409,0,0,1,16.875,82.748Z',
                    transform: 'translate(0 -63.998)',
                    fill: '#292929',
                  }),
                  l.a.createElement('path', {
                    d:
                      'M299.917,176.306a9.143,9.143,0,0,1,1.146-4.655.625.625,0,0,0-1.041-.692,11.226,11.226,0,0,0,0,10.693.625.625,0,1,0,1.04-.693A9.022,9.022,0,0,1,299.917,176.306Z',
                    transform: 'translate(-281.167 -164.431)',
                    fill: '#292929',
                  }),
                  l.a.createElement('path', {
                    d:
                      'M258.219,170.786a.626.626,0,0,0-.864.174A10.2,10.2,0,0,0,256,176.307a11.387,11.387,0,0,0,.694,3.97.625.625,0,0,0,1.171-.438,10.139,10.139,0,0,1-.615-3.532,9.143,9.143,0,0,1,1.146-4.655A.626.626,0,0,0,258.219,170.786Z',
                    transform: 'translate(-241 -164.432)',
                    fill: '#292929',
                  }),
                  l.a.createElement('circle', {
                    cx: '1.25',
                    cy: '1.25',
                    r: '1.25',
                    transform: 'translate(21.25 8.75)',
                    fill: '#292929',
                  })
                )
              )
            )
          );
        },
        o = function () {
          return l.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '30.4',
              height: '22.08',
              viewBox: '0 0 30.4 22.08',
            },
            l.a.createElement(
              'g',
              { transform: 'translate(0.2 -70.8)' },
              l.a.createElement('path', {
                d:
                  'M241.879,131a.879.879,0,0,0-.879.879v2.344a.879.879,0,0,0,1.758,0v-2.344A.879.879,0,0,0,241.879,131Z',
                transform: 'translate(-226.879 -56.484)',
                fill: '#292929',
                stroke: '#fff',
                strokeWidth: '0.4',
              }),
              l.a.createElement('path', {
                d:
                  'M292.608,131.39a.879.879,0,1,0-1.463.975l1.172,1.758a.879.879,0,0,0,1.463-.975Z',
                transform: 'translate(-273.947 -56.483)',
                fill: '#292929',
                stroke: '#fff',
                strokeWidth: '0.4',
              }),
              l.a.createElement('path', {
                d:
                  'M173.536,131.146a.879.879,0,0,0-1.219.244l-1.172,1.758a.879.879,0,1,0,1.463.975l1.172-1.758A.879.879,0,0,0,173.536,131.146Z',
                transform: 'translate(-160.978 -56.483)',
                fill: '#292929',
                stroke: '#fff',
                strokeWidth: '0.4',
              }),
              l.a.createElement('path', {
                d:
                  'M30,82.426a3.228,3.228,0,0,0-2.388-3.113,8.271,8.271,0,0,0-3.795-5.753A15.545,15.545,0,0,0,15,71a15.545,15.545,0,0,0-8.817,2.56,8.271,8.271,0,0,0-3.795,5.753,3.223,3.223,0,0,0,.191,6.271l1.053,4.211A3.8,3.8,0,0,0,7.327,92.68H22.673a3.8,3.8,0,0,0,3.695-2.885l1.053-4.211A3.228,3.228,0,0,0,30,82.426ZM5.337,89.369l-.93-3.72H8.365l.659,5.273h-1.7a2.048,2.048,0,0,1-1.99-1.553Zm14.527-3.72L19.2,90.922H15.879V85.648Zm-5.743,5.273H10.8l-.659-5.273h3.985Zm10.542-1.553a2.048,2.048,0,0,1-1.99,1.553h-1.7l.659-5.273h3.958Zm2.114-5.478H3.223a1.465,1.465,0,0,1,0-2.93.879.879,0,0,0,.879-.879A6.329,6.329,0,0,1,7.186,75,13.779,13.779,0,0,1,15,72.758,13.779,13.779,0,0,1,22.814,75,6.329,6.329,0,0,1,25.9,80.082a.879.879,0,0,0,.879.879,1.465,1.465,0,0,1,0,2.93Z',
                fill: '#292929',
                stroke: '#fff',
                strokeWidth: '0.4',
              })
            )
          );
        },
        i = function () {
          return l.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '30.266',
              height: '30.213',
              viewBox: '0 0 30.266 30.213',
            },
            l.a.createElement(
              'g',
              { transform: 'translate(-29.848 -79.885)' },
              l.a.createElement('path', {
                d:
                  'M30.959,12.163a2.017,2.017,0,0,0-.911-1.333,6.882,6.882,0,0,0-.717-.4,2.308,2.308,0,0,0,1.636-2.5,1.915,1.915,0,0,0-.807-1.305c-.05-.035-.106-.057-.159-.087,0-.006,0-.013,0-.019a1.915,1.915,0,0,0-.807-1.305,2.018,2.018,0,0,0-1.586-.3,6.78,6.78,0,0,0-.737.2,6.78,6.78,0,0,0,.2-.737,2.015,2.015,0,0,0-.3-1.586,1.917,1.917,0,0,0-1.307-.807h-.018a1.8,1.8,0,0,0-.087-.159,1.915,1.915,0,0,0-1.306-.807,2.307,2.307,0,0,0-2.5,1.637,6.881,6.881,0,0,0-.4-.717,2.017,2.017,0,0,0-1.333-.911,1.916,1.916,0,0,0-1.493.353,2.317,2.317,0,0,0-.457,3.182,11.751,11.751,0,0,1,1.183,2.044l.1.224a6.6,6.6,0,0,0-5.318,1.919,6.67,6.67,0,0,0-.913,1.139L1.267,28.286A1.764,1.764,0,0,0,3.7,30.723L22.1,19.058a6.648,6.648,0,0,0,3.057-6.231l.225.1a11.775,11.775,0,0,1,2.044,1.184,2.313,2.313,0,0,0,1.358.434,2.256,2.256,0,0,0,1.823-.892,1.912,1.912,0,0,0,.353-1.492Zm-2.072-2.61a12.464,12.464,0,0,0-1.322.288A7.316,7.316,0,0,0,25.1,9.79L25.02,9.8l.1-.133a6.253,6.253,0,0,1,3.658-2.392,1.056,1.056,0,0,1,.834.148.961.961,0,0,1,.4.655,1.354,1.354,0,0,1-1.123,1.473ZM27.808,5.866a1.055,1.055,0,0,1,.834.148.937.937,0,0,1,.264.279,2.186,2.186,0,0,0-.333.038A7.136,7.136,0,0,0,24.339,9.1l-.672.911-1.176.178,3.721-3.721a5.937,5.937,0,0,1,1.6-.6ZM25.659,3.418a2.128,2.128,0,0,0,.039-.333.928.928,0,0,1,.279.264,1.061,1.061,0,0,1,.148.834,5.952,5.952,0,0,1-.6,1.6L21.807,9.5l.178-1.176.911-.672a7.138,7.138,0,0,0,2.763-4.234ZM22.437,3.1A1.357,1.357,0,0,1,23.91,1.981a.962.962,0,0,1,.655.4,1.061,1.061,0,0,1,.148.834,6.259,6.259,0,0,1-2.392,3.658l-.133.1.012-.079a7.294,7.294,0,0,0-.051-2.467A12.628,12.628,0,0,0,22.437,3.1ZM18.661,4a1.353,1.353,0,0,1,.247-1.836.975.975,0,0,1,.578-.195.942.942,0,0,1,.168.015,1.059,1.059,0,0,1,.695.485,6.257,6.257,0,0,1,.9,4.279L20.979,8.5l-1.036-2.29A12.773,12.773,0,0,0,18.661,4Zm3.892,13.462a5.691,5.691,0,0,1-.973.779L3.185,29.906a.8.8,0,0,1-1.1-1.1L13.748,10.411a5.728,5.728,0,0,1,.782-.976A5.636,5.636,0,0,1,19.639,7.89l1.132,2.5a.491.491,0,0,0,.1.14l0,0,.585.585h0a.468.468,0,0,0,.141.1l2.5,1.132A5.632,5.632,0,0,1,22.553,17.462Zm7.274-4.379a1.355,1.355,0,0,1-1.835.248,12.747,12.747,0,0,0-2.213-1.282l-2.29-1.036,1.755-.265a6.25,6.25,0,0,1,4.279.9,1.06,1.06,0,0,1,.485.695.961.961,0,0,1-.18.745Z',
                transform: 'translate(29.01 78.998)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              }),
              l.a.createElement('path', {
                d:
                  'M31.083,25.118a4.353,4.353,0,0,1-1.283-3.1V22l-.8.02A5.181,5.181,0,0,0,34.2,27.2l-.02-.8A4.352,4.352,0,0,1,31.083,25.118Z',
                transform: 'translate(14.467 69.33)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              }),
              l.a.createElement('path', {
                d:
                  'M25.814,31.449A3.441,3.441,0,0,1,24.8,29H24a4.235,4.235,0,0,0,1.249,3.015l.138.138A4.235,4.235,0,0,0,28.4,33.4v-.8a3.441,3.441,0,0,1-2.449-1.014Z',
                transform: 'translate(17.466 65.131)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              }),
              l.a.createElement('path', {
                d:
                  'M20.683,37.318a3,3,0,0,1-.883-2.132V35H19v.186A3.815,3.815,0,0,0,22.815,39H23v-.8h-.186A3,3,0,0,1,20.683,37.318Z',
                transform: 'translate(20.466 61.532)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              }),
              l.a.createElement('path', {
                d:
                  'M15.083,45.317a.96.96,0,0,1-.283-.683V44H14v.635A1.766,1.766,0,0,0,15.766,46.4H16.4v-.8h-.635a.96.96,0,0,1-.683-.283Z',
                transform: 'translate(23.465 56.132)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              })
            )
          );
        },
        s = function () {
          return l.a.createElement(
            'svg',
            { width: '15.394', height: '10', viewBox: '0 0 15.394 10' },
            l.a.createElement('path', {
              d:
                'M13.674,6.343,12.427,7.6l2.89,2.877-12.025.012,0,1.768,11.992-.012L12.444,15.1,13.7,16.343l4.988-5.012Z',
              transform: 'translate(-3.292 -6.343)',
            })
          );
        },
        d = function () {
          return l.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '30',
              height: '26.25',
              viewBox: '0 0 30 26.25',
            },
            l.a.createElement(
              'g',
              { transform: 'translate(0 -32.001)' },
              l.a.createElement(
                'g',
                { transform: 'translate(3.749 42)' },
                l.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  l.a.createElement('path', {
                    d:
                      'M83.364,202.654h-17.5a1.877,1.877,0,0,0-1.875,1.875v1.25a11.846,11.846,0,0,0,6.429,10.556.625.625,0,1,0,.574-1.111,10.6,10.6,0,0,1-5.753-9.445v-1.25a.625.625,0,0,1,.625-.625h17.5a.625.625,0,0,1,.625.625v1.25a10.594,10.594,0,0,1-5.754,9.444.626.626,0,0,0,.287,1.181.616.616,0,0,0,.286-.07,11.84,11.84,0,0,0,6.43-10.555v-1.25A1.877,1.877,0,0,0,83.364,202.654Z',
                    transform: 'translate(-63.988 -202.654)',
                    fill: '#292929',
                  })
                )
              ),
              l.a.createElement(
                'g',
                { transform: 'translate(0 54.499)' },
                l.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  l.a.createElement('path', {
                    d:
                      'M28.7,416.352a.626.626,0,0,0-.578-.386H.625a.626.626,0,0,0-.443,1.068l1.4,1.4a4.349,4.349,0,0,0,3.094,1.281H24.071a4.357,4.357,0,0,0,3.1-1.281l1.4-1.4A.624.624,0,0,0,28.7,416.352Zm-2.421,1.2a3.107,3.107,0,0,1-2.21.915H4.678a3.107,3.107,0,0,1-2.21-.915l-.335-.335H26.617Z',
                    transform: 'translate(0 -415.966)',
                    fill: '#292929',
                  })
                )
              ),
              l.a.createElement(
                'g',
                { transform: 'translate(20.807 44.497)' },
                l.a.createElement(
                  'g',
                  null,
                  l.a.createElement('path', {
                    d:
                      'M363.078,245.726c-1.684-1.083-4.374.093-4.675.229a.626.626,0,0,0,.519,1.139c.6-.274,2.535-.923,3.48-.314a1.776,1.776,0,0,1,.635,1.62c0,2.5-5.048,4.015-7,4.388l-.443.087a.625.625,0,0,0,.12,1.238.58.58,0,0,0,.121-.012l.439-.086c.328-.063,8.009-1.569,8.009-5.614A2.948,2.948,0,0,0,363.078,245.726Z',
                    transform: 'translate(-355.093 -245.272)',
                    fill: '#292929',
                  })
                )
              ),
              l.a.createElement(
                'g',
                { transform: 'translate(17.5 32.001)' },
                l.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  l.a.createElement('path', {
                    d:
                      'M300.407,36.765a3.745,3.745,0,0,0,0-4.529.625.625,0,0,0-.976.781,2.521,2.521,0,0,1,0,2.969,3.741,3.741,0,0,0,0,4.529.625.625,0,1,0,.976-.781A2.517,2.517,0,0,1,300.407,36.765Z',
                    transform: 'translate(-298.666 -32.001)',
                    fill: '#292929',
                  })
                )
              ),
              l.a.createElement(
                'g',
                { transform: 'translate(13.746 32.001)' },
                l.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  l.a.createElement('path', {
                    d:
                      'M236.337,36.773a3.741,3.741,0,0,0,0-4.529.625.625,0,1,0-.976.781,2.517,2.517,0,0,1,0,2.969,3.745,3.745,0,0,0,0,4.529.625.625,0,0,0,.976-.781A2.521,2.521,0,0,1,236.337,36.773Z',
                    transform: 'translate(-234.597 -32.009)',
                    fill: '#292929',
                  })
                )
              ),
              l.a.createElement(
                'g',
                { transform: 'translate(10 32.002)' },
                l.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  l.a.createElement('path', {
                    d:
                      'M172.407,36.786a3.745,3.745,0,0,0,0-4.529.625.625,0,0,0-.976.78,2.521,2.521,0,0,1,0,2.969,3.741,3.741,0,0,0,0,4.529.625.625,0,1,0,.976-.78A2.518,2.518,0,0,1,172.407,36.786Z',
                    transform: 'translate(-170.666 -32.022)',
                    fill: '#292929',
                  })
                )
              )
            )
          );
        },
        p = function () {
          return l.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '20.4',
              height: '26.487',
              viewBox: '0 0 20.4 26.487',
            },
            l.a.createElement(
              'g',
              { id: 'Outline', transform: 'translate(-71.8 -15.8)' },
              l.a.createElement('path', {
                d:
                  'M72.869,39.913V29.478a10.1,10.1,0,0,1,.821-4l.9-2.09c.076-.178.149-.361.217-.546a8.229,8.229,0,0,1,3.227.065,8.994,8.994,0,0,0,3.4.1c.049.127.1.254.154.38l.9,2.09.8-.342-.9-2.09c-.1-.223-.183-.449-.261-.673a10.139,10.139,0,0,1-.551-2.893H82a.435.435,0,0,0,.435-.435V17.3a1.306,1.306,0,0,0-1.3-1.3H75.043a1.306,1.306,0,0,0-1.3,1.3v1.739a.435.435,0,0,0,.435.435H74.6a10.14,10.14,0,0,1-.534,2.842c-.084.246-.178.489-.278.724l-.9,2.09A10.964,10.964,0,0,0,72,29.478V39.913a2.176,2.176,0,0,0,2.174,2.174H81.13v-.87H74.174A1.306,1.306,0,0,1,72.869,39.913ZM74.609,17.3a.435.435,0,0,1,.435-.435H81.13a.435.435,0,0,1,.435.435v1.3H74.609Zm6.1,2.174a10.993,10.993,0,0,0,.445,2.692,8.129,8.129,0,0,1-2.929-.113,9.1,9.1,0,0,0-3.122-.14,11,11,0,0,0,.373-2.439Z',
                transform: 'translate(0 0)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.4',
              }),
              l.a.createElement('path', {
                d:
                  'M243.3,202.174c0-1.427-2.843-2.174-5.652-2.174s-5.652.747-5.652,2.174a1.043,1.043,0,0,0,.012.157l1.294,13.365a.435.435,0,0,0,.433.391h7.826A.435.435,0,0,0,242,215.7l1.294-13.365A1.047,1.047,0,0,0,243.3,202.174Zm-1.185,3.56-.22.073a6.893,6.893,0,0,1-4.181.063,7.786,7.786,0,0,0-4.48,0l-.039.012-.214-2.428a12.643,12.643,0,0,0,9.336,0Zm-4.467-4.864c3.075,0,4.76.851,4.782,1.3l0,.054c-.108.453-1.785,1.259-4.777,1.259s-4.668-.805-4.777-1.259l0-.054C232.892,201.72,234.577,200.87,237.652,200.87Zm3.52,14.348h-7.04l-.851-8.452.207-.062a6.947,6.947,0,0,1,3.981,0,7.754,7.754,0,0,0,4.559-.024Z',
                transform: 'translate(-151.304 -174)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.4',
              })
            )
          );
        };
    },
    tSJS: function (t, e, a) {
      'use strict';
      a('E5k/');
      var n = a('q1tI'),
        l = a('wG+1'),
        r = a('2A+t'),
        c = a('izhR'),
        o = a('Bi3C'),
        i = a.n(o),
        s = a('s9Uc'),
        d = a('JuHP'),
        p = {
          banner: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: [300, 400, 500],
            padding: [20, 30, 60],
            borderRadius: 6,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
            '::after': {
              content: '""',
              display: 'block',
              width: '100%',
              height: '100%',
              background: [
                'linear-gradient(to right, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0))',
                'linear-gradient(to right, rgba(0, 0, 0, 0.48) , rgba(0, 0, 0, 0))',
              ],
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            },
          },
          bannerContent: {
            color: 'white',
            position: 'relative',
            zIndex: 1,
            h1: {
              p: {
                fontSize: [3, 4],
                lineHeight: [1.6, 'initial'],
                marginBottom: [15, 25, 30],
              },
            },
            button: {
              marginTop: [30, 40, 60],
              svg: { position: 'relative', top: [0, '1px'] },
            },
          },
        },
        f = a('35ZX'),
        h = a.n(f);
      e.a = function (t) {
        var e = t.banner,
          a = t.bannerTitle,
          o = t.bannerSubTitle,
          f = t.bannerButtonText,
          u = t.showActionBtn,
          m = void 0 === u || u,
          b = Object(d.a)(),
          g = Object(n.useState)(60),
          v = g[0],
          w = g[1];
        return (
          Object(n.useEffect)(
            function () {
              w(b < 1081 ? 80 : 60);
            },
            [b]
          ),
          Object(r.c)(
            c.a,
            {
              as: 'section',
              sx: Object.assign(
                { backgroundImage: 'url(' + (e && e ? e : h.a) + ')' },
                p.banner
              ),
              className: 'home-banner',
            },
            Object(r.c)(
              c.a,
              { as: 'header', sx: p.bannerContent },
              a && Object(r.c)('h1', null, l.RichText.render(a)),
              o && l.RichText.render(o),
              m &&
                Object(r.c)(
                  i.a,
                  {
                    href: '#feature',
                    style: { textDecoration: 'none', display: 'inline-block' },
                    offset: function () {
                      return v;
                    },
                  },
                  Object(r.c)(
                    c.b,
                    { variant: 'white' },
                    Object(r.c)(
                      c.h,
                      { as: 'span' },
                      f ? l.RichText.asText(f) : 'Order Now'
                    ),
                    Object(r.c)(s.a, null)
                  )
                )
            )
          )
        );
      };
    },
    trlm: function (t, e, a) {
      'use strict';
      var n = a('2A+t'),
        l = a('izhR'),
        r = {
          wrapper: {
            display: 'flex',
            flexDirection: ['row', 'column'],
            alignItems: ['flex-start', 'center'],
            paddingX: [0, 20],
            img: {
              marginBottom: [0, 30],
              marginRight: [15, 0],
              marginTop: [-1, 0],
            },
            h4: {
              color: 'primary',
              fontFamily: 'body',
              fontSize: 1,
              fontWeight: '700',
              marginBottom: 10,
            },
            p: { margin: 0, fontSize: 0, lineHeight: 2 },
          },
        };
      e.a = function (t) {
        var e = t.thumbnail,
          a = t.title,
          c = t.shortInfo;
        return Object(n.c)(
          l.a,
          { className: 'featureCard', sx: r.wrapper },
          Object(n.c)(l.g, { src: e, alt: a }),
          Object(n.c)(
            l.a,
            null,
            Object(n.c)(l.f, { as: 'h4' }, a),
            Object(n.c)(l.h, { as: 'p' }, c)
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-a8056441e59f1aeb5d07.js.map
