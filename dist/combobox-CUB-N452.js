import { h as $e, i as g, n as q, Z as Ke, ae as Ue, M as Re, W as re, K as qe, j as Ge, l as Je, T as Ye, k as Qe, m as te, F as Ze, z as Xe, v as et, q as tt, r as ce, t as nt, w as le, x as ot, y as de, A as it, N as De, p as st, I as be, G as rt, $ as Fe, C as ke, E as ge, D as lt, J as at, L as ut, U as ct, Y as dt, O as pt, V as ft, P as ht, Q as mt, R as vt, _ as ye, a0 as bt, S as Ce, a1 as gt, af as xt, a2 as we, a3 as St, a6 as _, a7 as F, a9 as It, ag as Ot, ac as Me, ad as Et } from "./index-WJdgKpVa.js";
import * as ie from "react";
import $, { useEffect as xe, useRef as N, createContext as Se, useReducer as Tt, createRef as Rt, useCallback as _e, useMemo as G, useId as pe, useContext as Ie, useState as yt, Fragment as Ae } from "react";
import { r as X } from "./index-DsprzSCj.js";
function oe(e, s, t) {
  let n = t.initialDeps ?? [], o;
  return () => {
    var l, r, i, a;
    let p;
    t.key && ((l = t.debug) != null && l.call(t)) && (p = Date.now());
    const d = e();
    if (!(d.length !== n.length || d.some((u, S) => n[S] !== u)))
      return o;
    n = d;
    let I;
    if (t.key && ((r = t.debug) != null && r.call(t)) && (I = Date.now()), o = s(...d), t.key && ((i = t.debug) != null && i.call(t))) {
      const u = Math.round((Date.now() - p) * 100) / 100, S = Math.round((Date.now() - I) * 100) / 100, x = S / 16, h = (R, D) => {
        for (R = String(R); R.length < D; )
          R = " " + R;
        return R;
      };
      console.info(
        `%c⏱ ${h(S, 5)} /${h(u, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * x, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (a = t == null ? void 0 : t.onChange) == null || a.call(t, o), o;
  };
}
function me(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Ct = (e, s) => Math.abs(e - s) < 1, wt = (e, s, t) => {
  let n;
  return function(...o) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, o), t);
  };
}, Mt = (e) => e, _t = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let o = s; o <= t; o++)
    n.push(o);
  return n;
}, Pt = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const o = (r) => {
    const { width: i, height: a } = r;
    s({ width: Math.round(i), height: Math.round(a) });
  };
  if (o(t.getBoundingClientRect()), !n.ResizeObserver)
    return () => {
    };
  const l = new n.ResizeObserver((r) => {
    const i = r[0];
    if (i != null && i.borderBoxSize) {
      const a = i.borderBoxSize[0];
      if (a) {
        o({ width: a.inlineSize, height: a.blockSize });
        return;
      }
    }
    o(t.getBoundingClientRect());
  });
  return l.observe(t, { box: "border-box" }), () => {
    l.unobserve(t);
  };
}, Pe = {
  passive: !0
}, zt = typeof window > "u" ? !0 : "onscrollend" in window, $t = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let o = 0;
  const l = zt ? () => {
  } : wt(
    n,
    () => {
      s(o, !1);
    },
    e.options.isScrollingResetDelay
  ), r = (p) => () => {
    o = t[e.options.horizontal ? "scrollLeft" : "scrollTop"], l(), s(o, p);
  }, i = r(!0), a = r(!1);
  return a(), t.addEventListener("scroll", i, Pe), t.addEventListener("scrollend", a, Pe), () => {
    t.removeEventListener("scroll", i), t.removeEventListener("scrollend", a);
  };
}, Dt = (e, s, t) => {
  if (s != null && s.borderBoxSize) {
    const n = s.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[t.options.horizontal ? "width" : "height"]
  );
}, Ft = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var o, l;
  const r = e + s;
  (l = (o = n.scrollElement) == null ? void 0 : o.scrollTo) == null || l.call(o, {
    [n.options.horizontal ? "left" : "top"]: r,
    behavior: t
  });
};
class kt {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((l) => {
          this._measureElement(l.target, l);
        });
      }));
      return {
        disconnect: () => {
          var o;
          return (o = n()) == null ? void 0 : o.disconnect();
        },
        observe: (o) => {
          var l;
          return (l = n()) == null ? void 0 : l.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var l;
          return (l = n()) == null ? void 0 : l.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([n, o]) => {
        typeof o > "u" && delete t[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Mt,
        rangeExtractor: _t,
        onChange: () => {
        },
        measureElement: Dt,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        ...t
      };
    }, this.notify = (t, n) => {
      var o, l;
      const { startIndex: r, endIndex: i } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      }, a = this.calculateRange();
      (t || r !== (a == null ? void 0 : a.startIndex) || i !== (a == null ? void 0 : a.endIndex)) && ((l = (o = this.options).onChange) == null || l.call(o, this, n));
    }, this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.observer.disconnect(), this.elementsCache.clear();
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.notify(!1, !1);
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.notify(!1, !1);
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, l) => {
            this.scrollAdjustments = 0, this.scrollDirection = l ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o;
            const r = this.isScrolling;
            this.isScrolling = l, this.notify(r !== l, l);
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, n) => {
      const o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
      for (let r = n - 1; r >= 0; r--) {
        const i = t[r];
        if (o.has(i.lane))
          continue;
        const a = l.get(
          i.lane
        );
        if (a == null || i.end > a.end ? l.set(i.lane, i) : i.end < a.end && o.set(i.lane, !0), o.size === this.options.lanes)
          break;
      }
      return l.size === this.options.lanes ? Array.from(l.values()).sort((r, i) => r.end === i.end ? r.index - i.index : r.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = oe(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, o, l, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: o,
        getItemKey: l,
        enabled: r
      }),
      {
        key: !1
      }
    ), this.getMeasurements = oe(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: o, getItemKey: l, enabled: r }, i) => {
        var a;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const p = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const d = this.measurementsCache.slice(0, p);
        for (let c = p; c < t; c++) {
          let I = (a = this.measurementsCache[c]) == null ? void 0 : a.measureElement;
          I || (I = (E) => {
            const y = l(c), O = this.elementsCache.get(y);
            if (!E) {
              O && (this.observer.unobserve(O), this.elementsCache.delete(y));
              return;
            }
            O !== E && (O && this.observer.unobserve(O), this.observer.observe(E), this.elementsCache.set(y, E)), E.isConnected && this.resizeItem(
              c,
              this.options.measureElement(E, void 0, this)
            );
          });
          const u = l(c), S = this.options.lanes === 1 ? d[c - 1] : this.getFurthestMeasurement(d, c), x = S ? S.end + this.options.gap : n + o, h = i.get(u), R = typeof h == "number" ? h : this.options.estimateSize(c), D = x + R, M = S ? S.lane : c % this.options.lanes;
          d[c] = {
            index: c,
            start: x,
            size: R,
            end: D,
            key: u,
            lane: M,
            measureElement: I
          };
        }
        return this.measurementsCache = d, d;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = oe(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (t, n, o) => this.range = t.length > 0 && n > 0 ? At({
        measurements: t,
        outerSize: n,
        scrollOffset: o
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = oe(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (t, n, o, l) => n === null ? [] : t({
        startIndex: n.startIndex,
        endIndex: n.endIndex,
        overscan: o,
        count: l
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, o = t.getAttribute(n);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, n) => {
      const o = this.indexFromElement(t), l = this.getMeasurements()[o];
      if (!l || !t.isConnected) {
        this.elementsCache.forEach((i, a) => {
          i === t && (this.observer.unobserve(t), this.elementsCache.delete(a));
        });
        return;
      }
      const r = this.elementsCache.get(l.key);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(l.key, t)), this.resizeItem(o, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const o = this.getMeasurements()[t];
      if (!o)
        return;
      const l = this.itemSizeCache.get(o.key) ?? o.size, r = n - l;
      r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, r, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", r), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, n)), this.notify(!0, !1));
    }, this.measureElement = (t) => {
      t && this._measureElement(t, void 0);
    }, this.getVirtualItems = oe(
      () => [this.getIndexes(), this.getMeasurements()],
      (t, n) => {
        const o = [];
        for (let l = 0, r = t.length; l < r; l++) {
          const i = t[l], a = n[i];
          o.push(a);
        }
        return o;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return me(
          n[Le(
            0,
            n.length - 1,
            (o) => me(n[o]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n) => {
      const o = this.getSize(), l = this.getScrollOffset();
      n === "auto" && (t <= l ? n = "start" : t >= l + o ? n = "end" : n = "start"), n === "start" ? t = t : n === "end" ? t = t - o : n === "center" && (t = t - o / 2);
      const r = this.options.horizontal ? "scrollWidth" : "scrollHeight", a = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[r] : this.scrollElement[r] : 0) - o;
      return Math.max(Math.min(a, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const o = this.getMeasurements()[t];
      if (!o)
        return;
      const l = this.getSize(), r = this.getScrollOffset();
      if (n === "auto")
        if (o.end >= r + l - this.options.scrollPaddingEnd)
          n = "end";
        else if (o.start <= r + this.options.scrollPaddingStart)
          n = "start";
        else
          return [r, n];
      const i = n === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(i, n), n];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (t, { align: n = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, n), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (t, { align: n = "auto", behavior: o } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const l = this.getOffsetForIndex(t, n);
      if (!l) return;
      const [r, i] = l;
      this._scrollToOffset(r, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [p] = me(
            this.getOffsetForIndex(t, i)
          );
          Ct(p, this.getScrollOffset()) || this.scrollToIndex(t, { align: i, behavior: o });
        } else
          this.scrollToIndex(t, { align: i, behavior: o });
      }));
    }, this.scrollBy = (t, { behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var t;
      const n = this.getMeasurements();
      let o;
      return n.length === 0 ? o = this.options.paddingStart : o = this.options.lanes === 1 ? ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0 : Math.max(
        ...n.slice(-this.options.lanes).map((l) => l.end)
      ), o - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: o
    }) => {
      this.options.scrollToFn(t, { behavior: o, adjustments: n }, this);
    }, this.measure = () => {
      var t, n;
      this.itemSizeCache = /* @__PURE__ */ new Map(), (n = (t = this.options).onChange) == null || n.call(t, this, !1);
    }, this.setOptions(s);
  }
}
const Le = (e, s, t, n) => {
  for (; e <= s; ) {
    const o = (e + s) / 2 | 0, l = t(o);
    if (l < n)
      e = o + 1;
    else if (l > n)
      s = o - 1;
    else
      return o;
  }
  return e > 0 ? e - 1 : 0;
};
function At({
  measurements: e,
  outerSize: s,
  scrollOffset: t
}) {
  const n = e.length - 1, l = Le(0, n, (i) => e[i].start, t);
  let r = l;
  for (; r < n && e[r].end < t + s; )
    r++;
  return { startIndex: l, endIndex: r };
}
const Lt = typeof document < "u" ? ie.useLayoutEffect : ie.useEffect;
function Nt(e) {
  const s = ie.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (o, l) => {
      var r;
      l ? X.flushSync(s) : s(), (r = e.onChange) == null || r.call(e, o, l);
    }
  }, [n] = ie.useState(
    () => new kt(t)
  );
  return n.setOptions(t), ie.useEffect(() => n._didMount(), []), Lt(() => n._willUpdate()), n;
}
function Vt(e) {
  return Nt({
    observeElementRect: Pt,
    observeElementOffset: $t,
    scrollToFn: Ft,
    ...e
  });
}
function Bt(e, s, t, n) {
  let o = $e(t);
  xe(() => {
    e = e ?? window;
    function l(r) {
      o.current(r);
    }
    return e.addEventListener(s, l, n), () => e.removeEventListener(s, l, n);
  }, [e, s, n]);
}
function Ne(e) {
  let s = N({ value: "", selectionStart: null, selectionEnd: null });
  return Bt(e.current, "blur", (t) => {
    let n = t.target;
    n instanceof HTMLInputElement && (s.current = { value: n.value, selectionStart: n.selectionStart, selectionEnd: n.selectionEnd });
  }), g(() => {
    let t = e.current;
    if (document.activeElement !== t && t instanceof HTMLInputElement && t.isConnected) {
      if (t.focus({ preventScroll: !0 }), t.value !== s.current.value) t.setSelectionRange(t.value.length, t.value.length);
      else {
        let { selectionStart: n, selectionEnd: o } = s.current;
        n !== null && o !== null && t.setSelectionRange(n, o);
      }
      s.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function Wt(e, { container: s, accept: t, walk: n }) {
  let o = N(t), l = N(n);
  xe(() => {
    o.current = t, l.current = n;
  }, [t, n]), q(() => {
    if (!s || !e) return;
    let r = Ke(s);
    if (!r) return;
    let i = o.current, a = l.current, p = Object.assign((c) => i(c), { acceptNode: i }), d = r.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, p, !1);
    for (; d.nextNode(); ) a(d.currentNode);
  }, [s, e, o, l]);
}
function ze(e, s) {
  let t = N([]), n = g(e);
  xe(() => {
    let o = [...t.current];
    for (let [l, r] of s.entries()) if (t.current[l] !== r) {
      let i = n(s, o);
      return t.current = s, i;
    }
  }, [n, ...s]);
}
function jt(e) {
  function s() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", s));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", s), s());
}
let Z = [];
jt(() => {
  function e(s) {
    if (!(s.target instanceof HTMLElement) || s.target === document.body || Z[0] === s.target) return;
    let t = s.target;
    t = t.closest(Ue), Z.unshift(t ?? s.target), Z = Z.filter((n) => n != null && n.isConnected), Z.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
var Oe = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Oe || {}), Ht = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ht || {}), Kt = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Kt || {}), Ut = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Ut || {}), qt = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e))(qt || {});
function ve(e, s = (t) => t) {
  let t = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, n = s(e.options.slice()), o = n.length > 0 && n[0].dataRef.current.order !== null ? n.sort((r, i) => r.dataRef.current.order - i.dataRef.current.order) : Et(n, (r) => r.dataRef.current.domRef.current), l = t ? o.indexOf(t) : null;
  return l === -1 && (l = null), { options: o, activeOptionIndex: l };
}
let Gt = { 1(e) {
  var s;
  return (s = e.dataRef.current) != null && s.disabled || e.comboboxState === 1 ? e : { ...e, activeOptionIndex: null, comboboxState: 1, isTyping: !1, activationTrigger: 2, __demoMode: !1 };
}, 0(e) {
  var s, t;
  if ((s = e.dataRef.current) != null && s.disabled || e.comboboxState === 0) return e;
  if ((t = e.dataRef.current) != null && t.value) {
    let n = e.dataRef.current.calculateIndex(e.dataRef.current.value);
    if (n !== -1) return { ...e, activeOptionIndex: n, comboboxState: 0, __demoMode: !1 };
  }
  return { ...e, comboboxState: 0, __demoMode: !1 };
}, 3(e, s) {
  return e.isTyping === s.isTyping ? e : { ...e, isTyping: s.isTyping };
}, 2(e, s) {
  var t, n, o, l, r;
  if ((t = e.dataRef.current) != null && t.disabled || (n = e.dataRef.current) != null && n.optionsRef.current && !((o = e.dataRef.current) != null && o.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
  if (e.virtual) {
    let { options: d, disabled: c } = e.virtual, I = s.focus === _.Specific ? s.idx : Me(s, { resolveItems: () => d, resolveActiveIndex: () => {
      var S, x;
      return (x = (S = e.activeOptionIndex) != null ? S : d.findIndex((h) => !c(h))) != null ? x : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), u = (l = s.trigger) != null ? l : 2;
    return e.activeOptionIndex === I && e.activationTrigger === u ? e : { ...e, activeOptionIndex: I, activationTrigger: u, isTyping: !1, __demoMode: !1 };
  }
  let i = ve(e);
  if (i.activeOptionIndex === null) {
    let d = i.options.findIndex((c) => !c.dataRef.current.disabled);
    d !== -1 && (i.activeOptionIndex = d);
  }
  let a = s.focus === _.Specific ? s.idx : Me(s, { resolveItems: () => i.options, resolveActiveIndex: () => i.activeOptionIndex, resolveId: (d) => d.id, resolveDisabled: (d) => d.dataRef.current.disabled }), p = (r = s.trigger) != null ? r : 2;
  return e.activeOptionIndex === a && e.activationTrigger === p ? e : { ...e, ...i, isTyping: !1, activeOptionIndex: a, activationTrigger: p, __demoMode: !1 };
}, 4: (e, s) => {
  var t, n, o;
  if ((t = e.dataRef.current) != null && t.virtual) return { ...e, options: [...e.options, s.payload] };
  let l = s.payload, r = ve(e, (a) => (a.push(l), a));
  e.activeOptionIndex === null && (n = e.dataRef.current) != null && n.isSelected(s.payload.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(l));
  let i = { ...e, ...r, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (i.activeOptionIndex = 0), i;
}, 5: (e, s) => {
  var t;
  if ((t = e.dataRef.current) != null && t.virtual) return { ...e, options: e.options.filter((o) => o.id !== s.id) };
  let n = ve(e, (o) => {
    let l = o.findIndex((r) => r.id === s.id);
    return l !== -1 && o.splice(l, 1), o;
  });
  return { ...e, ...n, activationTrigger: 2 };
}, 6: (e, s) => e.activationTrigger === s.trigger ? e : { ...e, activationTrigger: s.trigger }, 7: (e, s) => {
  var t, n;
  if (e.virtual === null) return { ...e, virtual: { options: s.options, disabled: (t = s.disabled) != null ? t : () => !1 } };
  if (e.virtual.options === s.options && e.virtual.disabled === s.disabled) return e;
  let o = e.activeOptionIndex;
  if (e.activeOptionIndex !== null) {
    let l = s.options.indexOf(e.virtual.options[e.activeOptionIndex]);
    l !== -1 ? o = l : o = null;
  }
  return { ...e, activeOptionIndex: o, virtual: { options: s.options, disabled: (n = s.disabled) != null ? n : () => !1 } };
} }, Ee = Se(null);
Ee.displayName = "ComboboxActionsContext";
function ae(e) {
  let s = Ie(Ee);
  if (s === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, ae), t;
  }
  return s;
}
let Ve = Se(null);
function Jt(e) {
  let s = ne("VirtualProvider"), { options: t } = s.virtual, [n, o] = G(() => {
    let p = s.optionsRef.current;
    if (!p) return [0, 0];
    let d = window.getComputedStyle(p);
    return [parseFloat(d.paddingBlockStart || d.paddingTop), parseFloat(d.paddingBlockEnd || d.paddingBottom)];
  }, [s.optionsRef.current]), l = Vt({ enabled: t.length !== 0, scrollPaddingStart: n, scrollPaddingEnd: o, count: t.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    var p;
    return (p = s.optionsRef.current) != null ? p : null;
  }, overscan: 12 }), [r, i] = yt(0);
  q(() => {
    i((p) => p + 1);
  }, [t]);
  let a = l.getVirtualItems();
  return a.length === 0 ? null : $.createElement(Ve.Provider, { value: l }, $.createElement("div", { style: { position: "relative", width: "100%", height: `${l.getTotalSize()}px` }, ref: (p) => {
    if (p) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || s.activationTrigger === 0) return;
      s.activeOptionIndex !== null && t.length > s.activeOptionIndex && l.scrollToIndex(s.activeOptionIndex);
    }
  } }, a.map((p) => {
    var d;
    return $.createElement(Ae, { key: p.key }, $.cloneElement((d = e.children) == null ? void 0 : d.call(e, { ...e.slot, option: t[p.index] }), { key: `${r}-${p.key}`, "data-index": p.index, "aria-setsize": t.length, "aria-posinset": p.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${p.start}px)`, overflowAnchor: "none" } }));
  })));
}
let se = Se(null);
se.displayName = "ComboboxDataContext";
function ne(e) {
  let s = Ie(se);
  if (s === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, ne), t;
  }
  return s;
}
function Yt(e, s) {
  return te(s.type, Gt, e, s);
}
let Qt = Ae;
function Zt(e, s) {
  var t, n;
  let o = Ge(), { value: l, defaultValue: r, onChange: i, form: a, name: p, by: d, disabled: c = o || !1, onClose: I, __demoMode: u = !1, multiple: S = !1, immediate: x = !1, virtual: h = null, nullable: R, ...D } = e, M = Je(r), [E = S ? [] : void 0, y] = Ye(l, i, M), [O, b] = Tt(Yt, { dataRef: Rt(), comboboxState: u ? 0 : 1, isTyping: !1, options: [], virtual: h ? { options: h.options, disabled: (t = h.disabled) != null ? t : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, __demoMode: u }), V = N(!1), U = N({ static: !1, hold: !1 }), J = N(null), j = N(null), Y = N(null), k = Qe(d), C = g((v) => h ? d === null ? h.options.indexOf(v) : h.options.findIndex((T) => k(T, v)) : O.options.findIndex((T) => k(T.dataRef.current.value, v))), A = _e((v) => te(m.mode, { 1: () => E.some((T) => k(T, v)), 0: () => k(E, v) }), [E]), Q = g((v) => O.activeOptionIndex === C(v)), m = G(() => ({ ...O, immediate: x, optionsPropsRef: U, inputRef: J, buttonRef: j, optionsRef: Y, value: E, defaultValue: M, disabled: c, mode: S ? 1 : 0, virtual: h ? O.virtual : null, get activeOptionIndex() {
    if (V.current && O.activeOptionIndex === null && (h ? h.options.length > 0 : O.options.length > 0)) {
      if (h) {
        let T = h.options.findIndex((K) => {
          var ue, Te;
          return !((Te = (ue = h.disabled) == null ? void 0 : ue.call(h, K)) != null && Te);
        });
        if (T !== -1) return T;
      }
      let v = O.options.findIndex((T) => !T.dataRef.current.disabled);
      if (v !== -1) return v;
    }
    return O.activeOptionIndex;
  }, calculateIndex: C, compare: k, isSelected: A, isActive: Q }), [E, M, c, S, u, O, h]);
  q(() => {
    var v;
    h && b({ type: 7, options: h.options, disabled: (v = h.disabled) != null ? v : null });
  }, [h, h == null ? void 0 : h.options, h == null ? void 0 : h.disabled]), q(() => {
    O.dataRef.current = m;
  }, [m]);
  let ee = m.comboboxState === 0;
  Ze(ee, [m.buttonRef, m.inputRef, m.optionsRef], () => H.closeCombobox());
  let z = G(() => {
    var v, T, K;
    return { open: m.comboboxState === 0, disabled: c, activeIndex: m.activeOptionIndex, activeOption: m.activeOptionIndex === null ? null : m.virtual ? m.virtual.options[(v = m.activeOptionIndex) != null ? v : 0] : (K = (T = m.options[m.activeOptionIndex]) == null ? void 0 : T.dataRef.current.value) != null ? K : null, value: E };
  }, [m, c, E]), fe = g(() => {
    if (m.activeOptionIndex !== null) {
      if (H.setIsTyping(!1), m.virtual) w(m.virtual.options[m.activeOptionIndex]);
      else {
        let { dataRef: v } = m.options[m.activeOptionIndex];
        w(v.current.value);
      }
      H.goToOption(_.Specific, m.activeOptionIndex);
    }
  }), he = g(() => {
    b({ type: 0 }), V.current = !0;
  }), f = g(() => {
    b({ type: 1 }), V.current = !1, I == null || I();
  }), B = g((v) => {
    b({ type: 3, isTyping: v });
  }), P = g((v, T, K) => (V.current = !1, v === _.Specific ? b({ type: 2, focus: _.Specific, idx: T, trigger: K }) : b({ type: 2, focus: v, trigger: K }))), W = g((v, T) => (b({ type: 4, payload: { id: v, dataRef: T } }), () => {
    m.isActive(T.current.value) && (V.current = !0), b({ type: 5, id: v });
  })), w = g((v) => te(m.mode, { 0() {
    return y == null ? void 0 : y(v);
  }, 1() {
    let T = m.value.slice(), K = T.findIndex((ue) => k(ue, v));
    return K === -1 ? T.push(v) : T.splice(K, 1), y == null ? void 0 : y(T);
  } })), L = g((v) => {
    b({ type: 6, trigger: v });
  }), H = G(() => ({ onChange: w, registerOption: W, goToOption: P, setIsTyping: B, closeCombobox: f, openCombobox: he, setActivationTrigger: L, selectActiveOption: fe }), []), [Be, We] = Xe(), je = s === null ? {} : { ref: s }, He = _e(() => {
    if (M !== void 0) return y == null ? void 0 : y(M);
  }, [y, M]);
  return $.createElement(We, { value: Be, props: { htmlFor: (n = m.inputRef.current) == null ? void 0 : n.id }, slot: { open: m.comboboxState === 0, disabled: c } }, $.createElement(et, null, $.createElement(Ee.Provider, { value: H }, $.createElement(se.Provider, { value: m }, $.createElement(tt, { value: te(m.comboboxState, { 0: ce.Open, 1: ce.Closed }) }, p != null && $.createElement(nt, { disabled: c, data: E != null ? { [p]: E } : {}, form: a, onReset: He }), le({ ourProps: je, theirProps: D, slot: z, defaultTag: Qt, name: "Combobox" }))))));
}
let Xt = "input";
function en(e, s) {
  var t, n, o, l, r;
  let i = ne("Combobox.Input"), a = ae("Combobox.Input"), p = pe(), d = ot(), { id: c = d || `headlessui-combobox-input-${p}`, onChange: I, displayValue: u, disabled: S = i.disabled || !1, autoFocus: x = !1, type: h = "text", ...R } = e, D = de(i.inputRef, s, it()), M = De(i.inputRef), E = st(), y = g(() => {
    a.onChange(null), i.optionsRef.current && (i.optionsRef.current.scrollTop = 0), a.goToOption(_.Nothing);
  }), O = G(() => {
    var f;
    return typeof u == "function" && i.value !== void 0 ? (f = u(i.value)) != null ? f : "" : typeof i.value == "string" ? i.value : "";
  }, [i.value, u]);
  ze(([f, B], [P, W]) => {
    if (i.isTyping) return;
    let w = i.inputRef.current;
    w && ((W === 0 && B === 1 || f !== P) && (w.value = f), requestAnimationFrame(() => {
      if (i.isTyping || !w || (M == null ? void 0 : M.activeElement) !== w) return;
      let { selectionStart: L, selectionEnd: H } = w;
      Math.abs((H ?? 0) - (L ?? 0)) === 0 && L === 0 && w.setSelectionRange(w.value.length, w.value.length);
    }));
  }, [O, i.comboboxState, M, i.isTyping]), ze(([f], [B]) => {
    if (f === 0 && B === 1) {
      if (i.isTyping) return;
      let P = i.inputRef.current;
      if (!P) return;
      let W = P.value, { selectionStart: w, selectionEnd: L, selectionDirection: H } = P;
      P.value = "", P.value = W, H !== null ? P.setSelectionRange(w, L, H) : P.setSelectionRange(w, L);
    }
  }, [i.comboboxState]);
  let b = N(!1), V = g(() => {
    b.current = !0;
  }), U = g(() => {
    E.nextFrame(() => {
      b.current = !1;
    });
  }), J = g((f) => {
    switch (a.setIsTyping(!0), f.key) {
      case F.Enter:
        if (i.comboboxState !== 0 || b.current) return;
        if (f.preventDefault(), f.stopPropagation(), i.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), i.mode === 0 && a.closeCombobox();
        break;
      case F.ArrowDown:
        return f.preventDefault(), f.stopPropagation(), te(i.comboboxState, { 0: () => a.goToOption(_.Next), 1: () => a.openCombobox() });
      case F.ArrowUp:
        return f.preventDefault(), f.stopPropagation(), te(i.comboboxState, { 0: () => a.goToOption(_.Previous), 1: () => {
          X.flushSync(() => a.openCombobox()), i.value || a.goToOption(_.Last);
        } });
      case F.Home:
        if (f.shiftKey) break;
        return f.preventDefault(), f.stopPropagation(), a.goToOption(_.First);
      case F.PageUp:
        return f.preventDefault(), f.stopPropagation(), a.goToOption(_.First);
      case F.End:
        if (f.shiftKey) break;
        return f.preventDefault(), f.stopPropagation(), a.goToOption(_.Last);
      case F.PageDown:
        return f.preventDefault(), f.stopPropagation(), a.goToOption(_.Last);
      case F.Escape:
        return i.comboboxState !== 0 ? void 0 : (f.preventDefault(), i.optionsRef.current && !i.optionsPropsRef.current.static && f.stopPropagation(), i.mode === 0 && i.value === null && y(), a.closeCombobox());
      case F.Tab:
        if (i.comboboxState !== 0) return;
        i.mode === 0 && i.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), j = g((f) => {
    I == null || I(f), i.mode === 0 && f.target.value === "" && y(), a.openCombobox();
  }), Y = g((f) => {
    var B, P, W;
    let w = (B = f.relatedTarget) != null ? B : Z.find((L) => L !== f.currentTarget);
    if (!((P = i.optionsRef.current) != null && P.contains(w)) && !((W = i.buttonRef.current) != null && W.contains(w)) && i.comboboxState === 0) return f.preventDefault(), i.mode === 0 && i.value === null && y(), a.closeCombobox();
  }), k = g((f) => {
    var B, P, W;
    let w = (B = f.relatedTarget) != null ? B : Z.find((L) => L !== f.currentTarget);
    (P = i.buttonRef.current) != null && P.contains(w) || (W = i.optionsRef.current) != null && W.contains(w) || i.disabled || i.immediate && i.comboboxState !== 0 && E.microTask(() => {
      X.flushSync(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), C = be(), A = rt(), { isFocused: Q, focusProps: m } = Fe({ autoFocus: x }), { isHovered: ee, hoverProps: z } = ke({ isDisabled: S }), fe = G(() => ({ open: i.comboboxState === 0, disabled: S, hover: ee, focus: Q, autofocus: x }), [i, ee, Q, x, S]), he = ge({ ref: D, id: c, role: "combobox", type: h, "aria-controls": (t = i.optionsRef.current) == null ? void 0 : t.id, "aria-expanded": i.comboboxState === 0, "aria-activedescendant": i.activeOptionIndex === null ? void 0 : i.virtual ? (n = i.options.find((f) => !f.dataRef.current.disabled && i.compare(f.dataRef.current.value, i.virtual.options[i.activeOptionIndex]))) == null ? void 0 : n.id : (o = i.options[i.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": C, "aria-describedby": A, "aria-autocomplete": "list", defaultValue: (r = (l = e.defaultValue) != null ? l : i.defaultValue !== void 0 ? u == null ? void 0 : u(i.defaultValue) : null) != null ? r : i.defaultValue, disabled: S || void 0, autoFocus: x, onCompositionStart: V, onCompositionEnd: U, onKeyDown: J, onChange: j, onFocus: k, onBlur: Y }, m, z);
  return le({ ourProps: he, theirProps: R, slot: fe, defaultTag: Xt, name: "Combobox.Input" });
}
let tn = "button";
function nn(e, s) {
  var t;
  let n = ne("Combobox.Button"), o = ae("Combobox.Button"), l = de(n.buttonRef, s), r = pe(), { id: i = `headlessui-combobox-button-${r}`, disabled: a = n.disabled || !1, autoFocus: p = !1, ...d } = e, c = Ne(n.inputRef), I = g((b) => {
    switch (b.key) {
      case F.Space:
      case F.Enter:
        b.preventDefault(), b.stopPropagation(), n.comboboxState === 1 && X.flushSync(() => o.openCombobox()), c();
        return;
      case F.ArrowDown:
        b.preventDefault(), b.stopPropagation(), n.comboboxState === 1 && (X.flushSync(() => o.openCombobox()), n.value || o.goToOption(_.First)), c();
        return;
      case F.ArrowUp:
        b.preventDefault(), b.stopPropagation(), n.comboboxState === 1 && (X.flushSync(() => o.openCombobox()), n.value || o.goToOption(_.Last)), c();
        return;
      case F.Escape:
        if (n.comboboxState !== 0) return;
        b.preventDefault(), n.optionsRef.current && !n.optionsPropsRef.current.static && b.stopPropagation(), X.flushSync(() => o.closeCombobox()), c();
        return;
      default:
        return;
    }
  }), u = g((b) => {
    b.preventDefault(), !It(b.currentTarget) && (b.button === Oe.Left && (n.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), c());
  }), S = be([i]), { isFocusVisible: x, focusProps: h } = Fe({ autoFocus: p }), { isHovered: R, hoverProps: D } = ke({ isDisabled: a }), { pressed: M, pressProps: E } = lt({ disabled: a }), y = G(() => ({ open: n.comboboxState === 0, active: M || n.comboboxState === 0, disabled: a, value: n.value, hover: R, focus: x }), [n, R, x, M, a]), O = ge({ ref: l, id: i, type: at(e, n.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (t = n.optionsRef.current) == null ? void 0 : t.id, "aria-expanded": n.comboboxState === 0, "aria-labelledby": S, disabled: a || void 0, autoFocus: p, onMouseDown: u, onKeyDown: I }, h, D, E);
  return le({ ourProps: O, theirProps: d, slot: y, defaultTag: tn, name: "Combobox.Button" });
}
let on = "div", sn = Re.RenderStrategy | Re.Static;
function rn(e, s) {
  var t, n, o;
  let l = pe(), { id: r = `headlessui-combobox-options-${l}`, hold: i = !1, anchor: a, portal: p = !1, modal: d = !0, transition: c = !1, ...I } = e, u = ne("Combobox.Options"), S = ae("Combobox.Options"), x = ut(a);
  x && (p = !0);
  let [h, R] = ct(x), D = dt(), M = de(u.optionsRef, s, x ? h : null), E = De(u.optionsRef), y = pt(), [O, b] = ft(c, u.optionsRef, y !== null ? (y & ce.Open) === ce.Open : u.comboboxState === 0);
  ht(O, u.inputRef, S.closeCombobox);
  let V = u.__demoMode ? !1 : d && u.comboboxState === 0;
  mt(V, E);
  let U = u.__demoMode ? !1 : d && u.comboboxState === 0;
  vt(U, { allowed: g(() => [u.inputRef.current, u.buttonRef.current, u.optionsRef.current]) }), q(() => {
    var z;
    u.optionsPropsRef.current.static = (z = e.static) != null ? z : !1;
  }, [u.optionsPropsRef, e.static]), q(() => {
    u.optionsPropsRef.current.hold = i;
  }, [u.optionsPropsRef, i]), Wt(u.comboboxState === 0, { container: u.optionsRef.current, accept(z) {
    return z.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : z.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(z) {
    z.setAttribute("role", "none");
  } });
  let J = be([(t = u.buttonRef.current) == null ? void 0 : t.id]), j = G(() => ({ open: u.comboboxState === 0, option: void 0 }), [u.comboboxState]), Y = g(() => {
    S.setActivationTrigger(0);
  }), k = g((z) => {
    z.preventDefault(), S.setActivationTrigger(0);
  }), C = ge(x ? D() : {}, { "aria-labelledby": J, role: "listbox", "aria-multiselectable": u.mode === 1 ? !0 : void 0, id: r, ref: M, style: { ...I.style, ...R, "--input-width": ye(u.inputRef, !0).width, "--button-width": ye(u.buttonRef, !0).width }, onWheel: u.activationTrigger === 0 ? void 0 : Y, onMouseDown: k, ...bt(b) }), A = O && u.comboboxState === 1, Q = Ce(A, (n = u.virtual) == null ? void 0 : n.options), m = Ce(A, u.value), ee = g((z) => u.compare(m, z));
  if (u.virtual) {
    if (Q === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(I, { children: $.createElement(se.Provider, { value: Q !== u.virtual.options ? { ...u, virtual: { ...u.virtual, options: Q } } : u }, $.createElement(Jt, { slot: j }, I.children)) });
  }
  return $.createElement(gt, { enabled: p ? e.static || O : !1 }, $.createElement(se.Provider, { value: u.mode === 1 ? u : { ...u, isSelected: ee } }, le({ ourProps: C, theirProps: { ...I, children: $.createElement(xt, { freeze: A }, typeof I.children == "function" ? (o = I.children) == null ? void 0 : o.call(I, j) : I.children) }, slot: j, defaultTag: on, features: sn, visible: O, name: "Combobox.Options" })));
}
let ln = "div";
function an(e, s) {
  var t, n, o, l;
  let r = ne("Combobox.Option"), i = ae("Combobox.Option"), a = pe(), { id: p = `headlessui-combobox-option-${a}`, value: d, disabled: c = (o = (n = (t = r.virtual) == null ? void 0 : t.disabled) == null ? void 0 : n.call(t, d)) != null ? o : !1, order: I = null, ...u } = e, S = Ne(r.inputRef), x = r.virtual ? r.activeOptionIndex === r.calculateIndex(d) : r.activeOptionIndex === null ? !1 : ((l = r.options[r.activeOptionIndex]) == null ? void 0 : l.id) === p, h = r.isSelected(d), R = N(null), D = $e({ disabled: c, value: d, domRef: R, order: I }), M = Ie(Ve), E = de(s, R, M ? M.measureElement : null), y = g(() => {
    i.setIsTyping(!1), i.onChange(d);
  });
  q(() => i.registerOption(p, D), [D, p]);
  let O = N(!(r.virtual || r.__demoMode));
  q(() => {
    if (!r.virtual && !r.__demoMode) return we().requestAnimationFrame(() => {
      O.current = !0;
    });
  }, [r.virtual, r.__demoMode]), q(() => {
    if (O.current && r.comboboxState === 0 && x && r.activationTrigger !== 0) return we().requestAnimationFrame(() => {
      var C, A;
      (A = (C = R.current) == null ? void 0 : C.scrollIntoView) == null || A.call(C, { block: "nearest" });
    });
  }, [R, x, r.comboboxState, r.activationTrigger, r.activeOptionIndex]);
  let b = g((C) => {
    C.preventDefault(), C.button === Oe.Left && (c || (y(), Ot() || requestAnimationFrame(() => S()), r.mode === 0 && i.closeCombobox()));
  }), V = g(() => {
    if (c) return i.goToOption(_.Nothing);
    let C = r.calculateIndex(d);
    i.goToOption(_.Specific, C);
  }), U = St(), J = g((C) => U.update(C)), j = g((C) => {
    if (!U.wasMoved(C) || c || x) return;
    let A = r.calculateIndex(d);
    i.goToOption(_.Specific, A, 0);
  }), Y = g((C) => {
    U.wasMoved(C) && (c || x && (r.optionsPropsRef.current.hold || i.goToOption(_.Nothing)));
  }), k = G(() => ({ active: x, focus: x, selected: h, disabled: c }), [x, h, c]);
  return le({ ourProps: { id: p, ref: E, role: "option", tabIndex: c === !0 ? void 0 : -1, "aria-disabled": c === !0 ? !0 : void 0, "aria-selected": h, disabled: void 0, onMouseDown: b, onFocus: V, onPointerEnter: J, onMouseEnter: J, onPointerMove: j, onMouseMove: j, onPointerLeave: Y, onMouseLeave: Y }, theirProps: u, slot: k, defaultTag: ln, name: "Combobox.Option" });
}
let un = re(Zt), cn = re(nn), dn = re(en), pn = qe, fn = re(rn), hn = re(an), gn = Object.assign(un, { Input: dn, Button: cn, Label: pn, Options: fn, Option: hn });
export {
  dn as G,
  cn as H,
  hn as K,
  gn as N,
  fn as z
};
