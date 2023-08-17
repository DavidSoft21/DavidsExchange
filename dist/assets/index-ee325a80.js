var fh = Object.defineProperty;
var uh = (e, t, n) =>
  t in e
    ? fh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var $ = (e, t, n) => (uh(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function _o(e, t) {
  const n = Object.create(null),
    i = e.split(",");
  for (let s = 0; s < i.length; s++) n[i[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const pt = {},
  Jn = [],
  xe = () => {},
  dh = () => !1,
  hh = /^on[^a-z]/,
  fs = (e) => hh.test(e),
  Yr = (e) => e.startsWith("onUpdate:"),
  yt = Object.assign,
  Kr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  ph = Object.prototype.hasOwnProperty,
  lt = (e, t) => ph.call(e, t),
  W = Array.isArray,
  Gn = (e) => ui(e) === "[object Map]",
  In = (e) => ui(e) === "[object Set]",
  Ja = (e) => ui(e) === "[object Date]",
  gh = (e) => ui(e) === "[object RegExp]",
  Z = (e) => typeof e == "function",
  vt = (e) => typeof e == "string",
  Ji = (e) => typeof e == "symbol",
  gt = (e) => e !== null && typeof e == "object",
  Xr = (e) => gt(e) && Z(e.then) && Z(e.catch),
  df = Object.prototype.toString,
  ui = (e) => df.call(e),
  mh = (e) => ui(e).slice(8, -1),
  hf = (e) => ui(e) === "[object Object]",
  Jr = (e) =>
    vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Li = _o(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  wo = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  bh = /-(\w)/g,
  Gt = wo((e) => e.replace(bh, (t, n) => (n ? n.toUpperCase() : ""))),
  yh = /\B([A-Z])/g,
  ce = wo((e) => e.replace(yh, "-$1").toLowerCase()),
  us = wo((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Bi = wo((e) => (e ? `on${us(e)}` : "")),
  ni = (e, t) => !Object.is(e, t),
  Qn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  $s = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  to = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  eo = (e) => {
    const t = vt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Ga;
const dr = () =>
    Ga ||
    (Ga =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : {}),
  xh =
    "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",
  vh = _o(xh);
function ds(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        s = vt(i) ? Sh(i) : ds(i);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else {
    if (vt(e)) return e;
    if (gt(e)) return e;
  }
}
const _h = /;(?![^(]*\))/g,
  wh = /:([^]+)/,
  kh = /\/\*[^]*?\*\//g;
function Sh(e) {
  const t = {};
  return (
    e
      .replace(kh, "")
      .split(_h)
      .forEach((n) => {
        if (n) {
          const i = n.split(wh);
          i.length > 1 && (t[i[0].trim()] = i[1].trim());
        }
      }),
    t
  );
}
function di(e) {
  let t = "";
  if (vt(e)) t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const i = di(e[n]);
      i && (t += i + " ");
    }
  else if (gt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Ch(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !vt(t) && (e.class = di(t)), n && (e.style = ds(n)), e;
}
const Mh =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ph = _o(Mh);
function pf(e) {
  return !!e || e === "";
}
function Eh(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++) n = an(e[i], t[i]);
  return n;
}
function an(e, t) {
  if (e === t) return !0;
  let n = Ja(e),
    i = Ja(t);
  if (n || i) return n && i ? e.getTime() === t.getTime() : !1;
  if (((n = Ji(e)), (i = Ji(t)), n || i)) return e === t;
  if (((n = W(e)), (i = W(t)), n || i)) return n && i ? Eh(e, t) : !1;
  if (((n = gt(e)), (i = gt(t)), n || i)) {
    if (!n || !i) return !1;
    const s = Object.keys(e).length,
      o = Object.keys(t).length;
    if (s !== o) return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r),
        l = t.hasOwnProperty(r);
      if ((a && !l) || (!a && l) || !an(e[r], t[r])) return !1;
    }
  }
  return String(e) === String(t);
}
function ko(e, t) {
  return e.findIndex((n) => an(n, t));
}
const Ht = (e) =>
    vt(e)
      ? e
      : e == null
      ? ""
      : W(e) || (gt(e) && (e.toString === df || !Z(e.toString)))
      ? JSON.stringify(e, gf, 2)
      : String(e),
  gf = (e, t) =>
    t && t.__v_isRef
      ? gf(e, t.value)
      : Gn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [i, s]) => ((n[`${i} =>`] = s), n),
            {}
          ),
        }
      : In(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : gt(t) && !W(t) && !hf(t)
      ? String(t)
      : t;
let te;
class Gr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = te),
      !t && te && (this.index = (te.scopes || (te.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = te;
      try {
        return (te = this), t();
      } finally {
        te = n;
      }
    }
  }
  on() {
    te = this;
  }
  off() {
    te = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Th(e) {
  return new Gr(e);
}
function mf(e, t = te) {
  t && t.active && t.effects.push(e);
}
function bf() {
  return te;
}
function Ah(e) {
  te && te.cleanups.push(e);
}
const Qr = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  yf = (e) => (e.w & ln) > 0,
  xf = (e) => (e.n & ln) > 0,
  Dh = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ln;
  },
  Fh = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let i = 0; i < t.length; i++) {
        const s = t[i];
        yf(s) && !xf(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~ln),
          (s.n &= ~ln);
      }
      t.length = n;
    }
  },
  no = new WeakMap();
let Pi = 0,
  ln = 1;
const hr = 30;
let be;
const Pn = Symbol(""),
  pr = Symbol("");
class hs {
  constructor(t, n = null, i) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      mf(this, i);
  }
  run() {
    if (!this.active) return this.fn();
    let t = be,
      n = en;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = be),
        (be = this),
        (en = !0),
        (ln = 1 << ++Pi),
        Pi <= hr ? Dh(this) : Qa(this),
        this.fn()
      );
    } finally {
      Pi <= hr && Fh(this),
        (ln = 1 << --Pi),
        (be = this.parent),
        (en = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    be === this
      ? (this.deferStop = !0)
      : this.active &&
        (Qa(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Qa(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
function Rh(e, t) {
  e.effect && (e = e.effect.fn);
  const n = new hs(e);
  t && (yt(n, t), t.scope && mf(n, t.scope)), (!t || !t.lazy) && n.run();
  const i = n.run.bind(n);
  return (i.effect = n), i;
}
function Oh(e) {
  e.effect.stop();
}
let en = !0;
const vf = [];
function hi() {
  vf.push(en), (en = !1);
}
function pi() {
  const e = vf.pop();
  en = e === void 0 ? !0 : e;
}
function Qt(e, t, n) {
  if (en && be) {
    let i = no.get(e);
    i || no.set(e, (i = new Map()));
    let s = i.get(n);
    s || i.set(n, (s = Qr())), _f(s);
  }
}
function _f(e, t) {
  let n = !1;
  Pi <= hr ? xf(e) || ((e.n |= ln), (n = !yf(e))) : (n = !e.has(be)),
    n && (e.add(be), be.deps.push(e));
}
function Ve(e, t, n, i, s, o) {
  const r = no.get(e);
  if (!r) return;
  let a = [];
  if (t === "clear") a = [...r.values()];
  else if (n === "length" && W(e)) {
    const l = Number(i);
    r.forEach((c, f) => {
      (f === "length" || f >= l) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(r.get(n)), t)) {
      case "add":
        W(e)
          ? Jr(n) && a.push(r.get("length"))
          : (a.push(r.get(Pn)), Gn(e) && a.push(r.get(pr)));
        break;
      case "delete":
        W(e) || (a.push(r.get(Pn)), Gn(e) && a.push(r.get(pr)));
        break;
      case "set":
        Gn(e) && a.push(r.get(Pn));
        break;
    }
  if (a.length === 1) a[0] && gr(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    gr(Qr(l));
  }
}
function gr(e, t) {
  const n = W(e) ? e : [...e];
  for (const i of n) i.computed && Za(i);
  for (const i of n) i.computed || Za(i);
}
function Za(e, t) {
  (e !== be || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function Lh(e, t) {
  var n;
  return (n = no.get(e)) == null ? void 0 : n.get(t);
}
const Bh = _o("__proto__,__v_isRef,__isVue"),
  wf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ji)
  ),
  Nh = So(),
  Ih = So(!1, !0),
  zh = So(!0),
  Vh = So(!0, !0),
  $a = qh();
function qh() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const i = it(this);
        for (let o = 0, r = this.length; o < r; o++) Qt(i, "get", o + "");
        const s = i[t](...n);
        return s === -1 || s === !1 ? i[t](...n.map(it)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        hi();
        const i = it(this)[t].apply(this, n);
        return pi(), i;
      };
    }),
    e
  );
}
function Uh(e) {
  const t = it(this);
  return Qt(t, "has", e), t.hasOwnProperty(e);
}
function So(e = !1, t = !1) {
  return function (i, s, o) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && o === (e ? (t ? Tf : Ef) : t ? Pf : Mf).get(i))
      return i;
    const r = W(i);
    if (!e) {
      if (r && lt($a, s)) return Reflect.get($a, s, o);
      if (s === "hasOwnProperty") return Uh;
    }
    const a = Reflect.get(i, s, o);
    return (Ji(s) ? wf.has(s) : Bh(s)) || (e || Qt(i, "get", s), t)
      ? a
      : Et(a)
      ? r && Jr(s)
        ? a
        : a.value
      : gt(a)
      ? e
        ? ta(a)
        : ps(a)
      : a;
  };
}
const Hh = kf(),
  jh = kf(!0);
function kf(e = !1) {
  return function (n, i, s, o) {
    let r = n[i];
    if (Fn(r) && Et(r) && !Et(s)) return !1;
    if (
      !e &&
      (!Gi(s) && !Fn(s) && ((r = it(r)), (s = it(s))), !W(n) && Et(r) && !Et(s))
    )
      return (r.value = s), !0;
    const a = W(n) && Jr(i) ? Number(i) < n.length : lt(n, i),
      l = Reflect.set(n, i, s, o);
    return (
      n === it(o) && (a ? ni(s, r) && Ve(n, "set", i, s) : Ve(n, "add", i, s)),
      l
    );
  };
}
function Wh(e, t) {
  const n = lt(e, t);
  e[t];
  const i = Reflect.deleteProperty(e, t);
  return i && n && Ve(e, "delete", t, void 0), i;
}
function Yh(e, t) {
  const n = Reflect.has(e, t);
  return (!Ji(t) || !wf.has(t)) && Qt(e, "has", t), n;
}
function Kh(e) {
  return Qt(e, "iterate", W(e) ? "length" : Pn), Reflect.ownKeys(e);
}
const Sf = { get: Nh, set: Hh, deleteProperty: Wh, has: Yh, ownKeys: Kh },
  Cf = {
    get: zh,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Xh = yt({}, Sf, { get: Ih, set: jh }),
  Jh = yt({}, Cf, { get: Vh }),
  Zr = (e) => e,
  Co = (e) => Reflect.getPrototypeOf(e);
function _s(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = it(e),
    o = it(t);
  n || (t !== o && Qt(s, "get", t), Qt(s, "get", o));
  const { has: r } = Co(s),
    a = i ? Zr : n ? na : Qi;
  if (r.call(s, t)) return a(e.get(t));
  if (r.call(s, o)) return a(e.get(o));
  e !== s && e.get(t);
}
function ws(e, t = !1) {
  const n = this.__v_raw,
    i = it(n),
    s = it(e);
  return (
    t || (e !== s && Qt(i, "has", e), Qt(i, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function ks(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Qt(it(e), "iterate", Pn), Reflect.get(e, "size", e)
  );
}
function tl(e) {
  e = it(e);
  const t = it(this);
  return Co(t).has.call(t, e) || (t.add(e), Ve(t, "add", e, e)), this;
}
function el(e, t) {
  t = it(t);
  const n = it(this),
    { has: i, get: s } = Co(n);
  let o = i.call(n, e);
  o || ((e = it(e)), (o = i.call(n, e)));
  const r = s.call(n, e);
  return (
    n.set(e, t), o ? ni(t, r) && Ve(n, "set", e, t) : Ve(n, "add", e, t), this
  );
}
function nl(e) {
  const t = it(this),
    { has: n, get: i } = Co(t);
  let s = n.call(t, e);
  s || ((e = it(e)), (s = n.call(t, e))), i && i.call(t, e);
  const o = t.delete(e);
  return s && Ve(t, "delete", e, void 0), o;
}
function il() {
  const e = it(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ve(e, "clear", void 0, void 0), n;
}
function Ss(e, t) {
  return function (i, s) {
    const o = this,
      r = o.__v_raw,
      a = it(r),
      l = t ? Zr : e ? na : Qi;
    return (
      !e && Qt(a, "iterate", Pn), r.forEach((c, f) => i.call(s, l(c), l(f), o))
    );
  };
}
function Cs(e, t, n) {
  return function (...i) {
    const s = this.__v_raw,
      o = it(s),
      r = Gn(o),
      a = e === "entries" || (e === Symbol.iterator && r),
      l = e === "keys" && r,
      c = s[e](...i),
      f = n ? Zr : t ? na : Qi;
    return (
      !t && Qt(o, "iterate", l ? pr : Pn),
      {
        next() {
          const { value: u, done: d } = c.next();
          return d
            ? { value: u, done: d }
            : { value: a ? [f(u[0]), f(u[1])] : f(u), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function je(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Gh() {
  const e = {
      get(o) {
        return _s(this, o);
      },
      get size() {
        return ks(this);
      },
      has: ws,
      add: tl,
      set: el,
      delete: nl,
      clear: il,
      forEach: Ss(!1, !1),
    },
    t = {
      get(o) {
        return _s(this, o, !1, !0);
      },
      get size() {
        return ks(this);
      },
      has: ws,
      add: tl,
      set: el,
      delete: nl,
      clear: il,
      forEach: Ss(!1, !0),
    },
    n = {
      get(o) {
        return _s(this, o, !0);
      },
      get size() {
        return ks(this, !0);
      },
      has(o) {
        return ws.call(this, o, !0);
      },
      add: je("add"),
      set: je("set"),
      delete: je("delete"),
      clear: je("clear"),
      forEach: Ss(!0, !1),
    },
    i = {
      get(o) {
        return _s(this, o, !0, !0);
      },
      get size() {
        return ks(this, !0);
      },
      has(o) {
        return ws.call(this, o, !0);
      },
      add: je("add"),
      set: je("set"),
      delete: je("delete"),
      clear: je("clear"),
      forEach: Ss(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Cs(o, !1, !1)),
        (n[o] = Cs(o, !0, !1)),
        (t[o] = Cs(o, !1, !0)),
        (i[o] = Cs(o, !0, !0));
    }),
    [e, n, t, i]
  );
}
const [Qh, Zh, $h, tp] = Gh();
function Mo(e, t) {
  const n = t ? (e ? tp : $h) : e ? Zh : Qh;
  return (i, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? i
      : Reflect.get(lt(n, s) && s in i ? n : i, s, o);
}
const ep = { get: Mo(!1, !1) },
  np = { get: Mo(!1, !0) },
  ip = { get: Mo(!0, !1) },
  sp = { get: Mo(!0, !0) },
  Mf = new WeakMap(),
  Pf = new WeakMap(),
  Ef = new WeakMap(),
  Tf = new WeakMap();
function op(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function rp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : op(mh(e));
}
function ps(e) {
  return Fn(e) ? e : Po(e, !1, Sf, ep, Mf);
}
function $r(e) {
  return Po(e, !1, Xh, np, Pf);
}
function ta(e) {
  return Po(e, !0, Cf, ip, Ef);
}
function ap(e) {
  return Po(e, !0, Jh, sp, Tf);
}
function Po(e, t, n, i, s) {
  if (!gt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const r = rp(e);
  if (r === 0) return e;
  const a = new Proxy(e, r === 2 ? i : n);
  return s.set(e, a), a;
}
function En(e) {
  return Fn(e) ? En(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Fn(e) {
  return !!(e && e.__v_isReadonly);
}
function Gi(e) {
  return !!(e && e.__v_isShallow);
}
function gs(e) {
  return En(e) || Fn(e);
}
function it(e) {
  const t = e && e.__v_raw;
  return t ? it(t) : e;
}
function ea(e) {
  return $s(e, "__v_skip", !0), e;
}
const Qi = (e) => (gt(e) ? ps(e) : e),
  na = (e) => (gt(e) ? ta(e) : e);
function ia(e) {
  en && be && ((e = it(e)), _f(e.dep || (e.dep = Qr())));
}
function Eo(e, t) {
  e = it(e);
  const n = e.dep;
  n && gr(n);
}
function Et(e) {
  return !!(e && e.__v_isRef === !0);
}
function nn(e) {
  return Af(e, !1);
}
function To(e) {
  return Af(e, !0);
}
function Af(e, t) {
  return Et(e) ? e : new lp(e, t);
}
class lp {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : it(t)),
      (this._value = n ? t : Qi(t));
  }
  get value() {
    return ia(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Gi(t) || Fn(t);
    (t = n ? t : it(t)),
      ni(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Qi(t)), Eo(this));
  }
}
function cp(e) {
  Eo(e);
}
function sn(e) {
  return Et(e) ? e.value : e;
}
function fp(e) {
  return Z(e) ? e() : sn(e);
}
const up = {
  get: (e, t, n) => sn(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return Et(s) && !Et(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, i);
  },
};
function sa(e) {
  return En(e) ? e : new Proxy(e, up);
}
class dp {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: i } = t(
      () => ia(this),
      () => Eo(this)
    );
    (this._get = n), (this._set = i);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function hp(e) {
  return new dp(e);
}
function pp(e) {
  const t = W(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Df(e, n);
  return t;
}
class gp {
  constructor(t, n, i) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = i),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Lh(it(this._object), this._key);
  }
}
class mp {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function bp(e, t, n) {
  return Et(e)
    ? e
    : Z(e)
    ? new mp(e)
    : gt(e) && arguments.length > 1
    ? Df(e, t, n)
    : nn(e);
}
function Df(e, t, n) {
  const i = e[t];
  return Et(i) ? i : new gp(e, t, n);
}
class yp {
  constructor(t, n, i, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new hs(t, () => {
        this._dirty || ((this._dirty = !0), Eo(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = i);
  }
  get value() {
    const t = it(this);
    return (
      ia(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function xp(e, t, n = !1) {
  let i, s;
  const o = Z(e);
  return (
    o ? ((i = e), (s = xe)) : ((i = e.get), (s = e.set)),
    new yp(i, s, o || !s, n)
  );
}
function vp(e, ...t) {}
function _p(e, t) {}
function Ie(e, t, n, i) {
  let s;
  try {
    s = i ? e(...i) : e();
  } catch (o) {
    zn(o, t, n);
  }
  return s;
}
function ne(e, t, n, i) {
  if (Z(e)) {
    const o = Ie(e, t, n, i);
    return (
      o &&
        Xr(o) &&
        o.catch((r) => {
          zn(r, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(ne(e[o], t, n, i));
  return s;
}
function zn(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const r = t.proxy,
      a = n;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, r, a) === !1) return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ie(l, null, 10, [e, r, a]);
      return;
    }
  }
  wp(e, n, s, i);
}
function wp(e, t, n, i = !0) {
  console.error(e);
}
let Zi = !1,
  mr = !1;
const Bt = [];
let Me = 0;
const Zn = [];
let Oe = null,
  kn = 0;
const Ff = Promise.resolve();
let oa = null;
function Ao(e) {
  const t = oa || Ff;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kp(e) {
  let t = Me + 1,
    n = Bt.length;
  for (; t < n; ) {
    const i = (t + n) >>> 1;
    $i(Bt[i]) < e ? (t = i + 1) : (n = i);
  }
  return t;
}
function Do(e) {
  (!Bt.length || !Bt.includes(e, Zi && e.allowRecurse ? Me + 1 : Me)) &&
    (e.id == null ? Bt.push(e) : Bt.splice(kp(e.id), 0, e), Rf());
}
function Rf() {
  !Zi && !mr && ((mr = !0), (oa = Ff.then(Of)));
}
function Sp(e) {
  const t = Bt.indexOf(e);
  t > Me && Bt.splice(t, 1);
}
function ra(e) {
  W(e)
    ? Zn.push(...e)
    : (!Oe || !Oe.includes(e, e.allowRecurse ? kn + 1 : kn)) && Zn.push(e),
    Rf();
}
function sl(e, t = Zi ? Me + 1 : 0) {
  for (; t < Bt.length; t++) {
    const n = Bt[t];
    n && n.pre && (Bt.splice(t, 1), t--, n());
  }
}
function io(e) {
  if (Zn.length) {
    const t = [...new Set(Zn)];
    if (((Zn.length = 0), Oe)) {
      Oe.push(...t);
      return;
    }
    for (Oe = t, Oe.sort((n, i) => $i(n) - $i(i)), kn = 0; kn < Oe.length; kn++)
      Oe[kn]();
    (Oe = null), (kn = 0);
  }
}
const $i = (e) => (e.id == null ? 1 / 0 : e.id),
  Cp = (e, t) => {
    const n = $i(e) - $i(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Of(e) {
  (mr = !1), (Zi = !0), Bt.sort(Cp);
  const t = xe;
  try {
    for (Me = 0; Me < Bt.length; Me++) {
      const n = Bt[Me];
      n && n.active !== !1 && Ie(n, null, 14);
    }
  } finally {
    (Me = 0),
      (Bt.length = 0),
      io(),
      (Zi = !1),
      (oa = null),
      (Bt.length || Zn.length) && Of();
  }
}
let Kn,
  Ms = [];
function Lf(e, t) {
  var n, i;
  (Kn = e),
    Kn
      ? ((Kn.enabled = !0),
        Ms.forEach(({ event: s, args: o }) => Kn.emit(s, ...o)),
        (Ms = []))
      : typeof window < "u" &&
        window.HTMLElement &&
        !(
          (i = (n = window.navigator) == null ? void 0 : n.userAgent) != null &&
          i.includes("jsdom")
        )
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
          t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
          Lf(o, t);
        }),
        setTimeout(() => {
          Kn || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Ms = []));
        }, 3e3))
      : (Ms = []);
}
function Mp(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || pt;
  let s = n;
  const o = t.startsWith("update:"),
    r = o && t.slice(7);
  if (r && r in i) {
    const f = `${r === "modelValue" ? "model" : r}Modifiers`,
      { number: u, trim: d } = i[f] || pt;
    d && (s = n.map((h) => (vt(h) ? h.trim() : h))), u && (s = n.map(to));
  }
  let a,
    l = i[(a = Bi(t))] || i[(a = Bi(Gt(t)))];
  !l && o && (l = i[(a = Bi(ce(t)))]), l && ne(l, e, 6, s);
  const c = i[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), ne(c, e, 6, s);
  }
}
function Bf(e, t, n = !1) {
  const i = t.emitsCache,
    s = i.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let r = {},
    a = !1;
  if (!Z(e)) {
    const l = (c) => {
      const f = Bf(c, t, !0);
      f && ((a = !0), yt(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (gt(e) && i.set(e, null), null)
    : (W(o) ? o.forEach((l) => (r[l] = null)) : yt(r, o),
      gt(e) && i.set(e, r),
      r);
}
function Fo(e, t) {
  return !e || !fs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      lt(e, t[0].toLowerCase() + t.slice(1)) || lt(e, ce(t)) || lt(e, t));
}
let Dt = null,
  Ro = null;
function ts(e) {
  const t = Dt;
  return (Dt = e), (Ro = (e && e.type.__scopeId) || null), t;
}
function aa(e) {
  Ro = e;
}
function la() {
  Ro = null;
}
const Pp = (e) => cn;
function cn(e, t = Dt, n) {
  if (!t || e._n) return e;
  const i = (...s) => {
    i._d && kr(-1);
    const o = ts(t);
    let r;
    try {
      r = e(...s);
    } finally {
      ts(o), i._d && kr(1);
    }
    return r;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function Ks(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    props: o,
    propsOptions: [r],
    slots: a,
    attrs: l,
    emit: c,
    render: f,
    renderCache: u,
    data: d,
    setupState: h,
    ctx: g,
    inheritAttrs: m,
  } = e;
  let b, x;
  const y = ts(e);
  try {
    if (n.shapeFlag & 4) {
      const _ = s || i;
      (b = ee(f.call(_, _, u, o, h, d, g))), (x = l);
    } else {
      const _ = t;
      (b = ee(
        _.length > 1 ? _(o, { attrs: l, slots: a, emit: c }) : _(o, null)
      )),
        (x = t.props ? l : Tp(l));
    }
  } catch (_) {
    (Vi.length = 0), zn(_, e, 1), (b = st(Nt));
  }
  let S = b;
  if (x && m !== !1) {
    const _ = Object.keys(x),
      { shapeFlag: k } = S;
    _.length && k & 7 && (r && _.some(Yr) && (x = Ap(x, r)), (S = Ee(S, x)));
  }
  return (
    n.dirs && ((S = Ee(S)), (S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (S.transition = n.transition),
    (b = S),
    ts(y),
    b
  );
}
function Ep(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (fn(i)) {
      if (i.type !== Nt || i.children === "v-if") {
        if (t) return;
        t = i;
      }
    } else return;
  }
  return t;
}
const Tp = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || fs(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ap = (e, t) => {
    const n = {};
    for (const i in e) (!Yr(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
function Dp(e, t, n) {
  const { props: i, children: s, component: o } = e,
    { props: r, children: a, patchFlag: l } = t,
    c = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return i ? ol(i, r, c) : !!r;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const d = f[u];
        if (r[d] !== i[d] && !Fo(c, d)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : i === r
      ? !1
      : i
      ? r
        ? ol(i, r, c)
        : !0
      : !!r;
  return !1;
}
function ol(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (t[o] !== e[o] && !Fo(n, o)) return !0;
  }
  return !1;
}
function ca({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Nf = (e) => e.__isSuspense,
  Fp = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, i, s, o, r, a, l, c) {
      e == null ? Op(t, n, i, s, o, r, a, l, c) : Lp(e, t, n, i, s, r, a, l, c);
    },
    hydrate: Bp,
    create: fa,
    normalize: Np,
  },
  Rp = Fp;
function es(e, t) {
  const n = e.props && e.props[t];
  Z(n) && n();
}
function Op(e, t, n, i, s, o, r, a, l) {
  const {
      p: c,
      o: { createElement: f },
    } = l,
    u = f("div"),
    d = (e.suspense = fa(e, s, i, t, u, n, o, r, a, l));
  c(null, (d.pendingBranch = e.ssContent), u, null, i, d, o, r),
    d.deps > 0
      ? (es(e, "onPending"),
        es(e, "onFallback"),
        c(null, e.ssFallback, t, n, i, null, o, r),
        $n(d, e.ssFallback))
      : d.resolve(!1, !0);
}
function Lp(e, t, n, i, s, o, r, a, { p: l, um: c, o: { createElement: f } }) {
  const u = (t.suspense = e.suspense);
  (u.vnode = t), (t.el = e.el);
  const d = t.ssContent,
    h = t.ssFallback,
    { activeBranch: g, pendingBranch: m, isInFallback: b, isHydrating: x } = u;
  if (m)
    (u.pendingBranch = d),
      ye(d, m)
        ? (l(m, d, u.hiddenContainer, null, s, u, o, r, a),
          u.deps <= 0
            ? u.resolve()
            : b && (l(g, h, n, i, s, null, o, r, a), $n(u, h)))
        : (u.pendingId++,
          x ? ((u.isHydrating = !1), (u.activeBranch = m)) : c(m, s, u),
          (u.deps = 0),
          (u.effects.length = 0),
          (u.hiddenContainer = f("div")),
          b
            ? (l(null, d, u.hiddenContainer, null, s, u, o, r, a),
              u.deps <= 0
                ? u.resolve()
                : (l(g, h, n, i, s, null, o, r, a), $n(u, h)))
            : g && ye(d, g)
            ? (l(g, d, n, i, s, u, o, r, a), u.resolve(!0))
            : (l(null, d, u.hiddenContainer, null, s, u, o, r, a),
              u.deps <= 0 && u.resolve()));
  else if (g && ye(d, g)) l(g, d, n, i, s, u, o, r, a), $n(u, d);
  else if (
    (es(t, "onPending"),
    (u.pendingBranch = d),
    u.pendingId++,
    l(null, d, u.hiddenContainer, null, s, u, o, r, a),
    u.deps <= 0)
  )
    u.resolve();
  else {
    const { timeout: y, pendingId: S } = u;
    y > 0
      ? setTimeout(() => {
          u.pendingId === S && u.fallback(h);
        }, y)
      : y === 0 && u.fallback(h);
  }
}
function fa(e, t, n, i, s, o, r, a, l, c, f = !1) {
  const {
    p: u,
    m: d,
    um: h,
    n: g,
    o: { parentNode: m, remove: b },
  } = c;
  let x;
  const y = Ip(e);
  y && t != null && t.pendingBranch && ((x = t.pendingId), t.deps++);
  const S = e.props ? eo(e.props.timeout) : void 0,
    _ = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: r,
      container: i,
      hiddenContainer: s,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof S == "number" ? S : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: f,
      isUnmounted: !1,
      effects: [],
      resolve(k = !1, E = !1) {
        const {
          vnode: P,
          activeBranch: C,
          pendingBranch: T,
          pendingId: R,
          effects: N,
          parentComponent: O,
          container: U,
        } = _;
        if (_.isHydrating) _.isHydrating = !1;
        else if (!k) {
          const Q = C && T.transition && T.transition.mode === "out-in";
          Q &&
            (C.transition.afterLeave = () => {
              R === _.pendingId && d(T, U, tt, 0);
            });
          let { anchor: tt } = _;
          C && ((tt = g(C)), h(C, O, _, !0)), Q || d(T, U, tt, 0);
        }
        $n(_, T), (_.pendingBranch = null), (_.isInFallback = !1);
        let z = _.parent,
          nt = !1;
        for (; z; ) {
          if (z.pendingBranch) {
            z.effects.push(...N), (nt = !0);
            break;
          }
          z = z.parent;
        }
        nt || ra(N),
          (_.effects = []),
          y &&
            t &&
            t.pendingBranch &&
            x === t.pendingId &&
            (t.deps--, t.deps === 0 && !E && t.resolve()),
          es(P, "onResolve");
      },
      fallback(k) {
        if (!_.pendingBranch) return;
        const {
          vnode: E,
          activeBranch: P,
          parentComponent: C,
          container: T,
          isSVG: R,
        } = _;
        es(E, "onFallback");
        const N = g(P),
          O = () => {
            _.isInFallback && (u(null, k, T, N, C, null, R, a, l), $n(_, k));
          },
          U = k.transition && k.transition.mode === "out-in";
        U && (P.transition.afterLeave = O),
          (_.isInFallback = !0),
          h(P, C, null, !0),
          U || O();
      },
      move(k, E, P) {
        _.activeBranch && d(_.activeBranch, k, E, P), (_.container = k);
      },
      next() {
        return _.activeBranch && g(_.activeBranch);
      },
      registerDep(k, E) {
        const P = !!_.pendingBranch;
        P && _.deps++;
        const C = k.vnode.el;
        k.asyncDep
          .catch((T) => {
            zn(T, k, 0);
          })
          .then((T) => {
            if (k.isUnmounted || _.isUnmounted || _.pendingId !== k.suspenseId)
              return;
            k.asyncResolved = !0;
            const { vnode: R } = k;
            Sr(k, T, !1), C && (R.el = C);
            const N = !C && k.subTree.el;
            E(k, R, m(C || k.subTree.el), C ? null : g(k.subTree), _, r, l),
              N && b(N),
              ca(k, R.el),
              P && --_.deps === 0 && _.resolve();
          });
      },
      unmount(k, E) {
        (_.isUnmounted = !0),
          _.activeBranch && h(_.activeBranch, n, k, E),
          _.pendingBranch && h(_.pendingBranch, n, k, E);
      },
    };
  return _;
}
function Bp(e, t, n, i, s, o, r, a, l) {
  const c = (t.suspense = fa(
      t,
      i,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      s,
      o,
      r,
      a,
      !0
    )),
    f = l(e, (c.pendingBranch = t.ssContent), n, c, o, r);
  return c.deps === 0 && c.resolve(!1, !0), f;
}
function Np(e) {
  const { shapeFlag: t, children: n } = e,
    i = t & 32;
  (e.ssContent = rl(i ? n.default : n)),
    (e.ssFallback = i ? rl(n.fallback) : st(Nt));
}
function rl(e) {
  let t;
  if (Z(e)) {
    const n = Ln && e._c;
    n && ((e._d = !1), It()), (e = e()), n && ((e._d = !0), (t = Xt), gu());
  }
  return (
    W(e) && (e = Ep(e)),
    (e = ee(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function If(e, t) {
  t && t.pendingBranch
    ? W(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ra(e);
}
function $n(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: i } = e,
    s = (n.el = t.el);
  i && i.subTree === n && ((i.vnode.el = s), ca(i, s));
}
function Ip(e) {
  var t;
  return (
    ((t = e.props) == null ? void 0 : t.suspensible) != null &&
    e.props.suspensible !== !1
  );
}
function zp(e, t) {
  return ms(e, null, t);
}
function zf(e, t) {
  return ms(e, null, { flush: "post" });
}
function Vp(e, t) {
  return ms(e, null, { flush: "sync" });
}
const Ps = {};
function ze(e, t, n) {
  return ms(e, t, n);
}
function ms(
  e,
  t,
  { immediate: n, deep: i, flush: s, onTrack: o, onTrigger: r } = pt
) {
  var a;
  const l = bf() === ((a = Mt) == null ? void 0 : a.scope) ? Mt : null;
  let c,
    f = !1,
    u = !1;
  if (
    (Et(e)
      ? ((c = () => e.value), (f = Gi(e)))
      : En(e)
      ? ((c = () => e), (i = !0))
      : W(e)
      ? ((u = !0),
        (f = e.some((_) => En(_) || Gi(_))),
        (c = () =>
          e.map((_) => {
            if (Et(_)) return _.value;
            if (En(_)) return Cn(_);
            if (Z(_)) return Ie(_, l, 2);
          })))
      : Z(e)
      ? t
        ? (c = () => Ie(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return d && d(), ne(e, l, 3, [h]);
          })
      : (c = xe),
    t && i)
  ) {
    const _ = c;
    c = () => Cn(_());
  }
  let d,
    h = (_) => {
      d = y.onStop = () => {
        Ie(_, l, 4);
      };
    },
    g;
  if (si)
    if (
      ((h = xe),
      t ? n && ne(t, l, 3, [c(), u ? [] : void 0, h]) : c(),
      s === "sync")
    ) {
      const _ = Eu();
      g = _.__watcherHandles || (_.__watcherHandles = []);
    } else return xe;
  let m = u ? new Array(e.length).fill(Ps) : Ps;
  const b = () => {
    if (y.active)
      if (t) {
        const _ = y.run();
        (i || f || (u ? _.some((k, E) => ni(k, m[E])) : ni(_, m))) &&
          (d && d(),
          ne(t, l, 3, [_, m === Ps ? void 0 : u && m[0] === Ps ? [] : m, h]),
          (m = _));
      } else y.run();
  };
  b.allowRecurse = !!t;
  let x;
  s === "sync"
    ? (x = b)
    : s === "post"
    ? (x = () => Ot(b, l && l.suspense))
    : ((b.pre = !0), l && (b.id = l.uid), (x = () => Do(b)));
  const y = new hs(c, x);
  t
    ? n
      ? b()
      : (m = y.run())
    : s === "post"
    ? Ot(y.run.bind(y), l && l.suspense)
    : y.run();
  const S = () => {
    y.stop(), l && l.scope && Kr(l.scope.effects, y);
  };
  return g && g.push(S), S;
}
function qp(e, t, n) {
  const i = this.proxy,
    s = vt(e) ? (e.includes(".") ? Vf(i, e) : () => i[e]) : e.bind(i, i);
  let o;
  Z(t) ? (o = t) : ((o = t.handler), (n = t));
  const r = Mt;
  un(this);
  const a = ms(s, o.bind(i), n);
  return r ? un(r) : on(), a;
}
function Vf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++) i = i[n[s]];
    return i;
  };
}
function Cn(e, t) {
  if (!gt(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Et(e))) Cn(e.value, t);
  else if (W(e)) for (let n = 0; n < e.length; n++) Cn(e[n], t);
  else if (In(e) || Gn(e))
    e.forEach((n) => {
      Cn(n, t);
    });
  else if (hf(e)) for (const n in e) Cn(e[n], t);
  return e;
}
function qf(e, t) {
  const n = Dt;
  if (n === null) return e;
  const i = zo(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, a, l, c = pt] = t[o];
    r &&
      (Z(r) && (r = { mounted: r, updated: r }),
      r.deep && Cn(a),
      s.push({
        dir: r,
        instance: i,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function Ce(e, t, n, i) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const a = s[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[i];
    l && (hi(), ne(l, n, 8, [e.el, a, e, t]), pi());
  }
}
function ua() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    gi(() => {
      e.isMounted = !0;
    }),
    ys(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const ae = [Function, Array],
  da = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ae,
    onEnter: ae,
    onAfterEnter: ae,
    onEnterCancelled: ae,
    onBeforeLeave: ae,
    onLeave: ae,
    onAfterLeave: ae,
    onLeaveCancelled: ae,
    onBeforeAppear: ae,
    onAppear: ae,
    onAfterAppear: ae,
    onAppearCancelled: ae,
  },
  Up = {
    name: "BaseTransition",
    props: da,
    setup(e, { slots: t }) {
      const n = Ue(),
        i = ua();
      let s;
      return () => {
        const o = t.default && Oo(t.default(), !0);
        if (!o || !o.length) return;
        let r = o[0];
        if (o.length > 1) {
          for (const m of o)
            if (m.type !== Nt) {
              r = m;
              break;
            }
        }
        const a = it(e),
          { mode: l } = a;
        if (i.isLeaving) return Ko(r);
        const c = al(r);
        if (!c) return Ko(r);
        const f = ii(c, a, i, n);
        Rn(c, f);
        const u = n.subTree,
          d = u && al(u);
        let h = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const m = g();
          s === void 0 ? (s = m) : m !== s && ((s = m), (h = !0));
        }
        if (d && d.type !== Nt && (!ye(c, d) || h)) {
          const m = ii(d, a, i, n);
          if ((Rn(d, m), l === "out-in"))
            return (
              (i.isLeaving = !0),
              (m.afterLeave = () => {
                (i.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Ko(r)
            );
          l === "in-out" &&
            c.type !== Nt &&
            (m.delayLeave = (b, x, y) => {
              const S = Hf(i, d);
              (S[String(d.key)] = d),
                (b._leaveCb = () => {
                  x(), (b._leaveCb = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = y);
            });
        }
        return r;
      };
    },
  },
  Uf = Up;
function Hf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || ((i = Object.create(null)), n.set(t.type, i)), i;
}
function ii(e, t, n, i) {
  const {
      appear: s,
      mode: o,
      persisted: r = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: u,
      onLeave: d,
      onAfterLeave: h,
      onLeaveCancelled: g,
      onBeforeAppear: m,
      onAppear: b,
      onAfterAppear: x,
      onAppearCancelled: y,
    } = t,
    S = String(e.key),
    _ = Hf(n, e),
    k = (C, T) => {
      C && ne(C, i, 9, T);
    },
    E = (C, T) => {
      const R = T[1];
      k(C, T),
        W(C) ? C.every((N) => N.length <= 1) && R() : C.length <= 1 && R();
    },
    P = {
      mode: o,
      persisted: r,
      beforeEnter(C) {
        let T = a;
        if (!n.isMounted)
          if (s) T = m || a;
          else return;
        C._leaveCb && C._leaveCb(!0);
        const R = _[S];
        R && ye(e, R) && R.el._leaveCb && R.el._leaveCb(), k(T, [C]);
      },
      enter(C) {
        let T = l,
          R = c,
          N = f;
        if (!n.isMounted)
          if (s) (T = b || l), (R = x || c), (N = y || f);
          else return;
        let O = !1;
        const U = (C._enterCb = (z) => {
          O ||
            ((O = !0),
            z ? k(N, [C]) : k(R, [C]),
            P.delayedLeave && P.delayedLeave(),
            (C._enterCb = void 0));
        });
        T ? E(T, [C, U]) : U();
      },
      leave(C, T) {
        const R = String(e.key);
        if ((C._enterCb && C._enterCb(!0), n.isUnmounting)) return T();
        k(u, [C]);
        let N = !1;
        const O = (C._leaveCb = (U) => {
          N ||
            ((N = !0),
            T(),
            U ? k(g, [C]) : k(h, [C]),
            (C._leaveCb = void 0),
            _[R] === e && delete _[R]);
        });
        (_[R] = e), d ? E(d, [C, O]) : O();
      },
      clone(C) {
        return ii(C, t, n, i);
      },
    };
  return P;
}
function Ko(e) {
  if (bs(e)) return (e = Ee(e)), (e.children = null), e;
}
function al(e) {
  return bs(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Rn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Rn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Oo(e, t = !1, n) {
  let i = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const a = n == null ? r.key : String(n) + String(r.key != null ? r.key : o);
    r.type === Pt
      ? (r.patchFlag & 128 && s++, (i = i.concat(Oo(r.children, t, a))))
      : (t || r.type !== Nt) && i.push(a != null ? Ee(r, { key: a }) : r);
  }
  if (s > 1) for (let o = 0; o < i.length; o++) i[o].patchFlag = -2;
  return i;
}
function Vn(e, t) {
  return Z(e) ? (() => yt({ name: e.name }, t, { setup: e }))() : e;
}
const Tn = (e) => !!e.type.__asyncLoader;
function Hp(e) {
  Z(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: i,
    delay: s = 200,
    timeout: o,
    suspensible: r = !0,
    onError: a,
  } = e;
  let l = null,
    c,
    f = 0;
  const u = () => (f++, (l = null), d()),
    d = () => {
      let h;
      return (
        l ||
        (h = l =
          t()
            .catch((g) => {
              if (((g = g instanceof Error ? g : new Error(String(g))), a))
                return new Promise((m, b) => {
                  a(
                    g,
                    () => m(u()),
                    () => b(g),
                    f + 1
                  );
                });
              throw g;
            })
            .then((g) =>
              h !== l && l
                ? l
                : (g &&
                    (g.__esModule || g[Symbol.toStringTag] === "Module") &&
                    (g = g.default),
                  (c = g),
                  g)
            ))
      );
    };
  return Vn({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = Mt;
      if (c) return () => Xo(c, h);
      const g = (y) => {
        (l = null), zn(y, h, 13, !i);
      };
      if ((r && h.suspense) || si)
        return d()
          .then((y) => () => Xo(y, h))
          .catch((y) => (g(y), () => (i ? st(i, { error: y }) : null)));
      const m = nn(!1),
        b = nn(),
        x = nn(!!s);
      return (
        s &&
          setTimeout(() => {
            x.value = !1;
          }, s),
        o != null &&
          setTimeout(() => {
            if (!m.value && !b.value) {
              const y = new Error(`Async component timed out after ${o}ms.`);
              g(y), (b.value = y);
            }
          }, o),
        d()
          .then(() => {
            (m.value = !0),
              h.parent && bs(h.parent.vnode) && Do(h.parent.update);
          })
          .catch((y) => {
            g(y), (b.value = y);
          }),
        () => {
          if (m.value && c) return Xo(c, h);
          if (b.value && i) return st(i, { error: b.value });
          if (n && !x.value) return st(n);
        }
      );
    },
  });
}
function Xo(e, t) {
  const { ref: n, props: i, children: s, ce: o } = t.vnode,
    r = st(e, i, s);
  return (r.ref = n), (r.ce = o), delete t.vnode.ce, r;
}
const bs = (e) => e.type.__isKeepAlive,
  jp = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Ue(),
        i = n.ctx;
      if (!i.renderer)
        return () => {
          const y = t.default && t.default();
          return y && y.length === 1 ? y[0] : y;
        };
      const s = new Map(),
        o = new Set();
      let r = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: f,
            o: { createElement: u },
          },
        } = i,
        d = u("div");
      (i.activate = (y, S, _, k, E) => {
        const P = y.component;
        c(y, S, _, 0, a),
          l(P.vnode, y, S, _, P, a, k, y.slotScopeIds, E),
          Ot(() => {
            (P.isDeactivated = !1), P.a && Qn(P.a);
            const C = y.props && y.props.onVnodeMounted;
            C && Yt(C, P.parent, y);
          }, a);
      }),
        (i.deactivate = (y) => {
          const S = y.component;
          c(y, d, null, 1, a),
            Ot(() => {
              S.da && Qn(S.da);
              const _ = y.props && y.props.onVnodeUnmounted;
              _ && Yt(_, S.parent, y), (S.isDeactivated = !0);
            }, a);
        });
      function h(y) {
        Jo(y), f(y, n, a, !0);
      }
      function g(y) {
        s.forEach((S, _) => {
          const k = Mr(S.type);
          k && (!y || !y(k)) && m(_);
        });
      }
      function m(y) {
        const S = s.get(y);
        !r || !ye(S, r) ? h(S) : r && Jo(r), s.delete(y), o.delete(y);
      }
      ze(
        () => [e.include, e.exclude],
        ([y, S]) => {
          y && g((_) => Ei(y, _)), S && g((_) => !Ei(S, _));
        },
        { flush: "post", deep: !0 }
      );
      let b = null;
      const x = () => {
        b != null && s.set(b, Go(n.subTree));
      };
      return (
        gi(x),
        Bo(x),
        ys(() => {
          s.forEach((y) => {
            const { subTree: S, suspense: _ } = n,
              k = Go(S);
            if (y.type === k.type && y.key === k.key) {
              Jo(k);
              const E = k.component.da;
              E && Ot(E, _);
              return;
            }
            h(y);
          });
        }),
        () => {
          if (((b = null), !t.default)) return null;
          const y = t.default(),
            S = y[0];
          if (y.length > 1) return (r = null), y;
          if (!fn(S) || (!(S.shapeFlag & 4) && !(S.shapeFlag & 128)))
            return (r = null), S;
          let _ = Go(S);
          const k = _.type,
            E = Mr(Tn(_) ? _.type.__asyncResolved || {} : k),
            { include: P, exclude: C, max: T } = e;
          if ((P && (!E || !Ei(P, E))) || (C && E && Ei(C, E)))
            return (r = _), S;
          const R = _.key == null ? k : _.key,
            N = s.get(R);
          return (
            _.el && ((_ = Ee(_)), S.shapeFlag & 128 && (S.ssContent = _)),
            (b = R),
            N
              ? ((_.el = N.el),
                (_.component = N.component),
                _.transition && Rn(_, _.transition),
                (_.shapeFlag |= 512),
                o.delete(R),
                o.add(R))
              : (o.add(R),
                T && o.size > parseInt(T, 10) && m(o.values().next().value)),
            (_.shapeFlag |= 256),
            (r = _),
            Nf(S.type) ? S : _
          );
        }
      );
    },
  },
  Wp = jp;
function Ei(e, t) {
  return W(e)
    ? e.some((n) => Ei(n, t))
    : vt(e)
    ? e.split(",").includes(t)
    : gh(e)
    ? e.test(t)
    : !1;
}
function jf(e, t) {
  Yf(e, "a", t);
}
function Wf(e, t) {
  Yf(e, "da", t);
}
function Yf(e, t, n = Mt) {
  const i =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Lo(t, i, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      bs(s.parent.vnode) && Yp(i, t, n, s), (s = s.parent);
  }
}
function Yp(e, t, n, i) {
  const s = Lo(t, e, i, !0);
  No(() => {
    Kr(i[t], s);
  }, n);
}
function Jo(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Go(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Lo(e, t, n = Mt, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return;
          hi(), un(n);
          const a = ne(t, n, e, r);
          return on(), pi(), a;
        });
    return i ? s.unshift(o) : s.push(o), o;
  }
}
const qe =
    (e) =>
    (t, n = Mt) =>
      (!si || e === "sp") && Lo(e, (...i) => t(...i), n),
  Kf = qe("bm"),
  gi = qe("m"),
  Xf = qe("bu"),
  Bo = qe("u"),
  ys = qe("bum"),
  No = qe("um"),
  Jf = qe("sp"),
  Gf = qe("rtg"),
  Qf = qe("rtc");
function Zf(e, t = Mt) {
  Lo("ec", e, t);
}
const ha = "components",
  Kp = "directives";
function se(e, t) {
  return pa(ha, e, !0, t) || e;
}
const $f = Symbol.for("v-ndc");
function Xp(e) {
  return vt(e) ? pa(ha, e, !1) || e : e || $f;
}
function Jp(e) {
  return pa(Kp, e);
}
function pa(e, t, n = !0, i = !1) {
  const s = Dt || Mt;
  if (s) {
    const o = s.type;
    if (e === ha) {
      const a = Mr(o, !1);
      if (a && (a === t || a === Gt(t) || a === us(Gt(t)))) return o;
    }
    const r = ll(s[e] || o[e], t) || ll(s.appContext[e], t);
    return !r && i ? o : r;
  }
}
function ll(e, t) {
  return e && (e[t] || e[Gt(t)] || e[us(Gt(t))]);
}
function tu(e, t, n, i) {
  let s;
  const o = n && n[i];
  if (W(e) || vt(e)) {
    s = new Array(e.length);
    for (let r = 0, a = e.length; r < a; r++)
      s[r] = t(e[r], r, void 0, o && o[r]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let r = 0; r < e; r++) s[r] = t(r + 1, r, void 0, o && o[r]);
  } else if (gt(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (r, a) => t(r, a, void 0, o && o[a]));
    else {
      const r = Object.keys(e);
      s = new Array(r.length);
      for (let a = 0, l = r.length; a < l; a++) {
        const c = r[a];
        s[a] = t(e[c], c, a, o && o[a]);
      }
    }
  else s = [];
  return n && (n[i] = s), s;
}
function Gp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (W(i)) for (let s = 0; s < i.length; s++) e[i[s].name] = i[s].fn;
    else
      i &&
        (e[i.name] = i.key
          ? (...s) => {
              const o = i.fn(...s);
              return o && (o.key = i.key), o;
            }
          : i.fn);
  }
  return e;
}
function eu(e, t, n = {}, i, s) {
  if (Dt.isCE || (Dt.parent && Tn(Dt.parent) && Dt.parent.isCE))
    return t !== "default" && (n.name = t), st("slot", n, i && i());
  let o = e[t];
  o && o._c && (o._d = !1), It();
  const r = o && nu(o(n)),
    a = ya(
      Pt,
      { key: n.key || (r && r.key) || `_${t}` },
      r || (i ? i() : []),
      r && e._ === 1 ? 64 : -2
    );
  return (
    !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
  );
}
function nu(e) {
  return e.some((t) =>
    fn(t) ? !(t.type === Nt || (t.type === Pt && !nu(t.children))) : !0
  )
    ? e
    : null;
}
function Qp(e, t) {
  const n = {};
  for (const i in e) n[t && /[A-Z]/.test(i) ? `on:${i}` : Bi(i)] = e[i];
  return n;
}
const br = (e) => (e ? (ku(e) ? zo(e) || e.proxy : br(e.parent)) : null),
  Ni = yt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => br(e.parent),
    $root: (e) => br(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ga(e),
    $forceUpdate: (e) => e.f || (e.f = () => Do(e.update)),
    $nextTick: (e) => e.n || (e.n = Ao.bind(e.proxy)),
    $watch: (e) => qp.bind(e),
  }),
  Qo = (e, t) => e !== pt && !e.__isScriptSetup && lt(e, t),
  yr = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: i,
        data: s,
        props: o,
        accessCache: r,
        type: a,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const h = r[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return i[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Qo(i, t)) return (r[t] = 1), i[t];
          if (s !== pt && lt(s, t)) return (r[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && lt(c, t)) return (r[t] = 3), o[t];
          if (n !== pt && lt(n, t)) return (r[t] = 4), n[t];
          xr && (r[t] = 0);
        }
      }
      const f = Ni[t];
      let u, d;
      if (f) return t === "$attrs" && Qt(e, "get", t), f(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== pt && lt(n, t)) return (r[t] = 4), n[t];
      if (((d = l.config.globalProperties), lt(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: s, ctx: o } = e;
      return Qo(s, t)
        ? ((s[t] = n), !0)
        : i !== pt && lt(i, t)
        ? ((i[t] = n), !0)
        : lt(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: i,
          appContext: s,
          propsOptions: o,
        },
      },
      r
    ) {
      let a;
      return (
        !!n[r] ||
        (e !== pt && lt(e, r)) ||
        Qo(t, r) ||
        ((a = o[0]) && lt(a, r)) ||
        lt(i, r) ||
        lt(Ni, r) ||
        lt(s.config.globalProperties, r)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : lt(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  },
  Zp = yt({}, yr, {
    get(e, t) {
      if (t !== Symbol.unscopables) return yr.get(e, t, e);
    },
    has(e, t) {
      return t[0] !== "_" && !vh(t);
    },
  });
function $p() {
  return null;
}
function tg() {
  return null;
}
function eg(e) {}
function ng(e) {}
function ig() {
  return null;
}
function sg() {}
function og(e, t) {
  return null;
}
function rg() {
  return iu().slots;
}
function ag() {
  return iu().attrs;
}
function lg(e, t, n) {
  const i = Ue();
  if (n && n.local) {
    const s = nn(e[t]);
    return (
      ze(
        () => e[t],
        (o) => (s.value = o)
      ),
      ze(s, (o) => {
        o !== e[t] && i.emit(`update:${t}`, o);
      }),
      s
    );
  } else
    return {
      __v_isRef: !0,
      get value() {
        return e[t];
      },
      set value(s) {
        i.emit(`update:${t}`, s);
      },
    };
}
function iu() {
  const e = Ue();
  return e.setupContext || (e.setupContext = Mu(e));
}
function ns(e) {
  return W(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function cg(e, t) {
  const n = ns(e);
  for (const i in t) {
    if (i.startsWith("__skip")) continue;
    let s = n[i];
    s
      ? W(s) || Z(s)
        ? (s = n[i] = { type: s, default: t[i] })
        : (s.default = t[i])
      : s === null && (s = n[i] = { default: t[i] }),
      s && t[`__skip_${i}`] && (s.skipFactory = !0);
  }
  return n;
}
function fg(e, t) {
  return !e || !t ? e || t : W(e) && W(t) ? e.concat(t) : yt({}, ns(e), ns(t));
}
function ug(e, t) {
  const n = {};
  for (const i in e)
    t.includes(i) ||
      Object.defineProperty(n, i, { enumerable: !0, get: () => e[i] });
  return n;
}
function dg(e) {
  const t = Ue();
  let n = e();
  return (
    on(),
    Xr(n) &&
      (n = n.catch((i) => {
        throw (un(t), i);
      })),
    [n, () => un(t)]
  );
}
let xr = !0;
function hg(e) {
  const t = ga(e),
    n = e.proxy,
    i = e.ctx;
  (xr = !1), t.beforeCreate && cl(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    created: f,
    beforeMount: u,
    mounted: d,
    beforeUpdate: h,
    updated: g,
    activated: m,
    deactivated: b,
    beforeDestroy: x,
    beforeUnmount: y,
    destroyed: S,
    unmounted: _,
    render: k,
    renderTracked: E,
    renderTriggered: P,
    errorCaptured: C,
    serverPrefetch: T,
    expose: R,
    inheritAttrs: N,
    components: O,
    directives: U,
    filters: z,
  } = t;
  if ((c && pg(c, i, null), r))
    for (const tt in r) {
      const rt = r[tt];
      Z(rt) && (i[tt] = rt.bind(n));
    }
  if (s) {
    const tt = s.call(n, n);
    gt(tt) && (e.data = ps(tt));
  }
  if (((xr = !0), o))
    for (const tt in o) {
      const rt = o[tt],
        jt = Z(rt) ? rt.bind(n, n) : Z(rt.get) ? rt.get.bind(n, n) : xe,
        Vt = !Z(rt) && Z(rt.set) ? rt.set.bind(n) : xe,
        qt = fe({ get: jt, set: Vt });
      Object.defineProperty(i, tt, {
        enumerable: !0,
        configurable: !0,
        get: () => qt.value,
        set: (St) => (qt.value = St),
      });
    }
  if (a) for (const tt in a) su(a[tt], i, n, tt);
  if (l) {
    const tt = Z(l) ? l.call(n) : l;
    Reflect.ownKeys(tt).forEach((rt) => {
      Ii(rt, tt[rt]);
    });
  }
  f && cl(f, e, "c");
  function Q(tt, rt) {
    W(rt) ? rt.forEach((jt) => tt(jt.bind(n))) : rt && tt(rt.bind(n));
  }
  if (
    (Q(Kf, u),
    Q(gi, d),
    Q(Xf, h),
    Q(Bo, g),
    Q(jf, m),
    Q(Wf, b),
    Q(Zf, C),
    Q(Qf, E),
    Q(Gf, P),
    Q(ys, y),
    Q(No, _),
    Q(Jf, T),
    W(R))
  )
    if (R.length) {
      const tt = e.exposed || (e.exposed = {});
      R.forEach((rt) => {
        Object.defineProperty(tt, rt, {
          get: () => n[rt],
          set: (jt) => (n[rt] = jt),
        });
      });
    } else e.exposed || (e.exposed = {});
  k && e.render === xe && (e.render = k),
    N != null && (e.inheritAttrs = N),
    O && (e.components = O),
    U && (e.directives = U);
}
function pg(e, t, n = xe) {
  W(e) && (e = vr(e));
  for (const i in e) {
    const s = e[i];
    let o;
    gt(s)
      ? "default" in s
        ? (o = Pe(s.from || i, s.default, !0))
        : (o = Pe(s.from || i))
      : (o = Pe(s)),
      Et(o)
        ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (r) => (o.value = r),
          })
        : (t[i] = o);
  }
}
function cl(e, t, n) {
  ne(W(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function su(e, t, n, i) {
  const s = i.includes(".") ? Vf(n, i) : () => n[i];
  if (vt(e)) {
    const o = t[e];
    Z(o) && ze(s, o);
  } else if (Z(e)) ze(s, e.bind(n));
  else if (gt(e))
    if (W(e)) e.forEach((o) => su(o, t, n, i));
    else {
      const o = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(o) && ze(s, o, e);
    }
}
function ga(e) {
  const t = e.type,
    { mixins: n, extends: i } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: r },
    } = e.appContext,
    a = o.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !i
      ? (l = t)
      : ((l = {}), s.length && s.forEach((c) => so(l, c, r, !0)), so(l, t, r)),
    gt(t) && o.set(t, l),
    l
  );
}
function so(e, t, n, i = !1) {
  const { mixins: s, extends: o } = t;
  o && so(e, o, n, !0), s && s.forEach((r) => so(e, r, n, !0));
  for (const r in t)
    if (!(i && r === "expose")) {
      const a = gg[r] || (n && n[r]);
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const gg = {
  data: fl,
  props: ul,
  emits: ul,
  methods: Ti,
  computed: Ti,
  beforeCreate: Ut,
  created: Ut,
  beforeMount: Ut,
  mounted: Ut,
  beforeUpdate: Ut,
  updated: Ut,
  beforeDestroy: Ut,
  beforeUnmount: Ut,
  destroyed: Ut,
  unmounted: Ut,
  activated: Ut,
  deactivated: Ut,
  errorCaptured: Ut,
  serverPrefetch: Ut,
  components: Ti,
  directives: Ti,
  watch: bg,
  provide: fl,
  inject: mg,
};
function fl(e, t) {
  return t
    ? e
      ? function () {
          return yt(
            Z(e) ? e.call(this, this) : e,
            Z(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function mg(e, t) {
  return Ti(vr(e), vr(t));
}
function vr(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ut(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ti(e, t) {
  return e ? yt(Object.create(null), e, t) : t;
}
function ul(e, t) {
  return e
    ? W(e) && W(t)
      ? [...new Set([...e, ...t])]
      : yt(Object.create(null), ns(e), ns(t ?? {}))
    : t;
}
function bg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = yt(Object.create(null), e);
  for (const i in t) n[i] = Ut(e[i], t[i]);
  return n;
}
function ou() {
  return {
    app: null,
    config: {
      isNativeTag: dh,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let yg = 0;
function xg(e, t) {
  return function (i, s = null) {
    Z(i) || (i = yt({}, i)), s != null && !gt(s) && (s = null);
    const o = ou(),
      r = new Set();
    let a = !1;
    const l = (o.app = {
      _uid: yg++,
      _component: i,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: _a,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          r.has(c) ||
            (c && Z(c.install)
              ? (r.add(c), c.install(l, ...f))
              : Z(c) && (r.add(c), c(l, ...f))),
          l
        );
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), l;
      },
      component(c, f) {
        return f ? ((o.components[c] = f), l) : o.components[c];
      },
      directive(c, f) {
        return f ? ((o.directives[c] = f), l) : o.directives[c];
      },
      mount(c, f, u) {
        if (!a) {
          const d = st(i, s);
          return (
            (d.appContext = o),
            f && t ? t(d, c) : e(d, c, u),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            zo(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, f) {
        return (o.provides[c] = f), l;
      },
      runWithContext(c) {
        is = l;
        try {
          return c();
        } finally {
          is = null;
        }
      },
    });
    return l;
  };
}
let is = null;
function Ii(e, t) {
  if (Mt) {
    let n = Mt.provides;
    const i = Mt.parent && Mt.parent.provides;
    i === n && (n = Mt.provides = Object.create(i)), (n[e] = t);
  }
}
function Pe(e, t, n = !1) {
  const i = Mt || Dt;
  if (i || is) {
    const s = i
      ? i.parent == null
        ? i.vnode.appContext && i.vnode.appContext.provides
        : i.parent.provides
      : is._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && Z(t) ? t.call(i && i.proxy) : t;
  }
}
function vg() {
  return !!(Mt || Dt || is);
}
function _g(e, t, n, i = !1) {
  const s = {},
    o = {};
  $s(o, Io, 1), (e.propsDefaults = Object.create(null)), ru(e, t, s, o);
  for (const r in e.propsOptions[0]) r in s || (s[r] = void 0);
  n ? (e.props = i ? s : $r(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function wg(e, t, n, i) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: r },
    } = e,
    a = it(s),
    [l] = e.propsOptions;
  let c = !1;
  if ((i || r > 0) && !(r & 16)) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let d = f[u];
        if (Fo(e.emitsOptions, d)) continue;
        const h = t[d];
        if (l)
          if (lt(o, d)) h !== o[d] && ((o[d] = h), (c = !0));
          else {
            const g = Gt(d);
            s[g] = _r(l, a, g, h, e, !1);
          }
        else h !== o[d] && ((o[d] = h), (c = !0));
      }
    }
  } else {
    ru(e, t, s, o) && (c = !0);
    let f;
    for (const u in a)
      (!t || (!lt(t, u) && ((f = ce(u)) === u || !lt(t, f)))) &&
        (l
          ? n &&
            (n[u] !== void 0 || n[f] !== void 0) &&
            (s[u] = _r(l, a, u, void 0, e, !0))
          : delete s[u]);
    if (o !== a)
      for (const u in o) (!t || !lt(t, u)) && (delete o[u], (c = !0));
  }
  c && Ve(e, "set", "$attrs");
}
function ru(e, t, n, i) {
  const [s, o] = e.propsOptions;
  let r = !1,
    a;
  if (t)
    for (let l in t) {
      if (Li(l)) continue;
      const c = t[l];
      let f;
      s && lt(s, (f = Gt(l)))
        ? !o || !o.includes(f)
          ? (n[f] = c)
          : ((a || (a = {}))[f] = c)
        : Fo(e.emitsOptions, l) ||
          ((!(l in i) || c !== i[l]) && ((i[l] = c), (r = !0)));
    }
  if (o) {
    const l = it(n),
      c = a || pt;
    for (let f = 0; f < o.length; f++) {
      const u = o[f];
      n[u] = _r(s, l, u, c[u], e, !lt(c, u));
    }
  }
  return r;
}
function _r(e, t, n, i, s, o) {
  const r = e[n];
  if (r != null) {
    const a = lt(r, "default");
    if (a && i === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && Z(l)) {
        const { propsDefaults: c } = s;
        n in c ? (i = c[n]) : (un(s), (i = c[n] = l.call(null, t)), on());
      } else i = l;
    }
    r[0] &&
      (o && !a ? (i = !1) : r[1] && (i === "" || i === ce(n)) && (i = !0));
  }
  return i;
}
function au(e, t, n = !1) {
  const i = t.propsCache,
    s = i.get(e);
  if (s) return s;
  const o = e.props,
    r = {},
    a = [];
  let l = !1;
  if (!Z(e)) {
    const f = (u) => {
      l = !0;
      const [d, h] = au(u, t, !0);
      yt(r, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!o && !l) return gt(e) && i.set(e, Jn), Jn;
  if (W(o))
    for (let f = 0; f < o.length; f++) {
      const u = Gt(o[f]);
      dl(u) && (r[u] = pt);
    }
  else if (o)
    for (const f in o) {
      const u = Gt(f);
      if (dl(u)) {
        const d = o[f],
          h = (r[u] = W(d) || Z(d) ? { type: d } : yt({}, d));
        if (h) {
          const g = gl(Boolean, h.type),
            m = gl(String, h.type);
          (h[0] = g > -1),
            (h[1] = m < 0 || g < m),
            (g > -1 || lt(h, "default")) && a.push(u);
        }
      }
    }
  const c = [r, a];
  return gt(e) && i.set(e, c), c;
}
function dl(e) {
  return e[0] !== "$";
}
function hl(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function pl(e, t) {
  return hl(e) === hl(t);
}
function gl(e, t) {
  return W(t) ? t.findIndex((n) => pl(n, e)) : Z(t) && pl(t, e) ? 0 : -1;
}
const lu = (e) => e[0] === "_" || e === "$stable",
  ma = (e) => (W(e) ? e.map(ee) : [ee(e)]),
  kg = (e, t, n) => {
    if (t._n) return t;
    const i = cn((...s) => ma(t(...s)), n);
    return (i._c = !1), i;
  },
  cu = (e, t, n) => {
    const i = e._ctx;
    for (const s in e) {
      if (lu(s)) continue;
      const o = e[s];
      if (Z(o)) t[s] = kg(s, o, i);
      else if (o != null) {
        const r = ma(o);
        t[s] = () => r;
      }
    }
  },
  fu = (e, t) => {
    const n = ma(t);
    e.slots.default = () => n;
  },
  Sg = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = it(t)), $s(t, "_", n)) : cu(t, (e.slots = {}));
    } else (e.slots = {}), t && fu(e, t);
    $s(e.slots, Io, 1);
  },
  Cg = (e, t, n) => {
    const { vnode: i, slots: s } = e;
    let o = !0,
      r = pt;
    if (i.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (o = !1)
          : (yt(s, t), !n && a === 1 && delete s._)
        : ((o = !t.$stable), cu(t, s)),
        (r = t);
    } else t && (fu(e, t), (r = { default: 1 }));
    if (o) for (const a in s) !lu(a) && !(a in r) && delete s[a];
  };
function oo(e, t, n, i, s = !1) {
  if (W(e)) {
    e.forEach((d, h) => oo(d, t && (W(t) ? t[h] : t), n, i, s));
    return;
  }
  if (Tn(i) && !s) return;
  const o = i.shapeFlag & 4 ? zo(i.component) || i.component.proxy : i.el,
    r = s ? null : o,
    { i: a, r: l } = e,
    c = t && t.r,
    f = a.refs === pt ? (a.refs = {}) : a.refs,
    u = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (vt(c)
        ? ((f[c] = null), lt(u, c) && (u[c] = null))
        : Et(c) && (c.value = null)),
    Z(l))
  )
    Ie(l, a, 12, [r, f]);
  else {
    const d = vt(l),
      h = Et(l);
    if (d || h) {
      const g = () => {
        if (e.f) {
          const m = d ? (lt(u, l) ? u[l] : f[l]) : l.value;
          s
            ? W(m) && Kr(m, o)
            : W(m)
            ? m.includes(o) || m.push(o)
            : d
            ? ((f[l] = [o]), lt(u, l) && (u[l] = f[l]))
            : ((l.value = [o]), e.k && (f[e.k] = l.value));
        } else
          d
            ? ((f[l] = r), lt(u, l) && (u[l] = r))
            : h && ((l.value = r), e.k && (f[e.k] = r));
      };
      r ? ((g.id = -1), Ot(g, n)) : g();
    }
  }
}
let We = !1;
const Es = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  Ts = (e) => e.nodeType === 8;
function Mg(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: i,
        createText: s,
        nextSibling: o,
        parentNode: r,
        remove: a,
        insert: l,
        createComment: c,
      },
    } = e,
    f = (x, y) => {
      if (!y.hasChildNodes()) {
        n(null, x, y), io(), (y._vnode = x);
        return;
      }
      (We = !1),
        u(y.firstChild, x, null, null, null),
        io(),
        (y._vnode = x),
        We && console.error("Hydration completed but contains mismatches.");
    },
    u = (x, y, S, _, k, E = !1) => {
      const P = Ts(x) && x.data === "[",
        C = () => m(x, y, S, _, k, P),
        { type: T, ref: R, shapeFlag: N, patchFlag: O } = y;
      let U = x.nodeType;
      (y.el = x), O === -2 && ((E = !1), (y.dynamicChildren = null));
      let z = null;
      switch (T) {
        case On:
          U !== 3
            ? y.children === ""
              ? (l((y.el = s("")), r(x), x), (z = x))
              : (z = C())
            : (x.data !== y.children && ((We = !0), (x.data = y.children)),
              (z = o(x)));
          break;
        case Nt:
          U !== 8 || P ? (z = C()) : (z = o(x));
          break;
        case An:
          if ((P && ((x = o(x)), (U = x.nodeType)), U === 1 || U === 3)) {
            z = x;
            const nt = !y.children.length;
            for (let Q = 0; Q < y.staticCount; Q++)
              nt && (y.children += z.nodeType === 1 ? z.outerHTML : z.data),
                Q === y.staticCount - 1 && (y.anchor = z),
                (z = o(z));
            return P ? o(z) : z;
          } else C();
          break;
        case Pt:
          P ? (z = g(x, y, S, _, k, E)) : (z = C());
          break;
        default:
          if (N & 1)
            U !== 1 || y.type.toLowerCase() !== x.tagName.toLowerCase()
              ? (z = C())
              : (z = d(x, y, S, _, k, E));
          else if (N & 6) {
            y.slotScopeIds = k;
            const nt = r(x);
            if (
              (t(y, nt, null, S, _, Es(nt), E),
              (z = P ? b(x) : o(x)),
              z && Ts(z) && z.data === "teleport end" && (z = o(z)),
              Tn(y))
            ) {
              let Q;
              P
                ? ((Q = st(Pt)),
                  (Q.anchor = z ? z.previousSibling : nt.lastChild))
                : (Q = x.nodeType === 3 ? he("") : st("div")),
                (Q.el = x),
                (y.component.subTree = Q);
            }
          } else
            N & 64
              ? U !== 8
                ? (z = C())
                : (z = y.type.hydrate(x, y, S, _, k, E, e, h))
              : N & 128 &&
                (z = y.type.hydrate(x, y, S, _, Es(r(x)), k, E, e, u));
      }
      return R != null && oo(R, null, _, y), z;
    },
    d = (x, y, S, _, k, E) => {
      E = E || !!y.dynamicChildren;
      const { type: P, props: C, patchFlag: T, shapeFlag: R, dirs: N } = y,
        O = (P === "input" && N) || P === "option";
      if (O || T !== -1) {
        if ((N && Ce(y, null, S, "created"), C))
          if (O || !E || T & 48)
            for (const z in C)
              ((O && z.endsWith("value")) || (fs(z) && !Li(z))) &&
                i(x, z, null, C[z], !1, void 0, S);
          else C.onClick && i(x, "onClick", null, C.onClick, !1, void 0, S);
        let U;
        if (
          ((U = C && C.onVnodeBeforeMount) && Yt(U, S, y),
          N && Ce(y, null, S, "beforeMount"),
          ((U = C && C.onVnodeMounted) || N) &&
            If(() => {
              U && Yt(U, S, y), N && Ce(y, null, S, "mounted");
            }, _),
          R & 16 && !(C && (C.innerHTML || C.textContent)))
        ) {
          let z = h(x.firstChild, y, x, S, _, k, E);
          for (; z; ) {
            We = !0;
            const nt = z;
            (z = z.nextSibling), a(nt);
          }
        } else
          R & 8 &&
            x.textContent !== y.children &&
            ((We = !0), (x.textContent = y.children));
      }
      return x.nextSibling;
    },
    h = (x, y, S, _, k, E, P) => {
      P = P || !!y.dynamicChildren;
      const C = y.children,
        T = C.length;
      for (let R = 0; R < T; R++) {
        const N = P ? C[R] : (C[R] = ee(C[R]));
        if (x) x = u(x, N, _, k, E, P);
        else {
          if (N.type === On && !N.children) continue;
          (We = !0), n(null, N, S, null, _, k, Es(S), E);
        }
      }
      return x;
    },
    g = (x, y, S, _, k, E) => {
      const { slotScopeIds: P } = y;
      P && (k = k ? k.concat(P) : P);
      const C = r(x),
        T = h(o(x), y, C, S, _, k, E);
      return T && Ts(T) && T.data === "]"
        ? o((y.anchor = T))
        : ((We = !0), l((y.anchor = c("]")), C, T), T);
    },
    m = (x, y, S, _, k, E) => {
      if (((We = !0), (y.el = null), E)) {
        const T = b(x);
        for (;;) {
          const R = o(x);
          if (R && R !== T) a(R);
          else break;
        }
      }
      const P = o(x),
        C = r(x);
      return a(x), n(null, y, C, P, S, _, Es(C), k), P;
    },
    b = (x) => {
      let y = 0;
      for (; x; )
        if (
          ((x = o(x)), x && Ts(x) && (x.data === "[" && y++, x.data === "]"))
        ) {
          if (y === 0) return o(x);
          y--;
        }
      return x;
    };
  return [f, u];
}
const Ot = If;
function uu(e) {
  return hu(e);
}
function du(e) {
  return hu(e, Mg);
}
function hu(e, t) {
  const n = dr();
  n.__VUE__ = !0;
  const {
      insert: i,
      remove: s,
      patchProp: o,
      createElement: r,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: f,
      parentNode: u,
      nextSibling: d,
      setScopeId: h = xe,
      insertStaticContent: g,
    } = e,
    m = (
      v,
      w,
      M,
      A = null,
      F = null,
      L = null,
      H = !1,
      I = null,
      V = !!w.dynamicChildren
    ) => {
      if (v === w) return;
      v && !ye(v, w) && ((A = D(v)), St(v, F, L, !0), (v = null)),
        w.patchFlag === -2 && ((V = !1), (w.dynamicChildren = null));
      const { type: B, ref: J, shapeFlag: K } = w;
      switch (B) {
        case On:
          b(v, w, M, A);
          break;
        case Nt:
          x(v, w, M, A);
          break;
        case An:
          v == null && y(w, M, A, H);
          break;
        case Pt:
          O(v, w, M, A, F, L, H, I, V);
          break;
        default:
          K & 1
            ? k(v, w, M, A, F, L, H, I, V)
            : K & 6
            ? U(v, w, M, A, F, L, H, I, V)
            : (K & 64 || K & 128) && B.process(v, w, M, A, F, L, H, I, V, q);
      }
      J != null && F && oo(J, v && v.ref, L, w || v, !w);
    },
    b = (v, w, M, A) => {
      if (v == null) i((w.el = a(w.children)), M, A);
      else {
        const F = (w.el = v.el);
        w.children !== v.children && c(F, w.children);
      }
    },
    x = (v, w, M, A) => {
      v == null ? i((w.el = l(w.children || "")), M, A) : (w.el = v.el);
    },
    y = (v, w, M, A) => {
      [v.el, v.anchor] = g(v.children, w, M, A, v.el, v.anchor);
    },
    S = ({ el: v, anchor: w }, M, A) => {
      let F;
      for (; v && v !== w; ) (F = d(v)), i(v, M, A), (v = F);
      i(w, M, A);
    },
    _ = ({ el: v, anchor: w }) => {
      let M;
      for (; v && v !== w; ) (M = d(v)), s(v), (v = M);
      s(w);
    },
    k = (v, w, M, A, F, L, H, I, V) => {
      (H = H || w.type === "svg"),
        v == null ? E(w, M, A, F, L, H, I, V) : T(v, w, F, L, H, I, V);
    },
    E = (v, w, M, A, F, L, H, I) => {
      let V, B;
      const { type: J, props: K, shapeFlag: G, transition: et, dirs: ot } = v;
      if (
        ((V = v.el = r(v.type, L, K && K.is, K)),
        G & 8
          ? f(V, v.children)
          : G & 16 &&
            C(v.children, V, null, A, F, L && J !== "foreignObject", H, I),
        ot && Ce(v, null, A, "created"),
        P(V, v, v.scopeId, H, A),
        K)
      ) {
        for (const ht in K)
          ht !== "value" &&
            !Li(ht) &&
            o(V, ht, null, K[ht], L, v.children, A, F, wt);
        "value" in K && o(V, "value", null, K.value),
          (B = K.onVnodeBeforeMount) && Yt(B, A, v);
      }
      ot && Ce(v, null, A, "beforeMount");
      const mt = (!F || (F && !F.pendingBranch)) && et && !et.persisted;
      mt && et.beforeEnter(V),
        i(V, w, M),
        ((B = K && K.onVnodeMounted) || mt || ot) &&
          Ot(() => {
            B && Yt(B, A, v),
              mt && et.enter(V),
              ot && Ce(v, null, A, "mounted");
          }, F);
    },
    P = (v, w, M, A, F) => {
      if ((M && h(v, M), A)) for (let L = 0; L < A.length; L++) h(v, A[L]);
      if (F) {
        let L = F.subTree;
        if (w === L) {
          const H = F.vnode;
          P(v, H, H.scopeId, H.slotScopeIds, F.parent);
        }
      }
    },
    C = (v, w, M, A, F, L, H, I, V = 0) => {
      for (let B = V; B < v.length; B++) {
        const J = (v[B] = I ? Ge(v[B]) : ee(v[B]));
        m(null, J, w, M, A, F, L, H, I);
      }
    },
    T = (v, w, M, A, F, L, H) => {
      const I = (w.el = v.el);
      let { patchFlag: V, dynamicChildren: B, dirs: J } = w;
      V |= v.patchFlag & 16;
      const K = v.props || pt,
        G = w.props || pt;
      let et;
      M && gn(M, !1),
        (et = G.onVnodeBeforeUpdate) && Yt(et, M, w, v),
        J && Ce(w, v, M, "beforeUpdate"),
        M && gn(M, !0);
      const ot = F && w.type !== "foreignObject";
      if (
        (B
          ? R(v.dynamicChildren, B, I, M, A, ot, L)
          : H || rt(v, w, I, null, M, A, ot, L, !1),
        V > 0)
      ) {
        if (V & 16) N(I, w, K, G, M, A, F);
        else if (
          (V & 2 && K.class !== G.class && o(I, "class", null, G.class, F),
          V & 4 && o(I, "style", K.style, G.style, F),
          V & 8)
        ) {
          const mt = w.dynamicProps;
          for (let ht = 0; ht < mt.length; ht++) {
            const Ct = mt[ht],
              ge = K[Ct],
              Hn = G[Ct];
            (Hn !== ge || Ct === "value") &&
              o(I, Ct, ge, Hn, F, v.children, M, A, wt);
          }
        }
        V & 1 && v.children !== w.children && f(I, w.children);
      } else !H && B == null && N(I, w, K, G, M, A, F);
      ((et = G.onVnodeUpdated) || J) &&
        Ot(() => {
          et && Yt(et, M, w, v), J && Ce(w, v, M, "updated");
        }, A);
    },
    R = (v, w, M, A, F, L, H) => {
      for (let I = 0; I < w.length; I++) {
        const V = v[I],
          B = w[I],
          J =
            V.el && (V.type === Pt || !ye(V, B) || V.shapeFlag & 70)
              ? u(V.el)
              : M;
        m(V, B, J, null, A, F, L, H, !0);
      }
    },
    N = (v, w, M, A, F, L, H) => {
      if (M !== A) {
        if (M !== pt)
          for (const I in M)
            !Li(I) && !(I in A) && o(v, I, M[I], null, H, w.children, F, L, wt);
        for (const I in A) {
          if (Li(I)) continue;
          const V = A[I],
            B = M[I];
          V !== B && I !== "value" && o(v, I, B, V, H, w.children, F, L, wt);
        }
        "value" in A && o(v, "value", M.value, A.value);
      }
    },
    O = (v, w, M, A, F, L, H, I, V) => {
      const B = (w.el = v ? v.el : a("")),
        J = (w.anchor = v ? v.anchor : a(""));
      let { patchFlag: K, dynamicChildren: G, slotScopeIds: et } = w;
      et && (I = I ? I.concat(et) : et),
        v == null
          ? (i(B, M, A), i(J, M, A), C(w.children, M, J, F, L, H, I, V))
          : K > 0 && K & 64 && G && v.dynamicChildren
          ? (R(v.dynamicChildren, G, M, F, L, H, I),
            (w.key != null || (F && w === F.subTree)) && ba(v, w, !0))
          : rt(v, w, M, J, F, L, H, I, V);
    },
    U = (v, w, M, A, F, L, H, I, V) => {
      (w.slotScopeIds = I),
        v == null
          ? w.shapeFlag & 512
            ? F.ctx.activate(w, M, A, H, V)
            : z(w, M, A, F, L, H, V)
          : nt(v, w, V);
    },
    z = (v, w, M, A, F, L, H) => {
      const I = (v.component = wu(v, A, F));
      if ((bs(v) && (I.ctx.renderer = q), Su(I), I.asyncDep)) {
        if ((F && F.registerDep(I, Q), !v.el)) {
          const V = (I.subTree = st(Nt));
          x(null, V, w, M);
        }
        return;
      }
      Q(I, v, w, M, F, L, H);
    },
    nt = (v, w, M) => {
      const A = (w.component = v.component);
      if (Dp(v, w, M))
        if (A.asyncDep && !A.asyncResolved) {
          tt(A, w, M);
          return;
        } else (A.next = w), Sp(A.update), A.update();
      else (w.el = v.el), (A.vnode = w);
    },
    Q = (v, w, M, A, F, L, H) => {
      const I = () => {
          if (v.isMounted) {
            let { next: J, bu: K, u: G, parent: et, vnode: ot } = v,
              mt = J,
              ht;
            gn(v, !1),
              J ? ((J.el = ot.el), tt(v, J, H)) : (J = ot),
              K && Qn(K),
              (ht = J.props && J.props.onVnodeBeforeUpdate) &&
                Yt(ht, et, J, ot),
              gn(v, !0);
            const Ct = Ks(v),
              ge = v.subTree;
            (v.subTree = Ct),
              m(ge, Ct, u(ge.el), D(ge), v, F, L),
              (J.el = Ct.el),
              mt === null && ca(v, Ct.el),
              G && Ot(G, F),
              (ht = J.props && J.props.onVnodeUpdated) &&
                Ot(() => Yt(ht, et, J, ot), F);
          } else {
            let J;
            const { el: K, props: G } = w,
              { bm: et, m: ot, parent: mt } = v,
              ht = Tn(w);
            if (
              (gn(v, !1),
              et && Qn(et),
              !ht && (J = G && G.onVnodeBeforeMount) && Yt(J, mt, w),
              gn(v, !0),
              K && ft)
            ) {
              const Ct = () => {
                (v.subTree = Ks(v)), ft(K, v.subTree, v, F, null);
              };
              ht
                ? w.type.__asyncLoader().then(() => !v.isUnmounted && Ct())
                : Ct();
            } else {
              const Ct = (v.subTree = Ks(v));
              m(null, Ct, M, A, v, F, L), (w.el = Ct.el);
            }
            if ((ot && Ot(ot, F), !ht && (J = G && G.onVnodeMounted))) {
              const Ct = w;
              Ot(() => Yt(J, mt, Ct), F);
            }
            (w.shapeFlag & 256 ||
              (mt && Tn(mt.vnode) && mt.vnode.shapeFlag & 256)) &&
              v.a &&
              Ot(v.a, F),
              (v.isMounted = !0),
              (w = M = A = null);
          }
        },
        V = (v.effect = new hs(I, () => Do(B), v.scope)),
        B = (v.update = () => V.run());
      (B.id = v.uid), gn(v, !0), B();
    },
    tt = (v, w, M) => {
      w.component = v;
      const A = v.vnode.props;
      (v.vnode = w),
        (v.next = null),
        wg(v, w.props, A, M),
        Cg(v, w.children, M),
        hi(),
        sl(),
        pi();
    },
    rt = (v, w, M, A, F, L, H, I, V = !1) => {
      const B = v && v.children,
        J = v ? v.shapeFlag : 0,
        K = w.children,
        { patchFlag: G, shapeFlag: et } = w;
      if (G > 0) {
        if (G & 128) {
          Vt(B, K, M, A, F, L, H, I, V);
          return;
        } else if (G & 256) {
          jt(B, K, M, A, F, L, H, I, V);
          return;
        }
      }
      et & 8
        ? (J & 16 && wt(B, F, L), K !== B && f(M, K))
        : J & 16
        ? et & 16
          ? Vt(B, K, M, A, F, L, H, I, V)
          : wt(B, F, L, !0)
        : (J & 8 && f(M, ""), et & 16 && C(K, M, A, F, L, H, I, V));
    },
    jt = (v, w, M, A, F, L, H, I, V) => {
      (v = v || Jn), (w = w || Jn);
      const B = v.length,
        J = w.length,
        K = Math.min(B, J);
      let G;
      for (G = 0; G < K; G++) {
        const et = (w[G] = V ? Ge(w[G]) : ee(w[G]));
        m(v[G], et, M, null, F, L, H, I, V);
      }
      B > J ? wt(v, F, L, !0, !1, K) : C(w, M, A, F, L, H, I, V, K);
    },
    Vt = (v, w, M, A, F, L, H, I, V) => {
      let B = 0;
      const J = w.length;
      let K = v.length - 1,
        G = J - 1;
      for (; B <= K && B <= G; ) {
        const et = v[B],
          ot = (w[B] = V ? Ge(w[B]) : ee(w[B]));
        if (ye(et, ot)) m(et, ot, M, null, F, L, H, I, V);
        else break;
        B++;
      }
      for (; B <= K && B <= G; ) {
        const et = v[K],
          ot = (w[G] = V ? Ge(w[G]) : ee(w[G]));
        if (ye(et, ot)) m(et, ot, M, null, F, L, H, I, V);
        else break;
        K--, G--;
      }
      if (B > K) {
        if (B <= G) {
          const et = G + 1,
            ot = et < J ? w[et].el : A;
          for (; B <= G; )
            m(null, (w[B] = V ? Ge(w[B]) : ee(w[B])), M, ot, F, L, H, I, V),
              B++;
        }
      } else if (B > G) for (; B <= K; ) St(v[B], F, L, !0), B++;
      else {
        const et = B,
          ot = B,
          mt = new Map();
        for (B = ot; B <= G; B++) {
          const Zt = (w[B] = V ? Ge(w[B]) : ee(w[B]));
          Zt.key != null && mt.set(Zt.key, B);
        }
        let ht,
          Ct = 0;
        const ge = G - ot + 1;
        let Hn = !1,
          Ya = 0;
        const yi = new Array(ge);
        for (B = 0; B < ge; B++) yi[B] = 0;
        for (B = et; B <= K; B++) {
          const Zt = v[B];
          if (Ct >= ge) {
            St(Zt, F, L, !0);
            continue;
          }
          let we;
          if (Zt.key != null) we = mt.get(Zt.key);
          else
            for (ht = ot; ht <= G; ht++)
              if (yi[ht - ot] === 0 && ye(Zt, w[ht])) {
                we = ht;
                break;
              }
          we === void 0
            ? St(Zt, F, L, !0)
            : ((yi[we - ot] = B + 1),
              we >= Ya ? (Ya = we) : (Hn = !0),
              m(Zt, w[we], M, null, F, L, H, I, V),
              Ct++);
        }
        const Ka = Hn ? Pg(yi) : Jn;
        for (ht = Ka.length - 1, B = ge - 1; B >= 0; B--) {
          const Zt = ot + B,
            we = w[Zt],
            Xa = Zt + 1 < J ? w[Zt + 1].el : A;
          yi[B] === 0
            ? m(null, we, M, Xa, F, L, H, I, V)
            : Hn && (ht < 0 || B !== Ka[ht] ? qt(we, M, Xa, 2) : ht--);
        }
      }
    },
    qt = (v, w, M, A, F = null) => {
      const { el: L, type: H, transition: I, children: V, shapeFlag: B } = v;
      if (B & 6) {
        qt(v.component.subTree, w, M, A);
        return;
      }
      if (B & 128) {
        v.suspense.move(w, M, A);
        return;
      }
      if (B & 64) {
        H.move(v, w, M, q);
        return;
      }
      if (H === Pt) {
        i(L, w, M);
        for (let K = 0; K < V.length; K++) qt(V[K], w, M, A);
        i(v.anchor, w, M);
        return;
      }
      if (H === An) {
        S(v, w, M);
        return;
      }
      if (A !== 2 && B & 1 && I)
        if (A === 0) I.beforeEnter(L), i(L, w, M), Ot(() => I.enter(L), F);
        else {
          const { leave: K, delayLeave: G, afterLeave: et } = I,
            ot = () => i(L, w, M),
            mt = () => {
              K(L, () => {
                ot(), et && et();
              });
            };
          G ? G(L, ot, mt) : mt();
        }
      else i(L, w, M);
    },
    St = (v, w, M, A = !1, F = !1) => {
      const {
        type: L,
        props: H,
        ref: I,
        children: V,
        dynamicChildren: B,
        shapeFlag: J,
        patchFlag: K,
        dirs: G,
      } = v;
      if ((I != null && oo(I, null, M, v, !0), J & 256)) {
        w.ctx.deactivate(v);
        return;
      }
      const et = J & 1 && G,
        ot = !Tn(v);
      let mt;
      if ((ot && (mt = H && H.onVnodeBeforeUnmount) && Yt(mt, w, v), J & 6))
        _e(v.component, M, A);
      else {
        if (J & 128) {
          v.suspense.unmount(M, A);
          return;
        }
        et && Ce(v, null, w, "beforeUnmount"),
          J & 64
            ? v.type.remove(v, w, M, F, q, A)
            : B && (L !== Pt || (K > 0 && K & 64))
            ? wt(B, w, M, !1, !0)
            : ((L === Pt && K & 384) || (!F && J & 16)) && wt(V, w, M),
          A && oe(v);
      }
      ((ot && (mt = H && H.onVnodeUnmounted)) || et) &&
        Ot(() => {
          mt && Yt(mt, w, v), et && Ce(v, null, w, "unmounted");
        }, M);
    },
    oe = (v) => {
      const { type: w, el: M, anchor: A, transition: F } = v;
      if (w === Pt) {
        re(M, A);
        return;
      }
      if (w === An) {
        _(v);
        return;
      }
      const L = () => {
        s(M), F && !F.persisted && F.afterLeave && F.afterLeave();
      };
      if (v.shapeFlag & 1 && F && !F.persisted) {
        const { leave: H, delayLeave: I } = F,
          V = () => H(M, L);
        I ? I(v.el, L, V) : V();
      } else L();
    },
    re = (v, w) => {
      let M;
      for (; v !== w; ) (M = d(v)), s(v), (v = M);
      s(w);
    },
    _e = (v, w, M) => {
      const { bum: A, scope: F, update: L, subTree: H, um: I } = v;
      A && Qn(A),
        F.stop(),
        L && ((L.active = !1), St(H, v, w, M)),
        I && Ot(I, w),
        Ot(() => {
          v.isUnmounted = !0;
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          v.asyncDep &&
          !v.asyncResolved &&
          v.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve());
    },
    wt = (v, w, M, A = !1, F = !1, L = 0) => {
      for (let H = L; H < v.length; H++) St(v[H], w, M, A, F);
    },
    D = (v) =>
      v.shapeFlag & 6
        ? D(v.component.subTree)
        : v.shapeFlag & 128
        ? v.suspense.next()
        : d(v.anchor || v.el),
    j = (v, w, M) => {
      v == null
        ? w._vnode && St(w._vnode, null, null, !0)
        : m(w._vnode || null, v, w, null, null, null, M),
        sl(),
        io(),
        (w._vnode = v);
    },
    q = {
      p: m,
      um: St,
      m: qt,
      r: oe,
      mt: z,
      mc: C,
      pc: rt,
      pbc: R,
      n: D,
      o: e,
    };
  let X, ft;
  return t && ([X, ft] = t(q)), { render: j, hydrate: X, createApp: xg(j, X) };
}
function gn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ba(e, t, n = !1) {
  const i = e.children,
    s = t.children;
  if (W(i) && W(s))
    for (let o = 0; o < i.length; o++) {
      const r = i[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[o] = Ge(s[o])), (a.el = r.el)),
        n || ba(r, a)),
        a.type === On && (a.el = r.el);
    }
}
function Pg(e) {
  const t = e.slice(),
    n = [0];
  let i, s, o, r, a;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const c = e[i];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        (t[i] = s), n.push(i);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        (a = (o + r) >> 1), e[n[a]] < c ? (o = a + 1) : (r = a);
      c < e[n[o]] && (o > 0 && (t[i] = n[o - 1]), (n[o] = i));
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; ) (n[o] = r), (r = t[r]);
  return n;
}
const Eg = (e) => e.__isTeleport,
  zi = (e) => e && (e.disabled || e.disabled === ""),
  ml = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  wr = (e, t) => {
    const n = e && e.to;
    return vt(n) ? (t ? t(n) : null) : n;
  },
  Tg = {
    __isTeleport: !0,
    process(e, t, n, i, s, o, r, a, l, c) {
      const {
          mc: f,
          pc: u,
          pbc: d,
          o: { insert: h, querySelector: g, createText: m, createComment: b },
        } = c,
        x = zi(t.props);
      let { shapeFlag: y, children: S, dynamicChildren: _ } = t;
      if (e == null) {
        const k = (t.el = m("")),
          E = (t.anchor = m(""));
        h(k, n, i), h(E, n, i);
        const P = (t.target = wr(t.props, g)),
          C = (t.targetAnchor = m(""));
        P && (h(C, P), (r = r || ml(P)));
        const T = (R, N) => {
          y & 16 && f(S, R, N, s, o, r, a, l);
        };
        x ? T(n, E) : P && T(P, C);
      } else {
        t.el = e.el;
        const k = (t.anchor = e.anchor),
          E = (t.target = e.target),
          P = (t.targetAnchor = e.targetAnchor),
          C = zi(e.props),
          T = C ? n : E,
          R = C ? k : P;
        if (
          ((r = r || ml(E)),
          _
            ? (d(e.dynamicChildren, _, T, s, o, r, a), ba(e, t, !0))
            : l || u(e, t, T, R, s, o, r, a, !1),
          x)
        )
          C || As(t, n, k, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const N = (t.target = wr(t.props, g));
          N && As(t, N, null, c, 0);
        } else C && As(t, E, P, c, 1);
      }
      pu(t);
    },
    remove(e, t, n, i, { um: s, o: { remove: o } }, r) {
      const {
        shapeFlag: a,
        children: l,
        anchor: c,
        targetAnchor: f,
        target: u,
        props: d,
      } = e;
      if ((u && o(f), (r || !zi(d)) && (o(c), a & 16)))
        for (let h = 0; h < l.length; h++) {
          const g = l[h];
          s(g, t, n, !0, !!g.dynamicChildren);
        }
    },
    move: As,
    hydrate: Ag,
  };
function As(e, t, n, { o: { insert: i }, m: s }, o = 2) {
  o === 0 && i(e.targetAnchor, t, n);
  const { el: r, anchor: a, shapeFlag: l, children: c, props: f } = e,
    u = o === 2;
  if ((u && i(r, t, n), (!u || zi(f)) && l & 16))
    for (let d = 0; d < c.length; d++) s(c[d], t, n, 2);
  u && i(a, t, n);
}
function Ag(
  e,
  t,
  n,
  i,
  s,
  o,
  { o: { nextSibling: r, parentNode: a, querySelector: l } },
  c
) {
  const f = (t.target = wr(t.props, l));
  if (f) {
    const u = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (zi(t.props))
        (t.anchor = c(r(e), t, a(e), n, i, s, o)), (t.targetAnchor = u);
      else {
        t.anchor = r(e);
        let d = u;
        for (; d; )
          if (
            ((d = r(d)), d && d.nodeType === 8 && d.data === "teleport anchor")
          ) {
            (t.targetAnchor = d),
              (f._lpa = t.targetAnchor && r(t.targetAnchor));
            break;
          }
        c(u, t, f, n, i, s, o);
      }
    pu(t);
  }
  return t.anchor && r(t.anchor);
}
const Dg = Tg;
function pu(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const Pt = Symbol.for("v-fgt"),
  On = Symbol.for("v-txt"),
  Nt = Symbol.for("v-cmt"),
  An = Symbol.for("v-stc"),
  Vi = [];
let Xt = null;
function It(e = !1) {
  Vi.push((Xt = e ? null : []));
}
function gu() {
  Vi.pop(), (Xt = Vi[Vi.length - 1] || null);
}
let Ln = 1;
function kr(e) {
  Ln += e;
}
function mu(e) {
  return (
    (e.dynamicChildren = Ln > 0 ? Xt || Jn : null),
    gu(),
    Ln > 0 && Xt && Xt.push(e),
    e
  );
}
function ie(e, t, n, i, s, o) {
  return mu(Y(e, t, n, i, s, o, !0));
}
function ya(e, t, n, i, s) {
  return mu(st(e, t, n, i, s, !0));
}
function fn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ye(e, t) {
  return e.type === t.type && e.key === t.key;
}
function Fg(e) {}
const Io = "__vInternal",
  bu = ({ key: e }) => e ?? null,
  Xs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? vt(e) || Et(e) || Z(e)
        ? { i: Dt, r: e, k: t, f: !!n }
        : e
      : null
  );
function Y(
  e,
  t = null,
  n = null,
  i = 0,
  s = null,
  o = e === Pt ? 0 : 1,
  r = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bu(t),
    ref: t && Xs(t),
    scopeId: Ro,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Dt,
  };
  return (
    a
      ? (xa(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= vt(n) ? 8 : 16),
    Ln > 0 &&
      !r &&
      Xt &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      Xt.push(l),
    l
  );
}
const st = Rg;
function Rg(e, t = null, n = null, i = 0, s = null, o = !1) {
  if (((!e || e === $f) && (e = Nt), fn(e))) {
    const a = Ee(e, t, !0);
    return (
      n && xa(a, n),
      Ln > 0 &&
        !o &&
        Xt &&
        (a.shapeFlag & 6 ? (Xt[Xt.indexOf(e)] = a) : Xt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((Vg(e) && (e = e.__vccOpts), t)) {
    t = yu(t);
    let { class: a, style: l } = t;
    a && !vt(a) && (t.class = di(a)),
      gt(l) && (gs(l) && !W(l) && (l = yt({}, l)), (t.style = ds(l)));
  }
  const r = vt(e) ? 1 : Nf(e) ? 128 : Eg(e) ? 64 : gt(e) ? 4 : Z(e) ? 2 : 0;
  return Y(e, t, n, i, s, r, o, !0);
}
function yu(e) {
  return e ? (gs(e) || Io in e ? yt({}, e) : e) : null;
}
function Ee(e, t, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: r } = e,
    a = t ? _u(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && bu(a),
    ref:
      t && t.ref ? (n && s ? (W(s) ? s.concat(Xs(t)) : [s, Xs(t)]) : Xs(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Pt ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ee(e.ssContent),
    ssFallback: e.ssFallback && Ee(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function he(e = " ", t = 0) {
  return st(On, null, e, t);
}
function xu(e, t) {
  const n = st(An, null, e);
  return (n.staticCount = t), n;
}
function vu(e = "", t = !1) {
  return t ? (It(), ya(Nt, null, e)) : st(Nt, null, e);
}
function ee(e) {
  return e == null || typeof e == "boolean"
    ? st(Nt)
    : W(e)
    ? st(Pt, null, e.slice())
    : typeof e == "object"
    ? Ge(e)
    : st(On, null, String(e));
}
function Ge(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ee(e);
}
function xa(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null) t = null;
  else if (W(t)) n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), xa(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Io in t)
        ? (t._ctx = Dt)
        : s === 3 &&
          Dt &&
          (Dt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Z(t)
      ? ((t = { default: t, _ctx: Dt }), (n = 32))
      : ((t = String(t)), i & 64 ? ((n = 16), (t = [he(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function _u(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = di([t.class, i.class]));
      else if (s === "style") t.style = ds([t.style, i.style]);
      else if (fs(s)) {
        const o = t[s],
          r = i[s];
        r &&
          o !== r &&
          !(W(o) && o.includes(r)) &&
          (t[s] = o ? [].concat(o, r) : r);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function Yt(e, t, n, i = null) {
  ne(e, t, 7, [n, i]);
}
const Og = ou();
let Lg = 0;
function wu(e, t, n) {
  const i = e.type,
    s = (t ? t.appContext : e.appContext) || Og,
    o = {
      uid: Lg++,
      vnode: e,
      type: i,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Gr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: au(i, s),
      emitsOptions: Bf(i, s),
      emit: null,
      emitted: null,
      propsDefaults: pt,
      inheritAttrs: i.inheritAttrs,
      ctx: pt,
      data: pt,
      props: pt,
      attrs: pt,
      slots: pt,
      refs: pt,
      setupState: pt,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Mp.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Mt = null;
const Ue = () => Mt || Dt;
let va,
  jn,
  bl = "__VUE_INSTANCE_SETTERS__";
(jn = dr()[bl]) || (jn = dr()[bl] = []),
  jn.push((e) => (Mt = e)),
  (va = (e) => {
    jn.length > 1 ? jn.forEach((t) => t(e)) : jn[0](e);
  });
const un = (e) => {
    va(e), e.scope.on();
  },
  on = () => {
    Mt && Mt.scope.off(), va(null);
  };
function ku(e) {
  return e.vnode.shapeFlag & 4;
}
let si = !1;
function Su(e, t = !1) {
  si = t;
  const { props: n, children: i } = e.vnode,
    s = ku(e);
  _g(e, n, s, t), Sg(e, i);
  const o = s ? Bg(e, t) : void 0;
  return (si = !1), o;
}
function Bg(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = ea(new Proxy(e.ctx, yr)));
  const { setup: i } = n;
  if (i) {
    const s = (e.setupContext = i.length > 1 ? Mu(e) : null);
    un(e), hi();
    const o = Ie(i, e, 0, [e.props, s]);
    if ((pi(), on(), Xr(o))) {
      if ((o.then(on, on), t))
        return o
          .then((r) => {
            Sr(e, r, t);
          })
          .catch((r) => {
            zn(r, e, 0);
          });
      e.asyncDep = o;
    } else Sr(e, o, t);
  } else Cu(e, t);
}
function Sr(e, t, n) {
  Z(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : gt(t) && (e.setupState = sa(t)),
    Cu(e, n);
}
let ro, Cr;
function Ng(e) {
  (ro = e),
    (Cr = (t) => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, Zp));
    });
}
const Ig = () => !ro;
function Cu(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && ro && !i.render) {
      const s = i.template || ga(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = i,
          c = yt(yt({ isCustomElement: o, delimiters: a }, r), l);
        i.render = ro(s, c);
      }
    }
    (e.render = i.render || xe), Cr && Cr(e);
  }
  un(e), hi(), hg(e), pi(), on();
}
function zg(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Qt(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function Mu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return zg(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function zo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(sa(ea(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Ni) return Ni[n](e);
        },
        has(t, n) {
          return n in t || n in Ni;
        },
      }))
    );
}
function Mr(e, t = !0) {
  return Z(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Vg(e) {
  return Z(e) && "__vccOpts" in e;
}
const fe = (e, t) => xp(e, t, si);
function mi(e, t, n) {
  const i = arguments.length;
  return i === 2
    ? gt(t) && !W(t)
      ? fn(t)
        ? st(e, null, [t])
        : st(e, t)
      : st(e, null, t)
    : (i > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : i === 3 && fn(n) && (n = [n]),
      st(e, t, n));
}
const Pu = Symbol.for("v-scx"),
  Eu = () => Pe(Pu);
function qg() {}
function Ug(e, t, n, i) {
  const s = n[i];
  if (s && Tu(s, e)) return s;
  const o = t();
  return (o.memo = e.slice()), (n[i] = o);
}
function Tu(e, t) {
  const n = e.memo;
  if (n.length != t.length) return !1;
  for (let i = 0; i < n.length; i++) if (ni(n[i], t[i])) return !1;
  return Ln > 0 && Xt && Xt.push(e), !0;
}
const _a = "3.3.4",
  Hg = {
    createComponentInstance: wu,
    setupComponent: Su,
    renderComponentRoot: Ks,
    setCurrentRenderingInstance: ts,
    isVNode: fn,
    normalizeVNode: ee,
  },
  jg = Hg,
  Wg = null,
  Yg = null,
  Kg = "http://www.w3.org/2000/svg",
  Sn = typeof document < "u" ? document : null,
  yl = Sn && Sn.createElement("template"),
  Xg = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const s = t
        ? Sn.createElementNS(Kg, e)
        : Sn.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          i &&
          i.multiple != null &&
          s.setAttribute("multiple", i.multiple),
        s
      );
    },
    createText: (e) => Sn.createTextNode(e),
    createComment: (e) => Sn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Sn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, s, o) {
      const r = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        yl.innerHTML = i ? `<svg>${e}</svg>` : e;
        const a = yl.content;
        if (i) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        r ? r.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Jg(e, t, n) {
  const i = e._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Gg(e, t, n) {
  const i = e.style,
    s = vt(n);
  if (n && !s) {
    if (t && !vt(t)) for (const o in t) n[o] == null && Pr(i, o, "");
    for (const o in n) Pr(i, o, n[o]);
  } else {
    const o = i.display;
    s ? t !== n && (i.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (i.display = o);
  }
}
const xl = /\s*!important$/;
function Pr(e, t, n) {
  if (W(n)) n.forEach((i) => Pr(e, t, i));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const i = Qg(e, t);
    xl.test(n)
      ? e.setProperty(ce(i), n.replace(xl, ""), "important")
      : (e[i] = n);
  }
}
const vl = ["Webkit", "Moz", "ms"],
  Zo = {};
function Qg(e, t) {
  const n = Zo[t];
  if (n) return n;
  let i = Gt(t);
  if (i !== "filter" && i in e) return (Zo[t] = i);
  i = us(i);
  for (let s = 0; s < vl.length; s++) {
    const o = vl[s] + i;
    if (o in e) return (Zo[t] = o);
  }
  return t;
}
const _l = "http://www.w3.org/1999/xlink";
function Zg(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(_l, t.slice(6, t.length))
      : e.setAttributeNS(_l, t, n);
  else {
    const o = Ph(t);
    n == null || (o && !pf(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function $g(e, t, n, i, s, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    i && r(i, s, o), (e[t] = n ?? "");
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
    e._value = n;
    const c = a === "OPTION" ? e.getAttribute("value") : e.value,
      f = n ?? "";
    c !== f && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = pf(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function Be(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function tm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
function em(e, t, n, i, s = null) {
  const o = e._vei || (e._vei = {}),
    r = o[t];
  if (i && r) r.value = i;
  else {
    const [a, l] = nm(t);
    if (i) {
      const c = (o[t] = om(i, s));
      Be(e, a, c, l);
    } else r && (tm(e, a, r, l), (o[t] = void 0));
  }
}
const wl = /(?:Once|Passive|Capture)$/;
function nm(e) {
  let t;
  if (wl.test(e)) {
    t = {};
    let i;
    for (; (i = e.match(wl)); )
      (e = e.slice(0, e.length - i[0].length)), (t[i[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : ce(e.slice(2)), t];
}
let $o = 0;
const im = Promise.resolve(),
  sm = () => $o || (im.then(() => ($o = 0)), ($o = Date.now()));
function om(e, t) {
  const n = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= n.attached) return;
    ne(rm(i, n.value), t, 5, [i]);
  };
  return (n.value = e), (n.attached = sm()), n;
}
function rm(e, t) {
  if (W(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((i) => (s) => !s._stopped && i && i(s))
    );
  } else return t;
}
const kl = /^on[a-z]/,
  am = (e, t, n, i, s = !1, o, r, a, l) => {
    t === "class"
      ? Jg(e, i, s)
      : t === "style"
      ? Gg(e, n, i)
      : fs(t)
      ? Yr(t) || em(e, t, n, i, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : lm(e, t, i, s)
        )
      ? $g(e, t, i, o, r, a, l)
      : (t === "true-value"
          ? (e._trueValue = i)
          : t === "false-value" && (e._falseValue = i),
        Zg(e, t, i, s));
  };
function lm(e, t, n, i) {
  return i
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && kl.test(t) && Z(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (kl.test(t) && vt(n))
    ? !1
    : t in e;
}
function Au(e, t) {
  const n = Vn(e);
  class i extends Vo {
    constructor(o) {
      super(n, o, t);
    }
  }
  return (i.def = n), i;
}
const cm = (e) => Au(e, Wu),
  fm = typeof HTMLElement < "u" ? HTMLElement : class {};
class Vo extends fm {
  constructor(t, n = {}, i) {
    super(),
      (this._def = t),
      (this._props = n),
      (this._instance = null),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      this.shadowRoot && i
        ? i(this._createVNode(), this.shadowRoot)
        : (this.attachShadow({ mode: "open" }),
          this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    (this._connected = !0),
      this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    (this._connected = !1),
      Ao(() => {
        this._connected || (Ar(null, this.shadowRoot), (this._instance = null));
      });
  }
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    new MutationObserver((i) => {
      for (const s of i) this._setAttr(s.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (i, s = !1) => {
        const { props: o, styles: r } = i;
        let a;
        if (o && !W(o))
          for (const l in o) {
            const c = o[l];
            (c === Number || (c && c.type === Number)) &&
              (l in this._props && (this._props[l] = eo(this._props[l])),
              ((a || (a = Object.create(null)))[Gt(l)] = !0));
          }
        (this._numberProps = a),
          s && this._resolveProps(i),
          this._applyStyles(r),
          this._update();
      },
      n = this._def.__asyncLoader;
    n ? n().then((i) => t(i, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t,
      i = W(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of i.map(Gt))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(o) {
          this._setProp(s, o);
        },
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const i = Gt(t);
    this._numberProps && this._numberProps[i] && (n = eo(n)),
      this._setProp(i, n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, i = !0, s = !0) {
    n !== this._props[t] &&
      ((this._props[t] = n),
      s && this._instance && this._update(),
      i &&
        (n === !0
          ? this.setAttribute(ce(t), "")
          : typeof n == "string" || typeof n == "number"
          ? this.setAttribute(ce(t), n + "")
          : n || this.removeAttribute(ce(t))));
  }
  _update() {
    Ar(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = st(this._def, yt({}, this._props));
    return (
      this._instance ||
        (t.ce = (n) => {
          (this._instance = n), (n.isCE = !0);
          const i = (o, r) => {
            this.dispatchEvent(new CustomEvent(o, { detail: r }));
          };
          n.emit = (o, ...r) => {
            i(o, r), ce(o) !== o && i(ce(o), r);
          };
          let s = this;
          for (; (s = s && (s.parentNode || s.host)); )
            if (s instanceof Vo) {
              (n.parent = s._instance), (n.provides = s._instance.provides);
              break;
            }
        }),
      t
    );
  }
  _applyStyles(t) {
    t &&
      t.forEach((n) => {
        const i = document.createElement("style");
        (i.textContent = n), this.shadowRoot.appendChild(i);
      });
  }
}
function um(e = "$style") {
  {
    const t = Ue();
    if (!t) return pt;
    const n = t.type.__cssModules;
    if (!n) return pt;
    const i = n[e];
    return i || pt;
  }
}
function dm(e) {
  const t = Ue();
  if (!t) return;
  const n = (t.ut = (s = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
      ).forEach((o) => Tr(o, s));
    }),
    i = () => {
      const s = e(t.proxy);
      Er(t.subTree, s), n(s);
    };
  zf(i),
    gi(() => {
      const s = new MutationObserver(i);
      s.observe(t.subTree.el.parentNode, { childList: !0 }),
        No(() => s.disconnect());
    });
}
function Er(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Er(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Tr(e.el, t);
  else if (e.type === Pt) e.children.forEach((n) => Er(n, t));
  else if (e.type === An) {
    let { el: n, anchor: i } = e;
    for (; n && (Tr(n, t), n !== i); ) n = n.nextSibling;
  }
}
function Tr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const i in t) n.setProperty(`--${i}`, t[i]);
  }
}
const Ye = "transition",
  xi = "animation",
  wa = (e, { slots: t }) => mi(Uf, Fu(e), t);
wa.displayName = "Transition";
const Du = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  hm = (wa.props = yt({}, da, Du)),
  mn = (e, t = []) => {
    W(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Sl = (e) => (e ? (W(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Fu(e) {
  const t = {};
  for (const O in e) O in Du || (t[O] = e[O]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: i,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: r = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: c = r,
      appearToClass: f = a,
      leaveFromClass: u = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`,
    } = e,
    g = pm(s),
    m = g && g[0],
    b = g && g[1],
    {
      onBeforeEnter: x,
      onEnter: y,
      onEnterCancelled: S,
      onLeave: _,
      onLeaveCancelled: k,
      onBeforeAppear: E = x,
      onAppear: P = y,
      onAppearCancelled: C = S,
    } = t,
    T = (O, U, z) => {
      Je(O, U ? f : a), Je(O, U ? c : r), z && z();
    },
    R = (O, U) => {
      (O._isLeaving = !1), Je(O, u), Je(O, h), Je(O, d), U && U();
    },
    N = (O) => (U, z) => {
      const nt = O ? P : y,
        Q = () => T(U, O, z);
      mn(nt, [U, Q]),
        Cl(() => {
          Je(U, O ? l : o), De(U, O ? f : a), Sl(nt) || Ml(U, i, m, Q);
        });
    };
  return yt(t, {
    onBeforeEnter(O) {
      mn(x, [O]), De(O, o), De(O, r);
    },
    onBeforeAppear(O) {
      mn(E, [O]), De(O, l), De(O, c);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(O, U) {
      O._isLeaving = !0;
      const z = () => R(O, U);
      De(O, u),
        Ou(),
        De(O, d),
        Cl(() => {
          O._isLeaving && (Je(O, u), De(O, h), Sl(_) || Ml(O, i, b, z));
        }),
        mn(_, [O, z]);
    },
    onEnterCancelled(O) {
      T(O, !1), mn(S, [O]);
    },
    onAppearCancelled(O) {
      T(O, !0), mn(C, [O]);
    },
    onLeaveCancelled(O) {
      R(O), mn(k, [O]);
    },
  });
}
function pm(e) {
  if (e == null) return null;
  if (gt(e)) return [tr(e.enter), tr(e.leave)];
  {
    const t = tr(e);
    return [t, t];
  }
}
function tr(e) {
  return eo(e);
}
function De(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Je(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Cl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gm = 0;
function Ml(e, t, n, i) {
  const s = (e._endId = ++gm),
    o = () => {
      s === e._endId && i();
    };
  if (n) return setTimeout(o, n);
  const { type: r, timeout: a, propCount: l } = Ru(e, t);
  if (!r) return i();
  const c = r + "end";
  let f = 0;
  const u = () => {
      e.removeEventListener(c, d), o();
    },
    d = (h) => {
      h.target === e && ++f >= l && u();
    };
  setTimeout(() => {
    f < l && u();
  }, a + 1),
    e.addEventListener(c, d);
}
function Ru(e, t) {
  const n = window.getComputedStyle(e),
    i = (g) => (n[g] || "").split(", "),
    s = i(`${Ye}Delay`),
    o = i(`${Ye}Duration`),
    r = Pl(s, o),
    a = i(`${xi}Delay`),
    l = i(`${xi}Duration`),
    c = Pl(a, l);
  let f = null,
    u = 0,
    d = 0;
  t === Ye
    ? r > 0 && ((f = Ye), (u = r), (d = o.length))
    : t === xi
    ? c > 0 && ((f = xi), (u = c), (d = l.length))
    : ((u = Math.max(r, c)),
      (f = u > 0 ? (r > c ? Ye : xi) : null),
      (d = f ? (f === Ye ? o.length : l.length) : 0));
  const h =
    f === Ye && /\b(transform|all)(,|$)/.test(i(`${Ye}Property`).toString());
  return { type: f, timeout: u, propCount: d, hasTransform: h };
}
function Pl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, i) => El(n) + El(e[i])));
}
function El(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ou() {
  return document.body.offsetHeight;
}
const Lu = new WeakMap(),
  Bu = new WeakMap(),
  Nu = {
    name: "TransitionGroup",
    props: yt({}, hm, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ue(),
        i = ua();
      let s, o;
      return (
        Bo(() => {
          if (!s.length) return;
          const r = e.moveClass || `${e.name || "v"}-move`;
          if (!_m(s[0].el, n.vnode.el, r)) return;
          s.forEach(ym), s.forEach(xm);
          const a = s.filter(vm);
          Ou(),
            a.forEach((l) => {
              const c = l.el,
                f = c.style;
              De(c, r),
                (f.transform = f.webkitTransform = f.transitionDuration = "");
              const u = (c._moveCb = (d) => {
                (d && d.target !== c) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (c.removeEventListener("transitionend", u),
                    (c._moveCb = null),
                    Je(c, r)));
              });
              c.addEventListener("transitionend", u);
            });
        }),
        () => {
          const r = it(e),
            a = Fu(r);
          let l = r.tag || Pt;
          (s = o), (o = t.default ? Oo(t.default()) : []);
          for (let c = 0; c < o.length; c++) {
            const f = o[c];
            f.key != null && Rn(f, ii(f, a, i, n));
          }
          if (s)
            for (let c = 0; c < s.length; c++) {
              const f = s[c];
              Rn(f, ii(f, a, i, n)), Lu.set(f, f.el.getBoundingClientRect());
            }
          return st(l, null, o);
        }
      );
    },
  },
  mm = (e) => delete e.mode;
Nu.props;
const bm = Nu;
function ym(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function xm(e) {
  Bu.set(e, e.el.getBoundingClientRect());
}
function vm(e) {
  const t = Lu.get(e),
    n = Bu.get(e),
    i = t.left - n.left,
    s = t.top - n.top;
  if (i || s) {
    const o = e.el.style;
    return (
      (o.transform = o.webkitTransform = `translate(${i}px,${s}px)`),
      (o.transitionDuration = "0s"),
      e
    );
  }
}
function _m(e, t, n) {
  const i = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((r) => {
      r.split(/\s+/).forEach((a) => a && i.classList.remove(a));
    }),
    n.split(/\s+/).forEach((r) => r && i.classList.add(r)),
    (i.style.display = "none");
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(i);
  const { hasTransform: o } = Ru(i);
  return s.removeChild(i), o;
}
const dn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return W(t) ? (n) => Qn(t, n) : t;
};
function wm(e) {
  e.target.composing = !0;
}
function Tl(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const ao = {
    created(e, { modifiers: { lazy: t, trim: n, number: i } }, s) {
      e._assign = dn(s);
      const o = i || (s.props && s.props.type === "number");
      Be(e, t ? "change" : "input", (r) => {
        if (r.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), o && (a = to(a)), e._assign(a);
      }),
        n &&
          Be(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Be(e, "compositionstart", wm),
          Be(e, "compositionend", Tl),
          Be(e, "change", Tl));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: i, number: s } },
      o
    ) {
      if (
        ((e._assign = dn(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (i && e.value.trim() === t) ||
              ((s || e.type === "number") && to(e.value) === t))))
      )
        return;
      const r = t ?? "";
      e.value !== r && (e.value = r);
    },
  },
  ka = {
    deep: !0,
    created(e, t, n) {
      (e._assign = dn(n)),
        Be(e, "change", () => {
          const i = e._modelValue,
            s = oi(e),
            o = e.checked,
            r = e._assign;
          if (W(i)) {
            const a = ko(i, s),
              l = a !== -1;
            if (o && !l) r(i.concat(s));
            else if (!o && l) {
              const c = [...i];
              c.splice(a, 1), r(c);
            }
          } else if (In(i)) {
            const a = new Set(i);
            o ? a.add(s) : a.delete(s), r(a);
          } else r(zu(e, o));
        });
    },
    mounted: Al,
    beforeUpdate(e, t, n) {
      (e._assign = dn(n)), Al(e, t, n);
    },
  };
function Al(e, { value: t, oldValue: n }, i) {
  (e._modelValue = t),
    W(t)
      ? (e.checked = ko(t, i.props.value) > -1)
      : In(t)
      ? (e.checked = t.has(i.props.value))
      : t !== n && (e.checked = an(t, zu(e, !0)));
}
const Sa = {
    created(e, { value: t }, n) {
      (e.checked = an(t, n.props.value)),
        (e._assign = dn(n)),
        Be(e, "change", () => {
          e._assign(oi(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, i) {
      (e._assign = dn(i)), t !== n && (e.checked = an(t, i.props.value));
    },
  },
  Iu = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, i) {
      const s = In(t);
      Be(e, "change", () => {
        const o = Array.prototype.filter
          .call(e.options, (r) => r.selected)
          .map((r) => (n ? to(oi(r)) : oi(r)));
        e._assign(e.multiple ? (s ? new Set(o) : o) : o[0]);
      }),
        (e._assign = dn(i));
    },
    mounted(e, { value: t }) {
      Dl(e, t);
    },
    beforeUpdate(e, t, n) {
      e._assign = dn(n);
    },
    updated(e, { value: t }) {
      Dl(e, t);
    },
  };
function Dl(e, t) {
  const n = e.multiple;
  if (!(n && !W(t) && !In(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i],
        r = oi(o);
      if (n) W(t) ? (o.selected = ko(t, r) > -1) : (o.selected = t.has(r));
      else if (an(oi(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function oi(e) {
  return "_value" in e ? e._value : e.value;
}
function zu(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Vu = {
  created(e, t, n) {
    Ds(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Ds(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, i) {
    Ds(e, t, n, i, "beforeUpdate");
  },
  updated(e, t, n, i) {
    Ds(e, t, n, i, "updated");
  },
};
function qu(e, t) {
  switch (e) {
    case "SELECT":
      return Iu;
    case "TEXTAREA":
      return ao;
    default:
      switch (t) {
        case "checkbox":
          return ka;
        case "radio":
          return Sa;
        default:
          return ao;
      }
  }
}
function Ds(e, t, n, i, s) {
  const r = qu(e.tagName, n.props && n.props.type)[s];
  r && r(e, t, n, i);
}
function km() {
  (ao.getSSRProps = ({ value: e }) => ({ value: e })),
    (Sa.getSSRProps = ({ value: e }, t) => {
      if (t.props && an(t.props.value, e)) return { checked: !0 };
    }),
    (ka.getSSRProps = ({ value: e }, t) => {
      if (W(e)) {
        if (t.props && ko(e, t.props.value) > -1) return { checked: !0 };
      } else if (In(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 };
      } else if (e) return { checked: !0 };
    }),
    (Vu.getSSRProps = (e, t) => {
      if (typeof t.type != "string") return;
      const n = qu(t.type.toUpperCase(), t.props && t.props.type);
      if (n.getSSRProps) return n.getSSRProps(e, t);
    });
}
const Sm = ["ctrl", "shift", "alt", "meta"],
  Cm = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Sm.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Mm =
    (e, t) =>
    (n, ...i) => {
      for (let s = 0; s < t.length; s++) {
        const o = Cm[t[s]];
        if (o && o(n, t)) return;
      }
      return e(n, ...i);
    },
  Pm = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Em = (e, t) => (n) => {
    if (!("key" in n)) return;
    const i = ce(n.key);
    if (t.some((s) => s === i || Pm[s] === i)) return e(n);
  },
  Ca = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : vi(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n &&
        (i
          ? t
            ? (i.beforeEnter(e), vi(e, !0), i.enter(e))
            : i.leave(e, () => {
                vi(e, !1);
              })
          : vi(e, t));
    },
    beforeUnmount(e, { value: t }) {
      vi(e, t);
    },
  };
function vi(e, t) {
  e.style.display = t ? e._vod : "none";
}
function Tm() {
  Ca.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: "none" } };
  };
}
const Uu = yt({ patchProp: am }, Xg);
let qi,
  Fl = !1;
function Hu() {
  return qi || (qi = uu(Uu));
}
function ju() {
  return (qi = Fl ? qi : du(Uu)), (Fl = !0), qi;
}
const Ar = (...e) => {
    Hu().render(...e);
  },
  Wu = (...e) => {
    ju().hydrate(...e);
  },
  Yu = (...e) => {
    const t = Hu().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (i) => {
        const s = Ku(i);
        if (!s) return;
        const o = t._component;
        !Z(o) && !o.render && !o.template && (o.template = s.innerHTML),
          (s.innerHTML = "");
        const r = n(s, !1, s instanceof SVGElement);
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          r
        );
      }),
      t
    );
  },
  Am = (...e) => {
    const t = ju().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (i) => {
        const s = Ku(i);
        if (s) return n(s, !0, s instanceof SVGElement);
      }),
      t
    );
  };
function Ku(e) {
  return vt(e) ? document.querySelector(e) : e;
}
let Rl = !1;
const Dm = () => {
    Rl || ((Rl = !0), km(), Tm());
  },
  Fm = () => {},
  Rm = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BaseTransition: Uf,
        BaseTransitionPropsValidators: da,
        Comment: Nt,
        EffectScope: Gr,
        Fragment: Pt,
        KeepAlive: Wp,
        ReactiveEffect: hs,
        Static: An,
        Suspense: Rp,
        Teleport: Dg,
        Text: On,
        Transition: wa,
        TransitionGroup: bm,
        VueElement: Vo,
        assertNumber: _p,
        callWithAsyncErrorHandling: ne,
        callWithErrorHandling: Ie,
        camelize: Gt,
        capitalize: us,
        cloneVNode: Ee,
        compatUtils: Yg,
        compile: Fm,
        computed: fe,
        createApp: Yu,
        createBlock: ya,
        createCommentVNode: vu,
        createElementBlock: ie,
        createElementVNode: Y,
        createHydrationRenderer: du,
        createPropsRestProxy: ug,
        createRenderer: uu,
        createSSRApp: Am,
        createSlots: Gp,
        createStaticVNode: xu,
        createTextVNode: he,
        createVNode: st,
        customRef: hp,
        defineAsyncComponent: Hp,
        defineComponent: Vn,
        defineCustomElement: Au,
        defineEmits: tg,
        defineExpose: eg,
        defineModel: sg,
        defineOptions: ng,
        defineProps: $p,
        defineSSRCustomElement: cm,
        defineSlots: ig,
        get devtools() {
          return Kn;
        },
        effect: Rh,
        effectScope: Th,
        getCurrentInstance: Ue,
        getCurrentScope: bf,
        getTransitionRawChildren: Oo,
        guardReactiveProps: yu,
        h: mi,
        handleError: zn,
        hasInjectionContext: vg,
        hydrate: Wu,
        initCustomFormatter: qg,
        initDirectivesForSSR: Dm,
        inject: Pe,
        isMemoSame: Tu,
        isProxy: gs,
        isReactive: En,
        isReadonly: Fn,
        isRef: Et,
        isRuntimeOnly: Ig,
        isShallow: Gi,
        isVNode: fn,
        markRaw: ea,
        mergeDefaults: cg,
        mergeModels: fg,
        mergeProps: _u,
        nextTick: Ao,
        normalizeClass: di,
        normalizeProps: Ch,
        normalizeStyle: ds,
        onActivated: jf,
        onBeforeMount: Kf,
        onBeforeUnmount: ys,
        onBeforeUpdate: Xf,
        onDeactivated: Wf,
        onErrorCaptured: Zf,
        onMounted: gi,
        onRenderTracked: Qf,
        onRenderTriggered: Gf,
        onScopeDispose: Ah,
        onServerPrefetch: Jf,
        onUnmounted: No,
        onUpdated: Bo,
        openBlock: It,
        popScopeId: la,
        provide: Ii,
        proxyRefs: sa,
        pushScopeId: aa,
        queuePostFlushCb: ra,
        reactive: ps,
        readonly: ta,
        ref: nn,
        registerRuntimeCompiler: Ng,
        render: Ar,
        renderList: tu,
        renderSlot: eu,
        resolveComponent: se,
        resolveDirective: Jp,
        resolveDynamicComponent: Xp,
        resolveFilter: Wg,
        resolveTransitionHooks: ii,
        setBlockTracking: kr,
        setDevtoolsHook: Lf,
        setTransitionHooks: Rn,
        shallowReactive: $r,
        shallowReadonly: ap,
        shallowRef: To,
        ssrContextKey: Pu,
        ssrUtils: jg,
        stop: Oh,
        toDisplayString: Ht,
        toHandlerKey: Bi,
        toHandlers: Qp,
        toRaw: it,
        toRef: bp,
        toRefs: pp,
        toValue: fp,
        transformVNodeArgs: Fg,
        triggerRef: cp,
        unref: sn,
        useAttrs: ag,
        useCssModule: um,
        useCssVars: dm,
        useModel: lg,
        useSSRContext: Eu,
        useSlots: rg,
        useTransitionState: ua,
        vModelCheckbox: ka,
        vModelDynamic: Vu,
        vModelRadio: Sa,
        vModelSelect: Iu,
        vModelText: ao,
        vShow: Ca,
        version: _a,
        warn: vp,
        watch: ze,
        watchEffect: zp,
        watchPostEffect: zf,
        watchSyncEffect: Vp,
        withAsyncContext: dg,
        withCtx: cn,
        withDefaults: og,
        withDirectives: qf,
        withKeys: Em,
        withMemo: Ug,
        withModifiers: Mm,
        withScopeId: Pp,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
/*!
 * vue-router v4.2.4
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Xn = typeof window < "u";
function Om(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ut = Object.assign;
function er(e, t) {
  const n = {};
  for (const i in t) {
    const s = t[i];
    n[i] = ve(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ui = () => {},
  ve = Array.isArray,
  Lm = /\/$/,
  Bm = (e) => e.replace(Lm, "");
function nr(e, t, n = "/") {
  let i,
    s = {},
    o = "",
    r = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((i = t.slice(0, l)),
      (o = t.slice(l + 1, a > -1 ? a : t.length)),
      (s = e(o))),
    a > -1 && ((i = i || t.slice(0, a)), (r = t.slice(a, t.length))),
    (i = Vm(i ?? t, n)),
    { fullPath: i + (o && "?") + o + r, path: i, query: s, hash: r }
  );
}
function Nm(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ol(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Im(e, t, n) {
  const i = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    i > -1 &&
    i === s &&
    ri(t.matched[i], n.matched[s]) &&
    Xu(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function ri(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Xu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!zm(e[n], t[n])) return !1;
  return !0;
}
function zm(e, t) {
  return ve(e) ? Ll(e, t) : ve(t) ? Ll(t, e) : e === t;
}
function Ll(e, t) {
  return ve(t)
    ? e.length === t.length && e.every((n, i) => n === t[i])
    : e.length === 1 && e[0] === t;
}
function Vm(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    i = e.split("/"),
    s = i[i.length - 1];
  (s === ".." || s === ".") && i.push("");
  let o = n.length - 1,
    r,
    a;
  for (r = 0; r < i.length; r++)
    if (((a = i[r]), a !== "."))
      if (a === "..") o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    i.slice(r - (r === i.length ? 1 : 0)).join("/")
  );
}
var ss;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(ss || (ss = {}));
var Hi;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Hi || (Hi = {}));
function qm(e) {
  if (!e)
    if (Xn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Bm(e);
}
const Um = /^[^#]+#/;
function Hm(e, t) {
  return e.replace(Um, "#") + t;
}
function jm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    i = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: i.left - n.left - (t.left || 0),
    top: i.top - n.top - (t.top || 0),
  };
}
const qo = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Wm(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      i = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? i
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = jm(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Bl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Dr = new Map();
function Ym(e, t) {
  Dr.set(e, t);
}
function Km(e) {
  const t = Dr.get(e);
  return Dr.delete(e), t;
}
let Xm = () => location.protocol + "//" + location.host;
function Ju(e, t) {
  const { pathname: n, search: i, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l), Ol(l, "");
  }
  return Ol(n, e) + i + s;
}
function Jm(e, t, n, i) {
  let s = [],
    o = [],
    r = null;
  const a = ({ state: d }) => {
    const h = Ju(e, location),
      g = n.value,
      m = t.value;
    let b = 0;
    if (d) {
      if (((n.value = h), (t.value = d), r && r === g)) {
        r = null;
        return;
      }
      b = m ? d.position - m.position : 0;
    } else i(h);
    s.forEach((x) => {
      x(n.value, g, {
        delta: b,
        type: ss.pop,
        direction: b ? (b > 0 ? Hi.forward : Hi.back) : Hi.unknown,
      });
    });
  };
  function l() {
    r = n.value;
  }
  function c(d) {
    s.push(d);
    const h = () => {
      const g = s.indexOf(d);
      g > -1 && s.splice(g, 1);
    };
    return o.push(h), h;
  }
  function f() {
    const { history: d } = window;
    d.state && d.replaceState(ut({}, d.state, { scroll: qo() }), "");
  }
  function u() {
    for (const d of o) d();
    (o = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", f);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", f, { passive: !0 }),
    { pauseListeners: l, listen: c, destroy: u }
  );
}
function Nl(e, t, n, i = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: i,
    position: window.history.length,
    scroll: s ? qo() : null,
  };
}
function Gm(e) {
  const { history: t, location: n } = window,
    i = { value: Ju(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      i.value,
      {
        back: null,
        current: i.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(l, c, f) {
    const u = e.indexOf("#"),
      d =
        u > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l
          : Xm() + e + l;
    try {
      t[f ? "replaceState" : "pushState"](c, "", d), (s.value = c);
    } catch (h) {
      console.error(h), n[f ? "replace" : "assign"](d);
    }
  }
  function r(l, c) {
    const f = ut({}, t.state, Nl(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position,
    });
    o(l, f, !0), (i.value = l);
  }
  function a(l, c) {
    const f = ut({}, s.value, t.state, { forward: l, scroll: qo() });
    o(f.current, f, !0);
    const u = ut({}, Nl(i.value, l, null), { position: f.position + 1 }, c);
    o(l, u, !1), (i.value = l);
  }
  return { location: i, state: s, push: a, replace: r };
}
function Qm(e) {
  e = qm(e);
  const t = Gm(e),
    n = Jm(e, t.state, t.location, t.replace);
  function i(o, r = !0) {
    r || n.pauseListeners(), history.go(o);
  }
  const s = ut(
    { location: "", base: e, go: i, createHref: Hm.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function Zm(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Gu(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ke = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Qu = Symbol("");
var Il;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Il || (Il = {}));
function ai(e, t) {
  return ut(new Error(), { type: e, [Qu]: !0 }, t);
}
function Te(e, t) {
  return e instanceof Error && Qu in e && (t == null || !!(e.type & t));
}
const zl = "[^/]+?",
  $m = { sensitive: !1, strict: !1, start: !0, end: !0 },
  tb = /[.+*?^${}()[\]/\\]/g;
function eb(e, t) {
  const n = ut({}, $m, t),
    i = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const c of e) {
    const f = c.length ? [] : [90];
    n.strict && !c.length && (s += "/");
    for (let u = 0; u < c.length; u++) {
      const d = c[u];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        u || (s += "/"), (s += d.value.replace(tb, "\\$&")), (h += 40);
      else if (d.type === 1) {
        const { value: g, repeatable: m, optional: b, regexp: x } = d;
        o.push({ name: g, repeatable: m, optional: b });
        const y = x || zl;
        if (y !== zl) {
          h += 10;
          try {
            new RegExp(`(${y})`);
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${y}): ` + _.message
            );
          }
        }
        let S = m ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        u || (S = b && c.length < 2 ? `(?:/${S})` : "/" + S),
          b && (S += "?"),
          (s += S),
          (h += 20),
          b && (h += -8),
          m && (h += -20),
          y === ".*" && (h += -50);
      }
      f.push(h);
    }
    i.push(f);
  }
  if (n.strict && n.end) {
    const c = i.length - 1;
    i[c][i[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const r = new RegExp(s, n.sensitive ? "" : "i");
  function a(c) {
    const f = c.match(r),
      u = {};
    if (!f) return null;
    for (let d = 1; d < f.length; d++) {
      const h = f[d] || "",
        g = o[d - 1];
      u[g.name] = h && g.repeatable ? h.split("/") : h;
    }
    return u;
  }
  function l(c) {
    let f = "",
      u = !1;
    for (const d of e) {
      (!u || !f.endsWith("/")) && (f += "/"), (u = !1);
      for (const h of d)
        if (h.type === 0) f += h.value;
        else if (h.type === 1) {
          const { value: g, repeatable: m, optional: b } = h,
            x = g in c ? c[g] : "";
          if (ve(x) && !m)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const y = ve(x) ? x.join("/") : x;
          if (!y)
            if (b)
              d.length < 2 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (u = !0));
            else throw new Error(`Missing required param "${g}"`);
          f += y;
        }
    }
    return f || "/";
  }
  return { re: r, score: i, keys: o, parse: a, stringify: l };
}
function nb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const i = t[n] - e[n];
    if (i) return i;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function ib(e, t) {
  let n = 0;
  const i = e.score,
    s = t.score;
  for (; n < i.length && n < s.length; ) {
    const o = nb(i[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - i.length) === 1) {
    if (Vl(i)) return 1;
    if (Vl(s)) return -1;
  }
  return s.length - i.length;
}
function Vl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const sb = { type: 0, value: "" },
  ob = /[a-zA-Z0-9_]/;
function rb(e) {
  if (!e) return [[]];
  if (e === "/") return [[sb]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = 0,
    i = n;
  const s = [];
  let o;
  function r() {
    o && s.push(o), (o = []);
  }
  let a = 0,
    l,
    c = "",
    f = "";
  function u() {
    c &&
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: c,
            regexp: f,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function d() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (i = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && u(), r()) : l === ":" ? (u(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = i);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : ob.test(l)
          ? d()
          : (u(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + l)
            : (n = 3)
          : (f += l);
        break;
      case 3:
        u(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (f = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), u(), r(), s;
}
function ab(e, t, n) {
  const i = eb(rb(e.path), n),
    s = ut(i, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function lb(e, t) {
  const n = [],
    i = new Map();
  t = Hl({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(f) {
    return i.get(f);
  }
  function o(f, u, d) {
    const h = !d,
      g = cb(f);
    g.aliasOf = d && d.record;
    const m = Hl(t, f),
      b = [g];
    if ("alias" in f) {
      const S = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const _ of S)
        b.push(
          ut({}, g, {
            components: d ? d.record.components : g.components,
            path: _,
            aliasOf: d ? d.record : g,
          })
        );
    }
    let x, y;
    for (const S of b) {
      const { path: _ } = S;
      if (u && _[0] !== "/") {
        const k = u.record.path,
          E = k[k.length - 1] === "/" ? "" : "/";
        S.path = u.record.path + (_ && E + _);
      }
      if (
        ((x = ab(S, u, m)),
        d
          ? d.alias.push(x)
          : ((y = y || x),
            y !== x && y.alias.push(x),
            h && f.name && !Ul(x) && r(f.name)),
        g.children)
      ) {
        const k = g.children;
        for (let E = 0; E < k.length; E++) o(k[E], x, d && d.children[E]);
      }
      (d = d || x),
        ((x.record.components && Object.keys(x.record.components).length) ||
          x.record.name ||
          x.record.redirect) &&
          l(x);
    }
    return y
      ? () => {
          r(y);
        }
      : Ui;
  }
  function r(f) {
    if (Gu(f)) {
      const u = i.get(f);
      u &&
        (i.delete(f),
        n.splice(n.indexOf(u), 1),
        u.children.forEach(r),
        u.alias.forEach(r));
    } else {
      const u = n.indexOf(f);
      u > -1 &&
        (n.splice(u, 1),
        f.record.name && i.delete(f.record.name),
        f.children.forEach(r),
        f.alias.forEach(r));
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    let u = 0;
    for (
      ;
      u < n.length &&
      ib(f, n[u]) >= 0 &&
      (f.record.path !== n[u].record.path || !Zu(f, n[u]));

    )
      u++;
    n.splice(u, 0, f), f.record.name && !Ul(f) && i.set(f.record.name, f);
  }
  function c(f, u) {
    let d,
      h = {},
      g,
      m;
    if ("name" in f && f.name) {
      if (((d = i.get(f.name)), !d)) throw ai(1, { location: f });
      (m = d.record.name),
        (h = ut(
          ql(
            u.params,
            d.keys.filter((y) => !y.optional).map((y) => y.name)
          ),
          f.params &&
            ql(
              f.params,
              d.keys.map((y) => y.name)
            )
        )),
        (g = d.stringify(h));
    } else if ("path" in f)
      (g = f.path),
        (d = n.find((y) => y.re.test(g))),
        d && ((h = d.parse(g)), (m = d.record.name));
    else {
      if (((d = u.name ? i.get(u.name) : n.find((y) => y.re.test(u.path))), !d))
        throw ai(1, { location: f, currentLocation: u });
      (m = d.record.name),
        (h = ut({}, u.params, f.params)),
        (g = d.stringify(h));
    }
    const b = [];
    let x = d;
    for (; x; ) b.unshift(x.record), (x = x.parent);
    return { name: m, path: g, params: h, matched: b, meta: ub(b) };
  }
  return (
    e.forEach((f) => o(f)),
    {
      addRoute: o,
      resolve: c,
      removeRoute: r,
      getRoutes: a,
      getRecordMatcher: s,
    }
  );
}
function ql(e, t) {
  const n = {};
  for (const i of t) i in e && (n[i] = e[i]);
  return n;
}
function cb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: fb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function fb(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const i in e.components) t[i] = typeof n == "object" ? n[i] : n;
  return t;
}
function Ul(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function ub(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function Hl(e, t) {
  const n = {};
  for (const i in e) n[i] = i in t ? t[i] : e[i];
  return n;
}
function Zu(e, t) {
  return t.children.some((n) => n === e || Zu(e, n));
}
const $u = /#/g,
  db = /&/g,
  hb = /\//g,
  pb = /=/g,
  gb = /\?/g,
  td = /\+/g,
  mb = /%5B/g,
  bb = /%5D/g,
  ed = /%5E/g,
  yb = /%60/g,
  nd = /%7B/g,
  xb = /%7C/g,
  id = /%7D/g,
  vb = /%20/g;
function Ma(e) {
  return encodeURI("" + e)
    .replace(xb, "|")
    .replace(mb, "[")
    .replace(bb, "]");
}
function _b(e) {
  return Ma(e).replace(nd, "{").replace(id, "}").replace(ed, "^");
}
function Fr(e) {
  return Ma(e)
    .replace(td, "%2B")
    .replace(vb, "+")
    .replace($u, "%23")
    .replace(db, "%26")
    .replace(yb, "`")
    .replace(nd, "{")
    .replace(id, "}")
    .replace(ed, "^");
}
function wb(e) {
  return Fr(e).replace(pb, "%3D");
}
function kb(e) {
  return Ma(e).replace($u, "%23").replace(gb, "%3F");
}
function Sb(e) {
  return e == null ? "" : kb(e).replace(hb, "%2F");
}
function lo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Cb(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const i = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < i.length; ++s) {
    const o = i[s].replace(td, " "),
      r = o.indexOf("="),
      a = lo(r < 0 ? o : o.slice(0, r)),
      l = r < 0 ? null : lo(o.slice(r + 1));
    if (a in t) {
      let c = t[a];
      ve(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function jl(e) {
  let t = "";
  for (let n in e) {
    const i = e[n];
    if (((n = wb(n)), i == null)) {
      i !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ve(i) ? i.map((o) => o && Fr(o)) : [i && Fr(i)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function Mb(e) {
  const t = {};
  for (const n in e) {
    const i = e[n];
    i !== void 0 &&
      (t[n] = ve(i)
        ? i.map((s) => (s == null ? null : "" + s))
        : i == null
        ? i
        : "" + i);
  }
  return t;
}
const Pb = Symbol(""),
  Wl = Symbol(""),
  Pa = Symbol(""),
  sd = Symbol(""),
  Rr = Symbol("");
function _i() {
  let e = [];
  function t(i) {
    return (
      e.push(i),
      () => {
        const s = e.indexOf(i);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Qe(e, t, n, i, s) {
  const o = i && (i.enterCallbacks[s] = i.enterCallbacks[s] || []);
  return () =>
    new Promise((r, a) => {
      const l = (u) => {
          u === !1
            ? a(ai(4, { from: n, to: t }))
            : u instanceof Error
            ? a(u)
            : Zm(u)
            ? a(ai(2, { from: t, to: u }))
            : (o &&
                i.enterCallbacks[s] === o &&
                typeof u == "function" &&
                o.push(u),
              r());
        },
        c = e.call(i && i.instances[s], t, n, l);
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(l)), f.catch((u) => a(u));
    });
}
function ir(e, t, n, i) {
  const s = [];
  for (const o of e)
    for (const r in o.components) {
      let a = o.components[r];
      if (!(t !== "beforeRouteEnter" && !o.instances[r]))
        if (Eb(a)) {
          const c = (a.__vccOpts || a)[t];
          c && s.push(Qe(c, n, i, o, r));
        } else {
          let l = a();
          s.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${r}" at "${o.path}"`)
                );
              const f = Om(c) ? c.default : c;
              o.components[r] = f;
              const d = (f.__vccOpts || f)[t];
              return d && Qe(d, n, i, o, r)();
            })
          );
        }
    }
  return s;
}
function Eb(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Yl(e) {
  const t = Pe(Pa),
    n = Pe(sd),
    i = fe(() => t.resolve(sn(e.to))),
    s = fe(() => {
      const { matched: l } = i.value,
        { length: c } = l,
        f = l[c - 1],
        u = n.matched;
      if (!f || !u.length) return -1;
      const d = u.findIndex(ri.bind(null, f));
      if (d > -1) return d;
      const h = Kl(l[c - 2]);
      return c > 1 && Kl(f) === h && u[u.length - 1].path !== h
        ? u.findIndex(ri.bind(null, l[c - 2]))
        : d;
    }),
    o = fe(() => s.value > -1 && Fb(n.params, i.value.params)),
    r = fe(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Xu(n.params, i.value.params)
    );
  function a(l = {}) {
    return Db(l)
      ? t[sn(e.replace) ? "replace" : "push"](sn(e.to)).catch(Ui)
      : Promise.resolve();
  }
  return {
    route: i,
    href: fe(() => i.value.href),
    isActive: o,
    isExactActive: r,
    navigate: a,
  };
}
const Tb = Vn({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Yl,
    setup(e, { slots: t }) {
      const n = ps(Yl(e)),
        { options: i } = Pe(Pa),
        s = fe(() => ({
          [Xl(e.activeClass, i.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Xl(
            e.exactActiveClass,
            i.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : mi(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  Ab = Tb;
function Db(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Fb(e, t) {
  for (const n in t) {
    const i = t[n],
      s = e[n];
    if (typeof i == "string") {
      if (i !== s) return !1;
    } else if (!ve(s) || s.length !== i.length || i.some((o, r) => o !== s[r]))
      return !1;
  }
  return !0;
}
function Kl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Xl = (e, t, n) => e ?? t ?? n,
  Rb = Vn({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const i = Pe(Rr),
        s = fe(() => e.route || i.value),
        o = Pe(Wl, 0),
        r = fe(() => {
          let c = sn(o);
          const { matched: f } = s.value;
          let u;
          for (; (u = f[c]) && !u.components; ) c++;
          return c;
        }),
        a = fe(() => s.value.matched[r.value]);
      Ii(
        Wl,
        fe(() => r.value + 1)
      ),
        Ii(Pb, a),
        Ii(Rr, s);
      const l = nn();
      return (
        ze(
          () => [l.value, a.value, e.name],
          ([c, f, u], [d, h, g]) => {
            f &&
              ((f.instances[u] = c),
              h &&
                h !== f &&
                c &&
                c === d &&
                (f.leaveGuards.size || (f.leaveGuards = h.leaveGuards),
                f.updateGuards.size || (f.updateGuards = h.updateGuards))),
              c &&
                f &&
                (!h || !ri(f, h) || !d) &&
                (f.enterCallbacks[u] || []).forEach((m) => m(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = s.value,
            f = e.name,
            u = a.value,
            d = u && u.components[f];
          if (!d) return Jl(n.default, { Component: d, route: c });
          const h = u.props[f],
            g = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                ? h(c)
                : h
              : null,
            b = mi(
              d,
              ut({}, g, t, {
                onVnodeUnmounted: (x) => {
                  x.component.isUnmounted && (u.instances[f] = null);
                },
                ref: l,
              })
            );
          return Jl(n.default, { Component: b, route: c }) || b;
        }
      );
    },
  });
function Jl(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Ob = Rb;
function Lb(e) {
  const t = lb(e.routes, e),
    n = e.parseQuery || Cb,
    i = e.stringifyQuery || jl,
    s = e.history,
    o = _i(),
    r = _i(),
    a = _i(),
    l = To(Ke);
  let c = Ke;
  Xn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = er.bind(null, (D) => "" + D),
    u = er.bind(null, Sb),
    d = er.bind(null, lo);
  function h(D, j) {
    let q, X;
    return (
      Gu(D) ? ((q = t.getRecordMatcher(D)), (X = j)) : (X = D), t.addRoute(X, q)
    );
  }
  function g(D) {
    const j = t.getRecordMatcher(D);
    j && t.removeRoute(j);
  }
  function m() {
    return t.getRoutes().map((D) => D.record);
  }
  function b(D) {
    return !!t.getRecordMatcher(D);
  }
  function x(D, j) {
    if (((j = ut({}, j || l.value)), typeof D == "string")) {
      const M = nr(n, D, j.path),
        A = t.resolve({ path: M.path }, j),
        F = s.createHref(M.fullPath);
      return ut(M, A, {
        params: d(A.params),
        hash: lo(M.hash),
        redirectedFrom: void 0,
        href: F,
      });
    }
    let q;
    if ("path" in D) q = ut({}, D, { path: nr(n, D.path, j.path).path });
    else {
      const M = ut({}, D.params);
      for (const A in M) M[A] == null && delete M[A];
      (q = ut({}, D, { params: u(M) })), (j.params = u(j.params));
    }
    const X = t.resolve(q, j),
      ft = D.hash || "";
    X.params = f(d(X.params));
    const v = Nm(i, ut({}, D, { hash: _b(ft), path: X.path })),
      w = s.createHref(v);
    return ut(
      { fullPath: v, hash: ft, query: i === jl ? Mb(D.query) : D.query || {} },
      X,
      { redirectedFrom: void 0, href: w }
    );
  }
  function y(D) {
    return typeof D == "string" ? nr(n, D, l.value.path) : ut({}, D);
  }
  function S(D, j) {
    if (c !== D) return ai(8, { from: j, to: D });
  }
  function _(D) {
    return P(D);
  }
  function k(D) {
    return _(ut(y(D), { replace: !0 }));
  }
  function E(D) {
    const j = D.matched[D.matched.length - 1];
    if (j && j.redirect) {
      const { redirect: q } = j;
      let X = typeof q == "function" ? q(D) : q;
      return (
        typeof X == "string" &&
          ((X = X.includes("?") || X.includes("#") ? (X = y(X)) : { path: X }),
          (X.params = {})),
        ut(
          { query: D.query, hash: D.hash, params: "path" in X ? {} : D.params },
          X
        )
      );
    }
  }
  function P(D, j) {
    const q = (c = x(D)),
      X = l.value,
      ft = D.state,
      v = D.force,
      w = D.replace === !0,
      M = E(q);
    if (M)
      return P(
        ut(y(M), {
          state: typeof M == "object" ? ut({}, ft, M.state) : ft,
          force: v,
          replace: w,
        }),
        j || q
      );
    const A = q;
    A.redirectedFrom = j;
    let F;
    return (
      !v && Im(i, X, q) && ((F = ai(16, { to: A, from: X })), qt(X, X, !0, !1)),
      (F ? Promise.resolve(F) : R(A, X))
        .catch((L) => (Te(L) ? (Te(L, 2) ? L : Vt(L)) : rt(L, A, X)))
        .then((L) => {
          if (L) {
            if (Te(L, 2))
              return P(
                ut({ replace: w }, y(L.to), {
                  state: typeof L.to == "object" ? ut({}, ft, L.to.state) : ft,
                  force: v,
                }),
                j || A
              );
          } else L = O(A, X, !0, w, ft);
          return N(A, X, L), L;
        })
    );
  }
  function C(D, j) {
    const q = S(D, j);
    return q ? Promise.reject(q) : Promise.resolve();
  }
  function T(D) {
    const j = re.values().next().value;
    return j && typeof j.runWithContext == "function"
      ? j.runWithContext(D)
      : D();
  }
  function R(D, j) {
    let q;
    const [X, ft, v] = Bb(D, j);
    q = ir(X.reverse(), "beforeRouteLeave", D, j);
    for (const M of X)
      M.leaveGuards.forEach((A) => {
        q.push(Qe(A, D, j));
      });
    const w = C.bind(null, D, j);
    return (
      q.push(w),
      wt(q)
        .then(() => {
          q = [];
          for (const M of o.list()) q.push(Qe(M, D, j));
          return q.push(w), wt(q);
        })
        .then(() => {
          q = ir(ft, "beforeRouteUpdate", D, j);
          for (const M of ft)
            M.updateGuards.forEach((A) => {
              q.push(Qe(A, D, j));
            });
          return q.push(w), wt(q);
        })
        .then(() => {
          q = [];
          for (const M of v)
            if (M.beforeEnter)
              if (ve(M.beforeEnter))
                for (const A of M.beforeEnter) q.push(Qe(A, D, j));
              else q.push(Qe(M.beforeEnter, D, j));
          return q.push(w), wt(q);
        })
        .then(
          () => (
            D.matched.forEach((M) => (M.enterCallbacks = {})),
            (q = ir(v, "beforeRouteEnter", D, j)),
            q.push(w),
            wt(q)
          )
        )
        .then(() => {
          q = [];
          for (const M of r.list()) q.push(Qe(M, D, j));
          return q.push(w), wt(q);
        })
        .catch((M) => (Te(M, 8) ? M : Promise.reject(M)))
    );
  }
  function N(D, j, q) {
    a.list().forEach((X) => T(() => X(D, j, q)));
  }
  function O(D, j, q, X, ft) {
    const v = S(D, j);
    if (v) return v;
    const w = j === Ke,
      M = Xn ? history.state : {};
    q &&
      (X || w
        ? s.replace(D.fullPath, ut({ scroll: w && M && M.scroll }, ft))
        : s.push(D.fullPath, ft)),
      (l.value = D),
      qt(D, j, q, w),
      Vt();
  }
  let U;
  function z() {
    U ||
      (U = s.listen((D, j, q) => {
        if (!_e.listening) return;
        const X = x(D),
          ft = E(X);
        if (ft) {
          P(ut(ft, { replace: !0 }), X).catch(Ui);
          return;
        }
        c = X;
        const v = l.value;
        Xn && Ym(Bl(v.fullPath, q.delta), qo()),
          R(X, v)
            .catch((w) =>
              Te(w, 12)
                ? w
                : Te(w, 2)
                ? (P(w.to, X)
                    .then((M) => {
                      Te(M, 20) &&
                        !q.delta &&
                        q.type === ss.pop &&
                        s.go(-1, !1);
                    })
                    .catch(Ui),
                  Promise.reject())
                : (q.delta && s.go(-q.delta, !1), rt(w, X, v))
            )
            .then((w) => {
              (w = w || O(X, v, !1)),
                w &&
                  (q.delta && !Te(w, 8)
                    ? s.go(-q.delta, !1)
                    : q.type === ss.pop && Te(w, 20) && s.go(-1, !1)),
                N(X, v, w);
            })
            .catch(Ui);
      }));
  }
  let nt = _i(),
    Q = _i(),
    tt;
  function rt(D, j, q) {
    Vt(D);
    const X = Q.list();
    return (
      X.length ? X.forEach((ft) => ft(D, j, q)) : console.error(D),
      Promise.reject(D)
    );
  }
  function jt() {
    return tt && l.value !== Ke
      ? Promise.resolve()
      : new Promise((D, j) => {
          nt.add([D, j]);
        });
  }
  function Vt(D) {
    return (
      tt ||
        ((tt = !D),
        z(),
        nt.list().forEach(([j, q]) => (D ? q(D) : j())),
        nt.reset()),
      D
    );
  }
  function qt(D, j, q, X) {
    const { scrollBehavior: ft } = e;
    if (!Xn || !ft) return Promise.resolve();
    const v =
      (!q && Km(Bl(D.fullPath, 0))) ||
      ((X || !q) && history.state && history.state.scroll) ||
      null;
    return Ao()
      .then(() => ft(D, j, v))
      .then((w) => w && Wm(w))
      .catch((w) => rt(w, D, j));
  }
  const St = (D) => s.go(D);
  let oe;
  const re = new Set(),
    _e = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: g,
      hasRoute: b,
      getRoutes: m,
      resolve: x,
      options: e,
      push: _,
      replace: k,
      go: St,
      back: () => St(-1),
      forward: () => St(1),
      beforeEach: o.add,
      beforeResolve: r.add,
      afterEach: a.add,
      onError: Q.add,
      isReady: jt,
      install(D) {
        const j = this;
        D.component("RouterLink", Ab),
          D.component("RouterView", Ob),
          (D.config.globalProperties.$router = j),
          Object.defineProperty(D.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => sn(l),
          }),
          Xn &&
            !oe &&
            l.value === Ke &&
            ((oe = !0), _(s.location).catch((ft) => {}));
        const q = {};
        for (const ft in Ke)
          Object.defineProperty(q, ft, {
            get: () => l.value[ft],
            enumerable: !0,
          });
        D.provide(Pa, j), D.provide(sd, $r(q)), D.provide(Rr, l);
        const X = D.unmount;
        re.add(D),
          (D.unmount = function () {
            re.delete(D),
              re.size < 1 &&
                ((c = Ke),
                U && U(),
                (U = null),
                (l.value = Ke),
                (oe = !1),
                (tt = !1)),
              X();
          });
      },
    };
  function wt(D) {
    return D.reduce((j, q) => j.then(() => T(q)), Promise.resolve());
  }
  return _e;
}
function Bb(e, t) {
  const n = [],
    i = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < o; r++) {
    const a = t.matched[r];
    a && (e.matched.find((c) => ri(c, a)) ? i.push(a) : n.push(a));
    const l = e.matched[r];
    l && (t.matched.find((c) => ri(c, l)) || s.push(l));
  }
  return [n, i, s];
}
const He = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, s] of t) n[i] = s;
    return n;
  },
  Nb = {
    name: "PxButton",
    methods: {
      buttonClick() {
        this.$emit("custom-click");
      },
    },
  };
function Ib(e, t, n, i, s, o) {
  return (
    It(),
    ie(
      "button",
      {
        onClick:
          t[0] || (t[0] = (...r) => o.buttonClick && o.buttonClick(...r)),
        class:
          "bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded",
      },
      [eu(e.$slots, "default")]
    )
  );
}
const zb = He(Nb, [["render", Ib]]);
const Vb = {
    name: "PxAssetsTable",
    props: { assets: { type: Array, default: () => [] } },
    components: { PxButton: zb },
    methods: {
      redirect(e) {
        this.$router.push({ name: "coin-detail", params: { id: e } });
      },
    },
  },
  qb = (e) => (aa("data-v-0f5d031c"), (e = e()), la(), e),
  Ub = qb(() =>
    Y(
      "thead",
      null,
      [
        Y("tr", { class: "bg-gray-100 border-b-2 border-gray-400" }, [
          Y("th"),
          Y("th", null, [Y("span", null, "Ranking")]),
          Y("th", null, "Nombre"),
          Y("th", null, "Precio"),
          Y("th", null, "Cap. de Mercado"),
          Y("th", null, "Variación 24hs"),
          Y("td", { class: "hidden sm:block" }),
        ]),
      ],
      -1
    )
  ),
  Hb = ["src", "alt"],
  jb = { class: "text-blue-500" },
  Wb = { class: "ml-1 font-semibold text-blue-500" },
  Yb = { class: "text-yellow-600 font-semibold" },
  Kb = { class: "text-green-600 font-semibold" },
  Xb = { class: "hidden sm:block" };
function Jb(e, t, n, i, s, o) {
  const r = se("router-link"),
    a = se("px-button");
  return (
    It(),
    ie("table", null, [
      Ub,
      Y("tbody", null, [
        (It(!0),
        ie(
          Pt,
          null,
          tu(
            n.assets,
            (l) => (
              It(),
              ie(
                "tr",
                {
                  key: l.id,
                  class:
                    "border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100",
                },
                [
                  Y("td", null, [
                    Y(
                      "img",
                      {
                        class: "w-6 h-6",
                        src: `https://static.coincap.io/assets/icons/${l.symbol.toLowerCase()}@2x.png`,
                        alt: l.name,
                      },
                      null,
                      8,
                      Hb
                    ),
                  ]),
                  Y("td", jb, [he(" # "), Y("b", null, Ht(l.rank), 1)]),
                  Y("td", null, [
                    st(
                      r,
                      {
                        class:
                          "hover:underline font-semibold hover:text-gray-700 text-gray-500",
                        to: { name: "coin-detail", params: { id: l.id } },
                      },
                      { default: cn(() => [he(Ht(l.name), 1)]), _: 2 },
                      1032,
                      ["to"]
                    ),
                    Y("small", Wb, Ht(l.symbol), 1),
                  ]),
                  Y("td", Yb, Ht(e.$filters.dollarFilter(l.priceUsd)), 1),
                  Y("td", Kb, Ht(e.$filters.dollarFilter(l.marketCapUsd)), 1),
                  Y(
                    "td",
                    {
                      class: di(
                        l.changePercent24Hr.includes("-")
                          ? "text-red-600 font-semibold down "
                          : "text-green-600 font-semibold up"
                      ),
                    },
                    Ht(e.$filters.percentFilter(l.changePercent24Hr)),
                    3
                  ),
                  Y("td", Xb, [
                    st(
                      a,
                      { onCustomClick: (c) => o.redirect(l.id) },
                      { default: cn(() => [he(" Detalle ")]), _: 2 },
                      1032,
                      ["onCustomClick"]
                    ),
                  ]),
                ]
              )
            )
          ),
          128
        )),
      ]),
    ])
  );
}
const Gb = He(Vb, [
    ["render", Jb],
    ["__scopeId", "data-v-0f5d031c"],
  ]),
  Ea = "https:/api.coincap.io/v2",
  Qb = () =>
    fetch(`${Ea}/assets?limit=10`)
      .then((e) => e.json())
      .then((e) => e.data),
  Zb = (e) =>
    fetch(`${Ea}/assets/${e}`)
      .then((t) => t.json())
      .then((t) => t.data);
function $b(e) {
  const t = new Date(),
    n = t.getTime();
  t.setDate(t.getDate() - 1);
  const i = t.getTime();
  return fetch(`${Ea}/assets/${e}/history?interval=h1&start=${i}&end=${n}`)
    .then((s) => s.json())
    .then((s) => s.data);
}
const Or = { getAssets: Qb, getAsset: Zb, getAssetHistory: $b },
  t0 = {
    name: "Home",
    components: { PxAssetsTable: Gb },
    data() {
      return { isLoading: !1, assets: [] };
    },
    created() {
      (this.isLoading = !0),
        Or.getAssets()
          .then((e) => (this.assets = e))
          .catch((e) => console.error(e))
          .finally(() => (this.isLoading = !1));
    },
  };
function e0(e, t, n, i, s, o) {
  const r = se("BounceLoader"),
    a = se("px-assets-table");
  return (
    It(),
    ie("div", null, [
      st(
        r,
        { loading: s.isLoading, color: "#68d391", size: "400px" },
        null,
        8,
        ["loading"]
      ),
      qf(st(a, { assets: s.assets }, null, 8, ["assets"]), [
        [Ca, !s.isLoading],
      ]),
    ])
  );
}
const n0 = He(t0, [["render", e0]]),
  i0 = { name: "About" },
  s0 = { class: "flex-col items-center" },
  o0 = Y("h1", { class: "text-gray-700 text-6xl" }, "DavidExchange v1.0.0", -1),
  r0 = Y(
    "p",
    { class: "text-gray-600 text-xl text-center" },
    [
      he(
        " Proyecto para visualizar cotizaciones de las criptomonedas más importantes del mercado "
      ),
      Y("br"),
      he(" Este proyecto esta usando Vue Js "),
    ],
    -1
  );
function a0(e, t, n, i, s, o) {
  const r = se("router-link");
  return (
    It(),
    ie("div", s0, [
      o0,
      r0,
      st(
        r,
        {
          to: "/",
          class:
            "bg-green-400 mt-2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
        },
        { default: cn(() => [he("Inicio")]), _: 1 }
      ),
    ])
  );
}
const l0 = He(i0, [["render", a0]]),
  c0 = { name: "Error" },
  f0 = { class: "flex-col items-center" },
  u0 = Y("h1", { class: "text-gray-700 text-6xl uppercase" }, "Error!", -1),
  d0 = Y(
    "h1",
    { class: "text-gray-700 text-xl uppercase" },
    " La pagina solicitada no exite. ",
    -1
  );
function h0(e, t, n, i, s, o) {
  const r = se("router-link");
  return (
    It(),
    ie("div", f0, [
      u0,
      d0,
      st(
        r,
        {
          to: "/",
          class:
            "bg-green-400 mt-2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
        },
        { default: cn(() => [he("Inicio")]), _: 1 }
      ),
    ])
  );
}
const p0 = He(c0, [["render", h0]]);
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function xs(e) {
  return (e + 0.5) | 0;
}
const Ze = (e, t, n) => Math.max(Math.min(e, n), t);
function Ai(e) {
  return Ze(xs(e * 2.55), 0, 255);
}
function rn(e) {
  return Ze(xs(e * 255), 0, 255);
}
function Le(e) {
  return Ze(xs(e / 2.55) / 100, 0, 1);
}
function Gl(e) {
  return Ze(xs(e * 100), 0, 100);
}
const le = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Lr = [..."0123456789ABCDEF"],
  g0 = (e) => Lr[e & 15],
  m0 = (e) => Lr[(e & 240) >> 4] + Lr[e & 15],
  Fs = (e) => (e & 240) >> 4 === (e & 15),
  b0 = (e) => Fs(e.r) && Fs(e.g) && Fs(e.b) && Fs(e.a);
function y0(e) {
  var t = e.length,
    n;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (le[e[1]] * 17),
            g: 255 & (le[e[2]] * 17),
            b: 255 & (le[e[3]] * 17),
            a: t === 5 ? le[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (le[e[1]] << 4) | le[e[2]],
            g: (le[e[3]] << 4) | le[e[4]],
            b: (le[e[5]] << 4) | le[e[6]],
            a: t === 9 ? (le[e[7]] << 4) | le[e[8]] : 255,
          })),
    n
  );
}
const x0 = (e, t) => (e < 255 ? t(e) : "");
function v0(e) {
  var t = b0(e) ? g0 : m0;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + x0(e.a, t) : void 0;
}
const _0 =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function od(e, t, n) {
  const i = t * Math.min(n, 1 - n),
    s = (o, r = (o + e / 30) % 12) =>
      n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function w0(e, t, n) {
  const i = (s, o = (s + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function k0(e, t, n) {
  const i = od(e, 1, 0.5);
  let s;
  for (t + n > 1 && ((s = 1 / (t + n)), (t *= s), (n *= s)), s = 0; s < 3; s++)
    (i[s] *= 1 - t - n), (i[s] += t);
  return i;
}
function S0(e, t, n, i, s) {
  return e === s
    ? (t - n) / i + (t < n ? 6 : 0)
    : t === s
    ? (n - e) / i + 2
    : (e - t) / i + 4;
}
function Ta(e) {
  const n = e.r / 255,
    i = e.g / 255,
    s = e.b / 255,
    o = Math.max(n, i, s),
    r = Math.min(n, i, s),
    a = (o + r) / 2;
  let l, c, f;
  return (
    o !== r &&
      ((f = o - r),
      (c = a > 0.5 ? f / (2 - o - r) : f / (o + r)),
      (l = S0(n, i, s, f, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function Aa(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(rn);
}
function Da(e, t, n) {
  return Aa(od, e, t, n);
}
function C0(e, t, n) {
  return Aa(k0, e, t, n);
}
function M0(e, t, n) {
  return Aa(w0, e, t, n);
}
function rd(e) {
  return ((e % 360) + 360) % 360;
}
function P0(e) {
  const t = _0.exec(e);
  let n = 255,
    i;
  if (!t) return;
  t[5] !== i && (n = t[6] ? Ai(+t[5]) : rn(+t[5]));
  const s = rd(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (i = C0(s, o, r))
      : t[1] === "hsv"
      ? (i = M0(s, o, r))
      : (i = Da(s, o, r)),
    { r: i[0], g: i[1], b: i[2], a: n }
  );
}
function E0(e, t) {
  var n = Ta(e);
  (n[0] = rd(n[0] + t)), (n = Da(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function T0(e) {
  if (!e) return;
  const t = Ta(e),
    n = t[0],
    i = Gl(t[1]),
    s = Gl(t[2]);
  return e.a < 255
    ? `hsla(${n}, ${i}%, ${s}%, ${Le(e.a)})`
    : `hsl(${n}, ${i}%, ${s}%)`;
}
const Ql = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Zl = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function A0() {
  const e = {},
    t = Object.keys(Zl),
    n = Object.keys(Ql);
  let i, s, o, r, a;
  for (i = 0; i < t.length; i++) {
    for (r = a = t[i], s = 0; s < n.length; s++)
      (o = n[s]), (a = a.replace(o, Ql[o]));
    (o = parseInt(Zl[r], 16)),
      (e[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return e;
}
let Rs;
function D0(e) {
  Rs || ((Rs = A0()), (Rs.transparent = [0, 0, 0, 0]));
  const t = Rs[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const F0 =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function R0(e) {
  const t = F0.exec(e);
  let n = 255,
    i,
    s,
    o;
  if (t) {
    if (t[7] !== i) {
      const r = +t[7];
      n = t[8] ? Ai(r) : Ze(r * 255, 0, 255);
    }
    return (
      (i = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (i = 255 & (t[2] ? Ai(i) : Ze(i, 0, 255))),
      (s = 255 & (t[4] ? Ai(s) : Ze(s, 0, 255))),
      (o = 255 & (t[6] ? Ai(o) : Ze(o, 0, 255))),
      { r: i, g: s, b: o, a: n }
    );
  }
}
function O0(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Le(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const sr = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  Wn = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function L0(e, t, n) {
  const i = Wn(Le(e.r)),
    s = Wn(Le(e.g)),
    o = Wn(Le(e.b));
  return {
    r: rn(sr(i + n * (Wn(Le(t.r)) - i))),
    g: rn(sr(s + n * (Wn(Le(t.g)) - s))),
    b: rn(sr(o + n * (Wn(Le(t.b)) - o))),
    a: e.a + n * (t.a - e.a),
  };
}
function Os(e, t, n) {
  if (e) {
    let i = Ta(e);
    (i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1))),
      (i = Da(i)),
      (e.r = i[0]),
      (e.g = i[1]),
      (e.b = i[2]);
  }
}
function ad(e, t) {
  return e && Object.assign(t || {}, e);
}
function $l(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = rn(e[3])))
      : ((t = ad(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = rn(t.a))),
    t
  );
}
function B0(e) {
  return e.charAt(0) === "r" ? R0(e) : P0(e);
}
class os {
  constructor(t) {
    if (t instanceof os) return t;
    const n = typeof t;
    let i;
    n === "object"
      ? (i = $l(t))
      : n === "string" && (i = y0(t) || D0(t) || B0(t)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ad(this._rgb);
    return t && (t.a = Le(t.a)), t;
  }
  set rgb(t) {
    this._rgb = $l(t);
  }
  rgbString() {
    return this._valid ? O0(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? v0(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? T0(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb,
        s = t.rgb;
      let o;
      const r = n === o ? 0.5 : n,
        a = 2 * r - 1,
        l = i.a - s.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (o = 1 - c),
        (i.r = 255 & (c * i.r + o * s.r + 0.5)),
        (i.g = 255 & (c * i.g + o * s.g + 0.5)),
        (i.b = 255 & (c * i.b + o * s.b + 0.5)),
        (i.a = r * i.a + (1 - r) * s.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = L0(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new os(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = rn(t)), this;
  }
  clearer(t) {
    const n = this._rgb;
    return (n.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      n = xs(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = n), this;
  }
  opaquer(t) {
    const n = this._rgb;
    return (n.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Os(this._rgb, 2, t), this;
  }
  darken(t) {
    return Os(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Os(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Os(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return E0(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.3.2
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function Ae() {}
const N0 = (() => {
  let e = 0;
  return () => e++;
})();
function xt(e) {
  return e === null || typeof e > "u";
}
function _t(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function ct(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function Ft(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function $t(e, t) {
  return Ft(e) ? e : t;
}
function at(e, t) {
  return typeof e > "u" ? t : e;
}
const I0 = (e, t) =>
  typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function bt(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t);
}
function dt(e, t, n, i) {
  let s, o, r;
  if (_t(e))
    if (((o = e.length), i)) for (s = o - 1; s >= 0; s--) t.call(n, e[s], s);
    else for (s = 0; s < o; s++) t.call(n, e[s], s);
  else if (ct(e))
    for (r = Object.keys(e), o = r.length, s = 0; s < o; s++)
      t.call(n, e[r[s]], r[s]);
}
function co(e, t) {
  let n, i, s, o;
  if (!e || !t || e.length !== t.length) return !1;
  for (n = 0, i = e.length; n < i; ++n)
    if (
      ((s = e[n]),
      (o = t[n]),
      s.datasetIndex !== o.datasetIndex || s.index !== o.index)
    )
      return !1;
  return !0;
}
function fo(e) {
  if (_t(e)) return e.map(fo);
  if (ct(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      i = n.length;
    let s = 0;
    for (; s < i; ++s) t[n[s]] = fo(e[n[s]]);
    return t;
  }
  return e;
}
function ld(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function z0(e, t, n, i) {
  if (!ld(e)) return;
  const s = t[e],
    o = n[e];
  ct(s) && ct(o) ? rs(s, o, i) : (t[e] = fo(o));
}
function rs(e, t, n) {
  const i = _t(t) ? t : [t],
    s = i.length;
  if (!ct(e)) return e;
  n = n || {};
  const o = n.merger || z0;
  let r;
  for (let a = 0; a < s; ++a) {
    if (((r = i[a]), !ct(r))) continue;
    const l = Object.keys(r);
    for (let c = 0, f = l.length; c < f; ++c) o(l[c], e, r, n);
  }
  return e;
}
function ji(e, t) {
  return rs(e, t, { merger: V0 });
}
function V0(e, t, n) {
  if (!ld(e)) return;
  const i = t[e],
    s = n[e];
  ct(i) && ct(s)
    ? ji(i, s)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = fo(s));
}
const tc = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function q0(e) {
  const t = e.split("."),
    n = [];
  let i = "";
  for (const s of t)
    (i += s),
      i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
  return n;
}
function U0(e) {
  const t = q0(e);
  return (n) => {
    for (const i of t) {
      if (i === "") break;
      n = n && n[i];
    }
    return n;
  };
}
function uo(e, t) {
  return (tc[t] || (tc[t] = U0(t)))(e);
}
function Fa(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ho = (e) => typeof e < "u",
  hn = (e) => typeof e == "function",
  ec = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  };
function H0(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const At = Math.PI,
  pe = 2 * At,
  j0 = pe + At,
  po = Number.POSITIVE_INFINITY,
  W0 = At / 180,
  Jt = At / 2,
  bn = At / 4,
  nc = (At * 2) / 3,
  $e = Math.log10,
  li = Math.sign;
function Wi(e, t, n) {
  return Math.abs(e - t) < n;
}
function ic(e) {
  const t = Math.round(e);
  e = Wi(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor($e(e))),
    i = e / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function Y0(e) {
  const t = [],
    n = Math.sqrt(e);
  let i;
  for (i = 1; i < n; i++) e % i === 0 && (t.push(i), t.push(e / i));
  return n === (n | 0) && t.push(n), t.sort((s, o) => s - o).pop(), t;
}
function as(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function K0(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function cd(e, t, n) {
  let i, s, o;
  for (i = 0, s = e.length; i < s; i++)
    (o = e[i][n]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function tn(e) {
  return e * (At / 180);
}
function Ra(e) {
  return e * (180 / At);
}
function sc(e) {
  if (!Ft(e)) return;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
  return n;
}
function X0(e, t) {
  const n = t.x - e.x,
    i = t.y - e.y,
    s = Math.sqrt(n * n + i * i);
  let o = Math.atan2(i, n);
  return o < -0.5 * At && (o += pe), { angle: o, distance: s };
}
function Br(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function J0(e, t) {
  return ((e - t + j0) % pe) - At;
}
function me(e) {
  return ((e % pe) + pe) % pe;
}
function fd(e, t, n, i) {
  const s = me(e),
    o = me(t),
    r = me(n),
    a = me(o - s),
    l = me(r - s),
    c = me(s - o),
    f = me(s - r);
  return s === o || s === r || (i && o === r) || (a > l && c < f);
}
function ue(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function G0(e) {
  return ue(e, -32768, 32767);
}
function Di(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i;
}
function Oa(e, t, n) {
  n = n || ((r) => e[r] < t);
  let i = e.length - 1,
    s = 0,
    o;
  for (; i - s > 1; ) (o = (s + i) >> 1), n(o) ? (s = o) : (i = o);
  return { lo: s, hi: i };
}
const Mn = (e, t, n, i) =>
    Oa(
      e,
      n,
      i
        ? (s) => {
            const o = e[s][t];
            return o < n || (o === n && e[s + 1][t] === n);
          }
        : (s) => e[s][t] < n
    ),
  Q0 = (e, t, n) => Oa(e, n, (i) => e[i][t] >= n);
function Z0(e, t, n) {
  let i = 0,
    s = e.length;
  for (; i < s && e[i] < t; ) i++;
  for (; s > i && e[s - 1] > n; ) s--;
  return i > 0 || s < e.length ? e.slice(i, s) : e;
}
const ud = ["push", "pop", "shift", "splice", "unshift"];
function $0(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    ud.forEach((n) => {
      const i = "_onData" + Fa(n),
        s = e[n];
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = s.apply(this, o);
          return (
            e._chartjs.listeners.forEach((a) => {
              typeof a[i] == "function" && a[i](...o);
            }),
            r
          );
        },
      });
    });
}
function oc(e, t) {
  const n = e._chartjs;
  if (!n) return;
  const i = n.listeners,
    s = i.indexOf(t);
  s !== -1 && i.splice(s, 1),
    !(i.length > 0) &&
      (ud.forEach((o) => {
        delete e[o];
      }),
      delete e._chartjs);
}
function ty(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const dd = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function hd(e, t) {
  let n = [],
    i = !1;
  return function (...s) {
    (n = s),
      i ||
        ((i = !0),
        dd.call(window, () => {
          (i = !1), e.apply(t, n);
        }));
  };
}
function ey(e, t) {
  let n;
  return function (...i) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, i))) : e.apply(this, i), t
    );
  };
}
const La = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  Lt = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  ny = (e, t, n, i) =>
    e === (i ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function iy(e, t, n) {
  const i = t.length;
  let s = 0,
    o = i;
  if (e._sorted) {
    const { iScale: r, _parsed: a } = e,
      l = r.axis,
      { min: c, max: f, minDefined: u, maxDefined: d } = r.getUserBounds();
    u &&
      (s = ue(
        Math.min(Mn(a, l, c).lo, n ? i : Mn(t, l, r.getPixelForValue(c)).lo),
        0,
        i - 1
      )),
      d
        ? (o =
            ue(
              Math.max(
                Mn(a, r.axis, f, !0).hi + 1,
                n ? 0 : Mn(t, l, r.getPixelForValue(f), !0).hi + 1
              ),
              s,
              i
            ) - s)
        : (o = i - s);
  }
  return { start: s, count: o };
}
function sy(e) {
  const { xScale: t, yScale: n, _scaleRanges: i } = e,
    s = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
  if (!i) return (e._scaleRanges = s), !0;
  const o =
    i.xmin !== t.min ||
    i.xmax !== t.max ||
    i.ymin !== n.min ||
    i.ymax !== n.max;
  return Object.assign(i, s), o;
}
const Ls = (e) => e === 0 || e === 1,
  rc = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * pe) / n)),
  ac = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * pe) / n) + 1,
  Yi = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * Jt) + 1,
    easeOutSine: (e) => Math.sin(e * Jt),
    easeInOutSine: (e) => -0.5 * (Math.cos(At * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      Ls(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (Ls(e) ? e : rc(e, 0.075, 0.3)),
    easeOutElastic: (e) => (Ls(e) ? e : ac(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Ls(e)
        ? e
        : e < 0.5
        ? 0.5 * rc(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * ac(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - Yi.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? Yi.easeInBounce(e * 2) * 0.5
        : Yi.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function Ba(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function lc(e) {
  return Ba(e) ? e : new os(e);
}
function or(e) {
  return Ba(e) ? e : new os(e).saturate(0.5).darken(0.1).hexString();
}
const oy = ["x", "y", "borderWidth", "radius", "tension"],
  ry = ["color", "borderColor", "backgroundColor"];
function ay(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: ry },
      numbers: { type: "number", properties: oy },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function ly(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const cc = new Map();
function cy(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let i = cc.get(n);
  return i || ((i = new Intl.NumberFormat(e, t)), cc.set(n, i)), i;
}
function Na(e, t, n) {
  return cy(t, n).format(e);
}
const pd = {
  values(e) {
    return _t(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0) return "0";
    const i = this.chart.options.locale;
    let s,
      o = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), (o = fy(e, n));
    }
    const r = $e(Math.abs(o)),
      a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      l = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), Na(e, i, l);
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0";
    const i = n[t].significand || e / Math.pow(10, Math.floor($e(e)));
    return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * n.length
      ? pd.numeric.call(this, e, t, n)
      : "";
  },
};
function fy(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Uo = { formatters: pd };
function uy(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Uo.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const Bn = Object.create(null),
  Nr = Object.create(null);
function Ki(e, t) {
  if (!t) return e;
  const n = t.split(".");
  for (let i = 0, s = n.length; i < s; ++i) {
    const o = n[i];
    e = e[o] || (e[o] = Object.create(null));
  }
  return e;
}
function rr(e, t, n) {
  return typeof t == "string" ? rs(Ki(e, t), n) : rs(Ki(e, ""), t);
}
class dy {
  constructor(t, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, s) => or(s.backgroundColor)),
      (this.hoverBorderColor = (i, s) => or(s.borderColor)),
      (this.hoverColor = (i, s) => or(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n);
  }
  set(t, n) {
    return rr(this, t, n);
  }
  get(t) {
    return Ki(this, t);
  }
  describe(t, n) {
    return rr(Nr, t, n);
  }
  override(t, n) {
    return rr(Bn, t, n);
  }
  route(t, n, i, s) {
    const o = Ki(this, t),
      r = Ki(this, i),
      a = "_" + n;
    Object.defineProperties(o, {
      [a]: { value: o[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = r[s];
          return ct(l) ? Object.assign({}, c, l) : at(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var kt = new dy(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [ay, ly, uy]
);
function hy(e) {
  return !e || xt(e.size) || xt(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function go(e, t, n, i, s) {
  let o = t[s];
  return (
    o || ((o = t[s] = e.measureText(s).width), n.push(s)), o > i && (i = o), i
  );
}
function py(e, t, n, i) {
  i = i || {};
  let s = (i.data = i.data || {}),
    o = (i.garbageCollect = i.garbageCollect || []);
  i.font !== t &&
    ((s = i.data = {}), (o = i.garbageCollect = []), (i.font = t)),
    e.save(),
    (e.font = t);
  let r = 0;
  const a = n.length;
  let l, c, f, u, d;
  for (l = 0; l < a; l++)
    if (((u = n[l]), u != null && !_t(u))) r = go(e, s, o, r, u);
    else if (_t(u))
      for (c = 0, f = u.length; c < f; c++)
        (d = u[c]), d != null && !_t(d) && (r = go(e, s, o, r, d));
  e.restore();
  const h = o.length / 2;
  if (h > n.length) {
    for (l = 0; l < h; l++) delete s[o[l]];
    o.splice(0, h);
  }
  return r;
}
function yn(e, t, n) {
  const i = e.currentDevicePixelRatio,
    s = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function fc(e, t) {
  (t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore();
}
function Ir(e, t, n, i) {
  gd(e, t, n, i, null);
}
function gd(e, t, n, i, s) {
  let o, r, a, l, c, f, u, d;
  const h = t.pointStyle,
    g = t.rotation,
    m = t.radius;
  let b = (g || 0) * W0;
  if (
    h &&
    typeof h == "object" &&
    ((o = h.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, i),
      e.rotate(b),
      e.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
      e.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch ((e.beginPath(), h)) {
      default:
        s ? e.ellipse(n, i, s / 2, m, 0, 0, pe) : e.arc(n, i, m, 0, pe),
          e.closePath();
        break;
      case "triangle":
        (f = s ? s / 2 : m),
          e.moveTo(n + Math.sin(b) * f, i - Math.cos(b) * m),
          (b += nc),
          e.lineTo(n + Math.sin(b) * f, i - Math.cos(b) * m),
          (b += nc),
          e.lineTo(n + Math.sin(b) * f, i - Math.cos(b) * m),
          e.closePath();
        break;
      case "rectRounded":
        (c = m * 0.516),
          (l = m - c),
          (r = Math.cos(b + bn) * l),
          (u = Math.cos(b + bn) * (s ? s / 2 - c : l)),
          (a = Math.sin(b + bn) * l),
          (d = Math.sin(b + bn) * (s ? s / 2 - c : l)),
          e.arc(n - u, i - a, c, b - At, b - Jt),
          e.arc(n + d, i - r, c, b - Jt, b),
          e.arc(n + u, i + a, c, b, b + Jt),
          e.arc(n - d, i + r, c, b + Jt, b + At),
          e.closePath();
        break;
      case "rect":
        if (!g) {
          (l = Math.SQRT1_2 * m),
            (f = s ? s / 2 : l),
            e.rect(n - f, i - l, 2 * f, 2 * l);
          break;
        }
        b += bn;
      case "rectRot":
        (u = Math.cos(b) * (s ? s / 2 : m)),
          (r = Math.cos(b) * m),
          (a = Math.sin(b) * m),
          (d = Math.sin(b) * (s ? s / 2 : m)),
          e.moveTo(n - u, i - a),
          e.lineTo(n + d, i - r),
          e.lineTo(n + u, i + a),
          e.lineTo(n - d, i + r),
          e.closePath();
        break;
      case "crossRot":
        b += bn;
      case "cross":
        (u = Math.cos(b) * (s ? s / 2 : m)),
          (r = Math.cos(b) * m),
          (a = Math.sin(b) * m),
          (d = Math.sin(b) * (s ? s / 2 : m)),
          e.moveTo(n - u, i - a),
          e.lineTo(n + u, i + a),
          e.moveTo(n + d, i - r),
          e.lineTo(n - d, i + r);
        break;
      case "star":
        (u = Math.cos(b) * (s ? s / 2 : m)),
          (r = Math.cos(b) * m),
          (a = Math.sin(b) * m),
          (d = Math.sin(b) * (s ? s / 2 : m)),
          e.moveTo(n - u, i - a),
          e.lineTo(n + u, i + a),
          e.moveTo(n + d, i - r),
          e.lineTo(n - d, i + r),
          (b += bn),
          (u = Math.cos(b) * (s ? s / 2 : m)),
          (r = Math.cos(b) * m),
          (a = Math.sin(b) * m),
          (d = Math.sin(b) * (s ? s / 2 : m)),
          e.moveTo(n - u, i - a),
          e.lineTo(n + u, i + a),
          e.moveTo(n + d, i - r),
          e.lineTo(n - d, i + r);
        break;
      case "line":
        (r = s ? s / 2 : Math.cos(b) * m),
          (a = Math.sin(b) * m),
          e.moveTo(n - r, i - a),
          e.lineTo(n + r, i + a);
        break;
      case "dash":
        e.moveTo(n, i),
          e.lineTo(n + Math.cos(b) * (s ? s / 2 : m), i + Math.sin(b) * m);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function Ne(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  );
}
function Ia(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function za(e) {
  e.restore();
}
function gy(e, t, n, i, s) {
  if (!t) return e.lineTo(n.x, n.y);
  if (s === "middle") {
    const o = (t.x + n.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, n.y);
  } else (s === "after") != !!i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function my(e, t, n, i) {
  if (!t) return e.lineTo(n.x, n.y);
  e.bezierCurveTo(
    i ? t.cp1x : t.cp2x,
    i ? t.cp1y : t.cp2y,
    i ? n.cp2x : n.cp1x,
    i ? n.cp2y : n.cp1y,
    n.x,
    n.y
  );
}
function by(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    xt(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function yy(e, t, n, i, s) {
  if (s.strikethrough || s.underline) {
    const o = e.measureText(i),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = n - o.actualBoundingBoxAscent,
      c = n + o.actualBoundingBoxDescent,
      f = s.strikethrough ? (l + c) / 2 : c;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = s.decorationWidth || 2),
      e.moveTo(r, f),
      e.lineTo(a, f),
      e.stroke();
  }
}
function xy(e, t) {
  const n = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n);
}
function Nn(e, t, n, i, s, o = {}) {
  const r = _t(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = s.string, by(e, o), l = 0; l < r.length; ++l)
    (c = r[l]),
      o.backdrop && xy(e, o.backdrop),
      a &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        xt(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(c, n, i, o.maxWidth)),
      e.fillText(c, n, i, o.maxWidth),
      yy(e, n, i, c, o),
      (i += Number(s.lineHeight));
  e.restore();
}
function mo(e, t) {
  const { x: n, y: i, w: s, h: o, radius: r } = t;
  e.arc(n + r.topLeft, i + r.topLeft, r.topLeft, -Jt, At, !0),
    e.lineTo(n, i + o - r.bottomLeft),
    e.arc(n + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, At, Jt, !0),
    e.lineTo(n + s - r.bottomRight, i + o),
    e.arc(
      n + s - r.bottomRight,
      i + o - r.bottomRight,
      r.bottomRight,
      Jt,
      0,
      !0
    ),
    e.lineTo(n + s, i + r.topRight),
    e.arc(n + s - r.topRight, i + r.topRight, r.topRight, 0, -Jt, !0),
    e.lineTo(n + r.topLeft, i);
}
const vy = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  _y = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function wy(e, t) {
  const n = ("" + e).match(vy);
  if (!n || n[1] === "normal") return t * 1.2;
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const ky = (e) => +e || 0;
function md(e, t) {
  const n = {},
    i = ct(t),
    s = i ? Object.keys(t) : t,
    o = ct(e) ? (i ? (r) => at(e[r], e[t[r]]) : (r) => e[r]) : () => e;
  for (const r of s) n[r] = ky(o(r));
  return n;
}
function Sy(e) {
  return md(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function ti(e) {
  return md(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function zt(e) {
  const t = Sy(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function Tt(e, t) {
  (e = e || {}), (t = t || kt.font);
  let n = at(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = at(e.style, t.style);
  i &&
    !("" + i).match(_y) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const s = {
    family: at(e.family, t.family),
    lineHeight: wy(at(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: at(e.weight, t.weight),
    string: "",
  };
  return (s.string = hy(s)), s;
}
function Bs(e, t, n, i) {
  let s = !0,
    o,
    r,
    a;
  for (o = 0, r = e.length; o < r; ++o)
    if (
      ((a = e[o]),
      a !== void 0 &&
        (t !== void 0 && typeof a == "function" && ((a = a(t)), (s = !1)),
        n !== void 0 && _t(a) && ((a = a[n % a.length]), (s = !1)),
        a !== void 0))
    )
      return i && !s && (i.cacheable = !1), a;
}
function Cy(e, t, n) {
  const { min: i, max: s } = e,
    o = I0(t, (s - i) / 2),
    r = (a, l) => (n && a === 0 ? 0 : a + l);
  return { min: r(i, -Math.abs(o)), max: r(s, o) };
}
function pn(e, t) {
  return Object.assign(Object.create(e), t);
}
function Va(e, t = [""], n, i, s = () => e[0]) {
  const o = n || e;
  typeof i > "u" && (i = vd("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: i,
    _getTarget: s,
    override: (a) => Va([a, ...e], t, o, i),
  };
  return new Proxy(r, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0;
    },
    get(a, l) {
      return yd(a, l, () => Ry(l, t, e, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(a, l) {
      return dc(a).includes(l);
    },
    ownKeys(a) {
      return dc(a);
    },
    set(a, l, c) {
      const f = a._storage || (a._storage = s());
      return (a[l] = f[l] = c), delete a._keys, !0;
    },
  });
}
function ci(e, t, n, i) {
  const s = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: bd(e, i),
    setContext: (o) => ci(e, o, n, i),
    override: (o) => ci(e.override(o), t, n, i),
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    get(o, r, a) {
      return yd(o, r, () => Py(o, r, a));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(e, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(o, r) {
      return Reflect.has(e, r);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(o, r, a) {
      return (e[r] = a), delete o[r], !0;
    },
  });
}
function bd(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: i = t.indexable,
    _allKeys: s = t.allKeys,
  } = e;
  return {
    allKeys: s,
    scriptable: n,
    indexable: i,
    isScriptable: hn(n) ? n : () => n,
    isIndexable: hn(i) ? i : () => i,
  };
}
const My = (e, t) => (e ? e + Fa(t) : t),
  qa = (e, t) =>
    ct(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function yd(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
  const i = n();
  return (e[t] = i), i;
}
function Py(e, t, n) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: r } = e;
  let a = i[t];
  return (
    hn(a) && r.isScriptable(t) && (a = Ey(t, a, e, n)),
    _t(a) && a.length && (a = Ty(t, a, e, r.isIndexable)),
    qa(t, a) && (a = ci(a, s, o && o[t], r)),
    a
  );
}
function Ey(e, t, n, i) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = n;
  if (a.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + e
    );
  a.add(e);
  let l = t(o, r || i);
  return a.delete(e), qa(e, l) && (l = Ua(s._scopes, s, e, l)), l;
}
function Ty(e, t, n, i) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = n;
  if (typeof o.index < "u" && i(e)) return t[o.index % t.length];
  if (ct(t[0])) {
    const l = t,
      c = s._scopes.filter((f) => f !== l);
    t = [];
    for (const f of l) {
      const u = Ua(c, s, e, f);
      t.push(ci(u, o, r && r[e], a));
    }
  }
  return t;
}
function xd(e, t, n) {
  return hn(e) ? e(t, n) : e;
}
const Ay = (e, t) => (e === !0 ? t : typeof e == "string" ? uo(t, e) : void 0);
function Dy(e, t, n, i, s) {
  for (const o of t) {
    const r = Ay(n, o);
    if (r) {
      e.add(r);
      const a = xd(r._fallback, n, s);
      if (typeof a < "u" && a !== n && a !== i) return a;
    } else if (r === !1 && typeof i < "u" && n !== i) return null;
  }
  return !1;
}
function Ua(e, t, n, i) {
  const s = t._rootScopes,
    o = xd(t._fallback, n, i),
    r = [...e, ...s],
    a = new Set();
  a.add(i);
  let l = uc(a, r, n, o || n, i);
  return l === null ||
    (typeof o < "u" && o !== n && ((l = uc(a, r, o, l, i)), l === null))
    ? !1
    : Va(Array.from(a), [""], s, o, () => Fy(t, n, i));
}
function uc(e, t, n, i, s) {
  for (; n; ) n = Dy(e, t, n, i, s);
  return n;
}
function Fy(e, t, n) {
  const i = e._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return _t(s) && ct(n) ? n : s || {};
}
function Ry(e, t, n, i) {
  let s;
  for (const o of t)
    if (((s = vd(My(o, e), n)), typeof s < "u"))
      return qa(e, s) ? Ua(n, i, e, s) : s;
}
function vd(e, t) {
  for (const n of t) {
    if (!n) continue;
    const i = n[e];
    if (typeof i < "u") return i;
  }
}
function dc(e) {
  let t = e._keys;
  return t || (t = e._keys = Oy(e._scopes)), t;
}
function Oy(e) {
  const t = new Set();
  for (const n of e)
    for (const i of Object.keys(n).filter((s) => !s.startsWith("_"))) t.add(i);
  return Array.from(t);
}
const Ly = Number.EPSILON || 1e-14,
  fi = (e, t) => t < e.length && !e[t].skip && e[t],
  _d = (e) => (e === "x" ? "y" : "x");
function By(e, t, n, i) {
  const s = e.skip ? t : e,
    o = t,
    r = n.skip ? t : n,
    a = Br(o, s),
    l = Br(r, o);
  let c = a / (a + l),
    f = l / (a + l);
  (c = isNaN(c) ? 0 : c), (f = isNaN(f) ? 0 : f);
  const u = i * c,
    d = i * f;
  return {
    previous: { x: o.x - u * (r.x - s.x), y: o.y - u * (r.y - s.y) },
    next: { x: o.x + d * (r.x - s.x), y: o.y + d * (r.y - s.y) },
  };
}
function Ny(e, t, n) {
  const i = e.length;
  let s,
    o,
    r,
    a,
    l,
    c = fi(e, 0);
  for (let f = 0; f < i - 1; ++f)
    if (((l = c), (c = fi(e, f + 1)), !(!l || !c))) {
      if (Wi(t[f], 0, Ly)) {
        n[f] = n[f + 1] = 0;
        continue;
      }
      (s = n[f] / t[f]),
        (o = n[f + 1] / t[f]),
        (a = Math.pow(s, 2) + Math.pow(o, 2)),
        !(a <= 9) &&
          ((r = 3 / Math.sqrt(a)),
          (n[f] = s * r * t[f]),
          (n[f + 1] = o * r * t[f]));
    }
}
function Iy(e, t, n = "x") {
  const i = _d(n),
    s = e.length;
  let o,
    r,
    a,
    l = fi(e, 0);
  for (let c = 0; c < s; ++c) {
    if (((r = a), (a = l), (l = fi(e, c + 1)), !a)) continue;
    const f = a[n],
      u = a[i];
    r &&
      ((o = (f - r[n]) / 3),
      (a[`cp1${n}`] = f - o),
      (a[`cp1${i}`] = u - o * t[c])),
      l &&
        ((o = (l[n] - f) / 3),
        (a[`cp2${n}`] = f + o),
        (a[`cp2${i}`] = u + o * t[c]));
  }
}
function zy(e, t = "x") {
  const n = _d(t),
    i = e.length,
    s = Array(i).fill(0),
    o = Array(i);
  let r,
    a,
    l,
    c = fi(e, 0);
  for (r = 0; r < i; ++r)
    if (((a = l), (l = c), (c = fi(e, r + 1)), !!l)) {
      if (c) {
        const f = c[t] - l[t];
        s[r] = f !== 0 ? (c[n] - l[n]) / f : 0;
      }
      o[r] = a
        ? c
          ? li(s[r - 1]) !== li(s[r])
            ? 0
            : (s[r - 1] + s[r]) / 2
          : s[r - 1]
        : s[r];
    }
  Ny(e, s, o), Iy(e, o, t);
}
function Ns(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function Vy(e, t) {
  let n,
    i,
    s,
    o,
    r,
    a = Ne(e[0], t);
  for (n = 0, i = e.length; n < i; ++n)
    (r = o),
      (o = a),
      (a = n < i - 1 && Ne(e[n + 1], t)),
      o &&
        ((s = e[n]),
        r &&
          ((s.cp1x = Ns(s.cp1x, t.left, t.right)),
          (s.cp1y = Ns(s.cp1y, t.top, t.bottom))),
        a &&
          ((s.cp2x = Ns(s.cp2x, t.left, t.right)),
          (s.cp2y = Ns(s.cp2y, t.top, t.bottom))));
}
function qy(e, t, n, i, s) {
  let o, r, a, l;
  if (
    (t.spanGaps && (e = e.filter((c) => !c.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    zy(e, s);
  else {
    let c = i ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      (a = e[o]),
        (l = By(c, a, e[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  t.capBezierPoints && Vy(e, n);
}
function wd() {
  return typeof window < "u" && typeof document < "u";
}
function Ha(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function bo(e, t, n) {
  let i;
  return (
    typeof e == "string"
      ? ((i = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (i = (i / 100) * t.parentNode[n]))
      : (i = e),
    i
  );
}
const Ho = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Uy(e, t) {
  return Ho(e).getPropertyValue(t);
}
const Hy = ["top", "right", "bottom", "left"];
function Dn(e, t, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let s = 0; s < 4; s++) {
    const o = Hy[s];
    i[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const jy = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Wy(e, t) {
  const n = e.touches,
    i = n && n.length ? n[0] : e,
    { offsetX: s, offsetY: o } = i;
  let r = !1,
    a,
    l;
  if (jy(s, o, e.target)) (a = s), (l = o);
  else {
    const c = t.getBoundingClientRect();
    (a = i.clientX - c.left), (l = i.clientY - c.top), (r = !0);
  }
  return { x: a, y: l, box: r };
}
function _n(e, t) {
  if ("native" in e) return e;
  const { canvas: n, currentDevicePixelRatio: i } = t,
    s = Ho(n),
    o = s.boxSizing === "border-box",
    r = Dn(s, "padding"),
    a = Dn(s, "border", "width"),
    { x: l, y: c, box: f } = Wy(e, n),
    u = r.left + (f && a.left),
    d = r.top + (f && a.top);
  let { width: h, height: g } = t;
  return (
    o && ((h -= r.width + a.width), (g -= r.height + a.height)),
    {
      x: Math.round((((l - u) / h) * n.width) / i),
      y: Math.round((((c - d) / g) * n.height) / i),
    }
  );
}
function Yy(e, t, n) {
  let i, s;
  if (t === void 0 || n === void 0) {
    const o = Ha(e);
    if (!o) (t = e.clientWidth), (n = e.clientHeight);
    else {
      const r = o.getBoundingClientRect(),
        a = Ho(o),
        l = Dn(a, "border", "width"),
        c = Dn(a, "padding");
      (t = r.width - c.width - l.width),
        (n = r.height - c.height - l.height),
        (i = bo(a.maxWidth, o, "clientWidth")),
        (s = bo(a.maxHeight, o, "clientHeight"));
    }
  }
  return { width: t, height: n, maxWidth: i || po, maxHeight: s || po };
}
const Is = (e) => Math.round(e * 10) / 10;
function Ky(e, t, n, i) {
  const s = Ho(e),
    o = Dn(s, "margin"),
    r = bo(s.maxWidth, e, "clientWidth") || po,
    a = bo(s.maxHeight, e, "clientHeight") || po,
    l = Yy(e, t, n);
  let { width: c, height: f } = l;
  if (s.boxSizing === "content-box") {
    const d = Dn(s, "border", "width"),
      h = Dn(s, "padding");
    (c -= h.width + d.width), (f -= h.height + d.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (f = Math.max(0, i ? c / i : f - o.height)),
    (c = Is(Math.min(c, r, l.maxWidth))),
    (f = Is(Math.min(f, a, l.maxHeight))),
    c && !f && (f = Is(c / 2)),
    (t !== void 0 || n !== void 0) &&
      i &&
      l.height &&
      f > l.height &&
      ((f = l.height), (c = Is(Math.floor(f * i)))),
    { width: c, height: f }
  );
}
function hc(e, t, n) {
  const i = t || 1,
    s = Math.floor(e.height * i),
    o = Math.floor(e.width * i);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const r = e.canvas;
  return (
    r.style &&
      (n || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${e.height}px`), (r.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== i || r.height !== s || r.width !== o
      ? ((e.currentDevicePixelRatio = i),
        (r.height = s),
        (r.width = o),
        e.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const Xy = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return e;
})();
function pc(e, t) {
  const n = Uy(e, t),
    i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function wn(e, t, n, i) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
}
function Jy(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      i === "middle"
        ? n < 0.5
          ? e.y
          : t.y
        : i === "after"
        ? n < 1
          ? e.y
          : t.y
        : n > 0
        ? t.y
        : e.y,
  };
}
function Gy(e, t, n, i) {
  const s = { x: e.cp2x, y: e.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    r = wn(e, s, n),
    a = wn(s, o, n),
    l = wn(o, t, n),
    c = wn(r, a, n),
    f = wn(a, l, n);
  return wn(c, f, n);
}
const Qy = function (e, t) {
    return {
      x(n) {
        return e + e + t - n;
      },
      setWidth(n) {
        t = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, i) {
        return n - i;
      },
      leftForLtr(n, i) {
        return n - i;
      },
    };
  },
  Zy = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function ei(e, t, n) {
  return e ? Qy(t, n) : Zy();
}
function kd(e, t) {
  let n, i;
  (t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = i));
}
function Sd(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Cd(e) {
  return e === "angle"
    ? { between: fd, compare: J0, normalize: me }
    : { between: Di, compare: (t, n) => t - n, normalize: (t) => t };
}
function gc({ start: e, end: t, count: n, loop: i, style: s }) {
  return {
    start: e % n,
    end: t % n,
    loop: i && (t - e + 1) % n === 0,
    style: s,
  };
}
function $y(e, t, n) {
  const { property: i, start: s, end: o } = n,
    { between: r, normalize: a } = Cd(i),
    l = t.length;
  let { start: c, end: f, loop: u } = e,
    d,
    h;
  if (u) {
    for (c += l, f += l, d = 0, h = l; d < h && r(a(t[c % l][i]), s, o); ++d)
      c--, f--;
    (c %= l), (f %= l);
  }
  return f < c && (f += l), { start: c, end: f, loop: u, style: e.style };
}
function tx(e, t, n) {
  if (!n) return [e];
  const { property: i, start: s, end: o } = n,
    r = t.length,
    { compare: a, between: l, normalize: c } = Cd(i),
    { start: f, end: u, loop: d, style: h } = $y(e, t, n),
    g = [];
  let m = !1,
    b = null,
    x,
    y,
    S;
  const _ = () => l(s, S, x) && a(s, S) !== 0,
    k = () => a(o, x) === 0 || l(o, S, x),
    E = () => m || _(),
    P = () => !m || k();
  for (let C = f, T = f; C <= u; ++C)
    (y = t[C % r]),
      !y.skip &&
        ((x = c(y[i])),
        x !== S &&
          ((m = l(x, s, o)),
          b === null && E() && (b = a(x, s) === 0 ? C : T),
          b !== null &&
            P() &&
            (g.push(gc({ start: b, end: C, loop: d, count: r, style: h })),
            (b = null)),
          (T = C),
          (S = x)));
  return (
    b !== null && g.push(gc({ start: b, end: u, loop: d, count: r, style: h })),
    g
  );
}
function ex(e, t) {
  const n = [],
    i = e.segments;
  for (let s = 0; s < i.length; s++) {
    const o = tx(i[s], e.points, t);
    o.length && n.push(...o);
  }
  return n;
}
function nx(e, t, n, i) {
  let s = 0,
    o = t - 1;
  if (n && !i) for (; s < t && !e[s].skip; ) s++;
  for (; s < t && e[s].skip; ) s++;
  for (s %= t, n && (o += s); o > s && e[o % t].skip; ) o--;
  return (o %= t), { start: s, end: o };
}
function ix(e, t, n, i) {
  const s = e.length,
    o = [];
  let r = t,
    a = e[t],
    l;
  for (l = t + 1; l <= n; ++l) {
    const c = e[l % s];
    c.skip || c.stop
      ? a.skip ||
        ((i = !1),
        o.push({ start: t % s, end: (l - 1) % s, loop: i }),
        (t = r = c.stop ? l : null))
      : ((r = l), a.skip && (t = l)),
      (a = c);
  }
  return r !== null && o.push({ start: t % s, end: r % s, loop: i }), o;
}
function sx(e, t) {
  const n = e.points,
    i = e.options.spanGaps,
    s = n.length;
  if (!s) return [];
  const o = !!e._loop,
    { start: r, end: a } = nx(n, s, o, i);
  if (i === !0) return mc(e, [{ start: r, end: a, loop: o }], n, t);
  const l = a < r ? a + s : a,
    c = !!e._fullLoop && r === 0 && a === s - 1;
  return mc(e, ix(n, r, l, c), n, t);
}
function mc(e, t, n, i) {
  return !i || !i.setContext || !n ? t : ox(e, t, n, i);
}
function ox(e, t, n, i) {
  const s = e._chart.getContext(),
    o = bc(e.options),
    {
      _datasetIndex: r,
      options: { spanGaps: a },
    } = e,
    l = n.length,
    c = [];
  let f = o,
    u = t[0].start,
    d = u;
  function h(g, m, b, x) {
    const y = a ? -1 : 1;
    if (g !== m) {
      for (g += l; n[g % l].skip; ) g -= y;
      for (; n[m % l].skip; ) m += y;
      g % l !== m % l &&
        (c.push({ start: g % l, end: m % l, loop: b, style: x }),
        (f = x),
        (u = m % l));
    }
  }
  for (const g of t) {
    u = a ? u : g.start;
    let m = n[u % l],
      b;
    for (d = u + 1; d <= g.end; d++) {
      const x = n[d % l];
      (b = bc(
        i.setContext(
          pn(s, {
            type: "segment",
            p0: m,
            p1: x,
            p0DataIndex: (d - 1) % l,
            p1DataIndex: d % l,
            datasetIndex: r,
          })
        )
      )),
        rx(b, f) && h(u, d - 1, g.loop, f),
        (m = x),
        (f = b);
    }
    u < d - 1 && h(u, d - 1, g.loop, f);
  }
  return c;
}
function bc(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor,
  };
}
function rx(e, t) {
  if (!t) return !1;
  const n = [],
    i = function (s, o) {
      return Ba(o) ? (n.includes(o) || n.push(o), n.indexOf(o)) : o;
    };
  return JSON.stringify(e, i) !== JSON.stringify(t, i);
}
/*!
 * Chart.js v4.3.2
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class ax {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, n, i, s) {
    const o = n.listeners[s],
      r = n.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: n.initial,
        numSteps: r,
        currentStep: Math.min(i - n.start, r),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = dd.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length) return;
      const o = i.items;
      let r = o.length - 1,
        a = !1,
        l;
      for (; r >= 0; --r)
        (l = o[r]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((o[r] = o[o.length - 1]), o.pop());
      a && (s.draw(), this._notify(s, i, t, "progress")),
        o.length ||
          ((i.running = !1),
          this._notify(s, i, t, "complete"),
          (i.initial = !1)),
        (n += o.length);
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let i = n.get(t);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, i)),
      i
    );
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, s) => Math.max(i, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length) return;
    const i = n.items;
    let s = i.length - 1;
    for (; s >= 0; --s) i[s].cancel();
    (n.items = []), this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Fe = new ax();
const yc = "transparent",
  lx = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e;
    },
    color(e, t, n) {
      const i = lc(e || yc),
        s = i.valid && lc(t || yc);
      return s && s.valid ? s.mix(i, n).hexString() : t;
    },
    number(e, t, n) {
      return e + (t - e) * n;
    },
  };
class cx {
  constructor(t, n, i, s) {
    const o = n[i];
    s = Bs([t.to, s, o, t.from]);
    const r = Bs([t.from, o, s]);
    (this._active = !0),
      (this._fn = t.fn || lx[t.type || typeof r]),
      (this._easing = Yi[t.easing] || Yi.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = r),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = i - this._start,
        r = this._duration - o;
      (this._start = i),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = Bs([t.to, n, s, t.from])),
        (this._from = Bs([t.from, s, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const n = t - this._start,
      i = this._duration,
      s = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to;
    let l;
    if (((this._active = o !== a && (r || n < i)), !this._active)) {
      (this._target[s] = a), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[s] = o;
      return;
    }
    (l = (n / i) % 2),
      (l = r && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[s] = this._fn(o, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      t.push({ res: n, rej: i });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      i = this._promises || [];
    for (let s = 0; s < i.length; s++) i[s][n]();
  }
}
class Md {
  constructor(t, n) {
    (this._chart = t), (this._properties = new Map()), this.configure(n);
  }
  configure(t) {
    if (!ct(t)) return;
    const n = Object.keys(kt.animation),
      i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!ct(o)) return;
      const r = {};
      for (const a of n) r[a] = o[a];
      ((_t(o.properties) && o.properties) || [s]).forEach((a) => {
        (a === s || !i.has(a)) && i.set(a, r);
      });
    });
  }
  _animateOptions(t, n) {
    const i = n.options,
      s = ux(t, i);
    if (!s) return [];
    const o = this._createAnimations(s, i);
    return (
      i.$shared &&
        fx(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, n) {
    const i = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(n),
      a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, n));
        continue;
      }
      const f = n[c];
      let u = o[c];
      const d = i.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, f, a);
          continue;
        } else u.cancel();
      if (!d || !d.duration) {
        t[c] = f;
        continue;
      }
      (o[c] = u = new cx(d, t, c, f)), s.push(u);
    }
    return s;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const i = this._createAnimations(t, n);
    if (i.length) return Fe.add(this._chart, i), !0;
  }
}
function fx(e, t) {
  const n = [],
    i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = e[i[s]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function ux(e, t) {
  if (!t) return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function xc(e, t) {
  const n = (e && e.options) || {},
    i = n.reverse,
    s = n.min === void 0 ? t : 0,
    o = n.max === void 0 ? t : 0;
  return { start: i ? o : s, end: i ? s : o };
}
function dx(e, t, n) {
  if (n === !1) return !1;
  const i = xc(e, n),
    s = xc(t, n);
  return { top: s.end, right: i.end, bottom: s.start, left: i.start };
}
function hx(e) {
  let t, n, i, s;
  return (
    ct(e)
      ? ((t = e.top), (n = e.right), (i = e.bottom), (s = e.left))
      : (t = n = i = s = e),
    { top: t, right: n, bottom: i, left: s, disabled: e === !1 }
  );
}
function Pd(e, t) {
  const n = [],
    i = e._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s) n.push(i[s].index);
  return n;
}
function vc(e, t, n, i = {}) {
  const s = e.keys,
    o = i.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (((l = +s[r]), l === n)) {
        if (i.all) continue;
        break;
      }
      (c = e.values[l]), Ft(c) && (o || t === 0 || li(t) === li(c)) && (t += c);
    }
    return t;
  }
}
function px(e) {
  const t = Object.keys(e),
    n = new Array(t.length);
  let i, s, o;
  for (i = 0, s = t.length; i < s; ++i) (o = t[i]), (n[i] = { x: o, y: e[o] });
  return n;
}
function _c(e, t) {
  const n = e && e.options.stacked;
  return n || (n === void 0 && t.stack !== void 0);
}
function gx(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function mx(e) {
  const { min: t, max: n, minDefined: i, maxDefined: s } = e.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? n : Number.POSITIVE_INFINITY,
  };
}
function bx(e, t, n) {
  const i = e[t] || (e[t] = {});
  return i[n] || (i[n] = {});
}
function wc(e, t, n, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = e[s.index];
    if ((n && o > 0) || (!n && o < 0)) return s.index;
  }
  return null;
}
function kc(e, t) {
  const { chart: n, _cachedMeta: i } = e,
    s = n._stacks || (n._stacks = {}),
    { iScale: o, vScale: r, index: a } = i,
    l = o.axis,
    c = r.axis,
    f = gx(o, r, i),
    u = t.length;
  let d;
  for (let h = 0; h < u; ++h) {
    const g = t[h],
      { [l]: m, [c]: b } = g,
      x = g._stacks || (g._stacks = {});
    (d = x[c] = bx(s, f, m)),
      (d[a] = b),
      (d._top = wc(d, r, !0, i.type)),
      (d._bottom = wc(d, r, !1, i.type));
    const y = d._visualValues || (d._visualValues = {});
    y[a] = b;
  }
}
function ar(e, t) {
  const n = e.scales;
  return Object.keys(n)
    .filter((i) => n[i].axis === t)
    .shift();
}
function yx(e, t) {
  return pn(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function xx(e, t, n) {
  return pn(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  });
}
function wi(e, t) {
  const n = e.controller.index,
    i = e.vScale && e.vScale.axis;
  if (i) {
    t = t || e._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][n] === void 0) return;
      delete o[i][n],
        o[i]._visualValues !== void 0 &&
          o[i]._visualValues[n] !== void 0 &&
          delete o[i]._visualValues[n];
    }
  }
}
const lr = (e) => e === "reset" || e === "none",
  Sc = (e, t) => (t ? e : Object.assign({}, e)),
  vx = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: Pd(n, !0), values: null };
class Xi {
  constructor(t, n) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = _c(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && wi(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      s = (u, d, h, g) => (u === "x" ? d : u === "r" ? g : h),
      o = (n.xAxisID = at(i.xAxisID, ar(t, "x"))),
      r = (n.yAxisID = at(i.yAxisID, ar(t, "y"))),
      a = (n.rAxisID = at(i.rAxisID, ar(t, "r"))),
      l = n.indexAxis,
      c = (n.iAxisID = s(l, o, r, a)),
      f = (n.vAxisID = s(l, r, o, a));
    (n.xScale = this.getScaleForId(o)),
      (n.yScale = this.getScaleForId(r)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(c)),
      (n.vScale = this.getScaleForId(f));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && oc(this._data, this), t._stacked && wi(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      i = this._data;
    if (ct(n)) this._data = px(n);
    else if (i !== n) {
      if (i) {
        oc(i, this);
        const s = this._cachedMeta;
        wi(s), (s._parsed = []);
      }
      n && Object.isExtensible(n) && $0(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = n._stacked;
    (n._stacked = _c(n.vScale, n)),
      n.stack !== i.stack && ((s = !0), wi(n), (n.stack = i.stack)),
      this._resyncElements(t),
      (s || o !== n._stacked) && kc(this, n._parsed);
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), n, !0);
    (this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: s } = this,
      { iScale: o, _stacked: r } = i,
      a = o.axis;
    let l = t === 0 && n === s.length ? !0 : i._sorted,
      c = t > 0 && i._parsed[t - 1],
      f,
      u,
      d;
    if (this._parsing === !1) (i._parsed = s), (i._sorted = !0), (d = s);
    else {
      _t(s[t])
        ? (d = this.parseArrayData(i, s, t, n))
        : ct(s[t])
        ? (d = this.parseObjectData(i, s, t, n))
        : (d = this.parsePrimitiveData(i, s, t, n));
      const h = () => u[a] === null || (c && u[a] < c[a]);
      for (f = 0; f < n; ++f)
        (i._parsed[f + t] = u = d[f]), l && (h() && (l = !1), (c = u));
      i._sorted = l;
    }
    r && kc(this, d);
  }
  parsePrimitiveData(t, n, i, s) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      l = r.axis,
      c = o.getLabels(),
      f = o === r,
      u = new Array(s);
    let d, h, g;
    for (d = 0, h = s; d < h; ++d)
      (g = d + i),
        (u[d] = { [a]: f || o.parse(c[g], g), [l]: r.parse(n[g], g) });
    return u;
  }
  parseArrayData(t, n, i, s) {
    const { xScale: o, yScale: r } = t,
      a = new Array(s);
    let l, c, f, u;
    for (l = 0, c = s; l < c; ++l)
      (f = l + i),
        (u = n[f]),
        (a[l] = { x: o.parse(u[0], f), y: r.parse(u[1], f) });
    return a;
  }
  parseObjectData(t, n, i, s) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(s);
    let f, u, d, h;
    for (f = 0, u = s; f < u; ++f)
      (d = f + i),
        (h = n[d]),
        (c[f] = { x: o.parse(uo(h, a), d), y: r.parse(uo(h, l), d) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, i) {
    const s = this.chart,
      o = this._cachedMeta,
      r = n[t.axis],
      a = { keys: Pd(s, !0), values: n._stacks[t.axis]._visualValues };
    return vc(a, r, o.index, { mode: i });
  }
  updateRangeFromParsed(t, n, i, s) {
    const o = i[n.axis];
    let r = o === null ? NaN : o;
    const a = s && i._stacks[n.axis];
    s && a && ((s.values = a), (r = vc(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, n) {
    const i = this._cachedMeta,
      s = i._parsed,
      o = i._sorted && t === i.iScale,
      r = s.length,
      a = this._getOtherScale(t),
      l = vx(n, i, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: f, max: u } = mx(a);
    let d, h;
    function g() {
      h = s[d];
      const m = h[a.axis];
      return !Ft(h[t.axis]) || f > m || u < m;
    }
    for (
      d = 0;
      d < r && !(!g() && (this.updateRangeFromParsed(c, t, h, l), o));
      ++d
    );
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!g()) {
          this.updateRangeFromParsed(c, t, h, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      i = [];
    let s, o, r;
    for (s = 0, o = n.length; s < o; ++s)
      (r = n[s][t.axis]), Ft(r) && i.push(r);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = n.iScale,
      s = n.vScale,
      o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : "",
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"),
      (n._clip = hx(
        at(this.options.clip, dx(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      s = i.data || [],
      o = n.chartArea,
      r = [],
      a = this._drawStart || 0,
      l = this._drawCount || s.length - a,
      c = this.options.drawActiveElementsOnTop;
    let f;
    for (i.dataset && i.dataset.draw(t, o, a, l), f = a; f < a + l; ++f) {
      const u = s[f];
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
    }
    for (f = 0; f < r.length; ++f) r[f].draw(t, o);
  }
  getStyle(t, n) {
    const i = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, n, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      (o = r.$context || (r.$context = xx(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o =
        this.$context ||
        (this.$context = yx(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!n), (o.mode = i), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", i) {
    const s = n === "active",
      o = this._cachedDataOpts,
      r = t + "-" + n,
      a = o[r],
      l = this.enableOptionSharing && ho(i);
    if (a) return Sc(a, l);
    const c = this.chart.config,
      f = c.datasetElementScopeKeys(this._type, t),
      u = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      d = c.getOptionScopes(this.getDataset(), f),
      h = Object.keys(kt.elements[t]),
      g = () => this.getContext(i, s, n),
      m = c.resolveNamedOptions(d, h, g, u);
    return m.$shared && ((m.$shared = l), (o[r] = Object.freeze(Sc(m, l)))), m;
  }
  _resolveAnimations(t, n, i) {
    const s = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${n}`,
      a = o[r];
    if (a) return a;
    let l;
    if (s.options.animation !== !1) {
      const f = this.chart.config,
        u = f.datasetAnimationScopeKeys(this._type, n),
        d = f.getOptionScopes(this.getDataset(), u);
      l = f.createResolver(d, this.getContext(t, i, n));
    }
    const c = new Md(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, n) {
    return !n || lr(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n),
      s = this._sharedOptions,
      o = this.getSharedOptions(i),
      r = this.includeOptions(n, o) || o !== s;
    return (
      this.updateSharedOptions(o, n, i), { sharedOptions: o, includeOptions: r }
    );
  }
  updateElement(t, n, i, s) {
    lr(s) ? Object.assign(t, i) : this._resolveAnimations(n, s).update(t, i);
  }
  updateSharedOptions(t, n, i) {
    t && !lr(n) && this._resolveAnimations(void 0, n).update(t, i);
  }
  _setStyle(t, n, i, s) {
    t.active = s;
    const o = this.getStyle(n, s);
    this._resolveAnimations(n, i, s).update(t, {
      options: (!s && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data,
      i = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const s = i.length,
      o = n.length,
      r = Math.min(o, s);
    r && this.parse(0, r),
      o > s
        ? this._insertElements(s, o - s, t)
        : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, n, i = !0) {
    const s = this._cachedMeta,
      o = s.data,
      r = t + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= r; a--) c[a] = c[a - n];
    };
    for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType();
    this._parsing && l(s._parsed),
      this.parse(t, n),
      i && this.updateElements(o, t, n, "reset");
  }
  updateElements(t, n, i, s) {}
  _removeElements(t, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, n);
      i._stacked && wi(i, s);
    }
    i.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [n, i, s] = t;
      this[n](i, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n]);
    const i = arguments.length - 2;
    i && this._sync(["_insertElements", t, i]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
$(Xi, "defaults", {}),
  $(Xi, "datasetElementType", null),
  $(Xi, "dataElementType", null);
class Js extends Xi {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const n = this._cachedMeta,
      { dataset: i, data: s = [], _dataset: o } = n,
      r = this.chart._animationsDisabled;
    let { start: a, count: l } = iy(n, s, r);
    (this._drawStart = a),
      (this._drawCount = l),
      sy(n) && ((a = 0), (l = s.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!o._decimated),
      (i.points = s.slice(
        Math.max(this._drawStart - 1, 0),
        this._drawStart + this._drawCount
      ));
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !r, options: c }, t),
      this.updateElements(s, a, l, t);
  }
  updateElements(t, n, i, s) {
    const o = s === "reset",
      { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: f, includeOptions: u } = this._getSharedOptions(n, s),
      d = r.axis,
      h = a.axis,
      { spanGaps: g, segment: m } = this.options,
      b = as(g) ? g : Number.POSITIVE_INFINITY,
      x = this.chart._animationsDisabled || o || s === "none",
      y = n + i,
      S = t.length;
    let _ = n > 0 && this.getParsed(n - 1);
    for (let k = 0; k < S; ++k) {
      const E = t[k],
        P = x ? E : {};
      if (k < n || k >= y) {
        P.skip = !0;
        continue;
      }
      const C = this.getParsed(k),
        T = xt(C[h]),
        R = (P[d] = r.getPixelForValue(C[d], k)),
        N = (P[h] =
          o || T
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, C, l) : C[h], k));
      (P.skip = isNaN(R) || isNaN(N) || T),
        (P.stop = k > 0 && Math.abs(C[d] - _[d]) > b),
        m && ((P.parsed = C), (P.raw = c.data[k])),
        u &&
          (P.options =
            f || this.resolveDataElementOptions(k, E.active ? "active" : s)),
        x || this.updateElement(E, k, P, s),
        (_ = C);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.dataset,
      i = (n.options && n.options.borderWidth) || 0,
      s = t.data || [];
    if (!s.length) return i;
    const o = s[0].size(this.resolveDataElementOptions(0)),
      r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(i, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
$(Js, "id", "line"),
  $(Js, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  $(Js, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
function xn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class ja {
  constructor(t) {
    $(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(ja.prototype, t);
  }
  init() {}
  formats() {
    return xn();
  }
  parse() {
    return xn();
  }
  format() {
    return xn();
  }
  add() {
    return xn();
  }
  diff() {
    return xn();
  }
  startOf() {
    return xn();
  }
  endOf() {
    return xn();
  }
}
var _x = { _date: ja };
function wx(e, t, n, i) {
  const { controller: s, data: o, _sorted: r } = e,
    a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Q0 : Mn;
    if (i) {
      if (s._sharedOptions) {
        const c = o[0],
          f = typeof c.getRange == "function" && c.getRange(t);
        if (f) {
          const u = l(o, t, n - f),
            d = l(o, t, n + f);
          return { lo: u.lo, hi: d.hi };
        }
      }
    } else return l(o, t, n);
  }
  return { lo: 0, hi: o.length - 1 };
}
function vs(e, t, n, i, s) {
  const o = e.getSortedVisibleDatasetMetas(),
    r = n[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: f } = o[a],
      { lo: u, hi: d } = wx(o[a], t, r, s);
    for (let h = u; h <= d; ++h) {
      const g = f[h];
      g.skip || i(g, c, h);
    }
  }
}
function kx(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1;
  return function (i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0,
      r = n ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function cr(e, t, n, i, s) {
  const o = [];
  return (
    (!s && !e.isPointInArea(t)) ||
      vs(
        e,
        n,
        t,
        function (a, l, c) {
          (!s && !Ne(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, i) &&
              o.push({ element: a, datasetIndex: l, index: c }));
        },
        !0
      ),
    o
  );
}
function Sx(e, t, n, i) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: f } = r.getProps(
        ["startAngle", "endAngle"],
        i
      ),
      { angle: u } = X0(r, { x: t.x, y: t.y });
    fd(u, c, f) && s.push({ element: r, datasetIndex: a, index: l });
  }
  return vs(e, n, t, o), s;
}
function Cx(e, t, n, i, s, o) {
  let r = [];
  const a = kx(n);
  let l = Number.POSITIVE_INFINITY;
  function c(f, u, d) {
    const h = f.inRange(t.x, t.y, s);
    if (i && !h) return;
    const g = f.getCenterPoint(s);
    if (!(!!o || e.isPointInArea(g)) && !h) return;
    const b = a(t, g);
    b < l
      ? ((r = [{ element: f, datasetIndex: u, index: d }]), (l = b))
      : b === l && r.push({ element: f, datasetIndex: u, index: d });
  }
  return vs(e, n, t, c), r;
}
function fr(e, t, n, i, s, o) {
  return !o && !e.isPointInArea(t)
    ? []
    : n === "r" && !i
    ? Sx(e, t, n, s)
    : Cx(e, t, n, i, s, o);
}
function Cc(e, t, n, i, s) {
  const o = [],
    r = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    vs(e, n, t, (l, c, f) => {
      l[r](t[n], s) &&
        (o.push({ element: l, datasetIndex: c, index: f }),
        (a = a || l.inRange(t.x, t.y, s)));
    }),
    i && !a ? [] : o
  );
}
var Mx = {
  evaluateInteractionItems: vs,
  modes: {
    index(e, t, n, i) {
      const s = _n(t, e),
        o = n.axis || "x",
        r = n.includeInvisible || !1,
        a = n.intersect ? cr(e, s, o, i, r) : fr(e, s, o, !1, i, r),
        l = [];
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
            const f = a[0].index,
              u = c.data[f];
            u &&
              !u.skip &&
              l.push({ element: u, datasetIndex: c.index, index: f });
          }),
          l)
        : [];
    },
    dataset(e, t, n, i) {
      const s = _n(t, e),
        o = n.axis || "xy",
        r = n.includeInvisible || !1;
      let a = n.intersect ? cr(e, s, o, i, r) : fr(e, s, o, !1, i, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = e.getDatasetMeta(l).data;
        a = [];
        for (let f = 0; f < c.length; ++f)
          a.push({ element: c[f], datasetIndex: l, index: f });
      }
      return a;
    },
    point(e, t, n, i) {
      const s = _n(t, e),
        o = n.axis || "xy",
        r = n.includeInvisible || !1;
      return cr(e, s, o, i, r);
    },
    nearest(e, t, n, i) {
      const s = _n(t, e),
        o = n.axis || "xy",
        r = n.includeInvisible || !1;
      return fr(e, s, o, n.intersect, i, r);
    },
    x(e, t, n, i) {
      const s = _n(t, e);
      return Cc(e, s, "x", n.intersect, i);
    },
    y(e, t, n, i) {
      const s = _n(t, e);
      return Cc(e, s, "y", n.intersect, i);
    },
  },
};
const Ed = ["left", "top", "right", "bottom"];
function ki(e, t) {
  return e.filter((n) => n.pos === t);
}
function Mc(e, t) {
  return e.filter((n) => Ed.indexOf(n.pos) === -1 && n.box.axis === t);
}
function Si(e, t) {
  return e.sort((n, i) => {
    const s = t ? i : n,
      o = t ? n : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Px(e) {
  const t = [];
  let n, i, s, o, r, a;
  for (n = 0, i = (e || []).length; n < i; ++n)
    (s = e[n]),
      ({
        position: o,
        options: { stack: r, stackWeight: a = 1 },
      } = s),
      t.push({
        index: n,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: r && o + r,
        stackWeight: a,
      });
  return t;
}
function Ex(e) {
  const t = {};
  for (const n of e) {
    const { stack: i, pos: s, stackWeight: o } = n;
    if (!i || !Ed.includes(s)) continue;
    const r = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    r.count++, (r.weight += o);
  }
  return t;
}
function Tx(e, t) {
  const n = Ex(e),
    { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box,
      c = n[a.stack],
      f = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = f ? f * i : l && t.availableWidth), (a.height = s))
      : ((a.width = i), (a.height = f ? f * s : l && t.availableHeight));
  }
  return n;
}
function Ax(e) {
  const t = Px(e),
    n = Si(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    i = Si(ki(t, "left"), !0),
    s = Si(ki(t, "right")),
    o = Si(ki(t, "top"), !0),
    r = Si(ki(t, "bottom")),
    a = Mc(t, "x"),
    l = Mc(t, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: ki(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(r).concat(a),
  };
}
function Pc(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i]);
}
function Td(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function Dx(e, t, n, i) {
  const { pos: s, box: o } = n,
    r = e.maxPadding;
  if (!ct(s)) {
    n.size && (e[s] -= n.size);
    const u = i[n.stack] || { size: 0, count: 1 };
    (u.size = Math.max(u.size, n.horizontal ? o.height : o.width)),
      (n.size = u.size / u.count),
      (e[s] += n.size);
  }
  o.getPadding && Td(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Pc(r, e, "left", "right")),
    l = Math.max(0, t.outerHeight - Pc(r, e, "top", "bottom")),
    c = a !== e.w,
    f = l !== e.h;
  return (
    (e.w = a),
    (e.h = l),
    n.horizontal ? { same: c, other: f } : { same: f, other: c }
  );
}
function Fx(e) {
  const t = e.maxPadding;
  function n(i) {
    const s = Math.max(t[i] - e[i], 0);
    return (e[i] += s), s;
  }
  (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
}
function Rx(e, t) {
  const n = t.maxPadding;
  function i(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((r) => {
        o[r] = Math.max(t[r], n[r]);
      }),
      o
    );
  }
  return i(e ? ["left", "right"] : ["top", "bottom"]);
}
function Fi(e, t, n, i) {
  const s = [];
  let o, r, a, l, c, f;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    (a = e[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, Rx(a.horizontal, t));
    const { same: u, other: d } = Dx(t, n, a, i);
    (c |= u && s.length), (f = f || d), l.fullSize || s.push(a);
  }
  return (c && Fi(s, t, n, i)) || f;
}
function zs(e, t, n, i, s) {
  (e.top = n),
    (e.left = t),
    (e.right = t + i),
    (e.bottom = n + s),
    (e.width = i),
    (e.height = s);
}
function Ec(e, t, n, i) {
  const s = n.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box,
      c = i[a.stack] || { count: 1, placed: 0, weight: 1 },
      f = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * f,
        d = c.size || l.height;
      ho(c.start) && (r = c.start),
        l.fullSize
          ? zs(l, s.left, r, n.outerWidth - s.right - s.left, d)
          : zs(l, t.left + c.placed, r, u, d),
        (c.start = r),
        (c.placed += u),
        (r = l.bottom);
    } else {
      const u = t.h * f,
        d = c.size || l.width;
      ho(c.start) && (o = c.start),
        l.fullSize
          ? zs(l, o, s.top, d, n.outerHeight - s.bottom - s.top)
          : zs(l, o, t.top + c.placed, d, u),
        (c.start = o),
        (c.placed += u),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = r);
}
var de = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
  },
  update(e, t, n, i) {
    if (!e) return;
    const s = zt(e.options.layout.padding),
      o = Math.max(t - s.width, 0),
      r = Math.max(n - s.height, 0),
      a = Ax(e.boxes),
      l = a.vertical,
      c = a.horizontal;
    dt(e.boxes, (m) => {
      typeof m.beforeLayout == "function" && m.beforeLayout();
    });
    const f =
        l.reduce(
          (m, b) => (b.box.options && b.box.options.display === !1 ? m : m + 1),
          0
        ) || 1,
      u = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: s,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / f,
        hBoxMaxHeight: r / 2,
      }),
      d = Object.assign({}, s);
    Td(d, zt(i));
    const h = Object.assign(
        { maxPadding: d, w: o, h: r, x: s.left, y: s.top },
        s
      ),
      g = Tx(l.concat(c), u);
    Fi(a.fullSize, h, u, g),
      Fi(l, h, u, g),
      Fi(c, h, u, g) && Fi(l, h, u, g),
      Fx(h),
      Ec(a.leftAndTop, h, u, g),
      (h.x += h.w),
      (h.y += h.h),
      Ec(a.rightAndBottom, h, u, g),
      (e.chartArea = {
        left: h.left,
        top: h.top,
        right: h.left + h.w,
        bottom: h.top + h.h,
        height: h.h,
        width: h.w,
      }),
      dt(a.chartArea, (m) => {
        const b = m.box;
        Object.assign(b, e.chartArea),
          b.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Ad {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, i) {}
  removeEventListener(t, n, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, i, s) {
    return (
      (n = Math.max(0, n || t.width)),
      (i = i || t.height),
      { width: n, height: Math.max(0, s ? Math.floor(n / s) : i) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Ox extends Ad {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Gs = "$chartjs",
  Lx = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Tc = (e) => e === null || e === "";
function Bx(e, t) {
  const n = e.style,
    i = e.getAttribute("height"),
    s = e.getAttribute("width");
  if (
    ((e[Gs] = {
      initial: {
        height: i,
        width: s,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    Tc(s))
  ) {
    const o = pc(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Tc(i))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const o = pc(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Dd = Xy ? { passive: !0 } : !1;
function Nx(e, t, n) {
  e.addEventListener(t, n, Dd);
}
function Ix(e, t, n) {
  e.canvas.removeEventListener(t, n, Dd);
}
function zx(e, t) {
  const n = Lx[e.type] || e.type,
    { x: i, y: s } = _n(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null,
  };
}
function yo(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0;
}
function Vx(e, t, n) {
  const i = e.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || yo(a.addedNodes, i)), (r = r && !yo(a.removedNodes, i));
      r && n();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function qx(e, t, n) {
  const i = e.canvas,
    s = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || yo(a.removedNodes, i)), (r = r && !yo(a.addedNodes, i));
      r && n();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const ls = new Map();
let Ac = 0;
function Fd() {
  const e = window.devicePixelRatio;
  e !== Ac &&
    ((Ac = e),
    ls.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t();
    }));
}
function Ux(e, t) {
  ls.size || window.addEventListener("resize", Fd), ls.set(e, t);
}
function Hx(e) {
  ls.delete(e), ls.size || window.removeEventListener("resize", Fd);
}
function jx(e, t, n) {
  const i = e.canvas,
    s = i && Ha(i);
  if (!s) return;
  const o = hd((a, l) => {
      const c = s.clientWidth;
      n(a, l), c < s.clientWidth && n();
    }, window),
    r = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        f = l.contentRect.height;
      (c === 0 && f === 0) || o(c, f);
    });
  return r.observe(s), Ux(e, o), r;
}
function ur(e, t, n) {
  n && n.disconnect(), t === "resize" && Hx(e);
}
function Wx(e, t, n) {
  const i = e.canvas,
    s = hd((o) => {
      e.ctx !== null && n(zx(o, e));
    }, e);
  return Nx(i, t, s), s;
}
class Yx extends Ad {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (Bx(t, n), i) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Gs]) return !1;
    const i = n[Gs].initial;
    ["height", "width"].forEach((o) => {
      const r = i[o];
      xt(r) ? n.removeAttribute(o) : n.setAttribute(o, r);
    });
    const s = i.style || {};
    return (
      Object.keys(s).forEach((o) => {
        n.style[o] = s[o];
      }),
      (n.width = n.width),
      delete n[Gs],
      !0
    );
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n);
    const s = t.$proxies || (t.$proxies = {}),
      r = { attach: Vx, detach: qx, resize: jx }[n] || Wx;
    s[n] = r(t, n, i);
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}),
      s = i[n];
    if (!s) return;
    (({ attach: ur, detach: ur, resize: ur })[n] || Ix)(t, n, s),
      (i[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, i, s) {
    return Ky(t, n, i, s);
  }
  isAttached(t) {
    const n = Ha(t);
    return !!(n && n.isConnected);
  }
}
function Kx(e) {
  return !wd() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? Ox
    : Yx;
}
var Ys;
let qn =
  ((Ys = class {
    constructor() {
      $(this, "x");
      $(this, "y");
      $(this, "active", !1);
      $(this, "options");
      $(this, "$animations");
    }
    tooltipPosition(t) {
      const { x: n, y: i } = this.getProps(["x", "y"], t);
      return { x: n, y: i };
    }
    hasValue() {
      return as(this.x) && as(this.y);
    }
    getProps(t, n) {
      const i = this.$animations;
      if (!n || !i) return this;
      const s = {};
      return (
        t.forEach((o) => {
          s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
        }),
        s
      );
    }
  }),
  $(Ys, "defaults", {}),
  $(Ys, "defaultRoutes"),
  Ys);
function Xx(e, t) {
  const n = e.options.ticks,
    i = Jx(e),
    s = Math.min(n.maxTicksLimit || i, i),
    o = n.major.enabled ? Qx(t) : [],
    r = o.length,
    a = o[0],
    l = o[r - 1],
    c = [];
  if (r > s) return Zx(t, c, o, r / s), c;
  const f = Gx(o, t, s);
  if (r > 0) {
    let u, d;
    const h = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Vs(t, c, f, xt(h) ? 0 : a - h, a), u = 0, d = r - 1; u < d; u++)
      Vs(t, c, f, o[u], o[u + 1]);
    return Vs(t, c, f, l, xt(h) ? t.length : l + h), c;
  }
  return Vs(t, c, f), c;
}
function Jx(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    i = e._length / n + (t ? 0 : 1),
    s = e._maxLength / n;
  return Math.floor(Math.min(i, s));
}
function Gx(e, t, n) {
  const i = $x(e),
    s = t.length / n;
  if (!i) return Math.max(s, 1);
  const o = Y0(i);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s) return l;
  }
  return Math.max(s, 1);
}
function Qx(e) {
  const t = [];
  let n, i;
  for (n = 0, i = e.length; n < i; n++) e[n].major && t.push(n);
  return t;
}
function Zx(e, t, n, i) {
  let s = 0,
    o = n[0],
    r;
  for (i = Math.ceil(i), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), s++, (o = n[s * i]));
}
function Vs(e, t, n, i, s) {
  const o = at(i, 0),
    r = Math.min(at(s, e.length), e.length);
  let a = 0,
    l,
    c,
    f;
  for (
    n = Math.ceil(n), s && ((l = s - i), (n = l / Math.floor(l / n))), f = o;
    f < 0;

  )
    a++, (f = Math.round(o + a * n));
  for (c = Math.max(o, 0); c < r; c++)
    c === f && (t.push(e[c]), a++, (f = Math.round(o + a * n)));
}
function $x(e) {
  const t = e.length;
  let n, i;
  if (t < 2) return !1;
  for (i = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== i) return !1;
  return i;
}
const tv = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  Dc = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n),
  Fc = (e, t) => Math.min(t || e, e);
function Rc(e, t) {
  const n = [],
    i = e.length / t,
    s = e.length;
  let o = 0;
  for (; o < s; o += i) n.push(e[Math.floor(o)]);
  return n;
}
function ev(e, t, n) {
  const i = e.ticks.length,
    s = Math.min(t, i - 1),
    o = e._startPixel,
    r = e._endPixel,
    a = 1e-6;
  let l = e.getPixelForTick(s),
    c;
  if (
    !(
      n &&
      (i === 1
        ? (c = Math.max(l - o, r - l))
        : t === 0
        ? (c = (e.getPixelForTick(1) - l) / 2)
        : (c = (l - e.getPixelForTick(s - 1)) / 2),
      (l += s < t ? c : -c),
      l < o - a || l > r + a)
    )
  )
    return l;
}
function nv(e, t) {
  dt(e, (n) => {
    const i = n.gc,
      s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o) delete n.data[i[o]];
      i.splice(0, s);
    }
  });
}
function Ci(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Oc(e, t) {
  if (!e.display) return 0;
  const n = Tt(e.font, t),
    i = zt(e.padding);
  return (_t(e.text) ? e.text.length : 1) * n.lineHeight + i.height;
}
function iv(e, t) {
  return pn(e, { scale: t, type: "scale" });
}
function sv(e, t, n) {
  return pn(e, { tick: n, index: t, type: "tick" });
}
function ov(e, t, n) {
  let i = La(e);
  return ((n && t !== "right") || (!n && t === "right")) && (i = tv(i)), i;
}
function rv(e, t, n, i) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = e,
    { chartArea: c, scales: f } = l;
  let u = 0,
    d,
    h,
    g;
  const m = r - s,
    b = a - o;
  if (e.isHorizontal()) {
    if (((h = Lt(i, o, a)), ct(n))) {
      const x = Object.keys(n)[0],
        y = n[x];
      g = f[x].getPixelForValue(y) + m - t;
    } else
      n === "center" ? (g = (c.bottom + c.top) / 2 + m - t) : (g = Dc(e, n, t));
    d = a - o;
  } else {
    if (ct(n)) {
      const x = Object.keys(n)[0],
        y = n[x];
      h = f[x].getPixelForValue(y) - b + t;
    } else
      n === "center" ? (h = (c.left + c.right) / 2 - b + t) : (h = Dc(e, n, t));
    (g = Lt(i, r, s)), (u = n === "left" ? -Jt : Jt);
  }
  return { titleX: h, titleY: g, maxWidth: d, rotation: u };
}
class Un extends qn {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: s } = this;
    return (
      (t = $t(t, Number.POSITIVE_INFINITY)),
      (n = $t(n, Number.NEGATIVE_INFINITY)),
      (i = $t(i, Number.POSITIVE_INFINITY)),
      (s = $t(s, Number.NEGATIVE_INFINITY)),
      { min: $t(t, i), max: $t(n, s), minDefined: Ft(t), maxDefined: Ft(n) }
    );
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(),
      r;
    if (s && o) return { min: n, max: i };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (r = a[l].controller.getMinMax(this, t)),
        s || (n = Math.min(n, r.min)),
        o || (i = Math.max(i, r.max));
    return (
      (n = o && n > i ? i : n),
      (i = s && n > i ? n : i),
      { min: $t(n, $t(i, n)), max: $t(i, $t(n, i)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    bt(this.options.beforeUpdate, [this]);
  }
  update(t, n, i) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options,
      a = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Cy(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Rc(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === "auto") &&
        ((this.ticks = Xx(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      n,
      i;
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    bt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    bt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    bt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), bt(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    bt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      (o = t[i]), (o.label = bt(n.callback, [o.value, i, t], this));
  }
  afterTickToLabelConversion() {
    bt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    bt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      i = Fc(this.ticks.length, t.ticks.maxTicksLimit),
      s = n.minRotation || 0,
      o = n.maxRotation;
    let r = s,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !n.display ||
      s >= o ||
      i <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = s;
      return;
    }
    const f = this._getLabelSizes(),
      u = f.widest.width,
      d = f.highest.height,
      h = ue(this.chart.width - u, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / i : h / (i - 1)),
      u + 6 > a &&
        ((a = h / (i - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          Ci(t.grid) -
          n.padding -
          Oc(t.title, this.chart.options.font)),
        (c = Math.sqrt(u * u + d * d)),
        (r = Ra(
          Math.min(
            Math.asin(ue((f.highest.height + 6) / a, -1, 1)),
            Math.asin(ue(l / c, -1, 1)) - Math.asin(ue(d / c, -1, 1))
          )
        )),
        (r = Math.max(s, Math.min(o, r)))),
      (this.labelRotation = r);
  }
  afterCalculateLabelRotation() {
    bt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    bt(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: s, grid: o },
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal();
    if (r) {
      const l = Oc(s, n.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = Ci(o) + l))
          : ((t.height = this.maxHeight), (t.width = Ci(o) + l)),
        i.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: f,
            widest: u,
            highest: d,
          } = this._getLabelSizes(),
          h = i.padding * 2,
          g = tn(this.labelRotation),
          m = Math.cos(g),
          b = Math.sin(g);
        if (a) {
          const x = i.mirror ? 0 : b * u.width + m * d.height;
          t.height = Math.min(this.maxHeight, t.height + x + h);
        } else {
          const x = i.mirror ? 0 : m * u.width + b * d.height;
          t.width = Math.min(this.maxWidth, t.width + x + h);
        }
        this._calculatePadding(c, f, b, m);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, n, i, s) {
    const {
        ticks: { align: o, padding: r },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const f = this.getPixelForTick(0) - this.left,
        u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0,
        h = 0;
      l
        ? c
          ? ((d = s * t.width), (h = i * n.height))
          : ((d = i * t.height), (h = s * n.width))
        : o === "start"
        ? (h = n.width)
        : o === "end"
        ? (d = t.width)
        : o !== "inner" && ((d = t.width / 2), (h = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((d - f + r) * this.width) / (this.width - f),
          0
        )),
        (this.paddingRight = Math.max(
          ((h - u + r) * this.width) / (this.width - u),
          0
        ));
    } else {
      let f = n.height / 2,
        u = t.height / 2;
      o === "start"
        ? ((f = 0), (u = t.height))
        : o === "end" && ((f = n.height), (u = 0)),
        (this.paddingTop = f + r),
        (this.paddingBottom = u + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    bt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, i;
    for (n = 0, i = t.length; n < i; n++)
      xt(t[n].label) && (t.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = Rc(i, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, n, i) {
    const { ctx: s, _longestTextCache: o } = this,
      r = [],
      a = [],
      l = Math.floor(n / Fc(n, i));
    let c = 0,
      f = 0,
      u,
      d,
      h,
      g,
      m,
      b,
      x,
      y,
      S,
      _,
      k;
    for (u = 0; u < n; u += l) {
      if (
        ((g = t[u].label),
        (m = this._resolveTickFontOptions(u)),
        (s.font = b = m.string),
        (x = o[b] = o[b] || { data: {}, gc: [] }),
        (y = m.lineHeight),
        (S = _ = 0),
        !xt(g) && !_t(g))
      )
        (S = go(s, x.data, x.gc, S, g)), (_ = y);
      else if (_t(g))
        for (d = 0, h = g.length; d < h; ++d)
          (k = g[d]),
            !xt(k) && !_t(k) && ((S = go(s, x.data, x.gc, S, k)), (_ += y));
      r.push(S), a.push(_), (c = Math.max(S, c)), (f = Math.max(_, f));
    }
    nv(o, n);
    const E = r.indexOf(c),
      P = a.indexOf(f),
      C = (T) => ({ width: r[T] || 0, height: a[T] || 0 });
    return {
      first: C(0),
      last: C(n - 1),
      widest: C(E),
      highest: C(P),
      widths: r,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return G0(this._alignToPixels ? yn(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return i.$context || (i.$context = sv(this.getContext(), t, i));
    }
    return this.$context || (this.$context = iv(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      n = tn(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      s = Math.abs(Math.sin(n)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      l = o ? o.highest.height + r : 0;
    return this.isHorizontal()
      ? l * i > a * s
        ? a / i
        : l / s
      : l * s < a * i
      ? l / i
      : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      i = this.chart,
      s = this.options,
      { grid: o, position: r, border: a } = s,
      l = o.offset,
      c = this.isHorizontal(),
      u = this.ticks.length + (l ? 1 : 0),
      d = Ci(o),
      h = [],
      g = a.setContext(this.getContext()),
      m = g.display ? g.width : 0,
      b = m / 2,
      x = function (Q) {
        return yn(i, Q, m);
      };
    let y, S, _, k, E, P, C, T, R, N, O, U;
    if (r === "top")
      (y = x(this.bottom)),
        (P = this.bottom - d),
        (T = y - b),
        (N = x(t.top) + b),
        (U = t.bottom);
    else if (r === "bottom")
      (y = x(this.top)),
        (N = t.top),
        (U = x(t.bottom) - b),
        (P = y + b),
        (T = this.top + d);
    else if (r === "left")
      (y = x(this.right)),
        (E = this.right - d),
        (C = y - b),
        (R = x(t.left) + b),
        (O = t.right);
    else if (r === "right")
      (y = x(this.left)),
        (R = t.left),
        (O = x(t.right) - b),
        (E = y + b),
        (C = this.left + d);
    else if (n === "x") {
      if (r === "center") y = x((t.top + t.bottom) / 2 + 0.5);
      else if (ct(r)) {
        const Q = Object.keys(r)[0],
          tt = r[Q];
        y = x(this.chart.scales[Q].getPixelForValue(tt));
      }
      (N = t.top), (U = t.bottom), (P = y + b), (T = P + d);
    } else if (n === "y") {
      if (r === "center") y = x((t.left + t.right) / 2);
      else if (ct(r)) {
        const Q = Object.keys(r)[0],
          tt = r[Q];
        y = x(this.chart.scales[Q].getPixelForValue(tt));
      }
      (E = y - b), (C = E - d), (R = t.left), (O = t.right);
    }
    const z = at(s.ticks.maxTicksLimit, u),
      nt = Math.max(1, Math.ceil(u / z));
    for (S = 0; S < u; S += nt) {
      const Q = this.getContext(S),
        tt = o.setContext(Q),
        rt = a.setContext(Q),
        jt = tt.lineWidth,
        Vt = tt.color,
        qt = rt.dash || [],
        St = rt.dashOffset,
        oe = tt.tickWidth,
        re = tt.tickColor,
        _e = tt.tickBorderDash || [],
        wt = tt.tickBorderDashOffset;
      (_ = ev(this, S, l)),
        _ !== void 0 &&
          ((k = yn(i, _, jt)),
          c ? (E = C = R = O = k) : (P = T = N = U = k),
          h.push({
            tx1: E,
            ty1: P,
            tx2: C,
            ty2: T,
            x1: R,
            y1: N,
            x2: O,
            y2: U,
            width: jt,
            color: Vt,
            borderDash: qt,
            borderDashOffset: St,
            tickWidth: oe,
            tickColor: re,
            tickBorderDash: _e,
            tickBorderDashOffset: wt,
          }));
    }
    return (this._ticksLength = u), (this._borderValue = y), h;
  }
  _computeLabelItems(t) {
    const n = this.axis,
      i = this.options,
      { position: s, ticks: o } = i,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: f, mirror: u } = o,
      d = Ci(i.grid),
      h = d + f,
      g = u ? -f : h,
      m = -tn(this.labelRotation),
      b = [];
    let x,
      y,
      S,
      _,
      k,
      E,
      P,
      C,
      T,
      R,
      N,
      O,
      U = "middle";
    if (s === "top")
      (E = this.bottom - g), (P = this._getXAxisLabelAlignment());
    else if (s === "bottom")
      (E = this.top + g), (P = this._getXAxisLabelAlignment());
    else if (s === "left") {
      const nt = this._getYAxisLabelAlignment(d);
      (P = nt.textAlign), (k = nt.x);
    } else if (s === "right") {
      const nt = this._getYAxisLabelAlignment(d);
      (P = nt.textAlign), (k = nt.x);
    } else if (n === "x") {
      if (s === "center") E = (t.top + t.bottom) / 2 + h;
      else if (ct(s)) {
        const nt = Object.keys(s)[0],
          Q = s[nt];
        E = this.chart.scales[nt].getPixelForValue(Q) + h;
      }
      P = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (s === "center") k = (t.left + t.right) / 2 - h;
      else if (ct(s)) {
        const nt = Object.keys(s)[0],
          Q = s[nt];
        k = this.chart.scales[nt].getPixelForValue(Q);
      }
      P = this._getYAxisLabelAlignment(d).textAlign;
    }
    n === "y" && (l === "start" ? (U = "top") : l === "end" && (U = "bottom"));
    const z = this._getLabelSizes();
    for (x = 0, y = a.length; x < y; ++x) {
      (S = a[x]), (_ = S.label);
      const nt = o.setContext(this.getContext(x));
      (C = this.getPixelForTick(x) + o.labelOffset),
        (T = this._resolveTickFontOptions(x)),
        (R = T.lineHeight),
        (N = _t(_) ? _.length : 1);
      const Q = N / 2,
        tt = nt.color,
        rt = nt.textStrokeColor,
        jt = nt.textStrokeWidth;
      let Vt = P;
      r
        ? ((k = C),
          P === "inner" &&
            (x === y - 1
              ? (Vt = this.options.reverse ? "left" : "right")
              : x === 0
              ? (Vt = this.options.reverse ? "right" : "left")
              : (Vt = "center")),
          s === "top"
            ? c === "near" || m !== 0
              ? (O = -N * R + R / 2)
              : c === "center"
              ? (O = -z.highest.height / 2 - Q * R + R)
              : (O = -z.highest.height + R / 2)
            : c === "near" || m !== 0
            ? (O = R / 2)
            : c === "center"
            ? (O = z.highest.height / 2 - Q * R)
            : (O = z.highest.height - N * R),
          u && (O *= -1),
          m !== 0 && !nt.showLabelBackdrop && (k += (R / 2) * Math.sin(m)))
        : ((E = C), (O = ((1 - N) * R) / 2));
      let qt;
      if (nt.showLabelBackdrop) {
        const St = zt(nt.backdropPadding),
          oe = z.heights[x],
          re = z.widths[x];
        let _e = O - St.top,
          wt = 0 - St.left;
        switch (U) {
          case "middle":
            _e -= oe / 2;
            break;
          case "bottom":
            _e -= oe;
            break;
        }
        switch (P) {
          case "center":
            wt -= re / 2;
            break;
          case "right":
            wt -= re;
            break;
        }
        qt = {
          left: wt,
          top: _e,
          width: re + St.width,
          height: oe + St.height,
          color: nt.backdropColor,
        };
      }
      b.push({
        label: _,
        font: T,
        textOffset: O,
        options: {
          rotation: m,
          color: tt,
          strokeColor: rt,
          strokeWidth: jt,
          textAlign: Vt,
          textBaseline: U,
          translation: [k, E],
          backdrop: qt,
        },
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-tn(this.labelRotation)) return t === "top" ? "left" : "right";
    let s = "center";
    return (
      n.align === "start"
        ? (s = "left")
        : n.align === "end"
        ? (s = "right")
        : n.align === "inner" && (s = "inner"),
      s
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: s, padding: o },
      } = this.options,
      r = this._getLabelSizes(),
      a = t + o,
      l = r.widest.width;
    let c, f;
    return (
      n === "left"
        ? s
          ? ((f = this.right + o),
            i === "near"
              ? (c = "left")
              : i === "center"
              ? ((c = "center"), (f += l / 2))
              : ((c = "right"), (f += l)))
          : ((f = this.right - a),
            i === "near"
              ? (c = "right")
              : i === "center"
              ? ((c = "center"), (f -= l / 2))
              : ((c = "left"), (f = this.left)))
        : n === "right"
        ? s
          ? ((f = this.left + o),
            i === "near"
              ? (c = "right")
              : i === "center"
              ? ((c = "center"), (f -= l / 2))
              : ((c = "left"), (f -= l)))
          : ((f = this.left + a),
            i === "near"
              ? (c = "left")
              : i === "center"
              ? ((c = "center"), (f += l / 2))
              : ((c = "right"), (f = this.right)))
        : (c = "right"),
      { textAlign: c, x: f }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: i,
      top: s,
      width: o,
      height: r,
    } = this;
    n && (t.save(), (t.fillStyle = n), t.fillRect(i, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? n.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid,
      i = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, f) => {
      !f.width ||
        !f.color ||
        (i.save(),
        (i.lineWidth = f.width),
        (i.strokeStyle = f.color),
        i.setLineDash(f.borderDash || []),
        (i.lineDashOffset = f.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(c.x, c.y),
        i.stroke(),
        i.restore());
    };
    if (n.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: i, grid: s },
      } = this,
      o = i.setContext(this.getContext()),
      r = i.display ? o.width : 0;
    if (!r) return;
    const a = s.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, f, u, d;
    this.isHorizontal()
      ? ((c = yn(t, this.left, r) - r / 2),
        (f = yn(t, this.right, a) + a / 2),
        (u = d = l))
      : ((u = yn(t, this.top, r) - r / 2),
        (d = yn(t, this.bottom, a) + a / 2),
        (c = f = l)),
      n.save(),
      (n.lineWidth = o.width),
      (n.strokeStyle = o.color),
      n.beginPath(),
      n.moveTo(c, u),
      n.lineTo(f, d),
      n.stroke(),
      n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      s = this._computeLabelArea();
    s && Ia(i, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options,
        l = r.font,
        c = r.label,
        f = r.textOffset;
      Nn(i, c, 0, f, l, a);
    }
    s && za(i);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: i, reverse: s },
    } = this;
    if (!i.display) return;
    const o = Tt(i.font),
      r = zt(i.padding),
      a = i.align;
    let l = o.lineHeight / 2;
    n === "bottom" || n === "center" || ct(n)
      ? ((l += r.bottom),
        _t(i.text) && (l += o.lineHeight * (i.text.length - 1)))
      : (l += r.top);
    const {
      titleX: c,
      titleY: f,
      maxWidth: u,
      rotation: d,
    } = rv(this, l, n, a);
    Nn(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: u,
      rotation: d,
      textAlign: ov(a, n, s),
      textBaseline: "middle",
      translation: [c, f],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      i = at(t.grid && t.grid.z, -1),
      s = at(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Un.prototype.draw
      ? [
          {
            z: n,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      s = [];
    let o, r;
    for (o = 0, r = n.length; o < r; ++o) {
      const a = n[o];
      a[i] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return Tt(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class qs {
  constructor(t, n, i) {
    (this.type = t),
      (this.scope = n),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let i;
    cv(n) && (i = this.register(n));
    const s = this.items,
      o = t.id,
      r = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in s ||
        ((s[o] = t),
        av(t, r, i),
        this.override && kt.override(t.id, t.overrides)),
      r
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items,
      i = t.id,
      s = this.scope;
    i in n && delete n[i],
      s && i in kt[s] && (delete kt[s][i], this.override && delete Bn[i]);
  }
}
function av(e, t, n) {
  const i = rs(Object.create(null), [
    n ? kt.get(n) : {},
    kt.get(t),
    e.defaults,
  ]);
  kt.set(t, i),
    e.defaultRoutes && lv(t, e.defaultRoutes),
    e.descriptors && kt.describe(t, e.descriptors);
}
function lv(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split("."),
      s = i.pop(),
      o = [e].concat(i).join("."),
      r = t[n].split("."),
      a = r.pop(),
      l = r.join(".");
    kt.route(o, s, l, a);
  });
}
function cv(e) {
  return "id" in e && "defaults" in e;
}
class fv {
  constructor() {
    (this.controllers = new qs(Xi, "datasets", !0)),
      (this.elements = new qs(qn, "elements")),
      (this.plugins = new qs(Object, "plugins")),
      (this.scales = new qs(Un, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, i) {
    [...n].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : dt(s, (r) => {
            const a = i || this._getRegistryForType(r);
            this._exec(t, a, r);
          });
    });
  }
  _exec(t, n, i) {
    const s = Fa(t);
    bt(i["before" + s], [], i), n[t](i), bt(i["after" + s], [], i);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, n, i) {
    const s = n.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return s;
  }
}
var Se = new fv();
class uv {
  constructor() {
    this._init = [];
  }
  notify(t, n, i, s) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      r = this._notify(o, t, n, i);
    return (
      n === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      r
    );
  }
  _notify(t, n, i, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin,
        a = r[i],
        l = [n, s, o.options];
      if (bt(a, l, r) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    xt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const i = t && t.config,
      s = at(i.options && i.options.plugins, {}),
      o = dv(i);
    return s === !1 && !n ? [] : pv(t, o, s, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      i = this._cache,
      s = (o, r) =>
        o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(n, i), t, "stop"), this._notify(s(i, n), t, "start");
  }
}
function dv(e) {
  const t = {},
    n = [],
    i = Object.keys(Se.plugins.items);
  for (let o = 0; o < i.length; o++) n.push(Se.getPlugin(i[o]));
  const s = e.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    n.indexOf(r) === -1 && (n.push(r), (t[r.id] = !0));
  }
  return { plugins: n, localIds: t };
}
function hv(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function pv(e, { plugins: t, localIds: n }, i, s) {
  const o = [],
    r = e.getContext();
  for (const a of t) {
    const l = a.id,
      c = hv(i[l], s);
    c !== null &&
      o.push({
        plugin: a,
        options: gv(e.config, { plugin: a, local: n[l] }, c, r),
      });
  }
  return o;
}
function gv(e, { plugin: t, local: n }, i, s) {
  const o = e.pluginScopeKeys(t),
    r = e.getOptionScopes(i, o);
  return (
    n && t.defaults && r.push(t.defaults),
    e.createResolver(r, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function zr(e, t) {
  const n = kt.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  );
}
function mv(e, t) {
  let n = e;
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  );
}
function bv(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Lc(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function yv(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function Vr(e, ...t) {
  if (Lc(e)) return e;
  for (const n of t) {
    const i =
      n.axis || yv(n.position) || (e.length > 1 && Lc(e[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function Bc(e, t, n) {
  if (n[t + "AxisID"] === e) return { axis: t };
}
function xv(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((i) => i.xAxisID === e || i.yAxisID === e);
    if (n.length) return Bc(e, "x", n[0]) || Bc(e, "y", n[0]);
  }
  return {};
}
function vv(e, t) {
  const n = Bn[e.type] || { scales: {} },
    i = t.scales || {},
    s = zr(e.type, t),
    o = Object.create(null);
  return (
    Object.keys(i).forEach((r) => {
      const a = i[r];
      if (!ct(a))
        return console.error(`Invalid scale configuration for scale: ${r}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${r}`
        );
      const l = Vr(r, a, xv(r, e), kt.scales[a.type]),
        c = bv(l, s),
        f = n.scales || {};
      o[r] = ji(Object.create(null), [{ axis: l }, a, f[l], f[c]]);
    }),
    e.data.datasets.forEach((r) => {
      const a = r.type || e.type,
        l = r.indexAxis || zr(a, t),
        f = (Bn[a] || {}).scales || {};
      Object.keys(f).forEach((u) => {
        const d = mv(u, l),
          h = r[d + "AxisID"] || d;
        (o[h] = o[h] || Object.create(null)),
          ji(o[h], [{ axis: d }, i[h], f[u]]);
      });
    }),
    Object.keys(o).forEach((r) => {
      const a = o[r];
      ji(a, [kt.scales[a.type], kt.scale]);
    }),
    o
  );
}
function Rd(e) {
  const t = e.options || (e.options = {});
  (t.plugins = at(t.plugins, {})), (t.scales = vv(e, t));
}
function Od(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function _v(e) {
  return (e = e || {}), (e.data = Od(e.data)), Rd(e), e;
}
const Nc = new Map(),
  Ld = new Set();
function Us(e, t) {
  let n = Nc.get(e);
  return n || ((n = t()), Nc.set(e, n), Ld.add(n)), n;
}
const Mi = (e, t, n) => {
  const i = uo(t, n);
  i !== void 0 && e.add(i);
};
class wv {
  constructor(t) {
    (this._config = _v(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Od(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Rd(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Us(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, n) {
    return Us(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return Us(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id,
      i = this.type;
    return Us(`${i}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || n) && ((s = new Map()), i.set(t, s)), s;
  }
  getOptionScopes(t, n, i) {
    const { options: s, type: o } = this,
      r = this._cachedScopes(t, i),
      a = r.get(n);
    if (a) return a;
    const l = new Set();
    n.forEach((f) => {
      t && (l.add(t), f.forEach((u) => Mi(l, t, u))),
        f.forEach((u) => Mi(l, s, u)),
        f.forEach((u) => Mi(l, Bn[o] || {}, u)),
        f.forEach((u) => Mi(l, kt, u)),
        f.forEach((u) => Mi(l, Nr, u));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), Ld.has(n) && r.set(n, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [t, Bn[n] || {}, kt.datasets[n] || {}, { type: n }, kt, Nr];
  }
  resolveNamedOptions(t, n, i, s = [""]) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: a } = Ic(this._resolverCache, t, s);
    let l = r;
    if (Sv(r, n)) {
      (o.$shared = !1), (i = hn(i) ? i() : i);
      const c = this.createResolver(t, i, a);
      l = ci(r, i, c);
    }
    for (const c of n) o[c] = l[c];
    return o;
  }
  createResolver(t, n, i = [""], s) {
    const { resolver: o } = Ic(this._resolverCache, t, i);
    return ct(n) ? ci(o, n, void 0, s) : o;
  }
}
function Ic(e, t, n) {
  let i = e.get(t);
  i || ((i = new Map()), e.set(t, i));
  const s = n.join();
  let o = i.get(s);
  return (
    o ||
      ((o = {
        resolver: Va(t, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      i.set(s, o)),
    o
  );
}
const kv = (e) =>
  ct(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || hn(e[n]), !1);
function Sv(e, t) {
  const { isScriptable: n, isIndexable: i } = bd(e);
  for (const s of t) {
    const o = n(s),
      r = i(s),
      a = (r || o) && e[s];
    if ((o && (hn(a) || kv(a))) || (r && _t(a))) return !0;
  }
  return !1;
}
var Cv = "4.3.2";
const Mv = ["top", "bottom", "left", "right", "chartArea"];
function zc(e, t) {
  return e === "top" || e === "bottom" || (Mv.indexOf(e) === -1 && t === "x");
}
function Vc(e, t) {
  return function (n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e];
  };
}
function qc(e) {
  const t = e.chart,
    n = t.options.animation;
  t.notifyPlugins("afterRender"), bt(n && n.onComplete, [e], t);
}
function Pv(e) {
  const t = e.chart,
    n = t.options.animation;
  bt(n && n.onProgress, [e], t);
}
function Bd(e) {
  return (
    wd() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Qs = {},
  Uc = (e) => {
    const t = Bd(e);
    return Object.values(Qs)
      .filter((n) => n.canvas === t)
      .pop();
  };
function Ev(e, t, n) {
  const i = Object.keys(e);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const r = e[s];
      delete e[s], (n > 0 || o > t) && (e[o + n] = r);
    }
  }
}
function Tv(e, t, n, i) {
  return !n || e.type === "mouseout" ? null : i ? t : e;
}
function Av(e) {
  const { xScale: t, yScale: n } = e;
  if (t && n)
    return { left: t.left, right: t.right, top: n.top, bottom: n.bottom };
}
var Xe;
let jo =
  ((Xe = class {
    static register(...t) {
      Se.add(...t), Hc();
    }
    static unregister(...t) {
      Se.remove(...t), Hc();
    }
    constructor(t, n) {
      const i = (this.config = new wv(n)),
        s = Bd(t),
        o = Uc(s);
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused."
        );
      const r = i.createResolver(i.chartOptionScopes(), this.getContext());
      (this.platform = new (i.platform || Kx(s))()),
        this.platform.updateConfig(i);
      const a = this.platform.acquireContext(s, r.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        f = l && l.width;
      if (
        ((this.id = N0()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = f),
        (this.height = c),
        (this._options = r),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new uv()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = ey((u) => this.update(u), r.resizeDelay || 0)),
        (this._dataChanges = []),
        (Qs[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Fe.listen(this, "complete", qc),
        Fe.listen(this, "progress", Pv),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: i,
        height: s,
        _aspectRatio: o,
      } = this;
      return xt(t) ? (n && o ? o : s ? i / s : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return Se;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : hc(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return fc(this.canvas, this.ctx), this;
    }
    stop() {
      return Fe.stop(this), this;
    }
    resize(t, n) {
      Fe.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n);
    }
    _resize(t, n) {
      const i = this.options,
        s = this.canvas,
        o = i.maintainAspectRatio && this.aspectRatio,
        r = this.platform.getMaximumSize(s, t, n, o),
        a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach";
      (this.width = r.width),
        (this.height = r.height),
        (this._aspectRatio = this.aspectRatio),
        hc(this, a, !0) &&
          (this.notifyPlugins("resize", { size: r }),
          bt(i.onResize, [this, r], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      dt(n, (i, s) => {
        i.id = s;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        i = this.scales,
        s = Object.keys(i).reduce((r, a) => ((r[a] = !1), r), {});
      let o = [];
      n &&
        (o = o.concat(
          Object.keys(n).map((r) => {
            const a = n[r],
              l = Vr(r, a),
              c = l === "r",
              f = l === "x";
            return {
              options: a,
              dposition: c ? "chartArea" : f ? "bottom" : "left",
              dtype: c ? "radialLinear" : f ? "category" : "linear",
            };
          })
        )),
        dt(o, (r) => {
          const a = r.options,
            l = a.id,
            c = Vr(l, a),
            f = at(a.type, r.dtype);
          (a.position === void 0 || zc(a.position, c) !== zc(r.dposition)) &&
            (a.position = r.dposition),
            (s[l] = !0);
          let u = null;
          if (l in i && i[l].type === f) u = i[l];
          else {
            const d = Se.getScale(f);
            (u = new d({ id: l, type: f, ctx: this.ctx, chart: this })),
              (i[u.id] = u);
          }
          u.init(a, t);
        }),
        dt(s, (r, a) => {
          r || delete i[a];
        }),
        dt(i, (r) => {
          de.configure(this, r, r.options), de.addBox(this, r);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        i = t.length;
      if ((t.sort((s, o) => s.index - o.index), i > n)) {
        for (let s = n; s < i; ++s) this._destroyDatasetMeta(s);
        t.splice(n, i - n);
      }
      this._sortedMetasets = t.slice(0).sort(Vc("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n },
      } = this;
      t.length > n.length && delete this._stacks,
        t.forEach((i, s) => {
          n.filter((o) => o === i._dataset).length === 0 &&
            this._destroyDatasetMeta(s);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets;
      let i, s;
      for (
        this._removeUnreferencedMetasets(), i = 0, s = n.length;
        i < s;
        i++
      ) {
        const o = n[i];
        let r = this.getDatasetMeta(i);
        const a = o.type || this.config.type;
        if (
          (r.type &&
            r.type !== a &&
            (this._destroyDatasetMeta(i), (r = this.getDatasetMeta(i))),
          (r.type = a),
          (r.indexAxis = o.indexAxis || zr(a, this.options)),
          (r.order = o.order || 0),
          (r.index = i),
          (r.label = "" + o.label),
          (r.visible = this.isDatasetVisible(i)),
          r.controller)
        )
          r.controller.updateIndex(i), r.controller.linkScales();
        else {
          const l = Se.getController(a),
            { datasetElementType: c, dataElementType: f } = kt.datasets[a];
          Object.assign(l, {
            dataElementType: Se.getElement(f),
            datasetElementType: c && Se.getElement(c),
          }),
            (r.controller = new l(this, i)),
            t.push(r.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      dt(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const n = this.config;
      n.update();
      const i = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext()
        )),
        s = (this._animationsDisabled = !i.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const o = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let r = 0;
      for (let c = 0, f = this.data.datasets.length; c < f; c++) {
        const { controller: u } = this.getDatasetMeta(c),
          d = !s && o.indexOf(u) === -1;
        u.buildOrUpdateElements(d), (r = Math.max(+u.getMaxOverflow(), r));
      }
      (r = this._minPadding = i.layout.autoPadding ? r : 0),
        this._updateLayout(r),
        s ||
          dt(o, (c) => {
            c.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(Vc("z", "_idx"));
      const { _active: a, _lastEvent: l } = this;
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render();
    }
    _updateScales() {
      dt(this.scales, (t) => {
        de.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        i = new Set(t.events);
      (!ec(n, i) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: i, start: s, count: o } of n) {
        const r = i === "_removeElements" ? -o : o;
        Ev(t, s, r);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        i = (o) =>
          new Set(
            t
              .filter((r) => r[0] === o)
              .map((r, a) => a + "," + r.splice(1).join(","))
          ),
        s = i(0);
      for (let o = 1; o < n; o++) if (!ec(s, i(o))) return;
      return Array.from(s)
        .map((o) => o.split(","))
        .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      de.update(this, this.width, this.height, t);
      const n = this.chartArea,
        i = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        dt(
          this.boxes,
          (s) => {
            (i && s.position === "chartArea") ||
              (s.configure && s.configure(), this._layers.push(...s._layers()));
          },
          this
        ),
        this._layers.forEach((s, o) => {
          s._idx = o;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this._updateDataset(n, hn(t) ? t({ datasetIndex: n }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, n) {
      const i = this.getDatasetMeta(t),
        s = { meta: i, index: t, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", s) !== !1 &&
        (i.controller._update(n),
        (s.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", s));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Fe.has(this)
          ? this.attached && !Fe.running(this) && Fe.start(this)
          : (this.draw(), qc({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: i, height: s } = this._resizeBeforeDraw;
        this._resize(i, s), (this._resizeBeforeDraw = null);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const n = this._layers;
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        i = [];
      let s, o;
      for (s = 0, o = n.length; s < o; ++s) {
        const r = n[s];
        (!t || r.visible) && i.push(r);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const n = this.ctx,
        i = t._clip,
        s = !i.disabled,
        o = Av(t) || this.chartArea,
        r = { meta: t, index: t.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", r) !== !1 &&
        (s &&
          Ia(n, {
            left: i.left === !1 ? 0 : o.left - i.left,
            right: i.right === !1 ? this.width : o.right + i.right,
            top: i.top === !1 ? 0 : o.top - i.top,
            bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom,
          }),
        t.controller.draw(),
        s && za(n),
        (r.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", r));
    }
    isPointInArea(t) {
      return Ne(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, n, i, s) {
      const o = Mx.modes[n];
      return typeof o == "function" ? o(this, t, i, s) : [];
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        i = this._metasets;
      let s = i.filter((o) => o && o._dataset === n).pop();
      return (
        s ||
          ((s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(s)),
        s
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = pn(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t];
      if (!n) return !1;
      const i = this.getDatasetMeta(t);
      return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(t, n) {
      const i = this.getDatasetMeta(t);
      i.hidden = !n;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, n, i) {
      const s = i ? "show" : "hide",
        o = this.getDatasetMeta(t),
        r = o.controller._resolveAnimations(void 0, s);
      ho(n)
        ? ((o.data[n].hidden = !i), this.update())
        : (this.setDatasetVisibility(t, i),
          r.update(o, { visible: i }),
          this.update((a) => (a.datasetIndex === t ? s : void 0)));
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1);
    }
    show(t, n) {
      this._updateVisibility(t, n, !0);
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t];
      n && n.controller && n.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, n;
      for (
        this.stop(), Fe.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          fc(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Qs[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        i = (o, r) => {
          n.addEventListener(this, o, r), (t[o] = r);
        },
        s = (o, r, a) => {
          (o.offsetX = r), (o.offsetY = a), this._eventHandler(o);
        };
      dt(this.options.events, (o) => i(o, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        n = this.platform,
        i = (l, c) => {
          n.addEventListener(this, l, c), (t[l] = c);
        },
        s = (l, c) => {
          t[l] && (n.removeEventListener(this, l, c), delete t[l]);
        },
        o = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let r;
      const a = () => {
        s("attach", a),
          (this.attached = !0),
          this.resize(),
          i("resize", o),
          i("detach", r);
      };
      (r = () => {
        (this.attached = !1),
          s("resize", o),
          this._stop(),
          this._resize(0, 0),
          i("attach", a);
      }),
        n.isAttached(this.canvas) ? a() : r();
    }
    unbindEvents() {
      dt(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t);
      }),
        (this._listeners = {}),
        dt(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, n, i) {
      const s = i ? "set" : "remove";
      let o, r, a, l;
      for (
        n === "dataset" &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller["_" + s + "DatasetHoverStyle"]()),
          a = 0,
          l = t.length;
        a < l;
        ++a
      ) {
        r = t[a];
        const c = r && this.getDatasetMeta(r.datasetIndex).controller;
        c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const n = this._active || [],
        i = t.map(({ datasetIndex: o, index: r }) => {
          const a = this.getDatasetMeta(o);
          if (!a) throw new Error("No dataset found at index " + o);
          return { datasetIndex: o, element: a.data[r], index: r };
        });
      !co(i, n) &&
        ((this._active = i),
        (this._lastEvent = null),
        this._updateHoverStyles(i, n));
    }
    notifyPlugins(t, n, i) {
      return this._plugins.notify(this, t, n, i);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, n, i) {
      const s = this.options.hover,
        o = (l, c) =>
          l.filter(
            (f) =>
              !c.some(
                (u) => f.datasetIndex === u.datasetIndex && f.index === u.index
              )
          ),
        r = o(n, t),
        a = i ? t : o(t, n);
      r.length && this.updateHoverStyle(r, s.mode, !1),
        a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
    }
    _eventHandler(t, n) {
      const i = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        s = (r) =>
          (r.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins("beforeEvent", i, s) === !1) return;
      const o = this._handleEvent(t, n, i.inChartArea);
      return (
        (i.cancelable = !1),
        this.notifyPlugins("afterEvent", i, s),
        (o || i.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, n, i) {
      const { _active: s = [], options: o } = this,
        r = n,
        a = this._getActiveElements(t, s, i, r),
        l = H0(t),
        c = Tv(t, this._lastEvent, i, l);
      i &&
        ((this._lastEvent = null),
        bt(o.onHover, [t, a, this], this),
        l && bt(o.onClick, [t, a, this], this));
      const f = !co(a, s);
      return (
        (f || n) && ((this._active = a), this._updateHoverStyles(a, s, n)),
        (this._lastEvent = c),
        f
      );
    }
    _getActiveElements(t, n, i, s) {
      if (t.type === "mouseout") return [];
      if (!i) return n;
      const o = this.options.hover;
      return this.getElementsAtEventForMode(t, o.mode, o, s);
    }
  }),
  $(Xe, "defaults", kt),
  $(Xe, "instances", Qs),
  $(Xe, "overrides", Bn),
  $(Xe, "registry", Se),
  $(Xe, "version", Cv),
  $(Xe, "getChart", Uc),
  Xe);
function Hc() {
  return dt(jo.instances, (e) => e._plugins.invalidate());
}
function Nd(e, t, n = t) {
  (e.lineCap = at(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(at(n.borderDash, t.borderDash)),
    (e.lineDashOffset = at(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = at(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = at(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = at(n.borderColor, t.borderColor));
}
function Dv(e, t, n) {
  e.lineTo(n.x, n.y);
}
function Fv(e) {
  return e.stepped
    ? gy
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? my
    : Dv;
}
function Id(e, t, n = {}) {
  const i = e.length,
    { start: s = 0, end: o = i - 1 } = n,
    { start: r, end: a } = t,
    l = Math.max(s, r),
    c = Math.min(o, a),
    f = (s < r && o < r) || (s > a && o > a);
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !f ? i + c - l : c - l,
  };
}
function Rv(e, t, n, i) {
  const { points: s, options: o } = t,
    { count: r, start: a, loop: l, ilen: c } = Id(s, n, i),
    f = Fv(o);
  let { move: u = !0, reverse: d } = i || {},
    h,
    g,
    m;
  for (h = 0; h <= c; ++h)
    (g = s[(a + (d ? c - h : h)) % r]),
      !g.skip &&
        (u ? (e.moveTo(g.x, g.y), (u = !1)) : f(e, m, g, d, o.stepped),
        (m = g));
  return l && ((g = s[(a + (d ? c : 0)) % r]), f(e, m, g, d, o.stepped)), !!l;
}
function Ov(e, t, n, i) {
  const s = t.points,
    { count: o, start: r, ilen: a } = Id(s, n, i),
    { move: l = !0, reverse: c } = i || {};
  let f = 0,
    u = 0,
    d,
    h,
    g,
    m,
    b,
    x;
  const y = (_) => (r + (c ? a - _ : _)) % o,
    S = () => {
      m !== b && (e.lineTo(f, b), e.lineTo(f, m), e.lineTo(f, x));
    };
  for (l && ((h = s[y(0)]), e.moveTo(h.x, h.y)), d = 0; d <= a; ++d) {
    if (((h = s[y(d)]), h.skip)) continue;
    const _ = h.x,
      k = h.y,
      E = _ | 0;
    E === g
      ? (k < m ? (m = k) : k > b && (b = k), (f = (u * f + _) / ++u))
      : (S(), e.lineTo(_, k), (g = E), (u = 0), (m = b = k)),
      (x = k);
  }
  S();
}
function qr(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length;
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !n
    ? Ov
    : Rv;
}
function Lv(e) {
  return e.stepped
    ? Jy
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? Gy
    : wn;
}
function Bv(e, t, n, i) {
  let s = t._path;
  s || ((s = t._path = new Path2D()), t.path(s, n, i) && s.closePath()),
    Nd(e, t.options),
    e.stroke(s);
}
function Nv(e, t, n, i) {
  const { segments: s, options: o } = t,
    r = qr(t);
  for (const a of s)
    Nd(e, o, a.style),
      e.beginPath(),
      r(e, t, a, { start: n, end: n + i - 1 }) && e.closePath(),
      e.stroke();
}
const Iv = typeof Path2D == "function";
function zv(e, t, n, i) {
  Iv && !t.options.segment ? Bv(e, t, n, i) : Nv(e, t, n, i);
}
class Ri extends qn {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const i = this.options;
    if (
      (i.tension || i.cubicInterpolationMode === "monotone") &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      qy(this._points, i, t, s, n), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = sx(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments,
      n = this.points,
      i = t.length;
    return i && n[t[i - 1].end];
  }
  interpolate(t, n) {
    const i = this.options,
      s = t[n],
      o = this.points,
      r = ex(this, { property: n, start: s, end: s });
    if (!r.length) return;
    const a = [],
      l = Lv(i);
    let c, f;
    for (c = 0, f = r.length; c < f; ++c) {
      const { start: u, end: d } = r[c],
        h = o[u],
        g = o[d];
      if (h === g) {
        a.push(h);
        continue;
      }
      const m = Math.abs((s - h[n]) / (g[n] - h[n])),
        b = l(h, g, m, i.stepped);
      (b[n] = t[n]), a.push(b);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, n, i) {
    return qr(this)(t, this, n, i);
  }
  path(t, n, i) {
    const s = this.segments,
      o = qr(this);
    let r = this._loop;
    (n = n || 0), (i = i || this.points.length - n);
    for (const a of s) r &= o(t, this, a, { start: n, end: n + i - 1 });
    return !!r;
  }
  draw(t, n, i, s) {
    const o = this.options || {};
    (this.points || []).length &&
      o.borderWidth &&
      (t.save(), zv(t, this, i, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
$(Ri, "id", "line"),
  $(Ri, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  $(Ri, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  $(Ri, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill",
  });
function jc(e, t, n, i) {
  const s = e.options,
    { [n]: o } = e.getProps([n], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Zs extends qn {
  constructor(n) {
    super();
    $(this, "parsed");
    $(this, "skip");
    $(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, s) {
    const o = this.options,
      { x: r, y: a } = this.getProps(["x", "y"], s);
    return (
      Math.pow(n - r, 2) + Math.pow(i - a, 2) <
      Math.pow(o.hitRadius + o.radius, 2)
    );
  }
  inXRange(n, i) {
    return jc(this, n, "x", i);
  }
  inYRange(n, i) {
    return jc(this, n, "y", i);
  }
  getCenterPoint(n) {
    const { x: i, y: s } = this.getProps(["x", "y"], n);
    return { x: i, y: s };
  }
  size(n) {
    n = n || this.options || {};
    let i = n.radius || 0;
    i = Math.max(i, (i && n.hoverRadius) || 0);
    const s = (i && n.borderWidth) || 0;
    return (i + s) * 2;
  }
  draw(n, i) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !Ne(this, i, this.size(s) / 2) ||
      ((n.strokeStyle = s.borderColor),
      (n.lineWidth = s.borderWidth),
      (n.fillStyle = s.backgroundColor),
      Ir(n, s, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
$(Zs, "id", "point"),
  $(Zs, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  $(Zs, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const Wc = (e, t) => {
    let { boxHeight: n = t, boxWidth: i = t } = e;
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (i = e.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(t, n) }
    );
  },
  Vv = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class Yc extends qn {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n, i) {
    (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = bt(t.generateLabels, [this.chart], this) || [];
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (n = n.sort((i, s) => t.sort(i, s, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels,
      s = Tt(i.font),
      o = s.size,
      r = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Wc(i, o);
    let c, f;
    (n.font = s.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (f = this._fitRows(r, o, a, l) + 10))
        : ((f = this.maxHeight), (c = this._fitCols(r, s, a, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(f, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, n, i, s) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      f = s + a;
    let u = t;
    (o.textAlign = "left"), (o.textBaseline = "middle");
    let d = -1,
      h = -f;
    return (
      this.legendItems.forEach((g, m) => {
        const b = i + n / 2 + o.measureText(g.text).width;
        (m === 0 || c[c.length - 1] + b + 2 * a > r) &&
          ((u += f), (c[c.length - (m > 0 ? 0 : 1)] = 0), (h += f), d++),
          (l[m] = { left: 0, top: h, row: d, width: b, height: s }),
          (c[c.length - 1] += b + a);
      }),
      u
    );
  }
  _fitCols(t, n, i, s) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      f = r - t;
    let u = a,
      d = 0,
      h = 0,
      g = 0,
      m = 0;
    return (
      this.legendItems.forEach((b, x) => {
        const { itemWidth: y, itemHeight: S } = qv(i, n, o, b, s);
        x > 0 &&
          h + S + 2 * a > f &&
          ((u += d + a),
          c.push({ width: d, height: h }),
          (g += d + a),
          m++,
          (d = h = 0)),
          (l[x] = { left: g, top: h, col: m, width: y, height: S }),
          (d = Math.max(d, y)),
          (h += S + a);
      }),
      (u += d),
      c.push({ width: d, height: h }),
      u
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      r = ei(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = Lt(i, this.left + s, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row &&
          ((a = c.row),
          (l = Lt(i, this.left + s, this.right - this.lineWidths[a]))),
          (c.top += this.top + t + s),
          (c.left = r.leftForLtr(r.x(l), c.width)),
          (l += c.width + s);
    } else {
      let a = 0,
        l = Lt(i, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a &&
          ((a = c.col),
          (l = Lt(
            i,
            this.top + t + s,
            this.bottom - this.columnSizes[a].height
          ))),
          (c.top = l),
          (c.left += this.left + s),
          (c.left = r.leftForLtr(r.x(c.left), c.width)),
          (l += c.height + s);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Ia(t, this), this._draw(), za(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: s } = this,
      { align: o, labels: r } = t,
      a = kt.color,
      l = ei(t.rtl, this.left, this.width),
      c = Tt(r.font),
      { padding: f } = r,
      u = c.size,
      d = u / 2;
    let h;
    this.drawTitle(),
      (s.textAlign = l.textAlign("left")),
      (s.textBaseline = "middle"),
      (s.lineWidth = 0.5),
      (s.font = c.string);
    const { boxWidth: g, boxHeight: m, itemHeight: b } = Wc(r, u),
      x = function (E, P, C) {
        if (isNaN(g) || g <= 0 || isNaN(m) || m < 0) return;
        s.save();
        const T = at(C.lineWidth, 1);
        if (
          ((s.fillStyle = at(C.fillStyle, a)),
          (s.lineCap = at(C.lineCap, "butt")),
          (s.lineDashOffset = at(C.lineDashOffset, 0)),
          (s.lineJoin = at(C.lineJoin, "miter")),
          (s.lineWidth = T),
          (s.strokeStyle = at(C.strokeStyle, a)),
          s.setLineDash(at(C.lineDash, [])),
          r.usePointStyle)
        ) {
          const R = {
              radius: (m * Math.SQRT2) / 2,
              pointStyle: C.pointStyle,
              rotation: C.rotation,
              borderWidth: T,
            },
            N = l.xPlus(E, g / 2),
            O = P + d;
          gd(s, R, N, O, r.pointStyleWidth && g);
        } else {
          const R = P + Math.max((u - m) / 2, 0),
            N = l.leftForLtr(E, g),
            O = ti(C.borderRadius);
          s.beginPath(),
            Object.values(O).some((U) => U !== 0)
              ? mo(s, { x: N, y: R, w: g, h: m, radius: O })
              : s.rect(N, R, g, m),
            s.fill(),
            T !== 0 && s.stroke();
        }
        s.restore();
      },
      y = function (E, P, C) {
        Nn(s, C.text, E, P + b / 2, c, {
          strikethrough: C.hidden,
          textAlign: l.textAlign(C.textAlign),
        });
      },
      S = this.isHorizontal(),
      _ = this._computeTitleHeight();
    S
      ? (h = {
          x: Lt(o, this.left + f, this.right - i[0]),
          y: this.top + f + _,
          line: 0,
        })
      : (h = {
          x: this.left + f,
          y: Lt(o, this.top + _ + f, this.bottom - n[0].height),
          line: 0,
        }),
      kd(this.ctx, t.textDirection);
    const k = b + f;
    this.legendItems.forEach((E, P) => {
      (s.strokeStyle = E.fontColor), (s.fillStyle = E.fontColor);
      const C = s.measureText(E.text).width,
        T = l.textAlign(E.textAlign || (E.textAlign = r.textAlign)),
        R = g + d + C;
      let N = h.x,
        O = h.y;
      l.setWidth(this.width),
        S
          ? P > 0 &&
            N + R + f > this.right &&
            ((O = h.y += k),
            h.line++,
            (N = h.x = Lt(o, this.left + f, this.right - i[h.line])))
          : P > 0 &&
            O + k > this.bottom &&
            ((N = h.x = N + n[h.line].width + f),
            h.line++,
            (O = h.y =
              Lt(o, this.top + _ + f, this.bottom - n[h.line].height)));
      const U = l.x(N);
      if (
        (x(U, O, E),
        (N = ny(T, N + g + d, S ? N + R : this.right, t.rtl)),
        y(l.x(N), O, E),
        S)
      )
        h.x += R + f;
      else if (typeof E.text != "string") {
        const z = c.lineHeight;
        h.y += zd(E, z) + f;
      } else h.y += k;
    }),
      Sd(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      i = Tt(n.font),
      s = zt(n.padding);
    if (!n.display) return;
    const o = ei(t.rtl, this.left, this.width),
      r = this.ctx,
      a = n.position,
      l = i.size / 2,
      c = s.top + l;
    let f,
      u = this.left,
      d = this.width;
    if (this.isHorizontal())
      (d = Math.max(...this.lineWidths)),
        (f = this.top + c),
        (u = Lt(t.align, u, this.right - d));
    else {
      const g = this.columnSizes.reduce((m, b) => Math.max(m, b.height), 0);
      f =
        c +
        Lt(
          t.align,
          this.top,
          this.bottom - g - t.labels.padding - this._computeTitleHeight()
        );
    }
    const h = Lt(a, u, u + d);
    (r.textAlign = o.textAlign(La(a))),
      (r.textBaseline = "middle"),
      (r.strokeStyle = n.color),
      (r.fillStyle = n.color),
      (r.font = i.string),
      Nn(r, n.text, h, f, i);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = Tt(t.font),
      i = zt(t.padding);
    return t.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, n) {
    let i, s, o;
    if (Di(t, this.left, this.right) && Di(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (
          ((s = o[i]),
          Di(t, s.left, s.left + s.width) && Di(n, s.top, s.top + s.height))
        )
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!jv(t.type, n)) return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem,
        o = Vv(s, i);
      s && !o && bt(n.onLeave, [t, s, this], this),
        (this._hoveredItem = i),
        i && !o && bt(n.onHover, [t, i, this], this);
    } else i && bt(n.onClick, [t, i, this], this);
  }
}
function qv(e, t, n, i, s) {
  const o = Uv(i, e, t, n),
    r = Hv(s, i, t.lineHeight);
  return { itemWidth: o, itemHeight: r };
}
function Uv(e, t, n, i) {
  let s = e.text;
  return (
    s &&
      typeof s != "string" &&
      (s = s.reduce((o, r) => (o.length > r.length ? o : r))),
    t + n.size / 2 + i.measureText(s).width
  );
}
function Hv(e, t, n) {
  let i = e;
  return typeof t.text != "string" && (i = zd(t, n)), i;
}
function zd(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function jv(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var Wv = {
  id: "legend",
  _element: Yc,
  start(e, t, n) {
    const i = (e.legend = new Yc({ ctx: e.ctx, options: n, chart: e }));
    de.configure(e, i, n), de.addBox(e, i);
  },
  stop(e) {
    de.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const i = e.legend;
    de.configure(e, i, n), (i.options = n);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex,
        s = n.chart;
      s.isDatasetVisible(i)
        ? (s.hide(i), (t.hidden = !0))
        : (s.show(i), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: i,
              textAlign: s,
              color: o,
              useBorderRadius: r,
              borderRadius: a,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0),
            f = zt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (f.width + f.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class Vd extends qn {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = n);
    const s = _t(i.text) ? i.text.length : 1;
    this._padding = zt(i.padding);
    const o = s * Tt(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: i, bottom: s, right: o, options: r } = this,
      a = r.align;
    let l = 0,
      c,
      f,
      u;
    return (
      this.isHorizontal()
        ? ((f = Lt(a, i, o)), (u = n + t), (c = o - i))
        : (r.position === "left"
            ? ((f = i + t), (u = Lt(a, s, n)), (l = At * -0.5))
            : ((f = o - t), (u = Lt(a, n, s)), (l = At * 0.5)),
          (c = s - n)),
      { titleX: f, titleY: u, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      n = this.options;
    if (!n.display) return;
    const i = Tt(n.font),
      o = i.lineHeight / 2 + this._padding.top,
      { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Nn(t, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: l,
      rotation: c,
      textAlign: La(n.align),
      textBaseline: "middle",
      translation: [r, a],
    });
  }
}
function Yv(e, t) {
  const n = new Vd({ ctx: e.ctx, options: t, chart: e });
  de.configure(e, n, t), de.addBox(e, n), (e.titleBlock = n);
}
var Kv = {
  id: "title",
  _element: Vd,
  start(e, t, n) {
    Yv(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    de.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const i = e.titleBlock;
    de.configure(e, i, n), (i.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Oi = {
  average(e) {
    if (!e.length) return !1;
    let t,
      n,
      i = 0,
      s = 0,
      o = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const r = e[t].element;
      if (r && r.hasValue()) {
        const a = r.tooltipPosition();
        (i += a.x), (s += a.y), ++o;
      }
    }
    return { x: i / o, y: s / o };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let n = t.x,
      i = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      r,
      a;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          f = Br(t, c);
        f < s && ((s = f), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (n = l.x), (i = l.y);
    }
    return { x: n, y: i };
  },
};
function ke(e, t) {
  return t && (_t(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function Re(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function Xv(e, t) {
  const { element: n, datasetIndex: i, index: s } = t,
    o = e.getDatasetMeta(i).controller,
    { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(s),
    raw: e.data.datasets[i].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: n,
  };
}
function Kc(e, t) {
  const n = e.chart.ctx,
    { body: i, footer: s, title: o } = e,
    { boxWidth: r, boxHeight: a } = t,
    l = Tt(t.bodyFont),
    c = Tt(t.titleFont),
    f = Tt(t.footerFont),
    u = o.length,
    d = s.length,
    h = i.length,
    g = zt(t.padding);
  let m = g.height,
    b = 0,
    x = i.reduce(
      (_, k) => _ + k.before.length + k.lines.length + k.after.length,
      0
    );
  if (
    ((x += e.beforeBody.length + e.afterBody.length),
    u &&
      (m += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom),
    x)
  ) {
    const _ = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    m += h * _ + (x - h) * l.lineHeight + (x - 1) * t.bodySpacing;
  }
  d && (m += t.footerMarginTop + d * f.lineHeight + (d - 1) * t.footerSpacing);
  let y = 0;
  const S = function (_) {
    b = Math.max(b, n.measureText(_).width + y);
  };
  return (
    n.save(),
    (n.font = c.string),
    dt(e.title, S),
    (n.font = l.string),
    dt(e.beforeBody.concat(e.afterBody), S),
    (y = t.displayColors ? r + 2 + t.boxPadding : 0),
    dt(i, (_) => {
      dt(_.before, S), dt(_.lines, S), dt(_.after, S);
    }),
    (y = 0),
    (n.font = f.string),
    dt(e.footer, S),
    n.restore(),
    (b += g.width),
    { width: b, height: m }
  );
}
function Jv(e, t) {
  const { y: n, height: i } = t;
  return n < i / 2 ? "top" : n > e.height - i / 2 ? "bottom" : "center";
}
function Gv(e, t, n, i) {
  const { x: s, width: o } = i,
    r = n.caretSize + n.caretPadding;
  if ((e === "left" && s + o + r > t.width) || (e === "right" && s - o - r < 0))
    return !0;
}
function Qv(e, t, n, i) {
  const { x: s, width: o } = n,
    {
      width: r,
      chartArea: { left: a, right: l },
    } = e;
  let c = "center";
  return (
    i === "center"
      ? (c = s <= (a + l) / 2 ? "left" : "right")
      : s <= o / 2
      ? (c = "left")
      : s >= r - o / 2 && (c = "right"),
    Gv(c, e, t, n) && (c = "center"),
    c
  );
}
function Xc(e, t, n) {
  const i = n.yAlign || t.yAlign || Jv(e, n);
  return { xAlign: n.xAlign || t.xAlign || Qv(e, t, n, i), yAlign: i };
}
function Zv(e, t) {
  let { x: n, width: i } = e;
  return t === "right" ? (n -= i) : t === "center" && (n -= i / 2), n;
}
function $v(e, t, n) {
  let { y: i, height: s } = e;
  return (
    t === "top" ? (i += n) : t === "bottom" ? (i -= s + n) : (i -= s / 2), i
  );
}
function Jc(e, t, n, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = e,
    { xAlign: a, yAlign: l } = n,
    c = s + o,
    { topLeft: f, topRight: u, bottomLeft: d, bottomRight: h } = ti(r);
  let g = Zv(t, a);
  const m = $v(t, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (g += c)
        : a === "right" && (g -= c)
      : a === "left"
      ? (g -= Math.max(f, d) + s)
      : a === "right" && (g += Math.max(u, h) + s),
    { x: ue(g, 0, i.width - t.width), y: ue(m, 0, i.height - t.height) }
  );
}
function Hs(e, t, n) {
  const i = zt(n.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - i.right
    : e.x + i.left;
}
function Gc(e) {
  return ke([], Re(e));
}
function t_(e, t, n) {
  return pn(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
}
function Qc(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const qd = {
  beforeTitle: Ae,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (i > 0 && t.dataIndex < i) return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: Ae,
  beforeBody: Ae,
  beforeLabel: Ae,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return xt(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: Ae,
  afterBody: Ae,
  beforeFooter: Ae,
  footer: Ae,
  afterFooter: Ae,
};
function Wt(e, t, n, i) {
  const s = e[t].call(n, i);
  return typeof s > "u" ? qd[t].call(n, i) : s;
}
class Ur extends qn {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      s = i.enabled && n.options.animation && i.animations,
      o = new Md(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = t_(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, n) {
    const { callbacks: i } = n,
      s = Wt(i, "beforeTitle", this, t),
      o = Wt(i, "title", this, t),
      r = Wt(i, "afterTitle", this, t);
    let a = [];
    return (a = ke(a, Re(s))), (a = ke(a, Re(o))), (a = ke(a, Re(r))), a;
  }
  getBeforeBody(t, n) {
    return Gc(Wt(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: i } = n,
      s = [];
    return (
      dt(t, (o) => {
        const r = { before: [], lines: [], after: [] },
          a = Qc(i, o);
        ke(r.before, Re(Wt(a, "beforeLabel", this, o))),
          ke(r.lines, Wt(a, "label", this, o)),
          ke(r.after, Re(Wt(a, "afterLabel", this, o))),
          s.push(r);
      }),
      s
    );
  }
  getAfterBody(t, n) {
    return Gc(Wt(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: i } = n,
      s = Wt(i, "beforeFooter", this, t),
      o = Wt(i, "footer", this, t),
      r = Wt(i, "afterFooter", this, t);
    let a = [];
    return (a = ke(a, Re(s))), (a = ke(a, Re(o))), (a = ke(a, Re(r))), a;
  }
  _createItems(t) {
    const n = this._active,
      i = this.chart.data,
      s = [],
      o = [],
      r = [];
    let a = [],
      l,
      c;
    for (l = 0, c = n.length; l < c; ++l) a.push(Xv(this.chart, n[l]));
    return (
      t.filter && (a = a.filter((f, u, d) => t.filter(f, u, d, i))),
      t.itemSort && (a = a.sort((f, u) => t.itemSort(f, u, i))),
      dt(a, (f) => {
        const u = Qc(t.callbacks, f);
        s.push(Wt(u, "labelColor", this, f)),
          o.push(Wt(u, "labelPointStyle", this, f)),
          r.push(Wt(u, "labelTextColor", this, f));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = a),
      a
    );
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      r = [];
    if (!s.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const a = Oi[i.position].call(this, s, this._eventPosition);
      (r = this._createItems(i)),
        (this.title = this.getTitle(r, i)),
        (this.beforeBody = this.getBeforeBody(r, i)),
        (this.body = this.getBody(r, i)),
        (this.afterBody = this.getAfterBody(r, i)),
        (this.footer = this.getFooter(r, i));
      const l = (this._size = Kc(this, i)),
        c = Object.assign({}, a, l),
        f = Xc(this.chart, i, c),
        u = Jc(i, c, f, this.chart);
      (this.xAlign = f.xAlign),
        (this.yAlign = f.yAlign),
        (o = {
          opacity: 1,
          x: u.x,
          y: u.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        i.external &&
        i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(t, n, i, s) {
    const o = this.getCaretPosition(t, i, s);
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, n, i) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: r, cornerRadius: a } = i,
      { topLeft: l, topRight: c, bottomLeft: f, bottomRight: u } = ti(a),
      { x: d, y: h } = t,
      { width: g, height: m } = n;
    let b, x, y, S, _, k;
    return (
      o === "center"
        ? ((_ = h + m / 2),
          s === "left"
            ? ((b = d), (x = b - r), (S = _ + r), (k = _ - r))
            : ((b = d + g), (x = b + r), (S = _ - r), (k = _ + r)),
          (y = b))
        : (s === "left"
            ? (x = d + Math.max(l, f) + r)
            : s === "right"
            ? (x = d + g - Math.max(c, u) - r)
            : (x = this.caretX),
          o === "top"
            ? ((S = h), (_ = S - r), (b = x - r), (y = x + r))
            : ((S = h + m), (_ = S + r), (b = x + r), (y = x - r)),
          (k = S)),
      { x1: b, x2: x, x3: y, y1: S, y2: _, y3: k }
    );
  }
  drawTitle(t, n, i) {
    const s = this.title,
      o = s.length;
    let r, a, l;
    if (o) {
      const c = ei(i.rtl, this.x, this.width);
      for (
        t.x = Hs(this, i.titleAlign, i),
          n.textAlign = c.textAlign(i.titleAlign),
          n.textBaseline = "middle",
          r = Tt(i.titleFont),
          a = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = r.string,
          l = 0;
        l < o;
        ++l
      )
        n.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + a),
          l + 1 === o && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, i, s, o) {
    const r = this.labelColors[i],
      a = this.labelPointStyles[i],
      { boxHeight: l, boxWidth: c } = o,
      f = Tt(o.bodyFont),
      u = Hs(this, "left", o),
      d = s.x(u),
      h = l < f.lineHeight ? (f.lineHeight - l) / 2 : 0,
      g = n.y + h;
    if (o.usePointStyle) {
      const m = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        b = s.leftForLtr(d, c) + c / 2,
        x = g + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        Ir(t, m, b, x),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        Ir(t, m, b, x);
    } else {
      (t.lineWidth = ct(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const m = s.leftForLtr(d, c),
        b = s.leftForLtr(s.xPlus(d, 1), c - 2),
        x = ti(r.borderRadius);
      Object.values(x).some((y) => y !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          mo(t, { x: m, y: g, w: c, h: l, radius: x }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          mo(t, { x: b, y: g + 1, w: c - 2, h: l - 2, radius: x }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(m, g, c, l),
          t.strokeRect(m, g, c, l),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(b, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, n, i) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: f,
      } = i,
      u = Tt(i.bodyFont);
    let d = u.lineHeight,
      h = 0;
    const g = ei(i.rtl, this.x, this.width),
      m = function (C) {
        n.fillText(C, g.x(t.x + h), t.y + d / 2), (t.y += d + o);
      },
      b = g.textAlign(r);
    let x, y, S, _, k, E, P;
    for (
      n.textAlign = r,
        n.textBaseline = "middle",
        n.font = u.string,
        t.x = Hs(this, b, i),
        n.fillStyle = i.bodyColor,
        dt(this.beforeBody, m),
        h = a && b !== "right" ? (r === "center" ? c / 2 + f : c + 2 + f) : 0,
        _ = 0,
        E = s.length;
      _ < E;
      ++_
    ) {
      for (
        x = s[_],
          y = this.labelTextColors[_],
          n.fillStyle = y,
          dt(x.before, m),
          S = x.lines,
          a &&
            S.length &&
            (this._drawColorBox(n, t, _, g, i),
            (d = Math.max(u.lineHeight, l))),
          k = 0,
          P = S.length;
        k < P;
        ++k
      )
        m(S[k]), (d = u.lineHeight);
      dt(x.after, m);
    }
    (h = 0), (d = u.lineHeight), dt(this.afterBody, m), (t.y -= o);
  }
  drawFooter(t, n, i) {
    const s = this.footer,
      o = s.length;
    let r, a;
    if (o) {
      const l = ei(i.rtl, this.x, this.width);
      for (
        t.x = Hs(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          n.textAlign = l.textAlign(i.footerAlign),
          n.textBaseline = "middle",
          r = Tt(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        n.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, n, i, s) {
    const { xAlign: o, yAlign: r } = this,
      { x: a, y: l } = t,
      { width: c, height: f } = i,
      {
        topLeft: u,
        topRight: d,
        bottomLeft: h,
        bottomRight: g,
      } = ti(s.cornerRadius);
    (n.fillStyle = s.backgroundColor),
      (n.strokeStyle = s.borderColor),
      (n.lineWidth = s.borderWidth),
      n.beginPath(),
      n.moveTo(a + u, l),
      r === "top" && this.drawCaret(t, n, i, s),
      n.lineTo(a + c - d, l),
      n.quadraticCurveTo(a + c, l, a + c, l + d),
      r === "center" && o === "right" && this.drawCaret(t, n, i, s),
      n.lineTo(a + c, l + f - g),
      n.quadraticCurveTo(a + c, l + f, a + c - g, l + f),
      r === "bottom" && this.drawCaret(t, n, i, s),
      n.lineTo(a + h, l + f),
      n.quadraticCurveTo(a, l + f, a, l + f - h),
      r === "center" && o === "left" && this.drawCaret(t, n, i, s),
      n.lineTo(a, l + u),
      n.quadraticCurveTo(a, l, a + u, l),
      n.closePath(),
      n.fill(),
      s.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      i = this.$animations,
      s = i && i.x,
      o = i && i.y;
    if (s || o) {
      const r = Oi[t.position].call(this, this._active, this._eventPosition);
      if (!r) return;
      const a = (this._size = Kc(this, t)),
        l = Object.assign({}, r, this._size),
        c = Xc(n, t, l),
        f = Jc(t, l, c, n);
      (s._to !== f.x || o._to !== f.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, f));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(n);
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const r = zt(n.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(o, t, s, n),
      kd(t, n.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, n),
      this.drawBody(o, t, n),
      this.drawFooter(o, t, n),
      Sd(t, n.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const i = this._active,
      s = t.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: c.data[l], index: l };
      }),
      o = !co(i, s),
      r = this._positionChanged(s, n);
    (o || r) &&
      ((this._active = s),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, n, i),
      a = this._positionChanged(r, t),
      l = n || !co(r, o) || a;
    return (
      l &&
        ((this._active = r),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      l
    );
  }
  _getActiveElements(t, n, i, s) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!s) return n;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: s, options: o } = this,
      r = Oi[o.position].call(this, t, n);
    return r !== !1 && (i !== r.x || s !== r.y);
  }
}
$(Ur, "positioners", Oi);
var e_ = {
  id: "tooltip",
  _element: Ur,
  positioners: Oi,
  afterInit(e, t, n) {
    n && (e.tooltip = new Ur({ chart: e, options: n }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: qd,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const n_ = (e, t, n, i) => (
  typeof t == "string"
    ? ((n = e.push(t) - 1), i.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
);
function i_(e, t, n, i) {
  const s = e.indexOf(t);
  if (s === -1) return n_(e, t, n, i);
  const o = e.lastIndexOf(t);
  return s !== o ? n : s;
}
const s_ = (e, t) => (e === null ? null : ue(Math.round(e), 0, t));
function Zc(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class Hr extends Un {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const i = this.getLabels();
      for (const { index: s, label: o } of n) i[s] === o && i.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (xt(t)) return null;
    const i = this.getLabels();
    return (
      (n =
        isFinite(n) && i[n] === t ? n : i_(i, t, at(n, t), this._addedLabels)),
      s_(n, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (i = 0), n || (s = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      i = this.options.offset,
      s = [];
    let o = this.getLabels();
    (o = t === 0 && n === o.length - 1 ? o : o.slice(t, n + 1)),
      (this._valueRange = Math.max(o.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let r = t; r <= n; r++) s.push({ value: r });
    return s;
  }
  getLabelForValue(t) {
    return Zc.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
$(Hr, "id", "category"), $(Hr, "defaults", { ticks: { callback: Zc } });
function o_(e, t) {
  const n = [],
    {
      bounds: s,
      step: o,
      min: r,
      max: a,
      precision: l,
      count: c,
      maxTicks: f,
      maxDigits: u,
      includeBounds: d,
    } = e,
    h = o || 1,
    g = f - 1,
    { min: m, max: b } = t,
    x = !xt(r),
    y = !xt(a),
    S = !xt(c),
    _ = (b - m) / (u + 1);
  let k = ic((b - m) / g / h) * h,
    E,
    P,
    C,
    T;
  if (k < 1e-14 && !x && !y) return [{ value: m }, { value: b }];
  (T = Math.ceil(b / k) - Math.floor(m / k)),
    T > g && (k = ic((T * k) / g / h) * h),
    xt(l) || ((E = Math.pow(10, l)), (k = Math.ceil(k * E) / E)),
    s === "ticks"
      ? ((P = Math.floor(m / k) * k), (C = Math.ceil(b / k) * k))
      : ((P = m), (C = b)),
    x && y && o && K0((a - r) / o, k / 1e3)
      ? ((T = Math.round(Math.min((a - r) / k, f))),
        (k = (a - r) / T),
        (P = r),
        (C = a))
      : S
      ? ((P = x ? r : P), (C = y ? a : C), (T = c - 1), (k = (C - P) / T))
      : ((T = (C - P) / k),
        Wi(T, Math.round(T), k / 1e3)
          ? (T = Math.round(T))
          : (T = Math.ceil(T)));
  const R = Math.max(sc(k), sc(P));
  (E = Math.pow(10, xt(l) ? R : l)),
    (P = Math.round(P * E) / E),
    (C = Math.round(C * E) / E);
  let N = 0;
  for (
    x &&
    (d && P !== r
      ? (n.push({ value: r }),
        P < r && N++,
        Wi(Math.round((P + N * k) * E) / E, r, $c(r, _, e)) && N++)
      : P < r && N++);
    N < T;
    ++N
  ) {
    const O = Math.round((P + N * k) * E) / E;
    if (y && O > a) break;
    n.push({ value: O });
  }
  return (
    y && d && C !== a
      ? n.length && Wi(n[n.length - 1].value, a, $c(a, _, e))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!y || C === a) && n.push({ value: C }),
    n
  );
}
function $c(e, t, { horizontal: n, minRotation: i }) {
  const s = tn(i),
    o = (n ? Math.sin(s) : Math.cos(s)) || 0.001,
    r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class xo extends Un {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    return xt(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => (s = n ? s : l),
      a = (l) => (o = i ? o : l);
    if (t) {
      const l = li(s),
        c = li(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    (this.min = s), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = t,
      s;
    return (
      i
        ? ((s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (n = n || 11)),
      n && (s = Math.min(n, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      o = this._range || this,
      r = o_(s, o);
    return (
      t.bounds === "ticks" && cd(r, this, "value"),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  configure() {
    const t = this.ticks;
    let n = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (i - n) / Math.max(t.length - 1, 1) / 2;
      (n -= s), (i += s);
    }
    (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
  }
  getLabelForValue(t) {
    return Na(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class jr extends xo {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = Ft(t) ? t : 0),
      (this.max = Ft(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      i = tn(this.options.ticks.minRotation),
      s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
$(jr, "id", "linear"),
  $(jr, "defaults", { ticks: { callback: Uo.formatters.numeric } });
const cs = (e) => Math.floor($e(e)),
  vn = (e, t) => Math.pow(10, cs(e) + t);
function tf(e) {
  return e / Math.pow(10, cs(e)) === 1;
}
function ef(e, t, n) {
  const i = Math.pow(10, n),
    s = Math.floor(e / i);
  return Math.ceil(t / i) - s;
}
function r_(e, t) {
  const n = t - e;
  let i = cs(n);
  for (; ef(e, t, i) > 10; ) i++;
  for (; ef(e, t, i) < 10; ) i--;
  return Math.min(i, cs(e));
}
function a_(e, { min: t, max: n }) {
  t = $t(e.min, t);
  const i = [],
    s = cs(t);
  let o = r_(t, n),
    r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o),
    l = s > o ? Math.pow(10, s) : 0,
    c = Math.round((t - l) * r) / r,
    f = Math.floor((t - l) / a / 10) * a * 10;
  let u = Math.floor((c - f) / Math.pow(10, o)),
    d = $t(e.min, Math.round((l + f + u * Math.pow(10, o)) * r) / r);
  for (; d < n; )
    i.push({ value: d, major: tf(d), significand: u }),
      u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
      u >= 20 && (o++, (u = 2), (r = o >= 0 ? 1 : r)),
      (d = Math.round((l + f + u * Math.pow(10, o)) * r) / r);
  const h = $t(e.max, d);
  return i.push({ value: h, major: tf(h), significand: u }), i;
}
class nf extends Un {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    const i = xo.prototype.parse.apply(this, [t, n]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return Ft(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = Ft(t) ? Math.max(0, t) : null),
      (this.max = Ft(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Ft(this._userMin) &&
        (this.min = t === vn(this.min, 0) ? vn(this.min, -1) : vn(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let i = this.min,
      s = this.max;
    const o = (a) => (i = t ? i : a),
      r = (a) => (s = n ? s : a);
    i === s && (i <= 0 ? (o(1), r(10)) : (o(vn(i, -1)), r(vn(s, 1)))),
      i <= 0 && o(vn(s, -1)),
      s <= 0 && r(vn(i, 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = a_(n, this);
    return (
      t.bounds === "ticks" && cd(i, this, "value"),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : Na(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = $e(t)),
      (this._valueRange = $e(this.max) - $e(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : ($e(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
$(nf, "id", "logarithmic"),
  $(nf, "defaults", {
    ticks: { callback: Uo.formatters.logarithmic, major: { enabled: !0 } },
  });
function Wr(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = zt(t.backdropPadding);
    return at(t.font && t.font.size, kt.font.size) + n.height;
  }
  return 0;
}
function l_(e, t, n) {
  return (
    (n = _t(n) ? n : [n]), { w: py(e, t.string, n), h: n.length * t.lineHeight }
  );
}
function sf(e, t, n, i, s) {
  return e === i || e === s
    ? { start: t - n / 2, end: t + n / 2 }
    : e < i || e > s
    ? { start: t - n, end: t }
    : { start: t, end: t + n };
}
function c_(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    i = [],
    s = [],
    o = e._pointLabels.length,
    r = e.options.pointLabels,
    a = r.centerPointLabels ? At / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(e.getPointLabelContext(l));
    s[l] = c.padding;
    const f = e.getPointPosition(l, e.drawingArea + s[l], a),
      u = Tt(c.font),
      d = l_(e.ctx, u, e._pointLabels[l]);
    i[l] = d;
    const h = me(e.getIndexAngle(l) + a),
      g = Math.round(Ra(h)),
      m = sf(g, f.x, d.w, 0, 180),
      b = sf(g, f.y, d.h, 90, 270);
    f_(n, t, h, m, b);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = h_(e, i, s));
}
function f_(e, t, n, i, s) {
  const o = Math.abs(Math.sin(n)),
    r = Math.abs(Math.cos(n));
  let a = 0,
    l = 0;
  i.start < t.l
    ? ((a = (t.l - i.start) / o), (e.l = Math.min(e.l, t.l - a)))
    : i.end > t.r && ((a = (i.end - t.r) / o), (e.r = Math.max(e.r, t.r + a))),
    s.start < t.t
      ? ((l = (t.t - s.start) / r), (e.t = Math.min(e.t, t.t - l)))
      : s.end > t.b &&
        ((l = (s.end - t.b) / r), (e.b = Math.max(e.b, t.b + l)));
}
function u_(e, t, n) {
  const i = e.drawingArea,
    { extra: s, additionalAngle: o, padding: r, size: a } = n,
    l = e.getPointPosition(t, i + s + r, o),
    c = Math.round(Ra(me(l.angle + Jt))),
    f = m_(l.y, a.h, c),
    u = p_(c),
    d = g_(l.x, a.w, u);
  return {
    visible: !0,
    x: l.x,
    y: f,
    textAlign: u,
    left: d,
    top: f,
    right: d + a.w,
    bottom: f + a.h,
  };
}
function d_(e, t) {
  if (!t) return !0;
  const { left: n, top: i, right: s, bottom: o } = e;
  return !(
    Ne({ x: n, y: i }, t) ||
    Ne({ x: n, y: o }, t) ||
    Ne({ x: s, y: i }, t) ||
    Ne({ x: s, y: o }, t)
  );
}
function h_(e, t, n) {
  const i = [],
    s = e._pointLabels.length,
    o = e.options,
    { centerPointLabels: r, display: a } = o.pointLabels,
    l = { extra: Wr(o) / 2, additionalAngle: r ? At / s : 0 };
  let c;
  for (let f = 0; f < s; f++) {
    (l.padding = n[f]), (l.size = t[f]);
    const u = u_(e, f, l);
    i.push(u), a === "auto" && ((u.visible = d_(u, c)), u.visible && (c = u));
  }
  return i;
}
function p_(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function g_(e, t, n) {
  return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e;
}
function m_(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  );
}
function b_(e, t, n) {
  const { left: i, top: s, right: o, bottom: r } = n,
    { backdropColor: a } = t;
  if (!xt(a)) {
    const l = ti(t.borderRadius),
      c = zt(t.backdropPadding);
    e.fillStyle = a;
    const f = i - c.left,
      u = s - c.top,
      d = o - i + c.width,
      h = r - s + c.height;
    Object.values(l).some((g) => g !== 0)
      ? (e.beginPath(), mo(e, { x: f, y: u, w: d, h, radius: l }), e.fill())
      : e.fillRect(f, u, d, h);
  }
}
function y_(e, t) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = e;
  for (let s = t - 1; s >= 0; s--) {
    const o = e._pointLabelItems[s];
    if (!o.visible) continue;
    const r = i.setContext(e.getPointLabelContext(s));
    b_(n, r, o);
    const a = Tt(r.font),
      { x: l, y: c, textAlign: f } = o;
    Nn(n, e._pointLabels[s], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: f,
      textBaseline: "middle",
    });
  }
}
function Ud(e, t, n, i) {
  const { ctx: s } = e;
  if (n) s.arc(e.xCenter, e.yCenter, t, 0, pe);
  else {
    let o = e.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++)
      (o = e.getPointPosition(r, t)), s.lineTo(o.x, o.y);
  }
}
function x_(e, t, n, i, s) {
  const o = e.ctx,
    r = t.circular,
    { color: a, lineWidth: l } = t;
  (!r && !i) ||
    !a ||
    !l ||
    n < 0 ||
    (o.save(),
    (o.strokeStyle = a),
    (o.lineWidth = l),
    o.setLineDash(s.dash),
    (o.lineDashOffset = s.dashOffset),
    o.beginPath(),
    Ud(e, n, r, i),
    o.closePath(),
    o.stroke(),
    o.restore());
}
function v_(e, t, n) {
  return pn(e, { label: n, index: t, type: "pointLabel" });
}
class js extends xo {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = zt(Wr(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2));
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    (this.min = Ft(t) && !isNaN(t) ? t : 0),
      (this.max = Ft(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Wr(this.options));
  }
  generateTickLabels(t) {
    xo.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const s = bt(this.options.pointLabels.callback, [n, i], this);
          return s || s === 0 ? s : "";
        })
        .filter((n, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? c_(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, i, s) {
    (this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((i - s) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, n, i, s)
      ));
  }
  getIndexAngle(t) {
    const n = pe / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return me(t * n + tn(i));
  }
  getDistanceFromCenterForValue(t) {
    if (xt(t)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (xt(t)) return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return v_(this.getContext(), t, i);
    }
  }
  getPointPosition(t, n, i = 0) {
    const s = this.getIndexAngle(t) - Jt + i;
    return {
      x: Math.cos(s) * n + this.xCenter,
      y: Math.sin(s) * n + this.yCenter,
      angle: s,
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: s, bottom: o } = this._pointLabelItems[t];
    return { left: n, top: i, right: s, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        Ud(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: i, grid: s, border: o } = n,
      r = this._pointLabels.length;
    let a, l, c;
    if (
      (n.pointLabels.display && y_(this, r),
      s.display &&
        this.ticks.forEach((f, u) => {
          if (u !== 0) {
            l = this.getDistanceFromCenterForValue(f.value);
            const d = this.getContext(u),
              h = s.setContext(d),
              g = o.setContext(d);
            x_(this, h, l, r, g);
          }
        }),
      i.display)
    ) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const f = i.setContext(this.getPointLabelContext(a)),
          { color: u, lineWidth: d } = f;
        !d ||
          !u ||
          ((t.lineWidth = d),
          (t.strokeStyle = u),
          t.setLineDash(f.borderDash),
          (t.lineDashOffset = f.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max
          )),
          (c = this.getPointPosition(a, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      i = n.ticks;
    if (!i.display) return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && !n.reverse) return;
        const c = i.setContext(this.getContext(l)),
          f = Tt(c.font);
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (t.font = f.string),
            (r = t.measureText(a.label).width),
            (t.fillStyle = c.backdropColor);
          const u = zt(c.backdropPadding);
          t.fillRect(
            -r / 2 - u.left,
            -o - f.size / 2 - u.top,
            r + u.width,
            f.size + u.height
          );
        }
        Nn(t, a.label, 0, -o, f, {
          color: c.color,
          strokeColor: c.textStrokeColor,
          strokeWidth: c.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
$(js, "id", "radialLinear"),
  $(js, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Uo.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  $(js, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  $(js, "descriptors", { angleLines: { _fallback: "grid" } });
const Wo = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Kt = Object.keys(Wo);
function of(e, t) {
  return e - t;
}
function rf(e, t) {
  if (xt(t)) return null;
  const n = e._adapter,
    { parser: i, round: s, isoWeekday: o } = e._parseOpts;
  let r = t;
  return (
    typeof i == "function" && (r = i(r)),
    Ft(r) || (r = typeof i == "string" ? n.parse(r, i) : n.parse(r)),
    r === null
      ? null
      : (s &&
          (r =
            s === "week" && (as(o) || o === !0)
              ? n.startOf(r, "isoWeek", o)
              : n.startOf(r, s)),
        +r)
  );
}
function af(e, t, n, i) {
  const s = Kt.length;
  for (let o = Kt.indexOf(e); o < s - 1; ++o) {
    const r = Wo[Kt[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= i) return Kt[o];
  }
  return Kt[s - 1];
}
function __(e, t, n, i, s) {
  for (let o = Kt.length - 1; o >= Kt.indexOf(n); o--) {
    const r = Kt[o];
    if (Wo[r].common && e._adapter.diff(s, i, r) >= t - 1) return r;
  }
  return Kt[n ? Kt.indexOf(n) : 0];
}
function w_(e) {
  for (let t = Kt.indexOf(e) + 1, n = Kt.length; t < n; ++t)
    if (Wo[Kt[t]].common) return Kt[t];
}
function lf(e, t, n) {
  if (!n) e[t] = !0;
  else if (n.length) {
    const { lo: i, hi: s } = Oa(n, t),
      o = n[i] >= t ? n[i] : n[s];
    e[o] = !0;
  }
}
function k_(e, t, n, i) {
  const s = e._adapter,
    o = +s.startOf(t[0].value, i),
    r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, i))
    (l = n[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function cf(e, t, n) {
  const i = [],
    s = {},
    o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    (a = t[r]), (s[a] = r), i.push({ value: a, major: !1 });
  return o === 0 || !n ? i : k_(e, i, s, n);
}
class vo extends Un {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, n = {}) {
    const i = t.time || (t.time = {}),
      s = (this._adapter = new _x._date(t.adapters.date));
    s.init(n),
      ji(i.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized);
  }
  parse(t, n) {
    return t === void 0 ? null : rf(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      i = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)),
        !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (s = Ft(s) && !isNaN(s) ? s : +n.startOf(Date.now(), i)),
      (o = Ft(o) && !isNaN(o) ? o : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((n = t[0]), (i = t[t.length - 1])), { min: n, max: i };
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      i = t.ticks,
      s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      r = this.max,
      a = Z0(s, o, r);
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? af(n.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : __(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !i.major.enabled || this._unit === "year" ? void 0 : w_(this._unit)),
      this.initOffsets(s),
      t.reverse && a.reverse(),
      cf(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0,
      i = 0,
      s,
      o;
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - s)
        : (n = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (i = o)
        : (i = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (n = ue(n, 0, r)),
      (i = ue(i, 0, r)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      i = this.max,
      s = this.options,
      o = s.time,
      r = o.unit || af(o.minUnit, n, i, this._getLabelCapacity(n)),
      a = at(s.ticks.stepSize, 1),
      l = r === "week" ? o.isoWeekday : !1,
      c = as(l) || l === !0,
      f = {};
    let u = n,
      d,
      h;
    if (
      (c && (u = +t.startOf(u, "isoWeek", l)),
      (u = +t.startOf(u, c ? "day" : r)),
      t.diff(i, n, r) > 1e5 * a)
    )
      throw new Error(
        n + " and " + i + " are too far apart with stepSize of " + a + " " + r
      );
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (d = u, h = 0; d < i; d = +t.add(d, a, r), h++) lf(f, d, g);
    return (
      (d === i || s.bounds === "ticks" || h === 1) && lf(f, d, g),
      Object.keys(f)
        .sort(of)
        .map((m) => +m)
    );
  }
  getLabelForValue(t) {
    const n = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? n.format(t, i.tooltipFormat)
      : n.format(t, i.displayFormats.datetime);
  }
  format(t, n) {
    const s = this.options.time.displayFormats,
      o = this._unit,
      r = n || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, n, i, s) {
    const o = this.options,
      r = o.ticks.callback;
    if (r) return bt(r, [t, n, i], this);
    const a = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      f = l && a[l],
      u = c && a[c],
      d = i[n],
      h = c && u && d && d.major;
    return this._adapter.format(t, s || (h ? u : f));
  }
  generateTickLabels(t) {
    let n, i, s;
    for (n = 0, i = t.length; n < i; ++n)
      (s = t[n]), (s.label = this._tickFormatFunction(s.value, n, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets,
      i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      i = this.ctx.measureText(t).width,
      s = tn(this.isHorizontal() ? n.maxRotation : n.minRotation),
      o = Math.cos(s),
      r = Math.sin(s),
      a = this._resolveTickFontOptions(0).size;
    return { w: i * o + a * r, h: i * r + a * o };
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      i = n.displayFormats,
      s = i[n.unit] || i.millisecond,
      o = this._tickFormatFunction(t, 0, cf(this, [t], this._majorUnit), s),
      r = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      i;
    if (t.length) return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (n = 0, i = s.length; n < i; ++n)
      t = t.concat(s[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, i;
    if (t.length) return t;
    const s = this.getLabels();
    for (n = 0, i = s.length; n < i; ++n) t.push(rf(this, s[n]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return ty(t.sort(of));
  }
}
$(vo, "id", "time"),
  $(vo, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function Ws(e, t, n) {
  let i = 0,
    s = e.length - 1,
    o,
    r,
    a,
    l;
  n
    ? (t >= e[i].pos && t <= e[s].pos && ({ lo: i, hi: s } = Mn(e, "pos", t)),
      ({ pos: o, time: a } = e[i]),
      ({ pos: r, time: l } = e[s]))
    : (t >= e[i].time &&
        t <= e[s].time &&
        ({ lo: i, hi: s } = Mn(e, "time", t)),
      ({ time: o, pos: a } = e[i]),
      ({ time: r, pos: l } = e[s]));
  const c = r - o;
  return c ? a + ((l - a) * (t - o)) / c : a;
}
class ff extends vo {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t));
    (this._minPos = Ws(n, this.min)),
      (this._tableRange = Ws(n, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this,
      s = [],
      o = [];
    let r, a, l, c, f;
    for (r = 0, a = t.length; r < a; ++r)
      (c = t[r]), c >= n && c <= i && s.push(c);
    if (s.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (r = 0, a = s.length; r < a; ++r)
      (f = s[r + 1]),
        (l = s[r - 1]),
        (c = s[r]),
        Math.round((f + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) });
    return o;
  }
  _generate() {
    const t = this.min,
      n = this.max;
    let i = super.getDataTimestamps();
    return (
      (!i.includes(t) || !i.length) && i.splice(0, 0, t),
      (!i.includes(n) || i.length === 1) && i.push(n),
      i.sort((s, o) => s - o)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      n.length && i.length
        ? (t = this.normalize(n.concat(i)))
        : (t = n.length ? n : i),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Ws(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end;
    return Ws(this._table, i * this._tableRange + this._minPos, !0);
  }
}
$(ff, "id", "timeseries"), $(ff, "defaults", vo.defaults);
const Hd = {
    data: { type: Object, required: !0 },
    options: { type: Object, default: () => ({}) },
    plugins: { type: Array, default: () => [] },
    datasetIdKey: { type: String, default: "label" },
    updateMode: { type: String, default: void 0 },
  },
  S_ = { type: { type: String, required: !0 }, ...Hd },
  C_ =
    _a[0] === "2"
      ? (e, t) => Object.assign(e, { attrs: t })
      : (e, t) => Object.assign(e, t);
function Yn(e) {
  return gs(e) ? it(e) : e;
}
function M_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return gs(t) ? new Proxy(e, {}) : e;
}
function P_(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function jd(e, t) {
  e.labels = t;
}
function Wd(e, t, n) {
  const i = [];
  e.datasets = t.map((s) => {
    const o = e.datasets.find((r) => r[n] === s[n]);
    return !o || !s.data || i.includes(o)
      ? { ...s }
      : (i.push(o), Object.assign(o, s), o);
  });
}
function E_(e, t) {
  const n = { labels: [], datasets: [] };
  return jd(n, e.labels), Wd(n, e.datasets, t), n;
}
const T_ = Vn({
  props: S_,
  setup(e, t) {
    let { expose: n } = t;
    const i = nn(null),
      s = To(null);
    n({ chart: s });
    const o = () => {
        if (!i.value) return;
        const { type: l, data: c, options: f, plugins: u, datasetIdKey: d } = e,
          h = E_(c, d),
          g = M_(h, c);
        s.value = new jo(i.value, {
          type: l,
          data: g,
          options: { ...f },
          plugins: u,
        });
      },
      r = () => {
        const l = it(s.value);
        l && (l.destroy(), (s.value = null));
      },
      a = (l) => {
        l.update(e.updateMode);
      };
    return (
      gi(o),
      ys(r),
      ze(
        [() => e.options, () => e.data],
        (l, c) => {
          let [f, u] = l,
            [d, h] = c;
          const g = it(s.value);
          if (!g) return;
          let m = !1;
          if (f) {
            const b = Yn(f),
              x = Yn(d);
            b && b !== x && (P_(g, b), (m = !0));
          }
          if (u) {
            const b = Yn(u.labels),
              x = Yn(h.labels),
              y = Yn(u.datasets),
              S = Yn(h.datasets);
            b !== x && (jd(g.config.data, b), (m = !0)),
              y && y !== S && (Wd(g.config.data, y, e.datasetIdKey), (m = !0));
          }
          m && a(g);
        },
        { deep: !0 }
      ),
      () => mi("canvas", { ref: i })
    );
  },
});
function A_(e, t) {
  return (
    jo.register(t),
    Vn({
      props: Hd,
      setup(n, i) {
        let { expose: s } = i;
        const o = To(null),
          r = (a) => {
            o.value = a == null ? void 0 : a.chart;
          };
        return s({ chart: o }), () => mi(T_, C_({ ref: r }, { type: e, ...n }));
      },
    })
  );
}
const D_ = A_("line", Js);
jo.register(Hr, jr, Zs, Ri, Kv, e_, Wv);
const F_ = {
    name: "CoinDetail",
    components: { Line: D_ },
    data() {
      return {
        asset: {},
        history: [],
        isLoading: !1,
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#68d391",
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
        options: { responsive: !0, maintainAspectRatio: !1 },
      };
    },
    computed: {
      min() {
        return Math.min(
          ...this.history.map((e) => parseFloat(e.priceUsd).toFixed(2))
        );
      },
      max() {
        return Math.max(
          ...this.history.map((e) => parseFloat(e.priceUsd).toFixed(2))
        );
      },
      avg() {
        return Math.abs(
          ...this.history.map((e) => parseFloat(e.priceUsd).toFixed(2))
        );
      },
    },
    created() {
      this.getCoin();
    },
    methods: {
      getCoin() {
        this.isLoading = !0;
        const e = this.$route.params.id;
        Promise.all([Or.getAsset(e), Or.getAssetHistory(e)])
          .then(([t, n]) => {
            (this.asset = t), (this.history = n);
          })
          .finally(() => (this.isLoading = !1));
      },
    },
  },
  bi = (e) => (aa("data-v-8e31a77e"), (e = e()), la(), e),
  R_ = { class: "flex justify-center" },
  O_ = { class: "flex-col" },
  L_ = {
    key: 0,
    class: "flex flex-col sm:flex-row justify-around items-center",
  },
  B_ = { class: "flex flex-col items-center" },
  N_ = ["src", "alt"],
  I_ = { class: "text-5xl" },
  z_ = { class: "sm:mr-2 text-gray-500" },
  V_ = { class: "my-10 flex flex-col" },
  q_ = { class: "flex justify-between" },
  U_ = bi(() =>
    Y("b", { class: "text-gray-600 mr-10 uppercase" }, "Ranking", -1)
  ),
  H_ = { class: "flex justify-between" },
  j_ = bi(() =>
    Y("b", { class: "text-gray-600 mr-10 uppercase" }, "Precio actual", -1)
  ),
  W_ = { class: "flex justify-between" },
  Y_ = bi(() =>
    Y("b", { class: "text-gray-600 mr-10 uppercase" }, "Precio más bajo", -1)
  ),
  K_ = { class: "flex justify-between" },
  X_ = bi(() =>
    Y("b", { class: "text-gray-600 mr-10 uppercase" }, "Precio más alto", -1)
  ),
  J_ = { class: "flex justify-between" },
  G_ = bi(() =>
    Y("b", { class: "text-gray-600 mr-10 uppercase" }, "Precio Promedio", -1)
  ),
  Q_ = { class: "flex justify-between" },
  Z_ = bi(() =>
    Y("b", { class: "text-gray-600 mr-10 uppercase" }, "Variación 24hs", -1)
  ),
  $_ = xu(
    '<div class="my-10 sm:mt-0 flex flex-col justify-center text-center" data-v-8e31a77e><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" data-v-8e31a77e> Cambiar </button><div class="flex flex-row my-5" data-v-8e31a77e><label class="w-full" for="convertValue" data-v-8e31a77e><input id="convertValue" type="number" class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" data-v-8e31a77e></label></div><span class="text-xl" data-v-8e31a77e></span></div>',
    1
  );
function t1(e, t, n, i, s, o) {
  const r = se("BounceLoader"),
    a = se("Line");
  return (
    It(),
    ie(
      Pt,
      null,
      [
        Y("div", R_, [
          st(
            r,
            { loading: s.isLoading, color: "#68d391", size: "400px" },
            null,
            8,
            ["loading"]
          ),
        ]),
        Y("div", O_, [
          s.asset.id
            ? (It(),
              ie("div", L_, [
                Y("div", B_, [
                  Y(
                    "img",
                    {
                      src: `https://static.coincap.io/assets/icons/${s.asset.symbol.toLowerCase()}@2x.png`,
                      alt: s.asset.name,
                      class: "w-20 h-20 mr-5",
                    },
                    null,
                    8,
                    N_
                  ),
                  Y("h1", I_, [
                    he(Ht(s.asset.name) + " ", 1),
                    Y("small", z_, Ht(s.asset.symbol), 1),
                  ]),
                ]),
                Y("div", V_, [
                  Y("ul", null, [
                    Y("li", q_, [
                      U_,
                      Y("span", null, "#" + Ht(s.asset.rank), 1),
                    ]),
                    Y("li", H_, [
                      j_,
                      Y(
                        "span",
                        null,
                        Ht(e.$filters.dollarFilter(s.asset.priceUsd)),
                        1
                      ),
                    ]),
                    Y("li", W_, [
                      Y_,
                      Y("span", null, Ht(e.$filters.dollarFilter(o.min)), 1),
                    ]),
                    Y("li", K_, [
                      X_,
                      Y("span", null, Ht(e.$filters.dollarFilter(o.max)), 1),
                    ]),
                    Y("li", J_, [
                      G_,
                      Y("span", null, Ht(e.$filters.dollarFilter(o.avg)), 1),
                    ]),
                    Y("li", Q_, [
                      Z_,
                      Y(
                        "span",
                        null,
                        Ht(e.$filters.dollarFilter(s.asset.changePercent24Hr)),
                        1
                      ),
                    ]),
                  ]),
                ]),
                $_,
              ]))
            : vu("", !0),
          st(a, { data: e.data, options: s.options }, null, 8, [
            "data",
            "options",
          ]),
        ]),
      ],
      64
    )
  );
}
const e1 = He(F_, [
    ["render", t1],
    ["__scopeId", "data-v-8e31a77e"],
  ]),
  n1 = [
    { path: "/", name: "home", component: n0 },
    { path: "/coin/:id", name: "coin-detail", component: e1 },
    { path: "/about", name: "about", component: l0 },
    { path: "/:catchAll(.*)", name: "error", component: p0 },
  ],
  i1 = Lb({ history: Qm(), routes: n1 });
var s1 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function o1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function r1(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function i() {
      if (this instanceof i) {
        var s = [null];
        s.push.apply(s, arguments);
        var o = Function.bind.apply(t, s);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (i) {
      var s = Object.getOwnPropertyDescriptor(e, i);
      Object.defineProperty(
        n,
        i,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return e[i];
              },
            }
      );
    }),
    n
  );
}
var Yd = { exports: {} };
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */ (function (e) {
  (function (t, n) {
    e.exports ? (e.exports = n()) : (t.numeral = n());
  })(s1, function () {
    var t,
      n,
      i = "2.0.6",
      s = {},
      o = {},
      r = {
        currentLocale: "en",
        zeroFormat: null,
        nullFormat: null,
        defaultFormat: "0,0",
        scalePercentBy100: !0,
      },
      a = {
        currentLocale: r.currentLocale,
        zeroFormat: r.zeroFormat,
        nullFormat: r.nullFormat,
        defaultFormat: r.defaultFormat,
        scalePercentBy100: r.scalePercentBy100,
      };
    function l(c, f) {
      (this._input = c), (this._value = f);
    }
    return (
      (t = function (c) {
        var f, u, d, h;
        if (t.isNumeral(c)) f = c.value();
        else if (c === 0 || typeof c > "u") f = 0;
        else if (c === null || n.isNaN(c)) f = null;
        else if (typeof c == "string")
          if (a.zeroFormat && c === a.zeroFormat) f = 0;
          else if (
            (a.nullFormat && c === a.nullFormat) ||
            !c.replace(/[^0-9]+/g, "").length
          )
            f = null;
          else {
            for (u in s)
              if (
                ((h =
                  typeof s[u].regexps.unformat == "function"
                    ? s[u].regexps.unformat()
                    : s[u].regexps.unformat),
                h && c.match(h))
              ) {
                d = s[u].unformat;
                break;
              }
            (d = d || t._.stringToNumber), (f = d(c));
          }
        else f = Number(c) || null;
        return new l(c, f);
      }),
      (t.version = i),
      (t.isNumeral = function (c) {
        return c instanceof l;
      }),
      (t._ = n =
        {
          numberToFormat: function (c, f, u) {
            var d = o[t.options.currentLocale],
              h = !1,
              g = !1,
              m = 0,
              b = "",
              x = 1e12,
              y = 1e9,
              S = 1e6,
              _ = 1e3,
              k = "",
              E = !1,
              P,
              C,
              T,
              R,
              N,
              O,
              U;
            if (
              ((c = c || 0),
              (C = Math.abs(c)),
              t._.includes(f, "(")
                ? ((h = !0), (f = f.replace(/[\(|\)]/g, "")))
                : (t._.includes(f, "+") || t._.includes(f, "-")) &&
                  ((N = t._.includes(f, "+")
                    ? f.indexOf("+")
                    : c < 0
                    ? f.indexOf("-")
                    : -1),
                  (f = f.replace(/[\+|\-]/g, ""))),
              t._.includes(f, "a") &&
                ((P = f.match(/a(k|m|b|t)?/)),
                (P = P ? P[1] : !1),
                t._.includes(f, " a") && (b = " "),
                (f = f.replace(new RegExp(b + "a[kmbt]?"), "")),
                (C >= x && !P) || P === "t"
                  ? ((b += d.abbreviations.trillion), (c = c / x))
                  : (C < x && C >= y && !P) || P === "b"
                  ? ((b += d.abbreviations.billion), (c = c / y))
                  : (C < y && C >= S && !P) || P === "m"
                  ? ((b += d.abbreviations.million), (c = c / S))
                  : ((C < S && C >= _ && !P) || P === "k") &&
                    ((b += d.abbreviations.thousand), (c = c / _))),
              t._.includes(f, "[.]") && ((g = !0), (f = f.replace("[.]", "."))),
              (T = c.toString().split(".")[0]),
              (R = f.split(".")[1]),
              (O = f.indexOf(",")),
              (m = (f.split(".")[0].split(",")[0].match(/0/g) || []).length),
              R
                ? (t._.includes(R, "[")
                    ? ((R = R.replace("]", "")),
                      (R = R.split("[")),
                      (k = t._.toFixed(
                        c,
                        R[0].length + R[1].length,
                        u,
                        R[1].length
                      )))
                    : (k = t._.toFixed(c, R.length, u)),
                  (T = k.split(".")[0]),
                  t._.includes(k, ".")
                    ? (k = d.delimiters.decimal + k.split(".")[1])
                    : (k = ""),
                  g && Number(k.slice(1)) === 0 && (k = ""))
                : (T = t._.toFixed(c, 0, u)),
              b && !P && Number(T) >= 1e3 && b !== d.abbreviations.trillion)
            )
              switch (((T = String(Number(T) / 1e3)), b)) {
                case d.abbreviations.thousand:
                  b = d.abbreviations.million;
                  break;
                case d.abbreviations.million:
                  b = d.abbreviations.billion;
                  break;
                case d.abbreviations.billion:
                  b = d.abbreviations.trillion;
                  break;
              }
            if (
              (t._.includes(T, "-") && ((T = T.slice(1)), (E = !0)),
              T.length < m)
            )
              for (var z = m - T.length; z > 0; z--) T = "0" + T;
            return (
              O > -1 &&
                (T = T.toString().replace(
                  /(\d)(?=(\d{3})+(?!\d))/g,
                  "$1" + d.delimiters.thousands
                )),
              f.indexOf(".") === 0 && (T = ""),
              (U = T + k + (b || "")),
              h
                ? (U = (h && E ? "(" : "") + U + (h && E ? ")" : ""))
                : N >= 0
                ? (U = N === 0 ? (E ? "-" : "+") + U : U + (E ? "-" : "+"))
                : E && (U = "-" + U),
              U
            );
          },
          stringToNumber: function (c) {
            var f = o[a.currentLocale],
              u = c,
              d = { thousand: 3, million: 6, billion: 9, trillion: 12 },
              h,
              g,
              m;
            if (a.zeroFormat && c === a.zeroFormat) g = 0;
            else if (
              (a.nullFormat && c === a.nullFormat) ||
              !c.replace(/[^0-9]+/g, "").length
            )
              g = null;
            else {
              (g = 1),
                f.delimiters.decimal !== "." &&
                  (c = c.replace(/\./g, "").replace(f.delimiters.decimal, "."));
              for (h in d)
                if (
                  ((m = new RegExp(
                    "[^a-zA-Z]" +
                      f.abbreviations[h] +
                      "(?:\\)|(\\" +
                      f.currency.symbol +
                      ")?(?:\\))?)?$"
                  )),
                  u.match(m))
                ) {
                  g *= Math.pow(10, d[h]);
                  break;
                }
              (g *=
                (c.split("-").length +
                  Math.min(c.split("(").length - 1, c.split(")").length - 1)) %
                2
                  ? 1
                  : -1),
                (c = c.replace(/[^0-9\.]+/g, "")),
                (g *= Number(c));
            }
            return g;
          },
          isNaN: function (c) {
            return typeof c == "number" && isNaN(c);
          },
          includes: function (c, f) {
            return c.indexOf(f) !== -1;
          },
          insert: function (c, f, u) {
            return c.slice(0, u) + f + c.slice(u);
          },
          reduce: function (c, f) {
            if (this === null)
              throw new TypeError(
                "Array.prototype.reduce called on null or undefined"
              );
            if (typeof f != "function")
              throw new TypeError(f + " is not a function");
            var u = Object(c),
              d = u.length >>> 0,
              h = 0,
              g;
            if (arguments.length === 3) g = arguments[2];
            else {
              for (; h < d && !(h in u); ) h++;
              if (h >= d)
                throw new TypeError(
                  "Reduce of empty array with no initial value"
                );
              g = u[h++];
            }
            for (; h < d; h++) h in u && (g = f(g, u[h], h, u));
            return g;
          },
          multiplier: function (c) {
            var f = c.toString().split(".");
            return f.length < 2 ? 1 : Math.pow(10, f[1].length);
          },
          correctionFactor: function () {
            var c = Array.prototype.slice.call(arguments);
            return c.reduce(function (f, u) {
              var d = n.multiplier(u);
              return f > d ? f : d;
            }, 1);
          },
          toFixed: function (c, f, u, d) {
            var h = c.toString().split("."),
              g = f - (d || 0),
              m,
              b,
              x,
              y;
            return (
              h.length === 2
                ? (m = Math.min(Math.max(h[1].length, g), f))
                : (m = g),
              (x = Math.pow(10, m)),
              (y = (u(c + "e+" + m) / x).toFixed(m)),
              d > f - m &&
                ((b = new RegExp("\\.?0{1," + (d - (f - m)) + "}$")),
                (y = y.replace(b, ""))),
              y
            );
          },
        }),
      (t.options = a),
      (t.formats = s),
      (t.locales = o),
      (t.locale = function (c) {
        return c && (a.currentLocale = c.toLowerCase()), a.currentLocale;
      }),
      (t.localeData = function (c) {
        if (!c) return o[a.currentLocale];
        if (((c = c.toLowerCase()), !o[c]))
          throw new Error("Unknown locale : " + c);
        return o[c];
      }),
      (t.reset = function () {
        for (var c in r) a[c] = r[c];
      }),
      (t.zeroFormat = function (c) {
        a.zeroFormat = typeof c == "string" ? c : null;
      }),
      (t.nullFormat = function (c) {
        a.nullFormat = typeof c == "string" ? c : null;
      }),
      (t.defaultFormat = function (c) {
        a.defaultFormat = typeof c == "string" ? c : "0.0";
      }),
      (t.register = function (c, f, u) {
        if (((f = f.toLowerCase()), this[c + "s"][f]))
          throw new TypeError(f + " " + c + " already registered.");
        return (this[c + "s"][f] = u), u;
      }),
      (t.validate = function (c, f) {
        var u, d, h, g, m, b, x, y;
        if (
          (typeof c != "string" &&
            ((c += ""),
            console.warn &&
              console.warn(
                "Numeral.js: Value is not string. It has been co-erced to: ",
                c
              )),
          (c = c.trim()),
          c.match(/^\d+$/))
        )
          return !0;
        if (c === "") return !1;
        try {
          x = t.localeData(f);
        } catch {
          x = t.localeData(t.locale());
        }
        return (
          (h = x.currency.symbol),
          (m = x.abbreviations),
          (u = x.delimiters.decimal),
          x.delimiters.thousands === "."
            ? (d = "\\.")
            : (d = x.delimiters.thousands),
          (y = c.match(/^[^\d]+/)),
          (y !== null && ((c = c.substr(1)), y[0] !== h)) ||
          ((y = c.match(/[^\d]+$/)),
          y !== null &&
            ((c = c.slice(0, -1)),
            y[0] !== m.thousand &&
              y[0] !== m.million &&
              y[0] !== m.billion &&
              y[0] !== m.trillion))
            ? !1
            : ((b = new RegExp(d + "{2}")),
              c.match(/[^\d.,]/g)
                ? !1
                : ((g = c.split(u)),
                  g.length > 2
                    ? !1
                    : g.length < 2
                    ? !!g[0].match(/^\d+.*\d$/) && !g[0].match(b)
                    : g[0].length === 1
                    ? !!g[0].match(/^\d+$/) &&
                      !g[0].match(b) &&
                      !!g[1].match(/^\d+$/)
                    : !!g[0].match(/^\d+.*\d$/) &&
                      !g[0].match(b) &&
                      !!g[1].match(/^\d+$/)))
        );
      }),
      (t.fn = l.prototype =
        {
          clone: function () {
            return t(this);
          },
          format: function (c, f) {
            var u = this._value,
              d = c || a.defaultFormat,
              h,
              g,
              m;
            if (((f = f || Math.round), u === 0 && a.zeroFormat !== null))
              g = a.zeroFormat;
            else if (u === null && a.nullFormat !== null) g = a.nullFormat;
            else {
              for (h in s)
                if (d.match(s[h].regexps.format)) {
                  m = s[h].format;
                  break;
                }
              (m = m || t._.numberToFormat), (g = m(u, d, f));
            }
            return g;
          },
          value: function () {
            return this._value;
          },
          input: function () {
            return this._input;
          },
          set: function (c) {
            return (this._value = Number(c)), this;
          },
          add: function (c) {
            var f = n.correctionFactor.call(null, this._value, c);
            function u(d, h, g, m) {
              return d + Math.round(f * h);
            }
            return (this._value = n.reduce([this._value, c], u, 0) / f), this;
          },
          subtract: function (c) {
            var f = n.correctionFactor.call(null, this._value, c);
            function u(d, h, g, m) {
              return d - Math.round(f * h);
            }
            return (
              (this._value = n.reduce([c], u, Math.round(this._value * f)) / f),
              this
            );
          },
          multiply: function (c) {
            function f(u, d, h, g) {
              var m = n.correctionFactor(u, d);
              return (
                (Math.round(u * m) * Math.round(d * m)) / Math.round(m * m)
              );
            }
            return (this._value = n.reduce([this._value, c], f, 1)), this;
          },
          divide: function (c) {
            function f(u, d, h, g) {
              var m = n.correctionFactor(u, d);
              return Math.round(u * m) / Math.round(d * m);
            }
            return (this._value = n.reduce([this._value, c], f)), this;
          },
          difference: function (c) {
            return Math.abs(t(this._value).subtract(c).value());
          },
        }),
      t.register("locale", "en", {
        delimiters: { thousands: ",", decimal: "." },
        abbreviations: {
          thousand: "k",
          million: "m",
          billion: "b",
          trillion: "t",
        },
        ordinal: function (c) {
          var f = c % 10;
          return ~~((c % 100) / 10) === 1
            ? "th"
            : f === 1
            ? "st"
            : f === 2
            ? "nd"
            : f === 3
            ? "rd"
            : "th";
        },
        currency: { symbol: "$" },
      }),
      (function () {
        t.register("format", "bps", {
          regexps: { format: /(BPS)/, unformat: /(BPS)/ },
          format: function (c, f, u) {
            var d = t._.includes(f, " BPS") ? " " : "",
              h;
            return (
              (c = c * 1e4),
              (f = f.replace(/\s?BPS/, "")),
              (h = t._.numberToFormat(c, f, u)),
              t._.includes(h, ")")
                ? ((h = h.split("")),
                  h.splice(-1, 0, d + "BPS"),
                  (h = h.join("")))
                : (h = h + d + "BPS"),
              h
            );
          },
          unformat: function (c) {
            return +(t._.stringToNumber(c) * 1e-4).toFixed(15);
          },
        });
      })(),
      (function () {
        var c = {
            base: 1e3,
            suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
          },
          f = {
            base: 1024,
            suffixes: [
              "B",
              "KiB",
              "MiB",
              "GiB",
              "TiB",
              "PiB",
              "EiB",
              "ZiB",
              "YiB",
            ],
          },
          u = c.suffixes.concat(
            f.suffixes.filter(function (h) {
              return c.suffixes.indexOf(h) < 0;
            })
          ),
          d = u.join("|");
        (d = "(" + d.replace("B", "B(?!PS)") + ")"),
          t.register("format", "bytes", {
            regexps: { format: /([0\s]i?b)/, unformat: new RegExp(d) },
            format: function (h, g, m) {
              var b,
                x = t._.includes(g, "ib") ? f : c,
                y = t._.includes(g, " b") || t._.includes(g, " ib") ? " " : "",
                S,
                _,
                k;
              for (
                g = g.replace(/\s?i?b/, ""), S = 0;
                S <= x.suffixes.length;
                S++
              )
                if (
                  ((_ = Math.pow(x.base, S)),
                  (k = Math.pow(x.base, S + 1)),
                  h === null || h === 0 || (h >= _ && h < k))
                ) {
                  (y += x.suffixes[S]), _ > 0 && (h = h / _);
                  break;
                }
              return (b = t._.numberToFormat(h, g, m)), b + y;
            },
            unformat: function (h) {
              var g = t._.stringToNumber(h),
                m,
                b;
              if (g) {
                for (m = c.suffixes.length - 1; m >= 0; m--) {
                  if (t._.includes(h, c.suffixes[m])) {
                    b = Math.pow(c.base, m);
                    break;
                  }
                  if (t._.includes(h, f.suffixes[m])) {
                    b = Math.pow(f.base, m);
                    break;
                  }
                }
                g *= b || 1;
              }
              return g;
            },
          });
      })(),
      (function () {
        t.register("format", "currency", {
          regexps: { format: /(\$)/ },
          format: function (c, f, u) {
            var d = t.locales[t.options.currentLocale],
              h = {
                before: f.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                after: f.match(/([\+|\-|\)|\s|\$]*)$/)[0],
              },
              g,
              m,
              b;
            for (
              f = f.replace(/\s?\$\s?/, ""),
                g = t._.numberToFormat(c, f, u),
                c >= 0
                  ? ((h.before = h.before.replace(/[\-\(]/, "")),
                    (h.after = h.after.replace(/[\-\)]/, "")))
                  : c < 0 &&
                    !t._.includes(h.before, "-") &&
                    !t._.includes(h.before, "(") &&
                    (h.before = "-" + h.before),
                b = 0;
              b < h.before.length;
              b++
            )
              switch (((m = h.before[b]), m)) {
                case "$":
                  g = t._.insert(g, d.currency.symbol, b);
                  break;
                case " ":
                  g = t._.insert(g, " ", b + d.currency.symbol.length - 1);
                  break;
              }
            for (b = h.after.length - 1; b >= 0; b--)
              switch (((m = h.after[b]), m)) {
                case "$":
                  g =
                    b === h.after.length - 1
                      ? g + d.currency.symbol
                      : t._.insert(
                          g,
                          d.currency.symbol,
                          -(h.after.length - (1 + b))
                        );
                  break;
                case " ":
                  g =
                    b === h.after.length - 1
                      ? g + " "
                      : t._.insert(
                          g,
                          " ",
                          -(
                            h.after.length -
                            (1 + b) +
                            d.currency.symbol.length -
                            1
                          )
                        );
                  break;
              }
            return g;
          },
        });
      })(),
      (function () {
        t.register("format", "exponential", {
          regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
          format: function (c, f, u) {
            var d,
              h =
                typeof c == "number" && !t._.isNaN(c)
                  ? c.toExponential()
                  : "0e+0",
              g = h.split("e");
            return (
              (f = f.replace(/e[\+|\-]{1}0/, "")),
              (d = t._.numberToFormat(Number(g[0]), f, u)),
              d + "e" + g[1]
            );
          },
          unformat: function (c) {
            var f = t._.includes(c, "e+") ? c.split("e+") : c.split("e-"),
              u = Number(f[0]),
              d = Number(f[1]);
            d = t._.includes(c, "e-") ? (d *= -1) : d;
            function h(g, m, b, x) {
              var y = t._.correctionFactor(g, m),
                S = (g * y * (m * y)) / (y * y);
              return S;
            }
            return t._.reduce([u, Math.pow(10, d)], h, 1);
          },
        });
      })(),
      (function () {
        t.register("format", "ordinal", {
          regexps: { format: /(o)/ },
          format: function (c, f, u) {
            var d = t.locales[t.options.currentLocale],
              h,
              g = t._.includes(f, " o") ? " " : "";
            return (
              (f = f.replace(/\s?o/, "")),
              (g += d.ordinal(c)),
              (h = t._.numberToFormat(c, f, u)),
              h + g
            );
          },
        });
      })(),
      (function () {
        t.register("format", "percentage", {
          regexps: { format: /(%)/, unformat: /(%)/ },
          format: function (c, f, u) {
            var d = t._.includes(f, " %") ? " " : "",
              h;
            return (
              t.options.scalePercentBy100 && (c = c * 100),
              (f = f.replace(/\s?\%/, "")),
              (h = t._.numberToFormat(c, f, u)),
              t._.includes(h, ")")
                ? ((h = h.split("")),
                  h.splice(-1, 0, d + "%"),
                  (h = h.join("")))
                : (h = h + d + "%"),
              h
            );
          },
          unformat: function (c) {
            var f = t._.stringToNumber(c);
            return t.options.scalePercentBy100 ? f * 0.01 : f;
          },
        });
      })(),
      (function () {
        t.register("format", "time", {
          regexps: { format: /(:)/, unformat: /(:)/ },
          format: function (c, f, u) {
            var d = Math.floor(c / 60 / 60),
              h = Math.floor((c - d * 60 * 60) / 60),
              g = Math.round(c - d * 60 * 60 - h * 60);
            return (
              d + ":" + (h < 10 ? "0" + h : h) + ":" + (g < 10 ? "0" + g : g)
            );
          },
          unformat: function (c) {
            var f = c.split(":"),
              u = 0;
            return (
              f.length === 3
                ? ((u = u + Number(f[0]) * 60 * 60),
                  (u = u + Number(f[1]) * 60),
                  (u = u + Number(f[2])))
                : f.length === 2 &&
                  ((u = u + Number(f[0]) * 60), (u = u + Number(f[1]))),
              Number(u)
            );
          },
        });
      })(),
      t
    );
  });
})(Yd);
var a1 = Yd.exports;
const l1 = o1(a1),
  c1 = {},
  f1 = {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "40px",
    viewBox: "0 0 937 853",
    "enable-background": "new 0 0 937 853",
    "xml:space": "preserve",
  },
  u1 = Y(
    "image",
    {
      id: "image0",
      width: "937",
      height: "853",
      x: "0",
      y: "0",
      "xlink:href": `data:image/png;base64,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`,
    },
    null,
    -1
  ),
  d1 = [u1];
function h1(e, t) {
  return It(), ie("svg", f1, d1);
}
const p1 = He(c1, [["render", h1]]),
  g1 = { name: "PxHeader", components: { PxIcon: p1 } },
  m1 = { class: "shadow w-screen" },
  b1 = {
    class: "flex items-center justify-between flex-wrap bg-green-400 p-6",
  },
  y1 = { class: "flex items-center flex-shrink-0 text-white mr-6" },
  x1 = Y(
    "div",
    {
      class:
        "hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    },
    [Y("div", { class: "text-sm lg:flex-grow" })],
    -1
  );
function v1(e, t, n, i, s, o) {
  const r = se("px-icon"),
    a = se("router-link");
  return (
    It(),
    ie("header", m1, [
      Y("nav", null, [
        Y("nav", b1, [
          Y("div", y1, [
            st(r, { class: "mr-2" }),
            st(
              a,
              {
                class: "font-semibold text-xl tracking-tight",
                to: { name: "home" },
              },
              { default: cn(() => [he(" DavidExchange ")]), _: 1 }
            ),
          ]),
          x1,
        ]),
      ]),
    ])
  );
}
const _1 = He(g1, [["render", v1]]),
  w1 = { name: "app", components: { PxHeader: _1 } },
  k1 = { id: "app" };
function S1(e, t, n, i, s, o) {
  const r = se("px-header"),
    a = se("router-view");
  return (
    It(),
    ie("main", k1, [
      st(r),
      st(a, { class: "container px-5 sm:px-20 py-20 flex justify-center" }),
    ])
  );
}
const C1 = He(w1, [["render", S1]]),
  M1 = r1(Rm);
var p = M1;
const P1 = { class: "v-spinner" },
  E1 = { name: "BeatLoader" };
var Kd = Object.assign(E1, {
  props: {
    loading: { type: Boolean, default: !0 },
    color: { type: String, default: "#5dc596" },
    size: { type: String, default: "15px" },
    margin: { type: String, default: "2px" },
    radius: { type: String, default: "100%" },
  },
  setup(e) {
    const t = e,
      n = p.computed(() => ({
        backgroundColor: t.color,
        height: t.size,
        width: t.size,
        margin: t.margin,
        borderRadius: t.radius,
      }));
    return (i, s) =>
      p.withDirectives(
        (p.openBlock(),
        p.createElementBlock(
          "div",
          P1,
          [
            p.createElementVNode(
              "div",
              {
                class: "v-beat v-beat-odd",
                style: p.normalizeStyle(p.unref(n)),
              },
              null,
              4
            ),
            p.createElementVNode(
              "div",
              {
                class: "v-beat v-beat-even",
                style: p.normalizeStyle(p.unref(n)),
              },
              null,
              4
            ),
            p.createElementVNode(
              "div",
              {
                class: "v-beat v-beat-odd",
                style: p.normalizeStyle(p.unref(n)),
              },
              null,
              4
            ),
          ],
          512
        )),
        [[p.vShow, e.loading]]
      );
  },
});
function Rt(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0],
      s = document.createElement("style");
    (s.type = "text/css"),
      n === "top" && i.firstChild
        ? i.insertBefore(s, i.firstChild)
        : i.appendChild(s),
      s.styleSheet
        ? (s.styleSheet.cssText = e)
        : s.appendChild(document.createTextNode(e));
  }
}
var T1 = `
.v-spinner .v-beat {
  -webkit-animation: v-beatStretchDelay 0.7s infinite linear;
  animation: v-beatStretchDelay 0.7s infinite linear;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}
.v-spinner .v-beat-odd {
  animation-delay: 0s;
}
.v-spinner .v-beat-even {
  animation-delay: 0.35s;
}
@-webkit-keyframes v-beatStretchDelay {
50% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-opacity: 0.2;
    opacity: 0.2;
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
}
@keyframes v-beatStretchDelay {
50% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-opacity: 0.2;
    opacity: 0.2;
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
}
`;
Rt(T1);
Kd.__file = "src/components/BeatLoader.vue";
const A1 = { class: "v-spinner" },
  D1 = { name: "BounceLoader" };
var Xd = Object.assign(D1, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "60px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          height: t.size,
          width: t.size,
          borderRadius: t.radius,
          opacity: 0.6,
          position: "absolute",
          top: 0,
          left: 0,
        })),
        i = p.computed(() => ({
          height: t.size,
          width: t.size,
          position: "relative",
        }));
      return (s, o) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            A1,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-bounce v-bounce1",
                  style: p.normalizeStyle(p.unref(i)),
                },
                [
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-bounce v-bounce2",
                      style: p.normalizeStyle(p.unref(n)),
                    },
                    null,
                    4
                  ),
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-bounce v-bounce3",
                      style: p.normalizeStyle(p.unref(n)),
                    },
                    null,
                    4
                  ),
                ],
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  F1 = `
.v-spinner .v-bounce {
}
.v-spinner .v-bounce1 {
}
.v-spinner .v-bounce2 {
  -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
  animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.v-spinner .v-bounce3 {
  -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
  animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes v-bounceStretchDelay {
0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
}
50% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
@keyframes v-bounceStretchDelay {
0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
}
50% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
`;
Rt(F1);
Xd.__file = "src/components/BounceLoader.vue";
const R1 = { class: "v-spinner" },
  O1 = { name: "ClipLoader" };
var Jd = Object.assign(O1, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "35px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          height: t.size,
          width: t.size,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: t.color + " " + t.color + " transparent",
          borderRadius: t.radius,
          background: "transparent",
        }));
      return (i, s) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            R1,
            [
              p.createElementVNode(
                "div",
                { class: "v-clip", style: p.normalizeStyle(p.unref(n)) },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  L1 = `
.v-spinner {
  /*	  font-size: 10px; 

    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
}
.v-spinner .v-clip {
  -webkit-animation: v-clipDelay 0.75s 0s infinite linear;
  animation: v-clipDelay 0.75s 0s infinite linear;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}
@-webkit-keyframes v-clipDelay {
0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
}
50% {
    -webkit-transform: rotate(180deg) scale(0.8);
    transform: rotate(180deg) scale(0.8);
}
100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
}
}
@keyframes v-clipDelay {
0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
}
50% {
    -webkit-transform: rotate(180deg) scale(0.8);
    transform: rotate(180deg) scale(0.8);
}
100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
}
}
`;
Rt(L1);
Jd.__file = "src/components/ClipLoader.vue";
const B1 = { class: "v-spinner" },
  N1 = { name: "DotLoader" };
var Gd = Object.assign(N1, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "60px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          height: parseFloat(t.size) / 2 + "px",
          width: parseFloat(t.size) / 2 + "px",
          borderRadius: t.radius,
        })),
        i = p.computed(() => ({
          height: t.size,
          width: t.size,
          position: "relative",
        }));
      return (s, o) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            B1,
            [
              p.createElementVNode(
                "div",
                { class: "v-dot v-dot1", style: p.normalizeStyle(p.unref(i)) },
                [
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-dot v-dot2",
                      style: p.normalizeStyle(p.unref(n)),
                    },
                    null,
                    4
                  ),
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-dot v-dot3",
                      style: p.normalizeStyle(p.unref(n)),
                    },
                    null,
                    4
                  ),
                ],
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  I1 = `
.v-spinner .v-dot {
}
.v-spinner .v-dot1 {
  -webkit-animation: v-dotRotate 2s 0s infinite linear;
  animation: v-dotRotate 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.v-spinner .v-dot2 {
  -webkit-animation: v-dotBounce 2s 0s infinite linear;
  animation: v-dotBounce 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: absolute;
  top: 0;
  bottom: auto;
}
.v-spinner .v-dot3 {
  -webkit-animation: v-dotBounce 2s -1s infinite linear;
  animation: v-dotBounce 2s -1s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: absolute;
  top: auto;
  bottom: 0;
}
@-webkit-keyframes v-dotRotate {
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes v-dotRotate {
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@-webkit-keyframes v-dotBounce {
0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
}
50% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
@keyframes v-dotBounce {
0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
}
50% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
`;
Rt(I1);
Gd.__file = "src/components/DotLoader.vue";
const z1 = { class: "v-spinner", style: { position: "relative", fontSize: 0 } },
  V1 = { name: "FadeLoader" };
var Qd = Object.assign(V1, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      height: { type: String, default: "15px" },
      width: { type: String, default: "5px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "20px" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          height: t.height,
          width: t.width,
          margin: t.margin,
          borderRadius: t.radius,
        })),
        i = p.computed(() => "-" + t.radius),
        s = p.computed(
          () => parseFloat(t.radius) / 2 + parseFloat(t.radius) / 5.5 + "px"
        ),
        o = p.computed(() => "-" + s.value),
        r = p.computed(() => ({
          top: t.radius,
          left: 0,
          animationDelay: "0.12s",
        })),
        a = p.computed(() => ({
          top: s.value,
          left: s.value,
          animationDelay: "0.24s",
          transform: "rotate(-45deg)",
        })),
        l = p.computed(() => ({
          top: 0,
          left: t.radius,
          animationDelay: "0.36s",
          transform: "rotate(90deg)",
        })),
        c = p.computed(() => ({
          top: o.value,
          left: s.value,
          animationDelay: "0.48s",
          transform: "rotate(45deg)",
        })),
        f = p.computed(() => ({
          top: i.value,
          left: 0,
          animationDelay: "0.60s",
        })),
        u = p.computed(() => ({
          top: o.value,
          left: o.value,
          animationDelay: "0.72s",
          transform: "rotate(-45deg)",
        })),
        d = p.computed(() => ({
          top: 0,
          left: i.value,
          animationDelay: "0.84s",
          transform: "rotate(90deg)",
        })),
        h = p.computed(() => ({
          top: s.value,
          left: o.value,
          animationDelay: "0.96s",
          transform: "rotate(45deg)",
        }));
      return (g, m) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            z1,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-fade v-fade1",
                  style: p.normalizeStyle([p.unref(n), p.unref(r)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-fade v-fade2",
                  style: p.normalizeStyle([p.unref(n), p.unref(a)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-fade v-fade3",
                  style: p.normalizeStyle([p.unref(n), p.unref(l)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-fade v-fade4",
                  style: p.normalizeStyle([p.unref(n), p.unref(c)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-fade v-fade5",
                  style: p.normalizeStyle([p.unref(n), p.unref(f)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-fade v-fade6",
                  style: p.normalizeStyle([p.unref(n), p.unref(u)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-fade v-fade7",
                  style: p.normalizeStyle([p.unref(n), p.unref(d)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-fade v-fade8",
                  style: p.normalizeStyle([p.unref(n), p.unref(h)]),
                },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  q1 = `
.v-spinner .v-fade {
  -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
  animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
}
@-webkit-keyframes v-fadeStretchDelay {
50% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
}
100% {
    -webkit-opacity: 1;
    opacity: 1;
}
}
@keyframes v-fadeStretchDelay {
50% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
}
100% {
    -webkit-opacity: 1;
    opacity: 1;
}
}
`;
Rt(q1);
Qd.__file = "src/components/FadeLoader.vue";
const U1 = { name: "GridLoader" };
var Zd = Object.assign(U1, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "15px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          width: t.size,
          height: t.size,
          margin: t.margin,
          borderRadius: t.radius,
        })),
        i = p.computed(() => ({
          animationName: "v-gridStretchDelay",
          animationIterationCount: "infinite",
          animationTimingFunction: "ease",
          animationFillMode: "both",
          display: "inline-block",
        })),
        s = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        o = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        r = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        a = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        l = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        c = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        f = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        u = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        d = p.computed(() => ({ animationDelay: m(), animationDuration: b() })),
        h = p.computed(() => ({
          width: parseFloat(t.size) * 3 + parseFloat(t.margin) * 6 + "px",
          fontSize: 0,
        })),
        g = (x) => Math.random() * x,
        m = () => g(100) / 100 - 0.2 + "s",
        b = () => g(100) / 100 + 0.6 + "s";
      return (x, y) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            { class: "v-spinner", style: p.normalizeStyle(p.unref(h)) },
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid1",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(s)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid2",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(o)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid3",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(r)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid4",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(a)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid5",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(l)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid6",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(c)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid7",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(f)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid8",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(u)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-grid v-grid9",
                  style: p.normalizeStyle([p.unref(n), p.unref(i), p.unref(d)]),
                },
                null,
                4
              ),
            ],
            4
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  H1 = `
@-webkit-keyframes v-gridStretchDelay {
0% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
}
@keyframes v-gridStretchDelay {
0% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
}
`;
Rt(H1);
Zd.__file = "src/components/GridLoader.vue";
const j1 = { class: "whirlpool" },
  W1 = p.createStaticVNode(
    '<div class="ring ring0" data-v-b9d9af2e></div><div class="ring ring1" data-v-b9d9af2e></div><div class="ring ring2" data-v-b9d9af2e></div><div class="ring ring3" data-v-b9d9af2e></div><div class="ring ring4" data-v-b9d9af2e></div><div class="ring ring5" data-v-b9d9af2e></div><div class="ring ring6" data-v-b9d9af2e></div><div class="ring ring7" data-v-b9d9af2e></div><div class="ring ring8" data-v-b9d9af2e></div><div class="ring ring9" data-v-b9d9af2e></div>',
    10
  ),
  Y1 = [W1],
  K1 = { name: "JellyfishLoader" };
var Wa = Object.assign(K1, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "25px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
      width: { type: Number, default: 100 },
      height: { type: Number, default: 100 },
      speed: { type: String, default: "2.5s" },
      scale: { type: Number, default: 1 },
    },
    setup(e) {
      const t = e;
      return (
        p.useCssVars((n) => ({
          "b9d9af2e-props.scale": t.scale,
          "b9d9af2e-props.color": t.color,
          "b9d9af2e-props.speed": t.speed,
        })),
        (n, i) => (p.openBlock(), p.createElementBlock("div", j1, Y1))
      );
    },
  }),
  X1 = `
.whirlpool[data-v-b9d9af2e] {
  width: 100px;
  height: 100px;
  position: relative;
  transform: scale(var(--b9d9af2e-props\\.scale));
}
.ring[data-v-b9d9af2e]:before {
  content: "";
  border-radius: 50%;
  border: 1px solid var(--b9d9af2e-props\\.color);
  position: absolute;
}
.ring0[data-v-b9d9af2e]:before {
  left: 45px;
  width: 10px;
  top: 13px;
  height: 3px;
  animation: var(--b9d9af2e-props\\.speed) ease 0s infinite spinner-b9d9af2e;
}
.ring1[data-v-b9d9af2e]:before {
  left: 40px;
  width: 20px;
  top: 12px;
  height: 6px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.1s infinite spinner-b9d9af2e;
}
.ring2[data-v-b9d9af2e]:before {
  left: 35px;
  width: 30px;
  top: 11px;
  height: 9px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.2s infinite spinner-b9d9af2e;
}
.ring3[data-v-b9d9af2e]:before {
  left: 30px;
  width: 40px;
  top: 9px;
  height: 12px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.3s infinite spinner-b9d9af2e;
}
.ring4[data-v-b9d9af2e]:before {
  left: 25px;
  width: 50px;
  top: 8px;
  height: 15px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.4s infinite spinner-b9d9af2e;
}
.ring5[data-v-b9d9af2e]:before {
  left: 20px;
  width: 60px;
  top: 6px;
  height: 18px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.5s infinite spinner-b9d9af2e;
}
.ring6[data-v-b9d9af2e]:before {
  left: 15px;
  width: 70px;
  top: 5px;
  height: 21px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.6s infinite spinner-b9d9af2e;
}
.ring7[data-v-b9d9af2e]:before {
  left: 10px;
  width: 80px;
  top: 3px;
  height: 24px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.7s infinite spinner-b9d9af2e;
}
.ring8[data-v-b9d9af2e]:before {
  left: 5px;
  width: 90px;
  top: 2px;
  height: 27px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.8s infinite spinner-b9d9af2e;
}
.ring9[data-v-b9d9af2e]:before {
  width: 100px;
  height: 30px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.9s infinite spinner-b9d9af2e;
}
@keyframes spinner-b9d9af2e {
0% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
50% {
    transform: translateY(60px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
100% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
}
`;
Rt(X1);
Wa.__scopeId = "data-v-b9d9af2e";
Wa.__file = "src/components/JellyfishLoader.vue";
const J1 = { class: "v-spinner" },
  G1 = { name: "MoonLoader" };
var $d = Object.assign(G1, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "60px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          height: t.size,
          width: t.size,
          borderRadius: t.radius,
        })),
        i = p.computed(() => parseFloat(t.size) / 7),
        s = p.computed(() => ({
          height: i.value + "px",
          width: i.value + "px",
          borderRadius: t.radius,
        })),
        o = p.computed(() => ({
          top: parseFloat(t.size) / 2 - i.value / 2 + "px",
          backgroundColor: t.color,
        })),
        r = p.computed(() => ({ border: i.value + "px solid " + t.color }));
      return (a, l) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            J1,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-moon v-moon1",
                  style: p.normalizeStyle(p.unref(n)),
                },
                [
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-moon v-moon2",
                      style: p.normalizeStyle([p.unref(s), p.unref(o)]),
                    },
                    null,
                    4
                  ),
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-moon v-moon3",
                      style: p.normalizeStyle([p.unref(n), p.unref(r)]),
                    },
                    null,
                    4
                  ),
                ],
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  Q1 = `
.v-spinner .v-moon1 {
  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
  animation: v-moonStretchDelay 0.6s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: relative;
}
.v-spinner .v-moon2 {
  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
  animation: v-moonStretchDelay 0.6s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  opacity: 0.8;
  position: absolute;
}
.v-spinner .v-moon3 {
  opacity: 0.1;
}
@-webkit-keyframes v-moonStretchDelay {
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes v-moonStretchDelay {
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
`;
Rt(Q1);
$d.__file = "src/components/MoonLoader.vue";
const Z1 = { class: "v-spinner", style: { position: "relative", fontSize: 0 } },
  $1 = { name: "PacmanLoader" };
var th = Object.assign($1, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "25px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          width: t.size,
          height: t.size,
          margin: t.margin,
          borderRadius: t.radius,
        })),
        i = p.computed(() => t.size + " solid transparent"),
        s = p.computed(() => t.size + " solid " + t.color),
        o = p.computed(() => ({
          width: 0,
          height: 0,
          borderTop: s.value,
          borderRight: i.value,
          borderBottom: s.value,
          borderLeft: s.value,
          borderRadius: t.size,
        })),
        r = p.computed(() => ({
          width: "10px",
          height: "10px",
          transform: "translate(0, " + -parseFloat(t.size) / 4 + "px)",
          position: "absolute",
          top: "25px",
          left: "100px",
          animationName: "v-pacmanStretchDelay",
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationFillMode: "both",
        })),
        a = p.computed(() => ({ animationDelay: "0.25s" })),
        l = p.computed(() => ({ animationDelay: "0.5s" })),
        c = p.computed(() => ({ animationDelay: "0.75s" })),
        f = p.computed(() => ({ animationDelay: "1s" }));
      return (u, d) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            Z1,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-pacman v-pacman1",
                  style: p.normalizeStyle(p.unref(o)),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-pacman v-pacman2",
                  style: p.normalizeStyle([p.unref(n), p.unref(r), p.unref(a)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-pacman v-pacman3",
                  style: p.normalizeStyle([p.unref(n), p.unref(r), p.unref(l)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-pacman v-pacman4",
                  style: p.normalizeStyle([p.unref(n), p.unref(r), p.unref(c)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-pacman v-pacman5",
                  style: p.normalizeStyle([p.unref(n), p.unref(r), p.unref(f)]),
                },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  tw = `
.v-spinner {
  text-align: center;
}

/*TODO computed transform */
@-webkit-keyframes v-pacmanStretchDelay {
75% {
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
}
}
@keyframes v-pacmanStretchDelay {
75% {
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
}
}
`;
Rt(tw);
th.__file = "src/components/PacmanLoader.vue";
const ew = { class: "" },
  nw = { name: "Pacman2Loader" };
var eh = Object.assign(nw, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "25px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
      width: { type: Number, default: 100 },
      height: { type: Number, default: 100 },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          marginLeft: "0px",
          top: `${t.height / 2.5}px`,
          width: `${t.width / 5}px`,
          height: `${t.height / 5}px`,
          "-moz-border-radius": `${t.height / 3 / 2}px`,
          "-webkit-border-radius": `${t.height / 3 / 2}px`,
          "-o-border-radius": `${t.height / 3 / 2}px`,
          "border-radius": `${t.height / 3 / 2}px`,
        })),
        i = p.computed(() => ({
          backgroundColor: t.color,
          width: "50px",
          height: "50px",
          "-moz-border-radius": t.height / 2 + "px",
          "-webkit-border-radius": t.height / 2 + "px",
          "-o-border-radius": t.height / 2 + "px",
          "border-radius": t.height / 2 + "px",
        })),
        s = p.computed(() => ({
          width: t.width + "px",
          height: t.height + "px",
        })),
        o = p.computed(() => ({
          width: `${t.width}px`,
          height: `${t.height}px`,
          "-moz-border-radius": `${t.height / 2}px`,
          "-webkit-border-radius": `${t.height / 2}px`,
          "-o-border-radius": `${t.height / 2}px`,
          "border-radius": `${t.height / 2}px`,
          clip: `rect(0px, ${t.height / 2}px, ${t.width}px, 0)`,
        })),
        r = p.computed(() => ({
          left: `${t.height / 60}px`,
          width: `${t.width + 2}px`,
          height: `${t.height + 2}px`,
          "-moz-border-radius": `${t.height / 2}px`,
          "-webkit-border-radius": `${t.height / 2}px`,
          "-o-border-radius": `${t.height / 2}px`,
          "border-radius": `${t.height / 2}px`,
          clip: `rect(0px, ${t.height}px, ${t.width}px, ${t.height / 2 + 2}px)`,
        }));
      return (a, l) => (
        p.openBlock(),
        p.createElementBlock("div", ew, [
          p.createElementVNode(
            "div",
            { class: "pacman-container", style: p.normalizeStyle(p.unref(s)) },
            [
              p.createElementVNode(
                "div",
                { class: "pacman-body", style: p.normalizeStyle(p.unref(i)) },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                { class: "pacman-mouth", style: p.normalizeStyle(p.unref(r)) },
                [
                  p.createElementVNode(
                    "div",
                    { class: "pacman", style: p.normalizeStyle(p.unref(o)) },
                    null,
                    4
                  ),
                ],
                4
              ),
            ],
            4
          ),
          p.createElementVNode(
            "div",
            { class: "dot", style: p.normalizeStyle(p.unref(n)) },
            null,
            4
          ),
        ])
      );
    },
  }),
  iw = `
.pacman-container {
  display: block;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  -moz-animation: bite 0.5s linear infinite;
  -webkit-animation: bite 0.5s linear infinite;
  animation: bite 0.5s linear infinite;
}
.pacman-body {
  background-color: #ff0;
  position: absolute;
}
.dot {
  background-color: #318a47;
  position: absolute;
  z-index: 0;
  -moz-animation: movedot 0.5s linear infinite;
  -webkit-animation: movedot 0.5s linear infinite;
  animation: movedot 0.5s linear infinite;
  -moz-animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.pacman {
  position: absolute;
  z-index: 2;
}
.pacman-mouth {
  position: absolute;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  -o-border-radius: 50px;
  border-radius: 50px;
  clip: rect(0px, 100px, 100px, 52px);
}
.pacman-mouth .pacman {
  background-color: #ffffff;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  -moz-animation: munch 0.5s linear infinite;
  -webkit-animation: munch 0.5s linear infinite;
  animation: munch 0.5s linear infinite;

  /* To fix a yellow border on pacman's mouth */
  border: 10px solid #ffffff;
}
.dot {
  -moz-animation: movedot 1s linear infinite;
  -webkit-animation: movedot 1s linear infinite;
  animation: movedot 1s linear infinite;
  -moz-animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
@-moz-keyframes munch {
0% {
    -moz-transform: rotate(90deg);
}
50% {
    -moz-transform: rotate(0deg);
}
100% {
    -moz-transform: rotate(90deg);
}
}
@-webkit-keyframes munch {
0% {
    -webkit-transform: rotate(90deg);
}
50% {
    -webkit-transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(90deg);
}
}
@keyframes munch {
0% {
    transform: rotate(90deg);
}
50% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(90deg);
}
}
@-moz-keyframes bite {
0% {
    -moz-transform: rotate(45deg);
}
50% {
    -moz-transform: rotate(90deg);
}
100% {
    -moz-transform: rotate(45deg);
}
}
@-webkit-keyframes bite {
0% {
    -webkit-transform: rotate(45deg);
}
50% {
    -webkit-transform: rotate(90deg);
}
100% {
    -webkit-transform: rotate(45deg);
}
}
@keyframes bite {
0% {
    transform: rotate(45deg);
}
50% {
    transform: rotate(90deg);
}
100% {
    transform: rotate(45deg);
}
}
@-webkit-keyframes movedot {
0% {
    left: 200px;
}
100% {
    left: 50px;
}
}
@-moz-keyframes movedot {
0% {
    left: 200px;
}
100% {
    left: 50px;
}
}
@keyframes movedot {
0% {
    left: 200px;
}
100% {
    left: 50px;
}
}
`;
Rt(iw);
eh.__file = "src/components/Pacman2Loader.vue";
const sw = { class: "v-spinner" },
  ow = { name: "PulseLoader" };
var nh = Object.assign(ow, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "15px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          width: t.size,
          height: t.size,
          margin: t.margin,
          borderRadius: t.radius,
          display: "inline-block",
          animationName: "v-pulseStretchDelay",
          animationDuration: "0.75s",
          animationIterationCount: "infinite",
          animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
          animationFillMode: "both",
        })),
        i = p.computed(() => ({ animationDelay: "0.12s" })),
        s = p.computed(() => ({ animationDelay: "0.24s" })),
        o = p.computed(() => ({ animationDelay: "0.36s" }));
      return (r, a) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            sw,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-pulse v-pulse1",
                  style: p.normalizeStyle([p.unref(n), p.unref(i)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-pulse v-pulse2",
                  style: p.normalizeStyle([p.unref(n), p.unref(s)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-pulse v-pulse3",
                  style: p.normalizeStyle([p.unref(n), p.unref(o)]),
                },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  rw = `
/*.v-spinner
{
    margin: 100px auto;
    text-align: center;
}
*/
@-webkit-keyframes v-pulseStretchDelay {
0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
}
@keyframes v-pulseStretchDelay {
0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
}
`;
Rt(rw);
nh.__file = "src/components/PulseLoader.vue";
const aw = { class: "v-spinner" },
  lw = { name: "RingLoader" };
var ih = Object.assign(lw, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "60px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          height: t.size,
          width: t.size,
          border: parseFloat(t.size) / 10 + "px solid" + t.color,
          opacity: 0.4,
          borderRadius: t.radius,
        })),
        i = p.computed(() => ({
          height: t.size,
          width: t.size,
          position: "relative",
        }));
      return (s, o) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            aw,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-ring v-ring1",
                  style: p.normalizeStyle(p.unref(i)),
                },
                [
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-ring v-ring2",
                      style: p.normalizeStyle(p.unref(n)),
                    },
                    null,
                    4
                  ),
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-ring v-ring3",
                      style: p.normalizeStyle(p.unref(n)),
                    },
                    null,
                    4
                  ),
                ],
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  cw = `
.v-spinner .v-ring {
}
.v-spinner .v-ring1 {
}
.v-spinner .v-ring2 {
  -webkit-animation: v-ringRightRotate 2s 0s infinite linear;
  animation: v-ringRightRotate 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  perspective: 800px;
  position: absolute;
  top: 0;
  left: 0;
}
.v-spinner .v-ring3 {
  -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;
  animation: v-ringLeftRotate 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  perspective: 800px;
  position: absolute;
  top: 0;
  left: 0;
}
@-webkit-keyframes v-ringRightRotate {
0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
}
}
@keyframes v-ringRightRotate {
0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
}
}
@-webkit-keyframes v-ringLeftRotate {
0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
}
}
@keyframes v-ringLeftRotate {
0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
}
}
`;
Rt(cw);
ih.__file = "src/components/RingLoader.vue";
const fw = { class: "v-spinner" },
  uw = { name: "RiseLoader" };
var sh = Object.assign(uw, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "15px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          height: t.size,
          width: t.size,
          margin: t.margin,
          borderRadius: t.radius,
        }));
      return (i, s) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            fw,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-rise v-rise-odd",
                  style: p.normalizeStyle(p.unref(n)),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-rise v-rise-even",
                  style: p.normalizeStyle(p.unref(n)),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-rise v-rise-odd",
                  style: p.normalizeStyle(p.unref(n)),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-rise v-rise-even",
                  style: p.normalizeStyle(p.unref(n)),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-rise v-rise-odd",
                  style: p.normalizeStyle(p.unref(n)),
                },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  dw = `
.v-spinner {
  /*	  font-size: 10px; 

    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
}
.v-spinner .v-rise-odd {
  -webkit-animation: v-riseOddDelay 1s 0s infinite
    cubic-bezier(0.15, 0.46, 0.9, 0.6);
  animation: v-riseOddDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}
.v-spinner .v-rise-even {
  -webkit-animation: v-riseEvenDelay 1s 0s infinite
    cubic-bezier(0.15, 0.46, 0.9, 0.6);
  animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}
@-webkit-keyframes v-riseOddDelay {
0% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
}
25% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
}
50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
75% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
100% {
    -webkit-transform: translateY(0) scale(0.75);
    transform: translateY(0) scale(0.75);
}
}
@keyframes v-riseOddDelay {
0% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
}
25% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
}
50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
75% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
100% {
    -webkit-transform: translateY(0) scale(0.75);
    transform: translateY(0) scale(0.75);
}
}
@-webkit-keyframes v-riseEvenDelay {
0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
25% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
50% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
}
75% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
}
100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
}
}
@keyframes v-riseEvenDelay {
0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
25% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
50% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
}
75% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
}
100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
}
}
`;
Rt(dw);
sh.__file = "src/components/RiseLoader.vue";
const hw = { class: "v-spinner" },
  pw = { name: "RotateLoader" };
var oh = Object.assign(pw, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "15px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          height: t.size,
          width: t.size,
          margin: t.margin,
          borderRadius: t.radius,
        }));
      return (i, s) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            hw,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-rotate v-rotate1",
                  style: p.normalizeStyle(p.unref(n)),
                },
                [
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-rotate v-rotate2",
                      style: p.normalizeStyle(p.unref(n)),
                    },
                    null,
                    4
                  ),
                  p.createElementVNode(
                    "div",
                    {
                      class: "v-rotate v-rotate3",
                      style: p.normalizeStyle(p.unref(n)),
                    },
                    null,
                    4
                  ),
                ],
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  gw = `
.v-spinner .v-rotate1 {
  -webkit-animation: v-rotateStretchDelay 1s 0s infinite
    cubic-bezier(0.7, -0.13, 0.22, 0.86);
  animation: v-rotateStretchDelay 1s 0s infinite
    cubic-bezier(0.7, -0.13, 0.22, 0.86);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  position: relative;
}
.v-spinner .v-rotate2 {
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: -28px;
}
.v-spinner .v-rotate3 {
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 25px;
}
@-webkit-keyframes v-rotateStretchDelay {
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes v-rotateStretchDelay {
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
`;
Rt(gw);
oh.__file = "src/components/RotateLoader.vue";
const mw = { class: "v-spinner" },
  bw = { name: "ScaleLoader" };
var rh = Object.assign(bw, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      height: { type: String, default: "35px" },
      width: { type: String, default: "4px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "2px" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          height: t.height,
          width: t.width,
          margin: t.margin,
          borderRadius: t.radius,
          display: "inline-block",
          animationName: "v-scaleStretchDelay",
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
          animationFillMode: "both",
        })),
        i = p.computed(() => ({ animationDelay: "0.1s" })),
        s = p.computed(() => ({ animationDelay: "0.2s" })),
        o = p.computed(() => ({ animationDelay: "0.3s" })),
        r = p.computed(() => ({ animationDelay: "0.4s" })),
        a = p.computed(() => ({ animationDelay: "0.5s" }));
      return (l, c) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            mw,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-scale v-scale1",
                  style: p.normalizeStyle([p.unref(n), p.unref(i)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-scale v-scale2",
                  style: p.normalizeStyle([p.unref(n), p.unref(s)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-scale v-scale3",
                  style: p.normalizeStyle([p.unref(n), p.unref(o)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-scale v-scale4",
                  style: p.normalizeStyle([p.unref(n), p.unref(r)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-scale v-scale5",
                  style: p.normalizeStyle([p.unref(n), p.unref(a)]),
                },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  yw = `
.v-spinner {
  /*	  font-size: 10px; 

    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
}
@-webkit-keyframes v-scaleStretchDelay {
0% {
    -webkit-animation-name: inherit;
    -webkit-animation-duration: inherit;
    -webkit-animation-iteration-count: inherit;
    -webkit-animation-direction: inherit;
}
50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
}
100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
}
}
@keyframes v-scaleStretchDelay {
0% {
    -webkit-animation-name: inherit;
    -webkit-animation-duration: inherit;
    -webkit-animation-iteration-count: inherit;
    -webkit-animation-direction: inherit;
}
50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
}
100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
}
}
`;
Rt(yw);
rh.__file = "src/components/ScaleLoader.vue";
const xw = { class: "v-spinner" },
  vw = { name: "SkewLoader" };
var ah = Object.assign(vw, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "20px" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          height: 0,
          width: 0,
          borderLeft: t.size + " solid transparent",
          borderRight: t.size + " solid transparent",
          borderBottom: t.size + " solid " + t.color,
        }));
      return (i, s) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            xw,
            [
              p.createElementVNode(
                "div",
                { class: "v-skew", style: p.normalizeStyle(p.unref(n)) },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  _w = `
.v-spinner {
  text-align: center;
}
.v-spinner .v-skew {
  -webkit-animation: v-skewDelay 3s 0s infinite
    cubic-bezier(0.09, 0.57, 0.49, 0.9);
  animation: v-skewDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}
@-webkit-keyframes v-skewDelay {
25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
    transform: perspective(100px) rotateX(180deg) rotateY(0);
}
50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
}
75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
    transform: perspective(100px) rotateX(0) rotateY(180deg);
}
100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
    transform: perspective(100px) rotateX(0) rotateY(0);
}
}
@keyframes v-skewDelay {
25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
    transform: perspective(100px) rotateX(180deg) rotateY(0);
}
50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
}
75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
    transform: perspective(100px) rotateX(0) rotateY(180deg);
}
100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
    transform: perspective(100px) rotateX(0) rotateY(0);
}
}
`;
Rt(_w);
ah.__file = "src/components/SkewLoader.vue";
const ww = { class: "v-spinner" },
  kw = { name: "SquareLoader" };
var lh = Object.assign(kw, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "50px" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          height: t.size,
          width: t.size,
        }));
      return (i, s) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            ww,
            [
              p.createElementVNode(
                "div",
                { class: "v-square", style: p.normalizeStyle(p.unref(n)) },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  Sw = `
.v-spinner {
  text-align: center;
}
.v-spinner .v-square {
  -webkit-animation: v-squareDelay 3s 0s infinite
    cubic-bezier(0.09, 0.57, 0.49, 0.9);
  animation: v-squareDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  perspective: 100px;
  display: inline-block;
}
@-webkit-keyframes v-squareDelay {
25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
}
50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
}
75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
}
100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
}
}
@keyframes v-squareDelay {
25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
}
50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
}
75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
}
100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
}
}
`;
Rt(Sw);
lh.__file = "src/components/SquareLoader.vue";
const Cw = { class: "v-spinner" },
  Mw = { name: "SyncLoader" };
var ch = Object.assign(Mw, {
    props: {
      loading: { type: Boolean, default: !0 },
      color: { type: String, default: "#5dc596" },
      size: { type: String, default: "15px" },
      margin: { type: String, default: "2px" },
      radius: { type: String, default: "100%" },
    },
    setup(e) {
      const t = e,
        n = p.computed(() => ({
          backgroundColor: t.color,
          height: t.size,
          width: t.size,
          margin: t.margin,
          borderRadius: t.radius,
          display: "inline-block",
          animationName: "v-syncStretchDelay",
          animationDuration: "0.6s",
          animationIterationCount: "infinite",
          animationTimingFunction: "ease-in-out",
          animationFillMode: "both",
        })),
        i = p.computed(() => ({ animationDelay: "0.07s" })),
        s = p.computed(() => ({ animationDelay: "0.14s" })),
        o = p.computed(() => ({ animationDelay: "0.21s" }));
      return (r, a) =>
        p.withDirectives(
          (p.openBlock(),
          p.createElementBlock(
            "div",
            Cw,
            [
              p.createElementVNode(
                "div",
                {
                  class: "v-sync v-sync1",
                  style: p.normalizeStyle([p.unref(n), p.unref(i)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-sync v-sync2",
                  style: p.normalizeStyle([p.unref(n), p.unref(s)]),
                },
                null,
                4
              ),
              p.createElementVNode(
                "div",
                {
                  class: "v-sync v-sync3",
                  style: p.normalizeStyle([p.unref(n), p.unref(o)]),
                },
                null,
                4
              ),
            ],
            512
          )),
          [[p.vShow, e.loading]]
        );
    },
  }),
  Pw = `
@-webkit-keyframes v-syncStretchDelay {
33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
}
66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}
100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
}
@keyframes v-syncStretchDelay {
33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
}
66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}
100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
}
`;
Rt(Pw);
ch.__file = "src/components/SyncLoader.vue";
var uf = Object.freeze({
  __proto__: null,
  BeatLoader: Kd,
  BounceLoader: Xd,
  ClipLoader: Jd,
  DotLoader: Gd,
  FadeLoader: Qd,
  GridLoader: Zd,
  JellyfishLoader: Wa,
  MoonLoader: $d,
  PacmanLoader: th,
  Pacman2Loader: eh,
  PulseLoader: nh,
  RingLoader: ih,
  RiseLoader: sh,
  RotateLoader: oh,
  ScaleLoader: rh,
  SkewLoader: ah,
  SquareLoader: lh,
  SyncLoader: ch,
});
const Ew = {
  install(e) {
    for (const t in uf) {
      const n = uf[t];
      e.component(n.name, n);
    }
  },
};
var Tw = Ew;
const Yo = Yu(C1);
Yo.config.globalProperties.$filters = {
  dollarFilter(e) {
    return e ? l1(e).format("($ 0.00a)") : "$ 0";
  },
  percentFilter(e) {
    return e ? `${Number(e).toFixed(2)}%` : "0 %";
  },
};
Yo.use(i1);
Yo.use(Tw);
Yo.mount("#app");
