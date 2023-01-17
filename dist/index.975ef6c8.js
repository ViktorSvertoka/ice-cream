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
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
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
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
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
function hmrApply(bundle, asset) {
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
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"8lqZg":[function(require,module,exports) {
var _gallery = require("./js/gallery");
var _modal = require("./js/modal");
var _slider = require("./js/slider");
var _franchise = require("./js/franchise");
var _headerModal = require("./js/header-modal");
var _swipeUp = require("./js/swipe-up");
var _productsModalGreen = require("./js/products-modal-green");
var _productsModalCoffee = require("./js/products-modal-coffee");
var _productsModalMilkshakes = require("./js/products-modal-milkshakes");
var _products = require("./js/products");
var _telValidator = require("./js/tel-validator");
var _anchor = require("./js/anchor");

},{"./js/gallery":"iXSQ6","./js/modal":"aHHgN","./js/slider":"aMYz0","./js/franchise":"lge5k","./js/header-modal":"1Gah7","./js/swipe-up":"bL31l","./js/products-modal-green":"dXekv","./js/products-modal-coffee":"bFonn","./js/products-modal-milkshakes":"lUR0t","./js/products":"do2fR","./js/tel-validator":"lxl8P","./js/anchor":"9Z7n4"}],"iXSQ6":[function(require,module,exports) {
let slideIndex = 0;
carousel();
function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for(i = 0; i < x.length; i++)x[i].style.display = "none";
    slideIndex++;
    if (slideIndex > x.length) slideIndex = 1;
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); //Change image every 3 seconds
}

},{}],"aHHgN":[function(require,module,exports) {
!function(e1) {
    "function" != typeof e1.matches && (e1.matches = e1.msMatchesSelector || e1.mozMatchesSelector || e1.webkitMatchesSelector || function(e) {
        for(var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n;
        return Boolean(o[n]);
    }), "function" != typeof e1.closest && (e1.closest = function(e) {
        for(var t = this; t && 1 === t.nodeType;){
            if (t.matches(e)) return t;
            t = t.parentNode;
        }
        return null;
    });
}(window.Element.prototype);
document.addEventListener("DOMContentLoaded", function() {
    /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/ var modalButtons = document.querySelectorAll(".js-open-modal"), overlay = document.querySelector(".js-overlay-modal"), closeButtons = document.querySelectorAll(".js-modal-close");
    /* Перебираем массив кнопок */ modalButtons.forEach(function(item) {
        /* Назначаем каждой кнопке обработчик клика */ item.addEventListener("click", function(e) {
            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */ e.preventDefault();
            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */ var modalId = this.getAttribute("data-modal"), modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */ modalElem.classList.add("active");
            overlay.classList.add("active");
        }); // end click
    }); // end foreach
    closeButtons.forEach(function(item) {
        item.addEventListener("click", function(e) {
            var parentModal = this.closest(".modal");
            parentModal.classList.remove("active");
            overlay.classList.remove("active");
        });
    }); // end foreach
    document.body.addEventListener("keyup", function(e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector(".modal.active").classList.remove("active");
            document.querySelector(".overlay").classList.remove("active");
        }
    }, false);
    overlay.addEventListener("click", function() {
        document.querySelector(".modal.active").classList.remove("active");
        this.classList.remove("active");
    });
}); // end ready

},{}],"aMYz0":[function(require,module,exports) {
(()=>{
    function swiperSlider() {
        const heroMain = document.querySelectorAll('[data-slider="team-slider"]');
        if (heroMain) heroMain.forEach((slider)=>{
            let pagination = slider.querySelector(".swiper-pagination");
            swiper = new Swiper(slider.querySelector(".swiper"), {
                speed: 1500,
                centeredSlides: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: pagination,
                    clickable: true,
                    renderBullet: function(index, className) {
                        return '<li class="' + className + '"></li>';
                    }
                },
                on: {
                    transitionStart: function() {
                        let previousIndex = this.previousIndex;
                        let previousSlide = slider.getElementsByClassName("swiper-slide")[previousIndex];
                        if (previousSlide) setTimeout(function() {
                            previousSlide.classList.remove("is-play");
                        }, 1000);
                    },
                    transitionEnd: function() {
                        let activeIndex = this.activeIndex;
                        let activeSlide = slider.getElementsByClassName("swiper-slide")[activeIndex];
                        activeSlide.classList.add("is-play");
                    }
                }
            });
        });
    }
    window.addEventListener("load", swiperSlider, false);
})();

},{}],"lge5k":[function(require,module,exports) {
var inputs = [].slice.call(document.querySelectorAll(".franchise-js")), button = document.querySelector(".franchise-button-js");
inputs.forEach(function(el) {
    el.addEventListener("input", checkInputs, false);
});
function checkInputs() {
    var empty = inputs.filter(function(el) {
        return el.value.trim() === "";
    }).length;
    button.disabled = empty !== 0;
}
checkInputs();

},{}],"1Gah7":[function(require,module,exports) {
var inputs = [].slice.call(document.querySelectorAll(".buynow-js")), button = document.querySelector(".buynow-button-js");
inputs.forEach(function(el) {
    el.addEventListener("input", checkInputs, false);
});
function checkInputs() {
    var empty = inputs.filter(function(el) {
        return el.value.trim() === "";
    }).length;
    button.disabled = empty !== 0;
}
checkInputs();

},{}],"bL31l":[function(require,module,exports) {
document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.1;
    if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) //show button
    scrollToTopBtn.style.display = "block";
    else //hide button
    scrollToTopBtn.style.display = "none";
}
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

},{}],"dXekv":[function(require,module,exports) {
var inputs = [].slice.call(document.querySelectorAll(".products-green-js")), button = document.querySelector(".products-button-green-js");
inputs.forEach(function(el) {
    el.addEventListener("input", checkInputs, false);
});
function checkInputs() {
    var empty = inputs.filter(function(el) {
        return el.value.trim() === "";
    }).length;
    button.disabled = empty !== 0;
}
checkInputs();

},{}],"bFonn":[function(require,module,exports) {
var inputs = [].slice.call(document.querySelectorAll(".products-coffee-js")), button = document.querySelector(".products-button-coffee-js");
inputs.forEach(function(el) {
    el.addEventListener("input", checkInputs, false);
});
function checkInputs() {
    var empty = inputs.filter(function(el) {
        return el.value.trim() === "";
    }).length;
    button.disabled = empty !== 0;
}
checkInputs();

},{}],"lUR0t":[function(require,module,exports) {
var inputs = [].slice.call(document.querySelectorAll(".products-milkshakes-js")), button = document.querySelector(".products-button-milkshakes-js");
inputs.forEach(function(el) {
    el.addEventListener("input", checkInputs, false);
});
function checkInputs() {
    var empty = inputs.filter(function(el) {
        return el.value.trim() === "";
    }).length;
    button.disabled = empty !== 0;
}
checkInputs();

},{}],"do2fR":[function(require,module,exports) {
let wh = window.innerHeight;
let tolCard = wh * 0.7; //  scroll tolerance - eg. 70% from page top
let tolAbout = wh * 0.5; //  scroll tolerance - eg. 10% from page top
const inViewport = (elem, pix, cls)=>{
    if (document.getElementsByClassName(elem).length > 0) {
        let elems = document.getElementsByClassName(elem);
        const check = ()=>{
            for(let i = 0; i < elems.length; i++){
                let off = elems[i].getBoundingClientRect().top;
                if (off <= pix) elems[i].classList.add(cls);
                else elems[i].classList.remove(cls);
            }
            requestAnimationFrame(check);
        };
        requestAnimationFrame(check);
    }
};
inViewport("about__img", tolAbout, "in-viewport");
inViewport("products__item--green", tolCard, "in-viewport");
inViewport("products__item--coffee", tolCard, "in-viewport");
inViewport("products__item--milkshakes", tolCard, "in-viewport");

},{}],"lxl8P":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", ()=>{
    for (const el of document.querySelectorAll("[placeholder][data-slots]")){
        const pattern = el.getAttribute("placeholder"), slots = new Set(el.dataset.slots || "_"), prev = ((j)=>Array.from(pattern, (c, i)=>slots.has(c) ? j = i + 1 : j))(0), first = [
            ...pattern
        ].findIndex((c)=>slots.has(c)), accept = new RegExp(el.dataset.accept || "\\d", "g"), clean = (input)=>{
            input = input.match(accept) || [];
            return Array.from(pattern, (c)=>input[0] === c || slots.has(c) ? input.shift() || c : c);
        }, format = ()=>{
            const [i1, j] = [
                el.selectionStart,
                el.selectionEnd
            ].map((i)=>{
                i = clean(el.value.slice(0, i)).findIndex((c)=>slots.has(c));
                return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
            });
            el.value = clean(el.value).join``;
            el.setSelectionRange(i1, j);
            back = false;
        };
        let back = false;
        el.addEventListener("keydown", (e)=>back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", ()=>el.value === pattern && (el.value = ""));
    }
});

},{}],"9Z7n4":[function(require,module,exports) {
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors)anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

},{}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
