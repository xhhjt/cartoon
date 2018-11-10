webpackJsonp(["reader"], {
    "+qWx": function (e, t) {
        e.exports = vendor
    },
    "/1Nu": function (e, t, n) {
        "use strict";

        function o(e) {
            return e ? {
                pageX: e.pageX,
                pageY: e.pageY,
                clientX: e.clientX,
                clientY: e.clientY
            } : {}
        }
        var r = n("KSGD"),
            a = (n("U7vG"), n("O27J")),
            i = {
                propTypes: {
                    moveThreshold: r.number,
                    activeDelay: r.number,
                    pressDelay: r.number,
                    pressMoveThreshold: r.number,
                    preventDefault: r.bool,
                    stopPropagation: r.bool,
                    onTap: r.func,
                    onPress: r.func,
                    onTouchStart: r.func,
                    onTouchMove: r.func,
                    onTouchEnd: r.func,
                    onMouseDown: r.func,
                    onMouseUp: r.func,
                    onMouseMove: r.func,
                    onMouseOut: r.func,
                    onKeyDown: r.func,
                    onKeyUp: r.func
                },
                getDefaultProps: function () {
                    return {
                        activeDelay: 0,
                        moveThreshold: 100,
                        pressDelay: 1e3,
                        pressMoveThreshold: 5
                    }
                },
                getInitialState: function () {
                    return {
                        isActive: !1,
                        touchActive: !1,
                        pinchActive: !1
                    }
                },
                componentDidMount: function () {
                    this.isMounted = !0
                },
                componentWillUnmount: function () {
                    this.isMounted = !1,
                        this.cleanupScrollDetection(),
                        this.cancelPressDetection(),
                        this.clearActiveTimeout()
                },
                processEvent: function (e) {
                    this.props.preventDefault && e.preventDefault(),
                    this.props.stopPropagation && e.stopPropagation()
                },
                onTouchStart: function (e) {
                    this.props.onTouchStart && !1 === this.props.onTouchStart(e) || (this.processEvent(e), window._blockMouseEvents = !0, 1 === e.touches.length ? (this._initialTouch = this._lastTouch = o(e.touches[0]), this.initScrollDetection(), this.initPressDetection(e, this.endTouch), this.initTouchmoveDetection(), this.props.activeDelay > 0 ? this._activeTimeout = setTimeout(this.makeActive, this.props.activeDelay) : this.makeActive()) : this.onPinchStart && (this.props.onPinchStart || this.props.onPinchMove || this.props.onPinchEnd) && 2 === e.touches.length && this.onPinchStart(e))
                },
                makeActive: function () {
                    this.isMounted && (this.clearActiveTimeout(), this.setState({
                        isActive: !0
                    }))
                },
                clearActiveTimeout: function () {
                    clearTimeout(this._activeTimeout),
                        this._activeTimeout = !1
                },
                initScrollDetection: function () {
                    this._scrollPos = {
                        top: 0,
                        left: 0
                    },
                        this._scrollParents = [],
                        this._scrollParentPos = [];
                    for (var e = a.findDOMNode(this); e;)(e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth) && (this._scrollParents.push(e), this._scrollParentPos.push(e.scrollTop + e.scrollLeft), this._scrollPos.top += e.scrollTop, this._scrollPos.left += e.scrollLeft),
                        e = e.parentNode
                },
                initTouchmoveDetection: function () {
                    this._touchmoveTriggeredTimes = 0
                },
                cancelTouchmoveDetection: function () {
                    this._touchmoveDetectionTimeout && (clearTimeout(this._touchmoveDetectionTimeout), this._touchmoveDetectionTimeout = null, this._touchmoveTriggeredTimes = 0)
                },
                calculateMovement: function (e) {
                    return {
                        x: Math.abs(e.clientX - this._initialTouch.clientX),
                        y: Math.abs(e.clientY - this._initialTouch.clientY)
                    }
                },
                detectScroll: function () {
                    for (var e = {
                        top: 0,
                        left: 0
                    }, t = 0; t < this._scrollParents.length; t++) e.top += this._scrollParents[t].scrollTop,
                        e.left += this._scrollParents[t].scrollLeft;
                    return !(e.top === this._scrollPos.top && e.left === this._scrollPos.left)
                },
                cleanupScrollDetection: function () {
                    this._scrollParents = void 0,
                        this._scrollPos = void 0
                },
                initPressDetection: function (e, t) {
                    this.props.onPress && (e.persist(), this._pressTimeout = setTimeout(function () {
                        this.props.onPress(e),
                            t()
                    }.bind(this), this.props.pressDelay))
                },
                cancelPressDetection: function () {
                    clearTimeout(this._pressTimeout)
                },
                onTouchMove: function (e) {
                    if (this._initialTouch) {
                        if (this.processEvent(e), this.detectScroll()) return this.endTouch(e);
                        0 == this._touchmoveTriggeredTimes++ && (this._touchmoveDetectionTimeout = setTimeout(function () {
                            1 === this._touchmoveTriggeredTimes && this.endTouch(e)
                        }.bind(this), 64)),
                        this.props.onTouchMove && this.props.onTouchMove(e),
                            this._lastTouch = o(e.touches[0]);
                        var t = this.calculateMovement(this._lastTouch);
                        (t.x > this.props.pressMoveThreshold || t.y > this.props.pressMoveThreshold) && this.cancelPressDetection(),
                            t.x > this.props.moveThreshold || t.y > this.props.moveThreshold ? this.state.isActive ? this.setState({
                                isActive: !1
                            }) : this._activeTimeout && this.clearActiveTimeout() : this.state.isActive || this._activeTimeout || this.setState({
                                isActive: !0
                            })
                    } else this._initialPinch && 2 === e.touches.length && this.onPinchMove && (this.onPinchMove(e), e.preventDefault())
                },
                onTouchEnd: function (e) {
                    var t = this;
                    if (this._initialTouch) {
                        this.processEvent(e);
                        var n, o = this.calculateMovement(this._lastTouch);
                        o.x <= this.props.moveThreshold && o.y <= this.props.moveThreshold && this.props.onTap && (e.preventDefault(), n = function () {
                            var n = t._scrollParents.map(function (e) {
                                return e.scrollTop + e.scrollLeft
                            });
                            t._scrollParentPos.some(function (e, t) {
                                return e !== n[t]
                            }) || t.props.onTap(e)
                        }),
                            this.endTouch(e, n)
                    } else this.onPinchEnd && this._initialPinch && e.touches.length + e.changedTouches.length === 2 && (this.onPinchEnd(e), e.preventDefault())
                },
                endTouch: function (e, t) {
                    this.cancelTouchmoveDetection(),
                        this.cancelPressDetection(),
                        this.clearActiveTimeout(),
                    e && this.props.onTouchEnd && this.props.onTouchEnd(e),
                        this._initialTouch = null,
                        this._lastTouch = null,
                    t && t(),
                    this.state.isActive && this.setState({
                        isActive: !1
                    })
                },
                onMouseDown: function (e) {
                    if (window._blockMouseEvents) return void(window._blockMouseEvents = !1);
                    this.props.onMouseDown && !1 === this.props.onMouseDown(e) || (this.processEvent(e), this.initPressDetection(e, this.endMouseEvent), this._mouseDown = !0, this.setState({
                        isActive: !0
                    }))
                },
                onMouseMove: function (e) {
                    !window._blockMouseEvents && this._mouseDown && (this.processEvent(e), this.props.onMouseMove && this.props.onMouseMove(e))
                },
                onMouseUp: function (e) {
                    !window._blockMouseEvents && this._mouseDown && (this.processEvent(e), this.props.onMouseUp && this.props.onMouseUp(e), this.props.onTap && this.props.onTap(e), this.endMouseEvent())
                },
                onMouseOut: function (e) {
                    !window._blockMouseEvents && this._mouseDown && (this.processEvent(e), this.props.onMouseOut && this.props.onMouseOut(e), this.endMouseEvent())
                },
                endMouseEvent: function () {
                    this.cancelPressDetection(),
                        this._mouseDown = !1,
                        this.setState({
                            isActive: !1
                        })
                },
                onKeyUp: function (e) {
                    this._keyDown && (this.processEvent(e), this.props.onKeyUp && this.props.onKeyUp(e), this.props.onTap && this.props.onTap(e), this._keyDown = !1, this.cancelPressDetection(), this.setState({
                        isActive: !1
                    }))
                },
                onKeyDown: function (e) {
                    this.props.onKeyDown && !1 === this.props.onKeyDown(e) || 32 !== e.which && 13 !== e.which || this._keyDown || (this.initPressDetection(e, this.endKeyEvent), this.processEvent(e), this._keyDown = !0, this.setState({
                        isActive: !0
                    }))
                },
                endKeyEvent: function () {
                    this.cancelPressDetection(),
                        this._keyDown = !1,
                        this.setState({
                            isActive: !1
                        })
                },
                cancelTap: function () {
                    this.endTouch(),
                        this._mouseDown = !1
                },
                handlers: function () {
                    return {
                        onTouchStart: this.onTouchStart,
                        onTouchMove: this.onTouchMove,
                        onTouchEnd: this.onTouchEnd,
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onMouseMove: this.onMouseMove,
                        onMouseOut: this.onMouseOut,
                        onKeyDown: this.onKeyDown,
                        onKeyUp: this.onKeyUp
                    }
                }
            };
        e.exports = i
    },
    "0tJe": function (e, t, n) {
        "use strict";
        var o = Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            r = n("DT0+"),
            a = n("KSGD"),
            i = n("U7vG"),
            s = n("R+1J");
        e.exports = function (e) {
            return r({
                displayName: "Tappable",
                mixins: e,
                propTypes: {
                    component: a.any,
                    className: a.string,
                    classBase: a.string,
                    classes: a.object,
                    style: a.object,
                    disabled: a.bool
                },
                getDefaultProps: function () {
                    return {
                        component: "span",
                        classBase: "Tappable"
                    }
                },
                render: function () {
                    var e = this.props,
                        t = e.classBase + (this.state.isActive ? "-active" : "-inactive");
                    e.className && (t += " " + e.className),
                    e.classes && (t += " " + (this.state.isActive ? e.classes.active : e.classes.inactive));
                    var n = {};
                    o(n, s, e.style);
                    var r = o({}, e, {
                        style: n,
                        className: t,
                        disabled: e.disabled,
                        handlers: this.handlers
                    }, this.handlers());
                    return delete r.activeDelay,
                        delete r.classBase,
                        delete r.classes,
                        delete r.handlers,
                        delete r.onTap,
                        delete r.onPress,
                        delete r.onPinchStart,
                        delete r.onPinchMove,
                        delete r.onPinchEnd,
                        delete r.moveThreshold,
                        delete r.pressDelay,
                        delete r.pressMoveThreshold,
                        delete r.preventDefault,
                        delete r.stopPropagation,
                        delete r.component,
                        i.createElement(e.component, r, e.children)
                }
            })
        }
    },
    "1h2G": function (e, t) {},
    "36vP": function (e, t) {},
    "6Bzu": function (e, t) {},
    "8nng": function (e, t, n) {
        "use strict";
        var o = n("+6Bu"),
            r = n.n(o),
            a = n("Zrlr"),
            i = n.n(a),
            s = n("wxAW"),
            c = n.n(s),
            u = n("tBL+"),
            l = n("vPHJ"),
            h = function () {
                function e(t) {
                    var n = this;
                    i()(this, e),
                        this._handleDocClick = function (e) {
                            var t = n._getTargetElement(e);
                            if (t) {
                                var o = t.dataset.log;
                                if (o && (n.capture(o), "A" === t.tagName.toUpperCase())) {
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
                            if (location.href.indexOf("pay.kuxuanbook") > -1) {
                                var t = Object(l.h)(),
                                    n = (t.targetUrl, t.shareUrl, r()(t, ["targetUrl", "shareUrl"]));
                                Object(u.b)(JSON.parse(e), n)
                            } else Object(u.a)(JSON.parse(e))
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
        new h
    },
    "AE+s": function (e, t, n) {
        "use strict";

        function o() {
            return /(iphone|ipad|ipad|ios)/i.test(re)
        }
        function r() {
            return /micromessenger/i.test(re) ? re.match(/micromessenger\/([\d\.]+)/i)[1] : ""
        }
        function a(e, t) {
            e = e.split("."),
                t = t.split(".");
            for (var n = e.length, o = t.length, r = 0; r < Math.max(n, o); r++) {
                var a = 0;
                r < n && (a = parseInt(e[r]));
                var i = 0;
                if (r < o && (i = parseInt(t[r])), a != i) return a > i ? 1 : -1
            }
            return 0
        }
        function i(e, t) {
            Te.a.writeText(e).then(function () {
                Object($.a)({
                    text: "复制成功"
                }),
                t && t()
            }).
            catch (function () {
                Object($.a)({
                    text: "复制失败，请手动复制"
                }),
                t && t()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, c, u, l, h, d, p, f, m, v, g, y, b, w = n("U7vG"),
            k = n.n(w),
            E = n("O27J"),
            x = n("F8kA"),
            T = n("Dd8w"),
            P = n.n(T),
            O = n("//Fk"),
            C = n.n(O),
            U = n("woOf"),
            A = n.n(U),
            j = n("+6Bu"),
            N = n.n(j),
            R = n("Zx67"),
            S = n.n(R),
            M = n("Zrlr"),
            _ = n.n(M),
            I = n("wxAW"),
            D = n.n(I),
            L = n("zwoO"),
            B = n.n(L),
            W = n("Pf15"),
            H = n.n(W),
            F = n("D/cR"),
            Y = n("BK/k"),
            G = n("tBL+"),
            q = n("vPHJ"),
            z = n("HJfm"),
            J = n("IvSR"),
            K = n("mvHQ"),
            X = n.n(K),
            Q = function () {
                function e() {
                    _()(this, e);
                    var t = sessionStorage.getItem("N_reader_posHistory");
                    this.posHistory = t ? JSON.parse(t) : {}
                }
                return D()(e, [{
                    key: "pageWillReload",
                    value: function (e) {
                        e && e in this.posHistory && sessionStorage.setItem("N_reader_reloadPos", X()({
                            oldKey: e,
                            pos: this.posHistory[e]
                        }))
                    }
                },
                    {
                        key: "pageDidReload",
                        value: function (e) {
                            var t = sessionStorage.getItem("N_reader_reloadPos");
                            t && (t = JSON.parse(t), e !== t.oldKey && "pos" in t && (sessionStorage.removeItem("N_reader_reloadPos"), setTimeout(function () {
                                window.scrollTo(0, t.pos)
                            }, 10)))
                        }
                    },
                    {
                        key: "onEnter",
                        value: function (e) {
                            var t = this;
                            e && e in this.posHistory && setTimeout(function () {
                                window.scrollTo(0, t.posHistory[e])
                            }, 10)
                        }
                    },
                    {
                        key: "onLeave",
                        value: function (e) {
                            e && "pageYOffset" in window && (this.posHistory[e] = window.pageYOffset, sessionStorage.setItem("N_reader_posHistory", X()(this.posHistory)))
                        }
                    }]),
                    e
            }(),
            Z = new Q,
            V = Z,
            $ = n("mJul"),
            ee = n("YCIw"),
            te = n("GwTv"),
            ne = n("awwb"),
            oe = n.n(ne),
            re = navigator.userAgent,
            ae = (n("pA8T"), function (e) {
                var t = e.onClose,
                    n = o() && a(r(), "6.6.7") >= 0;
                return k.a.createElement("div", {
                    className: n ? "m-guide-operation m-guide-operation-latest" : "m-guide-operation"
                }, k.a.createElement("div", {
                    className: "menu"
                }), k.a.createElement("div", {
                    className: "m-mask",
                    onClick: function () {
                        return t && t()
                    }
                }, k.a.createElement("div", {
                    className: "step-1"
                }), k.a.createElement("div", {
                    className: "step-2"
                })))
            }),
            ie = ae,
            se = (n("6Bzu"), function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this, e));
                    return n.state = {
                        action: ""
                    },
                        n.showOperationGuide = n.showOperationGuide.bind(n),
                        n.closeAllModal = n.closeAllModal.bind(n),
                        n.handlePressEvent = n.handlePressEvent.bind(n),
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "showOperationGuide",
                        value: function () {
                            this.setState({
                                action: z.e.GUIDE
                            })
                        }
                    },
                        {
                            key: "closeAllModal",
                            value: function () {
                                this.setState({
                                    action: ""
                                })
                            }
                        },
                        {
                            key: "handlePressEvent",
                            value: function () {
                                var e = this.props,
                                    t = e.sourceUuid,
                                    n = e.articleUuid;
                                Object(G.a)({
                                    dot: "a2-4",
                                    message: {
                                        sourceUuid: t,
                                        articleUuid: n
                                    }
                                })
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.show,
                                    n = e.qrCodeUrl,
                                    o = e.sourceUuid,
                                    r = e.articleUuid,
                                    a = this.state.action;
                                return k.a.createElement("div", {
                                    style: {
                                        display: t ? "block" : "none"
                                    }
                                }, n ? k.a.createElement("div", {
                                    className: "m-qrCodeBanner f-cb"
                                }, k.a.createElement(oe.a, {
                                    onPress: this.handlePressEvent
                                }, k.a.createElement("img", {
                                    className: "f-fl",
                                    src: decodeURIComponent(n),
                                    alt: ""
                                })), k.a.createElement("div", {
                                    className: "text"
                                }, k.a.createElement("div", {
                                    className: "inner"
                                }, k.a.createElement("h3", null, k.a.createElement("b", null, "☜"), "长按左侧二维码3秒关注公众号"), k.a.createElement("p", null, "方便下次继续阅读，还可以每日签到领阅点哦")))) : k.a.createElement("div", {
                                    className: "m-link"
                                }, k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "link",
                                    "data-log": X()({
                                        dot: "a1-60",
                                        message: {
                                            sourceUuid: o,
                                            articleUuid: r
                                        }
                                    }),
                                    onClick: this.showOperationGuide
                                }, "点击此处，收藏本书")), a == z.e.GUIDE && k.a.createElement(ie, {
                                    onClose: this.closeAllModal
                                }))
                            }
                        }]),
                    t
            }(w.Component)),
            ce = n("Xxa5"),
            ue = n.n(ce),
            le = n("exGp"),
            he = n.n(le),
            de = function () {
                function e(t) {
                    _()(this, e),
                        this.dom = t.dom,
                        this.callback = t.callback,
                        this.hiddenCallback = t.hiddenCallback,
                        this.isExpose = !1,
                        this.init()
                }
                return D()(e, [{
                    key: "init",
                    value: function () {
                        this.checkExpose(),
                            window.addEventListener("scroll", this.checkExpose.bind(this))
                    }
                },
                    {
                        key: "checkExpose",
                        value: function () {
                            var e = this,
                                t = void 0,
                                n = this.dom.offsetHeight,
                                o = window.innerHeight;
                            if (window.pageYOffset + o >= Object(q.i)(this.dom) + n / 2 && window.pageYOffset <= Object(q.i)(this.dom) + n) {
                                if (this.isExpose) return;
                                this.isExpose = !0,
                                    t = setTimeout(function () {
                                        e.callback && e.callback(),
                                            clearTimeout(t)
                                    }, 500)
                            } else this.isExpose && (window.pageYOffset + o < Object(q.i)(this.dom) || window.pageYOffset > Object(q.i)(this.dom) + n) && (this.isExpose = !1, this.hiddenCallback && this.hiddenCallback(), clearTimeout(t))
                        }
                    }]),
                    e
            }(),
            pe = function (e) {
                new de(e)
            },
            fe = n("KEQ7"),
            me = n("LHne"),
            ve = (n("ndtm"), c = s = function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this));
                    n.state = {
                        linkList: [],
                        bannerList: []
                    },
                        n.rmdAds = JSON.parse(sessionStorage.getItem("N_rmdAds")),
                        n.bannerAds = JSON.parse(sessionStorage.getItem("N_bannerAds")),
                        n.isBannerExpose = !1;
                    var o = e.sourceUuid,
                        r = e.articleUuid,
                        a = n;
                    return n.swiperParams = {
                        on: {
                            slideChange: function () {
                                var e = a.state.bannerList,
                                    t = e[this.realIndex] || {};
                                a.isBannerExpose && t.boxId && Object(G.a)({
                                    dot: "a1-55",
                                    message: {
                                        sourceUuid: o,
                                        articleUuid: r,
                                        id: t.id,
                                        pos: this.realIndex
                                    }
                                })
                            }
                        }
                    },
                        n.handleBannerClick = n.handleBannerClick.bind(n),
                        n.onloadBanner = n.onloadBanner.bind(n),
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "componentWillReceiveProps",
                        value: function (e) {
                            e.articleUuid && e.articleUuid != this.props.articleUuid && this.updatePromotion(e)
                        }
                    },
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.articleUuid && this.updatePromotion(props)
                            }
                        },
                        {
                            key: "updatePromotion",
                            value: function () {
                                function e(e) {
                                    return t.apply(this, arguments)
                                }
                                var t = he()(ue.a.mark(function e(t) {
                                    var n, o, r, a, i, s, c, u, l = this;
                                    return ue.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0,
                                                    e.next = 3,
                                                    C.a.all([this.fetchAd(), this.fetchPromotion(t)]);
                                            case 3:
                                                this.results = e.sent,
                                                    n = this.results[0],
                                                    o = n.rmdAd,
                                                    r = n.bannerAd,
                                                    a = this.results[1],
                                                    i = a.bannerList,
                                                    s = void 0 === i ? [] : i,
                                                    c = a.linkList,
                                                    u = c[0] && c[0].additional ? JSON.parse(c[0].additional) : [],
                                                u.length > 0 && o && u.push(o),
                                                r && s.push(r),
                                                    this.setState({
                                                        bannerList: s,
                                                        linkList: u
                                                    }, function () {
                                                        l.linkAdDom && pe({
                                                            dom: l.linkAdDom,
                                                            callback: function () {
                                                                var e = t.sourceUuid,
                                                                    n = t.articleUuid;
                                                                Object(G.a)({
                                                                    dot: "a1-53",
                                                                    message: {
                                                                        sourceUuid: e,
                                                                        articleUuid: n,
                                                                        id: o.id
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }),
                                                    e.next = 14;
                                                break;
                                            case 12:
                                                e.prev = 12,
                                                    e.t0 = e.
                                                    catch (0);
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this, [
                                        [0, 12]
                                    ])
                                }));
                                return e
                            }()
                        },
                        {
                            key: "fetchAd",
                            value: function () {
                                function e() {
                                    return t.apply(this, arguments)
                                }
                                var t = he()(ue.a.mark(function e() {
                                    var t;
                                    return ue.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (this.bannerAds || this.rmdAds) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.next = 3,
                                                    Object(F.a)("/ad/get", {
                                                        boxIds: z.a.READER_RMD + "," + z.a.READER_BANNER
                                                    });
                                            case 3:
                                                if (t = e.sent, 0 == t.code) {
                                                    e.next = 6;
                                                    break
                                                }
                                                throw new Error("fetchAd error");
                                            case 6:
                                                this.rmdAds = this.filterAd(t.data, z.a.READER_RMD, 1),
                                                    this.bannerAds = this.filterAd(t.data, z.a.READER_BANNER, 2),
                                                    sessionStorage.setItem("N_rmdAds", X()(this.rmdAds)),
                                                    sessionStorage.setItem("N_bannerAds", X()(this.bannerAds)),
                                                    e.next = 14;
                                                break;
                                            case 12:
                                                this.rmdAds = this.filterAd(this.rmdAds, z.a.READER_RMD, 1),
                                                    this.bannerAds = this.filterAd(this.bannerAds, z.a.READER_BANNER, 2);
                                            case 14:
                                                return e.abrupt("return", {
                                                    rmdAd: this.rmdAds[Math.floor(this.rmdAds.length * Math.random())],
                                                    bannerAd: this.bannerAds[Math.floor(this.bannerAds.length * Math.random())]
                                                });
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return e
                            }()
                        },
                        {
                            key: "filterAd",
                            value: function (e, t, n) {
                                return e ? e.filter(function (e) {
                                    var o = Date.now() <= e.endTime && Date.now() >= e.startTime;
                                    return n ? o && e.boxId == t && e.type == n : o && e.boxId == t
                                }) : []
                            }
                        },
                        {
                            key: "fetchPromotion",
                            value: function () {
                                function e(e) {
                                    return t.apply(this, arguments)
                                }
                                var t = he()(ue.a.mark(function e(t) {
                                    var n, o = t.sourceUuid,
                                        r = t.articleUuid;
                                    return ue.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    Object(F.a)("/book/promotion.json", {
                                                        sourceUuid: o,
                                                        articleUuid: r
                                                    });
                                            case 2:
                                                if (n = e.sent, 0 != n.code) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return", n);
                                            case 7:
                                                throw new Error("fetchPromotion error");
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return e
                            }()
                        },
                        {
                            key: "handleBannerClick",
                            value: function (e) {
                                var t = e.jumpUrl,
                                    n = e.boxId,
                                    o = e.id,
                                    r = e.index,
                                    a = void 0 === r ? 0 : r,
                                    i = this.props,
                                    s = i.sourceUuid,
                                    c = i.articleUuid;
                                n ? Object(G.a)({
                                    dot: "a1-56",
                                    message: {
                                        sourceUuid: s,
                                        articleUuid: c,
                                        boxId: n,
                                        id: o,
                                        pos: a
                                    }
                                }) : Object(G.a)({
                                    dot: "a1-36",
                                    message: {
                                        sourceUuid: s,
                                        articleUuid: c,
                                        id: o,
                                        pos: a
                                    }
                                }),
                                    setTimeout(function () {
                                        window.location.href = t
                                    }, 200)
                            }
                        },
                        {
                            key: "onloadBanner",
                            value: function () {
                                var e = this,
                                    t = this.state.bannerList;
                                this.bannerDom && pe({
                                    dom: this.bannerDom,
                                    callback: function () {
                                        e.isBannerExpose = !0;
                                        var n = e.props,
                                            o = n.sourceUuid,
                                            r = n.articleUuid;
                                        Object(G.a)({
                                            dot: "a1-35",
                                            message: {
                                                sourceUuid: o,
                                                articleUuid: r
                                            }
                                        }),
                                        1 == t.length && t[0].boxId && Object(G.a)({
                                            dot: "a1-55",
                                            message: {
                                                sourceUuid: o,
                                                articleUuid: r,
                                                id: t[0].id,
                                                pos: 0
                                            }
                                        })
                                    },
                                    hiddenCallback: function () {
                                        e.isBannerExpose = !1
                                    }
                                })
                            }
                        },
                        {
                            key: "renderBanners",
                            value: function () {
                                var e = this,
                                    t = this.state.bannerList;
                                if (0 != t.length) return k.a.createElement(me.a, {
                                    swiperParams: this.swiperParams,
                                    swiperRef: function (n) {
                                        return n && (e.bannerDom = 1 === t.length ? n : n.swiper && n.swiper.el)
                                    },
                                    bannerList: t,
                                    handleBannerClick: this.handleBannerClick,
                                    onload: this.onloadBanner
                                })
                            }
                        },
                        {
                            key: "renderLinks",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.sourceUuid,
                                    o = t.articleUuid,
                                    r = this.state.linkList;
                                if (0 != r.length) {
                                    var a = r.map(function (t) {
                                        var r = t.source,
                                            a = t.wordDesc,
                                            i = t.boxId,
                                            s = t.id,
                                            c = t.refUrl;
                                        return i ? k.a.createElement("a", {
                                            ref: function (t) {
                                                return t && (e.linkAdDom = t)
                                            },
                                            className: "link",
                                            "data-log": X()({
                                                dot: "a1-54",
                                                message: {
                                                    sourceUuid: n,
                                                    articleUuid: o,
                                                    id: s
                                                }
                                            }),
                                            href: c
                                        }, r, k.a.createElement("span", {
                                            className: "text-ad"
                                        }, "广告")) : r && a ? k.a.createElement("a", {
                                            className: "link",
                                            "data-log": X()({
                                                dot: "a1-14",
                                                message: {
                                                    sourceUuid: n,
                                                    articleUuid: o
                                                }
                                            }),
                                            href: "/book/reader.do?sourceUuid=" + r
                                        }, a) : void 0
                                    });
                                    return k.a.createElement("div", {
                                        className: "m-links"
                                    }, k.a.createElement(fe.a, {
                                        title: {
                                            name: "作者推荐"
                                        }
                                    }), k.a.createElement("div", {
                                        className: "links-wrap"
                                    }, a))
                                }
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.show;
                                return k.a.createElement("div", {
                                    className: "m-promotion",
                                    style: {
                                        display: e ? "block" : "none"
                                    }
                                }, this.renderBanners(), this.renderLinks())
                            }
                        }]),
                    t
            }(w.Component), s.defaultProps = {
                show: !1,
                sourceUuid: "",
                articleUuid: ""
            }, c),
            ge = (n("OnDC"), l = u = function (e) {
                function t(e) {
                    return _()(this, t),
                        B()(this, (t.__proto__ || S()(t)).call(this))
                }
                return H()(t, e),
                    D()(t, [{
                        key: "handleThemeChange",
                        value: function (e) {
                            J.a.trigger("themeChange", e)
                        }
                    },
                        {
                            key: "handleFontChange",
                            value: function (e) {
                                J.a.trigger("fontChange", e)
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.theme,
                                    n = e.bookInfo,
                                    o = e.articleUuid,
                                    r = n.sourceUuid,
                                    a = n.createBy,
                                    i = n.gender,
                                    s = n.category,
                                    c = n.categoryId,
                                    u = "";
                                u = 0 === a ? "publish" : 1 === i ? "male" : "female";
                                var l = "/category.do?channel=" + u + "&category=" + c;
                                return k.a.createElement("div", null, k.a.createElement("div", {
                                    className: "m-menu"
                                }, k.a.createElement("div", {
                                    className: "m-menu-list f-cb"
                                }, k.a.createElement("a", {
                                    href: "/index.do",
                                    className: "menu-item",
                                    "data-log": X()({
                                        dot: "a2-1",
                                        message: {
                                            value: "index"
                                        }
                                    })
                                }, "首页"), k.a.createElement("span", {
                                    className: "split"
                                }), k.a.createElement("a", {
                                    href: "/history.do",
                                    className: "menu-item",
                                    "data-log": X()({
                                        dot: "a2-1",
                                        message: {
                                            value: "history"
                                        }
                                    })
                                }, "阅读历史"), k.a.createElement("span", {
                                    className: "split"
                                }), k.a.createElement("a", {
                                    href: "/pay.do?sourceUuid=" + r,
                                    className: "menu-item",
                                    "data-log": X()({
                                        dot: "a2-1",
                                        message: {
                                            value: "recharge"
                                        }
                                    })
                                }, "充值"), k.a.createElement("span", {
                                    className: "split"
                                }), k.a.createElement("a", {
                                    href: l,
                                    className: "menu-item",
                                    "data-log": X()({
                                        dot: "a2-1",
                                        message: {
                                            value: "more"
                                        }
                                    })
                                }, "更多", s), k.a.createElement("a", {
                                    href: "/route/complaint.do?sourceUuid=" + r + "&articleUuid=" + o,
                                    "data-log": X()({
                                        dot: "a2-6",
                                        message: {
                                            sourceUuid: r,
                                            articleUuid: o
                                        }
                                    }),
                                    className: "menu-item menu-item-fr"
                                }, "投诉")), k.a.createElement("div", {
                                    className: "m-setting-group"
                                }, k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn-theme btn-theme-light" + ("light" === t ? " btn-theme-active" : ""),
                                    "data-log": X()({
                                        dot: "a2-2",
                                        message: {
                                            value: "light"
                                        }
                                    }),
                                    onClick: this.handleThemeChange.bind(this, "light")
                                }), k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn-theme btn-theme-blue" + ("blue" === t ? " btn-theme-active" : ""),
                                    "data-log": X()({
                                        dot: "a2-2",
                                        message: {
                                            value: "blue"
                                        }
                                    }),
                                    onClick: this.handleThemeChange.bind(this, "blue")
                                }), k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn-theme btn-theme-yellow" + ("yellow" === t ? " btn-theme-active" : ""),
                                    "data-log": X()({
                                        dot: "a2-2",
                                        message: {
                                            value: "yellow"
                                        }
                                    }),
                                    onClick: this.handleThemeChange.bind(this, "yellow")
                                }), "dark" === t ? k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn-theme btn-theme-light-2 btn-theme-active",
                                    "data-log": X()({
                                        dot: "a2-2",
                                        message: {
                                            value: "light-dark"
                                        }
                                    }),
                                    onClick: this.handleThemeChange.bind(this, "light")
                                }) : k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn-theme btn-theme-dark",
                                    "data-log": X()({
                                        dot: "a2-2",
                                        message: {
                                            value: "light-dark"
                                        }
                                    }),
                                    onClick: this.handleThemeChange.bind(this, "dark")
                                }), k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn-font btn-font-larger btn--" + t,
                                    "data-log": X()({
                                        dot: "a2-3",
                                        message: {
                                            value: "enlarge"
                                        }
                                    }),
                                    onClick: this.handleFontChange.bind(this, 1)
                                }, "A+"), k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn-font btn--" + t,
                                    "data-log": X()({
                                        dot: "a2-3",
                                        message: {
                                            value: "reduce"
                                        }
                                    }),
                                    onClick: this.handleFontChange.bind(this, -1)
                                }, "A-"))))
                            }
                        }]),
                    t
            }(w.Component), u.defaultProps = {
                theme: "light",
                bookInfo: {
                    createBy: 1,
                    gender: 1,
                    category: ""
                }
            }, l),
            ye = (n("s3sw"), d = h = function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this));
                    return n.goNextChapter = n.goNextChapter.bind(n),
                        n.goPrevChapter = n.goPrevChapter.bind(n),
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "goNextChapter",
                        value: function (e) {
                            J.a.trigger("chapterIndexChange", 1)
                        }
                    },
                        {
                            key: "goPrevChapter",
                            value: function (e) {
                                J.a.trigger("chapterIndexChange", -1)
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.theme,
                                    n = e.show,
                                    o = e.bookInfo,
                                    r = e.articleUuid,
                                    a = o.sourceUuid;
                                return k.a.createElement("div", {
                                    style: {
                                        display: n ? "block" : "none"
                                    }
                                }, k.a.createElement("div", {
                                    className: "m-btn-group"
                                }, k.a.createElement("ul", {
                                    className: "m-btn-list f-cb"
                                }, k.a.createElement("li", null, k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "f-fl btn btn-l btn--" + t,
                                    onClick: this.goPrevChapter,
                                    "data-log": X()({
                                        dot: "a2-5",
                                        message: {
                                            value: "prev",
                                            sourceUuid: a,
                                            articleUuid: r
                                        }
                                    })
                                }, "上一章"), k.a.createElement("a", {
                                    href: "/book/catalog.do?sourceUuid=" + a + "&articleUuid=" + r,
                                    className: "f-fr btn btn--" + t,
                                    "data-log": X()({
                                        dot: "a2-5",
                                        message: {
                                            value: "catalog",
                                            sourceUuid: a,
                                            articleUuid: r
                                        }
                                    })
                                }, "目录"), k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn btn-l btn--" + t,
                                    onClick: this.goNextChapter,
                                    "data-log": X()({
                                        dot: "a2-5",
                                        message: {
                                            value: "next",
                                            sourceUuid: a,
                                            articleUuid: r
                                        }
                                    })
                                }, "下一章")))))
                            }
                        }]),
                    t
            }(w.Component), h.defaultProps = {
                theme: "light",
                articleUuid: "",
                bookInfo: {
                    sourceUuid: ""
                }
            }, d),
            be = (n("1h2G"), f = p = function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this, e));
                    n.ruleMap = {
                        2e4: 9800,
                        3e4: 17e3,
                        4e4: 2e4
                    },
                        n.expireCoupon = Y.a.get("N_expireCoupon");
                    var o = {};
                    if (n.expireCoupon) {
                        var r = n.expireCoupon.split("-");
                        o.rechargeAmount = parseInt(r[0]),
                            o.hongbaoAmount = parseInt(r[1])
                    }
                    return n.state = {
                        coupon: o
                    },
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = this;
                            this.expireCoupon || Object(F.a)("/coupon/tip").then(function (t) {
                                if (0 == t.code) {
                                    var n = e.filter(parseInt(t.data.rechargeAmount), t.data.userCoupons),
                                        o = new Date,
                                        r = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 23, 59, 59),
                                        a = parseInt(n.rechargeAmount / 100) || 0,
                                        i = parseInt(n.hongbaoAmount / 100) || 0;
                                    Y.a.set("N_expireCoupon", a + "-" + i, {
                                        expires: r,
                                        path: "/"
                                    }),
                                        e.setState({
                                            coupon: {
                                                rechargeAmount: a,
                                                hongbaoAmount: i
                                            }
                                        }, function () {
                                            e.couponTipDom && pe({
                                                dom: e.couponTipDom,
                                                callback: function () {
                                                    var t = e.props,
                                                        n = t.sourceUuid,
                                                        o = t.articleUuid;
                                                    Object(G.a)({
                                                        dot: "a1-51",
                                                        message: {
                                                            sourceUuid: n,
                                                            articleUuid: o
                                                        }
                                                    })
                                                }
                                            })
                                        })
                                }
                            })
                        }
                    },
                        {
                            key: "filter",
                            value: function (e, t) {
                                var n = this,
                                    o = -1;
                                return t.map(function (r, a) {
                                    var i = r.rechargeAmount;
                                    r.hongbaoAmount;
                                    (!n.ruleMap[i] || e >= n.ruleMap[i]) && (-1 == o || i > t[o].rechargeAmount) && (o = a)
                                }),
                                t[o] || {}
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.sourceUuid,
                                    o = t.articleUuid,
                                    r = this.state.coupon,
                                    a = r.rechargeAmount,
                                    i = r.hongbaoAmount;
                                return !(!a || !i) && k.a.createElement("a", {
                                    ref: function (t) {
                                        return e.couponTipDom = t
                                    },
                                    className: "link-expire",
                                    "data-log": X()({
                                        dot: "a1-50",
                                        message: {
                                            sourceUuid: n,
                                            articleUuid: o
                                        }
                                    }),
                                    href: "/pay.do?sourceUuid=" + n + "&rechargeAmount=" + a
                                }, "您有一张", a, "-", i, "优惠券今日到期，点击查看")
                            }
                        }]),
                    t
            }(w.Component), p.defaultProps = {
                sourceUuid: "",
                articleUuid: ""
            }, f),
            we = (n("36vP"), function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this));
                    return n.baseFontSize = 18,
                        n.fontLevel = [.6, .8, 1, 1.2, 1.4],
                        n.state = {
                            theme: "light",
                            showBtnGroup: !1,
                            contentHtml: "",
                            bookInfo: {},
                            chapterModel: {},
                            curFontLevel: localStorage.getItem("N_reader_font") ? parseInt(localStorage.getItem("N_reader_font")) : 2
                        },
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "handleFontChange",
                        value: function (e) {
                            var t = this.state.curFontLevel + e;
                            return t < 0 ? void Object($.a)({
                                text: "已是最小字号"
                            }) : t >= this.fontLevel.length ? void Object($.a)({
                                text: "已是最大字号"
                            }) : (localStorage.setItem("N_reader_font", t), void this.setState({
                                curFontLevel: t
                            }))
                        }
                    },
                        {
                            key: "htmlPreProcess",
                            value: function (e) {
                                var t = /(src|href|title)=/gi,
                                    n = /<\/?(font|sup|svg|pre)[^>]*\/?>/gi,
                                    o = /<(p|div)[^>]*>\s*<\/(p|div)>/gi,
                                    r = /(margin|padding).*?:\s*?-.*?;*?/gi,
                                    a = /<\/?(br)[^>]*\/?>/gi,
                                    i = /方正兰亭黑_YS_GB18030|华康黑体W3|华康POP1体W5|华康少女文字W5|华康娃娃体W5/g,
                                    s = /华康宋体W5/g,
                                    c = /华康楷体W5/g,
                                    u = /华康圆体W3/g,
                                    l = /([\'\"a-zA-Z0-9\\s.\-#:;]*font\-size\s*:\s*)(\d+px)/gi,
                                    h = te.a.dec(e),
                                    d = {
                                        "16px": "1em",
                                        "14px": "0.875em",
                                        "18px": "1.125em",
                                        "20px": "1.25em",
                                        "21px": "1.3125em",
                                        "23px": "1.4375em",
                                        "29px": "1.8125em",
                                        "34px": "2.125em"
                                    },
                                    p = function (e, t, n) {
                                        return t + d[n]
                                    };
                                return h = h.replace(/\n/g, "").replace(t, "data-$1=").replace(n, "").replace(o, "").replace(r, "").replace(i, "").replace(s, "宋体").replace(c, "楷体").replace(u, "幼圆").replace(l, p),
                                    h = this.state.bookInfo.beautyFlag ? h.replace(a, "<p></p>") : h.replace(a, "")
                            }
                        },
                        {
                            key: "loadImage",
                            value: function (e, t) {
                                var n = new Image,
                                    o = e.getAttribute("data-src");
                                n.onload = function () {
                                    e.parent ? e.parent.replaceChild(n, e) : e.src = o,
                                        e.className = e.className.replace(" img-loading", ""),
                                    t && t()
                                },
                                    n.src = o
                            }
                        },
                        {
                            key: "imgPreProcess",
                            value: function (e) {
                                if (~e.indexOf("<img")) {
                                    var t = this.contentRef,
                                        n = t.querySelectorAll("img"),
                                        o = parseFloat(getComputedStyle(t).width);
                                    if (n) {
                                        for (var r = 0, a = n.length; r < a; r++) if (n[r].getAttribute("data-src")) {
                                            if (n[r].getAttribute("size")) {
                                                var i = n[r].getAttribute("size").split("*");
                                                n[r].className += " img-loading";
                                                var s = parseFloat(i[0]) > o ? o : parseFloat(i[0]),
                                                    c = s * parseFloat(i[1]) / parseFloat(i[0]);
                                                n[r].style.width = s + "px",
                                                    n[r].style.height = c + "px",
                                                    n[r].src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
                                            }
                                            this.loadImage(n[r])
                                        }
                                        this.callbackRender(t.innerHTML)
                                    } else this.callbackRender(t.innerHTML)
                                } else this.callbackRender(e)
                            }
                        },
                        {
                            key: "callbackRender",
                            value: function (e) {
                                var t = this.state,
                                    n = t.bookInfo,
                                    o = t.chapterModel,
                                    r = t.isForward,
                                    a = document.createElement("div");
                                a.innerHTML = e;
                                var i = a.querySelector("h1");
                                1 === o.grade && i && a.textContent.trim().length === i.textContent.trim().length && !a.querySelector("img") && (1 != n.createBy || o.needPay && !o.paid || (r ? J.a.trigger("chapterIndexChange", 1, !0) : J.a.trigger("chapterIndexChange", -1, !0)))
                            }
                        },
                        {
                            key: "logVipRecord",
                            value: function () {
                                var e = this,
                                    t = this.state,
                                    n = t.bookInfo,
                                    o = t.chapterModel;
                                this.listener = function () {
                                    e.contentWrap && window.pageYOffset > e.contentWrap.offsetHeight / 2 && (Object(F.d)("/user/vipRecord.json", {}, {
                                        sourceUuid: n.sourceUuid,
                                        articleUuid: o.articleUuid
                                    }), window.removeEventListener("scroll", e.listener, !1))
                                },
                                    window.addEventListener("scroll", this.listener, !1)
                            }
                        },
                        {
                            key: "contentPreProcess",
                            value: function (e) {
                                var t = this,
                                    n = this.htmlPreProcess(e);
                                this.setState({
                                    showBtnGroup: !0,
                                    contentHtml: n
                                }, function () {
                                    t.props.logCallback && t.props.logCallback(),
                                        setTimeout(function () {
                                            t.imgPreProcess(n),
                                                t.logVipRecord()
                                        }, 0)
                                })
                            }
                        },
                        {
                            key: "updateContent",
                            value: function (e) {
                                var t = this,
                                    n = e.content,
                                    o = N()(e, ["content"]);
                                this.setState(P()({}, o), function () {
                                    n ? t.contentPreProcess(n) : t.setState({
                                        showBtnGroup: !0
                                    })
                                })
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function (e) {
                                this.updateContent(e)
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this;
                                this.updateContent(this.props),
                                    J.a.on("fontChange", function (t) {
                                        return e.handleFontChange(t)
                                    })
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this.listener && window.removeEventListener("scroll", this.listener, !1),
                                    J.a.off("fontChange")
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.state,
                                    n = t.theme,
                                    o = t.contentHtml,
                                    r = t.curFontLevel,
                                    a = t.bookInfo,
                                    i = t.chapterModel,
                                    s = t.showBtnGroup,
                                    c = a.sourceUuid,
                                    u = i.articleUuid,
                                    l = i.needPay,
                                    h = this.props,
                                    d = h.type,
                                    p = h.qrCodeUrl,
                                    f = d && "chapterBuy" == d;
                                return k.a.createElement("div", {
                                    ref: function (t) {
                                        return e.contentWrap = t
                                    },
                                    className: d && "chapterBuy" == d && "f-blur"
                                }, k.a.createElement(ge, {
                                    theme: n,
                                    bookInfo: a,
                                    articleUuid: u
                                }), k.a.createElement("div", {
                                    style: {
                                        fontSize: this.baseFontSize * this.fontLevel[r] + "px"
                                    },
                                    className: "m-main"
                                }, k.a.createElement("div", {
                                    ref: function (t) {
                                        return e.contentRef = t
                                    },
                                    className: "content",
                                    dangerouslySetInnerHTML: {
                                        __html: o
                                    }
                                })), k.a.createElement(se, {
                                    show: s,
                                    qrCodeUrl: p,
                                    sourceUuid: c,
                                    articleUuid: u
                                }), k.a.createElement(ye, {
                                    show: s,
                                    theme: n,
                                    bookInfo: a,
                                    articleUuid: u
                                }), l && !f && k.a.createElement(be, {
                                    sourceUuid: c,
                                    articleUuid: u
                                }), !f && k.a.createElement(ve, {
                                    show: s,
                                    sourceUuid: c,
                                    articleUuid: u
                                }))
                            }
                        }]),
                    t
            }(w.Component)),
            ke = {
                START_TIME: new Date(2018, 8, 29, 0, 0, 0).getTime(),
                END_TIME: new Date(2018, 9, 7, 23, 59, 59).getTime()
            },
            Ee = n("EtYT"),
            xe = n("Cz50"),
            Te = n.n(xe),
            Pe = (n("XBGs"), function (e) {
                function t() {
                    _()(this, t);
                    var e = B()(this, (t.__proto__ || S()(t)).call(this));
                    return e.state = {
                        weChat: void 0
                    },
                        e.jumpToRechargePage = e.jumpToRechargePage.bind(e),
                        e.jumpToQrCodePage = e.jumpToQrCodePage.bind(e),
                        e.handleClose = e.handleClose.bind(e),
                        e._oncopy = "",
                        e
                }
                return H()(t, e),
                    D()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.getCustomer(),
                                this._oncopy = document.body.oncopy,
                                document.body.oncopy = null
                        }
                    },
                        {
                            key: "getCustomer",
                            value: function () {
                                var e = this;
                                Object(F.a)("/banner/cors/getCustomer.json").then(function (t) {
                                    if (0 == t.code) {
                                        var n = t.data || {},
                                            o = n.weChat;
                                        o = o || "",
                                            e.setState({
                                                weChat: o
                                            })
                                    }
                                })
                            }
                        },
                        {
                            key: "jumpToRechargePage",
                            value: function () {
                                location.href = "/pay.do?targetUrl=" + this.props.targetUrl
                            }
                        },
                        {
                            key: "jumpToQrCodePage",
                            value: function () {
                                location.href = "/route/wap2pay.do?page=singleQrCodeRecharge&" + this.props.rechargeQuery
                            }
                        },
                        {
                            key: "handleClose",
                            value: function () {
                                document.body.oncopy = this._oncopy,
                                this.props.onClose && this.props.onClose()
                            }
                        },
                        {
                            key: "handleCopy",
                            value: function (e) {
                                i(e)
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = (e.message, e.sourceUuid),
                                    n = e.articleUuid,
                                    o = this.state.weChat;
                                return k.a.createElement("div", {
                                    className: "m-modal-container"
                                }, k.a.createElement("div", {
                                    className: "m-mask"
                                }), k.a.createElement("div", {
                                    className: "m-rechargeCancelModal"
                                }, k.a.createElement("div", {
                                    className: "content"
                                }, k.a.createElement("h2", null, "支付取消"), k.a.createElement("ul", null, k.a.createElement("li", null, k.a.createElement("a", {
                                    href: "javascript:;",
                                    onClick: this.jumpToRechargePage
                                }, "查看更多优惠充值项？")), k.a.createElement("li", null, k.a.createElement("a", {
                                    href: "javascript:;",
                                    onClick: this.jumpToQrCodePage
                                }, "他人代充？")), void 0 != o && !o && k.a.createElement("li", {
                                    className: "noborder"
                                }, k.a.createElement("a", {
                                    href: "/route/feedback.do?sourceUuid=" + t + "&articleUuid=" + n,
                                    "data-log": X()({
                                        dot: "a1-58"
                                    })
                                }, "充值遇到问题？联系客服"))), o && [k.a.createElement("p", null, "联系客服？"), k.a.createElement("p", null, "客服公众号：", o, " ", k.a.createElement("a", {
                                    className: "copy f-fr",
                                    href: "javascript:;",
                                    onClick: this.handleCopy.bind(this, o)
                                }, "复制"))]), k.a.createElement("span", {
                                    className: "icon-close",
                                    onClick: this.handleClose
                                })))
                            }
                        }]),
                    t
            }(w.Component)),
            Oe = Pe,
            Ce = (n("PLOF"), v = m = function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this, e)),
                        o = void 0;
                    if (e.count >= 3) {
                        o = (JSON.parse(sessionStorage.getItem("N_chapterRecharge_selected")) || {}).rechargeQuery
                    }
                    return n.state = {
                        showCancelModal: !0
                    },
                        n.rechargeQuery = o || "",
                        n.inVipActivity = 0,
                        n.rechargeType = z.f.WX_JSAPI,
                        n.jumpToRechargePage = n.jumpToRechargePage.bind(n),
                        n.closeCancelModal = n.closeCancelModal.bind(n),
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "getTargetUrl",
                        value: function () {
                            var e = Object(q.h)();
                            return e.fromRecharge = 1,
                                delete e.count,
                            location.protocol + "//" + location.host + location.pathname + "?" + Object(F.c)(e)
                        }
                    },
                        {
                            key: "jumpToRechargePage",
                            value: function () {
                                var e = this;
                                Object(G.a)({
                                    dot: "a1-39"
                                }),
                                    setTimeout(function () {
                                        location.href = "/pay.do?sourceUuid=" + e.props.sourceUuid + "&target_url=" + encodeURIComponent(e.getTargetUrl())
                                    }, 200)
                            }
                        },
                        {
                            key: "closeCancelModal",
                            value: function () {
                                this.setState({
                                    showCancelModal: !1
                                })
                            }
                        },
                        {
                            key: "handleRecharge",
                            value: function (e) {
                                var t = e.configId,
                                    n = e.price,
                                    o = e.needPay,
                                    r = e.couponId,
                                    a = e.discount,
                                    i = e.hongbao,
                                    s = e.productAmount,
                                    c = {
                                        configId: t,
                                        price: n,
                                        needPay: o,
                                        couponId: r,
                                        discount: a,
                                        hongbao: i,
                                        productAmount: s,
                                        inVipActivity: this.inVipActivity,
                                        targetUrl: encodeURIComponent(this.getTargetUrl()),
                                        sourceUuid: this.props.sourceUuid,
                                        count: this.props.count
                                    };
                                this.rechargeQuery = Object(F.c)(c),
                                    sessionStorage.setItem("N_chapterRecharge_selected", X()({
                                        rechargeQuery: this.rechargeQuery
                                    })),
                                    location.href = "/route/wap2pay.do?page=singleRecharge&" + this.rechargeQuery
                            }
                        },
                        {
                            key: "getHotItemIndex",
                            value: function (e) {
                                for (var t = -1, n = -1, o = -1, r = e.length - 1; r >= 0; r--) 1 === e[r].productType ? n = r : 19 == e[r].price ? t = r : o = r;
                                return t > -1 ? t : n > -1 ? n : o
                            }
                        },
                        {
                            key: "renderRechargesTypes",
                            value: function () {
                                var e = this,
                                    t = this.rechargeType,
                                    n = this.props.vmBalance,
                                    o = this.props.productList;
                                o = o.slice(0, 4);
                                var r = this.getHotItemIndex(o);
                                return k.a.createElement("div", {
                                    key: t,
                                    className: "m-recharge-item"
                                }, k.a.createElement("h4", null, k.a.createElement("b", null), "阅点不足，请充值", k.a.createElement("a", {
                                    className: "f-fr",
                                    href: "javascript:;",
                                    onClick: this.jumpToRechargePage
                                }, "更多充值及说明 >>")), k.a.createElement("ul", {
                                    className: "f-cb"
                                }, o.map(function (o, a, i) {
                                    var s = a % 2 == 0 ? "item f-fl" : "item f-fr";
                                    return r == a && (s += " item-hot"),
                                        1 == o.defaultActivity ? s += " item-activity" : 1 === o.productType && (s += " item-vip"),
                                        1 === o.productType ? (e.inVipActivity = !0, o.needPay = (o.vm - Math.min(n, o.vm)) / 100..toFixed(2) * 1) : o.needPay = Math.max(o.price - (o.discount || 0), 0),
                                        k.a.createElement("li", {
                                            key: t + a,
                                            className: s
                                        }, k.a.createElement("a", {
                                            href: "javascript:;",
                                            onClick: e.handleRecharge.bind(e, o)
                                        }, 1 === o.productType ? [k.a.createElement("p", {
                                            className: "title"
                                        }, "全站15万本书免费读"), k.a.createElement("p", {
                                            className: "yd"
                                        }, "包", Ee.a.formatMonth(o.productAmount), o.hongbao > 0 && "送" + Ee.a.formatMonth(o.hongbao), "VIP会员")] : 1 === o.hongbaoType ? [k.a.createElement("p", {
                                            className: "title"
                                        }, "得", o.vm, "阅点"), k.a.createElement("p", {
                                            className: "yd"
                                        }, o.vm, "阅点", 0 !== o.hongbao && k.a.createElement("em", null, " +", Ee.a.formatMonth(o.hongbao), "VIP"))] : [k.a.createElement("p", {
                                            className: "title"
                                        }, "得", o.vm + o.hongbao, "阅点"), k.a.createElement("p", {
                                            className: "yd"
                                        }, o.vm, "阅点", 0 !== o.hongbao && k.a.createElement("em", null, " +", k.a.createElement("b", {
                                            className: "icon-hongbao"
                                        }), o.hongbao, "红包"))], k.a.createElement("p", {
                                            className: "money"
                                        }, o.discount ? k.a.createElement("span", null, k.a.createElement("span", {
                                            className: "red"
                                        }, "¥", o.needPay), k.a.createElement("span", {
                                            className: "origin"
                                        }, "¥", o.price)) : k.a.createElement("span", null, "¥", o.needPay)), o.iconUrl && k.a.createElement("b", {
                                            className: "icon-hot"
                                        }, k.a.createElement("img", {
                                            src: o.iconUrl
                                        }))))
                                })))
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.state.showCancelModal,
                                    t = this.props,
                                    n = t.sourceUuid,
                                    o = t.articleUuid;
                                return k.a.createElement("div", null, k.a.createElement("div", {
                                    className: "m-recharge-list"
                                }, this.renderRechargesTypes()), this.props.count >= 3 && e && k.a.createElement(Oe, {
                                    sourceUuid: n,
                                    articleUuid: o,
                                    targetUrl: this.getTargetUrl(),
                                    rechargeQuery: this.rechargeQuery,
                                    onClose: this.closeCancelModal
                                }))
                            }
                        }]),
                    t
            }(w.Component), m.defaultProps = {
                productList: [],
                sourceUuid: "",
                articleUuid: "",
                count: 0,
                vmBalance: 0
            }, v),
            Ue = (n("ANGC"), y = g = function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this));
                    n.state = {
                        autoPurchase: e.autoPurchase,
                        showRechargeLayer: !1,
                        productList: [],
                        autoPurchaseControl: 0,
                        unlockLink: "/route/wap2pay.do?page=activity/vipActivityComm",
                        unlockText: "开通VIP，全站15万本书免费看365天！(含本书)"
                    },
                        n.count = Object(q.h)().count || 0,
                        n.isBuying = !1,
                        n.preventScroll = n.preventScroll.bind(n);
                    var o = Date.now();
                    return n.inActivity = o > ke.START_TIME && o <= ke.END_TIME,
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "confirmBuy",
                        value: function (e) {
                            var t = this;
                            if (!this.isBuying) {
                                this.isBuying = !0;
                                var n = this.props,
                                    o = n.sourceUuid,
                                    r = n.chapterModel,
                                    a = n.payType,
                                    i = this.state,
                                    s = i.autoPurchase,
                                    c = i.autoPurchaseControl,
                                    u = r.articleUuid;
                                c || 1 == s || this.updateAutoPurchase(1, !0, !1),
                                c && 1 == s && this.updateAutoPurchase(1, !0, !1);
                                var l = {
                                    autoPurchase: s,
                                    sourceUuid: o,
                                    articleUuids: u
                                };
                                Object(F.d)("/trade/buyBook.json", l).then(function (n) {
                                    switch (t.isBuying = !1, n.code) {
                                        case 0:
                                            J.a.trigger("tradeInfoUpdate", e),
                                                J.a.trigger("chapterIndexChange", 0, !0);
                                            break;
                                        case -200:
                                            Object($.a)({
                                                text: "余额不足"
                                            }),
                                                J.a.trigger("chapterIndexChange", 0, !0);
                                            break;
                                        case -201:
                                            Object($.a)({
                                                text: "已购买"
                                            }),
                                                J.a.trigger("chapterIndexChange", 0, !0);
                                            break;
                                        case -205:
                                            Object($.a)({
                                                text: "免费章节无需购买"
                                            }),
                                                J.a.trigger("chapterIndexChange", 0, !0);
                                            break;
                                        case -100:
                                            Object($.a)({
                                                text: "找不到该书籍"
                                            });
                                            break;
                                        case -401:
                                            Object($.a)({
                                                text: "购买失败，请重试"
                                            });
                                            break;
                                        default:
                                            Object($.a)({
                                                text: "购买失败，请稍后再试"
                                            })
                                    }
                                }).
                                catch (function (e) {
                                    t.isBuying = !1
                                }),
                                    Object(G.a)({
                                        dot: "a1-38",
                                        message: {
                                            payType: a,
                                            sourceUuid: o,
                                            articleUuid: u
                                        }
                                    })
                            }
                        }
                    },
                        {
                            key: "updateAutoPurchase",
                            value: function (e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                if (0 == e || n) {
                                    var r = function () {
                                        return t.setState({
                                            autoPurchase: e
                                        })
                                    };
                                    J.a.trigger("autoPurchaseChange", e, {
                                        showToast: o,
                                        callback: r
                                    })
                                } else this.setState({
                                    autoPurchase: e
                                })
                            }
                        },
                        {
                            key: "fetchRechargeList",
                            value: function () {
                                var e = this;
                                Object(F.a)("/user/info.json", {}).then(function (t) {
                                    if (0 == t.code) {
                                        var n = t.user && t.user.uuid,
                                            o = Object(q.c)();
                                        Object(F.b)(o + "/recharge/hslist.json", {
                                            uid: n
                                        }).then(function (t) {
                                            200 === t.code ? e.setState({
                                                showRechargeLayer: !0,
                                                productList: t.productList || []
                                            }) : e.setState({
                                                showRechargeLayer: !0,
                                                productList: []
                                            })
                                        })
                                    }
                                })
                            }
                        },
                        {
                            key: "fetchAutoPurchaseControl",
                            value: function () {
                                var e = this;
                                Object(F.a)("/globalconfig/query", {
                                    module: "自动购买",
                                    item: "autoPurchaseControl"
                                }).then(function (t) {
                                    if (0 === t.code && t.data) {
                                        var n = parseInt(t.data.state);
                                        e.setState({
                                            autoPurchaseControl: n
                                        }),
                                        n && -1 == e.state.autoPurchase && e.updateAutoPurchase(1)
                                    }
                                })
                            }
                        },
                        {
                            key: "fetchUnlockText",
                            value: function () {
                                var e = this;
                                Object(F.a)("/globalconfig/queryTc", {
                                    the_unlock_text: "The-Unlock-Text"
                                }).then(function (t) {
                                    0 === t.code && t.data && e.setState({
                                        unlockText: t.data.state
                                    })
                                }),
                                    Object(F.a)("/globalconfig/queryTc", {
                                        the_unlock_text: "The-Unlock-Link"
                                    }).then(function (t) {
                                        0 === t.code && t.data && e.setState({
                                            unlockLink: t.data.state
                                        })
                                    })
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this.props,
                                    t = e.sourceUuid,
                                    n = e.chapterModel,
                                    o = e.balance,
                                    r = e.hongbao,
                                    a = e.payType,
                                    i = e.vipPrice,
                                    s = 1 == a ? n.price : i;
                                Object(G.a)({
                                    dot: "a1-30",
                                    message: {
                                        sourceUuid: t,
                                        articleUuid: n.articleUuid
                                    }
                                }),
                                    o + r < s ? (this.fetchRechargeList(), Object(G.a)({
                                        dot: "a1-42",
                                        message: {
                                            sourceUuid: t,
                                            articleUuid: n.articleUuid
                                        }
                                    })) : (this.fetchUnlockText(), Object(G.a)({
                                        dot: "a1-41",
                                        message: {
                                            sourceUuid: t,
                                            articleUuid: n.articleUuid
                                        }
                                    })),
                                    this.fetchAutoPurchaseControl()
                            }
                        },
                        {
                            key: "preventScroll",
                            value: function (e) {
                                e.preventDefault()
                            }
                        },
                        {
                            key: "renderRechargeItem",
                            value: function () {
                                var e = this.props,
                                    t = e.balance,
                                    n = e.sourceUuid,
                                    o = e.chapterModel,
                                    r = this.state.productList;
                                if (r && r.length > 0) return k.a.createElement(Ce, {
                                    count: this.count,
                                    productList: r,
                                    vmBalance: t,
                                    sourceUuid: n,
                                    articleUuid: o.articleUuid
                                })
                            }
                        },
                        {
                            key: "renderBuyBtn",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.theme,
                                    o = t.payType,
                                    r = t.chapterModel,
                                    a = t.vipPrice,
                                    i = t.sourceUuid,
                                    s = this.state,
                                    c = s.autoPurchase,
                                    u = s.autoPurchaseControl,
                                    l = s.unlockLink,
                                    h = s.unlockText,
                                    d = 0 !== c,
                                    p = 1 === o ? r.price : a;
                                return k.a.createElement("div", {
                                    className: "m-action"
                                }, k.a.createElement("div", {
                                    className: "m-btns"
                                }, k.a.createElement("a", {
                                    href: "javascript:;",
                                    className: "btn-buy btn--" + n + "-active",
                                    onClick: this.confirmBuy.bind(this, p)
                                }, "立即解锁")), k.a.createElement("a", {
                                    className: "link-vip",
                                    href: l,
                                    "data-log": X()({
                                        dot: "a1-43",
                                        message: {
                                            sourceUuid: i,
                                            articleUuid: r.articleUuid
                                        }
                                    })
                                }, k.a.createElement("b", {
                                    className: "icon-crown"
                                }), k.a.createElement("span", null, h)), 1 == o && 1 == u && k.a.createElement("p", {
                                    className: "autobuy"
                                }, k.a.createElement("input", {
                                    id: "J_autoBuy",
                                    className: "checkbox",
                                    type: "checkbox",
                                    onChange: function () {
                                        return e.updateAutoPurchase(0 === c ? 1 : 0)
                                    },
                                    checked: d
                                }), k.a.createElement("label", {
                                    htmlFor: "J_autoBuy"
                                }, k.a.createElement("span", {
                                    className: "icon-checkbox"
                                }), k.a.createElement("span", null, "阅读到本书后续章节时自动解锁，不再提醒"))))
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.sourceUuid,
                                    o = e.chapterModel,
                                    r = e.balance,
                                    a = e.hongbao,
                                    i = e.payType,
                                    s = e.vipPrice,
                                    c = e.goRecentFreeChapter,
                                    u = this.state,
                                    l = (u.productList, u.showRechargeLayer),
                                    h = 1 == i ? o.price : s,
                                    d = r + a >= h,
                                    p = this.inActivity ? "m-layer m-layer-activity" : "m-layer";
                                return k.a.createElement("div", {
                                    className: "m-chapter-buy"
                                }, k.a.createElement("div", {
                                    className: "m-layer-container",
                                    onTouchMove: this.preventScroll
                                }, k.a.createElement("div", {
                                    className: "m-mask"
                                }), k.a.createElement("div", {
                                    className: p,
                                    style: {
                                        display: d || l ? "block" : "none"
                                    }
                                }, this.inActivity && !d && k.a.createElement("div", {
                                    className: "m-header-activity f-cb"
                                }, k.a.createElement("img", {
                                    className: "f-fl",
                                    src: n("Bgm3")
                                }), k.a.createElement("span", {
                                    className: "text"
                                }, "限时活动")), k.a.createElement("div", {
                                    className: "m-info"
                                }, k.a.createElement("h3", null, k.a.createElement("a", {
                                    className: "link-return",
                                    href: "javascript:;",
                                    onClick: c
                                }, k.a.createElement("b", null), k.a.createElement("span", null, "上一章")), k.a.createElement("span", null, "支持作者创作，解锁后继续阅读")), d && k.a.createElement("p", {
                                    className: "tip-buy"
                                }, "*已解锁的章节不会重复解锁"), this.count >= 1 && k.a.createElement("div", {
                                    className: "f-fr"
                                }, k.a.createElement("a", {
                                    className: "link-feedback",
                                    "data-log": X()({
                                        dot: "a1-59",
                                        message: {
                                            sourceUuid: t,
                                            articleUuid: o.articleUuid
                                        }
                                    }),
                                    href: "/route/feedback.do?sourceUuid=" + t + "&articleUuid=" + o.articleUuid
                                }, "充值遇到问题？")), k.a.createElement("p", {
                                    className: "price"
                                }, 1 == i ? "解锁本章: " : "解锁本书: ", k.a.createElement("em", null, h), "阅点"), k.a.createElement("p", null, k.a.createElement("span", {
                                    className: "balance"
                                }, "阅点余额: ", k.a.createElement("em", null, r), "阅点"), a > 0 && k.a.createElement("span", {
                                    className: "hongbao"
                                }, "红包余额: ", k.a.createElement("em", null, a), "阅点"))), d ? this.renderBuyBtn() : this.renderRechargeItem(), k.a.createElement("p", {
                                    className: "m-tip"
                                }, "*虚拟商品购买后不可退换"))))
                            }
                        }]),
                    t
            }(w.Component), g.defaultProps = {
                theme: "light",
                sourceUuid: "",
                chapterModel: {},
                payType: 0,
                balance: 0,
                hongbao: 0,
                vipPrice: 0,
                goRecentFreeChapter: function () {}
            }, y),
            Ae = n("oBB5"),
            je = (n("KuyY"), function (e) {
                var t = e.bookItem,
                    n = N()(e, ["bookItem"]);
                return k.a.createElement("li", {
                    className: "m-bookItemLastPage"
                }, k.a.createElement("a", {
                    className: "link f-cb",
                    href: "/book/reader.do?sourceUuid=" + t.sourceUuid,
                    "data-log": n["data-log"]
                }, k.a.createElement("img", {
                    className: "bookCover f-fl",
                    src: t.cover + "?imageView&thumbnail=150y210",
                    srcSet: t.cover + "?imageView&thumbnail=150y210 2x," + t.cover + "?imageView&thumbnail=225y315 3x"
                }), k.a.createElement("div", {
                    className: "bookDesc"
                }, k.a.createElement("h3", null, t.title), k.a.createElement("div", {
                    className: "detail"
                }, k.a.createElement("span", {
                    className: "author"
                }, t.author), k.a.createElement("span", {
                    className: "readCount"
                }, "/", t.totalCount, "字")), k.a.createElement("p", {
                    className: "desc"
                }, Object(q.b)(t.description || "")))))
            }),
            Ne = je,
            Re = (n("BYR9"), function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this, e)),
                        o = e.bookInfo,
                        r = o.createBy,
                        a = o.gender,
                        i = o.categoryId,
                        s = "publish";
                    return 1 === r && (s = 1 === a ? "male" : "female"),
                        n.categoryLink = "/category.do?channel=" + s + "&category=" + i,
                        n.state = {
                            bookList: []
                        },
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            Object(G.a)({
                                dot: "a1-49",
                                message: {
                                    sourceUuid: this.props.bookInfo.sourceUuid
                                }
                            }),
                                this.fetchBookList()
                        }
                    },
                        {
                            key: "fetchBookList",
                            value: function () {
                                var e = this,
                                    t = this.props.bookInfo,
                                    n = t.categoryId,
                                    o = t.gender;
                                Object(F.a)("/book/recommend.json", {
                                    categoryId: n,
                                    gender: o
                                }).then(function (t) {
                                    t.books && t.books.length > 0 && e.setState({
                                        bookList: t.books
                                    })
                                })
                            }
                        },
                        {
                            key: "renderBookList",
                            value: function (e, t) {
                                return (e || []).map(function (e, n) {
                                    return k.a.createElement(Ne, {
                                        key: e.sourceUuid + n,
                                        bookItem: e,
                                        "data-log": X()({
                                            dot: "a1-47",
                                            message: {
                                                sourceUuid: t,
                                                pos: n
                                            }
                                        })
                                    })
                                })
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.bookInfo,
                                    t = e.bookStatus,
                                    n = e.category,
                                    o = e.sourceUuid,
                                    r = this.state.bookList,
                                    a = 1 == t,
                                    i = a ? "img img-end" : "img img-continue";
                                return k.a.createElement("div", {
                                    className: "m-page-last"
                                }, k.a.createElement("div", {
                                    className: "top"
                                }, k.a.createElement("div", {
                                    className: i
                                }), k.a.createElement("p", null, a ? "作品已经读完，下方更精彩~" : "未完待续，人家后面还有~"), k.a.createElement("div", {
                                    className: "nav"
                                }, k.a.createElement("a", {
                                    href: "/index.do",
                                    className: "btn-s",
                                    "data-log": X()({
                                        dot: "a1-44",
                                        message: {
                                            sourceUuid: o
                                        }
                                    })
                                }, k.a.createElement("i", {
                                    className: "icon icon-home"
                                }), k.a.createElement("span", null, "首页")), k.a.createElement("a", {
                                    href: "/history.do",
                                    className: "btn-s",
                                    "data-log": X()({
                                        dot: "a1-45",
                                        message: {
                                            sourceUuid: o
                                        }
                                    })
                                }, k.a.createElement("i", {
                                    className: "icon icon-history"
                                }), k.a.createElement("span", null, "阅读历史")), k.a.createElement("a", {
                                    href: "/catalog.do?sourceUuid=" + o,
                                    className: "btn-s",
                                    "data-log": X()({
                                        dot: "a1-46",
                                        message: {
                                            sourceUuid: o
                                        }
                                    })
                                }, k.a.createElement("i", {
                                    className: "icon icon-catalog"
                                }), k.a.createElement("span", null, "目录")))), k.a.createElement("div", {
                                    className: "bottom"
                                }, k.a.createElement(fe.a, {
                                    title: {
                                        name: "同类好书推荐"
                                    }
                                }), k.a.createElement("ul", null, this.renderBookList(r, o)), k.a.createElement("a", {
                                    href: this.categoryLink,
                                    className: "btn-l",
                                    "data-log": X()({
                                        dot: "a1-48",
                                        message: {
                                            sourceUuid: o
                                        }
                                    })
                                }, "更多", n)))
                            }
                        }]),
                    t
            }(w.Component)),
            Se = (n("vxkz"), function () {
                return k.a.createElement("div", {
                    className: "m-page-loading"
                })
            }),
            Me = Se,
            _e = (n("Ty6/"), function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this));
                    return n.state = {
                        show: !1
                    },
                        n.jumpToPage = n.jumpToPage.bind(n),
                        n.hidePopUp = n.hidePopUp.bind(n),
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "jumpToPage",
                        value: function () {
                            var e = this.props.config,
                                t = e.targetUrl,
                                n = e.fromLoc,
                                o = e.clickLoggerObj;
                            Object(G.a)(o),
                                setTimeout(function () {
                                    n && (t = t.split("#")[0] + (t.indexOf("?") > -1 ? "&from=" : "?from=") + n),
                                        location.href = t
                                }, 200)
                        }
                    },
                        {
                            key: "hidePopUp",
                            value: function () {
                                var e = this.props.config.closeLoggerObj;
                                Object(G.a)(e),
                                    this.setState({
                                        show: !1
                                    })
                            }
                        },
                        {
                            key: "onImageLoad",
                            value: function () {
                                var e = this,
                                    t = this.props.config.imageUrl;
                                if (t && "" != t) {
                                    var n = new Image;
                                    n.onload = function () {
                                        e.setState({
                                            show: !0
                                        })
                                    },
                                        n.src = t
                                }
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.onImageLoad()
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.state.show,
                                    t = this.props.config,
                                    n = t.imageUrl,
                                    o = t.targetUrl;
                                return k.a.createElement("div", {
                                    className: "m-popup",
                                    style: e ? {} : {
                                        display: "none"
                                    }
                                }, k.a.createElement("div", {
                                    className: "m-mask"
                                }, k.a.createElement("div", {
                                    className: "inner"
                                }, k.a.createElement("a", {
                                    className: "m-pic",
                                    href: "javascript:;",
                                    onClick: o ? this.jumpToPage : ""
                                }, k.a.createElement("img", {
                                    src: n
                                })), k.a.createElement("div", {
                                    className: "icon-close",
                                    onClick: this.hidePopUp
                                }))))
                            }
                        }]),
                    t
            }(w.Component)),
            Ie = function (e) {
                function t(e) {
                    _()(this, t);
                    var n = B()(this, (t.__proto__ || S()(t)).call(this, e));
                    return n.state = {
                        popUpType: void 0
                    },
                        n.activityConfig = {},
                        n
                }
                return H()(t, e),
                    D()(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.controlPopup()
                        }
                    },
                        {
                            key: "controlPopup",
                            value: function () {
                                var e = this;
                                Y.a.get("N_reader_popup") || Object(F.a)("/activity/popup.json", {}).then(function (t) {
                                    if (0 == t.code) {
                                        e.activityConfig = t.activity || {};
                                        var n = e.activityConfig,
                                            o = n.id,
                                            r = n.imageUrl,
                                            a = n.vip,
                                            i = 6;
                                        if (r) {
                                            var s = e.props,
                                                c = s.sourceUuid,
                                                u = s.articleUuid;
                                            Object(G.a)({
                                                dot: "a1-32",
                                                message: {
                                                    id: o,
                                                    sourceUuid: c,
                                                    articleUuid: u
                                                }
                                            }),
                                                e.activityConfig.clickLoggerObj = {
                                                    dot: "a1-33",
                                                    message: {
                                                        id: o,
                                                        sourceUuid: c,
                                                        articleUuid: u
                                                    }
                                                },
                                                e.activityConfig.closeLoggerObj = {
                                                    dot: "a1-34",
                                                    message: {
                                                        id: o,
                                                        sourceUuid: c,
                                                        articleUuid: u
                                                    }
                                                },
                                                e.activityConfig.fromLoc = "a1-32",
                                                e.setState({
                                                    popUpType: z.e.ACTIVITY
                                                })
                                        } else e.setState({
                                            popUpType: void 0
                                        }),
                                        a || (i = 0);
                                        var l = (new Date).getTime(),
                                            h = new Date(l + 24 * i * 3600 * 1e3),
                                            d = new Date(h.getFullYear(), h.getMonth(), h.getDate(), 23, 59, 59);
                                        Y.a.set("N_reader_popup", !0, {
                                            expires: d
                                        })
                                    }
                                })
                            }
                        },
                        {
                            key: "renderPopUps",
                            value: function () {
                                switch (this.state.popUpType) {
                                    case void 0:
                                        return;
                                    case z.e.ACTIVITY:
                                        return k.a.createElement(_e, {
                                            config: this.activityConfig
                                        });
                                    default:
                                        return
                                }
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                return k.a.createElement("div", null, this.renderPopUps())
                            }
                        }]),
                    t
            }(w.Component),
            De = (n("Dqzp"), n("aeD6"), Object(ee.a)(b = function (e) {
                function t() {
                    _()(this, t);
                    var e = B()(this, (t.__proto__ || S()(t)).call(this)),
                        n = Object(q.h)();
                    return e.forceFollow = 0,
                        "forceFollow" in n ? (e.forceFollow = n.forceFollow, sessionStorage.setItem("N_reader_forceFollow", n.forceFollow)) : e.forceFollow = parseInt(sessionStorage.getItem("N_reader_forceFollow")) || 0,
                        e.initIsContinue(n),
                        e.state = {
                            action: "loading",
                            theme: localStorage.getItem("N_reader_theme") || "light",
                            articleUuid: n.articleUuid || "",
                            content: "",
                            qrCodeUrl: "",
                            chapterModel: {},
                            bookInfo: {},
                            accountInfo: {},
                            errorType: ""
                        },
                        e.sourceUuid = n.sourceUuid || "",
                        e.autoPurchase = 0,
                        e.isForward = !0,
                        e.iosUrl = window.location.href,
                        e.link = n.link,
                        e.count = n.count || 0,
                        e.fromRecharge = n.fromRecharge || 0,
                        e.startChapterRead = !1,
                        e.goRecentFreeChapter = e.goRecentFreeChapter.bind(e),
                        Y.a.remove("N_expireCoupon", {
                            path: "/"
                        }),
                        e
                }
                return H()(t, e),
                    D()(t, [{
                        key: "initIsContinue",
                        value: function (e) {
                            this.isContinue = "isContinue" in e ? e.isContinue : 0
                        }
                    },
                        {
                            key: "fetchBookInfo",
                            value: function (e, t) {
                                var n = this,
                                    o = this.sourceUuid,
                                    r = (this.iosUrl, this.state.articleUuid);
                                Object(F.a)("/book/info.json", {
                                    sourceUuid: o,
                                    articleUuid: r
                                }).then(function (t) {
                                    if (-100 === t.code) n.setState({
                                        action: "error",
                                        errorType: z.b.BOOK_NOT_FOUND
                                    });
                                    else if (0 === t.code && t.book) {
                                        var o = t.book;
                                        Object(q.a)(o.title);
                                        var a = "";
                                        n.link ? t.progress ? a = t.progress : r && (a = r) : r ? a = r : t.progress && (a = t.progress),
                                            n.setState({
                                                articleUuid: a,
                                                bookInfo: o
                                            }, function () {
                                                e("fetchBookInfo")
                                            })
                                    }
                                }).
                                catch (function (e) {
                                    throw new Error("请求失败")
                                })
                            }
                        },
                        {
                            key: "sendReadStartLog",
                            value: function () {
                                this.startChapterRead || (this.startChapterRead = !0, Object(G.a)({
                                    dot: "a1-29",
                                    message: {
                                        sourceUuid: this.sourceUuid,
                                        articleUuid: this.state.articleUuid
                                    }
                                }))
                            }
                        },
                        {
                            key: "sendReadEndLog",
                            value: function () {
                                this.startChapterRead && (this.startChapterRead = !1, Object(G.a)({
                                    dot: "a1-31",
                                    message: {
                                        sourceUuid: this.sourceUuid,
                                        articleUuid: this.state.articleUuid
                                    }
                                }))
                            }
                        },
                        {
                            key: "fetchContent",
                            value: function () {
                                var e = this,
                                    t = this.sourceUuid,
                                    n = this.forceFollow,
                                    o = this.isContinue,
                                    r = this.state.bookInfo.payType,
                                    a = {
                                        sourceUuid: t,
                                        articleUuid: this.state.articleUuid,
                                        forceFollow: n,
                                        isContinue: o
                                    };
                                this.fromRecharge || 1 !== r || 1 !== this.autoPurchase || (a.forceAutoPurchase = 1),
                                    Object(G.a)({
                                        dot: "a3-1",
                                        message: {
                                            sourceUuid: t,
                                            articleUuid: this.state.articleUuid
                                        }
                                    }),
                                    Object(F.d)("/book/content.json", {}, a).then(function (t) {
                                        e.fromRecharge = 0;
                                        var n = t.bookNavBar,
                                            o = t.content,
                                            r = t.qrCodeUrl,
                                            i = t.isAutoPurchased,
                                            s = n || {},
                                            c = s.currentChapter,
                                            u = N()(s, ["currentChapter"]);
                                        switch (t.code) {
                                            case -100:
                                                e.setState({
                                                    action: "error",
                                                    errorType: z.b.BOOK_NOT_FOUND
                                                });
                                                break;
                                            case -101:
                                                e.setState({
                                                    action: "chapterBuy",
                                                    articleUuid: c.articleUuid,
                                                    navChapters: u,
                                                    content: o,
                                                    chapterModel: c,
                                                    qrCodeUrl: r || ""
                                                });
                                                break;
                                            case -102:
                                                window.location.replace(t.redirectUrl);
                                                break;
                                            case 0:
                                                a.forceAutoPurchase && i && e.updateTradeInfo(c.price),
                                                    V.pageDidReload(e.props.location.key),
                                                    V.onEnter(e.props.location.key),
                                                    e.setState({
                                                        action: "content",
                                                        articleUuid: c.articleUuid,
                                                        navChapters: u,
                                                        content: o,
                                                        chapterModel: c,
                                                        qrCodeUrl: r || ""
                                                    });
                                                break;
                                            case -200:
                                                e.setState({
                                                    action: "chapterBuy",
                                                    articleUuid: c.articleUuid,
                                                    navChapters: u,
                                                    content: o,
                                                    chapterModel: c,
                                                    qrCodeUrl: r || ""
                                                });
                                                break;
                                            case -401:
                                                break;
                                            default:
                                                e.setState({
                                                    action: "error",
                                                    errorType: z.b.REQUEST_ERROR
                                                })
                                        }
                                    }).
                                    catch (function (t) {
                                        e.setState({
                                            action: "error",
                                            errorType: z.b.REQUEST_ERROR
                                        })
                                    })
                            }
                        },
                        {
                            key: "fetchTradePending",
                            value: function (e, t) {
                                var n = this,
                                    o = this.sourceUuid;
                                Object(F.a)("/trade/pending.json", {
                                    sourceUuid: o
                                }).then(function (t) {
                                    if (0 === t.code) {
                                        var o = (t.code, t.msg, t.autoPurchase),
                                            r = N()(t, ["code", "msg", "autoPurchase"]);
                                        r.balance = parseInt(r.balance),
                                            r.hongbao = parseInt(r.hongbao),
                                            n.autoPurchase = o,
                                            n.setState({
                                                accountInfo: r
                                            }),
                                        e && e("fetchTradePending")
                                    }
                                }).
                                catch (function (e) {
                                    throw new Error("请求失败")
                                })
                            }
                        },
                        {
                            key: "updateAutoPurchase",
                            value: function (e, t) {
                                var n = t.showToast,
                                    o = void 0 === n || n,
                                    r = t.callback;
                                this.autoPurchase = e,
                                    Object(F.d)("/user/book/updateConfig.json", {}, {
                                        sourceUuid: this.sourceUuid,
                                        autoPurchase: e
                                    }).then(function (t) {
                                        0 === t.code && (r && r(), o && Object($.a)({
                                            text: e ? "已打开自动购买" : "已关闭自动购买"
                                        }))
                                    })
                            }
                        },
                        {
                            key: "updateTradeInfo",
                            value: function (e) {
                                var t = this.state.accountInfo,
                                    n = t.balance,
                                    o = t.hongbao;
                                o >= e ? o -= e : (n = n + o - e, o = 0),
                                    this.setState({
                                        accountInfo: A()({}, this.state.accountInfo, {
                                            balance: n,
                                            hongbao: o
                                        })
                                    })
                            }
                        },
                        {
                            key: "handleChapterIndexChange",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = this.sourceUuid,
                                    o = this.state,
                                    r = o.articleUuid,
                                    a = o.navChapters;
                                e *= 1;
                                var i = r;
                                if (0 !== e && (this.isForward = e > 0, i = e > 0 ? a.nextChapter : a.preChapter), e < 0 && !i) return void Object($.a)({
                                    text: "已经是第一章啦"
                                });
                                if (e > 0 && !i) return this.leaveCurrentChapter(),
                                    void this.setState({
                                        action: "last"
                                    });
                                var s = "/book/reader.do?sourceUuid=" + n + "&articleUuid=" + i;
                                0 === e && (this.isContinue && (s += "&isContinue=" + this.isContinue), this.fromRecharge && (s += "&fromRecharge=" + this.fromRecharge), this.count && (s += "&count=" + this.count)),
                                    t ? this.props.history.replace(s) : this.props.history.push(s)
                            }
                        },
                        {
                            key: "goRecentFreeChapter",
                            value: function () {
                                var e = this.state.navChapters.preFreeChapter;
                                if (e) {
                                    var t = "/book/reader.do?sourceUuid=" + this.sourceUuid + "&articleUuid=" + e;
                                    this.props.history.push(t)
                                } else Object($.a)({
                                    text: "已经是第一章啦"
                                })
                            }
                        },
                        {
                            key: "handleThemeChange",
                            value: function (e) {
                                localStorage.setItem("N_reader_theme", e),
                                    document.querySelector("body").className = document.querySelector("body").className.replace(/theme--\w*/, "theme--" + e),
                                    this.setState({
                                        theme: e
                                    })
                            }
                        },
                        {
                            key: "updateReader",
                            value: function () {
                                this.fetchContent()
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function (e) {
                                var t = this;
                                this.leaveCurrentChapter();
                                var n = Object(q.h)();
                                this.initIsContinue(n),
                                n.articleUuid && this.setState({
                                    action: "loading",
                                    articleUuid: n.articleUuid
                                }, function () {
                                    return t.updateReader()
                                })
                            }
                        },
                        {
                            key: "disableCopy",
                            value: function () {
                                document.oncontextmenu = function () {
                                    return !1
                                },
                                    document.body.oncopy = function () {
                                        return !1
                                    },
                                    document.onselectstart = function () {
                                        return !1
                                    }
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function () {
                                var e = this.props.location.key;
                                V.pageWillReload(e)
                            }
                        },
                        {
                            key: "leaveCurrentChapter",
                            value: function () {
                                V.onLeave(this.props.location.key),
                                    this.sendReadEndLog()
                            }
                        },
                        {
                            key: "unloadHandler",
                            value: function () {
                                var e = this;
                                window.onunload = function () {
                                    V.onLeave(e.props.location.key),
                                        Object(G.d)({
                                            dot: "a1-31",
                                            message: {
                                                sourceUuid: e.sourceUuid,
                                                articleUuid: e.state.articleUuid
                                            }
                                        })
                                }
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this,
                                    t = new C.a(this.fetchBookInfo.bind(this)),
                                    n = new C.a(this.fetchTradePending.bind(this));
                                C.a.all([t, n]).then(function (e) {
                                    J.a.trigger("chapterIndexChange", 0, !0)
                                }).
                                catch (function (t) {
                                    e.setState({
                                        action: "error",
                                        errorType: z.b.REQUEST_ERROR
                                    })
                                }),
                                    this.disableCopy(),
                                    this.unloadHandler(),
                                    document.querySelector("body").className = document.querySelector("body").className + " theme--" + this.state.theme,
                                    J.a.on("chapterIndexChange", function (t, n) {
                                        return e.handleChapterIndexChange(t, n)
                                    }),
                                    J.a.on("autoPurchaseChange", function (t, n) {
                                        return e.updateAutoPurchase(t, n)
                                    }),
                                    J.a.on("tradeInfoUpdate", function (t) {
                                        return e.updateTradeInfo(t)
                                    }),
                                    J.a.on("themeChange", function (t) {
                                        return e.handleThemeChange(t)
                                    })
                            }
                        },
                        {
                            key: "renderLoadingPage",
                            value: function () {
                                return k.a.createElement(Me, null)
                            }
                        },
                        {
                            key: "renderContent",
                            value: function () {
                                var e = this.state,
                                    t = e.theme,
                                    n = e.bookInfo,
                                    o = e.chapterModel,
                                    r = e.content,
                                    a = e.qrCodeUrl;
                                return k.a.createElement(we, {
                                    theme: t,
                                    bookInfo: P()({
                                        autoPurchase: this.autoPurchase || 0
                                    }, n),
                                    chapterModel: o,
                                    content: r,
                                    qrCodeUrl: a,
                                    isForward: this.isForward,
                                    logCallback: this.sendReadStartLog.bind(this)
                                })
                            }
                        },
                        {
                            key: "renderChapterBuy",
                            value: function () {
                                var e = this.sourceUuid,
                                    t = this.goRecentFreeChapter,
                                    n = this.state,
                                    o = n.theme,
                                    r = n.chapterModel,
                                    a = n.accountInfo,
                                    i = n.bookInfo,
                                    s = n.content;
                                return [k.a.createElement(we, {
                                    type: "chapterBuy",
                                    theme: o,
                                    bookInfo: P()({
                                        autoPurchase: this.autoPurchase || 0
                                    }, i),
                                    chapterModel: r,
                                    content: s,
                                    isForward: this.isForward
                                }), k.a.createElement(Ue, P()({
                                    theme: o,
                                    sourceUuid: e,
                                    chapterModel: r,
                                    payType: i.payType,
                                    vipPrice: i.vipPrice
                                }, a, {
                                    autoPurchase: this.autoPurchase,
                                    goRecentFreeChapter: t
                                }))]
                            }
                        },
                        {
                            key: "renderLastPage",
                            value: function () {
                                var e = this.state.bookInfo;
                                return k.a.createElement(Re, {
                                    bookInfo: e
                                })
                            }
                        },
                        {
                            key: "renderErrorPage",
                            value: function () {
                                var e = this.state,
                                    t = e.theme,
                                    n = e.errorType;
                                return k.a.createElement(Ae.a, {
                                    theme: t,
                                    type: n
                                })
                            }
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.state,
                                    t = e.action,
                                    n = e.theme,
                                    o = e.articleUuid;
                                return k.a.createElement("div", {
                                    className: "g-wrap theme--" + n,
                                    id: "readerApp"
                                }, "loading" === t && this.renderLoadingPage(), "content" === t && this.renderContent(), "chapterBuy" === t && this.renderChapterBuy(), "last" == t && this.renderLastPage(), "error" == t && this.renderErrorPage(), k.a.createElement(Ie, {
                                    sourceUuid: this.sourceUuid,
                                    articleUuid: o
                                }))
                            }
                        }]),
                    t
            }(w.Component)) || b),
            Le = Object(x.d)(De),
            Be = (n("8nng"), n("NHKQ"), n("1lB/"), "pushState" in window.history),
            We = k.a.createElement(x.a, {
                forceRefresh: !Be
            }, k.a.createElement(x.b, {
                path: "/book/reader.do",
                component: Le
            }));
        Object(E.render)(We, document.getElementById("root"))
    },
    ANGC: function (e, t) {},
    BEQ0: function (e, t, n) {
        e.exports = n("+qWx")(3)
    },
    "BK/k": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        }),
            n.d(t, "b", function () {
                return i
            });
        var o = n("VkW9"),
            r = n.n(o),
            a = new r.a,
            i = a.get("XSRF-TOKEN")
    },
    BYR9: function (e, t) {},
    Bgm3: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAABQCAMAAAAtDPxEAAADAFBMVEUAAAA2FxA4GBI2GBI3GBMbAAA3GRM2GBMIEAgfAAA4GBIzFgw3GRM2FxAxEwoYAAApDAM2GRM1FhE2GBE2FxIzFRA2GBI3GBI3GBE3GBI3GBE1Fg83GRI3GBIuEAkxEQo3FxE2FQ84GBM3GRM0FRA1FxHbQg02GRM2GBIyEwwlEgE3GRI1Gw8aAAA3GRI1FhE2FxE3GRPuWCO/KQTvYCI3GRM3FxE3FxA2GBI1FQ43GBI1FxAuEgnoUBY3GBI1FxE2FxIzFQ0nAgD1aCz0YygvDgnyWyA2GBE3FxH1bjb1dj82GBL1Ww71aSn1Ww7yXRkzEw0pDgL1XA/2dD30XRH1bC82GBI2GBHzWxHzazE2Fw70Zy/xaTX2d0H2dj/1aCn1d0L0XhM2GRP1XxX1dD30XxfzYBr1cDjxWRX0XRD0WxH1XA71bzT1ZiX2dT71XhU2GBH0XBD1cjv0cDkzEw0zEgwsFgH1Xxb0XQ/2dT/2dj/1YBj1dDvzWQ31YBf2cTj0XA30bC71cTg3FxD1dj/1ay31dj/1ZCD1bTD1ZCH2d0D0bjP0Yhv1bjP1cTb1dkD1ai31XQ/7/v/////3s5r5///////2kmr61sr3nH3///84GhT///86GxT1ZCH1Yx31ayz1Xxb2d0H1XhH1ZiP1bjL1XxT1YRf1bTD1cjj1cTf2dkD1aSn1ZyY7GxX1ZB71Yhr2czn1XQ/1ain1aCb2dD31cDb1bC/1Yh31XRH2dT31aCj2eEL1bC31YRr2dT/1cDT1ay72dDv1bjH/+/r2czv1bzX5sJb1aSv1ZyT//f/2gE71cjr//v3+8/H2fUr1XA36wa71XxH2ekP95dz3j2b++Pf1Wwz6zLn2e0b1Yx/96eP1XRP3j2j718v2h1r82c72gVL1Zib71Mj2gE3+9/X5t6D3jWP2il74oYH6xLH3lGz2ilv2hFb85Nn6v6v+8u/+8e797ej839f83NH7zbv96+X95t/+9fP4rJD4qIj3m3f7z7/6ybb5vKb+8vBaA+CsAAAAm3RSTlMAW/v6vAj+5wMHqi32Sh0LE9SIZshu3rWf8WlE7eQhH1c48/iEiwb0wSkOsTMKnIKS1w4DG9tVUcxA0nwbCq6acy8MRhcXE5ZgM8ul9MuXNCcQ497Sv7h3Pzw7LCL79PDv7tnKg2lPTSRwW/vo49esj4NkWiUjEd2/qqN7cSj49qekd0fp25yZ+Pe9mI6Js5RitOZ8Yicb6dy+o+n/bl0AABuiSURBVHja7Jt5TBRXHICnVM7WowgIVUQFKaVaqGAFD+qBXKaphlijFUoaUvuHJcYrwZgYzxiN2vROYZvNxk32QJKN3d1mWcKy6y6kAsasNlJjEU1VpLSKR632+r15x7zZHXCRUrH4uXO89+a9Pb5556Dw5JA8Ky83NzMzNzdv1oJkYdBkzMpcsn3fgYqyUm9JWXHRtvJ1a/OShacMM3IL1yFLe0pLvCWlxUWVRzaufmeWMAjWLik/UOr12jm8JUVHNhU+lT+MWLu9sqisHbCDKo0d9nDuLT5wZN0C4ZHI21hZ7G0XvWvgH3tBwWUHdr0jPGU4kLxkX0UJiLaLaIgrrL+sqHytMGAyy4tKoTyiG4HKFM9BfrumYluh8JTHTe6molK7V9TNNBFTgNerKdu2esEAve/ReLFlsjHwm8DblW4rzBCe8hjJ21SErStqwv+8JQOponkbK6C2+yEvHgothcbkKY8N8O5lNozoxcPC7WXbAu2a18GdZMR5W/QUeZHofYzgvmL7yBjrhc8kBIcJgyKM4hMaOLn7yqB6ehF2wIiVMJgopKl4eyCt84JdZV4oAxVi7jx3hnD7lJGWhdJowFtSmRngVw6eSQjv76oB/RbBzIcwxORPewkTNx4FU7dMJqT63CGTKUsVv8GY6fnpIvO2Qig7HZP/ojBg1lUg2013ziHu/NppAx0AlURf2JS95MjDNa2t1NiNGI27u7WacLFdLImViTdU74tWC4EwJ/QlzLScfqpWdH46ZsMa4aHMz6I+QscKQ0tsbRUmSJSU/V4MYYMgY3QMJSlY8VeoVYnURqBbZqGKhFIGvMyyscwOAuy9RM8vxgaspcEJmM1mp3hEL3xmW/mW0D+FRXbITtTb71Dx33WZjX1g37NJCIApL1VhVBP6qcQptSpMVQDVYMwLKlLm8/+x+cVZNBw3WuBZRj9RreLnD0+n6VNQcHoVYZkwMGbtE2u4ufsE0XNa34Aw2k6dvaBM9xeffvbZ50KfLNljbzA2wMsIe/PZ76n5Wz0tRLSYhjdyrikpzwjA/LRAzI9S0V94/HA2LywMot/m7TDebAx1OWmqoMC42SRX6MvifUKvnj5A8ZV2DRKkv0La5NYuNwTBheXBjTbKDQoO3rv38cdf9d15gHgEtu++TsW33rcYG2zINEAOZI/esGRXxggzv4IpjlvDN/Zx9EtGrRAUyJbfLykkmPjiwMRvs+Pf3nKZ+GlrB+s2o63BcPYc5Y+b1N6Pf5KoLz/pu8aDX/gHLxBqunaD5j3fo2+wQQpOxRsNA0bzroyRZV5Ip+ZVadyIdXoIiQ1JF5RIoqWkid92Nr17sgfY1OOf3915nvi5rIEgwua2EDztP5LEE2cbcZRhfV/98upio9lGMNvMluvfUfN/GsxmFIWT8K4BHzAlG0eY+eXPUvWhy6XGPEpFG3vFASprKeIno+CWePrxX41UokB5uXYbaDajl+c+7Y3vIw9IkbiJye5TF6n5bguONBtL1ymP6os1ZgCyiTvL1TZW5U/q3aYWd4vJ2eI0AU63yW2CANpa3BB0OndsHFnmw3Poe6uipcY8roqQojinez1RNqKbE0cLnSSDNhyvKI7qy0GOiE1Le+O2Dj2OxPrFemvizHuwU2iciwuVGpHDkMpwmoxQLuG3X0/3wa+E003rC0eUeWGOys9yWFotjXtGcbEih/YFE8XwKjpMHPUcz+uhJDpJcShWSjXpO38jfu60m5g3Jz7KzTOttqJcwY9ym1OaC5qdhu57VPxPbX1xr5XdHKbDs0aU+YQsNgGdQaI2x6sILyiO75bHy++VWJXi0H73JBIdLfjzTrHNDYLcTrdbC3M6TJfHCVEQhxLIqZ4zr8VJKKOtMtlvEXiHG4EacrElb79Fpbbdv3pWmatdvfSiM1rbocGbD3tyzIc9E/sqgY7PZtCY2DmCEtGkjqsKyOKFSrGFWEiHEAqlJFfawI+oscV8pRpz85rHaRK7YdQLg0I4kZsXbwaIhESzb7ecW2QjGeEAZVh+Z9X5L4NLq0xjz3nJvHPHkoBXcsImz1Bi0dQoZj5p0YwZz6UOH/MhmGeR+bCxqYsXp46jrFiM2cpiUPJMvyVHYlo1NwE3ATEq8l0hzJFfRdgs+LERjCM/MLrSnzpDZ21mPUgF0N4NSW7Y60/9KJmHGIqtYq183LDd1mJqMaGXHu0911ht7u3Qokh9Swu8TDx6Q4dkXmdyrlzQn/m4qhARZD41Nk6ZoCpKYlzctNkTh4v5OdPTCFPRG7/6CkcEI4ePnh7u054VkE+rWogjJtLxXtRW2XUTSPsSN1/wJbMYxBMJhm66jNPUqEV1E3YWEAWaUDJf510mbK4FybWVZ8i7DydE6vX42ZzJYDhXTWnSoTwQCYnkAhNsEGXy8Ob1ph3bhb55bl4aJhLatvBnIpMUSItkCyQhE9KSklZtHi7m5SQsG8V4OypIRaia+/YoifxgQUbqXCI+fjlp1WtJRLrsHlmaRZqGUf6DhYMmPcPwRzXmbqfmQRemxyAlS/P5Czo9toYPpav57uOgU8/j6TpRzZoSKMXAykMvtBnQUW5e76zIFAbJ26y1Lxgm/XzCVMSaqZSlqFpCu86YIa3YThnHkerb6NHJWmwYvhPovLBW3p8vCiU3RH643/BuvVPScPIGXWxp7rr5E6bbgJPBjkVuHrJQnDuTuSJ3iFcjkFIHzBcINztcFovDYyHACQ56DICWNw9hp+KkfuyaqTxrlj9RY/vI518Cnk8kTBvv9ylmszWd3ULfjHvNZ0V/+SRpDT94coLIZPgeo0P6euaTscsJjgj1Ta1sie4OnWCdsqAL8MabR2GkHiftKORbESyd7M1/sgX7K+3tp5RoN/uYt0LYtDJP8GeR/Ld7PueJMj9xHrAqi30uPx8JkvnRQt+sor16Om0DaJVPSRXWxMeIxEP1j64l75Ttv9QmabIYb9Pn554OOia7orcYKA7OvJWXC5p2SgOH9RAh0XiftfUnbl0UuX0Lc/si4fI1qPU6mXlAr7Q6uDRtHhCR+CTP59+oHaT5hPfoACZ/Xtr4MOgx+Ad1E0nxtc8IqREqfjjAs92ElAOwUzNHD3S/k7N716wGUA/JcIGWW7e3Wmg8JIAladWt3EILRFgv3Kz25bfreMnubrU0VbBYePONYgmH+x4dxz3J5mMHa34hW/ILCgmJCob6EEdb/zky81toJ5DiO8BLfhMLQnuPh47vbrWzlZfLLbRXNjhk5hsluw600x+iRa40ORwO6L4dFthpjRer/biuMbQA0KMQvu/WOhwy8w6Px+LY8cFIWcMbmPkZoVUcYF76e5ysVJn512tJfKzfA7X9IIlosna00Yc1zQ9oz9zU7PEgkQgPb15tcYAd5AdOYG+i8+/C9QaIRpmgVK32CvP9Ryszb9ZpgUuceZfDY+XMqz0OVMSup+YVCI9Q+Zp/4zXMC2mCzHwajfdbuz2EHGFNWk8TXW3pUV+m7XKnDtLBIbIsNw/1GcUj0CUG2tx/pHeAVQ9saH/1fO9doLe393LHCcm8CxXImb8At4K1hzOvRZ/LsDIjQPOplLEjwPx4Jp2Zn5+AGTNWbp7FLxbkLHgTLBFcdErX+tex7hN0MF4HChk6L2de64PpI1zkQRMf297TienR2KU67/at8xesWm09Z75Zi3DsfSdA89FZhKjx/3vzL8f4m+fhzffJ6vWS+UZa5W9ebT5Hx3cnXbxGl70f846dYnO/lr+ZoCKrEfWwNXp9zLuOnpPM18MHkJtH7P8oQPOLEmlHNyr4/2I+u48+7JWqf8H8rv3YD6DT0N+998pfbVQRSlOu881+5vdmit38fpdL50Jo4aWjB8jMmTdZUaTcvIs3XwP5UZkHA+3n85m2NY9oftxcVoQg57GYV82eLCjyYtC/YX6nQ6fTaXXIVE3T3/CI/O822P/EHqX3WCENJcMedlaNZL5GJ2bDydi12NFvcqArCZDKsHKtfUs9SvmaM6/W6dSc+Tqc03E4I0DzU9nDuw3h/ZtPjVZmHhswP7tK+YqCFf+l+ffGCEpMDSUz9JhQufmCUSkiscHM/JRsEjdhke+cbqWDuak/+XMHpufBTbqGq7fKBNZL5q/W6STDRNMmtCZ4CM6toml4WdEODihYr5GZB/ox/42Yxep4My9A8ysmUMuTlvZvPiHoWUWCQqooQcoXxGwZCvMzp3NExsaxdfs3IvmUhaRlyiLJieMnqGTmI+n/swiX6vx8+vyH5GZkvonqPNGkrmuuaW5urqs52tVKfJwFvQBSJypsNErmvxFzYbAm1yF0M+10icoBZh+As3quzhvUEOVr/jhn/hjO59r7QaCzugI20yno33zwaEV2F8TQqxPnKF+SPXMozG+NiecA8YRp8TJSyFQ+CRM5XhglN7+MtAXL+NZ+Lilsmd/TGhc4oZrIqdp+hq7h6tU0EktUc+aPQRjnwTvQtDMDzRbgrB7lqEd7dF4PwKHRKDMPcObPHrdaj3dy5lFOKPLdwkDNL2KNdc6j9fPzpRFen4aHwnzY8pclNscy8xEQz+HX6/uaj6hVMJ9P/3xjrO86DvgBQAsWhA7q36mOrqONKKoR9gAcZOYhDPkgGRxhViYLwqy99SgOAVnhEjXKjcpRy8yrIf0HznxNY30dZ/4SFAEzgvrG1YGaD09hzf3mJ3hsH8GSogU5DzEfRoKqSM48awljfDr6JaKjeqZJjbaGu7TK68APRNF0cNEgmb+kBqMgB8WDVpR5LzL/LprEoYwYONKAjTN/HEV9y5tXq2sk878cJdl1SwIzD2yoYj3gEJsPf1TClM0rNzy7VwBhAZsPTiHmV/HmnyMTgbgpgox1OqaHcYk9qX1wDILILWyY47x5nMjzITavDG/+tOe42sd8nVpdNzjzU1gXGTu05rcmhjwiUQ81nz2NTTBycuDPsVaFBWp+XBYxH82bTyCrPiHzBBnvY/M8Ne20l7/NaaXmbZJ54obnXTCf16f447z5GrV/nT+mYN4VuPkxMTQqauyQmh+7LOIRSXqY+fB/qDvz3xjCMI6Pot2iFEXphVJ3nVVVNw2JNH5xkzQIQdIgcSVCIiJNE//BZmeIochuZ5nBNhsbtx23hKBxxDbaivuOxPW857w7292uxA/d77zzzvM+z/tuu/Pp3O87HQwRKtIlC9DHRZ73wKxNE8mnd6De6Tbyl3QgouMNEDIwdLnxFns869dxCEVJTHef5uSbZQiAk8WRXTEVbfO6HoSEMjde4ASG/6JA3g8ePWCRb/IEgyJ5GZqgxufiJw8jCqlyshL1ON81x2lTl3Zxkh+QTXFnCeT5QGtXn9Rw8ucwI4CAMUGm3vnGjsXH3DolqJPMRp4GCSI3KlXgvT0Ugm4owxxECeK4KJK/IKugJ78E8rrbDCPvRs3cB/+B/HS+o+yVqORHOyOUszw+8iX59JcfIJKXSontykgPP84fBDIgHc06WvivMRbNsjuI6OEgmAifYSePAtBSB9YgfJyvBGek/G6R/M+mN0gvngnk/W5VJM/aLYuffL9k5tucoOTLcizg7Zk1KT0u8sW0lD0zjPxESt52F2q2bsNkvGCdsB4FDREcmY0rAnkSAC/X/gJ0Pa+TAI3iCQSFk4w8163LVLebVLdfJF+Pm7n1igXxk89Kor7a+Y7EJD+X/+0WlUxyMnvMrHjI96tlt/tF8rwbft+RkqgFFbqfyjDQqvawI++nFzKUkSg/XMNz0iJfb/hhwnVopqPr+YJNugd9HKpPMmobnpPh23xzM8oggfX8jMcw5BsWeQU39uuV6+MnX5bPfEOHJyT5LKurzWZpYjKz8yfGQd4xiJKfPEUkD4d/PuxS1O5KAZPHbyhP2cOaRtnAuGiIFkyL/BuFUoUJG4Cpajzctz+gQ32PBzKYmIks1SL/3h9QQD5IIGSoUEkk74PWkPTyOfGTH5XCfJPLEpF8t6HgJhqbywdWg4q6tk5+ViYbUdEtjPy2IldL3fDnlOuUEF7R6oUGNtDitAkOcDFuxFCPN1jkDeYm9aC4C3fJ0T1ExM8L0Ng6wzurWjWYWiS/qCB+8h3ZeNTa3nkJSN4xI9kpukdaB/0xrZMvW0zJT3OI5PkYm9oZtmd1CBNH5/txmXJ9hcmY2M3RhQz1BCffrIATYQ+RKFj6Ogm01DBDqukh7VVohWw0qydE8qiSCY1RVViYphnSBPJe1Cjk0auk+Mmnzp1MNXRrApIv7sKP7HjcjMPqYDskLTZ5oR92baEkkBdu7Q12SKKqjFDIVD2QQqpHefyNnd6d01SiEBBSTRXmkGmqskX+TQBC0BD4kXqqWY27Tq2vBAeVSYLUIZKXwUkq8LDpu2ORD5Bo9dq4yYNmTaEqS23b5KdFkBc3cVcG2WXlFrmYp4OjNfIz2eltqUje+lmu+aMkUWurYbXjBPI3siHuzbKfikBhmMLIU2ImWxrluE/OuL2G2qLkE7breSKl8QvTZ17he4B8ZmW09yK2G5LAfW9TF1vPg5kvtzsHz1+BNojv/gdmtUZ+Hy3k9xPJC4/w+gwPP7kXNlCt6TLvjsX1WBbhhZO3yaiaSv6aDBtxSLIM8/kI8ij3/b5v6R0I8vtfAzhmlhdILWs0v/7plHjkt2fwn8Qg58FOmapvsTB4jn/L7a2QL6WFlCwb+R50Ta1Ol0SNLzdVmUzyhYYPH4n+vGT62KxgaAgSZNoZTv55DbipSBVzI330W0EidonkD9Zb7iM3kY6jjFgwCuMqjW2RomiMk6lH4pHPG+tiB/ApxDMzw8mULJyKzeDe/OWxyTsKWR+ubTbypZR8im38/C6Zy3OnBR2URWnnBfI2rmYl7SE9bk3L5DWBfFCx/D4vUQAMJhquXiBFEb/kSS5NPPID+FPFlFTiWM0RZ88QDunpKdbtHEdM8qkZtN6kjjbyPbvQFWW7NFxRbZFBa58mmAMo99bLopRY5PkF2AFZYx8JSWgskmcRDSTjmRSwjzUtHx+NKd9fDpyYeOTT+J59MeZZUsQB92Vfx/56rJyyWOT5XSzXCMlGvjjbSdTZ1gdzp0WeGZQHWTKAOFOOWOQPkSokg0ndxU8eVmlhgjhSGHkfOOrRDBkXFOrFVmqUM3t+fwKUMjPhyFs8XT3Qb1ma7eJ3cErsgyp4qGdM8mnt6ZY92k4+LTvKG5LWyXjtK5AreO1DAhtBUCgcbGDLK5A/qii0gYKjOyZITJvARaIKMupx0nyXBPJeDXwkRurCxEVsTVs4IepWk8S3hY4JR956t6ULtvDc+fy7JE3bZv8Gc/lG3yEm+SXJxM5vZyc/jF0t2neOE9ZoCp7w2iaYKAtIPsiIGy9E8oc5JpIfkLiWQtnHwtz0WuTfB70saK8qSN0QZWePXwoT482ODqpubZP8gGR+UO8qOXpmFk4nypw3KrIuixaOjkl+BLswGGYnv7U3DS2xt18L5Hy+8HXvrTl0+MmpUw/rQjJ1MngieZ/YZtVuYbTeJg17YWJhyAXy9/wBcJI79iSDxArYhkzbsT7qVrM4xk5QGl5IlZntYmpL77cf7OTk06T4FYv8cHaKuFqyk+/aO9o7MFfusDDVHDpaV3f34cPAkZs33jY9eP3qd1MNjlB8gWMW+TrsxTMk7YC4fS5d5UVOOFkH4IoXwYSzxWPiExvkhwAscDVcD4RscCNDq5KiqQR2kNHf6Znem2n1WKru/dsO+bwUp4W+1PFfyBf3JbYrM4K8YywNbZbs2rUHVju6ojpUd/rt61c/Gt9/bfj8/cPL6/ifTxwmPIhqLPJvT3mpECZtYdj2WbBFQ1cIVAF6sSCSr+EBHGIVBcU4yjvgmo4paXpZRDg3Qnmz2g75Hk5BSX/bO7NQJaIwAB+L9oVLEVEU7Za2gbZpC0llPYjGICU9ZZKkPpgQJIQh9NBLL1EE0cYwNPMSIlLBEBVEEBSBncJ6kBbaeymqh6KX/rN4rDHHaVOj+c6Z//zneP3h3s8zzl30zluw8A+Y37x8GWOUwTxwgN80AxnxJM7QL7r88P27T89rtdr168/vfXxw5/PrV9euXSI2xOa+crZpvs7O0rBOvv82XIXv2gslAQgk0lG7/M3z/BV2UhcRyoh6bHV/uv0T5azvXlA43Y060zfmA83LdSpo1hZHYOB3zTcxmDcnuf8K5eHjp2/efn798tFFjZrSNFnWrpTVCzcELxq/U7l957NY/HKunAgaaqZIAXZwwPzJBh9udOa4t+2Wn//N36fST31tYOBfMT9ikRA/bP5omp8atmb2pjG+wCgzAnusm/dZNe89WKaKrt4HKrqialyYRofqo5M3BddrnNtiCV6EFUoiA84sffCQBsAA4+XnNc71mx25fcT03ZG4onnshaWlKRPHjV/uG2VKYHM/vO+tb7T4Ma0DbVvsp+pLpdLQScPMmWfJ/AjHpk2OcacsmkfrD5c1QNV+iHz+yS1T7p7eh1pYktCMnHlGuEU6z6ABkPIIjaQwbj96DLVhlV/smpFu14R5g+jeL5VOzB1mjt/Xe/OrVohn+N3DydtfutZu3LJ06pQpk2YNNmWQ35L5gSmE0YyZna9rI5JmggqngirAAzTSKyTSBZxdjVqJxTUj8OH0TmKAQCNAq/IGKznUjuErhXj/WJi79zhmb9lh5Ws39YC5+aXiLeb/nvkZc8Yx5mx1I4Hb5fI5OjAGGRm/m5WaPPzbPf8Nm6ahjuzcr1lFNiblxC70I1L7NVmWNdI0OrLOBj6yjPTGwZbCTtSOga1zxnEWoCYu17bpDnOWb0BmDGycyFkzBP0/pGSORqOYcHdtgRv3Fto+nGRVlukBkaY8MQfEr0Y2XcKbk4UmkVnRpEkx1I5URhUVoUM1lZelc6BxG5vxQQt7kE3XcO4jWpqaeIMMBh4bCGdgSVpn/iRCbbfSsiyLUS7a4ruK91BGtahJTOBUHzO/foirDAW6ApHBEswnIlGwgtWMveO7TjqughyhiXjAMAAqbZjewESRRehwcWdOLKEqbVANGUulNLLpOuv2qthoRkxaVzEuWvg35GFMatYVRdfrLIFQ12GuiDnkvGI0gmx6QOFwRuWauAuhSVgSmtR4yok6401JKtaJZ6hJK0FoPAzqdaafLeN4eD2y6Qmr90mYmuWbkmmChFliI1iq6xjnk8gakWIIipKm07K0pIg6TaFjBSra9IxCGDRV9AYV2hWWV/gS0RRNe5BlYkUFw91JbxykQUIhg4ITafu7+J7ijGVDCmZGhKqmJhKxIuWWoJ/BA0XhbrSEgNeEA1dC0XQQ2fQYbyQrKZhJEYfe0IRxJgref+FkEg1hXGkFCu4tJu393h9EcvkfalJwRcqmfnF3BtPhvFTBtG6VdgUm8UQxtQvZ9A2rI+lwtAqAIgjQgVA+t+63LHkKsZ3hw1EplKlmQvFoPpxKRuzL+b7DGSykc8UE0UQt7Yst8Xj/QFlPcP0Swvqgx4n+L74C9zw7ia/BxpIAAAAASUVORK5CYII="
    },
    Cz50: function (e, t, n) {
        !
            function (t, n) {
                e.exports = n()
            }(0, function () {
                return function (e) {
                    function t(o) {
                        if (n[o]) return n[o].exports;
                        var r = n[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return e[o].call(r.exports, r, r.exports, t),
                            r.l = !0,
                            r.exports
                    }
                    var n = {};
                    return t.m = e,
                        t.c = n,
                        t.d = function (e, n, o) {
                            t.o(e, n) || Object.defineProperty(e, n, {
                                configurable: !1,
                                enumerable: !0,
                                get: o
                            })
                        },
                        t.n = function (e) {
                            var n = e && e.__esModule ?
                                function () {
                                    return e.
                                        default
                                } : function () {
                                    return e
                                };
                            return t.d(n, "a", n),
                                n
                        },
                        t.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        },
                        t.p = "",
                        t(t.s = 0)
                }([function (e, t, n) {
                    "use strict";

                    function o(e, t, n) {
                        g("listener called"),
                            e.success = !0,
                            t.forEach(function (t, o) {
                                n.clipboardData.setData(o, t),
                                o === k && n.clipboardData.getData(o) != t && (g("setting text/plain failed"), e.success = !1)
                            }),
                            n.preventDefault()
                    }
                    function r(e) {
                        var t = new x,
                            n = o.bind(this, t, e);
                        document.addEventListener("copy", n);
                        try {
                            document.execCommand("copy")
                        } finally {
                            document.removeEventListener("copy", n)
                        }
                        return t.success
                    }
                    function a(e, t) {
                        c(e);
                        var n = r(t);
                        return u(),
                            n
                    }
                    function i(e) {
                        var t = document.createElement("div");
                        t.setAttribute("style", "-webkit-user-select: text !important"),
                            t.textContent = "temporary element",
                            document.body.appendChild(t);
                        var n = a(t, e);
                        return document.body.removeChild(t),
                            n
                    }
                    function s(e) {
                        g("copyTextUsingDOM");
                        var t = document.createElement("div");
                        t.setAttribute("style", "-webkit-user-select: text !important");
                        var n = t;
                        t.attachShadow && (g("Using shadow DOM."), n = t.attachShadow({
                            mode: "open"
                        }));
                        var o = document.createElement("span");
                        o.innerText = e,
                            n.appendChild(o),
                            document.body.appendChild(t),
                            c(o);
                        var r = document.execCommand("copy");
                        return u(),
                            document.body.removeChild(t),
                            r
                    }
                    function c(e) {
                        var t = document.getSelection(),
                            n = document.createRange();
                        n.selectNodeContents(e),
                            t.removeAllRanges(),
                            t.addRange(n)
                    }
                    function u() {
                        document.getSelection().removeAllRanges()
                    }
                    function l(e) {
                        var t = new m.DT;
                        return t.setData(k, e),
                            t
                    }
                    function h() {
                        return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData
                    }
                    function d(e) {
                        var t = e.getData(k);
                        if (void 0 !== t) return window.clipboardData.setData("Text", t);
                        throw "No `text/plain` value was specified."
                    }
                    function p() {
                        return new v(function (e, t) {
                            var n = window.clipboardData.getData("Text");
                            "" === n ? t(new Error("Empty clipboard or could not read plain text from clipboard")) : e(n)
                        })
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var f = n(1),
                        m = n(5),
                        v = "undefined" == typeof Promise ? f.Promise : Promise,
                        g = function (e) {},
                        y = !0,
                        b = function () {
                            (console.warn || console.log).call(arguments)
                        },
                        w = b.bind(console, "[clipboard-polyfill]"),
                        k = "text/plain",
                        E = function () {
                            function e() {}
                            return e.setDebugLog = function (e) {
                                g = e
                            },
                                e.suppressWarnings = function () {
                                    y = !1,
                                        m.suppressDTWarnings()
                                },
                                e.write = function (e) {
                                    return y && !e.getData(k) && w("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),
                                        new v(function (t, n) {
                                            if (h()) return void(d(e) ? t() : n(new Error("Copying failed, possibly because the user rejected it.")));
                                            if (r(e)) return g("regular execCopy worked"),
                                                void t();
                                            if (navigator.userAgent.indexOf("Edge") > -1) return g('UA "Edge" => assuming success'),
                                                void t();
                                            if (a(document.body, e)) return g("copyUsingTempSelection worked"),
                                                void t();
                                            if (i(e)) return g("copyUsingTempElem worked"),
                                                void t();
                                            var o = e.getData(k);
                                            if (void 0 !== o && s(o)) return g("copyTextUsingDOM worked"),
                                                void t();
                                            n(new Error("Copy command failed."))
                                        })
                                },
                                e.writeText = function (e) {
                                    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(e);
                                    var t = new m.DT;
                                    return t.setData(k, e),
                                        this.write(t)
                                },
                                e.read = function () {
                                    return new v(function (e, t) {
                                        if (h()) return void p().then(function (t) {
                                            return e(l(t))
                                        }, t);
                                        t("Read is not supported in your browser.")
                                    })
                                },
                                e.readText = function () {
                                    return navigator.clipboard && navigator.clipboard.readText ? navigator.clipboard.readText() : h() ? p() : new v(function (e, t) {
                                        t("Read is not supported in your browser.")
                                    })
                                },
                                e.DT = m.DT,
                                e
                        }();
                    t.
                        default = E;
                    var x = function () {
                        function e() {
                            this.success = !1
                        }
                        return e
                    }();
                    e.exports = E
                },


                    function (e, t, n) {
                        (function (t, n) {
                            !
                                function (t, o) {
                                    e.exports = function () {
                                        "use strict";

                                        function e(e) {
                                            var t = typeof e;
                                            return null !== e && ("object" === t || "function" === t)
                                        }
                                        function r(e) {
                                            return "function" == typeof e
                                        }
                                        function a(e) {
                                            q = e
                                        }
                                        function i(e) {
                                            z = e
                                        }
                                        function s() {
                                            return void 0 !== G ?
                                                function () {
                                                    G(u)
                                                } : c()
                                        }
                                        function c() {
                                            var e = setTimeout;
                                            return function () {
                                                return e(u, 1)
                                            }
                                        }
                                        function u() {
                                            for (var e = 0; e < Y; e += 2)(0, V[e])(V[e + 1]),
                                                V[e] = void 0,
                                                V[e + 1] = void 0;
                                            Y = 0
                                        }
                                        function l(e, t) {
                                            var n = arguments,
                                                o = this,
                                                r = new this.constructor(d);
                                            void 0 === r[ee] && N(r);
                                            var a = o._state;
                                            return a ?
                                                function () {
                                                    var e = n[a - 1];
                                                    z(function () {
                                                        return U(a, r, e, o._result)
                                                    })
                                                }() : T(o, r, e, t),
                                                r
                                        }
                                        function h(e) {
                                            var t = this;
                                            if (e && "object" == typeof e && e.constructor === t) return e;
                                            var n = new t(d);
                                            return w(n, e),
                                                n
                                        }
                                        function d() {}
                                        function p() {
                                            return new TypeError("You cannot resolve a promise with itself")
                                        }
                                        function f() {
                                            return new TypeError("A promises callback cannot return that same promise.")
                                        }
                                        function m(e) {
                                            try {
                                                return e.then
                                            } catch (e) {
                                                return re.error = e,
                                                    re
                                            }
                                        }
                                        function v(e, t, n, o) {
                                            try {
                                                e.call(t, n, o)
                                            } catch (e) {
                                                return e
                                            }
                                        }
                                        function g(e, t, n) {
                                            z(function (e) {
                                                var o = !1,
                                                    r = v(n, t, function (n) {
                                                        o || (o = !0, t !== n ? w(e, n) : E(e, n))
                                                    }, function (t) {
                                                        o || (o = !0, x(e, t))
                                                    }, "Settle: " + (e._label || " unknown promise"));
                                                !o && r && (o = !0, x(e, r))
                                            }, e)
                                        }
                                        function y(e, t) {
                                            t._state === ne ? E(e, t._result) : t._state === oe ? x(e, t._result) : T(t, void 0, function (t) {
                                                return w(e, t)
                                            }, function (t) {
                                                return x(e, t)
                                            })
                                        }
                                        function b(e, t, n) {
                                            t.constructor === e.constructor && n === l && t.constructor.resolve === h ? y(e, t) : n === re ? (x(e, re.error), re.error = null) : void 0 === n ? E(e, t) : r(n) ? g(e, t, n) : E(e, t)
                                        }
                                        function w(t, n) {
                                            t === n ? x(t, p()) : e(n) ? b(t, n, m(n)) : E(t, n)
                                        }
                                        function k(e) {
                                            e._onerror && e._onerror(e._result),
                                                P(e)
                                        }
                                        function E(e, t) {
                                            e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && z(P, e))
                                        }
                                        function x(e, t) {
                                            e._state === te && (e._state = oe, e._result = t, z(k, e))
                                        }
                                        function T(e, t, n, o) {
                                            var r = e._subscribers,
                                                a = r.length;
                                            e._onerror = null,
                                                r[a] = t,
                                                r[a + ne] = n,
                                                r[a + oe] = o,
                                            0 === a && e._state && z(P, e)
                                        }
                                        function P(e) {
                                            var t = e._subscribers,
                                                n = e._state;
                                            if (0 !== t.length) {
                                                for (var o = void 0, r = void 0, a = e._result, i = 0; i < t.length; i += 3) o = t[i],
                                                    r = t[i + n],
                                                    o ? U(n, o, r, a) : r(a);
                                                e._subscribers.length = 0
                                            }
                                        }
                                        function O() {
                                            this.error = null
                                        }
                                        function C(e, t) {
                                            try {
                                                return e(t)
                                            } catch (e) {
                                                return ae.error = e,
                                                    ae
                                            }
                                        }
                                        function U(e, t, n, o) {
                                            var a = r(n),
                                                i = void 0,
                                                s = void 0,
                                                c = void 0,
                                                u = void 0;
                                            if (a) {
                                                if (i = C(n, o), i === ae ? (u = !0, s = i.error, i.error = null) : c = !0, t === i) return void x(t, f())
                                            } else i = o,
                                                c = !0;
                                            t._state !== te || (a && c ? w(t, i) : u ? x(t, s) : e === ne ? E(t, i) : e === oe && x(t, i))
                                        }
                                        function A(e, t) {
                                            try {
                                                t(function (t) {
                                                    w(e, t)
                                                }, function (t) {
                                                    x(e, t)
                                                })
                                            } catch (t) {
                                                x(e, t)
                                            }
                                        }
                                        function j() {
                                            return ie++
                                        }
                                        function N(e) {
                                            e[ee] = ie++,
                                                e._state = void 0,
                                                e._result = void 0,
                                                e._subscribers = []
                                        }
                                        function R(e, t) {
                                            this._instanceConstructor = e,
                                                this.promise = new e(d),
                                            this.promise[ee] || N(this.promise),
                                                F(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && E(this.promise, this._result))) : x(this.promise, S())
                                        }
                                        function S() {
                                            return new Error("Array Methods must be provided an Array")
                                        }
                                        function M(e) {
                                            return new R(this, e).promise
                                        }
                                        function _(e) {
                                            var t = this;
                                            return new t(F(e) ?
                                                function (n, o) {
                                                    for (var r = e.length, a = 0; a < r; a++) t.resolve(e[a]).then(n, o)
                                                } : function (e, t) {
                                                    return t(new TypeError("You must pass an array to race."))
                                                })
                                        }
                                        function I(e) {
                                            var t = this,
                                                n = new t(d);
                                            return x(n, e),
                                                n
                                        }
                                        function D() {
                                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                        }
                                        function L() {
                                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                        }
                                        function B(e) {
                                            this[ee] = j(),
                                                this._result = this._state = void 0,
                                                this._subscribers = [],
                                            d !== e && ("function" != typeof e && D(), this instanceof B ? A(this, e) : L())
                                        }
                                        function W() {
                                            var e = void 0;
                                            if (void 0 !== n) e = n;
                                            else if ("undefined" != typeof self) e = self;
                                            else try {
                                                    e = Function("return this")()
                                                } catch (e) {
                                                    throw new Error("polyfill failed because global object is unavailable in this environment")
                                                }
                                            var t = e.Promise;
                                            if (t) {
                                                var o = null;
                                                try {
                                                    o = Object.prototype.toString.call(t.resolve())
                                                } catch (e) {}
                                                if ("[object Promise]" === o && !t.cast) return
                                            }
                                            e.Promise = B
                                        }
                                        var H = void 0;
                                        H = Array.isArray ? Array.isArray : function (e) {
                                            return "[object Array]" === Object.prototype.toString.call(e)
                                        };
                                        var F = H,
                                            Y = 0,
                                            G = void 0,
                                            q = void 0,
                                            z = function (e, t) {
                                                V[Y] = e,
                                                    V[Y + 1] = t,
                                                2 === (Y += 2) && (q ? q(u) : $())
                                            },
                                            J = "undefined" != typeof window ? window : void 0,
                                            K = J || {},
                                            X = K.MutationObserver || K.WebKitMutationObserver,
                                            Q = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                                            Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                                            V = new Array(1e3),
                                            $ = void 0;
                                        $ = Q ?
                                            function () {
                                                return function () {
                                                    return t.nextTick(u)
                                                }
                                            }() : X ?
                                                function () {
                                                    var e = 0,
                                                        t = new X(u),
                                                        n = document.createTextNode("");
                                                    return t.observe(n, {
                                                        characterData: !0
                                                    }),


                                                        function () {
                                                            n.data = e = ++e % 2
                                                        }
                                                }() : Z ?
                                                    function () {
                                                        var e = new MessageChannel;
                                                        return e.port1.onmessage = u,


                                                            function () {
                                                                return e.port2.postMessage(0)
                                                            }
                                                    }() : void 0 === J ?
                                                        function () {
                                                            try {
                                                                var e = o(4);
                                                                return G = e.runOnLoop || e.runOnContext,
                                                                    s()
                                                            } catch (e) {
                                                                return c()
                                                            }
                                                        }() : c();
                                        var ee = Math.random().toString(36).substring(16),
                                            te = void 0,
                                            ne = 1,
                                            oe = 2,
                                            re = new O,
                                            ae = new O,
                                            ie = 0;
                                        return R.prototype._enumerate = function (e) {
                                            for (var t = 0; this._state === te && t < e.length; t++) this._eachEntry(e[t], t)
                                        },
                                            R.prototype._eachEntry = function (e, t) {
                                                var n = this._instanceConstructor,
                                                    o = n.resolve;
                                                if (o === h) {
                                                    var r = m(e);
                                                    if (r === l && e._state !== te) this._settledAt(e._state, t, e._result);
                                                    else if ("function" != typeof r) this._remaining--,
                                                        this._result[t] = e;
                                                    else if (n === B) {
                                                        var a = new n(d);
                                                        b(a, e, r),
                                                            this._willSettleAt(a, t)
                                                    } else this._willSettleAt(new n(function (t) {
                                                        return t(e)
                                                    }), t)
                                                } else this._willSettleAt(o(e), t)
                                            },
                                            R.prototype._settledAt = function (e, t, n) {
                                                var o = this.promise;
                                                o._state === te && (this._remaining--, e === oe ? x(o, n) : this._result[t] = n),
                                                0 === this._remaining && E(o, this._result)
                                            },
                                            R.prototype._willSettleAt = function (e, t) {
                                                var n = this;
                                                T(e, void 0, function (e) {
                                                    return n._settledAt(ne, t, e)
                                                }, function (e) {
                                                    return n._settledAt(oe, t, e)
                                                })
                                            },
                                            B.all = M,
                                            B.race = _,
                                            B.resolve = h,
                                            B.reject = I,
                                            B._setScheduler = a,
                                            B._setAsap = i,
                                            B._asap = z,
                                            B.prototype = {
                                                constructor: B,
                                                then: l,
                                                catch: function (e) {
                                                    return this.then(null, e)
                                                }
                                            },
                                            B.polyfill = W,
                                            B.Promise = B,
                                            B
                                    }()
                                }()
                        }).call(t, n(2), n(3))
                    },


                    function (e, t) {
                        function n() {
                            throw new Error("setTimeout has not been defined")
                        }
                        function o() {
                            throw new Error("clearTimeout has not been defined")
                        }
                        function r(e) {
                            if (l === setTimeout) return setTimeout(e, 0);
                            if ((l === n || !l) && setTimeout) return l = setTimeout,
                                setTimeout(e, 0);
                            try {
                                return l(e, 0)
                            } catch (t) {
                                try {
                                    return l.call(null, e, 0)
                                } catch (t) {
                                    return l.call(this, e, 0)
                                }
                            }
                        }
                        function a(e) {
                            if (h === clearTimeout) return clearTimeout(e);
                            if ((h === o || !h) && clearTimeout) return h = clearTimeout,
                                clearTimeout(e);
                            try {
                                return h(e)
                            } catch (t) {
                                try {
                                    return h.call(null, e)
                                } catch (t) {
                                    return h.call(this, e)
                                }
                            }
                        }
                        function i() {
                            m && p && (m = !1, p.length ? f = p.concat(f) : v = -1, f.length && s())
                        }
                        function s() {
                            if (!m) {
                                var e = r(i);
                                m = !0;
                                for (var t = f.length; t;) {
                                    for (p = f, f = []; ++v < t;) p && p[v].run();
                                    v = -1,
                                        t = f.length
                                }
                                p = null,
                                    m = !1,
                                    a(e)
                            }
                        }
                        function c(e, t) {
                            this.fun = e,
                                this.array = t
                        }
                        function u() {}
                        var l, h, d = e.exports = {};
                        !
                            function () {
                                try {
                                    l = "function" == typeof setTimeout ? setTimeout : n
                                } catch (e) {
                                    l = n
                                }
                                try {
                                    h = "function" == typeof clearTimeout ? clearTimeout : o
                                } catch (e) {
                                    h = o
                                }
                            }();
                        var p, f = [],
                            m = !1,
                            v = -1;
                        d.nextTick = function (e) {
                            var t = new Array(arguments.length - 1);
                            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            f.push(new c(e, t)),
                            1 !== f.length || m || r(s)
                        },
                            c.prototype.run = function () {
                                this.fun.apply(null, this.array)
                            },
                            d.title = "browser",
                            d.browser = !0,
                            d.env = {},
                            d.argv = [],
                            d.version = "",
                            d.versions = {},
                            d.on = u,
                            d.addListener = u,
                            d.once = u,
                            d.off = u,
                            d.removeListener = u,
                            d.removeAllListeners = u,
                            d.emit = u,
                            d.prependListener = u,
                            d.prependOnceListener = u,
                            d.listeners = function (e) {
                                return []
                            },
                            d.binding = function (e) {
                                throw new Error("process.binding is not supported")
                            },
                            d.cwd = function () {
                                return "/"
                            },
                            d.chdir = function (e) {
                                throw new Error("process.chdir is not supported")
                            },
                            d.umask = function () {
                                return 0
                            }
                    },


                    function (e, t) {
                        var n;
                        n = function () {
                            return this
                        }();
                        try {
                            n = n || Function("return this")() || (0, eval)("this")
                        } catch (e) {
                            "object" == typeof window && (n = window)
                        }
                        e.exports = n
                    },


                    function (e, t) {},


                    function (e, t, n) {
                        "use strict";

                        function o() {
                            s = !1
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = ["text/plain", "text/html"],
                            a = function () {
                                (console.warn || console.log).call(arguments)
                            },
                            i = a.bind(console, "[clipboard-polyfill]"),
                            s = !0;
                        t.suppressDTWarnings = o;
                        var c = function () {
                            function e() {
                                this.m = {}
                            }
                            return e.prototype.setData = function (e, t) {
                                s && -1 === r.indexOf(e) && i("Unknown data type: " + e, "Call clipboard.suppressWarnings() to suppress this warning."),
                                    this.m[e] = t
                            },
                                e.prototype.getData = function (e) {
                                    return this.m[e]
                                },
                                e.prototype.forEach = function (e) {
                                    for (var t in this.m) e(this.m[t], t)
                                },
                                e
                        }();
                        t.DT = c
                    }])
            })
    },
    "D/cR": function (e, t, n) {
        "use strict";

        function o(e) {
            var t = [];
            for (var n in e)!
                function (n) {
                    Array.isArray(e[n]) ? e[n].forEach(function (e) {
                        t.push(n + "[]=" + e)
                    }) : t.push(n + "=" + e[n])
                }(n);
            return t.join("&")
        }
        t.c = o,
            n.d(t, "a", function () {
                return l
            }),
            n.d(t, "d", function () {
                return h
            }),
            n.d(t, "b", function () {
                return d
            });
        var r = n("Xxa5"),
            a = n.n(r),
            i = n("exGp"),
            s = n.n(i),
            c = n("rplX"),
            u = (n.n(c), n("BK/k")),
            l = function () {
                var e = s()(a.a.mark(function e(t) {
                    var n, r, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = o(s),
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
            h = function () {
                var e = s()(a.a.mark(function e(t) {
                    var n, r, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = o(c),
                                n.length > 0 && (t += "?" + n),
                                    e.next = 4,
                                    fetch(t, {
                                        method: "POST",
                                        credentials: "same-origin",
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded",
                                            "X-XSRF-TOKEN": u.b
                                        },
                                        body: o(s)
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
                var e = s()(a.a.mark(function e(t) {
                    var n, r, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return a.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = o(s),
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
    "DT0+": function (e, t, n) {
        "use strict";
        var o = n("U7vG"),
            r = n("wqO5");
        if (void 0 === o) throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
        var a = (new o.Component).updater;
        e.exports = r(o.Component, o.isValidElement, a)
    },
    Dqzp: function (e, t) {},
    EtYT: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var o = n("O57f"),
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
                        return n.getFullYear() + t + o.a.padLeft(n.getMonth() + 1, 2) + t + o.a.padLeft(n.getDate(), 2)
                    }
                },
                formatMonth: function (e) {
                    if (!isNaN(parseInt(e))) return e = parseInt(e),
                        e % 12 == 0 ? e / 12 + "年" : e + "个月"
                }
            }
    },
    F8kA: function (e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function h(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function p(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function f(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function v(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function g(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function y(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function b(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function w(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function k(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function E(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function x(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function T(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function P(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function O(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function C(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function U(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function A(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function j(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function N(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function R(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function S(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function M(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function _(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function I(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        var D = n("U7vG"),
            L = n.n(D),
            B = n("KSGD"),
            W = n.n(B),
            H = n("ciQf"),
            F = n.n(H),
            Y = n("HSnN"),
            G = n.n(Y),
            q = n("GvBW"),
            z = n.n(q),
            J = n("crWv"),
            K = n.n(J),
            X = Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
            Q = function (e) {
                function t() {
                    var n, a, i;
                    o(this, t);
                    for (var s = arguments.length, c = Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                    return n = a = r(this, e.call.apply(e, [this].concat(c))),
                        a.state = {
                            match: a.computeMatch(a.props.history.location.pathname)
                        },
                        i = n,
                        r(a, i)
                }
                return a(t, e),
                    t.prototype.getChildContext = function () {
                        return {
                            router: X({}, this.context.router, {
                                history: this.props.history,
                                route: {
                                    location: this.props.history.location,
                                    match: this.state.match
                                }
                            })
                        }
                    },
                    t.prototype.computeMatch = function (e) {
                        return {
                            path: "/",
                            url: "/",
                            params: {},
                            isExact: "/" === e
                        }
                    },
                    t.prototype.componentWillMount = function () {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            o = t.history;
                        K()(null == n || 1 === L.a.Children.count(n), "A <Router> may have only one child element"),
                            this.unlisten = o.listen(function () {
                                e.setState({
                                    match: e.computeMatch(o.location.pathname)
                                })
                            })
                    },
                    t.prototype.componentWillReceiveProps = function (e) {
                        z()(this.props.history === e.history, "You cannot change <Router history>")
                    },
                    t.prototype.componentWillUnmount = function () {
                        this.unlisten()
                    },
                    t.prototype.render = function () {
                        var e = this.props.children;
                        return e ? L.a.Children.only(e) : null
                    },
                    t
            }(L.a.Component);
        Q.propTypes = {
            history: W.a.object.isRequired,
            children: W.a.node
        },
            Q.contextTypes = {
                router: W.a.object
            },
            Q.childContextTypes = {
                router: W.a.object.isRequired
            };
        var Z = Q,
            V = function (e) {
                function t() {
                    var n, o, r;
                    i(this, t);
                    for (var a = arguments.length, c = Array(a), u = 0; u < a; u++) c[u] = arguments[u];
                    return n = o = s(this, e.call.apply(e, [this].concat(c))),
                        o.history = G()(o.props),
                        r = n,
                        s(o, r)
                }
                return c(t, e),
                    t.prototype.render = function () {
                        return L.a.createElement(Z, {
                            history: this.history,
                            children: this.props.children
                        })
                    },
                    t
            }(L.a.Component);
        V.propTypes = {
            initialEntries: W.a.array,
            initialIndex: W.a.number,
            getUserConfirmation: W.a.func,
            keyLength: W.a.number,
            children: W.a.node
        };
        var $ = V,
            ee = function (e) {
                function t() {
                    return u(this, t),
                        l(this, e.apply(this, arguments))
                }
                return h(t, e),
                    t.prototype.enable = function (e) {
                        this.unblock && this.unblock(),
                            this.unblock = this.context.router.history.block(e)
                    },
                    t.prototype.disable = function () {
                        this.unblock && (this.unblock(), this.unblock = null)
                    },
                    t.prototype.componentWillMount = function () {
                        this.props.when && this.enable(this.props.message)
                    },
                    t.prototype.componentWillReceiveProps = function (e) {
                        e.when ? this.props.when && this.props.message === e.message || this.enable(e.message) : this.disable()
                    },
                    t.prototype.componentWillUnmount = function () {
                        this.disable()
                    },
                    t.prototype.render = function () {
                        return null
                    },
                    t
            }(L.a.Component);
        ee.propTypes = {
            when: W.a.bool,
            message: W.a.oneOfType([W.a.func, W.a.string]).isRequired
        },
            ee.defaultProps = {
                when: !0
            },
            ee.contextTypes = {
                router: W.a.shape({
                    history: W.a.shape({
                        block: W.a.func.isRequired
                    }).isRequired
                }).isRequired
            };
        var te = ee,
            ne = function (e) {
                function t() {
                    return d(this, t),
                        p(this, e.apply(this, arguments))
                }
                return f(t, e),
                    t.prototype.isStatic = function () {
                        return this.context.router && this.context.router.staticContext
                    },
                    t.prototype.componentWillMount = function () {
                        this.isStatic() && this.perform()
                    },
                    t.prototype.componentDidMount = function () {
                        this.isStatic() || this.perform()
                    },
                    t.prototype.perform = function () {
                        var e = this.context.router.history,
                            t = this.props,
                            n = t.push,
                            o = t.to;
                        n ? e.push(o) : e.replace(o)
                    },
                    t.prototype.render = function () {
                        return null
                    },
                    t
            }(L.a.Component);
        ne.propTypes = {
            push: W.a.bool,
            from: W.a.string,
            to: W.a.oneOfType([W.a.string, W.a.object])
        },
            ne.defaultProps = {
                push: !1
            },
            ne.contextTypes = {
                router: W.a.shape({
                    history: W.a.shape({
                        push: W.a.func.isRequired,
                        replace: W.a.func.isRequired
                    }).isRequired,
                    staticContext: W.a.object
                }).isRequired
            };
        var oe = ne,
            re = n("Ygqm"),
            ae = n.n(re),
            ie = {},
            se = 0,
            ce = function (e, t) {
                var n = "" + t.end + t.strict,
                    o = ie[n] || (ie[n] = {});
                if (o[e]) return o[e];
                var r = [],
                    a = ae()(e, r, t),
                    i = {
                        re: a,
                        keys: r
                    };
                return se < 1e4 && (o[e] = i, se++),
                    i
            },
            ue = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                "string" == typeof t && (t = {
                    path: t
                });
                var n = t,
                    o = n.path,
                    r = void 0 === o ? "/" : o,
                    a = n.exact,
                    i = void 0 !== a && a,
                    s = n.strict,
                    c = void 0 !== s && s,
                    u = ce(r, {
                        end: i,
                        strict: c
                    }),
                    l = u.re,
                    h = u.keys,
                    d = l.exec(e);
                if (!d) return null;
                var p = d[0],
                    f = d.slice(1),
                    m = e === p;
                return i && !m ? null : {
                    path: r,
                    url: "/" === r && "" === p ? "/" : p,
                    isExact: m,
                    params: h.reduce(function (e, t, n) {
                        return e[t.name] = f[n],
                            e
                    }, {})
                }
            },
            le = ue,
            he = Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
            de = function (e) {
                function t() {
                    var n, o, r;
                    m(this, t);
                    for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
                    return n = o = v(this, e.call.apply(e, [this].concat(i))),
                        o.state = {
                            match: o.computeMatch(o.props, o.context.router)
                        },
                        r = n,
                        v(o, r)
                }
                return g(t, e),
                    t.prototype.getChildContext = function () {
                        return {
                            router: he({}, this.context.router, {
                                route: {
                                    location: this.props.location || this.context.router.route.location,
                                    match: this.state.match
                                }
                            })
                        }
                    },
                    t.prototype.computeMatch = function (e, t) {
                        var n = e.computedMatch,
                            o = e.location,
                            r = e.path,
                            a = e.strict,
                            i = e.exact,
                            s = t.route;
                        if (n) return n;
                        var c = (o || s.location).pathname;
                        return r ? le(c, {
                            path: r,
                            strict: a,
                            exact: i
                        }) : s.match
                    },
                    t.prototype.componentWillMount = function () {
                        var e = this.props,
                            t = e.component,
                            n = e.render,
                            o = e.children;
                        z()(!(t && n), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),
                            z()(!(t && o), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),
                            z()(!(n && o), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")
                    },
                    t.prototype.componentWillReceiveProps = function (e, t) {
                        z()(!(e.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),
                            z()(!(!e.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),
                            this.setState({
                                match: this.computeMatch(e, t.router)
                            })
                    },
                    t.prototype.render = function () {
                        var e = this.state.match,
                            t = this.props,
                            n = t.children,
                            o = t.component,
                            r = t.render,
                            a = this.context.router,
                            i = a.history,
                            s = a.route,
                            c = a.staticContext,
                            u = this.props.location || s.location,
                            l = {
                                match: e,
                                location: u,
                                history: i,
                                staticContext: c
                            };
                        return o ? e ? L.a.createElement(o, l) : null : r ? e ? r(l) : null : n ? "function" == typeof n ? n(l) : !Array.isArray(n) || n.length ? L.a.Children.only(n) : null : null
                    },
                    t
            }(L.a.Component);
        de.propTypes = {
            computedMatch: W.a.object,
            path: W.a.string,
            exact: W.a.bool,
            strict: W.a.bool,
            component: W.a.func,
            render: W.a.func,
            children: W.a.oneOfType([W.a.func, W.a.node]),
            location: W.a.object
        },
            de.contextTypes = {
                router: W.a.shape({
                    history: W.a.object.isRequired,
                    route: W.a.object.isRequired,
                    staticContext: W.a.object
                })
            },
            de.childContextTypes = {
                router: W.a.object.isRequired
            };
        var pe = de,
            fe = n("Izpu"),
            me = Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
            ve = function (e) {
                var t = e.pathname,
                    n = void 0 === t ? "/" : t,
                    o = e.search,
                    r = void 0 === o ? "" : o,
                    a = e.hash,
                    i = void 0 === a ? "" : a;
                return {
                    pathname: n,
                    search: "?" === r ? "" : r,
                    hash: "#" === i ? "" : i
                }
            },
            ge = function (e, t) {
                return e ? me({}, t, {
                    pathname: Object(fe.addLeadingSlash)(e) + t.pathname
                }) : t
            },
            ye = function (e, t) {
                if (!e) return t;
                var n = Object(fe.addLeadingSlash)(e);
                return 0 !== t.pathname.indexOf(n) ? t : me({}, t, {
                    pathname: t.pathname.substr(n.length)
                })
            },
            be = function (e) {
                return "string" == typeof e ? Object(fe.parsePath)(e) : ve(e)
            },
            we = function (e) {
                return "string" == typeof e ? e : Object(fe.createPath)(e)
            },
            ke = function (e) {
                return function () {
                    K()(!1, "You cannot %s with <StaticRouter>", e)
                }
            },
            Ee = function () {},
            xe = function (e) {
                function t() {
                    var n, o, r;
                    b(this, t);
                    for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
                    return n = o = w(this, e.call.apply(e, [this].concat(i))),
                        o.createHref = function (e) {
                            return Object(fe.addLeadingSlash)(o.props.basename + we(e))
                        },
                        o.handlePush = function (e) {
                            var t = o.props,
                                n = t.basename,
                                r = t.context;
                            r.action = "PUSH",
                                r.location = ge(n, be(e)),
                                r.url = we(r.location)
                        },
                        o.handleReplace = function (e) {
                            var t = o.props,
                                n = t.basename,
                                r = t.context;
                            r.action = "REPLACE",
                                r.location = ge(n, be(e)),
                                r.url = we(r.location)
                        },
                        o.handleListen = function () {
                            return Ee
                        },
                        o.handleBlock = function () {
                            return Ee
                        },
                        r = n,
                        w(o, r)
                }
                return k(t, e),
                    t.prototype.getChildContext = function () {
                        return {
                            router: {
                                staticContext: this.props.context
                            }
                        }
                    },
                    t.prototype.render = function () {
                        var e = this.props,
                            t = e.basename,
                            n = (e.context, e.location),
                            o = y(e, ["basename", "context", "location"]),
                            r = {
                                createHref: this.createHref,
                                action: "POP",
                                location: ye(t, be(n)),
                                push: this.handlePush,
                                replace: this.handleReplace,
                                go: ke("go"),
                                goBack: ke("goBack"),
                                goForward: ke("goForward"),
                                listen: this.handleListen,
                                block: this.handleBlock
                            };
                        return L.a.createElement(Z, me({}, o, {
                            history: r
                        }))
                    },
                    t
            }(L.a.Component);
        xe.propTypes = {
            basename: W.a.string,
            context: W.a.object.isRequired,
            location: W.a.oneOfType([W.a.string, W.a.object])
        },
            xe.defaultProps = {
                basename: "",
                location: "/"
            },
            xe.childContextTypes = {
                router: W.a.object.isRequired
            };
        var Te = xe,
            Pe = function (e) {
                function t() {
                    return E(this, t),
                        x(this, e.apply(this, arguments))
                }
                return T(t, e),
                    t.prototype.componentWillReceiveProps = function (e) {
                        z()(!(e.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),
                            z()(!(!e.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')
                    },
                    t.prototype.render = function () {
                        var e = this.context.router.route,
                            t = this.props.children,
                            n = this.props.location || e.location,
                            o = void 0,
                            r = void 0;
                        return L.a.Children.forEach(t, function (t) {
                            if (L.a.isValidElement(t)) {
                                var a = t.props,
                                    i = a.path,
                                    s = a.exact,
                                    c = a.strict,
                                    u = a.from,
                                    l = i || u;
                                null == o && (r = t, o = l ? le(n.pathname, {
                                    path: l,
                                    exact: s,
                                    strict: c
                                }) : e.match)
                            }
                        }),
                            o ? L.a.cloneElement(r, {
                                location: n,
                                computedMatch: o
                            }) : null
                    },
                    t
            }(L.a.Component);
        Pe.contextTypes = {
            router: W.a.shape({
                route: W.a.object.isRequired
            }).isRequired
        },
            Pe.propTypes = {
                children: W.a.node,
                location: W.a.object
            };
        var Oe = Pe,
            Ce = n("hYij"),
            Ue = n.n(Ce),
            Ae = Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
            je = function (e) {
                var t = function (t) {
                    var n = t.wrappedComponentRef,
                        o = P(t, ["wrappedComponentRef"]);
                    return L.a.createElement(pe, {
                        render: function (t) {
                            return L.a.createElement(e, Ae({}, o, t, {
                                ref: n
                            }))
                        }
                    })
                };
                return t.displayName = "withRouter(" + (e.displayName || e.name) + ")",
                    t.WrappedComponent = e,
                    t.propTypes = {
                        wrappedComponentRef: W.a.func
                    },
                    Ue()(t, e)
            },
            Ne = je,
            Re = function (e) {
                function t() {
                    var n, o, r;
                    O(this, t);
                    for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
                    return n = o = C(this, e.call.apply(e, [this].concat(i))),
                        o.history = F()(o.props),
                        r = n,
                        C(o, r)
                }
                return U(t, e),
                    t.prototype.render = function () {
                        return L.a.createElement(Z, {
                            history: this.history,
                            children: this.props.children
                        })
                    },
                    t
            }(L.a.Component);
        Re.propTypes = {
            basename: W.a.string,
            forceRefresh: W.a.bool,
            getUserConfirmation: W.a.func,
            keyLength: W.a.number,
            children: W.a.node
        };
        var Se = Re,
            Me = n("kjbi"),
            _e = n.n(Me),
            Ie = function (e) {
                function t() {
                    var n, o, r;
                    A(this, t);
                    for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
                    return n = o = j(this, e.call.apply(e, [this].concat(i))),
                        o.history = _e()(o.props),
                        r = n,
                        j(o, r)
                }
                return N(t, e),
                    t.prototype.render = function () {
                        return L.a.createElement(Z, {
                            history: this.history,
                            children: this.props.children
                        })
                    },
                    t
            }(L.a.Component);
        Ie.propTypes = {
            basename: W.a.string,
            getUserConfirmation: W.a.func,
            hashType: W.a.oneOf(["hashbang", "noslash", "slash"]),
            children: W.a.node
        };
        var De = Ie,
            Le = Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
            Be = function (e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
            },
            We = function (e) {
                function t() {
                    var n, o, r;
                    S(this, t);
                    for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
                    return n = o = M(this, e.call.apply(e, [this].concat(i))),
                        o.handleClick = function (e) {
                            if (o.props.onClick && o.props.onClick(e), !e.defaultPrevented && 0 === e.button && !o.props.target && !Be(e)) {
                                e.preventDefault();
                                var t = o.context.router.history,
                                    n = o.props,
                                    r = n.replace,
                                    a = n.to;
                                r ? t.replace(a) : t.push(a)
                            }
                        },
                        r = n,
                        M(o, r)
                }
                return _(t, e),
                    t.prototype.render = function () {
                        var e = this.props,
                            t = (e.replace, e.to),
                            n = R(e, ["replace", "to"]),
                            o = this.context.router.history.createHref("string" == typeof t ? {
                                pathname: t
                            } : t);
                        return L.a.createElement("a", Le({}, n, {
                            onClick: this.handleClick,
                            href: o
                        }))
                    },
                    t
            }(L.a.Component);
        We.propTypes = {
            onClick: W.a.func,
            target: W.a.string,
            replace: W.a.bool,
            to: W.a.oneOfType([W.a.string, W.a.object]).isRequired
        },
            We.defaultProps = {
                replace: !1
            },
            We.contextTypes = {
                router: W.a.shape({
                    history: W.a.shape({
                        push: W.a.func.isRequired,
                        replace: W.a.func.isRequired,
                        createHref: W.a.func.isRequired
                    }).isRequired
                }).isRequired
            };
        var He = We,
            Fe = Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
            Ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
            Ge = function (e) {
                var t = e.to,
                    n = e.exact,
                    o = e.strict,
                    r = e.location,
                    a = e.activeClassName,
                    i = e.className,
                    s = e.activeStyle,
                    c = e.style,
                    u = e.isActive,
                    l = I(e, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive"]);
                return L.a.createElement(pe, {
                    path: "object" === (void 0 === t ? "undefined" : Ye(t)) ? t.pathname : t,
                    exact: n,
                    strict: o,
                    location: r,
                    children: function (e) {
                        var n = e.location,
                            o = e.match,
                            r = !! (u ? u(o, n) : o);
                        return L.a.createElement(He, Fe({
                            to: t,
                            className: r ? [a, i].filter(function (e) {
                                return e
                            }).join(" ") : i,
                            style: r ? Fe({}, c, s) : c
                        }, l))
                    }
                })
            };
        Ge.propTypes = {
            to: He.propTypes.to,
            exact: W.a.bool,
            strict: W.a.bool,
            location: W.a.object,
            activeClassName: W.a.string,
            className: W.a.string,
            activeStyle: W.a.object,
            style: W.a.object,
            isActive: W.a.func
        },
            Ge.defaultProps = {
                activeClassName: "active"
            };
        var qe = Ge;
        n.d(t, "a", function () {
            return Se
        }),
            n.d(t, !1, function () {
                return De
            }),
            n.d(t, !1, function () {
                return He
            }),
            n.d(t, !1, function () {
                return $
            }),
            n.d(t, !1, function () {
                return qe
            }),
            n.d(t, !1, function () {
                return te
            }),
            n.d(t, !1, function () {
                return oe
            }),
            n.d(t, "b", function () {
                return pe
            }),
            n.d(t, !1, function () {
                return Z
            }),
            n.d(t, !1, function () {
                return Te
            }),
            n.d(t, "c", function () {
                return Oe
            }),
            n.d(t, !1, function () {
                return le
            }),
            n.d(t, "d", function () {
                return Ne
            })
    },
    FKtm: function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = function e(t, n) {
                if (t === n) return !0;
                if (null == t || null == n) return !1;
                if (Array.isArray(t)) return Array.isArray(n) && t.length === n.length && t.every(function (t, o) {
                    return e(t, n[o])
                });
                var r = void 0 === t ? "undefined" : o(t);
                if (r !== (void 0 === n ? "undefined" : o(n))) return !1;
                if ("object" === r) {
                    var a = t.valueOf(),
                        i = n.valueOf();
                    if (a !== t || i !== n) return e(a, i);
                    var s = Object.keys(t),
                        c = Object.keys(n);
                    return s.length === c.length && s.every(function (o) {
                        return e(t[o], n[o])
                    })
                }
                return !1
            };
        t.
            default = r
    },
    GvBW: function (e, t, n) {
        "use strict";
        var o = function () {};
        e.exports = o
    },
    GwTv: function (e, t, n) {
        "use strict";
        var o = n("Zrlr"),
            r = n.n(o),
            a = n("wxAW"),
            i = n.n(a),
            s = function () {
                function e(t) {
                    r()(this, e),
                        this.state = {};
                    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    this._key = [],
                        this._tbl = {};
                    for (var o = 0; o < 64; ++o) this._key[o] = n.charAt(t[o]),
                        this._tbl[this._key[o]] = o;
                    this._pad = n.charAt(64)
                }
                return i()(e, [{
                    key: "dec",
                    value: function (e) {
                        var t = [],
                            n = void 0,
                            o = void 0,
                            r = void 0,
                            a = void 0,
                            i = 0,
                            s = 0;
                        for (e = e.replace(/-/g, "+").replace(/_/g, "/"), e = e.replace(/[^0-9A-Za-z+\/=]/g, ""); i < e.length;) n = this._tbl[e.charAt(i++)],
                            o = this._tbl[e.charAt(i++)],
                            r = this._tbl[e.charAt(i++)],
                            a = this._tbl[e.charAt(i++)],
                            t[s++] = n << 2 | o >> 4,
                            t[s++] = (15 & o) << 4 | r >> 2,
                            t[s++] = (3 & r) << 6 | a;
                        var c = e.slice(-2);
                        return c.charAt(0) === this._pad ? t.length = t.length - 2 : c.charAt(1) === this._pad && (t.length = t.length - 1),
                            this.utf8to16(t)
                    }
                },
                    {
                        key: "enc",
                        value: function (e) {
                            for (var t = 0, n = void 0, o = void 0, r = void 0, a = [], i = this.utf16to8(e), s = i.length; t < s;) {
                                switch (n = i[t], r = (t + 1) % 3) {
                                    case 1:
                                        a.push(this._key[n >> 2]);
                                        break;
                                    case 2:
                                        a.push(this._key[(3 & o) << 4 | n >> 4]);
                                        break;
                                    case 0:
                                        a.push(this._key[(15 & o) << 2 | n >> 6]),
                                            a.push(this._key[63 & n])
                                }
                                o = n,
                                    t++
                            }
                            return 1 == r ? (a.push(this._key[(3 & o) << 4]), a.push("~~")) : 2 == r && (a.push(this._key[(15 & o) << 2]), a.push("~")),
                                a.join("")
                        }
                    },
                    {
                        key: "_1to2",
                        value: function (e) {
                            for (var t = !1, n = [], o = 0; o < e.length; ++o) {
                                var r = e[o];
                                29 !== r ? t ? n.push(String.fromCharCode(256 * r + e[++o])) : n.push(String.fromCharCode(r)) : t = !t
                            }
                            return n.join("")
                        }
                    },
                    {
                        key: "_2to1",
                        value: function (e) {
                            var t = !1,
                                n = 0,
                                o = [];
                            e.charCodeAt(0) > 255 && (t = !0, o[n++] = 29);
                            for (var r = 0; r < e.length; ++r) {
                                var a = e.charCodeAt(r);
                                29 !== a && (a <= 255 ? (t && (o[n++] = 29, t = !1), o[n++] = a) : (t || (o[n++] = 29, t = !0), o[n++] = a >> 8, o[n++] = 255 & a))
                            }
                            return o
                        }
                    },
                    {
                        key: "utf16to8",
                        value: function (e) {
                            for (var t = [], n = void 0, o = 0, r = e.length; o < r; o++) n = e.charCodeAt(o),
                                n >= 1 && n <= 127 ? t.push(n) : n > 2047 ? t.push(224 | n >> 12 & 15, 128 | n >> 6 & 63, 128 | n >> 0 & 63) : t.push(192 | n >> 6 & 31, 128 | n >> 0 & 63);
                            return t
                        }
                    },
                    {
                        key: "utf8to16",
                        value: function (e) {
                            for (var t = [], n = e.length, o = 0, r = void 0, a = void 0, i = void 0; o < n;) switch ((r = e[o++]) >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    t[o] = String.fromCharCode(e[o - 1]);
                                    break;
                                case 12:
                                case 13:
                                    a = e[o],
                                        t[o] = String.fromCharCode((31 & r) << 6 | 63 & a);
                                    break;
                                case 14:
                                    a = e[o],
                                        i = e[o + 1],
                                        t[o] = String.fromCharCode((15 & r) << 12 | (63 & a) << 6 | (63 & i) << 0)
                            }
                            return t.join("")
                        }
                    }]),
                    e
            }(),
            c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
            u = new s(c);
        t.a = u
    },
    HJfm: function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return o
        }),
            n.d(t, "b", function () {
                return r
            }),
            n.d(t, "f", function () {
                return a
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
        var o = {
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
            a = {
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
    HSnN: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        }
        t.__esModule = !0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
            i = n("GvBW"),
            s = o(i),
            c = n("Izpu"),
            u = n("xIPz"),
            l = n("tqq1"),
            h = o(l),
            d = function (e, t, n) {
                return Math.min(Math.max(e, t), n)
            },
            p = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.getUserConfirmation,
                    n = e.initialEntries,
                    o = void 0 === n ? ["/"] : n,
                    i = e.initialIndex,
                    l = void 0 === i ? 0 : i,
                    p = e.keyLength,
                    f = void 0 === p ? 6 : p,
                    m = (0, h.
                        default)(),
                    v = function (e) {
                        a(A, e),
                            A.length = A.entries.length,
                            m.notifyListeners(A.location, A.action)
                    },
                    g = function () {
                        return Math.random().toString(36).substr(2, f)
                    },
                    y = d(l, 0, o.length - 1),
                    b = o.map(function (e) {
                        return "string" == typeof e ? (0, u.createLocation)(e, void 0, g()) : (0, u.createLocation)(e, void 0, e.key || g())
                    }),
                    w = c.createPath,
                    k = function (e, n) {
                        (0, s.
                            default)(!("object" === (void 0 === e ? "undefined" : r(e)) && void 0 !== e.state && void 0 !== n), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                        var o = (0, u.createLocation)(e, n, g(), A.location);
                        m.confirmTransitionTo(o, "PUSH", t, function (e) {
                            if (e) {
                                var t = A.index,
                                    n = t + 1,
                                    r = A.entries.slice(0);
                                r.length > n ? r.splice(n, r.length - n, o) : r.push(o),
                                    v({
                                        action: "PUSH",
                                        location: o,
                                        index: n,
                                        entries: r
                                    })
                            }
                        })
                    },
                    E = function (e, n) {
                        (0, s.
                            default)(!("object" === (void 0 === e ? "undefined" : r(e)) && void 0 !== e.state && void 0 !== n), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                        var o = (0, u.createLocation)(e, n, g(), A.location);
                        m.confirmTransitionTo(o, "REPLACE", t, function (e) {
                            e && (A.entries[A.index] = o, v({
                                action: "REPLACE",
                                location: o
                            }))
                        })
                    },
                    x = function (e) {
                        var n = d(A.index + e, 0, A.entries.length - 1),
                            o = A.entries[n];
                        m.confirmTransitionTo(o, "POP", t, function (e) {
                            e ? v({
                                action: "POP",
                                location: o,
                                index: n
                            }) : v()
                        })
                    },
                    T = function () {
                        return x(-1)
                    },
                    P = function () {
                        return x(1)
                    },
                    O = function (e) {
                        var t = A.index + e;
                        return t >= 0 && t < A.entries.length
                    },
                    C = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return m.setPrompt(e)
                    },
                    U = function (e) {
                        return m.appendListener(e)
                    },
                    A = {
                        length: b.length,
                        action: "POP",
                        location: b[y],
                        index: y,
                        entries: b,
                        createHref: w,
                        push: k,
                        replace: E,
                        go: x,
                        goBack: T,
                        goForward: P,
                        canGo: O,
                        block: C,
                        listen: U
                    };
                return A
            };
        t.
            default = p
    },
    IvSR: function (e, t, n) {
        "use strict";
        var o = {
            onObj: {},
            oneObj: {},
            on: function (e, t) {
                void 0 === this.onObj[e] && (this.onObj[e] = []),
                    this.onObj[e].push(t)
            },
            one: function (e, t) {
                void 0 === this.oneObj[e] && (this.oneObj[e] = []),
                    this.oneObj[e].push(t)
            },
            off: function (e) {
                this.onObj[e] = [],
                    this.oneObj[e] = []
            },
            trigger: function () {
                var e = void 0,
                    t = void 0;
                if (0 == arguments.length) return !1;
                if (e = arguments[0], t = [].concat(Array.prototype.slice.call(arguments, 1)), void 0 !== this.onObj[e] && this.onObj[e].length > 0) for (var n in this.onObj[e]) this.onObj[e][n].apply(null, t);
                if (void 0 !== this.oneObj[e] && this.oneObj[e].length > 0) {
                    for (var o in this.oneObj[e]) this.oneObj[e][o].apply(null, t),
                        this.oneObj[e][o] = void 0;
                    this.oneObj[e] = []
                }
            }
        };
        t.a = o
    },
    Izpu: function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var o = (t.addLeadingSlash = function (e) {
            return "/" === e.charAt(0) ? e : "/" + e
        }, t.stripLeadingSlash = function (e) {
            return "/" === e.charAt(0) ? e.substr(1) : e
        }, t.hasBasename = function (e, t) {
            return new RegExp("^" + t + "(\\/|\\?|#|$)", "i").test(e)
        });
        t.stripBasename = function (e, t) {
            return o(e, t) ? e.substr(t.length) : e
        },
            t.stripTrailingSlash = function (e) {
                return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
            },
            t.parsePath = function (e) {
                var t = e || "/",
                    n = "",
                    o = "",
                    r = t.indexOf("#"); - 1 !== r && (o = t.substr(r), t = t.substr(0, r));
                var a = t.indexOf("?");
                return -1 !== a && (n = t.substr(a), t = t.substr(0, a)),
                    {
                        pathname: t,
                        search: "?" === n ? "" : n,
                        hash: "#" === o ? "" : o
                    }
            },
            t.createPath = function (e) {
                var t = e.pathname,
                    n = e.search,
                    o = e.hash,
                    r = t || "/";
                return n && "?" !== n && (r += "?" === n.charAt(0) ? n : "?" + n),
                o && "#" !== o && (r += "#" === o.charAt(0) ? o : "#" + o),
                    r
            }
    },
    KEQ7: function (e, t, n) {
        "use strict";
        var o = n("+6Bu"),
            r = n.n(o),
            a = n("U7vG"),
            i = n.n(a),
            s = n("Nit8"),
            c = (n.n(s), function (e) {
                var t = e.title,
                    n = r()(e, ["title"]);
                return i.a.createElement("h3", {
                    className: "m-cardTitle f-cb"
                }, i.a.createElement("div", {
                    className: "f-fl"
                }, i.a.createElement("em", {
                    className: "sep"
                }), i.a.createElement("span", {
                    className: "title"
                }, t.name)), t.link && i.a.createElement("a", {
                    href: t.link,
                    className: "more f-fr",
                    "data-log": n["data-log"]
                }, "更多", i.a.createElement("em", {
                    className: "arrow"
                })))
            });
        t.a = c
    },
    KuyY: function (e, t) {},
    LHne: function (e, t, n) {
        "use strict";
        var o = n("Zx67"),
            r = n.n(o),
            a = n("Zrlr"),
            i = n.n(a),
            s = n("wxAW"),
            c = n.n(s),
            u = n("zwoO"),
            l = n.n(u),
            h = n("Pf15"),
            d = n.n(h),
            p = n("U7vG"),
            f = n.n(p);
        n.d(t, "a", function () {
            return m
        });
        var m = function (e) {
            return function (t) {
                function n() {
                    var e, t, o, a;
                    i()(this, n);
                    for (var s = arguments.length, c = Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                    return t = o = l()(this, (e = n.__proto__ || r()(n)).call.apply(e, [this].concat(c))),
                        o.state = {
                            Component: null
                        },
                        a = t,
                        l()(o, a)
                }
                return d()(n, t),
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
                                return e ? f.a.createElement(e, this.props) : null
                            }
                        }]),
                    n
            }(p.Component)
        }(function () {
            return n.e("bannerSwiper").then(n.bind(null, "FUeG"))
        })
    },
    NHKQ: function (e, t, n) {
        n.p = window.cdn || "/dist/"
    },
    Nit8: function (e, t) {},
    O27J: function (e, t, n) {
        e.exports = n("+qWx")(76)
    },
    O57f: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var o = {
            padLeft: function (e, t) {
                var n = ("" + e).length;
                return Array(t > n ? t - n + 1 || 0 : 0).join(0) + e
            }
        }
    },
    OnDC: function (e, t) {},
    PLOF: function (e, t) {},
    "R+1J": function (e, t, n) {
        "use strict";
        var o = {
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            KhtmlUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            cursor: "pointer"
        };
        e.exports = o
    },
    "Ty6/": function (e, t) {},
    U7vG: function (e, t, n) {
        e.exports = n("+qWx")(77)
    },
    Wpbd: function (e, t, n) {
        "use strict";
        var o = function (e) {
                return "/" === e.charAt(0)
            },
            r = function (e, t) {
                for (var n = t, o = n + 1, r = e.length; o < r; n += 1, o += 1) e[n] = e[o];
                e.pop()
            },
            a = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = e && e.split("/") || [],
                    a = t && t.split("/") || [],
                    i = e && o(e),
                    s = t && o(t),
                    c = i || s;
                if (e && o(e) ? a = n : n.length && (a.pop(), a = a.concat(n)), !a.length) return "/";
                var u = void 0;
                if (a.length) {
                    var l = a[a.length - 1];
                    u = "." === l || ".." === l || "" === l
                } else u = !1;
                for (var h = 0, d = a.length; d >= 0; d--) {
                    var p = a[d];
                    "." === p ? r(a, d) : ".." === p ? (r(a, d), h++) : h && (r(a, d), h--)
                }
                if (!c) for (; h--; h) a.unshift("..");
                !c || "" === a[0] || a[0] && o(a[0]) || a.unshift("");
                var f = a.join("/");
                return u && "/" !== f.substr(-1) && (f += "/"),
                    f
            };
        e.exports = a
    },
    XBGs: function (e, t) {},
    YCIw: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return g
        });
        var o = n("Zx67"),
            r = n.n(o),
            a = n("Zrlr"),
            i = n.n(a),
            s = n("wxAW"),
            c = n.n(s),
            u = n("zwoO"),
            l = n.n(u),
            h = n("Pf15"),
            d = n.n(h),
            p = n("U7vG"),
            f = n.n(p),
            m = n("D/cR"),
            v = n("BK/k"),
            g = function (e) {
                return function (t) {
                    function n(e) {
                        return i()(this, n),
                            l()(this, (n.__proto__ || r()(n)).call(this, e))
                    }
                    return d()(n, t),
                        c()(n, [{
                            key: "componentDidMount",
                            value: function () {
                                if (!v.a.get("N_userAccess")) {
                                    var e = new Date,
                                        t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
                                    v.a.set("N_userAccess", !0, {
                                        expires: t,
                                        path: "/"
                                    }),
                                        this.countUserAccess()
                                }
                            }
                        },
                            {
                                key: "countUserAccess",
                                value: function () {
                                    Object(m.d)("/countUserAccess.do")
                                }
                            },
                            {
                                key: "render",
                                value: function () {
                                    return f.a.createElement("div", {
                                        className: "g-wrap",
                                        style: {
                                            padding: "0"
                                        }
                                    }, f.a.createElement(e, this.props))
                                }
                            }]),
                        n
                }(p.Component)
            }
    },
    Ygqm: function (e, t) {
        function n(e, t, r) {
            r = r || {},
                t = t || [];
            var a, i = r.strict,
                s = !1 !== r.end,
                c = r.sensitive ? "" : "i",
                u = 0,
                l = t.length,
                h = 0,
                d = 0;
            if (e instanceof RegExp) {
                for (; a = o.exec(e.source);) t.push({
                    name: d++,
                    optional: !1,
                    offset: a.index
                });
                return e
            }
            if (Array.isArray(e)) return e = e.map(function (e) {
                return n(e, t, r).source
            }),
                new RegExp("(?:" + e.join("|") + ")", c);
            for (e = ("^" + e + (i ? "" : "/" === e[e.length - 1] ? "?" : "/?")).replace(/\/\(/g, "/(?:").replace(/([\/\.])/g, "\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g, function (e, n, o, r, a, i, s, c) {
                n = n || "",
                    o = o || "",
                    a = a || "([^\\/" + o + "]+?)",
                    s = s || "",
                    t.push({
                        name: r,
                        optional: !! s,
                        offset: c + u
                    });
                var l = (s ? "" : n) + "(?:" + o + (s ? n : "") + a + (i ? "((?:[\\/" + o + "].+?)?)" : "") + ")" + s;
                return u += l.length - e.length,
                    l
            }).replace(/\*/g, function (e, n) {
                for (var o = t.length; o-- > l && t[o].offset > n;) t[o].offset += 3;
                return "(.*)"
            }); a = o.exec(e);) {
                for (var p = 0, f = a.index;
                     "\\" === e.charAt(--f);) p++;
                p % 2 != 1 && ((l + h === t.length || t[l + h].offset > a.index) && t.splice(l + h, 0, {
                    name: d++,
                    optional: !1,
                    offset: a.index
                }), h++)
            }
            return e += s ? "$" : "/" === e[e.length - 1] ? "" : "(?=\\/|$)",
                new RegExp(e, c)
        }
        e.exports = n;
        var o = /\((?!\?)/g
    },
    aeD6: function (e, t) {},
    awwb: function (e, t, n) {
        "use strict";
        var o = n("/1Nu"),
            r = n("0tJe"),
            a = n("R+1J"),
            i = r([o]);
        e.exports = i,
            e.exports.touchStyles = a,
            e.exports.Mixin = o
    },
    ciQf: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        }
        t.__esModule = !0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
            i = n("GvBW"),
            s = o(i),
            c = n("crWv"),
            u = o(c),
            l = n("xIPz"),
            h = n("Izpu"),
            d = n("tqq1"),
            p = o(d),
            f = n("zFGm"),
            m = function () {
                try {
                    return window.history.state || {}
                } catch (e) {
                    return {}
                }
            },
            v = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, u.
                    default)(f.canUseDOM, "Browser history needs a DOM");
                var t = window.history,
                    n = (0, f.supportsHistory)(),
                    o = !(0, f.supportsPopStateOnHashChange)(),
                    i = e.forceRefresh,
                    c = void 0 !== i && i,
                    d = e.getUserConfirmation,
                    v = void 0 === d ? f.getConfirmation : d,
                    g = e.keyLength,
                    y = void 0 === g ? 6 : g,
                    b = e.basename ? (0, h.stripTrailingSlash)((0, h.addLeadingSlash)(e.basename)) : "",
                    w = function (e) {
                        var t = e || {},
                            n = t.key,
                            o = t.state,
                            r = window.location,
                            a = r.pathname,
                            i = r.search,
                            c = r.hash,
                            u = a + i + c;
                        return (0, s.
                            default)(!b || (0, h.hasBasename)(u, b), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + u + '" to begin with "' + b + '".'),
                        b && (u = (0, h.stripBasename)(u, b)),
                            (0, l.createLocation)(u, o, n)
                    },
                    k = function () {
                        return Math.random().toString(36).substr(2, y)
                    },
                    E = (0, p.
                        default)(),
                    x = function (e) {
                        a(F, e),
                            F.length = t.length,
                            E.notifyListeners(F.location, F.action)
                    },
                    T = function (e) {
                        (0, f.isExtraneousPopstateEvent)(e) || C(w(e.state))
                    },
                    P = function () {
                        C(w(m()))
                    },
                    O = !1,
                    C = function (e) {
                        if (O) O = !1,
                            x();
                        else {
                            E.confirmTransitionTo(e, "POP", v, function (t) {
                                t ? x({
                                    action: "POP",
                                    location: e
                                }) : U(e)
                            })
                        }
                    },
                    U = function (e) {
                        var t = F.location,
                            n = j.indexOf(t.key); - 1 === n && (n = 0);
                        var o = j.indexOf(e.key); - 1 === o && (o = 0);
                        var r = n - o;
                        r && (O = !0, M(r))
                    },
                    A = w(m()),
                    j = [A.key],
                    N = function (e) {
                        return b + (0, h.createPath)(e)
                    },
                    R = function (e, o) {
                        (0, s.
                            default)(!("object" === (void 0 === e ? "undefined" : r(e)) && void 0 !== e.state && void 0 !== o), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                        var a = (0, l.createLocation)(e, o, k(), F.location);
                        E.confirmTransitionTo(a, "PUSH", v, function (e) {
                            if (e) {
                                var o = N(a),
                                    r = a.key,
                                    i = a.state;
                                if (n) if (t.pushState({
                                        key: r,
                                        state: i
                                    }, null, o), c) window.location.href = o;
                                else {
                                    var u = j.indexOf(F.location.key),
                                        l = j.slice(0, -1 === u ? 0 : u + 1);
                                    l.push(a.key),
                                        j = l,
                                        x({
                                            action: "PUSH",
                                            location: a
                                        })
                                } else(0, s.
                                    default)(void 0 === i, "Browser history cannot push state in browsers that do not support HTML5 history"),
                                    window.location.href = o
                            }
                        })
                    },
                    S = function (e, o) {
                        (0, s.
                            default)(!("object" === (void 0 === e ? "undefined" : r(e)) && void 0 !== e.state && void 0 !== o), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                        var a = (0, l.createLocation)(e, o, k(), F.location);
                        E.confirmTransitionTo(a, "REPLACE", v, function (e) {
                            if (e) {
                                var o = N(a),
                                    r = a.key,
                                    i = a.state;
                                if (n) if (t.replaceState({
                                        key: r,
                                        state: i
                                    }, null, o), c) window.location.replace(o);
                                else {
                                    var u = j.indexOf(F.location.key); - 1 !== u && (j[u] = a.key),
                                        x({
                                            action: "REPLACE",
                                            location: a
                                        })
                                } else(0, s.
                                    default)(void 0 === i, "Browser history cannot replace state in browsers that do not support HTML5 history"),
                                    window.location.replace(o)
                            }
                        })
                    },
                    M = function (e) {
                        t.go(e)
                    },
                    _ = function () {
                        return M(-1)
                    },
                    I = function () {
                        return M(1)
                    },
                    D = 0,
                    L = function (e) {
                        D += e,
                            1 === D ? ((0, f.addEventListener)(window, "popstate", T), o && (0, f.addEventListener)(window, "hashchange", P)) : 0 === D && ((0, f.removeEventListener)(window, "popstate", T), o && (0, f.removeEventListener)(window, "hashchange", P))
                    },
                    B = !1,
                    W = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = E.setPrompt(e);
                        return B || (L(1), B = !0),


                            function () {
                                return B && (B = !1, L(-1)),
                                    t()
                            }
                    },
                    H = function (e) {
                        var t = E.appendListener(e);
                        return L(1),


                            function () {
                                L(-1),
                                    t()
                            }
                    },
                    F = {
                        length: t.length,
                        action: "POP",
                        location: A,
                        createHref: N,
                        push: R,
                        replace: S,
                        go: M,
                        goBack: _,
                        goForward: I,
                        block: W,
                        listen: H
                    };
                return F
            };
        t.
            default = v
    },
    crWv: function (e, t, n) {
        "use strict";
        var o = function (e, t, n, o, r, a, i, s) {
            if (!e) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, o, r, a, i, s],
                        l = 0;
                    c = new Error(t.replace(/%s/g, function () {
                        return u[l++]
                    })),
                        c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1,
                    c
            }
        };
        e.exports = o
    },
    cxPT: function (e, t, n) {
        e.exports = n("+qWx")(0)
    },
    "e6+Q": function (e, t, n) {
        e.exports = n("+qWx")(6)
    },
    "gt/O": function (e, t, n) {
        e.exports = n("+qWx")(93)
    },
    hYij: function (e, t, n) {
        "use strict";
        var o = {
                childContextTypes: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            r = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                arguments: !0,
                arity: !0
            },
            a = "function" == typeof Object.getOwnPropertySymbols;
        e.exports = function (e, t, n) {
            if ("string" != typeof t) {
                var i = Object.getOwnPropertyNames(t);
                a && (i = i.concat(Object.getOwnPropertySymbols(t)));
                for (var s = 0; s < i.length; ++s) if (!(o[i[s]] || r[i[s]] || n && n[i[s]])) try {
                    e[i[s]] = t[i[s]]
                } catch (e) {}
            }
            return e
        }
    },
    jimK: function (e, t) {},
    kjbi: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        }
        t.__esModule = !0;
        var r = Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            a = n("GvBW"),
            i = o(a),
            s = n("crWv"),
            c = o(s),
            u = n("xIPz"),
            l = n("Izpu"),
            h = n("tqq1"),
            d = o(h),
            p = n("zFGm"),
            f = {
                hashbang: {
                    encodePath: function (e) {
                        return "!" === e.charAt(0) ? e : "!/" + (0, l.stripLeadingSlash)(e)
                    },
                    decodePath: function (e) {
                        return "!" === e.charAt(0) ? e.substr(1) : e
                    }
                },
                noslash: {
                    encodePath: l.stripLeadingSlash,
                    decodePath: l.addLeadingSlash
                },
                slash: {
                    encodePath: l.addLeadingSlash,
                    decodePath: l.addLeadingSlash
                }
            },
            m = function () {
                var e = window.location.href,
                    t = e.indexOf("#");
                return -1 === t ? "" : e.substring(t + 1)
            },
            v = function (e) {
                return window.location.hash = e
            },
            g = function (e) {
                var t = window.location.href.indexOf("#");
                window.location.replace(window.location.href.slice(0, t >= 0 ? t : 0) + "#" + e)
            },
            y = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, c.
                    default)(p.canUseDOM, "Hash history needs a DOM");
                var t = window.history,
                    n = (0, p.supportsGoWithoutReloadUsingHash)(),
                    o = e.getUserConfirmation,
                    a = void 0 === o ? p.getConfirmation : o,
                    s = e.hashType,
                    h = void 0 === s ? "slash" : s,
                    y = e.basename ? (0, l.stripTrailingSlash)((0, l.addLeadingSlash)(e.basename)) : "",
                    b = f[h],
                    w = b.encodePath,
                    k = b.decodePath,
                    E = function () {
                        var e = k(m());
                        return (0, i.
                            default)(!y || (0, l.hasBasename)(e, y), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + e + '" to begin with "' + y + '".'),
                        y && (e = (0, l.stripBasename)(e, y)),
                            (0, u.createLocation)(e)
                    },
                    x = (0, d.
                        default)(),
                    T = function (e) {
                        r(q, e),
                            q.length = t.length,
                            x.notifyListeners(q.location, q.action)
                    },
                    P = !1,
                    O = null,
                    C = function () {
                        var e = m(),
                            t = w(e);
                        if (e !== t) g(t);
                        else {
                            var n = E(),
                                o = q.location;
                            if (!P && (0, u.locationsAreEqual)(o, n)) return;
                            if (O === (0, l.createPath)(n)) return;
                            O = null,
                                U(n)
                        }
                    },
                    U = function (e) {
                        if (P) P = !1,
                            T();
                        else {
                            x.confirmTransitionTo(e, "POP", a, function (t) {
                                t ? T({
                                    action: "POP",
                                    location: e
                                }) : A(e)
                            })
                        }
                    },
                    A = function (e) {
                        var t = q.location,
                            n = S.lastIndexOf((0, l.createPath)(t)); - 1 === n && (n = 0);
                        var o = S.lastIndexOf((0, l.createPath)(e)); - 1 === o && (o = 0);
                        var r = n - o;
                        r && (P = !0, D(r))
                    },
                    j = m(),
                    N = w(j);
                j !== N && g(N);
                var R = E(),
                    S = [(0, l.createPath)(R)],
                    M = function (e) {
                        return "#" + w(y + (0, l.createPath)(e))
                    },
                    _ = function (e, t) {
                        (0, i.
                            default)(void 0 === t, "Hash history cannot push state; it is ignored");
                        var n = (0, u.createLocation)(e, void 0, void 0, q.location);
                        x.confirmTransitionTo(n, "PUSH", a, function (e) {
                            if (e) {
                                var t = (0, l.createPath)(n),
                                    o = w(y + t);
                                if (m() !== o) {
                                    O = t,
                                        v(o);
                                    var r = S.lastIndexOf((0, l.createPath)(q.location)),
                                        a = S.slice(0, -1 === r ? 0 : r + 1);
                                    a.push(t),
                                        S = a,
                                        T({
                                            action: "PUSH",
                                            location: n
                                        })
                                } else(0, i.
                                    default)(!1, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),
                                    T()
                            }
                        })
                    },
                    I = function (e, t) {
                        (0, i.
                            default)(void 0 === t, "Hash history cannot replace state; it is ignored");
                        var n = (0, u.createLocation)(e, void 0, void 0, q.location);
                        x.confirmTransitionTo(n, "REPLACE", a, function (e) {
                            if (e) {
                                var t = (0, l.createPath)(n),
                                    o = w(y + t);
                                m() !== o && (O = t, g(o));
                                var r = S.indexOf((0, l.createPath)(q.location)); - 1 !== r && (S[r] = t),
                                    T({
                                        action: "REPLACE",
                                        location: n
                                    })
                            }
                        })
                    },
                    D = function (e) {
                        (0, i.
                            default)(n, "Hash history go(n) causes a full page reload in this browser"),
                            t.go(e)
                    },
                    L = function () {
                        return D(-1)
                    },
                    B = function () {
                        return D(1)
                    },
                    W = 0,
                    H = function (e) {
                        W += e,
                            1 === W ? (0, p.addEventListener)(window, "hashchange", C) : 0 === W && (0, p.removeEventListener)(window, "hashchange", C)
                    },
                    F = !1,
                    Y = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = x.setPrompt(e);
                        return F || (H(1), F = !0),


                            function () {
                                return F && (F = !1, H(-1)),
                                    t()
                            }
                    },
                    G = function (e) {
                        var t = x.appendListener(e);
                        return H(1),


                            function () {
                                H(-1),
                                    t()
                            }
                    },
                    q = {
                        length: t.length,
                        action: "POP",
                        location: R,
                        createHref: M,
                        push: _,
                        replace: I,
                        go: D,
                        goBack: L,
                        goForward: B,
                        block: Y,
                        listen: G
                    };
                return q
            };
        t.
            default = y
    },
    mJul: function (e, t, n) {
        "use strict";

        function o(e) {
            if (e = a()({}, E, e), !k) {
                var t = document.createElement("div");
                e.parent.appendChild(t),
                    k = Object(y.render)(g.a.createElement(w, null), t)
            }
            k.toast({
                text: e.text,
                delay: e.delay
            })
        }
        t.a = o;
        var r = n("woOf"),
            a = n.n(r),
            i = n("Zx67"),
            s = n.n(i),
            c = n("Zrlr"),
            u = n.n(c),
            l = n("wxAW"),
            h = n.n(l),
            d = n("zwoO"),
            p = n.n(d),
            f = n("Pf15"),
            m = n.n(f),
            v = n("U7vG"),
            g = n.n(v),
            y = n("O27J"),
            b = (n.n(y), n("0pWH")),
            w = (n.n(b), function (e) {
                function t() {
                    u()(this, t);
                    var e = p()(this, (t.__proto__ || s()(t)).call(this));
                    return e.state = {
                        text: "",
                        isShow: !1
                    },
                        e
                }
                return m()(t, e),
                    h()(t, [{
                        key: "toast",
                        value: function (e) {
                            var t = this,
                                n = e.text,
                                o = e.delay,
                                r = void 0 === o ? 2e3 : o;
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
                                return g.a.createElement("div", {
                                    className: "m-toast aBouncein",
                                    style: {
                                        display: this.state.isShow ? "block" : "none"
                                    }
                                }, g.a.createElement("div", {
                                    className: "inner"
                                }, g.a.createElement("div", {
                                    className: "main"
                                }, this.state.text)))
                            }
                        }]),
                    t
            }(v.Component)),
            k = null,
            E = {
                delay: 2e3,
                parent: document.body
            }
    },
    ndtm: function (e, t) {},
    oBB5: function (e, t, n) {
        "use strict";
        var o = n("U7vG"),
            r = n.n(o),
            a = n("HJfm"),
            i = n("jimK"),
            s = (n.n(i), function (e) {
                var t = e.theme,
                    n = void 0 === t ? "light" : t,
                    o = e.type,
                    i = void 0 === o ? "" : o,
                    s = e.detail,
                    c = void 0 === s ? {} : s,
                    u = {},
                    l = "https://easyread.nosdn.127.net/web/trunk/1504074309695/bg_loading_failurex2x.png";
                u[a.b.BOOK_NOT_FOUND] = {
                    imgUrl: "https://easyread.nosdn.127.net/web/trunk/1504074283649/bg_book_failurex2x.png",
                    desc: "该书籍已失效<br>去首页找找感兴趣的书吧",
                    btnName: "去首页",
                    handleClick: function () {
                        location.href = "/home.do"
                    }
                },
                    u[a.b.REQUEST_ERROR] = {
                        imgUrl: l,
                        desc: "加载失败<br>点击按钮重新加载",
                        btnName: "再试试",
                        handleClick: function () {
                            location.reload()
                        }
                    },
                    u[a.b.CUSTOM_ERROR] = {
                        imgUrl: l,
                        desc: c.desc,
                        btnName: c.btnName,
                        handleClick: function () {
                            location.href = c.link
                        }
                    };
                var h = u[i];
                return r.a.createElement("div", {
                    className: "m-page-error"
                }, r.a.createElement("img", {
                    src: h.imgUrl
                }), r.a.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: h.desc
                    }
                }), h.btnName && r.a.createElement("a", {
                    className: "btn btn--" + n + "-active",
                    href: "javascript:;",
                    onClick: h.handleClick
                }, h.btnName))
            });
        t.a = s
    },
    pA8T: function (e, t) {},
    s3sw: function (e, t) {},
    "tBL+": function (e, t, n) {
        "use strict";

        function o(e, t) {
            var n = e.dot,
                o = e.message,
                r = {
                    dot: n
                };
            o && (r.message = l()(o)),
                Object(h.a)("/statistics/log/upload.json", r).then(function (e) {
                    t && t()
                })
        }
        function r(e) {
            var t = e.dot,
                n = e.message,
                o = {
                    dot: t
                };
            n && (o.message = l()(n));
            var r = new XMLHttpRequest;
            r.open("get", "/statistics/log/upload.json?" + Object(h.c)(o), !1),
                r.send(null)
        }
        function a(e, t, n) {
            var o = e.dot,
                r = e.message,
                a = c()({
                    dot: o
                }, t);
            r && (a.message = l()(r));
            var i = Object(d.c)();
            Object(h.b)(i + "/statistics/log/cors/logUpload.json", a).then(function (e) {
                n && n()
            })
        }
        function i(e, t, n) {
            var o = e.dot,
                r = e.message,
                a = c()({
                    dot: o
                }, t);
            r && (a.message = l()(r)),
                Object(h.b)("/statistics/log/cors/logUpload.json", a).then(function (e) {
                    n && n()
                })
        }
        n.d(t, "a", function () {
            return o
        }),
            n.d(t, "d", function () {
                return r
            }),
            n.d(t, "b", function () {
                return a
            }),
            n.d(t, "c", function () {
                return i
            });
        var s = n("Dd8w"),
            c = n.n(s),
            u = n("mvHQ"),
            l = n.n(u),
            h = n("D/cR"),
            d = n("vPHJ")
    },
    tqq1: function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var o = n("GvBW"),
            r = function (e) {
                return e && e.__esModule ? e : {
                    default:
                    e
                }
            }(o),
            a = function () {
                var e = null,
                    t = function (t) {
                        return (0, r.
                            default)(null == e, "A history supports only one prompt at a time"),
                            e = t,


                            function () {
                                e === t && (e = null)
                            }
                    },
                    n = function (t, n, o, a) {
                        if (null != e) {
                            var i = "function" == typeof e ? e(t, n) : e;
                            "string" == typeof i ? "function" == typeof o ? o(i, a) : ((0, r.
                                default)(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), a(!0)) : a(!1 !== i)
                        } else a(!0)
                    },
                    o = [];
                return {
                    setPrompt: t,
                    confirmTransitionTo: n,
                    appendListener: function (e) {
                        var t = !0,
                            n = function () {
                                t && e.apply(void 0, arguments)
                            };
                        return o.push(n),


                            function () {
                                t = !1,
                                    o = o.filter(function (e) {
                                        return e !== n
                                    })
                            }
                    },
                    notifyListeners: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        o.forEach(function (e) {
                            return e.apply(void 0, t)
                        })
                    }
                }
            };
        t.
            default = a
    },
    vPHJ: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return r
        }),
            n.d(t, "h", function () {
                return a
            }),
            n.d(t, "a", function () {
                return i
            }),
            n.d(t, "f", function () {
                return c
            }),
            n.d(t, "e", function () {
                return u
            }),
            n.d(t, "i", function () {
                return l
            }),
            n.d(t, "g", function () {
                return h
            }),
            n.d(t, "d", function () {
                return d
            }),
            n.d(t, "c", function () {
                return p
            });
        var o = n("HJfm"),
            r = function (e) {
                return e && e.replace(/[\n\r]+/g, " ").replace(/\t/g, " ").replace(/\<p\>/gi, "").replace(/\<\/p\>/gi, "")
            },
            a = function () {
                var e = window.location.search,
                    t = new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                    n = {};
                return e && e.replace(t, function (e, t, o, r) {
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
            u = function (e) {
                var t = e.split("/");
                return e.indexOf("://") > -1 ? t[0] + "//" + t[2] : t[0]
            },
            l = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return t ? (n += t.offsetTop, e(t.offsetParent, n)) : n
            },
            h = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                    n = +new Date,
                    o = window.pageYOffset,
                    r = e - o,
                    a = requestAnimationFrame(function e() {
                        var i = t - Math.max(0, n + t - +new Date);
                        window.scrollTo(0, i * r / t + o),
                            a = requestAnimationFrame(e),
                        i == t && cancelAnimationFrame(a)
                    })
            },
            d = function () {
                return location.host.indexOf("yuedu.163.com") > -1 ? o.d.TEST : location.host.indexOf("pre.kuxuanbook.com") > -1 ? o.d.PRE : o.d.ONLINE
            },
            p = function () {
                var e = "";
                return location.host.indexOf("pay.kuxuanbook") > -1 ? (e = location.host.indexOf("yuedu.163.com") > -1 ? "//www.kuxuanbook.yuedu.163.com" : "//www.kuxuanbook.com", location.host.indexOf("prepay.kuxuanbook.com") > -1 && (e = "//pre.kuxuanbook.com")) : (e = location.host.indexOf("yuedu.163.com") > -1 ? "//pay.kuxuanbook.yuedu.163.com" : "//pay.kuxuanbook.com", location.host.indexOf("pre.kuxuanbook.com") > -1 && (e = "//prepay.kuxuanbook.com")),
                    e
            }
    },
    vxkz: function (e, t) {},
    wqO5: function (e, t, n) {
        e.exports = n("+qWx")(78)
    },
    xIPz: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default:
                e
            }
        }
        t.__esModule = !0,
            t.locationsAreEqual = t.createLocation = void 0;
        var r = Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            a = n("Wpbd"),
            i = o(a),
            s = n("FKtm"),
            c = o(s),
            u = n("Izpu");
        t.createLocation = function (e, t, n, o) {
            var a = void 0;
            "string" == typeof e ? (a = (0, u.parsePath)(e), a.state = t) : (a = r({}, e), void 0 === a.pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== t && void 0 === a.state && (a.state = t));
            try {
                a.pathname = decodeURI(a.pathname)
            } catch (e) {
                throw e instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e
            }
            return n && (a.key = n),
                o ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, i.
                    default)(a.pathname, o.pathname)) : a.pathname = o.pathname : a.pathname || (a.pathname = "/"),
                a
        },
            t.locationsAreEqual = function (e, t) {
                return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && (0, c.
                    default)(e.state, t.state)
            }
    },
    zFGm: function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        t.canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement),
            t.addEventListener = function (e, t, n) {
                return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
            },
            t.removeEventListener = function (e, t, n) {
                return e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
            },
            t.getConfirmation = function (e, t) {
                return t(window.confirm(e))
            },
            t.supportsHistory = function () {
                var e = window.navigator.userAgent;
                return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && (window.history && "pushState" in window.history)
            },
            t.supportsPopStateOnHashChange = function () {
                return -1 === window.navigator.userAgent.indexOf("Trident")
            },
            t.supportsGoWithoutReloadUsingHash = function () {
                return -1 === window.navigator.userAgent.indexOf("Firefox")
            },
            t.isExtraneousPopstateEvent = function (e) {
                return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            }
    }
}, ["AE+s"]);