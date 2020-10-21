(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '+yCD': function (t, e, a) {
      'use strict';
      a('R48M'), a('pS08'), a('LagC');
      var c,
        l =
          (this && this.__extends) ||
          ((c = function (t, e) {
            return (c =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
              })(t, e);
          }),
          function (t, e) {
            function a() {
              this.constructor = t;
            }
            c(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((a.prototype = e.prototype), new a()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = a('q1tI');
      e.isMouseMoveEvent = function (t) {
        return 'clientY' in t;
      };
      var r = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return l(e, t), e;
      })(i.Component);
      e.default = r;
    },
    '064o': function (t, e, a) {
      'use strict';
      a('E5k/');
      var c = a('q1tI'),
        l = a('2A+t'),
        i = a('izhR'),
        r = a('wG+1'),
        n = a('Bi3C'),
        o = a.n(n),
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
          a = Object(c.useState)(60),
          n = a[0],
          h = a[1],
          p = t.callUsBanner,
          u = t.callUsTitle,
          m = t.callUsButtonText,
          f = t.scrollTo,
          v = void 0 === f ? '#feature' : f;
        return (
          Object(c.useEffect)(
            function () {
              h(e < 1081 ? 80 : 60);
            },
            [e]
          ),
          Object(l.c)(
            i.a,
            {
              as: 'section',
              className: 'call-us-banner',
              sx: Object.assign(
                { backgroundImage: 'url(' + (p && p.url ? p.url : '') + ')' },
                d.banner
              ),
            },
            Object(l.c)(
              i.a,
              { as: 'header', sx: d.bannerContent },
              r.RichText.render(u),
              Object(l.c)(
                o.a,
                {
                  href: v,
                  style: { textDecoration: 'none' },
                  offset: function () {
                    return n;
                  },
                },
                Object(l.c)(
                  i.b,
                  { variant: 'white' },
                  Object(l.c)(
                    i.h,
                    { as: 'span' },
                    m ? r.RichText.asText(m) : 'Shop Now'
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
    '2ZXj': function (t, e, a) {
      'use strict';
      a('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('q1tI'),
        l = a('m1kc'),
        i = a('m1kc');
      e.populatePreviousSlides = function (t, e, a) {
        void 0 === a && (a = 0);
        var r,
          n,
          o = t.currentSlide,
          s = t.itemWidth,
          d = t.slidesToShow,
          h = e.children,
          p = e.showDots,
          u = e.infinite,
          m = l.getSlidesToSlide(t, e),
          f = o - a - (0 < a ? 0 : m),
          v = (c.Children.toArray(h).length - d) % m;
        return (
          (n =
            0 <= f
              ? ((r = f),
                p && !u && 0 < v && i.isInRightEnd(t) && (r = o - v),
                -s * r)
              : (r = f < 0 && 0 !== o ? 0 : void 0)),
          { nextSlides: r, nextPosition: n }
        );
      };
    },
    '35ZX': function (t, e, a) {
      t.exports =
        a.p + 'static/home-banner-ae85195d6a21675c58f46ff62d79bf69.png';
    },
    '3TDQ': function (t, e, a) {
      'use strict';
      a('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('v5rg');
      (e.getOriginalCounterPart = c.getOriginalCounterPart),
        (e.getClones = c.getClones),
        (e.checkClonesPosition = c.checkClonesPosition),
        (e.getInitialSlideInInfiniteMode = c.getInitialSlideInInfiniteMode);
      var l = a('ztRg');
      (e.getWidthFromDeviceType = l.getWidthFromDeviceType),
        (e.getPartialVisibilityGutter = l.getPartialVisibilityGutter),
        (e.getItemClientSideWidth = l.getItemClientSideWidth);
      var i = a('m1kc');
      (e.getInitialState = i.getInitialState),
        (e.getIfSlideIsVisbile = i.getIfSlideIsVisbile),
        (e.getTransformForCenterMode = i.getTransformForCenterMode),
        (e.getTransformForPartialVsibile = i.getTransformForPartialVsibile),
        (e.isInLeftEnd = i.isInLeftEnd),
        (e.isInRightEnd = i.isInRightEnd),
        (e.notEnoughChildren = i.notEnoughChildren),
        (e.getSlidesToSlide = i.getSlidesToSlide);
      var r = a('7XbK');
      e.throttle = r.default;
      var n = a('oQ0E');
      e.throwError = n.default;
      var o = a('DhR6');
      e.populateNextSlides = o.populateNextSlides;
      var s = a('2ZXj');
      e.populatePreviousSlides = s.populatePreviousSlides;
      var d = a('zwN0');
      e.populateSlidesOnMouseTouchMove = d.populateSlidesOnMouseTouchMove;
    },
    '40+L': function (t, e, a) {
      t.exports = a('41yN');
    },
    '41yN': function (t, e, a) {
      'use strict';
      a('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('sW6s');
      e.default = c.default;
    },
    '7XbK': function (t, e, a) {
      'use strict';
      a('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      e.default = function (t, e, a) {
        var c;
        return function () {
          var l = arguments;
          c ||
            (t.apply(this, l),
            (c = !0),
            'function' == typeof a && a(!0),
            setTimeout(function () {
              (c = !1), 'function' == typeof a && a(!1);
            }, e));
        };
      };
    },
    BIS1: function (t) {
      t.exports = JSON.parse(
        '{"data":{"allShopifyProduct":{"edges":[{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjU0MzY4MzM=","title":"Whole Chicken 800g","handle":"whole-chicken-800g","createdAt":"2020-10-13T14:27:31Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjU0MzY4MzM=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5NzM3MDc4NQ==","price":"3.55","priceV2":{"amount":"3.55","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5NzM3MDc4NQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5MzgyMDMyOTc=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/WholeChicken.jpg?v=1602599252","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M222%20124l-10%202-4%201-5%202c-3%201-3%201-2%203%203%202%202%203%200%203-3-1-5%200-5%204l-1%202-5%202c-4%201-4%202-3%204l-1%202c-2-2-2-9%200-9l1-2h-1l-4%201c-3%200-5%202-5%204h3l2%201c2%202%202%202%200%202-2%201-3%205-1%205l4%201c3%202%207%201%207-1%200-3%203-4%207-3%204%200%204%200%203%202-2%201-2%202-1%206%200%205%200%205-2%205l-2%201-1%201-2%202-3%201-5%201h-4l-1%202v3c2%201%200%203-1%203l-1-1-2-2-2%202c-2%203-4%201-4-3%200-3%200-3-2-1s-7%202-8-1c0-2-3-3-4-2-2%200-1%203%201%203l1%202-1%204c-1%202-5%203-5%201l-1-1c-1%201-1%201%200%200l-2-2c-5%200-6%200-6-2l1-1%203-3c2-4%203-5%205-4l3-2%202-2%204-3c2-2%204-3%205-2h7c0-2%200-2%202-2s3%200%203-2c-1-2-6-4-7-2l-4%201-5%202h-2c-2-1-3-1-12%203h-3c-1-1-4%201-4%203l-1%201c-2-1-13%209-13%2011l-1%201-1-1c0-2-1-2-3-1-3%201-2%204%200%204%203-1%202%200-1%203l-3%204-1%201c-2%200-5%206-4%208%200%202%202%203%203%201%200-2%201-2%204-2%202%201%204%200%205-1l4-1%203-1%204-1%203-1-1-1-1-1c0-2%203-1%205%203%201%203%203%204%203%202h1v2c-2%201-2%202%200%205l2%204%201-3c1-2%203-4%205-4%202-1%203-3%201-3v-1l3-1c3-1%202%203-1%204l-1%203-1%201v1h-2c-2%200-2%200-1%201%201%202%201%202-1%204l-2%203c1%203-1%206-2%204s-5%203-6%207l-1%204c-1%200-3%207-2%208l-2%201-2%202c0%202%201%203%202%202%201%200%202%200%201%202-1%204-3%209-5%209l-2%201%201%201h3l-1%202h-3l-1%201-1%201-4%201-2%201%202%202%204%202c2%200%202%200%201%201l-2%203-2%202c-11%201-13%201-13-5%200-4%200-4%201-1%200%205%201%205%205%204%203-1%203-1%201-2-2%200-3-3-1-3%202%201%203%200%203-2-1-2%200-3%205-6l6-13v-3a80%2080%200%20004-9l3-6%204-9c4-5%205-6%202-6l-3-2c-1-1-1-1-1%201%200%203-4%205-5%203s-3-1-4%202l-1%202c0-2-1-3-2-1h-3c-2%200-3%201-3%204l-2%203-1%202-2%203-3%201c1-2%200-2-2%200v-5l3-4%202-4c0-3%201-5%203-5l1-2h-2c-2%202-6%200-5-2l-2-2-1%202c0%204-12%2015-17%2015l-1%203-2%202-1%201c0%202%204%204%208%204l4%201-9%204-6%203c-2%203-4%204-5%204l-2-1-1-2-1%201c-1%203-3%203-3-1%200-5-2-1-3%205-1%209%201%2013%2010%2019%203%202%203%203%203%205v3l1%202c1%203%206%205%2017%206%209%200%209%200%2013%204l4%203-1%201-4%202c-1%203%2018%204%2068%204a171%20171%200%200060-4l16-1c12%200%2013-1%2011-5v-3l-4-3c-3-1-3-1-1-1s6-4%2010-11l7-9c8-8%2014-19%2015-28%201-4%203-7%208-9l8-6%209-8c7-6%2010-13%207-15v-2c0-2-7-9-9-9s-11-6-12-7l-1-1v2c1%202%201%202-1%202l-2%201h-2c-1-2-4-1-5%201%200%202-1%203-2%200h-8l-6%201-3-3c-4-5-2-7%205-8s10-3%2013-8c2-5%202-8-1-13-1-2-8-3-9-1l-4%201-7%203c-8%204-10%203-12-3l-3-6c-5-4-26-7-40-5m-115%2066l-3%201-3%204-4%203c-3%200-12%2010-11%2012%202%201%2021-14%2021-17l2-1%201-2c0-2-1-3-3%200\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/634304574dbfd285fe736ae178ab12f1/6ddc4/WholeChicken.jpg","srcSet":"/static/634304574dbfd285fe736ae178ab12f1/116d1/WholeChicken.jpg 200w,\\n/static/634304574dbfd285fe736ae178ab12f1/6ddc4/WholeChicken.jpg 390w","srcWebp":"/static/634304574dbfd285fe736ae178ab12f1/aa668/WholeChicken.webp","srcSetWebp":"/static/634304574dbfd285fe736ae178ab12f1/8f92f/WholeChicken.webp 200w,\\n/static/634304574dbfd285fe736ae178ab12f1/aa668/WholeChicken.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4Mjc1OTk1MjE=","title":"Swordfish, Previously Frozen 600g","handle":"halibout-600g","createdAt":"2020-10-13T14:27:45Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4Mjc1OTk1MjE=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwMTY5NjE2MQ==","price":"8.99","priceV2":{"amount":"8.99","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwMTY5NjE2MQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NDIzOTc2MDE=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/SwordfishPreviouslyFrozen.jpg?v=1602599266","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M156%20154c-10%202-10%202-8%203l10%202c7%200%2013%203%2012%206l2%201c1-1%203%200%204%201%203%202%204%201%201-2-2-2-3-4-1-4l12%2012c1%202%202%207%201%209l-1%203c-1%201-1%200-1-2%200-7-3-10-5-6h-1l-2%201c-1%203-1%203-3%202h-4c0-2-2-1-2%201l-3-2c-4-4-5-5-4-2l-2%203c-1%202-2%202-5-1l-4-1s-2%200-5-3c-5-3-9-4-8-2l-9%201-13%201-3%202%204-1c4%200%204%200%202%201l-1%203-1%201-1-1h-3c-4%204-6%203-3-1v-2l-2%202c-1%202-2%201-1-1%201-5-5-2-8%203l-4%204-34%208-6%202-3-3-3-3v3c0%209%201%2011%2018%2032a1085%201085%200%200039%2050c4%207%2017%2014%2028%2016s21%200%2042-7a18831%2018831%200%2000141-50c23-7%2026-10%2028-21v-5l-3%203c-4%204-14%208-22%2011l-6%202a434%20434%200%2001-42%2013c-9%204-22%208-26%208-3%201-4%200-2-1v-3c-1-3%206-6%2018-6l11-2%2016-8%202-3v-1l7-5c3%200%205-2%203-2v-1h4l13-4%203-1-3-1c-4%201-3%200%201-1h2l2%201%206-3%206-3%203-1h3v-2l-3-3h-2c-2%201-2%201-1%203v1l-2-1h-4c-1-1-4-1-10%202l-22%208c-2%200-2-1-2-9l1-10%203-1h-2c-2%200-3%200-3-3%200-2%201-3%202-3h4c-2%201-2%201%200%201l2-1h2l1-1h3c6%200%208-2%205-4s-10-1-12%201l-2%201c-1-1-2%200-3%201h-2c-2-2-3-1-2%202%202%208%201%2017-4%2018-1%200-5%201-7%203-8%204-29%207-28%204l2-2c4%200%204-2%202-4-3-2-9-2-12%200-3%203-5%202-7-1-1-3-4-4-4-2%200%201-3-1-6-5l-6-7c0-2-13-13-15-13l-3-2-2-2-2-1h-2l-4-3c-2-2-3-3-4-2l-7-2c-6-3-9-4-10-2h-1l-1-1-1-3c-2-2-7-3-15%200m-20%20111c-6%202-15%203-12%201%202-1%200-2-6-2-7%201-7%201-2%204%209%206%2011%207%2024%207a57%2057%200%200029-4l3-1c3-2-3-2-9-1l-12%202c0-1%201-2%203-2%206-4%202-5-6-3-4%202-4%202-4-1%200-2-1-2-8%200\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/23c1947012dedeaa477f4162991324d2/6ddc4/SwordfishPreviouslyFrozen.jpg","srcSet":"/static/23c1947012dedeaa477f4162991324d2/116d1/SwordfishPreviouslyFrozen.jpg 200w,\\n/static/23c1947012dedeaa477f4162991324d2/6ddc4/SwordfishPreviouslyFrozen.jpg 390w","srcWebp":"/static/23c1947012dedeaa477f4162991324d2/aa668/SwordfishPreviouslyFrozen.webp","srcSetWebp":"/static/23c1947012dedeaa477f4162991324d2/8f92f/SwordfishPreviouslyFrozen.webp 200w,\\n/static/23c1947012dedeaa477f4162991324d2/aa668/SwordfishPreviouslyFrozen.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjU2MzM0NDE=","title":"Beef T Bone 850g","handle":"beef-t-bone-850g","createdAt":"2020-10-13T14:27:33Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjU2MzM0NDE=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTIwNTc5Mw==","price":"8.95","priceV2":{"amount":"8.95","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTIwNTc5Mw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5Mzg2MjkyODE=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/vealMeat.jpg?v=1602599253","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M203%2092l-5%201c-4%201-14%209-14%2011s-4%205-19%2014c-11%206-17%2011-21%2016l-5%204c-2%200-21%2020-24%2026-2%202-3%206-3%208l-4%208a69%2069%200%2000-10%2031l-2%2016%201%206%203%209c0%207%206%2025%209%2030%203%204%207%208%2015%2011%204%202%207%204%2010%208l5%205%203%203c4%206%208%203%209-8%200-6%201-8%204-11l13-21a225%20225%200%200012-34l1-1%203-5c3-3%203-4%203-9l-1-6c-1-1-1%200-1%202s0%203-1%202l-1-3v-2c-1-1-1-1%201-2%202-2%204-8%203-10l1-5c2-3%202-3%202%2011%201%2012%201%2013%206%2013l10%203h2l2%202%203%201%2012%209a127%20127%200%200132%2049c3%204%200%2016-6%2021-11%209-20%2014-24%2014l-2%201c-1%201%201%202%202%201l5-1%204-2c1-2%202-2%205-1l5-1%2010-6a151%20151%200%200021-12c2%201%207-4%206-5l1-1a40%2040%200%200011-16l1-5%201-2%201-3%201-4c5-9%205-17%200-17v-6c1-3%202-6%201-9l-1-12c0-9%200-9-3-12-5-5-5-6-4-7%201-2%201-2-1-3-3-1-5-3-4-4l3%201c6%202%206-3%202-18l-2-12c0-4-2-7-2-3h-1v-3c2%201%201-1-1-5l-3-3c0%202-1%202-2-1-2-2-3-4-2-5%200-2-6-9-7-9l-7-6c-9-10-17-16-31-23-5-2-7-2-17-3h-14m43%20189l-1%202c0%202-13%2014-14%2014l-1%201h-2c-2-2-2-2-8-2h-3c1%202-6%203-12%202h-8l-4-1c-1-1-1-1-3%201h-1c1-2%201-2-6-2-5-1-6%201-2%204%206%204%208%205%2018%206%2019%201%2023%200%2027-3l11-7c3%200%2012-13%2011-15h-2\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/107fa0c1d060a9a0c5750dc3d74be737/6ddc4/vealMeat.jpg","srcSet":"/static/107fa0c1d060a9a0c5750dc3d74be737/116d1/vealMeat.jpg 200w,\\n/static/107fa0c1d060a9a0c5750dc3d74be737/6ddc4/vealMeat.jpg 390w","srcWebp":"/static/107fa0c1d060a9a0c5750dc3d74be737/aa668/vealMeat.webp","srcSetWebp":"/static/107fa0c1d060a9a0c5750dc3d74be737/8f92f/vealMeat.webp 200w,\\n/static/107fa0c1d060a9a0c5750dc3d74be737/aa668/vealMeat.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzA5MDkwODk=","title":"Mini Danish Maple Pecan Pastry 100g","handle":"mini-danish-maple-pecan-pastry-100g","createdAt":"2020-10-13T14:28:09Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzA5MDkwODk=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwNjExOTg0MQ==","price":"2.00","priceV2":{"amount":"2.0","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwNjExOTg0MQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NTEwMTU1ODU=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/MiniDanishMaplePecanPastry.jpg?v=1602599289","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M256%20131l-1%202-3%203-5%201-12%202c-11%200-13%201-15%203l-3%204-8%205c-4%201-4%201-7-4-2-5-4-5-9-2-3%202-5%202-10%201-7-1-20%200-24%203-2%201-3%203-3%205-1%205-6%207-12%205-3-2-3-2-2-5%200-4%200-4-4-7-5-3-11-3-15%202-3%204-7%205-10%204-3-2-10%200-21%205-10%205-10%206-16%2013a228%20228%200%2001-19%2023c-2%200-4%203-3%205v10l2%2010%204%208%206%2010c2%201%203%204%203%205l3%202c3%200%2010%209%209%2011l4%207%206%204c4%205%207%207%2012%209%202%201%205%201%2016-2l6-1%203-1c1-1%203-2%207-2l8-1c3-3%2011-5%2018-5s7%200%208-3c1-1%201-2%202-1%204%203%2024%204%2030%201h5l4-1%204-1c2%201%202%201%202-1%200-1%200-2%205-2%206%200%2020-2%2023-4h3l3-1c2-1%2012%200%2015%202h4c3-3%2017-4%2029-3l20-2%207-2%207-3%203-3%201-2c-2-6-2-9%200-10%205-2%205-8%202-13l-2-6-2-7c-10-16-9-15-9-22l2-9-2-4c-2-2-2-3-2-6%200-6-6-10-14-11h-14c-8-1-8-1-8-4%200-4-3-5-7-4-3%200-4%200-5-2s-2-2-6-2c-3%200-4%200-5-3-2-3-5-5-8-3\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/4750bbc82f8685780a2fda4c7b168885/6ddc4/MiniDanishMaplePecanPastry.jpg","srcSet":"/static/4750bbc82f8685780a2fda4c7b168885/116d1/MiniDanishMaplePecanPastry.jpg 200w,\\n/static/4750bbc82f8685780a2fda4c7b168885/6ddc4/MiniDanishMaplePecanPastry.jpg 390w","srcWebp":"/static/4750bbc82f8685780a2fda4c7b168885/aa668/MiniDanishMaplePecanPastry.webp","srcSetWebp":"/static/4750bbc82f8685780a2fda4c7b168885/8f92f/MiniDanishMaplePecanPastry.webp 200w,\\n/static/4750bbc82f8685780a2fda4c7b168885/aa668/MiniDanishMaplePecanPastry.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjU5NjExMjE=","title":"Swaggerty\'s Farm All Natural Mild Premium Sausage Patties 350g","handle":"swaggertys-farm-all-natural-mild-premium-sausage-patties-350g","createdAt":"2020-10-13T14:27:36Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjU5NjExMjE=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTUzMzQ3Mw==","price":"4.00","priceV2":{"amount":"4.0","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTUzMzQ3Mw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5MzkxNTM1Njk=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/Swaggerty_sFarmAllNaturalMildPremiumSausagePatties.jpg?v=1602599256","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M98%20133l-5%201c-8%200-21%206-21%2010l-1%203c-2%201-3%2010-3%2014l-1%202c-2%200-1%2017%201%2022%202%203%202%204%204%203%201-1%205%200%204%201l2%205%203%206c-1%201%200%202%201%203v7l-3%207-4%2010-1%203-2-4c-2-6-5-2-5%2010%200%2010%203%2019%207%2018l1%201%201%201c1-1%203%202%203%203v2c1%201%202%202%201%203l4%204c3%202%204%203%2024%202%2026%200%2033-1%2027-6l-2-2%202-2%206-3c5%201%207%202%207%204l2%201v2l-1%201c-9%206%2039%208%2050%203l3-2h-3l-2-2v-3l4-3%203-2%204%203c6%203%206%204%204%206l-1%202%205%202c9%203%2045%202%2050-1%201-2%201-2-3-2-6-1-6-3-1-7%206-4%208-4%2010-1%201%201%203%203%205%203%203%201%203%203-3%205l-1%201%202%201c0%202%2036%204%2044%202%209-2%2018-9%2021-16%202-4%202-11%202-37a245%20245%200%20012-36v-5l-1-8c-1-24-2-27-12-32-4-1-12-2-11%200l-1%201-2-1c1-1%200-1-2-2l-5-1h-4c-2-3-26%201-32%205-5%203-4%203%202%205l3%201c-2%200-3%204-2%204l-1%204-2%203-1%202c0%204-1%204-2%200l-1-3-2-3c-5-10-17-18-21-14h-8c-1-2-1-2%202-3%205-1%205-1-3-1-11%200-18%202-21%205-2%202-2%202%200%202s2%200%201%203c0%202%201%203%204%200%202-2%202%200%200%202s-3%203-5%203c-3-1-3%200-5%203-3%205-6%205-10%200-5-8-7-10-11-11l-5-3c0-2-1-2-12-4l-4-1-1%201h-8l-7%201-6%202-1%201-4%201c-2%202-2%203-1%204%201%202%201%202%202%201h3v2l-1%203-2%201c-1-1-1-1-1%201%201%202%200%205-1%207-1%201-4-1-4-3l-1-1v-3c0-1%200-2-1-1%200%202-3%200-9-8l-3-3h-1v-2h-1l-3-1-6-1-13-1h-2m141%2023l-11%204c-3%202-13%202-18%201l-10-3c-23-4-38-1-44%207-5%206-3%2015%203%2017l-2%205c-7%209-9%2014-8%2023%201%204%201%204%205%204s3%201-1%201l-2%202h1l1%202v1l1%202c0%205%2018%2015%2028%2016%205%200%205%200%202-1-7-1-18-6-22-8-4-3-4-4-1-3%203%202%206%201%206-2l-3-2c-6%200-6-5%200-7%203%200%206%201%204%203-1%201-2%203%200%205%202%203%203%202%203-1%201-3%205-5%2010-5%203-1%206-3%203-3v-2l2-3h1l1-1-6-1-7-1-3%203-3%203-2-1%202-3%202-2%201-1c0-2%203-3%203-1h1c0-2%202-3%203%200%200%201%203%202%203%200l9-1%209%201%203%201%202-1h5l1%201%201-1c-1-1%200-1%202-1l3%201c-1%201%200%201%201%201l2-1c0-1-1-2-5-2-5-1-5-1-3-2%202%200%202-1%201-1l-1-5c0-2%200-3-2-3s-2%200-2%204l-1%204-1-4-1-4h-1c-1-1%201-1%204-1h6v3l1%204c2%201%204-2%203-5l1-2c2%200%201%207%200%209-1%201-1%201%201%201l3%201%205%201h5l3%201c4%200%209%201%208%202-2%201-3%208-1%208%203%200%202%202%200%202s-2%200-1%201l2%202%201%201c1%200%202%201%201%202l-1%202v1l-1%201c-1%200-2%200-1%201l-1%201h-1c1%201-3%204-12%207-4%202-7%203-5%203%204%200%2016-5%2020-9%206-5%206-8%203-13l-2-4%204-5c6-9%208-17%206-24-2-5-4-7-6-7-3%200%202-2%2012-5l6-1-4-4c-4-4-4-5-4-8v-3h-7l-13%202m-64%205c-1%202-3%202-8%203-6%200-7%201-7%203s-1%203-2%203c-2%200-2%203%200%205%201%202%201%202-1%201-2%200-2%200-1%201l3%202%201%201c1%201%204%202%209%202%207%200%208%200%207-1s-1-1%201-1h9l-3-1h1c3%200%204%200%203-1l1-1h4c3-2%2019-1%2022%200%202%201%203%203%200%203-1%201-1%201%201%201%203%200%203-4-1-5-3-1-3-2-2-2l2-3v-3c2-3-3-4-13-3-6%201-8%202-8%203v1l-1-1-2-1c-4%200-6-2-4-3l1-2c-5-3-5-3-5-1-1%202-5%201-5-1%200-1-1-1-2%201m-38%2033h-3c1%202%201%202-1%202-1-1-4%201-4%203l-3%203c-3%202-3%202-2%204l5%204c4%203%2010%2011%2010%2013l2%201%201%201%201%201%201-1-2-2v-13c0-5%200-8%202-13%200-2%200-2-1-1h-1v-3h-2c-2-1-2-1-3%201m127%201l-1%204-1%205c-1%202-1%203%203%207%204%203%205%205%204%206v2c3%201%205-1%205-3l1-3c2-2%202-2%201-4v-7c1-4-2-8-4-7l-3-2h-1l-1%202v-1l-1-2-2%203m63%201l-2%201-4%202-4%202%203%202%206%204c3%203%207%203%206%200l-1-11-2-1c-1-1-1-1-2%201\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/9da4d92aca184ccf2a0363d9ac1eca34/6ddc4/Swaggerty_sFarmAllNaturalMildPremiumSausagePatties.jpg","srcSet":"/static/9da4d92aca184ccf2a0363d9ac1eca34/116d1/Swaggerty_sFarmAllNaturalMildPremiumSausagePatties.jpg 200w,\\n/static/9da4d92aca184ccf2a0363d9ac1eca34/6ddc4/Swaggerty_sFarmAllNaturalMildPremiumSausagePatties.jpg 390w","srcWebp":"/static/9da4d92aca184ccf2a0363d9ac1eca34/aa668/Swaggerty_sFarmAllNaturalMildPremiumSausagePatties.webp","srcSetWebp":"/static/9da4d92aca184ccf2a0363d9ac1eca34/8f92f/Swaggerty_sFarmAllNaturalMildPremiumSausagePatties.webp 200w,\\n/static/9da4d92aca184ccf2a0363d9ac1eca34/aa668/Swaggerty_sFarmAllNaturalMildPremiumSausagePatties.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjYxOTA0OTc=","title":"Swaggerty\'s Farm All Natural Mild Premium Sausage 350g","handle":"swaggertys-farm-all-natural-mild-premium-sausage-350g","createdAt":"2020-10-13T14:27:37Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjYxOTA0OTc=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTY5NzMxMw==","price":"4.95","priceV2":{"amount":"4.95","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTY5NzMxMw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5Mzk1NDY3ODU=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/Swaggerty_sFarmAllNaturalMildPremiumSausageLinks.jpg?v=1602599257","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M82%20112l-4%202c-6%208-7%2011-5%2018v14l2%2014v25l2%202v1c-2%201-3%206-2%2013a367%20367%200%20011%2053l-1%204-1%204-1%205%201%206%201%203c1%207%208%2014%2015%2016a973%20973%200%2000110-1c6%203%20115%202%20123-1%205-2%207-8%206-15l1-4v-2l1-1c2%201%202%201%200-7l-2-5v-5c0-6-2-10-5-11-3%200-3%200-1-2l1-9c-1-6-1-7-4-10l-3-3%203-2%203-1%201-1%202-3c1-1%202-5%200-5l-1-4c0-3%200-4-3-6-4-3-5-4-3-4%204%200%206-4%207-11l-1-6-1-3c-1-3%200-5%203-6l1-3%202-4c1-2%200-7-1-10-2-4-2-7-1-7l1-2v-1h1l1-6c0-5-3-14-7-17-4-2-21-3-74-3-42%200-45%201-47%202-1%202-2%202-4%201l-12-2H82m73%2024c-18%203-27%2011-28%2024l1-3c2-12%2017-20%2038-21l14-1c3-1-18-1-25%201m102%202l-17%205c-7%203-8%204-17%203l-17-3c-12-3-24-5-38-4-23%201-34%208-35%2022v6l5%205%205%205-6%206c-5%207-9%2015-9%2022l-2%206v8l2%201v-2c-1-1-1-1%201-1%203%200%203%201%202%203-2%202-2%202%200%202l4%204%203%204%201%201h-3l7%208c12%2011%2025%2015%2055%2015%2034%201%2061-7%2068-22l6-7c4-4%2011-17%2012-25%202-10%201-23-3-30l-4-7c-1%200-1%201%201%204%206%209%208%2025%203%2038-1%206-11%2021-13%2021l-1-2-3-6c-3-4-3-3%201-7%208-8%2013-21%2012-30-1-8-6-17-9-16-6%200%200-2%2012-5l12-4c1%200-1-3-5-6-7-6-7-5-6-11v-4h-8c-4%200-12%201-16%203m-93%206c0%202-4%204-9%205l-7%201h-1c0-2%200-2-1-1-2%200-4%205-4%207l-1%201c-4%201-4%204-2%207l3%203c0%202-2%201-4-1-1-1-1-1-1%201%200%205%208%203%208-2%200-2%200-2%201%201%202%205%203%206%204%203%200-3%202-3%202%200l1%202c2%200%202-2%201-5-1-4-1-4%202-4%202%200%203%200%202%201l-2%201h1l1%202-2%204c-1%203-2%203-5%203l-6-2c-3%200-3%200%200%201l12%202c5%200%207-1%204-1l-4-1c0-2%201-3%203-2l5%201c3%200%203%200%202%201-2%201-2%201%200%201l3-1c-1-1%203-4%205-3%202%200%202%200%201-2-3-4-2-6%201-6h3l1%204h-1c0-2-2-3-2-1v3c0%202%200%202%202%200h4c2%200%202%200%201-2v-4l-2-1%202-1h2v5c-1%202%201%203%205%201l4-1v-2c-2-1-3-3-1-5%202-1%203%200%203%204l2%202%202-1c-2-5-2-6-1-6%202-1%204%202%204%204l1%202v1c-2%202-1%202%204%202l9%202c2%202%202%202%200%204-1%202-1%202%201%202%204-1%202-7-3-8l-6-2c-2%200-3-1-3-3%201-4-2-7-6-7-5%200-3-1%203-1h6l-1%201-2%201%202%201c1-1%202-1%202%201l2%203c1%202%200%203-2%201-1-1-1-1-1%201%201%202%204%203%206%201v-6l1-1c-1-1%200-2%201-2l-3-2c-4-1-22%200-26%202h-7c-5-1-5-1-4-6%200-1-1-2-3-2-3-1-6%200-5%202h-2l-3-2-1-2-1%201m66%2048l1%206c1%200%202-1%201-2v-3l3%203c2%202%209%203%209%201%200-3%203-7%204-6l-1%202v1c2%200%202%201%202%203l2%201c2%200%202%200%200-4l-2-6c-1-3-3-2-5%204-2%205-4%206-6%203-2-2-3-4-1-4l1-2c1-2-2-4-3-3v1c2%201%201%204-1%204s-3-3-1-5c1-1%201-1-1-1s-2%201-2%207m-41%2011v2l-1%201-2-1c1-2-6-1-7%200h-3c-1%202-4%203-4%201s-3-3-4-2v1l2%201-6-1h-3c0%203-4%206-7%205l-9%203%208%209c4%204%204%204%202%205-2%200-2%200-1%201l1%202-3-2c-4-3-4-3-4%206s1%2010%203%205c2-4%202-5%200-3l-1%201c0-3%204-5%208-5h5l-4%201h-3l3%201c5%202%205%203%200%207-5%203-5%204%203%207%2019%207%2054%207%2078-1%2011-4%2020-9%2019-12l1-1c2%200%204-6%203-8v-2c0-1%200-2-2-2l-1-2c1-2%200-2-1-2-1%201-1-1%201-3%201-1%201-1-1-3-1-2-2-2-2%200%200%205-1%205-2%203l-4-2h-3l2-3c3-5%203-5-1-4l-4-1c-3-2-6-2-6%200l-2%201c-1%200-2%200-1-1l-7-2-5%201c1%203-3%204-5%202l-1-1h-1c0-2-5-1-5%201l-8%201-9-1c0-1-1-2-3-2l-2-1h-1m20%208l-1%202-1%202-2%201%201%201c3%201%2010%200%2015-2l3-1c2%201%203-1%202-3s-8-3-11-1l-1%201-2%203v-2l-1-3-2%202m-82%2024c0%202%207%2010%2012%2014%2010%208%2020%2013%2034%2016%2010%202%2024%204%2024%202l-7-1c-23-3-44-12-56-25l-7-6m145%2010c-3%205-25%2015-43%2019-11%202-14%203-10%203a122%20122%200%200055-21v-2l-2%201\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/6ee783e0b134a686de32578be953c481/6ddc4/Swaggerty_sFarmAllNaturalMildPremiumSausageLinks.jpg","srcSet":"/static/6ee783e0b134a686de32578be953c481/116d1/Swaggerty_sFarmAllNaturalMildPremiumSausageLinks.jpg 200w,\\n/static/6ee783e0b134a686de32578be953c481/6ddc4/Swaggerty_sFarmAllNaturalMildPremiumSausageLinks.jpg 390w","srcWebp":"/static/6ee783e0b134a686de32578be953c481/aa668/Swaggerty_sFarmAllNaturalMildPremiumSausageLinks.webp","srcSetWebp":"/static/6ee783e0b134a686de32578be953c481/8f92f/Swaggerty_sFarmAllNaturalMildPremiumSausageLinks.webp 200w,\\n/static/6ee783e0b134a686de32578be953c481/aa668/Swaggerty_sFarmAllNaturalMildPremiumSausageLinks.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjcyMDYzMDU=","title":"Sliced Homestyle Turkey Breast 300g","handle":"sliced-homestyle-turkey-breast-300g","createdAt":"2020-10-13T14:27:43Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjcyMDYzMDU=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwMDc3ODY1Nw==","price":"1.95","priceV2":{"amount":"1.95","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwMDc3ODY1Nw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NDE2NDM5Mzc=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/SlicedHomestyleTurkeyBreast_Package.jpg?v=1602599263","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M228%20111c-3%202-12%2012-12%2015s-3%208-5%208v-8c1-4-1-5-6-4l-10%201c-6%200-8%200-9%202h-8l-8%201-7%201v1c-2%200-4%204-3%206l3%201%203%201%203%203%2011%207%2010%207h-6l-8%202-7%202-13%203h2c2%200%2013%204%2014%207l4%201%207%202c6%203%2010%203%2013%201l3-2v3c-1%205-4%2010-8%2011-4%202-10%209-10%2011s-2%201-6-4c-5-5-12-7-17-6l-4%202c0%201-2%202-8%203-10%201-11%202%200%202%207-1%208-1%2014%203%207%203%208%204%208%209%200%202%200%202-9%202s-10%200-14%203c-7%204-10%203-18-8l-4-5c-6-4-6-4-3-6l3-3-2-1-9-4-9-4c-4-2-10-3-10-1%201%201%200%202-1%203l-2%206-3%206-1%205c-1%205-3%204-2-1v-4l-8%204c-18%209-23%2014-23%2023%200%2014%2013%2045%2024%2059%2011%2013%2018%2015%2043%2011%2019-3%2053-12%2048-12-3%200-1-2%201-2l4-1%2012-3a690%20690%200%200051-19c-1%200%200-2%202-3l3-2-3%201a217%20217%200%2000-6%200c0-1%202-3%208-4l11-4%208-4c3-1%204%201%202%203-1%201-1%201%201%201l3-1%208-5%204-2-1-1h4c4%201%205%200%203-1-2-2-1-3%203-2l5-1%201-2-2%201h-4l-2-1%201-1c0%201%202%200%203-2l6-2%205-2c1-2%202-2%204-2%202%201%203%201%203-1l3-2%202-2%205-3%206-3h3l4-2c3%200%204-1%205-2l3-3%202-2%202-4c3-3%202-5-4-12l-6-6-3%202c-3%201-5%201-4-1l3-1%202-1c0-2-25-21-36-27-7-4-8-4-17-5-11%200-11%200-8%204%201%202%201%202%202%200%201-1%202-1%207%201l5%203%203%202%203%203%201%201c2%200%206%204%208%208l6%209c4%205%202%2013-6%2022-8%208-16%208-26-2l-11-8c-4-2-5-3-4-5s2-3%205-2l1-2%201-2%201%203c0%204%203%204%207%200l3-2%206%202c6%203%208%203%2010-1%202-3%201-7-2-8-2%200-9-7-9-8l-3-4c-5-4-10-6-21-6l-10-1-2-1h2c4%200%204-1%201-3-3-3-1-5%202-3%204%203%205-2%202-11-4-12-14-21-22-18m-52%2018h-5l-4%202c0%203%202%205%204%205l9%201c1%201%202%202%203%201l3%202%204%202%201%202%203%203%205%203h8l1-1%202-3c2-3%203-4%207-5%205-3%204-4-2-4l-7-2c-4-2-31-8-32-6m33%2035h-4l-1%205-2%209-12%2013c-1%200-7%204-8%207-3%204-2%205%201%203l3-2c1-1%203-2%203-4l3-2h2c0%202%201%202%203%200l14-8c6%200%2013-2%2013-4s-3-6-5-6l-1-1h-3l-4-11-2%201m3%2025l1%201%201%201%202%201c2%200%202%200%201%201h21l-3%201c-5%201-3%203%203%204l6%202c3%201%203-4%200-5-2-1-2-2-1-2v-2c-2-1-4-2-12-2a659%20659%200%2001-19%200m-119%209c-7%207-9%208-9%206l-1-2-1%202%201%201%201%202c-1%201-1%201%201%201l4-1%203-1h1l1%201%204-10c1-4%206-2%2012%204%203%204%209%206%208%203v-1c2%200%202%200%200-4-3-5-5-7-9-7h-6c-3-1-4%200-10%206m110%201l-8%202-6%202c-1-1-4%200-6%201l-7%201c-2%200-4%200-5%202l-4%202-2%201%202%205%202%202%208%2010%204-2c5-4%206-4%202%201l-4%204c0%201%207-1%2013-5l10-4c4-1%204-2%207-7%202-6%202-6%200-6-3%200-3-2-2-6s1-4-4-3m-53%2010c-5%202-7%204-7%208v3l5%201%208%201c4%201%205-1%203-7-2-7-3-8-9-6m-7%2018c-3%202-2%204%203%205l6%202c1%201%202%201%205-1%204-2%204-3-1-5-6-3-11-3-13-1m-41%204c0%202%204%2011%207%2015s7%206%209%204l-2-1v-1l1-4c-1-3%201-3%202%201%201%202%202%202%205%201l4-2c2-1%202-1-2-1-5%201-6%201-8-2s-2-3-3-1c-1%201-1%201-2-1l-4-4-5-3-2-1\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/e3fed3ded034d74a3fbf71977c977da3/6ddc4/SlicedHomestyleTurkeyBreast_Package.jpg","srcSet":"/static/e3fed3ded034d74a3fbf71977c977da3/116d1/SlicedHomestyleTurkeyBreast_Package.jpg 200w,\\n/static/e3fed3ded034d74a3fbf71977c977da3/6ddc4/SlicedHomestyleTurkeyBreast_Package.jpg 390w","srcWebp":"/static/e3fed3ded034d74a3fbf71977c977da3/aa668/SlicedHomestyleTurkeyBreast_Package.webp","srcSetWebp":"/static/e3fed3ded034d74a3fbf71977c977da3/8f92f/SlicedHomestyleTurkeyBreast_Package.webp 200w,\\n/static/e3fed3ded034d74a3fbf71977c977da3/aa668/SlicedHomestyleTurkeyBreast_Package.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4Mzc5MjE0NDE=","title":"Organic Valley Omega-3 Organic Free-Range Extra-Large Eggs 12pcs","handle":"organic-valley-omega-3-organic-free-range-extra-large-eggs-12pcs","createdAt":"2020-10-13T14:29:07Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4Mzc5MjE0NDE=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyMjUzNjYwOQ==","price":"1.80","priceV2":{"amount":"1.8","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyMjUzNjYwOQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NzI3MDgwMDE=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-1-update-1.jpg?v=1602599348","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M100%20143l-37%201-5%203c-3%202-5%204-7%208l-3%206v40c0%2042%200%2043%205%2048%208%209%2019%2010%20132%2010%20126%200%20155-2%20164-11%205-6%205-7%205-48-1-46-2-48-12-54l-5-3H100m-22%203c-2%201-2%203-3%206v6h13l29%201h15v-9l1-5h-14l-28%201h4a401%20401%200%200128%203l-12%201-12%201h-1l-1-1-2%201h-5c-3%200-4-3-1-5%201-1%201-1-1-1l-5-1-5%202m157%2019c-1%201-2%2063%200%2065s92%201%2094%200c1-2%200-64-1-65l-5-1h-4l2%202%203%207%201%203%201-2%201%2027v28h-45l-45-1v-49h2l4-1h9c4-1%204-2%204-4-1-2-1-3%203-4l3-2%201-1c3%200%202%202%200%203-1%200-2%200-1%201l-1%202c-2%202-3%205-1%203l1%201h12a73%2073%200%200019-1c2%200%201-3%200-3l-3-1c-3-2%202-5%209-5a631%20631%200%2000-63-1m-127%205c-16%205-20%2018-8%2030%206%205%208%206%2014%205%202%200%203-1%201-1-6%200-6-5-1-9%204-2%204-2%203-3l-3-1c-1-1-2%200-3%201s-1%201-1-2c1-5%202-6%204-3s3%203%203%200l1-3%201%203c0%202%200%203%202%203l1-3%201-3%201%203c0%204%203%204%204%200%200-2%201-2%203-2l4%202c1%201%202%202%203%201l-1%203c-4%205-4%205-4%202%200-5%200-6-2-6v1c2%200%201%202-1%202v1l2%201h-11l5%202c7%204%208%208%202%2010l-3%201h4l6-1%207-5%203-5c2-5%203-13%200-17-3-5-12-7-23-8l-14%201m-53%2024a838%20838%200%20012%2028v-2l1%203c1%202%201%200%201-5l-3-23%201-3%202-3h-2c-1%201-1-2-1-7l-1-9v21m60-18l-4%201c-2-1-5%200-5%202h-1c-2-3-4-2-7%200-2%202-2%206%202%208l2%201%202%204c4%204%204%203%205-3%201-3%201-4-1-4l-1%203c0%203%200%203-2%201v-4l2-2h3c1%201%2010%200%2012-1h8c3%203%206%203%206%201v-2l1%202c1%203%203%205%205%204l-1-2c-3-2-2-4%201-4h1c1-1-3-2-4-1s-2%201-2-1c-1-2-1-2-2%200h-1c0-2-2-3-2-1h-1c-2-3-4-2-4%201v3l-1-3c-2-3-4-4-5-1-1%201-2%202-3%201l-1%201-1%201c-2%200-1-3%201-4l1-1h-3\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/f9febaeee0c3ca38fb102eb16b615bc2/6ddc4/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-1-update-1.jpg","srcSet":"/static/f9febaeee0c3ca38fb102eb16b615bc2/116d1/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-1-update-1.jpg 200w,\\n/static/f9febaeee0c3ca38fb102eb16b615bc2/6ddc4/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-1-update-1.jpg 390w","srcWebp":"/static/f9febaeee0c3ca38fb102eb16b615bc2/aa668/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-1-update-1.webp","srcSetWebp":"/static/f9febaeee0c3ca38fb102eb16b615bc2/8f92f/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-1-update-1.webp 200w,\\n/static/f9febaeee0c3ca38fb102eb16b615bc2/aa668/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-1-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjY0NTI2NDE=","title":"Catfish Filet 300g","handle":"sole-500g","createdAt":"2020-10-13T14:27:39Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjY0NTI2NDE=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTk1OTQ1Nw==","price":"7.25","priceV2":{"amount":"7.25","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTk1OTQ1Nw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5Mzk4NzQ0NjU=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/CatfishFilet.jpg?v=1602599259","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M209%20110l-8%205c-8%204-11%207-9%207l10-3%202-1%207-4%206-4c3-1%202-2-2-2l-6%202m13%207l-6%206h12c9-3%2025-2%2028%202l9%203c1-1-5-3-21-10-15-7-14-7-22-1m47%2013l2%201%202%202%201%202v3c-1%200-1%201%201%202v6c3%202%202%203-2%203-7-2-8-2-7%201%200%202-4%203-6%201l-12-1-2%201-2%201c0%201%203%202%2012%203%2011%200%2013%201%2013%202l-2%201c-3-1-13%200-14%201l-2%201h7c10%200%2016%202%2017%204%200%202%201%202%203%200%2018-17%2039-12%2039%209%200%2010-6%2017-17%2018-19%202-27-2-27-15l-1-4v-2c4-2%200-2-7-1-7%202-11%202-11%201l6-3%206-2-3-1c-4%202-14%202-16%201l-10-1-12%201-1%201h-6c-9%202-21%202-21%200l3-3c2-1%202-1-2-1-15%202-17%203-19%204l-3%201h-5l-3%201h-6l-4%201-12%202-12%201h-2l-1-1-3-2c-1%201-1%200-1-2%200-4-2-6-4-4v3c2%201%201%202-1%206l-4%205v1h-1l-21%2011-6%203-2%202h-2l-2%201-2%202-1%201-2%202-3%202-4%202-4%202h-4c-1-2-2%200-1%204%201%207%205%2010%2036%2030l58%2038c12%209%2020%2014%2029%2015%206%201%2018%200%2018-1l2-1c1-1%200-1-2-1-4%200-4%200-2-1h4l1-1-3-2c-2-1-2-1%200-1%207%200%2018-6%2018-10%200-3-3-3-6%201-2%202-3%202-7%202-6%200-8%200-12%203h-13l-3-1-2-1-3-1c-3%200-8-2-11-5l-3-1-1-1-3-3-3-3%2016-12c1-1%203-1%206%201%204%201%204%201%206-1h3v1l13-1c5-1%204%201-6%2010-8%208-9%2010-7%2010%202%201%203-1%202-2h1v-2l7-5c7-6%2011-9%2022-12l11-6c3-3%205-3%209-2l3%201h-3l-10%209-10%208-1%201-3%203-8%209%203%201h2c-1-2-1-2%202-4l2-3%203-1%204-1%202-3c2%200%202%200%201-2v-2l4-3c2-2%204-3%205-2v3l-1%202-2%202-3%202c0%202-4%206-5%206v2c1%203%204%202%2012-6l9-7%208-5%204-4%209-7a256%20256%200%200115-13c10-9%2021-17%2022-17l-3%203c-5%204-3%205%202%201%204-4%205-5%202-4-1%200-1-1%201-3%203-3%206-4%204-1-3%203%201%201%207-5l7-7%201-2%202-1%202-1%202-2%201-1c5%200%2011-12%2010-21-1-7-2-9-6-7-3%203-4%202-1-1%202-2%202-2%201-4-2-1-2-2%200-5%204-10-3-18-18-20-8-2-19%200-23%203-2%202-3%202-5%201h-4l-2-1-6-4c-5-2-7-3-7-1m-38%205l-11%201c-18%202-19%202-22%204-1%202-2%202-4%201l-15%203%203%201%2013-1c0%202%2012%2011%2016%2012l2%201c2%201%202%201%203-1l2-1%201-7c0-3%201-3%205-3s6-2%204-4c-2-1-1-2%206-3%206-1%206-1%204-3h-7m-5%2036l-3%201-1%202h-1l-3-1-11-1c-9%200-10%200-13%202l-4%203-1%201c-3%200-2%202%201%203l2%201%204%201%207%201h6l4%201h3l8-1h13l8-1c15%201%2021-1%2021-5-1-3-4-4-9-1-3%202-6%202-11%202a959%20959%200%2000-24-2c0-1%201-2%204-1l3-1v-1c2%200%203-3%201-3h-4m-113%2018c-4%203-5%204-5%207%200%202%201%203%202%203v1l-1%201c-2-1-3%204-2%206l7%202%207%201-7%201c-6-1-7-1-8%201-2%203-3%205-1%204l1%202c-1%202%201%203%204%202l2%201v1l1-2%201-2c1-1%209%201%2011%202%201%202%203%203%203%201h2l4%201%204%201h2c1-1%202%200%205%201h4c1-1%207%200%207%201l4%201h4l2%201%201%201h5l-1%202h-8l-5-1-3-1-10-1c-14-2-24-2-24-1l4%202%204%202c2%202%2010%205%2011%204l1%201%206%201%209%202%204%201%202%201%202%201%204%201h3c3-1%203-1%204%201s2%202%202%201h3c1%201%202%201%204-1l9-2c4-1%205-1%204-2v-1l4-2c2-3%203-3%206%201%202%202%205%203%205%201%200-3%202%200%202%203%200%202%200%203%201%202h11c2-1%202-1-2-3l-5-3-5-2c-2-3-2-3%200-4l1-1-3%201h-3l2-2%204-2c2-1%202-1%201%201l1%202c1%200%203-2%203-4l1-2%205-4c4-4%205-4%204-1h1l2-1c-1-2%203-7%204-7%202%201%203%200%205-2s3-3%208-3l7%201%202%201c1-1%202%200%203%201h3c1-1%203%200%205%201%204%203%204%203%206-2%201-5%201-5-1-9-3-4-6-7-10-8l-6-1-15%201c-12%202-13%202-35-1h-62c-12-3-30-3-34-1m31%2012h-6l-4%201%204%201%201%201%203%201h2l13%201%2023-1c7-1-4-3-28-3l-7-1h-1m54%202l-8%202-5%201c-1%201%204%201%2023%201l17%201c6%200%206%200%205-1s-5-2-13-2l-14-2c-1-2-2-2-5%200\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/2ca159fe030ac0bf757eab5c3bbdad99/6ddc4/CatfishFilet.jpg","srcSet":"/static/2ca159fe030ac0bf757eab5c3bbdad99/116d1/CatfishFilet.jpg 200w,\\n/static/2ca159fe030ac0bf757eab5c3bbdad99/6ddc4/CatfishFilet.jpg 390w","srcWebp":"/static/2ca159fe030ac0bf757eab5c3bbdad99/aa668/CatfishFilet.webp","srcSetWebp":"/static/2ca159fe030ac0bf757eab5c3bbdad99/8f92f/CatfishFilet.webp 200w,\\n/static/2ca159fe030ac0bf757eab5c3bbdad99/aa668/CatfishFilet.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4NTIwNzcyMTc=","title":"Cherry tomato 250g","handle":"cherry-tomato-250g","createdAt":"2020-10-13T14:30:56Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4NTIwNzcyMTc=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTE1ODY0Njk0NQ==","price":"1.25","priceV2":{"amount":"1.25","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTE1ODY0Njk0NQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODkwMTMyNzQ3ODU=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/fresh-veg-2-update-1.jpg?v=1602599456","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M250%20106c-1%202-2%203-5%203a39%2039%200%2000-16%206h-3c-4%201-7-1-10-5-3-5-3-2%200%203l2%205h-14c-13%200-13%200-2%203l6%202-3%203-5%209-2%206-5-4c-8-7-12-8-24-8l-15%202c-4%201-4%201-6-1-3-3-7-5-9-4s-2%201%201%201c2%200%208%204%205%204l-1%202c0%202-1%202-4%202-4%200-4%200-4-3%200-2%200-2-1%201v4c2%202%201%204-1%205-4%203-9%203-9%202l1-1%201-1-1-2-3%203-2%201c-2%201-4%200-8-1-9-4-23%200-30%209-7%2010-9%2020-5%2034%202%208%203%209%201%2010-14%205-21%2011-21%2021a87%2087%200%20002%2024c-1%202%201%201%203-1%202-4%202-1%200%203-6%209-7%2015-7%2028s1%2016%206%2021c8%208%2020%2013%2028%2013%2018%200%2038-14%2041-30l1-6%205%204c19%2012%2045%205%2056-16%202-5%204-18%204-24v-7l2-8%202-5%205%204c12%209%2024%2011%2038%206%2012-4%2018-9%2023-20l4-6%204%203c9%208%2024%2013%2035%2012%2016-2%2032-18%2034-34%202-15-7-33-17-37-4-2-3-2%205-3%204-1%208-3%208-5l-1-1-1-1c-1-1-1-1-1%201l-3%203c-4%202-4%201-1-3%203-5%204-7%202-5l-5%201c-3%200-8%201-18%206l-1-3-3-5c-2-2-2-3-1-4l1-3-2%201c-1%201-3%202-7%202s-5-1-8-5l-5-5%203%205c4%206%204%206-4%2010-13%206-19%205-28-3l-5-5%202-4c1-2%202-5%201-6%200-2-1-2-1%201-1%206-4%208-10%206-7-2-8-5%200-5l5-1c2-2%205-6%203-6l-2%202M96%20161c-4%203-7%2016-5%2018%203%202%204%201%207-6%205-10%204-16-2-12m-24%2054c-2%201-3%204-3%205l-1%206c0%204%202%207%205%205l3-3%203-7%204-6-2-2c-3-3-5-2-9%202m7%2033c-5%203-7%206-8%2013l-1%205c0%201%200%202%202%202%203%200%204-3%202-4l-2-3c0-2%200-3%202-2l1%202c0%203%201%202%203-1%203-2%208-12%208-13%200-2-4-1-7%201\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/a144a42b232e38f06a8a855490ab61c8/6ddc4/fresh-veg-2-update-1.jpg","srcSet":"/static/a144a42b232e38f06a8a855490ab61c8/116d1/fresh-veg-2-update-1.jpg 200w,\\n/static/a144a42b232e38f06a8a855490ab61c8/6ddc4/fresh-veg-2-update-1.jpg 390w","srcWebp":"/static/a144a42b232e38f06a8a855490ab61c8/aa668/fresh-veg-2-update-1.webp","srcSetWebp":"/static/a144a42b232e38f06a8a855490ab61c8/8f92f/fresh-veg-2-update-1.webp 200w,\\n/static/a144a42b232e38f06a8a855490ab61c8/aa668/fresh-veg-2-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}}]}}}'
      );
    },
    Bi3C: function (t, e, a) {
      var c;
      a('klQ5'),
        a('1dPr'),
        a('n7j8'),
        a('LagC'),
        a('pS08'),
        a('sc67'),
        a('E5k/'),
        a('R48M'),
        'undefined' != typeof self && self,
        (c = function (t) {
          return (function (t) {
            var e = {};
            function a(c) {
              if (e[c]) return e[c].exports;
              var l = (e[c] = { i: c, l: !1, exports: {} });
              return (
                t[c].call(l.exports, l, l.exports, a), (l.l = !0), l.exports
              );
            }
            return (
              (a.m = t),
              (a.c = e),
              (a.d = function (t, e, c) {
                a.o(t, e) ||
                  Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: c,
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
              var c,
                l = a(1),
                i = (c = l) && c.__esModule ? c : { default: c };
              e.default = i.default;
            },
            function (t, e, a) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 });
              var c,
                l =
                  Object.assign ||
                  function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var a = arguments[e];
                      for (var c in a)
                        Object.prototype.hasOwnProperty.call(a, c) &&
                          (t[c] = a[c]);
                    }
                    return t;
                  },
                i = (function () {
                  function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                      var c = e[a];
                      (c.enumerable = c.enumerable || !1),
                        (c.configurable = !0),
                        'value' in c && (c.writable = !0),
                        Object.defineProperty(t, c.key, c);
                    }
                  }
                  return function (e, a, c) {
                    return a && t(e.prototype, a), c && t(e, c), e;
                  };
                })(),
                r = a(2),
                n = (c = r) && c.__esModule ? c : { default: c },
                o = (function (t) {
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
                    i(e, [
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
                          var c = t.currentTarget.getAttribute('href').slice(1),
                            l =
                              document.getElementById(c).getBoundingClientRect()
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
                                for (var c in t)
                                  e.indexOf(c) >= 0 ||
                                    (Object.prototype.hasOwnProperty.call(
                                      t,
                                      c
                                    ) &&
                                      (a[c] = t[c]));
                                return a;
                              })(t, ['offset']));
                          return n.default.createElement(
                            'a',
                            l({}, e, { onClick: this.smoothScroll })
                          );
                        },
                      },
                    ]),
                    e
                  );
                })(r.Component);
              e.default = o;
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
                        c = t.HTMLElement || t.Element,
                        l = {
                          scroll: t.scroll || t.scrollTo,
                          scrollBy: t.scrollBy,
                          elementScroll: c.prototype.scroll || n,
                          scrollIntoView: c.prototype.scrollIntoView,
                        },
                        i =
                          t.performance && t.performance.now
                            ? t.performance.now.bind(t.performance)
                            : Date.now,
                        r =
                          ((a = t.navigator.userAgent),
                          new RegExp(
                            ['MSIE ', 'Trident/', 'Edge/'].join('|')
                          ).test(a)
                            ? 1
                            : 0);
                      (t.scroll = t.scrollTo = function () {
                        void 0 !== arguments[0] &&
                          (!0 !== o(arguments[0])
                            ? m.call(
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
                            (o(arguments[0])
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
                              : m.call(
                                  t,
                                  e.body,
                                  ~~arguments[0].left +
                                    (t.scrollX || t.pageXOffset),
                                  ~~arguments[0].top +
                                    (t.scrollY || t.pageYOffset)
                                ));
                        }),
                        (c.prototype.scroll = c.prototype.scrollTo = function () {
                          if (void 0 !== arguments[0])
                            if (!0 !== o(arguments[0])) {
                              var t = arguments[0].left,
                                e = arguments[0].top;
                              m.call(
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
                        (c.prototype.scrollBy = function () {
                          void 0 !== arguments[0] &&
                            (!0 !== o(arguments[0])
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
                        (c.prototype.scrollIntoView = function () {
                          if (!0 !== o(arguments[0])) {
                            var a = p(this),
                              c = a.getBoundingClientRect(),
                              i = this.getBoundingClientRect();
                            a !== e.body
                              ? (m.call(
                                  this,
                                  a,
                                  a.scrollLeft + i.left - c.left,
                                  a.scrollTop + i.top - c.top
                                ),
                                'fixed' !== t.getComputedStyle(a).position &&
                                  t.scrollBy({
                                    left: c.left,
                                    top: c.top,
                                    behavior: 'smooth',
                                  }))
                              : t.scrollBy({
                                  left: i.left,
                                  top: i.top,
                                  behavior: 'smooth',
                                });
                          } else
                            l.scrollIntoView.call(
                              this,
                              void 0 === arguments[0] || arguments[0]
                            );
                        });
                    }
                    function n(t, e) {
                      (this.scrollLeft = t), (this.scrollTop = e);
                    }
                    function o(t) {
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
                        ? t.clientHeight + r < t.scrollHeight
                        : 'X' === e
                        ? t.clientWidth + r < t.scrollWidth
                        : void 0;
                    }
                    function d(e, a) {
                      var c = t.getComputedStyle(e, null)['overflow' + a];
                      return 'auto' === c || 'scroll' === c;
                    }
                    function h(t) {
                      var e = s(t, 'Y') && d(t, 'Y'),
                        a = s(t, 'X') && d(t, 'X');
                      return e || a;
                    }
                    function p(t) {
                      var a;
                      do {
                        a = (t = t.parentNode) === e.body;
                      } while (!1 === a && !1 === h(t));
                      return (a = null), t;
                    }
                    function u(e) {
                      var a,
                        c,
                        l,
                        r,
                        n = (i() - e.startTime) / 468;
                      (r = n = n > 1 ? 1 : n),
                        (a = 0.5 * (1 - Math.cos(Math.PI * r))),
                        (c = e.startX + (e.x - e.startX) * a),
                        (l = e.startY + (e.y - e.startY) * a),
                        e.method.call(e.scrollable, c, l),
                        (c === e.x && l === e.y) ||
                          t.requestAnimationFrame(u.bind(t, e));
                    }
                    function m(a, c, r) {
                      var o,
                        s,
                        d,
                        h,
                        p = i();
                      a === e.body
                        ? ((o = t),
                          (s = t.scrollX || t.pageXOffset),
                          (d = t.scrollY || t.pageYOffset),
                          (h = l.scroll))
                        : ((o = a),
                          (s = a.scrollLeft),
                          (d = a.scrollTop),
                          (h = n)),
                        u({
                          scrollable: o,
                          method: h,
                          startTime: p,
                          startX: s,
                          startY: d,
                          x: c,
                          y: r,
                        });
                    }
                  },
                };
              })();
            },
          ]);
        }),
        (t.exports = c(a('q1tI')));
    },
    'DL/b': function (t, e, a) {
      'use strict';
      a.r(e);
      var c = a('W5fm'),
        l = a('q1tI'),
        i = a.n(l),
        r = a('Wbzz'),
        n = a('mwIZ'),
        o = a.n(n),
        s = a('H8eV'),
        d = a('2BIS'),
        h = a('tSJS'),
        p = a('2A+t'),
        u = a('izhR'),
        m = a('wG+1'),
        f = a('trlm'),
        v = {
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
        g = function (t) {
          var e = t.items;
          return Object(p.c)(
            u.e,
            { sx: v.wrapper },
            e.map(function (t, e) {
              return Object(p.c)(f.a, {
                key: e,
                thumbnail: t.thumbnail.url,
                title: m.RichText.asText(t.title),
                shortInfo: m.RichText.asText(t.short_description),
              });
            })
          );
        },
        b = a('ulNG'),
        w = a('9eSz'),
        S = a.n(w),
        y = {
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
        x = function (t) {
          var e = t.path,
            a = t.title,
            c = t.thumbnail,
            l = m.RichText.asText(a);
          return Object(p.c)(
            u.a,
            { sx: y.wrapper },
            Object(p.c)(
              r.Link,
              { to: e },
              c ? Object(p.c)(S.a, { fluid: c, alt: l }) : null,
              Object(p.c)(u.f, { as: 'h3' }, l)
            )
          );
        },
        k = {
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
        O = function (t) {
          var e = t.title,
            a = t.shortIntro,
            c = t.categoryItems;
          return Object(p.c)(
            u.a,
            { sx: k.wrapper },
            Object(p.c)(
              u.a,
              { sx: k.header },
              Object(p.c)(u.f, { as: 'h2' }, m.RichText.asText(e)),
              Object(p.c)(u.h, { as: 'p' }, m.RichText.asText(a))
            ),
            Object(p.c)(
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
              c.map(function (t) {
                return Object(p.c)(x, {
                  key: t.category_slug,
                  path: '/minimal/collection/' + t.category_slug,
                  thumbnail: t.imageSharp.childImageSharp.fluid,
                  title: t.category_title,
                });
              })
            )
          );
        },
        _ = a('ZLvs'),
        M = a('foCw'),
        N = a('MIeJ'),
        T = a('064o'),
        W = {
          id: '2735468382',
          source:
            '\n\tquery {\n\t\tprismic {\n\t\t\tallHomeminimals {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tbanner_title\n\t\t\t\t\t\tbanner_subtitle\n\t\t\t\t\t\tbanner_button_text\n\t\t\t\t\t\tbanner_image\n\t\t\t\t\t\thow_it_works {\n\t\t\t\t\t\t\tthumbnail\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\tshort_description\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcall_us_banner\n\t\t\t\t\t\tcall_us_banner_content\n\t\t\t\t\t\tcall_us_button_text\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tallHomes {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tcategory_section_title\n\t\t\t\t\t\tcategory_section_short_intro\n\t\t\t\t\t\tcategory_block {\n\t\t\t\t\t\t\tcategory_slug\n\t\t\t\t\t\t\tcategory_title\n\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\timageSharp {\n\t\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\t\tfluid {\n\t\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid_withWebp_tracedSVG\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tallCommons {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tad_blocks {\n\t\t\t\t\t\t\tbadge_title\n\t\t\t\t\t\t\tbadge_color\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\tblock_image\n\t\t\t\t\t\t\tshort_description\n\t\t\t\t\t\t\tadd_a_button\n\t\t\t\t\t\t\tbutton_title\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
          toString: function () {
            return this.id;
          },
        };
      e.default = function () {
        return i.a.createElement(r.StaticQuery, {
          query: '' + W,
          render: function (t) {
            var e = o()(
                t,
                'prismic.allHomes.edges[0].node.category_section_title'
              ),
              a = o()(
                t,
                'prismic.allHomes.edges[0].node.category_section_short_intro'
              ),
              c = o()(t, 'prismic.allHomes.edges[0].node.category_block'),
              l = o()(t, 'prismic.allHomeminimals.edges[0].node'),
              r = o()(t, 'prismic.allCommons.edges[0].node.ad_blocks'),
              n = l.banner_image.url,
              p = l.banner_title,
              u = l.banner_subtitle,
              m = l.banner_button_text,
              f = l.how_it_works,
              v = l.call_us_banner,
              b = l.call_us_banner_content,
              w = l.call_us_button_text;
            return i.a.createElement(
              d.a,
              {
                fluid: !0,
                homeLink: '/minimal',
                pathPrefix: '/minimal/collection',
                showNoticeBar: !1,
              },
              i.a.createElement(s.a, { title: 'Home' }),
              i.a.createElement(h.a, {
                banner: n,
                bannerTitle: p,
                bannerSubTitle: u,
                bannerButtonText: m,
              }),
              i.a.createElement(g, { items: f }),
              i.a.createElement(O, {
                title: e,
                shortIntro: a,
                categoryItems: c,
              }),
              i.a.createElement(_.a, { withLink: !0 }),
              i.a.createElement(M.a, {
                data: r,
                scrollTo: '#trendingProducts',
                scrollOffset: 60,
              }),
              i.a.createElement(N.a, { withLink: !0 }),
              i.a.createElement(T.a, {
                callUsBanner: v,
                callUsTitle: b,
                callUsButtonText: w,
              })
            );
          },
          data: c,
        });
      };
    },
    DhR6: function (t, e, a) {
      'use strict';
      a('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('m1kc');
      e.populateNextSlides = function (t, e, a) {
        void 0 === a && (a = 0);
        var l,
          i,
          r = t.slidesToShow,
          n = t.currentSlide,
          o = t.itemWidth,
          s = t.totalItems,
          d = c.getSlidesToSlide(t, e),
          h = n + 1 + a + r + (0 < a ? 0 : d);
        return (
          (i =
            h <= s
              ? -o * (l = n + a + (0 < a ? 0 : d))
              : s < h && n !== s - r
              ? -o * (l = s - r)
              : (l = void 0)),
          { nextSlides: l, nextPosition: i }
        );
      };
    },
    MIeJ: function (t, e, a) {
      'use strict';
      var c = a('BIS1'),
        l = a('q1tI'),
        i = a.n(l),
        r = a('Wbzz'),
        n = a('ca1K'),
        o = {
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
        return i.a.createElement(r.StaticQuery, {
          query: '' + o,
          render: function (t) {
            var e = t.allShopifyProduct,
              c = null == e ? void 0 : e.edges;
            return i.a.createElement(n.a, {
              id: 'trendingProducts',
              withLink: a,
              gridTitle: 'Trending Product',
              products: c,
            });
          },
          data: c,
        });
      };
    },
    S9TR: function (t, e, a) {
      'use strict';
      a('AqHK'),
        a('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('q1tI'),
        l = a('3TDQ');
      e.default = function (t) {
        var e = t.props,
          a = t.state,
          i = t.goToSlide,
          r = t.clones,
          n = t.notEnoughChildren,
          o = a.itemWidth,
          s = e.children,
          d = e.infinite,
          h = e.itemClass,
          p = e.partialVisbile,
          u = e.partialVisible,
          m = l.getInitialState(a, e),
          f = m.flexBisis,
          v = m.shouldRenderOnSSR,
          g = m.domFullyLoaded,
          b = m.partialVisibilityGutter;
        return m.shouldRenderAtAll
          ? (p &&
              console.warn(
                'WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'
              ),
            c.createElement(
              c.Fragment,
              null,
              (d ? r : c.Children.toArray(s)).map(function (t, r) {
                return c.createElement(
                  'li',
                  {
                    key: r,
                    'data-index': r,
                    onClick: function () {
                      e.focusOnSelect && i(r);
                    },
                    'aria-hidden': l.getIfSlideIsVisbile(r, a)
                      ? 'false'
                      : 'true',
                    style: {
                      flex: v ? '1 0 ' + f + '%' : 'auto',
                      position: 'relative',
                      width: g
                        ? ((p || u) && b && !n ? o - b : o) + 'px'
                        : 'auto',
                    },
                    className:
                      'react-multi-carousel-item ' +
                      (l.getIfSlideIsVisbile(r, a)
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
    SSZS: function (t, e, a) {
      'use strict';
      a('n0hJ'),
        a('AqHK'),
        a('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('q1tI'),
        l = a('v5rg'),
        i = a('bwfW'),
        r = a('m1kc');
      e.default = function (t) {
        var e = t.props,
          a = t.state,
          n = t.goToSlide,
          o = t.getState,
          s = e.showDots,
          d = e.customDot,
          h = e.dotListClass,
          p = e.infinite,
          u = e.children;
        if (!s || r.notEnoughChildren(a)) return null;
        var m,
          f = a.currentSlide,
          v = a.slidesToShow,
          g = r.getSlidesToSlide(a, e),
          b = c.Children.toArray(u);
        m = p ? Math.ceil(b.length / g) : Math.ceil((b.length - v) / g) + 1;
        var w = i.getLookupTableForNextSlides(m, a, e, b),
          S = l.getOriginalIndexLookupTableByClones(v, b),
          y = S[f];
        return c.createElement(
          'ul',
          { className: 'react-multi-carousel-dot-list ' + h },
          Array(m)
            .fill(0)
            .map(function (t, e) {
              var a, l;
              if (p) {
                l = w[e];
                var i = S[l];
                a = y === i || (i <= y && y < i + g);
              } else {
                var r = b.length - v,
                  s = e * g;
                a =
                  (l = r < s ? r : s) === f ||
                  (l < f && f < l + g && f < b.length - v);
              }
              return d
                ? c.cloneElement(d, {
                    index: e,
                    active: a,
                    key: e,
                    onClick: function () {
                      return n(l);
                    },
                    carouselState: o(),
                  })
                : c.createElement(
                    'li',
                    {
                      'data-index': e,
                      key: e,
                      className:
                        'react-multi-carousel-dot ' +
                        (a ? 'react-multi-carousel-dot--active' : ''),
                    },
                    c.createElement('button', {
                      'aria-label': 'Go to slide ' + (e + 1),
                      onClick: function () {
                        return n(l);
                      },
                    })
                  );
            })
        );
      };
    },
    VLDe: function (t, e, a) {},
    W5fm: function (t) {
      t.exports = JSON.parse(
        '{"data":{"prismic":{"allHomeminimals":{"edges":[{"node":{"banner_title":[{"type":"paragraph","text":"Banner Title","spans":[]}],"banner_subtitle":[{"type":"paragraph","text":"Banner Subtitle","spans":[]}],"banner_button_text":[{"type":"paragraph","text":"Banner Button","spans":[]}],"banner_image":{"dimensions":{"width":1200,"height":500},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/6f9a8864-6b3e-408f-b4de-75bc3536b826_home-banner.png?auto=compress,format"},"how_it_works":[{"thumbnail":{"dimensions":{"width":60,"height":60},"alt":null,"copyright":null,"url":"https://prismic-io.s3.amazonaws.com/mandixpress/da960987-9d18-4f10-a0ef-152dbde7fed8_feature-1.svg"},"title":[{"type":"heading1","text":"How it works","spans":[]}],"short_description":[{"type":"paragraph","text":"how it works description","spans":[]}]}],"call_us_banner":{"dimensions":{"width":1200,"height":500},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/6f9a8864-6b3e-408f-b4de-75bc3536b826_home-banner.png?auto=compress,format"},"call_us_banner_content":[{"type":"paragraph","text":"Call us ","spans":[]}],"call_us_button_text":[{"type":"paragraph","text":"Call Button","spans":[]}]}}]},"allHomes":{"edges":[{"node":{"category_section_title":[{"type":"heading1","text":"Shop by Category","spans":[]}],"category_section_short_intro":[{"type":"paragraph","text":"Shop with us","spans":[]}],"category_block":[{"category_slug":"vegetables","category_title":[{"type":"heading1","text":"Vegetables","spans":[]}],"image":{"dimensions":{"width":380,"height":280},"alt":null,"copyright":null,"url":"https://images.prismic.io/mandixpress/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg?auto=compress,format"},"imageSharp":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'295\'%20viewBox=\'0%200%20400%20295\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2012l1%2013v1l-1%207c0%205%200%206%201%205l4-6%203-6%201-3c2%200%201-5-2-7-2-3-2-3-1-5V8C3%208%204%207%206%205c3-3%203-5-2-5H0v12m29-7l-3%2014-2%2010-5%207C11%2045%207%2051%208%2051l12%201c11%201%2012%201%2010%204-4%204-19%202-22-2-1-2-4-1-5%201l-2%203-1%2020a117%20117%200%20009%2051c1%203%202%204%202%201l-3-8c-2-5-2-7-2-17L5%2089%203%2077v-8h4c5%200%207%201%207%205%200%202%203%204%204%202%201-1%208%200%2010%202%201%202%201%202-4%208l-4%207%201%2018c2%2036%206%2057%2017%2081a219%20219%200%200064%2098c3%207%204-1%207-30%200-8%201-9%208-8%203%201%205%200%206-1l5-2c3-2%204-2%204-4-1-1-1-1%201-1%201%201%203%200%206-1%202-2%206-3%208-3%204-1%2010%202%2010%203-1%202%207%202%2017%200l6-1-2-2-2-2h8c2-2%207-1%207%200l-2%202c-2%201-2%201%201%201l4-2%202-3c3%200%206-17%203-19l-1-2v-1c-1-1-2-6-1-8%200-2%207-5%2018-8l7-2%208%202c16%204%2044%2017%2044%2020%200%202-3%204-5%203l-3%201%203%201%203%202c0%201-2%204-4%204h-1l-1%201-1-1-3-2-17-4c-3-1-2%202%201%205%209%207%209%207%208%2010l-7%205-6%204c0%202-8%207-10%207l-2%201-2%201-10%202h-2c0-4-13-12-17-11l-1%204%202%207c0%203%200%204%204%203%203%200%204%201%208%207%203%205%203%208%200%2011s-2%206%201%203l2-3%203-3h7l1%201c1%200%202-1%202-5l2-4v2l3%203%202%201-2%203c-2%203-2%203-1%204s6-1%206-3l2-3a374%20374%200%200027-36c2-3%202-3%2010-3%2013%202%2013%202%2016%208a297%20297%200%200113%2046v5h96v-74a892%20892%200%2000-2-73c0-4-6-14-8-13h-1c0-2%203-2%205%200%201%202%201%202%202%200%201-1%201-1%201%201l1%204c1%202%202-70%201-85V43h-4c-15%200-42-14-48-26%200-2-2-3-3-3l-1-2-2-3-2-1c0%202%205%2010%2011%2016%2011%2011%2028%2036%2028%2039%200%202-2%201-4-4-7-13-34-44-38-44-2%200-9-5-7-5l-1-1-2-2-2-4c-3-3-3-3-15-3-13%200-14%201-6%205%205%203%207%205%206%206h-2c-2-2-2-1%200%201%202%203%201%203-3%202-4-2-5-3-5-5s0-2%203-1l3%202-7-5-7-5h-23l-24%201%203%204%202%204c-2%200-8-4-8-7l-1-2h-15c-13%200-14%200-14%202s-3%204-4%201l-2-1-2-1-2-1-1%201c1%201-3%205-9%206h-4c0-1-2-1-4%201-4%202-8%202-6%200%200-1-1-4-3-4h-1l2-1%201-1%202-1c1-1%200-1-2-1l-4%201h-2l-6-1c-5%200-5%200-4%202%202%202%202%202%200%203-1%201-1%201%201%202l3%202-4%202c-4%201-5%202-4%204%200%202-1%203-3%200-2-1-2-1-3%201%200%202-3%203-5%202h-2l-1%201-5%201-5%202-1%201-1%201c-1-1-4%201-4%203s-1%203-3%201l-2-2v2c3%202%202%202-2%201l-4-1c-2%200%200%203%202%204%204%201-1%205-7%205-3%200-5%202-3%203v2l-1%202c0%203-3%204-12%204-6%201-7%201-8-1v-5l4-2%204-4%202-1-1-2-2-1-4%201-7%207-1%203c-1%202-2%202-3%201-1-3-4%202-5%207%200%205-4%2014-6%2014-1-1-2-2-2-9V45c-1%201-2%202-3%201l-1%201v2c-2%200-5-4-5-5l-2%201c-2%203-4%203-4%200l-4-9-4-8%205-3A340%20340%200%200186%201L58%200H29v5m337-2c-1%203%201%207%208%2013%206%204%2013%2011%2019%2018l4%203c3%200%204-1%201-3v-1c2%200%202%200%201-1l-3-2-7-4c0-2%203-3%205-1l4%201c2-2%201-3-2-3-3-1-5-3-3-3l2-2h1l2%203c2%201%202%201%202-10V0h-13l-13%201h-1l-3-1c-3%200-4%200-4%203M200%2014c0%202-2%203-6%203s-6%202-11%206l-6%204c-2%200-3%201-3%203l-1%203c-4%202-7%2013-5%2016l1%204c0%202%201%204%209%2012l8%209-2-1c-2-2-6%200-7%203%200%202%201%203%205%207l3%204-2-1-1-1-1%202%201%201%201%202c0%201-8%201-14-1h-3c-1%203-7-1-7-4l-1-1c-2%200-4-4-4-6v-3c-1-1-2-2-1-3l-3-6c-3-4-3-4-8-4l-7%202c-4%203-13%201-13-3v-4c-1-2-1-2%201-1h4l6-1%203-1%203-4%204-5c0-2%202-3%203-3%202-2%203-3%201-2l-2-1%202-2c7-3%200-4-9-1-3%200-3%200-3-2v-1c-4%201-13%2010-13%2012l-1%201v3l-1%201c0%203-2%203-4%202-6-6-16-1-17%207-1%201-2%202-9%202-4%200-7%200-6-1%202-1%203-2%201-3l2-1%204-3c2-1%202-1-3-1l-7%201c-2%201-4%204-2%205l-2%202c-8%202-10%2010-3%2010l7%203c3%203%203%204-5%202-10-2-15%202-7%205%202%201%202%201-1%203l-7%202-3%201v16l-2-3c-2-2-3-3-5-3l-2%201v11l1%2012c1%201-4%207-6%207-1%200-2-4-1-7a16%2016%200%20000-7c0-2-6-1-7%201l-1%204-2%208-2%207c-1%203%201%208%203%208%201%200%204-4%204-7%201-2%203-4%206-3l2-1c2-2%203-1%203%201-1%201%200%202%201%202%202%201%206-1%206-2h4c5%200%206-1%205-4%200-3%201-2%203%200l2%203%201-3%201-1%204-3c3-3%203-3%202-5-2-1-2-2%200-1l1-1%202-1c2%201%204-2%202-3-2-2-1-3%201-3h1v-3c2-2-3-6-7-6-3%200-3%200-6-5s-3-5-1-5l2-1%202%201%203%203%203-2c1-2%203-3%205-3s2%200%201%201c-2%201-1%202%205%207%207%205%209%205%203-1-3-3-3-3-1-2l14%206%203%203-3%201c-3%202-3%205%200%209%202%203%209%204%209%201%200-2%204-5%206-4%201%200%202%201%202%204v4l-3%201c-4%200-15%206-15%208l-4%203c-4%201-5%203-7%206l-2%204-6-5c-7-7-10-8-14-4-2%203-2%204-1%204v3c0%203%202%206%206%208%203%202%207%203%207%202l1-1c1%201%205-1%205-2-1-1%203-4%206-4s4%201%205%202c3%204%205%202%206-4v-7l1%201c0%205%208%200%208-5%201-5%201-6%202-4%202%203%204%202%205-1s4-4%207-1l2%202c2-1%204%203%204%206l1%203%203%201c3%201%205-1%203-3l1-1c2%200%202-1%201-5%200-5%200-6%202-7h2l1%202c1%200%200%2010-2%2011l-1%206c0%203%205%202%206%200l2-2%203%201%202%201c0%203%203%203%205%201l2-1v2l1-2h2l2%202%206-4h-3c-2%202-5%201-4-1l-1-1c-2%201-3%200-1-2%201-1%201-1-1-1s-2%200%200-1h2l1%201h3c4%205%2011-1%207-6l-7-10v-2l4%201%202%201%202%201%201%201h3c1%201%201%200%201-2-1-4%201-4%202%200v4l1-3%201-3%201-1c0-1-1-2-2-1v-1c0-2%201-2%204%200l2%201h3c2%201%202%201%200%204-2%204-1%207%201%207%202%201%202%200%202-2s1-3%203-1c1%201%202%200%203-2%201-3%203-3%203-1%200%203%2029%2017%2034%2017l-1%201%201%201c1-1%201-1%200%200l1%201c1-1%204%200%206%201a378%20378%200%200142%2030c8%205%2016%2010%2020%2011l8%202%204%202h3c2%201%203%200%200-2-2-2%200-2%204%200l9%203%208%203c5%203%208%202%208-2%200-3%202-2%208%203%207%205%207%204%209%202s2-3%202-6c-1-4-1-4-29-17a9162%209162%200%2001-44-20%20280%20280%200%2001-31-19l-51-37c-19-15-22-17-23-14h-1l-1-1c-3%200-12-8-12-10%201-1%200-2-1-3h-7l1-2c1-1%202-4%201-6-2-2-1-2%201-1%201%201%202%202%203%201%202-2%201-3-1-3l-4-2-4-3h-1l2-3%201-2%201-1%201-4c2-5%2010-4%2010%201%200%202%206%204%2010%205%203%200%203%200%202-2l-1-3v-4c3%202%208-3%207-8-1-3-8-11-8-9m92%207l-2%202c1%201%200%201-1%201s-2%200-1%202l-1%201-1-1h-1c-1%201-2%203-1%204%200%202%200%203-2%203-2%201-3%203-1%203s4-2%204-5l1-2%201%202%204%201c4-1%205-1%207%201%203%202%204%202%204%201-1-4%200-7%202-7l1%201c-1%201%202%203%203%202l4%201%204%202c2-1-5-5-7-5l-2-1-2-2-7-3c-4-3-5-3-6-1m36%202c-2%201-1%203%201%206l1%203v1l9%2012-8-1c-1-2-4-1-4%201h-1c-3-1-2%201%202%205s4%204%207%203l2-2-1-2c0-2%204-3%204-1v1c-3-2-2%200%200%203l1%204%202%204h2c-2-4%201-4%203-1l2%204%201%202%202%203%201%202%203%205%202%202%205%208c7%2011%207%209%200-5-7-13-8-18-3-12l4%204%202%202%202%202v-2l-1-4c0-4-2-6-3-4-1%201-1%201-2-1-1-1-3-2-4-1l-1-1-1-1c-2%200-5-4-11-14a356%20356%200%2000-18-25m-57%2012h-4l-1%201%202%201-2%201c-4-1-3%202%201%203%202%201%203%200%203-1h1c0%202%201%202%202%202h2l3%201%203%202%202%201c1%200%202%201%201%203%200%203%200%203%202%202l2-3%201-2%201%202c-1%202%201%203%206%201%201%200%206-6%206-8s-13%200-14%202l-4%201c-1-1-1-1%201-2l2-2c-1-1-7-3-8-2l-1-1-1-1h-2c0-2-3-3-4-1m56%2022c-1%203-1%204%202%207%207%207%2018%2023%2017%2026%200%202%202%204%203%202%202-2%201-3-2-8l-15-20-3-7v-4l-2%204m59-2l2%206%202%204c2%200%205%204%205%206%200%203%201%205%202%203v-5l-1-3-1-5c0-4-1-7-3-7h-1c-2-1-5%200-5%201m-143%201c-2%201-2%201%202%205s4%204%209%205l5-1c1-2-5-8-6-7l-2-1c-2-1-5-2-8-1m-12%208c-3%206-3%2010%201%2010s11-11%209-14c-3-4-6-2-10%204m-130-3c2%202%201%208-1%209l-4%203-2%203h2l3%201h11l-2-3c-3-2-4-8-2-8%203%200-1-4-4-5h-1m214%202c-1%204-1%204%203%205l3%201%202%203%202%204c0%204%207%2011%2010%2010%202-2%201-4-3-7-1-1-5-5-6-9-3-5-4-7-7-8-4-1-4-1-4%201m-17%2011l-4%202c-1%201-1%201%201%201l3%201c0%202%2013%208%2013%206%201-3%200-7-2-8-2-3-9-4-11-2m-153%207h-3l-1%201c0%205-12%207-17%203-1-2-2-2-2-1l-2%201-2%201-3%2014%209%201c4%201%205%201%207-2%203-3%203-5%200-2-2%202-5%202-11-1l-3-2%203-1%204-2%207-1%209-1c3-2%206-6%206-8h-1m-58%2027c-2%201-1%205%201%206l1%203h1c0-2%202-1%202%201l1%202c1-1%204%201%203%202l1%201%205%201c5%200%207-1%207-5%200-2-1-3-10-7-10-5-11-6-12-4m107%2016c-7%205-11%2012-7%2015l1%203c0%202%206%2011%207%2011l1-1h6c1-1%201-1-1-3-3-2-2-4%202-3l5-1h3c1-1%200-2-2-3-6-2-11-10-9-13v-1l1-1v-1c-2%200-2%200-1-1%203-4-1-4-6-1M1%20200c0%2047%200%2052%202%2053v6l-2%2013v8l3%201%202%202-1%201c0%202%204%206%206%205l3%201c1%201%201%201-2%203-4%202-8%201-10-2l-1-2v6h24c23%200%2024%200%2023-2a160%20160%200%2001-8-17c-9-20-12-32-17-59-2-15-3-18-8-32L5%20159l-4-9v50m119-45v3c1%203%201%205-1%205l-3%202-2%202c-2%201-2%202-2%204%200%204%200%204%203%204s3%200%203%204c0%203%200%204%202%204s8-5%207-6l2-1h5c1-1%202-3%200-2s-3-1-2-3%201-2%202-1c1%202%201-6-1-10l1-3%206%203c-1%201%202%204%204%204%203-1%204-3%201-3s-4-1-2-3h3c1%202%203%201%202-1-3-4-14-3-18%202l-4%202-1%202c0%202-2%201-3-2%200-5-2-8-2-6m-36%208l-1%201%201%202%201%201%201-1c-1-1%202-3%203-2v4l2-1h2c0%201%201%202%203%201%202%200%202%200%201%201-2%201-2%201%201%201%205%201%205%201%206-1%200-2%200-2%201-1%202%202%202%202%203%200%202-2%201-2-6-4s-14-2-18-1m-15%202l-1%203-1%203-1-2c0-3%200-3-2-3s-3%200-3%202c1%203%202%204%204%203l2%202c0%202%204%203%204%201l1-2v2c-1%206-1%209%201%209s4-3%205-7l1-6c2-4%201-6-4-6l-6%201m246%2019c-3%201-3%203%200%206%202%201%202%202%201%204-2%204%204%208%207%204%202-2%201-10-1-12s-4-3-7-2m26%202c-3%200-5%202-4%203l-1%203v2l1%204c0%206%207%206%2012%200%203-3%204-8%202-9l-2-1c0-2-4-3-8-2M48%20258l12%2027%205%2010h6c6%200%207-1%204-4a351%20351%200%2001-27-33\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.3605442176870748,"src":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/e1133/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg","srcSet":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/116d1/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg 200w,\\n/static/7eeb8b7b52cbbb116228d4de98bc2b8a/e1133/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.jpg 380w","srcWebp":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/3546a/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp","srcSetWebp":"/static/7eeb8b7b52cbbb116228d4de98bc2b8a/8f92f/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp 200w,\\n/static/7eeb8b7b52cbbb116228d4de98bc2b8a/3546a/153cc658-3362-4676-8a0c-65ec0e8559f2_vegitables.webp 380w","sizes":"(max-width: 380px) 100vw, 380px"}}}}]}}]},"allCommons":{"edges":[{"node":{"ad_blocks":[]}}]}}}}'
      );
    },
    ZLvs: function (t, e, a) {
      'use strict';
      var c = a('cPq4'),
        l = a('q1tI'),
        i = a.n(l),
        r = a('Wbzz'),
        n = a('ca1K'),
        o = {
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
        return i.a.createElement(r.StaticQuery, {
          query: '' + o,
          render: function (t) {
            var e = t.allShopifyProduct,
              c = null == e ? void 0 : e.edges;
            return i.a.createElement(n.a, {
              id: 'feature',
              withLink: a,
              gridTitle: 'Featured Product',
              products: c,
            });
          },
          data: c,
        });
      };
    },
    bwfW: function (t, e, a) {
      'use strict';
      a('n0hJ'),
        a('JHok'),
        a('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('v5rg'),
        l = a('m1kc');
      e.getLookupTableForNextSlides = function (t, e, a, i) {
        var r = {},
          n = l.getSlidesToSlide(e, a);
        return (
          Array(t)
            .fill(0)
            .forEach(function (t, a) {
              var l = c.getOriginalCounterPart(a, e, i);
              if (0 === a) r[0] = l;
              else {
                var o = r[a - 1] + n;
                r[a] = o;
              }
            }),
          r
        );
      };
    },
    cPq4: function (t) {
      t.exports = JSON.parse(
        '{"data":{"allShopifyProduct":{"edges":[{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjY5MTEzOTM=","title":"Sliced Pepperoni 100g","handle":"sliced-pepperoni-100g","createdAt":"2020-10-13T14:27:41Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjY5MTEzOTM=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwMDQxODIwOQ==","price":"2.10","priceV2":{"amount":"2.1","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwMDQxODIwOQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NDEwODY4ODE=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/SlicedPepperoni_Package.jpg?v=1602599262","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M130%20151l-1%201-6%201c-7%200-12%200-19%202l-13%206-13%208c-4%201-6%203-10%208-6%208-7%2010-7%2016l-1%207%202%2010c2%202%203%206%203%208%202%208%2013%2019%2028%2026l14%208%2015%206%2015%207c8%204%2016%206%2038%207l26-1c9-3%2024-12%2024-15l2-3c3-1%209-9%2010-15%201-4%202-4%207-5s6-1%208%201c4%203%208%204%2015%205l11%202c4%202%2010%202%2019%202%2015%200%2018-1%2025-6l6-4c7-1%2011-5%2014-11l3-8c-1-2-26-9-30-7l-2-1-2-1-7-2-7-2c-2%200-3-1-3-2l-5-3c-4-3-5-3-5-7-1-5-5-15-7-17l-2-4c0-10-8-20-10-13l-2%202h-3l-3%202-15%206c-3%201-3%201-8-2-5-4-6-4-10%205-3%206-3%207-7%208-7%201-10%201-10-1s-7-11-9-11l-3%202c-1%202-2%202-9%201-16-3-20-5-32-11-14-6-19-7-24-5\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/b05b99453d2c1d9dfe92892a96618457/6ddc4/SlicedPepperoni_Package.jpg","srcSet":"/static/b05b99453d2c1d9dfe92892a96618457/116d1/SlicedPepperoni_Package.jpg 200w,\\n/static/b05b99453d2c1d9dfe92892a96618457/6ddc4/SlicedPepperoni_Package.jpg 390w","srcWebp":"/static/b05b99453d2c1d9dfe92892a96618457/aa668/SlicedPepperoni_Package.webp","srcSetWebp":"/static/b05b99453d2c1d9dfe92892a96618457/8f92f/SlicedPepperoni_Package.webp 200w,\\n/static/b05b99453d2c1d9dfe92892a96618457/aa668/SlicedPepperoni_Package.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjU2MzM0NDE=","title":"Beef T Bone 850g","handle":"beef-t-bone-850g","createdAt":"2020-10-13T14:27:33Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MjU2MzM0NDE=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTIwNTc5Mw==","price":"8.95","priceV2":{"amount":"8.95","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTA5OTIwNTc5Mw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5Mzg2MjkyODE=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/vealMeat.jpg?v=1602599253","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M203%2092l-5%201c-4%201-14%209-14%2011s-4%205-19%2014c-11%206-17%2011-21%2016l-5%204c-2%200-21%2020-24%2026-2%202-3%206-3%208l-4%208a69%2069%200%2000-10%2031l-2%2016%201%206%203%209c0%207%206%2025%209%2030%203%204%207%208%2015%2011%204%202%207%204%2010%208l5%205%203%203c4%206%208%203%209-8%200-6%201-8%204-11l13-21a225%20225%200%200012-34l1-1%203-5c3-3%203-4%203-9l-1-6c-1-1-1%200-1%202s0%203-1%202l-1-3v-2c-1-1-1-1%201-2%202-2%204-8%203-10l1-5c2-3%202-3%202%2011%201%2012%201%2013%206%2013l10%203h2l2%202%203%201%2012%209a127%20127%200%200132%2049c3%204%200%2016-6%2021-11%209-20%2014-24%2014l-2%201c-1%201%201%202%202%201l5-1%204-2c1-2%202-2%205-1l5-1%2010-6a151%20151%200%200021-12c2%201%207-4%206-5l1-1a40%2040%200%200011-16l1-5%201-2%201-3%201-4c5-9%205-17%200-17v-6c1-3%202-6%201-9l-1-12c0-9%200-9-3-12-5-5-5-6-4-7%201-2%201-2-1-3-3-1-5-3-4-4l3%201c6%202%206-3%202-18l-2-12c0-4-2-7-2-3h-1v-3c2%201%201-1-1-5l-3-3c0%202-1%202-2-1-2-2-3-4-2-5%200-2-6-9-7-9l-7-6c-9-10-17-16-31-23-5-2-7-2-17-3h-14m43%20189l-1%202c0%202-13%2014-14%2014l-1%201h-2c-2-2-2-2-8-2h-3c1%202-6%203-12%202h-8l-4-1c-1-1-1-1-3%201h-1c1-2%201-2-6-2-5-1-6%201-2%204%206%204%208%205%2018%206%2019%201%2023%200%2027-3l11-7c3%200%2012-13%2011-15h-2\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/107fa0c1d060a9a0c5750dc3d74be737/6ddc4/vealMeat.jpg","srcSet":"/static/107fa0c1d060a9a0c5750dc3d74be737/116d1/vealMeat.jpg 200w,\\n/static/107fa0c1d060a9a0c5750dc3d74be737/6ddc4/vealMeat.jpg 390w","srcWebp":"/static/107fa0c1d060a9a0c5750dc3d74be737/aa668/vealMeat.webp","srcSetWebp":"/static/107fa0c1d060a9a0c5750dc3d74be737/8f92f/vealMeat.webp 200w,\\n/static/107fa0c1d060a9a0c5750dc3d74be737/aa668/vealMeat.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzgwNTI1MTM=","title":"Organic Valley Organic Free-Range Extra-Large Eggs 12pcs","handle":"organic-valley-organic-free-range-extra-large-eggs-12pcs","createdAt":"2020-10-13T14:29:09Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzgwNTI1MTM=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyMzU4NTE4NQ==","price":"1.50","priceV2":{"amount":"1.5","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyMzU4NTE4NQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NzI5MDQ2MDk=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-update-1.jpg?v=1602599349","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M134%20146v16h-30c-28%200-29%200-29%202s-1%202-4%202-4%200-5%202c0%202-1%203-3%204l-2%204-1%202v1l1%206%202%205c2-1%202%204%203%2029l1%2021c1%203%200%204-3%203-3%200-4%200-2%203%201%203%201%203-3%200l-5-5-2-8c-2-4-2-6-2-30l1-30c0-5%204-17%205-18v-5l-6%2010c-3%206-4%2075-2%2082%201%205%204%2010%206%2010v-2c-3-2-4-8-3-10l1-1%201%202v3l2%205c2%202%202%202%201%203a781%20781%200%2000149%207c131%200%20138-1%20145-11%203-3%204-15%202-14v-2c2-2%202-66%200-71-2-6-5-10-9-12-4-3-10-4-10-3l2%201c4%200%2012%209%2013%2016l2%206h-5c-5%200-6%200-7-3-2-2-3-3-6-3h-3l-1-8-2-8c-1-2-191-2-192-1m138%2022l-35%201c-1%202-2%2061%200%2064%201%202%202%202%2047%201l47-1%201-20a1405%201405%200%2000-3-19c-3%200-5%204-4%206l-1%201c-1%200-2%201-2%203s1%203%203%201l1-2c-1-1%200-3%201-3%201-2%202-1%202%206l-1%207-2%201%202%201%201%202c0%202%200%203-2%202h-2l2%201c2%202%202%203%202%207v5h-90l-1-2%201-7v-4l-1-10v-9h6c19%202%2024%202%2024%200-2-4%203-5%2010-4%207%202%2010%202%2010%201s1-2%202-1l2%202%203%201c3%200%203-2-3-5-5-4-6-8-3-9l5-5c2-3%203-3%208-3%204%200%204%200%204-2s0-3%202-3%204-2%204-4l-4-1-36%201m-29%203h-4v5c0%204%200%205%201%204h1l1-1%203-2c1%200%201%201-1%202-4%204-4%207%202%207l4-1h4l2-1%202-1c2-2%203-6%201-6v1l-1%201v1l-1%201h-1l-3%201c-4%200-4-1-4-3s0-3%207-3c4%200%207%200%206%201l-1%202-2%205-1%202c1%201%200%201-9%201l-8%202%206%201a940%20940%200%200122-2c-6-1-9-2-6-6%201-1%205%200%204%201%200%201%203%202%207%202%202%200%206-1%2011-4%207-4%209-6%205-6l-1%201h-1l-5%201h6l-4%202c-5%203-7%204-6%202%202-3-7-3-9%200l-2%201c-1-7-1-6%205-6%203%200%205-1%203-2-2-2-19-2-19-1h-1l-4-1-2-1-1-1-6%201m-132%204c-16%205-21%2016-14%2028%2012%2021%2044%2021%2054-1%206-11%202-20-10-25-6-3-23-4-30-2m5%208l-1%203-1%202v-2c0-2-1-3-5-3-2%201-2%201-1%204%200%203%202%205%203%203l3%201h3l4-1c3%200%204-1%205-3l1-2v2c1%204%206%204%206%201%200-2%200-2%202%200%202%204%203%204%203%201v-4l-1%201-2-2c-2-3-3-2-3%202l-1%204-1-4c-2-5-4-5-5-1-2%203-2%203-2%201h-3c-1%202-1%202-2%201-1-2%201-4%203-4h-5m4%2010v3c0%204-1%204-2%200-3-4-5-4-5%200v5c1-1%203-2%205-1%203%200%204%202%202%204-2%201-3%204-2%206l1%201-2%201h-3c-5%200%203%202%2010%202s14-2%2011-3c-1%200-2-1-2-3l-4-4c-7-4-7-4%201-4h6c-2%200-3-2-1-2l1-2c-1-1%200-1%201-1l2%204v5l1-1%203-4c2-3%202-4-1-2h-1c0-2-4-4-7-4l-2%203c-1%204-4%204-3-1%200-2-1-3-2-3l-1%203c0%202%200%203-2%203s-2-1-2-3c0-3-1-4-2-2\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/5fdf8db628a3e2eeb6be6edda19b5772/6ddc4/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-update-1.jpg","srcSet":"/static/5fdf8db628a3e2eeb6be6edda19b5772/116d1/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-update-1.jpg 200w,\\n/static/5fdf8db628a3e2eeb6be6edda19b5772/6ddc4/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-update-1.jpg 390w","srcWebp":"/static/5fdf8db628a3e2eeb6be6edda19b5772/aa668/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-update-1.webp","srcSetWebp":"/static/5fdf8db628a3e2eeb6be6edda19b5772/8f92f/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-update-1.webp 200w,\\n/static/5fdf8db628a3e2eeb6be6edda19b5772/aa668/Organic-Valley-Organic-Free-Range-Extra-Large-Eggs-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4NTIyNDEwNTc=","title":"Broccoli 500g","handle":"broccoli-500g","createdAt":"2020-10-13T14:30:57Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4NTIyNDEwNTc=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTE1OTA3MjkyOQ==","price":"1.95","priceV2":{"amount":"1.95","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTE1OTA3MjkyOQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODkwMTM3MDA3Njk=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/fresh-veg-1-update-1.jpg?v=1602599457","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M193%2092l-3%201h-5c-4%202-7%202-13%202-7%201-13%202-16%205l-4%202-2%202h-2c-3-2-10-3-10-2l-4%201-3%201-4%201c-3%200-8%204-7%205l-3%201c-2%200-3%201-4%204l-3%204-1%208-1%207-1%202c1%201%200%202-1%203l-2%204h1c1-1%201-1%201%201l-1%202-1%201-1%201-1%205%201%204v4c0%203%200%204%202%204l1%201-1%201c-1-1-1%204%201%207l5%205c2%201%203%202%202%204l1%203c1%200%202%201%201%202l1%202%202%202v2l1%204%202%202%205%203%206%204c3%200%205-2%203-3l-1-3h1c1%201%201%201%201-1l3-1c4%201%206%200%206-2%200-1%200-2%202-1l3-1h4c2%200%202%200%201-2-2-2-9-5-14-5l-3-2c0-2%202-2%207%200%203%201%202-2-2-4-3-2-3-3-2-4l6%204c5%205%207%206%205%202-3-4-2-4%202-1%204%202%206%205%205%207l4%207c6%207%208%2011%2012%2023%203%2010%204%2011%202%2011l-2%202-1%201v1h-2c-2%200-2%200-1%202l6%204%205%201-1%206c0%205%202%2013%205%2013v-2l1-1c1%201%201%200%201-1l1-2%201-2c0-4%202-4%203-1%202%202%202%202%203-5l2-11c0-6%202-14%205-19%204-5%204-7%202-8-3%200-4-4-3-6v-2l-1-8a220%20220%200%20002-9v-1l1-1%201%206%201%2010%201%205%202-2a1757%201757%200%20009-7c1-1%201%200%201%202l-1%203c-2-2-9%2014-12%2026-1%208-1%2019%201%2020l-1%202v2c2%200%201%201-2%202s-6%203-3%203c4-1%205%202%202%206-2%203-3%203-3%200l2-3c2%200%202%200%200-2h-4c1%201%200%201%200%200-2%200-2%200-1%202h-1c-1-1-3%200-1%202l-1%202v3c-2%203-2%2021-1%2025%201%201%201%201%200%200-2-1-2-1-2%202l-2%203h-3c-3-2-5%202-2%205%201%202%203%202%2011%202%206%200%209%200%208-1-2-1%200-2%203-1h7c4%200%204%200%203-3a4162%204162%200%2000-3-36l9-9-4-1c-5%200-7-2-5-4l1-4%201-2%201-5c0-6%205-20%207-22l1-2%203-5%203-4c0%202%202%201%208-1l8-3c3%200%205-2%203-3-2-3%200-4%204-4h4l1-2%201%201%202%202%201%202c0%202%200%202%202%202%202-1%205%201%204%203%200%202%207%203%207%200l3-1c2%200%209-8%2011-13%200-2%202-4%203-5l2-7%201-5-1-1-1-4v-4l-1-4-2-5-2-3c-1-4-2-7-4-7l-1-1-1-2-3-1-4-3-3-1-3-2c-3-2-3-4-4-13l-2-3-2-4-1-2-3-2c-3-3-6-5-9-5-1%200-2%200-1-1l-4-1-10-1h-10c-3%200-5%200-12-3-8-3-17-5-18-3\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/0f8dfc5e782ebaaf8f68f084c813a7e3/6ddc4/fresh-veg-1-update-1.jpg","srcSet":"/static/0f8dfc5e782ebaaf8f68f084c813a7e3/116d1/fresh-veg-1-update-1.jpg 200w,\\n/static/0f8dfc5e782ebaaf8f68f084c813a7e3/6ddc4/fresh-veg-1-update-1.jpg 390w","srcWebp":"/static/0f8dfc5e782ebaaf8f68f084c813a7e3/aa668/fresh-veg-1-update-1.webp","srcSetWebp":"/static/0f8dfc5e782ebaaf8f68f084c813a7e3/8f92f/fresh-veg-1-update-1.webp 200w,\\n/static/0f8dfc5e782ebaaf8f68f084c813a7e3/aa668/fresh-veg-1-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzkzMzA0NjU=","title":"Kalona Super Natural Organic Whole Milk Cottage Cheese 300g","handle":"kalona-super-natural-organic-whole-milk-cottage-cheese-300g","createdAt":"2020-10-13T14:29:18Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzkzMzA0NjU=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyNTAyNjk3Nw==","price":"4.90","priceV2":{"amount":"4.9","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyNTAyNjk3Nw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NzY0MTA3ODU=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/Kalona-Super-Natural-Organic-Whole-Milk-Cottage-Cheese-update-1.jpg?v=1602599358","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M186%2099l-4%201-3%201-7%201-4%201-13%201-5%202-3%201c2%201%2019-1%2023-2l6-1%204-1h5l3-1%206-1%206-1c-1-1-11-2-14-1m-50%208c1%201%200%201-3%201h-3l-3%201h-2l-3%201c-3-1-3-1-2%201%201%201%201%201-1%201h-5l-4%201%203%201h6l7-1%205-2h3c3%200%2014-2%2012-3l-10-1m96%2025c-12%203-2%208%2018%208%2019%200%2028-5%2016-8-7-2-28-2-34%200m31%2053l-3%208-3%209c0%201-1%201-3-1s-2-2%200-4c2-3%201-5-3-6-5-2-6-1-6%207-1%207%201%209%203%206%202-2%202-2%205%202l4%203h-3l-6%201h-4l-1-6c0-8-1-11-3-11l-2%204c-1%206-3%207-3%202s-1-6-3-5l-1-1c0-3-15-2-16%201s-1%202-1-2c0-2-1-2-3-2s-3%200-5%206c-3%2011-4%2016-1%2016l2-4c1-6%205-7%208-2%204%207%206%204%202-3-3-7-3-7%201-7h4l1%206c1%209%203%209%203%200%200-5%201-7%202-7%202%200%202%201%202%202%200%208%203%2013%207%2010%201-2%202-2%203%201l1%203-13%201c-61%204-123-5-141-21l-3-2v2l10%2081c0%206%203%2010%2010%2014%205%203%206%204%206%202v-2l2%202v2h4v2h3c3%202%2016%205%2026%206l6%201h-6l8%202a208%20208%200%200029%203l7-4c6-6%2017-13%2017-12l-6%205c-7%204-12%209-12%2010h37c42-3%2076-13%2083-26l3-13a23444%2023444%200%20017-61c1-19%202-18-3-14-7%207-21%2012-41%2016-15%203-15%203-14%201%201-7%201-7%204-7l3%203c1%202%204%203%204%201l4-1c3%200%204-1%205-2%201-2%201-2-3-2-2%200-3%200-3-2%202-4%201-9%200-10-2%200-3%203-3%209v5l-2-5-2-7c-1-3-3-5-4-3m-133%204v6c1%206%203%209%208%2010%205%200%205%200%203-10%200-4-1-5-2-5-2%200-2%201-1%206l-1%205c-2%200-3-2-4-7%200-4-2-7-3-5m13%205c0%207%201%2011%203%2011l2-2c0-1%201-2%203-2s3-1%203-4c0-4-1-5-7-6l-4-1v4m12%204c1%207%202%209%207%209%203%200%204%200%204-2s-1-2-3-2l-3-1%203-1c3%200%203-4-1-4l-2-1h2c2%200%203-1%203-2%200-2-1-2-5-2h-5v6m13-5v8c0%206%201%207%203%207s2%200%202-3v-2l2%202c2%203%206%204%206%201l-2-3v-2c2-2%201-6-1-7l-10-1m31%201l-1%204v4l-4-4c-5-6-7-6-8%203%200%205%200%206%202%207%202%200%203-2%202-4-1-3%202-3%205%201%204%205%206%205%207%202%201-6-1-16-3-13m-86%2032l-4%203c-2%200-2%200-1%201v2l-3%207v5l-2-3-1-3-1-2-1-4c-1-3-3-4-3-2l2%207v9c0%205%201%2014%203%2018%201%201%202%203%201%204l1%201c1-1%201%200%201%201l2-1c1-2%201-2-1-5-1-2-1-3%201-3s2-7%200-8c-1-2-3-8-1-8l2-2c1-3%202-1%202%203v3l2%202c0%202%201%202%203%201%204%200%205-2%204-4v-3c1-1%201-1%201%201v2h1l1%202v3l2%202c0%202%200%202-1%201v2c0%204-3%209-6%209l-1%205c0%205-1%205-3%206l-3%201%205%204c10%209%2023%2013%2047%2013%2017%201%2020%200%2033-5%208-4%2013-14%209-19l-1-3c1-1%200-3-2-5-2-3-2-5%201-5%205%200%209-11%205-17-4-8-20-7-23%201%200%203-2%202-4-1l-6-5-6-5c-4-4-14-7-18-5-2%202-3%202-7%200l-6-2-3-2c-3-1-7-2-7%200l-3%201-4-1c0-3-5-1-7%203\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/73c3de263a869aa916396e2193462b4c/6ddc4/Kalona-Super-Natural-Organic-Whole-Milk-Cottage-Cheese-update-1.jpg","srcSet":"/static/73c3de263a869aa916396e2193462b4c/116d1/Kalona-Super-Natural-Organic-Whole-Milk-Cottage-Cheese-update-1.jpg 200w,\\n/static/73c3de263a869aa916396e2193462b4c/6ddc4/Kalona-Super-Natural-Organic-Whole-Milk-Cottage-Cheese-update-1.jpg 390w","srcWebp":"/static/73c3de263a869aa916396e2193462b4c/aa668/Kalona-Super-Natural-Organic-Whole-Milk-Cottage-Cheese-update-1.webp","srcSetWebp":"/static/73c3de263a869aa916396e2193462b4c/8f92f/Kalona-Super-Natural-Organic-Whole-Milk-Cottage-Cheese-update-1.webp 200w,\\n/static/73c3de263a869aa916396e2193462b4c/aa668/Kalona-Super-Natural-Organic-Whole-Milk-Cottage-Cheese-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4NDA2NzM5NTM=","title":"Temple Leaf Detox Cleansing & Revitalizing Tea 40g","handle":"temple-leaf-detox-cleansing-revitalizing-tea-40g","createdAt":"2020-10-13T14:29:28Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4NDA2NzM5NTM=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyNjc5NjQ0OQ==","price":"4.99","priceV2":{"amount":"4.99","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyNjc5NjQ0OQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5ODAyNzc0MDk=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/tea-3-update-1.jpg?v=1602599368","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M111%2062v290l1%202h179V206l-1-154v-5H111v15m136-4v4h-72l-16%2014-15%2015c0%201%200%202%202%202l2%203%202%201%204%202%202%203%202-4c3-6%208-13%2015-20%207-8%207-8%203%200l-3%209%203%2017%203%2018c0%207%203%207%204-1l2-9%204-12c4-18%205-18%203-1-2%2010-2%2022-1%2025%201%202%204%203%204%201l2-1c1%200%204-2%208-7%208-8%209-6%202%202l-5%209c-1%202-9%203-11%201h-1c-2%203-8%204-10%203h-1v2l-4%202c-2%202-3%202-6%200l-10-5c-4-1-8-3-11-6l-6-5-4-2-14-4-1%2021%201%2046v25l3-1a431%20431%200%20005-1l-1-1%203-1c3%201%203%201%202-3-1-6-3-12-4-11l-1-2a193%20193%200%2000-2-18l-2-1%201-1%203-1%201%201%204%202c4%203%202%205-1%202-3-1-3-1-3%201%200%203%203%2012%205%2014v1l1%201c2%200%202%200%201%201v2c0%202%200%202%201%201h1c-1%202%200%203%202%201h1l-1%201-1%202%202-1h1v-1h1c2%201%202%201%202-1v-2c1%201%201%200%201-1%200-2%200-2%202-1l2%202%201%201c-1%201%201%202%202%204l4%204c3%207%2016%2017%2026%2020%2020%206%2047-6%2054-24l3-6%201-3v-2l1-8%202-7v1c0%201%202%203%204%203v-2c1-1%206%203%205%205%200%202%203%203%203%200%201-1%200-2-1-3l-1-2c3%200%205%203%204%207l1%203%201-3%201-3c1-1%203%201%203%202h-3l3%203c1%200%202%201%202%203%200%203%202%202%202-1%201-2%201-2%201%202s0%205%201%204l1-2v2c1%207%202-16%202-43l-1-26c0%2013%200%2013-6%2013h-5v-11l1-11h8l-5-1c-3-1-4-1-4-4%200-2%200-2%206-2l6%201V62h-12v-4l-1-5-1%2057v56h-13v-56a617%20617%200%2000-2-52m3%2052v55h11V55h-11v55m-13-40c-4%202-7%207-7%2011%200%205%206%2012%2010%2012%202%200%202%201%200%203l-1%203%203-2%203-2c2%202%203-15%200-17v-1c2%200%203-4%201-6v-1l1-1c0-2-6-1-10%201m-39%2020c15%2016%2026%2037%2017%2031-2-1-3%200-1%202%201%201%200%202-1%204-3%203-4%203-4-1s-2-3-2%201c0%203%200%203%203%204%204%201%205%201%206-2%201-2%204%201%203%203%200%202%200%202%201%201s1-1%201%201%203%204%207%202c3-2%203-3%200-2s-2-2%202-5c3-3%204-4%201-4-4%200-1-2%207-5%208-4%209-4%209-7l-1-4c-3%200-12%204-16%207l-5%203c-1-1%201-5%202-5v-2h-1c-2%202-4%201-4-1%200-4-6-11-12-15l-9-6c-6-5-7-5-3%200m-31%206l-5%207c-2%202-2%202%203%208l4%206%201-9V94l-1-3-2%205m-35%205c-10%209-11%2010-3%2011l8%202%2010%204c9%201%2019%205%2024%209%203%202%203%202%202-2-2-3-16-20-16-18%200%203-3%200-10-6l-7-8-8%208m60%2031c-18%202-34%2018-37%2037-6%2041%2045%2066%2075%2036%2030-29%204-78-38-73m47%207c-9%203-9%203-3%2010%204%205%205%206%208%206s3%200%203-3c0-2%200-3-2-3l-5-1c-4-1-4-2%202-5%208-4%206-6-3-4m-82%207l-5%202c0%201-9%204-19%206-11%202-5%203%209%201%2017-2%2016-1%2019-6%203-3%203-4%201-4l-5%201m83%2073c0%202%203%202%2031%202%203%200%204%200%204-2s-1-2-17-2c-17%200-18%200-18%202m-92%2010l1%2013-1%2012h6c2-1%202-1%200-1s-2%200-2-12c0-13%200-13%206-10%208%203%208%2015%200%2020-2%202-2%202%200%202%204%200%2010-9%2010-15s-7-10-16-10c-3%200-5%200-4%201m24%2011l-1%2013c0%202%2011%202%2013%201l-4-1h-5v-11h4c5%200%206-2%201-2h-4l-1-5c0-5%201-6%206-5l2-1-5-1h-6v12m17-11l5%201v13c0%2010%200%2012%202%2012l1-12v-13h3l5-1-10-1c-10%200-10%200-6%201m23%200c-6%203-8%2018-2%2023l6%203h5l-4-1c-8-3-10-15-3-22%204-4%205-4%209%200%206%205%205%2017-1%2021l-1%201c10%200%2013-18%204-25h-13m21%201l3%205%204%206%202%202-4%205c-5%204-6%207-4%207l1-1%204-5%205-5%204%205a503%20503%200%20016%205c1-1%201-2-2-5-7-8-6-7-1-13%204-5%205-8%203-8l-3%204c-5%209-6%209-12%202-5-7-5-7-6-4\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/12974708d53c2e4513d31ccb208b31f8/6ddc4/tea-3-update-1.jpg","srcSet":"/static/12974708d53c2e4513d31ccb208b31f8/116d1/tea-3-update-1.jpg 200w,\\n/static/12974708d53c2e4513d31ccb208b31f8/6ddc4/tea-3-update-1.jpg 390w","srcWebp":"/static/12974708d53c2e4513d31ccb208b31f8/aa668/tea-3-update-1.webp","srcSetWebp":"/static/12974708d53c2e4513d31ccb208b31f8/8f92f/tea-3-update-1.webp 200w,\\n/static/12974708d53c2e4513d31ccb208b31f8/aa668/tea-3-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzA3NzgwMTc=","title":"Nature\'s Own Whole Wheat Bread 480g","handle":"natures-own-whole-wheat-bread-480g","createdAt":"2020-10-13T14:28:08Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzA3NzgwMTc=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwNTkyMzIzMw==","price":"1.20","priceV2":{"amount":"1.2","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEwNTkyMzIzMw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NTA2ODc5MDU=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/Nature_sOwn100_WholeWheatBread.jpg?v=1602599288","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M209%2054h-3c-1-2-14%200-15%202-1%201-4%202-11%202-17%200-23%201-26%203l-3%203%201%204c2%206%206%2010%208%209l2-1c3%206%205%208%206%208l2%201v2l-1-1c-1-1-1-1-1%201s6%204%207%202l3-1%203-1%204-3c2-1%203-5%200-6l-1-4-1-2c-1%200-2%200-2%202l-1%202-2-2c0-3%204-4%208-2l5%201c2%200%203%203%202%206v8h3c0-1%201-2%203-2l2-1h1c1%202%205%201%206-2h-1l-1-1%203-1%202-1v-1c-3%200-3-2-1-5l2-2h5c2%200%203%200%203-3l2-3v-2l-2-2-1-2c3-7%203-7-3-7l-7%202m24%204c-1%203-7%208-7%206h-2v4c2-1%204%201%205%204%201%201%200%203-2%204-5%203-6%2011-1%2011l1%201c0%202%202%200%202-3%201-2%201-3%202-2s10-16%2010-19c0-2-5-8-7-8l-1%202m-17%2097v3c3%202%202%203-1%201s-3-2-3%200l-1-1c-2-2-2-2-2%200h-1c0-4-4%200-4%203%200%202-2%203-2%201l-1-2-1-2-1%201c-1%202-1%202-2%201l-1-1c0%202%200%202-2%201-1-1-2%200-3%202-2%202-2%202-3%201v-7c-1-1-3%201-3%203l-2%202-1-1h-1l-2-1c0-2-2-1-4%201l-2%203%201-3c0-3%200-3-1-2v8c2-2%201%202-2%204-2%202-2%202-2%200v-2l-2%202-2%202v-1l-2-1c-2%200-2%200-1-2%202-1%202-1%200-1l-4%201c-1%201-2%200-2-1-1-3-3%203-2%207l1%2012%201%2013a194%20194%200%20012%2073c-2%202-2%204%200%2015l2%2028%202%2022c1%202%201%200%201-9l2-7%202-3v2c0%2026%201%2028%2013%2032%208%202%209%202%2028%202%2025-1%2026-1%2029-12l3-15c0-6%201-7%203-8%203-1%205-6%203-10%200-2%200-3%202-4%203-1%203-1%203-15v-16c0-2-2-3-2%200s-3%206-5%206c-2-1-2-3-1-8%203-6%202-12%200-14s-3-12-1-15v-6l-2-23-1-37-1-5%202%202c3%203%205%204%204%202-1-1%200-3%201-5v-7c-2-3-4-4-2-1v2l-3-2c-5-3-5-3-5%201%200%203%200%203-1%202l-3-2-4-1c-1-1-3-2-4-1-3%200-3%200-2-1v-4l-2-2h-3m30%2046l-1%204v1c1%202%202%2019%201%2029v8a131%20131%200%20002-44l-1-1-1%203m-38%203h-4l-4%201h-5c-4%200-4%200-4%203s0%203%205%203l5-1v-3c-1-1-1-1%201-1%201%200%202%201%202%203l1%201%202%201%203%201c2%200%203-1%203-4%200-4-1-5-3-5l-2%201\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/e6df0701ea9c6a505a51e3ceabcd8907/6ddc4/Nature_sOwn100_WholeWheatBread.jpg","srcSet":"/static/e6df0701ea9c6a505a51e3ceabcd8907/116d1/Nature_sOwn100_WholeWheatBread.jpg 200w,\\n/static/e6df0701ea9c6a505a51e3ceabcd8907/6ddc4/Nature_sOwn100_WholeWheatBread.jpg 390w","srcWebp":"/static/e6df0701ea9c6a505a51e3ceabcd8907/aa668/Nature_sOwn100_WholeWheatBread.webp","srcSetWebp":"/static/e6df0701ea9c6a505a51e3ceabcd8907/8f92f/Nature_sOwn100_WholeWheatBread.webp 200w,\\n/static/e6df0701ea9c6a505a51e3ceabcd8907/aa668/Nature_sOwn100_WholeWheatBread.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzYyNTAyNzM=","title":"Dr. Bronner\'s Organic Virgin Coconut Oil 450ml","handle":"dr-bronners-organic-virgin-coconut-oil-450ml","createdAt":"2020-10-13T14:28:53Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4MzYyNTAyNzM=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyMDczNDM2OQ==","price":"3.50","priceV2":{"amount":"3.5","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyMDczNDM2OQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5Njg2Nzc1Mzc=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/Dr.-Bronner_s-All-One_-Dr.-Bronner_s-Organic-Virgin-Coconut-Oil-update-1.jpg?v=1602599333","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M196%2063c-16%201-19%202-9%202%209%200%2010%202%201%202-10%200-11%202-1%202%209%200%2010%200%2010%206l-1%202-2%201%209%201c6%200%208%200%206-1s-3-6-1-7v-1c-4%200-1-2%204-2%208%200%2010-2%202-2-7%200-7-1-1-2l4-1h-21m-20%2073l-23%202-21%201-14%201c0%203%203%206%204%205l2%201c0%201-1%202-3%202l-2%201a1087%201087%200%20001%2081c-2%201-2%2067%200%2068l13%203%2022%204a265%20265%200%2000115-4l11-3c1-1%201-5-1-4h-4l-3%201v-99h3l5-1c2-1%201-1-4-1h-4v-7l2-8h4c5%200%204-4-1-4-4%200-4%200-4-4v-10l1-5h3c3%200%203%200%203-2v-3c2-1%200-2-2-1l-2-1-1-2-2-1c0-2%201-2%204-2%204%200%204%200%204-3v-2h-13l-22-1a681%20681%200%2000-71-2m-22%2047c-5%205-3%2017%202%2017%206%200%207-14%202-17h-4m24%202c-3%204-2%2014%202%2015%204%202%208-3%207-10s-6-10-9-5m12-1c0%203%200%2017%202%2016l1-5%201-4%202%205c3%207%205%206%205-4%200-9-3-13-3-5l-1%205-1-5c-2-4-5-5-6-3m15%207c0%208%201%208%203%209%203%201%203%201%205-1%203-3%203-16%201-16s-2%201-2%206l-1%208c-2%203-3%200-3-7%200-6%200-7-2-7l-1%208m29-6c-2%202-2%209-1%2012%202%203%205%204%208%202%201-2%202-13%200-15-2-1-6-1-7%201m-51%2037c-6%202-13%209-13%2012%201%204%206%206%2011%204l9-2c8%200%2011-4%2010-11-2-5-8-6-17-3m20%201v3l1%206v3h9c7-1%209-2%2010-3%204-5%202-7-6-8a222%20222%200%2001-14-1m43%2047c-2%202-4%208-3%208h7c8%200%209-1%205-6-2-3-6-4-9-2\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/a6faca8fbaa0c9e503c2ff1c30697862/6ddc4/Dr.-Bronner_s-All-One_-Dr.-Bronner_s-Organic-Virgin-Coconut-Oil-update-1.jpg","srcSet":"/static/a6faca8fbaa0c9e503c2ff1c30697862/116d1/Dr.-Bronner_s-All-One_-Dr.-Bronner_s-Organic-Virgin-Coconut-Oil-update-1.jpg 200w,\\n/static/a6faca8fbaa0c9e503c2ff1c30697862/6ddc4/Dr.-Bronner_s-All-One_-Dr.-Bronner_s-Organic-Virgin-Coconut-Oil-update-1.jpg 390w","srcWebp":"/static/a6faca8fbaa0c9e503c2ff1c30697862/aa668/Dr.-Bronner_s-All-One_-Dr.-Bronner_s-Organic-Virgin-Coconut-Oil-update-1.webp","srcSetWebp":"/static/a6faca8fbaa0c9e503c2ff1c30697862/8f92f/Dr.-Bronner_s-All-One_-Dr.-Bronner_s-Organic-Virgin-Coconut-Oil-update-1.webp 200w,\\n/static/a6faca8fbaa0c9e503c2ff1c30697862/aa668/Dr.-Bronner_s-All-One_-Dr.-Bronner_s-Organic-Virgin-Coconut-Oil-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4Mzk0OTQzMDU=","title":"Good Culture Cottage Organic Cheese 440g","handle":"good-culture-cottage-organic-cheese-440g","createdAt":"2020-10-13T14:29:19Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4Mzk0OTQzMDU=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyNTM1NDY1Nw==","price":"2.65","priceV2":{"amount":"2.65","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyNTM1NDY1Nw==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NzcwNjYxNDU=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/Good-Culture-Cottage-Cheese_-Organic-update-1.jpg?v=1602599360","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M267%20128c0%207%200%208-2%207-10-4-20%200-24%209-7%2016%2013%2032%2025%2021l2-2%202%202c5%206%209%202%205-5-2-4-2-4-2-22l1-18h-7v8m-120%202c-2%202-4%203-9%203-13%202-20%2013-14%2026%207%2015%2029%2011%2031-6%200-5-3-14-5-14l2-4c3-4%204-4%201-6-2-3-2-2-6%201m24%204c-19%207-14%2034%205%2034%2010%201%2018-6%2019-16%201-12-13-22-24-18m43%200c-10%203-14%208-14%2017%200%2015%2016%2023%2028%2014%2010-7%209-23-1-29-4-2-10-3-13-2m-80%207c-9%205-6%2020%204%2020%2011%200%2014-15%203-20h-7m39%200c-6%202-8%208-6%2014%204%2010%2020%207%2020-4%200-7-8-12-14-10m40%201c-7%202-8%2011-3%2016%207%207%2018%202%2018-7%200-8-8-13-15-9m41-1c-12%205-8%2022%204%2020%209-1%2011-16%202-20h-6m-106%2029c-1%208-8%2011-15%207-6-3-8%203-2%207%2010%206%2025-2%2024-13%200-4-1-5-3-5-3%200-3%200-4%204m33%205c-2%200-1%209%201%2011%205%205%2010%201%2010-7-1-7-3-6-4%201-1%206-3%206-4-1-1-3-2-5-3-4m41%200c-2%201-1%209%201%2011%201%202%205%203%207%201%203-2%203-12%201-12-1%200-2%201-2%204%200%208-4%208-4%200%200-4-2-6-3-4m17%200c-2%201-1%2013%201%2013l1-3v-2l2%202c3%204%205%204%204%200v-3c2-2%201-6-1-7h-7m-114%2016c-13%204-25%2014-32%2028-6%2013-8%2021-7%2044%200%2022%201%2028%204%2029%202%200%202%200%201-14l1-31c2-12%205-21%207-21l2-5c-2-2%204-10%207-9l2-1%204-1%204-2c2-4%203-4%207-3h4l5-1%205-1c1-3%206-3%2010%200%204%202%206%202%2010%201%204%200%205%200%206%202%203%204%209%207%2012%205l6%201%208%201c3%200%203%200%201-2-6-7-26-18-38-20h-29m165%2068c1%207%207%209%2011%203%203-5%203-6-5-6h-7l1%203m-82%2013v5c2%202%202%203-2%206-2%202-3%205-3%207v3h14l1-6%201-11v-6h-5c-5%200-6%200-6%202\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/c5189335eab4c2efdb2a352206195c09/6ddc4/Good-Culture-Cottage-Cheese_-Organic-update-1.jpg","srcSet":"/static/c5189335eab4c2efdb2a352206195c09/116d1/Good-Culture-Cottage-Cheese_-Organic-update-1.jpg 200w,\\n/static/c5189335eab4c2efdb2a352206195c09/6ddc4/Good-Culture-Cottage-Cheese_-Organic-update-1.jpg 390w","srcWebp":"/static/c5189335eab4c2efdb2a352206195c09/aa668/Good-Culture-Cottage-Cheese_-Organic-update-1.webp","srcSetWebp":"/static/c5189335eab4c2efdb2a352206195c09/8f92f/Good-Culture-Cottage-Cheese_-Organic-update-1.webp 200w,\\n/static/c5189335eab4c2efdb2a352206195c09/aa668/Good-Culture-Cottage-Cheese_-Organic-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}},{"node":{"id":"Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4Mzg1NzY4MDE=","title":"Fair Life Chocolate Milk 350ml","handle":"fair-life-chocolate-milk-350ml","createdAt":"2020-10-13T14:29:12Z","shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU3NzU4Mzg1NzY4MDE=","availableForSale":true,"variants":[{"id":"Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyNDE0MjI0MQ==","price":"1.25","priceV2":{"amount":"1.25","currencyCode":"PKR"},"shopifyId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjY1OTEyNDE0MjI0MQ==","availableForSale":true}],"images":[{"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk1ODg5NzQ3MDY4NDk=","originalSrc":"https://cdn.shopify.com/s/files/1/0500/6511/3249/products/milk-3-update-1.jpg?v=1602599352","localFile":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M191%2052c-6%201-11%203-11%205l-1%2011%201%2011%202%203h1l3-2%201-1c0-3%2019-2%2025%202%203%202%204%205%202%2013-1%206-2%207-13%209-27%205-43%205-42%201%200-2%200-2-5%201-2%201-5%204-6%207-3%205-3%202%204%2090%202%2028%202%2065%201%2074-9%2040-10%2044-6%2051%202%204%203%205%206%205%205%202%2073%202%2086%201%2012-1%2019-3%2015-5-2%200-2-1-1-3%202-5%201-15-4-37l-4-20%201-20a17498%2017498%200%20003-57%20598%20598%200%20015-62c1-12%200-17-2-20l-30-23c-3-2-3-5-2-7%202-2%202-19%201-22-2-4-7-5-18-6l-12%201m15%2065l-2%2011%201%2012c3%201%204-1%204-12l-1-12-2%201m19%204l-2%203-1%201-2%202%201%202-1%206c-1%206-1%206%201%206%202%201%203%200%204-8l3-3c2-1%203-3%201-3-3%200-2-3%200-4%202%200%203-3%200-3-2-1-1-1-4%201m-66%202c-2%202-2%203-2%206v5l2%201%202%203c3%208%204%209%207%207%201-1%201-2-1-6-2-5-2-6-1-6%203-1%201-5-1-5-1%201-2%200-2-1l1-1c2%200%201-4-1-5l-4%202m38%200h-4v8c0%208%200%209%202%209%202-1%203-1%203-6s0-6%203-7l2-2c-1-3-1-3-6-2m-24%203c-3%201-6%207-3%207v3c-2%204%203%209%208%206l4-1c2%200%202-1%201-8-2-6-5-9-10-7m57%206c-4%205-2%2013%204%2013%207%200%208-3%202-3-3%200-4-1-4-3s0-2%204-1c5%203%206%202%206-1%200-7-7-9-12-5m-34%2017c-4%201-4%204-4%2013%201%209%204%2016%208%2016%207-1%2011-23%206-29-2-2-7-2-10%200m-1%2034c-5%205-3%209%205%209s10-3%206-8c-3-4-8-4-11-1m-32%2031l1%202c2%200%204%202%203%203l-2-1h-2c0%203%204%203%206%201l1-1c0%203%206%203%207-1l1-1h2l-2-2-3-2h-6c-2-2-6-1-6%202\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/29b6259e73500d05992cef3f8c0c733a/6ddc4/milk-3-update-1.jpg","srcSet":"/static/29b6259e73500d05992cef3f8c0c733a/116d1/milk-3-update-1.jpg 200w,\\n/static/29b6259e73500d05992cef3f8c0c733a/6ddc4/milk-3-update-1.jpg 390w","srcWebp":"/static/29b6259e73500d05992cef3f8c0c733a/aa668/milk-3-update-1.webp","srcSetWebp":"/static/29b6259e73500d05992cef3f8c0c733a/8f92f/milk-3-update-1.webp 200w,\\n/static/29b6259e73500d05992cef3f8c0c733a/aa668/milk-3-update-1.webp 390w","sizes":"(max-width: 390px) 100vw, 390px"}}}}]}}]}}}'
      );
    },
    foCw: function (t, e, a) {
      'use strict';
      var c = a('2A+t'),
        l = a('izhR'),
        i = a('Bi3C'),
        r = a.n(i),
        n = a('wG+1'),
        o = a('s9Uc'),
        s = a('ulNG'),
        d =
          (a('E5k/'),
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
        h = a('oW8o'),
        p = a.n(h),
        u = function (t) {
          var e = t.btn,
            a = t.tag,
            i = t.title,
            r = t.tagBgColor,
            o = t.bannerImage,
            s = t.shortDescription;
          return Object(c.c)(
            l.a,
            {
              sx: Object.assign(
                { backgroundImage: 'url(' + (o && o ? o : p.a) + ')' },
                d.wrapper
              ),
            },
            Object(c.c)(
              l.a,
              { sx: d.content },
              a &&
                Object(c.c)(
                  l.a,
                  {
                    as: 'span',
                    sx: Object.assign(
                      { backgroundColor: r || '#AFCD5F' },
                      d.tag
                    ),
                  },
                  n.RichText.asText(a)
                ),
              Object(c.c)(l.f, { as: 'h3' }, n.RichText.asText(i)),
              Object(c.c)(l.h, { as: 'p' }, n.RichText.asText(s)),
              e && e
            )
          );
        },
        m = {
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
          a = t.scrollTo,
          i = t.scrollOffset;
        return Object(c.c)(
          l.a,
          { className: 'picksyAdBanner', sx: m.wrapper },
          Object(c.c)(
            s.a,
            {
              ssr: !0,
              responsive: {
                ipad: { breakpoint: { max: 1e5, min: 651 }, items: 2 },
                mobile: { breakpoint: { max: 650, min: 0 }, items: 1 },
              },
              gutter: '10px',
            },
            e.map(function (t, e) {
              var s;
              return Object(c.c)(u, {
                key: 'adblock-key' + e,
                tag: t.badge_title,
                tagBgColor: t.badge_color,
                bannerImage:
                  null === (s = t.block_image) || void 0 === s ? void 0 : s.url,
                title: t.title,
                shortDescription: t.short_description,
                btn: Object(c.c)(
                  r.a,
                  { href: a, style: { textDecoration: 'none' }, offset: i },
                  Object(c.c)(
                    l.b,
                    { variant: 'white' },
                    n.RichText.asText(t.button_title),
                    ' ',
                    Object(c.c)(o.a, null)
                  )
                ),
              });
            })
          )
        );
      };
    },
    m1kc: function (t, e, a) {
      'use strict';
      a('rzGZ'),
        a('Dq+y'),
        a('8npG'),
        a('Ggvi'),
        a('JHok'),
        a('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('ztRg');
      function l(t) {
        var e = t.slidesToShow;
        return t.totalItems < e;
      }
      function i(t, e, a) {
        var c = a || t.transform;
        return (!e.infinite && 0 === t.currentSlide) || l(t)
          ? c
          : c + t.itemWidth / 2;
      }
      function r(t) {
        var e = t.currentSlide,
          a = t.totalItems;
        return !(e + t.slidesToShow < a);
      }
      function n(t, e, a, c) {
        void 0 === e && (e = 0);
        var i = t.currentSlide,
          n = t.slidesToShow,
          o = r(t),
          s = !a.infinite && o,
          d = c || t.transform;
        if (l(t)) return d;
        var h = d + i * e;
        return s ? h + (t.containerWidth - (t.itemWidth - e) * n) : h;
      }
      (e.notEnoughChildren = l),
        (e.getInitialState = function (t, e) {
          var a,
            l = t.domLoaded,
            i = t.slidesToShow,
            r = t.containerWidth,
            n = t.itemWidth,
            o = e.deviceType,
            s = e.responsive,
            d = e.ssr,
            h = e.partialVisbile,
            p = e.partialVisible,
            u = Boolean(l && i && r && n);
          d && o && !u && (a = c.getWidthFromDeviceType(o, s));
          var m = Boolean(d && o && !u && a);
          return {
            shouldRenderOnSSR: m,
            flexBisis: a,
            domFullyLoaded: u,
            partialVisibilityGutter: c.getPartialVisibilityGutter(
              s,
              h || p,
              o,
              t.deviceType
            ),
            shouldRenderAtAll: m || u,
          };
        }),
        (e.getIfSlideIsVisbile = function (t, e) {
          var a = e.currentSlide,
            c = e.slidesToShow;
          return a <= t && t < a + c;
        }),
        (e.getTransformForCenterMode = i),
        (e.isInLeftEnd = function (t) {
          return !(0 < t.currentSlide);
        }),
        (e.isInRightEnd = r),
        (e.getTransformForPartialVsibile = n),
        (e.getTransform = function (t, e, a) {
          var l = e.partialVisbile,
            r = e.partialVisible,
            o = e.responsive,
            s = e.deviceType,
            d = e.centerMode,
            h = a || t.transform,
            p = c.getPartialVisibilityGutter(o, l || r, s, t.deviceType);
          return r || l ? n(t, p, e, a) : d ? i(t, e, a) : h;
        }),
        (e.getSlidesToSlide = function (t, e) {
          var a = t.domLoaded,
            c = t.slidesToShow,
            l = t.containerWidth,
            i = t.itemWidth,
            r = e.deviceType,
            n = e.responsive,
            o = e.slidesToSlide || 1,
            s = Boolean(a && c && l && i);
          return (
            e.ssr &&
              e.deviceType &&
              !s &&
              Object.keys(n).forEach(function (t) {
                var e = n[t].slidesToSlide;
                r === t && e && (o = e);
              }),
            s &&
              Object.keys(n).forEach(function (t) {
                var e = n[t],
                  a = e.breakpoint,
                  c = e.slidesToSlide,
                  l = a.max,
                  i = a.min;
                c &&
                  window.innerWidth >= i &&
                  window.innerWidth <= l &&
                  (o = c);
              }),
            o
          );
        });
    },
    oQ0E: function (t, e, a) {
      'use strict';
      a('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var a = e.partialVisbile,
            c = e.partialVisible,
            l = e.centerMode,
            i = e.ssr,
            r = e.responsive;
          if ((a || c) && l)
            throw new Error(
              'center mode can not be used at the same time with partialVisible'
            );
          if (!r)
            throw i
              ? new Error(
                  'ssr mode need to be used in conjunction with responsive prop'
                )
              : new Error(
                  'Responsive prop is needed for deciding the amount of items to show on the screen'
                );
          if (r && 'object' != typeof r)
            throw new Error('responsive prop must be an object');
        });
    },
    oW8o: function (t, e, a) {
      t.exports = a.p + 'static/1-0764717f77e1abd8daea1ce01bf039aa.jpg';
    },
    s9Uc: function (t, e, a) {
      'use strict';
      a.d(e, 'e', function () {
        return i;
      }),
        a.d(e, 'd', function () {
          return r;
        }),
        a.d(e, 'f', function () {
          return n;
        }),
        a.d(e, 'g', function () {
          return o;
        }),
        a.d(e, 'a', function () {
          return s;
        }),
        a.d(e, 'b', function () {
          return d;
        }),
        a.d(e, 'c', function () {
          return h;
        });
      var c = a('q1tI'),
        l = a.n(c),
        i = function () {
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
        r = function () {
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
        n = function () {
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
        o = function () {
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
        h = function () {
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
    sW6s: function (t, e, a) {
      'use strict';
      a('sc67'),
        a('rzGZ'),
        a('Dq+y'),
        a('8npG'),
        a('Ggvi'),
        a('JHok'),
        a('n7j8'),
        a('R48M'),
        a('pS08'),
        a('LagC');
      var c,
        l =
          (this && this.__extends) ||
          ((c = function (t, e) {
            return (c =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
              })(t, e);
          }),
          function (t, e) {
            function a() {
              this.constructor = t;
            }
            c(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((a.prototype = e.prototype), new a()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = a('q1tI'),
        r = a('3TDQ'),
        n = a('+yCD'),
        o = a('SSZS'),
        s = a('yQRQ'),
        d = a('S9TR'),
        h = a('m1kc'),
        p = (function (t) {
          function e(e) {
            var a = t.call(this, e) || this;
            return (
              (a.containerRef = i.createRef()),
              (a.listRef = i.createRef()),
              (a.state = {
                itemWidth: 0,
                slidesToShow: 0,
                currentSlide: 0,
                totalItems: i.Children.count(e.children),
                deviceType: '',
                domLoaded: !1,
                transform: 0,
                containerWidth: 0,
              }),
              (a.onResize = a.onResize.bind(a)),
              (a.handleDown = a.handleDown.bind(a)),
              (a.handleMove = a.handleMove.bind(a)),
              (a.handleOut = a.handleOut.bind(a)),
              (a.onKeyUp = a.onKeyUp.bind(a)),
              (a.handleEnter = a.handleEnter.bind(a)),
              (a.setIsInThrottle = a.setIsInThrottle.bind(a)),
              (a.next = r.throttle(
                a.next.bind(a),
                e.transitionDuration || 400,
                a.setIsInThrottle
              )),
              (a.previous = r.throttle(
                a.previous.bind(a),
                e.transitionDuration || 400,
                a.setIsInThrottle
              )),
              (a.goToSlide = r.throttle(
                a.goToSlide.bind(a),
                e.transitionDuration || 400,
                a.setIsInThrottle
              )),
              (a.onMove = !1),
              (a.initialX = 0),
              (a.lastX = 0),
              (a.isAnimationAllowed = !1),
              (a.direction = ''),
              (a.initialY = 0),
              (a.isInThrottle = !1),
              (a.transformPlaceHolder = 0),
              a
            );
          }
          return (
            l(e, t),
            (e.prototype.resetTotalItems = function () {
              var t = this,
                e = i.Children.count(this.props.children),
                a = r.notEnoughChildren(this.state)
                  ? 0
                  : Math.max(0, Math.min(this.state.currentSlide, e));
              this.setState({ totalItems: e, currentSlide: a }, function () {
                t.setContainerAndItemWidth(t.state.slidesToShow, !0);
              });
            }),
            (e.prototype.setIsInThrottle = function (t) {
              void 0 === t && (t = !1), (this.isInThrottle = t);
            }),
            (e.prototype.setTransformDirectly = function (t, e) {
              var a = this.props.additionalTransfrom,
                c = h.getTransform(this.state, this.props, t);
              (this.transformPlaceHolder = t),
                this.listRef &&
                  this.listRef.current &&
                  (this.setAnimationDirectly(e),
                  (this.listRef.current.style.transform =
                    'translate3d(' + (c + a) + 'px,0,0)'));
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
            (e.prototype.setClones = function (t, e, a, c) {
              var l = this;
              void 0 === c && (c = !1), (this.isAnimationAllowed = !1);
              var n = i.Children.toArray(this.props.children),
                o = r.getInitialSlideInInfiniteMode(
                  t || this.state.slidesToShow,
                  n
                ),
                s = r.getClones(this.state.slidesToShow, n),
                d =
                  n.length < this.state.slidesToShow
                    ? 0
                    : this.state.currentSlide;
              this.setState(
                { totalItems: s.length, currentSlide: a && !c ? d : o },
                function () {
                  l.correctItemsPosition(e || l.state.itemWidth);
                }
              );
            }),
            (e.prototype.setItemsToShow = function (t, e) {
              var a = this,
                c = this.props.responsive;
              Object.keys(c).forEach(function (l) {
                var i = c[l],
                  r = i.breakpoint,
                  n = i.items,
                  o = r.max,
                  s = r.min;
                window.innerWidth >= s &&
                  window.innerWidth <= o &&
                  (a.setState({ slidesToShow: n, deviceType: l }),
                  a.setContainerAndItemWidth(n, t, e));
              });
            }),
            (e.prototype.setContainerAndItemWidth = function (t, e, a) {
              var c = this;
              if (this.containerRef && this.containerRef.current) {
                var l = this.containerRef.current.offsetWidth,
                  i = r.getItemClientSideWidth(this.props, t, l);
                this.setState({ containerWidth: l, itemWidth: i }, function () {
                  c.props.infinite && c.setClones(t, i, e, a);
                }),
                  e && this.correctItemsPosition(i);
              }
            }),
            (e.prototype.correctItemsPosition = function (t, e, a) {
              e && (this.isAnimationAllowed = !0),
                !e && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
              var c =
                this.state.totalItems < this.state.slidesToShow
                  ? 0
                  : -t * this.state.currentSlide;
              a && this.setTransformDirectly(c, !0),
                this.setState({ transform: c });
            }),
            (e.prototype.onResize = function (t) {
              var e;
              (e = !(!this.props.infinite || ('boolean' == typeof t && t))),
                this.setItemsToShow(e);
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              var a = this,
                c = t.keyBoardControl,
                l = t.autoPlay,
                i = t.children,
                r = e.containerWidth,
                n = e.domLoaded,
                o = e.currentSlide;
              this.containerRef &&
                this.containerRef.current &&
                this.containerRef.current.offsetWidth !== r &&
                setTimeout(function () {
                  a.setItemsToShow(!0);
                }, this.props.transitionDuration || 400),
                c &&
                  !this.props.keyBoardControl &&
                  window.removeEventListener('keyup', this.onKeyUp),
                !c &&
                  this.props.keyBoardControl &&
                  window.addEventListener('keyup', this.onKeyUp),
                l &&
                  !this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                l ||
                  !this.props.autoPlay ||
                  this.autoPlay ||
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed
                  )),
                i.length !== this.props.children.length
                  ? setTimeout(function () {
                      a.props.infinite
                        ? a.setClones(
                            a.state.slidesToShow,
                            a.state.itemWidth,
                            !0,
                            !0
                          )
                        : a.resetTotalItems();
                    }, this.props.transitionDuration || 400)
                  : this.props.infinite &&
                    this.state.currentSlide !== o &&
                    this.correctClonesPosition({ domLoaded: n }),
                this.transformPlaceHolder !== this.state.transform &&
                  (this.transformPlaceHolder = this.state.transform);
            }),
            (e.prototype.correctClonesPosition = function (t) {
              var e = this,
                a = t.domLoaded,
                c = i.Children.toArray(this.props.children),
                l = r.checkClonesPosition(this.state, c, this.props),
                n = l.isReachingTheEnd,
                o = l.isReachingTheStart,
                s = l.nextSlide,
                d = l.nextPosition;
              this.state.domLoaded &&
                a &&
                (n || o) &&
                ((this.isAnimationAllowed = !1),
                setTimeout(function () {
                  e.setState({ transform: d, currentSlide: s });
                }, this.props.transitionDuration || 400));
            }),
            (e.prototype.next = function (t) {
              var e = this;
              void 0 === t && (t = 0);
              var a = this.props,
                c = a.afterChange,
                l = a.beforeChange;
              if (!r.notEnoughChildren(this.state)) {
                var i = r.populateNextSlides(this.state, this.props, t),
                  n = i.nextSlides,
                  o = i.nextPosition,
                  s = this.state.currentSlide;
                void 0 !== n &&
                  void 0 !== o &&
                  ('function' == typeof l && l(n, this.getState()),
                  (this.isAnimationAllowed = !0),
                  this.setState({ transform: o, currentSlide: n }, function () {
                    'function' == typeof c &&
                      setTimeout(function () {
                        c(s, e.getState());
                      }, e.props.transitionDuration || 400);
                  }));
              }
            }),
            (e.prototype.previous = function (t) {
              var e = this;
              void 0 === t && (t = 0);
              var a = this.props,
                c = a.afterChange,
                l = a.beforeChange;
              if (!r.notEnoughChildren(this.state)) {
                var i = r.populatePreviousSlides(this.state, this.props, t),
                  n = i.nextSlides,
                  o = i.nextPosition;
                if (void 0 !== n && void 0 !== o) {
                  var s = this.state.currentSlide;
                  'function' == typeof l && l(n, this.getState()),
                    (this.isAnimationAllowed = !0),
                    this.setState(
                      { transform: o, currentSlide: n },
                      function () {
                        'function' == typeof c &&
                          setTimeout(function () {
                            c(s, e.getState());
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
                  (!n.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (n.isMouseMoveEvent(t) && !this.props.draggable) ||
                  this.isInThrottle
                )
              ) {
                var e = n.isMouseMoveEvent(t) ? t : t.touches[0],
                  a = e.clientX,
                  c = e.clientY;
                (this.onMove = !0),
                  (this.initialX = a),
                  (this.initialY = c),
                  (this.lastX = a),
                  (this.isAnimationAllowed = !1);
              }
            }),
            (e.prototype.handleMove = function (t) {
              if (
                !(
                  (!n.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (n.isMouseMoveEvent(t) && !this.props.draggable) ||
                  r.notEnoughChildren(this.state)
                )
              ) {
                var e = n.isMouseMoveEvent(t) ? t : t.touches[0],
                  a = e.clientX,
                  c = e.clientY,
                  l = this.initialX - a,
                  i = this.initialY - c;
                if (
                  (!n.isMouseMoveEvent(t) &&
                    this.autoPlay &&
                    this.props.autoPlay &&
                    (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                  this.onMove)
                ) {
                  if (!(Math.abs(l) > Math.abs(i))) return;
                  var o = r.populateSlidesOnMouseTouchMove(
                      this.state,
                      this.props,
                      this.initialX,
                      this.lastX,
                      a,
                      this.transformPlaceHolder
                    ),
                    s = o.direction,
                    d = o.nextPosition,
                    h = o.canContinue;
                  s &&
                    ((this.direction = s),
                    h && void 0 !== d && this.setTransformDirectly(d)),
                    (this.lastX = a);
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
                a =
                  ('mouseleave' === t.type || 'mouseup' === t.type) &&
                  !this.props.draggable;
              if (!e && !a && this.onMove) {
                if ((this.setAnimationDirectly(!0), 'right' === this.direction))
                  if (
                    this.initialX - this.lastX >=
                    this.props.minimumTouchDrag
                  ) {
                    var c = Math.round(
                      (this.initialX - this.lastX) / this.state.itemWidth
                    );
                    this.next(c);
                  } else
                    this.correctItemsPosition(this.state.itemWidth, !0, !0);
                'left' === this.direction &&
                  (this.lastX - this.initialX > this.props.minimumTouchDrag
                    ? ((c = Math.round(
                        (this.lastX - this.initialX) / this.state.itemWidth
                      )),
                      this.previous(c))
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
              var a = this;
              if (!this.isInThrottle) {
                var c = this.state.itemWidth,
                  l = this.props,
                  i = l.afterChange,
                  r = l.beforeChange,
                  n = this.state.currentSlide;
                'function' != typeof r ||
                  (e && ('object' != typeof e || e.skipBeforeChange)) ||
                  r(t, this.getState()),
                  (this.isAnimationAllowed = !0),
                  this.setState(
                    { currentSlide: t, transform: -c * t },
                    function () {
                      a.props.infinite &&
                        a.correctClonesPosition({ domLoaded: !0 }),
                        'function' != typeof i ||
                          (e && ('object' != typeof e || e.skipAfterChange)) ||
                          setTimeout(function () {
                            i(n, a.getState());
                          }, a.props.transitionDuration || 400);
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
              return i.createElement(s.LeftArrow, {
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
              return i.createElement(s.RightArrow, {
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
                ? i.cloneElement(e, {
                    previous: function () {
                      return t.previous();
                    },
                    next: function () {
                      return t.next();
                    },
                    goToSlide: function (e, a) {
                      return t.goToSlide(e, a);
                    },
                    carouselState: this.getState(),
                  })
                : null;
            }),
            (e.prototype.renderDotsList = function () {
              var t = this;
              return i.createElement(o.default, {
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
                var e = i.Children.toArray(this.props.children);
                t = r.getClones(this.state.slidesToShow, e);
              }
              return i.createElement(d.default, {
                clones: t,
                goToSlide: this.goToSlide,
                state: this.state,
                notEnoughChildren: r.notEnoughChildren(this.state),
                props: this.props,
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.deviceType,
                a = t.arrows,
                c = t.removeArrowOnDeviceType,
                l = t.infinite,
                n = t.containerClass,
                o = t.sliderClass,
                s = t.customTransition,
                d = t.additionalTransfrom,
                p = t.renderDotsOutside,
                u = t.renderButtonGroupOutside,
                m = t.className,
                f = r.getInitialState(this.state, this.props),
                v = f.shouldRenderOnSSR,
                g = f.shouldRenderAtAll,
                b = r.isInLeftEnd(this.state),
                w = r.isInRightEnd(this.state),
                S =
                  a &&
                  !(
                    c &&
                    ((e && -1 < c.indexOf(e)) ||
                      (this.state.deviceType &&
                        -1 < c.indexOf(this.state.deviceType)))
                  ) &&
                  !r.notEnoughChildren(this.state) &&
                  g,
                y = !l && b,
                x = !l && w,
                k = h.getTransform(this.state, this.props);
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  'div',
                  {
                    className: 'react-multi-carousel-list ' + n + ' ' + m,
                    ref: this.containerRef,
                  },
                  i.createElement(
                    'ul',
                    {
                      ref: this.listRef,
                      className: 'react-multi-carousel-track ' + o,
                      style: {
                        transition: this.isAnimationAllowed
                          ? s || 'transform 400ms ease-in-out'
                          : 'none',
                        overflow: v ? 'hidden' : 'unset',
                        transform: 'translate3d(' + (k + d) + 'px,0,0)',
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
                  S && !y && this.renderLeftArrow(),
                  S && !x && this.renderRightArrow(),
                  g && !u && this.renderButtonGroups(),
                  g && !p && this.renderDotsList()
                ),
                g && p && this.renderDotsList(),
                g && u && this.renderButtonGroups()
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
        })(i.Component);
      e.default = p;
    },
    tSJS: function (t, e, a) {
      'use strict';
      a('E5k/');
      var c = a('q1tI'),
        l = a('wG+1'),
        i = a('2A+t'),
        r = a('izhR'),
        n = a('Bi3C'),
        o = a.n(n),
        s = a('s9Uc'),
        d = a('JuHP'),
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
        p = a('35ZX'),
        u = a.n(p);
      e.a = function (t) {
        var e = t.banner,
          a = t.bannerTitle,
          n = t.bannerSubTitle,
          p = t.bannerButtonText,
          m = t.showActionBtn,
          f = void 0 === m || m,
          v = Object(d.a)(),
          g = Object(c.useState)(60),
          b = g[0],
          w = g[1];
        return (
          Object(c.useEffect)(
            function () {
              w(v < 1081 ? 80 : 60);
            },
            [v]
          ),
          Object(i.c)(
            r.a,
            {
              as: 'section',
              sx: Object.assign(
                { backgroundImage: 'url(' + (e && e ? e : u.a) + ')' },
                h.banner
              ),
              className: 'home-banner',
            },
            Object(i.c)(
              r.a,
              { as: 'header', sx: h.bannerContent },
              a && Object(i.c)('h1', null, l.RichText.render(a)),
              n && l.RichText.render(n),
              f &&
                Object(i.c)(
                  o.a,
                  {
                    href: '#feature',
                    style: { textDecoration: 'none', display: 'inline-block' },
                    offset: function () {
                      return b;
                    },
                  },
                  Object(i.c)(
                    r.b,
                    { variant: 'white' },
                    Object(i.c)(
                      r.h,
                      { as: 'span' },
                      p ? l.RichText.asText(p) : 'Order Now'
                    ),
                    Object(i.c)(s.a, null)
                  )
                )
            )
          )
        );
      };
    },
    trlm: function (t, e, a) {
      'use strict';
      var c = a('2A+t'),
        l = a('izhR'),
        i = {
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
          r = t.shortInfo;
        return Object(c.c)(
          l.a,
          { className: 'featureCard', sx: i.wrapper },
          Object(c.c)(l.g, { src: e, alt: a }),
          Object(c.c)(
            l.a,
            null,
            Object(c.c)(l.f, { as: 'h4' }, a),
            Object(c.c)(l.h, { as: 'p' }, r)
          )
        );
      };
    },
    ulNG: function (t, e, a) {
      'use strict';
      var c = a('2A+t'),
        l = a('izhR'),
        i = a('IdFE'),
        r = a('40+L'),
        n = a.n(r),
        o =
          (a('VLDe'),
          a('E5k/'),
          function (t) {
            var e = Object.assign({}, t);
            return Object(c.c)(
              l.a,
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
        s = {
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
        d = function (t) {
          var e = t.next,
            a = t.previous;
          return Object(c.c)(
            l.a,
            { sx: s.carouselNav, className: 'carousel-button-group' },
            Object(c.c)(
              l.a,
              {
                as: 'button',
                sx: s.prev,
                className: 'prev',
                onClick: function () {
                  return a();
                },
              },
              Object(c.c)(i.b, null)
            ),
            Object(c.c)(
              l.a,
              {
                as: 'button',
                sx: s.next,
                className: 'next',
                onClick: function () {
                  return e();
                },
              },
              Object(c.c)(i.d, null)
            )
          );
        };
      e.a = function (t) {
        var e = t.ssr,
          a = t.gutter,
          l = t.children,
          i = t.responsive,
          r = t.showDots,
          s = t.renderDotsOutside;
        return Object(c.c)(
          o,
          { gutter: a },
          Object(c.c)(
            n.a,
            {
              ssr: e,
              infinite: !0,
              arrows: !1,
              swipeable: !0,
              responsive: i,
              showDots: r,
              renderDotsOutside: s,
              renderButtonGroupOutside: !0,
              customButtonGroup: Object(c.c)(d, null),
            },
            l
          )
        );
      };
    },
    v5rg: function (t, e, a) {
      'use strict';
      a('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getOriginalCounterPart = function (t, e, a) {
          var c = e.slidesToShow,
            l = e.currentSlide;
          return a.length > 2 * c
            ? t + 2 * c
            : l >= a.length
            ? a.length + t
            : t;
        }),
        (e.getOriginalIndexLookupTableByClones = function (t, e) {
          if (e.length > 2 * t) {
            for (
              var a = {}, c = e.length - 2 * t, l = e.length - c, i = c, r = 0;
              r < l;
              r++
            )
              (a[r] = i), i++;
            var n = e.length + l,
              o = n + e.slice(0, 2 * t).length,
              s = 0;
            for (r = n; r <= o; r++) (a[r] = s), s++;
            var d = n,
              h = 0;
            for (r = l; r < d; r++) (a[r] = h), h++;
            return a;
          }
          a = {};
          var p = 3 * e.length,
            u = 0;
          for (r = 0; r < p; r++) (a[r] = u), ++u === e.length && (u = 0);
          return a;
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
        (e.checkClonesPosition = function (t, e, a) {
          var c,
            l = t.currentSlide,
            i = t.slidesToShow,
            r = t.itemWidth,
            n = t.totalItems,
            o = 0,
            s = 0,
            d = 0 === l,
            h = e.length - (e.length - 2 * i);
          return (
            e.length < i
              ? ((s = o = 0), (d = c = !1))
              : e.length > 2 * i
              ? ((c = l >= h + e.length) && (s = -r * (o = l - e.length)),
                d && (s = -r * (o = h + (e.length - 2 * i))))
              : ((c = l >= 2 * e.length) && (s = -r * (o = l - e.length)),
                d &&
                  (s = a.showDots
                    ? -r * (o = e.length)
                    : -r * (o = n - 2 * i))),
            {
              isReachingTheEnd: c,
              isReachingTheStart: d,
              nextSlide: o,
              nextPosition: s,
            }
          );
        });
    },
    yQRQ: function (t, e, a) {
      'use strict';
      a('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      var c = a('q1tI');
      e.LeftArrow = function (t) {
        var e = t.customLeftArrow,
          a = t.getState,
          l = t.previous;
        return e
          ? c.cloneElement(e, {
              onClick: function () {
                return l();
              },
              carouselState: a(),
            })
          : c.createElement('button', {
              'aria-label': 'Go to previous slide',
              className:
                'react-multiple-carousel__arrow react-multiple-carousel__arrow--left',
              onClick: function () {
                return l();
              },
            });
      };
      e.RightArrow = function (t) {
        var e = t.customRightArrow,
          a = t.next,
          l = t.getState;
        return e
          ? c.cloneElement(e, {
              onClick: function () {
                return a();
              },
              carouselState: l(),
            })
          : c.createElement('button', {
              'aria-label': 'Go to next slide',
              className:
                'react-multiple-carousel__arrow react-multiple-carousel__arrow--right',
              onClick: function () {
                return a();
              },
            });
      };
    },
    ztRg: function (t, e, a) {
      'use strict';
      a('R48M'), Object.defineProperty(e, '__esModule', { value: !0 });
      (e.getPartialVisibilityGutter = function (t, e, a, c) {
        var l = 0,
          i = c || a;
        return (
          e &&
            i &&
            (l = t[i].partialVisibilityGutter || t[i].paritialVisibilityGutter),
          l
        );
      }),
        (e.getWidthFromDeviceType = function (t, e) {
          var a;
          return e[t] && (a = (100 / e[t].items).toFixed(1)), a;
        }),
        (e.getItemClientSideWidth = function (t, e, a) {
          return Math.round(a / (e + (t.centerMode ? 1 : 0)));
        });
    },
    zwN0: function (t, e, a) {
      'use strict';
      a('R48M'),
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.populateSlidesOnMouseTouchMove = function (t, e, a, c, l, i) {
          var r,
            n,
            o = t.itemWidth,
            s = t.slidesToShow,
            d = t.totalItems,
            h = t.currentSlide,
            p = e.infinite,
            u = !1,
            m = Math.round((a - c) / o),
            f = Math.round((c - a) / o),
            v = a < l;
          if (l < a && m <= s) {
            r = 'right';
            var g = Math.abs(-o * (d - s)),
              b = i - (c - l),
              w = h === d - s;
            (Math.abs(b) <= g || (w && p)) && ((n = b), (u = !0));
          }
          return (
            v &&
              f <= s &&
              ((r = 'left'),
              ((b = i + (l - c)) <= 0 || (0 === h && p)) &&
                ((u = !0), (n = b))),
            { direction: r, nextPosition: n, canContinue: u }
          );
        });
    },
  },
]);
//# sourceMappingURL=component---src-pages-minimal-tsx-b553d0f145dcff3ce803.js.map
