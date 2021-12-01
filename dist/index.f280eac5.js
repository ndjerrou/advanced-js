// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cCWkO":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "76339098f280eac5";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5xniF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _dataJson = require("../data.json");
var _dataJsonDefault = parcelHelpers.interopDefault(_dataJson);
const tagsPhotographers = [];
// [tags] ==> {tag1: ..., tag2: ..., }
const createUniqueTags = (tags)=>{
    const uniqueTags = {
    };
    tags.forEach((tag)=>{
        uniqueTags[tag] = 1;
    });
    return uniqueTags;
};
// display into the dom an array of tags into a specific node
const dispTags = (tags, node)=>{
    node.innerHTML = "";
    tags.forEach((tag)=>{
        node.innerHTML += `<li>#${tag}</li>`;
    });
};
// alternative to dispTags
const dispTags1 = (tag, node)=>{
    node.innerHTML += `<li>#${tag}</li>`;
};
// fulfill our tagsPhotographers array with tags
_dataJsonDefault.default.photographers.forEach((photographer)=>{
    photographer.tags.forEach((tag)=>{
        tagsPhotographers.push(tag);
    });
});
// Creating an array with the DISCTING tags
const uniqueTagsObj = createUniqueTags(tagsPhotographers);
const uniqueTagsArray = Object.keys(uniqueTagsObj);
dispTags(uniqueTagsArray, document.querySelector("ul"));
// or ...
// for (let tag in uniqueTagsObj) {
//   dispTags1(tag, document.querySelector("ul"));
// }
const dispPhotographers = (photographers, node)=>{
}; // IN case we wanna display an array through innerHTML
 // const obj = {
 //   name: "Poppy",
 //   age: 3,
 //   hobbies: ["run", "pup", "eat"]
 // };
 // document.body.innerHTML = `
 // <p>${obj.name}</p>
 // <p>${obj.age}</p>
 // ${obj.hobbies.map((hobbi) => {
 //   return `<span>${hobbi}</span>`;
 // })}`;

},{"../data.json":"vRbhQ","@parcel/transformer-js/src/esmodule-helpers.js":"dopUt"}],"vRbhQ":[function(require,module,exports) {
module.exports = JSON.parse("{\"photographers\":[{\"name\":\"Mimi Keel\",\"id\":243,\"city\":\"London\",\"country\":\"UK\",\"tags\":[\"portrait\",\"events\",\"travel\",\"animals\"],\"tagline\":\"Voir le beau dans le quotidien\",\"price\":400,\"portrait\":\"MimiKeel.jpg\"},{\"name\":\"Ellie-Rose Wilkens\",\"id\":930,\"city\":\"Paris\",\"country\":\"France\",\"tags\":[\"sports\",\"architecture\"],\"tagline\":\"Capturer des compositions complexes\",\"price\":250,\"portrait\":\"EllieRoseWilkens.jpg\"},{\"name\":\"Tracy Galindo\",\"id\":82,\"city\":\"Montreal\",\"country\":\"Canada\",\"tags\":[\"art\",\"fashion\",\"events\"],\"tagline\":\"Photographe freelance\",\"price\":500,\"portrait\":\"TracyGalindo.jpg\"},{\"name\":\"Nabeel Bradford\",\"id\":527,\"city\":\"Mexico City\",\"country\":\"Mexico\",\"tags\":[\"travel\",\"portrait\"],\"tagline\":\"Toujours aller de l'avant\",\"price\":350,\"portrait\":\"NabeelBradford.jpg\"},{\"name\":\"Rhode Dubois\",\"id\":925,\"city\":\"Barcelona\",\"country\":\"Spain\",\"tags\":[\"sport\",\"fashion\",\"events\",\"animals\"],\"tagline\":\"Je crée des souvenirs\",\"price\":275,\"portrait\":\"RhodeDubois.jpg\"},{\"name\":\"Marcel Nikolic\",\"id\":195,\"city\":\"Berlin\",\"country\":\"Germany\",\"tags\":[\"travel\",\"architecture\"],\"tagline\":\"Toujours à la recherche de LA photo\",\"price\":300,\"portrait\":\"MarcelNikolic.jpg\"}],\"media\":[{\"id\":342550,\"photographerId\":82,\"title\":\"Fashion Yellow Beach\",\"image\":\"Fashion_Yellow_Beach.jpg\",\"tags\":[\"fashion\"],\"likes\":62,\"date\":\"2011-12-08\",\"price\":55},{\"id\":8520927,\"photographerId\":82,\"title\":\"Fashion Urban Jungle\",\"image\":\"Fashion_Urban_Jungle.jpg\",\"tags\":[\"fashion\"],\"likes\":11,\"date\":\"2011-11-06\",\"price\":55},{\"id\":9025895,\"photographerId\":82,\"title\":\"Fashion Pattern on a Pattern\",\"image\":\"Fashion_Pattern_on_Pattern.jpg\",\"tags\":[\"fashion\"],\"likes\":72,\"date\":\"2013-08-12\",\"price\":55},{\"id\":9275938,\"photographerId\":82,\"title\":\"Wedding Gazebo\",\"image\":\"Event-_WeddingGazebo.jpg\",\"tags\":[\"events\"],\"likes\":69,\"date\":\"2018-02-22\",\"price\":55},{\"id\":2053494,\"photographerId\":82,\"title\":\"Sparkles\",\"image\":\"Event_Sparklers.jpg\",\"tags\":[\"events\"],\"likes\":2,\"date\":\"2020-05-25\",\"price\":55},{\"id\":7324238,\"photographerId\":82,\"title\":\"18th Anniversary\",\"image\":\"Event_18thAnniversary.jpg\",\"tags\":[\"events\"],\"likes\":33,\"date\":\"2019-06-12\",\"price\":55},{\"id\":8328953,\"photographerId\":82,\"title\":\"Wooden Horse Sculpture\",\"video\":\"Art_Wooden_Horse_Sculpture.mp4\",\"tags\":[\"art\"],\"likes\":24,\"date\":\"2011-12-08\",\"price\":100},{\"id\":7502053,\"photographerId\":82,\"title\":\"Triangle Man\",\"image\":\"Art_Triangle_Man.jpg\",\"tags\":[\"art\"],\"likes\":88,\"date\":\"2007-05-07\",\"price\":55},{\"id\":8523492,\"photographerId\":82,\"title\":\"Purple Tunnel\",\"image\":\"Art_Purple_light.jpg\",\"tags\":[\"art\"],\"likes\":24,\"date\":\"2018-05-05\",\"price\":55},{\"id\":75902334,\"photographerId\":82,\"title\":\"Art Mine\",\"image\":\"Art_Mine.jpg\",\"tags\":[\"art\"],\"likes\":75,\"date\":\"2019-11-25\",\"price\":55},{\"id\":73852953,\"photographerId\":925,\"title\":\"8 Rows\",\"image\":\"Sport_2000_with_8.jpg\",\"tags\":[\"sport\"],\"likes\":52,\"date\":\"2013-02-30\",\"price\":70},{\"id\":92758372,\"photographerId\":925,\"title\":\"Fashion Wings\",\"image\":\"Fashion_Wings.jpg\",\"tags\":[\"fashion\"],\"likes\":58,\"date\":\"2018-07-17\",\"price\":70},{\"id\":32958383,\"photographerId\":925,\"title\":\"Melody Red on Stripes\",\"image\":\"Fashion_Melody_Red_on_Stripes.jpg\",\"tags\":[\"fashion\"],\"likes\":11,\"date\":\"2019-08-12\",\"price\":70},{\"id\":928587383,\"photographerId\":925,\"title\":\"Venture Conference\",\"image\":\"Event_VentureConference.jpg\",\"tags\":[\"events\"],\"likes\":2,\"date\":\"2019-01-02\",\"price\":70},{\"id\":725639493,\"photographerId\":925,\"title\":\"Product Pitch\",\"image\":\"Event_ProductPitch.jpg\",\"tags\":[\"events\"],\"likes\":3,\"date\":\"2019-05-20\",\"price\":70},{\"id\":23394384,\"photographerId\":925,\"title\":\"Musical Festival Keyboard\",\"image\":\"Event_KeyboardCheck.jpg\",\"tags\":[\"events\"],\"likes\":52,\"date\":\"2019-07-18\",\"price\":70},{\"id\":87367293,\"photographerId\":925,\"title\":\"Musical Festival Singer\",\"image\":\"Event_Emcee.jpg\",\"tags\":[\"events\"],\"likes\":23,\"date\":\"2018-02-22\",\"price\":70},{\"id\":593834784,\"photographerId\":925,\"title\":\"Animal Majesty\",\"image\":\"Animals_Majesty.jpg\",\"tags\":[\"animals\"],\"likes\":52,\"date\":\"2017-03-13\",\"price\":70},{\"id\":83958935,\"photographerId\":925,\"title\":\"Cute Puppy on Sunset\",\"video\":\"Animals_Puppiness.mp4\",\"tags\":[\"animals\"],\"likes\":52,\"date\":\"2016-06-12\",\"price\":70},{\"id\":394583434,\"photographerId\":527,\"title\":\"Rock Mountains\",\"video\":\"Travel_Rock_Mountains.mp4\",\"tags\":[\"travel\"],\"likes\":23,\"date\":\"2017-03-18\",\"price\":45},{\"id\":343423425,\"photographerId\":527,\"title\":\"Outdoor Baths\",\"image\":\"Travel_Outdoor_Baths.jpg\",\"tags\":[\"travel\"],\"likes\":101,\"date\":\"2017-04-03\",\"price\":45},{\"id\":73434243,\"photographerId\":527,\"title\":\"Road into the Hill\",\"image\":\"Travel_Road_into_Hill.jpg\",\"tags\":[\"travel\"],\"likes\":99,\"date\":\"2018-04-30\",\"price\":45},{\"id\":23425523,\"photographerId\":527,\"title\":\"Bridge into the Forest\",\"image\":\"Travel_Bridge_into_Forest.jpg\",\"tags\":[\"travel\"],\"likes\":34,\"date\":\"2016-04-05\",\"price\":45},{\"id\":23134513,\"photographerId\":527,\"title\":\"Boat Wonderer\",\"image\":\"Travel_Boat_Wanderer.jpg\",\"tags\":[\"travel\"],\"likes\":23,\"date\":\"2017-03-18\",\"price\":45},{\"id\":92352352,\"photographerId\":527,\"title\":\"Portrait Sunkiss\",\"image\":\"Portrait_Sunkissed.jpg\",\"tags\":[\"portrait\"],\"likes\":66,\"date\":\"2018-05-24\",\"price\":45},{\"id\":34513453,\"photographerId\":527,\"title\":\"Shaw Potrait\",\"image\":\"Portrait_Shaw.jpg\",\"tags\":[\"portait\"],\"likes\":52,\"date\":\"2017-04-21\",\"price\":45},{\"id\":23523533,\"photographerId\":527,\"title\":\"Alexandra\",\"image\":\"Portrait_Alexandra.jpg\",\"tags\":[\"portait\"],\"likes\":95,\"date\":\"2018-11-02\",\"price\":45},{\"id\":525834234,\"photographerId\":527,\"title\":\"Afternoon Break\",\"image\":\"Portrait_AfternoonBreak.jpg\",\"tags\":[\"portait\"],\"likes\":25,\"date\":\"2019-01-02\",\"price\":45},{\"id\":623534343,\"photographerId\":243,\"title\":\"Lonesome\",\"image\":\"Travel_Lonesome.jpg\",\"tags\":[\"travel\"],\"likes\":88,\"date\":\"2019-02-03\",\"price\":45},{\"id\":625025343,\"photographerId\":243,\"title\":\"Hillside Color\",\"image\":\"Travel_HillsideColor.jpg\",\"tags\":[\"travel\"],\"likes\":85,\"date\":\"2019-04-03\",\"price\":45},{\"id\":2525345343,\"photographerId\":243,\"title\":\"Wednesday Potrait\",\"image\":\"Portrait_Wednesday.jpg\",\"tags\":[\"portait\"],\"likes\":34,\"date\":\"2019-04-07\",\"price\":45},{\"id\":2523434634,\"photographerId\":243,\"title\":\"Nora Portrait\",\"image\":\"Portrait_Nora.jpg\",\"tags\":[\"portait\"],\"likes\":63,\"date\":\"2019-04-07\",\"price\":45},{\"id\":398847109,\"photographerId\":243,\"title\":\"Raw Black Portrait\",\"image\":\"Portrait_Background.jpg\",\"tags\":[\"portait\"],\"likes\":55,\"date\":\"2019-06-20\",\"price\":45},{\"id\":2534342,\"photographerId\":243,\"title\":\"Seaside Wedding\",\"image\":\"Event_SeasideWedding.jpg\",\"tags\":[\"events\"],\"likes\":25,\"date\":\"2019-06-21\",\"price\":45},{\"id\":65235234,\"photographerId\":243,\"title\":\"Boulder Wedding\",\"image\":\"Event_PintoWedding.jpg\",\"tags\":[\"events\"],\"likes\":52,\"date\":\"2019-06-25\",\"price\":45},{\"id\":23523434,\"photographerId\":243,\"title\":\"Benevides Wedding\",\"image\":\"Event_BenevidesWedding.jpg\",\"tags\":[\"events\"],\"likes\":77,\"date\":\"2019-06-28\",\"price\":45},{\"id\":5234343,\"photographerId\":243,\"title\":\"Wild Horses in the Mountains\",\"video\":\"Animals_Wild_Horses_in_the_mountains.mp4\",\"tags\":[\"animals\"],\"likes\":142,\"date\":\"2019-08-23\",\"price\":60},{\"id\":95234343,\"photographerId\":243,\"title\":\"Rainbow Bird\",\"image\":\"Animals_Rainbow.jpg\",\"tags\":[\"animals\"],\"likes\":59,\"date\":\"2019-07-02\",\"price\":60},{\"id\":52343416,\"photographerId\":195,\"title\":\"Japanese Tower, Kyoto\",\"image\":\"Travel_Tower.jpg\",\"tags\":[\"travel\"],\"likes\":25,\"date\":\"2019-04-03\",\"price\":60},{\"id\":2523434,\"photographerId\":195,\"title\":\"Senset on Canals, Venice\",\"image\":\"Travel_SunsetonCanals.jpg\",\"tags\":[\"travel\"],\"likes\":53,\"date\":\"2019-05-06\",\"price\":60},{\"id\":95293534,\"photographerId\":195,\"title\":\"Mountain and Lake\",\"image\":\"Travel_OpenMountain.jpg\",\"tags\":[\"travel\"],\"likes\":33,\"date\":\"2019-05-12\",\"price\":60},{\"id\":356234343,\"photographerId\":195,\"title\":\"City Bike and Stair, Paris\",\"image\":\"Travel_Bike_and_Stair.jpg\",\"tags\":[\"travel\"],\"likes\":53,\"date\":\"2019-06-20\",\"price\":60},{\"id\":235234343,\"photographerId\":195,\"title\":\"Adventure Door, India\",\"image\":\"Travel_Adventure_Door.jpg\",\"tags\":[\"travel\"],\"likes\":63,\"date\":\"2019-06-26\",\"price\":60},{\"id\":6234234343,\"photographerId\":195,\"title\":\"Contrast, St Petersburg\",\"image\":\"Architecture_Contrast.jpg\",\"tags\":[\"architecture\"],\"likes\":52,\"date\":\"2019-06-30\",\"price\":60},{\"id\":6525666253,\"photographerId\":195,\"title\":\"On a Hill, Tibet\",\"image\":\"Architecture_On_a_hill.jpg\",\"tags\":[\"architecture\"],\"likes\":63,\"date\":\"2019-07-20\",\"price\":60},{\"id\":98252523433,\"photographerId\":195,\"title\":\"Leaning Tower, Pisa\",\"image\":\"Architecture_Dome.jpg\",\"tags\":[\"architecture\"],\"likes\":88,\"date\":\"2020-01-05\",\"price\":60},{\"id\":9259398453,\"photographerId\":195,\"title\":\"Circle Highways, Buenos Aires\",\"video\":\"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4\",\"tags\":[\"architecture\"],\"likes\":57,\"date\":\"2020-01-20\",\"price\":65},{\"id\":3523523534,\"photographerId\":195,\"title\":\"Corner Building and Blue Sky\",\"image\":\"Architecture_Corner_Room.jpg\",\"tags\":[\"architecture\"],\"likes\":54,\"date\":\"2020-05-05\",\"price\":60},{\"id\":952343423,\"photographerId\":930,\"title\":\"Tricks in the Air\",\"video\":\"Sport_Tricks_in_the_air.mp4\",\"tags\":[\"sport\"],\"likes\":150,\"date\":\"2018-02-30\",\"price\":70},{\"id\":235234343,\"photographerId\":930,\"title\":\"Climber\",\"image\":\"Sport_Next_Hold.jpg\",\"tags\":[\"sport\"],\"likes\":101,\"date\":\"2018-03-05\",\"price\":65},{\"id\":235343222,\"photographerId\":930,\"title\":\"Surfer\",\"image\":\"sport_water_tunnel.jpg\",\"tags\":[\"sport\"],\"likes\":103,\"date\":\"2018-03-10\",\"price\":70},{\"id\":7775342343,\"photographerId\":930,\"title\":\"Skier\",\"image\":\"Sport_Sky_Cross.jpg\",\"tags\":[\"sport\"],\"likes\":77,\"date\":\"2018-04-16\",\"price\":50},{\"id\":9253445784,\"photographerId\":930,\"title\":\"Race End\",\"image\":\"Sport_Race_End.jpg\",\"tags\":[\"sport\"],\"likes\":88,\"date\":\"2018-04-22\",\"price\":65},{\"id\":22299394,\"photographerId\":930,\"title\":\"Jump!\",\"image\":\"Sport_Jump.jpg\",\"tags\":[\"sport\"],\"likes\":95,\"date\":\"2018-04-27\",\"price\":70},{\"id\":3452342633,\"photographerId\":930,\"title\":\"White Light\",\"image\":\"Architecture_White_Light.jpg\",\"tags\":[\"architecture\"],\"likes\":52,\"date\":\"2018-05-03\",\"price\":75},{\"id\":939234243,\"photographerId\":930,\"title\":\"Water on Modern Building\",\"image\":\"Architecture_Water_on_Modern.jpg\",\"tags\":[\"architecture\"],\"likes\":55,\"date\":\"2018-05-10\",\"price\":72},{\"id\":222959233,\"photographerId\":930,\"title\":\"Horseshoe\",\"image\":\"Architecture_Horseshoe.jpg\",\"tags\":[\"architecture\"],\"likes\":85,\"date\":\"2018-05-15\",\"price\":71},{\"id\":965933434,\"photographerId\":930,\"title\":\"Cross Bar\",\"image\":\"Architecture_Cross_Bar.jpg\",\"tags\":[\"architecture\"],\"likes\":66,\"date\":\"2018-05-20\",\"price\":58},{\"id\":777723343,\"photographerId\":930,\"title\":\"Connected Curves\",\"image\":\"Architecture_Connected_Curves.jpg\",\"tags\":[\"architecture\"],\"likes\":79,\"date\":\"2018-05-21\",\"price\":80}]}");

},{}],"dopUt":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["cCWkO","5xniF"], "5xniF", "parcelRequiree4c2")

//# sourceMappingURL=index.f280eac5.js.map
