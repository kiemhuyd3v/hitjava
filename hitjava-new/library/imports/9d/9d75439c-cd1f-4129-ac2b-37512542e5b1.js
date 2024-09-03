"use strict";
cc._RF.push(module, '9d754OczR9BKawrN1ElQuWx', 'Sockjs.min');
// Loading/src/Sockjs.min.js

"use strict";

/* sockjs-client v1.3.0 | http://sockjs.org | MIT license */
!function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).SockJS = e();
  }
}(function () {
  return function i(s, a, l) {
    function c(t, e) {
      if (!a[t]) {
        if (!s[t]) {
          var n = "function" == typeof require && require;
          if (!e && n) return n(t, !0);
          if (u) return u(t, !0);
          var r = new Error("Cannot find module '" + t + "'");
          throw r.code = "MODULE_NOT_FOUND", r;
        }

        var o = a[t] = {
          exports: {}
        };
        s[t][0].call(o.exports, function (e) {
          return c(s[t][1][e] || e);
        }, o, o.exports, i, s, a, l);
      }

      return a[t].exports;
    }

    for (var u = "function" == typeof require && require, e = 0; e < l.length; e++) {
      c(l[e]);
    }

    return c;
  }({
    1: [function (n, r, e) {
      (function (e) {
        "use strict";

        var t = n("./transport-list");
        r.exports = n("./main")(t), "_sockjs_onload" in e && setTimeout(e._sockjs_onload, 1);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./main": 14,
      "./transport-list": 16
    }],
    2: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("./event");

      function i() {
        o.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = "";
      }

      r(i, o), t.exports = i;
    }, {
      "./event": 4,
      "inherits": 54
    }],
    3: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("./eventtarget");

      function i() {
        o.call(this);
      }

      r(i, o), i.prototype.removeAllListeners = function (e) {
        e ? delete this._listeners[e] : this._listeners = {};
      }, i.prototype.once = function (t, n) {
        var r = this,
            o = !1;
        this.on(t, function e() {
          r.removeListener(t, e), o || (o = !0, n.apply(this, arguments));
        });
      }, i.prototype.emit = function () {
        var e = arguments[0],
            t = this._listeners[e];

        if (t) {
          for (var n = arguments.length, r = new Array(n - 1), o = 1; o < n; o++) {
            r[o - 1] = arguments[o];
          }

          for (var i = 0; i < t.length; i++) {
            t[i].apply(this, r);
          }
        }
      }, i.prototype.on = i.prototype.addListener = o.prototype.addEventListener, i.prototype.removeListener = o.prototype.removeEventListener, t.exports.EventEmitter = i;
    }, {
      "./eventtarget": 5,
      "inherits": 54
    }],
    4: [function (e, t, n) {
      "use strict";

      function r(e) {
        this.type = e;
      }

      r.prototype.initEvent = function (e, t, n) {
        return this.type = e, this.bubbles = t, this.cancelable = n, this.timeStamp = +new Date(), this;
      }, r.prototype.stopPropagation = function () {}, r.prototype.preventDefault = function () {}, r.CAPTURING_PHASE = 1, r.AT_TARGET = 2, r.BUBBLING_PHASE = 3, t.exports = r;
    }, {}],
    5: [function (e, t, n) {
      "use strict";

      function r() {
        this._listeners = {};
      }

      r.prototype.addEventListener = function (e, t) {
        e in this._listeners || (this._listeners[e] = []);
        var n = this._listeners[e];
        -1 === n.indexOf(t) && (n = n.concat([t])), this._listeners[e] = n;
      }, r.prototype.removeEventListener = function (e, t) {
        var n = this._listeners[e];

        if (n) {
          var r = n.indexOf(t);
          -1 === r || (1 < n.length ? this._listeners[e] = n.slice(0, r).concat(n.slice(r + 1)) : delete this._listeners[e]);
        }
      }, r.prototype.dispatchEvent = function () {
        var e = arguments[0],
            t = e.type,
            n = 1 === arguments.length ? [e] : Array.apply(null, arguments);
        if (this["on" + t] && this["on" + t].apply(this, n), t in this._listeners) for (var r = this._listeners[t], o = 0; o < r.length; o++) {
          r[o].apply(this, n);
        }
      }, t.exports = r;
    }, {}],
    6: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("./event");

      function i(e) {
        o.call(this), this.initEvent("message", !1, !1), this.data = e;
      }

      r(i, o), t.exports = i;
    }, {
      "./event": 4,
      "inherits": 54
    }],
    7: [function (e, t, n) {
      "use strict";

      var r = e("json3"),
          o = e("./utils/iframe");

      function i(e) {
        (this._transport = e).on("message", this._transportMessage.bind(this)), e.on("close", this._transportClose.bind(this));
      }

      i.prototype._transportClose = function (e, t) {
        o.postMessage("c", r.stringify([e, t]));
      }, i.prototype._transportMessage = function (e) {
        o.postMessage("t", e);
      }, i.prototype._send = function (e) {
        this._transport.send(e);
      }, i.prototype._close = function () {
        this._transport.close(), this._transport.removeAllListeners();
      }, t.exports = i;
    }, {
      "./utils/iframe": 47,
      "json3": 55
    }],
    8: [function (e, t, n) {
      "use strict";

      var f = e("./utils/url"),
          r = e("./utils/event"),
          h = e("json3"),
          d = e("./facade"),
          o = e("./info-iframe-receiver"),
          p = e("./utils/iframe"),
          v = e("./location"),
          m = function m() {};

      t.exports = function (l, e) {
        var c,
            u = {};
        e.forEach(function (e) {
          e.facadeTransport && (u[e.facadeTransport.transportName] = e.facadeTransport);
        }), u[o.transportName] = o, l.bootstrap_iframe = function () {
          var a;
          p.currentWindowId = v.hash.slice(1);
          r.attachEvent("message", function (t) {
            if (t.source === parent && (void 0 === c && (c = t.origin), t.origin === c)) {
              var n;

              try {
                n = h.parse(t.data);
              } catch (e) {
                return void m("bad json", t.data);
              }

              if (n.windowId === p.currentWindowId) switch (n.type) {
                case "s":
                  var e;

                  try {
                    e = h.parse(n.data);
                  } catch (e) {
                    m("bad json", n.data);
                    break;
                  }

                  var r = e[0],
                      o = e[1],
                      i = e[2],
                      s = e[3];
                  if (m(r, o, i, s), r !== l.version) throw new Error('Incompatible SockJS! Main site uses: "' + r + '", the iframe: "' + l.version + '".');
                  if (!f.isOriginEqual(i, v.href) || !f.isOriginEqual(s, v.href)) throw new Error("Can't connect to different domain from within an iframe. (" + v.href + ", " + i + ", " + s + ")");
                  a = new d(new u[o](i, s));
                  break;

                case "m":
                  a._send(n.data);

                  break;

                case "c":
                  a && a._close(), a = null;
              }
            }
          }), p.postMessage("s");
        };
      };
    }, {
      "./facade": 7,
      "./info-iframe-receiver": 10,
      "./location": 13,
      "./utils/event": 46,
      "./utils/iframe": 47,
      "./utils/url": 52,
      "debug": void 0,
      "json3": 55
    }],
    9: [function (e, t, n) {
      "use strict";

      var r = e("events").EventEmitter,
          o = e("inherits"),
          s = e("json3"),
          a = e("./utils/object"),
          l = function l() {};

      function i(e, t) {
        r.call(this);
        var o = this,
            i = +new Date();
        this.xo = new t("GET", e), this.xo.once("finish", function (e, t) {
          var n, r;

          if (200 === e) {
            if (r = +new Date() - i, t) try {
              n = s.parse(t);
            } catch (e) {
              l("bad json", t);
            }
            a.isObject(n) || (n = {});
          }

          o.emit("finish", n, r), o.removeAllListeners();
        });
      }

      o(i, r), i.prototype.close = function () {
        this.removeAllListeners(), this.xo.close();
      }, t.exports = i;
    }, {
      "./utils/object": 49,
      "debug": void 0,
      "events": 3,
      "inherits": 54,
      "json3": 55
    }],
    10: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("events").EventEmitter,
          i = e("json3"),
          s = e("./transport/sender/xhr-local"),
          a = e("./info-ajax");

      function l(e) {
        var n = this;
        o.call(this), this.ir = new a(e, s), this.ir.once("finish", function (e, t) {
          n.ir = null, n.emit("message", i.stringify([e, t]));
        });
      }

      r(l, o), l.transportName = "iframe-info-receiver", l.prototype.close = function () {
        this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners();
      }, t.exports = l;
    }, {
      "./info-ajax": 9,
      "./transport/sender/xhr-local": 37,
      "events": 3,
      "inherits": 54,
      "json3": 55
    }],
    11: [function (n, o, e) {
      (function (r) {
        "use strict";

        var i = n("events").EventEmitter,
            e = n("inherits"),
            s = n("json3"),
            a = n("./utils/event"),
            l = n("./transport/iframe"),
            c = n("./info-iframe-receiver"),
            u = function u() {};

        function t(t, n) {
          var o = this;
          i.call(this);

          var e = function e() {
            var e = o.ifr = new l(c.transportName, n, t);
            e.once("message", function (t) {
              if (t) {
                var e;

                try {
                  e = s.parse(t);
                } catch (e) {
                  return u("bad json", t), o.emit("finish"), void o.close();
                }

                var n = e[0],
                    r = e[1];
                o.emit("finish", n, r);
              }

              o.close();
            }), e.once("close", function () {
              o.emit("finish"), o.close();
            });
          };

          r.document.body ? e() : a.attachEvent("load", e);
        }

        e(t, i), t.enabled = function () {
          return l.enabled();
        }, t.prototype.close = function () {
          this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null;
        }, o.exports = t;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./info-iframe-receiver": 10,
      "./transport/iframe": 22,
      "./utils/event": 46,
      "debug": void 0,
      "events": 3,
      "inherits": 54,
      "json3": 55
    }],
    12: [function (e, t, n) {
      "use strict";

      var r = e("events").EventEmitter,
          o = e("inherits"),
          i = e("./utils/url"),
          s = e("./transport/sender/xdr"),
          a = e("./transport/sender/xhr-cors"),
          l = e("./transport/sender/xhr-local"),
          c = e("./transport/sender/xhr-fake"),
          u = e("./info-iframe"),
          f = e("./info-ajax"),
          h = function h() {};

      function d(e, t) {
        h(e);
        var n = this;
        r.call(this), setTimeout(function () {
          n.doXhr(e, t);
        }, 0);
      }

      o(d, r), d._getReceiver = function (e, t, n) {
        return n.sameOrigin ? new f(t, l) : a.enabled ? new f(t, a) : s.enabled && n.sameScheme ? new f(t, s) : u.enabled() ? new u(e, t) : new f(t, c);
      }, d.prototype.doXhr = function (e, t) {
        var n = this,
            r = i.addPath(e, "/info");
        h("doXhr", r), this.xo = d._getReceiver(e, r, t), this.timeoutRef = setTimeout(function () {
          h("timeout"), n._cleanup(!1), n.emit("finish");
        }, d.timeout), this.xo.once("finish", function (e, t) {
          h("finish", e, t), n._cleanup(!0), n.emit("finish", e, t);
        });
      }, d.prototype._cleanup = function (e) {
        h("_cleanup"), clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null;
      }, d.prototype.close = function () {
        h("close"), this.removeAllListeners(), this._cleanup(!1);
      }, d.timeout = 8e3, t.exports = d;
    }, {
      "./info-ajax": 9,
      "./info-iframe": 11,
      "./transport/sender/xdr": 34,
      "./transport/sender/xhr-cors": 35,
      "./transport/sender/xhr-fake": 36,
      "./transport/sender/xhr-local": 37,
      "./utils/url": 52,
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    13: [function (e, t, n) {
      (function (e) {
        "use strict";

        t.exports = e.location || {
          origin: "http://localhost:80",
          protocol: "http:",
          host: "localhost",
          port: 80,
          href: "http://localhost/",
          hash: ""
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    14: [function (_, E, e) {
      (function (i) {
        "use strict";

        _("./shims");

        var r,
            l = _("url-parse"),
            e = _("inherits"),
            s = _("json3"),
            c = _("./utils/random"),
            t = _("./utils/escape"),
            u = _("./utils/url"),
            a = _("./utils/event"),
            n = _("./utils/transport"),
            o = _("./utils/object"),
            f = _("./utils/browser"),
            h = _("./utils/log"),
            d = _("./event/event"),
            p = _("./event/eventtarget"),
            v = _("./location"),
            m = _("./event/close"),
            b = _("./event/trans-message"),
            y = _("./info-receiver"),
            g = function g() {};

        function w(e, t, n) {
          if (!(this instanceof w)) return new w(e, t, n);
          if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
          p.call(this), this.readyState = w.CONNECTING, this.extensions = "", this.protocol = "", (n = n || {}).protocols_whitelist && h.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = n.transports, this._transportOptions = n.transportOptions || {};
          var r = n.sessionId || 8;
          if ("function" == typeof r) this._generateSessionId = r;else {
            if ("number" != typeof r) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");

            this._generateSessionId = function () {
              return c.string(r);
            };
          }
          this._server = n.server || c.numberString(1e3);
          var o = new l(e);
          if (!o.host || !o.protocol) throw new SyntaxError("The URL '" + e + "' is invalid");
          if (o.hash) throw new SyntaxError("The URL must not contain a fragment");
          if ("http:" !== o.protocol && "https:" !== o.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + o.protocol + "' is not allowed.");
          var i = "https:" === o.protocol;
          if ("https:" === v.protocol && !i) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
          t ? Array.isArray(t) || (t = [t]) : t = [];
          var s = t.sort();
          s.forEach(function (e, t) {
            if (!e) throw new SyntaxError("The protocols entry '" + e + "' is invalid.");
            if (t < s.length - 1 && e === s[t + 1]) throw new SyntaxError("The protocols entry '" + e + "' is duplicated.");
          });
          var a = u.getOrigin(v.href);
          this._origin = a ? a.toLowerCase() : null, o.set("pathname", o.pathname.replace(/\/+$/, "")), this.url = o.href, g("using url", this.url), this._urlInfo = {
            nullOrigin: !f.hasDomain(),
            sameOrigin: u.isOriginEqual(this.url, v.href),
            sameScheme: u.isSchemeEqual(this.url, v.href)
          }, this._ir = new y(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this));
        }

        function x(e) {
          return 1e3 === e || 3e3 <= e && e <= 4999;
        }

        e(w, p), w.prototype.close = function (e, t) {
          if (e && !x(e)) throw new Error("InvalidAccessError: Invalid code");
          if (t && 123 < t.length) throw new SyntaxError("reason argument has an invalid length");

          if (this.readyState !== w.CLOSING && this.readyState !== w.CLOSED) {
            this._close(e || 1e3, t || "Normal closure", !0);
          }
        }, w.prototype.send = function (e) {
          if ("string" != typeof e && (e = "" + e), this.readyState === w.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
          this.readyState === w.OPEN && this._transport.send(t.quote(e));
        }, w.version = _("./version"), w.CONNECTING = 0, w.OPEN = 1, w.CLOSING = 2, w.CLOSED = 3, w.prototype._receiveInfo = function (e, t) {
          if (g("_receiveInfo", t), this._ir = null, e) {
            this._rto = this.countRTO(t), this._transUrl = e.base_url ? e.base_url : this.url, e = o.extend(e, this._urlInfo), g("info", e);
            var n = r.filterToEnabled(this._transportsWhitelist, e);
            this._transports = n.main, g(this._transports.length + " enabled transports"), this._connect();
          } else this._close(1002, "Cannot connect to server");
        }, w.prototype._connect = function () {
          for (var e = this._transports.shift(); e; e = this._transports.shift()) {
            if (g("attempt", e.transportName), e.needBody && (!i.document.body || void 0 !== i.document.readyState && "complete" !== i.document.readyState && "interactive" !== i.document.readyState)) return g("waiting for body"), this._transports.unshift(e), void a.attachEvent("load", this._connect.bind(this));
            var t = this._rto * e.roundTrips || 5e3;
            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), t), g("using timeout", t);
            var n = u.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                r = this._transportOptions[e.transportName];
            g("transport url", n);
            var o = new e(n, this._transUrl, r);
            return o.on("message", this._transportMessage.bind(this)), o.once("close", this._transportClose.bind(this)), o.transportName = e.transportName, void (this._transport = o);
          }

          this._close(2e3, "All transports failed", !1);
        }, w.prototype._transportTimeout = function () {
          g("_transportTimeout"), this.readyState === w.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"));
        }, w.prototype._transportMessage = function (e) {
          g("_transportMessage", e);
          var t,
              n = this,
              r = e.slice(0, 1),
              o = e.slice(1);

          switch (r) {
            case "o":
              return void this._open();

            case "h":
              return this.dispatchEvent(new d("heartbeat")), void g("heartbeat", this.transport);
          }

          if (o) try {
            t = s.parse(o);
          } catch (e) {
            g("bad json", o);
          }
          if (void 0 !== t) switch (r) {
            case "a":
              Array.isArray(t) && t.forEach(function (e) {
                g("message", n.transport, e), n.dispatchEvent(new b(e));
              });
              break;

            case "m":
              g("message", this.transport, t), this.dispatchEvent(new b(t));
              break;

            case "c":
              Array.isArray(t) && 2 === t.length && this._close(t[0], t[1], !0);
          } else g("empty payload", o);
        }, w.prototype._transportClose = function (e, t) {
          g("_transportClose", this.transport, e, t), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), x(e) || 2e3 === e || this.readyState !== w.CONNECTING ? this._close(e, t) : this._connect();
        }, w.prototype._open = function () {
          g("_open", this._transport.transportName, this.readyState), this.readyState === w.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = w.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new d("open")), g("connected", this.transport)) : this._close(1006, "Server lost session");
        }, w.prototype._close = function (t, n, r) {
          g("_close", this.transport, t, n, r, this.readyState);
          var o = !1;
          if (this._ir && (o = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === w.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
          this.readyState = w.CLOSING, setTimeout(function () {
            this.readyState = w.CLOSED, o && this.dispatchEvent(new d("error"));
            var e = new m("close");
            e.wasClean = r || !1, e.code = t || 1e3, e.reason = n, this.dispatchEvent(e), this.onmessage = this.onclose = this.onerror = null, g("disconnected");
          }.bind(this), 0);
        }, w.prototype.countRTO = function (e) {
          return 100 < e ? 4 * e : 300 + e;
        }, E.exports = function (e) {
          return r = n(e), _("./iframe-bootstrap")(w, e), w;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./event/close": 2,
      "./event/event": 4,
      "./event/eventtarget": 5,
      "./event/trans-message": 6,
      "./iframe-bootstrap": 8,
      "./info-receiver": 12,
      "./location": 13,
      "./shims": 15,
      "./utils/browser": 44,
      "./utils/escape": 45,
      "./utils/event": 46,
      "./utils/log": 48,
      "./utils/object": 49,
      "./utils/random": 50,
      "./utils/transport": 51,
      "./utils/url": 52,
      "./version": 53,
      "debug": void 0,
      "inherits": 54,
      "json3": 55,
      "url-parse": 58
    }],
    15: [function (e, t, n) {
      "use strict";

      var o,
          u = Array.prototype,
          i = Object.prototype,
          r = Function.prototype,
          s = String.prototype,
          a = u.slice,
          f = i.toString,
          l = function l(e) {
        return "[object Function]" === i.toString.call(e);
      },
          c = function c(e) {
        return "[object String]" === f.call(e);
      },
          h = Object.defineProperty && function () {
        try {
          return Object.defineProperty({}, "x", {}), !0;
        } catch (e) {
          return !1;
        }
      }();

      o = h ? function (e, t, n, r) {
        !r && t in e || Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: n
        });
      } : function (e, t, n, r) {
        !r && t in e || (e[t] = n);
      };

      var d = function d(e, t, n) {
        for (var r in t) {
          i.hasOwnProperty.call(t, r) && o(e, r, t[r], n);
        }
      },
          p = function p(e) {
        if (null == e) throw new TypeError("can't convert " + e + " to object");
        return Object(e);
      };

      function v() {}

      d(r, {
        bind: function bind(t) {
          var n = this;
          if (!l(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);

          for (var r = a.call(arguments, 1), e = Math.max(0, n.length - r.length), o = [], i = 0; i < e; i++) {
            o.push("$" + i);
          }

          var s = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this, arguments); }")(function () {
            if (this instanceof s) {
              var e = n.apply(this, r.concat(a.call(arguments)));
              return Object(e) === e ? e : this;
            }

            return n.apply(t, r.concat(a.call(arguments)));
          });
          return n.prototype && (v.prototype = n.prototype, s.prototype = new v(), v.prototype = null), s;
        }
      }), d(Array, {
        isArray: function isArray(e) {
          return "[object Array]" === f.call(e);
        }
      });
      var m,
          b,
          y,
          g = Object("a"),
          w = "a" !== g[0] || !(0 in g);
      d(u, {
        forEach: function forEach(e) {
          var t = p(this),
              n = w && c(this) ? this.split("") : t,
              r = arguments[1],
              o = -1,
              i = n.length >>> 0;
          if (!l(e)) throw new TypeError();

          for (; ++o < i;) {
            o in n && e.call(r, n[o], o, t);
          }
        }
      }, (m = u.forEach, y = b = !0, m && (m.call("foo", function (e, t, n) {
        "object" != typeof n && (b = !1);
      }), m.call([1], function () {
        y = "string" == typeof this;
      }, "x")), !(m && b && y)));
      var x = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
      d(u, {
        indexOf: function indexOf(e) {
          var t = w && c(this) ? this.split("") : p(this),
              n = t.length >>> 0;
          if (!n) return -1;
          var r,
              o,
              i = 0;

          for (1 < arguments.length && (r = arguments[1], (o = +r) != o ? o = 0 : 0 !== o && o !== 1 / 0 && o !== -1 / 0 && (o = (0 < o || -1) * Math.floor(Math.abs(o))), i = o), i = 0 <= i ? i : Math.max(0, n + i); i < n; i++) {
            if (i in t && t[i] === e) return i;
          }

          return -1;
        }
      }, x);

      var _,
          E = s.split;

      2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || 1 < ".".split(/()()/).length ? (_ = void 0 === /()??/.exec("")[1], s.split = function (e, t) {
        var n = this;
        if (void 0 === e && 0 === t) return [];
        if ("[object RegExp]" !== f.call(e)) return E.call(this, e, t);
        var r,
            o,
            i,
            s,
            a = [],
            l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
            c = 0;

        for (e = new RegExp(e.source, l + "g"), n += "", _ || (r = new RegExp("^" + e.source + "$(?!\\s)", l)), t = void 0 === t ? -1 >>> 0 : t >>> 0; (o = e.exec(n)) && !(c < (i = o.index + o[0].length) && (a.push(n.slice(c, o.index)), !_ && 1 < o.length && o[0].replace(r, function () {
          for (var e = 1; e < arguments.length - 2; e++) {
            void 0 === arguments[e] && (o[e] = void 0);
          }
        }), 1 < o.length && o.index < n.length && u.push.apply(a, o.slice(1)), s = o[0].length, c = i, a.length >= t));) {
          e.lastIndex === o.index && e.lastIndex++;
        }

        return c === n.length ? !s && e.test("") || a.push("") : a.push(n.slice(c)), a.length > t ? a.slice(0, t) : a;
      }) : "0".split(void 0, 0).length && (s.split = function (e, t) {
        return void 0 === e && 0 === t ? [] : E.call(this, e, t);
      });
      var j = s.substr,
          S = "".substr && "b" !== "0b".substr(-1);
      d(s, {
        substr: function substr(e, t) {
          return j.call(this, e < 0 && (e = this.length + e) < 0 ? 0 : e, t);
        }
      }, S);
    }, {}],
    16: [function (e, t, n) {
      "use strict";

      t.exports = [e("./transport/websocket"), e("./transport/xhr-streaming"), e("./transport/xdr-streaming"), e("./transport/eventsource"), e("./transport/lib/iframe-wrap")(e("./transport/eventsource")), e("./transport/htmlfile"), e("./transport/lib/iframe-wrap")(e("./transport/htmlfile")), e("./transport/xhr-polling"), e("./transport/xdr-polling"), e("./transport/lib/iframe-wrap")(e("./transport/xhr-polling")), e("./transport/jsonp-polling")];
    }, {
      "./transport/eventsource": 20,
      "./transport/htmlfile": 21,
      "./transport/jsonp-polling": 23,
      "./transport/lib/iframe-wrap": 26,
      "./transport/websocket": 38,
      "./transport/xdr-polling": 39,
      "./transport/xdr-streaming": 40,
      "./transport/xhr-polling": 41,
      "./transport/xhr-streaming": 42
    }],
    17: [function (o, f, e) {
      (function (e) {
        "use strict";

        var i = o("events").EventEmitter,
            t = o("inherits"),
            s = o("../../utils/event"),
            a = o("../../utils/url"),
            l = e.XMLHttpRequest,
            c = function c() {};

        function u(e, t, n, r) {
          c(e, t);
          var o = this;
          i.call(this), setTimeout(function () {
            o._start(e, t, n, r);
          }, 0);
        }

        t(u, i), u.prototype._start = function (e, t, n, r) {
          var o = this;

          try {
            this.xhr = new l();
          } catch (e) {}

          if (!this.xhr) return c("no xhr"), this.emit("finish", 0, "no xhr support"), void this._cleanup();
          t = a.addQuery(t, "t=" + +new Date()), this.unloadRef = s.unloadAdd(function () {
            c("unload cleanup"), o._cleanup(!0);
          });

          try {
            this.xhr.open(e, t, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function () {
              c("xhr timeout"), o.emit("finish", 0, ""), o._cleanup(!1);
            });
          } catch (e) {
            return c("exception", e), this.emit("finish", 0, ""), void this._cleanup(!1);
          }

          if (r && r.noCredentials || !u.supportsCORS || (c("withCredentials"), this.xhr.withCredentials = !0), r && r.headers) for (var i in r.headers) {
            this.xhr.setRequestHeader(i, r.headers[i]);
          }

          this.xhr.onreadystatechange = function () {
            if (o.xhr) {
              var e,
                  t,
                  n = o.xhr;

              switch (c("readyState", n.readyState), n.readyState) {
                case 3:
                  try {
                    t = n.status, e = n.responseText;
                  } catch (e) {}

                  c("status", t), 1223 === t && (t = 204), 200 === t && e && 0 < e.length && (c("chunk"), o.emit("chunk", t, e));
                  break;

                case 4:
                  t = n.status, c("status", t), 1223 === t && (t = 204), 12005 !== t && 12029 !== t || (t = 0), c("finish", t, n.responseText), o.emit("finish", t, n.responseText), o._cleanup(!1);
              }
            }
          };

          try {
            o.xhr.send(n);
          } catch (e) {
            o.emit("finish", 0, ""), o._cleanup(!1);
          }
        }, u.prototype._cleanup = function (e) {
          if (c("cleanup"), this.xhr) {
            if (this.removeAllListeners(), s.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function () {}, this.xhr.ontimeout && (this.xhr.ontimeout = null), e) try {
              this.xhr.abort();
            } catch (e) {}
            this.unloadRef = this.xhr = null;
          }
        }, u.prototype.close = function () {
          c("close"), this._cleanup(!0);
        }, u.enabled = !!l;
        var n = ["Active"].concat("Object").join("X");
        !u.enabled && n in e && (c("overriding xmlhttprequest"), u.enabled = !!new (l = function l() {
          try {
            return new e[n]("Microsoft.XMLHTTP");
          } catch (e) {
            return null;
          }
        })());
        var r = !1;

        try {
          r = "withCredentials" in new l();
        } catch (e) {}

        u.supportsCORS = r, f.exports = u;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/event": 46,
      "../../utils/url": 52,
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    18: [function (e, t, n) {
      (function (e) {
        t.exports = e.EventSource;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    19: [function (e, n, t) {
      (function (e) {
        "use strict";

        var t = e.WebSocket || e.MozWebSocket;
        n.exports = t ? function (e) {
          return new t(e);
        } : void 0;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    20: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("./lib/ajax-based"),
          i = e("./receiver/eventsource"),
          s = e("./sender/xhr-cors"),
          a = e("eventsource");

      function l(e) {
        if (!l.enabled()) throw new Error("Transport created when disabled");
        o.call(this, e, "/eventsource", i, s);
      }

      r(l, o), l.enabled = function () {
        return !!a;
      }, l.transportName = "eventsource", l.roundTrips = 2, t.exports = l;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/eventsource": 29,
      "./sender/xhr-cors": 35,
      "eventsource": 18,
      "inherits": 54
    }],
    21: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("./receiver/htmlfile"),
          i = e("./sender/xhr-local"),
          s = e("./lib/ajax-based");

      function a(e) {
        if (!o.enabled) throw new Error("Transport created when disabled");
        s.call(this, e, "/htmlfile", o, i);
      }

      r(a, s), a.enabled = function (e) {
        return o.enabled && e.sameOrigin;
      }, a.transportName = "htmlfile", a.roundTrips = 2, t.exports = a;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/htmlfile": 30,
      "./sender/xhr-local": 37,
      "inherits": 54
    }],
    22: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("json3"),
          i = e("events").EventEmitter,
          s = e("../version"),
          a = e("../utils/url"),
          l = e("../utils/iframe"),
          c = e("../utils/event"),
          u = e("../utils/random"),
          f = function f() {};

      function h(e, t, n) {
        if (!h.enabled()) throw new Error("Transport created when disabled");
        i.call(this);
        var r = this;
        this.origin = a.getOrigin(n), this.baseUrl = n, this.transUrl = t, this.transport = e, this.windowId = u.string(8);
        var o = a.addPath(n, "/iframe.html") + "#" + this.windowId;
        f(e, t, o), this.iframeObj = l.createIframe(o, function (e) {
          f("err callback"), r.emit("close", 1006, "Unable to load an iframe (" + e + ")"), r.close();
        }), this.onmessageCallback = this._message.bind(this), c.attachEvent("message", this.onmessageCallback);
      }

      r(h, i), h.prototype.close = function () {
        if (f("close"), this.removeAllListeners(), this.iframeObj) {
          c.detachEvent("message", this.onmessageCallback);

          try {
            this.postMessage("c");
          } catch (e) {}

          this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null;
        }
      }, h.prototype._message = function (t) {
        if (f("message", t.data), a.isOriginEqual(t.origin, this.origin)) {
          var n;

          try {
            n = o.parse(t.data);
          } catch (e) {
            return void f("bad json", t.data);
          }

          if (n.windowId === this.windowId) switch (n.type) {
            case "s":
              this.iframeObj.loaded(), this.postMessage("s", o.stringify([s, this.transport, this.transUrl, this.baseUrl]));
              break;

            case "t":
              this.emit("message", n.data);
              break;

            case "c":
              var e;

              try {
                e = o.parse(n.data);
              } catch (e) {
                return void f("bad json", n.data);
              }

              this.emit("close", e[0], e[1]), this.close();
          } else f("mismatched window id", n.windowId, this.windowId);
        } else f("not same origin", t.origin, this.origin);
      }, h.prototype.postMessage = function (e, t) {
        f("postMessage", e, t), this.iframeObj.post(o.stringify({
          windowId: this.windowId,
          type: e,
          data: t || ""
        }), this.origin);
      }, h.prototype.send = function (e) {
        f("send", e), this.postMessage("m", e);
      }, h.enabled = function () {
        return l.iframeEnabled;
      }, h.transportName = "iframe", h.roundTrips = 2, t.exports = h;
    }, {
      "../utils/event": 46,
      "../utils/iframe": 47,
      "../utils/random": 50,
      "../utils/url": 52,
      "../version": 53,
      "debug": void 0,
      "events": 3,
      "inherits": 54,
      "json3": 55
    }],
    23: [function (s, a, e) {
      (function (e) {
        "use strict";

        var t = s("inherits"),
            n = s("./lib/sender-receiver"),
            r = s("./receiver/jsonp"),
            o = s("./sender/jsonp");

        function i(e) {
          if (!i.enabled()) throw new Error("Transport created when disabled");
          n.call(this, e, "/jsonp", o, r);
        }

        t(i, n), i.enabled = function () {
          return !!e.document;
        }, i.transportName = "jsonp-polling", i.roundTrips = 1, i.needBody = !0, a.exports = i;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./lib/sender-receiver": 28,
      "./receiver/jsonp": 31,
      "./sender/jsonp": 33,
      "inherits": 54
    }],
    24: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          a = e("../../utils/url"),
          o = e("./sender-receiver"),
          l = function l() {};

      function i(e, t, n, r) {
        var s;
        o.call(this, e, t, (s = r, function (e, t, n) {
          l("create ajax sender", e, t);
          var r = {};
          "string" == typeof t && (r.headers = {
            "Content-type": "text/plain"
          });
          var o = a.addPath(e, "/xhr_send"),
              i = new s("POST", o, t, r);
          return i.once("finish", function (e) {
            if (l("finish", e), i = null, 200 !== e && 204 !== e) return n(new Error("http status " + e));
            n();
          }), function () {
            l("abort"), i.close(), i = null;
            var e = new Error("Aborted");
            e.code = 1e3, n(e);
          };
        }), n, r);
      }

      r(i, o), t.exports = i;
    }, {
      "../../utils/url": 52,
      "./sender-receiver": 28,
      "debug": void 0,
      "inherits": 54
    }],
    25: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("events").EventEmitter,
          i = function i() {};

      function s(e, t) {
        i(e), o.call(this), this.sendBuffer = [], this.sender = t, this.url = e;
      }

      r(s, o), s.prototype.send = function (e) {
        i("send", e), this.sendBuffer.push(e), this.sendStop || this.sendSchedule();
      }, s.prototype.sendScheduleWait = function () {
        i("sendScheduleWait");
        var e,
            t = this;
        this.sendStop = function () {
          i("sendStop"), t.sendStop = null, clearTimeout(e);
        }, e = setTimeout(function () {
          i("timeout"), t.sendStop = null, t.sendSchedule();
        }, 25);
      }, s.prototype.sendSchedule = function () {
        i("sendSchedule", this.sendBuffer.length);
        var t = this;

        if (0 < this.sendBuffer.length) {
          var e = "[" + this.sendBuffer.join(",") + "]";
          this.sendStop = this.sender(this.url, e, function (e) {
            t.sendStop = null, e ? (i("error", e), t.emit("close", e.code || 1006, "Sending error: " + e), t.close()) : t.sendScheduleWait();
          }), this.sendBuffer = [];
        }
      }, s.prototype._cleanup = function () {
        i("_cleanup"), this.removeAllListeners();
      }, s.prototype.close = function () {
        i("close"), this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null);
      }, t.exports = s;
    }, {
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    26: [function (e, n, t) {
      (function (o) {
        "use strict";

        var t = e("inherits"),
            i = e("../iframe"),
            s = e("../../utils/object");

        n.exports = function (r) {
          function e(e, t) {
            i.call(this, r.transportName, e, t);
          }

          return t(e, i), e.enabled = function (e, t) {
            if (!o.document) return !1;
            var n = s.extend({}, t);
            return n.sameOrigin = !0, r.enabled(n) && i.enabled();
          }, e.transportName = "iframe-" + r.transportName, e.needBody = !0, e.roundTrips = i.roundTrips + r.roundTrips - 1, e.facadeTransport = r, e;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/object": 49,
      "../iframe": 22,
      "inherits": 54
    }],
    27: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("events").EventEmitter,
          i = function i() {};

      function s(e, t, n) {
        i(t), o.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = n, this._scheduleReceiver();
      }

      r(s, o), s.prototype._scheduleReceiver = function () {
        i("_scheduleReceiver");
        var n = this,
            r = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
        r.on("message", function (e) {
          i("message", e), n.emit("message", e);
        }), r.once("close", function (e, t) {
          i("close", e, t, n.pollIsClosing), n.poll = r = null, n.pollIsClosing || ("network" === t ? n._scheduleReceiver() : (n.emit("close", e || 1006, t), n.removeAllListeners()));
        });
      }, s.prototype.abort = function () {
        i("abort"), this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort();
      }, t.exports = s;
    }, {
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    28: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          a = e("../../utils/url"),
          l = e("./buffered-sender"),
          c = e("./polling"),
          u = function u() {};

      function o(e, t, n, r, o) {
        var i = a.addPath(e, t);
        u(i);
        var s = this;
        l.call(this, e, n), this.poll = new c(r, i, o), this.poll.on("message", function (e) {
          u("poll message", e), s.emit("message", e);
        }), this.poll.once("close", function (e, t) {
          u("poll close", e, t), s.poll = null, s.emit("close", e, t), s.close();
        });
      }

      r(o, l), o.prototype.close = function () {
        l.prototype.close.call(this), u("close"), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null);
      }, t.exports = o;
    }, {
      "../../utils/url": 52,
      "./buffered-sender": 25,
      "./polling": 27,
      "debug": void 0,
      "inherits": 54
    }],
    29: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("events").EventEmitter,
          i = e("eventsource"),
          s = function s() {};

      function a(e) {
        s(e), o.call(this);
        var n = this,
            r = this.es = new i(e);
        r.onmessage = function (e) {
          s("message", e.data), n.emit("message", decodeURI(e.data));
        }, r.onerror = function (e) {
          s("error", r.readyState, e);
          var t = 2 !== r.readyState ? "network" : "permanent";
          n._cleanup(), n._close(t);
        };
      }

      r(a, o), a.prototype.abort = function () {
        s("abort"), this._cleanup(), this._close("user");
      }, a.prototype._cleanup = function () {
        s("cleanup");
        var e = this.es;
        e && (e.onmessage = e.onerror = null, e.close(), this.es = null);
      }, a.prototype._close = function (e) {
        s("close", e);
        var t = this;
        setTimeout(function () {
          t.emit("close", null, e), t.removeAllListeners();
        }, 200);
      }, t.exports = a;
    }, {
      "debug": void 0,
      "events": 3,
      "eventsource": 18,
      "inherits": 54
    }],
    30: [function (n, u, e) {
      (function (r) {
        "use strict";

        var e = n("inherits"),
            o = n("../../utils/iframe"),
            i = n("../../utils/url"),
            s = n("events").EventEmitter,
            a = n("../../utils/random"),
            l = function l() {};

        function c(e) {
          l(e), s.call(this);
          var t = this;
          o.polluteGlobalNamespace(), this.id = "a" + a.string(6), e = i.addQuery(e, "c=" + decodeURIComponent(o.WPrefix + "." + this.id)), l("using htmlfile", c.htmlfileEnabled);
          var n = c.htmlfileEnabled ? o.createHtmlfile : o.createIframe;
          r[o.WPrefix][this.id] = {
            start: function start() {
              l("start"), t.iframeObj.loaded();
            },
            message: function message(e) {
              l("message", e), t.emit("message", e);
            },
            stop: function stop() {
              l("stop"), t._cleanup(), t._close("network");
            }
          }, this.iframeObj = n(e, function () {
            l("callback"), t._cleanup(), t._close("permanent");
          });
        }

        e(c, s), c.prototype.abort = function () {
          l("abort"), this._cleanup(), this._close("user");
        }, c.prototype._cleanup = function () {
          l("_cleanup"), this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete r[o.WPrefix][this.id];
        }, c.prototype._close = function (e) {
          l("_close", e), this.emit("close", null, e), this.removeAllListeners();
        }, c.htmlfileEnabled = !1;
        var t = ["Active"].concat("Object").join("X");
        if (t in r) try {
          c.htmlfileEnabled = !!new r[t]("htmlfile");
        } catch (e) {}
        c.enabled = c.htmlfileEnabled || o.iframeEnabled, u.exports = c;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/iframe": 47,
      "../../utils/random": 50,
      "../../utils/url": 52,
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    31: [function (t, n, e) {
      (function (i) {
        "use strict";

        var r = t("../../utils/iframe"),
            s = t("../../utils/random"),
            a = t("../../utils/browser"),
            o = t("../../utils/url"),
            e = t("inherits"),
            l = t("events").EventEmitter,
            c = function c() {};

        function u(e) {
          c(e);
          var t = this;
          l.call(this), r.polluteGlobalNamespace(), this.id = "a" + s.string(6);
          var n = o.addQuery(e, "c=" + encodeURIComponent(r.WPrefix + "." + this.id));
          i[r.WPrefix][this.id] = this._callback.bind(this), this._createScript(n), this.timeoutId = setTimeout(function () {
            c("timeout"), t._abort(new Error("JSONP script loaded abnormally (timeout)"));
          }, u.timeout);
        }

        e(u, l), u.prototype.abort = function () {
          if (c("abort"), i[r.WPrefix][this.id]) {
            var e = new Error("JSONP user aborted read");
            e.code = 1e3, this._abort(e);
          }
        }, u.timeout = 35e3, u.scriptErrorTimeout = 1e3, u.prototype._callback = function (e) {
          c("_callback", e), this._cleanup(), this.aborting || (e && (c("message", e), this.emit("message", e)), this.emit("close", null, "network"), this.removeAllListeners());
        }, u.prototype._abort = function (e) {
          c("_abort", e), this._cleanup(), this.aborting = !0, this.emit("close", e.code, e.message), this.removeAllListeners();
        }, u.prototype._cleanup = function () {
          if (c("_cleanup"), clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
            var e = this.script;
            e.parentNode.removeChild(e), e.onreadystatechange = e.onerror = e.onload = e.onclick = null, this.script = null;
          }

          delete i[r.WPrefix][this.id];
        }, u.prototype._scriptError = function () {
          c("_scriptError");
          var e = this;
          this.errorTimer || (this.errorTimer = setTimeout(function () {
            e.loadedOkay || e._abort(new Error("JSONP script loaded abnormally (onerror)"));
          }, u.scriptErrorTimeout));
        }, u.prototype._createScript = function (e) {
          c("_createScript", e);
          var t,
              n = this,
              r = this.script = i.document.createElement("script");
          if (r.id = "a" + s.string(8), r.src = e, r.type = "text/javascript", r.charset = "UTF-8", r.onerror = this._scriptError.bind(this), r.onload = function () {
            c("onload"), n._abort(new Error("JSONP script loaded abnormally (onload)"));
          }, r.onreadystatechange = function () {
            if (c("onreadystatechange", r.readyState), /loaded|closed/.test(r.readyState)) {
              if (r && r.htmlFor && r.onclick) {
                n.loadedOkay = !0;

                try {
                  r.onclick();
                } catch (e) {}
              }

              r && n._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"));
            }
          }, void 0 === r.async && i.document.attachEvent) if (a.isOpera()) (t = this.script2 = i.document.createElement("script")).text = "try{var a = document.getElementById('" + r.id + "'); if(a)a.onerror();}catch(x){};", r.async = t.async = !1;else {
            try {
              r.htmlFor = r.id, r.event = "onclick";
            } catch (e) {}

            r.async = !0;
          }
          void 0 !== r.async && (r.async = !0);
          var o = i.document.getElementsByTagName("head")[0];
          o.insertBefore(r, o.firstChild), t && o.insertBefore(t, o.firstChild);
        }, n.exports = u;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/browser": 44,
      "../../utils/iframe": 47,
      "../../utils/random": 50,
      "../../utils/url": 52,
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    32: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("events").EventEmitter,
          i = function i() {};

      function s(e, t) {
        i(e), o.call(this);
        var r = this;
        this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function (e, t) {
          i("finish", e, t), r._chunkHandler(e, t), r.xo = null;
          var n = 200 === e ? "network" : "permanent";
          i("close", n), r.emit("close", null, n), r._cleanup();
        });
      }

      r(s, o), s.prototype._chunkHandler = function (e, t) {
        if (i("_chunkHandler", e), 200 === e && t) for (var n = -1;; this.bufferPosition += n + 1) {
          var r = t.slice(this.bufferPosition);
          if (-1 === (n = r.indexOf("\n"))) break;
          var o = r.slice(0, n);
          o && (i("message", o), this.emit("message", o));
        }
      }, s.prototype._cleanup = function () {
        i("_cleanup"), this.removeAllListeners();
      }, s.prototype.abort = function () {
        i("abort"), this.xo && (this.xo.close(), i("close"), this.emit("close", null, "user"), this.xo = null), this._cleanup();
      }, t.exports = s;
    }, {
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    33: [function (e, t, n) {
      (function (s) {
        "use strict";

        var a,
            l,
            c = e("../../utils/random"),
            u = e("../../utils/url"),
            f = function f() {};

        t.exports = function (e, t, n) {
          f(e, t), a || (f("createForm"), (a = s.document.createElement("form")).style.display = "none", a.style.position = "absolute", a.method = "POST", a.enctype = "application/x-www-form-urlencoded", a.acceptCharset = "UTF-8", (l = s.document.createElement("textarea")).name = "d", a.appendChild(l), s.document.body.appendChild(a));
          var r = "a" + c.string(8);
          a.target = r, a.action = u.addQuery(u.addPath(e, "/jsonp_send"), "i=" + r);

          var o = function (t) {
            f("createIframe", t);

            try {
              return s.document.createElement('<iframe name="' + t + '">');
            } catch (e) {
              var n = s.document.createElement("iframe");
              return n.name = t, n;
            }
          }(r);

          o.id = r, o.style.display = "none", a.appendChild(o);

          try {
            l.value = t;
          } catch (e) {}

          a.submit();

          var i = function i(e) {
            f("completed", r, e), o.onerror && (o.onreadystatechange = o.onerror = o.onload = null, setTimeout(function () {
              f("cleaning up", r), o.parentNode.removeChild(o), o = null;
            }, 500), l.value = "", n(e));
          };

          return o.onerror = function () {
            f("onerror", r), i();
          }, o.onload = function () {
            f("onload", r), i();
          }, o.onreadystatechange = function (e) {
            f("onreadystatechange", r, o.readyState, e), "complete" === o.readyState && i();
          }, function () {
            f("aborted", r), i(new Error("Aborted"));
          };
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/random": 50,
      "../../utils/url": 52,
      "debug": void 0
    }],
    34: [function (r, c, e) {
      (function (i) {
        "use strict";

        var o = r("events").EventEmitter,
            e = r("inherits"),
            s = r("../../utils/event"),
            t = r("../../utils/browser"),
            a = r("../../utils/url"),
            l = function l() {};

        function n(e, t, n) {
          l(e, t);
          var r = this;
          o.call(this), setTimeout(function () {
            r._start(e, t, n);
          }, 0);
        }

        e(n, o), n.prototype._start = function (e, t, n) {
          l("_start");
          var r = this,
              o = new i.XDomainRequest();
          t = a.addQuery(t, "t=" + +new Date()), o.onerror = function () {
            l("onerror"), r._error();
          }, o.ontimeout = function () {
            l("ontimeout"), r._error();
          }, o.onprogress = function () {
            l("progress", o.responseText), r.emit("chunk", 200, o.responseText);
          }, o.onload = function () {
            l("load"), r.emit("finish", 200, o.responseText), r._cleanup(!1);
          }, this.xdr = o, this.unloadRef = s.unloadAdd(function () {
            r._cleanup(!0);
          });

          try {
            this.xdr.open(e, t), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(n);
          } catch (e) {
            this._error();
          }
        }, n.prototype._error = function () {
          this.emit("finish", 0, ""), this._cleanup(!1);
        }, n.prototype._cleanup = function (e) {
          if (l("cleanup", e), this.xdr) {
            if (this.removeAllListeners(), s.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e) try {
              this.xdr.abort();
            } catch (e) {}
            this.unloadRef = this.xdr = null;
          }
        }, n.prototype.close = function () {
          l("close"), this._cleanup(!0);
        }, n.enabled = !(!i.XDomainRequest || !t.hasDomain()), c.exports = n;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/browser": 44,
      "../../utils/event": 46,
      "../../utils/url": 52,
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    35: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("../driver/xhr");

      function i(e, t, n, r) {
        o.call(this, e, t, n, r);
      }

      r(i, o), i.enabled = o.enabled && o.supportsCORS, t.exports = i;
    }, {
      "../driver/xhr": 17,
      "inherits": 54
    }],
    36: [function (e, t, n) {
      "use strict";

      var r = e("events").EventEmitter;

      function o() {
        var e = this;
        r.call(this), this.to = setTimeout(function () {
          e.emit("finish", 200, "{}");
        }, o.timeout);
      }

      e("inherits")(o, r), o.prototype.close = function () {
        clearTimeout(this.to);
      }, o.timeout = 2e3, t.exports = o;
    }, {
      "events": 3,
      "inherits": 54
    }],
    37: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("../driver/xhr");

      function i(e, t, n) {
        o.call(this, e, t, n, {
          noCredentials: !0
        });
      }

      r(i, o), i.enabled = o.enabled, t.exports = i;
    }, {
      "../driver/xhr": 17,
      "inherits": 54
    }],
    38: [function (e, t, n) {
      "use strict";

      var i = e("../utils/event"),
          s = e("../utils/url"),
          r = e("inherits"),
          a = e("events").EventEmitter,
          l = e("./driver/websocket"),
          c = function c() {};

      function u(e, t, n) {
        if (!u.enabled()) throw new Error("Transport created when disabled");
        a.call(this), c("constructor", e);
        var r = this,
            o = s.addPath(e, "/websocket");
        o = "https" === o.slice(0, 5) ? "wss" + o.slice(5) : "ws" + o.slice(4), this.url = o, this.ws = new l(this.url, [], n), this.ws.onmessage = function (e) {
          c("message event", e.data), r.emit("message", e.data);
        }, this.unloadRef = i.unloadAdd(function () {
          c("unload"), r.ws.close();
        }), this.ws.onclose = function (e) {
          c("close event", e.code, e.reason), r.emit("close", e.code, e.reason), r._cleanup();
        }, this.ws.onerror = function (e) {
          c("error event", e), r.emit("close", 1006, "WebSocket connection broken"), r._cleanup();
        };
      }

      r(u, a), u.prototype.send = function (e) {
        var t = "[" + e + "]";
        c("send", t), this.ws.send(t);
      }, u.prototype.close = function () {
        c("close");
        var e = this.ws;
        this._cleanup(), e && e.close();
      }, u.prototype._cleanup = function () {
        c("_cleanup");
        var e = this.ws;
        e && (e.onmessage = e.onclose = e.onerror = null), i.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners();
      }, u.enabled = function () {
        return c("enabled"), !!l;
      }, u.transportName = "websocket", u.roundTrips = 2, t.exports = u;
    }, {
      "../utils/event": 46,
      "../utils/url": 52,
      "./driver/websocket": 19,
      "debug": void 0,
      "events": 3,
      "inherits": 54
    }],
    39: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("./lib/ajax-based"),
          i = e("./xdr-streaming"),
          s = e("./receiver/xhr"),
          a = e("./sender/xdr");

      function l(e) {
        if (!a.enabled) throw new Error("Transport created when disabled");
        o.call(this, e, "/xhr", s, a);
      }

      r(l, o), l.enabled = i.enabled, l.transportName = "xdr-polling", l.roundTrips = 2, t.exports = l;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xdr": 34,
      "./xdr-streaming": 40,
      "inherits": 54
    }],
    40: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("./lib/ajax-based"),
          i = e("./receiver/xhr"),
          s = e("./sender/xdr");

      function a(e) {
        if (!s.enabled) throw new Error("Transport created when disabled");
        o.call(this, e, "/xhr_streaming", i, s);
      }

      r(a, o), a.enabled = function (e) {
        return !e.cookie_needed && !e.nullOrigin && s.enabled && e.sameScheme;
      }, a.transportName = "xdr-streaming", a.roundTrips = 2, t.exports = a;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xdr": 34,
      "inherits": 54
    }],
    41: [function (e, t, n) {
      "use strict";

      var r = e("inherits"),
          o = e("./lib/ajax-based"),
          i = e("./receiver/xhr"),
          s = e("./sender/xhr-cors"),
          a = e("./sender/xhr-local");

      function l(e) {
        if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
        o.call(this, e, "/xhr", i, s);
      }

      r(l, o), l.enabled = function (e) {
        return !e.nullOrigin && (!(!a.enabled || !e.sameOrigin) || s.enabled);
      }, l.transportName = "xhr-polling", l.roundTrips = 2, t.exports = l;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xhr-cors": 35,
      "./sender/xhr-local": 37,
      "inherits": 54
    }],
    42: [function (l, c, e) {
      (function (e) {
        "use strict";

        var t = l("inherits"),
            n = l("./lib/ajax-based"),
            r = l("./receiver/xhr"),
            o = l("./sender/xhr-cors"),
            i = l("./sender/xhr-local"),
            s = l("../utils/browser");

        function a(e) {
          if (!i.enabled && !o.enabled) throw new Error("Transport created when disabled");
          n.call(this, e, "/xhr_streaming", r, o);
        }

        t(a, n), a.enabled = function (e) {
          return !e.nullOrigin && !s.isOpera() && o.enabled;
        }, a.transportName = "xhr-streaming", a.roundTrips = 2, a.needBody = !!e.document, c.exports = a;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../utils/browser": 44,
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xhr-cors": 35,
      "./sender/xhr-local": 37,
      "inherits": 54
    }],
    43: [function (e, t, n) {
      (function (n) {
        "use strict";

        n.crypto && n.crypto.getRandomValues ? t.exports.randomBytes = function (e) {
          var t = new Uint8Array(e);
          return n.crypto.getRandomValues(t), t;
        } : t.exports.randomBytes = function (e) {
          for (var t = new Array(e), n = 0; n < e; n++) {
            t[n] = Math.floor(256 * Math.random());
          }

          return t;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    44: [function (e, t, n) {
      (function (e) {
        "use strict";

        t.exports = {
          isOpera: function isOpera() {
            return e.navigator && /opera/i.test(e.navigator.userAgent);
          },
          isKonqueror: function isKonqueror() {
            return e.navigator && /konqueror/i.test(e.navigator.userAgent);
          },
          hasDomain: function hasDomain() {
            if (!e.document) return !0;

            try {
              return !!e.document.domain;
            } catch (e) {
              return !1;
            }
          }
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    45: [function (e, t, n) {
      "use strict";

      var r,
          o = e("json3"),
          i = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
      t.exports = {
        quote: function quote(e) {
          var t = o.stringify(e);
          return i.lastIndex = 0, i.test(t) ? (r || (r = function (e) {
            var t,
                n = {},
                r = [];

            for (t = 0; t < 65536; t++) {
              r.push(String.fromCharCode(t));
            }

            return e.lastIndex = 0, r.join("").replace(e, function (e) {
              return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), "";
            }), e.lastIndex = 0, n;
          }(i)), t.replace(i, function (e) {
            return r[e];
          })) : t;
        }
      };
    }, {
      "json3": 55
    }],
    46: [function (e, t, n) {
      (function (n) {
        "use strict";

        var r = e("./random"),
            o = {},
            i = !1,
            s = n.chrome && n.chrome.app && n.chrome.app.runtime;
        t.exports = {
          attachEvent: function attachEvent(e, t) {
            void 0 !== n.addEventListener ? n.addEventListener(e, t, !1) : n.document && n.attachEvent && (n.document.attachEvent("on" + e, t), n.attachEvent("on" + e, t));
          },
          detachEvent: function detachEvent(e, t) {
            void 0 !== n.addEventListener ? n.removeEventListener(e, t, !1) : n.document && n.detachEvent && (n.document.detachEvent("on" + e, t), n.detachEvent("on" + e, t));
          },
          unloadAdd: function unloadAdd(e) {
            if (s) return null;
            var t = r.string(8);
            return o[t] = e, i && setTimeout(this.triggerUnloadCallbacks, 0), t;
          },
          unloadDel: function unloadDel(e) {
            e in o && delete o[e];
          },
          triggerUnloadCallbacks: function triggerUnloadCallbacks() {
            for (var e in o) {
              o[e](), delete o[e];
            }
          }
        };
        s || t.exports.attachEvent("unload", function () {
          i || (i = !0, t.exports.triggerUnloadCallbacks());
        });
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./random": 50
    }],
    47: [function (t, p, e) {
      (function (f) {
        "use strict";

        var h = t("./event"),
            n = t("json3"),
            e = t("./browser"),
            d = function d() {};

        p.exports = {
          WPrefix: "_jp",
          currentWindowId: null,
          polluteGlobalNamespace: function polluteGlobalNamespace() {
            p.exports.WPrefix in f || (f[p.exports.WPrefix] = {});
          },
          postMessage: function postMessage(e, t) {
            f.parent !== f ? f.parent.postMessage(n.stringify({
              windowId: p.exports.currentWindowId,
              type: e,
              data: t || ""
            }), "*") : d("Cannot postMessage, no parent window.", e, t);
          },
          createIframe: function createIframe(e, t) {
            var n,
                r,
                o = f.document.createElement("iframe"),
                i = function i() {
              d("unattach"), clearTimeout(n);

              try {
                o.onload = null;
              } catch (e) {}

              o.onerror = null;
            },
                s = function s() {
              d("cleanup"), o && (i(), setTimeout(function () {
                o && o.parentNode.removeChild(o), o = null;
              }, 0), h.unloadDel(r));
            },
                a = function a(e) {
              d("onerror", e), o && (s(), t(e));
            };

            return o.src = e, o.style.display = "none", o.style.position = "absolute", o.onerror = function () {
              a("onerror");
            }, o.onload = function () {
              d("onload"), clearTimeout(n), n = setTimeout(function () {
                a("onload timeout");
              }, 2e3);
            }, f.document.body.appendChild(o), n = setTimeout(function () {
              a("timeout");
            }, 15e3), r = h.unloadAdd(s), {
              post: function post(e, t) {
                d("post", e, t), setTimeout(function () {
                  try {
                    o && o.contentWindow && o.contentWindow.postMessage(e, t);
                  } catch (e) {}
                }, 0);
              },
              cleanup: s,
              loaded: i
            };
          },
          createHtmlfile: function createHtmlfile(e, t) {
            var n,
                r,
                o,
                i = ["Active"].concat("Object").join("X"),
                s = new f[i]("htmlfile"),
                a = function a() {
              clearTimeout(n), o.onerror = null;
            },
                l = function l() {
              s && (a(), h.unloadDel(r), o.parentNode.removeChild(o), o = s = null, CollectGarbage());
            },
                c = function c(e) {
              d("onerror", e), s && (l(), t(e));
            };

            s.open(), s.write('<html><script>document.domain="' + f.document.domain + '";<\/script></html>'), s.close(), s.parentWindow[p.exports.WPrefix] = f[p.exports.WPrefix];
            var u = s.createElement("div");
            return s.body.appendChild(u), o = s.createElement("iframe"), u.appendChild(o), o.src = e, o.onerror = function () {
              c("onerror");
            }, n = setTimeout(function () {
              c("timeout");
            }, 15e3), r = h.unloadAdd(l), {
              post: function post(e, t) {
                try {
                  setTimeout(function () {
                    o && o.contentWindow && o.contentWindow.postMessage(e, t);
                  }, 0);
                } catch (e) {}
              },
              cleanup: l,
              loaded: a
            };
          }
        }, p.exports.iframeEnabled = !1, f.document && (p.exports.iframeEnabled = ("function" == typeof f.postMessage || "object" == typeof f.postMessage) && !e.isKonqueror());
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./browser": 44,
      "./event": 46,
      "debug": void 0,
      "json3": 55
    }],
    48: [function (e, t, n) {
      (function (n) {
        "use strict";

        var r = {};
        ["log", "debug", "warn"].forEach(function (e) {
          var t;

          try {
            t = n.console && n.console[e] && n.console[e].apply;
          } catch (e) {}

          r[e] = t ? function () {
            return n.console[e].apply(n.console, arguments);
          } : "log" === e ? function () {} : r.log;
        }), t.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    49: [function (e, t, n) {
      "use strict";

      t.exports = {
        isObject: function isObject(e) {
          var t = typeof e;
          return "function" === t || "object" === t && !!e;
        },
        extend: function extend(e) {
          if (!this.isObject(e)) return e;

          for (var t, n, r = 1, o = arguments.length; r < o; r++) {
            for (n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }

          return e;
        }
      };
    }, {}],
    50: [function (e, t, n) {
      "use strict";

      var i = e("crypto"),
          s = "abcdefghijklmnopqrstuvwxyz012345";
      t.exports = {
        string: function string(e) {
          for (var t = s.length, n = i.randomBytes(e), r = [], o = 0; o < e; o++) {
            r.push(s.substr(n[o] % t, 1));
          }

          return r.join("");
        },
        number: function number(e) {
          return Math.floor(Math.random() * e);
        },
        numberString: function numberString(e) {
          var t = ("" + (e - 1)).length;
          return (new Array(t + 1).join("0") + this.number(e)).slice(-t);
        }
      };
    }, {
      "crypto": 43
    }],
    51: [function (e, t, n) {
      "use strict";

      var o = function o() {};

      t.exports = function (e) {
        return {
          filterToEnabled: function filterToEnabled(t, n) {
            var r = {
              main: [],
              facade: []
            };
            return t ? "string" == typeof t && (t = [t]) : t = [], e.forEach(function (e) {
              e && ("websocket" !== e.transportName || !1 !== n.websocket ? t.length && -1 === t.indexOf(e.transportName) ? o("not in whitelist", e.transportName) : e.enabled(n) ? (o("enabled", e.transportName), r.main.push(e), e.facadeTransport && r.facade.push(e.facadeTransport)) : o("disabled", e.transportName) : o("disabled from server", "websocket"));
            }), r;
          }
        };
      };
    }, {
      "debug": void 0
    }],
    52: [function (e, t, n) {
      "use strict";

      var r = e("url-parse"),
          o = function o() {};

      t.exports = {
        getOrigin: function getOrigin(e) {
          if (!e) return null;
          var t = new r(e);
          if ("file:" === t.protocol) return null;
          var n = t.port;
          return n || (n = "https:" === t.protocol ? "443" : "80"), t.protocol + "//" + t.hostname + ":" + n;
        },
        isOriginEqual: function isOriginEqual(e, t) {
          var n = this.getOrigin(e) === this.getOrigin(t);
          return o("same", e, t, n), n;
        },
        isSchemeEqual: function isSchemeEqual(e, t) {
          return e.split(":")[0] === t.split(":")[0];
        },
        addPath: function addPath(e, t) {
          var n = e.split("?");
          return n[0] + t + (n[1] ? "?" + n[1] : "");
        },
        addQuery: function addQuery(e, t) {
          return e + (-1 === e.indexOf("?") ? "?" + t : "&" + t);
        }
      };
    }, {
      "debug": void 0,
      "url-parse": 58
    }],
    53: [function (e, t, n) {
      t.exports = "1.3.0";
    }, {}],
    54: [function (e, t, n) {
      "function" == typeof Object.create ? t.exports = function (e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
      } : t.exports = function (e, t) {
        e.super_ = t;

        var n = function n() {};

        n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
      };
    }, {}],
    55: [function (e, a, l) {
      (function (s) {
        (function () {
          var q = {
            "function": !0,
            "object": !0
          },
              e = q[typeof l] && l && !l.nodeType && l,
              D = q[typeof window] && window || this,
              t = e && q[typeof a] && a && !a.nodeType && "object" == typeof s && s;

          function W(e, l) {
            e || (e = D.Object()), l || (l = D.Object());
            var c = e.Number || D.Number,
                u = e.String || D.String,
                t = e.Object || D.Object,
                f = e.Date || D.Date,
                n = e.SyntaxError || D.SyntaxError,
                E = e.TypeError || D.TypeError,
                r = e.Math || D.Math,
                o = e.JSON || D.JSON;
            "object" == typeof o && o && (l.stringify = o.stringify, l.parse = o.parse);

            var _j,
                _S,
                T,
                i = t.prototype,
                O = i.toString,
                h = new f(-0xc782b5b800cec);

            try {
              h = -109252 == h.getUTCFullYear() && 0 === h.getUTCMonth() && 1 === h.getUTCDate() && 10 == h.getUTCHours() && 37 == h.getUTCMinutes() && 6 == h.getUTCSeconds() && 708 == h.getUTCMilliseconds();
            } catch (e) {}

            function d(e) {
              if (d[e] !== T) return d[e];
              var t;
              if ("bug-string-char-index" == e) t = "a" != "a"[0];else if ("json" == e) t = d("json-stringify") && d("json-parse");else {
                var n,
                    r = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";

                if ("json-stringify" == e) {
                  var o = l.stringify,
                      i = "function" == typeof o && h;

                  if (i) {
                    (n = function n() {
                      return 1;
                    }).toJSON = n;

                    try {
                      i = "0" === o(0) && "0" === o(new c()) && '""' == o(new u()) && o(O) === T && o(T) === T && o() === T && "1" === o(n) && "[1]" == o([n]) && "[null]" == o([T]) && "null" == o(null) && "[null,null,null]" == o([T, O, null]) && o({
                        "a": [n, !0, !1, null, "\0\b\n\f\r\t"]
                      }) == r && "1" === o(null, n) && "[\n 1,\n 2\n]" == o([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == o(new f(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == o(new f(864e13)) && '"-000001-01-01T00:00:00.000Z"' == o(new f(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == o(new f(-1));
                    } catch (e) {
                      i = !1;
                    }
                  }

                  t = i;
                }

                if ("json-parse" == e) {
                  var s = l.parse;
                  if ("function" == typeof s) try {
                    if (0 === s("0") && !s(!1)) {
                      var a = 5 == (n = s(r)).a.length && 1 === n.a[0];

                      if (a) {
                        try {
                          a = !s('"\t"');
                        } catch (e) {}

                        if (a) try {
                          a = 1 !== s("01");
                        } catch (e) {}
                        if (a) try {
                          a = 1 !== s("1.");
                        } catch (e) {}
                      }
                    }
                  } catch (e) {
                    a = !1;
                  }
                  t = a;
                }
              }
              return d[e] = !!t;
            }

            if (!d("json")) {
              var p = "[object Function]",
                  C = "[object Number]",
                  N = "[object String]",
                  A = "[object Array]",
                  a = d("bug-string-char-index");
              if (!h) var k = r.floor,
                  s = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                  I = function I(e, t) {
                return s[t] + 365 * (e - 1970) + k((e - 1969 + (t = +(1 < t))) / 4) - k((e - 1901 + t) / 100) + k((e - 1601 + t) / 400);
              };

              if ((_j = i.hasOwnProperty) || (_j = function j(e) {
                var n,
                    t = {};
                return _j = (t.__proto__ = null, t.__proto__ = {
                  "toString": 1
                }, t).toString != O ? function (e) {
                  var t = this.__proto__,
                      n = (e in (this.__proto__ = null, this));
                  return this.__proto__ = t, n;
                } : (n = t.constructor, function (e) {
                  var t = (this.constructor || n).prototype;
                  return e in this && !(e in t && this[e] === t[e]);
                }), t = null, _j.call(this, e);
              }), _S = function S(e, t) {
                var n,
                    s,
                    r,
                    o = 0;

                for (r in (n = function n() {
                  this.valueOf = 0;
                }).prototype.valueOf = 0, s = new n()) {
                  _j.call(s, r) && o++;
                }

                return n = s = null, (_S = o ? 2 == o ? function (e, t) {
                  var n,
                      r = {},
                      o = O.call(e) == p;

                  for (n in e) {
                    o && "prototype" == n || _j.call(r, n) || !(r[n] = 1) || !_j.call(e, n) || t(n);
                  }
                } : function (e, t) {
                  var n,
                      r,
                      o = O.call(e) == p;

                  for (n in e) {
                    o && "prototype" == n || !_j.call(e, n) || (r = "constructor" === n) || t(n);
                  }

                  (r || _j.call(e, n = "constructor")) && t(n);
                } : (s = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], function (e, t) {
                  var n,
                      r,
                      o = O.call(e) == p,
                      i = !o && "function" != typeof e.constructor && q[typeof e.hasOwnProperty] && e.hasOwnProperty || _j;

                  for (n in e) {
                    o && "prototype" == n || !i.call(e, n) || t(n);
                  }

                  for (r = s.length; n = s[--r]; i.call(e, n) && t(n)) {
                    ;
                  }
                }))(e, t);
              }, !d("json-stringify")) {
                var v = {
                  92: "\\\\",
                  34: '\\"',
                  8: "\\b",
                  12: "\\f",
                  10: "\\n",
                  13: "\\r",
                  9: "\\t"
                },
                    P = function P(e, t) {
                  return ("000000" + (t || 0)).slice(-e);
                },
                    L = function L(e) {
                  for (var t = '"', n = 0, r = e.length, o = !a || 10 < r, i = o && (a ? e.split("") : e); n < r; n++) {
                    var s = e.charCodeAt(n);

                    switch (s) {
                      case 8:
                      case 9:
                      case 10:
                      case 12:
                      case 13:
                      case 34:
                      case 92:
                        t += v[s];
                        break;

                      default:
                        if (s < 32) {
                          t += "\\u00" + P(2, s.toString(16));
                          break;
                        }

                        t += o ? i[n] : e.charAt(n);
                    }
                  }

                  return t + '"';
                },
                    R = function R(e, t, n, r, o, i, s) {
                  var a, l, c, u, f, h, d, p, v, m, b, y, g, w, x, _;

                  try {
                    a = t[e];
                  } catch (e) {}

                  if ("object" == typeof a && a) if ("[object Date]" != (l = O.call(a)) || _j.call(a, "toJSON")) "function" == typeof a.toJSON && (l != C && l != N && l != A || _j.call(a, "toJSON")) && (a = a.toJSON(e));else if (-1 / 0 < a && a < 1 / 0) {
                    if (I) {
                      for (f = k(a / 864e5), c = k(f / 365.2425) + 1970 - 1; I(c + 1, 0) <= f; c++) {
                        ;
                      }

                      for (u = k((f - I(c, 0)) / 30.42); I(c, u + 1) <= f; u++) {
                        ;
                      }

                      f = 1 + f - I(c, u), d = k((h = (a % 864e5 + 864e5) % 864e5) / 36e5) % 24, p = k(h / 6e4) % 60, v = k(h / 1e3) % 60, m = h % 1e3;
                    } else c = a.getUTCFullYear(), u = a.getUTCMonth(), f = a.getUTCDate(), d = a.getUTCHours(), p = a.getUTCMinutes(), v = a.getUTCSeconds(), m = a.getUTCMilliseconds();

                    a = (c <= 0 || 1e4 <= c ? (c < 0 ? "-" : "+") + P(6, c < 0 ? -c : c) : P(4, c)) + "-" + P(2, u + 1) + "-" + P(2, f) + "T" + P(2, d) + ":" + P(2, p) + ":" + P(2, v) + "." + P(3, m) + "Z";
                  } else a = null;
                  if (n && (a = n.call(t, e, a)), null === a) return "null";
                  if ("[object Boolean]" == (l = O.call(a))) return "" + a;
                  if (l == C) return -1 / 0 < a && a < 1 / 0 ? "" + a : "null";
                  if (l == N) return L("" + a);

                  if ("object" == typeof a) {
                    for (w = s.length; w--;) {
                      if (s[w] === a) throw E();
                    }

                    if (s.push(a), b = [], x = i, i += o, l == A) {
                      for (g = 0, w = a.length; g < w; g++) {
                        y = R(g, a, n, r, o, i, s), b.push(y === T ? "null" : y);
                      }

                      _ = b.length ? o ? "[\n" + i + b.join(",\n" + i) + "\n" + x + "]" : "[" + b.join(",") + "]" : "[]";
                    } else _S(r || a, function (e) {
                      var t = R(e, a, n, r, o, i, s);
                      t !== T && b.push(L(e) + ":" + (o ? " " : "") + t);
                    }), _ = b.length ? o ? "{\n" + i + b.join(",\n" + i) + "\n" + x + "}" : "{" + b.join(",") + "}" : "{}";

                    return s.pop(), _;
                  }
                };

                l.stringify = function (e, t, n) {
                  var r, o, i, s;
                  if (q[typeof t] && t) if ((s = O.call(t)) == p) o = t;else if (s == A) {
                    i = {};

                    for (var a, l = 0, c = t.length; l < c; a = t[l++], ((s = O.call(a)) == N || s == C) && (i[a] = 1)) {
                      ;
                    }
                  }
                  if (n) if ((s = O.call(n)) == C) {
                    if (0 < (n -= n % 1)) for (r = "", 10 < n && (n = 10); r.length < n; r += " ") {
                      ;
                    }
                  } else s == N && (r = n.length <= 10 ? n : n.slice(0, 10));
                  return R("", ((a = {})[""] = e, a), o, i, r, "", []);
                };
              }

              if (!d("json-parse")) {
                var m,
                    b,
                    y = u.fromCharCode,
                    g = {
                  92: "\\",
                  34: '"',
                  47: "/",
                  98: "\b",
                  116: "\t",
                  110: "\n",
                  102: "\f",
                  114: "\r"
                },
                    w = function w() {
                  throw m = b = null, n();
                },
                    x = function x() {
                  for (var e, t, n, r, o, i = b, s = i.length; m < s;) {
                    switch (o = i.charCodeAt(m)) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        m++;
                        break;

                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        return e = a ? i.charAt(m) : i[m], m++, e;

                      case 34:
                        for (e = "@", m++; m < s;) {
                          if ((o = i.charCodeAt(m)) < 32) w();else if (92 == o) switch (o = i.charCodeAt(++m)) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                              e += g[o], m++;
                              break;

                            case 117:
                              for (t = ++m, n = m + 4; m < n; m++) {
                                48 <= (o = i.charCodeAt(m)) && o <= 57 || 97 <= o && o <= 102 || 65 <= o && o <= 70 || w();
                              }

                              e += y("0x" + i.slice(t, m));
                              break;

                            default:
                              w();
                          } else {
                            if (34 == o) break;

                            for (o = i.charCodeAt(m), t = m; 32 <= o && 92 != o && 34 != o;) {
                              o = i.charCodeAt(++m);
                            }

                            e += i.slice(t, m);
                          }
                        }

                        if (34 == i.charCodeAt(m)) return m++, e;
                        w();

                      default:
                        if (t = m, 45 == o && (r = !0, o = i.charCodeAt(++m)), 48 <= o && o <= 57) {
                          for (48 == o && 48 <= (o = i.charCodeAt(m + 1)) && o <= 57 && w(), r = !1; m < s && 48 <= (o = i.charCodeAt(m)) && o <= 57; m++) {
                            ;
                          }

                          if (46 == i.charCodeAt(m)) {
                            for (n = ++m; n < s && 48 <= (o = i.charCodeAt(n)) && o <= 57; n++) {
                              ;
                            }

                            n == m && w(), m = n;
                          }

                          if (101 == (o = i.charCodeAt(m)) || 69 == o) {
                            for (43 != (o = i.charCodeAt(++m)) && 45 != o || m++, n = m; n < s && 48 <= (o = i.charCodeAt(n)) && o <= 57; n++) {
                              ;
                            }

                            n == m && w(), m = n;
                          }

                          return +i.slice(t, m);
                        }

                        if (r && w(), "true" == i.slice(m, m + 4)) return m += 4, !0;
                        if ("false" == i.slice(m, m + 5)) return m += 5, !1;
                        if ("null" == i.slice(m, m + 4)) return m += 4, null;
                        w();
                    }
                  }

                  return "$";
                },
                    _ = function _(e) {
                  var t, n;

                  if ("$" == e && w(), "string" == typeof e) {
                    if ("@" == (a ? e.charAt(0) : e[0])) return e.slice(1);

                    if ("[" == e) {
                      for (t = []; "]" != (e = x()); n || (n = !0)) {
                        n && ("," == e ? "]" == (e = x()) && w() : w()), "," == e && w(), t.push(_(e));
                      }

                      return t;
                    }

                    if ("{" == e) {
                      for (t = {}; "}" != (e = x()); n || (n = !0)) {
                        n && ("," == e ? "}" == (e = x()) && w() : w()), "," != e && "string" == typeof e && "@" == (a ? e.charAt(0) : e[0]) && ":" == x() || w(), t[e.slice(1)] = _(x());
                      }

                      return t;
                    }

                    w();
                  }

                  return e;
                },
                    U = function U(e, t, n) {
                  var r = M(e, t, n);
                  r === T ? delete e[t] : e[t] = r;
                },
                    M = function M(e, t, n) {
                  var r,
                      o = e[t];
                  if ("object" == typeof o && o) if (O.call(o) == A) for (r = o.length; r--;) {
                    U(o, r, n);
                  } else _S(o, function (e) {
                    U(o, e, n);
                  });
                  return n.call(e, t, o);
                };

                l.parse = function (e, t) {
                  var n, r;
                  return m = 0, b = "" + e, n = _(x()), "$" != x() && w(), m = b = null, t && O.call(t) == p ? M(((r = {})[""] = n, r), "", t) : n;
                };
              }
            }

            return l.runInContext = W, l;
          }

          if (!t || t.global !== t && t.window !== t && t.self !== t || (D = t), e) W(D, e);else {
            var n = D.JSON,
                r = D.JSON3,
                o = !1,
                i = W(D, D.JSON3 = {
              "noConflict": function noConflict() {
                return o || (o = !0, D.JSON = n, D.JSON3 = r, n = r = null), i;
              }
            });
            D.JSON = {
              "parse": i.parse,
              "stringify": i.stringify
            };
          }
        }).call(this);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    56: [function (e, t, n) {
      "use strict";

      var o = Object.prototype.hasOwnProperty;

      function s(e) {
        return decodeURIComponent(e.replace(/\+/g, " "));
      }

      n.stringify = function (e, t) {
        t = t || "";
        var n = [];

        for (var r in "string" != typeof t && (t = "?"), e) {
          o.call(e, r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
        }

        return n.length ? t + n.join("&") : "";
      }, n.parse = function (e) {
        for (var t, n = /([^=?&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) {
          var o = s(t[1]),
              i = s(t[2]);
          o in r || (r[o] = i);
        }

        return r;
      };
    }, {}],
    57: [function (e, t, n) {
      "use strict";

      t.exports = function (e, t) {
        if (t = t.split(":")[0], !(e = +e)) return !1;

        switch (t) {
          case "http":
          case "ws":
            return 80 !== e;

          case "https":
          case "wss":
            return 443 !== e;

          case "ftp":
            return 21 !== e;

          case "gopher":
            return 70 !== e;

          case "file":
            return !1;
        }

        return 0 !== e;
      };
    }, {}],
    58: [function (e, t, n) {
      (function (i) {
        "use strict";

        var d = e("requires-port"),
            p = e("querystringify"),
            n = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            v = [["#", "hash"], ["?", "query"], function (e) {
          return e.replace("\\", "/");
        }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
            a = {
          hash: 1,
          query: 1
        };

        function m(e) {
          var t,
              n = i && i.location || {},
              r = {},
              o = typeof (e = e || n);
          if ("blob:" === e.protocol) r = new y(unescape(e.pathname), {});else if ("string" === o) for (t in r = new y(e, {}), a) {
            delete r[t];
          } else if ("object" === o) {
            for (t in e) {
              t in a || (r[t] = e[t]);
            }

            void 0 === r.slashes && (r.slashes = s.test(e.href));
          }
          return r;
        }

        function b(e) {
          var t = n.exec(e);
          return {
            protocol: t[1] ? t[1].toLowerCase() : "",
            slashes: !!t[2],
            rest: t[3]
          };
        }

        function y(e, t, n) {
          if (!(this instanceof y)) return new y(e, t, n);
          var r,
              o,
              i,
              s,
              a,
              l,
              c = v.slice(),
              u = typeof t,
              f = this,
              h = 0;

          for ("object" !== u && "string" !== u && (n = t, t = null), n && "function" != typeof n && (n = p.parse), t = m(t), r = !(o = b(e || "")).protocol && !o.slashes, f.slashes = o.slashes || r && t.slashes, f.protocol = o.protocol || t.protocol || "", e = o.rest, o.slashes || (c[3] = [/(.*)/, "pathname"]); h < c.length; h++) {
            "function" != typeof (s = c[h]) ? (i = s[0], l = s[1], i != i ? f[l] = e : "string" == typeof i ? ~(a = e.indexOf(i)) && (e = "number" == typeof s[2] ? (f[l] = e.slice(0, a), e.slice(a + s[2])) : (f[l] = e.slice(a), e.slice(0, a))) : (a = i.exec(e)) && (f[l] = a[1], e = e.slice(0, a.index)), f[l] = f[l] || r && s[3] && t[l] || "", s[4] && (f[l] = f[l].toLowerCase())) : e = s(e);
          }

          n && (f.query = n(f.query)), r && t.slashes && "/" !== f.pathname.charAt(0) && ("" !== f.pathname || "" !== t.pathname) && (f.pathname = function (e, t) {
            for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, s = 0; r--;) {
              "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), s++) : s && (0 === r && (i = !0), n.splice(r, 1), s--);
            }

            return i && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/");
          }(f.pathname, t.pathname)), d(f.port, f.protocol) || (f.host = f.hostname, f.port = ""), f.username = f.password = "", f.auth && (s = f.auth.split(":"), f.username = s[0] || "", f.password = s[1] || ""), f.origin = f.protocol && f.host && "file:" !== f.protocol ? f.protocol + "//" + f.host : "null", f.href = f.toString();
        }

        y.prototype = {
          set: function set(e, t, n) {
            var r = this;

            switch (e) {
              case "query":
                "string" == typeof t && t.length && (t = (n || p.parse)(t)), r[e] = t;
                break;

              case "port":
                r[e] = t, d(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname, r[e] = "");
                break;

              case "hostname":
                r[e] = t, r.port && (t += ":" + r.port), r.host = t;
                break;

              case "host":
                r[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), r.port = t.pop(), r.hostname = t.join(":")) : (r.hostname = t, r.port = "");
                break;

              case "protocol":
                r.protocol = t.toLowerCase(), r.slashes = !n;
                break;

              case "pathname":
              case "hash":
                if (t) {
                  var o = "pathname" === e ? "/" : "#";
                  r[e] = t.charAt(0) !== o ? o + t : t;
                } else r[e] = t;

                break;

              default:
                r[e] = t;
            }

            for (var i = 0; i < v.length; i++) {
              var s = v[i];
              s[4] && (r[s[1]] = r[s[1]].toLowerCase());
            }

            return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null", r.href = r.toString(), r;
          },
          toString: function toString(e) {
            e && "function" == typeof e || (e = p.stringify);
            var t,
                n = this,
                r = n.protocol;
            r && ":" !== r.charAt(r.length - 1) && (r += ":");
            var o = r + (n.slashes ? "//" : "");
            return n.username && (o += n.username, n.password && (o += ":" + n.password), o += "@"), o += n.host + n.pathname, (t = "object" == typeof n.query ? e(n.query) : n.query) && (o += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (o += n.hash), o;
          }
        }, y.extractProtocol = b, y.location = m, y.qs = p, t.exports = y;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "querystringify": 56,
      "requires-port": 57
    }]
  }, {}, [1])(1);
}); //# sourceMappingURL=sockjs.min.js.map

cc._RF.pop();