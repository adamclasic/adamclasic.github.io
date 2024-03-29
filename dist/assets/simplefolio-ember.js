"use strict";
define(
  "simplefolio-ember/app",
  [
    "exports",
    "ember-resolver",
    "ember-load-initializers",
    "simplefolio-ember/config/environment",
  ],
  function (e, t, r, n) {
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function l(e, t) {
      return (l =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function a(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = f(e);
        if (t) {
          var o = f(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return s(this, r);
      };
    }
    function s(e, t) {
      return !t || ("object" !== o(t) && "function" != typeof t) ? u(e) : t;
    }
    function u(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function f(e) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function d(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var c = (function (e) {
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && l(e, t);
      })(o, Ember.Application);
      var r = a(o);
      function o() {
        var e;
        i(this, o);
        for (var l = arguments.length, a = new Array(l), s = 0; s < l; s++)
          a[s] = arguments[s];
        return (
          d(
            u((e = r.call.apply(r, [this].concat(a)))),
            "modulePrefix",
            n.default.modulePrefix
          ),
          d(u(e), "podModulePrefix", n.default.podModulePrefix),
          d(u(e), "Resolver", t.default),
          e
        );
      }
      return o;
    })();
    (e.default = c), (0, r.default)(c, n.default.modulePrefix);
  }
),
  define("simplefolio-ember/breakpoints", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    e.default = {
      mobile: "(max-width: 767px)",
      tablet: "(min-width: 768px) and (max-width: 991px)",
      desktop: "(min-width: 992px) and (max-width: 1200px)",
    };
  }),
  define(
    "simplefolio-ember/component-managers/glimmer",
    ["exports", "@glimmer/component/-private/ember-component-manager"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/components/copy-button",
    ["exports", "ember-cli-clipboard/components/copy-button"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/components/etw/module-section",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var t = Ember.Component.extend({ tagName: "" });
      e.default = t;
    }
  ),
  define(
    "simplefolio-ember/components/etw/module-style-detail",
    ["exports", "ember-cli-tailwind/utils/classes-for-module-style"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = Ember.Component.extend({
        etwTailwindStyleguide: Ember.inject.service(),
        moduleStyle: Ember.computed.reads(
          "etwTailwindStyleguide.selectedModuleStyle"
        ),
        activeResponsiveClass: "all",
        activeState: "none",
        detailStyles: Ember.computed(
          "moduleStyle",
          "activeResponsiveClass",
          "activeState",
          function () {
            var e = this.moduleStyle,
              r = this.activeResponsiveClass,
              n = "all" === r ? "" : "".concat(r, ":"),
              o = this.activeState,
              i = "none" === o ? "" : "".concat(o, ":");
            return (0, t.default)(e).map(function (e) {
              return "".concat(n).concat(i).concat(e);
            });
          }
        ),
        actions: {
          highlightStyle: function (e) {
            var t = this;
            this.set("highlightedStyle", e),
              Ember.run.later(function () {
                t.set("highlightedStyle", null);
              }, 1500);
          },
        },
      });
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/components/etw/module-style-example",
    ["exports", "ember-cli-tailwind/utils/classes-for-module-style"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = Ember.Component.extend({
        tagName: "",
        etwTailwindStyleguide: Ember.inject.service(),
        moduleStyle: null,
        classesForModuleStyle: Ember.computed("moduleStyle", function () {
          return (0, t.default)(this.moduleStyle);
        }),
        actions: {
          selectModuleStyle: function () {
            this.etwTailwindStyleguide.set(
              "selectedModuleStyle",
              this.moduleStyle
            );
          },
        },
      });
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/components/fa-icon",
    ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/components/scroll-reveal",
    ["exports", "@glimmer/component", "scrollreveal"],
    function (e, t, r) {
      var n, o, i, l, a, s, u, f, d, c, p, m, b, g, y, h, v, w, x;
      function _(e) {
        return (_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function O(e, t, r, n) {
        r &&
          Object.defineProperty(e, t, {
            enumerable: r.enumerable,
            configurable: r.configurable,
            writable: r.writable,
            value: r.initializer ? r.initializer.call(n) : void 0,
          });
      }
      function j(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function P(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function k(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = z(e);
          if (t) {
            var o = z(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return M(this, r);
        };
      }
      function M(e, t) {
        return !t || ("object" !== _(t) && "function" != typeof t) ? E(e) : t;
      }
      function E(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function z(e) {
        return (z = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function R(e, t, r, n, o) {
        var i = {};
        return (
          Object.keys(n).forEach(function (e) {
            i[e] = n[e];
          }),
          (i.enumerable = !!i.enumerable),
          (i.configurable = !!i.configurable),
          ("value" in i || i.initializer) && (i.writable = !0),
          (i = r
            .slice()
            .reverse()
            .reduce(function (r, n) {
              return n(e, t, r) || r;
            }, i)),
          o &&
            void 0 !== i.initializer &&
            ((i.value = i.initializer ? i.initializer.call(o) : void 0),
            (i.initializer = void 0)),
          void 0 === i.initializer &&
            (Object.defineProperty(e, t, i), (i = null)),
          i
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var T = Ember.HTMLBars.template({
          id: "8qkHHLBl",
          block:
            '{"symbols":["@elementId","&attrs","&default"],"statements":[[7,"div",false],[12,"id",[23,1,[]]],[13,2],[3,"did-insert",[[23,0,["initializeScrollReveal"]]]],[8],[0,"\\n\\t"],[14,3],[0,"\\n"],[9]],"hasEval":false}',
          meta: {
            moduleName: "simplefolio-ember/components/scroll-reveal.hbs",
          },
        }),
        A = [
          "delay",
          "distance",
          "duration",
          "easing",
          "interval",
          "opacity",
          "origin",
          "rotate",
          "scale",
          "cleanup",
          "container",
          "desktop",
          "mobile",
          "reset",
          "useDelay",
          "viewFactor",
          "viewOffset",
          "afterReset",
          "afterReveal",
          "beforeReset",
          "beforeReveal",
        ],
        q =
          ((n = Ember._tracked),
          (o = Ember._tracked),
          (i = Ember._tracked),
          (l = Ember._tracked),
          (a = Ember._tracked),
          (s = Ember._tracked),
          (u = Ember._tracked),
          (f = Ember._tracked),
          (d = Ember._action),
          (x = (function (e) {
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && S(e, t);
            })(l, e);
            var t,
              n,
              o,
              i = k(l);
            function l() {
              var e;
              return (
                j(this, l),
                O(E((e = i.apply(this, arguments))), "options", p, E(e)),
                O(E(e), "rotateX", m, E(e)),
                O(E(e), "rotateY", b, E(e)),
                O(E(e), "rotateZ", g, E(e)),
                O(E(e), "viewOffsetTop", y, E(e)),
                O(E(e), "viewOffsetRight", h, E(e)),
                O(E(e), "viewOffsetBottom", v, E(e)),
                O(E(e), "viewOffsetLeft", w, E(e)),
                (e.options = {}),
                e._setDefaults(),
                (0, r.default)({ reset: !1 }),
                e
              );
            }
            return (
              (t = l),
              (n = [
                {
                  key: "initializeScrollReveal",
                  value: function (e) {
                    (0, r.default)().reveal(e, this.options);
                  },
                },
                { key: "afterReset", value: function () {} },
                { key: "afterReveal", value: function () {} },
                { key: "beforeReset", value: function () {} },
                { key: "beforeReveal", value: function () {} },
                {
                  key: "_setDefaults",
                  value: function () {
                    var e = this;
                    A.forEach(function (t) {
                      e.options[t] = e[t];
                    });
                  },
                },
                {
                  key: "delay",
                  get: function () {
                    return this.args.delay || 0;
                  },
                },
                {
                  key: "distance",
                  get: function () {
                    return this.args.distance || "0px";
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    return this.args.duration || 600;
                  },
                },
                {
                  key: "easing",
                  get: function () {
                    return this.args.easing || "cubic-bezier(0.5, 0, 0, 1)";
                  },
                },
                {
                  key: "interval",
                  get: function () {
                    return this.args.interval || 0;
                  },
                },
                {
                  key: "opacity",
                  get: function () {
                    return this.args.opacity || 0;
                  },
                },
                {
                  key: "origin",
                  get: function () {
                    return this.args.origin || "bottom";
                  },
                },
                {
                  key: "rotateX",
                  get: function () {
                    return this.args.rotateX || 0;
                  },
                },
                {
                  key: "rotateY",
                  get: function () {
                    return this.args.rotateY || 0;
                  },
                },
                {
                  key: "rotateZ",
                  get: function () {
                    return this.args.rotateZ || 0;
                  },
                },
                {
                  key: "scale",
                  get: function () {
                    return this.args.scale || 1;
                  },
                },
                {
                  key: "cleanup",
                  get: function () {
                    return this.args.cleanup || !1;
                  },
                },
                {
                  key: "container",
                  get: function () {
                    return (
                      this.args.container || window.document.documentElement
                    );
                  },
                },
                {
                  key: "desktop",
                  get: function () {
                    return this.args.desktop || !0;
                  },
                },
                {
                  key: "mobile",
                  get: function () {
                    return this.args.mobile || !0;
                  },
                },
                {
                  key: "reset",
                  get: function () {
                    return this.args.reset || !1;
                  },
                },
                {
                  key: "useDelay",
                  get: function () {
                    return this.args.useDelay || "always";
                  },
                },
                {
                  key: "viewFactor",
                  get: function () {
                    return this.args.viewFactor || 0;
                  },
                },
                {
                  key: "rotate",
                  get: function () {
                    return {
                      x: this.rotateX,
                      y: this.rotateY,
                      z: this.rotateZ,
                    };
                  },
                },
                {
                  key: "viewOffset",
                  get: function () {
                    return {
                      top: this.viewOffsetTop,
                      right: this.viewOffsetRight,
                      bottom: this.viewOffsetBottom,
                      left: this.viewOffsetLeft,
                    };
                  },
                },
              ]) && P(t.prototype, n),
              o && P(t, o),
              l
            );
          })(t.default)),
          (p = R((c = x).prototype, "options", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          (m = R(c.prototype, "rotateX", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (b = R(c.prototype, "rotateY", [i], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (g = R(c.prototype, "rotateZ", [l], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (y = R(c.prototype, "viewOffsetTop", [a], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (h = R(c.prototype, "viewOffsetRight", [s], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (v = R(c.prototype, "viewOffsetBottom", [u], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (w = R(c.prototype, "viewOffsetLeft", [f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          R(
            c.prototype,
            "initializeScrollReveal",
            [d],
            Object.getOwnPropertyDescriptor(
              c.prototype,
              "initializeScrollReveal"
            ),
            c.prototype
          ),
          c);
      (e.default = q), Ember._setComponentTemplate(T, q);
    }
  ),
  define(
    "simplefolio-ember/components/tilt-element",
    ["exports", "@glimmer/component", "vanilla-tilt"],
    function (e, t, r) {
      var n, o, i, l, a;
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function u(e, t, r, n) {
        r &&
          Object.defineProperty(e, t, {
            enumerable: r.enumerable,
            configurable: r.configurable,
            writable: r.writable,
            value: r.initializer ? r.initializer.call(n) : void 0,
          });
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(e);
          if (t) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return m(this, r);
        };
      }
      function m(e, t) {
        return !t || ("object" !== s(t) && "function" != typeof t) ? b(e) : t;
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t, r, n, o) {
        var i = {};
        return (
          Object.keys(n).forEach(function (e) {
            i[e] = n[e];
          }),
          (i.enumerable = !!i.enumerable),
          (i.configurable = !!i.configurable),
          ("value" in i || i.initializer) && (i.writable = !0),
          (i = r
            .slice()
            .reverse()
            .reduce(function (r, n) {
              return n(e, t, r) || r;
            }, i)),
          o &&
            void 0 !== i.initializer &&
            ((i.value = i.initializer ? i.initializer.call(o) : void 0),
            (i.initializer = void 0)),
          void 0 === i.initializer &&
            (Object.defineProperty(e, t, i), (i = null)),
          i
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var h = Ember.HTMLBars.template({
          id: "IQfzWsrO",
          block:
            '{"symbols":["&default"],"statements":[[7,"div",false],[12,"data-tilt",""],[3,"did-insert",[[23,0,["initializeVanillaTilt"]]]],[8],[0,"\\n\\t"],[14,1],[0,"\\n"],[9]],"hasEval":false}',
          meta: { moduleName: "simplefolio-ember/components/tilt-element.hbs" },
        }),
        v = [
          "reverse",
          "max",
          "startX",
          "startY",
          "perspective",
          "scale",
          "speed",
          "transition",
          "axis",
          "easing",
          "glare",
          "max-glare",
          "glare-prerender",
          "mouse-event-element",
          "full-page-listening",
          "gyroscope",
          "gyroscopeMinAngleX",
          "gyroscopeMaxAngleX",
          "gyroscopeMinAngleY",
          "gyroscopeMaxAngleY",
          "gyroscopeSamples",
        ],
        w =
          ((n = Ember._tracked),
          (o = Ember._action),
          (a = (function (e) {
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && c(e, t);
            })(a, e);
            var t,
              n,
              o,
              i = p(a);
            function a() {
              var e;
              return (
                f(this, a),
                u(b((e = i.apply(this, arguments))), "options", l, b(e)),
                (e.options = {}),
                e._setDefaults(),
                e
              );
            }
            return (
              (t = a),
              (n = [
                {
                  key: "initializeVanillaTilt",
                  value: function (e) {
                    r.default.init(e, this.options);
                  },
                },
                {
                  key: "_setDefaults",
                  value: function () {
                    var e = this;
                    v.forEach(function (t) {
                      e.options[t] = e[t];
                    });
                  },
                },
                {
                  key: "reverse",
                  get: function () {
                    return this.args.reverse || !1;
                  },
                },
                {
                  key: "max",
                  get: function () {
                    return this.args.max || 35;
                  },
                },
                {
                  key: "startX",
                  get: function () {
                    return this.args.startX || 0;
                  },
                },
                {
                  key: "startY",
                  get: function () {
                    return this.args.startY || 0;
                  },
                },
                {
                  key: "perspective",
                  get: function () {
                    return this.args.perspective || 1e3;
                  },
                },
                {
                  key: "scale",
                  get: function () {
                    return this.args.scale || 1;
                  },
                },
                {
                  key: "speed",
                  get: function () {
                    return this.args.speed || 300;
                  },
                },
                {
                  key: "transition",
                  get: function () {
                    return this.args.transition || !0;
                  },
                },
                {
                  key: "axis",
                  get: function () {
                    return this.args.axis || null;
                  },
                },
                {
                  key: "reset",
                  get: function () {
                    return this.args.reset || !0;
                  },
                },
                {
                  key: "easing",
                  get: function () {
                    return this.args.easing || "cubic-bezier(.03,.98,.52,.99)";
                  },
                },
                {
                  key: "glare",
                  get: function () {
                    return this.args.glare || !1;
                  },
                },
                {
                  key: "max-glare",
                  get: function () {
                    return this.args["max-glare"] || 1;
                  },
                },
                {
                  key: "glare-prerender",
                  get: function () {
                    return this.args["glare-prerender"] || !1;
                  },
                },
                {
                  key: "mouse-event-element",
                  get: function () {
                    return this.args["mouse-event-element"] || null;
                  },
                },
                {
                  key: "full-page-listening",
                  get: function () {
                    return this.args["full-page-listening"] || !1;
                  },
                },
                {
                  key: "gyroscope",
                  get: function () {
                    return this.args.gyroscope || !0;
                  },
                },
                {
                  key: "gyroscopeMinAngleX",
                  get: function () {
                    return this.args.gyroscopeMinAngleX || -45;
                  },
                },
                {
                  key: "gyroscopeMaxAngleX",
                  get: function () {
                    return this.args.gyroscopeMaxAngleX || 45;
                  },
                },
                {
                  key: "gyroscopeMinAngleY",
                  get: function () {
                    return this.args.gyroscopeMinAngleY || -45;
                  },
                },
                {
                  key: "gyroscopeMaxAngleY",
                  get: function () {
                    return this.args.gyroscopeMaxAngleY || 45;
                  },
                },
                {
                  key: "gyroscopeSamples",
                  get: function () {
                    return this.args.gyroscopeSamples || 10;
                  },
                },
              ]) && d(t.prototype, n),
              o && d(t, o),
              a
            );
          })(t.default)),
          (l = y((i = a).prototype, "options", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          y(
            i.prototype,
            "initializeVanillaTilt",
            [o],
            Object.getOwnPropertyDescriptor(
              i.prototype,
              "initializeVanillaTilt"
            ),
            i.prototype
          ),
          i);
      (e.default = w), Ember._setComponentTemplate(h, w);
    }
  ),
  define(
    "simplefolio-ember/controllers/application-tailwind",
    [
      "exports",
      "simplefolio-ember/tailwind/config/colors",
      "simplefolio-ember/tailwind/config/screens",
      "simplefolio-ember/tailwind/config/fonts",
      "simplefolio-ember/tailwind/config/text-sizes",
      "simplefolio-ember/tailwind/config/font-weights",
      "simplefolio-ember/tailwind/config/line-height",
      "simplefolio-ember/tailwind/config/letter-spacing",
      "simplefolio-ember/tailwind/config/border-widths",
      "simplefolio-ember/tailwind/config/border-radius",
      "simplefolio-ember/tailwind/config/width",
      "simplefolio-ember/tailwind/config/height",
      "simplefolio-ember/tailwind/config/min-width",
      "simplefolio-ember/tailwind/config/min-height",
      "simplefolio-ember/tailwind/config/max-width",
      "simplefolio-ember/tailwind/config/max-height",
      "simplefolio-ember/tailwind/config/padding",
      "simplefolio-ember/tailwind/config/margin",
      "simplefolio-ember/tailwind/config/negative-margin",
      "simplefolio-ember/tailwind/config/shadows",
      "simplefolio-ember/tailwind/config/z-index",
      "simplefolio-ember/tailwind/config/opacity",
      "simplefolio-ember/tailwind/config/svg-fill",
      "simplefolio-ember/tailwind/config/svg-stroke",
    ],
    function (
      e,
      t,
      r,
      n,
      o,
      i,
      l,
      a,
      s,
      u,
      f,
      d,
      c,
      p,
      m,
      b,
      g,
      y,
      h,
      v,
      w,
      x,
      _,
      O
    ) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var j = {
          colors: t.default,
          screens: r.default,
          fonts: n.default,
          textSizes: o.default,
          fontWeights: i.default,
          leading: l.default,
          tracking: a.default,
          borderWidths: s.default,
          borderRadius: u.default,
          width: f.default,
          height: d.default,
          minWidth: c.default,
          minHeight: p.default,
          maxWidth: m.default,
          maxHeight: b.default,
          padding: g.default,
          margin: y.default,
          negativeMargin: h.default,
          shadows: v.default,
          zIndex: w.default,
          opacity: x.default,
          svgFill: _.default,
          svgStroke: O.default,
        },
        P = Ember.Controller.extend({
          moduleStyles: Ember.computed(function () {
            return Object.keys(j).reduce(function (e, t) {
              var r = j[t];
              return (
                (e[t] = Object.keys(r).map(function (e) {
                  return {
                    module: Ember.String.dasherize(t),
                    name: e,
                    value: r[e],
                  };
                })),
                e
              );
            }, {});
          }),
        });
      e.default = P;
    }
  ),
  define(
    "simplefolio-ember/controllers/application",
    ["exports", "simplefolio-ember/utils/data"],
    function (e, t) {
      var r, n, o, i, l;
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s(e, t, r, n) {
        r &&
          Object.defineProperty(e, t, {
            enumerable: r.enumerable,
            configurable: r.configurable,
            writable: r.writable,
            value: r.initializer ? r.initializer.call(n) : void 0,
          });
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = b(e);
          if (t) {
            var o = b(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return p(this, r);
        };
      }
      function p(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t) ? m(e) : t;
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t, r, n, o) {
        var i = {};
        return (
          Object.keys(n).forEach(function (e) {
            i[e] = n[e];
          }),
          (i.enumerable = !!i.enumerable),
          (i.configurable = !!i.configurable),
          ("value" in i || i.initializer) && (i.writable = !0),
          (i = r
            .slice()
            .reverse()
            .reduce(function (r, n) {
              return n(e, t, r) || r;
            }, i)),
          o &&
            void 0 !== i.initializer &&
            ((i.value = i.initializer ? i.initializer.call(o) : void 0),
            (i.initializer = void 0)),
          void 0 === i.initializer &&
            (Object.defineProperty(e, t, i), (i = null)),
          i
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var y =
        ((r = Ember.inject.service),
        (n = Ember.computed("media.isDesktop")),
        (o = Ember.computed("media.isDesktop")),
        (l = g(
          (i = (function (e) {
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && d(e, t);
            })(a, Ember.Controller);
            var r,
              n,
              o,
              i = c(a);
            function a() {
              var e;
              return (
                u(this, a),
                s(m((e = i.apply(this, arguments))), "media", l, m(e)),
                (e.projects = t.projects),
                (e.socials = t.socials),
                e
              );
            }
            return (
              (r = a),
              (n = [
                {
                  key: "leftToBottom",
                  get: function () {
                    return this.media.isDesktop ? "bottom" : "left";
                  },
                },
                {
                  key: "rightToBottom",
                  get: function () {
                    return this.media.isDesktop ? "bottom" : "right";
                  },
                },
              ]) && f(r.prototype, n),
              o && f(r, o),
              a
            );
          })()).prototype,
          "media",
          [r],
          { configurable: !0, enumerable: !0, writable: !0, initializer: null }
        )),
        g(
          i.prototype,
          "leftToBottom",
          [n],
          Object.getOwnPropertyDescriptor(i.prototype, "leftToBottom"),
          i.prototype
        ),
        g(
          i.prototype,
          "rightToBottom",
          [o],
          Object.getOwnPropertyDescriptor(i.prototype, "rightToBottom"),
          i.prototype
        ),
        i);
      e.default = y;
    }
  ),
  define(
    "simplefolio-ember/helpers/and",
    ["exports", "ember-truth-helpers/helpers/and"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "and", {
          enumerable: !0,
          get: function () {
            return t.and;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/app-version",
    [
      "exports",
      "simplefolio-ember/config/environment",
      "ember-cli-app-version/utils/regexp",
    ],
    function (e, t, r) {
      function n(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = t.default.APP.version,
          i = n.versionOnly || n.hideSha,
          l = n.shaOnly || n.hideVersion,
          a = null;
        return (
          i &&
            (n.showExtended && (a = o.match(r.versionExtendedRegExp)),
            a || (a = o.match(r.versionRegExp))),
          l && (a = o.match(r.shaRegExp)),
          a ? a[0] : o
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.appVersion = n),
        (e.default = void 0);
      var o = Ember.Helper.helper(n);
      e.default = o;
    }
  ),
  define(
    "simplefolio-ember/helpers/append",
    ["exports", "ember-composable-helpers/helpers/append"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "append", {
          enumerable: !0,
          get: function () {
            return t.append;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/array",
    ["exports", "ember-composable-helpers/helpers/array"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "array", {
          enumerable: !0,
          get: function () {
            return t.array;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/chunk",
    ["exports", "ember-composable-helpers/helpers/chunk"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "chunk", {
          enumerable: !0,
          get: function () {
            return t.chunk;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/compact",
    ["exports", "ember-composable-helpers/helpers/compact"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/compute",
    ["exports", "ember-composable-helpers/helpers/compute"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "compute", {
          enumerable: !0,
          get: function () {
            return t.compute;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/contains",
    ["exports", "ember-composable-helpers/helpers/contains"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "contains", {
          enumerable: !0,
          get: function () {
            return t.contains;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/dec",
    ["exports", "ember-composable-helpers/helpers/dec"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "dec", {
          enumerable: !0,
          get: function () {
            return t.dec;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/drop",
    ["exports", "ember-composable-helpers/helpers/drop"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/eq",
    ["exports", "ember-truth-helpers/helpers/equal"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "equal", {
          enumerable: !0,
          get: function () {
            return t.equal;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/filter-by",
    ["exports", "ember-composable-helpers/helpers/filter-by"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/filter",
    ["exports", "ember-composable-helpers/helpers/filter"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/find-by",
    ["exports", "ember-composable-helpers/helpers/find-by"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/flatten",
    ["exports", "ember-composable-helpers/helpers/flatten"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "flatten", {
          enumerable: !0,
          get: function () {
            return t.flatten;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/group-by",
    ["exports", "ember-composable-helpers/helpers/group-by"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/gt",
    ["exports", "ember-truth-helpers/helpers/gt"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "gt", {
          enumerable: !0,
          get: function () {
            return t.gt;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/gte",
    ["exports", "ember-truth-helpers/helpers/gte"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "gte", {
          enumerable: !0,
          get: function () {
            return t.gte;
          },
        });
    }
  );
define(
  "simplefolio-ember/helpers/has-next",
  ["exports", "ember-composable-helpers/helpers/has-next"],
  function (e, t) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
          return t.default;
        },
      }),
      Object.defineProperty(e, "hasNext", {
        enumerable: !0,
        get: function () {
          return t.hasNext;
        },
      });
  }
),
  define(
    "simplefolio-ember/helpers/has-previous",
    ["exports", "ember-composable-helpers/helpers/has-previous"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "hasPrevious", {
          enumerable: !0,
          get: function () {
            return t.hasPrevious;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/inc",
    ["exports", "ember-composable-helpers/helpers/inc"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "inc", {
          enumerable: !0,
          get: function () {
            return t.inc;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/intersect",
    ["exports", "ember-composable-helpers/helpers/intersect"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/invoke",
    ["exports", "ember-composable-helpers/helpers/invoke"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "invoke", {
          enumerable: !0,
          get: function () {
            return t.invoke;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/is-array",
    ["exports", "ember-truth-helpers/helpers/is-array"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "isArray", {
          enumerable: !0,
          get: function () {
            return t.isArray;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/is-clipboard-supported",
    ["exports", "ember-cli-clipboard/helpers/is-clipboard-supported"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "isClipboardSupported", {
          enumerable: !0,
          get: function () {
            return t.isClipboardSupported;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/is-empty",
    ["exports", "ember-truth-helpers/helpers/is-empty"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/is-equal",
    ["exports", "ember-truth-helpers/helpers/is-equal"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "isEqual", {
          enumerable: !0,
          get: function () {
            return t.isEqual;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/join",
    ["exports", "ember-composable-helpers/helpers/join"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/lt",
    ["exports", "ember-truth-helpers/helpers/lt"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "lt", {
          enumerable: !0,
          get: function () {
            return t.lt;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/lte",
    ["exports", "ember-truth-helpers/helpers/lte"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "lte", {
          enumerable: !0,
          get: function () {
            return t.lte;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/map-by",
    ["exports", "ember-composable-helpers/helpers/map-by"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/map",
    ["exports", "ember-composable-helpers/helpers/map"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/media",
    ["exports", "ember-responsive/helpers/media"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "media", {
          enumerable: !0,
          get: function () {
            return t.media;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/next",
    ["exports", "ember-composable-helpers/helpers/next"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "next", {
          enumerable: !0,
          get: function () {
            return t.next;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/noop",
    ["exports", "ember-composable-helpers/helpers/noop"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "noop", {
          enumerable: !0,
          get: function () {
            return t.noop;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/not-eq",
    ["exports", "ember-truth-helpers/helpers/not-equal"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "notEq", {
          enumerable: !0,
          get: function () {
            return t.notEq;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/not",
    ["exports", "ember-truth-helpers/helpers/not"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "not", {
          enumerable: !0,
          get: function () {
            return t.not;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/object-at",
    ["exports", "ember-composable-helpers/helpers/object-at"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "objectAt", {
          enumerable: !0,
          get: function () {
            return t.objectAt;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/optional",
    ["exports", "ember-composable-helpers/helpers/optional"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "optional", {
          enumerable: !0,
          get: function () {
            return t.optional;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/or",
    ["exports", "ember-truth-helpers/helpers/or"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "or", {
          enumerable: !0,
          get: function () {
            return t.or;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/pipe-action",
    ["exports", "ember-composable-helpers/helpers/pipe-action"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/pipe",
    ["exports", "ember-composable-helpers/helpers/pipe"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "pipe", {
          enumerable: !0,
          get: function () {
            return t.pipe;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/previous",
    ["exports", "ember-composable-helpers/helpers/previous"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "previous", {
          enumerable: !0,
          get: function () {
            return t.previous;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/queue",
    ["exports", "ember-composable-helpers/helpers/queue"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "queue", {
          enumerable: !0,
          get: function () {
            return t.queue;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/range",
    ["exports", "ember-composable-helpers/helpers/range"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "range", {
          enumerable: !0,
          get: function () {
            return t.range;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/reduce",
    ["exports", "ember-composable-helpers/helpers/reduce"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/reject-by",
    ["exports", "ember-composable-helpers/helpers/reject-by"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/repeat",
    ["exports", "ember-composable-helpers/helpers/repeat"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "repeat", {
          enumerable: !0,
          get: function () {
            return t.repeat;
          },
        });
    }
  );
define(
  "simplefolio-ember/helpers/reverse",
  ["exports", "ember-composable-helpers/helpers/reverse"],
  function (e, t) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function () {
          return t.default;
        },
      });
  }
),
  define(
    "simplefolio-ember/helpers/shuffle",
    ["exports", "ember-composable-helpers/helpers/shuffle"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "shuffle", {
          enumerable: !0,
          get: function () {
            return t.shuffle;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/slice",
    ["exports", "ember-composable-helpers/helpers/slice"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/sort-by",
    ["exports", "ember-composable-helpers/helpers/sort-by"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/take",
    ["exports", "ember-composable-helpers/helpers/take"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/toggle-action",
    ["exports", "ember-composable-helpers/helpers/toggle-action"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/toggle",
    ["exports", "ember-composable-helpers/helpers/toggle"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "toggle", {
          enumerable: !0,
          get: function () {
            return t.toggle;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/union",
    ["exports", "ember-composable-helpers/helpers/union"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/without",
    ["exports", "ember-composable-helpers/helpers/without"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "without", {
          enumerable: !0,
          get: function () {
            return t.without;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/helpers/xor",
    ["exports", "ember-truth-helpers/helpers/xor"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        }),
        Object.defineProperty(e, "xor", {
          enumerable: !0,
          get: function () {
            return t.xor;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/initializers/app-version",
    [
      "exports",
      "ember-cli-app-version/initializer-factory",
      "simplefolio-ember/config/environment",
    ],
    function (e, t, r) {
      var n, o;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        r.default.APP &&
          ((n = r.default.APP.name), (o = r.default.APP.version));
      var i = { name: "App Version", initialize: (0, t.default)(n, o) };
      e.default = i;
    }
  ),
  define(
    "simplefolio-ember/initializers/container-debug-adapter",
    ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = {
        name: "container-debug-adapter",
        initialize: function () {
          var e = arguments[1] || arguments[0];
          e.register("container-debug-adapter:main", t.default),
            e.inject(
              "container-debug-adapter:main",
              "namespace",
              "application:main"
            );
        },
      };
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/initializers/ember-responsive-breakpoints",
    ["exports", "ember-responsive/initializers/responsive"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = t.default;
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/initializers/export-application-global",
    ["exports", "simplefolio-ember/config/environment"],
    function (e, t) {
      function r() {
        var e = arguments[1] || arguments[0];
        if (!1 !== t.default.exportApplicationGlobal) {
          var r;
          if ("undefined" != typeof window) r = window;
          else if ("undefined" != typeof global) r = global;
          else {
            if ("undefined" == typeof self) return;
            r = self;
          }
          var n,
            o = t.default.exportApplicationGlobal;
          (n =
            "string" == typeof o
              ? o
              : Ember.String.classify(t.default.modulePrefix)),
            r[n] ||
              ((r[n] = e),
              e.reopen({
                willDestroy: function () {
                  this._super.apply(this, arguments), delete r[n];
                },
              }));
        }
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initialize = r),
        (e.default = void 0);
      var n = { name: "export-application-global", initialize: r };
      e.default = n;
    }
  ),
  define(
    "simplefolio-ember/modifiers/did-insert",
    ["exports", "@ember/render-modifiers/modifiers/did-insert"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/modifiers/did-update",
    ["exports", "@ember/render-modifiers/modifiers/did-update"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/modifiers/jumpscroll",
    ["exports", "ember-modifier", "jump.js"],
    function (e, t, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = (0, t.modifier)(function (e) {
        var t = function (t) {
          t.preventDefault(), (0, r.default)(e.getAttribute("href"));
        };
        return (
          e.addEventListener("click", t),
          function () {
            e.removeEventListener("click", t);
          }
        );
      });
      e.default = n;
    }
  ),
  define(
    "simplefolio-ember/modifiers/will-destroy",
    ["exports", "@ember/render-modifiers/modifiers/will-destroy"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    }
  ),
  define(
    "simplefolio-ember/resolver",
    ["exports", "ember-resolver"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = t.default;
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/router",
    ["exports", "simplefolio-ember/config/environment"],
    function (e, t) {
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function i(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = s(e);
          if (t) {
            var o = s(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return l(this, r);
        };
      }
      function l(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t) ? a(e) : t;
      }
      function a(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var f = (function (e) {
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && o(e, t);
        })(l, Ember.Router);
        var r = i(l);
        function l() {
          var e;
          n(this, l);
          for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
            i[s] = arguments[s];
          return (
            u(
              a((e = r.call.apply(r, [this].concat(i)))),
              "location",
              t.default.locationType
            ),
            u(a(e), "rootURL", t.default.rootURL),
            e
          );
        }
        return l;
      })();
      (e.default = f), f.map(function () {});
    }
  ),
  define(
    "simplefolio-ember/services/etw-tailwind-styleguide",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var t = Ember.Service.extend({});
      e.default = t;
    }
  ),
  define(
    "simplefolio-ember/services/media",
    ["exports", "ember-responsive/services/media"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = t.default;
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/background-colors",
    ["exports", "simplefolio-ember/tailwind/config/colors"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = t.default;
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/background-size",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { auto: "auto", cover: "cover", contain: "contain" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/border-colors",
    ["exports", "simplefolio-ember/tailwind/config/colors"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = Object.assign({ default: t.default["grey-light"] }, t.default);
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/border-radius",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        none: "0",
        sm: ".125rem",
        default: ".25rem",
        lg: ".5rem",
        full: "9999px",
      };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/border-widths",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { default: "1px", 0: "0", 2: "2px", 4: "4px", 8: "8px" };
    }
  ),
  define("simplefolio-ember/tailwind/config/colors", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    e.default = {
      transparent: "transparent",
      black: "#22292f",
      "grey-darkest": "#3d4852",
      "grey-darker": "#606f7b",
      "grey-dark": "#8795a1",
      grey: "#b8c2cc",
      "grey-light": "#dae1e7",
      "grey-lighter": "#f1f5f8",
      "grey-lightest": "#f8fafc",
      white: "#ffffff",
      "red-darkest": "#3b0d0c",
      "red-darker": "#621b18",
      "red-dark": "#cc1f1a",
      red: "#e3342f",
      "red-light": "#ef5753",
      "red-lighter": "#f9acaa",
      "red-lightest": "#fcebea",
      "orange-darkest": "#462a16",
      "orange-darker": "#613b1f",
      "orange-dark": "#de751f",
      orange: "#f6993f",
      "orange-light": "#faad63",
      "orange-lighter": "#fcd9b6",
      "orange-lightest": "#fff5eb",
      "yellow-darkest": "#453411",
      "yellow-darker": "#684f1d",
      "yellow-dark": "#f2d024",
      yellow: "#ffed4a",
      "yellow-light": "#fff382",
      "yellow-lighter": "#fff9c2",
      "yellow-lightest": "#fcfbeb",
      "green-darkest": "#0f2f21",
      "green-darker": "#1a4731",
      "green-dark": "#1f9d55",
      green: "#38c172",
      "green-light": "#51d88a",
      "green-lighter": "#a2f5bf",
      "green-lightest": "#e3fcec",
      "teal-darkest": "#0d3331",
      "teal-darker": "#20504f",
      "teal-dark": "#38a89d",
      teal: "#4dc0b5",
      "teal-light": "#64d5ca",
      "teal-lighter": "#a0f0ed",
      "teal-lightest": "#e8fffe",
      "blue-darkest": "#12283a",
      "blue-darker": "#1c3d5a",
      "blue-dark": "#2779bd",
      blue: "#3490dc",
      "blue-light": "#6cb2eb",
      "blue-lighter": "#bcdefa",
      "blue-lightest": "#eff8ff",
      "indigo-darkest": "#191e38",
      "indigo-darker": "#2f365f",
      "indigo-dark": "#5661b3",
      indigo: "#6574cd",
      "indigo-light": "#7886d7",
      "indigo-lighter": "#b2b7ff",
      "indigo-lightest": "#e6e8ff",
      "purple-darkest": "#21183c",
      "purple-darker": "#382b5f",
      "purple-dark": "#794acf",
      purple: "#9561e2",
      "purple-light": "#a779e9",
      "purple-lighter": "#d6bbfc",
      "purple-lightest": "#f3ebff",
      "pink-darkest": "#451225",
      "pink-darker": "#6f213f",
      "pink-dark": "#eb5286",
      pink: "#f66d9b",
      "pink-light": "#fa7ea8",
      "pink-lighter": "#ffbbca",
      "pink-lightest": "#ffebef",
    };
  }),
  define(
    "simplefolio-ember/tailwind/config/font-weights",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      };
    }
  ),
  define("simplefolio-ember/tailwind/config/fonts", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    e.default = {
      sans: [
        "system-ui",
        "BlinkMacSystemFont",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      serif: [
        "Constantia",
        "Lucida Bright",
        "Lucidabright",
        "Lucida Serif",
        "Lucida",
        "DejaVu Serif",
        "Bitstream Vera Serif",
        "Liberation Serif",
        "Georgia",
        "serif",
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    };
  });
define("simplefolio-ember/tailwind/config/height", ["exports"], function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  e.default = {
    auto: "auto",
    px: "1px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    24: "6rem",
    32: "8rem",
    48: "12rem",
    64: "16rem",
    full: "100%",
    screen: "100vh",
  };
}),
  define(
    "simplefolio-ember/tailwind/config/letter-spacing",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { tight: "-0.05em", normal: "0", wide: "0.05em" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/line-height",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { none: 1, tight: 1.25, normal: 1.5, loose: 2 };
    }
  ),
  define("simplefolio-ember/tailwind/config/margin", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    e.default = {
      auto: "auto",
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
    };
  }),
  define(
    "simplefolio-ember/tailwind/config/max-height",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { full: "100%", screen: "100vh" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/max-width",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        xs: "20rem",
        sm: "30rem",
        md: "40rem",
        lg: "50rem",
        xl: "60rem",
        "2xl": "70rem",
        "3xl": "80rem",
        "4xl": "90rem",
        "5xl": "100rem",
        full: "100%",
      };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/min-height",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { 0: "0", full: "100%", screen: "100vh" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/min-width",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { 0: "0", full: "100%" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/negative-margin",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/opacity",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { 0: "0", 25: ".25", 50: ".5", 75: ".75", 100: "1" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/padding",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/screens",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { sm: "576px", md: "768px", lg: "992px", xl: "1200px" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/shadows",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        default: "0 2px 4px 0 rgba(0,0,0,0.10)",
        md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
        lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        outline: "0 0 0 3px rgba(52,144,220,0.5)",
        none: "none",
      };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/svg-fill",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { current: "currentColor" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/svg-stroke",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = { current: "currentColor" };
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/tailwind",
    [
      "exports",
      "tailwindcss/plugins/container",
      "simplefolio-ember/tailwind/config/colors",
      "simplefolio-ember/tailwind/config/screens",
      "simplefolio-ember/tailwind/config/fonts",
      "simplefolio-ember/tailwind/config/text-sizes",
      "simplefolio-ember/tailwind/config/font-weights",
      "simplefolio-ember/tailwind/config/line-height",
      "simplefolio-ember/tailwind/config/letter-spacing",
      "simplefolio-ember/tailwind/config/text-colors",
      "simplefolio-ember/tailwind/config/background-colors",
      "simplefolio-ember/tailwind/config/background-size",
      "simplefolio-ember/tailwind/config/border-widths",
      "simplefolio-ember/tailwind/config/border-colors",
      "simplefolio-ember/tailwind/config/border-radius",
      "simplefolio-ember/tailwind/config/width",
      "simplefolio-ember/tailwind/config/height",
      "simplefolio-ember/tailwind/config/min-width",
      "simplefolio-ember/tailwind/config/min-height",
      "simplefolio-ember/tailwind/config/max-width",
      "simplefolio-ember/tailwind/config/max-height",
      "simplefolio-ember/tailwind/config/padding",
      "simplefolio-ember/tailwind/config/margin",
      "simplefolio-ember/tailwind/config/negative-margin",
      "simplefolio-ember/tailwind/config/shadows",
      "simplefolio-ember/tailwind/config/z-index",
      "simplefolio-ember/tailwind/config/opacity",
      "simplefolio-ember/tailwind/config/svg-fill",
      "simplefolio-ember/tailwind/config/svg-stroke",
    ],
    function (
      e,
      t,
      r,
      n,
      o,
      i,
      l,
      a,
      s,
      u,
      f,
      d,
      c,
      p,
      m,
      b,
      g,
      y,
      h,
      v,
      w,
      x,
      _,
      O,
      j,
      P,
      S,
      k,
      M
    ) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var E = {
        colors: r.default,
        screens: n.default,
        fonts: o.default,
        textSizes: i.default,
        fontWeights: l.default,
        leading: a.default,
        tracking: s.default,
        textColors: u.default,
        backgroundColors: f.default,
        backgroundSize: d.default,
        borderWidths: c.default,
        borderColors: p.default,
        borderRadius: m.default,
        width: b.default,
        height: g.default,
        minWidth: y.default,
        minHeight: h.default,
        maxWidth: v.default,
        maxHeight: w.default,
        padding: x.default,
        margin: _.default,
        negativeMargin: O.default,
        shadows: j.default,
        zIndex: P.default,
        opacity: S.default,
        svgFill: k.default,
        svgStroke: M.default,
        modules: {
          appearance: ["responsive"],
          backgroundAttachment: ["responsive"],
          backgroundColors: ["responsive", "hover", "focus"],
          backgroundPosition: ["responsive"],
          backgroundRepeat: ["responsive"],
          backgroundSize: ["responsive"],
          borderCollapse: [],
          borderColors: ["responsive", "hover", "focus"],
          borderRadius: ["responsive"],
          borderStyle: ["responsive"],
          borderWidths: ["responsive"],
          cursor: ["responsive"],
          display: ["responsive"],
          flexbox: ["responsive"],
          float: ["responsive"],
          fonts: ["responsive"],
          fontWeights: ["responsive", "hover", "focus"],
          height: ["responsive"],
          leading: ["responsive"],
          lists: ["responsive"],
          margin: ["responsive"],
          maxHeight: ["responsive"],
          maxWidth: ["responsive"],
          minHeight: ["responsive"],
          minWidth: ["responsive"],
          negativeMargin: ["responsive"],
          objectFit: !1,
          objectPosition: !1,
          opacity: ["responsive"],
          outline: ["focus"],
          overflow: ["responsive"],
          padding: ["responsive"],
          pointerEvents: ["responsive"],
          position: ["responsive"],
          resize: ["responsive"],
          shadows: ["responsive", "hover", "focus"],
          svgFill: [],
          svgStroke: [],
          tableLayout: ["responsive"],
          textAlign: ["responsive"],
          textColors: ["responsive", "hover", "focus"],
          textSizes: ["responsive"],
          textStyle: ["responsive", "hover", "focus"],
          tracking: ["responsive"],
          userSelect: ["responsive"],
          verticalAlign: ["responsive"],
          visibility: ["responsive"],
          whitespace: ["responsive"],
          width: ["responsive"],
          zIndex: ["responsive"],
        },
        plugins: [(0, t.default)({})],
        options: { prefix: "", important: !1, separator: ":" },
      };
      e.default = E;
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/text-colors",
    ["exports", "simplefolio-ember/tailwind/config/colors"],
    function (e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = t.default;
      e.default = r;
    }
  ),
  define(
    "simplefolio-ember/tailwind/config/text-sizes",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      };
    }
  ),
  define("simplefolio-ember/tailwind/config/width", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    e.default = {
      auto: "auto",
      px: "1px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      24: "6rem",
      32: "8rem",
      48: "12rem",
      64: "16rem",
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "5/6": "83.33333%",
      full: "100%",
      screen: "100vw",
    };
  }),
  define(
    "simplefolio-ember/tailwind/config/z-index",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        auto: "auto",
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
      };
    }
  ),
  define(
    "simplefolio-ember/templates/application-tailwind",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var t = Ember.HTMLBars.template({
        id: "ve0T4ktc",
        block:
          '{"symbols":[],"statements":[[7,"div",true],[10,"class","etw-px-4 etw-my-8 etw-max-w-3xl etw-mx-auto etw-font-sans"],[8],[0,"\\n  "],[7,"div",true],[10,"class","etw-flex etw-mt-6"],[8],[0,"\\n    "],[7,"div",true],[10,"class","etw-w-3/4 etw-pr-6"],[8],[0,"\\n      "],[7,"h1",true],[10,"class","etw-pt-8 etw-text-3xl etw-font-bold"],[8],[0,"Your Tailwind styles"],[9],[0,"\\n      "],[7,"p",true],[10,"class","etw-mt-3 etw-mb-4 etw-text-lg"],[8],[0,"A reference for every generated class in your app."],[9],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Border radius",[28,"array",[".rounded{-side?}{-size?}"],null],[24,["moduleStyles","borderRadius"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Borders",[28,"array",[".border{-side?}{-width?}"],null],[24,["moduleStyles","borderWidths"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Colors",[28,"array",[".text-{color}",".bg-{color}",".border-{color}"],null],[24,["moduleStyles","colors"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Font weights",[28,"array",[".font-{weight}"],null],[24,["moduleStyles","fontWeights"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Height",[28,"array",[".h-{size}"],null],[24,["moduleStyles","height"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Letter spacing",[28,"array",[".tracking-{size}"],null],[24,["moduleStyles","letterSpacing"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Line height",[28,"array",[".leading-{size}"],null],[24,["moduleStyles","lineHeight"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Margin",[28,"array",[".m{side?}-{size}"],null],[24,["moduleStyles","margin"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Max height",[28,"array",[".max-h-{size}"],null],[24,["moduleStyles","maxHeight"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Max width",[28,"array",[".max-w-{size}"],null],[24,["moduleStyles","maxWidth"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Min height",[28,"array",[".min-h-{size}"],null],[24,["moduleStyles","minHeight"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Min width",[28,"array",[".min-w-{size}"],null],[24,["moduleStyles","minWidth"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Negative margin",[28,"array",[".-m{side?}-{size}"],null],[24,["moduleStyles","negativeMargin"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Opacity",[28,"array",[".opacity-{name}"],null],[24,["moduleStyles","opacity"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Padding",[28,"array",[".p{side?}-{size}"],null],[24,["moduleStyles","padding"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Shadows",[28,"array",[".shadow-{size?}"],null],[24,["moduleStyles","shadows"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["SVG fill",[28,"array",[".fill-{name}"],null],[24,["moduleStyles","svgFill"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["SVG stroke",[28,"array",[".stroke-{name}"],null],[24,["moduleStyles","svgStroke"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Text sizes",[28,"array",[".text-{size}"],null],[24,["moduleStyles","textSizes"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Width",[28,"array",[".w-{size}"],null],[24,["moduleStyles","width"]]]]],false],[0,"\\n\\n      "],[1,[28,"etw/module-section",null,[["title","codeSnippets","moduleStyles"],["Z index",[28,"array",[".z-{index}"],null],[24,["moduleStyles","zIndex"]]]]],false],[0,"\\n\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","etw-w-1/4 etw-relative"],[8],[0,"\\n      "],[1,[22,"etw/module-style-detail"],false],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',
        meta: {
          moduleName: "simplefolio-ember/templates/application-tailwind.hbs",
        },
      });
      e.default = t;
    }
  ),
  define("simplefolio-ember/templates/application", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var t = Ember.HTMLBars.template({
      id: "hiP7AQLR",
      block:
        '{"symbols":["social","project","paragraph","@leftToBottom","@rightToBottom"],"statements":[[7,"div",true],[10,"id","top"],[8],[9],[0,"\\n\\n"],[7,"div",true],[10,"id","welcome-section"],[8],[0,"\\n\\t"],[7,"div",true],[10,"class","container"],[8],[0,"\\n"],[0,"\\t\\t"],[5,"scroll-reveal",[[12,"class","load-hidden"]],[["@tagName","@elementId","@distance","@duration","@reset","@delay","@origin"],["h1","opening-text","30px",1000,true,500,[23,4,[]]]],{"statements":[[0,"\\n\\t\\t\\tHi, my name is "],[7,"span",true],[10,"class","text-color-main"],[8],[0,"Adam Allalou."],[9],[0,"\\n\\t\\t\\t"],[7,"span",true],[10,"class","block"],[8],[0,"I\'m a Web Developer."],[9],[0,"\\n\\t\\t"]],"parameters":[]}],[0,"\\n"],[0,"\\n"],[0,"\\t\\t"],[5,"scroll-reveal",[[12,"class","load-hidden"]],[["@tagName","@elementId","@distance","@duration","@reset","@delay","@origin"],["p","opening-paragraph","30px",1000,true,1000,[23,4,[]]]],{"statements":[[0,"\\n\\t\\t\\t"],[7,"a",false],[12,"class","cta-btn cta-btn--hero"],[12,"href","#about"],[3,"jumpscroll"],[8],[0,"Know more"],[9],[0,"\\n\\t\\t"]],"parameters":[]}],[0,"\\n\\t"],[9],[0,"\\n"],[9],[0,"\\n"],[0,"\\n\\n"],[7,"section",true],[10,"id","projects"],[8],[0,"\\n\\t"],[7,"div",true],[10,"class","container"],[8],[0,"\\n\\t\\t"],[5,"scroll-reveal",[[12,"class","section-title"]],[["@tagName","@duration","@delay"],["h2",1000,300]],{"statements":[[0,"\\n\\t\\t\\tAbout me\\n\\t\\t"]],"parameters":[]}],[0,"\\n\\t\\t\\n\\t\\t"],[7,"div",true],[10,"class","row about-wrapper"],[8],[0,"\\n\\t\\t\\t"],[7,"div",true],[10,"class","col-md-6 col-sm-12"],[8],[0,"\\n\\t\\t\\t\\t"],[5,"scroll-reveal",[[12,"class","about-wrapper__image"]],[["@distance","@duration"],["30px",1000]],{"statements":[[0,"\\n"],[0,"\\t\\t\\t\\t\\t"],[7,"img",true],[10,"class","img-fluid rounded shadow-lg"],[10,"height","auto"],[10,"width","300px"],[10,"src","dist/assets/images/profile.png"],[10,"alt","Profile"],[8],[9],[0,"\\n"],[0,"\\t\\t\\t\\t"]],"parameters":[]}],[0,"\\n\\t\\t\\t"],[9],[0,"\\n\\t\\t\\t"],[7,"div",true],[10,"class","col-md-6 col-sm-12"],[8],[0,"\\n\\t\\t\\t\\t"],[5,"scroll-reveal",[[12,"class","about-wrapper__info"]],[["@distance","@duration","@delay","@origin"],["30px",1000,1000,[23,4,[]]]],{"statements":[[0,"\\n"],[0,"\\t\\t\\t\\t\\t"],[7,"p",true],[10,"class","mb-8 text-left"],[8],[0,"\\n\\t\\t\\t\\t\\t\\tHi, I’m Adam, a web developer currently looking for my next job opportunity.\\n\\t\\t\\t\\t\\t"],[9],[0,"\\n\\t\\t\\t\\t\\t"],[7,"p",true],[10,"class","mb-8 text-left"],[8],[0,"\\n\\t\\t\\t\\t\\t\\tI’m creative, highly analytical, and very passionate about web development and technology. \\n\\t\\t\\t\\t\\t"],[9],[0,"\\n\\t\\t\\t\\t\\t"],[7,"p",true],[10,"class","mb-8 text-left"],[8],[0,"\\n\\t\\t\\t\\t\\t\\tI\'m a maker at heart. In my free time, I like to acquire as many skills, like learning a new language or cooking.\\n\\t\\t\\t\\t\\t"],[9],[0,"\\n\\t\\t\\t\\t\\t"],[7,"p",true],[10,"class","mb-8 text-left"],[8],[0,"\\n\\t\\t\\t\\t\\t\\tWhether it\'s learning a new programming language, learning a new language, cooking, or any other skill I can get the tools for.\\n\\n"],[0,"\\t\\t\\t\\t\\t\\t"],[7,"a",true],[10,"rel","noopener noreferrer"],[10,"target","_blank"],[10,"class","mt-8 cta-btn cta-btn--resume"],[10,"href","https://bit.ly/MYResum/edit?usp=sharing"],[8],[0,"\\n\\t\\t\\t\\t\\t\\t\\tView Resume\\n\\t\\t\\t\\t\\t\\t"],[9],[0,"\\n"],[0,"\\t\\t\\t\\t\\t"],[9],[0,"\\n"],[0,"\\t\\t\\t\\t"]],"parameters":[]}],[0,"\\n\\t\\t\\t"],[9],[0,"\\n\\t\\t"],[9],[0,"\\n\\t"],[9],[0,"\\n"],[9],[0,"\\n"],[0,"\\n\\n"],[7,"section",true],[10,"id","projects"],[8],[0,"\\n\\t"],[7,"div",true],[10,"class","container"],[8],[0,"\\n"],[0,"\\t\\t"],[7,"div",true],[10,"class","project-wrapper"],[8],[0,"\\n\\t\\t\\t"],[5,"scroll-reveal",[[12,"class","section-title dark-blue-text"]],[["@tagName","@duration","@delay"],["h2",1000,300]],{"statements":[[0,"\\n\\t\\t\\t\\tProjects\\n\\t\\t\\t"]],"parameters":[]}],[0,"\\n\\n"],[4,"each",[[23,0,["projects"]]],null,{"statements":[[0,"\\t\\t\\t\\t"],[7,"div",true],[10,"class","row"],[8],[0,"\\n\\t\\t\\t\\t\\t"],[7,"div",true],[10,"class","col-lg-4 col-sm-12"],[8],[0,"\\n\\t\\t\\t\\t\\t\\t"],[5,"scroll-reveal",[[12,"class","project-wrapper__text"]],[["@distance","@duration","@delay","@origin"],["30px",1000,500,[23,4,[]]]],{"statements":[[0,"\\n"],[0,"\\t\\t\\t\\t\\t\\t\\t"],[7,"h3",true],[10,"class","project-wrapper__text-title"],[8],[1,[23,2,["name"]],false],[9],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\n"],[4,"if",[[23,2,["description"]]],null,{"statements":[[0,"\\t\\t\\t\\t\\t\\t\\t\\t"],[7,"div",true],[8],[0,"\\n"],[4,"each",[[23,2,["description"]]],null,{"statements":[[0,"\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t"],[7,"p",true],[10,"class","mb-4"],[8],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t"],[1,[23,3,[]],false],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[3]},null],[0,"\\t\\t\\t\\t\\t\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,2,["url"]]],null,{"statements":[[0,"\\t\\t\\t\\t\\t\\t\\t\\t"],[7,"a",true],[10,"rel","noopener noreferrer"],[10,"target","_blank"],[10,"class","cta-btn cta-btn--hero"],[11,"href",[23,2,["url"]]],[8],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tSee Live\\n\\t\\t\\t\\t\\t\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,2,["repo"]]],null,{"statements":[[0,"\\t\\t\\t\\t\\t\\t\\t\\t"],[7,"a",true],[10,"rel","noopener noreferrer"],[10,"target","_blank"],[10,"class","cta-btn text-color-main"],[11,"href",[23,2,["repo"]]],[8],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tSource Code\\n\\t\\t\\t\\t\\t\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\t\\t\\t\\t\\t\\t"]],"parameters":[]}],[0,"\\n\\t\\t\\t\\t\\t"],[9],[0,"\\n\\t\\t\\t\\t\\t"],[7,"div",true],[10,"class","col-lg-8 col-sm-12"],[8],[0,"\\n\\t\\t\\t\\t\\t\\t"],[5,"scroll-reveal",[[12,"class","project-wrapper__image"]],[["@distance","@duration","@delay","@origin"],["30px",1000,1000,[23,5,[]]]],{"statements":[[0,"\\n"],[4,"if",[[23,2,["url"]]],null,{"statements":[[0,"\\t\\t\\t\\t\\t\\t\\t\\t"],[7,"a",true],[11,"href",[23,2,["url"]]],[10,"rel","noopener noreferrer"],[10,"target","_blank"],[8],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t"],[5,"tilt-element",[[12,"class","thumbnail rounded"]],[["@max","@glare","@max-glare"],[7,true,0.5]],{"statements":[[0,"\\n"],[0,"\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t"],[7,"img",true],[10,"class","img-fluid"],[11,"src",[23,2,["thumbnail","image"]]],[11,"alt",[23,2,["thumbnail","alt"]]],[8],[9],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t"]],"parameters":[]}],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"\\t\\t\\t\\t\\t\\t\\t\\t"],[5,"tilt-element",[[12,"class","thumbnail rounded"]],[["@max","@glare","@max-glare"],[7,true,0.5]],{"statements":[[0,"\\n"],[0,"\\t\\t\\t\\t\\t\\t\\t\\t\\t"],[7,"img",true],[10,"class","img-fluid"],[11,"src",[23,2,["thumbnail","image"]]],[11,"alt",[23,2,["thumbnail","alt"]]],[8],[9],[0,"\\n\\t\\t\\t\\t\\t\\t\\t\\t"]],"parameters":[]}],[0,"\\n"]],"parameters":[]}],[0,"\\t\\t\\t\\t\\t\\t"]],"parameters":[]}],[0,"\\n\\t\\t\\t\\t\\t"],[9],[0,"\\n\\t\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[2]},null],[0,"\\t\\t"],[9],[0,"\\n"],[0,"\\t"],[9],[0,"\\n"],[9],[0,"\\n"],[0,"\\n\\n"],[7,"section",true],[10,"id","contact"],[8],[0,"\\n\\t"],[7,"div",true],[10,"class","container"],[8],[0,"\\n\\t\\t"],[5,"scroll-reveal",[[12,"class","section-title"]],[["@tagName","@duration","@delay"],["h2",1000,300]],{"statements":[[0,"\\n\\t\\t\\tContact\\n\\t\\t"]],"parameters":[]}],[0,"\\n\\t\\t"],[5,"scroll-reveal",[[12,"class","contact-wrapper"]],[["@distance","@duration","@delay"],["30px",1000,800]],{"statements":[[0,"\\n"],[0,"\\t\\t\\t"],[7,"p",true],[10,"class","mb-4 contact-wrapper__text"],[8],[0,"\\n\\t\\t\\t\\tGet in touch with me\\n\\t\\t\\t"],[9],[0,"\\n"],[0,"\\t\\t\\t"],[7,"a",true],[10,"rel","noopener noreferrer"],[10,"target","_blank"],[10,"class","cta-btn cta-btn--resume"],[10,"href","mailto:aabou9@gmail.com"],[8],[0,"\\n\\t\\t\\t\\tSend email now\\n\\t\\t\\t"],[9],[0,"\\n\\t\\t"]],"parameters":[]}],[0,"\\n\\t"],[9],[0,"\\n"],[9],[0,"\\n"],[0,"\\n\\n"],[7,"footer",true],[10,"class","footer navbar-static-bottom"],[8],[0,"\\n\\t"],[7,"div",true],[10,"class","container"],[8],[0,"\\n\\t\\t"],[7,"a",false],[12,"class","back-to-top"],[12,"href","#top"],[3,"jumpscroll"],[8],[0,"\\n\\t\\t\\t"],[7,"span",true],[10,"class","sr-only"],[8],[0,"Back to top"],[9],[0,"\\n\\t\\t\\t"],[1,[28,"fa-icon",["angle-up"],[["class","prefix","size"],["pointer-events-none","fas","2x"]]],false],[0,"\\n\\t\\t"],[9],[0,"\\n\\n"],[4,"if",[[23,0,["socials"]]],null,{"statements":[[0,"\\t\\t\\t"],[7,"div",true],[10,"class","social-links"],[8],[0,"\\n"],[4,"each",[[23,0,["socials"]]],null,{"statements":[[0,"\\t\\t\\t\\t\\t"],[7,"a",true],[11,"href",[23,1,["url"]]],[10,"rel","noopener noreferrer"],[10,"target","_blank"],[11,"aria-label",[29,["Follow me on ",[23,1,["name"]]]]],[8],[0,"\\n\\t\\t\\t\\t\\t\\t"],[1,[28,"fa-icon",[[23,1,["name"]]],[["class","prefix","aria-label"],["fa-inverse pointer-events-none","fab",[23,1,["name"]]]]],false],[0,"\\n\\t\\t\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[1]},null],[0,"\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n\\t\\t"],[7,"hr",true],[8],[9],[0,"\\n\\n"],[0,"\\t\\t"],[7,"p",true],[10,"class","footer__text"],[8],[0,"\\n\\t\\t\\t© 2020 - Developed by\\n\\t\\t\\t"],[7,"a",true],[10,"href","https://github.com/adamclasic"],[10,"rel","noopener noreferrer"],[10,"target","_blank"],[8],[0,"\\n\\t\\t\\t\\tAdam Allalou\\n\\t\\t\\t"],[9],[0,"\\n\\t\\t"],[9],[0,"\\n\\t"],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',
      meta: { moduleName: "simplefolio-ember/templates/application.hbs" },
    });
    e.default = t;
  }),
  define(
    "simplefolio-ember/templates/components/etw/module-section",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var t = Ember.HTMLBars.template({
        id: "89a5NrtG",
        block:
          '{"symbols":["moduleStyle","snippet"],"statements":[[7,"section",true],[8],[0,"\\n  "],[7,"h2",true],[10,"class","etw-pt-8 etw-mb-6 etw-text-lg etw-font-bold"],[8],[1,[22,"title"],false],[9],[0,"\\n\\n  "],[7,"ul",true],[10,"class","etw-list-reset etw-leading-normal"],[8],[0,"\\n"],[4,"each",[[24,["codeSnippets"]]],null,{"statements":[[0,"      "],[7,"li",true],[8],[7,"code",true],[8],[1,[23,2,[]],false],[9],[9],[0,"\\n"]],"parameters":[2]},null],[0,"  "],[9],[0,"\\n\\n  "],[7,"div",true],[10,"class","etw-mt-8 etw-flex etw-flex-wrap"],[8],[0,"\\n"],[4,"each",[[24,["moduleStyles"]]],null,{"statements":[[0,"      "],[1,[28,"etw/module-style-example",null,[["moduleStyle"],[[23,1,[]]]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',
        meta: {
          moduleName:
            "simplefolio-ember/templates/components/etw/module-section.hbs",
        },
      });
      e.default = t;
    }
  ),
  define(
    "simplefolio-ember/templates/components/etw/module-style-detail",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var t = Ember.HTMLBars.template({
        id: "DtRzNqTq",
        block:
          '{"symbols":["style","state","breakpoint"],"statements":[[7,"div",true],[10,"class","etw-shadow-lg etw-fixed etw-mr-4 etw-px-4 etw-pt-4 etw-pb-14 etw-bg-white etw-w-64 etw-mt-8 overflow-y-auto etw-h-screen"],[8],[0,"\\n  "],[7,"h3",true],[8],[0,"Detail"],[9],[0,"\\n\\n"],[4,"if",[[24,["moduleStyle"]]],null,{"statements":[[0,"\\n    "],[7,"div",true],[10,"class","etw-my-8"],[8],[0,"\\n      "],[1,[28,"etw/module-style-example",null,[["moduleStyle"],[[24,["moduleStyle"]]]]],false],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","etw-mt-4"],[8],[0,"\\n      "],[7,"h4",true],[10,"class","etw-inline-block etw-pr-2"],[8],[0,"Responsive: "],[9],[0,"\\n      "],[7,"div",true],[10,"class","etw-mt-2 etw-text-sm etw-inline-block"],[8],[0,"\\n"],[4,"each",[[28,"array",["all","sm","md","lg","xl"],null]],null,{"statements":[[0,"          "],[7,"a",false],[12,"href","#"],[12,"class",[29,["\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              ",[28,"if",[[28,"eq",[[24,["activeResponsiveClass"]],[23,3,[]]],null],"etw-opacity-100","etw-opacity-25"],null],"\\n            "]]],[3,"action",[[23,0,[]],[28,"mut",[[24,["activeResponsiveClass"]]],null],[23,3,[]]]],[8],[0,"\\n            "],[1,[23,3,[]],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[3]},null],[0,"      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","etw-mt-4"],[8],[0,"\\n      "],[7,"h4",true],[10,"class","etw-inline-block etw-pr-2"],[8],[0,"State: "],[9],[0,"\\n      "],[7,"div",true],[10,"class","etw-mt-2 etw-text-sm etw-inline-block"],[8],[0,"\\n"],[4,"each",[[28,"array",["none","hover","focus"],null]],null,{"statements":[[0,"          "],[7,"a",false],[12,"href","#"],[12,"class",[29,["\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              ",[28,"if",[[28,"eq",[[24,["activeState"]],[23,2,[]]],null],"etw-opacity-100","etw-opacity-25"],null],"\\n            "]]],[3,"action",[[23,0,[]],[28,"mut",[[24,["activeState"]]],null],[23,2,[]]]],[8],[0,"\\n            "],[1,[23,2,[]],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[2]},null],[0,"      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","etw-mt-8 etw-mb-4"],[8],[0,"\\n      "],[7,"p",true],[10,"class","etw-text-right etw-text-xs etw-opacity-50"],[8],[0,"\\n"],[4,"if",[[24,["highlightedStyle"]]],null,{"statements":[[0,"          Copied!\\n"]],"parameters":[]},{"statements":[[0,"          Click to copy\\n"]],"parameters":[]}],[0,"      "],[9],[0,"\\n\\n      "],[7,"ul",true],[10,"class","etw-mt-3 etw-list-reset"],[8],[0,"\\n"],[4,"each",[[24,["detailStyles"]]],null,{"statements":[[0,"          "],[7,"li",true],[10,"class","etw-mt-4"],[8],[0,"\\n"],[4,"copy-button",null,[["class","clipboardText","title","success"],[[28,"concat",["etw-bg-grey-light etw-opacity-75 hover:etw-opacity-100 ","etw-px-1 etw-py-2 etw-w-full etw-text-left etw-transition ",[28,"if",[[28,"eq",[[24,["highlightedStyle"]],[23,1,[]]],null],"etw-bg-green etw-text-white"],null]],null],[23,1,[]],"Copy",[28,"action",[[23,0,[]],"highlightStyle",[23,1,[]]],null]]],{"statements":[[0,"              "],[7,"code",true],[8],[0,"."],[1,[23,1,[]],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"          "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"      "],[9],[0,"\\n    "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[0,"\\n    "],[7,"p",true],[10,"class","etw-mt-4 etw-text-grey etw-italic"],[8],[0,"Select a module for more detail."],[9],[0,"\\n\\n"]],"parameters":[]}],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',
        meta: {
          moduleName:
            "simplefolio-ember/templates/components/etw/module-style-detail.hbs",
        },
      });
      e.default = t;
    }
  ),
  define(
    "simplefolio-ember/templates/components/etw/module-style-example",
    ["exports"],
    function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var t = Ember.HTMLBars.template({
        id: "Rav7EQS3",
        block:
          '{"symbols":[],"statements":[[7,"a",false],[12,"class","etw-mb-8 etw-w-1/5 etw-p-2"],[3,"action",[[23,0,[]],"selectModuleStyle"]],[8],[0,"\\n  "],[7,"div",true],[10,"class","etw-text-center etw-m-4 etw-text-sm "],[8],[0,"\\n    "],[7,"div",true],[10,"class","etw-text-center etw-m-4 etw-text-sm "],[8],[0,"\\n\\n"],[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"border-radius"],null]],null,{"statements":[[0,"\\n        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          ",[24,["classesForModuleStyle","0"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"border-widths"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border-red etw-bg-grey-lighter etw-border-solid\\n          ",[24,["classesForModuleStyle","0"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"colors"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["etw-marginx-auto etw-w-full etw-h-24 bg-",[24,["moduleStyle","name"]]]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"font-weights"],null]],null,{"statements":[[0,"        "],[7,"p",true],[11,"class",[29,["font-",[24,["moduleStyle","name"]]]]],[8],[0,"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"height"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          ",[24,["classesForModuleStyle","0"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"letter-spacing"],null]],null,{"statements":[[0,"        "],[7,"p",true],[11,"class",[29,["text-left tracking-",[24,["moduleStyle","name"]]]]],[8],[0,"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"line-height"],null]],null,{"statements":[[0,"        "],[7,"p",true],[11,"class",[29,["text-left leading-",[24,["moduleStyle","name"]]]]],[8],[0,"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"margin"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["etw-bg-red etw-w-24 etw-mx-auto etw-border-t etw-border-solid ",[28,"if",[[28,"eq",[[24,["moduleStyle","name"]],"auto"],null],"","etw-border-transparent"],null]]]],[8],[0,"\\n          "],[7,"div",true],[11,"class",[29,["\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            mt-",[24,["moduleStyle","name"]],"\\n          "]]],[8],[9],[0,"\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"max-height"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-h-",[24,["moduleStyle","name"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"max-width"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-w-",[24,["moduleStyle","name"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"min-height"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-h-",[24,["moduleStyle","name"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"min-width"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-w-",[24,["moduleStyle","name"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"negative-margin"],null]],null,{"statements":[[0,"        "],[7,"div",true],[10,"class","etw-mb-8 etw-bg-red etw-px-4 etw-pb-4 etw-mx-auto etw-h-32 etw-relative"],[8],[0,"\\n          "],[7,"div",true],[10,"class","etw-absolute etw-pin-x"],[8],[0,"\\n            "],[7,"div",true],[11,"class",[29,["\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n            etw-bg-grey-lighter etw-shadow-lg\\n            -mt-",[24,["moduleStyle","name"]],"\\n            "]]],[8],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"opacity"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          opacity-",[24,["moduleStyle","name"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"padding"],null]],null,{"statements":[[0,"        "],[7,"div",true],[10,"class","etw-bg-red etw-w-24 etw-mx-auto"],[8],[0,"\\n          "],[7,"div",true],[11,"class",[29,["\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            pt-",[24,["moduleStyle","name"]],"\\n          "]]],[8],[0,"\\n            "],[7,"p",true],[10,"class","etw-text-grey-darker"],[8],[0,"Lorem"],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"shadows"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-white\\n          ",[24,["classesForModuleStyle","0"]],"\\n        "]]],[8],[0,"\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"svg-fill"],null]],null,{"statements":[[0,"        "],[7,"div",true],[10,"class","etw-bg-grey-lighter etw-text-red etw-py-4"],[8],[0,"\\n          "],[7,"svg",true],[10,"class","fill-current inline-block h-12 w-12"],[10,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[10,"viewBox","0 0 20 20"],[8],[0,"\\n            "],[7,"path",true],[10,"d","M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"],[8],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"svg-stroke"],null]],null,{"statements":[[0,"        "],[7,"div",true],[10,"class","etw-bg-grey-lighter etw-text-red etw-py-4"],[8],[0,"\\n          "],[7,"svg",true],[10,"class","stroke-current inline-block h-12 w-12"],[10,"viewBox","0 0 24 24"],[10,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[10,"fill","none"],[10,"stroke-width","2"],[10,"stroke-linecap","round"],[10,"stroke-linejoin","round"],[8],[0,"\\n              "],[7,"circle",true],[10,"cx","8"],[10,"cy","21"],[10,"r","2"],[8],[9],[0,"\\n              "],[7,"circle",true],[10,"cx","20"],[10,"cy","21"],[10,"r","2"],[8],[9],[0,"\\n              "],[7,"path",true],[10,"d","M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"],[8],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"text-sizes"],null]],null,{"statements":[[0,"        "],[7,"p",true],[11,"class",[29,["text-left text-",[24,["moduleStyle","name"]]]]],[8],[0,"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        "],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"width"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          ",[24,["classesForModuleStyle","0"]],"\\n        "]]],[8],[9],[0,"\\n\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"eq",[[24,["moduleStyle","module"]],"z-index"],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          ",[24,["classesForModuleStyle","0"]],"\\n        "]]],[8],[9],[0,"\\n\\n      "]],"parameters":[]},null]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}],[0,"\\n      "],[7,"div",true],[10,"class","etw-mt-3 etw-leading-normal"],[8],[0,"\\n        "],[7,"p",true],[8],[1,[24,["moduleStyle","name"]],false],[9],[0,"\\n        "],[7,"p",true],[10,"class","etw-opacity-50"],[8],[1,[24,["moduleStyle","value"]],false],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',
        meta: {
          moduleName:
            "simplefolio-ember/templates/components/etw/module-style-example.hbs",
        },
      });
      e.default = t;
    }
  ),
  define("simplefolio-ember/utils/data", ["exports"], function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.socials = e.projects = void 0);
    e.projects = [
      {
        name: "Marsel ‑ Cross Sell & Upsell",
        description: [
          "Intelligent and relevant product recommendations can drastically improve your Average Order Value (AOV) per customer and increase conversions. Marvel's strong recommendations can power your Shopify stores with this proven formula. Our recommendations are purpose-built to make your shoppers stay on for that extra minute. Build with:\n\t\t\tMERN\n\t\t\tApolo\n\t\t\tGcloud",
        ],
        url: "https://apps.shopify.com/marsel-prod",
        repo: "https://apps.shopify.com/marsel-prod",
        thumbnail: {
          image: "dist/assets/images/marsel.gif",
          alt: "project banner",
        },
      },
      {
        name: "Redsea Shopify+ theme",
        description: [
          "After years of successfully delivering quality products and service, Abdul Lateef Jameel Electronics proudly launches its new retail stores and website “redsea” - An Omni channel, one-stop shop for electronics, appliances and air conditioning that provides premium and quality global brands at affordable prices. A shopify theme",
        ],
        url: "https://redsea.com/en",
        repo: "https://redsea.com/en",
        thumbnail: {
          image: "dist/assets/images/redsea.png",
          alt: "project banner",
        },
      },
      {
        name: "Corona Fighter",
        description: [
          "An RPG video game runs on HTML5 canvas built using Javascript and the game engine Phaser 3.",
        ],
        url: "https://rawcdn.githack.com/adamclasic/corona-fighter/9312b3ab7a1a45dda5bab5a811b4424ebf7d53c0/dist/index.html",
        repo: "http://bit.ly/CoronaFighterGameRepo",
        thumbnail: {
          image: "dist/assets/images/feature.png",
          alt: "project banner",
        },
      },
      {
        name: "Flower Eshop",
        description: [
          "This is a demo flower and holiday bouquet e-Shop, built using a bright color scheme, a 12-column grid, and the principle of atomic design. Build with Jquery, JqueryUi, Bootstrap",
        ],
        url: "https://bit.ly/flowerEshoplive",
        repo: "https://bit.ly/flowerEshopCode",
        thumbnail: {
          image: "dist/assets/images/social for flower shop.png",
          alt: "project banner",
        },
      },
    ];
    e.socials = [
      { name: "twitter", url: "https://twitter.com/AdamAllalou" },
      { name: "codepen", url: "https://medium.com/@aabou9" },
      { name: "linkedin", url: "https://www.linkedin.com/in/adam-allalou/" },
      { name: "github", url: "https://github.com/adamclasic" },
    ];
  }),
  define("simplefolio-ember/config/environment", [], function () {
    var e = {
      default: {
        modulePrefix: "simplefolio-ember",
        environment: "production",
        rootURL: "/",
        locationType: "auto",
        EmberENV: {
          FEATURES: {},
          EXTEND_PROTOTYPES: { Date: !1 },
          _APPLICATION_TEMPLATE_WRAPPER: !1,
          _DEFAULT_ASYNC_OBSERVERS: !0,
          _JQUERY_INTEGRATION: !1,
          _TEMPLATE_ONLY_GLIMMER_COMPONENTS: !0,
        },
        APP: { name: "simplefolio-ember", version: "1.0.0+95cf0163" },
        fontawesome: {
          icons: {
            "free-brands-svg-icons": [
              "twitter",
              "codepen",
              "linkedin",
              "github",
            ],
            "free-solid-svg-icons": ["angle-up"],
          },
        },
        exportApplicationGlobal: !1,
      },
    };
    return Object.defineProperty(e, "__esModule", { value: !0 }), e;
  }),
  runningTests ||
    require("simplefolio-ember/app").default.create({
      name: "simplefolio-ember",
      version: "1.0.0+95cf0163",
    });
