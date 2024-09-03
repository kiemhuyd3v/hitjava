
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/sockjs114.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (global){
"use strict";
cc._RF.push(module, '8caac4coytAhL1oG68GoCt6', 'sockjs114');
// Loading/src/sockjs114.js

"use strict";

/* sockjs-client v1.1.4 | http://sockjs.org | MIT license */
(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.SockJS = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      (function (global) {
        'use strict';

        var transportList = require('./transport-list');

        module.exports = require('./main')(transportList); // TODO can't get rid of this until all servers do

        if ('_sockjs_onload' in global) {
          setTimeout(global._sockjs_onload, 1);
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./main": 14,
      "./transport-list": 16
    }],
    2: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          Event = require('./event');

      function CloseEvent() {
        Event.call(this);
        this.initEvent('close', false, false);
        this.wasClean = false;
        this.code = 0;
        this.reason = '';
      }

      inherits(CloseEvent, Event);
      module.exports = CloseEvent;
    }, {
      "./event": 4,
      "inherits": 57
    }],
    3: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          EventTarget = require('./eventtarget');

      function EventEmitter() {
        EventTarget.call(this);
      }

      inherits(EventEmitter, EventTarget);

      EventEmitter.prototype.removeAllListeners = function (type) {
        if (type) {
          delete this._listeners[type];
        } else {
          this._listeners = {};
        }
      };

      EventEmitter.prototype.once = function (type, listener) {
        var self = this,
            fired = false;

        function g() {
          self.removeListener(type, g);

          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }

        this.on(type, g);
      };

      EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        var listeners = this._listeners[type];

        if (!listeners) {
          return;
        } // equivalent of Array.prototype.slice.call(arguments, 1);


        var l = arguments.length;
        var args = new Array(l - 1);

        for (var ai = 1; ai < l; ai++) {
          args[ai - 1] = arguments[ai];
        }

        for (var i = 0; i < listeners.length; i++) {
          listeners[i].apply(this, args);
        }
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
      EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;
      module.exports.EventEmitter = EventEmitter;
    }, {
      "./eventtarget": 5,
      "inherits": 57
    }],
    4: [function (require, module, exports) {
      'use strict';

      function Event(eventType) {
        this.type = eventType;
      }

      Event.prototype.initEvent = function (eventType, canBubble, cancelable) {
        this.type = eventType;
        this.bubbles = canBubble;
        this.cancelable = cancelable;
        this.timeStamp = +new Date();
        return this;
      };

      Event.prototype.stopPropagation = function () {};

      Event.prototype.preventDefault = function () {};

      Event.CAPTURING_PHASE = 1;
      Event.AT_TARGET = 2;
      Event.BUBBLING_PHASE = 3;
      module.exports = Event;
    }, {}],
    5: [function (require, module, exports) {
      'use strict';
      /* Simplified implementation of DOM2 EventTarget.
       *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
       */

      function EventTarget() {
        this._listeners = {};
      }

      EventTarget.prototype.addEventListener = function (eventType, listener) {
        if (!(eventType in this._listeners)) {
          this._listeners[eventType] = [];
        }

        var arr = this._listeners[eventType]; // #4

        if (arr.indexOf(listener) === -1) {
          // Make a copy so as not to interfere with a current dispatchEvent.
          arr = arr.concat([listener]);
        }

        this._listeners[eventType] = arr;
      };

      EventTarget.prototype.removeEventListener = function (eventType, listener) {
        var arr = this._listeners[eventType];

        if (!arr) {
          return;
        }

        var idx = arr.indexOf(listener);

        if (idx !== -1) {
          if (arr.length > 1) {
            // Make a copy so as not to interfere with a current dispatchEvent.
            this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
          } else {
            delete this._listeners[eventType];
          }

          return;
        }
      };

      EventTarget.prototype.dispatchEvent = function () {
        var event = arguments[0];
        var t = event.type; // equivalent of Array.prototype.slice.call(arguments, 0);

        var args = arguments.length === 1 ? [event] : Array.apply(null, arguments); // TODO: This doesn't match the real behavior; per spec, onfoo get
        // their place in line from the /first/ time they're set from
        // non-null. Although WebKit bumps it to the end every time it's
        // set.

        if (this['on' + t]) {
          this['on' + t].apply(this, args);
        }

        if (t in this._listeners) {
          // Grab a reference to the listeners list. removeEventListener may alter the list.
          var listeners = this._listeners[t];

          for (var i = 0; i < listeners.length; i++) {
            listeners[i].apply(this, args);
          }
        }
      };

      module.exports = EventTarget;
    }, {}],
    6: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          Event = require('./event');

      function TransportMessageEvent(data) {
        Event.call(this);
        this.initEvent('message', false, false);
        this.data = data;
      }

      inherits(TransportMessageEvent, Event);
      module.exports = TransportMessageEvent;
    }, {
      "./event": 4,
      "inherits": 57
    }],
    7: [function (require, module, exports) {
      'use strict';

      var JSON3 = require('json3'),
          iframeUtils = require('./utils/iframe');

      function FacadeJS(transport) {
        this._transport = transport;
        transport.on('message', this._transportMessage.bind(this));
        transport.on('close', this._transportClose.bind(this));
      }

      FacadeJS.prototype._transportClose = function (code, reason) {
        iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
      };

      FacadeJS.prototype._transportMessage = function (frame) {
        iframeUtils.postMessage('t', frame);
      };

      FacadeJS.prototype._send = function (data) {
        this._transport.send(data);
      };

      FacadeJS.prototype._close = function () {
        this._transport.close();

        this._transport.removeAllListeners();
      };

      module.exports = FacadeJS;
    }, {
      "./utils/iframe": 47,
      "json3": 58
    }],
    8: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var urlUtils = require('./utils/url'),
            eventUtils = require('./utils/event'),
            JSON3 = require('json3'),
            FacadeJS = require('./facade'),
            InfoIframeReceiver = require('./info-iframe-receiver'),
            iframeUtils = require('./utils/iframe'),
            loc = require('./location');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:iframe-bootstrap');
        }

        module.exports = function (SockJS, availableTransports) {
          var transportMap = {};
          availableTransports.forEach(function (at) {
            if (at.facadeTransport) {
              transportMap[at.facadeTransport.transportName] = at.facadeTransport;
            }
          }); // hard-coded for the info iframe
          // TODO see if we can make this more dynamic

          transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
          var parentOrigin;
          /* eslint-disable camelcase */

          SockJS.bootstrap_iframe = function () {
            /* eslint-enable camelcase */
            var facade;
            iframeUtils.currentWindowId = loc.hash.slice(1);

            var onMessage = function onMessage(e) {
              if (e.source !== parent) {
                return;
              }

              if (typeof parentOrigin === 'undefined') {
                parentOrigin = e.origin;
              }

              if (e.origin !== parentOrigin) {
                return;
              }

              var iframeMessage;

              try {
                iframeMessage = JSON3.parse(e.data);
              } catch (ignored) {
                debug('bad json', e.data);
                return;
              }

              if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
                return;
              }

              switch (iframeMessage.type) {
                case 's':
                  var p;

                  try {
                    p = JSON3.parse(iframeMessage.data);
                  } catch (ignored) {
                    debug('bad json', iframeMessage.data);
                    break;
                  }

                  var version = p[0];
                  var transport = p[1];
                  var transUrl = p[2];
                  var baseUrl = p[3];
                  debug(version, transport, transUrl, baseUrl); // change this to semver logic

                  if (version !== SockJS.version) {
                    throw new Error('Incompatible SockJS! Main site uses:' + ' "' + version + '", the iframe:' + ' "' + SockJS.version + '".');
                  }

                  if (!urlUtils.isOriginEqual(transUrl, loc.href) || !urlUtils.isOriginEqual(baseUrl, loc.href)) {
                    throw new Error('Can\'t connect to different domain from within an ' + 'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
                  }

                  facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
                  break;

                case 'm':
                  facade._send(iframeMessage.data);

                  break;

                case 'c':
                  if (facade) {
                    facade._close();
                  }

                  facade = null;
                  break;
              }
            };

            eventUtils.attachEvent('message', onMessage); // Start

            iframeUtils.postMessage('s');
          };
        };
      }).call(this, {
        env: {}
      });
    }, {
      "./facade": 7,
      "./info-iframe-receiver": 10,
      "./location": 13,
      "./utils/event": 46,
      "./utils/iframe": 47,
      "./utils/url": 52,
      "debug": 55,
      "json3": 58
    }],
    9: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var EventEmitter = require('events').EventEmitter,
            inherits = require('inherits'),
            JSON3 = require('json3'),
            objectUtils = require('./utils/object');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:info-ajax');
        }

        function InfoAjax(url, AjaxObject) {
          EventEmitter.call(this);
          var self = this;
          var t0 = +new Date();
          this.xo = new AjaxObject('GET', url);
          this.xo.once('finish', function (status, text) {
            var info, rtt;

            if (status === 200) {
              rtt = +new Date() - t0;

              if (text) {
                try {
                  info = JSON3.parse(text);
                } catch (e) {
                  debug('bad json', text);
                }
              }

              if (!objectUtils.isObject(info)) {
                info = {};
              }
            }

            self.emit('finish', info, rtt);
            self.removeAllListeners();
          });
        }

        inherits(InfoAjax, EventEmitter);

        InfoAjax.prototype.close = function () {
          this.removeAllListeners();
          this.xo.close();
        };

        module.exports = InfoAjax;
      }).call(this, {
        env: {}
      });
    }, {
      "./utils/object": 49,
      "debug": 55,
      "events": 3,
      "inherits": 57,
      "json3": 58
    }],
    10: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          EventEmitter = require('events').EventEmitter,
          JSON3 = require('json3'),
          XHRLocalObject = require('./transport/sender/xhr-local'),
          InfoAjax = require('./info-ajax');

      function InfoReceiverIframe(transUrl) {
        var self = this;
        EventEmitter.call(this);
        this.ir = new InfoAjax(transUrl, XHRLocalObject);
        this.ir.once('finish', function (info, rtt) {
          self.ir = null;
          self.emit('message', JSON3.stringify([info, rtt]));
        });
      }

      inherits(InfoReceiverIframe, EventEmitter);
      InfoReceiverIframe.transportName = 'iframe-info-receiver';

      InfoReceiverIframe.prototype.close = function () {
        if (this.ir) {
          this.ir.close();
          this.ir = null;
        }

        this.removeAllListeners();
      };

      module.exports = InfoReceiverIframe;
    }, {
      "./info-ajax": 9,
      "./transport/sender/xhr-local": 37,
      "events": 3,
      "inherits": 57,
      "json3": 58
    }],
    11: [function (require, module, exports) {
      (function (process, global) {
        'use strict';

        var EventEmitter = require('events').EventEmitter,
            inherits = require('inherits'),
            JSON3 = require('json3'),
            utils = require('./utils/event'),
            IframeTransport = require('./transport/iframe'),
            InfoReceiverIframe = require('./info-iframe-receiver');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:info-iframe');
        }

        function InfoIframe(baseUrl, url) {
          var self = this;
          EventEmitter.call(this);

          var go = function go() {
            var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);
            ifr.once('message', function (msg) {
              if (msg) {
                var d;

                try {
                  d = JSON3.parse(msg);
                } catch (e) {
                  debug('bad json', msg);
                  self.emit('finish');
                  self.close();
                  return;
                }

                var info = d[0],
                    rtt = d[1];
                self.emit('finish', info, rtt);
              }

              self.close();
            });
            ifr.once('close', function () {
              self.emit('finish');
              self.close();
            });
          }; // TODO this seems the same as the 'needBody' from transports


          if (!global.document.body) {
            utils.attachEvent('load', go);
          } else {
            go();
          }
        }

        inherits(InfoIframe, EventEmitter);

        InfoIframe.enabled = function () {
          return IframeTransport.enabled();
        };

        InfoIframe.prototype.close = function () {
          if (this.ifr) {
            this.ifr.close();
          }

          this.removeAllListeners();
          this.ifr = null;
        };

        module.exports = InfoIframe;
      }).call(this, {
        env: {}
      }, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./info-iframe-receiver": 10,
      "./transport/iframe": 22,
      "./utils/event": 46,
      "debug": 55,
      "events": 3,
      "inherits": 57,
      "json3": 58
    }],
    12: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var EventEmitter = require('events').EventEmitter,
            inherits = require('inherits'),
            urlUtils = require('./utils/url'),
            XDR = require('./transport/sender/xdr'),
            XHRCors = require('./transport/sender/xhr-cors'),
            XHRLocal = require('./transport/sender/xhr-local'),
            XHRFake = require('./transport/sender/xhr-fake'),
            InfoIframe = require('./info-iframe'),
            InfoAjax = require('./info-ajax');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:info-receiver');
        }

        function InfoReceiver(baseUrl, urlInfo) {
          debug(baseUrl);
          var self = this;
          EventEmitter.call(this);
          setTimeout(function () {
            self.doXhr(baseUrl, urlInfo);
          }, 0);
        }

        inherits(InfoReceiver, EventEmitter); // TODO this is currently ignoring the list of available transports and the whitelist

        InfoReceiver._getReceiver = function (baseUrl, url, urlInfo) {
          // determine method of CORS support (if needed)
          if (urlInfo.sameOrigin) {
            return new InfoAjax(url, XHRLocal);
          }

          if (XHRCors.enabled) {
            return new InfoAjax(url, XHRCors);
          }

          if (XDR.enabled && urlInfo.sameScheme) {
            return new InfoAjax(url, XDR);
          }

          if (InfoIframe.enabled()) {
            return new InfoIframe(baseUrl, url);
          }

          return new InfoAjax(url, XHRFake);
        };

        InfoReceiver.prototype.doXhr = function (baseUrl, urlInfo) {
          var self = this,
              url = urlUtils.addPath(baseUrl, '/info');
          debug('doXhr', url);
          this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);
          this.timeoutRef = setTimeout(function () {
            debug('timeout');

            self._cleanup(false);

            self.emit('finish');
          }, InfoReceiver.timeout);
          this.xo.once('finish', function (info, rtt) {
            debug('finish', info, rtt);

            self._cleanup(true);

            self.emit('finish', info, rtt);
          });
        };

        InfoReceiver.prototype._cleanup = function (wasClean) {
          debug('_cleanup');
          clearTimeout(this.timeoutRef);
          this.timeoutRef = null;

          if (!wasClean && this.xo) {
            this.xo.close();
          }

          this.xo = null;
        };

        InfoReceiver.prototype.close = function () {
          debug('close');
          this.removeAllListeners();

          this._cleanup(false);
        };

        InfoReceiver.timeout = 8000;
        module.exports = InfoReceiver;
      }).call(this, {
        env: {}
      });
    }, {
      "./info-ajax": 9,
      "./info-iframe": 11,
      "./transport/sender/xdr": 34,
      "./transport/sender/xhr-cors": 35,
      "./transport/sender/xhr-fake": 36,
      "./transport/sender/xhr-local": 37,
      "./utils/url": 52,
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    13: [function (require, module, exports) {
      (function (global) {
        'use strict';

        module.exports = global.location || {
          origin: 'http://localhost:80',
          protocol: 'http',
          host: 'localhost',
          port: 80,
          href: 'http://localhost/',
          hash: ''
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    14: [function (require, module, exports) {
      (function (process, global) {
        'use strict';

        require('./shims');

        var URL = require('url-parse'),
            inherits = require('inherits'),
            JSON3 = require('json3'),
            random = require('./utils/random'),
            escape = require('./utils/escape'),
            urlUtils = require('./utils/url'),
            eventUtils = require('./utils/event'),
            transport = require('./utils/transport'),
            objectUtils = require('./utils/object'),
            browser = require('./utils/browser'),
            log = require('./utils/log'),
            Event = require('./event/event'),
            EventTarget = require('./event/eventtarget'),
            loc = require('./location'),
            CloseEvent = require('./event/close'),
            TransportMessageEvent = require('./event/trans-message'),
            InfoReceiver = require('./info-receiver');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:main');
        }

        var transports; // follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface

        function SockJS(url, protocols, options) {
          if (!(this instanceof SockJS)) {
            return new SockJS(url, protocols, options);
          }

          if (arguments.length < 1) {
            throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
          }

          EventTarget.call(this);
          this.readyState = SockJS.CONNECTING;
          this.extensions = '';
          this.protocol = ''; // non-standard extension

          options = options || {};

          if (options.protocols_whitelist) {
            log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
          }

          this._transportsWhitelist = options.transports;
          this._transportOptions = options.transportOptions || {};
          var sessionId = options.sessionId || 8;

          if (typeof sessionId === 'function') {
            this._generateSessionId = sessionId;
          } else if (typeof sessionId === 'number') {
            this._generateSessionId = function () {
              return random.string(sessionId);
            };
          } else {
            throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
          }

          this._server = options.server || random.numberString(1000); // Step 1 of WS spec - parse and validate the url. Issue #8

          var parsedUrl = new URL(url);

          if (!parsedUrl.host || !parsedUrl.protocol) {
            throw new SyntaxError("The URL '" + url + "' is invalid");
          } else if (parsedUrl.hash) {
            throw new SyntaxError('The URL must not contain a fragment');
          } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
            throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
          }

          var secure = parsedUrl.protocol === 'https:'; // Step 2 - don't allow secure origin with an insecure protocol

          if (loc.protocol === 'https' && !secure) {
            throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
          } // Step 3 - check port access - no need here
          // Step 4 - parse protocols argument


          if (!protocols) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            protocols = [protocols];
          } // Step 5 - check protocols argument


          var sortedProtocols = protocols.sort();
          sortedProtocols.forEach(function (proto, i) {
            if (!proto) {
              throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
            }

            if (i < sortedProtocols.length - 1 && proto === sortedProtocols[i + 1]) {
              throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
            }
          }); // Step 6 - convert origin

          var o = urlUtils.getOrigin(loc.href);
          this._origin = o ? o.toLowerCase() : null; // remove the trailing slash

          parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, '')); // store the sanitized url

          this.url = parsedUrl.href;
          debug('using url', this.url); // Step 7 - start connection in background
          // obtain server info
          // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26

          this._urlInfo = {
            nullOrigin: !browser.hasDomain(),
            sameOrigin: urlUtils.isOriginEqual(this.url, loc.href),
            sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
          };
          this._ir = new InfoReceiver(this.url, this._urlInfo);

          this._ir.once('finish', this._receiveInfo.bind(this));
        }

        inherits(SockJS, EventTarget);

        function userSetCode(code) {
          return code === 1000 || code >= 3000 && code <= 4999;
        }

        SockJS.prototype.close = function (code, reason) {
          // Step 1
          if (code && !userSetCode(code)) {
            throw new Error('InvalidAccessError: Invalid code');
          } // Step 2.4 states the max is 123 bytes, but we are just checking length


          if (reason && reason.length > 123) {
            throw new SyntaxError('reason argument has an invalid length');
          } // Step 3.1


          if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
            return;
          } // TODO look at docs to determine how to set this


          var wasClean = true;

          this._close(code || 1000, reason || 'Normal closure', wasClean);
        };

        SockJS.prototype.send = function (data) {
          // #13 - convert anything non-string to string
          // TODO this currently turns objects into [object Object]
          if (typeof data !== 'string') {
            data = '' + data;
          }

          if (this.readyState === SockJS.CONNECTING) {
            throw new Error('InvalidStateError: The connection has not been established yet');
          }

          if (this.readyState !== SockJS.OPEN) {
            return;
          }

          this._transport.send(escape.quote(data));
        };

        SockJS.version = require('./version');
        SockJS.CONNECTING = 0;
        SockJS.OPEN = 1;
        SockJS.CLOSING = 2;
        SockJS.CLOSED = 3;

        SockJS.prototype._receiveInfo = function (info, rtt) {
          debug('_receiveInfo', rtt);
          this._ir = null;

          if (!info) {
            this._close(1002, 'Cannot connect to server');

            return;
          } // establish a round-trip timeout (RTO) based on the
          // round-trip time (RTT)


          this._rto = this.countRTO(rtt); // allow server to override url used for the actual transport

          this._transUrl = info.base_url ? info.base_url : this.url;
          info = objectUtils.extend(info, this._urlInfo);
          debug('info', info); // determine list of desired and supported transports

          var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
          this._transports = enabledTransports.main;
          debug(this._transports.length + ' enabled transports');

          this._connect();
        };

        SockJS.prototype._connect = function () {
          for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
            debug('attempt', Transport.transportName);

            if (Transport.needBody) {
              if (!global.document.body || typeof global.document.readyState !== 'undefined' && global.document.readyState !== 'complete' && global.document.readyState !== 'interactive') {
                debug('waiting for body');

                this._transports.unshift(Transport);

                eventUtils.attachEvent('load', this._connect.bind(this));
                return;
              }
            } // calculate timeout based on RTO and round trips. Default to 5s


            var timeoutMs = this._rto * Transport.roundTrips || 5000;
            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
            debug('using timeout', timeoutMs);
            var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
            var options = this._transportOptions[Transport.transportName];
            debug('transport url', transportUrl);
            var transportObj = new Transport(transportUrl, this._transUrl, options);
            transportObj.on('message', this._transportMessage.bind(this));
            transportObj.once('close', this._transportClose.bind(this));
            transportObj.transportName = Transport.transportName;
            this._transport = transportObj;
            return;
          }

          this._close(2000, 'All transports failed', false);
        };

        SockJS.prototype._transportTimeout = function () {
          debug('_transportTimeout');

          if (this.readyState === SockJS.CONNECTING) {
            this._transportClose(2007, 'Transport timed out');
          }
        };

        SockJS.prototype._transportMessage = function (msg) {
          debug('_transportMessage', msg);
          var self = this,
              type = msg.slice(0, 1),
              content = msg.slice(1),
              payload; // first check for messages that don't need a payload

          switch (type) {
            case 'o':
              this._open();

              return;

            case 'h':
              this.dispatchEvent(new Event('heartbeat'));
              debug('heartbeat', this.transport);
              return;
          }

          if (content) {
            try {
              payload = JSON3.parse(content);
            } catch (e) {
              debug('bad json', content);
            }
          }

          if (typeof payload === 'undefined') {
            debug('empty payload', content);
            return;
          }

          switch (type) {
            case 'a':
              if (Array.isArray(payload)) {
                payload.forEach(function (p) {
                  debug('message', self.transport, p);
                  self.dispatchEvent(new TransportMessageEvent(p));
                });
              }

              break;

            case 'm':
              debug('message', this.transport, payload);
              this.dispatchEvent(new TransportMessageEvent(payload));
              break;

            case 'c':
              if (Array.isArray(payload) && payload.length === 2) {
                this._close(payload[0], payload[1], true);
              }

              break;
          }
        };

        SockJS.prototype._transportClose = function (code, reason) {
          debug('_transportClose', this.transport, code, reason);

          if (this._transport) {
            this._transport.removeAllListeners();

            this._transport = null;
            this.transport = null;
          }

          if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
            this._connect();

            return;
          }

          this._close(code, reason);
        };

        SockJS.prototype._open = function () {
          debug('_open', this._transport.transportName, this.readyState);

          if (this.readyState === SockJS.CONNECTING) {
            if (this._transportTimeoutId) {
              clearTimeout(this._transportTimeoutId);
              this._transportTimeoutId = null;
            }

            this.readyState = SockJS.OPEN;
            this.transport = this._transport.transportName;
            this.dispatchEvent(new Event('open'));
            debug('connected', this.transport);
          } else {
            // The server might have been restarted, and lost track of our
            // connection.
            this._close(1006, 'Server lost session');
          }
        };

        SockJS.prototype._close = function (code, reason, wasClean) {
          debug('_close', this.transport, code, reason, wasClean, this.readyState);
          var forceFail = false;

          if (this._ir) {
            forceFail = true;

            this._ir.close();

            this._ir = null;
          }

          if (this._transport) {
            this._transport.close();

            this._transport = null;
            this.transport = null;
          }

          if (this.readyState === SockJS.CLOSED) {
            throw new Error('InvalidStateError: SockJS has already been closed');
          }

          this.readyState = SockJS.CLOSING;
          setTimeout(function () {
            this.readyState = SockJS.CLOSED;

            if (forceFail) {
              this.dispatchEvent(new Event('error'));
            }

            var e = new CloseEvent('close');
            e.wasClean = wasClean || false;
            e.code = code || 1000;
            e.reason = reason;
            this.dispatchEvent(e);
            this.onmessage = this.onclose = this.onerror = null;
            debug('disconnected');
          }.bind(this), 0);
        }; // See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
        // and RFC 2988.


        SockJS.prototype.countRTO = function (rtt) {
          // In a local environment, when using IE8/9 and the `jsonp-polling`
          // transport the time needed to establish a connection (the time that pass
          // from the opening of the transport to the call of `_dispatchOpen`) is
          // around 200msec (the lower bound used in the article above) and this
          // causes spurious timeouts. For this reason we calculate a value slightly
          // larger than that used in the article.
          if (rtt > 100) {
            return 4 * rtt; // rto > 400msec
          }

          return 300 + rtt; // 300msec < rto <= 400msec
        };

        module.exports = function (availableTransports) {
          transports = transport(availableTransports);

          require('./iframe-bootstrap')(SockJS, availableTransports);

          return SockJS;
        };
      }).call(this, {
        env: {}
      }, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
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
      "debug": 55,
      "inherits": 57,
      "json3": 58,
      "url-parse": 61
    }],
    15: [function (require, module, exports) {
      /* eslint-disable */

      /* jscs: disable */
      'use strict'; // pulled specific shims from https://github.com/es-shims/es5-shim

      var ArrayPrototype = Array.prototype;
      var ObjectPrototype = Object.prototype;
      var FunctionPrototype = Function.prototype;
      var StringPrototype = String.prototype;
      var array_slice = ArrayPrototype.slice;
      var _toString = ObjectPrototype.toString;

      var isFunction = function isFunction(val) {
        return ObjectPrototype.toString.call(val) === '[object Function]';
      };

      var isArray = function isArray(obj) {
        return _toString.call(obj) === '[object Array]';
      };

      var isString = function isString(obj) {
        return _toString.call(obj) === '[object String]';
      };

      var supportsDescriptors = Object.defineProperty && function () {
        try {
          Object.defineProperty({}, 'x', {});
          return true;
        } catch (e) {
          /* this is ES3 */
          return false;
        }
      }(); // Define configurable, writable and non-enumerable props
      // if they don't exist.


      var defineProperty;

      if (supportsDescriptors) {
        defineProperty = function defineProperty(object, name, method, forceAssign) {
          if (!forceAssign && name in object) {
            return;
          }

          Object.defineProperty(object, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: method
          });
        };
      } else {
        defineProperty = function defineProperty(object, name, method, forceAssign) {
          if (!forceAssign && name in object) {
            return;
          }

          object[name] = method;
        };
      }

      var defineProperties = function defineProperties(object, map, forceAssign) {
        for (var name in map) {
          if (ObjectPrototype.hasOwnProperty.call(map, name)) {
            defineProperty(object, name, map[name], forceAssign);
          }
        }
      };

      var toObject = function toObject(o) {
        if (o == null) {
          // this matches both null and undefined
          throw new TypeError("can't convert " + o + ' to object');
        }

        return Object(o);
      }; //
      // Util
      // ======
      //
      // ES5 9.4
      // http://es5.github.com/#x9.4
      // http://jsperf.com/to-integer


      function toInteger(num) {
        var n = +num;

        if (n !== n) {
          // isNaN
          n = 0;
        } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }

        return n;
      }

      function ToUint32(x) {
        return x >>> 0;
      } //
      // Function
      // ========
      //
      // ES-5 15.3.4.5
      // http://es5.github.com/#x15.3.4.5


      function Empty() {}

      defineProperties(FunctionPrototype, {
        bind: function bind(that) {
          // .length is 1
          // 1. Let Target be the this value.
          var target = this; // 2. If IsCallable(Target) is false, throw a TypeError exception.

          if (!isFunction(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
          } // 3. Let A be a new (possibly empty) internal list of all of the
          //   argument values provided after thisArg (arg1, arg2 etc), in order.
          // XXX slicedArgs will stand in for "A" if used


          var args = array_slice.call(arguments, 1); // for normal call
          // 4. Let F be a new native ECMAScript object.
          // 11. Set the [[Prototype]] internal property of F to the standard
          //   built-in Function prototype object as specified in 15.3.3.1.
          // 12. Set the [[Call]] internal property of F as described in
          //   15.3.4.5.1.
          // 13. Set the [[Construct]] internal property of F as described in
          //   15.3.4.5.2.
          // 14. Set the [[HasInstance]] internal property of F as described in
          //   15.3.4.5.3.

          var binder = function binder() {
            if (this instanceof bound) {
              // 15.3.4.5.2 [[Construct]]
              // When the [[Construct]] internal method of a function object,
              // F that was created using the bind function is called with a
              // list of arguments ExtraArgs, the following steps are taken:
              // 1. Let target be the value of F's [[TargetFunction]]
              //   internal property.
              // 2. If target has no [[Construct]] internal method, a
              //   TypeError exception is thrown.
              // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
              //   property.
              // 4. Let args be a new list containing the same values as the
              //   list boundArgs in the same order followed by the same
              //   values as the list ExtraArgs in the same order.
              // 5. Return the result of calling the [[Construct]] internal
              //   method of target providing args as the arguments.
              var result = target.apply(this, args.concat(array_slice.call(arguments)));

              if (Object(result) === result) {
                return result;
              }

              return this;
            } else {
              // 15.3.4.5.1 [[Call]]
              // When the [[Call]] internal method of a function object, F,
              // which was created using the bind function is called with a
              // this value and a list of arguments ExtraArgs, the following
              // steps are taken:
              // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
              //   property.
              // 2. Let boundThis be the value of F's [[BoundThis]] internal
              //   property.
              // 3. Let target be the value of F's [[TargetFunction]] internal
              //   property.
              // 4. Let args be a new list containing the same values as the
              //   list boundArgs in the same order followed by the same
              //   values as the list ExtraArgs in the same order.
              // 5. Return the result of calling the [[Call]] internal method
              //   of target providing boundThis as the this value and
              //   providing args as the arguments.
              // equiv: target.call(this, ...boundArgs, ...args)
              return target.apply(that, args.concat(array_slice.call(arguments)));
            }
          }; // 15. If the [[Class]] internal property of Target is "Function", then
          //     a. Let L be the length property of Target minus the length of A.
          //     b. Set the length own property of F to either 0 or L, whichever is
          //       larger.
          // 16. Else set the length own property of F to 0.


          var boundLength = Math.max(0, target.length - args.length); // 17. Set the attributes of the length own property of F to the values
          //   specified in 15.3.5.1.

          var boundArgs = [];

          for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
          } // XXX Build a dynamic function with desired amount of arguments is the only
          // way to set the length property of a function.
          // In environments where Content Security Policies enabled (Chrome extensions,
          // for ex.) all use of eval or Function costructor throws an exception.
          // However in all of these environments Function.prototype.bind exists
          // and so this code will never be executed.


          var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

          if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty(); // Clean up dangling references.

            Empty.prototype = null;
          } // TODO
          // 18. Set the [[Extensible]] internal property of F to true.
          // TODO
          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
          // 20. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
          //   false.
          // 21. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
          //   and false.
          // TODO
          // NOTE Function objects created using Function.prototype.bind do not
          // have a prototype property or the [[Code]], [[FormalParameters]], and
          // [[Scope]] internal properties.
          // XXX can't delete prototype in pure-js.
          // 22. Return F.


          return bound;
        }
      }); //
      // Array
      // =====
      //
      // ES5 15.4.3.2
      // http://es5.github.com/#x15.4.3.2
      // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray

      defineProperties(Array, {
        isArray: isArray
      });
      var boxedString = Object('a');
      var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

      var properlyBoxesContext = function properlyBoxed(method) {
        // Check node 0.6.21 bug where third parameter is not boxed
        var properlyBoxesNonStrict = true;
        var properlyBoxesStrict = true;

        if (method) {
          method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') {
              properlyBoxesNonStrict = false;
            }
          });
          method.call([1], function () {
            'use strict';

            properlyBoxesStrict = typeof this === 'string';
          }, 'x');
        }

        return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
      };

      defineProperties(ArrayPrototype, {
        forEach: function forEach(fun
        /*, thisp*/
        ) {
          var object = toObject(this),
              self = splitString && isString(this) ? this.split('') : object,
              thisp = arguments[1],
              i = -1,
              length = self.length >>> 0; // If no callback function or if callback is not a callable function

          if (!isFunction(fun)) {
            throw new TypeError(); // TODO message
          }

          while (++i < length) {
            if (i in self) {
              // Invoke the callback function with call, passing arguments:
              // context, property value, property key, thisArg object
              // context
              fun.call(thisp, self[i], i, object);
            }
          }
        }
      }, !properlyBoxesContext(ArrayPrototype.forEach)); // ES5 15.4.4.14
      // http://es5.github.com/#x15.4.4.14
      // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf

      var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
      defineProperties(ArrayPrototype, {
        indexOf: function indexOf(sought
        /*, fromIndex */
        ) {
          var self = splitString && isString(this) ? this.split('') : toObject(this),
              length = self.length >>> 0;

          if (!length) {
            return -1;
          }

          var i = 0;

          if (arguments.length > 1) {
            i = toInteger(arguments[1]);
          } // handle negative indices


          i = i >= 0 ? i : Math.max(0, length + i);

          for (; i < length; i++) {
            if (i in self && self[i] === sought) {
              return i;
            }
          }

          return -1;
        }
      }, hasFirefox2IndexOfBug); //
      // String
      // ======
      //
      // ES5 15.5.4.14
      // http://es5.github.com/#x15.5.4.14
      // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
      // Many browsers do not split properly with regular expressions or they
      // do not perform the split correctly under obscure conditions.
      // See http://blog.stevenlevithan.com/archives/cross-browser-split
      // I've tested in many browsers and this seems to cover the deviant ones:
      //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
      //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
      //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
      //       [undefined, "t", undefined, "e", ...]
      //    ''.split(/.?/) should be [], not [""]
      //    '.'.split(/()()/) should be ["."], not ["", "", "."]

      var string_split = StringPrototype.split;

      if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) {
        (function () {
          var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

          StringPrototype.split = function (separator, limit) {
            var string = this;

            if (separator === void 0 && limit === 0) {
              return [];
            } // If `separator` is not a regex, use native split


            if (_toString.call(separator) !== '[object RegExp]') {
              return string_split.call(this, separator, limit);
            }

            var output = [],
                flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + ( // Proposed for ES6
            separator.sticky ? 'y' : ''),
                // Firefox 3+
            lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
            separator2,
                match,
                lastIndex,
                lastLength;
            separator = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert

            if (!compliantExecNpcg) {
              // Doesn't need flags gy, but they don't hurt
              separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */


            limit = limit === void 0 ? -1 >>> 0 : // Math.pow(2, 32) - 1
            ToUint32(limit);

            while (match = separator.exec(string)) {
              // `separator.lastIndex` is not reliable cross-browser
              lastIndex = match.index + match[0].length;

              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for
                // nonparticipating capturing groups

                if (!compliantExecNpcg && match.length > 1) {
                  match[0].replace(separator2, function () {
                    for (var i = 1; i < arguments.length - 2; i++) {
                      if (arguments[i] === void 0) {
                        match[i] = void 0;
                      }
                    }
                  });
                }

                if (match.length > 1 && match.index < string.length) {
                  ArrayPrototype.push.apply(output, match.slice(1));
                }

                lastLength = match[0].length;
                lastLastIndex = lastIndex;

                if (output.length >= limit) {
                  break;
                }
              }

              if (separator.lastIndex === match.index) {
                separator.lastIndex++; // Avoid an infinite loop
              }
            }

            if (lastLastIndex === string.length) {
              if (lastLength || !separator.test('')) {
                output.push('');
              }
            } else {
              output.push(string.slice(lastLastIndex));
            }

            return output.length > limit ? output.slice(0, limit) : output;
          };
        })(); // [bugfix, chrome]
        // If separator is undefined, then the result array contains just one String,
        // which is the this value (converted to a String). If limit is not undefined,
        // then the output array is truncated so that it contains no more than limit
        // elements.
        // "0".split(undefined, 0) -> []

      } else if ('0'.split(void 0, 0).length) {
        StringPrototype.split = function split(separator, limit) {
          if (separator === void 0 && limit === 0) {
            return [];
          }

          return string_split.call(this, separator, limit);
        };
      } // ECMA-262, 3rd B.2.3
      // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
      // non-normative section suggesting uniform semantics and it should be
      // normalized across all browsers
      // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE


      var string_substr = StringPrototype.substr;
      var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
      defineProperties(StringPrototype, {
        substr: function substr(start, length) {
          return string_substr.call(this, start < 0 ? (start = this.length + start) < 0 ? 0 : start : start, length);
        }
      }, hasNegativeSubstrBug);
    }, {}],
    16: [function (require, module, exports) {
      'use strict';

      module.exports = [// streaming transports
      require('./transport/websocket'), require('./transport/xhr-streaming'), require('./transport/xdr-streaming'), require('./transport/eventsource'), require('./transport/lib/iframe-wrap')(require('./transport/eventsource')) // polling transports
      , require('./transport/htmlfile'), require('./transport/lib/iframe-wrap')(require('./transport/htmlfile')), require('./transport/xhr-polling'), require('./transport/xdr-polling'), require('./transport/lib/iframe-wrap')(require('./transport/xhr-polling')), require('./transport/jsonp-polling')];
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
    17: [function (require, module, exports) {
      (function (process, global) {
        'use strict';

        var EventEmitter = require('events').EventEmitter,
            inherits = require('inherits'),
            utils = require('../../utils/event'),
            urlUtils = require('../../utils/url'),
            XHR = global.XMLHttpRequest;

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:browser:xhr');
        }

        function AbstractXHRObject(method, url, payload, opts) {
          debug(method, url);
          var self = this;
          EventEmitter.call(this);
          setTimeout(function () {
            self._start(method, url, payload, opts);
          }, 0);
        }

        inherits(AbstractXHRObject, EventEmitter);

        AbstractXHRObject.prototype._start = function (method, url, payload, opts) {
          var self = this;

          try {
            this.xhr = new XHR();
          } catch (x) {// intentionally empty
          }

          if (!this.xhr) {
            debug('no xhr');
            this.emit('finish', 0, 'no xhr support');

            this._cleanup();

            return;
          } // several browsers cache POSTs


          url = urlUtils.addQuery(url, 't=' + +new Date()); // Explorer tends to keep connection open, even after the
          // tab gets closed: http://bugs.jquery.com/ticket/5280

          this.unloadRef = utils.unloadAdd(function () {
            debug('unload cleanup');

            self._cleanup(true);
          });

          try {
            this.xhr.open(method, url, true);

            if (this.timeout && 'timeout' in this.xhr) {
              this.xhr.timeout = this.timeout;

              this.xhr.ontimeout = function () {
                debug('xhr timeout');
                self.emit('finish', 0, '');

                self._cleanup(false);
              };
            }
          } catch (e) {
            debug('exception', e); // IE raises an exception on wrong port.

            this.emit('finish', 0, '');

            this._cleanup(false);

            return;
          }

          if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
            debug('withCredentials'); // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
            // "This never affects same-site requests."

            this.xhr.withCredentials = 'true';
          }

          if (opts && opts.headers) {
            for (var key in opts.headers) {
              this.xhr.setRequestHeader(key, opts.headers[key]);
            }
          }

          this.xhr.onreadystatechange = function () {
            if (self.xhr) {
              var x = self.xhr;
              var text, status;
              debug('readyState', x.readyState);

              switch (x.readyState) {
                case 3:
                  // IE doesn't like peeking into responseText or status
                  // on Microsoft.XMLHTTP and readystate=3
                  try {
                    status = x.status;
                    text = x.responseText;
                  } catch (e) {// intentionally empty
                  }

                  debug('status', status); // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450

                  if (status === 1223) {
                    status = 204;
                  } // IE does return readystate == 3 for 404 answers.


                  if (status === 200 && text && text.length > 0) {
                    debug('chunk');
                    self.emit('chunk', status, text);
                  }

                  break;

                case 4:
                  status = x.status;
                  debug('status', status); // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450

                  if (status === 1223) {
                    status = 204;
                  } // IE returns this for a bad port
                  // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx


                  if (status === 12005 || status === 12029) {
                    status = 0;
                  }

                  debug('finish', status, x.responseText);
                  self.emit('finish', status, x.responseText);

                  self._cleanup(false);

                  break;
              }
            }
          };

          try {
            self.xhr.send(payload);
          } catch (e) {
            self.emit('finish', 0, '');

            self._cleanup(false);
          }
        };

        AbstractXHRObject.prototype._cleanup = function (abort) {
          debug('cleanup');

          if (!this.xhr) {
            return;
          }

          this.removeAllListeners();
          utils.unloadDel(this.unloadRef); // IE needs this field to be a function

          this.xhr.onreadystatechange = function () {};

          if (this.xhr.ontimeout) {
            this.xhr.ontimeout = null;
          }

          if (abort) {
            try {
              this.xhr.abort();
            } catch (x) {// intentionally empty
            }
          }

          this.unloadRef = this.xhr = null;
        };

        AbstractXHRObject.prototype.close = function () {
          debug('close');

          this._cleanup(true);
        };

        AbstractXHRObject.enabled = !!XHR; // override XMLHttpRequest for IE6/7
        // obfuscate to avoid firewalls

        var axo = ['Active'].concat('Object').join('X');

        if (!AbstractXHRObject.enabled && axo in global) {
          debug('overriding xmlhttprequest');

          XHR = function XHR() {
            try {
              return new global[axo]('Microsoft.XMLHTTP');
            } catch (e) {
              return null;
            }
          };

          AbstractXHRObject.enabled = !!new XHR();
        }

        var cors = false;

        try {
          cors = 'withCredentials' in new XHR();
        } catch (ignored) {// intentionally empty
        }

        AbstractXHRObject.supportsCORS = cors;
        module.exports = AbstractXHRObject;
      }).call(this, {
        env: {}
      }, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../../utils/event": 46,
      "../../utils/url": 52,
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    18: [function (require, module, exports) {
      (function (global) {
        module.exports = global.EventSource;
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    19: [function (require, module, exports) {
      (function (global) {
        'use strict';

        var Driver = global.WebSocket || global.MozWebSocket;

        if (Driver) {
          module.exports = function WebSocketBrowserDriver(url) {
            return new Driver(url);
          };
        } else {
          module.exports = undefined;
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    20: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          AjaxBasedTransport = require('./lib/ajax-based'),
          EventSourceReceiver = require('./receiver/eventsource'),
          XHRCorsObject = require('./sender/xhr-cors'),
          EventSourceDriver = require('eventsource');

      function EventSourceTransport(transUrl) {
        if (!EventSourceTransport.enabled()) {
          throw new Error('Transport created when disabled');
        }

        AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
      }

      inherits(EventSourceTransport, AjaxBasedTransport);

      EventSourceTransport.enabled = function () {
        return !!EventSourceDriver;
      };

      EventSourceTransport.transportName = 'eventsource';
      EventSourceTransport.roundTrips = 2;
      module.exports = EventSourceTransport;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/eventsource": 29,
      "./sender/xhr-cors": 35,
      "eventsource": 18,
      "inherits": 57
    }],
    21: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          HtmlfileReceiver = require('./receiver/htmlfile'),
          XHRLocalObject = require('./sender/xhr-local'),
          AjaxBasedTransport = require('./lib/ajax-based');

      function HtmlFileTransport(transUrl) {
        if (!HtmlfileReceiver.enabled) {
          throw new Error('Transport created when disabled');
        }

        AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
      }

      inherits(HtmlFileTransport, AjaxBasedTransport);

      HtmlFileTransport.enabled = function (info) {
        return HtmlfileReceiver.enabled && info.sameOrigin;
      };

      HtmlFileTransport.transportName = 'htmlfile';
      HtmlFileTransport.roundTrips = 2;
      module.exports = HtmlFileTransport;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/htmlfile": 30,
      "./sender/xhr-local": 37,
      "inherits": 57
    }],
    22: [function (require, module, exports) {
      (function (process) {
        'use strict'; // Few cool transports do work only for same-origin. In order to make
        // them work cross-domain we shall use iframe, served from the
        // remote domain. New browsers have capabilities to communicate with
        // cross domain iframe using postMessage(). In IE it was implemented
        // from IE 8+, but of course, IE got some details wrong:
        //    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
        //    http://stevesouders.com/misc/test-postmessage.php

        var inherits = require('inherits'),
            JSON3 = require('json3'),
            EventEmitter = require('events').EventEmitter,
            version = require('../version'),
            urlUtils = require('../utils/url'),
            iframeUtils = require('../utils/iframe'),
            eventUtils = require('../utils/event'),
            random = require('../utils/random');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:transport:iframe');
        }

        function IframeTransport(transport, transUrl, baseUrl) {
          if (!IframeTransport.enabled()) {
            throw new Error('Transport created when disabled');
          }

          EventEmitter.call(this);
          var self = this;
          this.origin = urlUtils.getOrigin(baseUrl);
          this.baseUrl = baseUrl;
          this.transUrl = transUrl;
          this.transport = transport;
          this.windowId = random.string(8);
          var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
          debug(transport, transUrl, iframeUrl);
          this.iframeObj = iframeUtils.createIframe(iframeUrl, function (r) {
            debug('err callback');
            self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
            self.close();
          });
          this.onmessageCallback = this._message.bind(this);
          eventUtils.attachEvent('message', this.onmessageCallback);
        }

        inherits(IframeTransport, EventEmitter);

        IframeTransport.prototype.close = function () {
          debug('close');
          this.removeAllListeners();

          if (this.iframeObj) {
            eventUtils.detachEvent('message', this.onmessageCallback);

            try {
              // When the iframe is not loaded, IE raises an exception
              // on 'contentWindow'.
              this.postMessage('c');
            } catch (x) {// intentionally empty
            }

            this.iframeObj.cleanup();
            this.iframeObj = null;
            this.onmessageCallback = this.iframeObj = null;
          }
        };

        IframeTransport.prototype._message = function (e) {
          debug('message', e.data);

          if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
            debug('not same origin', e.origin, this.origin);
            return;
          }

          var iframeMessage;

          try {
            iframeMessage = JSON3.parse(e.data);
          } catch (ignored) {
            debug('bad json', e.data);
            return;
          }

          if (iframeMessage.windowId !== this.windowId) {
            debug('mismatched window id', iframeMessage.windowId, this.windowId);
            return;
          }

          switch (iframeMessage.type) {
            case 's':
              this.iframeObj.loaded(); // window global dependency

              this.postMessage('s', JSON3.stringify([version, this.transport, this.transUrl, this.baseUrl]));
              break;

            case 't':
              this.emit('message', iframeMessage.data);
              break;

            case 'c':
              var cdata;

              try {
                cdata = JSON3.parse(iframeMessage.data);
              } catch (ignored) {
                debug('bad json', iframeMessage.data);
                return;
              }

              this.emit('close', cdata[0], cdata[1]);
              this.close();
              break;
          }
        };

        IframeTransport.prototype.postMessage = function (type, data) {
          debug('postMessage', type, data);
          this.iframeObj.post(JSON3.stringify({
            windowId: this.windowId,
            type: type,
            data: data || ''
          }), this.origin);
        };

        IframeTransport.prototype.send = function (message) {
          debug('send', message);
          this.postMessage('m', message);
        };

        IframeTransport.enabled = function () {
          return iframeUtils.iframeEnabled;
        };

        IframeTransport.transportName = 'iframe';
        IframeTransport.roundTrips = 2;
        module.exports = IframeTransport;
      }).call(this, {
        env: {}
      });
    }, {
      "../utils/event": 46,
      "../utils/iframe": 47,
      "../utils/random": 50,
      "../utils/url": 52,
      "../version": 53,
      "debug": 55,
      "events": 3,
      "inherits": 57,
      "json3": 58
    }],
    23: [function (require, module, exports) {
      (function (global) {
        'use strict'; // The simplest and most robust transport, using the well-know cross
        // domain hack - JSONP. This transport is quite inefficient - one
        // message could use up to one http request. But at least it works almost
        // everywhere.
        // Known limitations:
        //   o you will get a spinning cursor
        //   o for Konqueror a dumb timer is needed to detect errors

        var inherits = require('inherits'),
            SenderReceiver = require('./lib/sender-receiver'),
            JsonpReceiver = require('./receiver/jsonp'),
            jsonpSender = require('./sender/jsonp');

        function JsonPTransport(transUrl) {
          if (!JsonPTransport.enabled()) {
            throw new Error('Transport created when disabled');
          }

          SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
        }

        inherits(JsonPTransport, SenderReceiver);

        JsonPTransport.enabled = function () {
          return !!global.document;
        };

        JsonPTransport.transportName = 'jsonp-polling';
        JsonPTransport.roundTrips = 1;
        JsonPTransport.needBody = true;
        module.exports = JsonPTransport;
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./lib/sender-receiver": 28,
      "./receiver/jsonp": 31,
      "./sender/jsonp": 33,
      "inherits": 57
    }],
    24: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var inherits = require('inherits'),
            urlUtils = require('../../utils/url'),
            SenderReceiver = require('./sender-receiver');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:ajax-based');
        }

        function createAjaxSender(AjaxObject) {
          return function (url, payload, callback) {
            debug('create ajax sender', url, payload);
            var opt = {};

            if (typeof payload === 'string') {
              opt.headers = {
                'Content-type': 'text/plain'
              };
            }

            var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
            var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
            xo.once('finish', function (status) {
              debug('finish', status);
              xo = null;

              if (status !== 200 && status !== 204) {
                return callback(new Error('http status ' + status));
              }

              callback();
            });
            return function () {
              debug('abort');
              xo.close();
              xo = null;
              var err = new Error('Aborted');
              err.code = 1000;
              callback(err);
            };
          };
        }

        function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
          SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
        }

        inherits(AjaxBasedTransport, SenderReceiver);
        module.exports = AjaxBasedTransport;
      }).call(this, {
        env: {}
      });
    }, {
      "../../utils/url": 52,
      "./sender-receiver": 28,
      "debug": 55,
      "inherits": 57
    }],
    25: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var inherits = require('inherits'),
            EventEmitter = require('events').EventEmitter;

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:buffered-sender');
        }

        function BufferedSender(url, sender) {
          debug(url);
          EventEmitter.call(this);
          this.sendBuffer = [];
          this.sender = sender;
          this.url = url;
        }

        inherits(BufferedSender, EventEmitter);

        BufferedSender.prototype.send = function (message) {
          debug('send', message);
          this.sendBuffer.push(message);

          if (!this.sendStop) {
            this.sendSchedule();
          }
        }; // For polling transports in a situation when in the message callback,
        // new message is being send. If the sending connection was started
        // before receiving one, it is possible to saturate the network and
        // timeout due to the lack of receiving socket. To avoid that we delay
        // sending messages by some small time, in order to let receiving
        // connection be started beforehand. This is only a halfmeasure and
        // does not fix the big problem, but it does make the tests go more
        // stable on slow networks.


        BufferedSender.prototype.sendScheduleWait = function () {
          debug('sendScheduleWait');
          var self = this;
          var tref;

          this.sendStop = function () {
            debug('sendStop');
            self.sendStop = null;
            clearTimeout(tref);
          };

          tref = setTimeout(function () {
            debug('timeout');
            self.sendStop = null;
            self.sendSchedule();
          }, 25);
        };

        BufferedSender.prototype.sendSchedule = function () {
          debug('sendSchedule', this.sendBuffer.length);
          var self = this;

          if (this.sendBuffer.length > 0) {
            var payload = '[' + this.sendBuffer.join(',') + ']';
            this.sendStop = this.sender(this.url, payload, function (err) {
              self.sendStop = null;

              if (err) {
                debug('error', err);
                self.emit('close', err.code || 1006, 'Sending error: ' + err);
                self.close();
              } else {
                self.sendScheduleWait();
              }
            });
            this.sendBuffer = [];
          }
        };

        BufferedSender.prototype._cleanup = function () {
          debug('_cleanup');
          this.removeAllListeners();
        };

        BufferedSender.prototype.close = function () {
          debug('close');

          this._cleanup();

          if (this.sendStop) {
            this.sendStop();
            this.sendStop = null;
          }
        };

        module.exports = BufferedSender;
      }).call(this, {
        env: {}
      });
    }, {
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    26: [function (require, module, exports) {
      (function (global) {
        'use strict';

        var inherits = require('inherits'),
            IframeTransport = require('../iframe'),
            objectUtils = require('../../utils/object');

        module.exports = function (transport) {
          function IframeWrapTransport(transUrl, baseUrl) {
            IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
          }

          inherits(IframeWrapTransport, IframeTransport);

          IframeWrapTransport.enabled = function (url, info) {
            if (!global.document) {
              return false;
            }

            var iframeInfo = objectUtils.extend({}, info);
            iframeInfo.sameOrigin = true;
            return transport.enabled(iframeInfo) && IframeTransport.enabled();
          };

          IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
          IframeWrapTransport.needBody = true;
          IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

          IframeWrapTransport.facadeTransport = transport;
          return IframeWrapTransport;
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../../utils/object": 49,
      "../iframe": 22,
      "inherits": 57
    }],
    27: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var inherits = require('inherits'),
            EventEmitter = require('events').EventEmitter;

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:polling');
        }

        function Polling(Receiver, receiveUrl, AjaxObject) {
          debug(receiveUrl);
          EventEmitter.call(this);
          this.Receiver = Receiver;
          this.receiveUrl = receiveUrl;
          this.AjaxObject = AjaxObject;

          this._scheduleReceiver();
        }

        inherits(Polling, EventEmitter);

        Polling.prototype._scheduleReceiver = function () {
          debug('_scheduleReceiver');
          var self = this;
          var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
          poll.on('message', function (msg) {
            debug('message', msg);
            self.emit('message', msg);
          });
          poll.once('close', function (code, reason) {
            debug('close', code, reason, self.pollIsClosing);
            self.poll = poll = null;

            if (!self.pollIsClosing) {
              if (reason === 'network') {
                self._scheduleReceiver();
              } else {
                self.emit('close', code || 1006, reason);
                self.removeAllListeners();
              }
            }
          });
        };

        Polling.prototype.abort = function () {
          debug('abort');
          this.removeAllListeners();
          this.pollIsClosing = true;

          if (this.poll) {
            this.poll.abort();
          }
        };

        module.exports = Polling;
      }).call(this, {
        env: {}
      });
    }, {
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    28: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var inherits = require('inherits'),
            urlUtils = require('../../utils/url'),
            BufferedSender = require('./buffered-sender'),
            Polling = require('./polling');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:sender-receiver');
        }

        function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
          var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
          debug(pollUrl);
          var self = this;
          BufferedSender.call(this, transUrl, senderFunc);
          this.poll = new Polling(Receiver, pollUrl, AjaxObject);
          this.poll.on('message', function (msg) {
            debug('poll message', msg);
            self.emit('message', msg);
          });
          this.poll.once('close', function (code, reason) {
            debug('poll close', code, reason);
            self.poll = null;
            self.emit('close', code, reason);
            self.close();
          });
        }

        inherits(SenderReceiver, BufferedSender);

        SenderReceiver.prototype.close = function () {
          BufferedSender.prototype.close.call(this);
          debug('close');
          this.removeAllListeners();

          if (this.poll) {
            this.poll.abort();
            this.poll = null;
          }
        };

        module.exports = SenderReceiver;
      }).call(this, {
        env: {}
      });
    }, {
      "../../utils/url": 52,
      "./buffered-sender": 25,
      "./polling": 27,
      "debug": 55,
      "inherits": 57
    }],
    29: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var inherits = require('inherits'),
            EventEmitter = require('events').EventEmitter,
            EventSourceDriver = require('eventsource');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:receiver:eventsource');
        }

        function EventSourceReceiver(url) {
          debug(url);
          EventEmitter.call(this);
          var self = this;
          var es = this.es = new EventSourceDriver(url);

          es.onmessage = function (e) {
            debug('message', e.data);
            self.emit('message', decodeURI(e.data));
          };

          es.onerror = function (e) {
            debug('error', es.readyState, e); // ES on reconnection has readyState = 0 or 1.
            // on network error it's CLOSED = 2

            var reason = es.readyState !== 2 ? 'network' : 'permanent';

            self._cleanup();

            self._close(reason);
          };
        }

        inherits(EventSourceReceiver, EventEmitter);

        EventSourceReceiver.prototype.abort = function () {
          debug('abort');

          this._cleanup();

          this._close('user');
        };

        EventSourceReceiver.prototype._cleanup = function () {
          debug('cleanup');
          var es = this.es;

          if (es) {
            es.onmessage = es.onerror = null;
            es.close();
            this.es = null;
          }
        };

        EventSourceReceiver.prototype._close = function (reason) {
          debug('close', reason);
          var self = this; // Safari and chrome < 15 crash if we close window before
          // waiting for ES cleanup. See:
          // https://code.google.com/p/chromium/issues/detail?id=89155

          setTimeout(function () {
            self.emit('close', null, reason);
            self.removeAllListeners();
          }, 200);
        };

        module.exports = EventSourceReceiver;
      }).call(this, {
        env: {}
      });
    }, {
      "debug": 55,
      "events": 3,
      "eventsource": 18,
      "inherits": 57
    }],
    30: [function (require, module, exports) {
      (function (process, global) {
        'use strict';

        var inherits = require('inherits'),
            iframeUtils = require('../../utils/iframe'),
            urlUtils = require('../../utils/url'),
            EventEmitter = require('events').EventEmitter,
            random = require('../../utils/random');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:receiver:htmlfile');
        }

        function HtmlfileReceiver(url) {
          debug(url);
          EventEmitter.call(this);
          var self = this;
          iframeUtils.polluteGlobalNamespace();
          this.id = 'a' + random.string(6);
          url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));
          debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
          var constructFunc = HtmlfileReceiver.htmlfileEnabled ? iframeUtils.createHtmlfile : iframeUtils.createIframe;
          global[iframeUtils.WPrefix][this.id] = {
            start: function start() {
              debug('start');
              self.iframeObj.loaded();
            },
            message: function message(data) {
              debug('message', data);
              self.emit('message', data);
            },
            stop: function stop() {
              debug('stop');

              self._cleanup();

              self._close('network');
            }
          };
          this.iframeObj = constructFunc(url, function () {
            debug('callback');

            self._cleanup();

            self._close('permanent');
          });
        }

        inherits(HtmlfileReceiver, EventEmitter);

        HtmlfileReceiver.prototype.abort = function () {
          debug('abort');

          this._cleanup();

          this._close('user');
        };

        HtmlfileReceiver.prototype._cleanup = function () {
          debug('_cleanup');

          if (this.iframeObj) {
            this.iframeObj.cleanup();
            this.iframeObj = null;
          }

          delete global[iframeUtils.WPrefix][this.id];
        };

        HtmlfileReceiver.prototype._close = function (reason) {
          debug('_close', reason);
          this.emit('close', null, reason);
          this.removeAllListeners();
        };

        HtmlfileReceiver.htmlfileEnabled = false; // obfuscate to avoid firewalls

        var axo = ['Active'].concat('Object').join('X');

        if (axo in global) {
          try {
            HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
          } catch (x) {// intentionally empty
          }
        }

        HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;
        module.exports = HtmlfileReceiver;
      }).call(this, {
        env: {}
      }, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../../utils/iframe": 47,
      "../../utils/random": 50,
      "../../utils/url": 52,
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    31: [function (require, module, exports) {
      (function (process, global) {
        'use strict';

        var utils = require('../../utils/iframe'),
            random = require('../../utils/random'),
            browser = require('../../utils/browser'),
            urlUtils = require('../../utils/url'),
            inherits = require('inherits'),
            EventEmitter = require('events').EventEmitter;

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:receiver:jsonp');
        }

        function JsonpReceiver(url) {
          debug(url);
          var self = this;
          EventEmitter.call(this);
          utils.polluteGlobalNamespace();
          this.id = 'a' + random.string(6);
          var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));
          global[utils.WPrefix][this.id] = this._callback.bind(this);

          this._createScript(urlWithId); // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.


          this.timeoutId = setTimeout(function () {
            debug('timeout');

            self._abort(new Error('JSONP script loaded abnormally (timeout)'));
          }, JsonpReceiver.timeout);
        }

        inherits(JsonpReceiver, EventEmitter);

        JsonpReceiver.prototype.abort = function () {
          debug('abort');

          if (global[utils.WPrefix][this.id]) {
            var err = new Error('JSONP user aborted read');
            err.code = 1000;

            this._abort(err);
          }
        };

        JsonpReceiver.timeout = 35000;
        JsonpReceiver.scriptErrorTimeout = 1000;

        JsonpReceiver.prototype._callback = function (data) {
          debug('_callback', data);

          this._cleanup();

          if (this.aborting) {
            return;
          }

          if (data) {
            debug('message', data);
            this.emit('message', data);
          }

          this.emit('close', null, 'network');
          this.removeAllListeners();
        };

        JsonpReceiver.prototype._abort = function (err) {
          debug('_abort', err);

          this._cleanup();

          this.aborting = true;
          this.emit('close', err.code, err.message);
          this.removeAllListeners();
        };

        JsonpReceiver.prototype._cleanup = function () {
          debug('_cleanup');
          clearTimeout(this.timeoutId);

          if (this.script2) {
            this.script2.parentNode.removeChild(this.script2);
            this.script2 = null;
          }

          if (this.script) {
            var script = this.script; // Unfortunately, you can't really abort script loading of
            // the script.

            script.parentNode.removeChild(script);
            script.onreadystatechange = script.onerror = script.onload = script.onclick = null;
            this.script = null;
          }

          delete global[utils.WPrefix][this.id];
        };

        JsonpReceiver.prototype._scriptError = function () {
          debug('_scriptError');
          var self = this;

          if (this.errorTimer) {
            return;
          }

          this.errorTimer = setTimeout(function () {
            if (!self.loadedOkay) {
              self._abort(new Error('JSONP script loaded abnormally (onerror)'));
            }
          }, JsonpReceiver.scriptErrorTimeout);
        };

        JsonpReceiver.prototype._createScript = function (url) {
          debug('_createScript', url);
          var self = this;
          var script = this.script = global.document.createElement('script');
          var script2; // Opera synchronous load trick.

          script.id = 'a' + random.string(8);
          script.src = url;
          script.type = 'text/javascript';
          script.charset = 'UTF-8';
          script.onerror = this._scriptError.bind(this);

          script.onload = function () {
            debug('onload');

            self._abort(new Error('JSONP script loaded abnormally (onload)'));
          }; // IE9 fires 'error' event after onreadystatechange or before, in random order.
          // Use loadedOkay to determine if actually errored


          script.onreadystatechange = function () {
            debug('onreadystatechange', script.readyState);

            if (/loaded|closed/.test(script.readyState)) {
              if (script && script.htmlFor && script.onclick) {
                self.loadedOkay = true;

                try {
                  // In IE, actually execute the script.
                  script.onclick();
                } catch (x) {// intentionally empty
                }
              }

              if (script) {
                self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
              }
            }
          }; // IE: event/htmlFor/onclick trick.
          // One can't rely on proper order for onreadystatechange. In order to
          // make sure, set a 'htmlFor' and 'event' properties, so that
          // script code will be installed as 'onclick' handler for the
          // script object. Later, onreadystatechange, manually execute this
          // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
          // set. For reference see:
          //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
          // Also, read on that about script ordering:
          //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order


          if (typeof script.async === 'undefined' && global.document.attachEvent) {
            // According to mozilla docs, in recent browsers script.async defaults
            // to 'true', so we may use it to detect a good browser:
            // https://developer.mozilla.org/en/HTML/Element/script
            if (!browser.isOpera()) {
              // Naively assume we're in IE
              try {
                script.htmlFor = script.id;
                script.event = 'onclick';
              } catch (x) {// intentionally empty
              }

              script.async = true;
            } else {
              // Opera, second sync script hack
              script2 = this.script2 = global.document.createElement('script');
              script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
              script.async = script2.async = false;
            }
          }

          if (typeof script.async !== 'undefined') {
            script.async = true;
          }

          var head = global.document.getElementsByTagName('head')[0];
          head.insertBefore(script, head.firstChild);

          if (script2) {
            head.insertBefore(script2, head.firstChild);
          }
        };

        module.exports = JsonpReceiver;
      }).call(this, {
        env: {}
      }, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../../utils/browser": 44,
      "../../utils/iframe": 47,
      "../../utils/random": 50,
      "../../utils/url": 52,
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    32: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var inherits = require('inherits'),
            EventEmitter = require('events').EventEmitter;

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:receiver:xhr');
        }

        function XhrReceiver(url, AjaxObject) {
          debug(url);
          EventEmitter.call(this);
          var self = this;
          this.bufferPosition = 0;
          this.xo = new AjaxObject('POST', url, null);
          this.xo.on('chunk', this._chunkHandler.bind(this));
          this.xo.once('finish', function (status, text) {
            debug('finish', status, text);

            self._chunkHandler(status, text);

            self.xo = null;
            var reason = status === 200 ? 'network' : 'permanent';
            debug('close', reason);
            self.emit('close', null, reason);

            self._cleanup();
          });
        }

        inherits(XhrReceiver, EventEmitter);

        XhrReceiver.prototype._chunkHandler = function (status, text) {
          debug('_chunkHandler', status);

          if (status !== 200 || !text) {
            return;
          }

          for (var idx = -1;; this.bufferPosition += idx + 1) {
            var buf = text.slice(this.bufferPosition);
            idx = buf.indexOf('\n');

            if (idx === -1) {
              break;
            }

            var msg = buf.slice(0, idx);

            if (msg) {
              debug('message', msg);
              this.emit('message', msg);
            }
          }
        };

        XhrReceiver.prototype._cleanup = function () {
          debug('_cleanup');
          this.removeAllListeners();
        };

        XhrReceiver.prototype.abort = function () {
          debug('abort');

          if (this.xo) {
            this.xo.close();
            debug('close');
            this.emit('close', null, 'user');
            this.xo = null;
          }

          this._cleanup();
        };

        module.exports = XhrReceiver;
      }).call(this, {
        env: {}
      });
    }, {
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    33: [function (require, module, exports) {
      (function (process, global) {
        'use strict';

        var random = require('../../utils/random'),
            urlUtils = require('../../utils/url');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:sender:jsonp');
        }

        var form, area;

        function createIframe(id) {
          debug('createIframe', id);

          try {
            // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
            return global.document.createElement('<iframe name="' + id + '">');
          } catch (x) {
            var iframe = global.document.createElement('iframe');
            iframe.name = id;
            return iframe;
          }
        }

        function createForm() {
          debug('createForm');
          form = global.document.createElement('form');
          form.style.display = 'none';
          form.style.position = 'absolute';
          form.method = 'POST';
          form.enctype = 'application/x-www-form-urlencoded';
          form.acceptCharset = 'UTF-8';
          area = global.document.createElement('textarea');
          area.name = 'd';
          form.appendChild(area);
          global.document.body.appendChild(form);
        }

        module.exports = function (url, payload, callback) {
          debug(url, payload);

          if (!form) {
            createForm();
          }

          var id = 'a' + random.string(8);
          form.target = id;
          form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);
          var iframe = createIframe(id);
          iframe.id = id;
          iframe.style.display = 'none';
          form.appendChild(iframe);

          try {
            area.value = payload;
          } catch (e) {// seriously broken browsers get here
          }

          form.submit();

          var completed = function completed(err) {
            debug('completed', id, err);

            if (!iframe.onerror) {
              return;
            }

            iframe.onreadystatechange = iframe.onerror = iframe.onload = null; // Opera mini doesn't like if we GC iframe
            // immediately, thus this timeout.

            setTimeout(function () {
              debug('cleaning up', id);
              iframe.parentNode.removeChild(iframe);
              iframe = null;
            }, 500);
            area.value = ''; // It is not possible to detect if the iframe succeeded or
            // failed to submit our form.

            callback(err);
          };

          iframe.onerror = function () {
            debug('onerror', id);
            completed();
          };

          iframe.onload = function () {
            debug('onload', id);
            completed();
          };

          iframe.onreadystatechange = function (e) {
            debug('onreadystatechange', id, iframe.readyState, e);

            if (iframe.readyState === 'complete') {
              completed();
            }
          };

          return function () {
            debug('aborted', id);
            completed(new Error('Aborted'));
          };
        };
      }).call(this, {
        env: {}
      }, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../../utils/random": 50,
      "../../utils/url": 52,
      "debug": 55
    }],
    34: [function (require, module, exports) {
      (function (process, global) {
        'use strict';

        var EventEmitter = require('events').EventEmitter,
            inherits = require('inherits'),
            eventUtils = require('../../utils/event'),
            browser = require('../../utils/browser'),
            urlUtils = require('../../utils/url');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:sender:xdr');
        } // References:
        //   http://ajaxian.com/archives/100-line-ajax-wrapper
        //   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx


        function XDRObject(method, url, payload) {
          debug(method, url);
          var self = this;
          EventEmitter.call(this);
          setTimeout(function () {
            self._start(method, url, payload);
          }, 0);
        }

        inherits(XDRObject, EventEmitter);

        XDRObject.prototype._start = function (method, url, payload) {
          debug('_start');
          var self = this;
          var xdr = new global.XDomainRequest(); // IE caches even POSTs

          url = urlUtils.addQuery(url, 't=' + +new Date());

          xdr.onerror = function () {
            debug('onerror');

            self._error();
          };

          xdr.ontimeout = function () {
            debug('ontimeout');

            self._error();
          };

          xdr.onprogress = function () {
            debug('progress', xdr.responseText);
            self.emit('chunk', 200, xdr.responseText);
          };

          xdr.onload = function () {
            debug('load');
            self.emit('finish', 200, xdr.responseText);

            self._cleanup(false);
          };

          this.xdr = xdr;
          this.unloadRef = eventUtils.unloadAdd(function () {
            self._cleanup(true);
          });

          try {
            // Fails with AccessDenied if port number is bogus
            this.xdr.open(method, url);

            if (this.timeout) {
              this.xdr.timeout = this.timeout;
            }

            this.xdr.send(payload);
          } catch (x) {
            this._error();
          }
        };

        XDRObject.prototype._error = function () {
          this.emit('finish', 0, '');

          this._cleanup(false);
        };

        XDRObject.prototype._cleanup = function (abort) {
          debug('cleanup', abort);

          if (!this.xdr) {
            return;
          }

          this.removeAllListeners();
          eventUtils.unloadDel(this.unloadRef);
          this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;

          if (abort) {
            try {
              this.xdr.abort();
            } catch (x) {// intentionally empty
            }
          }

          this.unloadRef = this.xdr = null;
        };

        XDRObject.prototype.close = function () {
          debug('close');

          this._cleanup(true);
        }; // IE 8/9 if the request target uses the same scheme - #79


        XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());
        module.exports = XDRObject;
      }).call(this, {
        env: {}
      }, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../../utils/browser": 44,
      "../../utils/event": 46,
      "../../utils/url": 52,
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    35: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          XhrDriver = require('../driver/xhr');

      function XHRCorsObject(method, url, payload, opts) {
        XhrDriver.call(this, method, url, payload, opts);
      }

      inherits(XHRCorsObject, XhrDriver);
      XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;
      module.exports = XHRCorsObject;
    }, {
      "../driver/xhr": 17,
      "inherits": 57
    }],
    36: [function (require, module, exports) {
      'use strict';

      var EventEmitter = require('events').EventEmitter,
          inherits = require('inherits');

      function XHRFake()
      /* method, url, payload, opts */
      {
        var self = this;
        EventEmitter.call(this);
        this.to = setTimeout(function () {
          self.emit('finish', 200, '{}');
        }, XHRFake.timeout);
      }

      inherits(XHRFake, EventEmitter);

      XHRFake.prototype.close = function () {
        clearTimeout(this.to);
      };

      XHRFake.timeout = 2000;
      module.exports = XHRFake;
    }, {
      "events": 3,
      "inherits": 57
    }],
    37: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          XhrDriver = require('../driver/xhr');

      function XHRLocalObject(method, url, payload
      /*, opts */
      ) {
        XhrDriver.call(this, method, url, payload, {
          noCredentials: true
        });
      }

      inherits(XHRLocalObject, XhrDriver);
      XHRLocalObject.enabled = XhrDriver.enabled;
      module.exports = XHRLocalObject;
    }, {
      "../driver/xhr": 17,
      "inherits": 57
    }],
    38: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var utils = require('../utils/event'),
            urlUtils = require('../utils/url'),
            inherits = require('inherits'),
            EventEmitter = require('events').EventEmitter,
            WebsocketDriver = require('./driver/websocket');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:websocket');
        }

        function WebSocketTransport(transUrl, ignore, options) {
          if (!WebSocketTransport.enabled()) {
            throw new Error('Transport created when disabled');
          }

          EventEmitter.call(this);
          debug('constructor', transUrl);
          var self = this;
          var url = urlUtils.addPath(transUrl, '/websocket');

          if (url.slice(0, 5) === 'https') {
            console.log("clm wsss");
            url = 'wss' + url.slice(5);
          } else {
            url = 'ws' + url.slice(4);
          }

          this.url = url;
          this.ws = new WebsocketDriver(this.url, [], options);

          this.ws.onmessage = function (e) {
            debug('message event', e.data);
            self.emit('message', e.data);
          }; // Firefox has an interesting bug. If a websocket connection is
          // created after onunload, it stays alive even when user
          // navigates away from the page. In such situation let's lie -
          // let's not open the ws connection at all. See:
          // https://github.com/sockjs/sockjs-client/issues/28
          // https://bugzilla.mozilla.org/show_bug.cgi?id=696085


          this.unloadRef = utils.unloadAdd(function () {
            debug('unload');
            self.ws.close();
          });

          this.ws.onclose = function (e) {
            debug('close event', e.code, e.reason);
            self.emit('close', e.code, e.reason);

            self._cleanup();
          };

          this.ws.onerror = function (e) {
            debug('error event', e);
            self.emit('close', 1006, 'WebSocket connection broken');

            self._cleanup();
          };
        }

        inherits(WebSocketTransport, EventEmitter);

        WebSocketTransport.prototype.send = function (data) {
          var msg = '[' + data + ']';
          debug('send', msg);
          this.ws.send(msg);
        };

        WebSocketTransport.prototype.close = function () {
          debug('close');
          var ws = this.ws;

          this._cleanup();

          if (ws) {
            ws.close();
          }
        };

        WebSocketTransport.prototype._cleanup = function () {
          debug('_cleanup');
          var ws = this.ws;

          if (ws) {
            ws.onmessage = ws.onclose = ws.onerror = null;
          }

          utils.unloadDel(this.unloadRef);
          this.unloadRef = this.ws = null;
          this.removeAllListeners();
        };

        WebSocketTransport.enabled = function () {
          debug('enabled');
          return !!WebsocketDriver;
        };

        WebSocketTransport.transportName = 'websocket'; // In theory, ws should require 1 round trip. But in chrome, this is
        // not very stable over SSL. Most likely a ws connection requires a
        // separate SSL connection, in which case 2 round trips are an
        // absolute minumum.

        WebSocketTransport.roundTrips = 2;
        module.exports = WebSocketTransport;
      }).call(this, {
        env: {}
      });
    }, {
      "../utils/event": 46,
      "../utils/url": 52,
      "./driver/websocket": 19,
      "debug": 55,
      "events": 3,
      "inherits": 57
    }],
    39: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          AjaxBasedTransport = require('./lib/ajax-based'),
          XdrStreamingTransport = require('./xdr-streaming'),
          XhrReceiver = require('./receiver/xhr'),
          XDRObject = require('./sender/xdr');

      function XdrPollingTransport(transUrl) {
        if (!XDRObject.enabled) {
          throw new Error('Transport created when disabled');
        }

        AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
      }

      inherits(XdrPollingTransport, AjaxBasedTransport);
      XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
      XdrPollingTransport.transportName = 'xdr-polling';
      XdrPollingTransport.roundTrips = 2; // preflight, ajax

      module.exports = XdrPollingTransport;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xdr": 34,
      "./xdr-streaming": 40,
      "inherits": 57
    }],
    40: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          AjaxBasedTransport = require('./lib/ajax-based'),
          XhrReceiver = require('./receiver/xhr'),
          XDRObject = require('./sender/xdr'); // According to:
      //   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
      //   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/


      function XdrStreamingTransport(transUrl) {
        if (!XDRObject.enabled) {
          throw new Error('Transport created when disabled');
        }

        AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
      }

      inherits(XdrStreamingTransport, AjaxBasedTransport);

      XdrStreamingTransport.enabled = function (info) {
        if (info.cookie_needed || info.nullOrigin) {
          return false;
        }

        return XDRObject.enabled && info.sameScheme;
      };

      XdrStreamingTransport.transportName = 'xdr-streaming';
      XdrStreamingTransport.roundTrips = 2; // preflight, ajax

      module.exports = XdrStreamingTransport;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xdr": 34,
      "inherits": 57
    }],
    41: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits'),
          AjaxBasedTransport = require('./lib/ajax-based'),
          XhrReceiver = require('./receiver/xhr'),
          XHRCorsObject = require('./sender/xhr-cors'),
          XHRLocalObject = require('./sender/xhr-local');

      function XhrPollingTransport(transUrl) {
        if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
          throw new Error('Transport created when disabled');
        }

        AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
      }

      inherits(XhrPollingTransport, AjaxBasedTransport);

      XhrPollingTransport.enabled = function (info) {
        if (info.nullOrigin) {
          return false;
        }

        if (XHRLocalObject.enabled && info.sameOrigin) {
          return true;
        }

        return XHRCorsObject.enabled;
      };

      XhrPollingTransport.transportName = 'xhr-polling';
      XhrPollingTransport.roundTrips = 2; // preflight, ajax

      module.exports = XhrPollingTransport;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xhr-cors": 35,
      "./sender/xhr-local": 37,
      "inherits": 57
    }],
    42: [function (require, module, exports) {
      (function (global) {
        'use strict';

        var inherits = require('inherits'),
            AjaxBasedTransport = require('./lib/ajax-based'),
            XhrReceiver = require('./receiver/xhr'),
            XHRCorsObject = require('./sender/xhr-cors'),
            XHRLocalObject = require('./sender/xhr-local'),
            browser = require('../utils/browser');

        function XhrStreamingTransport(transUrl) {
          if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
            throw new Error('Transport created when disabled');
          }

          AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
        }

        inherits(XhrStreamingTransport, AjaxBasedTransport);

        XhrStreamingTransport.enabled = function (info) {
          if (info.nullOrigin) {
            return false;
          } // Opera doesn't support xhr-streaming #60
          // But it might be able to #92


          if (browser.isOpera()) {
            return false;
          }

          return XHRCorsObject.enabled;
        };

        XhrStreamingTransport.transportName = 'xhr-streaming';
        XhrStreamingTransport.roundTrips = 2; // preflight, ajax
        // Safari gets confused when a streaming ajax request is started
        // before onload. This causes the load indicator to spin indefinetely.
        // Only require body when used in a browser

        XhrStreamingTransport.needBody = !!global.document;
        module.exports = XhrStreamingTransport;
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "../utils/browser": 44,
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xhr-cors": 35,
      "./sender/xhr-local": 37,
      "inherits": 57
    }],
    43: [function (require, module, exports) {
      (function (global) {
        'use strict';

        if (global.crypto && global.crypto.getRandomValues) {
          module.exports.randomBytes = function (length) {
            var bytes = new Uint8Array(length);
            global.crypto.getRandomValues(bytes);
            return bytes;
          };
        } else {
          module.exports.randomBytes = function (length) {
            var bytes = new Array(length);

            for (var i = 0; i < length; i++) {
              bytes[i] = Math.floor(Math.random() * 256);
            }

            return bytes;
          };
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    44: [function (require, module, exports) {
      (function (global) {
        'use strict';

        module.exports = {
          isOpera: function isOpera() {
            return global.navigator && /opera/i.test(global.navigator.userAgent);
          },
          isKonqueror: function isKonqueror() {
            return global.navigator && /konqueror/i.test(global.navigator.userAgent);
          } // #187 wrap document.domain in try/catch because of WP8 from file:///
          ,
          hasDomain: function hasDomain() {
            // non-browser client always has a domain
            if (!global.document) {
              return true;
            }

            try {
              return !!global.document.domain;
            } catch (e) {
              return false;
            }
          }
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    45: [function (require, module, exports) {
      'use strict';

      var JSON3 = require('json3'); // Some extra characters that Chrome gets wrong, and substitutes with
      // something else on the wire.
      // eslint-disable-next-line no-control-regex


      var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
          extraLookup; // This may be quite slow, so let's delay until user actually uses bad
      // characters.

      var unrollLookup = function unrollLookup(escapable) {
        var i;
        var unrolled = {};
        var c = [];

        for (i = 0; i < 65536; i++) {
          c.push(String.fromCharCode(i));
        }

        escapable.lastIndex = 0;
        c.join('').replace(escapable, function (a) {
          unrolled[a] = "\\u" + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          return '';
        });
        escapable.lastIndex = 0;
        return unrolled;
      }; // Quote string, also taking care of unicode characters that browsers
      // often break. Especially, take care of unicode surrogates:
      // http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates


      module.exports = {
        quote: function quote(string) {
          var quoted = JSON3.stringify(string); // In most cases this should be very fast and good enough.

          extraEscapable.lastIndex = 0;

          if (!extraEscapable.test(quoted)) {
            return quoted;
          }

          if (!extraLookup) {
            extraLookup = unrollLookup(extraEscapable);
          }

          return quoted.replace(extraEscapable, function (a) {
            return extraLookup[a];
          });
        }
      };
    }, {
      "json3": 58
    }],
    46: [function (require, module, exports) {
      (function (global) {
        'use strict';

        var random = require('./random');

        var onUnload = {},
            afterUnload = false // detect google chrome packaged apps because they don't allow the 'unload' event
        ,
            isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime;
        module.exports = {
          attachEvent: function attachEvent(event, listener) {
            if (typeof global.addEventListener !== 'undefined') {
              global.addEventListener(event, listener, false);
            } else if (global.document && global.attachEvent) {
              // IE quirks.
              // According to: http://stevesouders.com/misc/test-postmessage.php
              // the message gets delivered only to 'document', not 'window'.
              global.document.attachEvent('on' + event, listener); // I get 'window' for ie8.

              global.attachEvent('on' + event, listener);
            }
          },
          detachEvent: function detachEvent(event, listener) {
            if (typeof global.addEventListener !== 'undefined') {
              global.removeEventListener(event, listener, false);
            } else if (global.document && global.detachEvent) {
              global.document.detachEvent('on' + event, listener);
              global.detachEvent('on' + event, listener);
            }
          },
          unloadAdd: function unloadAdd(listener) {
            if (isChromePackagedApp) {
              return null;
            }

            var ref = random.string(8);
            onUnload[ref] = listener;

            if (afterUnload) {
              setTimeout(this.triggerUnloadCallbacks, 0);
            }

            return ref;
          },
          unloadDel: function unloadDel(ref) {
            if (ref in onUnload) {
              delete onUnload[ref];
            }
          },
          triggerUnloadCallbacks: function triggerUnloadCallbacks() {
            for (var ref in onUnload) {
              onUnload[ref]();
              delete onUnload[ref];
            }
          }
        };

        var unloadTriggered = function unloadTriggered() {
          if (afterUnload) {
            return;
          }

          afterUnload = true;
          module.exports.triggerUnloadCallbacks();
        }; // 'unload' alone is not reliable in opera within an iframe, but we
        // can't use `beforeunload` as IE fires it on javascript: links.


        if (!isChromePackagedApp) {
          module.exports.attachEvent('unload', unloadTriggered);
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./random": 50
    }],
    47: [function (require, module, exports) {
      (function (process, global) {
        'use strict';

        var eventUtils = require('./event'),
            JSON3 = require('json3'),
            browser = require('./browser');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:utils:iframe');
        }

        module.exports = {
          WPrefix: '_jp',
          currentWindowId: null,
          polluteGlobalNamespace: function polluteGlobalNamespace() {
            if (!(module.exports.WPrefix in global)) {
              global[module.exports.WPrefix] = {};
            }
          },
          postMessage: function postMessage(type, data) {
            if (global.parent !== global) {
              global.parent.postMessage(JSON3.stringify({
                windowId: module.exports.currentWindowId,
                type: type,
                data: data || ''
              }), '*');
            } else {
              debug('Cannot postMessage, no parent window.', type, data);
            }
          },
          createIframe: function createIframe(iframeUrl, errorCallback) {
            var iframe = global.document.createElement('iframe');
            var tref, unloadRef;

            var unattach = function unattach() {
              debug('unattach');
              clearTimeout(tref); // Explorer had problems with that.

              try {
                iframe.onload = null;
              } catch (x) {// intentionally empty
              }

              iframe.onerror = null;
            };

            var cleanup = function cleanup() {
              debug('cleanup');

              if (iframe) {
                unattach(); // This timeout makes chrome fire onbeforeunload event
                // within iframe. Without the timeout it goes straight to
                // onunload.

                setTimeout(function () {
                  if (iframe) {
                    iframe.parentNode.removeChild(iframe);
                  }

                  iframe = null;
                }, 0);
                eventUtils.unloadDel(unloadRef);
              }
            };

            var onerror = function onerror(err) {
              debug('onerror', err);

              if (iframe) {
                cleanup();
                errorCallback(err);
              }
            };

            var post = function post(msg, origin) {
              debug('post', msg, origin);

              try {
                // When the iframe is not loaded, IE raises an exception
                // on 'contentWindow'.
                setTimeout(function () {
                  if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.postMessage(msg, origin);
                  }
                }, 0);
              } catch (x) {// intentionally empty
              }
            };

            iframe.src = iframeUrl;
            iframe.style.display = 'none';
            iframe.style.position = 'absolute';

            iframe.onerror = function () {
              onerror('onerror');
            };

            iframe.onload = function () {
              debug('onload'); // `onload` is triggered before scripts on the iframe are
              // executed. Give it few seconds to actually load stuff.

              clearTimeout(tref);
              tref = setTimeout(function () {
                onerror('onload timeout');
              }, 2000);
            };

            global.document.body.appendChild(iframe);
            tref = setTimeout(function () {
              onerror('timeout');
            }, 15000);
            unloadRef = eventUtils.unloadAdd(cleanup);
            return {
              post: post,
              cleanup: cleanup,
              loaded: unattach
            };
          }
          /* eslint no-undef: "off", new-cap: "off" */
          ,
          createHtmlfile: function createHtmlfile(iframeUrl, errorCallback) {
            var axo = ['Active'].concat('Object').join('X');
            var doc = new global[axo]('htmlfile');
            var tref, unloadRef;
            var iframe;

            var unattach = function unattach() {
              clearTimeout(tref);
              iframe.onerror = null;
            };

            var cleanup = function cleanup() {
              if (doc) {
                unattach();
                eventUtils.unloadDel(unloadRef);
                iframe.parentNode.removeChild(iframe);
                iframe = doc = null;
                CollectGarbage();
              }
            };

            var onerror = function onerror(r) {
              debug('onerror', r);

              if (doc) {
                cleanup();
                errorCallback(r);
              }
            };

            var post = function post(msg, origin) {
              try {
                // When the iframe is not loaded, IE raises an exception
                // on 'contentWindow'.
                setTimeout(function () {
                  if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.postMessage(msg, origin);
                  }
                }, 0);
              } catch (x) {// intentionally empty
              }
            };

            doc.open();
            doc.write('<html><s' + 'cript>' + 'document.domain="' + global.document.domain + '";' + '</s' + 'cript></html>');
            doc.close();
            doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
            var c = doc.createElement('div');
            doc.body.appendChild(c);
            iframe = doc.createElement('iframe');
            c.appendChild(iframe);
            iframe.src = iframeUrl;

            iframe.onerror = function () {
              onerror('onerror');
            };

            tref = setTimeout(function () {
              onerror('timeout');
            }, 15000);
            unloadRef = eventUtils.unloadAdd(cleanup);
            return {
              post: post,
              cleanup: cleanup,
              loaded: unattach
            };
          }
        };
        module.exports.iframeEnabled = false;

        if (global.document) {
          // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
          // huge delay, or not at all.
          module.exports.iframeEnabled = (typeof global.postMessage === 'function' || typeof global.postMessage === 'object') && !browser.isKonqueror();
        }
      }).call(this, {
        env: {}
      }, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./browser": 44,
      "./event": 46,
      "debug": 55,
      "json3": 58
    }],
    48: [function (require, module, exports) {
      (function (global) {
        'use strict';

        var logObject = {};
        ['log', 'debug', 'warn'].forEach(function (level) {
          var levelExists;

          try {
            levelExists = global.console && global.console[level] && global.console[level].apply;
          } catch (e) {// do nothing
          }

          logObject[level] = levelExists ? function () {
            return global.console[level].apply(global.console, arguments);
          } : level === 'log' ? function () {} : logObject.log;
        });
        module.exports = logObject;
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    49: [function (require, module, exports) {
      'use strict';

      module.exports = {
        isObject: function isObject(obj) {
          var type = typeof obj;
          return type === 'function' || type === 'object' && !!obj;
        },
        extend: function extend(obj) {
          if (!this.isObject(obj)) {
            return obj;
          }

          var source, prop;

          for (var i = 1, length = arguments.length; i < length; i++) {
            source = arguments[i];

            for (prop in source) {
              if (Object.prototype.hasOwnProperty.call(source, prop)) {
                obj[prop] = source[prop];
              }
            }
          }

          return obj;
        }
      };
    }, {}],
    50: [function (require, module, exports) {
      'use strict';
      /* global crypto:true */

      var crypto = require('crypto'); // This string has length 32, a power of 2, so the modulus doesn't introduce a
      // bias.


      var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
      module.exports = {
        string: function string(length) {
          var max = _randomStringChars.length;
          var bytes = crypto.randomBytes(length);
          var ret = [];

          for (var i = 0; i < length; i++) {
            ret.push(_randomStringChars.substr(bytes[i] % max, 1));
          }

          return ret.join('');
        },
        number: function number(max) {
          return Math.floor(Math.random() * max);
        },
        numberString: function numberString(max) {
          var t = ('' + (max - 1)).length;
          var p = new Array(t + 1).join('0');
          return (p + this.number(max)).slice(-t);
        }
      };
    }, {
      "crypto": 43
    }],
    51: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:utils:transport');
        }

        module.exports = function (availableTransports) {
          return {
            filterToEnabled: function filterToEnabled(transportsWhitelist, info) {
              var transports = {
                main: [],
                facade: []
              };

              if (!transportsWhitelist) {
                transportsWhitelist = [];
              } else if (typeof transportsWhitelist === 'string') {
                transportsWhitelist = [transportsWhitelist];
              }

              availableTransports.forEach(function (trans) {
                if (!trans) {
                  return;
                }

                if (trans.transportName === 'websocket' && info.websocket === false) {
                  debug('disabled from server', 'websocket');
                  return;
                }

                if (transportsWhitelist.length && transportsWhitelist.indexOf(trans.transportName) === -1) {
                  debug('not in whitelist', trans.transportName);
                  return;
                }

                if (trans.enabled(info)) {
                  debug('enabled', trans.transportName);
                  transports.main.push(trans);

                  if (trans.facadeTransport) {
                    transports.facade.push(trans.facadeTransport);
                  }
                } else {
                  debug('disabled', trans.transportName);
                }
              });
              return transports;
            }
          };
        };
      }).call(this, {
        env: {}
      });
    }, {
      "debug": 55
    }],
    52: [function (require, module, exports) {
      (function (process) {
        'use strict';

        var URL = require('url-parse');

        var debug = function debug() {};

        if (process.env.NODE_ENV !== 'production') {
          debug = require('debug')('sockjs-client:utils:url');
        }

        module.exports = {
          getOrigin: function getOrigin(url) {
            if (!url) {
              return null;
            }

            var p = new URL(url);

            if (p.protocol === 'file:') {
              return null;
            }

            var port = p.port;

            if (!port) {
              port = p.protocol === 'https:' ? '443' : '80';
            }

            return p.protocol + '//' + p.hostname + ':' + port;
          },
          isOriginEqual: function isOriginEqual(a, b) {
            var res = this.getOrigin(a) === this.getOrigin(b);
            debug('same', a, b, res);
            return res;
          },
          isSchemeEqual: function isSchemeEqual(a, b) {
            return a.split(':')[0] === b.split(':')[0];
          },
          addPath: function addPath(url, path) {
            var qs = url.split('?');
            return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
          },
          addQuery: function addQuery(url, q) {
            return url + (url.indexOf('?') === -1 ? '?' + q : '&' + q);
          }
        };
      }).call(this, {
        env: {}
      });
    }, {
      "debug": 55,
      "url-parse": 61
    }],
    53: [function (require, module, exports) {
      module.exports = '1.1.4';
    }, {}],
    54: [function (require, module, exports) {
      /**
       * Helpers.
       */
      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var y = d * 365.25;
      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */

      module.exports = function (val, options) {
        options = options || {};
        var type = typeof val;

        if (type === 'string' && val.length > 0) {
          return parse(val);
        } else if (type === 'number' && isNaN(val) === false) {
          return options["long"] ? fmtLong(val) : fmtShort(val);
        }

        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
      };
      /**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */


      function parse(str) {
        str = String(str);

        if (str.length > 10000) {
          return;
        }

        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

        if (!match) {
          return;
        }

        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();

        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;

          case 'days':
          case 'day':
          case 'd':
            return n * d;

          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;

          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;

          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;

          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;

          default:
            return undefined;
        }
      }
      /**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */


      function fmtShort(ms) {
        if (ms >= d) {
          return Math.round(ms / d) + 'd';
        }

        if (ms >= h) {
          return Math.round(ms / h) + 'h';
        }

        if (ms >= m) {
          return Math.round(ms / m) + 'm';
        }

        if (ms >= s) {
          return Math.round(ms / s) + 's';
        }

        return ms + 'ms';
      }
      /**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */


      function fmtLong(ms) {
        return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
      }
      /**
       * Pluralization helper.
       */


      function plural(ms, n, name) {
        if (ms < n) {
          return;
        }

        if (ms < n * 1.5) {
          return Math.floor(ms / n) + ' ' + name;
        }

        return Math.ceil(ms / n) + ' ' + name + 's';
      }
    }, {}],
    55: [function (require, module, exports) {
      (function (process) {
        /**
         * This is the web browser implementation of `debug()`.
         *
         * Expose `debug()` as the module.
         */
        exports = module.exports = require('./debug');
        exports.log = log;
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
        /**
         * Colors.
         */

        exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
        /**
         * Currently only WebKit-based Web Inspectors, Firefox >= v31,
         * and the Firebug extension (any Firefox version) are known
         * to support "%c" CSS customizations.
         *
         * TODO: add a `localStorage` variable to explicitly enable/disable colors
         */

        function useColors() {
          // NB: In an Electron preload script, document will be defined but not fully
          // initialized. Since we know we're in Chrome, we'll just detect this case
          // explicitly
          if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
            return true;
          } // is webkit? http://stackoverflow.com/a/16459606/376773
          // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


          return typeof document !== 'undefined' && document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
          typeof window !== 'undefined' && window && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
          // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
          typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
          typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }
        /**
         * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
         */


        exports.formatters.j = function (v) {
          try {
            return JSON.stringify(v);
          } catch (err) {
            return '[UnexpectedJSONParseError]: ' + err.message;
          }
        };
        /**
         * Colorize log arguments if enabled.
         *
         * @api public
         */


        function formatArgs(args) {
          var useColors = this.useColors;
          args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
          if (!useColors) return;
          var c = 'color: ' + this.color;
          args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
          // arguments passed either before or after the %c, so we need to
          // figure out the correct index to insert the CSS into

          var index = 0;
          var lastC = 0;
          args[0].replace(/%[a-zA-Z%]/g, function (match) {
            if ('%%' === match) return;
            index++;

            if ('%c' === match) {
              // we only are interested in the *last* %c
              // (the user may have provided their own)
              lastC = index;
            }
          });
          args.splice(lastC, 0, c);
        }
        /**
         * Invokes `console.log()` when available.
         * No-op when `console.log` is not a "function".
         *
         * @api public
         */


        function log() {
          // this hackery is required for IE8/9, where
          // the `console.log` function doesn't have 'apply'
          return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }
        /**
         * Save `namespaces`.
         *
         * @param {String} namespaces
         * @api private
         */


        function save(namespaces) {
          try {
            if (null == namespaces) {
              exports.storage.removeItem('debug');
            } else {
              exports.storage.debug = namespaces;
            }
          } catch (e) {}
        }
        /**
         * Load `namespaces`.
         *
         * @return {String} returns the previously persisted debug modes
         * @api private
         */


        function load() {
          var r;

          try {
            r = exports.storage.debug;
          } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


          if (!r && typeof process !== 'undefined' && 'env' in process) {
            r = process.env.DEBUG;
          }

          return r;
        }
        /**
         * Enable namespaces listed in `localStorage.debug` initially.
         */


        exports.enable(load());
        /**
         * Localstorage attempts to return the localstorage.
         *
         * This is necessary because safari throws
         * when a user disables cookies/localstorage
         * and you attempt to access it.
         *
         * @return {LocalStorage}
         * @api private
         */

        function localstorage() {
          try {
            return window.localStorage;
          } catch (e) {}
        }
      }).call(this, {
        env: {}
      });
    }, {
      "./debug": 56
    }],
    56: [function (require, module, exports) {
      /**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       *
       * Expose `debug()` as the module.
       */
      exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
      exports.coerce = coerce;
      exports.disable = disable;
      exports.enable = enable;
      exports.enabled = enabled;
      exports.humanize = require('ms');
      /**
       * The currently active debug mode names, and names to skip.
       */

      exports.names = [];
      exports.skips = [];
      /**
       * Map of special "%n" handling functions, for the debug "format" argument.
       *
       * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
       */

      exports.formatters = {};
      /**
       * Previous log timestamp.
       */

      var prevTime;
      /**
       * Select a color.
       * @param {String} namespace
       * @return {Number}
       * @api private
       */

      function selectColor(namespace) {
        var hash = 0,
            i;

        for (i in namespace) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0; // Convert to 32bit integer
        }

        return exports.colors[Math.abs(hash) % exports.colors.length];
      }
      /**
       * Create a debugger with the given `namespace`.
       *
       * @param {String} namespace
       * @return {Function}
       * @api public
       */


      function createDebug(namespace) {
        function debug() {
          // disabled?
          if (!debug.enabled) return;
          var self = debug; // set `diff` timestamp

          var curr = +new Date();
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr; // turn the `arguments` into a proper Array

          var args = new Array(arguments.length);

          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }

          args[0] = exports.coerce(args[0]);

          if ('string' !== typeof args[0]) {
            // anything else let's inspect with %O
            args.unshift('%O');
          } // apply any `formatters` transformations


          var index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
            // if we encounter an escaped % then don't increase the array index
            if (match === '%%') return match;
            index++;
            var formatter = exports.formatters[format];

            if ('function' === typeof formatter) {
              var val = args[index];
              match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

              args.splice(index, 1);
              index--;
            }

            return match;
          }); // apply env-specific formatting (colors, etc.)

          exports.formatArgs.call(self, args);
          var logFn = debug.log || exports.log || console.log.bind(console);
          logFn.apply(self, args);
        }

        debug.namespace = namespace;
        debug.enabled = exports.enabled(namespace);
        debug.useColors = exports.useColors();
        debug.color = selectColor(namespace); // env-specific initialization logic for debug instances

        if ('function' === typeof exports.init) {
          exports.init(debug);
        }

        return debug;
      }
      /**
       * Enables a debug mode by namespaces. This can include modes
       * separated by a colon and wildcards.
       *
       * @param {String} namespaces
       * @api public
       */


      function enable(namespaces) {
        exports.save(namespaces);
        exports.names = [];
        exports.skips = [];
        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        var len = split.length;

        for (var i = 0; i < len; i++) {
          if (!split[i]) continue; // ignore empty strings

          namespaces = split[i].replace(/\*/g, '.*?');

          if (namespaces[0] === '-') {
            exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
          } else {
            exports.names.push(new RegExp('^' + namespaces + '$'));
          }
        }
      }
      /**
       * Disable debug output.
       *
       * @api public
       */


      function disable() {
        exports.enable('');
      }
      /**
       * Returns true if the given mode name is enabled, false otherwise.
       *
       * @param {String} name
       * @return {Boolean}
       * @api public
       */


      function enabled(name) {
        var i, len;

        for (i = 0, len = exports.skips.length; i < len; i++) {
          if (exports.skips[i].test(name)) {
            return false;
          }
        }

        for (i = 0, len = exports.names.length; i < len; i++) {
          if (exports.names[i].test(name)) {
            return true;
          }
        }

        return false;
      }
      /**
       * Coerce `val`.
       *
       * @param {Mixed} val
       * @return {Mixed}
       * @api private
       */


      function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
      }
    }, {
      "ms": 54
    }],
    57: [function (require, module, exports) {
      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;

          var TempCtor = function TempCtor() {};

          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }
    }, {}],
    58: [function (require, module, exports) {
      (function (global) {
        /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        ;
        (function () {
          // Detect the `define` function exposed by asynchronous module loaders. The
          // strict `define` check is necessary for compatibility with `r.js`.
          var isLoader = typeof define === "function" && define.amd; // A set of types used to distinguish objects from primitives.

          var objectTypes = {
            "function": true,
            "object": true
          }; // Detect the `exports` object exposed by CommonJS implementations.

          var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports; // Use the `global` object exposed by Node (including Browserify via
          // `insert-module-globals`), Narwhal, and Ringo as the default context,
          // and the `window` object in browsers. Rhino exports a `global` function
          // instead.

          var root = objectTypes[typeof window] && window || this,
              freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

          if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
            root = freeGlobal;
          } // Public: Initializes JSON 3 using the given `context` object, attaching the
          // `stringify` and `parse` functions to the specified `exports` object.


          function runInContext(context, exports) {
            context || (context = root["Object"]());
            exports || (exports = root["Object"]()); // Native constructor aliases.

            var Number = context["Number"] || root["Number"],
                String = context["String"] || root["String"],
                Object = context["Object"] || root["Object"],
                Date = context["Date"] || root["Date"],
                SyntaxError = context["SyntaxError"] || root["SyntaxError"],
                TypeError = context["TypeError"] || root["TypeError"],
                Math = context["Math"] || root["Math"],
                nativeJSON = context["JSON"] || root["JSON"]; // Delegate to the native `stringify` and `parse` implementations.

            if (typeof nativeJSON == "object" && nativeJSON) {
              exports.stringify = nativeJSON.stringify;
              exports.parse = nativeJSON.parse;
            } // Convenience aliases.


            var objectProto = Object.prototype,
                getClass = objectProto.toString,
                _isProperty,
                _forEach,
                undef; // Test the `Date#getUTC*` methods. Based on work by @Yaffle.


            var isExtended = new Date(-3509827334573292);

            try {
              // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
              // results for certain dates in Opera >= 10.53.
              isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && // Safari < 2.0.2 stores the internal millisecond time value correctly,
              // but clips the values returned by the date methods to the range of
              // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
              isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
            } catch (exception) {} // Internal: Determines whether the native `JSON.stringify` and `parse`
            // implementations are spec-compliant. Based on work by Ken Snyder.


            function has(name) {
              if (has[name] !== undef) {
                // Return cached feature test result.
                return has[name];
              }

              var isSupported;

              if (name == "bug-string-char-index") {
                // IE <= 7 doesn't support accessing string characters using square
                // bracket notation. IE 8 only supports this for primitives.
                isSupported = "a"[0] != "a";
              } else if (name == "json") {
                // Indicates whether both `JSON.stringify` and `JSON.parse` are
                // supported.
                isSupported = has("json-stringify") && has("json-parse");
              } else {
                var value,
                    serialized = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}"; // Test `JSON.stringify`.

                if (name == "json-stringify") {
                  var stringify = exports.stringify,
                      stringifySupported = typeof stringify == "function" && isExtended;

                  if (stringifySupported) {
                    // A test function object with a custom `toJSON` method.
                    (value = function value() {
                      return 1;
                    }).toJSON = value;

                    try {
                      stringifySupported = // Firefox 3.1b1 and b2 serialize string, number, and boolean
                      // primitives as object literals.
                      stringify(0) === "0" && // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                      // literals.
                      stringify(new Number()) === "0" && stringify(new String()) == '""' && // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                      // does not define a canonical JSON representation (this applies to
                      // objects with `toJSON` properties as well, *unless* they are nested
                      // within an object or array).
                      stringify(getClass) === undef && // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                      // FF 3.1b3 pass this test.
                      stringify(undef) === undef && // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                      // respectively, if the value is omitted entirely.
                      stringify() === undef && // FF 3.1b1, 2 throw an error if the given value is not a number,
                      // string, array, object, Boolean, or `null` literal. This applies to
                      // objects with custom `toJSON` methods as well, unless they are nested
                      // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                      // methods entirely.
                      stringify(value) === "1" && stringify([value]) == "[1]" && // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                      // `"[null]"`.
                      stringify([undef]) == "[null]" && // YUI 3.0.0b1 fails to serialize `null` literals.
                      stringify(null) == "null" && // FF 3.1b1, 2 halts serialization if an array contains a function:
                      // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                      // elides non-JSON values from objects and arrays, unless they
                      // define custom `toJSON` methods.
                      stringify([undef, getClass, null]) == "[null,null,null]" && // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                      // where character escape codes are expected (e.g., `\b` => `\u0008`).
                      stringify({
                        "a": [value, true, false, null, "\x00\b\n\f\r\t"]
                      }) == serialized && // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                      stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                      // serialize extended years.
                      stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' && // The milliseconds are optional in ES 5, but required in 5.1.
                      stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' && // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                      // four-digit years instead of six-digit years. Credits: @Yaffle.
                      stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                      // values less than 1000. Credits: @Yaffle.
                      stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                    } catch (exception) {
                      stringifySupported = false;
                    }
                  }

                  isSupported = stringifySupported;
                } // Test `JSON.parse`.


                if (name == "json-parse") {
                  var parse = exports.parse;

                  if (typeof parse == "function") {
                    try {
                      // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                      // Conforming implementations should also coerce the initial argument to
                      // a string prior to parsing.
                      if (parse("0") === 0 && !parse(false)) {
                        // Simple parsing test.
                        value = parse(serialized);
                        var parseSupported = value["a"].length == 5 && value["a"][0] === 1;

                        if (parseSupported) {
                          try {
                            // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                            parseSupported = !parse('"\t"');
                          } catch (exception) {}

                          if (parseSupported) {
                            try {
                              // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                              // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                              // certain octal literals.
                              parseSupported = parse("01") !== 1;
                            } catch (exception) {}
                          }

                          if (parseSupported) {
                            try {
                              // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                              // points. These environments, along with FF 3.1b1 and 2,
                              // also allow trailing commas in JSON objects and arrays.
                              parseSupported = parse("1.") !== 1;
                            } catch (exception) {}
                          }
                        }
                      }
                    } catch (exception) {
                      parseSupported = false;
                    }
                  }

                  isSupported = parseSupported;
                }
              }

              return has[name] = !!isSupported;
            }

            if (!has("json")) {
              // Common `[[Class]]` name aliases.
              var functionClass = "[object Function]",
                  dateClass = "[object Date]",
                  numberClass = "[object Number]",
                  stringClass = "[object String]",
                  arrayClass = "[object Array]",
                  booleanClass = "[object Boolean]"; // Detect incomplete support for accessing string characters by index.

              var charIndexBuggy = has("bug-string-char-index"); // Define additional utility methods if the `Date` methods are buggy.

              if (!isExtended) {
                var floor = Math.floor; // A mapping between the months of the year and the number of days between
                // January 1st and the first of the respective month.

                var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]; // Internal: Calculates the number of days between the Unix epoch and the
                // first day of the given month.

                var getDay = function getDay(year, month) {
                  return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                };
              } // Internal: Determines if a property is a direct property of the given
              // object. Delegates to the native `Object#hasOwnProperty` method.


              if (!(_isProperty = objectProto.hasOwnProperty)) {
                _isProperty = function isProperty(property) {
                  var members = {},
                      constructor;

                  if ((members.__proto__ = null, members.__proto__ = {
                    // The *proto* property cannot be set multiple times in recent
                    // versions of Firefox and SeaMonkey.
                    "toString": 1
                  }, members).toString != getClass) {
                    // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
                    // supports the mutable *proto* property.
                    _isProperty = function isProperty(property) {
                      // Capture and break the object's prototype chain (see section 8.6.2
                      // of the ES 5.1 spec). The parenthesized expression prevents an
                      // unsafe transformation by the Closure Compiler.
                      var original = this.__proto__,
                          result = (property in (this.__proto__ = null, this)); // Restore the original prototype chain.

                      this.__proto__ = original;
                      return result;
                    };
                  } else {
                    // Capture a reference to the top-level `Object` constructor.
                    constructor = members.constructor; // Use the `constructor` property to simulate `Object#hasOwnProperty` in
                    // other environments.

                    _isProperty = function isProperty(property) {
                      var parent = (this.constructor || constructor).prototype;
                      return property in this && !(property in parent && this[property] === parent[property]);
                    };
                  }

                  members = null;
                  return _isProperty.call(this, property);
                };
              } // Internal: Normalizes the `for...in` iteration algorithm across
              // environments. Each enumerated key is yielded to a `callback` function.


              _forEach = function forEach(object, callback) {
                var size = 0,
                    Properties,
                    members,
                    property; // Tests for bugs in the current environment's `for...in` algorithm. The
                // `valueOf` property inherits the non-enumerable flag from
                // `Object.prototype` in older versions of IE, Netscape, and Mozilla.

                (Properties = function Properties() {
                  this.valueOf = 0;
                }).prototype.valueOf = 0; // Iterate over a new instance of the `Properties` class.

                members = new Properties();

                for (property in members) {
                  // Ignore all properties inherited from `Object.prototype`.
                  if (_isProperty.call(members, property)) {
                    size++;
                  }
                }

                Properties = members = null; // Normalize the iteration algorithm.

                if (!size) {
                  // A list of non-enumerable properties inherited from `Object.prototype`.
                  members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"]; // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
                  // properties.

                  _forEach = function forEach(object, callback) {
                    var isFunction = getClass.call(object) == functionClass,
                        property,
                        length;
                    var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || _isProperty;

                    for (property in object) {
                      // Gecko <= 1.0 enumerates the `prototype` property of functions under
                      // certain conditions; IE does not.
                      if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                        callback(property);
                      }
                    } // Manually invoke the callback for each non-enumerable property.


                    for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property)) {
                      ;
                    }
                  };
                } else if (size == 2) {
                  // Safari <= 2.0.4 enumerates shadowed properties twice.
                  _forEach = function forEach(object, callback) {
                    // Create a set of iterated properties.
                    var members = {},
                        isFunction = getClass.call(object) == functionClass,
                        property;

                    for (property in object) {
                      // Store each property name to prevent double enumeration. The
                      // `prototype` property of functions is not enumerated due to cross-
                      // environment inconsistencies.
                      if (!(isFunction && property == "prototype") && !_isProperty.call(members, property) && (members[property] = 1) && _isProperty.call(object, property)) {
                        callback(property);
                      }
                    }
                  };
                } else {
                  // No bugs detected; use the standard `for...in` algorithm.
                  _forEach = function forEach(object, callback) {
                    var isFunction = getClass.call(object) == functionClass,
                        property,
                        isConstructor;

                    for (property in object) {
                      if (!(isFunction && property == "prototype") && _isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                        callback(property);
                      }
                    } // Manually invoke the callback for the `constructor` property due to
                    // cross-environment inconsistencies.


                    if (isConstructor || _isProperty.call(object, property = "constructor")) {
                      callback(property);
                    }
                  };
                }

                return _forEach(object, callback);
              }; // Public: Serializes a JavaScript `value` as a JSON string. The optional
              // `filter` argument may specify either a function that alters how object and
              // array members are serialized, or an array of strings and numbers that
              // indicates which properties should be serialized. The optional `width`
              // argument may be either a string or number that specifies the indentation
              // level of the output.


              if (!has("json-stringify")) {
                // Internal: A map of control characters and their escaped equivalents.
                var Escapes = {
                  92: "\\\\",
                  34: '\\"',
                  8: "\\b",
                  12: "\\f",
                  10: "\\n",
                  13: "\\r",
                  9: "\\t"
                }; // Internal: Converts `value` into a zero-padded string such that its
                // length is at least equal to `width`. The `width` must be <= 6.

                var leadingZeroes = "000000";

                var toPaddedString = function toPaddedString(width, value) {
                  // The `|| 0` expression is necessary to work around a bug in
                  // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
                  return (leadingZeroes + (value || 0)).slice(-width);
                }; // Internal: Double-quotes a string `value`, replacing all ASCII control
                // characters (characters with code unit values between 0 and 31) with
                // their escaped equivalents. This is an implementation of the
                // `Quote(value)` operation defined in ES 5.1 section 15.12.3.


                var unicodePrefix = "\\u00";

                var quote = function quote(value) {
                  var result = '"',
                      index = 0,
                      length = value.length,
                      useCharIndex = !charIndexBuggy || length > 10;
                  var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);

                  for (; index < length; index++) {
                    var charCode = value.charCodeAt(index); // If the character is a control character, append its Unicode or
                    // shorthand escape sequence; otherwise, append the character as-is.

                    switch (charCode) {
                      case 8:
                      case 9:
                      case 10:
                      case 12:
                      case 13:
                      case 34:
                      case 92:
                        result += Escapes[charCode];
                        break;

                      default:
                        if (charCode < 32) {
                          result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                          break;
                        }

                        result += useCharIndex ? symbols[index] : value.charAt(index);
                    }
                  }

                  return result + '"';
                }; // Internal: Recursively serializes an object. Implements the
                // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.


                var serialize = function serialize(property, object, callback, properties, whitespace, indentation, stack) {
                  var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;

                  try {
                    // Necessary for host object support.
                    value = object[property];
                  } catch (exception) {}

                  if (typeof value == "object" && value) {
                    className = getClass.call(value);

                    if (className == dateClass && !_isProperty.call(value, "toJSON")) {
                      if (value > -1 / 0 && value < 1 / 0) {
                        // Dates are serialized according to the `Date#toJSON` method
                        // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                        // for the ISO 8601 date time string format.
                        if (getDay) {
                          // Manually compute the year, month, date, hours, minutes,
                          // seconds, and milliseconds if the `getUTC*` methods are
                          // buggy. Adapted from @Yaffle's `date-shim` project.
                          date = floor(value / 864e5);

                          for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) {
                            ;
                          }

                          for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) {
                            ;
                          }

                          date = 1 + date - getDay(year, month); // The `time` value specifies the time within the day (see ES
                          // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                          // to compute `A modulo B`, as the `%` operator does not
                          // correspond to the `modulo` operation for negative numbers.

                          time = (value % 864e5 + 864e5) % 864e5; // The hours, minutes, seconds, and milliseconds are obtained by
                          // decomposing the time within the day. See section 15.9.1.10.

                          hours = floor(time / 36e5) % 24;
                          minutes = floor(time / 6e4) % 60;
                          seconds = floor(time / 1e3) % 60;
                          milliseconds = time % 1e3;
                        } else {
                          year = value.getUTCFullYear();
                          month = value.getUTCMonth();
                          date = value.getUTCDate();
                          hours = value.getUTCHours();
                          minutes = value.getUTCMinutes();
                          seconds = value.getUTCSeconds();
                          milliseconds = value.getUTCMilliseconds();
                        } // Serialize extended years correctly.


                        value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + // Months, dates, hours, minutes, and seconds should have two
                        // digits; milliseconds should have three.
                        "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + // Milliseconds are optional in ES 5.0, but required in 5.1.
                        "." + toPaddedString(3, milliseconds) + "Z";
                      } else {
                        value = null;
                      }
                    } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || _isProperty.call(value, "toJSON"))) {
                      // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
                      // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
                      // ignores all `toJSON` methods on these objects unless they are
                      // defined directly on an instance.
                      value = value.toJSON(property);
                    }
                  }

                  if (callback) {
                    // If a replacement function was provided, call it to obtain the value
                    // for serialization.
                    value = callback.call(object, property, value);
                  }

                  if (value === null) {
                    return "null";
                  }

                  className = getClass.call(value);

                  if (className == booleanClass) {
                    // Booleans are represented literally.
                    return "" + value;
                  } else if (className == numberClass) {
                    // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                    // `"null"`.
                    return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                  } else if (className == stringClass) {
                    // Strings are double-quoted and escaped.
                    return quote("" + value);
                  } // Recursively serialize objects and arrays.


                  if (typeof value == "object") {
                    // Check for cyclic structures. This is a linear search; performance
                    // is inversely proportional to the number of unique nested objects.
                    for (length = stack.length; length--;) {
                      if (stack[length] === value) {
                        // Cyclic structures cannot be serialized by `JSON.stringify`.
                        throw TypeError();
                      }
                    } // Add the object to the stack of traversed objects.


                    stack.push(value);
                    results = []; // Save the current indentation level and indent one additional level.

                    prefix = indentation;
                    indentation += whitespace;

                    if (className == arrayClass) {
                      // Recursively serialize array elements.
                      for (index = 0, length = value.length; index < length; index++) {
                        element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                        results.push(element === undef ? "null" : element);
                      }

                      result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
                    } else {
                      // Recursively serialize object members. Members are selected from
                      // either a user-specified list of property names, or the object
                      // itself.
                      _forEach(properties || value, function (property) {
                        var element = serialize(property, value, callback, properties, whitespace, indentation, stack);

                        if (element !== undef) {
                          // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                          // is not the empty string, let `member` {quote(property) + ":"}
                          // be the concatenation of `member` and the `space` character."
                          // The "`space` character" refers to the literal space
                          // character, not the `space` {width} argument provided to
                          // `JSON.stringify`.
                          results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                        }
                      });

                      result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                    } // Remove the object from the traversed object stack.


                    stack.pop();
                    return result;
                  }
                }; // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.


                exports.stringify = function (source, filter, width) {
                  var whitespace, callback, properties, className;

                  if (objectTypes[typeof filter] && filter) {
                    if ((className = getClass.call(filter)) == functionClass) {
                      callback = filter;
                    } else if (className == arrayClass) {
                      // Convert the property names array into a makeshift set.
                      properties = {};

                      for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1)) {
                        ;
                      }
                    }
                  }

                  if (width) {
                    if ((className = getClass.call(width)) == numberClass) {
                      // Convert the `width` to an integer and create a string containing
                      // `width` number of space characters.
                      if ((width -= width % 1) > 0) {
                        for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ") {
                          ;
                        }
                      }
                    } else if (className == stringClass) {
                      whitespace = width.length <= 10 ? width : width.slice(0, 10);
                    }
                  } // Opera <= 7.54u2 discards the values associated with empty string keys
                  // (`""`) only if they are used directly within an object member list
                  // (e.g., `!("" in { "": 1})`).


                  return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                };
              } // Public: Parses a JSON source string.


              if (!has("json-parse")) {
                var fromCharCode = String.fromCharCode; // Internal: A map of escaped control characters and their unescaped
                // equivalents.

                var Unescapes = {
                  92: "\\",
                  34: '"',
                  47: "/",
                  98: "\b",
                  116: "\t",
                  110: "\n",
                  102: "\f",
                  114: "\r"
                }; // Internal: Stores the parser state.

                var Index, Source; // Internal: Resets the parser state and throws a `SyntaxError`.

                var abort = function abort() {
                  Index = Source = null;
                  throw SyntaxError();
                }; // Internal: Returns the next token, or `"$"` if the parser has reached
                // the end of the source string. A token may be a string, number, `null`
                // literal, or Boolean literal.


                var lex = function lex() {
                  var source = Source,
                      length = source.length,
                      value,
                      begin,
                      position,
                      isSigned,
                      charCode;

                  while (Index < length) {
                    charCode = source.charCodeAt(Index);

                    switch (charCode) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        // Skip whitespace tokens, including tabs, carriage returns, line
                        // feeds, and space characters.
                        Index++;
                        break;

                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                        // the current position.
                        value = charIndexBuggy ? source.charAt(Index) : source[Index];
                        Index++;
                        return value;

                      case 34:
                        // `"` delimits a JSON string; advance to the next character and
                        // begin parsing the string. String tokens are prefixed with the
                        // sentinel `@` character to distinguish them from punctuators and
                        // end-of-string tokens.
                        for (value = "@", Index++; Index < length;) {
                          charCode = source.charCodeAt(Index);

                          if (charCode < 32) {
                            // Unescaped ASCII control characters (those with a code unit
                            // less than the space character) are not permitted.
                            abort();
                          } else if (charCode == 92) {
                            // A reverse solidus (`\`) marks the beginning of an escaped
                            // control character (including `"`, `\`, and `/`) or Unicode
                            // escape sequence.
                            charCode = source.charCodeAt(++Index);

                            switch (charCode) {
                              case 92:
                              case 34:
                              case 47:
                              case 98:
                              case 116:
                              case 110:
                              case 102:
                              case 114:
                                // Revive escaped control characters.
                                value += Unescapes[charCode];
                                Index++;
                                break;

                              case 117:
                                // `\u` marks the beginning of a Unicode escape sequence.
                                // Advance to the first character and validate the
                                // four-digit code point.
                                begin = ++Index;

                                for (position = Index + 4; Index < position; Index++) {
                                  charCode = source.charCodeAt(Index); // A valid sequence comprises four hexdigits (case-
                                  // insensitive) that form a single hexadecimal value.

                                  if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                    // Invalid Unicode escape sequence.
                                    abort();
                                  }
                                } // Revive the escaped character.


                                value += fromCharCode("0x" + source.slice(begin, Index));
                                break;

                              default:
                                // Invalid escape sequence.
                                abort();
                            }
                          } else {
                            if (charCode == 34) {
                              // An unescaped double-quote character marks the end of the
                              // string.
                              break;
                            }

                            charCode = source.charCodeAt(Index);
                            begin = Index; // Optimize for the common case where a string is valid.

                            while (charCode >= 32 && charCode != 92 && charCode != 34) {
                              charCode = source.charCodeAt(++Index);
                            } // Append the string as-is.


                            value += source.slice(begin, Index);
                          }
                        }

                        if (source.charCodeAt(Index) == 34) {
                          // Advance to the next character and return the revived string.
                          Index++;
                          return value;
                        } // Unterminated string.


                        abort();

                      default:
                        // Parse numbers and literals.
                        begin = Index; // Advance past the negative sign, if one is specified.

                        if (charCode == 45) {
                          isSigned = true;
                          charCode = source.charCodeAt(++Index);
                        } // Parse an integer or floating-point value.


                        if (charCode >= 48 && charCode <= 57) {
                          // Leading zeroes are interpreted as octal literals.
                          if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                            // Illegal octal literal.
                            abort();
                          }

                          isSigned = false; // Parse the integer component.

                          for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++) {
                            ;
                          } // Floats cannot contain a leading decimal point; however, this
                          // case is already accounted for by the parser.


                          if (source.charCodeAt(Index) == 46) {
                            position = ++Index; // Parse the decimal component.

                            for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++) {
                              ;
                            }

                            if (position == Index) {
                              // Illegal trailing decimal.
                              abort();
                            }

                            Index = position;
                          } // Parse exponents. The `e` denoting the exponent is
                          // case-insensitive.


                          charCode = source.charCodeAt(Index);

                          if (charCode == 101 || charCode == 69) {
                            charCode = source.charCodeAt(++Index); // Skip past the sign following the exponent, if one is
                            // specified.

                            if (charCode == 43 || charCode == 45) {
                              Index++;
                            } // Parse the exponential component.


                            for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++) {
                              ;
                            }

                            if (position == Index) {
                              // Illegal empty exponent.
                              abort();
                            }

                            Index = position;
                          } // Coerce the parsed value to a JavaScript number.


                          return +source.slice(begin, Index);
                        } // A negative sign may only precede numbers.


                        if (isSigned) {
                          abort();
                        } // `true`, `false`, and `null` literals.


                        if (source.slice(Index, Index + 4) == "true") {
                          Index += 4;
                          return true;
                        } else if (source.slice(Index, Index + 5) == "false") {
                          Index += 5;
                          return false;
                        } else if (source.slice(Index, Index + 4) == "null") {
                          Index += 4;
                          return null;
                        } // Unrecognized token.


                        abort();
                    }
                  } // Return the sentinel `$` character if the parser has reached the end
                  // of the source string.


                  return "$";
                }; // Internal: Parses a JSON `value` token.


                var get = function get(value) {
                  var results, hasMembers;

                  if (value == "$") {
                    // Unexpected end of input.
                    abort();
                  }

                  if (typeof value == "string") {
                    if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                      // Remove the sentinel `@` character.
                      return value.slice(1);
                    } // Parse object and array literals.


                    if (value == "[") {
                      // Parses a JSON array, returning a new JavaScript array.
                      results = [];

                      for (;; hasMembers || (hasMembers = true)) {
                        value = lex(); // A closing square bracket marks the end of the array literal.

                        if (value == "]") {
                          break;
                        } // If the array literal contains elements, the current token
                        // should be a comma separating the previous element from the
                        // next.


                        if (hasMembers) {
                          if (value == ",") {
                            value = lex();

                            if (value == "]") {
                              // Unexpected trailing `,` in array literal.
                              abort();
                            }
                          } else {
                            // A `,` must separate each array element.
                            abort();
                          }
                        } // Elisions and leading commas are not permitted.


                        if (value == ",") {
                          abort();
                        }

                        results.push(get(value));
                      }

                      return results;
                    } else if (value == "{") {
                      // Parses a JSON object, returning a new JavaScript object.
                      results = {};

                      for (;; hasMembers || (hasMembers = true)) {
                        value = lex(); // A closing curly brace marks the end of the object literal.

                        if (value == "}") {
                          break;
                        } // If the object literal contains members, the current token
                        // should be a comma separator.


                        if (hasMembers) {
                          if (value == ",") {
                            value = lex();

                            if (value == "}") {
                              // Unexpected trailing `,` in object literal.
                              abort();
                            }
                          } else {
                            // A `,` must separate each object member.
                            abort();
                          }
                        } // Leading commas are not permitted, object property names must be
                        // double-quoted strings, and a `:` must separate each property
                        // name and value.


                        if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                          abort();
                        }

                        results[value.slice(1)] = get(lex());
                      }

                      return results;
                    } // Unexpected token encountered.


                    abort();
                  }

                  return value;
                }; // Internal: Updates a traversed object member.


                var update = function update(source, property, callback) {
                  var element = walk(source, property, callback);

                  if (element === undef) {
                    delete source[property];
                  } else {
                    source[property] = element;
                  }
                }; // Internal: Recursively traverses a parsed JSON object, invoking the
                // `callback` function for each value. This is an implementation of the
                // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.


                var walk = function walk(source, property, callback) {
                  var value = source[property],
                      length;

                  if (typeof value == "object" && value) {
                    // `forEach` can't be used to traverse an array in Opera <= 8.54
                    // because its `Object#hasOwnProperty` implementation returns `false`
                    // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
                    if (getClass.call(value) == arrayClass) {
                      for (length = value.length; length--;) {
                        update(value, length, callback);
                      }
                    } else {
                      _forEach(value, function (property) {
                        update(value, property, callback);
                      });
                    }
                  }

                  return callback.call(source, property, value);
                }; // Public: `JSON.parse`. See ES 5.1 section 15.12.2.


                exports.parse = function (source, callback) {
                  var result, value;
                  Index = 0;
                  Source = "" + source;
                  result = get(lex()); // If a JSON string contains multiple tokens, it is invalid.

                  if (lex() != "$") {
                    abort();
                  } // Reset the parser state.


                  Index = Source = null;
                  return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
                };
              }
            }

            exports["runInContext"] = runInContext;
            return exports;
          }

          if (freeExports && !isLoader) {
            // Export for CommonJS environments.
            runInContext(root, freeExports);
          } else {
            // Export for web browsers and JavaScript engines.
            var nativeJSON = root.JSON,
                previousJSON = root["JSON3"],
                isRestored = false;
            var JSON3 = runInContext(root, root["JSON3"] = {
              // Public: Restores the original value of the global `JSON` object and
              // returns a reference to the `JSON3` object.
              "noConflict": function noConflict() {
                if (!isRestored) {
                  isRestored = true;
                  root.JSON = nativeJSON;
                  root["JSON3"] = previousJSON;
                  nativeJSON = previousJSON = null;
                }

                return JSON3;
              }
            });
            root.JSON = {
              "parse": JSON3.parse,
              "stringify": JSON3.stringify
            };
          } // Export for asynchronous module loaders.


          if (isLoader) {
            define(function () {
              return JSON3;
            });
          }
        }).call(this);
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    59: [function (require, module, exports) {
      'use strict';

      var has = Object.prototype.hasOwnProperty;
      /**
       * Simple query string parser.
       *
       * @param {String} query The query string that needs to be parsed.
       * @returns {Object}
       * @api public
       */

      function querystring(query) {
        var parser = /([^=?&]+)=?([^&]*)/g,
            result = {},
            part; //
        // Little nifty parsing hack, leverage the fact that RegExp.exec increments
        // the lastIndex property so we can continue executing this loop until we've
        // parsed all results.
        //

        for (; part = parser.exec(query); result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])) {
          ;
        }

        return result;
      }
      /**
       * Transform a query string to an object.
       *
       * @param {Object} obj Object that should be transformed.
       * @param {String} prefix Optional prefix.
       * @returns {String}
       * @api public
       */


      function querystringify(obj, prefix) {
        prefix = prefix || '';
        var pairs = []; //
        // Optionally prefix with a '?' if needed
        //

        if ('string' !== typeof prefix) prefix = '?';

        for (var key in obj) {
          if (has.call(obj, key)) {
            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
          }
        }

        return pairs.length ? prefix + pairs.join('&') : '';
      } //
      // Expose the module.
      //


      exports.stringify = querystringify;
      exports.parse = querystring;
    }, {}],
    60: [function (require, module, exports) {
      'use strict';
      /**
       * Check if we're required to add a port number.
       *
       * @see https://url.spec.whatwg.org/#default-port
       * @param {Number|String} port Port number we need to check
       * @param {String} protocol Protocol we need to check against.
       * @returns {Boolean} Is it a default port for the given protocol
       * @api private
       */

      module.exports = function required(port, protocol) {
        protocol = protocol.split(':')[0];
        port = +port;
        if (!port) return false;

        switch (protocol) {
          case 'http':
          case 'ws':
            return port !== 80;

          case 'https':
          case 'wss':
            return port !== 443;

          case 'ftp':
            return port !== 21;

          case 'gopher':
            return port !== 70;

          case 'file':
            return false;
        }

        return port !== 0;
      };
    }, {}],
    61: [function (require, module, exports) {
      'use strict';

      var required = require('requires-port'),
          lolcation = require('./lolcation'),
          qs = require('querystringify'),
          protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
      /**
       * These are the parse rules for the URL parser, it informs the parser
       * about:
       *
       * 0. The char it Needs to parse, if it's a string it should be done using
       *    indexOf, RegExp using exec and NaN means set as current value.
       * 1. The property we should set when parsing this value.
       * 2. Indication if it's backwards or forward parsing, when set as number it's
       *    the value of extra chars that should be split off.
       * 3. Inherit from location if non existing in the parser.
       * 4. `toLowerCase` the resulting value.
       */


      var rules = [['#', 'hash'], // Extract from the back.
      ['?', 'query'], // Extract from the back.
      ['/', 'pathname'], // Extract from the back.
      ['@', 'auth', 1], // Extract from the front.
      [NaN, 'host', undefined, 1, 1], // Set left over value.
      [/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
      [NaN, 'hostname', undefined, 1, 1] // Set left over.
      ];
      /**
       * @typedef ProtocolExtract
       * @type Object
       * @property {String} protocol Protocol matched in the URL, in lowercase.
       * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
       * @property {String} rest Rest of the URL that is not part of the protocol.
       */

      /**
       * Extract protocol information from a URL with/without double slash ("//").
       *
       * @param {String} address URL we want to extract from.
       * @return {ProtocolExtract} Extracted information.
       * @api private
       */

      function extractProtocol(address) {
        var match = protocolre.exec(address);
        return {
          protocol: match[1] ? match[1].toLowerCase() : '',
          slashes: !!match[2],
          rest: match[3]
        };
      }
      /**
       * Resolve a relative URL pathname against a base URL pathname.
       *
       * @param {String} relative Pathname of the relative URL.
       * @param {String} base Pathname of the base URL.
       * @return {String} Resolved pathname.
       * @api private
       */


      function resolve(relative, base) {
        var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
            i = path.length,
            last = path[i - 1],
            unshift = false,
            up = 0;

        while (i--) {
          if (path[i] === '.') {
            path.splice(i, 1);
          } else if (path[i] === '..') {
            path.splice(i, 1);
            up++;
          } else if (up) {
            if (i === 0) unshift = true;
            path.splice(i, 1);
            up--;
          }
        }

        if (unshift) path.unshift('');
        if (last === '.' || last === '..') path.push('');
        return path.join('/');
      }
      /**
       * The actual URL instance. Instead of returning an object we've opted-in to
       * create an actual constructor as it's much more memory efficient and
       * faster and it pleases my OCD.
       *
       * @constructor
       * @param {String} address URL we want to parse.
       * @param {Object|String} location Location defaults for relative paths.
       * @param {Boolean|Function} parser Parser for the query string.
       * @api public
       */


      function URL(address, location, parser) {
        if (!(this instanceof URL)) {
          return new URL(address, location, parser);
        }

        var relative,
            extracted,
            parse,
            instruction,
            index,
            key,
            instructions = rules.slice(),
            type = typeof location,
            url = this,
            i = 0; //
        // The following if statements allows this module two have compatibility with
        // 2 different API:
        //
        // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
        //    where the boolean indicates that the query string should also be parsed.
        //
        // 2. The `URL` interface of the browser which accepts a URL, object as
        //    arguments. The supplied object will be used as default values / fall-back
        //    for relative paths.
        //

        if ('object' !== type && 'string' !== type) {
          parser = location;
          location = null;
        }

        if (parser && 'function' !== typeof parser) parser = qs.parse;
        location = lolcation(location); //
        // Extract protocol information before running the instructions.
        //

        extracted = extractProtocol(address || '');
        relative = !extracted.protocol && !extracted.slashes;
        url.slashes = extracted.slashes || relative && location.slashes;
        url.protocol = extracted.protocol || location.protocol || '';
        address = extracted.rest; //
        // When the authority component is absent the URL starts with a path
        // component.
        //

        if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

        for (; i < instructions.length; i++) {
          instruction = instructions[i];
          parse = instruction[0];
          key = instruction[1];

          if (parse !== parse) {
            url[key] = address;
          } else if ('string' === typeof parse) {
            if (~(index = address.indexOf(parse))) {
              if ('number' === typeof instruction[2]) {
                url[key] = address.slice(0, index);
                address = address.slice(index + instruction[2]);
              } else {
                url[key] = address.slice(index);
                address = address.slice(0, index);
              }
            }
          } else if (index = parse.exec(address)) {
            url[key] = index[1];
            address = address.slice(0, index.index);
          }

          url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
          // Hostname, host and protocol should be lowercased so they can be used to
          // create a proper `origin`.
          //

          if (instruction[4]) url[key] = url[key].toLowerCase();
        } //
        // Also parse the supplied query string in to an object. If we're supplied
        // with a custom parser as function use that instead of the default build-in
        // parser.
        //


        if (parser) url.query = parser(url.query); //
        // If the URL is relative, resolve the pathname against the base URL.
        //

        if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
          url.pathname = resolve(url.pathname, location.pathname);
        } //
        // We should not add port numbers if they are already the default port number
        // for a given protocol. As the host also contains the port number we're going
        // override it with the hostname which contains no port number.
        //


        if (!required(url.port, url.protocol)) {
          url.host = url.hostname;
          url.port = '';
        } //
        // Parse down the `auth` for the username and password.
        //


        url.username = url.password = '';

        if (url.auth) {
          instruction = url.auth.split(':');
          url.username = instruction[0] || '';
          url.password = instruction[1] || '';
        }

        url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null'; //
        // The href is just the compiled result.
        //

        url.href = url.toString();
      }
      /**
       * This is convenience method for changing properties in the URL instance to
       * insure that they all propagate correctly.
       *
       * @param {String} part          Property we need to adjust.
       * @param {Mixed} value          The newly assigned value.
       * @param {Boolean|Function} fn  When setting the query, it will be the function
       *                               used to parse the query.
       *                               When setting the protocol, double slash will be
       *                               removed from the final url if it is true.
       * @returns {URL}
       * @api public
       */


      function set(part, value, fn) {
        var url = this;

        switch (part) {
          case 'query':
            if ('string' === typeof value && value.length) {
              value = (fn || qs.parse)(value);
            }

            url[part] = value;
            break;

          case 'port':
            url[part] = value;

            if (!required(value, url.protocol)) {
              url.host = url.hostname;
              url[part] = '';
            } else if (value) {
              url.host = url.hostname + ':' + value;
            }

            break;

          case 'hostname':
            url[part] = value;
            if (url.port) value += ':' + url.port;
            url.host = value;
            break;

          case 'host':
            url[part] = value;

            if (/:\d+$/.test(value)) {
              value = value.split(':');
              url.port = value.pop();
              url.hostname = value.join(':');
            } else {
              url.hostname = value;
              url.port = '';
            }

            break;

          case 'protocol':
            url.protocol = value.toLowerCase();
            url.slashes = !fn;
            break;

          case 'pathname':
            url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;
            break;

          default:
            url[part] = value;
        }

        for (var i = 0; i < rules.length; i++) {
          var ins = rules[i];
          if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
        }

        url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
        url.href = url.toString();
        return url;
      }

      ;
      /**
       * Transform the properties back in to a valid and full URL string.
       *
       * @param {Function} stringify Optional query stringify function.
       * @returns {String}
       * @api public
       */

      function toString(stringify) {
        if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
        var query,
            url = this,
            protocol = url.protocol;
        if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
        var result = protocol + (url.slashes ? '//' : '');

        if (url.username) {
          result += url.username;
          if (url.password) result += ':' + url.password;
          result += '@';
        }

        result += url.host + url.pathname;
        query = 'object' === typeof url.query ? stringify(url.query) : url.query;
        if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
        if (url.hash) result += url.hash;
        return result;
      }

      URL.prototype = {
        set: set,
        toString: toString
      }; //
      // Expose the URL parser and some additional properties that might be useful for
      // others or testing.
      //

      URL.extractProtocol = extractProtocol;
      URL.location = lolcation;
      URL.qs = qs;
      module.exports = URL;
    }, {
      "./lolcation": 62,
      "querystringify": 59,
      "requires-port": 60
    }],
    62: [function (require, module, exports) {
      (function (global) {
        'use strict';

        var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
        /**
         * These properties should not be copied or inherited from. This is only needed
         * for all non blob URL's as a blob URL does not include a hash, only the
         * origin.
         *
         * @type {Object}
         * @private
         */

        var ignore = {
          hash: 1,
          query: 1
        },
            URL;
        /**
         * The location object differs when your code is loaded through a normal page,
         * Worker or through a worker using a blob. And with the blobble begins the
         * trouble as the location object will contain the URL of the blob, not the
         * location of the page where our code is loaded in. The actual origin is
         * encoded in the `pathname` so we can thankfully generate a good "default"
         * location from it so we can generate proper relative URL's again.
         *
         * @param {Object|String} loc Optional default location object.
         * @returns {Object} lolcation object.
         * @api public
         */

        module.exports = function lolcation(loc) {
          loc = loc || global.location || {};
          URL = URL || require('./');
          var finaldestination = {},
              type = typeof loc,
              key;

          if ('blob:' === loc.protocol) {
            finaldestination = new URL(unescape(loc.pathname), {});
          } else if ('string' === type) {
            finaldestination = new URL(loc, {});

            for (key in ignore) {
              delete finaldestination[key];
            }
          } else if ('object' === type) {
            for (key in loc) {
              if (key in ignore) continue;
              finaldestination[key] = loc[key];
            }

            if (finaldestination.slashes === undefined) {
              finaldestination.slashes = slashes.test(loc.href);
            }
          }

          return finaldestination;
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./": 61
    }]
  }, {}, [1])(1);
}); 

cc._RF.pop();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHNcXExvYWRpbmdcXHNyY1xcc29ja2pzMTE0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsQ0FBQyxVQUFTLENBQVQsRUFBVztBQUFDLE1BQUcsT0FBTyxPQUFQLEtBQWlCLFFBQWpCLElBQTJCLE9BQU8sTUFBUCxLQUFnQixXQUE5QyxFQUEwRDtBQUFDLElBQUEsTUFBTSxDQUFDLE9BQVAsR0FBZSxDQUFDLEVBQWhCO0FBQW1CLEdBQTlFLE1BQW1GLElBQUcsT0FBTyxNQUFQLEtBQWdCLFVBQWhCLElBQTRCLE1BQU0sQ0FBQyxHQUF0QyxFQUEwQztBQUFDLElBQUEsTUFBTSxDQUFDLEVBQUQsRUFBSSxDQUFKLENBQU47QUFBYSxHQUF4RCxNQUE0RDtBQUFDLFFBQUksQ0FBSjs7QUFBTSxRQUFHLE9BQU8sTUFBUCxLQUFnQixXQUFuQixFQUErQjtBQUFDLE1BQUEsQ0FBQyxHQUFDLE1BQUY7QUFBUyxLQUF6QyxNQUE4QyxJQUFHLE9BQU8sTUFBUCxLQUFnQixXQUFuQixFQUErQjtBQUFDLE1BQUEsQ0FBQyxHQUFDLE1BQUY7QUFBUyxLQUF6QyxNQUE4QyxJQUFHLE9BQU8sSUFBUCxLQUFjLFdBQWpCLEVBQTZCO0FBQUMsTUFBQSxDQUFDLEdBQUMsSUFBRjtBQUFPLEtBQXJDLE1BQXlDO0FBQUMsTUFBQSxDQUFDLEdBQUMsSUFBRjtBQUFPOztBQUFBLElBQUEsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFDLEVBQVo7QUFBZTtBQUFDLENBQWhVLEVBQWtVLFlBQVU7QUFBQyxNQUFJLE1BQUosRUFBVyxNQUFYLEVBQWtCLE9BQWxCO0FBQTBCLFNBQVEsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsYUFBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFMLEVBQVM7QUFBQyxZQUFHLENB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QUFDLElBQUQsQ0FBcEI7QUFFQSxjQUFJLGdCQUFnQixHQUFHLEVBQXZCO0FBQUEsY0FDSSxJQUFJLEdBQUcsT0FBTyxHQURsQjtBQUFBLGNBRUksR0FGSjs7QUFJQSxjQUFJLFlBQVksR0FBRyxDQUFDLFFBQXBCLEVBQThCO0FBQzVCLFlBQUEsZ0JBQWdCLEdBQUcsSUFBSSxHQUFKLENBQVEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFMLENBQWhCLEVBQWdDLEVBQWhDLENBQW5CO0FBQ0QsV0FGRCxNQUVPLElBQUksYUFBYSxJQUFqQixFQUF1QjtBQUM1QixZQUFBLGdCQUFnQixHQUFHLElBQUksR0FBSixDQUFRLEdBQVIsRUFBYSxFQUFiLENBQW5COztBQUNBLGlCQUFLLEdBQUwsSUFBWSxNQUFaO0FBQW9CLHFCQUFPLGdCQUFnQixDQUFDLEdBQUQsQ0FBdkI7QUFBcEI7QUFDRCxXQUhNLE1BR0EsSUFBSSxhQUFhLElBQWpCLEVBQXVCO0FBQzVCLGlCQUFLLEdBQUwsSUFBWSxHQUFaLEVBQWlCO0FBQ2Ysa0JBQUksR0FBRyxJQUFJLE1BQVgsRUFBbUI7QUFDbkIsY0FBQSxnQkFBZ0IsQ0FBQyxHQUFELENBQWhCLEdBQXdCLEdBQUcsQ0FBQyxHQUFELENBQTNCO0FBQ0Q7O0FBRUQsZ0JBQUksZ0JBQWdCLENBQUMsT0FBakIsS0FBNkIsU0FBakMsRUFBNEM7QUFDMUMsY0FBQSxnQkFBZ0IsQ0FBQyxPQUFqQixHQUEyQixPQUFPLENBQUMsSUFBUixDQUFhLEdBQUcsQ0FBQyxJQUFqQixDQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsaUJBQU8sZ0JBQVA7QUFDRCxTQXpCRDtBQTJCQyxPQXZERCxFQXVERyxJQXZESCxDQXVEUSxJQXZEUixFQXVEYSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0MsTUFBaEMsR0FBeUMsT0FBTyxJQUFQLEtBQWdCLFdBQWhCLEdBQThCLElBQTlCLEdBQXFDLE9BQU8sTUFBUCxLQUFrQixXQUFsQixHQUFnQyxNQUFoQyxHQUF5QyxFQXZEcEk7QUF5REMsS0ExRCtELEVBMEQ5RDtBQUFDLFlBQUs7QUFBTixLQTFEOEQ7QUF0aUx5dUIsR0FBM2IsRUFnbUxoVyxFQWhtTGdXLEVBZ21MN1YsQ0FBQyxDQUFELENBaG1MNlYsRUFnbUx4VixDQWhtTHdWLENBQVA7QUFpbUx0VyxDQWptTEQsR0FvbUxBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==