import * as C from "react";
import { useLayoutEffect as Wt, useEffect as Bt } from "react";
import { r as Nt } from "./index-DsprzSCj.js";
const z = Math.min, S = Math.max, it = Math.round, nt = Math.floor, j = (t) => ({
  x: t,
  y: t
}), Vt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $t = {
  start: "end",
  end: "start"
};
function pt(t, e, n) {
  return S(t, z(e, n));
}
function Z(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function I(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function At(t) {
  return t === "x" ? "y" : "x";
}
function Ct(t) {
  return t === "y" ? "height" : "width";
}
function Y(t) {
  return ["top", "bottom"].includes(I(t)) ? "y" : "x";
}
function Et(t) {
  return At(Y(t));
}
function Ht(t, e, n) {
  n === void 0 && (n = !1);
  const o = tt(t), i = Et(t), r = Ct(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = rt(s)), [s, rt(s)];
}
function _t(t) {
  const e = rt(t);
  return [dt(t), e, dt(e)];
}
function dt(t) {
  return t.replace(/start|end/g, (e) => $t[e]);
}
function zt(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function jt(t, e, n, o) {
  const i = tt(t);
  let r = zt(I(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(dt)))), r;
}
function rt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Vt[e]);
}
function It(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Xt(t) {
  return typeof t != "number" ? It(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function st(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function wt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = Y(e), s = Et(e), l = Ct(s), c = I(e), f = r === "y", a = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, m = o[l] / 2 - i[l] / 2;
  let d;
  switch (c) {
    case "top":
      d = {
        x: a,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: a,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      d = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (tt(e)) {
    case "start":
      d[s] -= m * (n && f ? -1 : 1);
      break;
    case "end":
      d[s] += m * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const Yt = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, l = r.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let f = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: a,
    y: u
  } = wt(f, o, c), m = o, d = {}, h = 0;
  for (let p = 0; p < l.length; p++) {
    const {
      name: w,
      fn: g
    } = l[p], {
      x,
      y: v,
      data: b,
      reset: y
    } = await g({
      x: a,
      y: u,
      initialPlacement: o,
      placement: m,
      strategy: i,
      middlewareData: d,
      rects: f,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    a = x ?? a, u = v ?? u, d = {
      ...d,
      [w]: {
        ...d[w],
        ...b
      }
    }, y && h <= 50 && (h++, typeof y == "object" && (y.placement && (m = y.placement), y.rects && (f = y.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : y.rects), {
      x: a,
      y: u
    } = wt(f, m, c)), p = -1);
  }
  return {
    x: a,
    y: u,
    placement: m,
    strategy: i,
    middlewareData: d
  };
};
async function lt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: s,
    elements: l,
    strategy: c
  } = t, {
    boundary: f = "clippingAncestors",
    rootBoundary: a = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = Z(e, t), h = Xt(d), w = l[m ? u === "floating" ? "reference" : "floating" : u], g = st(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: a,
    strategy: c
  })), x = u === "floating" ? {
    x: o,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), b = await (r.isElement == null ? void 0 : r.isElement(v)) ? await (r.getScale == null ? void 0 : r.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = st(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: x,
    offsetParent: v,
    strategy: c
  }) : x);
  return {
    top: (g.top - y.top + h.top) / b.y,
    bottom: (y.bottom - g.bottom + h.bottom) / b.y,
    left: (g.left - y.left + h.left) / b.x,
    right: (y.right - g.right + h.right) / b.x
  };
}
const qt = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: r,
        rects: s,
        initialPlacement: l,
        platform: c,
        elements: f
      } = e, {
        mainAxis: a = !0,
        crossAxis: u = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: p = !0,
        ...w
      } = Z(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const g = I(i), x = Y(l), v = I(l) === l, b = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), y = m || (v || !p ? [rt(l)] : _t(l)), A = h !== "none";
      !m && A && y.push(...jt(l, p, h, b));
      const D = [l, ...y], k = await lt(e, w), N = [];
      let T = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (a && N.push(k[g]), u) {
        const P = Ht(i, s, b);
        N.push(k[P[0]], k[P[1]]);
      }
      if (T = [...T, {
        placement: i,
        overflows: N
      }], !N.every((P) => P <= 0)) {
        var V, H;
        const P = (((V = r.flip) == null ? void 0 : V.index) || 0) + 1, F = D[P];
        if (F)
          return {
            data: {
              index: P,
              overflows: T
            },
            reset: {
              placement: F
            }
          };
        let _ = (H = T.filter((R) => R.overflows[0] <= 0).sort((R, O) => R.overflows[1] - O.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!_)
          switch (d) {
            case "bestFit": {
              var U;
              const R = (U = T.filter((O) => {
                if (A) {
                  const E = Y(O.placement);
                  return E === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  E === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((E) => E > 0).reduce((E, Ft) => E + Ft, 0)]).sort((O, E) => O[1] - E[1])[0]) == null ? void 0 : U[0];
              R && (_ = R);
              break;
            }
            case "initialPlacement":
              _ = l;
              break;
          }
        if (i !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
async function Ut(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = I(n), l = tt(n), c = Y(n) === "y", f = ["left", "top"].includes(s) ? -1 : 1, a = r && c ? -1 : 1, u = Z(e, t);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return l && typeof h == "number" && (d = l === "end" ? h * -1 : h), c ? {
    x: d * a,
    y: m * f
  } : {
    x: m * f,
    y: d * a
  };
}
const Kt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: s,
        middlewareData: l
      } = e, c = await Ut(e, t);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: i + c.x,
        y: r + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Gt = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x: g,
              y: x
            } = w;
            return {
              x: g,
              y: x
            };
          }
        },
        ...c
      } = Z(t, e), f = {
        x: n,
        y: o
      }, a = await lt(e, c), u = Y(I(i)), m = At(u);
      let d = f[m], h = f[u];
      if (r) {
        const w = m === "y" ? "top" : "left", g = m === "y" ? "bottom" : "right", x = d + a[w], v = d - a[g];
        d = pt(x, d, v);
      }
      if (s) {
        const w = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", x = h + a[w], v = h - a[g];
        h = pt(x, h, v);
      }
      const p = l.fn({
        ...e,
        [m]: d,
        [u]: h
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o
        }
      };
    }
  };
}, Jt = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: o,
        platform: i,
        elements: r
      } = e, {
        apply: s = () => {
        },
        ...l
      } = Z(t, e), c = await lt(e, l), f = I(n), a = tt(n), u = Y(n) === "y", {
        width: m,
        height: d
      } = o.floating;
      let h, p;
      f === "top" || f === "bottom" ? (h = f, p = a === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (p = f, h = a === "end" ? "top" : "bottom");
      const w = d - c.top - c.bottom, g = m - c.left - c.right, x = z(d - c[h], w), v = z(m - c[p], g), b = !e.middlewareData.shift;
      let y = x, A = v;
      if (u ? A = a || b ? z(v, g) : g : y = a || b ? z(x, w) : w, b && !a) {
        const k = S(c.left, 0), N = S(c.right, 0), T = S(c.top, 0), V = S(c.bottom, 0);
        u ? A = m - 2 * (k !== 0 || N !== 0 ? k + N : S(c.left, c.right)) : y = d - 2 * (T !== 0 || V !== 0 ? T + V : S(c.top, c.bottom));
      }
      await s({
        ...e,
        availableWidth: A,
        availableHeight: y
      });
      const D = await i.getDimensions(r.floating);
      return m !== D.width || d !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function J(t) {
  return Ot(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function L(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function $(t) {
  var e;
  return (e = (Ot(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ot(t) {
  return t instanceof Node || t instanceof L(t).Node;
}
function W(t) {
  return t instanceof Element || t instanceof L(t).Element;
}
function B(t) {
  return t instanceof HTMLElement || t instanceof L(t).HTMLElement;
}
function xt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof L(t).ShadowRoot;
}
function et(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = M(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Qt(t) {
  return ["table", "td", "th"].includes(J(t));
}
function ft(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function mt(t) {
  const e = gt(), n = M(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Zt(t) {
  let e = X(t);
  for (; B(e) && !G(e); ) {
    if (ft(e))
      return null;
    if (mt(e))
      return e;
    e = X(e);
  }
  return null;
}
function gt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function G(t) {
  return ["html", "body", "#document"].includes(J(t));
}
function M(t) {
  return L(t).getComputedStyle(t);
}
function at(t) {
  return W(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function X(t) {
  if (J(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    xt(t) && t.host || // Fallback.
    $(t)
  );
  return xt(e) ? e.host : e;
}
function St(t) {
  const e = X(t);
  return G(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : B(e) && et(e) ? e : St(e);
}
function Q(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = St(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = L(i);
  return r ? e.concat(s, s.visualViewport || [], et(i) ? i : [], s.frameElement && n ? Q(s.frameElement) : []) : e.concat(i, Q(i, [], n));
}
function Lt(t) {
  const e = M(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = B(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, l = it(n) !== r || it(o) !== s;
  return l && (n = r, o = s), {
    width: n,
    height: o,
    $: l
  };
}
function ht(t) {
  return W(t) ? t : t.contextElement;
}
function K(t) {
  const e = ht(t);
  if (!B(e))
    return j(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = Lt(e);
  let s = (r ? it(n.width) : n.width) / o, l = (r ? it(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const te = /* @__PURE__ */ j(0);
function Tt(t) {
  const e = L(t);
  return !gt() || !e.visualViewport ? te : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ee(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== L(t) ? !1 : e;
}
function q(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = ht(t);
  let s = j(1);
  e && (o ? W(o) && (s = K(o)) : s = K(t));
  const l = ee(r, n, o) ? Tt(r) : j(0);
  let c = (i.left + l.x) / s.x, f = (i.top + l.y) / s.y, a = i.width / s.x, u = i.height / s.y;
  if (r) {
    const m = L(r), d = o && W(o) ? L(o) : o;
    let h = m, p = h.frameElement;
    for (; p && o && d !== h; ) {
      const w = K(p), g = p.getBoundingClientRect(), x = M(p), v = g.left + (p.clientLeft + parseFloat(x.paddingLeft)) * w.x, b = g.top + (p.clientTop + parseFloat(x.paddingTop)) * w.y;
      c *= w.x, f *= w.y, a *= w.x, u *= w.y, c += v, f += b, h = L(p), p = h.frameElement;
    }
  }
  return st({
    width: a,
    height: u,
    x: c,
    y: f
  });
}
function ne(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", s = $(o), l = e ? ft(e.floating) : !1;
  if (o === s || l && r)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = j(1);
  const a = j(0), u = B(o);
  if ((u || !u && !r) && ((J(o) !== "body" || et(s)) && (c = at(o)), B(o))) {
    const m = q(o);
    f = K(o), a.x = m.x + o.clientLeft, a.y = m.y + o.clientTop;
  }
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + a.x,
    y: n.y * f.y - c.scrollTop * f.y + a.y
  };
}
function oe(t) {
  return Array.from(t.getClientRects());
}
function Dt(t) {
  return q($(t)).left + at(t).scrollLeft;
}
function ie(t) {
  const e = $(t), n = at(t), o = t.ownerDocument.body, i = S(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = S(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Dt(t);
  const l = -n.scrollTop;
  return M(o).direction === "rtl" && (s += S(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: l
  };
}
function re(t, e) {
  const n = L(t), o = $(t), i = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, l = 0, c = 0;
  if (i) {
    r = i.width, s = i.height;
    const f = gt();
    (!f || f && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: l,
    y: c
  };
}
function se(t, e) {
  const n = q(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = B(t) ? K(t) : j(1), s = t.clientWidth * r.x, l = t.clientHeight * r.y, c = i * r.x, f = o * r.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function yt(t, e, n) {
  let o;
  if (e === "viewport")
    o = re(t, n);
  else if (e === "document")
    o = ie($(t));
  else if (W(e))
    o = se(e, n);
  else {
    const i = Tt(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return st(o);
}
function kt(t, e) {
  const n = X(t);
  return n === e || !W(n) || G(n) ? !1 : M(n).position === "fixed" || kt(n, e);
}
function ce(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Q(t, [], !1).filter((l) => W(l) && J(l) !== "body"), i = null;
  const r = M(t).position === "fixed";
  let s = r ? X(t) : t;
  for (; W(s) && !G(s); ) {
    const l = M(s), c = mt(s);
    !c && l.position === "fixed" && (i = null), (r ? !c && !i : !c && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || et(s) && !c && kt(t, s)) ? o = o.filter((a) => a !== s) : i = l, s = X(s);
  }
  return e.set(t, o), o;
}
function le(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? ft(e) ? [] : ce(e, this._c) : [].concat(n), o], l = s[0], c = s.reduce((f, a) => {
    const u = yt(e, a, i);
    return f.top = S(u.top, f.top), f.right = z(u.right, f.right), f.bottom = z(u.bottom, f.bottom), f.left = S(u.left, f.left), f;
  }, yt(e, l, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function fe(t) {
  const {
    width: e,
    height: n
  } = Lt(t);
  return {
    width: e,
    height: n
  };
}
function ae(t, e, n) {
  const o = B(e), i = $(e), r = n === "fixed", s = q(t, !0, r, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = j(0);
  if (o || !o && !r)
    if ((J(e) !== "body" || et(i)) && (l = at(e)), o) {
      const u = q(e, !0, r, e);
      c.x = u.x + e.clientLeft, c.y = u.y + e.clientTop;
    } else i && (c.x = Dt(i));
  const f = s.left + l.scrollLeft - c.x, a = s.top + l.scrollTop - c.y;
  return {
    x: f,
    y: a,
    width: s.width,
    height: s.height
  };
}
function ut(t) {
  return M(t).position === "static";
}
function vt(t, e) {
  return !B(t) || M(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Mt(t, e) {
  const n = L(t);
  if (ft(t))
    return n;
  if (!B(t)) {
    let i = X(t);
    for (; i && !G(i); ) {
      if (W(i) && !ut(i))
        return i;
      i = X(i);
    }
    return n;
  }
  let o = vt(t, e);
  for (; o && Qt(o) && ut(o); )
    o = vt(o, e);
  return o && G(o) && ut(o) && !mt(o) ? n : o || Zt(t) || n;
}
const ue = async function(t) {
  const e = this.getOffsetParent || Mt, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: ae(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function de(t) {
  return M(t).direction === "rtl";
}
const me = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ne,
  getDocumentElement: $,
  getClippingRect: le,
  getOffsetParent: Mt,
  getElementRects: ue,
  getClientRects: oe,
  getDimensions: fe,
  getScale: K,
  isElement: W,
  isRTL: de
};
function ge(t, e) {
  let n = null, o;
  const i = $(t);
  function r() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), r();
    const {
      left: f,
      top: a,
      width: u,
      height: m
    } = t.getBoundingClientRect();
    if (l || e(), !u || !m)
      return;
    const d = nt(a), h = nt(i.clientWidth - (f + u)), p = nt(i.clientHeight - (a + m)), w = nt(f), x = {
      rootMargin: -d + "px " + -h + "px " + -p + "px " + -w + "px",
      threshold: S(0, z(1, c)) || 1
    };
    let v = !0;
    function b(y) {
      const A = y[0].intersectionRatio;
      if (A !== c) {
        if (!v)
          return s();
        A ? s(!1, A) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...x,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, x);
    }
    n.observe(t);
  }
  return s(!0), r;
}
function Re(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, f = ht(t), a = i || r ? [...f ? Q(f) : [], ...Q(e)] : [];
  a.forEach((g) => {
    i && g.addEventListener("scroll", n, {
      passive: !0
    }), r && g.addEventListener("resize", n);
  });
  const u = f && l ? ge(f, n) : null;
  let m = -1, d = null;
  s && (d = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === f && d && (d.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = d) == null || v.observe(e);
    })), n();
  }), f && !c && d.observe(f), d.observe(e));
  let h, p = c ? q(t) : null;
  c && w();
  function w() {
    const g = q(t);
    p && (g.x !== p.x || g.y !== p.y || g.width !== p.width || g.height !== p.height) && n(), p = g, h = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    a.forEach((x) => {
      i && x.removeEventListener("scroll", n), r && x.removeEventListener("resize", n);
    }), u == null || u(), (g = d) == null || g.disconnect(), d = null, c && cancelAnimationFrame(h);
  };
}
const Ae = lt, he = Kt, pe = Gt, we = qt, xe = Jt, ye = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: me,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Yt(t, e, {
    ...i,
    platform: r
  });
};
var ot = typeof document < "u" ? Wt : Bt;
function ct(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, o, i;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (o = n; o-- !== 0; )
        if (!ct(t[o], e[o]))
          return !1;
      return !0;
    }
    if (i = Object.keys(t), n = i.length, n !== Object.keys(e).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(e, i[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const r = i[o];
      if (!(r === "_owner" && t.$$typeof) && !ct(t[r], e[r]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Pt(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bt(t, e) {
  const n = Pt(t);
  return Math.round(e * n) / n;
}
function Rt(t) {
  const e = C.useRef(t);
  return ot(() => {
    e.current = t;
  }), e;
}
function Ce(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i,
    elements: {
      reference: r,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: c,
    open: f
  } = t, [a, u] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [m, d] = C.useState(o);
  ct(m, o) || d(o);
  const [h, p] = C.useState(null), [w, g] = C.useState(null), x = C.useCallback((R) => {
    R !== A.current && (A.current = R, p(R));
  }, []), v = C.useCallback((R) => {
    R !== D.current && (D.current = R, g(R));
  }, []), b = r || h, y = s || w, A = C.useRef(null), D = C.useRef(null), k = C.useRef(a), N = c != null, T = Rt(c), V = Rt(i), H = C.useCallback(() => {
    if (!A.current || !D.current)
      return;
    const R = {
      placement: e,
      strategy: n,
      middleware: m
    };
    V.current && (R.platform = V.current), ye(A.current, D.current, R).then((O) => {
      const E = {
        ...O,
        isPositioned: !0
      };
      U.current && !ct(k.current, E) && (k.current = E, Nt.flushSync(() => {
        u(E);
      }));
    });
  }, [m, e, n, V]);
  ot(() => {
    f === !1 && k.current.isPositioned && (k.current.isPositioned = !1, u((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [f]);
  const U = C.useRef(!1);
  ot(() => (U.current = !0, () => {
    U.current = !1;
  }), []), ot(() => {
    if (b && (A.current = b), y && (D.current = y), b && y) {
      if (T.current)
        return T.current(b, y, H);
      H();
    }
  }, [b, y, H, T, N]);
  const P = C.useMemo(() => ({
    reference: A,
    floating: D,
    setReference: x,
    setFloating: v
  }), [x, v]), F = C.useMemo(() => ({
    reference: b,
    floating: y
  }), [b, y]), _ = C.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return R;
    const O = bt(F.floating, a.x), E = bt(F.floating, a.y);
    return l ? {
      ...R,
      transform: "translate(" + O + "px, " + E + "px)",
      ...Pt(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: E
    };
  }, [n, l, F.floating, a.x, a.y]);
  return C.useMemo(() => ({
    ...a,
    update: H,
    refs: P,
    elements: F,
    floatingStyles: _
  }), [a, H, P, F, _]);
}
const Ee = (t, e) => ({
  ...he(t),
  options: [t, e]
}), Oe = (t, e) => ({
  ...pe(t),
  options: [t, e]
}), Se = (t, e) => ({
  ...we(t),
  options: [t, e]
}), Le = (t, e) => ({
  ...xe(t),
  options: [t, e]
});
export {
  Re as a,
  B as b,
  W as c,
  L as d,
  G as e,
  Se as f,
  Q as g,
  X as h,
  xt as i,
  M as j,
  Z as k,
  Ae as l,
  Le as m,
  Ee as o,
  Oe as s,
  Ce as u
};
