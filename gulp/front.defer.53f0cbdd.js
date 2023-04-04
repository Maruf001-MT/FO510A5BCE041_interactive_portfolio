function scrollUpdate() {
    viewport.watch && (viewport.scrollTop = _settings.window.scrollTop(), viewport.scrollTop > 200 ? _settings.body.addClass("body-scrolled") : _settings.body.removeClass("body-scrolled"), viewport.scrollTop > 10 ? (_settings.header.addClass("invers"), _settings.submenu.addClass("submenu-scrolled")) : (_settings.header.removeClass("invers"), _settings.submenu.removeClass("submenu-scrolled"))), layoutParallax()
}

function responsive() {
    ww = $(window).width(), ww < viewport.treshold ? (viewport.smallScreen = !0, _settings.body.addClass("body-small")) : (viewport.smallScreen = !1, _settings.body.removeClass("body-small"), _settings.header.removeClass("responsive-menu-shown"))
}

function owlKeyboardSupport() {
    $(document).keydown(function(t) {
        return 37 == t.keyCode ? (owlObject.prev(), !1) : 39 == t.keyCode ? (owlObject.next(), !1) : void 0
    })
}

function owlThumbsBuild() {
    $("#owl-thumbs").size() > 0 && $("#gallery .item-image").size() > 0 && ($("#gallery .item-image").each(function(t) {
        $('<span class="thumb" data-index="' + t + '"><img src="' + $(this).data("owl-thumb") + '"></span>').appendTo($("#owl-thumbs")).on("click", function() {
            owlObject.goTo($(this).data("index"))
        })
    }), owlThumbsUpdate())
}

function owlThumbsUpdate() {
    $("#owl-thumbs").size() > 0 && $("#gallery .item-image").size() > 0 && ($("#owl-thumbs .active").removeClass("active"), $index = $("#gallery .owl-item.active .item").data("index"), $("#owl-thumbs [data-index=" + $index + "]").addClass("active"))
}

function navigateTo(t) {
    $("body,html").animate({
        scrollTop: t
    }, "7000", "swing")
}

function layoutParallax() {
    var t = $(".no-touch .banner-parallax");
    t.each(function() {
        var t = $(this),
            e = $(".banner-visual", $(this));
        if (viewport.smallScreen) t.css({
            transform: "translateY(0)"
        });
        else {
            var n = viewport.scrollTop * _settings.parallaxSpeed;
            e.css({
                transform: "translateY(" + n + "px)"
            })
        }
    })
}

function loadBanner() {
    $(".img-con").each(function() {
        var t = $(this).data("background"),
            e = $("<img/>").attr("src", t),
            n = e[0],
            i = $(this);
        n.complete ? (e.remove(), i.addClass("banner-loaded")) : (i.hide(), e.load(function() {
            e.remove(), i.show().addClass("banner-loaded")
        }))
    })
}

function loadBuildings() {
    $(".building .building-actual").each(function() {
        var t = $(this).parents(".building"),
            e = t.find(".building-transparent");
        return this.complete ? (t.addClass("building-loaded"), loadBuildingImage(e), !0) : ($(this).load(function() {
            t.addClass("building-loaded-first"), loadBuildingImage(e)
        }), $(this).attr("src", $(this).attr("src")), void 0)
    }), $(".no-touch .building").on("mouseenter", function() {
        return clearTimeout(window.hoverTimer), window.building = $(this), window.hoverTimer = setTimeout(focusBuilding, 250), !1
    }), $(".no-touch .building").on("mouseleave", function() {
        clearTimeout(window.hoverTimer), window.hoverTimer = setTimeout(unfocusBuildings, 250)
    })
}

function loadBuildingImage(t) {
    t.attr("draggable", !1), t.rwdImageMaps()
}

function focusBuilding() {
    var t = window.building;
    t.hasClass("building-focus") || (unfocusBuildings(), t.addClass("building-focus"), $(".building").not(".building-focus").addClass("building-blur"))
}

function unfocusBuildings() {
    $(".building-focus").removeClass("building-focus"), $(".building-blur").removeClass("building-blur")
}! function(t, e) {
    function n(t) {
        var e = t.length,
            n = ce.type(t);
        return ce.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t) {
        var e = Ee[t] = {};
        return ce.each(t.match(de) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function o(t, n, i, o) {
        if (ce.acceptData(t)) {
            var r, s, a = ce.expando,
                l = t.nodeType,
                u = l ? ce.cache : t,
                c = l ? t[a] : t[a] && a;
            if (c && u[c] && (o || u[c].data) || i !== e || "string" != typeof n) return c || (c = l ? t[a] = ee.pop() || ce.guid++ : a), u[c] || (u[c] = l ? {} : {
                toJSON: ce.noop
            }), ("object" == typeof n || "function" == typeof n) && (o ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)), s = u[c], o || (s.data || (s.data = {}), s = s.data), i !== e && (s[ce.camelCase(n)] = i), "string" == typeof n ? (r = s[n], null == r && (r = s[ce.camelCase(n)])) : r = s, r
        }
    }

    function r(t, e, n) {
        if (ce.acceptData(t)) {
            var i, o, r = t.nodeType,
                s = r ? ce.cache : t,
                l = r ? t[ce.expando] : ce.expando;
            if (s[l]) {
                if (e && (i = n ? s[l] : s[l].data)) {
                    ce.isArray(e) ? e = e.concat(ce.map(e, ce.camelCase)) : e in i ? e = [e] : (e = ce.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                    for (; o--;) delete i[e[o]];
                    if (n ? !a(i) : !ce.isEmptyObject(i)) return
                }(n || (delete s[l].data, a(s[l]))) && (r ? ce.cleanData([t], !0) : ce.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }

    function s(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var o = "data-" + n.replace(ke, "-$1").toLowerCase();
            if (i = t.getAttribute(o), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ie.test(i) ? ce.parseJSON(i) : i
                } catch (r) {}
                ce.data(t, n, i)
            } else i = e
        }
        return i
    }

    function a(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ce.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c() {
        try {
            return J.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function d(t, e, n) {
        if (ce.isFunction(e)) return ce.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return ce.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (qe.test(e)) return ce.filter(e, t, n);
            e = ce.filter(e, t)
        }
        return ce.grep(t, function(t) {
            return ce.inArray(t, e) >= 0 !== n
        })
    }

    function f(t) {
        var e = Ue.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function h(t, e) {
        return ce.nodeName(t, "table") && ce.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function m(t) {
        return t.type = (null !== ce.find.attr(t, "type")) + "/" + t.type, t
    }

    function g(t) {
        var e = rn.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function y(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ce._data(n, "globalEval", !e || ce._data(e[i], "globalEval"))
    }

    function v(t, e) {
        if (1 === e.nodeType && ce.hasData(t)) {
            var n, i, o, r = ce._data(t),
                s = ce._data(e, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; o > i; i++) ce.event.add(e, n, a[n][i])
            }
            s.data && (s.data = ce.extend({}, s.data))
        }
    }

    function b(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ce.support.noCloneEvent && e[ce.expando]) {
                o = ce._data(e);
                for (i in o.events) ce.removeEvent(e, i, o.handle);
                e.removeAttribute(ce.expando)
            }
            "script" === n && e.text !== t.text ? (m(e).text = t.text, g(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ce.support.html5Clone && t.innerHTML && !ce.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function w(t, n) {
        var i, o, r = 0,
            s = typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== Y ? t.querySelectorAll(n || "*") : e;
        if (!s)
            for (s = [], i = t.childNodes || t; null != (o = i[r]); r++) !n || ce.nodeName(o, n) ? s.push(o) : ce.merge(s, w(o, n));
        return n === e || n && ce.nodeName(t, n) ? ce.merge([t], s) : s
    }

    function x(t) {
        en.test(t.type) && (t.defaultChecked = t.checked)
    }

    function T(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = En.length; o--;)
            if (e = En[o] + n, e in t) return e;
        return i
    }

    function C(t, e) {
        return t = e || t, "none" === ce.css(t, "display") || !ce.contains(t.ownerDocument, t)
    }

    function S(t, e) {
        for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = ce._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (r[s] = ce._data(i, "olddisplay", N(i.nodeName)))) : r[s] || (o = C(i), (n && "none" !== n || !o) && ce._data(i, "olddisplay", o ? n : ce.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function E(t, e, n) {
        var i = vn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function I(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += ce.css(t, n + Sn[r], !0, o)), i ? ("content" === n && (s -= ce.css(t, "padding" + Sn[r], !0, o)), "margin" !== n && (s -= ce.css(t, "border" + Sn[r] + "Width", !0, o))) : (s += ce.css(t, "padding" + Sn[r], !0, o), "padding" !== n && (s += ce.css(t, "border" + Sn[r] + "Width", !0, o)));
        return s
    }

    function k(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = pn(t),
            s = ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = dn(t, e, r), (0 > o || null == o) && (o = t.style[e]), bn.test(o)) return o;
            i = s && (ce.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + I(t, e, n || (s ? "border" : "content"), i, r) + "px"
    }

    function N(t) {
        var e = J,
            n = xn[t];
        return n || (n = A(t, e), "none" !== n && n || (cn = (cn || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (cn[0].contentWindow || cn[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = A(t, e), cn.detach()), xn[t] = n), n
    }

    function A(t, e) {
        var n = ce(e.createElement(t)).appendTo(e.body),
            i = ce.css(n[0], "display");
        return n.remove(), i
    }

    function P(t, e, n, i) {
        var o;
        if (ce.isArray(e)) ce.each(e, function(e, o) {
            n || kn.test(t) ? i(t, o) : P(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== ce.type(e)) i(t, e);
        else
            for (o in e) P(t + "[" + o + "]", e[o], n, i)
    }

    function L(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(de) || [];
            if (ce.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function D(t, n, i, o) {
        function r(l) {
            var u;
            return s[l] = !0, ce.each(t[l] || [], function(t, l) {
                var c = l(n, i, o);
                return "string" != typeof c || a || s[c] ? a ? !(u = c) : e : (n.dataTypes.unshift(c), r(c), !1)
            }), u
        }
        var s = {},
            a = t === Bn;
        return r(n.dataTypes[0]) || !s["*"] && r("*")
    }

    function $(t, n) {
        var i, o, r = ce.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== e && ((r[o] ? t : i || (i = {}))[o] = n[o]);
        return i && ce.extend(!0, t, i), t
    }

    function _(t, n, i) {
        for (var o, r, s, a, l = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), r === e && (r = t.mimeType || n.getResponseHeader("Content-Type"));
        if (r)
            for (a in l)
                if (l[a] && l[a].test(r)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in i) s = u[0];
        else {
            for (a in i) {
                if (!u[0] || t.converters[a + " " + u[0]]) {
                    s = a;
                    break
                }
                o || (o = a)
            }
            s = s || o
        }
        return s ? (s !== u[0] && u.unshift(s), i[s]) : e
    }

    function j(t, e, n, i) {
        var o, r, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s)
                for (o in u)
                    if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: s ? p : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function R() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function z() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function O() {
        return setTimeout(function() {
            Zn = e
        }), Zn = ce.now()
    }

    function H(t, e, n) {
        for (var i, o = (ri[e] || []).concat(ri["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function M(t, e, n) {
        var i, o, r = 0,
            s = oi.length,
            a = ce.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Zn || O(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(t, [u, r, n]), 1 > r && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: ce.extend({}, e),
                opts: ce.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Zn || O(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ce.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) u.tweens[n].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (W(c, u.opts.specialEasing); s > r; r++)
            if (i = oi[r].call(u, t, c, u.opts)) return i;
        return ce.map(c, H, u), ce.isFunction(u.opts.start) && u.opts.start.call(t, u), ce.fx.timer(ce.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(t, e) {
        var n, i, o, r, s;
        for (n in t)
            if (i = ce.camelCase(n), o = e[i], r = t[n], ce.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = ce.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
    }

    function q(t, e, n) {
        var i, o, r, s, a, l, u = this,
            c = {},
            p = t.style,
            d = t.nodeType && C(t),
            f = ce._data(t, "fxshow");
        n.queue || (a = ce._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, ce.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ce.css(t, "display") && "none" === ce.css(t, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (o = e[i], ei.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (d ? "hide" : "show")) continue;
                c[i] = f && f[i] || ce.style(t, i)
            }
        if (!ce.isEmptyObject(c)) {
            f ? "hidden" in f && (d = f.hidden) : f = ce._data(t, "fxshow", {}), r && (f.hidden = !d), d ? ce(t).show() : u.done(function() {
                ce(t).hide()
            }), u.done(function() {
                var e;
                ce._removeData(t, "fxshow");
                for (e in c) ce.style(t, e, c[e])
            });
            for (i in c) s = H(d ? f[i] : 0, i, u), i in f || (f[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function F(t, e, n, i, o) {
        return new F.prototype.init(t, e, n, i, o)
    }

    function B(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Sn[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function X(t) {
        return ce.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var U, V, Y = typeof e,
        G = t.location,
        J = t.document,
        Q = J.documentElement,
        K = t.jQuery,
        Z = t.$,
        te = {},
        ee = [],
        ne = "1.10.1",
        ie = ee.concat,
        oe = ee.push,
        re = ee.slice,
        se = ee.indexOf,
        ae = te.toString,
        le = te.hasOwnProperty,
        ue = ne.trim,
        ce = function(t, e) {
            return new ce.fn.init(t, e, V)
        },
        pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        de = /\S+/g,
        fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^[\],:{}\s]*$/,
        ye = /(?:^|:|,)(?:\s*\[)+/g,
        ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        we = /^-ms-/,
        xe = /-([\da-z])/gi,
        Te = function(t, e) {
            return e.toUpperCase()
        },
        Ce = function(t) {
            (J.addEventListener || "load" === t.type || "complete" === J.readyState) && (Se(), ce.ready())
        },
        Se = function() {
            J.addEventListener ? (J.removeEventListener("DOMContentLoaded", Ce, !1), t.removeEventListener("load", Ce, !1)) : (J.detachEvent("onreadystatechange", Ce), t.detachEvent("onload", Ce))
        };
    ce.fn = ce.prototype = {
            jquery: ne,
            constructor: ce,
            init: function(t, n, i) {
                var o, r;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : he.exec(t), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                    if (o[1]) {
                        if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), me.test(o[1]) && ce.isPlainObject(n))
                            for (o in n) ce.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                        return this
                    }
                    if (r = J.getElementById(o[2]), r && r.parentNode) {
                        if (r.id !== o[2]) return i.find(t);
                        this.length = 1, this[0] = r
                    }
                    return this.context = J, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ce.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ce.makeArray(t, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return re.call(this)
            },
            get: function(t) {
                return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
            },
            pushStack: function(t) {
                var e = ce.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return ce.each(this, t, e)
            },
            ready: function(t) {
                return ce.ready.promise().done(t), this
            },
            slice: function() {
                return this.pushStack(re.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            map: function(t) {
                return this.pushStack(ce.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: oe,
            sort: [].sort,
            splice: [].splice
        }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function() {
            var t, n, i, o, r, s, a = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ce.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                if (null != (r = arguments[l]))
                    for (o in r) t = a[o], i = r[o], a !== i && (c && i && (ce.isPlainObject(i) || (n = ce.isArray(i))) ? (n ? (n = !1, s = t && ce.isArray(t) ? t : []) : s = t && ce.isPlainObject(t) ? t : {}, a[o] = ce.extend(c, s, i)) : i !== e && (a[o] = i));
            return a
        }, ce.extend({
            expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
            noConflict: function(e) {
                return t.$ === ce && (t.$ = Z), e && t.jQuery === ce && (t.jQuery = K), ce
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ce.readyWait++ : ce.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--ce.readyWait : !ce.isReady) {
                    if (!J.body) return setTimeout(ce.ready);
                    ce.isReady = !0, t !== !0 && --ce.readyWait > 0 || (U.resolveWith(J, [ce]), ce.fn.trigger && ce(J).trigger("ready").off("ready"))
                }
            },
            isFunction: function(t) {
                return "function" === ce.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === ce.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? te[ae.call(t)] || "object" : typeof t
            },
            isPlainObject: function(t) {
                var n;
                if (!t || "object" !== ce.type(t) || t.nodeType || ce.isWindow(t)) return !1;
                try {
                    if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (i) {
                    return !1
                }
                if (ce.support.ownLast)
                    for (n in t) return le.call(t, n);
                for (n in t);
                return n === e || le.call(t, n)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            error: function(t) {
                throw Error(t)
            },
            parseHTML: function(t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || J;
                var i = me.exec(t),
                    o = !n && [];
                return i ? [e.createElement(i[1])] : (i = ce.buildFragment([t], e, o), o && ce(o).remove(), ce.merge([], i.childNodes))
            },
            parseJSON: function(n) {
                return t.JSON && t.JSON.parse ? t.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ce.trim(n), n && ge.test(n.replace(ve, "@").replace(be, "]").replace(ye, ""))) ? Function("return " + n)() : (ce.error("Invalid JSON: " + n), e)
            },
            parseXML: function(n) {
                var i, o;
                if (!n || "string" != typeof n) return null;
                try {
                    t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (r) {
                    i = e
                }
                return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), i
            },
            noop: function() {},
            globalEval: function(e) {
                e && ce.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(we, "ms-").replace(xe, Te)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.apply(t[r], i), o === !1) break
                } else if (a)
                    for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.call(t[r], r, t[r]), o === !1) break;
                return t
            },
            trim: ue && !ue.call("﻿ ") ? function(t) {
                return null == t ? "" : ue.call(t)
            } : function(t) {
                return null == t ? "" : (t + "").replace(fe, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ce.merge(i, "string" == typeof t ? [t] : t) : oe.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (se) return se.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, n) {
                var i = n.length,
                    o = t.length,
                    r = 0;
                if ("number" == typeof i)
                    for (; i > r; r++) t[o++] = n[r];
                else
                    for (; n[r] !== e;) t[o++] = n[r++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                var i, o = [],
                    r = 0,
                    s = t.length;
                for (n = !!n; s > r; r++) i = !!e(t[r], r), n !== i && o.push(t[r]);
                return o
            },
            map: function(t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; s > r; r++) o = e(t[r], r, i), null != o && (l[l.length] = o);
                else
                    for (r in t) o = e(t[r], r, i), null != o && (l[l.length] = o);
                return ie.apply([], l)
            },
            guid: 1,
            proxy: function(t, n) {
                var i, o, r;
                return "string" == typeof n && (r = t[n], n = t, t = r), ce.isFunction(t) ? (i = re.call(arguments, 2), o = function() {
                    return t.apply(n || this, i.concat(re.call(arguments)))
                }, o.guid = t.guid = t.guid || ce.guid++, o) : e
            },
            access: function(t, n, i, o, r, s, a) {
                var l = 0,
                    u = t.length,
                    c = null == i;
                if ("object" === ce.type(i)) {
                    r = !0;
                    for (l in i) ce.access(t, n, l, i[l], !0, s, a)
                } else if (o !== e && (r = !0, ce.isFunction(o) || (a = !0), c && (a ? (n.call(t, o), n = null) : (c = n, n = function(t, e, n) {
                        return c.call(ce(t), n)
                    })), n))
                    for (; u > l; l++) n(t[l], i, a ? o : o.call(t[l], l, n(t[l], i)));
                return r ? t : c ? n.call(t) : u ? n(t[0], i) : s
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            }
        }), ce.ready.promise = function(e) {
            if (!U)
                if (U = ce.Deferred(), "complete" === J.readyState) setTimeout(ce.ready);
                else if (J.addEventListener) J.addEventListener("DOMContentLoaded", Ce, !1), t.addEventListener("load", Ce, !1);
            else {
                J.attachEvent("onreadystatechange", Ce), t.attachEvent("onload", Ce);
                var n = !1;
                try {
                    n = null == t.frameElement && J.documentElement
                } catch (i) {}
                n && n.doScroll && function o() {
                    if (!ce.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        Se(), ce.ready()
                    }
                }()
            }
            return U.promise(e)
        }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            te["[object " + e + "]"] = e.toLowerCase()
        }), V = ce(J),
        function(t, e) {
            function n(t, e, n, i) {
                var o, r, s, a, l, u, c, p, d, f;
                if ((e ? e.ownerDocument || e : B) !== R && j(e), e = e || R, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (O && !i) {
                    if (o = Ce.exec(t))
                        if (s = o[1]) {
                            if (9 === a) {
                                if (r = e.getElementById(s), !r || !r.parentNode) return n;
                                if (r.id === s) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && q(e, r) && r.id === s) return n.push(r), n
                        } else {
                            if (o[2]) return oe.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = o[3]) && k.getElementsByClassName && e.getElementsByClassName) return oe.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (k.qsa && (!H || !H.test(t))) {
                        if (p = c = F, d = e, f = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = m(t), (c = e.getAttribute("id")) ? p = c.replace(Ie, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + g(u[l]);
                            d = ye.test(t) && e.parentNode || e, f = u.join(",")
                        }
                        if (f) try {
                            return oe.apply(n, d.querySelectorAll(f)), n
                        } catch (h) {} finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(he, "$1"), e, n, i)
            }

            function i(t) {
                return Te.test(t + "")
            }

            function o() {
                function t(n, i) {
                    return e.push(n += " ") > A.cacheLength && delete t[e.shift()], t[n] = i
                }
                var e = [];
                return t
            }

            function r(t) {
                return t[F] = !0, t
            }

            function s(t) {
                var e = R.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function a(t, e, n) {
                t = t.split("|");
                for (var i, o = t.length, r = n ? null : e; o--;)(i = A.attrHandle[t[o]]) && i !== e || (A.attrHandle[t[o]] = r)
            }

            function l(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : t[e] === !0 ? e.toLowerCase() : null
            }

            function u(t, e) {
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }

            function c(t) {
                return "input" === t.nodeName.toLowerCase() ? t.defaultValue : e
            }

            function p(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Z) - (~t.sourceIndex || Z);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function d(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function f(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function h(t) {
                return r(function(e) {
                    return e = +e, r(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function m(t, e) {
                var i, o, r, s, a, l, u, c = Y[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], u = A.preFilter; a;) {
                    (!i || (o = me.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ge.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(he, " ")
                    }), a = a.slice(i.length));
                    for (s in A.filter) !(o = xe[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? n.error(t) : Y(t, l).slice(0)
            }

            function g(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function y(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = U++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, s) {
                    var a, l, u, c = X + " " + r;
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o)
                                if (u = e[F] || (e[F] = {}), (l = u[i]) && l[0] === c) {
                                    if ((a = l[1]) === !0 || a === N) return a === !0
                                } else if (l = u[i] = [c], l[1] = t(e, n, s) || N, l[1] === !0) return !0
                }
            }

            function v(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function b(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), u && e.push(a));
                return s
            }

            function w(t, e, n, i, o, s) {
                return i && !i[F] && (i = w(i)), o && !o[F] && (o = w(o, s)), r(function(r, s, a, l) {
                    var u, c, p, d = [],
                        f = [],
                        h = s.length,
                        m = r || C(e || "*", a.nodeType ? [a] : a, []),
                        g = !t || !r && e ? m : b(m, d, t, a, l),
                        y = n ? o || (r ? t : h || i) ? [] : s : g;
                    if (n && n(g, y, a, l), i)
                        for (u = b(y, f), i(u, [], a, l), c = u.length; c--;)(p = u[c]) && (y[f[c]] = !(g[f[c]] = p));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (u = [], c = y.length; c--;)(p = y[c]) && u.push(g[c] = p);
                                o(null, y = [], u, l)
                            }
                            for (c = y.length; c--;)(p = y[c]) && (u = o ? se.call(r, p) : d[c]) > -1 && (r[u] = !(s[u] = p))
                        }
                    } else y = b(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, l) : oe.apply(s, y)
                })
            }

            function x(t) {
                for (var e, n, i, o = t.length, r = A.relative[t[0].type], s = r || A.relative[" "], a = r ? 1 : 0, l = y(function(t) {
                        return t === e
                    }, s, !0), u = y(function(t) {
                        return se.call(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        return !r && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                    }]; o > a; a++)
                    if (n = A.relative[t[a].type]) c = [y(v(c), n)];
                    else {
                        if (n = A.filter[t[a].type].apply(null, t[a].matches), n[F]) {
                            for (i = ++a; o > i && !A.relative[t[i].type]; i++);
                            return w(a > 1 && v(c), a > 1 && g(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(he, "$1"), n, i > a && x(t.slice(a, i)), o > i && x(t = t.slice(i)), o > i && g(t))
                        }
                        c.push(n)
                    }
                return v(c)
            }

            function T(t, e) {
                var i = 0,
                    o = e.length > 0,
                    s = t.length > 0,
                    a = function(r, a, l, u, c) {
                        var p, d, f, h = [],
                            m = 0,
                            g = "0",
                            y = r && [],
                            v = null != c,
                            w = $,
                            x = r || s && A.find.TAG("*", c && a.parentNode || a),
                            T = X += null == w ? 1 : Math.random() || .1;
                        for (v && ($ = a !== R && a, N = i); null != (p = x[g]); g++) {
                            if (s && p) {
                                for (d = 0; f = t[d++];)
                                    if (f(p, a, l)) {
                                        u.push(p);
                                        break
                                    }
                                v && (X = T, N = ++i)
                            }
                            o && ((p = !f && p) && m--, r && y.push(p))
                        }
                        if (m += g, o && g !== m) {
                            for (d = 0; f = e[d++];) f(y, h, a, l);
                            if (r) {
                                if (m > 0)
                                    for (; g--;) y[g] || h[g] || (h[g] = ne.call(u));
                                h = b(h)
                            }
                            oe.apply(u, h), v && !r && h.length > 0 && m + e.length > 1 && n.uniqueSort(u)
                        }
                        return v && (X = T, $ = w), y
                    };
                return o ? r(a) : a
            }

            function C(t, e, i) {
                for (var o = 0, r = e.length; r > o; o++) n(t, e[o], i);
                return i
            }

            function S(t, e, n, i) {
                var o, r, s, a, l, u = m(t);
                if (!i && 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && k.getById && 9 === e.nodeType && O && A.relative[r[1].type]) {
                        if (e = (A.find.ID(s.matches[0].replace(ke, Ne), e) || [])[0], !e) return n;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = xe.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !A.relative[a = s.type]);)
                        if ((l = A.find[a]) && (i = l(s.matches[0].replace(ke, Ne), ye.test(r[0].type) && e.parentNode || e))) {
                            if (r.splice(o, 1), t = i.length && g(r), !t) return oe.apply(n, i), n;
                            break
                        }
                }
                return D(t, u)(i, e, !O, n, ye.test(t)), n
            }

            function E() {}
            var I, k, N, A, P, L, D, $, _, j, R, z, O, H, M, W, q, F = "sizzle" + -new Date,
                B = t.document,
                X = 0,
                U = 0,
                V = o(),
                Y = o(),
                G = o(),
                J = !1,
                Q = function() {
                    return 0
                },
                K = typeof e,
                Z = 1 << 31,
                te = {}.hasOwnProperty,
                ee = [],
                ne = ee.pop,
                ie = ee.push,
                oe = ee.push,
                re = ee.slice,
                se = ee.indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ae = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                le = "[\\x20\\t\\r\\n\\f]",
                ue = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                pe = ue.replace("w", "w#"),
                de = "\\[" + le + "*(" + ue + ")" + le + "*(?:([*^$|!~]?=)" + le + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + pe + ")|)|)" + le + "*\\]",
                fe = ":(" + ue + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + de.replace(3, 8) + ")*)|.*)\\)|)",
                he = RegExp("^" + le + "+|((?:^|[^\\\\])(?:\\\\.)*)" + le + "+$", "g"),
                me = RegExp("^" + le + "*," + le + "*"),
                ge = RegExp("^" + le + "*([>+~]|" + le + ")" + le + "*"),
                ye = RegExp(le + "*[+~]"),
                ve = RegExp("=" + le + "*([^\\]'\"]*)" + le + "*\\]", "g"),
                be = RegExp(fe),
                we = RegExp("^" + pe + "$"),
                xe = {
                    ID: RegExp("^#(" + ue + ")"),
                    CLASS: RegExp("^\\.(" + ue + ")"),
                    TAG: RegExp("^(" + ue.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + de),
                    PSEUDO: RegExp("^" + fe),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + le + "*(even|odd|(([+-]|)(\\d*)n|)" + le + "*(?:([+-]|)" + le + "*(\\d+)|))" + le + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + ae + ")$", "i"),
                    needsContext: RegExp("^" + le + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + le + "*((?:-\\d)?\\d*)" + le + "*\\)|)(?=[^-]|$)", "i")
                },
                Te = /^[^{]+\{\s*\[native \w/,
                Ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Se = /^(?:input|select|textarea|button)$/i,
                Ee = /^h\d$/i,
                Ie = /'|\\/g,
                ke = RegExp("\\\\([\\da-f]{1,6}" + le + "?|(" + le + ")|.)", "ig"),
                Ne = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                oe.apply(ee = re.call(B.childNodes), B.childNodes), ee[B.childNodes.length].nodeType
            } catch (Ae) {
                oe = {
                    apply: ee.length ? function(t, e) {
                        ie.apply(t, re.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            L = n.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, k = n.support = {}, j = n.setDocument = function(t) {
                var n = t ? t.ownerDocument || t : B,
                    o = n.parentWindow;
                return n !== R && 9 === n.nodeType && n.documentElement ? (R = n, z = n.documentElement, O = !L(n), o && o.frameElement && o.attachEvent("onbeforeunload", function() {
                    j()
                }), k.attributes = s(function(t) {
                    return t.innerHTML = "<a href='#'></a>", a("type|href|height|width", u, "#" === t.firstChild.getAttribute("href")), a(ae, l, null == t.getAttribute("disabled")), t.className = "i", !t.getAttribute("className")
                }), k.input = s(function(t) {
                    return t.innerHTML = "<input>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }), a("value", c, k.attributes && k.input), k.getElementsByTagName = s(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), k.getElementsByClassName = s(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), k.getById = s(function(t) {
                    return z.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                }), k.getById ? (A.find.ID = function(t, e) {
                    if (typeof e.getElementById !== K && O) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, A.filter.ID = function(t) {
                    var e = t.replace(ke, Ne);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete A.find.ID, A.filter.ID = function(t) {
                    var e = t.replace(ke, Ne);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== K && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), A.find.TAG = k.getElementsByTagName ? function(t, n) {
                    return typeof n.getElementsByTagName !== K ? n.getElementsByTagName(t) : e
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, A.find.CLASS = k.getElementsByClassName && function(t, n) {
                    return typeof n.getElementsByClassName !== K && O ? n.getElementsByClassName(t) : e
                }, M = [], H = [], (k.qsa = i(n.querySelectorAll)) && (s(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || H.push("\\[" + le + "*(?:value|" + ae + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
                }), s(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && H.push("[*^$]=" + le + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
                })), (k.matchesSelector = i(W = z.webkitMatchesSelector || z.mozMatchesSelector || z.oMatchesSelector || z.msMatchesSelector)) && s(function(t) {
                    k.disconnectedMatch = W.call(t, "div"), W.call(t, "[s!='']:x"), M.push("!=", fe)
                }), H = H.length && RegExp(H.join("|")), M = M.length && RegExp(M.join("|")), q = i(z.contains) || z.compareDocumentPosition ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, k.sortDetached = s(function(t) {
                    return 1 & t.compareDocumentPosition(n.createElement("div"))
                }), Q = z.compareDocumentPosition ? function(t, e) {
                    if (t === e) return J = !0, 0;
                    var i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                    return i ? 1 & i || !k.sortDetached && e.compareDocumentPosition(t) === i ? t === n || q(B, t) ? -1 : e === n || q(B, e) ? 1 : _ ? se.call(_, t) - se.call(_, e) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function(t, e) {
                    var i, o = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                    if (t === e) return J = !0, 0;
                    if (!r || !s) return t === n ? -1 : e === n ? 1 : r ? -1 : s ? 1 : _ ? se.call(_, t) - se.call(_, e) : 0;
                    if (r === s) return p(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[o] === l[o];) o++;
                    return o ? p(a[o], l[o]) : a[o] === B ? -1 : l[o] === B ? 1 : 0
                }, n) : R
            }, n.matches = function(t, e) {
                return n(t, null, null, e)
            }, n.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== R && j(t), e = e.replace(ve, "='$1']"), !(!k.matchesSelector || !O || M && M.test(e) || H && H.test(e))) try {
                    var i = W.call(t, e);
                    if (i || k.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return n(e, R, null, [t]).length > 0
            }, n.contains = function(t, e) {
                return (t.ownerDocument || t) !== R && j(t), q(t, e)
            }, n.attr = function(t, n) {
                (t.ownerDocument || t) !== R && j(t);
                var i = A.attrHandle[n.toLowerCase()],
                    o = i && te.call(A.attrHandle, n.toLowerCase()) ? i(t, n, !O) : e;
                return o === e ? k.attributes || !O ? t.getAttribute(n) : (o = t.getAttributeNode(n)) && o.specified ? o.value : null : o
            }, n.error = function(t) {
                throw Error("Syntax error, unrecognized expression: " + t)
            }, n.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (J = !k.detectDuplicates, _ = !k.sortStable && t.slice(0), t.sort(Q), J) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return t
            }, P = n.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += P(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i]; i++) n += P(e);
                return n
            }, A = n.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: xe,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(ke, Ne), t[3] = (t[4] || t[5] || "").replace(ke, Ne), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var n, i = !t[5] && t[2];
                        return xe.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && be.test(i) && (n = m(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(ke, Ne).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = V[t + " "];
                        return e || (e = RegExp("(^|" + le + ")" + t + "(" + le + "|$)")) && V(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== K && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(o) {
                            var r = n.attr(o, t);
                            return null == r ? "!=" === e : e ? (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r + " ").indexOf(i) > -1 : "|=" === e ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, p, d, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                y = a && e.nodeName.toLowerCase(),
                                v = !l && !a;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (p = e; p = p[m];)
                                            if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = m = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && v) {
                                    for (c = g[F] || (g[F] = {}), u = c[t] || [], f = u[0] === X && u[1], d = u[0] === X && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++d && p === e) {
                                            c[t] = [X, f, d];
                                            break
                                        }
                                } else if (v && (u = (e[F] || (e[F] = {}))[t]) && u[0] === X) d = u[1];
                                else
                                    for (;
                                        (p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++d || (v && ((p[F] || (p[F] = {}))[t] = [X, d]), p !== e)););
                                return d -= o, d === i || 0 === d % i && d / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, o = A.pseudos[t] || A.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                        return o[F] ? o(e) : o.length > 1 ? (i = [t, t, "", e], A.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, n) {
                            for (var i, r = o(t, e), s = r.length; s--;) i = se.call(t, r[s]), t[i] = !(n[i] = r[s])
                        }) : function(t) {
                            return o(t, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(t) {
                        var e = [],
                            n = [],
                            i = D(t.replace(he, "$1"));
                        return i[F] ? r(function(t, e, n, o) {
                            for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, o, r) {
                            return e[0] = t, i(e, null, r, n), !n.pop()
                        }
                    }),
                    has: r(function(t) {
                        return function(e) {
                            return n(t, e).length > 0
                        }
                    }),
                    contains: r(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || P(e)).indexOf(t) > -1
                        }
                    }),
                    lang: r(function(t) {
                        return we.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(ke, Ne).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === z
                    },
                    focus: function(t) {
                        return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !A.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Ee.test(t.nodeName)
                    },
                    input: function(t) {
                        return Se.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(t, e) {
                        return [e - 1]
                    }),
                    eq: h(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: h(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: h(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: h(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: h(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; e > ++i;) t.push(i);
                        return t
                    })
                }
            };
            for (I in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) A.pseudos[I] = d(I);
            for (I in {
                    submit: !0,
                    reset: !0
                }) A.pseudos[I] = f(I);
            D = n.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = G[t + " "];
                if (!r) {
                    for (e || (e = m(t)), n = e.length; n--;) r = x(e[n]), r[F] ? i.push(r) : o.push(r);
                    r = G(t, T(o, i))
                }
                return r
            }, A.pseudos.nth = A.pseudos.eq, E.prototype = A.filters = A.pseudos, A.setFilters = new E, k.sortStable = F.split("").sort(Q).join("") === F, j(), [0, 0].sort(Q), k.detectDuplicates = J, ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
        }(t);
    var Ee = {};
    ce.Callbacks = function(t) {
        t = "string" == typeof t ? Ee[t] || i(t) : ce.extend({}, t);
        var n, o, r, s, a, l, u = [],
            c = !t.once && [],
            p = function(e) {
                for (o = t.memory && e, r = !0, a = l || 0, l = 0, s = u.length, n = !0; u && s > a; a++)
                    if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        o = !1;
                        break
                    }
                n = !1, u && (c ? c.length && p(c.shift()) : o ? u = [] : d.disable())
            },
            d = {
                add: function() {
                    if (u) {
                        var e = u.length;
                        ! function i(e) {
                            ce.each(e, function(e, n) {
                                var o = ce.type(n);
                                "function" === o ? t.unique && d.has(n) || u.push(n) : n && n.length && "string" !== o && i(n)
                            })
                        }(arguments), n ? s = u.length : o && (l = e, p(o))
                    }
                    return this
                },
                remove: function() {
                    return u && ce.each(arguments, function(t, e) {
                        for (var i;
                            (i = ce.inArray(e, u, i)) > -1;) u.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                    }), this
                },
                has: function(t) {
                    return t ? ce.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = c = o = e, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return c = e, o || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return e = e || [], e = [t, e.slice ? e.slice() : e], !u || r && !c || (n ? c.push(e) : p(e)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, ce.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ce.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ce.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ce.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ce.Deferred(function(n) {
                            ce.each(e, function(e, r) {
                                var s = r[0],
                                    a = ce.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && ce.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ce.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, ce.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, i, o = 0,
                r = re.call(arguments),
                s = r.length,
                a = 1 !== s || t && ce.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : ce.Deferred(),
                u = function(t, n, i) {
                    return function(o) {
                        n[t] = this, i[t] = arguments.length > 1 ? re.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = Array(s), n = Array(s), i = Array(s); s > o; o++) r[o] && ce.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    }), ce.support = function(e) {
        var n, i, o, r, s, a, l, u, c, p = J.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], i = p.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
        r = J.createElement("select"), a = r.appendChild(J.createElement("option")), o = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== p.className, e.leadingWhitespace = 3 === p.firstChild.nodeType, e.tbody = !p.getElementsByTagName("tbody").length, e.htmlSerialize = !!p.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!o.value, e.optSelected = a.selected, e.enctype = !!J.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !a.disabled;
        try {
            delete p.test
        } catch (d) {
            e.deleteExpando = !1
        }
        o = J.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), s = J.createDocumentFragment(), s.appendChild(o), e.appendChecked = o.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
            e.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) p.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === p.style.backgroundClip;
        for (c in ce(e)) break;
        return e.ownLast = "0" !== c, ce(function() {
            var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = J.getElementsByTagName("body")[0];
            s && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e.boxSizing = 4 === p.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(p, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(p, null) || {
                width: "4px"
            }).width, i = p.appendChild(J.createElement("div")), i.style.cssText = p.style.cssText = r, i.style.marginRight = i.style.width = "0", p.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof p.style.zoom !== Y && (p.innerHTML = "", p.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== p.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = p = o = i = null)
        }), n = r = s = a = i = o = null, e
    }({});
    var Ie = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        ke = /([A-Z])/g;
    ce.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? ce.cache[t[ce.expando]] : t[ce.expando], !!t && !a(t)
        },
        data: function(t, e, n) {
            return o(t, e, n)
        },
        removeData: function(t, e) {
            return r(t, e)
        },
        _data: function(t, e, n) {
            return o(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return r(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && ce.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), ce.fn.extend({
        data: function(t, n) {
            var i, o, r = null,
                a = 0,
                l = this[0];
            if (t === e) {
                if (this.length && (r = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                    for (i = l.attributes; i.length > a; a++) o = i[a].name, 0 === o.indexOf("data-") && (o = ce.camelCase(o.slice(5)), s(l, o, r[o]));
                    ce._data(l, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                ce.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ce.data(this, t, n)
            }) : l ? s(l, t, ce.data(l, t)) : null
        },
        removeData: function(t) {
            return this.each(function() {
                ce.removeData(this, t)
            })
        }
    }), ce.extend({
        queue: function(t, n, i) {
            var o;
            return t ? (n = (n || "fx") + "queue", o = ce._data(t, n), i && (!o || ce.isArray(i) ? o = ce._data(t, n, ce.makeArray(i)) : o.push(i)), o || []) : e
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ce.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = ce._queueHooks(t, e),
                s = function() {
                    ce.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ce._data(t, n) || ce._data(t, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    ce._removeData(t, e + "queue"), ce._removeData(t, n)
                })
            })
        }
    }), ce.fn.extend({
        queue: function(t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--), i > arguments.length ? ce.queue(this[0], t) : n === e ? this : this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ce.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = ce.fx ? ce.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, n) {
            var i, o = 1,
                r = ce.Deferred(),
                s = this,
                a = this.length,
                l = function() {
                    --o || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = ce._data(s[a], t + "queueHooks"), i && i.empty && (o++, i.empty.add(l));
            return l(), r.promise(n)
        }
    });
    var Ne, Ae, Pe = /[\t\r\n\f]/g,
        Le = /\r/g,
        De = /^(?:input|select|textarea|button|object)$/i,
        $e = /^(?:a|area)$/i,
        _e = /^(?:checked|selected)$/i,
        je = ce.support.getSetAttribute,
        Re = ce.support.input;
    ce.fn.extend({
        attr: function(t, e) {
            return ce.access(this, ce.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ce.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return ce.access(this, ce.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ce.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t]
                } catch (n) {}
            })
        },
        addClass: function(t) {
            var e, n, i, o, r, s = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (ce.isFunction(t)) return this.each(function(e) {
                ce(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(de) || []; a > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pe, " ") : " ")) {
                        for (r = 0; o = e[r++];) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
                        n.className = ce.trim(i)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (ce.isFunction(t)) return this.each(function(e) {
                ce(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(de) || []; a > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pe, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        n.className = t ? ce.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t,
                i = "boolean" == typeof e;
            return ce.isFunction(t) ? this.each(function(n) {
                ce(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var o, r = 0, s = ce(this), a = e, l = t.match(de) || []; o = l[r++];) a = i ? a : !s.hasClass(o), s[a ? "addClass" : "removeClass"](o);
                else(n === Y || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ce._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pe, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var n, i, o, r = this[0];
            return arguments.length ? (o = ce.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = o ? t.call(this, n, ce(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ce.isArray(r) && (r = ce.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), i = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== e || (this.value = r))
            })) : r ? (i = ce.valHooks[r.type] || ce.valHooks[r.nodeName.toLowerCase()], i && "get" in i && (n = i.get(r, "value")) !== e ? n : (n = r.value, "string" == typeof n ? n.replace(Le, "") : null == n ? "" : n)) : void 0
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ce.find.attr(t, "value");
                    return null != e ? e : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ce(n).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = ce.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = ce.inArray(ce(i).val(), r) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        },
        attr: function(t, n, i) {
            var o, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === Y ? ce.prop(t, n, i) : (1 === s && ce.isXMLDoc(t) || (n = n.toLowerCase(), o = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Ae : Ne)), i === e ? o && "get" in o && null !== (r = o.get(t, n)) ? r : (r = ce.find.attr(t, n), null == r ? e : r) : null !== i ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : (t.setAttribute(n, i + ""), i) : (ce.removeAttr(t, n), e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                r = e && e.match(de);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Re && je || !_e.test(n) ? t[i] = !1 : t[ce.camelCase("default-" + n)] = t[i] = !1 : ce.attr(t, n, ""), t.removeAttribute(je ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ce.support.radioValue && "radio" === e && ce.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, n, i) {
            var o, r, s, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !ce.isXMLDoc(t), s && (n = ce.propFix[n] || n, r = ce.propHooks[n]), i !== e ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : t[n] = i : r && "get" in r && null !== (o = r.get(t, n)) ? o : t[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ce.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : De.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), Ae = {
        set: function(t, e, n) {
            return e === !1 ? ce.removeAttr(t, n) : Re && je || !_e.test(n) ? t.setAttribute(!je && ce.propFix[n] || n, n) : t[ce.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(t, n) {
        var i = ce.expr.attrHandle[n] || ce.find.attr;
        ce.expr.attrHandle[n] = Re && je || !_e.test(n) ? function(t, n, o) {
            var r = ce.expr.attrHandle[n],
                s = o ? e : (ce.expr.attrHandle[n] = e) != i(t, n, o) ? n.toLowerCase() : null;
            return ce.expr.attrHandle[n] = r, s
        } : function(t, n, i) {
            return i ? e : t[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Re && je || (ce.attrHooks.value = {
        set: function(t, n, i) {
            return ce.nodeName(t, "input") ? (t.defaultValue = n, e) : Ne && Ne.set(t, n, i)
        }
    }), je || (Ne = {
        set: function(t, n, i) {
            var o = t.getAttributeNode(i);
            return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
        }
    }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function(t, n, i) {
        var o;
        return i ? e : (o = t.getAttributeNode(n)) && "" !== o.value ? o.value : null
    }, ce.valHooks.button = {
        get: function(t, n) {
            var i = t.getAttributeNode(n);
            return i && i.specified ? i.value : e
        },
        set: Ne.set
    }, ce.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Ne.set(t, "" === e ? !1 : e, n)
        }
    }, ce.each(["width", "height"], function(t, n) {
        ce.attrHooks[n] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(n, "auto"), i) : e
            }
        }
    })), ce.support.hrefNormalized || ce.each(["href", "src"], function(t, e) {
        ce.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ce.support.style || (ce.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), ce.support.optSelected || (ce.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(t, n) {
                return ce.isArray(n) ? t.checked = ce.inArray(ce(t).val(), n) >= 0 : e
            }
        }, ce.support.checkOn || (ce.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ze = /^(?:input|select|textarea)$/i,
        Oe = /^key/,
        He = /^(?:mouse|contextmenu)|click/,
        Me = /^(?:focusinfocus|focusoutblur)$/,
        We = /^([^.]*)(?:\.(.+)|)$/;
    ce.event = {
        global: {},
        add: function(t, n, i, o, r) {
            var s, a, l, u, c, p, d, f, h, m, g, y = ce._data(t);
            if (y) {
                for (i.handler && (u = i, i = u.handler, r = u.selector), i.guid || (i.guid = ce.guid++), (a = y.events) || (a = y.events = {}), (p = y.handle) || (p = y.handle = function(t) {
                        return typeof ce === Y || t && ce.event.triggered === t.type ? e : ce.event.dispatch.apply(p.elem, arguments)
                    }, p.elem = t), n = (n || "").match(de) || [""], l = n.length; l--;) s = We.exec(n[l]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), h && (c = ce.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = ce.event.special[h] || {}, d = ce.extend({
                    type: h,
                    origType: g,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && ce.expr.match.needsContext.test(r),
                    namespace: m.join(".")
                }, u), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, c.setup && c.setup.call(t, o, m, p) !== !1 || (t.addEventListener ? t.addEventListener(h, p, !1) : t.attachEvent && t.attachEvent("on" + h, p))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), ce.event.global[h] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var r, s, a, l, u, c, p, d, f, h, m, g = ce.hasData(t) && ce._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(de) || [""], u = e.length; u--;)
                    if (a = We.exec(e[u]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (p = ce.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = c[f] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) s = d[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(r, 1), s.selector && d.delegateCount--, p.remove && p.remove.call(t, s));
                        l && !d.length && (p.teardown && p.teardown.call(t, h, g.handle) !== !1 || ce.removeEvent(t, f, g.handle), delete c[f])
                    } else
                        for (f in c) ce.event.remove(t, f + e[u], n, i, !0);
                ce.isEmptyObject(c) && (delete g.handle, ce._removeData(t, "events"))
            }
        },
        trigger: function(n, i, o, r) {
            var s, a, l, u, c, p, d, f = [o || J],
                h = le.call(n, "type") ? n.type : n,
                m = le.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = p = o = o || J, 3 !== o.nodeType && 8 !== o.nodeType && !Me.test(h + ce.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), a = 0 > h.indexOf(":") && "on" + h, n = n[ce.expando] ? n : new ce.Event(h, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : ce.makeArray(i, [n]), c = ce.event.special[h] || {}, r || !c.trigger || c.trigger.apply(o, i) !== !1)) {
                if (!r && !c.noBubble && !ce.isWindow(o)) {
                    for (u = c.delegateType || h, Me.test(u + h) || (l = l.parentNode); l; l = l.parentNode) f.push(l), p = l;
                    p === (o.ownerDocument || J) && f.push(p.defaultView || p.parentWindow || t)
                }
                for (d = 0;
                    (l = f[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? u : c.bindType || h, s = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), s && s.apply(l, i), s = a && l[a], s && ce.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
                if (n.type = h, !r && !n.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), i) === !1) && ce.acceptData(o) && a && o[h] && !ce.isWindow(o)) {
                    p = o[a], p && (o[a] = null), ce.event.triggered = h;
                    try {
                        o[h]()
                    } catch (g) {}
                    ce.event.triggered = e, p && (o[a] = p)
                }
                return n.result
            }
        },
        dispatch: function(t) {
            t = ce.event.fix(t);
            var n, i, o, r, s, a = [],
                l = re.call(arguments),
                u = (ce._data(this, "events") || {})[t.type] || [],
                c = ce.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = ce.event.handlers.call(this, t, u), n = 0;
                    (r = a[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, s = 0;
                        (o = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, n) {
            var i, o, r, s, a = [],
                l = n.delegateCount,
                u = t.target;
            if (l && u.nodeType && (!t.button || "click" !== t.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], s = 0; l > s; s++) o = n[s], i = o.selector + " ", r[i] === e && (r[i] = o.needsContext ? ce(i, this).index(u) >= 0 : ce.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return n.length > l && a.push({
                elem: this,
                handlers: n.slice(l)
            }), a
        },
        fix: function(t) {
            if (t[ce.expando]) return t;
            var e, n, i, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = He.test(o) ? this.mouseHooks : Oe.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ce.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || J), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, n) {
                var i, o, r, s = n.button,
                    a = n.fromElement;
                return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || J, r = o.documentElement, i = o.body, t.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : e
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                },
                _default: function(t) {
                    return ce.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = ce.extend(new ce.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ce.event.trigger(o, null, e) : ce.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, ce.removeEvent = J.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Y && (t[i] = null), t.detachEvent(i, n))
    }, ce.Event = function(t, n) {
        return this instanceof ce.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, n && ce.extend(this, n), this.timeStamp = t && t.timeStamp || ce.now(), this[ce.expando] = !0, e) : new ce.Event(t, n)
    }, ce.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        ce.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return (!o || o !== i && !ce.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ce.support.submitBubbles || (ce.event.special.submit = {
        setup: function() {
            return ce.nodeName(this, "form") ? !1 : (ce.event.add(this, "click._submit keypress._submit", function(t) {
                var n = t.target,
                    i = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : e;
                i && !ce._data(i, "submitBubbles") && (ce.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), ce._data(i, "submitBubbles", !0))
            }), e)
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ce.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return ce.nodeName(this, "form") ? !1 : (ce.event.remove(this, "._submit"), e)
        }
    }), ce.support.changeBubbles || (ce.event.special.change = {
        setup: function() {
            return ze.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), ce.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, t, !0)
            })), !1) : (ce.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                ze.test(e.nodeName) && !ce._data(e, "changeBubbles") && (ce.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ce.event.simulate("change", this.parentNode, t, !0)
                }), ce._data(e, "changeBubbles", !0))
            }), e)
        },
        handle: function(t) {
            var n = t.target;
            return this !== n || t.isSimulated || t.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? t.handleObj.handler.apply(this, arguments) : e
        },
        teardown: function() {
            return ce.event.remove(this, "._change"), !ze.test(this.nodeName)
        }
    }), ce.support.focusinBubbles || ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = 0,
            i = function(t) {
                ce.event.simulate(e, t.target, ce.event.fix(t), !0)
            };
        ce.event.special[e] = {
            setup: function() {
                0 === n++ && J.addEventListener(t, i, !0)
            },
            teardown: function() {
                0 === --n && J.removeEventListener(t, i, !0)
            }
        }
    }), ce.fn.extend({
        on: function(t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = e);
                for (s in t) this.on(s, n, i, t[s], r);
                return this
            }
            if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), o === !1) o = u;
            else if (!o) return this;
            return 1 === r && (a = o, o = function(t) {
                return ce().off(t), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = ce.guid++)), this.each(function() {
                ce.event.add(this, t, o, i, n)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, n, i) {
            var o, r;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj, ce(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, n, t[r]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = u), this.each(function() {
                ce.event.remove(this, t, i, n)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ce.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, n) {
            var i = this[0];
            return i ? ce.event.trigger(t, n, i, !0) : e
        }
    });
    var qe = /^.[^:#\[\.,]*$/,
        Fe = /^(?:parents|prev(?:Until|All))/,
        Be = ce.expr.match.needsContext,
        Xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ce.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t) return this.pushStack(ce(t).filter(function() {
                for (e = 0; o > e; e++)
                    if (ce.contains(i[e], this)) return !0
            }));
            for (e = 0; o > e; e++) ce.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        has: function(t) {
            var e, n = ce(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (ce.contains(this, n[e])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(d(this, t || [], !0))
        },
        filter: function(t) {
            return this.pushStack(d(this, t || [], !1))
        },
        is: function(t) {
            return !!d(this, "string" == typeof t && Be.test(t) ? ce(t) : t || [], !1).length
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], s = Be.test(t) || "string" != typeof t ? ce(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, t))) {
                        n = r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? ce.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ce.inArray(this[0], ce(t)) : ce.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var n = "string" == typeof t ? ce(t, e) : ce.makeArray(t && t.nodeType ? [t] : t),
                i = ce.merge(this.get(), n);
            return this.pushStack(ce.unique(i))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ce.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ce.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return ce.dir(t, "parentNode", n)
        },
        next: function(t) {
            return p(t, "nextSibling")
        },
        prev: function(t) {
            return p(t, "previousSibling")
        },
        nextAll: function(t) {
            return ce.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return ce.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return ce.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return ce.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return ce.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ce.sibling(t.firstChild)
        },
        contents: function(t) {
            return ce.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ce.merge([], t.childNodes)
        }
    }, function(t, e) {
        ce.fn[t] = function(n, i) {
            var o = ce.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ce.filter(i, o)), this.length > 1 && (Xe[t] || (o = ce.unique(o)), Fe.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    }), ce.extend({
        filter: function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ce.find.matchesSelector(i, t) ? [i] : [] : ce.find.matches(t, ce.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        },
        dir: function(t, n, i) {
            for (var o = [], r = t[n]; r && 9 !== r.nodeType && (i === e || 1 !== r.nodeType || !ce(r).is(i));) 1 === r.nodeType && o.push(r), r = r[n];
            return o
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ve = / jQuery\d+="(?:null|\d+)"/g,
        Ye = RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
        Ge = /^\s+/,
        Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Qe = /<([\w:]+)/,
        Ke = /<tbody/i,
        Ze = /<|&#?\w+;/,
        tn = /<(?:script|style|link)/i,
        en = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        on = /^$|\/(?:java|ecma)script/i,
        rn = /^true\/(.*)/,
        sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        an = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ln = f(J),
        un = ln.appendChild(J.createElement("div"));
    an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ce.fn.extend({
        text: function(t) {
            return ce.access(this, function(t) {
                return t === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? ce.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ce.cleanData(w(n)), n.parentNode && (e && ce.contains(n.ownerDocument, n) && y(w(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ce.cleanData(w(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ce.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return ce.clone(this, t, e)
            })
        },
        html: function(t) {
            return ce.access(this, function(t) {
                var n = this[0] || {},
                    i = 0,
                    o = this.length;
                if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : e;
                if (!("string" != typeof t || tn.test(t) || !ce.support.htmlSerialize && Ye.test(t) || !ce.support.leadingWhitespace && Ge.test(t) || an[(Qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Je, "<$1></$2>");
                    try {
                        for (; o > i; i++) n = this[i] || {}, 1 === n.nodeType && (ce.cleanData(w(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch (r) {}
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = ce.map(this, function(t) {
                    return [t.nextSibling, t.parentNode]
                }),
                e = 0;
            return this.domManip(arguments, function(n) {
                var i = t[e++],
                    o = t[e++];
                o && (i && i.parentNode !== o && (i = this.nextSibling), ce(this).remove(), o.insertBefore(n, i))
            }, !0), e ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e, n) {
            t = ie.apply([], t);
            var i, o, r, s, a, l, u = 0,
                c = this.length,
                p = this,
                d = c - 1,
                f = t[0],
                h = ce.isFunction(f);
            if (h || !(1 >= c || "string" != typeof f || ce.support.checkClone) && nn.test(f)) return this.each(function(i) {
                var o = p.eq(i);
                h && (t[0] = f.call(this, i, o.html())), o.domManip(t, e, n)
            });
            if (c && (l = ce.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (s = ce.map(w(l, "script"), m), r = s.length; c > u; u++) o = l, u !== d && (o = ce.clone(o, !0, !0), r && ce.merge(s, w(o, "script"))), e.call(this[u], o, u);
                if (r)
                    for (a = s[s.length - 1].ownerDocument, ce.map(s, g), u = 0; r > u; u++) o = s[u], on.test(o.type || "") && !ce._data(o, "globalEval") && ce.contains(a, o) && (o.src ? ce._evalUrl(o.src) : ce.globalEval((o.text || o.textContent || o.innerHTML || "").replace(sn, "")));
                l = i = null
            }
            return this
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ce.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = ce(t), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), ce(r[i])[e](n), oe.apply(o, n.get());
            return this.pushStack(o)
        }
    }), ce.extend({
        clone: function(t, e, n) {
            var i, o, r, s, a, l = ce.contains(t.ownerDocument, t);
            if (ce.support.html5Clone || ce.isXMLDoc(t) || !Ye.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (un.innerHTML = t.outerHTML, un.removeChild(r = un.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ce.isXMLDoc(t)))
                for (i = w(r), a = w(t), s = 0; null != (o = a[s]); ++s) i[s] && b(o, i[s]);
            if (e)
                if (n)
                    for (a = a || w(t), i = i || w(r), s = 0; null != (o = a[s]); s++) v(o, i[s]);
                else v(t, r);
            return i = w(r, "script"), i.length > 0 && y(i, !l && w(t, "script")), i = a = o = null, r
        },
        buildFragment: function(t, e, n, i) {
            for (var o, r, s, a, l, u, c, p = t.length, d = f(e), h = [], m = 0; p > m; m++)
                if (r = t[m], r || 0 === r)
                    if ("object" === ce.type(r)) ce.merge(h, r.nodeType ? [r] : r);
                    else if (Ze.test(r)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Qe.exec(r) || ["", ""])[1].toLowerCase(), c = an[l] || an._default, a.innerHTML = c[1] + r.replace(Je, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                if (!ce.support.leadingWhitespace && Ge.test(r) && h.push(e.createTextNode(Ge.exec(r)[0])), !ce.support.tbody)
                    for (r = "table" !== l || Ke.test(r) ? "<table>" !== c[1] || Ke.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) ce.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                for (ce.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else h.push(e.createTextNode(r));
            for (a && d.removeChild(a), ce.support.appendChecked || ce.grep(w(h, "input"), x), m = 0; r = h[m++];)
                if ((!i || -1 === ce.inArray(r, i)) && (s = ce.contains(r.ownerDocument, r), a = w(d.appendChild(r), "script"), s && y(a), n))
                    for (o = 0; r = a[o++];) on.test(r.type || "") && n.push(r);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, s = 0, a = ce.expando, l = ce.cache, u = ce.support.deleteExpando, c = ce.event.special; null != (n = t[s]); s++)
                if ((e || ce.acceptData(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u ? delete n[a] : typeof n.removeAttribute !== Y ? n.removeAttribute(a) : n[a] = null, ee.push(o))
                }
        },
        _evalUrl: function(t) {
            return ce.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ce.fn.extend({
        wrapAll: function(t) {
            if (ce.isFunction(t)) return this.each(function(e) {
                ce(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ce(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ce.isFunction(t) ? this.each(function(e) {
                ce(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ce(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ce.isFunction(t);
            return this.each(function(n) {
                ce(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, pn, dn, fn = /alpha\([^)]*\)/i,
        hn = /opacity\s*=\s*([^)]*)/,
        mn = /^(top|right|bottom|left)$/,
        gn = /^(none|table(?!-c[ea]).+)/,
        yn = /^margin/,
        vn = RegExp("^(" + pe + ")(.*)$", "i"),
        bn = RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
        wn = RegExp("^([+-])=(" + pe + ")", "i"),
        xn = {
            BODY: "block"
        },
        Tn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Cn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Sn = ["Top", "Right", "Bottom", "Left"],
        En = ["Webkit", "O", "Moz", "ms"];
    ce.fn.extend({
        css: function(t, n) {
            return ce.access(this, function(t, n, i) {
                var o, r, s = {},
                    a = 0;
                if (ce.isArray(n)) {
                    for (r = pn(t), o = n.length; o > a; a++) s[n[a]] = ce.css(t, n[a], !1, r);
                    return s
                }
                return i !== e ? ce.style(t, n, i) : ce.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(t) {
            var e = "boolean" == typeof t;
            return this.each(function() {
                (e ? t : C(this)) ? ce(this).show(): ce(this).hide()
            })
        }
    }), ce.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = dn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ce.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, n, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, a, l = ce.camelCase(n),
                    u = t.style;
                if (n = ce.cssProps[l] || (ce.cssProps[l] = T(u, l)), a = ce.cssHooks[n] || ce.cssHooks[l], i === e) return a && "get" in a && (r = a.get(t, !1, o)) !== e ? r : u[n];
                if (s = typeof i, "string" === s && (r = wn.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ce.css(t, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ce.cssNumber[l] || (i += "px"), ce.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(t, i, o)) === e))) try {
                    u[n] = i
                } catch (c) {}
            }
        },
        css: function(t, n, i, o) {
            var r, s, a, l = ce.camelCase(n);
            return n = ce.cssProps[l] || (ce.cssProps[l] = T(t.style, l)), a = ce.cssHooks[n] || ce.cssHooks[l], a && "get" in a && (s = a.get(t, !0, i)), s === e && (s = dn(t, n, o)), "normal" === s && n in Cn && (s = Cn[n]), "" === i || i ? (r = parseFloat(s), i === !0 || ce.isNumeric(r) ? r || 0 : s) : s
        }
    }), t.getComputedStyle ? (pn = function(e) {
        return t.getComputedStyle(e, null)
    }, dn = function(t, n, i) {
        var o, r, s, a = i || pn(t),
            l = a ? a.getPropertyValue(n) || a[n] : e,
            u = t.style;
        return a && ("" !== l || ce.contains(t.ownerDocument, t) || (l = ce.style(t, n)), bn.test(l) && yn.test(n) && (o = u.width, r = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = o, u.minWidth = r, u.maxWidth = s)), l
    }) : J.documentElement.currentStyle && (pn = function(t) {
        return t.currentStyle
    }, dn = function(t, n, i) {
        var o, r, s, a = i || pn(t),
            l = a ? a[n] : e,
            u = t.style;
        return null == l && u && u[n] && (l = u[n]), bn.test(l) && !mn.test(n) && (o = u.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = o, s && (r.left = s)), "" === l ? "auto" : l
    }), ce.each(["height", "width"], function(t, n) {
        ce.cssHooks[n] = {
            get: function(t, i, o) {
                return i ? 0 === t.offsetWidth && gn.test(ce.css(t, "display")) ? ce.swap(t, Tn, function() {
                    return k(t, n, o)
                }) : k(t, n, o) : e
            },
            set: function(t, e, i) {
                var o = i && pn(t);
                return E(t, e, i ? I(t, n, i, ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ce.support.opacity || (ce.cssHooks.opacity = {
        get: function(t, e) {
            return hn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = ce.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ce.trim(r.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = fn.test(r) ? r.replace(fn, o) : r + " " + o)
        }
    }), ce(function() {
        ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
            get: function(t, n) {
                return n ? ce.swap(t, {
                    display: "inline-block"
                }, dn, [t, "marginRight"]) : e
            }
        }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function(t, n) {
            ce.cssHooks[n] = {
                get: function(t, i) {
                    return i ? (i = dn(t, n), bn.test(i) ? ce(t).position()[n] + "px" : i) : e
                }
            }
        })
    }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(t) {
        return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ce.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ce.css(t, "display"))
    }, ce.expr.filters.visible = function(t) {
        return !ce.expr.filters.hidden(t)
    }), ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ce.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Sn[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, yn.test(t) || (ce.cssHooks[t + e].set = E)
    });
    var In = /%20/g,
        kn = /\[\]$/,
        Nn = /\r?\n/g,
        An = /^(?:submit|button|image|reset|file)$/i,
        Pn = /^(?:input|select|textarea|keygen)/i;
    ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ce.prop(this, "elements");
                return t ? ce.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ce(this).is(":disabled") && Pn.test(this.nodeName) && !An.test(t) && (this.checked || !en.test(t))
            }).map(function(t, e) {
                var n = ce(this).val();
                return null == n ? null : ce.isArray(n) ? ce.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Nn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Nn, "\r\n")
                }
            }).get()
        }
    }), ce.param = function(t, n) {
        var i, o = [],
            r = function(t, e) {
                e = ce.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (n === e && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(t) || t.jquery && !ce.isPlainObject(t)) ce.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) P(i, t[i], n, r);
        return o.join("&").replace(In, "+")
    }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ce.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ce.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Ln, Dn, $n = ce.now(),
        _n = /\?/,
        jn = /#.*$/,
        Rn = /([?&])_=[^&]*/,
        zn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Hn = /^(?:GET|HEAD)$/,
        Mn = /^\/\//,
        Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        qn = ce.fn.load,
        Fn = {},
        Bn = {},
        Xn = "*/".concat("*");
    try {
        Dn = G.href
    } catch (Un) {
        Dn = J.createElement("a"), Dn.href = "", Dn = Dn.href
    }
    Ln = Wn.exec(Dn.toLowerCase()) || [], ce.fn.load = function(t, n, i) {
        if ("string" != typeof t && qn) return qn.apply(this, arguments);
        var o, r, s, a = this,
            l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), ce.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ce.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: n
        }).done(function(t) {
            r = arguments, a.html(o ? ce("<div>").append(ce.parseHTML(t)).find(o) : t)
        }).complete(i && function(t, e) {
            a.each(i, r || [t.responseText, e, t])
        }), this
    }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ce.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: On.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
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
                "text json": ce.parseJSON,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? $($(t, ce.ajaxSettings), e) : $(ce.ajaxSettings, t)
        },
        ajaxPrefilter: L(Fn),
        ajaxTransport: L(Bn),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var r, p, v, b, x, C = n;
                2 !== w && (w = 2, l && clearTimeout(l), c = e, a = o || "", T.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (b = _(d, T, i)), b = j(d, b, T, r), r ? (d.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ce.lastModified[s] = x), x = T.getResponseHeader("etag"), x && (ce.etag[s] = x)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, v = b.error, r = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", r ? m.resolveWith(f, [p, C, T]) : m.rejectWith(f, [T, C, v]), T.statusCode(y), y = e, u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [T, d, r ? p : v]), g.fireWith(f, [T, C]), u && (h.trigger("ajaxComplete", [T, d]), --ce.active || ce.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var o, r, s, a, l, u, c, p, d = ce.ajaxSetup({}, n),
                f = d.context || d,
                h = d.context && (f.nodeType || f.jquery) ? ce(f) : ce.event,
                m = ce.Deferred(),
                g = ce.Callbacks("once memory"),
                y = d.statusCode || {},
                v = {},
                b = {},
                w = 0,
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!p)
                                for (p = {}; e = zn.exec(a);) p[e[1].toLowerCase()] = e[2];
                            e = p[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return w || (t = b[n] = b[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t) y[e] = [y[e], t[e]];
                            else T.always(t[T.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || Dn) + "").replace(jn, "").replace(Mn, Ln[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (o = Wn.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === Ln[1] && o[2] === Ln[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), D(Fn, d, n, T), 2 === w) return T;
            u = d.global, u && 0 === ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Hn.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (_n.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Rn.test(s) ? s.replace(Rn, "$1_=" + $n++) : s + (_n.test(s) ? "&" : "?") + "_=" + $n++)), d.ifModified && (ce.lastModified[s] && T.setRequestHeader("If-Modified-Since", ce.lastModified[s]), ce.etag[s] && T.setRequestHeader("If-None-Match", ce.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) T.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === w)) return T.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[r](d[r]);
            if (c = D(Bn, d, n, T)) {
                T.readyState = 1, u && h.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, c.send(v, i)
                } catch (C) {
                    if (!(2 > w)) throw C;
                    i(-1, C)
                }
            } else i(-1, "No Transport");
            return T
        },
        getJSON: function(t, e, n) {
            return ce.get(t, e, n, "json")
        },
        getScript: function(t, n) {
            return ce.get(t, e, n, "script")
        }
    }), ce.each(["get", "post"], function(t, n) {
        ce[n] = function(t, i, o, r) {
            return ce.isFunction(i) && (r = r || o, o = i, i = e), ce.ajax({
                url: t,
                type: n,
                dataType: r,
                data: i,
                success: o
            })
        }
    }), ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return ce.globalEval(t), t
            }
        }
    }), ce.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ce.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, i = J.head || ce("head")[0] || J.documentElement;
            return {
                send: function(e, o) {
                    n = J.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
                        (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(e, !0)
                }
            }
        }
    });
    var Vn = [],
        Yn = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Vn.pop() || ce.expando + "_" + $n++;
            return this[t] = !0, t
        }
    }), ce.ajaxPrefilter("json jsonp", function(n, i, o) {
        var r, s, a, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + r) : n.jsonp !== !1 && (n.url += (_n.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
            return a || ce.error(r + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = t[r], t[r] = function() {
            a = arguments
        }, o.always(function() {
            t[r] = s, n[r] && (n.jsonpCallback = i.jsonpCallback, Vn.push(r)), a && ce.isFunction(s) && s(a[0]), a = s = e
        }), "script") : e
    });
    var Gn, Jn, Qn = 0,
        Kn = t.ActiveXObject && function() {
            var t;
            for (t in Gn) Gn[t](e, !0)
        };
    ce.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && R() || z()
    } : R, Jn = ce.ajaxSettings.xhr(), ce.support.cors = !!Jn && "withCredentials" in Jn, Jn = ce.support.ajax = !!Jn, Jn && ce.ajaxTransport(function(n) {
        if (!n.crossDomain || ce.support.cors) {
            var i;
            return {
                send: function(o, r) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in o) l.setRequestHeader(a, o[a])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), i = function(t, o) {
                        var a, u, c, p;
                        try {
                            if (i && (o || 4 === l.readyState))
                                if (i = e, s && (l.onreadystatechange = ce.noop, Kn && delete Gn[s]), o) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (d) {
                                        c = ""
                                    }
                                    a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
                                }
                        } catch (f) {
                            o || r(-1, f)
                        }
                        p && r(a, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Qn, Kn && (Gn || (Gn = {}, ce(t).unload(Kn)), Gn[s] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(e, !0)
                }
            }
        }
    });
    var Zn, ti, ei = /^(?:toggle|show|hide)$/,
        ni = RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
        ii = /queueHooks$/,
        oi = [q],
        ri = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    o = ni.exec(e),
                    r = o && o[3] || (ce.cssNumber[t] ? "" : "px"),
                    s = (ce.cssNumber[t] || "px" !== r && +i) && ni.exec(ce.css(n.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, ce.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    ce.Animation = ce.extend(M, {
        tweener: function(t, e) {
            ce.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, o = t.length; o > i; i++) n = t[i], ri[n] = ri[n] || [], ri[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? oi.unshift(t) : oi.push(t)
        }
    }), ce.Tween = F, F.prototype = {
        constructor: F,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.pos = e = this.options.duration ? ce.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ce.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                ce.fx.step[t.prop] ? ce.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ce.cssProps[t.prop]] || ce.cssHooks[t.prop]) ? ce.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ce.each(["toggle", "show", "hide"], function(t, e) {
        var n = ce.fn[e];
        ce.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, o)
        }
    }), ce.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = ce.isEmptyObject(t),
                r = ce.speed(e, n, i),
                s = function() {
                    var e = M(this, ce.extend({}, t), r);
                    (o || ce._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, n, i) {
            var o = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    n = null != t && t + "queueHooks",
                    r = ce.timers,
                    s = ce._data(this);
                if (n) s[n] && s[n].stop && o(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && ii.test(n) && o(s[n]);
                for (n = r.length; n--;) r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(i), e = !1, r.splice(n, 1));
                (e || !i) && ce.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = ce._data(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    r = ce.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, ce.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), ce.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ce.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), ce.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? ce.extend({}, t) : {
            complete: n || !n && e || ce.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ce.isFunction(e) && e
        };
        return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
        }, i
    }, ce.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, ce.timers = [], ce.fx = F.prototype.init, ce.fx.tick = function() {
        var t, n = ce.timers,
            i = 0;
        for (Zn = ce.now(); n.length > i; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
        n.length || ce.fx.stop(), Zn = e
    }, ce.fx.timer = function(t) {
        t() && ce.timers.push(t) && ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function() {
        ti || (ti = setInterval(ce.fx.tick, ce.fx.interval))
    }, ce.fx.stop = function() {
        clearInterval(ti), ti = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(t) {
        return ce.grep(ce.timers, function(e) {
            return t === e.elem
        }).length
    }), ce.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            ce.offset.setOffset(this, t, e)
        });
        var n, i, o = {
                top: 0,
                left: 0
            },
            r = this[0],
            s = r && r.ownerDocument;
        return s ? (n = s.documentElement, ce.contains(n, r) ? (typeof r.getBoundingClientRect !== Y && (o = r.getBoundingClientRect()), i = X(s), {
            top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o) : void 0
    }, ce.offset = {
        setOffset: function(t, e, n) {
            var i = ce.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var o, r, s = ce(t),
                a = s.offset(),
                l = ce.css(t, "top"),
                u = ce.css(t, "left"),
                c = ("absolute" === i || "fixed" === i) && ce.inArray("auto", [l, u]) > -1,
                p = {},
                d = {};
            c ? (d = s.position(), o = d.top, r = d.left) : (o = parseFloat(l) || 0, r = parseFloat(u) || 0), ce.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + o), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : s.css(p)
        }
    }, ce.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ce.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ce.nodeName(t[0], "html") || (n = t.offset()), n.top += ce.css(t[0], "borderTopWidth", !0), n.left += ce.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ce.css(i, "marginTop", !0),
                    left: e.left - n.left - ce.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Q; t && !ce.nodeName(t, "html") && "static" === ce.css(t, "position");) t = t.offsetParent;
                return t || Q
            })
        }
    }), ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = /Y/.test(n);
        ce.fn[t] = function(o) {
            return ce.access(this, function(t, o, r) {
                var s = X(t);
                return r === e ? s ? n in s ? s[n] : s.document.documentElement[o] : t[o] : (s ? s.scrollTo(i ? ce(s).scrollLeft() : r, i ? r : ce(s).scrollTop()) : t[o] = r, e)
            }, t, o, arguments.length, null)
        }
    }), ce.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        ce.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(i, o) {
            ce.fn[o] = function(o, r) {
                var s = arguments.length && (i || "boolean" != typeof o),
                    a = i || (o === !0 || r === !0 ? "margin" : "border");
                return ce.access(this, function(n, i, o) {
                    var r;
                    return ce.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? ce.css(n, i, a) : ce.style(n, i, o, a)
                }, n, s ? o : e, s, null)
            }
        })
    }), ce.fn.size = function() {
        return this.length
    }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (t.jQuery = t.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    }))
}(window),
function(t) {
    function e() {}

    function n(t) {
        function n(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, n) {
            t.fn[e] = function(o) {
                if ("string" == typeof o) {
                    for (var s = i.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a],
                            c = t.data(u, e);
                        if (c)
                            if (t.isFunction(c[o]) && "_" !== o.charAt(0)) {
                                var p = c[o].apply(c, s);
                                if (void 0 !== p) return p
                            } else r("no such method '" + o + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var i = t.data(this, e);
                    i ? (i.option(o), i._init()) : (i = new n(this, o), t.data(this, e, i))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                n(e), o(t, e)
            }, t.bridget
        }
    }
    var i = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : "object" == typeof exports ? n(require("jquery")) : n(t.jQuery)
}(window),
function(t) {
    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function n(t, e) {
        var n = i(t, e) ? r : o;
        n(t, e)
    }
    var i, o, r;
    "classList" in document.documentElement ? (i = function(t, e) {
        return t.classList.contains(e)
    }, o = function(t, e) {
        t.classList.add(e)
    }, r = function(t, e) {
        t.classList.remove(e)
    }) : (i = function(t, n) {
        return e(n).test(t.className)
    }, o = function(t, e) {
        i(t, e) || (t.className = t.className + " " + e)
    }, r = function(t, n) {
        t.className = t.className.replace(e(n), " ")
    });
    var s = {
        hasClass: i,
        addClass: o,
        removeClass: r,
        toggleClass: n,
        has: i,
        add: o,
        remove: r,
        toggle: n
    };
    "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window),
function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof i[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = n.length; r > o; o++)
                if (e = n[o] + t, "string" == typeof i[e]) return e
        }
    }
    var n = "Webkit Moz ms Ms O".split(" "),
        i = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t) {
    function e(t) {
        var e = parseFloat(t),
            n = -1 === t.indexOf("%") && !isNaN(e);
        return n && e
    }

    function n() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, n = s.length; n > e; e++) {
            var i = s[e];
            t[i] = 0
        }
        return t
    }

    function o(n) {
        function o() {
            if (!d) {
                d = !0;
                var i = t.getComputedStyle;
                if (u = function() {
                        var t = i ? function(t) {
                            return i(t, null)
                        } : function(t) {
                            return t.currentStyle
                        };
                        return function(e) {
                            var n = t(e);
                            return n || r("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                        }
                    }(), c = n("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[c] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(o);
                    var a = u(o);
                    p = 200 === e(a.width), s.removeChild(o)
                }
            }
        }

        function a(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var n = u(t);
                if ("none" === n.display) return i();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!c || !n[c] || "border-box" !== n[c]), d = 0, f = s.length; f > d; d++) {
                    var h = s[d],
                        m = n[h];
                    m = l(t, m);
                    var g = parseFloat(m);
                    r[h] = isNaN(g) ? 0 : g
                }
                var y = r.paddingLeft + r.paddingRight,
                    v = r.paddingTop + r.paddingBottom,
                    b = r.marginLeft + r.marginRight,
                    w = r.marginTop + r.marginBottom,
                    x = r.borderLeftWidth + r.borderRightWidth,
                    T = r.borderTopWidth + r.borderBottomWidth,
                    C = a && p,
                    S = e(n.width);
                S !== !1 && (r.width = S + (C ? 0 : y + x));
                var E = e(n.height);
                return E !== !1 && (r.height = E + (C ? 0 : v + T)), r.innerWidth = r.width - (y + x), r.innerHeight = r.height - (v + T), r.outerWidth = r.width + b, r.outerHeight = r.height + w, r
            }
        }

        function l(e, n) {
            if (t.getComputedStyle || -1 === n.indexOf("%")) return n;
            var i = e.style,
                o = i.left,
                r = e.runtimeStyle,
                s = r && r.left;
            return s && (r.left = e.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, s && (r.left = s), n
        }
        var u, c, p, d = !1;
        return a
    }
    var r = "undefined" == typeof console ? n : function(t) {
            console.error(t)
        },
        s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }
    var n = document.documentElement,
        i = function() {};
    n.addEventListener ? i = function(t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function(t, n, i) {
        t[n + i] = i.handleEvent ? function() {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function() {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var o = function() {};
    n.removeEventListener ? o = function(t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (o = function(t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var r = {
        bind: i,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function n(t) {
        var n = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || n || i()
    }

    function i() {
        e.isReady = !0;
        for (var t = 0, n = s.length; n > t; t++) {
            var i = s[t];
            i()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(t, "load", n)), e
    }
    var r = t.document,
        s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window),
function() {
    function t() {}

    function e(t, e) {
        for (var n = t.length; n--;)
            if (t[n].listener === e) return n;
        return -1
    }

    function n(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var i = t.prototype,
        o = this,
        r = o.EventEmitter;
    i.getListeners = function(t) {
        var e, n, i = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
        } else e = i[t] || (i[t] = []);
        return e
    }, i.flattenListeners = function(t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
        return n
    }, i.getListenersAsObject = function(t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && (e = {}, e[t] = n), e || n
    }, i.addListener = function(t, n) {
        var i, o = this.getListenersAsObject(t),
            r = "object" == typeof n;
        for (i in o) o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(t) {
        return this.getListeners(t), this
    }, i.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, i.removeListener = function(t, n) {
        var i, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function(t, e, n) {
        var i, o, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (i = n.length; i--;) r.call(this, e, n[i]);
        else
            for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
        return this
    }, i.removeEvent = function(t) {
        var e, n = typeof t,
            i = this._getEvents();
        if ("string" === n) delete i[t];
        else if (t instanceof RegExp)
            for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(t, e) {
        var n, i, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (i = s[o].length; i--;) n = s[o][i], n.once === !0 && this.removeListener(t, n.listener), r = n.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function i(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++)
                if (i[o] === t) return !0;
            return !1
        }

        function o(t, i) {
            return n(t), e(t, i)
        }
        var r, s = function() {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
                var o = e[n],
                    r = o + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                l = e(a, "div");
            r = l ? e : o
        } else r = i;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function(t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function i(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function o(t, o, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = r("transition"),
                u = r("transform"),
                c = l && u,
                p = !!r("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                h = function() {
                    for (var t = {}, e = 0, n = f.length; n > e; e++) {
                        var i = f[e],
                            o = r(i);
                        o && o !== i && (t[i] = o)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = o(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var n in t) {
                    var i = h[n] || n;
                    e[i] = t[n]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    n = e.isOriginLeft,
                    i = e.isOriginTop,
                    o = parseInt(t[n ? "left" : "right"], 10),
                    r = parseInt(t[i ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                o -= n ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    n = {};
                e.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = ""), e.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
            };
            var m = p ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var n = this.position.x,
                    i = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
                var a = t - n,
                    l = e - i,
                    u = {},
                    c = this.layout.options;
                a = c.isOriginLeft ? a : -a, l = c.isOriginTop ? l : -l, u.transform = m(a, l), this.transition({
                    to: u,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = c ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                var e = this._transn;
                for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                if (t.from) {
                    this.css(t.from);
                    var i = this.element.offsetHeight;
                    i = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var g = u && i(u) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: g,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(d, this, !1))
            }, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var y = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        i = y[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                        var o = e.onEnd[i];
                        o.call(this), delete e.onEnd[i]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var n in t) e[n] = "";
                this.css(e)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(v)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!l || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            return "[object Array]" === p.call(t)
        }

        function i(t) {
            var e = [];
            if (n(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var n = f(e, t); - 1 !== n && e.splice(n, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        }

        function s(n, s, p, f, h, m) {
            function g(t, n) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return l && l.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(n);
                var i = ++y;
                this.element.outlayerGUID = i, v[i] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var y = 0,
                v = {};
            return g.namespace = "outlayer", g.Item = m, g.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(g.prototype, p.prototype), g.prototype.option = function(t) {
                e(this.options, t)
            }, g.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, g.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, g.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0, r = e.length; r > o; o++) {
                    var s = e[o],
                        a = new n(s, this);
                    i.push(a)
                }
                return i
            }, g.prototype._filterFindItemElements = function(t) {
                t = i(t);
                for (var e = this.options.itemSelector, n = [], o = 0, r = t.length; r > o; o++) {
                    var s = t[o];
                    if (d(s))
                        if (e) {
                            h(s, e) && n.push(s);
                            for (var a = s.querySelectorAll(e), l = 0, u = a.length; u > l; l++) n.push(a[l])
                        } else n.push(s)
                }
                return n
            }, g.prototype.getItemElements = function() {
                for (var t = [], e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].element);
                return t
            }, g.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
                this.getSize()
            }, g.prototype.getSize = function() {
                this.size = f(this.element)
            }, g.prototype._getMeasurement = function(t, e) {
                var n, i = this.options[t];
                i ? ("string" == typeof i ? n = this.element.querySelector(i) : d(i) && (n = i), this[t] = n ? f(n)[e] : i) : this[t] = 0
            }, g.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, g.prototype._getItemsForLayout = function(t) {
                for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var o = t[n];
                    o.isIgnored || e.push(o)
                }
                return e
            }, g.prototype._layoutItems = function(t, e) {
                function n() {
                    i.emitEvent("layoutComplete", [i, t])
                }
                var i = this;
                if (!t || !t.length) return n(), void 0;
                this._itemsOn(t, "layout", n);
                for (var o = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        l = this._getItemLayoutPosition(a);
                    l.item = a, l.isInstant = e || a.isLayoutInstant, o.push(l)
                }
                this._processLayoutQueue(o)
            }, g.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, g.prototype._processLayoutQueue = function(t) {
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this._positionItem(i.item, i.x, i.y, i.isInstant)
                }
            }, g.prototype._positionItem = function(t, e, n, i) {
                i ? t.goTo(e, n) : t.moveTo(e, n)
            }, g.prototype._postLayout = function() {
                this.resizeContainer()
            }, g.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, g.prototype._getContainerSize = c, g.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var n = this.size;
                    n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, g.prototype._itemsOn = function(t, e, n) {
                function i() {
                    return o++, o === r && n.call(s), !0
                }
                for (var o = 0, r = t.length, s = this, a = 0, l = t.length; l > a; a++) {
                    var u = t[a];
                    u.on(e, i)
                }
            }, g.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, g.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, g.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        this.ignore(i)
                    }
                }
            }, g.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        o(i, this.stamps), this.unignore(i)
                    }
            }, g.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
            }, g.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var n = this.stamps[t];
                        this._manageStamp(n)
                    }
                }
            }, g.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, g.prototype._manageStamp = c, g.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    n = this._boundingRect,
                    i = f(t),
                    o = {
                        left: e.left - n.left - i.marginLeft,
                        top: e.top - n.top - i.marginTop,
                        right: n.right - e.right - i.marginRight,
                        bottom: n.bottom - e.bottom - i.marginBottom
                    };
                return o
            }, g.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, g.prototype.bindResize = function() {
                this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound = !0)
            }, g.prototype.unbindResize = function() {
                this.isResizeBound && n.unbind(t, "resize", this), this.isResizeBound = !1
            }, g.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, g.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, g.prototype.needsResizeLayout = function() {
                var t = f(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, g.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, g.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, g.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var n = this.items.slice(0);
                    this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
                }
            }, g.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var n = 0; e > n; n++) {
                        var i = t[n];
                        i.reveal()
                    }
            }, g.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var n = 0; e > n; n++) {
                        var i = t[n];
                        i.hide()
                    }
            }, g.prototype.getItem = function(t) {
                for (var e = 0, n = this.items.length; n > e; e++) {
                    var i = this.items[e];
                    if (i.element === t) return i
                }
            }, g.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], n = 0, i = t.length; i > n; n++) {
                        var o = t[n],
                            r = this.getItem(o);
                        r && e.push(r)
                    }
                    return e
                }
            }, g.prototype.remove = function(t) {
                t = i(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var n = 0, r = e.length; r > n; n++) {
                        var s = e[n];
                        s.remove(), o(s, this.items)
                    }
                }
            }, g.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, n = this.items.length; n > e; e++) {
                    var i = this.items[e];
                    i.destroy()
                }
                this.unbindResize();
                var o = this.element.outlayerGUID;
                delete v[o], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
            }, g.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && v[e]
            }, g.create = function(t, n) {
                function i() {
                    g.apply(this, arguments)
                }
                return Object.create ? i.prototype = Object.create(g.prototype) : e(i.prototype, g.prototype), i.prototype.constructor = i, i.defaults = e({}, g.defaults), e(i.defaults, n), i.prototype.settings = {}, i.namespace = t, i.data = g.data, i.Item = function() {
                    m.apply(this, arguments)
                }, i.Item.prototype = new m, s(function() {
                    for (var e = r(t), n = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, c = n.length; c > s; s++) {
                        var p, d = n[s],
                            f = d.getAttribute(o);
                        try {
                            p = f && JSON.parse(f)
                        } catch (h) {
                            l && l.error("Error parsing " + o + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + h);
                            continue
                        }
                        var m = new i(d, p);
                        u && u.data(d, t, m)
                    }
                }), u && u.bridget && u.bridget(t, i), i
            }, g.Item = m, g
        }
        var a = t.document,
            l = t.console,
            u = t.jQuery,
            c = function() {},
            p = Object.prototype.toString,
            d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e() {
            function t(e) {
                for (var n in t.defaults) this[n] = t.defaults[n];
                for (n in e) this[n] = e[n]
            }
            return n.Rect = t, t.defaults = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, t.prototype.contains = function(t) {
                var e = t.width || 0,
                    n = t.height || 0;
                return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + n
            }, t.prototype.overlaps = function(t) {
                var e = this.x + this.width,
                    n = this.y + this.height,
                    i = t.x + t.width,
                    o = t.y + t.height;
                return this.x < i && e > t.x && this.y < o && n > t.y
            }, t.prototype.getMaximalFreeRects = function(e) {
                if (!this.overlaps(e)) return !1;
                var n, i = [],
                    o = this.x + this.width,
                    r = this.y + this.height,
                    s = e.x + e.width,
                    a = e.y + e.height;
                return this.y < e.y && (n = new t({
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: e.y - this.y
                }), i.push(n)), o > s && (n = new t({
                    x: s,
                    y: this.y,
                    width: o - s,
                    height: this.height
                }), i.push(n)), r > a && (n = new t({
                    x: this.x,
                    y: a,
                    width: this.width,
                    height: r - a
                }), i.push(n)), this.x < e.x && (n = new t({
                    x: this.x,
                    y: this.y,
                    width: e.x - this.x,
                    height: this.height
                }), i.push(n)), i
            }, t.prototype.canFit = function(t) {
                return this.width >= t.width && this.height >= t.height
            }, t
        }
        var n = t.Packery = function() {};
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
    }(window),
    function(t) {
        function e(t) {
            function e(t, e, n) {
                this.width = t || 0, this.height = e || 0, this.sortDirection = n || "downwardLeftToRight", this.reset()
            }
            e.prototype.reset = function() {
                this.spaces = [], this.newSpaces = [];
                var e = new t({
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                });
                this.spaces.push(e), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
            }, e.prototype.pack = function(t) {
                for (var e = 0, n = this.spaces.length; n > e; e++) {
                    var i = this.spaces[e];
                    if (i.canFit(t)) {
                        this.placeInSpace(t, i);
                        break
                    }
                }
            }, e.prototype.placeInSpace = function(t, e) {
                t.x = e.x, t.y = e.y, this.placed(t)
            }, e.prototype.placed = function(t) {
                for (var e = [], n = 0, i = this.spaces.length; i > n; n++) {
                    var o = this.spaces[n],
                        r = o.getMaximalFreeRects(t);
                    r ? e.push.apply(e, r) : e.push(o)
                }
                this.spaces = e, this.mergeSortSpaces()
            }, e.prototype.mergeSortSpaces = function() {
                e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
            }, e.prototype.addSpace = function(t) {
                this.spaces.push(t), this.mergeSortSpaces()
            }, e.mergeRects = function(t) {
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    if (i) {
                        var o = t.slice(0);
                        o.splice(e, 1);
                        for (var r = 0, s = 0, a = o.length; a > s; s++) {
                            var l = o[s],
                                u = e > s ? 0 : 1;
                            i.contains(l) && (t.splice(s + u - r, 1), r++)
                        }
                    }
                }
                return t
            };
            var n = {
                downwardLeftToRight: function(t, e) {
                    return t.y - e.y || t.x - e.x
                },
                rightwardTopToBottom: function(t, e) {
                    return t.x - e.x || t.y - e.y
                }
            };
            return e
        }
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof exports) module.exports = e(require("./rect"));
        else {
            var n = t.Packery = t.Packery || {};
            n.Packer = e(n.Rect)
        }
    }(window),
    function(t) {
        function e(t, e, n) {
            var i = t("transform"),
                o = function() {
                    e.Item.apply(this, arguments)
                };
            o.prototype = new e.Item;
            var r = o.prototype._create;
            return o.prototype._create = function() {
                r.call(this), this.rect = new n, this.placeRect = new n
            }, o.prototype.dragStart = function() {
                this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
            }, o.prototype.dragMove = function(t, e) {
                this.didDrag = !0;
                var n = this.layout.size;
                t -= n.paddingLeft, e -= n.paddingTop, this.positionPlaceRect(t, e)
            }, o.prototype.dragStop = function() {
                this.getPosition();
                var t = this.position.x !== this.placeRect.x,
                    e = this.position.y !== this.placeRect.y;
                this.needsPositioning = t || e, this.didDrag = !1
            }, o.prototype.positionPlaceRect = function(t, e, n) {
                this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, n)
            }, o.prototype.getPlaceRectCoord = function(t, e, n) {
                var i = e ? "Width" : "Height",
                    o = this.size["outer" + i],
                    r = this.layout[e ? "columnWidth" : "rowHeight"],
                    s = this.layout.size["inner" + i];
                e || (s = Math.max(s, this.layout.maxY), this.layout.rowHeight || (s -= this.layout.gutter));
                var a;
                if (r) {
                    r += this.layout.gutter, s += e ? this.layout.gutter : 0, t = Math.round(t / r);
                    var l;
                    l = this.layout.options.isHorizontal ? e ? "ceil" : "floor" : e ? "floor" : "ceil";
                    var u = Math[l](s / r);
                    u -= Math.ceil(o / r), a = u
                } else a = s - o;
                return t = n ? t : Math.min(t, a), t *= r || 1, Math.max(0, t)
            }, o.prototype.copyPlaceRectPosition = function() {
                this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
            }, o.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
            }, o
        }
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect)
    }(window),
    function(t) {
        function e(t, e, n, i, o, r) {
            function s(t, e) {
                return t.position.y - e.position.y || t.position.x - e.position.x
            }

            function a(t, e) {
                return t.position.x - e.position.x || t.position.y - e.position.y
            }
            var l = n.create("packery");
            return l.Item = r, l.prototype._create = function() {
                n.prototype._create.call(this), this.packer = new o, this.stamp(this.options.stamped);
                var t = this;
                this.handleDraggabilly = {
                    dragStart: function(e) {
                        t.itemDragStart(e.element)
                    },
                    dragMove: function(e) {
                        t.itemDragMove(e.element, e.position.x, e.position.y)
                    },
                    dragEnd: function(e) {
                        t.itemDragEnd(e.element)
                    }
                }, this.handleUIDraggable = {
                    start: function(e) {
                        t.itemDragStart(e.currentTarget)
                    },
                    drag: function(e, n) {
                        t.itemDragMove(e.currentTarget, n.position.left, n.position.top)
                    },
                    stop: function(e) {
                        t.itemDragEnd(e.currentTarget)
                    }
                }
            }, l.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurements();
                var t = this.packer;
                this.options.isHorizontal ? (t.width = Number.POSITIVE_INFINITY, t.height = this.size.innerHeight + this.gutter, t.sortDirection = "rightwardTopToBottom") : (t.width = this.size.innerWidth + this.gutter, t.height = Number.POSITIVE_INFINITY, t.sortDirection = "downwardLeftToRight"), t.reset(), this.maxY = 0, this.maxX = 0
            }, l.prototype._getMeasurements = function() {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
            }, l.prototype._getItemLayoutPosition = function(t) {
                return this._packItem(t), t.rect
            }, l.prototype._packItem = function(t) {
                this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxXY(t.rect)
            }, l.prototype._setMaxXY = function(t) {
                this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
            }, l.prototype._setRectSize = function(t, n) {
                var i = e(t),
                    o = i.outerWidth,
                    r = i.outerHeight;
                if (o || r) {
                    var s = this.columnWidth + this.gutter,
                        a = this.rowHeight + this.gutter;
                    o = this.columnWidth ? Math.ceil(o / s) * s : o + this.gutter, r = this.rowHeight ? Math.ceil(r / a) * a : r + this.gutter
                }
                n.width = Math.min(o, this.packer.width), n.height = Math.min(r, this.packer.height)
            }, l.prototype._getContainerSize = function() {
                return this.options.isHorizontal ? {
                    width: this.maxX - this.gutter
                } : {
                    height: this.maxY - this.gutter
                }
            }, l.prototype._manageStamp = function(t) {
                var e, n = this.getItem(t);
                if (n && n.isPlacing) e = n.placeRect;
                else {
                    var o = this._getElementOffset(t);
                    e = new i({
                        x: this.options.isOriginLeft ? o.left : o.right,
                        y: this.options.isOriginTop ? o.top : o.bottom
                    })
                }
                this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
            }, l.prototype.sortItemsByPosition = function() {
                var t = this.options.isHorizontal ? a : s;
                this.items.sort(t)
            }, l.prototype.fit = function(t, e, n) {
                var i = this.getItem(t);
                i && (this._getMeasurements(), this.stamp(i.element), i.getSize(), i.isPlacing = !0, e = void 0 === e ? i.rect.x : e, n = void 0 === n ? i.rect.y : n, i.positionPlaceRect(e, n, !0), this._bindFitEvents(i), i.moveTo(i.placeRect.x, i.placeRect.y), this.layout(), this.unstamp(i.element), this.sortItemsByPosition(), i.isPlacing = !1, i.copyPlaceRectPosition())
            }, l.prototype._bindFitEvents = function(t) {
                function e() {
                    i++, 2 === i && n.emitEvent("fitComplete", [n, t])
                }
                var n = this,
                    i = 0;
                t.on("layout", function() {
                    return e(), !0
                }), this.on("layoutComplete", function() {
                    return e(), !0
                })
            }, l.prototype.resize = function() {
                var t = e(this.element),
                    n = this.size && t,
                    i = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                n && t[i] === this.size[i] || this.layout()
            }, l.prototype.itemDragStart = function(t) {
                this.stamp(t);
                var e = this.getItem(t);
                e && e.dragStart()
            }, l.prototype.itemDragMove = function(t, e, n) {
                function i() {
                    r.layout(), delete r.dragTimeout
                }
                var o = this.getItem(t);
                o && o.dragMove(e, n);
                var r = this;
                this.clearDragTimeout(), this.dragTimeout = setTimeout(i, 40)
            }, l.prototype.clearDragTimeout = function() {
                this.dragTimeout && clearTimeout(this.dragTimeout)
            }, l.prototype.itemDragEnd = function(e) {
                var n, i = this.getItem(e);
                if (i && (n = i.didDrag, i.dragStop()), !i || !n && !i.needsPositioning) return this.unstamp(e), void 0;
                t.add(i.element, "is-positioning-post-drag");
                var o = this._getDragEndLayoutComplete(e, i);
                i.needsPositioning ? (i.on("layout", o), i.moveTo(i.placeRect.x, i.placeRect.y)) : i && i.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", o), this.layout()
            }, l.prototype._getDragEndLayoutComplete = function(e, n) {
                var i = n && n.needsPositioning,
                    o = 0,
                    r = i ? 2 : 1,
                    s = this;
                return function() {
                    return o++, o !== r ? !0 : (n && (t.remove(n.element, "is-positioning-post-drag"), n.isPlacing = !1, n.copyPlaceRectPosition()), s.unstamp(e), s.sortItemsByPosition(), i && s.emitEvent("dragItemPositioned", [s, n]), !0)
                }
            }, l.prototype.bindDraggabillyEvents = function(t) {
                t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
            }, l.prototype.bindUIDraggableEvents = function(t) {
                t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
            }, l.Rect = i, l.Packer = o, l
        }
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof exports ? module.exports = e(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window),
    function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var n = (new Date).getTime(),
                i = Math.max(0, 16 - (n - t)),
                o = window.setTimeout(function() {
                    e(n + i)
                }, i);
            return t = n + i, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(),
    function(t) {
        t.fn.rwdImageMaps = function() {
            var e = this,
                n = function() {
                    e.each(function() {
                        if ("undefined" != typeof t(this).attr("usemap")) {
                            var e = this,
                                n = t(e);
                            t("<img />").load(function() {
                                var e = "width",
                                    i = "height",
                                    o = n.attr(e),
                                    r = n.attr(i);
                                if (!o || !r) {
                                    var s = new Image;
                                    s.src = n.attr("src"), o || (o = s.width), r || (r = s.height)
                                }
                                var a = n.width() / 100,
                                    l = n.height() / 100,
                                    u = n.attr("usemap").replace("#", ""),
                                    c = "coords";
                                t('map[name="' + u + '"]').find("area").each(function() {
                                    var e = t(this);
                                    e.data(c) || e.data(c, e.attr(c));
                                    for (var n = e.data(c).split(","), i = new Array(n.length), s = 0; s < i.length; ++s) i[s] = s % 2 === 0 ? parseInt(n[s] / o * 100 * a) : parseInt(n[s] / r * 100 * l);
                                    e.attr(c, i.toString())
                                })
                            }).attr("src", n.attr("src"))
                        }
                    })
                };
            return t(window).resize(n).trigger("resize"), this
        }
    }(jQuery), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, n) {
        var i = {
            init: function(e, n) {
                var i = this;
                i.$elem = t(n), i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e), i.userOptions = e, i.loadContent()
            },
            loadContent: function() {
                function e(t) {
                    var e, n = "";
                    if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (n += t.owl[e].item);
                        i.$elem.html(n)
                    }
                    i.logIn()
                }
                var n, i = this;
                "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (n = i.options.jsonPath, t.getJSON(n, e)) : i.logIn()
            },
            logIn: function() {
                var t = this;
                t.$elem.data("owl-originalStyles", t.$elem.attr("style")), t.$elem.data("owl-originalClasses", t.$elem.attr("class")), t.$elem.css({
                    opacity: 0
                }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
            },
            setVars: function() {
                var t = this;
                return 0 === t.$elem.children().length ? !1 : (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), t.onStartup(), void 0)
            },
            onStartup: function() {
                var t = this;
                t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
            },
            eachMoveUpdate: function() {
                var t = this;
                t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
            },
            updateVars: function() {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
            },
            reload: function() {
                var t = this;
                e.setTimeout(function() {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                return t.$elem.is(":visible") !== !1 ? !1 : (t.$elem.css({
                    opacity: 0
                }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), t.checkVisible = e.setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), e.clearInterval(t.checkVisible))
                }, 500), void 0)
            },
            wrapItems: function() {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    n = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), n || t.$elem.addClass(t.options.theme)
            },
            updateItems: function() {
                var e, n, i = this;
                if (i.options.responsive === !1) return !1;
                if (i.options.singleItem === !0) return i.options.items = i.orignalItems = 1, i.options.itemsCustom = !1, i.options.itemsDesktop = !1, i.options.itemsDesktopSmall = !1, i.options.itemsTablet = !1, i.options.itemsTabletSmall = !1, i.options.itemsMobile = !1, !1;
                if (e = t(i.options.responsiveBaseWidth).width(), e > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1)
                    for (i.options.itemsCustom.sort(function(t, e) {
                            return t[0] - e[0]
                        }), n = 0; n < i.options.itemsCustom.length; n += 1) i.options.itemsCustom[n][0] <= e && (i.options.items = i.options.itemsCustom[n][1]);
                else e <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]), e <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]), e <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]), e <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]), e <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
                i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount)
            },
            response: function() {
                var n, i, o = this;
                return o.options.responsive !== !0 ? !1 : (i = t(e).width(), o.resizer = function() {
                    t(e).width() !== i && (o.options.autoPlay !== !1 && e.clearInterval(o.autoPlayInterval), e.clearTimeout(n), n = e.setTimeout(function() {
                        i = t(e).width(), o.updateVars()
                    }, o.options.responsiveRefreshRate))
                }, t(e).resize(o.resizer), void 0)
            },
            updatePosition: function() {
                var t = this;
                t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    n = 0,
                    i = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(o) {
                    var r = t(this);
                    r.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(o)), (o % e.options.items === 0 || o === i) && (o > i || (n += 1)), r.data("owl-roundPages", n)
                })
            },
            appendWrapperSizes: function() {
                var t = this,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({
                    width: 2 * e,
                    left: 0
                }), t.appendItemsSizes()
            },
            calculateAll: function() {
                var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
            },
            calculateWidth: function() {
                var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items)
            },
            max: function() {
                var t = this,
                    e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
                return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e, n, i, o = this,
                    r = 0,
                    s = 0;
                for (o.positionsInArray = [0], o.pagesInArray = [], e = 0; e < o.itemsAmount; e += 1) s += o.itemWidth, o.positionsInArray.push(-s), o.options.scrollPerPage === !0 && (n = t(o.$owlItems[e]), i = n.data("owl-roundPages"), i !== r && (o.pagesInArray[r] = o.positionsInArray[e], r = i))
            },
            buildControls: function() {
                var e = this;
                (e.options.navigation === !0 || e.options.pagination === !0) && (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    n = t('<div class="owl-buttons"/>');
                e.owlControls.append(n), e.buttonPrev = t("<div/>", {
                    "class": "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    "class": "owl-next",
                    html: e.options.navigationText[1] || ""
                }), n.append(e.buttonPrev).append(e.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                    n.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e, n, i, o, r, s, a = this;
                if (a.options.pagination === !1) return !1;
                for (a.paginationWrapper.html(""), e = 0, n = a.itemsAmount - a.itemsAmount % a.options.items, o = 0; o < a.itemsAmount; o += 1) o % a.options.items === 0 && (e += 1, n === o && (i = a.itemsAmount - a.options.items), r = t("<div/>", {
                    "class": "owl-page"
                }), s = t("<span></span>", {
                    text: a.options.paginationNumbers === !0 ? e : "",
                    "class": a.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), r.append(s), r.data("owl-page", n === o ? i : o), r.data("owl-roundPages", e), a.paginationWrapper.append(r));
                a.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                return e.options.pagination === !1 ? !1 : (e.paginationWrapper.find(".owl-page").each(function() {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                }), void 0)
            },
            checkNavigation: function() {
                var t = this;
                return t.options.navigation === !1 ? !1 : (t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))), void 0)
            },
            updateControls: function() {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
            },
            destroyControls: function() {
                var t = this;
                t.owlControls && t.owlControls.remove()
            },
            next: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) {
                    if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
                    e.currentItem = 0, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            prev: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
                    if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
                    e.currentItem = e.maximumItem, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            goTo: function(t, n, i) {
                var o, r = this;
                return r.isTransition ? !1 : ("function" == typeof r.options.beforeMove && r.options.beforeMove.apply(this, [r.$elem]), t >= r.maximumItem ? t = r.maximumItem : 0 >= t && (t = 0), r.currentItem = r.owl.currentItem = t, r.options.transitionStyle !== !1 && "drag" !== i && 1 === r.options.items && r.browser.support3d === !0 ? (r.swapSpeed(0), r.browser.support3d === !0 ? r.transition3d(r.positionsInArray[t]) : r.css2slide(r.positionsInArray[t], 1), r.afterGo(), r.singleItemTransition(), !1) : (o = r.positionsInArray[t], r.browser.support3d === !0 ? (r.isCss3Finish = !1, n === !0 ? (r.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.paginationSpeed)) : "rewind" === n ? (r.swapSpeed(r.options.rewindSpeed), e.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.rewindSpeed)) : (r.swapSpeed("slideSpeed"), e.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.slideSpeed)), r.transition3d(o)) : n === !0 ? r.css2slide(o, r.options.paginationSpeed) : "rewind" === n ? r.css2slide(o, r.options.rewindSpeed) : r.css2slide(o, r.options.slideSpeed), r.afterGo(), void 0))
            },
            jumpTo: function(t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || -1 === t ? t = e.maximumItem : 0 >= t && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
            },
            afterGo: function() {
                var t = this;
                t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
            },
            stop: function() {
                var t = this;
                t.apStatus = "stop", e.clearInterval(t.autoPlayInterval)
            },
            checkAp: function() {
                var t = this;
                "stop" !== t.apStatus && t.play()
            },
            play: function() {
                var t = this;
                return t.apStatus = "play", t.options.autoPlay === !1 ? !1 : (e.clearInterval(t.autoPlayInterval), t.autoPlayInterval = e.setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay), void 0)
            },
            swapSpeed: function(t) {
                var e = this;
                "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                var e = this;
                e.$owlWrapper.css(e.doTranslate(t))
            },
            css2move: function(t) {
                var e = this;
                e.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var n = this;
                n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || n.options.slideSpeed,
                    complete: function() {
                        n.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t, i, o, r, s = this,
                    a = "translate3d(0px, 0px, 0px)",
                    l = n.createElement("div");
                l.style.cssText = "  -moz-transform:" + a + "; -ms-transform:" + a + "; -o-transform:" + a + "; -webkit-transform:" + a + "; transform:" + a, t = /translate3d\(0px, 0px, 0px\)/g, i = l.style.cssText.match(t), o = null !== i && 1 === i.length, r = "ontouchstart" in e || e.navigator.msMaxTouchPoints, s.browser = {
                    support3d: o,
                    isTouch: r
                }
            },
            moveEvents: function() {
                var t = this;
                (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) && (t.gestures(), t.disabledEvents())
            },
            eventTypes: function() {
                var t = this,
                    e = ["s", "e", "x"];
                t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
            },
            disabledEvents: function() {
                var e = this;
                e.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), e.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function i(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function o(e) {
                    "on" === e ? (t(n).on(l.ev_types.move, s), t(n).on(l.ev_types.end, a)) : "off" === e && (t(n).off(l.ev_types.move), t(n).off(l.ev_types.end))
                }

                function r(n) {
                    var r, s = n.originalEvent || n || e.event;
                    if (3 === s.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), r = t(this).position(), u.relativePos = r.left, u.offsetX = i(s).x - r.left, u.offsetY = i(s).y - r.top, o("on"), u.sliding = !1, u.targetElement = s.target || s.srcElement
                    }
                }

                function s(o) {
                    var r, s, a = o.originalEvent || o || e.event;
                    l.newPosX = i(a).x - u.offsetX, l.newPosY = i(a).y - u.offsetY, l.newRelativeX = l.newPosX - u.relativePos, "function" == typeof l.options.startDragging && u.dragging !== !0 && 0 !== l.newRelativeX && (u.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== a.preventDefault ? a.preventDefault() : a.returnValue = !1, u.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && u.sliding === !1 && t(n).off("touchmove.owl"), r = function() {
                        return l.newRelativeX / 5
                    }, s = function() {
                        return l.maximumPixels + l.newRelativeX / 5
                    }, l.newPosX = Math.max(Math.min(l.newPosX, r()), s()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
                }

                function a(n) {
                    var i, r, s, a = n.originalEvent || n || e.event;
                    a.target = a.target || a.srcElement, u.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.dragDirection = l.owl.dragDirection = l.newRelativeX < 0 ? "left" : "right", 0 !== l.newRelativeX && (i = l.getNewPosition(), l.goTo(i, !1, "drag"), u.targetElement === a.target && l.browser.isTouch !== !0 && (t(a.target).on("click.disable", function(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                    }), r = t._data(a.target, "events").click, s = r.pop(), r.splice(0, 0, s))), o("off")
                }
                var l = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", r)
            },
            getNewPosition: function() {
                var t = this,
                    e = t.closestItem();
                return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
            },
            closestItem: function() {
                var e = this,
                    n = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                    i = e.newPosX,
                    o = null;
                return t.each(n, function(r, s) {
                    i - e.itemWidth / 20 > n[r + 1] && i - e.itemWidth / 20 < s && "left" === e.moveDirection() ? (o = s, e.currentItem = e.options.scrollPerPage === !0 ? t.inArray(o, e.positionsInArray) : r) : i + e.itemWidth / 20 < s && i + e.itemWidth / 20 > (n[r + 1] || n[r] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (o = n[r + 1] || n[n.length - 1], e.currentItem = t.inArray(o, e.positionsInArray)) : (o = n[r + 1], e.currentItem = r + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t, e = this;
                return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, n) {
                    t.options.autoPlay = n, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, n) {
                    t.goTo(n)
                }), t.$elem.on("owl.jumpTo", function(e, n) {
                    t.jumpTo(n)
                })
            },
            stopOnHover: function() {
                var t = this;
                t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e, n, i, o, r, s = this;
                if (s.options.lazyLoad === !1) return !1;
                for (e = 0; e < s.itemsAmount; e += 1) n = t(s.$owlItems[e]), "loaded" !== n.data("owl-loaded") && (i = n.data("owl-item"), o = n.find(".lazyOwl"), "string" == typeof o.data("src") ? (void 0 === n.data("owl-loaded") && (o.hide(), n.addClass("loading").data("owl-loaded", "checked")), r = s.options.lazyFollow === !0 ? i >= s.currentItem : !0, r && i < s.currentItem + s.options.items && o.length && s.lazyPreload(n, o)) : n.data("owl-loaded", "loaded"))
            },
            lazyPreload: function(t, n) {
                function i() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === s.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
                }

                function o() {
                    a += 1, s.completeImg(n.get(0)) || r === !0 ? i() : 100 >= a ? e.setTimeout(o, 100) : i()
                }
                var r, s = this,
                    a = 0;
                "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), r = !0) : n[0].src = n.data("src"), o()
            },
            autoHeight: function() {
                function n() {
                    var n = t(r.$owlItems[r.currentItem]).height();
                    r.wrapperOuter.css("height", n + "px"), r.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                        r.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function i() {
                    o += 1, r.completeImg(s.get(0)) ? n() : 100 >= o ? e.setTimeout(i, 100) : r.wrapperOuter.css("height", "")
                }
                var o, r = this,
                    s = t(r.$owlItems[r.currentItem]).find("img");
                void 0 !== s.get(0) ? (o = 0, i()) : n()
            },
            completeImg: function(t) {
                var e;
                return t.complete ? (e = typeof t.naturalWidth, "undefined" !== e && 0 === t.naturalWidth ? !1 : !0) : !1
            },
            onVisibleItems: function() {
                var e, n = this;
                for (n.options.addClassActive === !0 && n.$owlItems.removeClass("active"), n.visibleItems = [], e = n.currentItem; e < n.currentItem + n.options.items; e += 1) n.visibleItems.push(e), n.options.addClassActive === !0 && t(n.$owlItems[e]).addClass("active");
                n.owl.visibleItems = n.visibleItems
            },
            transitionTypes: function(t) {
                var e = this;
                e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                function t(t) {
                    return {
                        position: "relative",
                        left: t + "px"
                    }
                }
                var e = this,
                    n = e.outClass,
                    i = e.inClass,
                    o = e.$owlItems.eq(e.currentItem),
                    r = e.$owlItems.eq(e.prevItem),
                    s = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    a = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": a + "px",
                    "-moz-perspective-origin": a + "px",
                    "perspective-origin": a + "px"
                }), r.css(t(s, 10)).addClass(n).on(l, function() {
                    e.endPrev = !0, r.off(l), e.clearTransStyle(r, n)
                }), o.addClass(i).on(l, function() {
                    e.endCurrent = !0, o.off(l), e.clearTransStyle(o, i)
                })
            },
            clearTransStyle: function(t, e) {
                var n = this;
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"), n.endPrev = !1, n.endCurrent = !1, n.isTransition = !1)
            },
            owlStatus: function() {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection
                }
            },
            clearEvents: function() {
                var i = this;
                i.$elem.off(".owl owl mousedown.disableTextSelect"), t(n).off(".owl owl"), t(e).off("resize", i.resizer)
            },
            unWrap: function() {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var t = this;
                t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
            },
            reinit: function(e) {
                var n = this,
                    i = t.extend({}, n.userOptions, e);
                n.unWrap(), n.init(i, n.$elem)
            },
            addItem: function(t, e) {
                var n, i = this;
                return t ? 0 === i.$elem.children().length ? (i.$elem.append(t), i.setVars(), !1) : (i.unWrap(), n = void 0 === e || -1 === e ? -1 : e, n >= i.$userItems.length || -1 === n ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(n).before(t), i.setVars(), void 0) : !1
            },
            removeItem: function(t) {
                var e, n = this;
                return 0 === n.$elem.children().length ? !1 : (e = void 0 === t || -1 === t ? -1 : t, n.unWrap(), n.$userItems.eq(e).remove(), n.setVars(), void 0)
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (t(this).data("owl-init") === !0) return !1;
                t(this).data("owl-init", !0);
                var n = Object.create(i);
                n.init(e, this), t.data(this, "owlCarousel", n)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document);
var owlObject, viewport = {
        treshold: 961,
        watch: !0,
        smallScreen: !1
    },
    _settings = {
        window: $(window),
        body: $("body"),
        header: $("#header"),
        submenu: $(".submenu"),
        parallaxSpeed: .5
    };
$(document).ready(function() {
    responsive(), layoutParallax(), $("#toplink").click(function() {
        return navigateTo(0), !1
    }), $(".scroll-to").on("click", function() {
        var t = $(this).attr("href");
        return navigateTo($(t).offset().top - (_settings.header.height() + $(".submenu nav").height())), !1
    }), $(".responsive-menu").click(function() {
        return $("header").toggleClass("responsive-menu-shown"), !1
    }), $("[data-page=home]").length && $(".streets-artwork").each(function() {
        var t = $(this).data("background"),
            e = $(this);
        $("<img/>").attr("src", t).load(function() {
            $(this).remove(), e.css("background-image", 'url("' + t + '")'), loadBuildings()
        })
    }), loadBanner()
}), $(window).load(function() {
    $("body").addClass("body-loaded");
    var t = $("#feed");
    t.length && t.packery({
        itemSelector: ".feed-block",
        isFitWidth: !0
    });
    var e = $("#gallery");
    $("#gallery .item").size() > 1 && (e.owlCarousel({
        addClassActive: !0,
        singleItem: !0,
        pagination: !1,
        autoHeight: !0,
        navigation: e.data("navigation") ? e.data("navigation") : !1,
        navigationText: ["<i class='icon-left-big'></i>", "<i class='icon-right-big'></i>"],
        afterInit: function() {
            $("#gallery .item").show(), owlKeyboardSupport(), owlThumbsBuild(), owlThumbsUpdate()
        },
        afterMove: function() {
            owlThumbsUpdate()
        }
    }), owlObject = e.data("owlCarousel"), $(".item").on("click", function() {
        e.trigger("owl.next")
    })), e.show()
}), $(window).scroll(function() {
    window.requestAnimationFrame(scrollUpdate)
}), $(window).resize(function() {
    scrollUpdate(), responsive(), owlThumbsUpdate()
}), $(document).ready(function() {
    $("[data-behaviour=search]").on("submit", function(t) {
        var e = $('[name="query"]', this).val().replace(/\//g, "");
        e ? (this.action = "/search/query/" + e + "/", this.method = "POST") : t.preventDefault()
    })
});