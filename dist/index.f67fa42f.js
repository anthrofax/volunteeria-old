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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"ffSDh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "36675ce8f67fa42f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9Kkde":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainNavbarViewJs = require("./main-views/mainNavbarView.js");
var _mainNavbarViewJsDefault = parcelHelpers.interopDefault(_mainNavbarViewJs);
var _contributionSectionJs = require("./main-views/contributionSection.js");
var _contributionSectionJsDefault = parcelHelpers.interopDefault(_contributionSectionJs);
var _featureSectionViewJs = require("./main-views/featureSectionView.js");
var _featureSectionViewJsDefault = parcelHelpers.interopDefault(_featureSectionViewJs);
var _jumbotronViewJs = require("./main-views/jumbotronView.js");
var _jumbotronViewJsDefault = parcelHelpers.interopDefault(_jumbotronViewJs);
var _modelJs = require("../model.js");
const controlNavbar = function() {
    (0, _mainNavbarViewJsDefault.default).navLinkHandler();
    (0, _mainNavbarViewJsDefault.default).fixNavbar(document.querySelector(".jumbotron"));
    (0, _mainNavbarViewJsDefault.default).hamburgerHandler();
    (0, _mainNavbarViewJsDefault.default).overlayBgHandler();
};
const controlJumbotronSection = function() {
    (0, _jumbotronViewJsDefault.default).imageInterval((0, _modelJs.state).mainImageUrl);
    (0, _jumbotronViewJsDefault.default).textAnimation();
    (0, _jumbotronViewJsDefault.default).prevnextHandler((0, _modelJs.state).mainImageUrl);
};
const controlFeatureSection = function() {
    (0, _featureSectionViewJsDefault.default).scrollAnimation();
};
const controlContributionSection = function() {
    (0, _contributionSectionJsDefault.default).init();
    if (screen.width >= 1024) (0, _contributionSectionJsDefault.default).scrollAnimation();
};
const init = function() {
    controlJumbotronSection();
    controlNavbar();
    controlContributionSection();
    controlFeatureSection();
    // Preline Library for Dark Mode 
    const HSThemeAppearance = {
        init () {
            const defaultTheme = "default";
            let theme = localStorage.getItem("hs_theme") || defaultTheme;
            if (document.querySelector("html").classList.contains("dark")) return;
            this.setAppearance(theme);
        },
        _resetStylesOnLoad () {
            const $resetStyles = document.createElement("style");
            $resetStyles.innerText = `*{transition: unset !important;}`;
            $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
            document.head.appendChild($resetStyles);
            return $resetStyles;
        },
        setAppearance (theme, saveInStore = true, dispatchEvent = true) {
            const $resetStylesEl = this._resetStylesOnLoad();
            if (saveInStore) localStorage.setItem("hs_theme", theme);
            if (theme === "auto") theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "default";
            document.querySelector("html").classList.remove("dark");
            document.querySelector("html").classList.remove("default");
            document.querySelector("html").classList.remove("auto");
            document.querySelector("html").classList.add(this.getOriginalAppearance());
            setTimeout(()=>{
                $resetStylesEl.remove();
            });
            if (dispatchEvent) window.dispatchEvent(new CustomEvent("on-hs-appearance-change", {
                detail: theme
            }));
        },
        getAppearance () {
            let theme = this.getOriginalAppearance();
            if (theme === "auto") theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "default";
            return theme;
        },
        getOriginalAppearance () {
            const defaultTheme = "default";
            return localStorage.getItem("hs_theme") || defaultTheme;
        }
    };
    HSThemeAppearance.init();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{
        if (HSThemeAppearance.getOriginalAppearance() === "auto") HSThemeAppearance.setAppearance("auto", false);
    });
    window.addEventListener("load", ()=>{
        const $clickableThemes = document.querySelectorAll("[data-hs-theme-click-value]");
        const $switchableThemes = document.querySelectorAll("[data-hs-theme-switch]");
        $clickableThemes.forEach(($item)=>{
            $item.addEventListener("click", ()=>HSThemeAppearance.setAppearance($item.getAttribute("data-hs-theme-click-value"), true, $item));
        });
        $switchableThemes.forEach(($item)=>{
            $item.addEventListener("change", (e)=>{
                HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
            });
            $item.checked = HSThemeAppearance.getAppearance() === "dark";
        });
        window.addEventListener("on-hs-appearance-change", (e)=>{
            $switchableThemes.forEach(($item)=>{
                $item.checked = e.detail === "dark";
            });
        });
    });
};
init();

},{"./main-views/mainNavbarView.js":"5Bf8q","./main-views/contributionSection.js":"8SN8e","./main-views/featureSectionView.js":"9mpeC","./main-views/jumbotronView.js":"e7c15","../model.js":"dkYPG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Bf8q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _navbarJs = require("../../Navbar.js");
var _navbarJsDefault = parcelHelpers.interopDefault(_navbarJs);
class mainNavbarView extends (0, _navbarJsDefault.default) {
    constructor(){
        super();
    }
}
exports.default = new mainNavbarView();

},{"../../Navbar.js":"eGHwu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGHwu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Navbar {
    _parentElement = document.querySelector("nav");
    _navLinks = this._parentElement.querySelectorAll("a");
    _hamburgerButton = this._parentElement.querySelector(".hamburger");
    _overlayBg = document.querySelector(".overlay-bg");
    navLinkHandler() {
        this._parentElement.addEventListener("mouseover", this.fadeOutLinks.bind(this, 0.5));
        this._parentElement.addEventListener("mouseout", this.fadeOutLinks.bind(this, 1));
    }
    fadeOutLinks(opacity, e) {
        const linkHovered = e.target.closest("a");
        if (!linkHovered) return;
        this._navLinks.forEach((link)=>{
            if (link !== linkHovered) link.style.opacity = opacity;
        });
    }
    hamburgerHandler() {
        this._hamburgerButton.addEventListener("click", ()=>{
            this._showNavbar();
            this._overlayBg.classList.remove("hidden");
        });
    }
    overlayBgHandler() {
        this._overlayBg.addEventListener("click", ()=>{
            this._showNavbar();
            this._overlayBg.classList.add("hidden");
        });
    }
    fixNavbar(jumbotron) {
        const nav = this._parentElement;
        const navFixedObserver = new IntersectionObserver(function(entries) {
            const [entry] = entries;
            if (entry.isIntersecting) nav.classList.replace("sticky-navbar", "relative");
            else nav.classList.replace("relative", "sticky-navbar");
        }, {
            root: null,
            threshold: 0,
            rootMargin: `-${nav.getBoundingClientRect().height}px`
        });
        navFixedObserver.observe(jumbotron);
    }
    _showNavbar() {
        const threeLine = this._hamburgerButton.querySelectorAll(".three-line");
        const closeHamburger = this._hamburgerButton.querySelector(".close-hamburger");
        const closeLine = this._hamburgerButton.querySelectorAll(".close-line");
        const sideNavbar = document.querySelector(".side-navbar");
        this._hamburgerButton.classList.toggle("ring-4");
        threeLine.forEach((line)=>line.classList.toggle("translate-x-10"));
        closeHamburger.classList.toggle("left-1/2");
        closeHamburger.classList.toggle("w-12");
        closeLine.forEach((line, i)=>{
            i === 0 ? line.classList.toggle("rotate-45") : line.classList.toggle("-rotate-45");
        });
        sideNavbar.classList.toggle("-translate-x-full");
    }
}
exports.default = Navbar;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"8SN8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class contributionSection {
    _parentElement = document.querySelector(".contribution-section");
    _contribution = document.querySelectorAll(".kontribusi");
    _contDeviderLine = document.querySelector(".cont-devider");
    _deviderHeightInit = 0;
    _sectionObserver = new IntersectionObserver((entries)=>{
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        if (entry.target.getAttribute("dataset-order") === "odd") entry.target.classList.remove("contribution-l-animation");
        if (entry.target.getAttribute("dataset-order") === "even") entry.target.classList.remove("contribution-r-animation");
        this._deviderHeightInit += Number.parseInt(getComputedStyle(this._parentElement).height) / this._contribution.length;
        this._contDeviderLine.style.height = `${this._deviderHeightInit}px`;
        this._sectionObserver.unobserve(entry.target);
    }, {
        root: null,
        threshold: 1
    });
    scrollAnimation() {
        this._contribution.forEach((cont)=>{
            this._sectionObserver.observe(cont);
            cont.classList.add(`${cont.getAttribute("dataset-order") === "odd" ? "contribution-l-animation" : "contribution-r-animation"}`);
        });
    }
    init() {
        const contribution = document.querySelectorAll(".kontribusi");
        contribution.forEach((cont, i)=>{
            cont.setAttribute("dataset-order", cont.parentElement.classList.contains("left-cont") ? "odd" : "even");
            if (screen.width >= 1024) cont.classList.add(`contribution-${cont.getAttribute("dataset-order") === "odd" ? "l" : "r"}-animation`);
        });
    }
}
exports.default = new contributionSection();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9mpeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class featureSectionView {
    _parentElement = document.querySelector(".feature-section");
    _feature = document.querySelectorAll(".fitur-website");
    _featureLine = document.querySelectorAll(".feature-line");
    _deviderWidthInit = 0;
    _lineObserver = new IntersectionObserver((entries)=>{
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains("top-line")) this._featureLine[0].style.width = "100%";
        if (entry.target.classList.contains("bottom-line")) this._featureLine[1].style.width = "100%";
        this._lineObserver.unobserve(entry.target);
    }, {
        root: null,
        threshold: 1
    });
    _sectionObersver = new IntersectionObserver((entries)=>{
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        let animationDelay = 0;
        this._feature.forEach((feature)=>{
            feature.style.animation = `bounceFeature 1s ${animationDelay}s 1 backwards`;
            animationDelay += 0.15;
        });
        this._sectionObersver.unobserve(entry.target);
    }, {
        root: null,
        threshold: 0.5
    });
    scrollAnimation() {
        this._featureLine.forEach((line)=>this._lineObserver.observe(line));
        this._sectionObersver.observe(this._parentElement);
    }
}
exports.default = new featureSectionView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7c15":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class jumbotronView {
    _parentElement = document.querySelector(".jumbotron");
    _loadingIndicator = document.querySelector(".loading-indicator");
    _prevNextButton = document.querySelectorAll(".prevnext-jumbotron-button");
    _imageIndex = 0;
    _loadingLineWidth = 0;
    _isAnimating = false;
    imageInterval(url) {
        setInterval(()=>{
            if (this._loadingLineWidth === 100) {
                this._loadingLineWidth = 0;
                this._changeImage("next", url);
            }
            if (!document.hidden && getComputedStyle(this._parentElement).opacity === "1") {
                this._loadingIndicator.style.width = `${this._loadingLineWidth++}vw`;
                this._prevNextButton.forEach((button)=>button.classList.replace("opacity-50", "opacity-0"));
            } else this._prevNextButton.forEach((button)=>button.classList.replace("opacity-0", "opacity-50"));
        }, 50);
    }
    prevnextHandler(url) {
        this._parentElement.addEventListener("click", (e)=>{
            const buttonClicked = e.target.closest(".prevnext-jumbotron-button");
            if (!buttonClicked) return;
            this._loadingLineWidth = 0;
            this._loadingIndicator.style.width = `${this._loadingLineWidth++}vw`;
            if (buttonClicked.classList.contains("left-0")) this._changeImage("prev", url);
            if (buttonClicked.classList.contains("right-0")) this._changeImage("next", url);
        });
    }
    textAnimation() {
        const jumbotronText = this._parentElement.querySelectorAll(".jumbotron-text");
        if (this._imageIndex === 0) {
            jumbotronText[1].children[0].style.transitionDuration = "1s";
            jumbotronText[1].children[1].style.transitionDuration = "0.5s";
            jumbotronText[1].children[0].classList.replace("second-title-animation", "opacity-0");
            jumbotronText[1].children[1].classList.replace("second-text-animation", "opacity-0");
            for(let i = 0; i < jumbotronText[2].children.length; i++){
                jumbotronText[2].children[i].style.transitionDuration = i === 0 ? "1s" : "0.5s";
                jumbotronText[2].children[i].classList.replace("third-text-animation", "opacity-0");
            // if (screen.width >= 1024) jumbotronText[2].children[i].classList.replace("third-text-animation", "opacity-0");
            // else jumbotronText[2].children[i].classList.replace((i === 0) ? 'second-title-animation' : 'second-text-animation', "opacity-0");
            }
            for(let i = 0; i < jumbotronText[0].children.length; i++){
                jumbotronText[0].children[i].style.transitionDuration = i === 0 ? "2s" : "1s";
                jumbotronText[0].children[i].classList.replace("opacity-0", "first-text-animation");
            // if (screen.width >= 1024) jumbotronText[0].children[i].classList.replace("opacity-0", "first-text-animation");
            // else jumbotronText[0].children[i].classList.replace('opacity-0', (i === 0) ? 'second-title-animation' : 'second-text-animation');
            }
        }
        if (this._imageIndex == 1) {
            for(let i = 0; i < jumbotronText[0].children.length; i++){
                jumbotronText[0].children[i].style.transitionDuration = i === 0 ? "1s" : "0.5s";
                jumbotronText[0].children[i].classList.replace("first-text-animation", "opacity-0");
            // if (screen.width >= 1024) jumbotronText[0].children[i].classList.replace("first-text-animation", "opacity-0");
            // else jumbotronText[0].children[i].classList.replace((i === 0) ? 'second-title-animation' : 'second-text-animation', "opacity-0");
            }
            for(let i = 0; i < jumbotronText[2].children.length; i++){
                jumbotronText[2].children[i].style.transitionDuration = i === 0 ? "1s" : "0.5s";
                jumbotronText[2].children[i].classList.replace("third-text-animation", "opacity-0");
            // if (screen.width >= 1024) jumbotronText[2].children[i].classList.replace("third-text-animation", "opacity-0");
            // else jumbotronText[2].children[i].classList.replace((i === 0) ? 'second-title-animation' : 'second-text-animation', "opacity-0");
            }
            jumbotronText[1].children[0].style.transitionDuration = "2s";
            jumbotronText[1].children[1].style.transitionDuration = "1s";
            jumbotronText[1].children[0].classList.replace("opacity-0", "second-title-animation");
            jumbotronText[1].children[1].classList.replace("opacity-0", "second-text-animation");
        }
        if (this._imageIndex === 2) {
            jumbotronText[1].children[0].style.transitionDuration = "1s";
            jumbotronText[1].children[1].style.transitionDuration = "0.5s";
            jumbotronText[1].children[0].classList.replace("second-title-animation", "opacity-0");
            jumbotronText[1].children[1].classList.replace("second-text-animation", "opacity-0");
            for(let i = 0; i < jumbotronText[0].children.length; i++){
                jumbotronText[0].children[i].style.transitionDuration = i === 0 ? "1s" : "0.5s";
                jumbotronText[0].children[i].classList.replace("first-text-animation", "opacity-0");
            // if (screen.width >= 1024) jumbotronText[0].children[i].classList.replace("first-text-animation", "opacity-0");
            // else jumbotronText[0].children[i].classList.replace((i === 0) ? 'second-title-animation' : 'second-text-animation', "opacity-0");
            }
            for(let i = 0; i < jumbotronText[2].children.length; i++){
                jumbotronText[2].children[i].style.transitionDuration = i === 0 ? "2s" : "1s";
                jumbotronText[2].children[i].classList.replace("opacity-0", "third-text-animation");
            // if (screen.width >= 1024) jumbotronText[2].children[i].classList.replace("opacity-0", "third-text-animation");
            // else jumbotronText[2].children[i].classList.replace('opacity-0', (i === 0) ? 'second-title-animation' : 'second-text-animation');
            }
        }
    }
    _changeImage(changeTo, url) {
        if (this._isAnimating === true) return;
        if (changeTo === "prev") this._imageIndex === 0 ? this._imageIndex = url.length - 1 : this._imageIndex--;
        else if (changeTo === "next") this._imageIndex === url.length - 1 ? this._imageIndex = 0 : this._imageIndex++;
        else console.log("Fungsi _changeImage mengharapkan parameter 'next' atau 'prev' ");
        this._isAnimating = true;
        this._parentElement.style.backgroundImage = `url(${url[this._imageIndex]})`;
        this.textAnimation();
        setTimeout(()=>{
            this._isAnimating = false;
        }, 2000);
    }
}
exports.default = new jumbotronView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dkYPG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    mainImageUrl: [
        "./assets/img/mainimage.png",
        "./assets/img/mainimage2.jpeg",
        "./assets/img/mainimage3.png"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ffSDh","9Kkde"], "9Kkde", "parcelRequire5591")

//# sourceMappingURL=index.f67fa42f.js.map
