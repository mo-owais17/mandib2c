(this.workbox = this.workbox || {}),
  (this.workbox.cacheableResponse = (function (t) {
    'use strict';
    try {
      self['workbox:cacheable-response:4.3.1'] && _();
    } catch (t) {}
    class s {
      constructor(t = {}) {
        (this.t = t.statuses), (this.s = t.headers);
      }
      isResponseCacheable(t) {
        let s = !0;
        return (
          this.t && (s = this.t.includes(t.status)),
          this.s &&
            s &&
            (s = Object.keys(this.s).some(
              (s) => t.headers.get(s) === this.s[s]
            )),
          s
        );
      }
    }
    return (
      (t.CacheableResponse = s),
      (t.Plugin = class {
        constructor(t) {
          this.i = new s(t);
        }
        cacheWillUpdate({ response: t }) {
          return this.i.isResponseCacheable(t) ? t : null;
        }
      }),
      t
    );
  })({}));
//# sourceMappingURL=workbox-cacheable-response.prod.js.map
