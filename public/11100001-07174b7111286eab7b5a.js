(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    FoNT: function (d, e, a) {
      'use strict';
      a('HQhv'),
        a('6kNP'),
        a('v9g0'),
        a('WevN'),
        a('OeI1'),
        a('n7j8'),
        a('sc67'),
        a('JHok'),
        a('wZFJ'),
        a('pJf4'),
        a('YbXK'),
        a('cFtU'),
        a('E5k/'),
        a('AqHK'),
        a('MIFh'),
        a('rzGZ'),
        a('Dq+y'),
        a('Ggvi'),
        a('U6Bt'),
        a('DrhF'),
        a('q8oJ'),
        a('C9fy'),
        a('8npG'),
        a('LagC'),
        a('pS08'),
        a('R48M'),
        a('m210'),
        a('4DPX');
      var t =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (d) {
                return typeof d;
              }
            : function (d) {
                return d &&
                  'function' == typeof Symbol &&
                  d.constructor === Symbol &&
                  d !== Symbol.prototype
                  ? 'symbol'
                  : typeof d;
              },
        n = function (d, e) {
          if (!(d instanceof e))
            throw new TypeError('Cannot call a class as a function');
        },
        i = (function () {
          function d(d, e) {
            for (var a = 0; a < e.length; a++) {
              var t = e[a];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                'value' in t && (t.writable = !0),
                Object.defineProperty(d, t.key, t);
            }
          }
          return function (e, a, t) {
            return a && d(e.prototype, a), t && d(e, t), e;
          };
        })(),
        r = function (d, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof e
            );
          (d.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: d,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(d, e)
                : (d.__proto__ = e));
        },
        o = function (d, e) {
          if (!d)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ('object' != typeof e && 'function' != typeof e) ? d : e;
        };
      function c() {
        for (var d = arguments.length, e = Array(d), a = 0; a < d; a++)
          e[a] = arguments[a];
        return e.join(' ');
      }
      function u(d) {
        return (
          Boolean(d) &&
          '[object Object]' === Object.prototype.toString.call(d.valueOf())
        );
      }
      function s(d, e) {
        return d(e)
          ? e
          : u(e)
          ? Object.freeze(
              Object.keys(e).reduce(function (a, t) {
                return (a[t] = s(d, e[t])), a;
              }, {})
            )
          : Array.isArray(e)
          ? Object.freeze(
              e.map(function (e) {
                return s(d, e);
              })
            )
          : e;
      }
      function l(d, e) {
        var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          t = d.types[e];
        if (t) return t;
        if (a && 'INTERFACE' === a.kind) return a;
        throw new Error('No type of ' + e + ' found in schema');
      }
      var f = function (d, e) {
          if (!(d instanceof e))
            throw new TypeError('Cannot call a class as a function');
        },
        p = (function () {
          function d(d, e) {
            for (var a = 0; a < e.length; a++) {
              var t = e[a];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                'value' in t && (t.writable = !0),
                Object.defineProperty(d, t.key, t);
            }
          }
          return function (e, a, t) {
            return a && d(e.prototype, a), t && d(e, t), e;
          };
        })(),
        m =
          Object.assign ||
          function (d) {
            for (var e = 1; e < arguments.length; e++) {
              var a = arguments[e];
              for (var t in a)
                Object.prototype.hasOwnProperty.call(a, t) && (d[t] = a[t]);
            }
            return d;
          },
        g = function (d, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                (void 0 === e ? 'undefined' : t(e))
            );
          (d.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: d,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(d, e)
                : (d.__proto__ = e));
        },
        h = function (d, e) {
          if (!d)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e ||
            ('object' !== (void 0 === e ? 'undefined' : t(e)) &&
              'function' != typeof e)
            ? d
            : e;
        },
        y = function (d, e) {
          if (Array.isArray(d)) return d;
          if (Symbol.iterator in Object(d))
            return (function (d, e) {
              var a = [],
                t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, o = d[Symbol.iterator]();
                  !(t = (r = o.next()).done) &&
                  (a.push(r.value), !e || a.length !== e);
                  t = !0
                );
              } catch (c) {
                (n = !0), (i = c);
              } finally {
                try {
                  !t && o.return && o.return();
                } finally {
                  if (n) throw i;
                }
              }
              return a;
            })(d, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        },
        C = function (d) {
          if (Array.isArray(d)) {
            for (var e = 0, a = Array(d.length); e < d.length; e++) a[e] = d[e];
            return a;
          }
          return Array.from(d);
        },
        P = (function () {
          function d(e, a, t) {
            f(this, d),
              (this.name = e),
              (this.type = a),
              (this.defaultValue = t),
              Object.freeze(this);
          }
          return (
            p(d, [
              {
                key: 'toInputValueString',
                value: function () {
                  return '$' + this.name;
                },
              },
              {
                key: 'toString',
                value: function () {
                  var d = this.defaultValue ? ' = ' + V(this.defaultValue) : '';
                  return '$' + this.name + ':' + this.type + d;
                },
              },
            ]),
            d
          );
        })();
      function F(d) {
        return P.prototype.isPrototypeOf(d);
      }
      function A(d, e, a) {
        return new P(d, e, a);
      }
      var v = (function () {
          function d(e) {
            f(this, d), (this.key = e);
          }
          return (
            p(d, [
              {
                key: 'toString',
                value: function () {
                  return this.key;
                },
              },
              {
                key: 'valueOf',
                value: function () {
                  return this.key.valueOf();
                },
              },
            ]),
            d
          );
        })(),
        k = (function () {
          function d(e) {
            f(this, d), (this.value = e);
          }
          return (
            p(d, [
              {
                key: 'toString',
                value: function () {
                  return this.value.toString();
                },
              },
              {
                key: 'valueOf',
                value: function () {
                  return this.value.valueOf();
                },
              },
              {
                key: 'unwrapped',
                get: function () {
                  return this.value;
                },
              },
            ]),
            d
          );
        })();
      function V(d) {
        return P.prototype.isPrototypeOf(d)
          ? d.toInputValueString()
          : v.prototype.isPrototypeOf(d)
          ? String(d)
          : k.prototype.isPrototypeOf(d)
          ? JSON.stringify(d.valueOf())
          : Array.isArray(d)
          ? '[' + c.apply(void 0, C(d.map(V))) + ']'
          : u(d)
          ? I(d, '{', '}')
          : JSON.stringify(d);
      }
      function I(d) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
          t = Object.keys(d).map(function (e) {
            return e + ': ' + V(d[e]);
          });
        return '' + e + c.apply(void 0, C(t)) + a;
      }
      var _ = function () {},
        b = _,
        O = _;
      function S(d) {
        var e = _,
          a = {},
          t = null;
        if (2 === d.length)
          if ('function' == typeof d[1]) {
            var n = y(d, 2);
            (a = n[0]), (e = n[1]);
          } else {
            var i = y(d, 2);
            (a = i[0]), (t = i[1]);
          }
        else
          1 === d.length &&
            (B.prototype.isPrototypeOf(d[0])
              ? (t = d[0])
              : 'function' == typeof d[0]
              ? (e = d[0])
              : (a = d[0]));
        return { options: a, selectionSet: t, callback: e };
      }
      var U = Object.freeze({}),
        E = Object.freeze({}),
        T = (function () {
          function d(e, a, t) {
            f(this, d),
              (this.name = e),
              (this.alias = a.alias || null),
              (this.responseKey = this.alias || this.name),
              (this.args = a.args ? s(F, a.args) : U),
              (this.directives = a.directives ? s(F, a.directives) : E),
              (this.selectionSet = t),
              Object.freeze(this);
          }
          return (
            p(d, [
              {
                key: 'toString',
                value: function () {
                  var d;
                  return (
                    '' +
                    (this.alias ? this.alias + ': ' : '') +
                    this.name +
                    ((d = this.args),
                    Object.keys(d).length ? ' (' + I(d) + ')' : '') +
                    (function (d) {
                      if (!Object.keys(d).length) return '';
                      var e = Object.keys(d).map(function (e) {
                        var a = d[e];
                        return (
                          '@' +
                          e +
                          (a && Object.keys(a).length ? '(' + I(a) + ')' : '')
                        );
                      });
                      return ' ' + c.apply(void 0, C(e));
                    })(this.directives) +
                    this.selectionSet
                  );
                },
              },
            ]),
            d
          );
        })(),
        D = function d() {
          f(this, d);
        },
        x = (function (d) {
          function e(d, a) {
            f(this, e);
            var t = h(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (t.typeName = d), (t.selectionSet = a), Object.freeze(t), t;
          }
          return (
            g(e, d),
            p(e, [
              {
                key: 'toString',
                value: function () {
                  return '... on ' + this.typeName + this.selectionSet;
                },
              },
            ]),
            e
          );
        })(D),
        N = (function (d) {
          function e(d) {
            f(this, e);
            var a = h(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (
              (a.name = d.name),
              (a.selectionSet = d.selectionSet),
              Object.freeze(a),
              a
            );
          }
          return (
            g(e, d),
            p(e, [
              {
                key: 'toString',
                value: function () {
                  return '...' + this.name;
                },
              },
              {
                key: 'toDefinition',
                value: function () {
                  return new M(
                    this.name,
                    this.selectionSet.typeSchema.name,
                    this.selectionSet
                  );
                },
              },
            ]),
            e
          );
        })(D),
        M = (function () {
          function d(e, a, t) {
            f(this, d),
              (this.name = e),
              (this.typeName = a),
              (this.selectionSet = t),
              (this.spread = new N(this)),
              Object.freeze(this);
          }
          return (
            p(d, [
              {
                key: 'toString',
                value: function () {
                  return (
                    'fragment ' +
                    this.name +
                    ' on ' +
                    this.typeName +
                    ' ' +
                    this.selectionSet
                  );
                },
              },
            ]),
            d
          );
        })();
      var B = (function () {
          function d(e, a, t) {
            f(this, d),
              (this.typeSchema = 'string' == typeof a ? l(e, a) : a),
              b(this.typeSchema.name),
              (this.typeBundle = e),
              (this.selections = []),
              t && t(new w(this.typeBundle, this.typeSchema, this.selections)),
              (this.typeSchema.implementsNode ||
                'Node' === this.typeSchema.name) &&
                ((function d(e) {
                  return e.some(function (e) {
                    return T.prototype.isPrototypeOf(e)
                      ? 'id' === e.name
                      : !(
                          !D.prototype.isPrototypeOf(e) ||
                          !e.selectionSet.typeSchema.implementsNode
                        ) && d(e.selectionSet.selections);
                  });
                })(this.selections) ||
                  this.selections.unshift(new T('id', {}, new d(e, 'ID')))),
              'INTERFACE' === this.typeSchema.kind &&
                ((function d(e) {
                  return e.some(function (e) {
                    return T.prototype.isPrototypeOf(e)
                      ? '__typename' === e.name
                      : !(
                          !D.prototype.isPrototypeOf(e) ||
                          !e.selectionSet.typeSchema.implementsNode
                        ) && d(e.selectionSet.selections);
                  });
                })(this.selections) ||
                  this.selections.unshift(
                    new T('__typename', {}, new d(e, 'String'))
                  )),
              (this.selectionsByResponseKey = (function (d) {
                function e(d, e, a) {
                  Array.isArray(d[e]) ? d[e].push(a) : (d[e] = [a]);
                }
                var a = d.reduce(function (d, a) {
                  a.responseKey
                    ? e(d, a.responseKey, a)
                    : Object.keys(
                        a.selectionSet.selectionsByResponseKey
                      ).forEach(function (t) {
                        e(d, t, a);
                      });
                  return d;
                }, {});
                return (
                  Object.keys(a).forEach(function (d) {
                    Object.freeze(a[d]);
                  }),
                  Object.freeze(a)
                );
              })(this.selections)),
              Object.freeze(this.selections),
              Object.freeze(this);
          }
          return (
            p(d, [
              {
                key: 'toString',
                value: function () {
                  return 'SCALAR' === this.typeSchema.kind ||
                    'ENUM' === this.typeSchema.kind
                    ? ''
                    : ' { ' + c(this.selections) + ' }';
                },
              },
            ]),
            d
          );
        })(),
        w = (function () {
          function d(e, a, t) {
            f(this, d),
              (this.typeBundle = e),
              (this.typeSchema = a),
              (this.selections = t);
          }
          return (
            p(d, [
              {
                key: 'hasSelectionWithResponseKey',
                value: function (d) {
                  return this.selections.some(function (e) {
                    return e.responseKey === d;
                  });
                },
              },
              {
                key: 'add',
                value: function (d) {
                  var e = void 0;
                  if ('[object String]' === Object.prototype.toString.call(d)) {
                    O(this.typeSchema.name, d);
                    for (
                      var a = arguments.length,
                        t = Array(a > 1 ? a - 1 : 0),
                        n = 1;
                      n < a;
                      n++
                    )
                      t[n - 1] = arguments[n];
                    e = this.field.apply(this, [d].concat(t));
                  } else
                    T.prototype.isPrototypeOf(d) &&
                      O(this.typeSchema.name, d.name),
                      (e = d);
                  if (
                    e.responseKey &&
                    this.hasSelectionWithResponseKey(e.responseKey)
                  )
                    throw new Error(
                      "The field name or alias '" +
                        e.responseKey +
                        "' has already been added."
                    );
                  this.selections.push(e);
                },
              },
              {
                key: 'field',
                value: function (d) {
                  for (
                    var e = arguments.length,
                      a = Array(e > 1 ? e - 1 : 0),
                      t = 1;
                    t < e;
                    t++
                  )
                    a[t - 1] = arguments[t];
                  var n = S(a),
                    i = n.options,
                    r = n.callback,
                    o = n.selectionSet;
                  if (!o) {
                    if (!this.typeSchema.fieldBaseTypes[d])
                      throw new Error(
                        'No field of name "' +
                          d +
                          '" found on type "' +
                          this.typeSchema.name +
                          '" in schema'
                      );
                    var c = l(
                      this.typeBundle,
                      this.typeSchema.fieldBaseTypes[d]
                    );
                    o = new B(this.typeBundle, c, r);
                  }
                  return new T(d, i, o);
                },
              },
              {
                key: 'inlineFragmentOn',
                value: function (d) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : _,
                    a = void 0;
                  return (
                    (a = B.prototype.isPrototypeOf(e)
                      ? e
                      : new B(this.typeBundle, l(this.typeBundle, d), e)),
                    new x(d, a)
                  );
                },
              },
              {
                key: 'addField',
                value: function (d) {
                  for (
                    var e = arguments.length,
                      a = Array(e > 1 ? e - 1 : 0),
                      t = 1;
                    t < e;
                    t++
                  )
                    a[t - 1] = arguments[t];
                  this.add.apply(this, [d].concat(a));
                },
              },
              {
                key: 'addConnection',
                value: function (d) {
                  for (
                    var e = arguments.length,
                      a = Array(e > 1 ? e - 1 : 0),
                      t = 1;
                    t < e;
                    t++
                  )
                    a[t - 1] = arguments[t];
                  var n = S(a),
                    i = n.options,
                    r = n.callback,
                    o = n.selectionSet;
                  this.add(d, i, function (d) {
                    d.add('pageInfo', {}, function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', {}, function (d) {
                        d.add('cursor'), d.addField('node', {}, o || r);
                      });
                  });
                },
              },
              {
                key: 'addInlineFragmentOn',
                value: function (d) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : _;
                  this.add(this.inlineFragmentOn(d, e));
                },
              },
              {
                key: 'addFragment',
                value: function (d) {
                  this.add(d);
                },
              },
            ]),
            d
          );
        })();
      function L(d) {
        var e = void 0,
          a = void 0,
          t = void 0;
        if (3 === d.length) {
          var n = y(d, 3);
          (e = n[0]), (a = n[1]), (t = n[2]);
        } else
          2 === d.length
            ? ('[object String]' === Object.prototype.toString.call(d[0])
                ? ((e = d[0]), (a = null))
                : Array.isArray(d[0]) && ((a = d[0]), (e = null)),
              (t = d[1]))
            : ((t = d[0]), (e = null));
        return { name: e, variables: a, selectionSetCallback: t };
      }
      var q = (function () {
          function d(e) {
            f(this, d),
              (this.variableDefinitions = e ? [].concat(C(e)) : []),
              Object.freeze(this.variableDefinitions),
              Object.freeze(this);
          }
          return (
            p(d, [
              {
                key: 'toString',
                value: function () {
                  return 0 === this.variableDefinitions.length
                    ? ''
                    : ' (' + c(this.variableDefinitions) + ') ';
                },
              },
            ]),
            d
          );
        })(),
        R = (function () {
          function d(e, a) {
            f(this, d);
            for (
              var t = arguments.length, n = Array(t > 2 ? t - 2 : 0), i = 2;
              i < t;
              i++
            )
              n[i - 2] = arguments[i];
            var r = L(n),
              o = r.name,
              c = r.variables,
              u = r.selectionSetCallback;
            (this.typeBundle = e),
              (this.name = o),
              (this.variableDefinitions = new q(c)),
              (this.operationType = a),
              'query' === a
                ? ((this.selectionSet = new B(e, e.queryType, u)),
                  (this.typeSchema = l(e, e.queryType)))
                : ((this.selectionSet = new B(e, e.mutationType, u)),
                  (this.typeSchema = l(e, e.mutationType))),
              Object.freeze(this);
          }
          return (
            p(d, [
              {
                key: 'toString',
                value: function () {
                  var d = this.name ? ' ' + this.name : '';
                  return (
                    '' +
                    this.operationType +
                    d +
                    this.variableDefinitions +
                    this.selectionSet
                  );
                },
              },
              {
                key: 'isAnonymous',
                get: function () {
                  return !this.name;
                },
              },
            ]),
            d
          );
        })(),
        G = (function (d) {
          function e(d) {
            var a;
            f(this, e);
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              n[i - 1] = arguments[i];
            return h(
              this,
              (a = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                a,
                [this, d, 'query'].concat(n)
              )
            );
          }
          return g(e, d), e;
        })(R),
        j = (function (d) {
          function e(d) {
            var a;
            f(this, e);
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              n[i - 1] = arguments[i];
            return h(
              this,
              (a = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                a,
                [this, d, 'mutation'].concat(n)
              )
            );
          }
          return g(e, d), e;
        })(R);
      function Q(d) {
        return d.isAnonymous;
      }
      function J(d, e) {
        for (
          var a = arguments.length, t = Array(a > 2 ? a - 2 : 0), n = 2;
          n < a;
          n++
        )
          t[n - 2] = arguments[n];
        return R.prototype.isPrototypeOf(t[0])
          ? t[0]
          : 'query' === e
          ? new (Function.prototype.bind.apply(G, [null].concat([d], t)))()
          : new (Function.prototype.bind.apply(j, [null].concat([d], t)))();
      }
      function W(d) {
        return (
          1 !== d.length &&
          ((function (d) {
            return d.some(Q);
          })(d) ||
            (function (d) {
              var e = d.map(function (d) {
                return d.name;
              });
              return e.reduce(function (d, a, t) {
                return d || e.indexOf(a) !== t;
              }, !1);
            })(d))
        );
      }
      var z = (function () {
          function d(e) {
            f(this, d), (this.typeBundle = e), (this.definitions = []);
          }
          return (
            p(d, [
              {
                key: 'toString',
                value: function () {
                  return c(this.definitions);
                },
              },
              {
                key: 'addOperation',
                value: function (d) {
                  for (
                    var e = arguments.length,
                      a = Array(e > 1 ? e - 1 : 0),
                      t = 1;
                    t < e;
                    t++
                  )
                    a[t - 1] = arguments[t];
                  var n = J.apply(void 0, [this.typeBundle, d].concat(a));
                  if (W(this.operations.concat(n)))
                    throw new Error(
                      'All operations must be uniquely named on a multi-operation document'
                    );
                  this.definitions.push(n);
                },
              },
              {
                key: 'addQuery',
                value: function () {
                  for (
                    var d = arguments.length, e = Array(d), a = 0;
                    a < d;
                    a++
                  )
                    e[a] = arguments[a];
                  this.addOperation.apply(this, ['query'].concat(e));
                },
              },
              {
                key: 'addMutation',
                value: function () {
                  for (
                    var d = arguments.length, e = Array(d), a = 0;
                    a < d;
                    a++
                  )
                    e[a] = arguments[a];
                  this.addOperation.apply(this, ['mutation'].concat(e));
                },
              },
              {
                key: 'defineFragment',
                value: function (d, e, a) {
                  if (
                    (function (d, e) {
                      return d.some(function (d) {
                        return d.name === e;
                      });
                    })(this.fragmentDefinitions, d)
                  )
                    throw new Error(
                      'All fragments must be uniquely named on a multi-fragment document'
                    );
                  var t = new B(this.typeBundle, e, a),
                    n = new M(d, e, t);
                  return this.definitions.push(n), n.spread;
                },
              },
              {
                key: 'operations',
                get: function () {
                  return this.definitions.filter(function (d) {
                    return R.prototype.isPrototypeOf(d);
                  });
                },
              },
              {
                key: 'fragmentDefinitions',
                get: function () {
                  return this.definitions.filter(function (d) {
                    return M.prototype.isPrototypeOf(d);
                  });
                },
              },
            ]),
            d
          );
        })(),
        K = function d(e) {
          var a = this;
          f(this, d),
            Object.defineProperty(this, 'attrs', { value: e, enumerable: !1 }),
            Object.keys(this.attrs)
              .filter(function (d) {
                return !(d in a);
              })
              .forEach(function (d) {
                var t = void 0;
                (t =
                  null === e[d]
                    ? {
                        enumerable: !0,
                        get: function () {
                          return null;
                        },
                      }
                    : {
                        enumerable: !0,
                        get: function () {
                          return this.attrs[d].valueOf();
                        },
                      }),
                  Object.defineProperty(a, d, t);
              });
        },
        H = (function () {
          function d() {
            f(this, d), (this.classStore = {});
          }
          return (
            p(d, [
              {
                key: 'registerClassForType',
                value: function (d, e) {
                  this.classStore[e] = d;
                },
              },
              {
                key: 'unregisterClassForType',
                value: function (d) {
                  delete this.classStore[d];
                },
              },
              {
                key: 'classForType',
                value: function (d) {
                  return this.classStore[d] || K;
                },
              },
            ]),
            d
          );
        })();
      function X(d) {
        return (
          '[object Null]' !== Object.prototype.toString.call(d) &&
          '[object Undefined]' !== Object.prototype.toString.call(d)
        );
      }
      function Z(d) {
        return d.selection.selectionSet.typeSchema.implementsNode;
      }
      function $(d, e) {
        var a = e[e.length - 1],
          t = a.selection.args.first,
          n = Object.keys(a.selection.args)
            .filter(function (d) {
              return F(a.selection.args[d]);
            })
            .map(function (d) {
              return a.selection.args[d];
            }),
          i = n.find(function (d) {
            return 'first' === d.name;
          });
        return (
          i || (F(t) ? (i = t) : ((i = A('first', 'Int', t)), n.push(i))),
          [new z(d.selection.selectionSet.typeBundle), n, i]
        );
      }
      function Y(d, e, a, t) {
        var n = e.shift();
        if ((a.push(n.selection.responseKey), e.length))
          d.add(
            n.selection.name,
            { alias: n.selection.alias, args: n.selection.args },
            function (d) {
              Y(d, e, a, t);
            }
          );
        else {
          var i = n.selection.selectionSet.selections
              .find(function (d) {
                return 'edges' === d.name;
              })
              .selectionSet.selections.find(function (d) {
                return 'node' === d.name;
              }),
            r = void 0;
          r = F(n.selection.args.first)
            ? n.selection.args.first
            : A('first', 'Int', n.selection.args.first);
          var o = {
            alias: n.selection.alias,
            args: Object.assign({}, n.selection.args, { after: t, first: r }),
          };
          d.addConnection(n.selection.name, o, i.selectionSet);
        }
      }
      function dd(d) {
        return d.reduce(function (d, e) {
          return (
            N.prototype.isPrototypeOf(e) && d.push(e.toDefinition()),
            d.push.apply(d, C(dd(e.selectionSet.selections))),
            d
          );
        }, []);
      }
      function ed(d, e) {
        var a = (function d(e) {
          return null == e ? null : Z(e) ? e : d(e.parent);
        })(d);
        return a
          ? function () {
              var t,
                n = [],
                i = a.selection.selectionSet.typeSchema,
                r = a.responseData.id,
                o = (function d(e) {
                  return e.selection.selectionSet.typeSchema.implementsNode
                    ? [e]
                    : d(e.parent).concat(e);
                })(d),
                c = $(d, o),
                u = y(c, 2),
                s = u[0],
                l = u[1];
              s.addQuery(l, function (d) {
                n.push('node'),
                  d.add('node', { args: { id: r } }, function (d) {
                    d.addInlineFragmentOn(i.name, function (d) {
                      Y(d, o.slice(1), n, e);
                    });
                  });
              });
              var f = dd(s.operations[0].selectionSet.selections);
              return (t = s.definitions).unshift.apply(t, C(f)), [s, n];
            }
          : function () {
              var a,
                t = [],
                n = (function d(e) {
                  return e.parent ? d(e.parent).concat(e) : [e];
                })(d),
                i = $(d, n),
                r = y(i, 2),
                o = r[0],
                c = r[1];
              o.addQuery(c, function (d) {
                Y(d, n.slice(1), t, e);
              });
              var u = dd(o.operations[0].selectionSet.selections);
              return (a = o.definitions).unshift.apply(a, C(u)), [o, t];
            };
      }
      function ad(d, e) {
        return e !== d.edges[d.edges.length - 1]
          ? new k(!0)
          : d.pageInfo.hasNextPage;
      }
      function td(d, e) {
        return e !== d.edges[0] ? new k(!0) : d.pageInfo.hasPreviousPage;
      }
      function nd(d) {
        return function (e, a) {
          if (
            (function (d) {
              return d.selection.selectionSet.typeSchema.name.endsWith(
                'Connection'
              );
            })(e)
          ) {
            if (
              !(
                a.pageInfo &&
                a.pageInfo.hasOwnProperty('hasNextPage') &&
                a.pageInfo.hasOwnProperty('hasPreviousPage')
              )
            )
              throw new Error(
                'Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".'
              );
            return a.edges.map(function (t) {
              return Object.assign(t.node, {
                nextPageQueryAndPath: ed(e, t.cursor),
                hasNextPage: ad(a, t),
                hasPreviousPage: td(a, t),
                variableValues: d,
              });
            });
          }
          return a;
        };
      }
      var id = (function () {
        function d(e, a) {
          var t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          f(this, d),
            (this.selection = e),
            (this.responseData = a),
            (this.parent = t),
            Object.freeze(this);
        }
        return (
          p(d, [
            {
              key: 'contextForObjectProperty',
              value: function (e) {
                var a = this.selection.selectionSet.selectionsByResponseKey[e],
                  t = a && a[0],
                  n = void 0;
                if (
                  ((n = D.prototype.isPrototypeOf(t)
                    ? new d(t, this.responseData, this.parent)
                    : new d(t, this.responseData[e], this)),
                  !t)
                )
                  throw new Error(
                    'Unexpected response key "' +
                      e +
                      '", not found in selection set: ' +
                      this.selection.selectionSet
                  );
                return T.prototype.isPrototypeOf(t)
                  ? n
                  : n.contextForObjectProperty(e);
              },
            },
            {
              key: 'contextForArrayItem',
              value: function (e) {
                return new d(this.selection, e, this.parent);
              },
            },
          ]),
          d
        );
      })();
      function rd(d, e) {
        var a = d.responseData;
        return (
          Array.isArray(a)
            ? (a = (function (d, e) {
                return d.responseData.map(function (a) {
                  return rd(d.contextForArrayItem(a), e);
                });
              })(d, e))
            : u(a) &&
              (a = (function (d, e) {
                return Object.keys(d.responseData).reduce(function (a, t) {
                  return (a[t] = rd(d.contextForObjectProperty(t), e)), a;
                }, {});
              })(d, e)),
          (function (d, e, a) {
            return d.reduce(function (d, a) {
              return a(e, d);
            }, a);
          })(e, d, a)
        );
      }
      function od(d, e) {
        return (
          X(e) &&
            Z(d) &&
            (e.refetchQuery = function () {
              return new G(d.selection.selectionSet.typeBundle, function (e) {
                e.add('node', { args: { id: d.responseData.id } }, function (
                  e
                ) {
                  e.addInlineFragmentOn(
                    d.selection.selectionSet.typeSchema.name,
                    d.selection.selectionSet
                  );
                });
              });
            }),
          e
        );
      }
      function cd(d) {
        return function (e, a) {
          return u(a)
            ? new (d.classForType(e.selection.selectionSet.typeSchema.name))(a)
            : a;
        };
      }
      function ud(d, e) {
        if (X(e)) {
          if ('SCALAR' === d.selection.selectionSet.typeSchema.kind)
            return new k(e);
          if ('ENUM' === d.selection.selectionSet.typeSchema.kind)
            return new v(e);
        }
        return e;
      }
      function sd(d, e) {
        var a = d.selection.selectionSet,
          t = a.typeBundle,
          n = a.typeSchema;
        return (
          X(e) &&
            (e.__typename ? (e.type = l(t, e.__typename, n)) : (e.type = n)),
          e
        );
      }
      function ld(d) {
        var e = d.classRegistry,
          a = void 0 === e ? new H() : e;
        return [ud, od, nd(d.variableValues), sd, cd(a)];
      }
      function fd(d, e) {
        var a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          t = a.transformers || ld(a),
          n = new id(d, e);
        return rd(n, t);
      }
      var pd = (function () {
          function d(e, a) {
            var t = a.url,
              n = a.fetcherOptions,
              i = a.fetcher,
              r = a.registry,
              o = void 0 === r ? new H() : r;
            if (
              (f(this, d),
              (this.typeBundle = e),
              (this.classRegistry = o),
              t && i)
            )
              throw new Error(
                'Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.'
              );
            if (t)
              this.fetcher = (function (d) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return function (a, t) {
                  return fetch(
                    d,
                    m(
                      { body: JSON.stringify(a), method: 'POST', mode: 'cors' },
                      e,
                      {
                        headers: m(
                          {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                          },
                          e.headers,
                          t
                        ),
                      }
                    )
                  ).then(function (d) {
                    return d.headers
                      .get('content-type')
                      .indexOf('application/json') > -1
                      ? d.json()
                      : d.text().then(function (d) {
                          return { text: d };
                        });
                  });
                };
              })(t, n);
            else {
              if (!i)
                throw new Error(
                  'Invalid arguments: one of `url` or `fetcher` is needed.'
                );
              if (n)
                throw new Error(
                  'Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`'
                );
              this.fetcher = i;
            }
          }
          return (
            p(d, [
              {
                key: 'document',
                value: function () {
                  return new z(this.typeBundle);
                },
              },
              {
                key: 'query',
                value: function () {
                  for (
                    var d = arguments.length, e = Array(d), a = 0;
                    a < d;
                    a++
                  )
                    e[a] = arguments[a];
                  return new (Function.prototype.bind.apply(
                    G,
                    [null].concat([this.typeBundle], e)
                  ))();
                },
              },
              {
                key: 'mutation',
                value: function () {
                  for (
                    var d = arguments.length, e = Array(d), a = 0;
                    a < d;
                    a++
                  )
                    e[a] = arguments[a];
                  return new (Function.prototype.bind.apply(
                    j,
                    [null].concat([this.typeBundle], e)
                  ))();
                },
              },
              {
                key: 'send',
                value: function (d) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    a = this,
                    t =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null,
                    i = void 0,
                    r = {
                      query: (i = Function.prototype.isPrototypeOf(d)
                        ? d(this)
                        : d).toString(),
                    };
                  e && (r.variables = e), Object.assign(r, t);
                  var o = void 0;
                  if (R.prototype.isPrototypeOf(i)) o = i;
                  else {
                    var c = i;
                    if (1 === c.operations.length) o = c.operations[0];
                    else {
                      if (!t.operationName)
                        throw new Error(
                          "\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: 'myFancyQuery'});\n        "
                        );
                      o = c.operations.find(function (d) {
                        return d.name === t.operationName;
                      });
                    }
                  }
                  return this.fetcher(r, n).then(function (d) {
                    return (
                      d.data &&
                        (d.model = fd(o, d.data, {
                          classRegistry: a.classRegistry,
                          variableValues: e,
                        })),
                      d
                    );
                  });
                },
              },
              {
                key: 'fetchNextPage',
                value: function (d, e) {
                  var a = void 0,
                    t = (a = Array.isArray(d)
                      ? d[d.length - 1]
                      : d).nextPageQueryAndPath(),
                    n = y(t, 2),
                    i = n[0],
                    r = n[1],
                    o = void 0;
                  return (
                    (a.variableValues || e) &&
                      (o = Object.assign({}, a.variableValues, e)),
                    this.send(i, o).then(function (d) {
                      return (
                        (d.model = r.reduce(function (d, e) {
                          return d[e];
                        }, d.model)),
                        d
                      );
                    })
                  );
                },
              },
              {
                key: 'fetchAllPages',
                value: function (d, e) {
                  var a = this,
                    t = e.pageSize;
                  return (function (d) {
                    return d && d.length && d[d.length - 1].hasNextPage;
                  })(d)
                    ? this.fetchNextPage(d, { first: t }).then(function (e) {
                        var n = e.model,
                          i = d.concat(n);
                        return a.fetchAllPages(i, { pageSize: t });
                      })
                    : Promise.resolve(d);
                },
              },
              {
                key: 'refetch',
                value: function (d) {
                  if (!d)
                    throw new Error(
                      "'client#refetch' must be called with a non-null instance of a Node."
                    );
                  if (!d.type.implementsNode)
                    throw new Error(
                      "'client#refetch' must be called with a type that implements Node. Received " +
                        d.type.name +
                        '.'
                    );
                  return this.send(d.refetchQuery()).then(function (d) {
                    return d.model.node;
                  });
                },
              },
              {
                key: 'variable',
                value: function (d, e, a) {
                  return A(d, e, a);
                },
              },
              {
                key: 'enum',
                value: function (d) {
                  return (function (d) {
                    return new v(d);
                  })(d);
                },
              },
            ]),
            d
          );
        })(),
        md = (function () {
          function d(e) {
            var a = this;
            n(this, d),
              Object.keys(this.deprecatedProperties).forEach(function (d) {
                e.hasOwnProperty(d) &&
                  (console.warn(
                    '[ShopifyBuy] Config property ' +
                      d +
                      ' is deprecated as of v1.0, please use ' +
                      a.deprecatedProperties[d] +
                      ' instead.'
                  ),
                  (e[a.deprecatedProperties[d]] = e[d]));
              }),
              this.requiredProperties.forEach(function (d) {
                if (!e.hasOwnProperty(d))
                  throw new Error(
                    "new Config() requires the option '" + d + "'"
                  );
                a[d] = e[d];
              }),
              e.hasOwnProperty('apiVersion')
                ? (this.apiVersion = e.apiVersion)
                : (this.apiVersion = '2020-01'),
              e.hasOwnProperty('source') && (this.source = e.source),
              e.hasOwnProperty('language') && (this.language = e.language);
          }
          return (
            i(d, [
              {
                key: 'requiredProperties',
                get: function () {
                  return ['storefrontAccessToken', 'domain'];
                },
              },
              {
                key: 'deprecatedProperties',
                get: function () {
                  return {
                    accessToken: 'storefrontAccessToken',
                    apiKey: 'storefrontAccessToken',
                  };
                },
              },
            ]),
            d
          );
        })(),
        gd = function d(e) {
          n(this, d), (this.graphQLClient = e);
        },
        hd = [{ message: 'an unknown error has occured.' }];
      function yd(d) {
        var e = d.split('.');
        return function (d) {
          var a = d.model,
            t = d.errors;
          return new Promise(function (d, n) {
            try {
              d(
                e.reduce(function (d, e) {
                  return d[e];
                }, a)
              );
            } catch (i) {
              n(t || hd);
            }
          });
        };
      }
      function Cd(d, e) {
        var a = [].concat(d);
        return Promise.all(
          a.reduce(function (d, a) {
            return (
              null === a ||
                (d.push(
                  e
                    .fetchAllPages(a.images, { pageSize: 250 })
                    .then(function (d) {
                      a.attrs.images = d;
                    })
                ),
                d.push(
                  e
                    .fetchAllPages(a.variants, { pageSize: 250 })
                    .then(function (d) {
                      a.attrs.variants = d;
                    })
                )),
              d
            );
          }, [])
        );
      }
      function Pd(d) {
        return function (e) {
          return Cd(e, d).then(function () {
            return e;
          });
        };
      }
      function Fd(d) {
        return function (e) {
          var a = [].concat(e);
          return Promise.all(
            a.reduce(function (e, a) {
              return e.concat(Cd(a.products, d));
            }, [])
          ).then(function () {
            return e;
          });
        };
      }
      var Ad = {
        variantForOptions: function (d, e) {
          return d.variants.find(function (d) {
            return d.selectedOptions.every(function (d) {
              return e[d.name] === d.value.valueOf();
            });
          });
        },
      };
      function vd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.id = d.variable('id', 'ID!')),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.ProductFragment = e.defineFragment(
            'ProductFragment',
            'Product',
            function (d) {
              d.add('id'),
                d.add('availableForSale'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('descriptionHtml'),
                d.add('description'),
                d.add('handle'),
                d.add('productType'),
                d.add('title'),
                d.add('vendor'),
                d.add('publishedAt'),
                d.add('onlineStoreUrl'),
                d.add('options', function (d) {
                  d.add('name'), d.add('values');
                }),
                d.add('images', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'), d.add('src'), d.add('altText');
                        });
                    });
                }),
                d.add('variants', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.VariantFragment);
                        });
                    });
                });
            }
          )),
          e.addQuery([t.__defaultOperation__.id], function (d) {
            d.add(
              'node',
              { args: { id: t.__defaultOperation__.id } },
              function (d) {
                d.addFragment(a.ProductFragment);
              }
            );
          }),
          e
        );
      }
      function kd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.ids = d.variable('ids', '[ID!]!')),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.ProductFragment = e.defineFragment(
            'ProductFragment',
            'Product',
            function (d) {
              d.add('id'),
                d.add('availableForSale'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('descriptionHtml'),
                d.add('description'),
                d.add('handle'),
                d.add('productType'),
                d.add('title'),
                d.add('vendor'),
                d.add('publishedAt'),
                d.add('onlineStoreUrl'),
                d.add('options', function (d) {
                  d.add('name'), d.add('values');
                }),
                d.add('images', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'), d.add('src'), d.add('altText');
                        });
                    });
                }),
                d.add('variants', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.VariantFragment);
                        });
                    });
                });
            }
          )),
          e.addQuery([t.__defaultOperation__.ids], function (d) {
            d.add(
              'nodes',
              { args: { ids: t.__defaultOperation__.ids } },
              function (d) {
                d.addFragment(a.ProductFragment);
              }
            );
          }),
          e
        );
      }
      function Vd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.first = d.variable('first', 'Int!')),
          (t.__defaultOperation__.query = d.variable('query', 'String')),
          (t.__defaultOperation__.sortKey = d.variable(
            'sortKey',
            'ProductSortKeys'
          )),
          (t.__defaultOperation__.reverse = d.variable('reverse', 'Boolean')),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.ProductFragment = e.defineFragment(
            'ProductFragment',
            'Product',
            function (d) {
              d.add('id'),
                d.add('availableForSale'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('descriptionHtml'),
                d.add('description'),
                d.add('handle'),
                d.add('productType'),
                d.add('title'),
                d.add('vendor'),
                d.add('publishedAt'),
                d.add('onlineStoreUrl'),
                d.add('options', function (d) {
                  d.add('name'), d.add('values');
                }),
                d.add('images', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'), d.add('src'), d.add('altText');
                        });
                    });
                }),
                d.add('variants', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.VariantFragment);
                        });
                    });
                });
            }
          )),
          e.addQuery(
            [
              t.__defaultOperation__.first,
              t.__defaultOperation__.query,
              t.__defaultOperation__.sortKey,
              t.__defaultOperation__.reverse,
            ],
            function (d) {
              d.add(
                'products',
                {
                  args: {
                    first: t.__defaultOperation__.first,
                    query: t.__defaultOperation__.query,
                    sortKey: t.__defaultOperation__.sortKey,
                    reverse: t.__defaultOperation__.reverse,
                  },
                },
                function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.ProductFragment);
                        });
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Id(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.handle = d.variable('handle', 'String!')),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.ProductFragment = e.defineFragment(
            'ProductFragment',
            'Product',
            function (d) {
              d.add('id'),
                d.add('availableForSale'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('descriptionHtml'),
                d.add('description'),
                d.add('handle'),
                d.add('productType'),
                d.add('title'),
                d.add('vendor'),
                d.add('publishedAt'),
                d.add('onlineStoreUrl'),
                d.add('options', function (d) {
                  d.add('name'), d.add('values');
                }),
                d.add('images', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'), d.add('src'), d.add('altText');
                        });
                    });
                }),
                d.add('variants', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.VariantFragment);
                        });
                    });
                });
            }
          )),
          e.addQuery([t.__defaultOperation__.handle], function (d) {
            d.add(
              'productByHandle',
              { args: { handle: t.__defaultOperation__.handle } },
              function (d) {
                d.addFragment(a.ProductFragment);
              }
            );
          }),
          e
        );
      }
      var _d = (function (d) {
        function e() {
          return (
            n(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          r(e, d),
          i(e, [
            {
              key: 'fetchAll',
              value: function () {
                var d =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 20;
                return this.graphQLClient
                  .send(Vd, { first: d })
                  .then(yd('products'))
                  .then(Pd(this.graphQLClient));
              },
            },
            {
              key: 'fetch',
              value: function (d) {
                return this.graphQLClient
                  .send(vd, { id: d })
                  .then(yd('node'))
                  .then(Pd(this.graphQLClient));
              },
            },
            {
              key: 'fetchMultiple',
              value: function (d) {
                return this.graphQLClient
                  .send(kd, { ids: d })
                  .then(yd('nodes'))
                  .then(Pd(this.graphQLClient));
              },
            },
            {
              key: 'fetchByHandle',
              value: function (d) {
                return this.graphQLClient
                  .send(Id, { handle: d })
                  .then(yd('productByHandle'))
                  .then(Pd(this.graphQLClient));
              },
            },
            {
              key: 'fetchQuery',
              value: function () {
                var d =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = d.first,
                  a = void 0 === e ? 20 : e,
                  t = d.sortKey,
                  n = void 0 === t ? 'ID' : t,
                  i = d.query,
                  r = d.reverse;
                return this.graphQLClient
                  .send(Vd, { first: a, sortKey: n, query: i, reverse: r })
                  .then(yd('products'))
                  .then(Pd(this.graphQLClient));
              },
            },
            {
              key: 'helpers',
              get: function () {
                return Ad;
              },
            },
          ]),
          e
        );
      })(gd);
      function bd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.id = d.variable('id', 'ID!')),
          (a.CollectionFragment = e.defineFragment(
            'CollectionFragment',
            'Collection',
            function (d) {
              d.add('id'),
                d.add('handle'),
                d.add('description'),
                d.add('descriptionHtml'),
                d.add('updatedAt'),
                d.add('title'),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                });
            }
          )),
          e.addQuery([t.__defaultOperation__.id], function (d) {
            d.add(
              'node',
              { args: { id: t.__defaultOperation__.id } },
              function (d) {
                d.addFragment(a.CollectionFragment);
              }
            );
          }),
          e
        );
      }
      function Od(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.id = d.variable('id', 'ID!')),
          (t.__defaultOperation__.productsFirst = d.variable(
            'productsFirst',
            'Int!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.CollectionFragment = e.defineFragment(
            'CollectionFragment',
            'Collection',
            function (d) {
              d.add('id'),
                d.add('handle'),
                d.add('description'),
                d.add('descriptionHtml'),
                d.add('updatedAt'),
                d.add('title'),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                });
            }
          )),
          (a.ProductFragment = e.defineFragment(
            'ProductFragment',
            'Product',
            function (d) {
              d.add('id'),
                d.add('availableForSale'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('descriptionHtml'),
                d.add('description'),
                d.add('handle'),
                d.add('productType'),
                d.add('title'),
                d.add('vendor'),
                d.add('publishedAt'),
                d.add('onlineStoreUrl'),
                d.add('options', function (d) {
                  d.add('name'), d.add('values');
                }),
                d.add('images', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'), d.add('src'), d.add('altText');
                        });
                    });
                }),
                d.add('variants', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.VariantFragment);
                        });
                    });
                });
            }
          )),
          e.addQuery(
            [t.__defaultOperation__.id, t.__defaultOperation__.productsFirst],
            function (d) {
              d.add(
                'node',
                { args: { id: t.__defaultOperation__.id } },
                function (d) {
                  d.addFragment(a.CollectionFragment),
                    d.addInlineFragmentOn('Collection', function (d) {
                      d.add(
                        'products',
                        {
                          args: { first: t.__defaultOperation__.productsFirst },
                        },
                        function (d) {
                          d.add('pageInfo', function (d) {
                            d.add('hasNextPage'), d.add('hasPreviousPage');
                          }),
                            d.add('edges', function (d) {
                              d.add('cursor'),
                                d.add('node', function (d) {
                                  d.addFragment(a.ProductFragment);
                                });
                            });
                        }
                      );
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Sd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.first = d.variable('first', 'Int!')),
          (t.__defaultOperation__.query = d.variable('query', 'String')),
          (t.__defaultOperation__.sortKey = d.variable(
            'sortKey',
            'CollectionSortKeys'
          )),
          (t.__defaultOperation__.reverse = d.variable('reverse', 'Boolean')),
          (a.CollectionFragment = e.defineFragment(
            'CollectionFragment',
            'Collection',
            function (d) {
              d.add('id'),
                d.add('handle'),
                d.add('description'),
                d.add('descriptionHtml'),
                d.add('updatedAt'),
                d.add('title'),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                });
            }
          )),
          e.addQuery(
            [
              t.__defaultOperation__.first,
              t.__defaultOperation__.query,
              t.__defaultOperation__.sortKey,
              t.__defaultOperation__.reverse,
            ],
            function (d) {
              d.add(
                'collections',
                {
                  args: {
                    first: t.__defaultOperation__.first,
                    query: t.__defaultOperation__.query,
                    sortKey: t.__defaultOperation__.sortKey,
                    reverse: t.__defaultOperation__.reverse,
                  },
                },
                function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.CollectionFragment);
                        });
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Ud(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.first = d.variable('first', 'Int!')),
          (t.__defaultOperation__.query = d.variable('query', 'String')),
          (t.__defaultOperation__.sortKey = d.variable(
            'sortKey',
            'CollectionSortKeys'
          )),
          (t.__defaultOperation__.reverse = d.variable('reverse', 'Boolean')),
          (t.__defaultOperation__.productsFirst = d.variable(
            'productsFirst',
            'Int!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.CollectionFragment = e.defineFragment(
            'CollectionFragment',
            'Collection',
            function (d) {
              d.add('id'),
                d.add('handle'),
                d.add('description'),
                d.add('descriptionHtml'),
                d.add('updatedAt'),
                d.add('title'),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                });
            }
          )),
          (a.ProductFragment = e.defineFragment(
            'ProductFragment',
            'Product',
            function (d) {
              d.add('id'),
                d.add('availableForSale'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('descriptionHtml'),
                d.add('description'),
                d.add('handle'),
                d.add('productType'),
                d.add('title'),
                d.add('vendor'),
                d.add('publishedAt'),
                d.add('onlineStoreUrl'),
                d.add('options', function (d) {
                  d.add('name'), d.add('values');
                }),
                d.add('images', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'), d.add('src'), d.add('altText');
                        });
                    });
                }),
                d.add('variants', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.VariantFragment);
                        });
                    });
                });
            }
          )),
          e.addQuery(
            [
              t.__defaultOperation__.first,
              t.__defaultOperation__.query,
              t.__defaultOperation__.sortKey,
              t.__defaultOperation__.reverse,
              t.__defaultOperation__.productsFirst,
            ],
            function (d) {
              d.add(
                'collections',
                {
                  args: {
                    first: t.__defaultOperation__.first,
                    query: t.__defaultOperation__.query,
                    sortKey: t.__defaultOperation__.sortKey,
                    reverse: t.__defaultOperation__.reverse,
                  },
                },
                function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.CollectionFragment),
                            d.add(
                              'products',
                              {
                                args: {
                                  first: t.__defaultOperation__.productsFirst,
                                },
                              },
                              function (d) {
                                d.add('pageInfo', function (d) {
                                  d.add('hasNextPage'),
                                    d.add('hasPreviousPage');
                                }),
                                  d.add('edges', function (d) {
                                    d.add('cursor'),
                                      d.add('node', function (d) {
                                        d.addFragment(a.ProductFragment);
                                      });
                                  });
                              }
                            );
                        });
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Ed(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.handle = d.variable('handle', 'String!')),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.ProductFragment = e.defineFragment(
            'ProductFragment',
            'Product',
            function (d) {
              d.add('id'),
                d.add('availableForSale'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('descriptionHtml'),
                d.add('description'),
                d.add('handle'),
                d.add('productType'),
                d.add('title'),
                d.add('vendor'),
                d.add('publishedAt'),
                d.add('onlineStoreUrl'),
                d.add('options', function (d) {
                  d.add('name'), d.add('values');
                }),
                d.add('images', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'), d.add('src'), d.add('altText');
                        });
                    });
                }),
                d.add('variants', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.addFragment(a.VariantFragment);
                        });
                    });
                });
            }
          )),
          (a.CollectionFragment = e.defineFragment(
            'CollectionFragment',
            'Collection',
            function (d) {
              d.add('id'),
                d.add('handle'),
                d.add('description'),
                d.add('descriptionHtml'),
                d.add('updatedAt'),
                d.add('title'),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                });
            }
          )),
          (a.CollectionsProductsFragment = e.defineFragment(
            'CollectionsProductsFragment',
            'Collection',
            function (d) {
              d.add('products', { args: { first: 20 } }, function (d) {
                d.add('pageInfo', function (d) {
                  d.add('hasNextPage'), d.add('hasPreviousPage');
                }),
                  d.add('edges', function (d) {
                    d.add('cursor'),
                      d.add('node', function (d) {
                        d.addFragment(a.ProductFragment);
                      });
                  });
              });
            }
          )),
          e.addQuery([t.__defaultOperation__.handle], function (d) {
            d.add(
              'collectionByHandle',
              { args: { handle: t.__defaultOperation__.handle } },
              function (d) {
                d.addFragment(a.CollectionFragment),
                  d.addFragment(a.CollectionsProductsFragment);
              }
            );
          }),
          e
        );
      }
      var Td = (function (d) {
        function e() {
          return (
            n(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          r(e, d),
          i(e, [
            {
              key: 'fetchAll',
              value: function () {
                var d =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 20;
                return this.graphQLClient
                  .send(Sd, { first: d })
                  .then(yd('collections'));
              },
            },
            {
              key: 'fetchAllWithProducts',
              value: function () {
                var d =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = d.first,
                  a = void 0 === e ? 20 : e,
                  t = d.productsFirst,
                  n = void 0 === t ? 20 : t;
                return this.graphQLClient
                  .send(Ud, { first: a, productsFirst: n })
                  .then(yd('collections'))
                  .then(Fd(this.graphQLClient));
              },
            },
            {
              key: 'fetch',
              value: function (d) {
                return this.graphQLClient.send(bd, { id: d }).then(yd('node'));
              },
            },
            {
              key: 'fetchWithProducts',
              value: function (d) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  a = e.productsFirst,
                  t = void 0 === a ? 20 : a;
                return this.graphQLClient
                  .send(Od, { id: d, productsFirst: t })
                  .then(yd('node'))
                  .then(Fd(this.graphQLClient));
              },
            },
            {
              key: 'fetchByHandle',
              value: function (d) {
                return this.graphQLClient
                  .send(Ed, { handle: d })
                  .then(yd('collectionByHandle'));
              },
            },
            {
              key: 'fetchQuery',
              value: function () {
                var d =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = d.first,
                  a = void 0 === e ? 20 : e,
                  t = d.sortKey,
                  n = void 0 === t ? 'ID' : t,
                  i = d.query,
                  r = d.reverse;
                return this.graphQLClient
                  .send(Sd, { first: a, sortKey: n, query: i, reverse: r })
                  .then(yd('collections'));
              },
            },
          ]),
          e
        );
      })(gd);
      function Dd(d) {
        var e = d.document();
        return (
          e.addQuery(function (d) {
            d.add('shop', function (d) {
              d.add('currencyCode'),
                d.add('paymentSettings', function (d) {
                  d.add('enabledPresentmentCurrencies');
                }),
                d.add('description'),
                d.add('moneyFormat'),
                d.add('name'),
                d.add('primaryDomain', function (d) {
                  d.add('host'), d.add('sslEnabled'), d.add('url');
                });
            });
          }),
          e
        );
      }
      function xd(d) {
        var e = d.document(),
          a = {};
        return (
          (a.PolicyFragment = e.defineFragment(
            'PolicyFragment',
            'ShopPolicy',
            function (d) {
              d.add('id'), d.add('title'), d.add('url'), d.add('body');
            }
          )),
          e.addQuery(function (d) {
            d.add('shop', function (d) {
              d.add('privacyPolicy', function (d) {
                d.addFragment(a.PolicyFragment);
              }),
                d.add('termsOfService', function (d) {
                  d.addFragment(a.PolicyFragment);
                }),
                d.add('refundPolicy', function (d) {
                  d.addFragment(a.PolicyFragment);
                });
            });
          }),
          e
        );
      }
      var Nd = (function (d) {
        function e() {
          return (
            n(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          r(e, d),
          i(e, [
            {
              key: 'fetchInfo',
              value: function () {
                return this.graphQLClient.send(Dd).then(yd('shop'));
              },
            },
            {
              key: 'fetchPolicies',
              value: function () {
                return this.graphQLClient.send(xd).then(yd('shop'));
              },
            },
          ]),
          e
        );
      })(gd);
      function Md(d, e) {
        return function (a) {
          var t = a.data,
            n = void 0 === t ? {} : t,
            i = a.errors,
            r = a.model,
            o = void 0 === r ? {} : r,
            c = n[d],
            u = o[d];
          return c && c.checkout
            ? e
                .fetchAllPages(u.checkout.lineItems, { pageSize: 250 })
                .then(function (d) {
                  return (
                    (u.checkout.attrs.lineItems = d),
                    (u.checkout.errors = i),
                    (u.checkout.userErrors = u.userErrors),
                    u.checkout
                  );
                })
            : i && i.length
            ? Promise.reject(new Error(JSON.stringify(i)))
            : c && c.checkoutUserErrors && c.checkoutUserErrors.length
            ? Promise.reject(new Error(JSON.stringify(c.checkoutUserErrors)))
            : c && c.userErrors && c.userErrors.length
            ? Promise.reject(new Error(JSON.stringify(c.userErrors)))
            : Promise.reject(
                new Error(
                  'The ' + d + ' mutation failed due to an unknown error.'
                )
              );
        };
      }
      function Bd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.id = d.variable('id', 'ID!')),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addQuery([t.__defaultOperation__.id], function (d) {
            d.add(
              'node',
              { args: { id: t.__defaultOperation__.id } },
              function (d) {
                d.addFragment(a.CheckoutFragment);
              }
            );
          }),
          e
        );
      }
      function wd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.input = d.variable(
            'input',
            'CheckoutCreateInput!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation([t.__defaultOperation__.input], function (d) {
            d.add(
              'checkoutCreate',
              { args: { input: t.__defaultOperation__.input } },
              function (d) {
                d.add('userErrors', function (d) {
                  d.addFragment(a.UserErrorFragment);
                }),
                  d.add('checkoutUserErrors', function (d) {
                    d.addFragment(a.CheckoutUserErrorFragment);
                  }),
                  d.add('checkout', function (d) {
                    d.addFragment(a.CheckoutFragment);
                  });
              }
            );
          }),
          e
        );
      }
      function Ld(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.checkoutId = d.variable('checkoutId', 'ID!')),
          (t.__defaultOperation__.lineItems = d.variable(
            'lineItems',
            '[CheckoutLineItemInput!]!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            [
              t.__defaultOperation__.checkoutId,
              t.__defaultOperation__.lineItems,
            ],
            function (d) {
              d.add(
                'checkoutLineItemsAdd',
                {
                  args: {
                    checkoutId: t.__defaultOperation__.checkoutId,
                    lineItems: t.__defaultOperation__.lineItems,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function qd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.checkoutId = d.variable('checkoutId', 'ID!')),
          (t.__defaultOperation__.lineItemIds = d.variable(
            'lineItemIds',
            '[ID!]!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            [
              t.__defaultOperation__.checkoutId,
              t.__defaultOperation__.lineItemIds,
            ],
            function (d) {
              d.add(
                'checkoutLineItemsRemove',
                {
                  args: {
                    checkoutId: t.__defaultOperation__.checkoutId,
                    lineItemIds: t.__defaultOperation__.lineItemIds,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Rd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.checkoutId = d.variable('checkoutId', 'ID!')),
          (t.__defaultOperation__.lineItems = d.variable(
            'lineItems',
            '[CheckoutLineItemInput!]!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            [
              t.__defaultOperation__.checkoutId,
              t.__defaultOperation__.lineItems,
            ],
            function (d) {
              d.add(
                'checkoutLineItemsReplace',
                {
                  args: {
                    checkoutId: t.__defaultOperation__.checkoutId,
                    lineItems: t.__defaultOperation__.lineItems,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.CheckoutUserErrorFragment);
                  }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Gd(d) {
        var e = d.document(),
          a = {},
          t = { __defaultOperation__: {} };
        return (
          (t.__defaultOperation__.checkoutId = d.variable('checkoutId', 'ID!')),
          (t.__defaultOperation__.lineItems = d.variable(
            'lineItems',
            '[CheckoutLineItemUpdateInput!]!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            [
              t.__defaultOperation__.checkoutId,
              t.__defaultOperation__.lineItems,
            ],
            function (d) {
              d.add(
                'checkoutLineItemsUpdate',
                {
                  args: {
                    checkoutId: t.__defaultOperation__.checkoutId,
                    lineItems: t.__defaultOperation__.lineItems,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function jd(d) {
        var e = d.document(),
          a = {},
          t = { checkoutAttributesUpdateV2: {} };
        return (
          (t.checkoutAttributesUpdateV2.checkoutId = d.variable(
            'checkoutId',
            'ID!'
          )),
          (t.checkoutAttributesUpdateV2.input = d.variable(
            'input',
            'CheckoutAttributesUpdateV2Input!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            'checkoutAttributesUpdateV2',
            [
              t.checkoutAttributesUpdateV2.checkoutId,
              t.checkoutAttributesUpdateV2.input,
            ],
            function (d) {
              d.add(
                'checkoutAttributesUpdateV2',
                {
                  args: {
                    checkoutId: t.checkoutAttributesUpdateV2.checkoutId,
                    input: t.checkoutAttributesUpdateV2.input,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Qd(d) {
        var e = d.document(),
          a = {},
          t = { checkoutDiscountCodeApplyV2: {} };
        return (
          (t.checkoutDiscountCodeApplyV2.discountCode = d.variable(
            'discountCode',
            'String!'
          )),
          (t.checkoutDiscountCodeApplyV2.checkoutId = d.variable(
            'checkoutId',
            'ID!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            'checkoutDiscountCodeApplyV2',
            [
              t.checkoutDiscountCodeApplyV2.discountCode,
              t.checkoutDiscountCodeApplyV2.checkoutId,
            ],
            function (d) {
              d.add(
                'checkoutDiscountCodeApplyV2',
                {
                  args: {
                    discountCode: t.checkoutDiscountCodeApplyV2.discountCode,
                    checkoutId: t.checkoutDiscountCodeApplyV2.checkoutId,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Jd(d) {
        var e = d.document(),
          a = {},
          t = { checkoutDiscountCodeRemove: {} };
        return (
          (t.checkoutDiscountCodeRemove.checkoutId = d.variable(
            'checkoutId',
            'ID!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            'checkoutDiscountCodeRemove',
            [t.checkoutDiscountCodeRemove.checkoutId],
            function (d) {
              d.add(
                'checkoutDiscountCodeRemove',
                {
                  args: { checkoutId: t.checkoutDiscountCodeRemove.checkoutId },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Wd(d) {
        var e = d.document(),
          a = {},
          t = { checkoutGiftCardsAppend: {} };
        return (
          (t.checkoutGiftCardsAppend.giftCardCodes = d.variable(
            'giftCardCodes',
            '[String!]!'
          )),
          (t.checkoutGiftCardsAppend.checkoutId = d.variable(
            'checkoutId',
            'ID!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            'checkoutGiftCardsAppend',
            [
              t.checkoutGiftCardsAppend.giftCardCodes,
              t.checkoutGiftCardsAppend.checkoutId,
            ],
            function (d) {
              d.add(
                'checkoutGiftCardsAppend',
                {
                  args: {
                    giftCardCodes: t.checkoutGiftCardsAppend.giftCardCodes,
                    checkoutId: t.checkoutGiftCardsAppend.checkoutId,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function zd(d) {
        var e = d.document(),
          a = {},
          t = { checkoutGiftCardRemoveV2: {} };
        return (
          (t.checkoutGiftCardRemoveV2.appliedGiftCardId = d.variable(
            'appliedGiftCardId',
            'ID!'
          )),
          (t.checkoutGiftCardRemoveV2.checkoutId = d.variable(
            'checkoutId',
            'ID!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            'checkoutGiftCardRemoveV2',
            [
              t.checkoutGiftCardRemoveV2.appliedGiftCardId,
              t.checkoutGiftCardRemoveV2.checkoutId,
            ],
            function (d) {
              d.add(
                'checkoutGiftCardRemoveV2',
                {
                  args: {
                    appliedGiftCardId:
                      t.checkoutGiftCardRemoveV2.appliedGiftCardId,
                    checkoutId: t.checkoutGiftCardRemoveV2.checkoutId,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Kd(d) {
        var e = d.document(),
          a = {},
          t = { checkoutEmailUpdateV2: {} };
        return (
          (t.checkoutEmailUpdateV2.checkoutId = d.variable(
            'checkoutId',
            'ID!'
          )),
          (t.checkoutEmailUpdateV2.email = d.variable('email', 'String!')),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            'checkoutEmailUpdateV2',
            [t.checkoutEmailUpdateV2.checkoutId, t.checkoutEmailUpdateV2.email],
            function (d) {
              d.add(
                'checkoutEmailUpdateV2',
                {
                  args: {
                    checkoutId: t.checkoutEmailUpdateV2.checkoutId,
                    email: t.checkoutEmailUpdateV2.email,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      function Hd(d) {
        var e = d.document(),
          a = {},
          t = { checkoutShippingAddressUpdateV2: {} };
        return (
          (t.checkoutShippingAddressUpdateV2.shippingAddress = d.variable(
            'shippingAddress',
            'MailingAddressInput!'
          )),
          (t.checkoutShippingAddressUpdateV2.checkoutId = d.variable(
            'checkoutId',
            'ID!'
          )),
          (a.VariantFragment = e.defineFragment(
            'VariantFragment',
            'ProductVariant',
            function (d) {
              d.add('id'),
                d.add('title'),
                d.add('price'),
                d.add('priceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentPrices', { args: { first: 20 } }, function (
                  d
                ) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('node', function (d) {
                        d.add('price', function (d) {
                          d.add('amount'), d.add('currencyCode');
                        }),
                          d.add('compareAtPrice', function (d) {
                            d.add('amount'), d.add('currencyCode');
                          });
                      });
                    });
                }),
                d.add('weight'),
                d.add('availableForSale', { alias: 'available' }),
                d.add('sku'),
                d.add('compareAtPrice'),
                d.add('compareAtPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('image', function (d) {
                  d.add('id'),
                    d.add('originalSrc', { alias: 'src' }),
                    d.add('altText');
                }),
                d.add('selectedOptions', function (d) {
                  d.add('name'), d.add('value');
                }),
                d.add('unitPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('unitPriceMeasurement', function (d) {
                  d.add('measuredType'),
                    d.add('quantityUnit'),
                    d.add('quantityValue'),
                    d.add('referenceUnit'),
                    d.add('referenceValue');
                });
            }
          )),
          (a.DiscountApplicationFragment = e.defineFragment(
            'DiscountApplicationFragment',
            'DiscountApplication',
            function (d) {
              d.add('targetSelection'),
                d.add('allocationMethod'),
                d.add('targetType'),
                d.add('value', function (d) {
                  d.addInlineFragmentOn('MoneyV2', function (d) {
                    d.add('amount'), d.add('currencyCode');
                  }),
                    d.addInlineFragmentOn('PricingPercentageValue', function (
                      d
                    ) {
                      d.add('percentage');
                    });
                }),
                d.addInlineFragmentOn('ManualDiscountApplication', function (
                  d
                ) {
                  d.add('title'), d.add('description');
                }),
                d.addInlineFragmentOn('DiscountCodeApplication', function (d) {
                  d.add('code'), d.add('applicable');
                }),
                d.addInlineFragmentOn('ScriptDiscountApplication', function (
                  d
                ) {
                  d.add('description');
                }),
                d.addInlineFragmentOn('AutomaticDiscountApplication', function (
                  d
                ) {
                  d.add('title');
                });
            }
          )),
          (a.AppliedGiftCardFragment = e.defineFragment(
            'AppliedGiftCardFragment',
            'AppliedGiftCard',
            function (d) {
              d.add('amountUsedV2', function (d) {
                d.add('amount'), d.add('currencyCode');
              }),
                d.add('balanceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('presentmentAmountUsed', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('id'),
                d.add('lastCharacters');
            }
          )),
          (a.VariantWithProductFragment = e.defineFragment(
            'VariantWithProductFragment',
            'ProductVariant',
            function (d) {
              d.addFragment(a.VariantFragment),
                d.add('product', function (d) {
                  d.add('id'), d.add('handle');
                });
            }
          )),
          (a.UserErrorFragment = e.defineFragment(
            'UserErrorFragment',
            'UserError',
            function (d) {
              d.add('field'), d.add('message');
            }
          )),
          (a.CheckoutUserErrorFragment = e.defineFragment(
            'CheckoutUserErrorFragment',
            'CheckoutUserError',
            function (d) {
              d.add('field'), d.add('message'), d.add('code');
            }
          )),
          (a.MailingAddressFragment = e.defineFragment(
            'MailingAddressFragment',
            'MailingAddress',
            function (d) {
              d.add('id'),
                d.add('address1'),
                d.add('address2'),
                d.add('city'),
                d.add('company'),
                d.add('country'),
                d.add('firstName'),
                d.add('formatted'),
                d.add('lastName'),
                d.add('latitude'),
                d.add('longitude'),
                d.add('phone'),
                d.add('province'),
                d.add('zip'),
                d.add('name'),
                d.add('countryCodeV2', { alias: 'countryCode' }),
                d.add('provinceCode');
            }
          )),
          (a.CheckoutFragment = e.defineFragment(
            'CheckoutFragment',
            'Checkout',
            function (d) {
              d.add('id'),
                d.add('ready'),
                d.add('requiresShipping'),
                d.add('note'),
                d.add('paymentDue'),
                d.add('paymentDueV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('webUrl'),
                d.add('orderStatusUrl'),
                d.add('taxExempt'),
                d.add('taxesIncluded'),
                d.add('currencyCode'),
                d.add('totalTax'),
                d.add('totalTaxV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('lineItemsSubtotalPrice', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('subtotalPrice'),
                d.add('subtotalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('totalPrice'),
                d.add('totalPriceV2', function (d) {
                  d.add('amount'), d.add('currencyCode');
                }),
                d.add('completedAt'),
                d.add('createdAt'),
                d.add('updatedAt'),
                d.add('email'),
                d.add(
                  'discountApplications',
                  { args: { first: 10 } },
                  function (d) {
                    d.add('pageInfo', function (d) {
                      d.add('hasNextPage'), d.add('hasPreviousPage');
                    }),
                      d.add('edges', function (d) {
                        d.add('node', function (d) {
                          d.addFragment(a.DiscountApplicationFragment);
                        });
                      });
                  }
                ),
                d.add('appliedGiftCards', function (d) {
                  d.addFragment(a.AppliedGiftCardFragment);
                }),
                d.add('shippingAddress', function (d) {
                  d.addFragment(a.MailingAddressFragment);
                }),
                d.add('shippingLine', function (d) {
                  d.add('handle'),
                    d.add('price'),
                    d.add('priceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('title');
                }),
                d.add('customAttributes', function (d) {
                  d.add('key'), d.add('value');
                }),
                d.add('order', function (d) {
                  d.add('id'),
                    d.add('processedAt'),
                    d.add('orderNumber'),
                    d.add('subtotalPrice'),
                    d.add('subtotalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalShippingPrice'),
                    d.add('totalShippingPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalTax'),
                    d.add('totalTaxV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('totalPrice'),
                    d.add('totalPriceV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('currencyCode'),
                    d.add('totalRefunded'),
                    d.add('totalRefundedV2', function (d) {
                      d.add('amount'), d.add('currencyCode');
                    }),
                    d.add('customerUrl'),
                    d.add('shippingAddress', function (d) {
                      d.addFragment(a.MailingAddressFragment);
                    }),
                    d.add('lineItems', { args: { first: 250 } }, function (d) {
                      d.add('pageInfo', function (d) {
                        d.add('hasNextPage'), d.add('hasPreviousPage');
                      }),
                        d.add('edges', function (d) {
                          d.add('cursor'),
                            d.add('node', function (d) {
                              d.add('title'),
                                d.add('variant', function (d) {
                                  d.addFragment(a.VariantWithProductFragment);
                                }),
                                d.add('quantity'),
                                d.add('customAttributes', function (d) {
                                  d.add('key'), d.add('value');
                                });
                            });
                        });
                    });
                }),
                d.add('lineItems', { args: { first: 250 } }, function (d) {
                  d.add('pageInfo', function (d) {
                    d.add('hasNextPage'), d.add('hasPreviousPage');
                  }),
                    d.add('edges', function (d) {
                      d.add('cursor'),
                        d.add('node', function (d) {
                          d.add('id'),
                            d.add('title'),
                            d.add('variant', function (d) {
                              d.addFragment(a.VariantWithProductFragment);
                            }),
                            d.add('quantity'),
                            d.add('customAttributes', function (d) {
                              d.add('key'), d.add('value');
                            }),
                            d.add('discountAllocations', function (d) {
                              d.add('allocatedAmount', function (d) {
                                d.add('amount'), d.add('currencyCode');
                              }),
                                d.add('discountApplication', function (d) {
                                  d.addFragment(a.DiscountApplicationFragment);
                                });
                            });
                        });
                    });
                });
            }
          )),
          e.addMutation(
            'checkoutShippingAddressUpdateV2',
            [
              t.checkoutShippingAddressUpdateV2.shippingAddress,
              t.checkoutShippingAddressUpdateV2.checkoutId,
            ],
            function (d) {
              d.add(
                'checkoutShippingAddressUpdateV2',
                {
                  args: {
                    shippingAddress:
                      t.checkoutShippingAddressUpdateV2.shippingAddress,
                    checkoutId: t.checkoutShippingAddressUpdateV2.checkoutId,
                  },
                },
                function (d) {
                  d.add('userErrors', function (d) {
                    d.addFragment(a.UserErrorFragment);
                  }),
                    d.add('checkoutUserErrors', function (d) {
                      d.addFragment(a.CheckoutUserErrorFragment);
                    }),
                    d.add('checkout', function (d) {
                      d.addFragment(a.CheckoutFragment);
                    });
                }
              );
            }
          ),
          e
        );
      }
      var Xd = (function (d) {
          function e() {
            return (
              n(this, e),
              o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            r(e, d),
            i(e, [
              {
                key: 'fetch',
                value: function (d) {
                  var e = this;
                  return this.graphQLClient
                    .send(Bd, { id: d })
                    .then(yd('node'))
                    .then(function (d) {
                      return d
                        ? e.graphQLClient
                            .fetchAllPages(d.lineItems, { pageSize: 250 })
                            .then(function (e) {
                              return (d.attrs.lineItems = e), d;
                            })
                        : null;
                    });
                },
              },
              {
                key: 'create',
                value: function () {
                  var d =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return this.graphQLClient
                    .send(wd, { input: d })
                    .then(Md('checkoutCreate', this.graphQLClient));
                },
              },
              {
                key: 'updateAttributes',
                value: function (d) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return this.graphQLClient
                    .send(jd, { checkoutId: d, input: e })
                    .then(Md('checkoutAttributesUpdateV2', this.graphQLClient));
                },
              },
              {
                key: 'updateEmail',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(Kd, { checkoutId: d, email: e })
                    .then(Md('checkoutEmailUpdateV2', this.graphQLClient));
                },
              },
              {
                key: 'addLineItems',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(Ld, { checkoutId: d, lineItems: e })
                    .then(Md('checkoutLineItemsAdd', this.graphQLClient));
                },
              },
              {
                key: 'addDiscount',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(Qd, { checkoutId: d, discountCode: e })
                    .then(
                      Md('checkoutDiscountCodeApplyV2', this.graphQLClient)
                    );
                },
              },
              {
                key: 'removeDiscount',
                value: function (d) {
                  return this.graphQLClient
                    .send(Jd, { checkoutId: d })
                    .then(Md('checkoutDiscountCodeRemove', this.graphQLClient));
                },
              },
              {
                key: 'addGiftCards',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(Wd, { checkoutId: d, giftCardCodes: e })
                    .then(Md('checkoutGiftCardsAppend', this.graphQLClient));
                },
              },
              {
                key: 'removeGiftCard',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(zd, { checkoutId: d, appliedGiftCardId: e })
                    .then(Md('checkoutGiftCardRemoveV2', this.graphQLClient));
                },
              },
              {
                key: 'removeLineItems',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(qd, { checkoutId: d, lineItemIds: e })
                    .then(Md('checkoutLineItemsRemove', this.graphQLClient));
                },
              },
              {
                key: 'replaceLineItems',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(Rd, { checkoutId: d, lineItems: e })
                    .then(Md('checkoutLineItemsReplace', this.graphQLClient));
                },
              },
              {
                key: 'updateLineItems',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(Gd, { checkoutId: d, lineItems: e })
                    .then(Md('checkoutLineItemsUpdate', this.graphQLClient));
                },
              },
              {
                key: 'updateShippingAddress',
                value: function (d, e) {
                  return this.graphQLClient
                    .send(Hd, { checkoutId: d, shippingAddress: e })
                    .then(
                      Md('checkoutShippingAddressUpdateV2', this.graphQLClient)
                    );
                },
              },
            ]),
            e
          );
        })(gd),
        Zd = {
          imageForSize: function (d, e) {
            var a = e.maxWidth,
              t = e.maxHeight,
              n = d.src.split('?'),
              i = n[0],
              r = n[1] ? '?' + n[1] : '',
              o = i.split('.'),
              c = o.length - 2;
            return (o[c] = o[c] + '_' + a + 'x' + t), '' + o.join('.') + r;
          },
        },
        $d = (function (d) {
          function e() {
            return (
              n(this, e),
              o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            r(e, d),
            i(e, [
              {
                key: 'helpers',
                get: function () {
                  return Zd;
                },
              },
            ]),
            e
          );
        })(gd),
        Yd = { types: {} };
      (Yd.types.Boolean = { name: 'Boolean', kind: 'SCALAR' }),
        (Yd.types.String = { name: 'String', kind: 'SCALAR' }),
        (Yd.types.QueryRoot = {
          name: 'QueryRoot',
          kind: 'OBJECT',
          fieldBaseTypes: {
            collectionByHandle: 'Collection',
            collections: 'CollectionConnection',
            node: 'Node',
            nodes: 'Node',
            productByHandle: 'Product',
            products: 'ProductConnection',
            shop: 'Shop',
          },
          implementsNode: !1,
        }),
        (Yd.types.Node = {
          name: 'Node',
          kind: 'INTERFACE',
          fieldBaseTypes: {},
          possibleTypes: [
            'AppliedGiftCard',
            'Article',
            'Blog',
            'Checkout',
            'CheckoutLineItem',
            'Collection',
            'Comment',
            'ExternalVideo',
            'MailingAddress',
            'MediaImage',
            'Metafield',
            'Model3d',
            'Order',
            'Page',
            'Payment',
            'Product',
            'ProductOption',
            'ProductVariant',
            'ShopPolicy',
            'Video',
          ],
        }),
        (Yd.types.ID = { name: 'ID', kind: 'SCALAR' }),
        (Yd.types.DateTime = { name: 'DateTime', kind: 'SCALAR' }),
        (Yd.types.MailingAddress = {
          name: 'MailingAddress',
          kind: 'OBJECT',
          fieldBaseTypes: {
            address1: 'String',
            address2: 'String',
            city: 'String',
            company: 'String',
            country: 'String',
            countryCodeV2: 'CountryCode',
            firstName: 'String',
            formatted: 'String',
            id: 'ID',
            lastName: 'String',
            latitude: 'Float',
            longitude: 'Float',
            name: 'String',
            phone: 'String',
            province: 'String',
            provinceCode: 'String',
            zip: 'String',
          },
          implementsNode: !0,
        }),
        (Yd.types.Float = { name: 'Float', kind: 'SCALAR' }),
        (Yd.types.CountryCode = { name: 'CountryCode', kind: 'ENUM' }),
        (Yd.types.PageInfo = {
          name: 'PageInfo',
          kind: 'OBJECT',
          fieldBaseTypes: {
            hasNextPage: 'Boolean',
            hasPreviousPage: 'Boolean',
          },
          implementsNode: !1,
        }),
        (Yd.types.Int = { name: 'Int', kind: 'SCALAR' }),
        (Yd.types.Order = {
          name: 'Order',
          kind: 'OBJECT',
          fieldBaseTypes: {
            currencyCode: 'CurrencyCode',
            customerUrl: 'URL',
            id: 'ID',
            lineItems: 'OrderLineItemConnection',
            orderNumber: 'Int',
            processedAt: 'DateTime',
            shippingAddress: 'MailingAddress',
            subtotalPrice: 'Money',
            subtotalPriceV2: 'MoneyV2',
            totalPrice: 'Money',
            totalPriceV2: 'MoneyV2',
            totalRefunded: 'Money',
            totalRefundedV2: 'MoneyV2',
            totalShippingPrice: 'Money',
            totalShippingPriceV2: 'MoneyV2',
            totalTax: 'Money',
            totalTaxV2: 'MoneyV2',
          },
          implementsNode: !0,
        }),
        (Yd.types.Money = { name: 'Money', kind: 'SCALAR' }),
        (Yd.types.MoneyV2 = {
          name: 'MoneyV2',
          kind: 'OBJECT',
          fieldBaseTypes: { amount: 'Decimal', currencyCode: 'CurrencyCode' },
          implementsNode: !1,
        }),
        (Yd.types.Decimal = { name: 'Decimal', kind: 'SCALAR' }),
        (Yd.types.CurrencyCode = { name: 'CurrencyCode', kind: 'ENUM' }),
        (Yd.types.URL = { name: 'URL', kind: 'SCALAR' }),
        (Yd.types.DiscountAllocation = {
          name: 'DiscountAllocation',
          kind: 'OBJECT',
          fieldBaseTypes: {
            allocatedAmount: 'MoneyV2',
            discountApplication: 'DiscountApplication',
          },
          implementsNode: !1,
        }),
        (Yd.types.DiscountApplication = {
          name: 'DiscountApplication',
          kind: 'INTERFACE',
          fieldBaseTypes: {
            allocationMethod: 'DiscountApplicationAllocationMethod',
            targetSelection: 'DiscountApplicationTargetSelection',
            targetType: 'DiscountApplicationTargetType',
            value: 'PricingValue',
          },
          possibleTypes: [
            'AutomaticDiscountApplication',
            'DiscountCodeApplication',
            'ManualDiscountApplication',
            'ScriptDiscountApplication',
          ],
        }),
        (Yd.types.DiscountApplicationAllocationMethod = {
          name: 'DiscountApplicationAllocationMethod',
          kind: 'ENUM',
        }),
        (Yd.types.DiscountApplicationTargetSelection = {
          name: 'DiscountApplicationTargetSelection',
          kind: 'ENUM',
        }),
        (Yd.types.DiscountApplicationTargetType = {
          name: 'DiscountApplicationTargetType',
          kind: 'ENUM',
        }),
        (Yd.types.PricingValue = { name: 'PricingValue', kind: 'UNION' }),
        (Yd.types.PricingPercentageValue = {
          name: 'PricingPercentageValue',
          kind: 'OBJECT',
          fieldBaseTypes: { percentage: 'Float' },
          implementsNode: !1,
        }),
        (Yd.types.OrderLineItemConnection = {
          name: 'OrderLineItemConnection',
          kind: 'OBJECT',
          fieldBaseTypes: { edges: 'OrderLineItemEdge', pageInfo: 'PageInfo' },
          implementsNode: !1,
        }),
        (Yd.types.OrderLineItemEdge = {
          name: 'OrderLineItemEdge',
          kind: 'OBJECT',
          fieldBaseTypes: { cursor: 'String', node: 'OrderLineItem' },
          implementsNode: !1,
        }),
        (Yd.types.OrderLineItem = {
          name: 'OrderLineItem',
          kind: 'OBJECT',
          fieldBaseTypes: {
            customAttributes: 'Attribute',
            quantity: 'Int',
            title: 'String',
            variant: 'ProductVariant',
          },
          implementsNode: !1,
        }),
        (Yd.types.ProductVariant = {
          name: 'ProductVariant',
          kind: 'OBJECT',
          fieldBaseTypes: {
            availableForSale: 'Boolean',
            compareAtPrice: 'Money',
            compareAtPriceV2: 'MoneyV2',
            id: 'ID',
            image: 'Image',
            presentmentPrices: 'ProductVariantPricePairConnection',
            price: 'Money',
            priceV2: 'MoneyV2',
            product: 'Product',
            selectedOptions: 'SelectedOption',
            sku: 'String',
            title: 'String',
            unitPrice: 'MoneyV2',
            unitPriceMeasurement: 'UnitPriceMeasurement',
            weight: 'Float',
          },
          implementsNode: !0,
        }),
        (Yd.types.Product = {
          name: 'Product',
          kind: 'OBJECT',
          fieldBaseTypes: {
            availableForSale: 'Boolean',
            createdAt: 'DateTime',
            description: 'String',
            descriptionHtml: 'HTML',
            handle: 'String',
            id: 'ID',
            images: 'ImageConnection',
            onlineStoreUrl: 'URL',
            options: 'ProductOption',
            productType: 'String',
            publishedAt: 'DateTime',
            title: 'String',
            updatedAt: 'DateTime',
            variants: 'ProductVariantConnection',
            vendor: 'String',
          },
          implementsNode: !0,
        }),
        (Yd.types.CollectionConnection = {
          name: 'CollectionConnection',
          kind: 'OBJECT',
          fieldBaseTypes: { edges: 'CollectionEdge', pageInfo: 'PageInfo' },
          implementsNode: !1,
        }),
        (Yd.types.CollectionEdge = {
          name: 'CollectionEdge',
          kind: 'OBJECT',
          fieldBaseTypes: { cursor: 'String', node: 'Collection' },
          implementsNode: !1,
        }),
        (Yd.types.Collection = {
          name: 'Collection',
          kind: 'OBJECT',
          fieldBaseTypes: {
            description: 'String',
            descriptionHtml: 'HTML',
            handle: 'String',
            id: 'ID',
            image: 'Image',
            products: 'ProductConnection',
            title: 'String',
            updatedAt: 'DateTime',
          },
          implementsNode: !0,
        }),
        (Yd.types.HTML = { name: 'HTML', kind: 'SCALAR' }),
        (Yd.types.Image = {
          name: 'Image',
          kind: 'OBJECT',
          fieldBaseTypes: {
            altText: 'String',
            id: 'ID',
            originalSrc: 'URL',
            src: 'URL',
          },
          implementsNode: !1,
        }),
        (Yd.types.ProductConnection = {
          name: 'ProductConnection',
          kind: 'OBJECT',
          fieldBaseTypes: { edges: 'ProductEdge', pageInfo: 'PageInfo' },
          implementsNode: !1,
        }),
        (Yd.types.ProductEdge = {
          name: 'ProductEdge',
          kind: 'OBJECT',
          fieldBaseTypes: { cursor: 'String', node: 'Product' },
          implementsNode: !1,
        }),
        (Yd.types.ImageConnection = {
          name: 'ImageConnection',
          kind: 'OBJECT',
          fieldBaseTypes: { edges: 'ImageEdge', pageInfo: 'PageInfo' },
          implementsNode: !1,
        }),
        (Yd.types.ImageEdge = {
          name: 'ImageEdge',
          kind: 'OBJECT',
          fieldBaseTypes: { cursor: 'String', node: 'Image' },
          implementsNode: !1,
        }),
        (Yd.types.ProductOption = {
          name: 'ProductOption',
          kind: 'OBJECT',
          fieldBaseTypes: { name: 'String', values: 'String' },
          implementsNode: !0,
        }),
        (Yd.types.ProductVariantConnection = {
          name: 'ProductVariantConnection',
          kind: 'OBJECT',
          fieldBaseTypes: { edges: 'ProductVariantEdge', pageInfo: 'PageInfo' },
          implementsNode: !1,
        }),
        (Yd.types.ProductVariantEdge = {
          name: 'ProductVariantEdge',
          kind: 'OBJECT',
          fieldBaseTypes: { cursor: 'String', node: 'ProductVariant' },
          implementsNode: !1,
        }),
        (Yd.types.ProductVariantPricePairConnection = {
          name: 'ProductVariantPricePairConnection',
          kind: 'OBJECT',
          fieldBaseTypes: {
            edges: 'ProductVariantPricePairEdge',
            pageInfo: 'PageInfo',
          },
          implementsNode: !1,
        }),
        (Yd.types.ProductVariantPricePairEdge = {
          name: 'ProductVariantPricePairEdge',
          kind: 'OBJECT',
          fieldBaseTypes: { node: 'ProductVariantPricePair' },
          implementsNode: !1,
        }),
        (Yd.types.ProductVariantPricePair = {
          name: 'ProductVariantPricePair',
          kind: 'OBJECT',
          fieldBaseTypes: { compareAtPrice: 'MoneyV2', price: 'MoneyV2' },
          implementsNode: !1,
        }),
        (Yd.types.SelectedOption = {
          name: 'SelectedOption',
          kind: 'OBJECT',
          fieldBaseTypes: { name: 'String', value: 'String' },
          implementsNode: !1,
        }),
        (Yd.types.UnitPriceMeasurement = {
          name: 'UnitPriceMeasurement',
          kind: 'OBJECT',
          fieldBaseTypes: {
            measuredType: 'UnitPriceMeasurementMeasuredType',
            quantityUnit: 'UnitPriceMeasurementMeasuredUnit',
            quantityValue: 'Float',
            referenceUnit: 'UnitPriceMeasurementMeasuredUnit',
            referenceValue: 'Int',
          },
          implementsNode: !1,
        }),
        (Yd.types.UnitPriceMeasurementMeasuredType = {
          name: 'UnitPriceMeasurementMeasuredType',
          kind: 'ENUM',
        }),
        (Yd.types.UnitPriceMeasurementMeasuredUnit = {
          name: 'UnitPriceMeasurementMeasuredUnit',
          kind: 'ENUM',
        }),
        (Yd.types.Attribute = {
          name: 'Attribute',
          kind: 'OBJECT',
          fieldBaseTypes: { key: 'String', value: 'String' },
          implementsNode: !1,
        }),
        (Yd.types.DiscountApplicationConnection = {
          name: 'DiscountApplicationConnection',
          kind: 'OBJECT',
          fieldBaseTypes: {
            edges: 'DiscountApplicationEdge',
            pageInfo: 'PageInfo',
          },
          implementsNode: !1,
        }),
        (Yd.types.DiscountApplicationEdge = {
          name: 'DiscountApplicationEdge',
          kind: 'OBJECT',
          fieldBaseTypes: { node: 'DiscountApplication' },
          implementsNode: !1,
        }),
        (Yd.types.Checkout = {
          name: 'Checkout',
          kind: 'OBJECT',
          fieldBaseTypes: {
            appliedGiftCards: 'AppliedGiftCard',
            completedAt: 'DateTime',
            createdAt: 'DateTime',
            currencyCode: 'CurrencyCode',
            customAttributes: 'Attribute',
            discountApplications: 'DiscountApplicationConnection',
            email: 'String',
            id: 'ID',
            lineItems: 'CheckoutLineItemConnection',
            lineItemsSubtotalPrice: 'MoneyV2',
            note: 'String',
            order: 'Order',
            orderStatusUrl: 'URL',
            paymentDue: 'Money',
            paymentDueV2: 'MoneyV2',
            ready: 'Boolean',
            requiresShipping: 'Boolean',
            shippingAddress: 'MailingAddress',
            shippingLine: 'ShippingRate',
            subtotalPrice: 'Money',
            subtotalPriceV2: 'MoneyV2',
            taxExempt: 'Boolean',
            taxesIncluded: 'Boolean',
            totalPrice: 'Money',
            totalPriceV2: 'MoneyV2',
            totalTax: 'Money',
            totalTaxV2: 'MoneyV2',
            updatedAt: 'DateTime',
            webUrl: 'URL',
          },
          implementsNode: !0,
        }),
        (Yd.types.CheckoutLineItemConnection = {
          name: 'CheckoutLineItemConnection',
          kind: 'OBJECT',
          fieldBaseTypes: {
            edges: 'CheckoutLineItemEdge',
            pageInfo: 'PageInfo',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutLineItemEdge = {
          name: 'CheckoutLineItemEdge',
          kind: 'OBJECT',
          fieldBaseTypes: { cursor: 'String', node: 'CheckoutLineItem' },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutLineItem = {
          name: 'CheckoutLineItem',
          kind: 'OBJECT',
          fieldBaseTypes: {
            customAttributes: 'Attribute',
            discountAllocations: 'DiscountAllocation',
            id: 'ID',
            quantity: 'Int',
            title: 'String',
            variant: 'ProductVariant',
          },
          implementsNode: !0,
        }),
        (Yd.types.ShippingRate = {
          name: 'ShippingRate',
          kind: 'OBJECT',
          fieldBaseTypes: {
            handle: 'String',
            price: 'Money',
            priceV2: 'MoneyV2',
            title: 'String',
          },
          implementsNode: !1,
        }),
        (Yd.types.AppliedGiftCard = {
          name: 'AppliedGiftCard',
          kind: 'OBJECT',
          fieldBaseTypes: {
            amountUsedV2: 'MoneyV2',
            balanceV2: 'MoneyV2',
            id: 'ID',
            lastCharacters: 'String',
            presentmentAmountUsed: 'MoneyV2',
          },
          implementsNode: !0,
        }),
        (Yd.types.Shop = {
          name: 'Shop',
          kind: 'OBJECT',
          fieldBaseTypes: {
            currencyCode: 'CurrencyCode',
            description: 'String',
            moneyFormat: 'String',
            name: 'String',
            paymentSettings: 'PaymentSettings',
            primaryDomain: 'Domain',
            privacyPolicy: 'ShopPolicy',
            refundPolicy: 'ShopPolicy',
            termsOfService: 'ShopPolicy',
          },
          implementsNode: !1,
        }),
        (Yd.types.PaymentSettings = {
          name: 'PaymentSettings',
          kind: 'OBJECT',
          fieldBaseTypes: { enabledPresentmentCurrencies: 'CurrencyCode' },
          implementsNode: !1,
        }),
        (Yd.types.Domain = {
          name: 'Domain',
          kind: 'OBJECT',
          fieldBaseTypes: { host: 'String', sslEnabled: 'Boolean', url: 'URL' },
          implementsNode: !1,
        }),
        (Yd.types.ShopPolicy = {
          name: 'ShopPolicy',
          kind: 'OBJECT',
          fieldBaseTypes: {
            body: 'String',
            id: 'ID',
            title: 'String',
            url: 'URL',
          },
          implementsNode: !0,
        }),
        (Yd.types.Mutation = {
          name: 'Mutation',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkoutAttributesUpdateV2: 'CheckoutAttributesUpdateV2Payload',
            checkoutCreate: 'CheckoutCreatePayload',
            checkoutDiscountCodeApplyV2: 'CheckoutDiscountCodeApplyV2Payload',
            checkoutDiscountCodeRemove: 'CheckoutDiscountCodeRemovePayload',
            checkoutEmailUpdateV2: 'CheckoutEmailUpdateV2Payload',
            checkoutGiftCardRemoveV2: 'CheckoutGiftCardRemoveV2Payload',
            checkoutGiftCardsAppend: 'CheckoutGiftCardsAppendPayload',
            checkoutLineItemsAdd: 'CheckoutLineItemsAddPayload',
            checkoutLineItemsRemove: 'CheckoutLineItemsRemovePayload',
            checkoutLineItemsReplace: 'CheckoutLineItemsReplacePayload',
            checkoutLineItemsUpdate: 'CheckoutLineItemsUpdatePayload',
            checkoutShippingAddressUpdateV2:
              'CheckoutShippingAddressUpdateV2Payload',
          },
          implementsNode: !1,
          relayInputObjectBaseTypes: {
            checkoutAttributesUpdate: 'CheckoutAttributesUpdateInput',
            checkoutAttributesUpdateV2: 'CheckoutAttributesUpdateV2Input',
            checkoutCreate: 'CheckoutCreateInput',
            customerAccessTokenCreate: 'CustomerAccessTokenCreateInput',
            customerActivate: 'CustomerActivateInput',
            customerCreate: 'CustomerCreateInput',
            customerReset: 'CustomerResetInput',
          },
        }),
        (Yd.types.UserError = {
          name: 'UserError',
          kind: 'OBJECT',
          fieldBaseTypes: { field: 'String', message: 'String' },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutUserError = {
          name: 'CheckoutUserError',
          kind: 'OBJECT',
          fieldBaseTypes: {
            code: 'CheckoutErrorCode',
            field: 'String',
            message: 'String',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutErrorCode = {
          name: 'CheckoutErrorCode',
          kind: 'ENUM',
        }),
        (Yd.types.CheckoutAttributesUpdateV2Payload = {
          name: 'CheckoutAttributesUpdateV2Payload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutDiscountCodeApplyV2Payload = {
          name: 'CheckoutDiscountCodeApplyV2Payload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutCreatePayload = {
          name: 'CheckoutCreatePayload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutEmailUpdateV2Payload = {
          name: 'CheckoutEmailUpdateV2Payload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutDiscountCodeRemovePayload = {
          name: 'CheckoutDiscountCodeRemovePayload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutGiftCardsAppendPayload = {
          name: 'CheckoutGiftCardsAppendPayload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutGiftCardRemoveV2Payload = {
          name: 'CheckoutGiftCardRemoveV2Payload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutLineItemsAddPayload = {
          name: 'CheckoutLineItemsAddPayload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutLineItemsRemovePayload = {
          name: 'CheckoutLineItemsRemovePayload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutLineItemsUpdatePayload = {
          name: 'CheckoutLineItemsUpdatePayload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutLineItemsReplacePayload = {
          name: 'CheckoutLineItemsReplacePayload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            userErrors: 'CheckoutUserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.CheckoutShippingAddressUpdateV2Payload = {
          name: 'CheckoutShippingAddressUpdateV2Payload',
          kind: 'OBJECT',
          fieldBaseTypes: {
            checkout: 'Checkout',
            checkoutUserErrors: 'CheckoutUserError',
            userErrors: 'UserError',
          },
          implementsNode: !1,
        }),
        (Yd.types.DiscountCodeApplication = {
          name: 'DiscountCodeApplication',
          kind: 'OBJECT',
          fieldBaseTypes: { applicable: 'Boolean', code: 'String' },
          implementsNode: !1,
        }),
        (Yd.types.ManualDiscountApplication = {
          name: 'ManualDiscountApplication',
          kind: 'OBJECT',
          fieldBaseTypes: { description: 'String', title: 'String' },
          implementsNode: !1,
        }),
        (Yd.types.ScriptDiscountApplication = {
          name: 'ScriptDiscountApplication',
          kind: 'OBJECT',
          fieldBaseTypes: { description: 'String' },
          implementsNode: !1,
        }),
        (Yd.types.AutomaticDiscountApplication = {
          name: 'AutomaticDiscountApplication',
          kind: 'OBJECT',
          fieldBaseTypes: { title: 'String' },
          implementsNode: !1,
        }),
        (Yd.queryType = 'QueryRoot'),
        (Yd.mutationType = 'Mutation'),
        (Yd.subscriptionType = null);
      var de = (function d(e) {
          return (
            Object.getOwnPropertyNames(e).forEach(function (a) {
              var n = e[a];
              n && 'object' === (void 0 === n ? 'undefined' : t(n)) && d(n);
            }),
            Object.freeze(e),
            e
          );
        })(Yd),
        ee = (function () {
          function d(e) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : pd,
              t = arguments[2];
            n(this, d);
            var i = 'https://' + e.domain + '/api/' + e.apiVersion + '/graphql',
              r = {
                'X-SDK-Variant': 'javascript',
                'X-SDK-Version': '2.9.3',
                'X-Shopify-Storefront-Access-Token': e.storefrontAccessToken,
              };
            e.source && (r['X-SDK-Variant-Source'] = e.source);
            var o = e.language ? e.language : '*';
            (r['Accept-Language'] = o),
              t
                ? ((r['Content-Type'] = 'application/json'),
                  (r.Accept = 'application/json'),
                  (this.graphQLClient = new a(de, {
                    fetcher: function (d) {
                      return t(i, {
                        body: JSON.stringify(d),
                        method: 'POST',
                        mode: 'cors',
                        headers: r,
                      }).then(function (d) {
                        return d.json();
                      });
                    },
                  })))
                : (this.graphQLClient = new a(de, {
                    url: i,
                    fetcherOptions: { headers: r },
                  })),
              (this.product = new _d(this.graphQLClient)),
              (this.collection = new Td(this.graphQLClient)),
              (this.shop = new Nd(this.graphQLClient)),
              (this.checkout = new Xd(this.graphQLClient)),
              (this.image = new $d(this.graphQLClient));
          }
          return (
            i(d, null, [
              {
                key: 'buildClient',
                value: function (e, a) {
                  var t = new md(e),
                    n = new d(t, pd, a);
                  return (n.config = t), n;
                },
              },
            ]),
            i(d, [
              {
                key: 'fetchNextPage',
                value: function (d) {
                  return this.graphQLClient.fetchNextPage(d);
                },
              },
            ]),
            d
          );
        })();
      d.exports = ee;
    },
  },
]);
//# sourceMappingURL=11100001-07174b7111286eab7b5a.js.map
