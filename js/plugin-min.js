;
window.Modernizr = function(a, b, c) {
    function C(a) {
        j.cssText = a
    }
    function D(a, b) {
        return C(n.join(a + ";") + (b || ""))
    }
    function E(a, b) {
        return typeof a === b
    }
    function F(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function G(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!F(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function H(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d===!1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function I(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
    }
    function J() {
        e.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++)
                u[c[d]] = c[d]in k;
            return u.list && (u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement), u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++)
                k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity()===!1 : e = k.value != l)), t[a[d]]=!!e;
            return t
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.8.3", e = {}, f=!0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
        svg: "http://www.w3.org/2000/svg"
    }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, z = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"), d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    }(), A = {}.hasOwnProperty, B;
    !E(A, "undefined")&&!E(A.call, "undefined") ? B = function(a, b) {
        return A.call(a, b)
    } : B = function(a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = w.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(w.call(arguments)))
        };
        return e
    }), s.flexbox = function() {
        return I("flexWrap")
    }, s.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext&&!!a.getContext("2d")
    }, s.canvastext = function() {
        return !!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText, "function")
    }, s.webgl = function() {
        return !!a.WebGLRenderingContext
    }, s.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c=!0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }), c
    }, s.geolocation = function() {
        return "geolocation"in navigator
    }, s.postmessage = function() {
        return !!a.postMessage
    }, s.websqldatabase = function() {
        return !!a.openDatabase
    }, s.indexedDB = function() {
        return !!I("indexedDB", a)
    }, s.hashchange = function() {
        return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, s.history = function() {
        return !!a.history&&!!history.pushState
    }, s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable"in a || "ondragstart"in a && "ondrop"in a
    }, s.websockets = function() {
        return "WebSocket"in a || "MozWebSocket"in a
    }, s.rgba = function() {
        return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
    }, s.hsla = function() {
        return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
    }, s.multiplebgs = function() {
        return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, s.backgroundsize = function() {
        return I("backgroundSize")
    }, s.borderimage = function() {
        return I("borderImage")
    }, s.borderradius = function() {
        return I("borderRadius")
    }, s.boxshadow = function() {
        return I("boxShadow")
    }, s.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }, s.opacity = function() {
        return D("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function() {
        return I("animationName")
    }, s.csscolumns = function() {
        return I("columnCount")
    }, s.cssgradients = function() {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, - a.length)), F(j.backgroundImage, "gradient")
    }, s.cssreflections = function() {
        return I("boxReflect")
    }, s.csstransforms = function() {
        return !!I("transform")
    }, s.csstransforms3d = function() {
        var a=!!I("perspective");
        return a && "webkitPerspective"in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, s.csstransitions = function() {
        return I("transition")
    }, s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText: f.cssText || "": "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }), a
    }, s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }), a
    }, s.video = function() {
        var a = b.createElement("video"), c=!1;
        try {
            if (c=!!a.canPlayType)
                c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return c
    }, s.audio = function() {
        var a = b.createElement("audio"), c=!1;
        try {
            if (c=!!a.canPlayType)
                c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {}
        return c
    }, s.localstorage = function() {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.webworkers = function() {
        return !!a.Worker
    }, s.applicationcache = function() {
        return !!a.applicationCache
    }, s.svg = function() {
        return !!b.createElementNS&&!!b.createElementNS(r.svg, "svg").createSVGRect
    }, s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }, s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }, s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    };
    for (var K in s)
        B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
    return e.input || J(), e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                B(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, C(""), i = k = null, function(a, b) {
        function l(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }
        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function n(a) {
            var b = j[a[h]];
            return b || (b = {}, i++, a[h] = i, j[i] = b), b
        }
        function o(a, c, d) {
            c || (c = b);
            if (k)
                return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren&&!e.test(a)&&!g.tagUrn ? d.frag.appendChild(g) : g
        }
        function p(a, c) {
            a || (a = b);
            if (k)
                return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function q(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS&&!g&&!c.hasCSS && (c.hasCSS=!!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
        }
        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                g=!0, k=!0
            }
        })();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS!==!1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods!==!1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s, r(b)
    }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) {
        return G([a])
    }, e.testAllProps = I, e.testStyles = y, e.prefixed = function(a, b, c) {
        return b ? I(a, b, c) : I(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
}(this, this.document), function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r&&!!b.createRange().compareNode, t = s ? l: n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l=!!b.attachEvent&&!l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }, x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]), a
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec=!0 : y[i.url] = 1, f.load(i.url, i.forceCSS ||!i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                                return b
                            }(), a)
                                a.hasOwnProperty(n) && (!c&&!--m && (d(j) ? j = function() {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l()
                                } : j[n] = function(a) {
                                    return function() {
                                        var b = [].slice.call(arguments);
                                        a && a.apply(this, b), l()
                                    }
                                }(k[n])), g(a[n], j, b, n, h))
                } else 
                    !c && l()
            }
            var h=!!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else 
            Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
        z[a] = b
    }, B.addFilter = function(a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function() {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h: c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};; /*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function(a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length, c =+ a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j=!1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e=!1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a)?!1 : a.constructor&&!j.call(a.constructor.prototype, "isPrototypeOf")?!1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d===!1)
                            break
                } else 
                    for (e in a)
                        if (d = b.apply(a[e], c), d===!1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d===!1)
                        break
            } else 
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d===!1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b?-1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c =+ b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h=!c; g > f; f++)
                d=!b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else 
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a)?!1 : 1 === a.nodeType && b?!0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" +- new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l=!0), 0
        }, C = "undefined", D = 1<<31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return - 1
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d>>10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p&&!e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h ||!h.parentNode)
                                return d;
                                if (h.id === j)
                                    return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h), d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)), d;
                            if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                                return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q ||!q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u]=!0, a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return - 1;
            return a ? 1 : - 1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b =+ b, hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e]=!(d[e] = c[e]))
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a: v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p=!f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName ||!e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a, d = b && b.parentNode;
                return a === d ||!(!d || 1 !== d.nodeType ||!(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b)
                    return l=!0, 0;
                var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d ||!c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a)?-1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d?-1 : 1)
            } : function(a, b) {
                if (a === b)
                    return l=!0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f ||!g)
                    return a === e?-1 : b === e ? 1 : f?-1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v?-1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector ||!p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p): void 0;
            return void 0 !== f ? f : c.attributes ||!p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l=!c.detectDuplicates, k=!c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                    } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else 
                while (b = a[d++])
                    c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] =+ (a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] =+ (a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c=!a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c)>-1 : "$=" === b ? c && e.slice( - c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c)>-1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice( - 4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s=!i&&!h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a&&!o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l=++n && l && l[p] || (m = n = 0) || o.pop()
                                    )if (1 === l.nodeType&&++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else 
                                while (l=++n && l && l[p] || (m = n = 0) || o.pop()
                                    )if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)&&++m && (s && ((l[u] || (l[u] = {})
                                )[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m%d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]), a[d]=!(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h]=!(b[h] = f))
                        }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has : hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }), contains : hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a)>-1
                    }
                }), lang : hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function(b) {
                        var c;
                        do 
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target : function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function(a) {
                    return a === o
                }, focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus())&&!!(a.type || a.href||~a.tabIndex)
                }, enabled: function(a) {
                    return a.disabled===!1
                }, disabled: function(a) {
                    return a.disabled===!0
                }, checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b&&!!a.checked || "option" === b&&!!a.selected
                }, selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected===!0
                }, empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                }, parent: function(a) {
                    return !d.pseudos.empty(a)
                }, header: function(a) {
                    return Z.test(a.nodeName)
                }, input: function(a) {
                    return Y.test(a.nodeName)
                }, button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: nb(function() {
                    return [0]
                }), last : nb(function(a, b) {
                    return [b - 1]
                }), eq : nb(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }), even : nb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }), odd : nb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }), lt : nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a
                }), gt : nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq; for (b in{
            radio : !0, checkbox : !0, file : !0, password : !0, image : !0
        })d.pseudos[b] = lb(b);
        for (b in{
            submit: !0,
            reset: !0
        })d.pseudos[b] = mb(b);
        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c=!1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g]&&!(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else 
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g))
                                    return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) 
                && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d&&!d[u] && (d = vb(d)), e&&!e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q=!a ||!f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]]=!(q[n[k]] = l))
                    }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k])>-1 && (f[j]=!(g[j] = l))
                        }
                } else 
                    r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
                })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a)>-1
            }, h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e=++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                                return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                                    value: " " === a[i - 2].type ? "*": ""
                                })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                            }
                            m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1: Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l=!o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k&&!f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o=!f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)
                            return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates=!!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b]===!0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/; function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                        }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c ||!c[1] && b)
                return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                    for (c in b)
                        n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                        d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c)>-1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c]=!0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i=!a.once && [], j = function(l) {
            for (b = a.memory && l, c=!0, g = e || 0, e = 0, f = h.length, d=!0; h && f > g; g++)
                if (h[g].apply(l[0], l[1])===!1 && a.stopOnFalse) {
                    b=!1;
                    break
                }
            d=!1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c))>-1)
                        h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            },
            has: function(a) {
                return a ? n.inArray(a, h)>-1 : !(!h ||!h.length)
            },
            empty: function() {
                return h = [], f = 0, this
            },
            disable: function() {
                return h = i = b = void 0, this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0, b || k.disable(), this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, b) {
                return !h || c&&!i || (b = b || [], b = [a, b.slice ? b.slice(): b], d ? i.push(b) : j(b)), this
            },
            fire: function() {
                return k.fireWith(this, arguments), this
            },
            fired: function() {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1^a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e: 0, g = 1 === f ? a: n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a===!0?--n.readyWait : n.isReady) || (n.isReady=!0, a!==!0&&--n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e=!0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e=!0, n.isFunction(d) || (g=!0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c)
        })), b))for (; i > h; h++)
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType||!+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + Math.random()
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else 
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c?!0 : "false" === c?!1 : "null" === c ? null : + c + "" === c?+c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else 
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType&&!L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)
                        return c;
                    if (c = M.get(f, d), void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0), void 0 !== c)
                        return c
                } else 
                    this.each(function() {
                        var c = M.get(this, d);
                        M.set(this, d, b), - 1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)
                c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") ||!n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin"in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0
    }
    function $() {
        return !1
    }
    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g)!==!1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o]=!0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--)
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h&&!h.test(k.namespace) || d && d !== k.selector && ("**" !== d ||!k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g&&!m.length && (l.teardown && l.teardown.call(a, p, r.handle)!==!1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else 
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type: b, r = j.call(b, "namespace") ? b.namespace.split("."): [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType&&!X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e ||!o.trigger || o.trigger.apply(d, c)!==!1)
                ) {
                if (!e&&!o.noBubble&&!n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++])&&!b.isPropagationStopped())
                    b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result===!1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c)!==!1 ||!n.acceptData(d) || k && n.isFunction(d[q])&&!n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a)!==!1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++])&&!a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e)===!1 && (a.preventDefault(), a.stopPropagation())
                        )
                    }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled!==!0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue===!1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando]=!0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d&&!n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d===!1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b===!1 || "function" == typeof b) && (c = b, b = void 0), c===!1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
                    }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*"): a.querySelectorAll ? a.querySelectorAll(b || "*"): [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
                    pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
                        nb(f[d], g[d]);
                else 
                    nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                        f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                        while (j--)
                            f = f.lastChild;
                            n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else 
                        l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d||-1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++])
                        fb.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a?!1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a&&!db.test(a)&&!ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p&&!k.checkClone && eb.test(p))
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
                    h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)
                        h = f[j], fb.test(h.type || "")&&!L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display: n.css(e[0], "display");
        return e.detach(), f
    }
    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }
    var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b=!parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Eb = ["Webkit", "O", "Moz", "ms"];
    function Fb(a, b) {
        if (b in a)
            return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--)
            if (b = Eb[e] + c, b in a)
                return b;
        return d
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }
    function Ib(a, b, c) {
        var d=!0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get"in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c===!0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f&&+d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g =+ d || 1;
                do 
                    h = h || ".5", g/=h, n.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h&&--i)
                }
            return e && (g = c.start =+ g||+d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : + e[2]), c
        }
        ]
    };
    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = n.now()
    }
    function Tb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1: 0;
        4 > d;
        d += 2 - b)c = R[d],
        e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e ||!q || void 0 === q[d])
                        continue;
                        p=!0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else 
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden=!p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else 
                b[d] = e
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length: 0;
                if (e)
                    return this;
                for (e=!0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing);
        g > f;
        f++)if (d = Qb[f].call(j, a, k, j.opts))
            return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a): {
            complete: c ||!c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b&&!n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue===!0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue===!1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a!==!1 && this.queue(a || "fx", []), this.each(function() {
                var b=!0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else 
                    for (e in g)
                        g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b=!1, f.splice(e, 1));
                (b ||!c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a!==!1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length: 0;
                for (c.finish=!0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled=!0, k.optDisabled=!c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d]=!1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b===!1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g ||!n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : - 1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === U || "boolean" === c) 
                    && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a===!1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f)
                                return b;
                                g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c=!0);
                    return c || (a.selectedIndex =- 1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = l.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function sc(a, b, c, d) {
        var e = {}, f = a === oc;
        function g(h) {
            var i;
            return e[h]=!0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f?!(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) ||!e["*"] && g("*")
    }
    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }
    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g===!0 ? g = j[e] : j[e]!==!0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                            if (g!==!0)
                                if (g && a["throws"])
                                    b = g(b);
                                else 
                                    try {
                                        b = g(b)
                                    } catch (l) {
                                        return {
                                            state: "parsererror",
                                            error: g ? l: "No conversion from " + i + " to " + f
                                        }
                                    }
                                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l): n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = ic.exec(e))
                                f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else 
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain=!(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)
                return v;
            i = k.global, i && 0 === n.active++&&n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent=!kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache===!1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType!==!1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k)===!1 || 2 === t))
                return v.abort();
            u = "abort";
            for (j in{
                success: 1,
                error: 1,
                complete: 1
            })
                v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x( - 1, w)
                }
            } else 
                x( - 1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j=!s)) : (s = x, (a ||!x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r: s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else 
            for (e in b)
                Bc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery&&!n.isPlainObject(a)
            )n.each(a, function() {
            e(this.name, this.value)
        });
        else 
            for (c in a)
                Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name&&!n(this).is(":disabled") && Ac.test(this.nodeName)&&!zc.test(a) && (this.checked ||!T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(yc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cc = 0, Dc = {}, Ec = {
        0: 200,
        1223: 204
    }, Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Dc)
            Dc[a]()
    }), k.cors=!!Fc && "withCredentials"in Fc, k.ajax = Fc=!!Fc, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Fc&&!a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g=++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache=!1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || n.expando + "_" + cc++;
            return this[a]=!0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp!==!1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data&&!(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp!==!1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b=!1), b = b || l;
        var d = v.exec(a), e=!c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Ic = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;
    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto")>-1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Jc;
                while (a&&!n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Jc
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d===!0 || e===!0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Lc = a.jQuery, Mc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
; /*!
 * Materialize v0.97.1 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b/=e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
        return - d * (b/=e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return (b/=e / 2) < 1 ? d / 2 * b * b + c : - d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b/=e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return (b/=e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b/=e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
        return - d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return (b/=e / 2) < 1 ? d / 2 * b * b * b * b + c : - d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b/=e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return (b/=e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
        return - d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
        return - d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * ( - Math.pow(2, - 10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b/=e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * ( - Math.pow(2, - 10*--b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
        return - d * (Math.sqrt(1 - (b/=e) * b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return (b/=e / 2) < 1?-d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (1 == (b/=e))
            return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else 
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return - (h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (1 == (b/=e))
            return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else 
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, - 10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (2 == (b/=e / 2))
            return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else 
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b?-.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, - 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b/=e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b/=e / 2) < 1 ? d / 2 * b * b * (((f*=1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f*=1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b/=e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
}), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(a, b, c, d, e) {
        return (b/=e / 2) < 1 ? d / 2 * b * b + c : d / 4 * ((b -= 2) * b * b + 2) + c
    }
}), !function(a) {
    function b(a) {
        var b = a.length, d = c.type(a);
        return "function" === d || c.isWindow(a)?!1 : 1 === a.nodeType && b?!0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    if (!a.jQuery) {
        var c = function(a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function(a) {
            return null != a && a == a.window
        }, c.type = function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
        }, c.isArray = Array.isArray || function(a) {
            return "array" === c.type(a)
        }, c.isPlainObject = function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a))
                return !1;
            try {
                if (a.constructor&&!f.call(a, "constructor")&&!f.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (d) {
                return !1
            }
            for (b in a);
            return void 0 === b || f.call(a, b)
        }, c.each = function(a, c, d) {
            var e, f = 0, g = a.length, h = b(a);
            if (d) {
                if (h)
                    for (; g > f && (e = c.apply(a[f], d), e!==!1); f++);
                else 
                    for (f in a)
                        if (e = c.apply(a[f], d), e===!1)
                            break
            } else if (h)
                for (; g > f && (e = c.call(a[f], f, a[f]), e!==!1); f++);
            else 
                for (f in a)
                    if (e = c.call(a[f], f, a[f]), e===!1)
                        break;
            return a
        }, c.data = function(a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando], g = f && d[f];
                if (void 0 === b)
                    return g;
                if (g && b in g)
                    return g[b]
            } else if (void 0 !== b) {
                var f = a[c.expando] || (a[c.expando]=++c.uuid);
                return d[f] = d[f] || {}, d[f][b] = e, e
            }
        }, c.removeData = function(a, b) {
            var e = a[c.expando], f = e && d[e];
            f && c.each(b, function(a, b) {
                delete f[b]
            })
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k=!1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                if (null != (f = arguments[i]))
                    for (e in f)
                        a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b=!1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
            return h
        }, c.queue = function(a, d, e) {
            function f(a, c) {
                var d = c || [];
                return null != a && (b(Object(a))?!function(a, b) {
                    for (var c =+ b.length, d = 0, e = a.length; c > d;)
                        a[e++] = b[d++];
                    if (c !== c)
                        for (; void 0 !== b[d];)
                            a[e++] = b[d++];
                    return a.length = e, a
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }
            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [a] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b), f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            init: function(a) {
                if (a.nodeType)
                    return this[0] = a, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect(): {
                    top: 0,
                    left: 0
                };
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function a() {
                    for (var a = this.offsetParent || document; a && "html"===!a.nodeType.toLowerCase && "static" === a.style.position;)
                        a = a.offsetParent;
                    return a || document
                }
                var b = this[0], a = a.apply(b), d = this.offset(), e = /^(?:body|html)$/i.test(a.nodeName) ? {
                    top: 0,
                    left: 0
                }
                : c(a).offset();
                return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++)
            e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {
            Utilities: c
        }
    }
}(window), function(a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
    return function(a, b, c, d) {
        function e(a) {
            for (var b =- 1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }
        function f(a) {
            return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
        }
        function g(a) {
            var b = m.data(a, "velocity");
            return null === b ? d : b
        }
        function h(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a)
            }
        }
        function i(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }
            function g(a, b) {
                return 3 * b - 6 * a
            }
            function h(a) {
                return 3 * a
            }
            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }
            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }
            function k(b, c) {
                for (var e = 0; p > e; ++e) {
                    var f = j(c, a, d);
                    if (0 === f)
                        return c;
                    var g = i(c, a, d) - b;
                    c -= g / f
                }
                return c
            }
            function l() {
                for (var b = 0; t > b; ++b)
                    x[b] = i(b * u, a, d)
            }
            function m(b, c, e) {
                var f, g, h = 0;
                do 
                    g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g;
                while (Math.abs(f) > r&&++h < s);
                return g
            }
            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e)
                    c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]), h = c + g * u, i = j(h, a, d);
                return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
            }
            function o() {
                y=!0, (a != c || d != e) && l()
            }
            var p = 4, q = .001, r = 1e-7, s = 10, t = 11, u = 1 / (t - 1), v = "Float32Array"in b;
            if (4 !== arguments.length)
                return !1;
            for (var w = 0; 4 > w; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) ||!isFinite(arguments[w]))
                    return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t): new Array(t), y=!1, z = function(b) {
                return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
            };
            z.getControlPoints = function() {
                return [{
                    x: a,
                    y: c
                }, {
                    x: d,
                    y: e
                }
                ]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function() {
                return A
            }, z
        }
        function j(a, b) {
            var c = a;
            return p.isString(a) ? t.Easings[a] || (c=!1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : p.isArray(a) && 4 === a.length ? i.apply(null, a) : !1, c===!1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
        }
        function k(a) {
            if (a) {
                var b = (new Date).getTime(), c = t.State.calls.length;
                c > 1e4 && (t.State.calls = e(t.State.calls));
                for (var f = 0; c > f; f++)
                    if (t.State.calls[f]) {
                        var h = t.State.calls[f], i = h[0], j = h[2], n = h[3], o=!!n, q = null;
                        n || (n = t.State.calls[f][3] = b - 16);
                        for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
                            var w = i[s], y = w.element;
                            if (g(y)) {
                                var z=!1;
                                if (j.display !== d && null !== j.display && "none" !== j.display) {
                                    if ("flex" === j.display) {
                                        var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        m.each(A, function(a, b) {
                                            v.setPropertyValue(y, "display", b)
                                        })
                                    }
                                    v.setPropertyValue(y, "display", j.display)
                                }
                                j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
                                for (var B in w)
                                    if ("element" !== B) {
                                        var C, D = w[B], E = p.isString(D.easing) ? t.Easings[D.easing]: D.easing;
                                        if (1 === r)
                                            C = D.endValue;
                                        else {
                                            var F = D.endValue - D.startValue;
                                            if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue)
                                                continue
                                        }
                                        if (D.currentValue = C, "tween" === B)
                                            q = C;
                                        else {
                                            if (v.Hooks.registered[B]) {
                                                var G = v.Hooks.getRoot(B), H = g(y).rootPropertyValueCache[G];
                                                H && (D.rootPropertyValue = H)
                                            }
                                            var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                            v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z=!0)
                                        }
                                    }
                                    j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z=!0), z && v.flushTransformCache(y)
                                }
                            }
                            j.display !== d && "none" !== j.display && (t.State.calls[f][2].display=!1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility=!1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
                        }
                }
            t.State.isTicking && x(k)
        }
        function l(a, b) {
            if (!t.State.calls[a])
                return !1;
            for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i=!1, j = 0, k = c.length; k > j; j++) {
                var l = c[j].element;
                if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop!==!0 && (m.queue(l)[1] === d ||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                    g(l).isAnimating=!1, g(l).rootPropertyValueCache = {};
                    var n=!1;
                    m.each(v.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1: 0, e = g(l).transformCache[b];
                        g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n=!0, delete g(l).transformCache[b])
                    }), f.mobileHA && (n=!0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete&&!f.loop && j === k - 1)
                    try {
                        f.complete.call(e, e)
                    } catch (o) {
                    setTimeout(function() {
                        throw o
                    }, 1)
                }
                h && f.loop!==!0 && h(e), g(l) && f.loop===!0&&!b && (m.each(g(l).tweensContainer, function(a, b) {
                    /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                }), t(l, "reverse", {
                    loop: !0,
                    delay: f.delay
                })), f.queue!==!1 && m.dequeue(l, f.queue)
            }
            t.State.calls[a]=!1;
            for (var p = 0, q = t.State.calls.length; q > p; p++)
                if (t.State.calls[p]!==!1) {
                    i=!0;
                    break
                }
            i===!1 && (t.State.isTicking=!1, delete t.State.calls, t.State.calls = [])
        }
        var m, n = function() {
            if (c.documentMode)
                return c.documentMode;
            for (var a = 7; a > 4; a--) {
                var b = c.createElement("div");
                if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length)
                    return b = null, a
            }
            return d
        }(), o = function() {
            var a = 0;
            return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                var c, d = (new Date).getTime();
                return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                    b(d + c)
                }, c)
            }
        }(), p = {
            isString: function(a) {
                return "string" == typeof a
            },
            isArray: Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            isFunction: function(a) {
                return "[object Function]" === Object.prototype.toString.call(a)
            },
            isNode: function(a) {
                return a && a.nodeType
            },
            isNodeList: function(a) {
                return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
            },
            isWrapped: function(a) {
                return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
            },
            isSVG: function(a) {
                return b.SVGElement && a instanceof b.SVGElement
            },
            isEmptyObject: function(a) {
                for (var b in a)
                    return !1;
                return !0
            }
        }, q=!1;
        if (a.fn && a.fn.jquery ? (m = a, q=!0) : m = b.Velocity.Utilities, 8 >= n&&!q)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= n)
            return void(jQuery.fn.velocity = jQuery.fn.animate);
        var r = 400, s = "swing", t = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: b.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: c.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: m,
            Redirects: {},
            Easings: {},
            Promise: b.Promise,
            defaults: {
                queue: "",
                duration: r,
                easing: s,
                begin: d,
                complete: d,
                progress: d,
                display: d,
                visibility: d,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(a) {
                m.data(a, "velocity", {
                    isSVG: p.isSVG(a),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {
                major: 1,
                minor: 2,
                patch: 2
            },
            debug: !1
        };
        b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
        var u = function() {
            function a(a) {
                return - a.tension * a.x - a.friction * a.v
            }
            function b(b, c, d) {
                var e = {
                    x: b.x + d.dx * c,
                    v: b.v + d.dv * c,
                    tension: b.tension,
                    friction: b.friction
                };
                return {
                    dx: e.v,
                    dv: a(e)
                }
            }
            function c(c, d) {
                var e = {
                    dx: c.v,
                    dv: a(c)
                }, f = b(c, .5 * d, e), g = b(c, .5 * d, f), h = b(c, d, g), i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx), j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }
            return function d(a, b, e) {
                var f, g, h, i = {
                    x: - 1,
                    v: 0,
                    tension: null,
                    friction: null
                }, j = [0], k = 0, l = 1e-4, m = .016;
                for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
                return f ? function(a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        t.Easings = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            spring: function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6*-a)
            }
        }, m.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(a, b) {
            t.Easings[b[0]] = i.apply(null, b[1])
        });
        var v = t.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var a = 0; a < v.Lists.colors.length; a++) {
                        var b = "color" === v.Lists.colors[a] ? "0 0 0 1": "255 255 255 1";
                        v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (n)
                        for (c in v.Hooks.templates) {
                            d = v.Hooks.templates[c], e = d[0].split(" ");
                            var f = d[1].match(v.RegEx.valueSplit);
                            "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                        }
                    for (c in v.Hooks.templates) {
                        d = v.Hooks.templates[c], e = d[0].split(" ");
                        for (var a in e) {
                            var g = c + e[a], h = a;
                            v.Hooks.registered[g] = [c, h]
                        }
                    }
                },
                getRoot: function(a) {
                    var b = v.Hooks.registered[a];
                    return b ? b[0] : a
                },
                cleanRootPropertyValue: function(a, b) {
                    return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
                },
                extractValue: function(a, b) {
                    var c = v.Hooks.registered[a];
                    if (c) {
                        var d = c[0], e = c[1];
                        return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
                    }
                    return b
                },
                injectValue: function(a, b, c) {
                    var d = v.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0], h = d[1];
                        return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function(a, b, c) {
                        switch (a) {
                        case"name":
                            return "clip";
                        case"extract":
                            var d;
                            return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                        case"inject":
                            return "rect(" + c + ")"
                        }
                    },
                    blur: function(a, b, c) {
                        switch (a) {
                        case"name":
                            return t.State.isFirefox ? "filter" : "-webkit-filter";
                        case"extract":
                            var d = parseFloat(c);
                            if (!d && 0 !== d) {
                                var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                d = e ? e[1] : 0
                            }
                            return d;
                        case"inject":
                            return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    },
                    opacity: function(a, b, c) {
                        if (8 >= n)
                            switch (a) {
                            case"name":
                                return "filter";
                            case"extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case"inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                            } else 
                                switch (a) {
                                case"name":
                                    return "opacity";
                                case"extract":
                                    return c;
                                case"inject":
                                    return c
                                }
                    }
                },
                register: function() {
                    9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                    for (var a = 0; a < v.Lists.transformsBase.length; a++)
                        !function() {
                            var b = v.Lists.transformsBase[a];
                            v.Normalizations.registered[b] = function(a, c, e) {
                                switch (a) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                case"inject":
                                    var f=!1;
                                    switch (b.substr(0, b.length - 1)) {
                                    case"translate":
                                        f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                        break;
                                    case"scal":
                                    case"scale":
                                        t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f=!/(\d)$/i.test(e);
                                        break;
                                    case"skew":
                                        f=!/(deg|\d)$/i.test(e);
                                        break;
                                    case"rotate":
                                        f=!/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                                }
                            }
                        }();
                    for (var a = 0; a < v.Lists.colors.length; a++)
                        !function() {
                            var b = v.Lists.colors[a];
                            v.Normalizations.registered[b] = function(a, c, e) {
                                switch (a) {
                                case"name":
                                    return b;
                                case"extract":
                                    var f;
                                    if (v.RegEx.wrappedValueAlreadyExtracted.test(e))
                                        f = e;
                                    else {
                                        var g, h = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                case"inject":
                                    return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                }
            },
            Names: {
                camelCase: function(a) {
                    return a.replace(/-(\w)/g, function(a, b) {
                        return b.toUpperCase()
                    })
                },
                SVGAttribute: function(a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (n || t.State.isAndroid&&!t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                },
                prefixCheck: function(a) {
                    if (t.State.prefixMatches[a])
                        return [t.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                            return a.toUpperCase()
                        }), p.isString(t.State.prefixElement.style[e]))
                            return t.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            Values: {
                hexToRgb: function(a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function(a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(a) {
                    return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                },
                getUnitType: function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                },
                getDisplayType: function(a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                },
                addClass: function(a, b) {
                    a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                },
                removeClass: function(a, b) {
                    a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(a, c, e, f) {
                function h(a, c) {
                    function e() {
                        j && v.setPropertyValue(a, "display", "none")
                    }
                    var i = 0;
                    if (8 >= n)
                        i = m.css(a, c);
                    else {
                        var j=!1;
                        if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j=!0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                            if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                return e(), k
                            }
                            if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                return e(), l
                            }
                        }
                        var o;
                        o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
                    }
                    if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                        var p = h(a, "position");
                        ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                    }
                    return i
                }
                var i;
                if (v.Hooks.registered[c]) {
                    var j = c, k = v.Hooks.getRoot(j);
                    e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
                } else if (v.Normalizations.registered[c]) {
                    var l, o;
                    l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
                }
                if (!/^[\d-]/.test(i))
                    if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
                        if (/^(height|width)$/i.test(c))
                            try {
                                i = a.getBBox()[c]
                            } catch (p) {
                    i = 0
                } else 
                    i = a.getAttribute(c);
                    else 
                        i = h(a, v.Names.prefixCheck(c)[0]);
            return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
        },
        setPropertyValue: function(a, c, d, e, f) {
            var h = c;
            if ("scroll" === c)
                f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
            else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a))
                v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
            else {
                if (v.Hooks.registered[c]) {
                    var i = c, j = v.Hooks.getRoot(c);
                    e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
                }
                if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n)
                    try {
                        a.style[h] = d
                } catch (k) {
                    t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                } else 
                    g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
            }
            return [h, d]
        },
        flushTransformCache: function(a) {
            function b(b) {
                return parseFloat(v.getPropertyValue(a, b))
            }
            var c = "";
            if ((n || t.State.isAndroid&&!t.State.isChrome) && g(a).isSVG) {
                var d = {
                    translate: [b("translateX"), b("translateY")],
                    skewX: [b("skewX")],
                    skewY: [b("skewY")],
                    scale: 1 !== b("scale") ? [b("scale"), b("scale")]: [b("scaleX"), b("scaleY")],
                    rotate: [b("rotateZ"), 0, 0]
                };
                m.each(g(a).transformCache, function(a) {
                    /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                })
            } else {
                var e, f;
                m.each(g(a).transformCache, function(b) {
                    return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                }), f && (c = "perspective" + f + " " + c)
            }
            v.setPropertyValue(a, "transform", c)
        }
    };
    v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
        var e = d;
        return a = f(a), m.each(a, function(a, f) {
            if (g(f) === d && t.init(f), c === d)
                e === d && (e = t.CSS.getPropertyValue(f, b));
            else {
                var h = t.CSS.setPropertyValue(f, b, c);
                "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
            }
        }), e
    };
    var w = function() {
        function a() {
            return h ? B.promise || null : i
        }
        function e() {
            function a(a) {
                function l(a, b) {
                    var c = d, e = d, g = d;
                    return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1])&&!v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g]
                }
                function n(a, b) {
                    var c, d;
                    return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                        return c = a, ""
                    }), c || (c = v.Values.getUnitType(a)), [d, c]
                }
                function r() {
                    var a = {
                        myParent: f.parentNode || c.body,
                        position: v.getPropertyValue(f, "position"),
                        fontSize: v.getPropertyValue(f, "fontSize")
                    }, d = a.position === I.lastPosition && a.myParent === I.lastParent, e = a.fontSize === I.lastFontSize;
                    I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
                    var h = 100, i = {};
                    if (e && d)
                        i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
                    else {
                        var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect"): c.createElement("div");
                        t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                            t.CSS.setPropertyValue(j, b, "hidden")
                        }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                            t.CSS.setPropertyValue(j, b, h + "%")
                        }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
                    }
                    return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i
                }
                if (h.begin && 0 === y)
                    try {
                        h.begin.call(o, o)
                } catch (u) {
                    setTimeout(function() {
                        throw u
                    }, 1)
                }
                if ("scroll" === C) {
                    var w, z, A, D = /^x$/i.test(h.axis) ? "Left": "Top", E = parseFloat(h.offset) || 0;
                    h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, w = h.container["scroll" + D], A = w + m(f).position()[D.toLowerCase()] + E) : h.container = null : (w = t.State.scrollAnchor[t.State["scrollProperty" + D]], z = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === D ? "Top" : "Left")]], A = m(f).offset()[D.toLowerCase()] + E), i = {
                        scroll: {
                            rootPropertyValue: !1,
                            startValue: w,
                            currentValue: w,
                            endValue: A,
                            unitType: "",
                            easing: h.easing,
                            scrollData: {
                                container: h.container,
                                direction: D,
                                alternateValue: z
                            }
                        },
                        element: f
                    }, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f)
                } else if ("reverse" === C) {
                    if (!g(f).tweensContainer)
                        return void m.dequeue(f, h.queue);
                    "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop=!1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
                    var F = m.extend(!0, {}, g(f).tweensContainer);
                    for (var G in F)
                        if ("element" !== G) {
                            var H = F[G].startValue;
                            F[G].startValue = F[G].currentValue = F[G].endValue, F[G].endValue = H, p.isEmptyObject(s) || (F[G].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + G + "): " + JSON.stringify(F[G]), f)
                        }
                    i = F
                } else if ("start" === C) {
                    var F;
                    g(f).tweensContainer && g(f).isAnimating===!0 && (F = g(f).tweensContainer), m.each(q, function(a, b) {
                        if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(a)) {
                            var c = l(b, !0), e = c[0], f = c[1], g = c[2];
                            if (v.RegEx.isHex.test(e)) {
                                for (var h = ["Red", "Green", "Blue"], i = v.Values.hexToRgb(e), j = g ? v.Values.hexToRgb(g) : d, k = 0; k < h.length; k++) {
                                    var m = [i[k]];
                                    f && m.push(f), j !== d && m.push(j[k]), q[a + h[k]] = m
                                }
                                delete q[a]
                            }
                        }
                    });
                    for (var K in q) {
                        var L = l(q[K]), M = L[0], N = L[1], O = L[2];
                        K = v.Names.camelCase(K);
                        var P = v.Hooks.getRoot(K), Q=!1;
                        if (g(f).isSVG || "tween" === P || v.Names.prefixCheck(P)[1]!==!1 || v.Normalizations.registered[P] !== d) {
                            (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(K)&&!O && 0 !== M && (O = 0), h._cacheValues && F && F[K] ? (O === d && (O = F[K].endValue + F[K].unitType), Q = g(f).rootPropertyValueCache[P]) : v.Hooks.registered[K] ? O === d ? (Q = v.getPropertyValue(f, P), O = v.getPropertyValue(f, K, Q)) : Q = v.Hooks.templates[P][1] : O === d && (O = v.getPropertyValue(f, K));
                            var R, S, T, U=!1;
                            if (R = n(K, O), O = R[0], T = R[1], R = n(K, M), M = R[0].replace(/^([+-\/*])=/, function(a, b) {
                                return U = b, ""
                            }), S = R[1], O = parseFloat(O) || 0, M = parseFloat(M) || 0, "%" === S && (/^(fontSize|lineHeight)$/.test(K) ? (M/=100, S = "em") : /^scale/.test(K) ? (M/=100, S = "") : /(Red|Green|Blue)$/i.test(K) && (M = M / 100 * 255, S = "")), /[\/*]/.test(U))
                                S = T;
                            else if (T !== S && 0 !== O)
                                if (0 === M)
                                    S = T;
                                else {
                                    e = e || r();
                                    var V = /margin|padding|left|right|width|text|word|letter/i.test(K) || /X$/.test(K) || "x" === K ? "x": "y";
                                    switch (T) {
                                    case"%":
                                        O*="x" === V ? e.percentToPxWidth : e.percentToPxHeight;
                                        break;
                                    case"px":
                                        break;
                                    default:
                                        O*=e[T + "ToPx"]
                                    }
                                    switch (S) {
                                    case"%":
                                        O*=1 / ("x" === V ? e.percentToPxWidth : e.percentToPxHeight);
                                        break;
                                    case"px":
                                        break;
                                    default:
                                        O*=1 / e[S + "ToPx"]
                                    }
                                }
                            switch (U) {
                            case"+":
                                M = O + M;
                                break;
                            case"-":
                                M = O - M;
                                break;
                            case"*":
                                M = O * M;
                                break;
                            case"/":
                                M = O / M
                            }
                            i[K] = {
                                rootPropertyValue: Q,
                                startValue: O,
                                currentValue: O,
                                endValue: M,
                                unitType: S,
                                easing: N
                            }, t.debug && console.log("tweensContainer (" + K + "): " + JSON.stringify(i[K]), f)
                        } else 
                            t.debug && console.log("Skipping [" + P + "] due to a lack of browser support.")
                        }
                    i.element = f
                }
                i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating=!0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking===!1 && (t.State.isTicking=!0, k())) : y++)
            }
            var e, f = this, h = m.extend({}, t.defaults, s), i = {};
            switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue!==!1 && m.queue(f, h.queue, function(a) {
                t.velocityQueueEntryFlag=!0, g(f).delayTimer = {
                    setTimeout: setTimeout(a, parseFloat(h.delay)),
                    next: a
                }
            }), h.duration.toString().toLowerCase()) {
            case"fast":
                h.duration = 200;
                break;
            case"normal":
                h.duration = r;
                break;
            case"slow":
                h.duration = 600;
                break;
            default:
                h.duration = parseFloat(h.duration) || 1
            }
            t.mock!==!1 && (t.mock===!0 ? h.duration = h.delay = 1 : (h.duration*=parseFloat(t.mock) || 1, h.delay*=parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin&&!p.isFunction(h.begin) && (h.begin = null), h.progress&&!p.isFunction(h.progress) && (h.progress = null), h.complete&&!p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile&&!t.State.isGingerbread, h.queue===!1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
                return c===!0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag=!0, void a(b))
            }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
        }
        var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names || p.isString(arguments[0].properties));
        if (p.isWrapped(this) ? (h=!1, n = 0, o = this, i = this) : (h=!0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
            u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
            var x = o.length, y = 0;
            if (!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)) {
                var z = n + 1;
                s = {};
                for (var A = z; A < arguments.length; A++)
                    p.isArray(arguments[A]) ||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A]
            }
            var B = {
                promise: null,
                resolver: null,
                rejecter: null
            };
            h && t.Promise && (B.promise = new t.Promise(function(a, b) {
                B.resolver = a, B.rejecter = b
            }));
            var C;
            switch (q) {
            case"scroll":
                C = "scroll";
                break;
            case"reverse":
                C = "reverse";
                break;
            case"finish":
            case"stop":
                m.each(o, function(a, b) {
                    g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer)
                });
                var D = [];
                return m.each(t.State.calls, function(a, b) {
                    b && m.each(b[1], function(c, e) {
                        var f = s === d ? "": s;
                        return f===!0 || b[2].queue === f || s === d && b[2].queue===!1 ? void m.each(o, function(c, d) {
                            d === e && ((s===!0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) {
                                p.isFunction(b) && b(null, !0)
                            }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f!==!1 && m.each(g(d).tweensContainer, function(a, b) {
                                b.endValue = b.currentValue
                            }), D.push(a)) : "finish" === q && (b[2].duration = 1))
                        }) : !0
                    })
                }), "stop" === q && (m.each(D, function(a, b) {
                    l(b, !0)
                }), B.promise && B.resolver(o)), a();
            default:
                if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                    if (p.isString(q) && t.Redirects[q]) {
                        var E = m.extend({}, s), F = E.duration, G = E.delay || 0;
                        return E.backwards===!0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
                            parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d)
                        }), a()
                    }
                    var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                    return B.promise ? B.rejecter(new Error(H)) : console.log(H), a()
                }
                C = "start"
            }
            var I = {
                lastParent: null,
                lastPosition: null,
                lastFontSize: null,
                lastPercentToPxWidth: null,
                lastPercentToPxHeight: null,
                lastEmToPx: null,
                remToPx: null,
                vwToPx: null,
                vhToPx: null
            }, J = [];
            m.each(o, function(a, b) {
                p.isNode(b) && e.call(b)
            });
            var K, E = m.extend({}, t.defaults, s);
            if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
                for (var L = 0; K > L; L++) {
                    var M = {
                        delay: E.delay,
                        progress: E.progress
                    };
                    L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M)
                }
            return a()
        }
    };
    t = m.extend(w, t), t.animate = w;
    var x = b.requestAnimationFrame || o;
    return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
        c.hidden ? (x = function(a) {
            return setTimeout(function() {
                a(!0)
            }, 16)
        }, k()) : x = b.requestAnimationFrame || o
    }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
        t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
            var i = m.extend({}, c), j = i.begin, k = i.complete, l = {
                height: "",
                marginTop: "",
                marginBottom: "",
                paddingTop: "",
                paddingBottom: ""
            }, n = {};
            i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                j && j.call(g, g);
                for (var c in l) {
                    n[c] = a.style[c];
                    var d = t.CSS.getPropertyValue(a, c);
                    l[c] = "Down" === b ? [d, 0] : [0, d]
                }
                n.overflow = a.style.overflow, a.style.overflow = "hidden"
            }, i.complete = function() {
                for (var b in n)
                    a.style[b] = n[b];
                k && k.call(g, g), h && h.resolver(g)
            }, t(a, l, i)
        }
    }), m.each(["In", "Out"], function(a, b) {
        t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
            var i = m.extend({}, c), j = {
                opacity: "In" === b ? 1: 0
            }, k = i.complete;
            i.complete = e !== f - 1 ? i.begin = null : function() {
                k && k.call(g, g), h && h.resolver(g)
            }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
        }
    }), t
}(window.jQuery || window.Zepto || window, window, document)
}), !function(a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(k(a, c), b)
    }
    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }
    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach)
                a.forEach(b, c);
            else if (a.length !== d)
                for (e = 0; e < a.length;)
                    b.call(c, a[e], e, a), e++;
            else 
                for (e in a)
                    a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }
    function h(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) 
            && (a[e[f]] = b[e[f]]), f++;
        return a
    }
    function i(a, b) {
        return h(a, b, !0)
    }
    function j(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c)
    }
    function k(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    function l(a, b) {
        return typeof a == ka ? a.apply(b ? b[0] || d : d, b) : a
    }
    function m(a, b) {
        return a === d ? b : a
    }
    function n(a, b, c) {
        g(r(b), function(b) {
            a.addEventListener(b, c, !1)
        })
    }
    function o(a, b, c) {
        g(r(b), function(b) {
            a.removeEventListener(b, c, !1)
        })
    }
    function p(a, b) {
        for (; a;) {
            if (a == b)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    function q(a, b) {
        return a.indexOf(b)>-1
    }
    function r(a) {
        return a.trim().split(/\s+/g)
    }
    function s(a, b, c) {
        if (a.indexOf&&!c)
            return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b ||!c && a[d] === b)
                return d;
            d++
        }
        return - 1
    }
    function t(a) {
        return Array.prototype.slice.call(a, 0)
    }
    function u(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b]: a[f];
            s(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b]
        }) : d.sort()), d
    }
    function v(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ia.length;) {
            if (c = ia[g], e = c ? c + f : b, e in a)
                return e;
            g++
        }
        return d
    }
    function w() {
        return oa++
    }
    function x(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow
    }
    function y(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
            l(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }
    function z(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : ra ? N : sa ? Q : qa ? S : M)(a, A)
    }
    function A(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & ya && 0 === d - e, g = b & (Aa | Ba) && 0 === d - e;
        c.isFirst=!!f, c.isFinal=!!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }
    function B(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = E(b)), e > 1&&!c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple=!1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center: f.center, i = b.center = F(d);
        b.timeStamp = na(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
        var j = a.element;
        p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j
    }
    function C(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        (b.eventType === ya || f.eventType === Aa) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }
    function D(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ba && (i > xa || h.velocity === d)) {
            var j = h.deltaX - b.deltaX, k = h.deltaY - b.deltaY, l = G(i, j, k);
            e = l.x, f = l.y, c = ma(l.x) > ma(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b
        } else 
            c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }
    function E(a) {
        for (var b = [], c = 0; c < a.pointers.length;)
            b[c] = {
                clientX: la(a.pointers[c].clientX),
                clientY: la(a.pointers[c].clientY)
            }, c++;
        return {
            timeStamp: na(),
            pointers: b,
            center: F(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }
    function F(a) {
        var b = a.length;
        if (1 === b)
            return {
                x: la(a[0].clientX),
                y: la(a[0].clientY)
            };
        for (var c = 0, d = 0, e = 0; b > e;)
            c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: la(c / b),
            y: la(d / b)
        }
    }
    function G(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }
    function H(a, b) {
        return a === b ? Ca : ma(a) >= ma(b) ? a > 0 ? Da : Ea : b > 0 ? Fa : Ga
    }
    function I(a, b, c) {
        c || (c = Ka);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }
    function J(a, b, c) {
        c || (c = Ka);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }
    function K(a, b) {
        return J(b[1], b[0], La) - J(a[1], a[0], La)
    }
    function L(a, b) {
        return I(b[0], b[1], La) / I(a[0], a[1], La)
    }
    function M() {
        this.evEl = Na, this.evWin = Oa, this.allow=!0, this.pressed=!1, y.apply(this, arguments)
    }
    function N() {
        this.evEl = Ra, this.evWin = Sa, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }
    function O() {
        this.evTarget = Ua, this.evWin = Va, this.started=!1, y.apply(this, arguments)
    }
    function P(a, b) {
        var c = t(a.touches), d = t(a.changedTouches);
        return b & (Aa | Ba) && (c = u(c.concat(d), "identifier", !0)), [c, d]
    }
    function Q() {
        this.evTarget = Xa, this.targetIds = {}, y.apply(this, arguments)
    }
    function R(a, b) {
        var c = t(a.touches), d = this.targetIds;
        if (b & (ya | za) && 1 === c.length)
            return d[c[0].identifier]=!0, [c, c];
        var e, f, g = t(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function(a) {
            return p(a.target, i)
        }), b === ya)
            for (e = 0; e < f.length;)
                d[f[e].identifier]=!0, e++;
        for (e = 0; e < g.length;)
            d[g[e].identifier] && h.push(g[e]), b & (Aa | Ba) && delete d[g[e].identifier], e++;
        return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0
    }
    function S() {
        y.apply(this, arguments);
        var a = k(this.handler, this);
        this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a)
    }
    function T(a, b) {
        this.manager = a, this.set(b)
    }
    function U(a) {
        if (q(a, bb))
            return bb;
        var b = q(a, cb), c = q(a, db);
        return b && c ? cb + " " + db : b || c ? b ? cb : db : q(a, ab) ? ab : _a
    }
    function V(a) {
        this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = eb, this.simultaneous = {}, this.requireFail = []
    }
    function W(a) {
        return a & jb ? "cancel" : a & hb ? "end" : a & gb ? "move" : a & fb ? "start" : ""
    }
    function X(a) {
        return a == Ga ? "down" : a == Fa ? "up" : a == Da ? "left" : a == Ea ? "right" : ""
    }
    function Y(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }
    function Z() {
        V.apply(this, arguments)
    }
    function $() {
        Z.apply(this, arguments), this.pX = null, this.pY = null
    }
    function _() {
        Z.apply(this, arguments)
    }
    function aa() {
        V.apply(this, arguments), this._timer = null, this._input = null
    }
    function ba() {
        Z.apply(this, arguments)
    }
    function ca() {
        Z.apply(this, arguments)
    }
    function da() {
        V.apply(this, arguments), this.pTime=!1, this.pCenter=!1, this._timer = null, this._input = null, this.count = 0
    }
    function ea(a, b) {
        return b = b || {}, b.recognizers = m(b.recognizers, ea.defaults.preset), new fa(a, b)
    }
    function fa(a, b) {
        b = b || {}, this.options = i(b, ea.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), ga(this, !0), g(b.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }
    function ga(a, b) {
        var c = a.element;
        g(a.options.cssProps, function(a, d) {
            c.style[v(c.style, d)] = b ? a : ""
        })
    }
    function ha(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }
    var ia = ["", "webkit", "moz", "MS", "ms", "o"], ja = b.createElement("div"), ka = "function", la = Math.round, ma = Math.abs, na = Date.now, oa = 1, pa = /mobile|tablet|ip(ad|hone|od)|android/i, qa = "ontouchstart"in a, ra = v(a, "PointerEvent") !== d, sa = qa && pa.test(navigator.userAgent), ta = "touch", ua = "pen", va = "mouse", wa = "kinect", xa = 25, ya = 1, za = 2, Aa = 4, Ba = 8, Ca = 1, Da = 2, Ea = 4, Fa = 8, Ga = 16, Ha = Da | Ea, Ia = Fa | Ga, Ja = Ha | Ia, Ka = ["x", "y"], La = ["clientX", "clientY"];
    y.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler)
        }
    };
    var Ma = {
        mousedown: ya,
        mousemove: za,
        mouseup: Aa
    }, Na = "mousedown", Oa = "mousemove mouseup";
    j(M, y, {
        handler: function(a) {
            var b = Ma[a.type];
            b & ya && 0 === a.button && (this.pressed=!0), b & za && 1 !== a.which && (b = Aa), this.pressed && this.allow && (b & Aa && (this.pressed=!1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: va,
                srcEvent: a
            }))
        }
    });
    var Pa = {
        pointerdown: ya,
        pointermove: za,
        pointerup: Aa,
        pointercancel: Ba,
        pointerout: Ba
    }, Qa = {
        2: ta,
        3: ua,
        4: va,
        5: wa
    }, Ra = "pointerdown", Sa = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (Ra = "MSPointerDown", Sa = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, {
        handler: function(a) {
            var b = this.store, c=!1, d = a.type.toLowerCase().replace("ms", ""), e = Pa[d], f = Qa[a.pointerType] || a.pointerType, g = f == ta, h = s(b, a.pointerId, "pointerId");
            e & ya && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Aa | Ba) && (c=!0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Ta = {
        touchstart: ya,
        touchmove: za,
        touchend: Aa,
        touchcancel: Ba
    }, Ua = "touchstart", Va = "touchstart touchmove touchend touchcancel";
    j(O, y, {
        handler: function(a) {
            var b = Ta[a.type];
            if (b === ya && (this.started=!0), this.started) {
                var c = P.call(this, a, b);
                b & (Aa | Ba) && 0 === c[0].length - c[1].length && (this.started=!1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: ta,
                    srcEvent: a
                })
            }
        }
    });
    var Wa = {
        touchstart: ya,
        touchmove: za,
        touchend: Aa,
        touchcancel: Ba
    }, Xa = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
        handler: function(a) {
            var b = Wa[a.type], c = R.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: ta,
                srcEvent: a
            })
        }
    }), j(S, y, {
        handler: function(a, b, c) {
            var d = c.pointerType == ta, e = c.pointerType == va;
            if (d)
                this.mouse.allow=!1;
            else if (e&&!this.mouse.allow)
                return;
            b & (Aa | Ba) && (this.mouse.allow=!0), this.callback(a, b, c)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ya = v(ja.style, "touchAction"), Za = Ya !== d, $a = "compute", _a = "auto", ab = "manipulation", bb = "none", cb = "pan-x", db = "pan-y";
    T.prototype = {
        set: function(a) {
            a == $a && (a = this.compute()), Za && (this.manager.element.style[Ya] = a), this.actions = a.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var a = [];
            return g(this.manager.recognizers, function(b) {
                l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), U(a.join(" "))
        },
        preventDefaults: function(a) {
            if (!Za) {
                var b = a.srcEvent, c = a.offsetDirection;
                if (this.manager.session.prevented)
                    return void b.preventDefault();
                var d = this.actions, e = q(d, bb), f = q(d, db), g = q(d, cb);
                return e || f && c & Ha || g && c & Ia ? this.preventSrc(b) : void 0
            }
        },
        preventSrc: function(a) {
            this.manager.session.prevented=!0, a.preventDefault()
        }
    };
    var eb = 1, fb = 2, gb = 4, hb = 8, ib = hb, jb = 16, kb = 32;
    V.prototype = {
        defaults: {},
        set: function(a) {
            return h(this.options, a), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(a) {
            if (f(a, "recognizeWith", this))
                return this;
            var b = this.simultaneous;
            return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        },
        dropRecognizeWith: function(a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this)
        },
        requireFailure: function(a) {
            if (f(a, "requireFailure", this))
                return this;
            var b = this.requireFail;
            return a = Y(a, this), - 1 === s(b, a) && (b.push(a), a.requireFailure(this)), this
        },
        dropRequireFailure: function(a) {
            if (f(a, "dropRequireFailure", this))
                return this;
            a = Y(a, this);
            var b = s(this.requireFail, a);
            return b>-1 && this.requireFail.splice(b, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id]
        },
        emit: function(a) {
            function b(b) {
                c.manager.emit(c.options.event + (b ? W(d) : ""), a)
            }
            var c = this, d = this.state;
            hb > d && b(!0), b(), d >= hb && b(!0)
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void(this.state = kb)
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (kb | eb)))
                    return !1;
                a++
            }
            return !0
        },
        recognize: function(a) {
            var b = h({}, a);
            return l(this.options.enable, [this, b]) ? (this.state & (ib | jb | kb) && (this.state = eb), this.state = this.process(b), void(this.state & (fb | gb | hb | jb) && this.tryEmit(b))) : (this.reset(), void(this.state = kb))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, j(Z, V, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function(a) {
            var b = this.state, c = a.eventType, d = b & (fb | gb), e = this.attrTest(a);
            return d && (c & Ba ||!e) ? b | jb : d || e ? c & Aa ? b | hb : b & fb ? b | gb : fb : kb
        }
    }), j($, Z, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Ja
        },
        getTouchAction: function() {
            var a = this.options.direction, b = [];
            return a & Ha && b.push(db), a & Ia && b.push(cb), b
        },
        directionTest: function(a) {
            var b = this.options, c=!0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & Ha ? (e = 0 === f ? Ca : 0 > f ? Da : Ea, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ca : 0 > g ? Fa : Ga, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        },
        attrTest: function(a) {
            return Z.prototype.attrTest.call(this, a) && (this.state & fb ||!(this.state & fb) && this.directionTest(a))
        },
        emit: function(a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
        }
    }), j(_, Z, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [bb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fb)
        },
        emit: function(a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in": "out";
                this.manager.emit(this.options.event + b, a)
            }
        }
    }), j(aa, V, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [_a]
        },
        process: function(a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime > b.time;
            if (this._input = a, !d ||!c || a.eventType & (Aa | Ba)&&!f)
                this.reset();
            else if (a.eventType & ya)
                this.reset(), this._timer = e(function() {
                    this.state = ib, this.tryEmit()
                }, b.time, this);
            else if (a.eventType & Aa)
                return ib;
            return kb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(a) {
            this.state === ib && (a && a.eventType & Aa ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = na(), this.manager.emit(this.options.event, this._input)))
        }
    }), j(ba, Z, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [bb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fb)
        }
    }), j(ca, Z, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Ha | Ia,
            pointers: 1
        },
        getTouchAction: function() {
            return $.prototype.getTouchAction.call(this)
        },
        attrTest: function(a) {
            var b, c = this.options.direction;
            return c & (Ha | Ia) ? b = a.velocity : c & Ha ? b = a.velocityX : c & Ia && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && ma(b) > this.options.velocity && a.eventType & Aa
        },
        emit: function(a) {
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), j(da, V, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ab]
        },
        process: function(a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & ya && 0 === this.count)
                return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Aa)
                    return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval: !0, h=!this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count%b.taps;
                if (0 === i)
                    return this.hasRequireFailures() ? (this._timer = e(function() {
                        this.state = ib, this.tryEmit()
                    }, b.interval, this), fb) : ib
            }
            return kb
        },
        failTimeout: function() {
            return this._timer = e(function() {
                this.state = kb
            }, this.options.interval, this), kb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ib && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), ea.VERSION = "2.0.4", ea.defaults = {
        domEvents: !1,
        touchAction: $a,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ba, {
            enable: !1
        }
        ], [_, {
            enable: !1
        }, ["rotate"]], [ca, {
            direction: Ha
        }
        ], [$, {
            direction: Ha
        }, ["swipe"]], [da], [da, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [aa]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var lb = 1, mb = 2;
    fa.prototype = {
        set: function(a) {
            return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        },
        stop: function(a) {
            this.session.stopped = a ? mb : lb
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & ib) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;)
                    c = d[f], b.stopped === mb || e && c != e&&!c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fb | gb | hb) && (e = b.curRecognizer = c), f++
            }
        },
        get: function(a) {
            if (a instanceof V)
                return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a)
                    return b[c];
            return null
        },
        add: function(a) {
            if (f(a, "add", this))
                return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        },
        remove: function(a) {
            if (f(a, "remove", this))
                return this;
            var b = this.recognizers;
            return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this
        },
        on: function(a, b) {
            var c = this.handlers;
            return g(r(a), function(a) {
                c[a] = c[a] || [], c[a].push(b)
            }), this
        },
        off: function(a, b) {
            var c = this.handlers;
            return g(r(a), function(a) {
                b ? c[a].splice(s(c[a], b), 1) : delete c[a]
            }), this
        },
        emit: function(a, b) {
            this.options.domEvents && ha(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function() {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;)
                    c[d](b), d++
            }
        },
        destroy: function() {
            this.element && ga(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, h(ea, {
        INPUT_START: ya,
        INPUT_MOVE: za,
        INPUT_END: Aa,
        INPUT_CANCEL: Ba,
        STATE_POSSIBLE: eb,
        STATE_BEGAN: fb,
        STATE_CHANGED: gb,
        STATE_ENDED: hb,
        STATE_RECOGNIZED: ib,
        STATE_CANCELLED: jb,
        STATE_FAILED: kb,
        DIRECTION_NONE: Ca,
        DIRECTION_LEFT: Da,
        DIRECTION_RIGHT: Ea,
        DIRECTION_UP: Fa,
        DIRECTION_DOWN: Ga,
        DIRECTION_HORIZONTAL: Ha,
        DIRECTION_VERTICAL: Ia,
        DIRECTION_ALL: Ja,
        Manager: fa,
        Input: y,
        TouchAction: T,
        TouchInput: Q,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: S,
        SingleTouchInput: O,
        Recognizer: V,
        AttrRecognizer: Z,
        Tap: da,
        Pan: $,
        Swipe: ca,
        Pinch: _,
        Rotate: ba,
        Press: aa,
        on: n,
        off: o,
        each: g,
        merge: i,
        extend: h,
        inherit: j,
        bindFn: k,
        prefixed: v
    }), typeof define == ka && define.amd ? define(function() {
        return ea
    }) : "undefined" != typeof module && module.exports ? module.exports = ea : a[c] = ea
}(window, document, "Hammer"), function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], a) : "object" == typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer)
}(function(a, b) {
    function c(c, d) {
        var e = a(c);
        e.data("hammer") || e.data("hammer", new b(e[0], d))
    }
    a.fn.hammer = function(a) {
        return this.each(function() {
            c(this, a)
        })
    }, b.Manager.prototype.emit = function(b) {
        return function(c, d) {
            b.call(this, c, d), a(this.element).trigger({
                type: c,
                gesture: d
            })
        }
    }(b.Manager.prototype.emit)
}), window.Materialize = {}, Materialize.guid = function() {
    function a() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
    }
}(), Materialize.elementOrParentIsFixed = function(a) {
    var b = $(a), c = b.add(b.parents()), d=!1;
    return c.each(function() {
        return "fixed" === $(this).css("position") ? (d=!0, !1) : void 0
    }), d
};
var Vel;
Vel = $ ? $.Velocity : Velocity, function(a) {
    a.fn.collapsible = function(b) {
        var c = {
            accordion: void 0
        };
        return b = a.extend(c, b), this.each(function() {
            function c(b) {
                h = g.find("> li > .collapsible-header"), b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        a(this).css("height", "")
                    }
                }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        a(this).css("height", "")
                    }
                }), h.not(b).removeClass("active").parent().removeClass("active"), h.not(b).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        a(this).css("height", "")
                    }
                })
            }
            function d(b) {
                b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        a(this).css("height", "")
                    }
                }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        a(this).css("height", "")
                    }
                })
            }
            function e(a) {
                var b = f(a);
                return b.length > 0
            }
            function f(a) {
                return a.closest("li > .collapsible-header")
            }
            var g = a(this), h = a(this).find("> li > .collapsible-header"), i = g.data("collapsible");
            g.off("click.collapse", ".collapsible-header"), h.off("click.collapse"), b.accordion || "accordion" === i || void 0 === i ? (h = g.find("> li > .collapsible-header"), h.on("click.collapse", function(b) {
                var d = a(b.target);
                e(d) && (d = f(d)), d.toggleClass("active"), c(d)
            }), c(h.filter(".active").first())) : h.each(function() {
                a(this).on("click.collapse", function(b) {
                    var c = a(b.target);
                    e(c) && (c = f(c)), c.toggleClass("active"), d(c)
                }), a(this).hasClass("active") && d(a(this))
            })
        })
    }, a(document).ready(function() {
        a(".collapsible").collapsible()
    })
}(jQuery), function(a) {
    a.fn.scrollTo = function(b) {
        return a(this).scrollTop(a(this).scrollTop() - a(this).offset().top + a(b).offset().top), this
    }, a.fn.dropdown = function(b) {
        var c = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left"
        };
        this.each(function() {
            function d() {
                void 0 !== g.data("induration") && (h.inDuration = g.data("inDuration")), void 0 !== g.data("outduration") && (h.outDuration = g.data("outDuration")), void 0 !== g.data("constrainwidth") && (h.constrain_width = g.data("constrainwidth")), void 0 !== g.data("hover") && (h.hover = g.data("hover")), void 0 !== g.data("gutter") && (h.gutter = g.data("gutter")), void 0 !== g.data("beloworigin") && (h.belowOrigin = g.data("beloworigin")), void 0 !== g.data("alignment") && (h.alignment = g.data("alignment"))
            }
            function e() {
                d(), i.addClass("active"), h.constrain_width===!0 ? i.css("width", g.outerWidth()) : i.css("white-space", "nowrap");
                var b = 0;
                h.belowOrigin===!0 && (b = g.height());
                var c, e, f, j = g.offset().left;
                if (j + i.innerWidth() > a(window).width() ? h.alignment = "right" : j - i.innerWidth() + g.innerWidth() < 0 && (h.alignment = "left"), "left" === h.alignment)
                    e = 0, f = h.gutter, c = g.position().left + e + f, i.css({
                        left: c
                    });
                else if ("right" === h.alignment) {
                    a(window).width() - j - g.innerWidth();
                    e = 0, f = h.gutter, c = a(window).width() - g.position().left - g.innerWidth() + f, i.css({
                        right: c
                    })
                }
                i.css({
                    position: "absolute",
                    top: g.position().top + b
                }), i.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: h.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        a(this).css("height", "")
                    }
                }).animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: h.inDuration,
                    easing: "easeOutSine"
                })
            }
            function f() {
                i.fadeOut(h.outDuration), i.removeClass("active")
            }
            var g = a(this), h = a.extend({}, c, b), i = a("#" + g.attr("data-activates"));
            if (d(), g.after(i), h.hover) {
                var j=!1;
                g.unbind("click." + g.attr("id")), g.on("mouseenter", function(a) {
                    j===!1 && (e(), j=!0)
                }), g.on("mouseleave", function(b) {
                    var c = b.toElement || b.relatedTarget;
                    a(c).closest(".dropdown-content").is(i) || (i.stop(!0, !0), f(), j=!1)
                }), i.on("mouseleave", function(b) {
                    var c = b.toElement || b.relatedTarget;
                    a(c).closest(".dropdown-button").is(g) || (i.stop(!0, !0), f(), j=!1)
                })
            } else 
                g.unbind("click." + g.attr("id")), g.bind("click." + g.attr("id"), function(b) {
                    g[0] == b.currentTarget && 0 === a(b.target).closest(".dropdown-content").length ? (b.preventDefault(), e()) : g.hasClass("active") && (f(), a(document).unbind("click." + i.attr("id"))), i.hasClass("active") && a(document).bind("click." + i.attr("id"), function(b) {
                        !i.is(b.target)&&!g.is(b.target)&&!g.find(b.target).length > 0 && (f(), a(document).unbind("click." + i.attr("id")))
                    })
                });
            g.on("open", e), g.on("close", f)
        })
    }, a(document).ready(function() {
        a(".dropdown-button").dropdown()
    })
}(jQuery), function(a) {
    var b = 0, c = 0, d = function() {
        return c++, "materialize-lean-overlay-" + c
    };
    a.fn.extend({
        openModal: function(c) {
            a("body").css("overflow", "hidden");
            var e = {
                opacity: .5,
                in_duration: 350,
                out_duration: 250,
                ready: void 0,
                complete: void 0,
                dismissible: !0,
                starting_top: "4%"
            }, f = d(), g = a(this), h = a('<div class="lean-overlay"></div>'), i=++b;
            h.attr("id", f).css("z-index", 1e3 + 2 * i), g.data("overlay-id", f).css("z-index", 1e3 + 2 * i + 1), a("body").append(h), c = a.extend(e, c), c.dismissible && (h.click(function() {
                g.closeModal(c)
            }), a(document).on("keyup.leanModal" + f, function(a) {
                27 === a.keyCode && g.closeModal(c)
            })), g.find(".modal-close").on("click.close", function(a) {
                g.closeModal(c)
            }), h.css({
                display: "block",
                opacity: 0
            }), g.css({
                display: "block",
                opacity: 0
            }), h.velocity({
                opacity: c.opacity
            }, {
                duration: c.in_duration,
                queue: !1,
                ease: "easeOutCubic"
            }), g.data("associated-overlay", h[0]), g.hasClass("bottom-sheet") ? g.velocity({
                bottom: "0",
                opacity: 1
            }, {
                duration: c.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function() {
                    "function" == typeof c.ready && c.ready()
                }
            }) : (a.Velocity.hook(g, "scaleX", .7), g.css({
                top: c.starting_top
            }), g.velocity({
                top: "10%",
                opacity: 1,
                scaleX: "1"
            }, {
                duration: c.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function() {
                    "function" == typeof c.ready && c.ready()
                }
            }))
        }
    }), a.fn.extend({
        closeModal: function(c) {
            var d = {
                out_duration: 250,
                complete: void 0
            }, e = a(this), f = e.data("overlay-id"), g = a("#" + f);
            c = a.extend(d, c), a("body").css("overflow", ""), e.find(".modal-close").off("click.close"), a(document).off("keyup.leanModal" + f), g.velocity({
                opacity: 0
            }, {
                duration: c.out_duration,
                queue: !1,
                ease: "easeOutQuart"
            }), e.hasClass("bottom-sheet") ? e.velocity({
                bottom: "-100%",
                opacity: 0
            }, {
                duration: c.out_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function() {
                    g.css({
                        display: "none"
                    }), "function" == typeof c.complete && c.complete(), g.remove(), b--
                }
            }) : e.velocity({
                top: c.starting_top,
                opacity: 0,
                scaleX: .7
            }, {
                duration: c.out_duration,
                complete: function() {
                    a(this).css("display", "none"), "function" == typeof c.complete && c.complete(), g.remove(), b--
                }
            })
        }
    }), a.fn.extend({
        leanModal: function(b) {
            return this.each(function() {
                var c = {
                    starting_top: "4%"
                }, d = a.extend(c, b);
                a(this).click(function(b) {
                    d.starting_top = (a(this).offset().top - a(window).scrollTop()) / 1.15;
                    var c = a(this).attr("href") || "#" + a(this).data("target");
                    a(c).openModal(d), b.preventDefault()
                })
            })
        }
    })
}(jQuery), function(a) {
    a.fn.materialbox = function() {
        return this.each(function() {
            function b() {
                d=!1;
                var b = g.parent(".material-placeholder"), e = (window.innerWidth, window.innerHeight, g.data("width")), h = g.data("height");
                g.velocity("stop", !0), a("#materialbox-overlay").velocity("stop", !0), a(".materialbox-caption").velocity("stop", !0), a("#materialbox-overlay").velocity({
                    opacity: 0
                }, {
                    duration: f,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        c=!1, a(this).remove()
                    }
                }), g.velocity({
                    width: e,
                    height: h,
                    left: 0,
                    top: 0
                }, {
                    duration: f,
                    queue: !1,
                    easing: "easeOutQuad"
                }), a(".materialbox-caption").velocity({
                    opacity: 0
                }, {
                    duration: f,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        b.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }), g.css({
                            height: "",
                            top: "",
                            left: "",
                            width: "",
                            "max-width": "",
                            position: "",
                            "z-index": ""
                        }), g.removeClass("active"), d=!0, a(this).remove()
                    }
                })
            }
            if (!a(this).hasClass("initialized")) {
                a(this).addClass("initialized");
                var c=!1, d=!0, e = 275, f = 200, g = a(this), h = a("<div></div>").addClass("material-placeholder");
                g.wrap(h), g.on("click", function() {
                    var f = g.parent(".material-placeholder"), h = window.innerWidth, i = window.innerHeight, j = g.width(), k = g.height();
                    if (d===!1)
                        return b(), !1;
                    if (c && d===!0)
                        return b(), !1;
                    d=!1, g.addClass("active"), c=!0, f.css({
                        width: f[0].getBoundingClientRect().width,
                        height: f[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }), g.css({
                        position: "absolute",
                        "z-index": 1e3
                    }).data("width", j).data("height", k);
                    var l = a('<div id="materialbox-overlay"></div>').css({
                        opacity: 0
                    }).click(function() {
                        d===!0 && b()
                    });
                    if (a("body").append(l), l.velocity({
                        opacity: 1
                    }, {
                        duration: e,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), "" !== g.data("caption")) {
                        var m = a('<div class="materialbox-caption"></div>');
                        m.text(g.data("caption")), a("body").append(m), m.css({
                            display: "inline"
                        }), m.velocity({
                            opacity: 1
                        }, {
                            duration: e,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                    var n = 0, o = j / h, p = k / i, q = 0, r = 0;
                    o > p ? (n = k / j, q = .9 * h, r = .9 * h * n) : (n = j / k, q = .9 * i * n, r = .9 * i), g.hasClass("responsive-img") ? g.velocity({
                        "max-width": q,
                        width: j
                    }, {
                        duration: 0,
                        queue: !1,
                        complete: function() {
                            g.css({
                                left: 0,
                                top: 0
                            }).velocity({
                                height: r,
                                width: q,
                                left: a(document).scrollLeft() + h / 2 - g.parent(".material-placeholder").offset().left - q / 2,
                                top: a(document).scrollTop() + i / 2 - g.parent(".material-placeholder").offset().top - r / 2
                            }, {
                                duration: e,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    d=!0
                                }
                            })
                        }
                    }) : g.css("left", 0).css("top", 0).velocity({
                        height: r,
                        width: q,
                        left: a(document).scrollLeft() + h / 2 - g.parent(".material-placeholder").offset().left - q / 2,
                        top: a(document).scrollTop() + i / 2 - g.parent(".material-placeholder").offset().top - r / 2
                    }, {
                        duration: e,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            d=!0
                        }
                    })
                }), a(window).scroll(function() {
                    c && b()
                }), a(document).keyup(function(a) {
                    27 === a.keyCode && d===!0 && c && b()
                })
            }
        })
    }, a(document).ready(function() {
        a(".materialboxed").materialbox()
    })
}(jQuery), function(a) {
    a.fn.parallax = function() {
        var b = a(window).width();
        return this.each(function(c) {
            function d(c) {
                var d;
                d = 601 > b ? e.height() > 0 ? e.height() : e.children("img").height() : e.height() > 0 ? e.height() : 500;
                var f = e.children("img").first(), g = f.height(), h = g - d, i = e.offset().top + d, j = e.offset().top, k = a(window).scrollTop(), l = window.innerHeight, m = k + l, n = (m - j) / (d + l), o = Math.round(h * n);
                c && f.css("display", "block"), i > k && k + l > j && f.css("transform", "translate3D(-50%," + o + "px, 0)")
            }
            var e = a(this);
            e.addClass("parallax"), e.children("img").one("load", function() {
                d(!0)
            }).each(function() {
                this.complete && a(this).load()
            }), a(window).scroll(function() {
                b = a(window).width(), d(!1)
            }), a(window).resize(function() {
                b = a(window).width(), d(!1)
            })
        })
    }
}(jQuery), function(a) {
    var b = {
        init: function() {
            return this.each(function() {
                var b = a(this);
                a(window).width();
                b.width("100%");
                var c, d, e = b.find("li.tab a"), f = b.width(), g = b.find("li").first().outerWidth(), h = 0;
                c = a(e.filter('[href="' + location.hash + '"]')), 0 === c.length && (c = a(this).find("li.tab a.active").first()), 0 === c.length && (c = a(this).find("li.tab a").first()), c.addClass("active"), h = e.index(c), 0 > h && (h = 0), d = a(c[0].hash), b.append('<div class="indicator"></div>');
                var i = b.find(".indicator");
                b.is(":visible") && (i.css({
                    right: f - (h + 1) * g
                }), i.css({
                    left: h * g
                })), a(window).resize(function() {
                    f = b.width(), g = b.find("li").first().outerWidth(), 0 > h && (h = 0), 0 !== g && 0 !== f && (i.css({
                        right: f - (h + 1) * g
                    }), i.css({
                        left: h * g
                    }))
                }), e.not(c).each(function() {
                    a(this.hash).hide()
                }), b.on("click", "a", function(j) {
                    if (a(this).parent().hasClass("disabled"))
                        return void j.preventDefault();
                    f = b.width(), g = b.find("li").first().outerWidth(), c.removeClass("active"), d.hide(), c = a(this), d = a(this.hash), e = b.find("li.tab a"), c.addClass("active");
                    var k = h;
                    h = e.index(a(this)), 0 > h && (h = 0), d.show(), h - k >= 0 ? (i.velocity({
                        right: f - (h + 1) * g
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), i.velocity({
                        left: h * g
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : (i.velocity({
                        left: h * g
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), i.velocity({
                        right: f - (h + 1) * g
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })), j.preventDefault()
                })
            })
        },
        select_tab: function(a) {
            this.find('a[href="#' + a + '"]').trigger("click")
        }
    };
    a.fn.tabs = function(c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments)
    }, a(document).ready(function() {
        a("ul.tabs").tabs()
    })
}(jQuery), function(a) {
    a.fn.tooltip = function(b) {
        var c = null, d=!1, e = null, f = 5, g = {
            delay: 350
        };
        return "remove" === b ? (this.each(function() {
            a("#" + a(this).attr("data-tooltip-id")).remove()
        }), !1) : (b = a.extend(g, b), this.each(function() {
            var g = Materialize.guid(), h = a(this);
            h.attr("data-tooltip-id", g);
            var i = a("<span></span>").text(h.attr("data-tooltip")), j = a("<div></div>");
            j.addClass("material-tooltip").append(i).appendTo(a("body")).attr("id", g);
            var k = a("<div></div>").addClass("backdrop");
            k.appendTo(j), k.css({
                top: 0,
                left: 0
            }), h.off("mouseenter.tooltip mouseleave.tooltip"), h.on({
                "mouseenter.tooltip": function(a) {
                    var g = h.data("delay");
                    g = void 0 === g || "" === g ? b.delay : g, c = 0, e = setInterval(function() {
                        if (c += 10, c >= g && d===!1) {
                            d=!0, j.css({
                                display: "block",
                                left: "0px",
                                top: "0px"
                            }), j.children("span").text(h.attr("data-tooltip"));
                            var a = h.outerWidth(), b = h.outerHeight(), e = h.attr("data-position"), i = j.outerHeight(), l = j.outerWidth(), m = "0px", n = "0px", o = 8;
                            "top" === e ? (j.css({
                                top: h.offset().top - i - f,
                                left: h.offset().left + a / 2 - l / 2
                            }), m = "-10px", k.css({
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 90%",
                                marginTop: i,
                                marginLeft: l / 2 - k.width() / 2
                            })) : "left" === e ? (j.css({
                                top: h.offset().top + b / 2 - i / 2,
                                left: h.offset().left - l - f
                            }), n = "-10px", k.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: i / 2,
                                marginLeft: l
                            })) : "right" === e ? (j.css({
                                top: h.offset().top + b / 2 - i / 2,
                                left: h.offset().left + a + f
                            }), n = "+10px", k.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: i / 2,
                                marginLeft: "0px"
                            })) : (j.css({
                                top: h.offset().top + h.outerHeight() + f,
                                left: h.offset().left + a / 2 - l / 2
                            }), m = "+10px", k.css({
                                marginLeft: l / 2 - k.width() / 2
                            })), o = l / 8, 8 > o && (o = 8), ("right" === e || "left" === e) && (o = l / 10, 6 > o && (o = 6)), j.velocity({
                                marginTop: m,
                                marginLeft: n
                            }, {
                                duration: 350,
                                queue: !1
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                delay: 50,
                                queue: !1
                            }), k.css({
                                display: "block"
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({
                                scale: o
                            }, {
                                duration: 300,
                                delay: 0,
                                queue: !1,
                                easing: "easeInOutQuad"
                            })
                        }
                    }, 10)
                },
                "mouseleave.tooltip": function() {
                    clearInterval(e), c = 0, j.velocity({
                        opacity: 0,
                        marginTop: 0,
                        marginLeft: 0
                    }, {
                        duration: 225,
                        queue: !1,
                        delay: 225
                    }), k.velocity({
                        opacity: 0,
                        scale: 1
                    }, {
                        duration: 225,
                        delay: 275,
                        queue: !1,
                        complete: function() {
                            k.css("display", "none"), j.css("display", "none"), d=!1
                        }
                    })
                }
            })
        }))
    }, a(document).ready(function() {
        a(".tooltipped").tooltip()
    })
}(jQuery), function(a) {
    "use strict";
    function b(a) {
        return null !== a && a === a.window
    }
    function c(a) {
        return b(a) ? a : 9 === a.nodeType && a.defaultView
    }
    function d(a) {
        var b, d, e = {
            top: 0,
            left: 0
        }, f = a && a.ownerDocument;
        return b = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = c(f), {
            top: e.top + d.pageYOffset - b.clientTop,
            left: e.left + d.pageXOffset - b.clientLeft
        }
    }
    function e(a) {
        var b = "";
        for (var c in a)
            a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
        return b
    }
    function f(a) {
        if (k.allowEvent(a)===!1)
            return null;
        for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
            if (!(c instanceof SVGElement||-1 === c.className.indexOf("waves-effect"))) {
                b = c;
                break
            }
            if (c.classList.contains("waves-effect")) {
                b = c;
                break
            }
            c = c.parentElement
        }
        return b
    }
    function g(b) {
        var c = f(b);
        null !== c && (j.show(b, c), "ontouchstart"in a && (c.addEventListener("touchend", j.hide, !1), c.addEventListener("touchcancel", j.hide, !1)), c.addEventListener("mouseup", j.hide, !1), c.addEventListener("mouseleave", j.hide, !1))
    }
    var h = h || {}, i = document.querySelectorAll.bind(document), j = {
        duration: 750,
        show: function(a, b) {
            if (2 === a.button)
                return !1;
            var c = b || this, f = document.createElement("div");
            f.className = "waves-ripple", c.appendChild(f);
            var g = d(c), h = a.pageY - g.top, i = a.pageX - g.left, k = "scale(" + c.clientWidth / 100 * 10 + ")";
            "touches"in a && (h = a.touches[0].pageY - g.top, i = a.touches[0].pageX - g.left), f.setAttribute("data-hold", Date.now()), f.setAttribute("data-scale", k), f.setAttribute("data-x", i), f.setAttribute("data-y", h);
            var l = {
                top: h + "px",
                left: i + "px"
            };
            f.className = f.className + " waves-notransition", f.setAttribute("style", e(l)), f.className = f.className.replace("waves-notransition", ""), l["-webkit-transform"] = k, l["-moz-transform"] = k, l["-ms-transform"] = k, l["-o-transform"] = k, l.transform = k, l.opacity = "1", l["-webkit-transition-duration"] = j.duration + "ms", l["-moz-transition-duration"] = j.duration + "ms", l["-o-transition-duration"] = j.duration + "ms", l["transition-duration"] = j.duration + "ms", l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f.setAttribute("style", e(l))
        },
        hide: function(a) {
            k.touchup(a);
            var b = this, c = (1.4 * b.clientWidth, null), d = b.getElementsByClassName("waves-ripple");
            if (!(d.length > 0))
                return !1;
            c = d[d.length - 1];
            var f = c.getAttribute("data-x"), g = c.getAttribute("data-y"), h = c.getAttribute("data-scale"), i = Date.now() - Number(c.getAttribute("data-hold")), l = 350 - i;
            0 > l && (l = 0), setTimeout(function() {
                var a = {
                    top: g + "px",
                    left: f + "px",
                    opacity: "0",
                    "-webkit-transition-duration": j.duration + "ms",
                    "-moz-transition-duration": j.duration + "ms",
                    "-o-transition-duration": j.duration + "ms",
                    "transition-duration": j.duration + "ms",
                    "-webkit-transform": h,
                    "-moz-transform": h,
                    "-ms-transform": h,
                    "-o-transform": h,
                    transform: h
                };
                c.setAttribute("style", e(a)), setTimeout(function() {
                    try {
                        b.removeChild(c)
                    } catch (a) {
                        return !1
                    }
                }, j.duration)
            }, l)
        },
        wrapInput: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("input" === c.tagName.toLowerCase()) {
                    var d = c.parentNode;
                    if ("i" === d.tagName.toLowerCase()&&-1 !== d.className.indexOf("waves-effect"))
                        continue;
                    var e = document.createElement("i");
                    e.className = c.className + " waves-input-wrapper";
                    var f = c.getAttribute("style");
                    f || (f = ""), e.setAttribute("style", f), c.className = "waves-button-input", c.removeAttribute("style"), d.replaceChild(e, c), e.appendChild(c)
                }
            }
        }
    }, k = {
        touches: 0,
        allowEvent: function(a) {
            var b=!0;
            return "touchstart" === a.type ? k.touches += 1 : "touchend" === a.type || "touchcancel" === a.type ? setTimeout(function() {
                k.touches > 0 && (k.touches -= 1)
            }, 500) : "mousedown" === a.type && k.touches > 0 && (b=!1), b
        },
        touchup: function(a) {
            k.allowEvent(a)
        }
    };
    h.displayEffect = function(b) {
        b = b || {}, "duration"in b && (j.duration = b.duration), j.wrapInput(i(".waves-effect")), "ontouchstart"in a && document.body.addEventListener("touchstart", g, !1), document.body.addEventListener("mousedown", g, !1)
    }, h.attach = function(b) {
        "input" === b.tagName.toLowerCase() && (j.wrapInput([b]), b = b.parentElement), "ontouchstart"in a && b.addEventListener("touchstart", g, !1), b.addEventListener("mousedown", g, !1)
    }, a.Waves = h, document.addEventListener("DOMContentLoaded", function() {
        h.displayEffect()
    }, !1)
}(window), Materialize.toast = function(a, b, c, d) {
    function e(a) {
        var b = document.createElement("div");
        if (b.classList.add("toast"), c)
            for (var e = c.split(" "), f = 0, g = e.length; g > f; f++)
                b.classList.add(e[f]);
        ("object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName) ? b.appendChild(a) : a instanceof jQuery ? b.appendChild(a[0]) : b.innerHTML = a;
        var h = new Hammer(b, {
            prevent_default: !1
        });
        return h.on("pan", function(a) {
            var c = a.deltaX, d = 80;
            b.classList.contains("panning") || b.classList.add("panning");
            var e = 1 - Math.abs(c / d);
            0 > e && (e = 0), Vel(b, {
                left: c,
                opacity: e
            }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
            })
        }), h.on("panend", function(a) {
            var c = a.deltaX, e = 80;
            Math.abs(c) > e ? Vel(b, {
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof d && d(), b.parentNode.removeChild(b)
                }
            }) : (b.classList.remove("panning"), Vel(b, {
                left: 0,
                opacity: 1
            }, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }))
        }), b
    }
    c = c || "";
    var f = document.getElementById("toast-container");
    null === f && (f = document.createElement("div"), f.id = "toast-container", document.body.appendChild(f));
    var g = e(a);
    a && f.appendChild(g), g.style.top = "35px", g.style.opacity = 0, Vel(g, {
        top: "0px",
        opacity: 1
    }, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var h = b, i = setInterval(function() {
        null === g.parentNode && window.clearInterval(i), g.classList.contains("panning") || (h -= 20), 0 >= h && (Vel(g, {
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375,
            easing: "easeOutExpo",
            queue: !1,
            complete: function() {
                "function" == typeof d && d(), this[0].parentNode.removeChild(this[0])
            }
        }), window.clearInterval(i))
    }, 20)
}, function(a) {
    var b = {
        init: function(b) {
            var c = {
                menuWidth: 240,
                edge: "left",
                closeOnClick: !1
            };
            b = a.extend(c, b), a(this).each(function() {
                function c(c) {
                    g=!1, h=!1, a("body").css("overflow", ""), a("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            a(this).remove()
                        }
                    }), "left" === b.edge ? (f.css({
                        width: "",
                        right: "",
                        left: "0"
                    }), e.velocity({
                        left: - 1 * (b.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            c===!0 && (e.removeAttr("style"), e.css("width", b.menuWidth))
                        }
                    })) : (f.css({
                        width: "",
                        right: "0",
                        left: ""
                    }), e.velocity({
                        right: - 1 * (b.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            c===!0 && (e.removeAttr("style"), e.css("width", b.menuWidth))
                        }
                    }))
                }
                var d = a(this), e = a("#" + d.attr("data-activates"));
                240 != b.menuWidth && e.css("width", b.menuWidth);
                var f = a('<div class="drag-target"></div>');
                a("body").append(f), "left" == b.edge ? (e.css("left", - 1 * (b.menuWidth + 10)), f.css({
                    left: 0
                })) : (e.addClass("right-aligned").css("right", - 1 * (b.menuWidth + 10)).css("left", ""), f.css({
                    right: 0
                })), e.hasClass("fixed") && window.innerWidth > 992 && e.css("left", 0), e.hasClass("fixed") && a(window).resize(function() {
                    window.innerWidth > 992 ? 0 !== a("#sidenav-overlay").css("opacity") && h ? c(!0) : (e.removeAttr("style"), e.css("width", b.menuWidth)) : h===!1 && ("left" === b.edge ? e.css("left", - 1 * (b.menuWidth + 10)) : e.css("right", - 1 * (b.menuWidth + 10)))
                }), b.closeOnClick===!0 && e.on("click.itemclick", "a:not(.collapsible-header)", function() {
                    c()
                });
                var g=!1, h=!1;
                f.on("click", function() {
                    c()
                }), f.hammer({
                    prevent_default: !1
                }).bind("pan", function(d) {
                    if ("touch" == d.gesture.pointerType) {
                        var f = (d.gesture.direction, d.gesture.center.x);
                        d.gesture.center.y, d.gesture.velocityX;
                        if (a("body").css("overflow", "hidden"), 0 === a("#sidenav-overlay").length) {
                            var g = a('<div id="sidenav-overlay"></div>');
                            g.css("opacity", 0).click(function() {
                                c()
                            }), a("body").append(g)
                        }
                        if ("left" === b.edge && (f > b.menuWidth ? f = b.menuWidth : 0 > f && (f = 0)), "left" === b.edge)
                            f < b.menuWidth / 2 ? h=!1 : f >= b.menuWidth / 2 && (h=!0), e.css("left", f - b.menuWidth);
                        else {
                            f < window.innerWidth - b.menuWidth / 2 ? h=!0 : f >= window.innerWidth - b.menuWidth / 2 && (h=!1);
                            var i =- 1 * (f - b.menuWidth / 2);
                            i > 0 && (i = 0), e.css("right", i)
                        }
                        var j;
                        "left" === b.edge ? (j = f / b.menuWidth, a("#sidenav-overlay").velocity({
                            opacity: j
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (j = Math.abs((f - window.innerWidth) / b.menuWidth), a("#sidenav-overlay").velocity({
                            opacity: j
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(c) {
                    if ("touch" == c.gesture.pointerType) {
                        var d = c.gesture.velocityX;
                        g=!1, "left" === b.edge ? h && .3 >= d||-.5 > d ? (e.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), f.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        })) : (!h || d > .3) && (a("body").css("overflow", ""), e.velocity({
                            left: - 1 * (b.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a(this).remove()
                            }
                        }), f.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : h && d>=-.3 || d > .5 ? (e.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), f.css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!h||-.3 > d) && (a("body").css("overflow", ""), e.velocity({
                            right: - 1 * (b.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a(this).remove()
                            }
                        }), f.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                }), d.click(function() {
                    if (h===!0)
                        h=!1, g=!1, c();
                    else {
                        a("body").css("overflow", "hidden"), a("body").append(f), "left" === b.edge ? (f.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), e.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (f.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), e.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), e.css("left", ""));
                        var d = a('<div id="sidenav-overlay"></div>');
                        d.css("opacity", 0).click(function() {
                            h=!1, g=!1, c(), d.velocity({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            })
                        }), a("body").append(d), d.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                h=!0, g=!1
                            }
                        })
                    }
                    return !1
                })
            })
        },
        show: function() {
            this.trigger("click")
        },
        hide: function() {
            a("#sidenav-overlay").trigger("click")
        }
    };
    a.fn.sideNav = function(c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sideNav") : b.init.apply(this, arguments)
    }
}(jQuery), function(a) {
    function b(b, c, d, e) {
        var f = a();
        return a.each(g, function(a, g) {
            if (g.height() > 0) {
                var h = g.offset().top, i = g.offset().left, j = i + g.width(), k = h + g.height(), l=!(i > c || e > j || h > d || b > k);
                l && f.push(g)
            }
        }), f
    }
    function c() {
        ++j;
        var c = f.scrollTop(), d = f.scrollLeft(), e = d + f.width(), g = c + f.height(), i = b(c + k.top + 200, e + k.right, g + k.bottom, d + k.left);
        a.each(i, function(a, b) {
            var c = b.data("scrollSpy:ticks");
            "number" != typeof c && b.triggerHandler("scrollSpy:enter"), b.data("scrollSpy:ticks", j)
        }), a.each(h, function(a, b) {
            var c = b.data("scrollSpy:ticks");
            "number" == typeof c && c !== j && (b.triggerHandler("scrollSpy:exit"), b.data("scrollSpy:ticks", null))
        }), h = i
    }
    function d() {
        f.trigger("scrollSpy:winSize")
    }
    function e(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading===!1 ? 0 : l(), g = null, f = a.apply(d, e), d = e = null
        };
        return function() {
            var j = l();
            h || c.leading!==!1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing===!1 || (g = setTimeout(i, k)), f
        }
    }
    var f = a(window), g = [], h = [], i=!1, j = 0, k = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, l = Date.now || function() {
        return (new Date).getTime()
    };
    a.scrollSpy = function(b, d) {
        var h = [];
        b = a(b), b.each(function(b, c) {
            g.push(a(c)), a(c).data("scrollSpy:id", b), a("a[href=#" + a(c).attr("id") + "]").click(function(b) {
                b.preventDefault();
                var c = a(this.hash).offset().top + 1;
                a("html, body").animate({
                    scrollTop: c - 200
                }, {
                    duration: 400,
                    queue: !1,
                    easing: "easeOutCubic"
                })
            })
        }), d = d || {
            throttle: 100
        }, k.top = d.offsetTop || 0, k.right = d.offsetRight || 0, k.bottom = d.offsetBottom || 0, k.left = d.offsetLeft || 0;
        var j = e(c, d.throttle || 100), l = function() {
            a(document).ready(j)
        };
        return i || (f.on("scroll", l), f.on("resize", l), i=!0), setTimeout(l, 0), b.on("scrollSpy:enter", function() {
            h = a.grep(h, function(a) {
                return 0 != a.height()
            });
            var b = a(this);
            h[0] ? (a("a[href=#" + h[0].attr("id") + "]").removeClass("active"), b.data("scrollSpy:id") < h[0].data("scrollSpy:id") ? h.unshift(a(this)) : h.push(a(this))) : h.push(a(this)), a("a[href=#" + h[0].attr("id") + "]").addClass("active")
        }), b.on("scrollSpy:exit", function() {
            if (h = a.grep(h, function(a) {
                return 0 != a.height()
            }), h[0]) {
                a("a[href=#" + h[0].attr("id") + "]").removeClass("active");
                var b = a(this);
                h = a.grep(h, function(a) {
                    return a.attr("id") != b.attr("id")
                }), h[0] && a("a[href=#" + h[0].attr("id") + "]").addClass("active")
            }
        }), b
    }, a.winSizeSpy = function(b) {
        return a.winSizeSpy = function() {
            return f
        }, b = b || {
            throttle: 100
        }, f.on("resize", e(d, b.throttle || 100))
    }, a.fn.scrollSpy = function(b) {
        return a.scrollSpy(a(this), b)
    }
}(jQuery), function(a) {
    a(document).ready(function() {
        function b(b) {
            var c = b.css("font-family"), e = b.css("font-size");
            e && d.css("font-size", e), c && d.css("font-family", c), "off" === b.attr("wrap") && d.css("overflow-wrap", "normal").css("white-space", "pre"), d.text(b.val() + "\n");
            var f = d.html().replace(/\n/g, "<br>");
            d.html(f), b.is(":visible") ? d.css("width", b.width()) : d.css("width", a(window).width() / 2), b.css("height", d.height())
        }
        Materialize.updateTextFields = function() {
            var b = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            a(b).each(function(b, c) {
                a(c).val().length > 0 || void 0 !== a(this).attr("placeholder") || a(c)[0].validity.badInput===!0 ? a(this).siblings("label").addClass("active") : a(this).siblings("label, i").removeClass("active")
            })
        };
        var c = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        a("input[autofocus]").siblings("label, i").addClass("active"), a(document).on("change", c, function() {
            (0 !== a(this).val().length || void 0 !== a(this).attr("placeholder")) && a(this).siblings("label").addClass("active"), validate_field(a(this))
        }), a(document).ready(function() {
            Materialize.updateTextFields()
        }), a(document).on("reset", function(b) {
            var d = a(b.target);
            d.is("form") && (d.find(c).removeClass("valid").removeClass("invalid"), d.find(c).each(function() {
                "" === a(this).attr("value") && a(this).siblings("label, i").removeClass("active")
            }), d.find("select.initialized").each(function() {
                var a = d.find("option[selected]").text();
                d.siblings("input.select-dropdown").val(a)
            }))
        }), a(document).on("focus", c, function() {
            a(this).siblings("label, i").addClass("active")
        }), a(document).on("blur", c, function() {
            var b = a(this);
            0 === b.val().length && b[0].validity.badInput!==!0 && void 0 === b.attr("placeholder") && b.siblings("label, i").removeClass("active"), 0 === b.val().length && b[0].validity.badInput!==!0 && void 0 !== b.attr("placeholder") && b.siblings("i").removeClass("active"), validate_field(b)
        }), window.validate_field = function(a) {
            var b = void 0 !== a.attr("length"), c = parseInt(a.attr("length")), d = a.val().length;
            0 === a.val().length && a[0].validity.badInput===!1 ? a.hasClass("validate") && (a.removeClass("valid"), a.removeClass("invalid")) : a.hasClass("validate") && (a.is(":valid") && b && c >= d || a.is(":valid")&&!b ? (a.removeClass("invalid"), a.addClass("valid")) : (a.removeClass("valid"), a.addClass("invalid")))
        };
        var d = a(".hiddendiv").first();
        d.length || (d = a('<div class="hiddendiv common"></div>'), a("body").append(d));
        var e = ".materialize-textarea";
        a(e).each(function() {
            var c = a(this);
            c.val().length && b(c)
        }), a("body").on("keyup keydown autoresize", e, function() {
            b(a(this))
        }), a(document).on("change", '.file-field input[type="file"]', function() {
            for (var b = a(this).closest(".file-field"), c = b.find("input.file-path"), d = a(this)[0].files, e = [], f = 0; f < d.length; f++)
                e.push(d[f].name);
            c.val(e.join(", ")), c.trigger("change")
        });
        var f, g = "input[type=range]", h=!1;
        a(g).each(function() {
            var b = a('<span class="thumb"><span class="value"></span></span>');
            a(this).after(b)
        });
        var i = ".range-field";
        a(document).on("change", g, function(b) {
            var c = a(this).siblings(".thumb");
            c.find(".value").html(a(this).val())
        }), a(document).on("input mousedown touchstart", g, function(b) {
            var c = a(this).siblings(".thumb");
            c.length <= 0 && (c = a('<span class="thumb"><span class="value"></span></span>'), a(this).append(c)), c.find(".value").html(a(this).val()), h=!0, a(this).addClass("active"), c.hasClass("active") || c.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }), f = void 0 === b.pageX || null === b.pageX ? b.originalEvent.touches[0].pageX - a(this).offset().left : b.pageX - a(this).offset().left;
            var d = a(this).outerWidth();
            0 > f ? f = 0 : f > d && (f = d), c.addClass("active").css("left", f), c.find(".value").html(a(this).val())
        }), a(document).on("mouseup touchend", i, function() {
            h=!1, a(this).removeClass("active")
        }), a(document).on("mousemove touchmove", i, function(b) {
            var c, d = a(this).children(".thumb");
            if (h) {
                d.hasClass("active") || d.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), c = void 0 === b.pageX || null === b.pageX ? b.originalEvent.touches[0].pageX - a(this).offset().left : b.pageX - a(this).offset().left;
                var e = a(this).outerWidth();
                0 > c ? c = 0 : c > e && (c = e), d.addClass("active").css("left", c), d.find(".value").html(d.siblings(g).val())
            }
        }), a(document).on("mouseout touchleave", i, function() {
            if (!h) {
                var b = a(this).children(".thumb");
                b.hasClass("active") && b.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), b.removeClass("active")
            }
        })
    }), a.fn.material_select = function(b) {
        a(this).each(function() {
            if ($select = a(this), !$select.hasClass("browser-default")) {
                var c = $select.data("select-id");
                if (c && ($select.parent().find("span.caret").remove(), $select.parent().find("input").remove(), $select.unwrap(), a("ul#select-options-" + c).remove()), "destroy" === b)
                    return void $select.data("select-id", null).removeClass("initialized");
                var d = Materialize.guid();
                $select.data("select-id", d);
                var e = a('<div class="select-wrapper"></div>');
                e.addClass($select.attr("class"));
                var f, g = a('<ul id="select-options-' + d + '" class="dropdown-content select-dropdown"></ul>'), h = $select.children("option");
                f = void 0 !== $select.find("option:selected") ? $select.find("option:selected") : g.first(), h.each(function() {
                    g.append(a('<li class="' + (a(this).is(":disabled") ? "disabled" : "") + '"><span>' + a(this).html() + "</span></li>"))
                }), g.find("li").each(function(c) {
                    var d = $select;
                    a(this).click(function() {
                        a(this).hasClass("disabled") || (d.find("option").eq(c).prop("selected", !0), d.trigger("change"), d.siblings("input.select-dropdown").val(a(this).text()), "undefined" != typeof b && b())
                    })
                }), $select.wrap(e);
                var i = a('<span class="caret">&#9660;</span>');
                $select.is(":disabled") && i.addClass("disabled");
                var j = f.html().replace(/"/g, "&quot;"), k = a('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + d + '" value="' + j + '"/>');
                $select.before(k), k.before(i), a("body").append(g), $select.is(":disabled") || k.dropdown({
                    hover: !1
                }), $select.attr("tabindex") && a(k[0]).attr("tabindex", $select.attr("tabindex")), $select.addClass("initialized"), k.on("focus", function() {
                    a(this).trigger("open"), f = a(this).val(), selectedOption = g.find("li").filter(function() {
                        return a(this).text().toLowerCase() === f.toLowerCase()
                    })[0], activateOption(g, selectedOption)
                }), k.on("blur", function() {
                    a(this).trigger("close")
                }), activateOption = function(b, c) {
                    b.find("li.active").removeClass("active"), a(c).addClass("active"), b.scrollTo(c)
                }, filterQuery = [], onKeyDown = function(b) {
                    if (9 == b.which)
                        return void k.trigger("close");
                    if (40 == b.which&&!g.is(":visible"))
                        return void k.trigger("open");
                    if (13 != b.which || g.is(":visible")) {
                        b.preventDefault(), letter = String.fromCharCode(b.which).toLowerCase();
                        var c = [9, 13, 27, 38, 40];
                        letter&&-1 === c.indexOf(b.which) && (filterQuery.push(letter), string = filterQuery.join(""), newOption = g.find("li").filter(function() {
                            return 0 === a(this).text().toLowerCase().indexOf(string)
                        })[0], newOption && activateOption(g, newOption)), 13 == b.which && (activeOption = g.find("li.active:not(.disabled)")[0], activeOption && (a(activeOption).trigger("click"), k.trigger("close"))), 40 == b.which && (newOption = g.find("li.active").next("li:not(.disabled)")[0], newOption && activateOption(g, newOption)), 27 == b.which && k.trigger("close"), 38 == b.which && (newOption = g.find("li.active").prev("li:not(.disabled)")[0], newOption && activateOption(g, newOption)), setTimeout(function() {
                            filterQuery = []
                        }, 1e3)
                    }
                }, k.on("keydown", onKeyDown)
            }
        })
    }
}(jQuery), function(a) {
    var b = {
        init: function(b) {
            var c = {
                indicators: !0,
                height: 400,
                transition: 500,
                interval: 6e3
            };
            return b = a.extend(c, b), this.each(function() {
                function c(a, b) {
                    a.hasClass("center-align") ? a.velocity({
                        opacity: 0,
                        translateY: - 100
                    }, {
                        duration: b,
                        queue: !1
                    }) : a.hasClass("right-align") ? a.velocity({
                        opacity: 0,
                        translateX: 100
                    }, {
                        duration: b,
                        queue: !1
                    }) : a.hasClass("left-align") && a.velocity({
                        opacity: 0,
                        translateX: - 100
                    }, {
                        duration: b,
                        queue: !1
                    })
                }
                function d(a) {
                    a >= h.length ? a = 0 : 0 > a && (a = h.length - 1), i = g.find(".active").index(), i != a && (e = h.eq(i), $caption = e.find(".caption"), e.removeClass("active"), e.velocity({
                        opacity: 0
                    }, {
                        duration: b.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            h.not(".active").velocity({
                                opacity: 0,
                                translateX: 0,
                                translateY: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    }), c($caption, b.transition), b.indicators && j.eq(i).removeClass("active"), h.eq(a).velocity({
                        opacity: 1
                    }, {
                        duration: b.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), h.eq(a).find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: b.transition,
                        delay: b.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), h.eq(a).addClass("active"), b.indicators && j.eq(a).addClass("active"))
                }
                var e, f = a(this), g = f.find("ul.slides").first(), h = g.find("li"), i = g.find(".active").index();
                if ( - 1 != i && (e = h.eq(i)), f.hasClass("fullscreen") || (b.indicators ? f.height(b.height + 40) : f.height(b.height), g.height(b.height)), h.find(".caption").each(function() {
                    c(a(this), 0)
                }), h.find("img").each(function() {
                    a(this).css("background-image", "url(" + a(this).attr("src") + ")"), a(this).attr("src", "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")
                }), b.indicators) {
                    var j = a('<ul class="indicators"></ul>');
                    h.each(function(c) {
                        var e = a('<li class="indicator-item"></li>');
                        e.click(function() {
                            var c = g.parent(), e = c.find(a(this)).index();
                            d(e), clearInterval($interval), $interval = setInterval(function() {
                                i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i)
                            }, b.transition + b.interval)
                        }), j.append(e)
                    }), f.append(j), j = f.find("ul.indicators").find("li.indicator-item")
                }
                e ? e.show() : (h.first().addClass("active").velocity({
                    opacity: 1
                }, {
                    duration: b.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), i = 0, e = h.eq(i), b.indicators && j.eq(i).addClass("active")), e.find("img").each(function() {
                    e.find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: b.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    })
                }), $interval = setInterval(function() {
                    i = g.find(".active").index(), d(i + 1)
                }, b.transition + b.interval);
                var k=!1, l=!1, m=!1;
                f.hammer({
                    prevent_default: !1
                }).bind("pan", function(a) {
                    if ("touch" === a.gesture.pointerType) {
                        clearInterval($interval);
                        var b = a.gesture.direction, c = a.gesture.deltaX, d = a.gesture.velocityX;
                        $curr_slide = g.find(".active"), $curr_slide.velocity({
                            translateX: c
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === b && (c > f.innerWidth() / 2||-.65 > d) ? m=!0 : 2 === b && (c<-1 * f.innerWidth() / 2 || d > .65) && (l=!0);
                        var e;
                        l && (e = $curr_slide.next(), 0 === e.length && (e = h.first()), e.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })), m && (e = $curr_slide.prev(), 0 === e.length && (e = h.last()), e.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(a) {
                    "touch" === a.gesture.pointerType && ($curr_slide = g.find(".active"), k=!1, curr_index = g.find(".active").index(), m || l ? l ? (d(curr_index + 1), $curr_slide.velocity({
                        translateX: - 1 * f.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })) : m && (d(curr_index - 1), $curr_slide.velocity({
                        translateX: f.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })) : $curr_slide.velocity({
                        translateX: 0
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), l=!1, m=!1, clearInterval($interval), $interval = setInterval(function() {
                        i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i)
                    }, b.transition + b.interval))
                }), f.on("sliderPause", function() {
                    clearInterval($interval)
                }), f.on("sliderStart", function() {
                    clearInterval($interval), $interval = setInterval(function() {
                        i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i)
                    }, b.transition + b.interval)
                })
            })
        },
        pause: function() {
            a(this).trigger("sliderPause")
        },
        start: function() {
            a(this).trigger("sliderStart")
        }
    };
    a.fn.slider = function(c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments);
    }
}(jQuery), function(a) {
    a(document).ready(function() {
        a(document).on("click.card", ".card", function(b) {
            a(this).find("> .card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function() {
                    a(this).css({
                        display: "none"
                    })
                }
            }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && a(this).find(".card-reveal").css({
                display: "block"
            }).velocity("stop", !1).velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            }))
        })
    })
}(jQuery), function(a) {
    a(document).ready(function() {
        a(document).on("click.chip", ".chip .material-icons", function(b) {
            a(this).parent().remove()
        })
    })
}(jQuery), function(a) {
    a(document).ready(function() {
        a.fn.pushpin = function(b) {
            var c = {
                top: 0,
                bottom: 1 / 0,
                offset: 0
            };
            return b = a.extend(c, b), $index = 0, this.each(function() {
                function c(a) {
                    a.removeClass("pin-top"), a.removeClass("pinned"), a.removeClass("pin-bottom")
                }
                function d(d, e) {
                    d.each(function() {
                        b.top <= e && b.bottom >= e&&!a(this).hasClass("pinned") && (c(a(this)), a(this).css("top", b.offset), a(this).addClass("pinned")), e < b.top&&!a(this).hasClass("pin-top") && (c(a(this)), a(this).css("top", 0), a(this).addClass("pin-top")), e > b.bottom&&!a(this).hasClass("pin-bottom") && (c(a(this)), a(this).addClass("pin-bottom"), a(this).css("top", b.bottom - g))
                    })
                }
                var e = Materialize.guid(), f = a(this), g = a(this).offset().top;
                d(f, a(window).scrollTop()), a(window).on("scroll." + e, function() {
                    var c = a(window).scrollTop() + b.offset;
                    d(f, c)
                })
            })
        }
    })
}(jQuery), function(a) {
    a(document).ready(function() {
        a.fn.reverse = [].reverse, a(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn", function(c) {
            var d = a(this);
            b(d)
        }), a(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn", function(b) {
            var d = a(this);
            c(d)
        })
    }), a.fn.extend({
        openFAB: function() {
            var c = a(this);
            b(c)
        },
        closeFAB: function() {
            c($this)
        }
    });
    var b = function(b) {
        if ($this = b, $this.hasClass("active")===!1) {
            $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: "40px"
            }, {
                duration: 0
            });
            var c = 0;
            $this.find("ul .btn-floating").reverse().each(function() {
                a(this).velocity({
                    opacity: "1",
                    scaleX: "1",
                    scaleY: "1",
                    translateY: "0"
                }, {
                    duration: 80,
                    delay: c
                }), c += 40
            })
        }
    }, c = function(a) {
        $this = a, $this.removeClass("active");
        $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: "40px"
        }, {
            duration: 80
        })
    }
}(jQuery), function(a) {
    Materialize.fadeInImage = function(b) {
        var c = a(b);
        c.css({
            opacity: 0
        }), a(c).velocity({
            opacity: 1
        }, {
            duration: 650,
            queue: !1,
            easing: "easeOutSine"
        }), a(c).velocity({
            opacity: 1
        }, {
            duration: 1300,
            queue: !1,
            easing: "swing",
            step: function(b, c) {
                c.start = 100;
                var d = b / 100, e = 150 - (100 - b) / 1.75;
                100 > e && (e = 100), b >= 0 && a(this).css({
                    "-webkit-filter": "grayscale(" + d + ")brightness(" + e + "%)",
                    filter: "grayscale(" + d + ")brightness(" + e + "%)"
                })
            }
        })
    }, Materialize.showStaggeredList = function(b) {
        var c = 0;
        a(b).find("li").velocity({
            translateX: "-100px"
        }, {
            duration: 0
        }), a(b).find("li").each(function() {
            a(this).velocity({
                opacity: "1",
                translateX: "0"
            }, {
                duration: 800,
                delay: c,
                easing: [60, 10]
            }), c += 120
        })
    }, a(document).ready(function() {
        var b=!1, c=!1;
        a(".dismissable").each(function() {
            a(this).hammer({
                prevent_default: !1
            }).bind("pan", function(d) {
                if ("touch" === d.gesture.pointerType) {
                    var e = a(this), f = d.gesture.direction, g = d.gesture.deltaX, h = d.gesture.velocityX;
                    e.velocity({
                        translateX: g
                    }, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === f && (g > e.innerWidth() / 2||-.75 > h) && (b=!0), 2 === f && (g<-1 * e.innerWidth() / 2 || h > .75) && (c=!0)
                }
            }).bind("panend", function(d) {
                if (Math.abs(d.gesture.deltaX) < a(this).innerWidth() / 2 && (c=!1, b=!1), "touch" === d.gesture.pointerType) {
                    var e = a(this);
                    if (b || c) {
                        var f;
                        f = b ? e.innerWidth() : - 1 * e.innerWidth(), e.velocity({
                            translateX: f
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e.css("border", "none"), e.velocity({
                                    height: 0,
                                    padding: 0
                                }, {
                                    duration: 200,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        e.remove()
                                    }
                                })
                            }
                        })
                    } else 
                        e.velocity({
                            translateX: 0
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                    b=!1, c=!1
                }
            })
        })
    })
}(jQuery), function(a) {
    Materialize.scrollFire = function(a) {
        var b=!1;
        window.addEventListener("scroll", function() {
            b=!0
        }), setInterval(function() {
            if (b) {
                b=!1;
                for (var c = window.pageYOffset + window.innerHeight, d = 0; d < a.length; d++) {
                    var e = a[d], f = e.selector, g = e.offset, h = e.callback, i = document.querySelector(f);
                    if (null !== i) {
                        var j = i.getBoundingClientRect().top + window.pageYOffset;
                        if (c > j + g && e.done!==!0) {
                            var k = new Function(h);
                            k(), e.done=!0
                        }
                    }
                }
            }
        }, 100)
    }
}(jQuery), function(a) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : this.Picker = a(jQuery)
}(function(a) {
    function b(f, g, i, l) {
        function m() {
            return b._.node("div", b._.node("div", b._.node("div", b._.node("div", y.component.nodes(t.open), v.box), v.wrap), v.frame), v.holder)
        }
        function n() {
            w.data(g, y).addClass(v.input).attr("tabindex", - 1).val(w.data("value") ? y.get("select", u.format) : f.value), u.editable || w.on("focus." + t.id + " click." + t.id, function(a) {
                a.preventDefault(), y.$root[0].focus()
            }).on("keydown." + t.id, q), e(f, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: f.id + "_root"
            })
        }
        function o() {
            y.$root.on({
                keydown: q,
                focusin: function(a) {
                    y.$root.removeClass(v.focused), a.stopPropagation()
                },
                "mousedown click": function(b) {
                    var c = b.target;
                    c != y.$root.children()[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), y.$root[0].focus()))
                }
            }).on({
                focus: function() {
                    w.addClass(v.target)
                },
                blur: function() {
                    w.removeClass(v.target)
                }
            }).on("focus.toOpen", r).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var b = a(this), c = b.data(), d = b.hasClass(v.navDisabled) || b.hasClass(v.disabled), e = h();
                e = e && (e.type || e.href), (d || e&&!a.contains(y.$root[0], e)) && y.$root[0].focus(), !d && c.nav ? y.set("highlight", y.component.item.highlight, {
                    nav: c.nav
                }) : !d && "pick"in c ? y.set("select", c.pick) : c.clear ? y.clear().close(!0) : c.close && y.close(!0)
            }), e(y.$root[0], "hidden", !0)
        }
        function p() {
            var b;
            u.hiddenName===!0 ? (b = f.name, f.name = "") : (b = ["string" == typeof u.hiddenPrefix ? u.hiddenPrefix: "", "string" == typeof u.hiddenSuffix ? u.hiddenSuffix: "_submit"], b = b[0] + f.name + b[1]), y._hidden = a('<input type=hidden name="' + b + '"' + (w.data("value") || f.value ? ' value="' + y.get("select", u.formatSubmit) + '"' : "") + ">")[0], w.on("change." + t.id, function() {
                y._hidden.value = f.value ? y.get("select", u.formatSubmit) : ""
            }), u.container ? a(u.container).append(y._hidden) : w.after(y._hidden)
        }
        function q(a) {
            var b = a.keyCode, c = /^(8|46)$/.test(b);
            return 27 == b ? (y.close(), !1) : void((32 == b || c ||!t.open && y.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? y.clear().close() : y.open()))
        }
        function r(a) {
            a.stopPropagation(), "focus" == a.type && y.$root.addClass(v.focused), y.open()
        }
        if (!f)
            return b;
        var s=!1, t = {
            id: f.id || "P" + Math.abs(~~(Math.random() * new Date))
        }, u = i ? a.extend(!0, {}, i.defaults, l) : l || {}, v = a.extend({}, b.klasses(), u.klass), w = a(f), x = function() {
            return this.start()
        }, y = x.prototype = {
            constructor: x,
            $node: w,
            start: function() {
                return t && t.start ? y : (t.methods = {}, t.start=!0, t.open=!1, t.type = f.type, f.autofocus = f == h(), f.readOnly=!u.editable, f.id = f.id || t.id, "text" != f.type && (f.type = "text"), y.component = new i(y, u), y.$root = a(b._.node("div", m(), v.picker, 'id="' + f.id + '_root" tabindex="0"')), o(), u.formatSubmit && p(), n(), u.container ? a(u.container).append(y.$root) : w.after(y.$root), y.on({
                    start: y.component.onStart,
                    render: y.component.onRender,
                    stop: y.component.onStop,
                    open: y.component.onOpen,
                    close: y.component.onClose,
                    set: y.component.onSet
                }).on({
                    start: u.onStart,
                    render: u.onRender,
                    stop: u.onStop,
                    open: u.onOpen,
                    close: u.onClose,
                    set: u.onSet
                }), s = c(y.$root.children()[0]), f.autofocus && y.open(), y.trigger("start").trigger("render"))
            },
            render: function(a) {
                return a ? y.$root.html(m()) : y.$root.find("." + v.box).html(y.component.nodes(t.open)), y.trigger("render")
            },
            stop: function() {
                return t.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), w.removeClass(v.input).removeData(g), setTimeout(function() {
                    w.off("." + t.id)
                }, 0), f.type = t.type, f.readOnly=!1, y.trigger("stop"), t.methods = {}, t.start=!1, y) : y
            },
            open: function(c) {
                return t.open ? y : (w.addClass(v.active), e(f, "expanded", !0), setTimeout(function() {
                    y.$root.addClass(v.opened), e(y.$root[0], "hidden", !1)
                }, 0), c!==!1 && (t.open=!0, s && k.css("overflow", "hidden").css("padding-right", "+=" + d()), y.$root[0].focus(), j.on("click." + t.id + " focusin." + t.id, function(a) {
                    var b = a.target;
                    b != f && b != document && 3 != a.which && y.close(b === y.$root.children()[0])
                }).on("keydown." + t.id, function(c) {
                    var d = c.keyCode, e = y.component.key[d], f = c.target;
                    27 == d ? y.close(!0) : f != y.$root[0] ||!e && 13 != d ? a.contains(y.$root[0], f) && 13 == d && (c.preventDefault(), f.click()) : (c.preventDefault(), e ? b._.trigger(y.component.key.go, y, [b._.trigger(e)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || y.set("select", y.component.item.highlight).close())
                })), y.trigger("open"))
            },
            close: function(a) {
                return a && (y.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                    y.$root.on("focus.toOpen", r)
                }, 0)), w.removeClass(v.active), e(f, "expanded", !1), setTimeout(function() {
                    y.$root.removeClass(v.opened + " " + v.focused), e(y.$root[0], "hidden", !0)
                }, 0), t.open ? (t.open=!1, s && k.css("overflow", "").css("padding-right", "-=" + d()), j.off("." + t.id), y.trigger("close")) : y
            },
            clear: function(a) {
                return y.set("clear", null, a)
            },
            set: function(b, c, d) {
                var e, f, g = a.isPlainObject(b), h = g ? b: {};
                if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
                    g || (h[b] = c);
                    for (e in h)
                        f = h[e], e in y.component.item && (void 0 === f && (f = null), y.component.set(e, f, d)), ("select" == e || "clear" == e) && w.val("clear" == e ? "" : y.get(e, u.format)).trigger("change");
                    y.render()
                }
                return d.muted ? y : y.trigger("set", h)
            },
            get: function(a, c) {
                if (a = a || "value", null != t[a])
                    return t[a];
                if ("valueSubmit" == a) {
                    if (y._hidden)
                        return y._hidden.value;
                    a = "value"
                }
                if ("value" == a)
                    return f.value;
                if (a in y.component.item) {
                    if ("string" == typeof c) {
                        var d = y.component.get(a);
                        return d ? b._.trigger(y.component.formats.toString, y.component, [c, d]) : ""
                    }
                    return y.component.get(a)
                }
            },
            on: function(b, c, d) {
                var e, f, g = a.isPlainObject(b), h = g ? b: {};
                if (b) {
                    g || (h[b] = c);
                    for (e in h)
                        f = h[e], d && (e = "_" + e), t.methods[e] = t.methods[e] || [], t.methods[e].push(f)
                }
                return y
            },
            off: function() {
                var a, b, c = arguments;
                for (a = 0, namesCount = c.length; a < namesCount; a += 1)
                    b = c[a], b in t.methods && delete t.methods[b];
                return y
            },
            trigger: function(a, c) {
                var d = function(a) {
                    var d = t.methods[a];
                    d && d.map(function(a) {
                        b._.trigger(a, y, [c])
                    })
                };
                return d("_" + a), d(a), y
            }
        };
        return new x
    }
    function c(a) {
        var b, c = "position";
        return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b
    }
    function d() {
        if (k.height() <= i.height())
            return 0;
        var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"), c = b[0].offsetWidth;
        b.css("overflow", "scroll");
        var d = a('<div style="width:100%" />').appendTo(b), e = d[0].offsetWidth;
        return b.remove(), c - e
    }
    function e(b, c, d) {
        if (a.isPlainObject(c))
            for (var e in c)
                f(b, e, c[e]);
        else 
            f(b, c, d)
    }
    function f(a, b, c) {
        a.setAttribute(("role" == b ? "" : "aria-") + b, c)
    }
    function g(b, c) {
        a.isPlainObject(b) || (b = {
            attribute: c
        }), c = "";
        for (var d in b) {
            var e = ("role" == d ? "" : "aria-") + d, f = b[d];
            c += null == f ? "" : e + '="' + b[d] + '"'
        }
        return c
    }
    function h() {
        try {
            return document.activeElement
        } catch (a) {}
    }
    var i = a(window), j = a(document), k = a(document.documentElement);
    return b.klasses = function(a) {
        return a = a || "picker", {
            picker: a,
            opened: a + "--opened",
            focused: a + "--focused",
            input: a + "__input",
            active: a + "__input--active",
            target: a + "__input--target",
            holder: a + "__holder",
            frame: a + "__frame",
            wrap: a + "__wrap",
            box: a + "__box"
        }
    }, b._ = {
        group: function(a) {
            for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i)
                c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
            return d
        },
        node: function(b, c, d, e) {
            return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : ""
        },
        lead: function(a) {
            return (10 > a ? "0" : "") + a
        },
        trigger: function(a, b, c) {
            return "function" == typeof a ? a.apply(b, c || []) : a
        },
        digits: function(a) {
            return /\d/.test(a[1]) ? 2 : 1
        },
        isDate: function(a) {
            return {}.toString.call(a).indexOf("Date")>-1 && this.isInteger(a.getDate())
        },
        isInteger: function(a) {
            return {}.toString.call(a).indexOf("Number")>-1 && a%1 === 0
        },
        ariaAttr: g
    }, b.extend = function(c, d) {
        a.fn[c] = function(e, f) {
            var g = this.data(c);
            return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function() {
                var f = a(this);
                f.data(c) || new b(this, c, d, e)
            })
        }, a.fn[c].defaults = d.defaults
    }, b
}), function(a) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], a) : "object" == typeof exports ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery)
}(function(a, b) {
    function c(a, b) {
        var c = this, d = a.$node[0], e = d.value, f = a.$node.data("value"), g = f || e, h = f ? b.formatSubmit: b.format, i = function() {
            return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction
        };
        c.settings = b, c.$node = a.$node, c.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable =- function(a) {
            return a[0]===!0 ? a.shift() : - 1
        }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, {
            format: h
        }) : c.set("select", null).set("highlight", c.item.now), c.key = {
            40: 7,
            38: - 7,
            39: function() {
                return i()?-1 : 1
            },
            37: function() {
                return i() ? 1 : - 1
            },
            go: function(a) {
                var b = c.item.highlight, d = new Date(b.year, b.month, b.date + a);
                c.set("highlight", d, {
                    interval: a
                }), this.render()
            }
        }, a.on("render", function() {
            a.$root.find("." + b.klass.selectMonth).on("change", function() {
                var c = this.value;
                c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus"))
            }), a.$root.find("." + b.klass.selectYear).on("change", function() {
                var c = this.value;
                c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function() {
            var d = "";
            c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1)
        }, 1).on("close", function() {
            a.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }
    var d = 7, e = 6, f = a._;
    c.prototype.set = function(a, b, c) {
        var d = this, e = d.item;
        return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable": "flip" == a ? "enable": a] = d.queue[a].split(" ").map(function(e) {
            return b = d[e](a, b, c)
        }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d)
    }, c.prototype.get = function(a) {
        return this.item[a]
    }, c.prototype.create = function(a, c, d) {
        var e, g = this;
        return c = void 0 === c ? a : c, c==-(1 / 0) || c == 1 / 0 ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), {
            year: e || c.getFullYear(),
            month: e || c.getMonth(),
            date: e || c.getDate(),
            day: e || c.getDay(),
            obj: e || c,
            pick: e || c.getTime()
        }
    }, c.prototype.createRange = function(a, c) {
        var d = this, e = function(a) {
            return a===!0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a
        };
        return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : f.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), {
            from: e(a),
            to: e(c)
        }
    }, c.prototype.withinRange = function(a, b) {
        return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick
    }, c.prototype.overlapRanges = function(a, b) {
        var c = this;
        return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to)
    }, c.prototype.now = function(a, b, c) {
        return b = new Date, c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c)
    }, c.prototype.navigate = function(a, c, d) {
        var e, f, g, h, i = b.isArray(c), j = b.isPlainObject(c), k = this.item.view;
        if (i || j) {
            for (j ? (f = c.year, g = c.month, h = c.date) : (f =+ c[0], g =+ c[1], h =+ c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h)
                .getMonth() !== g;
            )h -= 1;
            c = [f, g, h]
        }
        return c
    }, c.prototype.normalize = function(a) {
        return a.setHours(0, 0, 0, 0), a
    }, c.prototype.measure = function(a, b) {
        var c = this;
        return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, {
            rel: b
        })) : b = "min" == a?-(1 / 0) : 1 / 0, b
    }, c.prototype.viewset = function(a, b) {
        return this.create([b.year, b.month, 1])
    }, c.prototype.validate = function(a, c, d) {
        var e, g, h, i, j = this, k = c, l = d && d.interval ? d.interval: 1, m =- 1 === j.item.enable, n = j.item.min, o = j.item.max, p = m && j.item.disable.filter(function(a) {
            if (b.isArray(a)) {
                var d = j.create(a).pick;
                d < c.pick ? e=!0 : d > c.pick && (g=!0)
            }
            return f.isInteger(a)
        }).length;
        if ((!d ||!d.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) ||!m && (c.pick <= n.pick || c.pick >= o.pick)))
            for (m&&!p && (!g && l > 0 ||!e && 0 > l) && (l*=-1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : - 1), c.pick <= n.pick ? (h=!0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : - 1)])) : c.pick >= o.pick && (i=!0, l =- 1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h ||!i);)
                c = j.create([c.year, c.month, c.date + l]);
        return c
    }, c.prototype.disabled = function(a) {
        var c = this, d = c.item.disable.filter(function(d) {
            return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1)%7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0
        });
        return d = d.length&&!d.filter(function(a) {
            return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted
        }).length, - 1 === c.item.enable?!d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick
    }, c.prototype.parse = function(a, b, c) {
        var d = this, e = {};
        return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), d.formats.toArray(c.format).map(function(a) {
            var c = d.formats[a], g = c ? f.trigger(c, d, [b, e]): a.replace(/^!/, "").length;
            c && (e[a] = b.substr(0, g)), b = b.substr(g)
        }), [e.yyyy || e.yy, + (e.mm || e.m) - 1, e.dd || e.d]) : b
    }, c.prototype.formats = function() {
        function a(a, b, c) {
            var d = a.match(/\w+/)[0];
            return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length
        }
        function b(a) {
            return a.match(/\w+/)[0].length
        }
        return {
            d: function(a, b) {
                return a ? f.digits(a) : b.date
            },
            dd: function(a, b) {
                return a ? 2 : f.lead(b.date)
            },
            ddd: function(a, c) {
                return a ? b(a) : this.settings.weekdaysShort[c.day]
            },
            dddd: function(a, c) {
                return a ? b(a) : this.settings.weekdaysFull[c.day]
            },
            m: function(a, b) {
                return a ? f.digits(a) : b.month + 1
            },
            mm: function(a, b) {
                return a ? 2 : f.lead(b.month + 1)
            },
            mmm: function(b, c) {
                var d = this.settings.monthsShort;
                return b ? a(b, d, c) : d[c.month]
            },
            mmmm: function(b, c) {
                var d = this.settings.monthsFull;
                return b ? a(b, d, c) : d[c.month]
            },
            yy: function(a, b) {
                return a ? 2 : ("" + b.year).slice(2)
            },
            yyyy: function(a, b) {
                return a ? 4 : b.year
            },
            toArray: function(a) {
                return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },
            toString: function(a, b) {
                var c = this;
                return c.formats.toArray(a).map(function(a) {
                    return f.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "")
                }).join("")
            }
        }
    }(), c.prototype.isDateExact = function(a, c) {
        var d = this;
        return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : b.isPlainObject(a) && b.isPlainObject(c) ? d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to) : !1
    }, c.prototype.isDateOverlap = function(a, c) {
        var d = this, e = d.settings.firstDay ? 1: 0;
        return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a%7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c%7 + e, c === d.create(a).day + 1) : b.isPlainObject(a) && b.isPlainObject(c) ? d.overlapRanges(a, c) : !1
    }, c.prototype.flipEnable = function(a) {
        var b = this.item;
        b.enable = a || ( - 1 == b.enable ? 1 : - 1)
    }, c.prototype.deactivate = function(a, c) {
        var d = this, e = d.item.disable.slice(0);
        return "flip" == c ? d.flipEnable() : c===!1 ? (d.flipEnable(1), e = []) : c===!0 ? (d.flipEnable( - 1), e = []) : c.map(function(a) {
            for (var c, g = 0; g < e.length; g += 1)
                if (d.isDateExact(a, e[g])) {
                    c=!0;
                    break
                }
            c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a)
        }), e
    }, c.prototype.activate = function(a, c) {
        var d = this, e = d.item.disable, g = e.length;
        return "flip" == c ? d.flipEnable() : c===!0 ? (d.flipEnable(1), e = []) : c===!1 ? (d.flipEnable( - 1), e = []) : c.map(function(a) {
            var c, h, i, j;
            for (i = 0; g > i; i += 1) {
                if (h = e[i], d.isDateExact(h, a)) {
                    c = e[i] = null, j=!0;
                    break
                }
                if (d.isDateOverlap(h, a)) {
                    b.isPlainObject(a) ? (a.inverted=!0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [a.getFullYear(), a.getMonth(), a.getDate(), "inverted"]);
                    break
                }
            }
            if (c)
                for (i = 0; g > i; i += 1)
                    if (d.isDateExact(e[i], a)) {
                        e[i] = null;
                        break
                    }
            if (j)
                for (i = 0; g > i; i += 1)
                    if (d.isDateOverlap(e[i], a)) {
                        e[i] = null;
                        break
                    }
            c && e.push(c)
        }), e.filter(function(a) {
            return null != a
        })
    }, c.prototype.nodes = function(a) {
        var b = this, c = b.settings, g = b.item, h = g.now, i = g.select, j = g.highlight, k = g.view, l = g.disable, m = g.min, n = g.max, o = function(a, b) {
            return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({
                min: 0,
                max: d - 1,
                i: 1,
                node: "th",
                item: function(d) {
                    return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"']
                }
            })))
        }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysLetter).slice(0), c.weekdaysFull.slice(0)), p = function(a) {
            return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month ||!a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a||-1) + " " + f.ariaAttr({
                role: "button",
                controls: b.$node[0].id + "_table"
            }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"')
        }, q = function(d) {
            var e = c.showMonthsShort ? c.monthsShort: c.monthsFull;
            return "short_months" == d && (e = c.monthsShort), c.selectMonths && void 0 == d ? f.node("select", f.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(a) {
                    return [e[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "")]
                }
            }), c.klass.selectMonth + " browser-default", (a ? "" : "disabled") + " " + f.ariaAttr({
                controls: b.$node[0].id + "_table"
            }) + ' title="' + c.labelMonthSelect + '"') : "short_months" == d ? null != i ? f.node("div", e[i.month]) : f.node("div", e[k.month]) : f.node("div", e[k.month], c.klass.month)
        }, r = function(d) {
            var e = k.year, g = c.selectYears===!0 ? 5: ~~(c.selectYears / 2);
            if (g) {
                var h = m.year, i = n.year, j = e - g, l = e + g;
                if (h > j && (l += h - j, j = h), l > i) {
                    var o = j - h, p = l - i;
                    j -= o > p ? p : o, l = i
                }
                if (c.selectYears && void 0 == d)
                    return f.node("select", f.group({
                        min: j,
                        max: l,
                        i: 1,
                        node: "option",
                        item: function(a) {
                            return [a, 0, "value=" + a + (e == a ? " selected" : "")]
                        }
                    }), c.klass.selectYear + " browser-default", (a ? "" : "disabled") + " " + f.ariaAttr({
                        controls: b.$node[0].id + "_table"
                    }) + ' title="' + c.labelYearSelect + '"')
            }
            return "raw" == d ? f.node("div", e) : f.node("div", e, c.klass.year)
        };
        return createDayLabel = function() {
            return null != i ? f.node("div", i.date) : f.node("div", h.date)
        }, createWeekdayLabel = function() {
            var a;
            a = null != i ? i.day : h.day;
            var b = c.weekdaysFull[a];
            return b
        }, f.node("div", f.node("div", createWeekdayLabel(), "picker__weekday-display") + f.node("div", q("short_months"), c.klass.month_display) + f.node("div", createDayLabel(), c.klass.day_display) + f.node("div", r("raw"), c.klass.year_display), c.klass.date_display) + f.node("div", f.node("div", (c.selectYears ? q() + r() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({
            min: 0,
            max: e - 1,
            i: 1,
            node: "tr",
            item: function(a) {
                var e = c.firstDay && 0 === b.create([k.year, k.month, 1]).day?-7 : 0;
                return [f.group({
                    min: d * a - k.day + e + 1,
                    max: function() {
                        return this.min + d - 1
                    },
                    i: 1,
                    node: "td",
                    item: function(a) {
                        a = b.create([k.year, k.month, a + (c.firstDay ? 1 : 0)]);
                        var d = i && i.pick == a.pick, e = j && j.pick == a.pick, g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick, o = f.trigger(b.formats.toString, b, [c.format, a]);
                        return [f.node("div", a.date, function(b) {
                            return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), b.join(" ")
                        }([c.klass.day]), "data-pick=" + a.pick + " " + f.ariaAttr({
                            role: "gridcell",
                            label: o,
                            selected: d && b.$node.val() === o?!0: null,
                            activedescendant: e?!0: null,
                            disabled: g?!0: null
                        })), "", f.ariaAttr({
                            role: "presentation"
                        })]
                    }
                })]
            }
        })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({
            role: "grid",
            controls: b.$node[0].id,
            readonly: !0
        })), c.klass.calendar_container) + f.node("div", f.node("button", c.today, "btn-flat picker__today", "type=button data-pick=" + h.pick + (a&&!b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })) + f.node("button", c.clear, "btn-flat picker__clear", "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })) + f.node("button", c.close, "btn-flat picker__close", "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })), c.klass.footer)
    }, c.defaults = function(a) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            format: "d mmmm, yyyy",
            klass: {
                table: a + "table",
                header: a + "header",
                date_display: a + "date-display",
                day_display: a + "day-display",
                month_display: a + "month-display",
                year_display: a + "year-display",
                calendar_container: a + "calendar-container",
                navPrev: a + "nav--prev",
                navNext: a + "nav--next",
                navDisabled: a + "nav--disabled",
                month: a + "month",
                year: a + "year",
                selectMonth: a + "select--month",
                selectYear: a + "select--year",
                weekdays: a + "weekday",
                day: a + "day",
                disabled: a + "day--disabled",
                selected: a + "day--selected",
                highlighted: a + "day--highlighted",
                now: a + "day--today",
                infocus: a + "day--infocus",
                outfocus: a + "day--outfocus",
                footer: a + "footer",
                buttonClear: a + "button--clear",
                buttonToday: a + "button--today",
                buttonClose: a + "button--close"
            }
        }
    }(a.klasses().picker + "__"), a.extend("pickadate", c)
}), function(a) {
    function b() {
        var b =+ a(this).attr("length"), c =+ a(this).val().length, d = b >= c;
        a(this).parent().find('span[class="character-counter"]').html(c + "/" + b), e(d, a(this))
    }
    function c(b) {
        var c = a("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
        b.parent().append(c)
    }
    function d() {
        a(this).parent().find('span[class="character-counter"]').html("")
    }
    function e(a, b) {
        var c = b.hasClass("invalid");
        a && c ? b.removeClass("invalid") : a || c || (b.removeClass("valid"), b.addClass("invalid"))
    }
    a.fn.characterCounter = function() {
        return this.each(function() {
            var e = void 0 !== a(this).attr("length");
            e && (a(this).on("input", b), a(this).on("focus", b), a(this).on("blur", d), c(a(this)))
        })
    }, a(document).ready(function() {
        a("input, textarea").characterCounter()
    })
}(jQuery);
