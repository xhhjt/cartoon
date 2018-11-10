webpackJsonp(["recharge"], {
    "+qWx": function (e, t) {
        e.exports = vendor
    },
    "5AEV": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return E
        });
        var a = n("Zx67"),
            r = n.n(a),
            o = n("Zrlr"),
            i = n.n(o),
            s = n("wxAW"),
            c = n.n(s),
            l = n("zwoO"),
            u = n.n(l),
            d = n("Pf15"),
            h = n.n(d),
            f = n("U7vG"),
            m = n.n(f),
            p = n("D/cR"),
            g = n("tBL+"),
            v = n("vPHJ"),
            y = n("LHne"),
            b = n("vqET"),
            E = (n.n(b), function (e) {
                function t(e) {
                    i()(this, t);
                    var n = u()(this, (t.__proto__ || r()(t)).call(this, e));
                    return n.state = {
                        bannerList: []
                    },
                        n.locMap = {
                            home: 1,
                            history: 2,
                            recharge: 3
                        },
                        n
                }
                return h()(t, e),
                    c()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.getBanner()
                        }
                    },
                        {
                            key: "getBanner",
                            value: function () {
                                var e = this,
                                    t = this.props.config,
                                    n = t.loc,
                                    a = t.cors,
                                    r = t.dot,
                                    o = t.siteInfo,
                                    i = t.emptyCallback;
                                if (n) {
                                    var s = p.a,
                                        c = "/banner/getBanners.json",
                                        l = {
                                            location: this.locMap[n]
                                        };
                                    if (1 == a) {
                                        s = p.b;
                                        c = "http://localhost" + "/banner/cors/getBanners.json",
                                            l.siteId = o && o.siteId
                                    }
                                    s(c, l).then(function (t) {
                                        0 == t.code && t.bannerList ? (e.setState({
                                            bannerList: t.bannerList
                                        }), e.loggerDot({
                                            dot: r.show
                                        })) : i && i()
                                    }).
                                    catch (function (e) {})
                                }
                            }
                        },
                        {
                            key: "loggerDot",
                            value: function (e, t) {
                                var n = this.props.config,
                                    a = n.cors,
                                    r = n.siteInfo;
                                a ? Object(g.b)(e, r, t) : Object(g.a)(e, t)
                            }
                        },
                        {
                            key: "handleBannerClick",
                            value: function (e) {
                                var t = e.jumpUrl,
                                    n = e.id,
                                    a = e.index,
                                    r = void 0 === a ? 0 : a,
                                    o = this.props.config,
                                    i = o.dot,
                                    s = o.cors,
                                    c = o.siteInfo;
                                if (s && (t = c.kuxuanRootPath + t), i.click) return t = t.split("#")[0] + (t.indexOf("?") > -1 ? "&from=" : "?from=") + i.click,
                                    this.loggerDot({
                                        dot: i.click,
                                        message: {
                                            id: n,
                                            pos: r
                                        }
                                    }),
                                    void setTimeout(function () {
                                        window.location.href = t
                                    }, 200);
                                location.href = t
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.state.bannerList;
                                return 0 === t.length ? null : m.a.createElement("div", {
                                    className: "m-imgBanner"
                                }, m.a.createElement(y.a, {
                                    swiperRef: function (t) {
                                        return t && (e.bannerSwiper = t.swiper)
                                    },
                                    bannerList: t,
                                    handleBannerClick: this.handleBannerClick.bind(this)
                                }))
                            }
                        }]),
                    t
            }(f.Component));
        E.defaultProps = {
            config: {}
        }
    },
    "8nng": function (e, t, n) {
        "use strict";
        var a = n("+6Bu"),
            r = n.n(a),
            o = n("Zrlr"),
            i = n.n(o),
            s = n("wxAW"),
            c = n.n(s),
            l = n("tBL+"),
            u = n("vPHJ"),
            d = function () {
                function e(t) {
                    var n = this;
                    i()(this, e),
                        this._handleDocClick = function (e) {
                            var t = n._getTargetElement(e);
                            if (t) {
                                var a = t.dataset.log;
                                if (a && (n.capture(a), "A" === t.tagName.toUpperCase())) {
                                    var r = t.href;
                                    if (!r || 0 === r.indexOf("javascript") || "_blank" === t.getAttribute("target")) return;
                                    e.preventDefault(),
                                        setTimeout(function () {
                                            window.location.href = t.href
                                        }, 200)
                                }
                            }
                        },
                        this._logToBackend = function (e) {
                            if (location.href.indexOf("//pay.") > -1 || location.href.indexOf("//prepay.") > -1) {
                                var t = Object(u.h)(),
                                    n = (t.targetUrl, t.shareUrl, r()(t, ["targetUrl", "shareUrl"]));
                                Object(l.b)(JSON.parse(e), n)
                            } else Object(l.a)(JSON.parse(e))
                        },
                        this.capture = function (e) {
                            n._logToBackend(e)
                        },
                        this._handleDocClick = this._handleDocClick.bind(this),
                        this._addEventListeners()
                }
                return c()(e, [{
                    key: "_addEventListeners",
                    value: function () {
                        document.addEventListener("click", this._handleDocClick, !0)
                    }
                },
                    {
                        key: "_getTargetElement",
                        value: function (e) {
                            for (var t = e.target; t;) {
                                if (t.dataset && t.dataset.log) return t;
                                t = t.parentNode
                            }
                            return null
                        }
                    }]),
                    e
            }();
        new d
    },
    BEQ0: function (e, t, n) {
        e.exports = n("+qWx")(3)
    },
    "BK/k": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        }),
            n.d(t, "b", function () {
                return i
            });
        var a = n("VkW9"),
            r = n.n(a),
            o = new r.a,
            i = o.get("XSRF-TOKEN")
    },
    CVS8: function (e, t) {},
    "D/cR": function (e, t, n) {
        "use strict";

        function a(e) {
            var t = [];
            for (var n in e)!
                function (n) {
                    Array.isArray(e[n]) ? e[n].forEach(function (e) {
                        t.push(n + "[]=" + e)
                    }) : t.push(n + "=" + e[n])
                }(n);
            return t.join("&")
        }
        t.c = a,
            n.d(t, "a", function () {
                return u
            }),
            n.d(t, "d", function () {
                return d
            }),
            n.d(t, "b", function () {
                return h
            });
        var r = n("Xxa5"),
            o = n.n(r),
            i = n("exGp"),
            s = n.n(i),
            c = n("rplX"),
            l = (n.n(c), n("BK/k")),
            u = function () {
                var e = s()(o.a.mark(function e(t) {
                    var n, r, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return o.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = a(s),
                                n.length > 0 && (t += "?" + n),
                                    e.next = 4,
                                    fetch(t, {
                                        method: "GET",
                                        credentials: "same-origin"
                                    });
                            case 4:
                                if (r = e.sent, r.ok) {
                                    e.next = 7;
                                    break
                                }
                                throw new Error("网络错误:" + r.status);
                            case 7:
                                return i = void 0,
                                    e.prev = 8,
                                    e.next = 11,
                                    r.json();
                            case 11:
                                i = e.sent,
                                    e.next = 17;
                                break;
                            case 14:
                                throw e.prev = 14,
                                    e.t0 = e.
                                    catch (8),
                                    new Error("服务器错误");
                            case 17:
                                if (!1 !== i.success) {
                                    e.next = 21;
                                    break
                                }
                                throw new Error(i.msg || "请求失败");
                            case 21:
                                return -401 === i.code && location.reload(),
                                    e.abrupt("return", i);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [8, 14]
                    ])
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(),
            d = function () {
                var e = s()(o.a.mark(function e(t) {
                    var n, r, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return o.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = a(c),
                                n.length > 0 && (t += "?" + n),
                                    e.next = 4,
                                    fetch(t, {
                                        method: "POST",
                                        credentials: "same-origin",
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded",
                                            "X-XSRF-TOKEN": l.b
                                        },
                                        body: a(s)
                                    });
                            case 4:
                                if (r = e.sent, r.ok) {
                                    e.next = 7;
                                    break
                                }
                                throw new Error("网络错误:" + r.status);
                            case 7:
                                return i = void 0,
                                    e.prev = 8,
                                    e.next = 11,
                                    r.json();
                            case 11:
                                i = e.sent,
                                    e.next = 17;
                                break;
                            case 14:
                                throw e.prev = 14,
                                    e.t0 = e.
                                    catch (8),
                                    new Error("服务器错误");
                            case 17:
                                if (!1 !== i.success) {
                                    e.next = 21;
                                    break
                                }
                                throw new Error(i.msg || "请求失败");
                            case 21:
                                return -401 === i.code && location.reload(),
                                    e.abrupt("return", i);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [8, 14]
                    ])
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(),
            h = function () {
                var e = s()(o.a.mark(function e(t) {
                    var n, r, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return o.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = a(s),
                                n.length > 0 && (t += "?" + n),
                                    e.next = 4,
                                    fetch(t, {
                                        method: "GET",
                                        credentials: "same-origin",
                                        mode: "cors"
                                    });
                            case 4:
                                if (r = e.sent, r.ok) {
                                    e.next = 7;
                                    break
                                }
                                throw new Error("网络错误:" + r.status);
                            case 7:
                                return i = void 0,
                                    e.prev = 8,
                                    e.next = 11,
                                    r.json();
                            case 11:
                                i = e.sent,
                                    e.next = 17;
                                break;
                            case 14:
                                throw e.prev = 14,
                                    e.t0 = e.
                                    catch (8),
                                    new Error("服务器错误");
                            case 17:
                                if (!1 !== i.success) {
                                    e.next = 21;
                                    break
                                }
                                throw new Error(i.msg || "请求失败");
                            case 21:
                                return -401 === i.code && location.reload(),
                                    e.abrupt("return", i);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [8, 14]
                    ])
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
    },
    EtYT: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var a = n("O57f"),
            r = {
                getDays: function (e) {
                    return Math.floor(e / 864e5)
                },
                getHours: function (e) {
                    return Math.floor(e / 36e5) % 24
                },
                getMinutes: function (e) {
                    return Math.floor(e / 6e4) % 60
                },
                getSeconds: function (e) {
                    return Math.floor(e / 1e3) % 60
                },
                getMilliSeconds: function (e) {
                    return e % 1e3
                },
                format: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".";
                    if (!isNaN(parseInt(e))) {
                        var n = new Date(parseInt(e));
                        return n.getFullYear() + t + a.a.padLeft(n.getMonth() + 1, 2) + t + a.a.padLeft(n.getDate(), 2)
                    }
                },
                formatMonth: function (e) {
                    if (!isNaN(parseInt(e))) return e = parseInt(e),
                        e % 12 == 0 ? e / 12 + "年" : e + "个月"
                }
            }
    },
    HJfm: function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return a
        }),
            n.d(t, "b", function () {
                return r
            }),
            n.d(t, "f", function () {
                return o
            }),
            n.d(t, "d", function () {
                return i
            }),
            n.d(t, "c", function () {
                return s
            }),
            n.d(t, "a", function () {
                return c
            });
        var a = {
                FIRST_ENTER: "firstEnter",
                ACTIVITY: "activity",
                SIGN: "sign",
                GUIDE: "guide"
            },
            r = {
                BOOK_NOT_FOUND: "bookNotFound",
                REQUEST_ERROR: "requestError",
                CUSTOM_ERROR: "customError"
            },
            o = {
                WX_JSAPI: "WX_JSAPI",
                WX_NATIVE: "WX_NATIVE",
                ALIPAY: "ALIPAY"
            },
            i = {
                TEST: "test",
                PRE: "pre",
                ONLINE: "online"
            },
            s = {
                FEEDBACK: 0,
                COMPLAINT: 1
            },
            c = {
                SIGN_MODAL: "1",
                SIGN_BOTTOM: "2",
                READER_RMD: "3",
                READER_BANNER: "4"
            }
    },
    "L+eB": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return f
        });
        var a = n("Dd8w"),
            r = n.n(a),
            o = n("Zrlr"),
            i = n.n(o),
            s = n("wxAW"),
            c = n.n(s),
            l = n("D/cR"),
            u = n("vPHJ"),
            d = n("BK/k"),
            h = function () {
                function e(t) {
                    i()(this, e),
                        this.ua = window.navigator.userAgent,
                        this.isWeixin = /MicroMessenger/gi.test(this.ua),
                        t = t || {},
                        this.reqParams = t.reqParams || {},
                        this.iosUrl = t.iosUrl || location.href,
                        this.setShareData(t.shareData || {}),
                        this.shareAble = !0,
                    this.isWeixin && this.shareToWX()
                }
                return c()(e, [{
                    key: "setShareData",
                    value: function (e) {
                        var t = (e.link || window.location.href).replace(/token=[^&|^#|.]*&?/g, ""),
                            n = (d.a.get("_eic_" + Object(u.d)()) || "").split("|");
                        if (n.length > 2 && -1 === t.indexOf("link=")) {
                            var a = n[n.length - 1];
                            t += (t.indexOf("?") > -1 ? "&" : "?") + "link=" + a
                        }
                        this.shareData = {
                            title: e.title,
                            desc: e.desc || window.location.href,
                            link: t,
                            imgUrl: e.imgUrl
                        }
                    }
                },
                    {
                        key: "setSuccessCallback",
                        value: function (e) {
                            this.callback = e
                        }
                    },
                    {
                        key: "shareToWX",
                        value: function () {
                            var e = this,
                                t = u.f ? this.iosUrl : location.href,
                                n = r()({
                                    shareUrl: encodeURIComponent(t.split("#")[0])
                                }, this.reqParams);
                            Object(l.a)("/share.json", n).then(function (t) {
                                void 0 !== t.shareAble && (e.shareAble = t.shareAble),
                                    wx.config({
                                        debug: !1,
                                        appId: t.config.appId,
                                        timestamp: t.config.timestamp,
                                        nonceStr: t.config.nonceStr,
                                        signature: t.config.signature,
                                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems"]
                                    }),
                                    wx.ready(function () {
                                        wx.onMenuShareTimeline({
                                            title: e.shareData.title,
                                            link: e.shareData.link,
                                            imgUrl: e.shareData.imgUrl,
                                            success: function () {
                                                e.callback && e.callback()
                                            }
                                        }),
                                            wx.onMenuShareAppMessage({
                                                title: e.shareData.title,
                                                desc: e.shareData.desc,
                                                link: e.shareData.link,
                                                imgUrl: e.shareData.imgUrl,
                                                success: function () {
                                                    e.callback && e.callback()
                                                }
                                            }),
                                        e.shareAble || wx.hideMenuItems({
                                            menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone"]
                                        })
                                    })
                            }).
                            catch (function (e) {})
                        }
                    }]),
                    e
            }(),
            f = function (e) {
                return new h(e)
            }
    },
    LHne: function (e, t, n) {
        "use strict";
        var a = n("Zx67"),
            r = n.n(a),
            o = n("Zrlr"),
            i = n.n(o),
            s = n("wxAW"),
            c = n.n(s),
            l = n("zwoO"),
            u = n.n(l),
            d = n("Pf15"),
            h = n.n(d),
            f = n("U7vG"),
            m = n.n(f);
        n.d(t, "a", function () {
            return p
        });
        var p = function (e) {
            return function (t) {
                function n() {
                    var e, t, a, o;
                    i()(this, n);
                    for (var s = arguments.length, c = Array(s), l = 0; l < s; l++) c[l] = arguments[l];
                    return t = a = u()(this, (e = n.__proto__ || r()(n)).call.apply(e, [this].concat(c))),
                        a.state = {
                            Component: null
                        },
                        o = t,
                        u()(a, o)
                }
                return h()(n, t),
                    c()(n, [{
                        key: "componentDidMount",
                        value: function () {
                            var t = this;
                            this.hasLoadedComponent() || e().then(function (e) {
                                return e.
                                    default
                            }).then(function (e) {
                                t.setState({
                                    Component: e
                                })
                            }).
                            catch (function (e) {
                                throw e
                            })
                        }
                    },
                        {
                            key: "hasLoadedComponent",
                            value: function () {
                                return null !== this.state.Component
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.state.Component;
                                return e ? m.a.createElement(e, this.props) : null
                            }
                        }]),
                    n
            }(f.Component)
        }(function () {
            return n.e("bannerSwiper").then(n.bind(null, "FUeG"))
        })
    },
    NHKQ: function (e, t, n) {
        n.p = window.cdn || "/dist/"
    },
    Nbci: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return N
        });
        var a, r, o = n("mvHQ"),
            i = n.n(o),
            s = n("Xxa5"),
            c = n.n(s),
            l = n("exGp"),
            u = n.n(l),
            d = n("Zx67"),
            h = n.n(d),
            f = n("Zrlr"),
            m = n.n(f),
            p = n("wxAW"),
            g = n.n(p),
            v = n("zwoO"),
            y = n.n(v),
            b = n("Pf15"),
            E = n.n(b),
            k = n("U7vG"),
            w = n.n(k),
            x = n("D/cR"),
            I = n("vPHJ"),
            P = n("VZEA"),
            N = (n.n(P), r = a = function (e) {
                function t(e) {
                    m()(this, t);
                    var n = y()(this, (t.__proto__ || h()(t)).call(this, e));
                    return n.state = {
                        qrCodeUrl: ""
                    },
                        n
                }
                return E()(t, e),
                    g()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.getCustomer()
                        }
                    },
                        {
                            key: "getCustomer",
                            value: function () {
                                function e() {
                                    return t.apply(this, arguments)
                                }
                                var t = u()(c.a.mark(function e() {
                                    var t, n, a, r;
                                    return c.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = "http://localhost",
                                                    e.next = 3,
                                                    Object(x.b)(t + "/banner/cors/getCustomer.json", {
                                                        siteId: this.props.siteInfo.siteId
                                                    });
                                            case 3:
                                                n = e.sent,
                                                0 == n.code && (a = n.data || {}, r = a.qrCodeUrl, r && this.setState({
                                                    qrCodeUrl: r
                                                }));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return e
                            }()
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.siteInfo.kuxuanRootPath,
                                    t = this.state.qrCodeUrl;
                                return t ? w.a.createElement("div", {
                                    className: "m-kefu"
                                }, w.a.createElement("div", {
                                    className: "inner"
                                }, w.a.createElement("p", null, "如有疑问请添加客服微信"), w.a.createElement("div", {
                                    className: "qrcode-wrap"
                                }, w.a.createElement("img", {
                                    src: t
                                }), w.a.createElement("p", null, "长按扫一扫添加")))) : w.a.createElement("div", {
                                    className: "m-kefu-qy"
                                }, w.a.createElement("a", {
                                    className: "qiyu",
                                    href: e + "/route/kefu.do",
                                    "data-log": i()({
                                        dot: "d-18"
                                    })
                                }, "充值遇到问题？联系客服"))
                            }
                        }]),
                    t
            }(k.Component), a.defaultProps = {
                siteInfo: {
                    siteId: "",
                    kuxuanRootPath: ""
                }
            }, r)
    },
    O27J: function (e, t, n) {
        e.exports = n("+qWx")(76)
    },
    O57f: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var a = {
            padLeft: function (e, t) {
                var n = ("" + e).length;
                return Array(t > n ? t - n + 1 || 0 : 0).join(0) + e
            }
        }
    },
    ON3X: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return A
        });
        var a, r, o = n("woOf"),
            i = n.n(o),
            s = n("Dd8w"),
            c = n.n(s),
            l = n("+6Bu"),
            u = n.n(l),
            d = n("Zx67"),
            h = n.n(d),
            f = n("Zrlr"),
            m = n.n(f),
            p = n("wxAW"),
            g = n.n(p),
            v = n("zwoO"),
            y = n.n(v),
            b = n("Pf15"),
            E = n.n(b),
            k = n("U7vG"),
            w = n.n(k),
            x = n("D/cR"),
            I = n("tBL+"),
            P = n("HJfm"),
            N = n("EtYT"),
            C = n("P2xs"),
            _ = n("d957"),
            O = n("mJul"),
            T = n("B3R2"),
            A = (n.n(T), r = a = function (e) {
                function t(e) {
                    m()(this, t);
                    var n = y()(this, (t.__proto__ || h()(t)).call(this, e));
                    return n.state = {
                        action: "",
                        qrCodeUrl: "",
                        messageConfig: {},
                        rechargeParams: {},
                        consumeVm: 0
                    },
                        n.inVipActivity = !1,
                        n.siteInfo = e.siteInfo,
                        n.rechargeTypeMap = {},
                        n.rechargeTypeMap[P.f.WX_JSAPI] = {
                            value: 6,
                            method: "jsapiWxPay"
                        },
                        n.rechargeTypeMap[P.f.WX_NATIVE] = {
                            value: 5,
                            method: "nativeWxPay"
                        },
                        n.interval = "",
                        n.loggerData = {
                            dot: "",
                            message: {}
                        },
                        n.fromPage = "",
                        n.confirmConsume = n.confirmConsume.bind(n),
                        n.closeAllModal = n.closeAllModal.bind(n),
                        n.closeQrCodeModal = n.closeQrCodeModal.bind(n),
                        n
                }
                return E()(t, e),
                    g()(t, [{
                        key: "closeAllModal",
                        value: function () {
                            this.setState({
                                action: "",
                                qrCodeUrl: ""
                            })
                        }
                    },
                        {
                            key: "closeQrCodeModal",
                            value: function () {
                                this.closeAllModal(),
                                    clearInterval(this.interval)
                            }
                        },
                        {
                            key: "composeParams",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = this.siteInfo,
                                    n = (t.env, t.kuxuanRootPath, t.site, u()(t, ["env", "kuxuanRootPath", "site"]));
                                return c()({}, n, e)
                            }
                        },
                        {
                            key: "successCallback",
                            value: function (e) {
                                var t = this,
                                    n = e.hbExpireDays,
                                    a = e.vipExpireTime,
                                    r = e.couponNum,
                                    o = e.amount,
                                    i = e.hongbao,
                                    s = e.discount,
                                    c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                3 == this.siteInfo.type && Object(I.b)({
                                    dot: "d-16",
                                    message: {
                                        value: o
                                    }
                                }, this.siteInfo);
                                var l = function () {
                                        if (t.props.targetUrl) {
                                            var e = decodeURIComponent(t.props.targetUrl);
                                            window.location.href = e
                                        } else location.href.indexOf("/recharge") > -1 ? location.reload() : location.href = "/recharge/pay.do?" + location.href.split("?")[1]
                                    },
                                    u = "";
                                a ? u = "<p>您已成功升级为" + (decodeURIComponent(this.siteInfo.site) || "本站点") + 'VIP用户，开始无限免费畅读吧!</p><p class="text-s">VIP到期时间：' + N.a.format(1 * a) + "</p>" : (u = '<p class="text f-cb"><span class="yd">恭喜你获得' + 100 * o + '阅点</span><span class="expire">有效期永久</span></p>', s && (u += '<p class="text f-cb"><span class="plus">+</span></p><p class="text f-cb"><span class="yd">' + 100 * s + '红包</span><span class="expire">有效期永久</span></p>'), i && n && (u += '<p class="text f-cb"><span class="plus">+</span></p><p class="text f-cb"><span class="yd">' + i + '红包</span><span class="expire">有效期' + n + "天</span></p>"), r && (u += '<p class="text text-tip">*礼包：赠送' + r + "张满减券。可在“个人中心-我的优惠券”中查看</p>")),
                                    this.setState({
                                        action: "showResult",
                                        qrCodeUrl: "",
                                        messageConfig: {
                                            title: c ? "VIP购买成功" : "充值成功",
                                            content: "" + u,
                                            onClose: l
                                        }
                                    })
                            }
                        },
                        {
                            key: "failCallback",
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    n = "充值失败",
                                    a = "因网络异常等原因导致充值失败，请稍后重试！",
                                    r = "知道了",
                                    o = function () {
                                        e.closeAllModal()
                                    };
                                t && (n = "VIP订购失败", this.inVipActivity ? (a = "由于VIP生效之前您消费了阅点，导致现有阅点余额不足订购VIP，麻烦您重新充值补足阅点哦~", o = function () {
                                    Object(I.b)({
                                        dot: "d-14"
                                    }, e.siteInfo),
                                        setTimeout(function () {
                                            location.href = e.siteInfo.kuxuanRootPath + "/pay.do"
                                        }, 200)
                                }, r = "前往补足余额") : a = "由于VIP生效之前您消费了阅点，导致现有阅点余额不足订购VIP，请您联系公众号客服处理。"),
                                    this.setState({
                                        action: "showResult",
                                        qrCodeUrl: "",
                                        messageConfig: {
                                            title: n,
                                            content: "<p>" + a + "</p>",
                                            buttonName: r,
                                            onClose: o
                                        }
                                    })
                            }
                        },
                        {
                            key: "retriveStatus",
                            value: function (e, t) {
                                var n = this,
                                    a = 0;
                                this.interval = setInterval(function () {
                                    a ? clearInterval(n.interval) : Object(x.a)("/recharge/queryOrder.json", n.composeParams({
                                        rechargeUuid: e
                                    })).then(function (e) {
                                        if (200 === e.code) {
                                            if (e.tradeStatus) if (a = 1, clearInterval(n.interval), e.postResult.success) {
                                                var r = e.postResult,
                                                    o = r.hongbao,
                                                    i = r.vip,
                                                    s = r.couponNum,
                                                    c = t.amount,
                                                    l = t.discount;
                                                n.successCallback({
                                                    hbExpireDays: o && o.expireDays,
                                                    vipExpireTime: i && i.expireTime,
                                                    couponNum: s,
                                                    amount: c,
                                                    discount: l,
                                                    hongbao: t.hongbao
                                                })
                                            } else n.failCallback()
                                        } else if (-999 === e.code) if ("reader" === n.fromPage && n.props.targetUrl) {
                                            var u = decodeURIComponent(n.props.targetUrl);
                                            window.location.href = u
                                        } else location.reload();
                                        else a = 1,
                                                clearInterval(n.interval),
                                                n.failCallback()
                                    })
                                }, 500)
                            }
                        },
                        {
                            key: "onBridgeReady",
                            value: function (e, t) {
                                var n = this;
                                WeixinJSBridge.invoke("getBrandWCPayRequest", {
                                    debug: !1,
                                    appId: e.appId,
                                    timeStamp: e.timeStamp,
                                    nonceStr: e.nonceStr,
                                    package: e.package,
                                    signType: e.signType,
                                    paySign: e.paySign
                                }, function (a) {
                                    "get_brand_wcpay_request:ok" == a.err_msg ? n.retriveStatus(e.rechargeUuid, t) : "get_brand_wcpay_request:cancel" == a.err_msg ? Object(O.a)({
                                        text: "支付取消！"
                                    }) : n.nativeWxPay(t)
                                })
                            }
                        },
                        {
                            key: "jsapiWxPay",
                            value: function (e) {
                                var t = this;
                                Object(x.d)("/recharge/confirm.json", e).then(function (n) {
                                    if (200 === n.code) {
                                        var a = n.data.rechargeUuid;
                                        t.loggerData.message.type = P.f.WX_JSAPI,
                                            t.loggerData.message.rechargeUuid = a,
                                            Object(I.b)(t.loggerData, t.siteInfo),
                                            "undefined" == typeof WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", function () {
                                                t.onBridgeReady(n.data, e)
                                            }) : t.onBridgeReady(n.data, e)
                                    } else - 999 === n.code ? location.reload() : t.failCallback()
                                })
                            }
                        },
                        {
                            key: "nativeWxPay",
                            value: function (e) {
                                var t = this,
                                    n = i()({}, e, {
                                        type: this.rechargeTypeMap[P.f.WX_NATIVE].value
                                    });
                                Object(x.d)("/recharge/confirm.json",n).then(function (n) {
                                    if (200 === n.code) {
                                        var a = n.data,
                                            r = a.rechargeUuid,
                                            o = a.qr_url;
                                        t.loggerData.message.type = P.f.WX_NATIVE,
                                            t.loggerData.message.rechargeUuid = r,
                                            Object(I.b)(t.loggerData, t.siteInfo),
                                            t.setState({
                                                action: "showCode",
                                                qrCodeUrl: o
                                            }),
                                            t.retriveStatus(r, e)
                                    } else - 999 === n.code ? location.reload() : t.failCallback()
                                })
                            }
                        },
                        {
                            key: "confirmConsume",
                            value: function () {
                                var e = this,
                                    t = this.state.rechargeParams;
                                Object(x.d)("/recharge/consume.json", this.composeParams(t)).then(function (n) {
                                    200 === n.code ? e.successCallback({
                                        vipExpireTime: n.expireTime,
                                        amount: t.amount
                                    }, !0) : -999 === n.code ? location.reload() : e.failCallback()
                                })
                            }
                        },
                        {
                            key: "handleRecharge",
                            value: function (e, t) {
                                var n = this,
                                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    r = e.price,
                                    o = e.needPay,
                                    s = e.configId,
                                    c = e.productAmount,
                                    l = e.couponId,
                                    u = e.discount,
                                    d = e.hongbao,
                                    h = e.fromPage,
                                    f = e.referrer;
                                this.fromPage = e.fromPage,
                                    this.loggerData = {
                                        dot: "d-17",
                                        message: {
                                            isVip: 1 == e.productType,
                                            rechargeUuid: "",
                                            couponId: l,
                                            price: r,
                                            needPay: o,
                                            productAmount: c,
                                            fromPage: h,
                                            referrer: f
                                        }
                                    };
                                var m = this.rechargeTypeMap[t],
                                    p = m.value,
                                    g = m.method,
                                    v = i()({}, this.state.rechargeParams, {
                                        type: p,
                                        amount: o,
                                        configId: s,
                                        couponId: l && "null" != l ? l : "",
                                        discount: u && "null" != u ? u : 0,
                                        hongbao: d || 0,
                                        index: a
                                    });
                                this.setState({
                                    rechargeParams: v
                                }, function () {
                                    e.productType && 1 === e.productType && 0 === e.needPay ? n.setState({
                                        action: "confirmConsume",
                                        consumeVm: e.vm || 0
                                    }) : n[g](v)
                                })
                            }
                        },
                        {
                            key: "getMessage",
                            value: function () {
                                var e = this;
                                localStorage.getItem("N_recharge_viptip") || Object(x.d)("/getMessage.json", this.composeParams()).then(function (t) {
                                    200 === t.code && (t.messages || []).map(function (t) {
                                        0 == t.code && (e.failCallback(!0), localStorage.setItem("N_recharge_viptip", !0))
                                    })
                                })
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.getMessage()
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.state,
                                    t = e.action,
                                    n = e.qrCodeUrl,
                                    a = e.messageConfig,
                                    r = e.consumeVm;
                                return w.a.createElement("div", null, "showCode" == t && w.a.createElement("div", {
                                    className: "m-mask",
                                    onClick: this.closeQrCodeModal
                                }, w.a.createElement("div", {
                                    className: "m-qr-pay"
                                }, w.a.createElement("h4", null, "请让他人扫码支付"), w.a.createElement("div", {
                                    className: "inner"
                                }, w.a.createElement("img", {
                                    src: n
                                })), w.a.createElement("p", {
                                    className: "tip"
                                }, "暂不支持长按二维码支付方式"), w.a.createElement("p", {
                                    className: "PS"
                                }, "注:充值到您的账户，扣款发生在扫码人账户"))), "confirmConsume" == t && w.a.createElement(C.a, {
                                    message: "确认消耗" + r + "阅点购买VIP？",
                                    onOk: this.confirmConsume,
                                    onCancel: this.closeAllModal
                                }), "showResult" == t && w.a.createElement(_.a, {
                                    config: a
                                }))
                            }
                        }]),
                    t
            }(k.Component), a.defaultProps = {
                targetUrl: "",
                siteInfo: {}
            }, r);
        A.defaultProps = {
            targetUrl: "",
            siteInfo: {}
        }
    },
    P2xs: function (e, t, n) {
        "use strict";
        var a = n("Zx67"),
            r = n.n(a),
            o = n("Zrlr"),
            i = n.n(o),
            s = n("wxAW"),
            c = n.n(s),
            l = n("zwoO"),
            u = n.n(l),
            d = n("Pf15"),
            h = n.n(d),
            f = n("U7vG"),
            m = n.n(f),
            p = n("QRgp"),
            g = (n.n(p), n("srcB")),
            v = (n.n(g), function (e) {
                function t() {
                    i()(this, t);
                    var e = u()(this, (t.__proto__ || r()(t)).call(this));
                    return e.handleCancel = e.handleCancel.bind(e),
                        e.handleOk = e.handleOk.bind(e),
                        e
                }
                return h()(t, e),
                    c()(t, [{
                        key: "handleCancel",
                        value: function () {
                            this.props.onCancel && this.props.onCancel()
                        }
                    },
                        {
                            key: "handleOk",
                            value: function () {
                                this.props.onOk && this.props.onOk()
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.message;
                                return m.a.createElement("div", {
                                    className: "m-modal-container"
                                }, m.a.createElement("div", {
                                    className: "m-mask"
                                }), m.a.createElement("div", {
                                    className: "m-confirmModal"
                                }, m.a.createElement("div", {
                                    className: "content"
                                }, m.a.createElement("p", {
                                    className: "tip"
                                }, e)), m.a.createElement("div", {
                                    className: "action"
                                }, m.a.createElement("a", {
                                    className: "btn btn-cancel",
                                    href: "javascript:;",
                                    onClick: this.handleCancel
                                }, "取消"), m.a.createElement("a", {
                                    className: "btn btn-ok",
                                    href: "javascript:;",
                                    onClick: this.handleOk
                                }, "确定"))))
                            }
                        }]),
                    t
            }(f.Component));
        t.a = v
    },
    U7vG: function (e, t, n) {
        e.exports = n("+qWx")(77)
    },
    VZEA: function (e, t) {},
    d957: function (e, t, n) {
        "use strict";
        var a = n("Zx67"),
            r = n.n(a),
            o = n("Zrlr"),
            i = n.n(o),
            s = n("wxAW"),
            c = n.n(s),
            l = n("zwoO"),
            u = n.n(l),
            d = n("Pf15"),
            h = n.n(d),
            f = n("U7vG"),
            m = n.n(f),
            p = n("QRgp"),
            g = (n.n(p), n("TVG+")),
            v = (n.n(g), function (e) {
                function t() {
                    i()(this, t);
                    var e = u()(this, (t.__proto__ || r()(t)).call(this));
                    return e.state = {
                        show: !0
                    },
                        e.hideModal = e.hideModal.bind(e),
                        e.handleClose = e.handleClose.bind(e),
                        e
                }
                return h()(t, e),
                    c()(t, [{
                        key: "handleClose",
                        value: function () {
                            this.setState({
                                show: !1
                            }),
                            this.props.config.onClose && this.props.config.onClose()
                        }
                    },
                        {
                            key: "hideModal",
                            value: function () {
                                this.setState({
                                    show: !1
                                })
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.config,
                                    t = e.title,
                                    n = e.content,
                                    a = e.buttonName,
                                    r = this.state.show;
                                return m.a.createElement("div", {
                                    className: "m-modal-container",
                                    style: r ? {} : {
                                        display: "none"
                                    }
                                }, m.a.createElement("div", {
                                    className: "m-mask",
                                    onClick: this.hideModal
                                }), m.a.createElement("div", {
                                    className: "m-resultModal"
                                }, m.a.createElement("div", {
                                    className: "title"
                                }, m.a.createElement("h2", null, t)), m.a.createElement("div", {
                                    className: "content",
                                    dangerouslySetInnerHTML: {
                                        __html: n
                                    }
                                }), m.a.createElement("div", {
                                    className: "action"
                                }, m.a.createElement("a", {
                                    className: "btn btn-close",
                                    href: "javascript:;",
                                    onClick: this.handleClose
                                }, a || "知道了"))))
                            }
                        }]),
                    t
            }(f.Component));
        t.a = v
    },
    fkai: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("U7vG"),
            r = n.n(a),
            o = n("O27J"),
            i = n("Dd8w"),
            s = n.n(i),
            c = n("+6Bu"),
            l = n.n(c),
            u = n("Zx67"),
            d = n.n(u),
            h = n("Zrlr"),
            f = n.n(h),
            m = n("wxAW"),
            p = n.n(m),
            g = n("zwoO"),
            v = n.n(g),
            y = n("Pf15"),
            b = n.n(y),
            E = n("D/cR"),
            k = n("tBL+"),
            w = n("vPHJ"),
            x = n("HJfm"),
            I = n("rqSN"),
            P = n("qA9+"),
            N = n("5AEV"),
            C = n("Nbci"),
            _ = n("L+eB"),
            O = (n("CVS8"), function (e) {
                function t() {
                    f()(this, t);
                    var e = v()(this, (t.__proto__ || d()(t)).call(this)),
                        n = Object(w.h)(),
                        a = (n.targetUrl, n.shareUrl),
                        r = l()(n, ["targetUrl", "shareUrl"]);
                    e.siteInfo = r,
                        e.targetUrl = n.targetUrl,
                        e.originUrl = decodeURIComponent(a),
                        e.kuxuanRootPath = Object(w.e)(e.originUrl),
                        sessionStorage.setItem("N_recharge_rootPath", e.kuxuanRootPath),
                        e.shareUrl = location.origin + "/share/redirect.do?targetUrl=" + a,
                        e.state = {
                            vmBalance: 0,
                            hongbaoBalance: 0,
                            rechargeProductMap: void 0,
                            vipExpireTime: -1
                        };
                    var o = Date.now();
                    return e.inActivity = o > I.a.START_TIME && o <= I.a.END_TIME,
                        e.configWxShare(),
                        e.jumpToQrcodePage = e.jumpToQrcodePage.bind(e),
                        e
                }
                return b()(t, e),
                    p()(t, [{
                        key: "unloadHandler",
                        value: function () {
                            var e = this;
                            window.onunload = function () {
                                var t = "http://localhost",
                                    n = new XMLHttpRequest;
                                n.open("get", t + "/statistics/log/cors/logUpload.json?" + Object(E.c)(s()({
                                    dot: "d-5"
                                }, e.siteInfo)), !1),
                                    n.send(null)
                            }
                        }
                    },
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this;
                                this.fetchRechargeList(),
                                    this.unloadHandler(),
                                    Object(k.b)({
                                        dot: "d-4"
                                    }, this.siteInfo),
                                    setTimeout(function () {
                                        location.replace(e.originUrl)
                                    }, 29e4)
                            }
                        },
                        {
                            key: "configWxShare",
                            value: function () {
                                Object(_.a)({
                                    shareData: {
                                        title: "充值",
                                        link: this.shareUrl,
                                        desc: this.shareUrl
                                    },
                                    reqParams: {
                                        siteId: this.siteInfo.siteId
                                    }
                                })
                            }
                        },
                        {
                            key: "composeParams",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return s()({}, this.siteInfo, e)
                            }
                        },
                        {
                            key: "fetchRechargeList",
                            value: function () {
                                var e = this;
                                Object(E.a)("/recharge/list.json", this.composeParams()).then(function (t) {
                                    if (200 === t.code) {
                                        var n = t.data,
                                            a = n.site,
                                            r = l()(n, ["site"]);
                                        e.siteInfo.site = a,
                                            e.setState(s()({}, r))
                                    }
                                })
                            }
                        },
                        {
                            key: "jumpToQrcodePage",
                            value: function () {
                                Object(k.b)({
                                    dot: "d-13"
                                }, this.siteInfo),
                                    setTimeout(function () {
                                        location.href = "/recharge/qrCodeRecharge.do?" + location.href.split("?")[1]
                                    }, 200)
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.state,
                                    t = e.vmBalance,
                                    n = e.hongbaoBalance,
                                    a = e.vipExpireTime,
                                    o = e.rechargeProductMap,
                                    i = this.targetUrl,
                                    c = this.siteInfo,
                                    l = this.kuxuanRootPath,
                                    u = a > -1,
                                    d = this.inActivity ? "g-wrap g-wrap-activity" : "g-wrap";
                                return r.a.createElement("div", {
                                    className: d,
                                    id: "rechargeApp"
                                }, r.a.createElement("div", {
                                    className: "m-account"
                                }, u && r.a.createElement("span", {
                                    className: "icon-vip"
                                }), r.a.createElement("p", {
                                    className: "balance"
                                }, r.a.createElement("em", {
                                    className: u ? "yd yd-s" : "yd"
                                }, u && "+", t), "阅点", n ? r.a.createElement("span", null, r.a.createElement("em", {
                                    className: u ? "yd-s" : ""
                                }, "+", n), "红包") : ""), r.a.createElement("p", null, r.a.createElement("a", {
                                    href: l + "/balance/homePage.do"
                                }, "查看余额详情", r.a.createElement("span", {
                                    className: "icon-arrow"
                                })))), r.a.createElement("div", {
                                    className: "m-tip"
                                }, r.a.createElement("p", null, r.a.createElement("b", {
                                    className: "icon-info"
                                }), r.a.createElement("span", null, "充值赠送的红包有效期为5天，过期自动失效；消费时优先扣除距离过期时间最近的红包。", r.a.createElement("br", null), "购买VIP会员时，会优先抵扣当前阅点余额，现显示的VIP价格为已扣除当前余额后的价格。"))), r.a.createElement(N.a, {
                                    config: {
                                        loc: "recharge",
                                        dot: {
                                            show: "d-11",
                                            click: "d-12"
                                        },
                                        cors: !0,
                                        siteInfo: s()({}, c, {
                                            kuxuanRootPath: l
                                        })
                                    }
                                }), o && r.a.createElement(P.a, {
                                    rechargeItems: [{
                                        type: x.f.WX_JSAPI
                                    }],
                                    rechargeProductMap: o,
                                    targetUrl: i,
                                    siteInfo: s()({}, c, {
                                        kuxuanRootPath: l
                                    }),
                                    vmBalance: t,
                                    hongbaoBalance: n
                                }), r.a.createElement("p", {
                                    className: "m-tip-text"
                                }, "*虚拟商品购买不可退换"), r.a.createElement("div", {
                                    className: "m-optional"
                                }, r.a.createElement("p", null, "微信账户余额不足?"), r.a.createElement("a", {
                                    href: "javascript:;",
                                    onClick: this.jumpToQrcodePage
                                }
                                // , r.a.createElement("span", null, "他人代充"), r.a.createElement("span", {
                                //     className: "icon-arrow"
                                // })
                                )), r.a.createElement(C.a, {
                                    siteInfo: {
                                        siteId: c.siteId,
                                        kuxuanRootPath: l
                                    }
                                }))
                            }
                        }]),
                    t
            }(a.Component));
        n("8nng"),
            n("NHKQ"),
            n("1lB/");
        Object(o.render)(r.a.createElement(O, null), document.getElementById("root"))
    },
    mJul: function (e, t, n) {
        "use strict";

        function a(e) {
            if (e = o()({}, w, e), !k) {
                var t = document.createElement("div");
                e.parent.appendChild(t),
                    k = Object(y.render)(v.a.createElement(E, null), t)
            }
            k.toast({
                text: e.text,
                delay: e.delay
            })
        }
        t.a = a;
        var r = n("woOf"),
            o = n.n(r),
            i = n("Zx67"),
            s = n.n(i),
            c = n("Zrlr"),
            l = n.n(c),
            u = n("wxAW"),
            d = n.n(u),
            h = n("zwoO"),
            f = n.n(h),
            m = n("Pf15"),
            p = n.n(m),
            g = n("U7vG"),
            v = n.n(g),
            y = n("O27J"),
            b = (n.n(y), n("0pWH")),
            E = (n.n(b), function (e) {
                function t() {
                    l()(this, t);
                    var e = f()(this, (t.__proto__ || s()(t)).call(this));
                    return e.state = {
                        text: "",
                        isShow: !1
                    },
                        e
                }
                return p()(t, e),
                    d()(t, [{
                        key: "toast",
                        value: function (e) {
                            var t = this,
                                n = e.text,
                                a = e.delay,
                                r = void 0 === a ? 2e3 : a;
                            this.setState({
                                text: n,
                                isShow: !0
                            }),
                                this._handle = window.setTimeout(function () {
                                    t.setState({
                                        isShow: !1
                                    })
                                }, r)
                        }
                    },
                        {
                            key: "render",
                            value: function () {
                                return v.a.createElement("div", {
                                    className: "m-toast aBouncein",
                                    style: {
                                        display: this.state.isShow ? "block" : "none"
                                    }
                                }, v.a.createElement("div", {
                                    className: "inner"
                                }, v.a.createElement("div", {
                                    className: "main"
                                }, this.state.text)))
                            }
                        }]),
                    t
            }(g.Component)),
            k = null,
            w = {
                delay: 2e3,
                parent: document.body
            }
    },
    "q/sX": function (e, t) {},
    "qA9+": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return x
        });
        var a, r, o = n("Zx67"),
            i = n.n(o),
            s = n("Zrlr"),
            c = n.n(s),
            l = n("wxAW"),
            u = n.n(l),
            d = n("zwoO"),
            h = n.n(d),
            f = n("yEsh"),
            m = n.n(f),
            p = n("Pf15"),
            g = n.n(p),
            v = n("U7vG"),
            y = n.n(v),
            b = n("tBL+"),
            E = (n("HJfm"), n("EtYT")),
            k = n("ON3X"),
            w = n("q/sX"),
            x = (n.n(w), r = a = function (e) {
                function t(e) {
                    c()(this, t);
                    var n = h()(this, (t.__proto__ || i()(t)).call(this, e));
                    return n.rechargeAmount = 1 * e.siteInfo.rechargeAmount || 0,
                        n
                }
                return g()(t, e),
                    u()(t, [{
                        key: "handleRecharge",
                        value: function (e, n, a) {
                            e.fromPage = "recharge",
                                e.referrer = this.rechargeAmount ? "couponTip" : "",
                                m()(t.prototype.__proto__ || i()(t.prototype), "handleRecharge", this).call(this, e, n, a),
                                Object(b.b)({
                                    dot: "d1-1",
                                    message: {
                                        type: n
                                    }
                                }, this.siteInfo)
                        }
                    },
                        {
                            key: "getHotItemIndex",
                            value: function (e) {
                                for (var t = -1, n = -1, a = -1, r = e.length - 1; r >= 0; r--) 1 === e[r].productType ? n = r : 19 == e[r].price ? t = r : a = r;
                                return t > -1 ? t : n > -1 ? n : a
                            }
                        },
                        {
                            key: "renderRechargesTypes",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.rechargeProductMap,
                                    a = t.rechargeItems,
                                    r = t.vmBalance,
                                    o = (t.hongbaoBalance, n || []),
                                    i = this.getHotItemIndex(o),
                                    s = 0,
                                    c = !1;
                                return a.map(function (t, n) {
                                    return y.a.createElement("div", {
                                        key: t.type,
                                        className: "m-recharge-item"
                                    }, y.a.createElement("h4", null, y.a.createElement("b", null), "请选择充值金额", y.a.createElement("em", null, "(100阅点/红包=1元)")), y.a.createElement("ul", {
                                        className: "f-cb"
                                    }, o.map(function (n, a, o) {
                                        var l = a % 2 == 0 ? "item f-fl" : "item f-fr",
                                            u = !1;
                                        return n.expiring && n.discount > s && (s = n.discount, u = !0),
                                            u && !c && e.rechargeAmount && n.price >= e.rechargeAmount ? (c = !0, l += " item-hot") : i == a && (l += " item-hot"),
                                            1 == n.defaultActivity ? l += " item-activity" : 1 === n.productType && (l += " item-vip"),
                                            1 === n.productType ? (e.inVipActivity = !0, n.needPay = (n.vm - Math.min(r, n.vm)) / 100..toFixed(2) * 1) : n.needPay = Math.max(n.price - (n.discount || 0), 0),
                                            y.a.createElement("li", {
                                                key: t.type + a,
                                                className: l
                                            }, y.a.createElement("a", {
                                                href: "javascript:;",
                                                onClick: e.handleRecharge.bind(e, n, t.type, a)
                                            }, u && y.a.createElement("span", {
                                                className: "banner"
                                            }, "-", n.discount, " 优惠券今日过期"), 1 === n.productType ? [y.a.createElement("p", {
                                                className: "title"
                                            }, "全站15万本书免费读"), y.a.createElement("p", {
                                                className: "yd"
                                            }, "包", E.a.formatMonth(n.productAmount), n.hongbao > 0 && "得" + E.a.formatMonth(n.productAmount + n.hongbao), "VIP会员")] : 1 === n.hongbaoType ? [y.a.createElement("p", {
                                                className: "title"
                                            }, "得", n.vm, "阅点"), y.a.createElement("p", {
                                                className: "yd"
                                            }, n.vm, "阅点", 0 !== n.hongbao && y.a.createElement("em", null, " +", E.a.formatMonth(n.hongbao), "VIP"))] : [y.a.createElement("p", {
                                                className: "title"
                                            }, "得", n.vm + n.hongbao, "阅点"), y.a.createElement("p", {
                                                className: "yd"
                                            }, n.vm, "阅点", 0 !== n.hongbao && y.a.createElement("em", null, " +", y.a.createElement("b", {
                                                className: "icon-hongbao"
                                            }), n.hongbao, "红包"))], y.a.createElement("p", {
                                                className: "money"
                                            }, n.discount ? y.a.createElement("span", null, y.a.createElement("span", {
                                                className: "red"
                                            }, "¥", n.needPay), y.a.createElement("span", {
                                                className: "origin"
                                            }, "¥", n.price)) : y.a.createElement("span", null, "¥", n.needPay)), !u && n.iconUrl && y.a.createElement("b", {
                                                className: "icon-hot"
                                            }, y.a.createElement("img", {
                                                src: n.iconUrl
                                            }))))
                                    })))
                                })
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                return y.a.createElement("div", null, y.a.createElement("div", {
                                    className: "m-recharge-list"
                                }, this.renderRechargesTypes()), m()(t.prototype.__proto__ || i()(t.prototype), "render", this).call(this))
                            }
                        }]),
                    t
            }(k.a), a.defaultProps = {
                targetUrl: "",
                siteInfo: {},
                rechargeProductMap: {}
            }, r)
    },
    rqSN: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var a = {
            START_TIME: new Date(2018, 8, 29, 0, 0, 0).getTime(),
            END_TIME: new Date(2018, 9, 7, 23, 59, 59).getTime()
        }
    },
    "tBL+": function (e, t, n) {
        "use strict";

        function a(e, t) {
            var n = e.dot,
                a = e.message,
                r = {
                    dot: n
                };
            a && (r.message = u()(a)),
                Object(d.a)("/statistics/log/upload.json", r).then(function (e) {
                    t && t()
                })
        }
        function r(e) {
            var t = e.dot,
                n = e.message,
                a = {
                    dot: t
                };
            n && (a.message = u()(n));
            var r = new XMLHttpRequest;
            r.open("get", "/statistics/log/upload.json?" + Object(d.c)(a), !1),
                r.send(null)
        }
        function o(e, t, n) {
            var a = e.dot,
                r = e.message,
                o = c()({
                    dot: a
                }, t);
            r && (o.message = u()(r));
            var i = "http://localhost";
            Object(d.b)(i + "/statistics/log/cors/logUpload.json", o).then(function (e) {
                n && n()
            })
        }
        function i(e, t, n) {
            var a = e.dot,
                r = e.message,
                o = c()({
                    dot: a
                }, t);
            r && (o.message = u()(r)),
                Object(d.b)("/statistics/log/cors/logUpload.json", o).then(function (e) {
                    n && n()
                })
        }
        n.d(t, "a", function () {
            return a
        }),
            n.d(t, "d", function () {
                return r
            }),
            n.d(t, "b", function () {
                return o
            }),
            n.d(t, "c", function () {
                return i
            });
        var s = n("Dd8w"),
            c = n.n(s),
            l = n("mvHQ"),
            u = n.n(l),
            d = n("D/cR"),
            h = n("vPHJ")
    },
    vPHJ: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return r
        }),
            n.d(t, "h", function () {
                return o
            }),
            n.d(t, "a", function () {
                return i
            }),
            n.d(t, "f", function () {
                return c
            }),
            n.d(t, "e", function () {
                return l
            }),
            n.d(t, "i", function () {
                return u
            }),
            n.d(t, "g", function () {
                return d
            }),
            n.d(t, "d", function () {
                return h
            }),
            n.d(t, "c", function () {
                return f
            });
        var a = n("HJfm"),
            r = function (e) {
                return e && e.replace(/[\n\r]+/g, " ").replace(/\t/g, " ").replace(/\<p\>/gi, "").replace(/\<\/p\>/gi, "")
            },
            o = function () {
                var e = window.location.search,
                    t = new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                    n = {};
                return e && e.replace(t, function (e, t, a, r) {
                    n[t] = r
                }),
                    n
            };
        Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
            var n = this.length >>> 0;
            if ((t |= 0) < 0) t = Math.max(n - t, 0);
            else if (t >= n) return -1;
            if (void 0 === e) {
                do {
                    if (t in this && void 0 === this[t]) return t
                } while (++t !== n)
            } else do {
                if (this[t] === e) return t
            } while (++t !== n);
            return -1
        });
        var i = function (e) {
                document.title = e;
                var t = document.createElement("iframe");
                t.style.display = "none";
                var n = function e() {
                    setTimeout(function () {
                        t.removeEventListener("load", e),
                            setTimeout(function () {
                                document.body.removeChild(t)
                            }, 0)
                    }, 0)
                };
                t.addEventListener("load", n),
                    document.body.appendChild(t)
            },
            s = window.navigator.userAgent.toLowerCase(),
            c = /ipad|iphone|ipod/.test(s) && !window.MSStream,
            l = function (e) {
                var t = e.split("/");
                return e.indexOf("://") > -1 ? t[0] + "//" + t[2] : t[0]
            },
            u = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return t ? (n += t.offsetTop, e(t.offsetParent, n)) : n
            },
            d = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                    n = +new Date,
                    a = window.pageYOffset,
                    r = e - a,
                    o = requestAnimationFrame(function e() {
                        var i = t - Math.max(0, n + t - +new Date);
                        window.scrollTo(0, i * r / t + a),
                            o = requestAnimationFrame(e),
                        i == t && cancelAnimationFrame(o)
                    })
            },
            h = function () {
                return location.host.indexOf("yuedu.163.com") > -1 ? a.d.TEST : location.host.indexOf("//pre.") > -1 ? a.d.PRE : a.d.ONLINE
            },
            f = function () {
                var e = "",
                    t = /^(pay|prepay).([^.]*).([^.]*)/,
                    n = /^prepay.([^.]*).([^.]*)/,
                    a = /^([^.]*)/;
                return t.test(location.host) ? (e = location.host.replace(a, "www"), n.test(location.host) && (e = location.host.replace(a, "pre"))) : (e = location.host.replace(a, "pay"), location.host.indexOf("//pre.") > -1 && (e = location.host.replace(a, "prepay"))),
                location.protocol + "//" + e
            }
    },
    vqET: function (e, t) {}
}, ["fkai"]);