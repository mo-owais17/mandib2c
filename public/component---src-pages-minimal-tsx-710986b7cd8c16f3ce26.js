(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '+yCD': function (t, e, n) {
      'use strict';
      n('R48M'), n('pS08'), n('LagC');
      var i,
        r =
          (this && this.__extends) ||
          ((i = function (t, e) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            i(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = n('q1tI');
      e.isMouseMoveEvent = function (t) {
        return 'clientY' in t;
      };
      var a = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return r(e, t), e;
      })(o.Component);
      e.default = a;
    },
    '064o': function (t, e, n) {
      'use strict';
      n('E5k/');
      var i = n('q1tI'),
        r = n('2A+t'),
        o = n('izhR'),
        a = n('wG+1'),
        s = n('Bi3C'),
        l = n.n(s),
        c = n('JuHP'),
        u = {
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
        var e = Object(c.a)(),
          n = Object(i.useState)(60),
          s = n[0],
          h = n[1],
          d = t.callUsBanner,
          p = t.callUsTitle,
          f = t.callUsButtonText,
          m = t.scrollTo,
          g = void 0 === m ? '#feature' : m;
        return (
          Object(i.useEffect)(
            function () {
              h(e < 1081 ? 80 : 60);
            },
            [e]
          ),
          Object(r.c)(
            o.a,
            {
              as: 'section',
              className: 'call-us-banner',
              sx: Object.assign(
                { backgroundImage: 'url(' + (d && d.url ? d.url : '') + ')' },
                u.banner
              ),
            },
            Object(r.c)(
              o.a,
              { as: 'header', sx: u.bannerContent },
              a.RichText.render(p),
              Object(r.c)(
                l.a,
                {
                  href: g,
                  style: { textDecoration: 'none' },
                  offset: function () {
                    return s;
                  },
                },
                Object(r.c)(
                  o.b,
                  { variant: 'white' },
                  Object(r.c)(
                    o.h,
                    { as: 'span' },
                    f ? a.RichText.asText(f) : 'Shop Now'
                  ),
                  Object(r.c)(
                    'svg',
                    { width: '15.394', height: '10', viewBox: '0 0 15.394 10' },
                    Object(r.c)('path', {
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
    '2ZXj': function (t, e, n) {
      'use strict';
      n('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('q1tI'),
        r = n('m1kc'),
        o = n('m1kc');
      e.populatePreviousSlides = function (t, e, n) {
        void 0 === n && (n = 0);
        var a,
          s,
          l = t.currentSlide,
          c = t.itemWidth,
          u = t.slidesToShow,
          h = e.children,
          d = e.showDots,
          p = e.infinite,
          f = r.getSlidesToSlide(t, e),
          m = l - n - (0 < n ? 0 : f),
          g = (i.Children.toArray(h).length - u) % f;
        return (
          (s =
            0 <= m
              ? ((a = m),
                d && !p && 0 < g && o.isInRightEnd(t) && (a = l - g),
                -c * a)
              : (a = m < 0 && 0 !== l ? 0 : void 0)),
          { nextSlides: a, nextPosition: s }
        );
      };
    },
    '35ZX': function (t, e, n) {
      t.exports =
        n.p + 'static/home-banner-ae85195d6a21675c58f46ff62d79bf69.png';
    },
    '3TDQ': function (t, e, n) {
      'use strict';
      n('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('v5rg');
      (e.getOriginalCounterPart = i.getOriginalCounterPart),
        (e.getClones = i.getClones),
        (e.checkClonesPosition = i.checkClonesPosition),
        (e.getInitialSlideInInfiniteMode = i.getInitialSlideInInfiniteMode);
      var r = n('ztRg');
      (e.getWidthFromDeviceType = r.getWidthFromDeviceType),
        (e.getPartialVisibilityGutter = r.getPartialVisibilityGutter),
        (e.getItemClientSideWidth = r.getItemClientSideWidth);
      var o = n('m1kc');
      (e.getInitialState = o.getInitialState),
        (e.getIfSlideIsVisbile = o.getIfSlideIsVisbile),
        (e.getTransformForCenterMode = o.getTransformForCenterMode),
        (e.getTransformForPartialVsibile = o.getTransformForPartialVsibile),
        (e.isInLeftEnd = o.isInLeftEnd),
        (e.isInRightEnd = o.isInRightEnd),
        (e.notEnoughChildren = o.notEnoughChildren),
        (e.getSlidesToSlide = o.getSlidesToSlide);
      var a = n('7XbK');
      e.throttle = a.default;
      var s = n('oQ0E');
      e.throwError = s.default;
      var l = n('DhR6');
      e.populateNextSlides = l.populateNextSlides;
      var c = n('2ZXj');
      e.populatePreviousSlides = c.populatePreviousSlides;
      var u = n('zwN0');
      e.populateSlidesOnMouseTouchMove = u.populateSlidesOnMouseTouchMove;
    },
    '40+L': function (t, e, n) {
      t.exports = n('41yN');
    },
    '41yN': function (t, e, n) {
      'use strict';
      n('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('sW6s');
      e.default = i.default;
    },
    '7XbK': function (t, e, n) {
      'use strict';
      n('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      e.default = function (t, e, n) {
        var i;
        return function () {
          var r = arguments;
          i ||
            (t.apply(this, r),
            (i = !0),
            'function' == typeof n && n(!0),
            setTimeout(function () {
              (i = !1), 'function' == typeof n && n(!1);
            }, e));
        };
      };
    },
    BIS1: function (t) {
      t.exports = JSON.parse('{"data":{"allShopifyProduct":{"edges":[]}}}');
    },
    Bi3C: function (t, e, n) {
      var i;
      n('klQ5'),
        n('1dPr'),
        n('n7j8'),
        n('LagC'),
        n('pS08'),
        n('sc67'),
        n('E5k/'),
        n('R48M'),
        'undefined' != typeof self && self,
        (i = function (t) {
          return (function (t) {
            var e = {};
            function n(i) {
              if (e[i]) return e[i].exports;
              var r = (e[i] = { i: i, l: !1, exports: {} });
              return (
                t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, i) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: i,
                  });
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, 'a', e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ''),
              n((n.s = 0))
            );
          })([
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 });
              var i,
                r = n(1),
                o = (i = r) && i.__esModule ? i : { default: i };
              e.default = o.default;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 });
              var i,
                r =
                  Object.assign ||
                  function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                          (t[i] = n[i]);
                    }
                    return t;
                  },
                o = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                a = n(2),
                s = (i = a) && i.__esModule ? i : { default: i },
                l = (function (t) {
                  function e(t) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, e);
                    var n = (function (t, e) {
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
                    return (n.smoothScroll = n.smoothScroll.bind(n)), n;
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
                    o(e, [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          n(3).polyfill();
                        },
                      },
                      {
                        key: 'smoothScroll',
                        value: function (t) {
                          var e = this;
                          t.preventDefault();
                          var n = function () {
                            return 0;
                          };
                          void 0 !== this.props.offset &&
                            (n =
                              this.props.offset &&
                              this.props.offset.constructor &&
                              this.props.offset.apply
                                ? this.props.offset
                                : function () {
                                    return parseInt(e.props.offset);
                                  });
                          var i = t.currentTarget.getAttribute('href').slice(1),
                            r =
                              document.getElementById(i).getBoundingClientRect()
                                .top + window.pageYOffset;
                          window.scroll({ top: r - n(), behavior: 'smooth' }),
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
                                var n = {};
                                for (var i in t)
                                  e.indexOf(i) >= 0 ||
                                    (Object.prototype.hasOwnProperty.call(
                                      t,
                                      i
                                    ) &&
                                      (n[i] = t[i]));
                                return n;
                              })(t, ['offset']));
                          return s.default.createElement(
                            'a',
                            r({}, e, { onClick: this.smoothScroll })
                          );
                        },
                      },
                    ]),
                    e
                  );
                })(a.Component);
              e.default = l;
            },
            function (e, n) {
              e.exports = t;
            },
            function (t, e, n) {
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
                      var n,
                        i = t.HTMLElement || t.Element,
                        r = {
                          scroll: t.scroll || t.scrollTo,
                          scrollBy: t.scrollBy,
                          elementScroll: i.prototype.scroll || s,
                          scrollIntoView: i.prototype.scrollIntoView,
                        },
                        o =
                          t.performance && t.performance.now
                            ? t.performance.now.bind(t.performance)
                            : Date.now,
                        a =
                          ((n = t.navigator.userAgent),
                          new RegExp(
                            ['MSIE ', 'Trident/', 'Edge/'].join('|')
                          ).test(n)
                            ? 1
                            : 0);
                      (t.scroll = t.scrollTo = function () {
                        void 0 !== arguments[0] &&
                          (!0 !== l(arguments[0])
                            ? f.call(
                                t,
                                e.body,
                                void 0 !== arguments[0].left
                                  ? ~~arguments[0].left
                                  : t.scrollX || t.pageXOffset,
                                void 0 !== arguments[0].top
                                  ? ~~arguments[0].top
                                  : t.scrollY || t.pageYOffset
                              )
                            : r.scroll.call(
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
                            (l(arguments[0])
                              ? r.scrollBy.call(
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
                              : f.call(
                                  t,
                                  e.body,
                                  ~~arguments[0].left +
                                    (t.scrollX || t.pageXOffset),
                                  ~~arguments[0].top +
                                    (t.scrollY || t.pageYOffset)
                                ));
                        }),
                        (i.prototype.scroll = i.prototype.scrollTo = function () {
                          if (void 0 !== arguments[0])
                            if (!0 !== l(arguments[0])) {
                              var t = arguments[0].left,
                                e = arguments[0].top;
                              f.call(
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
                              r.elementScroll.call(
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
                        (i.prototype.scrollBy = function () {
                          void 0 !== arguments[0] &&
                            (!0 !== l(arguments[0])
                              ? this.scroll({
                                  left: ~~arguments[0].left + this.scrollLeft,
                                  top: ~~arguments[0].top + this.scrollTop,
                                  behavior: arguments[0].behavior,
                                })
                              : r.elementScroll.call(
                                  this,
                                  void 0 !== arguments[0].left
                                    ? ~~arguments[0].left + this.scrollLeft
                                    : ~~arguments[0] + this.scrollLeft,
                                  void 0 !== arguments[0].top
                                    ? ~~arguments[0].top + this.scrollTop
                                    : ~~arguments[1] + this.scrollTop
                                ));
                        }),
                        (i.prototype.scrollIntoView = function () {
                          if (!0 !== l(arguments[0])) {
                            var n = d(this),
                              i = n.getBoundingClientRect(),
                              o = this.getBoundingClientRect();
                            n !== e.body
                              ? (f.call(
                                  this,
                                  n,
                                  n.scrollLeft + o.left - i.left,
                                  n.scrollTop + o.top - i.top
                                ),
                                'fixed' !== t.getComputedStyle(n).position &&
                                  t.scrollBy({
                                    left: i.left,
                                    top: i.top,
                                    behavior: 'smooth',
                                  }))
                              : t.scrollBy({
                                  left: o.left,
                                  top: o.top,
                                  behavior: 'smooth',
                                });
                          } else
                            r.scrollIntoView.call(
                              this,
                              void 0 === arguments[0] || arguments[0]
                            );
                        });
                    }
                    function s(t, e) {
                      (this.scrollLeft = t), (this.scrollTop = e);
                    }
                    function l(t) {
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
                    function c(t, e) {
                      return 'Y' === e
                        ? t.clientHeight + a < t.scrollHeight
                        : 'X' === e
                        ? t.clientWidth + a < t.scrollWidth
                        : void 0;
                    }
                    function u(e, n) {
                      var i = t.getComputedStyle(e, null)['overflow' + n];
                      return 'auto' === i || 'scroll' === i;
                    }
                    function h(t) {
                      var e = c(t, 'Y') && u(t, 'Y'),
                        n = c(t, 'X') && u(t, 'X');
                      return e || n;
                    }
                    function d(t) {
                      var n;
                      do {
                        n = (t = t.parentNode) === e.body;
                      } while (!1 === n && !1 === h(t));
                      return (n = null), t;
                    }
                    function p(e) {
                      var n,
                        i,
                        r,
                        a,
                        s = (o() - e.startTime) / 468;
                      (a = s = s > 1 ? 1 : s),
                        (n = 0.5 * (1 - Math.cos(Math.PI * a))),
                        (i = e.startX + (e.x - e.startX) * n),
                        (r = e.startY + (e.y - e.startY) * n),
                        e.method.call(e.scrollable, i, r),
                        (i === e.x && r === e.y) ||
                          t.requestAnimationFrame(p.bind(t, e));
                    }
                    function f(n, i, a) {
                      var l,
                        c,
                        u,
                        h,
                        d = o();
                      n === e.body
                        ? ((l = t),
                          (c = t.scrollX || t.pageXOffset),
                          (u = t.scrollY || t.pageYOffset),
                          (h = r.scroll))
                        : ((l = n),
                          (c = n.scrollLeft),
                          (u = n.scrollTop),
                          (h = s)),
                        p({
                          scrollable: l,
                          method: h,
                          startTime: d,
                          startX: c,
                          startY: u,
                          x: i,
                          y: a,
                        });
                    }
                  },
                };
              })();
            },
          ]);
        }),
        (t.exports = i(n('q1tI')));
    },
    'DL/b': function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n('W5fm'),
        r = n('q1tI'),
        o = n.n(r),
        a = n('Wbzz'),
        s = n('mwIZ'),
        l = n.n(s),
        c = n('H8eV'),
        u = n('2BIS'),
        h = n('tSJS'),
        d = n('2A+t'),
        p = n('izhR'),
        f = n('wG+1'),
        m = n('trlm'),
        g = {
          wrapper: {
            gridGap: '20px',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            padding: ['20px 0', '30px 0', '40px 0', '50px 0'],
            borderBottom: '1px solid #E6E6E6',
            '@media only screen and (max-width: 1024px)': {
              gridTemplateColumns: '1fr 1fr',
              gridGap: '30px',
            },
            '@media only screen and (max-width: 480px)': {
              gridTemplateColumns: '1fr',
            },
            '.featureCard': {
              alignItems: 'flex-start',
              flexDirection: 'row',
              maxWidth: ['320px', '420px'],
              '&:nth-of-type(3)': {
                img: {
                  width: '34px',
                  '@media only screen and (max-width: 768px)': {
                    width: '27px',
                  },
                },
              },
              h4: {
                fontSize: '16px',
                marginBottom: '5px',
                '@media only screen and (max-width: 768px)': {
                  fontWeight: 600,
                },
              },
              p: {
                color: 'text',
                fontSize: ['14px', '15px'],
                lineHeight: '1.5',
              },
              img: {
                flexShrink: 0,
                marginBottom: 0,
                marginRight: '20px',
                height: 'auto',
                width: '40px',
                '@media only screen and (max-width: 768px)': {
                  width: '30px',
                  marginTop: '1px',
                },
              },
            },
          },
        },
        v = function (t) {
          var e = t.items;
          return Object(d.c)(
            p.e,
            { sx: g.wrapper },
            e.map(function (t, e) {
              return Object(d.c)(m.a, {
                key: e,
                thumbnail: t.thumbnail.url,
                title: f.RichText.asText(t.title),
                shortInfo: f.RichText.asText(t.short_description),
              });
            })
          );
        },
        b = n('ulNG'),
        y = n('9eSz'),
        x = n.n(y),
        w = {
          wrapper: {
            a: {
              color: 'text',
              display: 'block',
              textDecoration: 'none',
              textAlign: 'center',
            },
            img: { borderRadius: '6px' },
            h3: {
              color: 'primary',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.25',
              marginTop: '10px',
            },
            p: { fontSize: '15px', lineHeight: '1.6' },
          },
        },
        S = function (t) {
          var e = t.path,
            n = t.title,
            i = t.thumbnail,
            r = f.RichText.asText(n);
          return Object(d.c)(
            p.a,
            { sx: w.wrapper },
            Object(d.c)(
              a.Link,
              { to: e },
              i ? Object(d.c)(x.a, { fluid: i, alt: r }) : null,
              Object(d.c)(p.f, { as: 'h3' }, r)
            )
          );
        },
        T = {
          wrapper: {
            padding: ['40px 0', '50px 0'],
            marginBottom: ['0', '10px'],
            '.carousel-button-group button': { top: 'calc(50% - 34px)' },
          },
          header: {
            textAlign: 'center',
            marginBottom: ['30px', '40px'],
            h2: {
              color: 'primary',
              fontWeight: 600,
              fontSize: ['20px', '22px'],
              lineHeight: '1.4',
              marginBottom: '8px',
            },
            p: { fontSize: '14px' },
          },
        },
        _ = function (t) {
          var e = t.title,
            n = t.shortIntro,
            i = t.categoryItems;
          return Object(d.c)(
            p.a,
            { sx: T.wrapper },
            Object(d.c)(
              p.a,
              { sx: T.header },
              Object(d.c)(p.f, { as: 'h2' }, f.RichText.asText(e)),
              Object(d.c)(p.h, { as: 'p' }, f.RichText.asText(n))
            ),
            Object(d.c)(
              b.a,
              {
                ssr: !0,
                responsive: {
                  xlg: { breakpoint: { max: 1e5, min: 1440 }, items: 6 },
                  lg: { breakpoint: { max: 1439, min: 1200 }, items: 5 },
                  md: { breakpoint: { max: 1199, min: 768 }, items: 3 },
                  sm: { breakpoint: { max: 767, min: 0 }, items: 2 },
                },
                gutter: '10px',
              },
              i.map(function (t) {
                return Object(d.c)(S, {
                  key: t.category_slug,
                  path: '/minimal/collection/' + t.category_slug,
                  thumbnail: t.imageSharp.childImageSharp.fluid,
                  title: t.category_title,
                });
              })
            )
          );
        },
        E = n('ZLvs'),
        O = n('foCw'),
        k = n('MIeJ'),
        I = n('064o'),
        M = {
          id: '2735468382',
          source:
            '\n\tquery {\n\t\tprismic {\n\t\t\tallHomeminimals {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tbanner_title\n\t\t\t\t\t\tbanner_subtitle\n\t\t\t\t\t\tbanner_button_text\n\t\t\t\t\t\tbanner_image\n\t\t\t\t\t\thow_it_works {\n\t\t\t\t\t\t\tthumbnail\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\tshort_description\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcall_us_banner\n\t\t\t\t\t\tcall_us_banner_content\n\t\t\t\t\t\tcall_us_button_text\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tallHomes {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tcategory_section_title\n\t\t\t\t\t\tcategory_section_short_intro\n\t\t\t\t\t\tcategory_block {\n\t\t\t\t\t\t\tcategory_slug\n\t\t\t\t\t\t\tcategory_title\n\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\timageSharp {\n\t\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\t\tfluid {\n\t\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tallCommons {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tad_blocks {\n\t\t\t\t\t\t\tbadge_title\n\t\t\t\t\t\t\tbadge_color\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\tblock_image\n\t\t\t\t\t\t\tshort_description\n\t\t\t\t\t\t\tadd_a_button\n\t\t\t\t\t\t\tbutton_title\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        };
      e.default = function () {
        return o.a.createElement(a.StaticQuery, {
          query: '' + M,
          render: function (t) {
            var e = l()(
                t,
                'prismic.allHomes.edges[0].node.category_section_title'
              ),
              n = l()(
                t,
                'prismic.allHomes.edges[0].node.category_section_short_intro'
              ),
              i = l()(t, 'prismic.allHomes.edges[0].node.category_block'),
              r = l()(t, 'prismic.allHomeminimals.edges[0].node'),
              a = l()(t, 'prismic.allCommons.edges[0].node.ad_blocks'),
              s = r.banner_image.url,
              d = r.banner_title,
              p = r.banner_subtitle,
              f = r.banner_button_text,
              m = r.how_it_works,
              g = r.call_us_banner,
              b = r.call_us_banner_content,
              y = r.call_us_button_text;
            return o.a.createElement(
              u.a,
              {
                fluid: !0,
                homeLink: '/minimal',
                pathPrefix: '/minimal/collection',
                showNoticeBar: !1,
              },
              o.a.createElement(c.a, { title: 'Home' }),
              o.a.createElement(h.a, {
                banner: s,
                bannerTitle: d,
                bannerSubTitle: p,
                bannerButtonText: f,
              }),
              o.a.createElement(v, { items: m }),
              o.a.createElement(_, {
                title: e,
                shortIntro: n,
                categoryItems: i,
              }),
              o.a.createElement(E.a, { withLink: !0 }),
              o.a.createElement(O.a, {
                data: a,
                scrollTo: '#trendingProducts',
                scrollOffset: 60,
              }),
              o.a.createElement(k.a, { withLink: !0 }),
              o.a.createElement(I.a, {
                callUsBanner: g,
                callUsTitle: b,
                callUsButtonText: y,
              })
            );
          },
          data: i,
        });
      };
    },
    DhR6: function (t, e, n) {
      'use strict';
      n('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('m1kc');
      e.populateNextSlides = function (t, e, n) {
        void 0 === n && (n = 0);
        var r,
          o,
          a = t.slidesToShow,
          s = t.currentSlide,
          l = t.itemWidth,
          c = t.totalItems,
          u = i.getSlidesToSlide(t, e),
          h = s + 1 + n + a + (0 < n ? 0 : u);
        return (
          (o =
            h <= c
              ? -l * (r = s + n + (0 < n ? 0 : u))
              : c < h && s !== c - a
              ? -l * (r = c - a)
              : (r = void 0)),
          { nextSlides: r, nextPosition: o }
        );
      };
    },
    MIeJ: function (t, e, n) {
      'use strict';
      var i = n('BIS1'),
        r = n('q1tI'),
        o = n.n(r),
        a = n('Wbzz'),
        s = n('ca1K'),
        l = {
          id: '73481108',
          source:
            '\n\tquery {\n\t\tallShopifyProduct(filter: { tags: { eq: "Trending" } }, limit: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\thandle\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tshopifyId\n\t\t\t\t\tavailableForSale\n\t\t\t\t\tvariants {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprice\n\t\t\t\t\t\tpriceV2 {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\tshopifyId\n\t\t\t\t\t\tavailableForSale\n\t\t\t\t\t}\n\t\t\t\t\timages {\n\t\t\t\t\t\tid\n\t\t\t\t\t\toriginalSrc\n\t\t\t\t\t\tlocalFile {\n\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\tfluid {\n\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        };
      e.a = function (t) {
        var e = t.withLink,
          n = void 0 !== e && e;
        return o.a.createElement(a.StaticQuery, {
          query: '' + l,
          render: function (t) {
            var e = t.allShopifyProduct,
              i = null == e ? void 0 : e.edges;
            return o.a.createElement(s.a, {
              id: 'trendingProducts',
              withLink: n,
              gridTitle: 'Trending Product',
              products: i,
            });
          },
          data: i,
        });
      };
    },
    S9TR: function (t, e, n) {
      'use strict';
      n('AqHK'),
        n('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('q1tI'),
        r = n('3TDQ');
      e.default = function (t) {
        var e = t.props,
          n = t.state,
          o = t.goToSlide,
          a = t.clones,
          s = t.notEnoughChildren,
          l = n.itemWidth,
          c = e.children,
          u = e.infinite,
          h = e.itemClass,
          d = e.partialVisbile,
          p = e.partialVisible,
          f = r.getInitialState(n, e),
          m = f.flexBisis,
          g = f.shouldRenderOnSSR,
          v = f.domFullyLoaded,
          b = f.partialVisibilityGutter;
        return f.shouldRenderAtAll
          ? (d &&
              console.warn(
                'WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'
              ),
            i.createElement(
              i.Fragment,
              null,
              (u ? a : i.Children.toArray(c)).map(function (t, a) {
                return i.createElement(
                  'li',
                  {
                    key: a,
                    'data-index': a,
                    onClick: function () {
                      e.focusOnSelect && o(a);
                    },
                    'aria-hidden': r.getIfSlideIsVisbile(a, n)
                      ? 'false'
                      : 'true',
                    style: {
                      flex: g ? '1 0 ' + m + '%' : 'auto',
                      position: 'relative',
                      width: v
                        ? ((d || p) && b && !s ? l - b : l) + 'px'
                        : 'auto',
                    },
                    className:
                      'react-multi-carousel-item ' +
                      (r.getIfSlideIsVisbile(a, n)
                        ? 'react-multi-carousel-item--active'
                        : '') +
                      ' ' +
                      h,
                  },
                  t
                );
              })
            ))
          : null;
      };
    },
    SSZS: function (t, e, n) {
      'use strict';
      n('n0hJ'),
        n('AqHK'),
        n('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('q1tI'),
        r = n('v5rg'),
        o = n('bwfW'),
        a = n('m1kc');
      e.default = function (t) {
        var e = t.props,
          n = t.state,
          s = t.goToSlide,
          l = t.getState,
          c = e.showDots,
          u = e.customDot,
          h = e.dotListClass,
          d = e.infinite,
          p = e.children;
        if (!c || a.notEnoughChildren(n)) return null;
        var f,
          m = n.currentSlide,
          g = n.slidesToShow,
          v = a.getSlidesToSlide(n, e),
          b = i.Children.toArray(p);
        f = d ? Math.ceil(b.length / v) : Math.ceil((b.length - g) / v) + 1;
        var y = o.getLookupTableForNextSlides(f, n, e, b),
          x = r.getOriginalIndexLookupTableByClones(g, b),
          w = x[m];
        return i.createElement(
          'ul',
          { className: 'react-multi-carousel-dot-list ' + h },
          Array(f)
            .fill(0)
            .map(function (t, e) {
              var n, r;
              if (d) {
                r = y[e];
                var o = x[r];
                n = w === o || (o <= w && w < o + v);
              } else {
                var a = b.length - g,
                  c = e * v;
                n =
                  (r = a < c ? a : c) === m ||
                  (r < m && m < r + v && m < b.length - g);
              }
              return u
                ? i.cloneElement(u, {
                    index: e,
                    active: n,
                    key: e,
                    onClick: function () {
                      return s(r);
                    },
                    carouselState: l(),
                  })
                : i.createElement(
                    'li',
                    {
                      'data-index': e,
                      key: e,
                      className:
                        'react-multi-carousel-dot ' +
                        (n ? 'react-multi-carousel-dot--active' : ''),
                    },
                    i.createElement('button', {
                      'aria-label': 'Go to slide ' + (e + 1),
                      onClick: function () {
                        return s(r);
                      },
                    })
                  );
            })
        );
      };
    },
    VLDe: function (t, e, n) {},
    W5fm: function (t) {
      t.exports = JSON.parse(
        '{"data":{"prismic":{"allHomeminimals":{"edges":[{"node":{"banner_title":[{"type":"paragraph","text":"Banner Title","spans":[]}],"banner_subtitle":[{"type":"paragraph","text":"Banner Subtitle","spans":[]}],"banner_button_text":[{"type":"paragraph","text":"Banner Button","spans":[]}],"banner_image":{"dimensions":{"width":1200,"height":500},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/6f9a8864-6b3e-408f-b4de-75bc3536b826_home-banner.png?auto=compress,format"},"how_it_works":[{"thumbnail":{"dimensions":{"width":60,"height":60},"alt":null,"copyright":null,"url":"https://prismic-io.s3.amazonaws.com/mandixpress/da960987-9d18-4f10-a0ef-152dbde7fed8_feature-1.svg"},"title":[{"type":"heading1","text":"How it works","spans":[]}],"short_description":[{"type":"paragraph","text":"how it works description","spans":[]}]}],"call_us_banner":{"dimensions":{"width":1200,"height":500},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/6f9a8864-6b3e-408f-b4de-75bc3536b826_home-banner.png?auto=compress,format"},"call_us_banner_content":[{"type":"paragraph","text":"Call us ","spans":[]}],"call_us_button_text":[{"type":"paragraph","text":"Call Button","spans":[]}]}}]},"allHomes":{"edges":[{"node":{"category_section_title":[{"type":"heading1","text":"Shop by Category","spans":[]}],"category_section_short_intro":[{"type":"paragraph","text":"Shop with us","spans":[]}],"category_block":[{"category_slug":"vegetables","category_title":[{"type":"heading1","text":"Vegetables","spans":[]}],"image":{"dimensions":{"width":380,"height":280},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg?auto=compress,format"},"imageSharp":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'295\'%20viewBox=\'0%200%20400%20295\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2012l1%2013v1l-1%207c0%205%200%206%201%205l4-6%203-6%201-3c2%200%201-5-2-7-2-3-2-3-1-5V8C3%208%204%207%206%205c3-3%203-5-2-5H0v12m29-7l-3%2014-2%2010-5%207C11%2045%207%2051%208%2051l12%201c11%201%2012%201%2010%204-4%204-19%202-22-2-1-2-4-1-5%201l-2%203-1%2020a117%20117%200%20009%2051c1%203%202%204%202%201l-3-8c-2-5-2-7-2-17L5%2089%203%2077v-8h4c5%200%207%201%207%205%200%202%203%204%204%202%201-1%208%200%2010%202%201%202%201%202-4%208l-4%207%201%2018c2%2036%206%2057%2017%2081a219%20219%200%200064%2098c3%207%204-1%207-30%200-8%201-9%208-8%203%201%205%200%206-1l5-2c3-2%204-2%204-4-1-1-1-1%201-1%201%201%203%200%206-1%202-2%206-3%208-3%204-1%2010%202%2010%203-1%202%207%202%2017%200l6-1-2-2-2-2h8c2-2%207-1%207%200l-2%202c-2%201-2%201%201%201l4-2%202-3c3%200%206-17%203-19l-1-2v-1c-1-1-2-6-1-8%200-2%207-5%2018-8l7-2%208%202c16%204%2044%2017%2044%2020%200%202-3%204-5%203l-3%201%203%201%203%202c0%201-2%204-4%204h-1l-1%201-1-1-3-2-17-4c-3-1-2%202%201%205%209%207%209%207%208%2010l-7%205-6%204c0%202-8%207-10%207l-2%201-2%201-10%202h-2c0-4-13-12-17-11l-1%204%202%207c0%203%200%204%204%203%203%200%204%201%208%207%203%205%203%208%200%2011s-2%206%201%203l2-3%203-3h7l1%201c1%200%202-1%202-5l2-4v2l3%203%202%201-2%203c-2%203-2%203-1%204s6-1%206-3l2-3a374%20374%200%200027-36c2-3%202-3%2010-3%2013%202%2013%202%2016%208a297%20297%200%200113%2046v5h96v-74a892%20892%200%2000-2-73c0-4-6-14-8-13h-1c0-2%203-2%205%200%201%202%201%202%202%200%201-1%201-1%201%201l1%204c1%202%202-70%201-85V43h-4c-15%200-42-14-48-26%200-2-2-3-3-3l-1-2-2-3-2-1c0%202%205%2010%2011%2016%2011%2011%2028%2036%2028%2039%200%202-2%201-4-4-7-13-34-44-38-44-2%200-9-5-7-5l-1-1-2-2-2-4c-3-3-3-3-15-3-13%200-14%201-6%205%205%203%207%205%206%206h-2c-2-2-2-1%200%201%202%203%201%203-3%202-4-2-5-3-5-5s0-2%203-1l3%202-7-5-7-5h-23l-24%201%203%204%202%204c-2%200-8-4-8-7l-1-2h-15c-13%200-14%200-14%202s-3%204-4%201l-2-1-2-1-2-1-1%201c1%201-3%205-9%206h-4c0-1-2-1-4%201-4%202-8%202-6%200%200-1-1-4-3-4h-1l2-1%201-1%202-1c1-1%200-1-2-1l-4%201h-2l-6-1c-5%200-5%200-4%202%202%202%202%202%200%203-1%201-1%201%201%202l3%202-4%202c-4%201-5%202-4%204%200%202-1%203-3%200-2-1-2-1-3%201%200%202-3%203-5%202h-2l-1%201-5%201-5%202-1%201-1%201c-1-1-4%201-4%203s-1%203-3%201l-2-2v2c3%202%202%202-2%201l-4-1c-2%200%200%203%202%204%204%201-1%205-7%205-3%200-5%202-3%203v2l-1%202c0%203-3%204-12%204-6%201-7%201-8-1v-5l4-2%204-4%202-1-1-2-2-1-4%201-7%207-1%203c-1%202-2%202-3%201-1-3-4%202-5%207%200%205-4%2014-6%2014-1-1-2-2-2-9V45c-1%201-2%202-3%201l-1%201v2c-2%200-5-4-5-5l-2%201c-2%203-4%203-4%200l-4-9-4-8%205-3A340%20340%200%200186%201L58%200H29v5m337-2c-1%203%201%207%208%2013%206%204%2013%2011%2019%2018l4%203c3%200%204-1%201-3v-1c2%200%202%200%201-1l-3-2-7-4c0-2%203-3%205-1l4%201c2-2%201-3-2-3-3-1-5-3-3-3l2-2h1l2%203c2%201%202%201%202-10V0h-13l-13%201h-1l-3-1c-3%200-4%200-4%203M200%2014c0%202-2%203-6%203s-6%202-11%206l-6%204c-2%200-3%201-3%203l-1%203c-4%202-7%2013-5%2016l1%204c0%202%201%204%209%2012l8%209-2-1c-2-2-6%200-7%203%200%202%201%203%205%207l3%204-2-1-1-1-1%202%201%201%201%202c0%201-8%201-14-1h-3c-1%203-7-1-7-4l-1-1c-2%200-4-4-4-6v-3c-1-1-2-2-1-3l-3-6c-3-4-3-4-8-4l-7%202c-4%203-13%201-13-3v-4c-1-2-1-2%201-1h4l6-1%203-1%203-4%204-5c0-2%202-3%203-3%202-2%203-3%201-2l-2-1%202-2c7-3%200-4-9-1-3%200-3%200-3-2v-1c-4%201-13%2010-13%2012l-1%201v3l-1%201c0%203-2%203-4%202-6-6-16-1-17%207-1%201-2%202-9%202-4%200-7%200-6-1%202-1%203-2%201-3l2-1%204-3c2-1%202-1-3-1l-7%201c-2%201-4%204-2%205l-2%202c-8%202-10%2010-3%2010l7%203c3%203%203%204-5%202-10-2-15%202-7%205%202%201%202%201-1%203l-7%202-3%201v16l-2-3c-2-2-3-3-5-3l-2%201v11l1%2012c1%201-4%207-6%207-1%200-2-4-1-7a16%2016%200%20000-7c0-2-6-1-7%201l-1%204-2%208-2%207c-1%203%201%208%203%208%201%200%204-4%204-7%201-2%203-4%206-3l2-1c2-2%203-1%203%201-1%201%200%202%201%202%202%201%206-1%206-2h4c5%200%206-1%205-4%200-3%201-2%203%200l2%203%201-3%201-1%204-3c3-3%203-3%202-5-2-1-2-2%200-1l1-1%202-1c2%201%204-2%202-3-2-2-1-3%201-3h1v-3c2-2-3-6-7-6-3%200-3%200-6-5s-3-5-1-5l2-1%202%201%203%203%203-2c1-2%203-3%205-3s2%200%201%201c-2%201-1%202%205%207%207%205%209%205%203-1-3-3-3-3-1-2l14%206%203%203-3%201c-3%202-3%205%200%209%202%203%209%204%209%201%200-2%204-5%206-4%201%200%202%201%202%204v4l-3%201c-4%200-15%206-15%208l-4%203c-4%201-5%203-7%206l-2%204-6-5c-7-7-10-8-14-4-2%203-2%204-1%204v3c0%203%202%206%206%208%203%202%207%203%207%202l1-1c1%201%205-1%205-2-1-1%203-4%206-4s4%201%205%202c3%204%205%202%206-4v-7l1%201c0%205%208%200%208-5%201-5%201-6%202-4%202%203%204%202%205-1s4-4%207-1l2%202c2-1%204%203%204%206l1%203%203%201c3%201%205-1%203-3l1-1c2%200%202-1%201-5%200-5%200-6%202-7h2l1%202c1%200%200%2010-2%2011l-1%206c0%203%205%202%206%200l2-2%203%201%202%201c0%203%203%203%205%201l2-1v2l1-2h2l2%202%206-4h-3c-2%202-5%201-4-1l-1-1c-2%201-3%200-1-2%201-1%201-1-1-1s-2%200%200-1h2l1%201h3c4%205%2011-1%207-6l-7-10v-2l4%201%202%201%202%201%201%201h3c1%201%201%200%201-2-1-4%201-4%202%200v4l1-3%201-3%201-1c0-1-1-2-2-1v-1c0-2%201-2%204%200l2%201h3c2%201%202%201%200%204-2%204-1%207%201%207%202%201%202%200%202-2s1-3%203-1c1%201%202%200%203-2%201-3%203-3%203-1%200%203%2029%2017%2034%2017l-1%201%201%201c1-1%201-1%200%200l1%201c1-1%204%200%206%201a378%20378%200%200142%2030c8%205%2016%2010%2020%2011l8%202%204%202h3c2%201%203%200%200-2-2-2%200-2%204%200l9%203%208%203c5%203%208%202%208-2%200-3%202-2%208%203%207%205%207%204%209%202s2-3%202-6c-1-4-1-4-29-17a9162%209162%200%2001-44-20%20280%20280%200%2001-31-19l-51-37c-19-15-22-17-23-14h-1l-1-1c-3%200-12-8-12-10%201-1%200-2-1-3h-7l1-2c1-1%202-4%201-6-2-2-1-2%201-1%201%201%202%202%203%201%202-2%201-3-1-3l-4-2-4-3h-1l2-3%201-2%201-1%201-4c2-5%2010-4%2010%201%200%202%206%204%2010%205%203%200%203%200%202-2l-1-3v-4c3%202%208-3%207-8-1-3-8-11-8-9m92%207l-2%202c1%201%200%201-1%201s-2%200-1%202l-1%201-1-1h-1c-1%201-2%203-1%204%200%202%200%203-2%203-2%201-3%203-1%203s4-2%204-5l1-2%201%202%204%201c4-1%205-1%207%201%203%202%204%202%204%201-1-4%200-7%202-7l1%201c-1%201%202%203%203%202l4%201%204%202c2-1-5-5-7-5l-2-1-2-2-7-3c-4-3-5-3-6-1m36%202c-2%201-1%203%201%206l1%203v1l9%2012-8-1c-1-2-4-1-4%201h-1c-3-1-2%201%202%205s4%204%207%203l2-2-1-2c0-2%204-3%204-1v1c-3-2-2%200%200%203l1%204%202%204h2c-2-4%201-4%203-1l2%204%201%202%202%203%201%202%203%205%202%202%205%208c7%2011%207%209%200-5-7-13-8-18-3-12l4%204%202%202%202%202v-2l-1-4c0-4-2-6-3-4-1%201-1%201-2-1-1-1-3-2-4-1l-1-1-1-1c-2%200-5-4-11-14a356%20356%200%2000-18-25m-57%2012h-4l-1%201%202%201-2%201c-4-1-3%202%201%203%202%201%203%200%203-1h1c0%202%201%202%202%202h2l3%201%203%202%202%201c1%200%202%201%201%203%200%203%200%203%202%202l2-3%201-2%201%202c-1%202%201%203%206%201%201%200%206-6%206-8s-13%200-14%202l-4%201c-1-1-1-1%201-2l2-2c-1-1-7-3-8-2l-1-1-1-1h-2c0-2-3-3-4-1m56%2022c-1%203-1%204%202%207%207%207%2018%2023%2017%2026%200%202%202%204%203%202%202-2%201-3-2-8l-15-20-3-7v-4l-2%204m59-2l2%206%202%204c2%200%205%204%205%206%200%203%201%205%202%203v-5l-1-3-1-5c0-4-1-7-3-7h-1c-2-1-5%200-5%201m-143%201c-2%201-2%201%202%205s4%204%209%205l5-1c1-2-5-8-6-7l-2-1c-2-1-5-2-8-1m-12%208c-3%206-3%2010%201%2010s11-11%209-14c-3-4-6-2-10%204m-130-3c2%202%201%208-1%209l-4%203-2%203h2l3%201h11l-2-3c-3-2-4-8-2-8%203%200-1-4-4-5h-1m214%202c-1%204-1%204%203%205l3%201%202%203%202%204c0%204%207%2011%2010%2010%202-2%201-4-3-7-1-1-5-5-6-9-3-5-4-7-7-8-4-1-4-1-4%201m-17%2011l-4%202c-1%201-1%201%201%201l3%201c0%202%2013%208%2013%206%201-3%200-7-2-8-2-3-9-4-11-2m-153%207h-3l-1%201c0%205-12%207-17%203-1-2-2-2-2-1l-2%201-2%201-3%2014%209%201c4%201%205%201%207-2%203-3%203-5%200-2-2%202-5%202-11-1l-3-2%203-1%204-2%207-1%209-1c3-2%206-6%206-8h-1m-58%2027c-2%201-1%205%201%206l1%203h1c0-2%202-1%202%201l1%202c1-1%204%201%203%202l1%201%205%201c5%200%207-1%207-5%200-2-1-3-10-7-10-5-11-6-12-4m107%2016c-7%205-11%2012-7%2015l1%203c0%202%206%2011%207%2011l1-1h6c1-1%201-1-1-3-3-2-2-4%202-3l5-1h3c1-1%200-2-2-3-6-2-11-10-9-13v-1l1-1v-1c-2%200-2%200-1-1%203-4-1-4-6-1M1%20200c0%2047%200%2052%202%2053v6l-2%2013v8l3%201%202%202-1%201c0%202%204%206%206%205l3%201c1%201%201%201-2%203-4%202-8%201-10-2l-1-2v6h24c23%200%2024%200%2023-2a160%20160%200%2001-8-17c-9-20-12-32-17-59-2-15-3-18-8-32L5%20159l-4-9v50m119-45v3c1%203%201%205-1%205l-3%202-2%202c-2%201-2%202-2%204%200%204%200%204%203%204s3%200%203%204c0%203%200%204%202%204s8-5%207-6l2-1h5c1-1%202-3%200-2s-3-1-2-3%201-2%202-1c1%202%201-6-1-10l1-3%206%203c-1%201%202%204%204%204%203-1%204-3%201-3s-4-1-2-3h3c1%202%203%201%202-1-3-4-14-3-18%202l-4%202-1%202c0%202-2%201-3-2%200-5-2-8-2-6m-36%208l-1%201%201%202%201%201%201-1c-1-1%202-3%203-2v4l2-1h2c0%201%201%202%203%201%202%200%202%200%201%201-2%201-2%201%201%201%205%201%205%201%206-1%200-2%200-2%201-1%202%202%202%202%203%200%202-2%201-2-6-4s-14-2-18-1m-15%202l-1%203-1%203-1-2c0-3%200-3-2-3s-3%200-3%202c1%203%202%204%204%203l2%202c0%202%204%203%204%201l1-2v2c-1%206-1%209%201%209s4-3%205-7l1-6c2-4%201-6-4-6l-6%201m246%2019c-3%201-3%203%200%206%202%201%202%202%201%204-2%204%204%208%207%204%202-2%201-10-1-12s-4-3-7-2m26%202c-3%200-5%202-4%203l-1%203v2l1%204c0%206%207%206%2012%200%203-3%204-8%202-9l-2-1c0-2-4-3-8-2M48%20258l12%2027%205%2010h6c6%200%207-1%204-4a351%20351%200%2001-27-33\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.3605442176870748,"src":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/e1133/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg","srcSet":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/116d1/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg 200w,\\n/static/7eeb8b7b52cbbb116228d4de98bc2b8a/e1133/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg 380w","srcWebp":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/3546a/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp","srcSetWebp":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/8f92f/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp 200w,\\n/static/7eeb8b7b52cbbb116228d4de98bc2b8a/3546a/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp 380w","sizes":"(max-width: 380px) 100vw, 380px"}}}}]}}]},"allCommons":{"edges":[{"node":{"ad_blocks":[]}}]}}}}'
      );
    },
    ZLvs: function (t, e, n) {
      'use strict';
      var i = n('cPq4'),
        r = n('q1tI'),
        o = n.n(r),
        a = n('Wbzz'),
        s = n('ca1K'),
        l = {
          id: '2039974797',
          source:
            '\n\tquery {\n\t\tallShopifyProduct(filter: { tags: { eq: "Featured" } }, limit: 10) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\thandle\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tshopifyId\n\t\t\t\t\tavailableForSale\n\t\t\t\t\tvariants {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprice\n\t\t\t\t\t\tpriceV2 {\n\t\t\t\t\t\t\tamount\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t}\n\t\t\t\t\t\tshopifyId\n\t\t\t\t\t\tavailableForSale\n\t\t\t\t\t}\n\t\t\t\t\timages {\n\t\t\t\t\t\tid\n\t\t\t\t\t\toriginalSrc\n\t\t\t\t\t\tlocalFile {\n\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\tfluid {\n\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        };
      e.a = function (t) {
        var e = t.withLink,
          n = void 0 !== e && e;
        return o.a.createElement(a.StaticQuery, {
          query: '' + l,
          render: function (t) {
            var e = t.allShopifyProduct,
              i = null == e ? void 0 : e.edges;
            return o.a.createElement(s.a, {
              id: 'feature',
              withLink: n,
              gridTitle: 'Featured Product',
              products: i,
            });
          },
          data: i,
        });
      };
    },
    bwfW: function (t, e, n) {
      'use strict';
      n('n0hJ'),
        n('JHok'),
        n('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('v5rg'),
        r = n('m1kc');
      e.getLookupTableForNextSlides = function (t, e, n, o) {
        var a = {},
          s = r.getSlidesToSlide(e, n);
        return (
          Array(t)
            .fill(0)
            .forEach(function (t, n) {
              var r = i.getOriginalCounterPart(n, e, o);
              if (0 === n) a[0] = r;
              else {
                var l = a[n - 1] + s;
                a[n] = l;
              }
            }),
          a
        );
      };
    },
    cPq4: function (t) {
      t.exports = JSON.parse('{"data":{"allShopifyProduct":{"edges":[]}}}');
    },
    foCw: function (t, e, n) {
      'use strict';
      var i = n('2A+t'),
        r = n('izhR'),
        o = n('Bi3C'),
        a = n.n(o),
        s = n('wG+1'),
        l = n('s9Uc'),
        c = n('ulNG'),
        u =
          (n('E5k/'),
          {
            wrapper: {
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: ['270px', '280px'],
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '34px 30px 40px',
              '@media screen and (min-width: 1920px)': {
                minHeight: '325px',
                padding: '34px 40px 40px',
              },
            },
            content: {
              maxWidth: '245px',
              width: '100%',
              h3: {
                color: 'primary',
                fontSize: ['22px', '28px'],
                lineHeight: '1.607',
                fontWeight: '600',
                fontFamily: 'Open Sans, sans-serif',
                marginBottom: '8px',
              },
              p: { color: 'primary', fontSize: '14px', lineHeight: '1.785' },
              a: { display: 'inline-block' },
              button: {
                minWidth: '130px',
                minHeight: '45px',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: 'Open Sans, sans-serif',
                marginTop: '20px',
                transition: 'all 0.2s ease',
                '@media screen and (min-width: 768px)': {
                  minWidth: '130px',
                  minHeight: '45px',
                },
                ':hover': { opacity: '0.999' },
              },
            },
            tag: {
              color: 'white',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              borderRadius: '5px',
              display: 'inline-block',
              padding: '5px 10px',
              marginBottom: '8px',
            },
          }),
        h = n('oW8o'),
        d = n.n(h),
        p = function (t) {
          var e = t.btn,
            n = t.tag,
            o = t.title,
            a = t.tagBgColor,
            l = t.bannerImage,
            c = t.shortDescription;
          return Object(i.c)(
            r.a,
            {
              sx: Object.assign(
                { backgroundImage: 'url(' + (l && l ? l : d.a) + ')' },
                u.wrapper
              ),
            },
            Object(i.c)(
              r.a,
              { sx: u.content },
              n &&
                Object(i.c)(
                  r.a,
                  {
                    as: 'span',
                    sx: Object.assign(
                      { backgroundColor: a || '#AFCD5F' },
                      u.tag
                    ),
                  },
                  s.RichText.asText(n)
                ),
              Object(i.c)(r.f, { as: 'h3' }, s.RichText.asText(o)),
              Object(i.c)(r.h, { as: 'p' }, s.RichText.asText(c)),
              e && e
            )
          );
        },
        f = {
          wrapper: {
            display: 'grid',
            marginTop: '20px',
            '.carousel-button-group': {
              opacity: 0,
              visibility: 'hidden',
              transition: 'all 0.25s ease',
            },
            '&:hover': {
              '.carousel-button-group': { opacity: 1, visibility: 'visible' },
            },
            img: { width: '100%', height: 'auto', objectFit: 'cover' },
          },
        };
      e.a = function (t) {
        var e = t.data,
          n = t.scrollTo,
          o = t.scrollOffset;
        return Object(i.c)(
          r.a,
          { className: 'picksyAdBanner', sx: f.wrapper },
          Object(i.c)(
            c.a,
            {
              ssr: !0,
              responsive: {
                ipad: { breakpoint: { max: 1e5, min: 651 }, items: 2 },
                mobile: { breakpoint: { max: 650, min: 0 }, items: 1 },
              },
              gutter: '10px',
            },
            e.map(function (t, e) {
              var c;
              return Object(i.c)(p, {
                key: 'adblock-key' + e,
                tag: t.badge_title,
                tagBgColor: t.badge_color,
                bannerImage:
                  null === (c = t.block_image) || void 0 === c ? void 0 : c.url,
                title: t.title,
                shortDescription: t.short_description,
                btn: Object(i.c)(
                  a.a,
                  { href: n, style: { textDecoration: 'none' }, offset: o },
                  Object(i.c)(
                    r.b,
                    { variant: 'white' },
                    s.RichText.asText(t.button_title),
                    ' ',
                    Object(i.c)(l.a, null)
                  )
                ),
              });
            })
          )
        );
      };
    },
    m1kc: function (t, e, n) {
      'use strict';
      n('rzGZ'),
        n('Dq+y'),
        n('8npG'),
        n('Ggvi'),
        n('JHok'),
        n('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('ztRg');
      function r(t) {
        var e = t.slidesToShow;
        return t.totalItems < e;
      }
      function o(t, e, n) {
        var i = n || t.transform;
        return (!e.infinite && 0 === t.currentSlide) || r(t)
          ? i
          : i + t.itemWidth / 2;
      }
      function a(t) {
        var e = t.currentSlide,
          n = t.totalItems;
        return !(e + t.slidesToShow < n);
      }
      function s(t, e, n, i) {
        void 0 === e && (e = 0);
        var o = t.currentSlide,
          s = t.slidesToShow,
          l = a(t),
          c = !n.infinite && l,
          u = i || t.transform;
        if (r(t)) return u;
        var h = u + o * e;
        return c ? h + (t.containerWidth - (t.itemWidth - e) * s) : h;
      }
      (e.notEnoughChildren = r),
        (e.getInitialState = function (t, e) {
          var n,
            r = t.domLoaded,
            o = t.slidesToShow,
            a = t.containerWidth,
            s = t.itemWidth,
            l = e.deviceType,
            c = e.responsive,
            u = e.ssr,
            h = e.partialVisbile,
            d = e.partialVisible,
            p = Boolean(r && o && a && s);
          u && l && !p && (n = i.getWidthFromDeviceType(l, c));
          var f = Boolean(u && l && !p && n);
          return {
            shouldRenderOnSSR: f,
            flexBisis: n,
            domFullyLoaded: p,
            partialVisibilityGutter: i.getPartialVisibilityGutter(
              c,
              h || d,
              l,
              t.deviceType
            ),
            shouldRenderAtAll: f || p,
          };
        }),
        (e.getIfSlideIsVisbile = function (t, e) {
          var n = e.currentSlide,
            i = e.slidesToShow;
          return n <= t && t < n + i;
        }),
        (e.getTransformForCenterMode = o),
        (e.isInLeftEnd = function (t) {
          return !(0 < t.currentSlide);
        }),
        (e.isInRightEnd = a),
        (e.getTransformForPartialVsibile = s),
        (e.getTransform = function (t, e, n) {
          var r = e.partialVisbile,
            a = e.partialVisible,
            l = e.responsive,
            c = e.deviceType,
            u = e.centerMode,
            h = n || t.transform,
            d = i.getPartialVisibilityGutter(l, r || a, c, t.deviceType);
          return a || r ? s(t, d, e, n) : u ? o(t, e, n) : h;
        }),
        (e.getSlidesToSlide = function (t, e) {
          var n = t.domLoaded,
            i = t.slidesToShow,
            r = t.containerWidth,
            o = t.itemWidth,
            a = e.deviceType,
            s = e.responsive,
            l = e.slidesToSlide || 1,
            c = Boolean(n && i && r && o);
          return (
            e.ssr &&
              e.deviceType &&
              !c &&
              Object.keys(s).forEach(function (t) {
                var e = s[t].slidesToSlide;
                a === t && e && (l = e);
              }),
            c &&
              Object.keys(s).forEach(function (t) {
                var e = s[t],
                  n = e.breakpoint,
                  i = e.slidesToSlide,
                  r = n.max,
                  o = n.min;
                i &&
                  window.innerWidth >= o &&
                  window.innerWidth <= r &&
                  (l = i);
              }),
            l
          );
        });
    },
    oQ0E: function (t, e, n) {
      'use strict';
      n('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var n = e.partialVisbile,
            i = e.partialVisible,
            r = e.centerMode,
            o = e.ssr,
            a = e.responsive;
          if ((n || i) && r)
            throw new Error(
              'center mode can not be used at the same time with partialVisible'
            );
          if (!a)
            throw o
              ? new Error(
                  'ssr mode need to be used in conjunction with responsive prop'
                )
              : new Error(
                  'Responsive prop is needed for deciding the amount of items to show on the screen'
                );
          if (a && 'object' != typeof a)
            throw new Error('responsive prop must be an object');
        });
    },
    oW8o: function (t, e, n) {
      t.exports = n.p + 'static/1-0764717f77e1abd8daea1ce01bf039aa.jpg';
    },
    s9Uc: function (t, e, n) {
      'use strict';
      n.d(e, 'e', function () {
        return o;
      }),
        n.d(e, 'd', function () {
          return a;
        }),
        n.d(e, 'f', function () {
          return s;
        }),
        n.d(e, 'g', function () {
          return l;
        }),
        n.d(e, 'a', function () {
          return c;
        }),
        n.d(e, 'b', function () {
          return u;
        }),
        n.d(e, 'c', function () {
          return h;
        });
      var i = n('q1tI'),
        r = n.n(i),
        o = function () {
          return r.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '25.517',
              height: '27.17',
              viewBox: '0 0 25.517 27.17',
            },
            r.a.createElement(
              'g',
              { transform: 'translate(0.26 0.25)' },
              r.a.createElement('path', {
                d:
                  'M24.884,7.63,22.746,5.492a1.633,1.633,0,0,0-.773-.435A1.221,1.221,0,0,0,21.9,3.942,1.226,1.226,0,0,0,22.493,2.9V1.225A1.227,1.227,0,0,0,21.268,0H3.73A1.227,1.227,0,0,0,2.5,1.225V2.9a1.226,1.226,0,0,0,.588,1.047,1.222,1.222,0,0,0-.068,1.114,1.633,1.633,0,0,0-.773.435L.113,7.63A.391.391,0,0,0,.389,8.3a3.141,3.141,0,0,1,.873.109A5.839,5.839,0,0,0,.553,12.8l2.91,12.285A2.054,2.054,0,0,0,5.468,26.67H19.529a2.054,2.054,0,0,0,2.005-1.586L24.444,12.8a5.84,5.84,0,0,0-.709-4.393,3.148,3.148,0,0,1,.873-.109.39.39,0,0,0,.276-.667Zm-21.6-6.4A.445.445,0,0,1,3.73.781H21.268a.445.445,0,0,1,.444.444V2.9c0,.245-.418,1.425-.418,1.67a.445.445,0,0,1-.444.444H4.148A.445.445,0,0,1,3.7,4.566c0-.245-.418-1.425-.418-1.67Zm20.4,11.394L20.774,24.9a1.275,1.275,0,0,1-1.245.985H5.468A1.275,1.275,0,0,1,4.223,24.9L1.314,12.619A5.055,5.055,0,0,1,1.981,8.73c.073.043.145.088.22.134a3.73,3.73,0,0,0,2.223.685,3.731,3.731,0,0,0,2.224-.685A2.953,2.953,0,0,1,8.459,8.3a2.954,2.954,0,0,1,1.812.568A3.733,3.733,0,0,0,12.5,9.55a3.731,3.731,0,0,0,2.224-.685,3.177,3.177,0,0,1,3.625,0,3.956,3.956,0,0,0,4.45,0c.074-.046.148-.091.221-.135a5.055,5.055,0,0,1,.668,3.889ZM22.383,8.2a3.179,3.179,0,0,1-3.626,0,3.954,3.954,0,0,0-4.449,0,2.953,2.953,0,0,1-1.812.568A2.955,2.955,0,0,1,10.684,8.2a3.733,3.733,0,0,0-2.224-.685A3.732,3.732,0,0,0,6.235,8.2a2.953,2.953,0,0,1-1.812.567A2.952,2.952,0,0,1,2.613,8.2a3.981,3.981,0,0,0-1.364-.6L2.8,6.044a.857.857,0,0,1,.61-.253h2.5l-.629.961a.391.391,0,1,0,.654.428l.909-1.389h8.717l.23.545a.391.391,0,0,0,.72-.3l-.1-.24h5.173a.856.856,0,0,1,.609.253L23.748,7.6a3.994,3.994,0,0,0-1.366.6Zm0,0',
                transform: 'translate(0)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.5',
              }),
              r.a.createElement('path', {
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
        a = function () {
          return r.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '36.945',
              height: '33.668',
              viewBox: '0 0 36.945 33.668',
            },
            r.a.createElement(
              'g',
              {
                transform:
                  'matrix(0.891, -0.454, 0.454, 0.891, -29.054, -43.403)',
              },
              r.a.createElement(
                'g',
                { transform: 'translate(0 63.998)' },
                r.a.createElement(
                  'g',
                  {
                    id: 'Group_4060',
                    'data-name': 'Group 4060',
                    transform: 'translate(0 0)',
                  },
                  r.a.createElement('path', {
                    d:
                      'M29.921,75.568A14.672,14.672,0,0,0,18.5,67.854C16.086,64.8,8.512,64.033,8.185,64a.625.625,0,0,0-.643.847,50.391,50.391,0,0,1,1.7,5.017,21.245,21.245,0,0,0-3.353,1.856C4.213,69.031.782,69,.625,69A.625.625,0,0,0,0,69.623c0,3.621,1.262,5.439,2.106,6.25C1.262,76.684,0,78.5,0,82.123a.625.625,0,0,0,.625.625c.157,0,3.588-.034,5.269-2.723a24.442,24.442,0,0,0,4.755,2.457A6.645,6.645,0,0,0,10,85.873a.625.625,0,0,0,.625.625c.186,0,4.436-.037,6.553-2.52a14.653,14.653,0,0,0,12.743-7.8A.625.625,0,0,0,29.921,75.568ZM9.077,65.37c2.1.3,5.548,1.052,7.5,2.391a19.787,19.787,0,0,0-6.167,1.6C10.129,68.264,9.516,66.547,9.077,65.37Zm2.188,19.842c.083-1.739.484-2.183.6-2.274a20.336,20.336,0,0,0,3.572.938A9.051,9.051,0,0,1,11.265,85.212Zm.524-2.3v0l.005,0Zm5.086-.167c-3.652,0-9.624-3-10.73-4.13A.624.624,0,0,0,5.7,78.43a.659.659,0,0,0-.114.01.625.625,0,0,0-.46.367,4.771,4.771,0,0,1-3.858,2.636c.2-3.917,2.049-4.963,2.144-5.014a.628.628,0,0,0,0-1.111c-.084-.045-1.948-1.084-2.145-5.011a4.806,4.806,0,0,1,3.858,2.632.625.625,0,0,0,1.021.189C7.251,72,13.223,69,16.875,69a13.409,13.409,0,0,1,11.78,6.875A13.409,13.409,0,0,1,16.875,82.748Z',
                    transform: 'translate(0 -63.998)',
                    fill: '#292929',
                  }),
                  r.a.createElement('path', {
                    d:
                      'M299.917,176.306a9.143,9.143,0,0,1,1.146-4.655.625.625,0,0,0-1.041-.692,11.226,11.226,0,0,0,0,10.693.625.625,0,1,0,1.04-.693A9.022,9.022,0,0,1,299.917,176.306Z',
                    transform: 'translate(-281.167 -164.431)',
                    fill: '#292929',
                  }),
                  r.a.createElement('path', {
                    d:
                      'M258.219,170.786a.626.626,0,0,0-.864.174A10.2,10.2,0,0,0,256,176.307a11.387,11.387,0,0,0,.694,3.97.625.625,0,0,0,1.171-.438,10.139,10.139,0,0,1-.615-3.532,9.143,9.143,0,0,1,1.146-4.655A.626.626,0,0,0,258.219,170.786Z',
                    transform: 'translate(-241 -164.432)',
                    fill: '#292929',
                  }),
                  r.a.createElement('circle', {
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
        s = function () {
          return r.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '30.4',
              height: '22.08',
              viewBox: '0 0 30.4 22.08',
            },
            r.a.createElement(
              'g',
              { transform: 'translate(0.2 -70.8)' },
              r.a.createElement('path', {
                d:
                  'M241.879,131a.879.879,0,0,0-.879.879v2.344a.879.879,0,0,0,1.758,0v-2.344A.879.879,0,0,0,241.879,131Z',
                transform: 'translate(-226.879 -56.484)',
                fill: '#292929',
                stroke: '#fff',
                strokeWidth: '0.4',
              }),
              r.a.createElement('path', {
                d:
                  'M292.608,131.39a.879.879,0,1,0-1.463.975l1.172,1.758a.879.879,0,0,0,1.463-.975Z',
                transform: 'translate(-273.947 -56.483)',
                fill: '#292929',
                stroke: '#fff',
                strokeWidth: '0.4',
              }),
              r.a.createElement('path', {
                d:
                  'M173.536,131.146a.879.879,0,0,0-1.219.244l-1.172,1.758a.879.879,0,1,0,1.463.975l1.172-1.758A.879.879,0,0,0,173.536,131.146Z',
                transform: 'translate(-160.978 -56.483)',
                fill: '#292929',
                stroke: '#fff',
                strokeWidth: '0.4',
              }),
              r.a.createElement('path', {
                d:
                  'M30,82.426a3.228,3.228,0,0,0-2.388-3.113,8.271,8.271,0,0,0-3.795-5.753A15.545,15.545,0,0,0,15,71a15.545,15.545,0,0,0-8.817,2.56,8.271,8.271,0,0,0-3.795,5.753,3.223,3.223,0,0,0,.191,6.271l1.053,4.211A3.8,3.8,0,0,0,7.327,92.68H22.673a3.8,3.8,0,0,0,3.695-2.885l1.053-4.211A3.228,3.228,0,0,0,30,82.426ZM5.337,89.369l-.93-3.72H8.365l.659,5.273h-1.7a2.048,2.048,0,0,1-1.99-1.553Zm14.527-3.72L19.2,90.922H15.879V85.648Zm-5.743,5.273H10.8l-.659-5.273h3.985Zm10.542-1.553a2.048,2.048,0,0,1-1.99,1.553h-1.7l.659-5.273h3.958Zm2.114-5.478H3.223a1.465,1.465,0,0,1,0-2.93.879.879,0,0,0,.879-.879A6.329,6.329,0,0,1,7.186,75,13.779,13.779,0,0,1,15,72.758,13.779,13.779,0,0,1,22.814,75,6.329,6.329,0,0,1,25.9,80.082a.879.879,0,0,0,.879.879,1.465,1.465,0,0,1,0,2.93Z',
                fill: '#292929',
                stroke: '#fff',
                strokeWidth: '0.4',
              })
            )
          );
        },
        l = function () {
          return r.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '30.266',
              height: '30.213',
              viewBox: '0 0 30.266 30.213',
            },
            r.a.createElement(
              'g',
              { transform: 'translate(-29.848 -79.885)' },
              r.a.createElement('path', {
                d:
                  'M30.959,12.163a2.017,2.017,0,0,0-.911-1.333,6.882,6.882,0,0,0-.717-.4,2.308,2.308,0,0,0,1.636-2.5,1.915,1.915,0,0,0-.807-1.305c-.05-.035-.106-.057-.159-.087,0-.006,0-.013,0-.019a1.915,1.915,0,0,0-.807-1.305,2.018,2.018,0,0,0-1.586-.3,6.78,6.78,0,0,0-.737.2,6.78,6.78,0,0,0,.2-.737,2.015,2.015,0,0,0-.3-1.586,1.917,1.917,0,0,0-1.307-.807h-.018a1.8,1.8,0,0,0-.087-.159,1.915,1.915,0,0,0-1.306-.807,2.307,2.307,0,0,0-2.5,1.637,6.881,6.881,0,0,0-.4-.717,2.017,2.017,0,0,0-1.333-.911,1.916,1.916,0,0,0-1.493.353,2.317,2.317,0,0,0-.457,3.182,11.751,11.751,0,0,1,1.183,2.044l.1.224a6.6,6.6,0,0,0-5.318,1.919,6.67,6.67,0,0,0-.913,1.139L1.267,28.286A1.764,1.764,0,0,0,3.7,30.723L22.1,19.058a6.648,6.648,0,0,0,3.057-6.231l.225.1a11.775,11.775,0,0,1,2.044,1.184,2.313,2.313,0,0,0,1.358.434,2.256,2.256,0,0,0,1.823-.892,1.912,1.912,0,0,0,.353-1.492Zm-2.072-2.61a12.464,12.464,0,0,0-1.322.288A7.316,7.316,0,0,0,25.1,9.79L25.02,9.8l.1-.133a6.253,6.253,0,0,1,3.658-2.392,1.056,1.056,0,0,1,.834.148.961.961,0,0,1,.4.655,1.354,1.354,0,0,1-1.123,1.473ZM27.808,5.866a1.055,1.055,0,0,1,.834.148.937.937,0,0,1,.264.279,2.186,2.186,0,0,0-.333.038A7.136,7.136,0,0,0,24.339,9.1l-.672.911-1.176.178,3.721-3.721a5.937,5.937,0,0,1,1.6-.6ZM25.659,3.418a2.128,2.128,0,0,0,.039-.333.928.928,0,0,1,.279.264,1.061,1.061,0,0,1,.148.834,5.952,5.952,0,0,1-.6,1.6L21.807,9.5l.178-1.176.911-.672a7.138,7.138,0,0,0,2.763-4.234ZM22.437,3.1A1.357,1.357,0,0,1,23.91,1.981a.962.962,0,0,1,.655.4,1.061,1.061,0,0,1,.148.834,6.259,6.259,0,0,1-2.392,3.658l-.133.1.012-.079a7.294,7.294,0,0,0-.051-2.467A12.628,12.628,0,0,0,22.437,3.1ZM18.661,4a1.353,1.353,0,0,1,.247-1.836.975.975,0,0,1,.578-.195.942.942,0,0,1,.168.015,1.059,1.059,0,0,1,.695.485,6.257,6.257,0,0,1,.9,4.279L20.979,8.5l-1.036-2.29A12.773,12.773,0,0,0,18.661,4Zm3.892,13.462a5.691,5.691,0,0,1-.973.779L3.185,29.906a.8.8,0,0,1-1.1-1.1L13.748,10.411a5.728,5.728,0,0,1,.782-.976A5.636,5.636,0,0,1,19.639,7.89l1.132,2.5a.491.491,0,0,0,.1.14l0,0,.585.585h0a.468.468,0,0,0,.141.1l2.5,1.132A5.632,5.632,0,0,1,22.553,17.462Zm7.274-4.379a1.355,1.355,0,0,1-1.835.248,12.747,12.747,0,0,0-2.213-1.282l-2.29-1.036,1.755-.265a6.25,6.25,0,0,1,4.279.9,1.06,1.06,0,0,1,.485.695.961.961,0,0,1-.18.745Z',
                transform: 'translate(29.01 78.998)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              }),
              r.a.createElement('path', {
                d:
                  'M31.083,25.118a4.353,4.353,0,0,1-1.283-3.1V22l-.8.02A5.181,5.181,0,0,0,34.2,27.2l-.02-.8A4.352,4.352,0,0,1,31.083,25.118Z',
                transform: 'translate(14.467 69.33)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              }),
              r.a.createElement('path', {
                d:
                  'M25.814,31.449A3.441,3.441,0,0,1,24.8,29H24a4.235,4.235,0,0,0,1.249,3.015l.138.138A4.235,4.235,0,0,0,28.4,33.4v-.8a3.441,3.441,0,0,1-2.449-1.014Z',
                transform: 'translate(17.466 65.131)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              }),
              r.a.createElement('path', {
                d:
                  'M20.683,37.318a3,3,0,0,1-.883-2.132V35H19v.186A3.815,3.815,0,0,0,22.815,39H23v-.8h-.186A3,3,0,0,1,20.683,37.318Z',
                transform: 'translate(20.466 61.532)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.2',
              }),
              r.a.createElement('path', {
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
        c = function () {
          return r.a.createElement(
            'svg',
            { width: '15.394', height: '10', viewBox: '0 0 15.394 10' },
            r.a.createElement('path', {
              d:
                'M13.674,6.343,12.427,7.6l2.89,2.877-12.025.012,0,1.768,11.992-.012L12.444,15.1,13.7,16.343l4.988-5.012Z',
              transform: 'translate(-3.292 -6.343)',
            })
          );
        },
        u = function () {
          return r.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '30',
              height: '26.25',
              viewBox: '0 0 30 26.25',
            },
            r.a.createElement(
              'g',
              { transform: 'translate(0 -32.001)' },
              r.a.createElement(
                'g',
                { transform: 'translate(3.749 42)' },
                r.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  r.a.createElement('path', {
                    d:
                      'M83.364,202.654h-17.5a1.877,1.877,0,0,0-1.875,1.875v1.25a11.846,11.846,0,0,0,6.429,10.556.625.625,0,1,0,.574-1.111,10.6,10.6,0,0,1-5.753-9.445v-1.25a.625.625,0,0,1,.625-.625h17.5a.625.625,0,0,1,.625.625v1.25a10.594,10.594,0,0,1-5.754,9.444.626.626,0,0,0,.287,1.181.616.616,0,0,0,.286-.07,11.84,11.84,0,0,0,6.43-10.555v-1.25A1.877,1.877,0,0,0,83.364,202.654Z',
                    transform: 'translate(-63.988 -202.654)',
                    fill: '#292929',
                  })
                )
              ),
              r.a.createElement(
                'g',
                { transform: 'translate(0 54.499)' },
                r.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  r.a.createElement('path', {
                    d:
                      'M28.7,416.352a.626.626,0,0,0-.578-.386H.625a.626.626,0,0,0-.443,1.068l1.4,1.4a4.349,4.349,0,0,0,3.094,1.281H24.071a4.357,4.357,0,0,0,3.1-1.281l1.4-1.4A.624.624,0,0,0,28.7,416.352Zm-2.421,1.2a3.107,3.107,0,0,1-2.21.915H4.678a3.107,3.107,0,0,1-2.21-.915l-.335-.335H26.617Z',
                    transform: 'translate(0 -415.966)',
                    fill: '#292929',
                  })
                )
              ),
              r.a.createElement(
                'g',
                { transform: 'translate(20.807 44.497)' },
                r.a.createElement(
                  'g',
                  null,
                  r.a.createElement('path', {
                    d:
                      'M363.078,245.726c-1.684-1.083-4.374.093-4.675.229a.626.626,0,0,0,.519,1.139c.6-.274,2.535-.923,3.48-.314a1.776,1.776,0,0,1,.635,1.62c0,2.5-5.048,4.015-7,4.388l-.443.087a.625.625,0,0,0,.12,1.238.58.58,0,0,0,.121-.012l.439-.086c.328-.063,8.009-1.569,8.009-5.614A2.948,2.948,0,0,0,363.078,245.726Z',
                    transform: 'translate(-355.093 -245.272)',
                    fill: '#292929',
                  })
                )
              ),
              r.a.createElement(
                'g',
                { transform: 'translate(17.5 32.001)' },
                r.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  r.a.createElement('path', {
                    d:
                      'M300.407,36.765a3.745,3.745,0,0,0,0-4.529.625.625,0,0,0-.976.781,2.521,2.521,0,0,1,0,2.969,3.741,3.741,0,0,0,0,4.529.625.625,0,1,0,.976-.781A2.517,2.517,0,0,1,300.407,36.765Z',
                    transform: 'translate(-298.666 -32.001)',
                    fill: '#292929',
                  })
                )
              ),
              r.a.createElement(
                'g',
                { transform: 'translate(13.746 32.001)' },
                r.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  r.a.createElement('path', {
                    d:
                      'M236.337,36.773a3.741,3.741,0,0,0,0-4.529.625.625,0,1,0-.976.781,2.517,2.517,0,0,1,0,2.969,3.745,3.745,0,0,0,0,4.529.625.625,0,0,0,.976-.781A2.521,2.521,0,0,1,236.337,36.773Z',
                    transform: 'translate(-234.597 -32.009)',
                    fill: '#292929',
                  })
                )
              ),
              r.a.createElement(
                'g',
                { transform: 'translate(10 32.002)' },
                r.a.createElement(
                  'g',
                  { transform: 'translate(0 0)' },
                  r.a.createElement('path', {
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
        h = function () {
          return r.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '20.4',
              height: '26.487',
              viewBox: '0 0 20.4 26.487',
            },
            r.a.createElement(
              'g',
              { id: 'Outline', transform: 'translate(-71.8 -15.8)' },
              r.a.createElement('path', {
                d:
                  'M72.869,39.913V29.478a10.1,10.1,0,0,1,.821-4l.9-2.09c.076-.178.149-.361.217-.546a8.229,8.229,0,0,1,3.227.065,8.994,8.994,0,0,0,3.4.1c.049.127.1.254.154.38l.9,2.09.8-.342-.9-2.09c-.1-.223-.183-.449-.261-.673a10.139,10.139,0,0,1-.551-2.893H82a.435.435,0,0,0,.435-.435V17.3a1.306,1.306,0,0,0-1.3-1.3H75.043a1.306,1.306,0,0,0-1.3,1.3v1.739a.435.435,0,0,0,.435.435H74.6a10.14,10.14,0,0,1-.534,2.842c-.084.246-.178.489-.278.724l-.9,2.09A10.964,10.964,0,0,0,72,29.478V39.913a2.176,2.176,0,0,0,2.174,2.174H81.13v-.87H74.174A1.306,1.306,0,0,1,72.869,39.913ZM74.609,17.3a.435.435,0,0,1,.435-.435H81.13a.435.435,0,0,1,.435.435v1.3H74.609Zm6.1,2.174a10.993,10.993,0,0,0,.445,2.692,8.129,8.129,0,0,1-2.929-.113,9.1,9.1,0,0,0-3.122-.14,11,11,0,0,0,.373-2.439Z',
                transform: 'translate(0 0)',
                fill: '#292929',
                stroke: '#292929',
                strokeWidth: '0.4',
              }),
              r.a.createElement('path', {
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
    sW6s: function (t, e, n) {
      'use strict';
      n('sc67'),
        n('rzGZ'),
        n('Dq+y'),
        n('8npG'),
        n('Ggvi'),
        n('JHok'),
        n('n7j8'),
        n('R48M'),
        n('pS08'),
        n('LagC');
      var i,
        r =
          (this && this.__extends) ||
          ((i = function (t, e) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            i(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = n('q1tI'),
        a = n('3TDQ'),
        s = n('+yCD'),
        l = n('SSZS'),
        c = n('yQRQ'),
        u = n('S9TR'),
        h = n('m1kc'),
        d = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.containerRef = o.createRef()),
              (n.listRef = o.createRef()),
              (n.state = {
                itemWidth: 0,
                slidesToShow: 0,
                currentSlide: 0,
                totalItems: o.Children.count(e.children),
                deviceType: '',
                domLoaded: !1,
                transform: 0,
                containerWidth: 0,
              }),
              (n.onResize = n.onResize.bind(n)),
              (n.handleDown = n.handleDown.bind(n)),
              (n.handleMove = n.handleMove.bind(n)),
              (n.handleOut = n.handleOut.bind(n)),
              (n.onKeyUp = n.onKeyUp.bind(n)),
              (n.handleEnter = n.handleEnter.bind(n)),
              (n.setIsInThrottle = n.setIsInThrottle.bind(n)),
              (n.next = a.throttle(
                n.next.bind(n),
                e.transitionDuration || 400,
                n.setIsInThrottle
              )),
              (n.previous = a.throttle(
                n.previous.bind(n),
                e.transitionDuration || 400,
                n.setIsInThrottle
              )),
              (n.goToSlide = a.throttle(
                n.goToSlide.bind(n),
                e.transitionDuration || 400,
                n.setIsInThrottle
              )),
              (n.onMove = !1),
              (n.initialX = 0),
              (n.lastX = 0),
              (n.isAnimationAllowed = !1),
              (n.direction = ''),
              (n.initialY = 0),
              (n.isInThrottle = !1),
              (n.transformPlaceHolder = 0),
              n
            );
          }
          return (
            r(e, t),
            (e.prototype.resetTotalItems = function () {
              var t = this,
                e = o.Children.count(this.props.children),
                n = a.notEnoughChildren(this.state)
                  ? 0
                  : Math.max(0, Math.min(this.state.currentSlide, e));
              this.setState({ totalItems: e, currentSlide: n }, function () {
                t.setContainerAndItemWidth(t.state.slidesToShow, !0);
              });
            }),
            (e.prototype.setIsInThrottle = function (t) {
              void 0 === t && (t = !1), (this.isInThrottle = t);
            }),
            (e.prototype.setTransformDirectly = function (t, e) {
              var n = this.props.additionalTransfrom,
                i = h.getTransform(this.state, this.props, t);
              (this.transformPlaceHolder = t),
                this.listRef &&
                  this.listRef.current &&
                  (this.setAnimationDirectly(e),
                  (this.listRef.current.style.transform =
                    'translate3d(' + (i + n) + 'px,0,0)'));
            }),
            (e.prototype.setAnimationDirectly = function (t) {
              this.listRef &&
                this.listRef.current &&
                (this.listRef.current.style.transition = t
                  ? this.props.customTransition || 'transform 400ms ease-in-out'
                  : 'none');
            }),
            (e.prototype.componentDidMount = function () {
              this.setState({ domLoaded: !0 }),
                this.setItemsToShow(),
                window.addEventListener('resize', this.onResize),
                this.onResize(!0),
                this.props.keyBoardControl &&
                  window.addEventListener('keyup', this.onKeyUp),
                this.props.autoPlay &&
                  this.props.autoPlaySpeed &&
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed
                  ));
            }),
            (e.prototype.setClones = function (t, e, n, i) {
              var r = this;
              void 0 === i && (i = !1), (this.isAnimationAllowed = !1);
              var s = o.Children.toArray(this.props.children),
                l = a.getInitialSlideInInfiniteMode(
                  t || this.state.slidesToShow,
                  s
                ),
                c = a.getClones(this.state.slidesToShow, s),
                u =
                  s.length < this.state.slidesToShow
                    ? 0
                    : this.state.currentSlide;
              this.setState(
                { totalItems: c.length, currentSlide: n && !i ? u : l },
                function () {
                  r.correctItemsPosition(e || r.state.itemWidth);
                }
              );
            }),
            (e.prototype.setItemsToShow = function (t, e) {
              var n = this,
                i = this.props.responsive;
              Object.keys(i).forEach(function (r) {
                var o = i[r],
                  a = o.breakpoint,
                  s = o.items,
                  l = a.max,
                  c = a.min;
                window.innerWidth >= c &&
                  window.innerWidth <= l &&
                  (n.setState({ slidesToShow: s, deviceType: r }),
                  n.setContainerAndItemWidth(s, t, e));
              });
            }),
            (e.prototype.setContainerAndItemWidth = function (t, e, n) {
              var i = this;
              if (this.containerRef && this.containerRef.current) {
                var r = this.containerRef.current.offsetWidth,
                  o = a.getItemClientSideWidth(this.props, t, r);
                this.setState({ containerWidth: r, itemWidth: o }, function () {
                  i.props.infinite && i.setClones(t, o, e, n);
                }),
                  e && this.correctItemsPosition(o);
              }
            }),
            (e.prototype.correctItemsPosition = function (t, e, n) {
              e && (this.isAnimationAllowed = !0),
                !e && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
              var i =
                this.state.totalItems < this.state.slidesToShow
                  ? 0
                  : -t * this.state.currentSlide;
              n && this.setTransformDirectly(i, !0),
                this.setState({ transform: i });
            }),
            (e.prototype.onResize = function (t) {
              var e;
              (e = !(!this.props.infinite || ('boolean' == typeof t && t))),
                this.setItemsToShow(e);
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              var n = this,
                i = t.keyBoardControl,
                r = t.autoPlay,
                o = t.children,
                a = e.containerWidth,
                s = e.domLoaded,
                l = e.currentSlide;
              this.containerRef &&
                this.containerRef.current &&
                this.containerRef.current.offsetWidth !== a &&
                setTimeout(function () {
                  n.setItemsToShow(!0);
                }, this.props.transitionDuration || 400),
                i &&
                  !this.props.keyBoardControl &&
                  window.removeEventListener('keyup', this.onKeyUp),
                !i &&
                  this.props.keyBoardControl &&
                  window.addEventListener('keyup', this.onKeyUp),
                r &&
                  !this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                r ||
                  !this.props.autoPlay ||
                  this.autoPlay ||
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed
                  )),
                o.length !== this.props.children.length
                  ? setTimeout(function () {
                      n.props.infinite
                        ? n.setClones(
                            n.state.slidesToShow,
                            n.state.itemWidth,
                            !0,
                            !0
                          )
                        : n.resetTotalItems();
                    }, this.props.transitionDuration || 400)
                  : this.props.infinite &&
                    this.state.currentSlide !== l &&
                    this.correctClonesPosition({ domLoaded: s }),
                this.transformPlaceHolder !== this.state.transform &&
                  (this.transformPlaceHolder = this.state.transform);
            }),
            (e.prototype.correctClonesPosition = function (t) {
              var e = this,
                n = t.domLoaded,
                i = o.Children.toArray(this.props.children),
                r = a.checkClonesPosition(this.state, i, this.props),
                s = r.isReachingTheEnd,
                l = r.isReachingTheStart,
                c = r.nextSlide,
                u = r.nextPosition;
              this.state.domLoaded &&
                n &&
                (s || l) &&
                ((this.isAnimationAllowed = !1),
                setTimeout(function () {
                  e.setState({ transform: u, currentSlide: c });
                }, this.props.transitionDuration || 400));
            }),
            (e.prototype.next = function (t) {
              var e = this;
              void 0 === t && (t = 0);
              var n = this.props,
                i = n.afterChange,
                r = n.beforeChange;
              if (!a.notEnoughChildren(this.state)) {
                var o = a.populateNextSlides(this.state, this.props, t),
                  s = o.nextSlides,
                  l = o.nextPosition,
                  c = this.state.currentSlide;
                void 0 !== s &&
                  void 0 !== l &&
                  ('function' == typeof r && r(s, this.getState()),
                  (this.isAnimationAllowed = !0),
                  this.setState({ transform: l, currentSlide: s }, function () {
                    'function' == typeof i &&
                      setTimeout(function () {
                        i(c, e.getState());
                      }, e.props.transitionDuration || 400);
                  }));
              }
            }),
            (e.prototype.previous = function (t) {
              var e = this;
              void 0 === t && (t = 0);
              var n = this.props,
                i = n.afterChange,
                r = n.beforeChange;
              if (!a.notEnoughChildren(this.state)) {
                var o = a.populatePreviousSlides(this.state, this.props, t),
                  s = o.nextSlides,
                  l = o.nextPosition;
                if (void 0 !== s && void 0 !== l) {
                  var c = this.state.currentSlide;
                  'function' == typeof r && r(s, this.getState()),
                    (this.isAnimationAllowed = !0),
                    this.setState(
                      { transform: l, currentSlide: s },
                      function () {
                        'function' == typeof i &&
                          setTimeout(function () {
                            i(c, e.getState());
                          }, e.props.transitionDuration || 400);
                      }
                    );
                }
              }
            }),
            (e.prototype.componentWillUnmount = function () {
              window.removeEventListener('resize', this.onResize),
                this.props.keyBoardControl &&
                  window.removeEventListener('keyup', this.onKeyUp),
                this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0));
            }),
            (e.prototype.resetMoveStatus = function () {
              (this.onMove = !1),
                (this.initialX = 0),
                (this.lastX = 0),
                (this.direction = ''),
                (this.initialY = 0);
            }),
            (e.prototype.handleDown = function (t) {
              if (
                !(
                  (!s.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (s.isMouseMoveEvent(t) && !this.props.draggable) ||
                  this.isInThrottle
                )
              ) {
                var e = s.isMouseMoveEvent(t) ? t : t.touches[0],
                  n = e.clientX,
                  i = e.clientY;
                (this.onMove = !0),
                  (this.initialX = n),
                  (this.initialY = i),
                  (this.lastX = n),
                  (this.isAnimationAllowed = !1);
              }
            }),
            (e.prototype.handleMove = function (t) {
              if (
                !(
                  (!s.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (s.isMouseMoveEvent(t) && !this.props.draggable) ||
                  a.notEnoughChildren(this.state)
                )
              ) {
                var e = s.isMouseMoveEvent(t) ? t : t.touches[0],
                  n = e.clientX,
                  i = e.clientY,
                  r = this.initialX - n,
                  o = this.initialY - i;
                if (
                  (!s.isMouseMoveEvent(t) &&
                    this.autoPlay &&
                    this.props.autoPlay &&
                    (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                  this.onMove)
                ) {
                  if (!(Math.abs(r) > Math.abs(o))) return;
                  var l = a.populateSlidesOnMouseTouchMove(
                      this.state,
                      this.props,
                      this.initialX,
                      this.lastX,
                      n,
                      this.transformPlaceHolder
                    ),
                    c = l.direction,
                    u = l.nextPosition,
                    h = l.canContinue;
                  c &&
                    ((this.direction = c),
                    h && void 0 !== u && this.setTransformDirectly(u)),
                    (this.lastX = n);
                }
              }
            }),
            (e.prototype.handleOut = function (t) {
              this.props.autoPlay &&
                !this.autoPlay &&
                (this.autoPlay = setInterval(
                  this.next,
                  this.props.autoPlaySpeed
                ));
              var e = 'touchend' === t.type && !this.props.swipeable,
                n =
                  ('mouseleave' === t.type || 'mouseup' === t.type) &&
                  !this.props.draggable;
              if (!e && !n && this.onMove) {
                if ((this.setAnimationDirectly(!0), 'right' === this.direction))
                  if (
                    this.initialX - this.lastX >=
                    this.props.minimumTouchDrag
                  ) {
                    var i = Math.round(
                      (this.initialX - this.lastX) / this.state.itemWidth
                    );
                    this.next(i);
                  } else
                    this.correctItemsPosition(this.state.itemWidth, !0, !0);
                'left' === this.direction &&
                  (this.lastX - this.initialX > this.props.minimumTouchDrag
                    ? ((i = Math.round(
                        (this.lastX - this.initialX) / this.state.itemWidth
                      )),
                      this.previous(i))
                    : this.correctItemsPosition(this.state.itemWidth, !0, !0)),
                  this.resetMoveStatus();
              }
            }),
            (e.prototype.onKeyUp = function (t) {
              switch (t.keyCode) {
                case 37:
                  return this.previous();
                case 39:
                  return this.next();
              }
            }),
            (e.prototype.handleEnter = function () {
              this.autoPlay &&
                this.props.autoPlay &&
                (clearInterval(this.autoPlay), (this.autoPlay = void 0));
            }),
            (e.prototype.goToSlide = function (t, e) {
              var n = this;
              if (!this.isInThrottle) {
                var i = this.state.itemWidth,
                  r = this.props,
                  o = r.afterChange,
                  a = r.beforeChange,
                  s = this.state.currentSlide;
                'function' != typeof a ||
                  (e && ('object' != typeof e || e.skipBeforeChange)) ||
                  a(t, this.getState()),
                  (this.isAnimationAllowed = !0),
                  this.setState(
                    { currentSlide: t, transform: -i * t },
                    function () {
                      n.props.infinite &&
                        n.correctClonesPosition({ domLoaded: !0 }),
                        'function' != typeof o ||
                          (e && ('object' != typeof e || e.skipAfterChange)) ||
                          setTimeout(function () {
                            o(s, n.getState());
                          }, n.props.transitionDuration || 400);
                    }
                  );
              }
            }),
            (e.prototype.getState = function () {
              return this.state;
            }),
            (e.prototype.renderLeftArrow = function () {
              var t = this,
                e = this.props.customLeftArrow;
              return o.createElement(c.LeftArrow, {
                customLeftArrow: e,
                getState: function () {
                  return t.getState();
                },
                previous: this.previous,
              });
            }),
            (e.prototype.renderRightArrow = function () {
              var t = this,
                e = this.props.customRightArrow;
              return o.createElement(c.RightArrow, {
                customRightArrow: e,
                getState: function () {
                  return t.getState();
                },
                next: this.next,
              });
            }),
            (e.prototype.renderButtonGroups = function () {
              var t = this,
                e = this.props.customButtonGroup;
              return e
                ? o.cloneElement(e, {
                    previous: function () {
                      return t.previous();
                    },
                    next: function () {
                      return t.next();
                    },
                    goToSlide: function (e, n) {
                      return t.goToSlide(e, n);
                    },
                    carouselState: this.getState(),
                  })
                : null;
            }),
            (e.prototype.renderDotsList = function () {
              var t = this;
              return o.createElement(l.default, {
                state: this.state,
                props: this.props,
                goToSlide: this.goToSlide,
                getState: function () {
                  return t.getState();
                },
              });
            }),
            (e.prototype.renderCarouselItems = function () {
              var t = [];
              if (this.props.infinite) {
                var e = o.Children.toArray(this.props.children);
                t = a.getClones(this.state.slidesToShow, e);
              }
              return o.createElement(u.default, {
                clones: t,
                goToSlide: this.goToSlide,
                state: this.state,
                notEnoughChildren: a.notEnoughChildren(this.state),
                props: this.props,
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.deviceType,
                n = t.arrows,
                i = t.removeArrowOnDeviceType,
                r = t.infinite,
                s = t.containerClass,
                l = t.sliderClass,
                c = t.customTransition,
                u = t.additionalTransfrom,
                d = t.renderDotsOutside,
                p = t.renderButtonGroupOutside,
                f = t.className,
                m = a.getInitialState(this.state, this.props),
                g = m.shouldRenderOnSSR,
                v = m.shouldRenderAtAll,
                b = a.isInLeftEnd(this.state),
                y = a.isInRightEnd(this.state),
                x =
                  n &&
                  !(
                    i &&
                    ((e && -1 < i.indexOf(e)) ||
                      (this.state.deviceType &&
                        -1 < i.indexOf(this.state.deviceType)))
                  ) &&
                  !a.notEnoughChildren(this.state) &&
                  v,
                w = !r && b,
                S = !r && y,
                T = h.getTransform(this.state, this.props);
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  'div',
                  {
                    className: 'react-multi-carousel-list ' + s + ' ' + f,
                    ref: this.containerRef,
                  },
                  o.createElement(
                    'ul',
                    {
                      ref: this.listRef,
                      className: 'react-multi-carousel-track ' + l,
                      style: {
                        transition: this.isAnimationAllowed
                          ? c || 'transform 400ms ease-in-out'
                          : 'none',
                        overflow: g ? 'hidden' : 'unset',
                        transform: 'translate3d(' + (T + u) + 'px,0,0)',
                      },
                      onMouseMove: this.handleMove,
                      onMouseDown: this.handleDown,
                      onMouseUp: this.handleOut,
                      onMouseEnter: this.handleEnter,
                      onMouseLeave: this.handleOut,
                      onTouchStart: this.handleDown,
                      onTouchMove: this.handleMove,
                      onTouchEnd: this.handleOut,
                    },
                    this.renderCarouselItems()
                  ),
                  x && !w && this.renderLeftArrow(),
                  x && !S && this.renderRightArrow(),
                  v && !p && this.renderButtonGroups(),
                  v && !d && this.renderDotsList()
                ),
                v && d && this.renderDotsList(),
                v && p && this.renderButtonGroups()
              );
            }),
            (e.defaultProps = {
              slidesToSlide: 1,
              infinite: !1,
              draggable: !0,
              swipeable: !0,
              arrows: !0,
              containerClass: '',
              sliderClass: '',
              itemClass: '',
              keyBoardControl: !0,
              autoPlaySpeed: 3e3,
              showDots: !1,
              renderDotsOutside: !1,
              renderButtonGroupOutside: !1,
              minimumTouchDrag: 80,
              className: '',
              dotListClass: '',
              focusOnSelect: !1,
              centerMode: !1,
              additionalTransfrom: 0,
            }),
            e
          );
        })(o.Component);
      e.default = d;
    },
    tSJS: function (t, e, n) {
      'use strict';
      n('E5k/');
      var i = n('q1tI'),
        r = n('wG+1'),
        o = n('2A+t'),
        a = n('izhR'),
        s = n('Bi3C'),
        l = n.n(s),
        c = n('s9Uc'),
        u = n('JuHP'),
        h = {
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
        d = n('35ZX'),
        p = n.n(d);
      e.a = function (t) {
        var e = t.banner,
          n = t.bannerTitle,
          s = t.bannerSubTitle,
          d = t.bannerButtonText,
          f = t.showActionBtn,
          m = void 0 === f || f,
          g = Object(u.a)(),
          v = Object(i.useState)(60),
          b = v[0],
          y = v[1];
        return (
          Object(i.useEffect)(
            function () {
              y(g < 1081 ? 80 : 60);
            },
            [g]
          ),
          Object(o.c)(
            a.a,
            {
              as: 'section',
              sx: Object.assign(
                { backgroundImage: 'url(' + (e && e ? e : p.a) + ')' },
                h.banner
              ),
              className: 'home-banner',
            },
            Object(o.c)(
              a.a,
              { as: 'header', sx: h.bannerContent },
              n && Object(o.c)('h1', null, r.RichText.render(n)),
              s && r.RichText.render(s),
              m &&
                Object(o.c)(
                  l.a,
                  {
                    href: '#feature',
                    style: { textDecoration: 'none', display: 'inline-block' },
                    offset: function () {
                      return b;
                    },
                  },
                  Object(o.c)(
                    a.b,
                    { variant: 'white' },
                    Object(o.c)(
                      a.h,
                      { as: 'span' },
                      d ? r.RichText.asText(d) : 'Order Now'
                    ),
                    Object(o.c)(c.a, null)
                  )
                )
            )
          )
        );
      };
    },
    trlm: function (t, e, n) {
      'use strict';
      var i = n('2A+t'),
        r = n('izhR'),
        o = {
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
          n = t.title,
          a = t.shortInfo;
        return Object(i.c)(
          r.a,
          { className: 'featureCard', sx: o.wrapper },
          Object(i.c)(r.g, { src: e, alt: n }),
          Object(i.c)(
            r.a,
            null,
            Object(i.c)(r.f, { as: 'h4' }, n),
            Object(i.c)(r.h, { as: 'p' }, a)
          )
        );
      };
    },
    ulNG: function (t, e, n) {
      'use strict';
      var i = n('2A+t'),
        r = n('izhR'),
        o = n('IdFE'),
        a = n('40+L'),
        s = n.n(a),
        l =
          (n('VLDe'),
          n('E5k/'),
          function (t) {
            var e = Object.assign({}, t);
            return Object(i.c)(
              r.a,
              Object.assign({}, e, {
                sx: {
                  position: 'relative',
                  '.react-multi-carousel-list': { marginX: '-' + e.gutter },
                  '.react-multi-carousel-item': { paddingX: e.gutter },
                  '.react-multi-carousel-dot-list': {
                    marginTop: '25px',
                    '@media only screen and (max-width: 480px)': {
                      marginTop: '10px',
                    },
                    '.react-multi-carousel-dot': {
                      lineHeight: '1',
                      button: {
                        width: '8px',
                        height: '8px',
                        border: '0',
                        borderRadius: '8px',
                        marginRight: '8px',
                        backgroundColor: 'carouselDot',
                        transition: 'width 0.2s ease',
                      },
                      '&.react-multi-carousel-dot--active': {
                        button: {
                          width: '20px',
                          backgroundColor: 'carouselActiveDot',
                        },
                      },
                    },
                  },
                },
              })
            );
          }),
        c = {
          carouselNav: {
            button: {
              alignItems: 'center',
              backgroundColor: 'white',
              border: 0,
              borderRadius: '50%',
              boxShadow: '0px 4px 4px rgba(115, 125, 144, 0.2)',
              cursor: 'pointer',
              display: 'flex',
              height: 40,
              justifyContent: 'center',
              padding: 0,
              position: 'absolute',
              top: 'calc(50% - 20px)',
              width: 40,
              fontSize: '18px',
              ':focus': { outline: 'none' },
              '@media screen and (max-width: 375px)': {
                width: '32px',
                height: '32px',
                top: 'calc(50% - 16px)',
                fontSize: '16px',
              },
            },
          },
          prev: {
            left: '-20px',
            '@media screen and (max-width: 375px)': { left: '-16px' },
          },
          next: {
            right: '-20px',
            '@media screen and (max-width: 375px)': { right: '-16px' },
          },
        },
        u = function (t) {
          var e = t.next,
            n = t.previous;
          return Object(i.c)(
            r.a,
            { sx: c.carouselNav, className: 'carousel-button-group' },
            Object(i.c)(
              r.a,
              {
                as: 'button',
                sx: c.prev,
                className: 'prev',
                onClick: function () {
                  return n();
                },
              },
              Object(i.c)(o.b, null)
            ),
            Object(i.c)(
              r.a,
              {
                as: 'button',
                sx: c.next,
                className: 'next',
                onClick: function () {
                  return e();
                },
              },
              Object(i.c)(o.d, null)
            )
          );
        };
      e.a = function (t) {
        var e = t.ssr,
          n = t.gutter,
          r = t.children,
          o = t.responsive,
          a = t.showDots,
          c = t.renderDotsOutside;
        return Object(i.c)(
          l,
          { gutter: n },
          Object(i.c)(
            s.a,
            {
              ssr: e,
              infinite: !0,
              arrows: !1,
              swipeable: !0,
              responsive: o,
              showDots: a,
              renderDotsOutside: c,
              renderButtonGroupOutside: !0,
              customButtonGroup: Object(i.c)(u, null),
            },
            r
          )
        );
      };
    },
    v5rg: function (t, e, n) {
      'use strict';
      n('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getOriginalCounterPart = function (t, e, n) {
          var i = e.slidesToShow,
            r = e.currentSlide;
          return n.length > 2 * i
            ? t + 2 * i
            : r >= n.length
            ? n.length + t
            : t;
        }),
        (e.getOriginalIndexLookupTableByClones = function (t, e) {
          if (e.length > 2 * t) {
            for (
              var n = {}, i = e.length - 2 * t, r = e.length - i, o = i, a = 0;
              a < r;
              a++
            )
              (n[a] = o), o++;
            var s = e.length + r,
              l = s + e.slice(0, 2 * t).length,
              c = 0;
            for (a = s; a <= l; a++) (n[a] = c), c++;
            var u = s,
              h = 0;
            for (a = r; a < u; a++) (n[a] = h), h++;
            return n;
          }
          n = {};
          var d = 3 * e.length,
            p = 0;
          for (a = 0; a < d; a++) (n[a] = p), ++p === e.length && (p = 0);
          return n;
        }),
        (e.getClones = function (t, e) {
          return e.length < t
            ? e
            : e.length > 2 * t
            ? e.slice(e.length - 2 * t, e.length).concat(e, e.slice(0, 2 * t))
            : e.concat(e, e);
        }),
        (e.getInitialSlideInInfiniteMode = function (t, e) {
          return e.length > 2 * t ? 2 * t : e.length;
        }),
        (e.checkClonesPosition = function (t, e, n) {
          var i,
            r = t.currentSlide,
            o = t.slidesToShow,
            a = t.itemWidth,
            s = t.totalItems,
            l = 0,
            c = 0,
            u = 0 === r,
            h = e.length - (e.length - 2 * o);
          return (
            e.length < o
              ? ((c = l = 0), (u = i = !1))
              : e.length > 2 * o
              ? ((i = r >= h + e.length) && (c = -a * (l = r - e.length)),
                u && (c = -a * (l = h + (e.length - 2 * o))))
              : ((i = r >= 2 * e.length) && (c = -a * (l = r - e.length)),
                u &&
                  (c = n.showDots
                    ? -a * (l = e.length)
                    : -a * (l = s - 2 * o))),
            {
              isReachingTheEnd: i,
              isReachingTheStart: u,
              nextSlide: l,
              nextPosition: c,
            }
          );
        });
    },
    yQRQ: function (t, e, n) {
      'use strict';
      n('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('q1tI');
      e.LeftArrow = function (t) {
        var e = t.customLeftArrow,
          n = t.getState,
          r = t.previous;
        return e
          ? i.cloneElement(e, {
              onClick: function () {
                return r();
              },
              carouselState: n(),
            })
          : i.createElement('button', {
              'aria-label': 'Go to previous slide',
              className:
                'react-multiple-carousel__arrow react-multiple-carousel__arrow--left',
              onClick: function () {
                return r();
              },
            });
      };
      e.RightArrow = function (t) {
        var e = t.customRightArrow,
          n = t.next,
          r = t.getState;
        return e
          ? i.cloneElement(e, {
              onClick: function () {
                return n();
              },
              carouselState: r(),
            })
          : i.createElement('button', {
              'aria-label': 'Go to next slide',
              className:
                'react-multiple-carousel__arrow react-multiple-carousel__arrow--right',
              onClick: function () {
                return n();
              },
            });
      };
    },
    ztRg: function (t, e, n) {
      'use strict';
      n('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      (e.getPartialVisibilityGutter = function (t, e, n, i) {
        var r = 0,
          o = i || n;
        return (
          e &&
            o &&
            (r = t[o].partialVisibilityGutter || t[o].paritialVisibilityGutter),
          r
        );
      }),
        (e.getWidthFromDeviceType = function (t, e) {
          var n;
          return e[t] && (n = (100 / e[t].items).toFixed(1)), n;
        }),
        (e.getItemClientSideWidth = function (t, e, n) {
          return Math.round(n / (e + (t.centerMode ? 1 : 0)));
        });
    },
    zwN0: function (t, e, n) {
      'use strict';
      n('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.populateSlidesOnMouseTouchMove = function (t, e, n, i, r, o) {
          var a,
            s,
            l = t.itemWidth,
            c = t.slidesToShow,
            u = t.totalItems,
            h = t.currentSlide,
            d = e.infinite,
            p = !1,
            f = Math.round((n - i) / l),
            m = Math.round((i - n) / l),
            g = n < r;
          if (r < n && f <= c) {
            a = 'right';
            var v = Math.abs(-l * (u - c)),
              b = o - (i - r),
              y = h === u - c;
            (Math.abs(b) <= v || (y && d)) && ((s = b), (p = !0));
          }
          return (
            g &&
              m <= c &&
              ((a = 'left'),
              ((b = o + (r - i)) <= 0 || (0 === h && d)) &&
                ((p = !0), (s = b))),
            { direction: a, nextPosition: s, canContinue: p }
          );
        });
    },
  },
]);
//# sourceMappingURL=component---src-pages-minimal-tsx-710986b7cd8c16f3ce26.js.map
