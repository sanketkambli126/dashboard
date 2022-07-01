﻿! function(t, n) {
	"object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = "undefined" != typeof globalThis ? globalThis : t || self).d3 = t.d3 || {})
}(this, (function(t) {
	"use strict";

	function n(t, n) {
		return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}

	function e(t, n) {
		return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
	}

	function r(t) {
		let r, o, a;

		function u(t, n, e = 0, i = t.length) {
			if (e < i) {
				if (0 !== r(n, n)) return i;
				do {
					const r = e + i >>> 1;
					o(t[r], n) < 0 ? e = r + 1 : i = r
				} while (e < i)
			}
			return e
		}
		return 2 !== t.length ? (r = n, o = (e, r) => n(t(e), r), a = (n, e) => t(n) - e) : (r = t === n || t === e ? t : i, o = t, a = t), {
			left: u,
			center: function(t, n, e = 0, r = t.length) {
				const i = u(t, n, e, r - 1);
				return i > e && a(t[i - 1], n) > -a(t[i], n) ? i - 1 : i
			},
			right: function(t, n, e = 0, i = t.length) {
				if (e < i) {
					if (0 !== r(n, n)) return i;
					do {
						const r = e + i >>> 1;
						o(t[r], n) <= 0 ? e = r + 1 : i = r
					} while (e < i)
				}
				return e
			}
		}
	}

	function i() {
		return 0
	}

	function o(t) {
		return null === t ? NaN : +t
	}
	const a = r(n),
		u = a.right,
		c = a.left,
		f = r(o).center;
	var s = u;

	function l(t, n) {
		let e = 0;
		if (void 0 === n)
			for (let n of t) null != n && (n = +n) >= n && ++e;
		else {
			let r = -1;
			for (let i of t) null != (i = n(i, ++r, t)) && (i = +i) >= i && ++e
		}
		return e
	}

	function h(t) {
		return 0 | t.length
	}

	function d(t) {
		return !(t > 0)
	}

	function p(t) {
		return "object" != typeof t || "length" in t ? t : Array.from(t)
	}

	function g(t, n) {
		let e, r = 0,
			i = 0,
			o = 0;
		if (void 0 === n)
			for (let n of t) null != n && (n = +n) >= n && (e = n - i, i += e / ++r, o += e * (n - i));
		else {
			let a = -1;
			for (let u of t) null != (u = n(u, ++a, t)) && (u = +u) >= u && (e = u - i, i += e / ++r, o += e * (u - i))
		}
		if (r > 1) return o / (r - 1)
	}

	function y(t, n) {
		const e = g(t, n);
		return e ? Math.sqrt(e) : e
	}

	function v(t, n) {
		let e, r;
		if (void 0 === n)
			for (const n of t) null != n && (void 0 === e ? n >= n && (e = r = n) : (e > n && (e = n), r < n && (r = n)));
		else {
			let i = -1;
			for (let o of t) null != (o = n(o, ++i, t)) && (void 0 === e ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)))
		}
		return [e, r]
	}
	class _ {
		constructor() {
			this._partials = new Float64Array(32), this._n = 0
		}
		add(t) {
			const n = this._partials;
			let e = 0;
			for (let r = 0; r < this._n && r < 32; r++) {
				const i = n[r],
					o = t + i,
					a = Math.abs(t) < Math.abs(i) ? t - (o - i) : i - (o - t);
				a && (n[e++] = a), t = o
			}
			return n[e] = t, this._n = e + 1, this
		}
		valueOf() {
			const t = this._partials;
			let n, e, r, i = this._n,
				o = 0;
			if (i > 0) {
				for (o = t[--i]; i > 0 && (n = o, e = t[--i], o = n + e, r = e - (o - n), !r););
				i > 0 && (r < 0 && t[i - 1] < 0 || r > 0 && t[i - 1] > 0) && (e = 2 * r, n = o + e, e == n - o && (o = n))
			}
			return o
		}
	}
	class InternMap extends Map {
		constructor(t, n = w) {
			if (super(), Object.defineProperties(this, {
					_intern: {
						value: new Map
					},
					_key: {
						value: n
					}
				}), null != t)
				for (const [n, e] of t) this.set(n, e)
		}
		get(t) {
			return super.get(b(this, t))
		}
		has(t) {
			return super.has(b(this, t))
		}
		set(t, n) {
			return super.set(m(this, t), n)
		}
		delete(t) {
			return super.delete(x(this, t))
		}
	}
	class InternSet extends Set {
		constructor(t, n = w) {
			if (super(), Object.defineProperties(this, {
					_intern: {
						value: new Map
					},
					_key: {
						value: n
					}
				}), null != t)
				for (const n of t) this.add(n)
		}
		has(t) {
			return super.has(b(this, t))
		}
		add(t) {
			return super.add(m(this, t))
		}
		delete(t) {
			return super.delete(x(this, t))
		}
	}

	function b({
		_intern: t,
		_key: n
	}, e) {
		const r = n(e);
		return t.has(r) ? t.get(r) : e
	}

	function m({
		_intern: t,
		_key: n
	}, e) {
		const r = n(e);
		return t.has(r) ? t.get(r) : (t.set(r, e), e)
	}

	function x({
		_intern: t,
		_key: n
	}, e) {
		const r = n(e);
		return t.has(r) && (e = t.get(r), t.delete(r)), e
	}

	function w(t) {
		return null !== t && "object" == typeof t ? t.valueOf() : t
	}

	function M(t) {
		return t
	}

	function A(t, ...n) {
		return C(t, M, M, n)
	}

	function T(t, ...n) {
		return C(t, Array.from, M, n)
	}

	function S(t, n) {
		for (let e = 1, r = n.length; e < r; ++e) t = t.flatMap((t => t.pop().map((([n, e]) => [...t, n, e]))));
		return t
	}

	function E(t, n, ...e) {
		return C(t, M, n, e)
	}

	function k(t, n, ...e) {
		return C(t, Array.from, n, e)
	}

	function N(t) {
		if (1 !== t.length) throw new Error("duplicate key");
		return t[0]
	}

	function C(t, n, e, r) {
		return function t(i, o) {
			if (o >= r.length) return e(i);
			const a = new InternMap,
				u = r[o++];
			let c = -1;
			for (const t of i) {
				const n = u(t, ++c, i),
					e = a.get(n);
				e ? e.push(t) : a.set(n, [t])
			}
			for (const [n, e] of a) a.set(n, t(e, o));
			return n(a)
		}(t, 0)
	}

	function P(t, n) {
		return Array.from(n, (n => t[n]))
	}

	function z(t, ...n) {
		if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
		t = Array.from(t);
		let [e] = n;
		if (e && 2 !== e.length || n.length > 1) {
			const r = Uint32Array.from(t, ((t, n) => n));
			return n.length > 1 ? (n = n.map((n => t.map(n))), r.sort(((t, e) => {
				for (const r of n) {
					const n = R(r[t], r[e]);
					if (n) return n
				}
			}))) : (e = t.map(e), r.sort(((t, n) => R(e[t], e[n])))), P(t, r)
		}
		return t.sort(D(e))
	}

	function D(t = n) {
		if (t === n) return R;
		if ("function" != typeof t) throw new TypeError("compare is not a function");
		return (n, e) => {
			const r = t(n, e);
			return r || 0 === r ? r : (0 === t(e, e)) - (0 === t(n, n))
		}
	}

	function R(t, n) {
		return (null == t || !(t >= t)) - (null == n || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0)
	}
	var F = Array.prototype.slice;

	function q(t) {
		return () => t
	}
	var O = Math.sqrt(50),
		U = Math.sqrt(10),
		I = Math.sqrt(2);

	function B(t, n, e) {
		var r, i, o, a, u = -1;
		if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
		if ((r = n < t) && (i = t, t = n, n = i), 0 === (a = Y(t, n, e)) || !isFinite(a)) return [];
		if (a > 0) {
			let e = Math.round(t / a),
				r = Math.round(n / a);
			for (e * a < t && ++e, r * a > n && --r, o = new Array(i = r - e + 1); ++u < i;) o[u] = (e + u) * a
		} else {
			a = -a;
			let e = Math.round(t * a),
				r = Math.round(n * a);
			for (e / a < t && ++e, r / a > n && --r, o = new Array(i = r - e + 1); ++u < i;) o[u] = (e + u) / a
		}
		return r && o.reverse(), o
	}

	function Y(t, n, e) {
		var r = (n - t) / Math.max(0, e),
			i = Math.floor(Math.log(r) / Math.LN10),
			o = r / Math.pow(10, i);
		return i >= 0 ? (o >= O ? 10 : o >= U ? 5 : o >= I ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= O ? 10 : o >= U ? 5 : o >= I ? 2 : 1)
	}

	function L(t, n, e) {
		var r = Math.abs(n - t) / Math.max(0, e),
			i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
			o = r / i;
		return o >= O ? i *= 10 : o >= U ? i *= 5 : o >= I && (i *= 2), n < t ? -i : i
	}

	function j(t, n, e) {
		let r;
		for (;;) {
			const i = Y(t, n, e);
			if (i === r || 0 === i || !isFinite(i)) return [t, n];
			i > 0 ? (t = Math.floor(t / i) * i, n = Math.ceil(n / i) * i) : i < 0 && (t = Math.ceil(t * i) / i, n = Math.floor(n * i) / i), r = i
		}
	}

	function $(t) {
		return Math.ceil(Math.log(l(t)) / Math.LN2) + 1
	}

	function H() {
		var t = M,
			n = v,
			e = $;

		function r(r) {
			Array.isArray(r) || (r = Array.from(r));
			var i, o, a, u = r.length,
				c = new Array(u);
			for (i = 0; i < u; ++i) c[i] = t(r[i], i, r);
			var f = n(c),
				l = f[0],
				h = f[1],
				d = e(c, l, h);
			if (!Array.isArray(d)) {
				const t = h,
					e = +d;
				if (n === v && ([l, h] = j(l, h, e)), (d = B(l, h, e))[0] <= l && (a = Y(l, h, e)), d[d.length - 1] >= h)
					if (t >= h && n === v) {
						const t = Y(l, h, e);
						isFinite(t) && (t > 0 ? h = (Math.floor(h / t) + 1) * t : t < 0 && (h = (Math.ceil(h * -t) + 1) / -t))
					} else d.pop()
			}
			for (var p = d.length; d[0] <= l;) d.shift(), --p;
			for (; d[p - 1] > h;) d.pop(), --p;
			var g, y = new Array(p + 1);
			for (i = 0; i <= p; ++i)(g = y[i] = []).x0 = i > 0 ? d[i - 1] : l, g.x1 = i < p ? d[i] : h;
			if (isFinite(a)) {
				if (a > 0)
					for (i = 0; i < u; ++i) null != (o = c[i]) && l <= o && o <= h && y[Math.min(p, Math.floor((o - l) / a))].push(r[i]);
				else if (a < 0)
					for (i = 0; i < u; ++i)
						if (null != (o = c[i]) && l <= o && o <= h) {
							const t = Math.floor((l - o) * a);
							y[Math.min(p, t + (d[t] <= o))].push(r[i])
						}
			} else
				for (i = 0; i < u; ++i) null != (o = c[i]) && l <= o && o <= h && y[s(d, o, 0, p)].push(r[i]);
			return y
		}
		return r.value = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : q(n), r) : t
		}, r.domain = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : q([t[0], t[1]]), r) : n
		}, r.thresholds = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? q(F.call(t)) : q(t), r) : e
		}, r
	}

	function X(t, n) {
		let e;
		if (void 0 === n)
			for (const n of t) null != n && (e < n || void 0 === e && n >= n) && (e = n);
		else {
			let r = -1;
			for (let i of t) null != (i = n(i, ++r, t)) && (e < i || void 0 === e && i >= i) && (e = i)
		}
		return e
	}

	function G(t, n) {
		let e;
		if (void 0 === n)
			for (const n of t) null != n && (e > n || void 0 === e && n >= n) && (e = n);
		else {
			let r = -1;
			for (let i of t) null != (i = n(i, ++r, t)) && (e > i || void 0 === e && i >= i) && (e = i)
		}
		return e
	}

	function V(t, n, e = 0, r = t.length - 1, i) {
		for (i = void 0 === i ? R : D(i); r > e;) {
			if (r - e > 600) {
				const o = r - e + 1,
					a = n - e + 1,
					u = Math.log(o),
					c = .5 * Math.exp(2 * u / 3),
					f = .5 * Math.sqrt(u * c * (o - c) / o) * (a - o / 2 < 0 ? -1 : 1);
				V(t, n, Math.max(e, Math.floor(n - a * c / o + f)), Math.min(r, Math.floor(n + (o - a) * c / o + f)), i)
			}
			const o = t[n];
			let a = e,
				u = r;
			for (W(t, e, n), i(t[r], o) > 0 && W(t, e, r); a < u;) {
				for (W(t, a, u), ++a, --u; i(t[a], o) < 0;) ++a;
				for (; i(t[u], o) > 0;) --u
			}
			0 === i(t[e], o) ? W(t, e, u) : (++u, W(t, u, r)), u <= n && (e = u + 1), n <= u && (r = u - 1)
		}
		return t
	}

	function W(t, n, e) {
		const r = t[n];
		t[n] = t[e], t[e] = r
	}

	function Z(t, n, e) {
		if (t = Float64Array.from(function*(t, n) {
				if (void 0 === n)
					for (let n of t) null != n && (n = +n) >= n && (yield n);
				else {
					let e = -1;
					for (let r of t) null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r)
				}
			}(t, e)), r = t.length) {
			if ((n = +n) <= 0 || r < 2) return G(t);
			if (n >= 1) return X(t);
			var r, i = (r - 1) * n,
				o = Math.floor(i),
				a = X(V(t, o).subarray(0, o + 1));
			return a + (G(t.subarray(o + 1)) - a) * (i - o)
		}
	}

	function K(t, n, e = o) {
		if (r = t.length) {
			if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
			if (n >= 1) return +e(t[r - 1], r - 1, t);
			var r, i = (r - 1) * n,
				a = Math.floor(i),
				u = +e(t[a], a, t);
			return u + (+e(t[a + 1], a + 1, t) - u) * (i - a)
		}
	}

	function Q(t, n) {
		let e, r = -1,
			i = -1;
		if (void 0 === n)
			for (const n of t) ++i, null != n && (e < n || void 0 === e && n >= n) && (e = n, r = i);
		else
			for (let o of t) null != (o = n(o, ++i, t)) && (e < o || void 0 === e && o >= o) && (e = o, r = i);
		return r
	}

	function J(t) {
		return Array.from(function*(t) {
			for (const n of t) yield* n
		}(t))
	}

	function tt(t, n) {
		let e, r = -1,
			i = -1;
		if (void 0 === n)
			for (const n of t) ++i, null != n && (e > n || void 0 === e && n >= n) && (e = n, r = i);
		else
			for (let o of t) null != (o = n(o, ++i, t)) && (e > o || void 0 === e && o >= o) && (e = o, r = i);
		return r
	}

	function nt(t, n) {
		return [t, n]
	}

	function et(t, n, e) {
		t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
		for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
		return o
	}

	function rt(t, e = n) {
		if (1 === e.length) return tt(t, e);
		let r, i = -1,
			o = -1;
		for (const n of t) ++o, (i < 0 ? 0 === e(n, n) : e(n, r) < 0) && (r = n, i = o);
		return i
	}
	var it = ot(Math.random);

	function ot(t) {
		return function(n, e = 0, r = n.length) {
			let i = r - (e = +e);
			for (; i;) {
				const r = t() * i-- | 0,
					o = n[i + e];
				n[i + e] = n[r + e], n[r + e] = o
			}
			return n
		}
	}

	function at(t) {
		if (!(i = t.length)) return [];
		for (var n = -1, e = G(t, ut), r = new Array(e); ++n < e;)
			for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) a[o] = t[o][n];
		return r
	}

	function ut(t) {
		return t.length
	}

	function ct(t) {
		return t instanceof InternSet ? t : new InternSet(t)
	}

	function ft(t, n) {
		const e = t[Symbol.iterator](),
			r = new Set;
		for (const t of n) {
			const n = st(t);
			if (r.has(n)) continue;
			let i, o;
			for (;
				({
					value: i,
					done: o
				} = e.next());) {
				if (o) return !1;
				const t = st(i);
				if (r.add(t), Object.is(n, t)) break
			}
		}
		return !0
	}

	function st(t) {
		return null !== t && "object" == typeof t ? t.valueOf() : t
	}

	function lt(t) {
		return t
	}
	var ht = 1e-6;

	function dt(t) {
		return "translate(" + t + ",0)"
	}

	function pt(t) {
		return "translate(0," + t + ")"
	}

	function gt(t) {
		return n => +t(n)
	}

	function yt(t, n) {
		return n = Math.max(0, t.bandwidth() - 2 * n) / 2, t.round() && (n = Math.round(n)), e => +t(e) + n
	}

	function vt() {
		return !this.__axis
	}

	function _t(t, n) {
		var e = [],
			r = null,
			i = null,
			o = 6,
			a = 6,
			u = 3,
			c = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : .5,
			f = 1 === t || 4 === t ? -1 : 1,
			s = 4 === t || 2 === t ? "x" : "y",
			l = 1 === t || 3 === t ? dt : pt;

		function h(h) {
			var d = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
				p = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : lt : i,
				g = Math.max(o, 0) + u,
				y = n.range(),
				v = +y[0] + c,
				_ = +y[y.length - 1] + c,
				b = (n.bandwidth ? yt : gt)(n.copy(), c),
				m = h.selection ? h.selection() : h,
				x = m.selectAll(".domain").data([null]),
				w = m.selectAll(".tick").data(d, n).order(),
				M = w.exit(),
				A = w.enter().append("g").attr("class", "tick"),
				T = w.select("line"),
				S = w.select("text");
			x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), w = w.merge(A), T = T.merge(A.append("line").attr("stroke", "currentColor").attr(s + "2", f * o)), S = S.merge(A.append("text").attr("fill", "currentColor").attr(s, f * g).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), h !== m && (x = x.transition(h), w = w.transition(h), T = T.transition(h), S = S.transition(h), M = M.transition(h).attr("opacity", ht).attr("transform", (function(t) {
				return isFinite(t = b(t)) ? l(t + c) : this.getAttribute("transform")
			})), A.attr("opacity", ht).attr("transform", (function(t) {
				var n = this.parentNode.__axis;
				return l((n && isFinite(n = n(t)) ? n : b(t)) + c)
			}))), M.remove(), x.attr("d", 4 === t || 2 === t ? a ? "M" + f * a + "," + v + "H" + c + "V" + _ + "H" + f * a : "M" + c + "," + v + "V" + _ : a ? "M" + v + "," + f * a + "V" + c + "H" + _ + "V" + f * a : "M" + v + "," + c + "H" + _), w.attr("opacity", 1).attr("transform", (function(t) {
				return l(b(t) + c)
			})), T.attr(s + "2", f * o), S.attr(s, f * g).text(p), m.filter(vt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), m.each((function() {
				this.__axis = b
			}))
		}
		return h.scale = function(t) {
			return arguments.length ? (n = t, h) : n
		}, h.ticks = function() {
			return e = Array.from(arguments), h
		}, h.tickArguments = function(t) {
			return arguments.length ? (e = null == t ? [] : Array.from(t), h) : e.slice()
		}, h.tickValues = function(t) {
			return arguments.length ? (r = null == t ? null : Array.from(t), h) : r && r.slice()
		}, h.tickFormat = function(t) {
			return arguments.length ? (i = t, h) : i
		}, h.tickSize = function(t) {
			return arguments.length ? (o = a = +t, h) : o
		}, h.tickSizeInner = function(t) {
			return arguments.length ? (o = +t, h) : o
		}, h.tickSizeOuter = function(t) {
			return arguments.length ? (a = +t, h) : a
		}, h.tickPadding = function(t) {
			return arguments.length ? (u = +t, h) : u
		}, h.offset = function(t) {
			return arguments.length ? (c = +t, h) : c
		}, h
	}
	var bt = {
		value: () => {}
	};

	function mt() {
		for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
			if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
			r[t] = []
		}
		return new xt(r)
	}

	function xt(t) {
		this._ = t
	}

	function wt(t, n) {
		return t.trim().split(/^|\s+/).map((function(t) {
			var e = "",
				r = t.indexOf(".");
			if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			return {
				type: t,
				name: e
			}
		}))
	}

	function Mt(t, n) {
		for (var e, r = 0, i = t.length; r < i; ++r)
			if ((e = t[r]).name === n) return e.value
	}

	function At(t, n, e) {
		for (var r = 0, i = t.length; r < i; ++r)
			if (t[r].name === n) {
				t[r] = bt, t = t.slice(0, r).concat(t.slice(r + 1));
				break
			} return null != e && t.push({
			name: n,
			value: e
		}), t
	}
	xt.prototype = mt.prototype = {
		constructor: xt,
		on: function(t, n) {
			var e, r = this._,
				i = wt(t + "", r),
				o = -1,
				a = i.length;
			if (!(arguments.length < 2)) {
				if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
				for (; ++o < a;)
					if (e = (t = i[o]).type) r[e] = At(r[e], t.name, n);
					else if (null == n)
					for (e in r) r[e] = At(r[e], t.name, null);
				return this
			}
			for (; ++o < a;)
				if ((e = (t = i[o]).type) && (e = Mt(r[e], t.name))) return e
		},
		copy: function() {
			var t = {},
				n = this._;
			for (var e in n) t[e] = n[e].slice();
			return new xt(t)
		},
		call: function(t, n) {
			if ((e = arguments.length - 2) > 0)
				for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
			if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
		},
		apply: function(t, n, e) {
			if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
			for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
		}
	};
	var Tt = "http://www.w3.org/1999/xhtml",
		St = {
			svg: "http://www.w3.org/2000/svg",
			xhtml: Tt,
			xlink: "http://www.w3.org/1999/xlink",
			xml: "http://www.w3.org/XML/1998/namespace",
			xmlns: "http://www.w3.org/2000/xmlns/"
		};

	function Et(t) {
		var n = t += "",
			e = n.indexOf(":");
		return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), St.hasOwnProperty(n) ? {
			space: St[n],
			local: t
		} : t
	}

	function kt(t) {
		return function() {
			var n = this.ownerDocument,
				e = this.namespaceURI;
			return e === Tt && n.documentElement.namespaceURI === Tt ? n.createElement(t) : n.createElementNS(e, t)
		}
	}

	function Nt(t) {
		return function() {
			return this.ownerDocument.createElementNS(t.space, t.local)
		}
	}

	function Ct(t) {
		var n = Et(t);
		return (n.local ? Nt : kt)(n)
	}

	function Pt() {}

	function zt(t) {
		return null == t ? Pt : function() {
			return this.querySelector(t)
		}
	}

	function Dt(t) {
		return null == t ? [] : Array.isArray(t) ? t : Array.from(t)
	}

	function Rt() {
		return []
	}

	function Ft(t) {
		return null == t ? Rt : function() {
			return this.querySelectorAll(t)
		}
	}

	function qt(t) {
		return function() {
			return this.matches(t)
		}
	}

	function Ot(t) {
		return function(n) {
			return n.matches(t)
		}
	}
	var Ut = Array.prototype.find;

	function It() {
		return this.firstElementChild
	}
	var Bt = Array.prototype.filter;

	function Yt() {
		return Array.from(this.children)
	}

	function Lt(t) {
		return new Array(t.length)
	}

	function jt(t, n) {
		this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
	}

	function $t(t) {
		return function() {
			return t
		}
	}

	function Ht(t, n, e, r, i, o) {
		for (var a, u = 0, c = n.length, f = o.length; u < f; ++u)(a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new jt(t, o[u]);
		for (; u < c; ++u)(a = n[u]) && (i[u] = a)
	}

	function Xt(t, n, e, r, i, o, a) {
		var u, c, f, s = new Map,
			l = n.length,
			h = o.length,
			d = new Array(l);
		for (u = 0; u < l; ++u)(c = n[u]) && (d[u] = f = a.call(c, c.__data__, u, n) + "", s.has(f) ? i[u] = c : s.set(f, c));
		for (u = 0; u < h; ++u) f = a.call(t, o[u], u, o) + "", (c = s.get(f)) ? (r[u] = c, c.__data__ = o[u], s.delete(f)) : e[u] = new jt(t, o[u]);
		for (u = 0; u < l; ++u)(c = n[u]) && s.get(d[u]) === c && (i[u] = c)
	}

	function Gt(t) {
		return t.__data__
	}

	function Vt(t) {
		return "object" == typeof t && "length" in t ? t : Array.from(t)
	}

	function Wt(t, n) {
		return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}

	function Zt(t) {
		return function() {
			this.removeAttribute(t)
		}
	}

	function Kt(t) {
		return function() {
			this.removeAttributeNS(t.space, t.local)
		}
	}

	function Qt(t, n) {
		return function() {
			this.setAttribute(t, n)
		}
	}

	function Jt(t, n) {
		return function() {
			this.setAttributeNS(t.space, t.local, n)
		}
	}

	function tn(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
		}
	}

	function nn(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
		}
	}

	function en(t) {
		return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
	}

	function rn(t) {
		return function() {
			this.style.removeProperty(t)
		}
	}

	function on(t, n, e) {
		return function() {
			this.style.setProperty(t, n, e)
		}
	}

	function an(t, n, e) {
		return function() {
			var r = n.apply(this, arguments);
			null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
		}
	}

	function un(t, n) {
		return t.style.getPropertyValue(n) || en(t).getComputedStyle(t, null).getPropertyValue(n)
	}

	function cn(t) {
		return function() {
			delete this[t]
		}
	}

	function fn(t, n) {
		return function() {
			this[t] = n
		}
	}

	function sn(t, n) {
		return function() {
			var e = n.apply(this, arguments);
			null == e ? delete this[t] : this[t] = e
		}
	}

	function ln(t) {
		return t.trim().split(/^|\s+/)
	}

	function hn(t) {
		return t.classList || new dn(t)
	}

	function dn(t) {
		this._node = t, this._names = ln(t.getAttribute("class") || "")
	}

	function pn(t, n) {
		for (var e = hn(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
	}

	function gn(t, n) {
		for (var e = hn(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
	}

	function yn(t) {
		return function() {
			pn(this, t)
		}
	}

	function vn(t) {
		return function() {
			gn(this, t)
		}
	}

	function _n(t, n) {
		return function() {
			(n.apply(this, arguments) ? pn : gn)(this, t)
		}
	}

	function bn() {
		this.textContent = ""
	}

	function mn(t) {
		return function() {
			this.textContent = t
		}
	}

	function xn(t) {
		return function() {
			var n = t.apply(this, arguments);
			this.textContent = null == n ? "" : n
		}
	}

	function wn() {
		this.innerHTML = ""
	}

	function Mn(t) {
		return function() {
			this.innerHTML = t
		}
	}

	function An(t) {
		return function() {
			var n = t.apply(this, arguments);
			this.innerHTML = null == n ? "" : n
		}
	}

	function Tn() {
		this.nextSibling && this.parentNode.appendChild(this)
	}

	function Sn() {
		this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
	}

	function En() {
		return null
	}

	function kn() {
		var t = this.parentNode;
		t && t.removeChild(this)
	}

	function Nn() {
		var t = this.cloneNode(!1),
			n = this.parentNode;
		return n ? n.insertBefore(t, this.nextSibling) : t
	}

	function Cn() {
		var t = this.cloneNode(!0),
			n = this.parentNode;
		return n ? n.insertBefore(t, this.nextSibling) : t
	}

	function Pn(t) {
		return t.trim().split(/^|\s+/).map((function(t) {
			var n = "",
				e = t.indexOf(".");
			return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
				type: t,
				name: n
			}
		}))
	}

	function zn(t) {
		return function() {
			var n = this.__on;
			if (n) {
				for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);
				++i ? n.length = i : delete this.__on
			}
		}
	}

	function Dn(t, n, e) {
		return function() {
			var r, i = this.__on,
				o = function(t) {
					return function(n) {
						t.call(this, n, this.__data__)
					}
				}(n);
			if (i)
				for (var a = 0, u = i.length; a < u; ++a)
					if ((r = i[a]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
			this.addEventListener(t.type, o, e), r = {
				type: t.type,
				name: t.name,
				value: n,
				listener: o,
				options: e
			}, i ? i.push(r) : this.__on = [r]
		}
	}

	function Rn(t, n, e) {
		var r = en(t),
			i = r.CustomEvent;
		"function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
	}

	function Fn(t, n) {
		return function() {
			return Rn(this, t, n)
		}
	}

	function qn(t, n) {
		return function() {
			return Rn(this, t, n.apply(this, arguments))
		}
	}
	jt.prototype = {
		constructor: jt,
		appendChild: function(t) {
			return this._parent.insertBefore(t, this._next)
		},
		insertBefore: function(t, n) {
			return this._parent.insertBefore(t, n)
		},
		querySelector: function(t) {
			return this._parent.querySelector(t)
		},
		querySelectorAll: function(t) {
			return this._parent.querySelectorAll(t)
		}
	}, dn.prototype = {
		add: function(t) {
			this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
		},
		remove: function(t) {
			var n = this._names.indexOf(t);
			n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
		},
		contains: function(t) {
			return this._names.indexOf(t) >= 0
		}
	};
	var On = [null];

	function Un(t, n) {
		this._groups = t, this._parents = n
	}

	function In() {
		return new Un([
			[document.documentElement]
		], On)
	}

	function Bn(t) {
		return "string" == typeof t ? new Un([
			[document.querySelector(t)]
		], [document.documentElement]) : new Un([
			[t]
		], On)
	}
	Un.prototype = In.prototype = {
		constructor: Un,
		select: function(t) {
			"function" != typeof t && (t = zt(t));
			for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
				for (var o, a, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), f[s] = a);
			return new Un(r, this._parents)
		},
		selectAll: function(t) {
			t = "function" == typeof t ? function(t) {
				return function() {
					return Dt(t.apply(this, arguments))
				}
			}(t) : Ft(t);
			for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
				for (var a, u = n[o], c = u.length, f = 0; f < c; ++f)(a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a));
			return new Un(r, i)
		},
		selectChild: function(t) {
			return this.select(null == t ? It : function(t) {
				return function() {
					return Ut.call(this.children, t)
				}
			}("function" == typeof t ? t : Ot(t)))
		},
		selectChildren: function(t) {
			return this.selectAll(null == t ? Yt : function(t) {
				return function() {
					return Bt.call(this.children, t)
				}
			}("function" == typeof t ? t : Ot(t)))
		},
		filter: function(t) {
			"function" != typeof t && (t = qt(t));
			for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
				for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f)(o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
			return new Un(r, this._parents)
		},
		data: function(t, n) {
			if (!arguments.length) return Array.from(this, Gt);
			var e = n ? Xt : Ht,
				r = this._parents,
				i = this._groups;
			"function" != typeof t && (t = $t(t));
			for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), f = 0; f < o; ++f) {
				var s = r[f],
					l = i[f],
					h = l.length,
					d = Vt(t.call(s, s && s.__data__, f, r)),
					p = d.length,
					g = u[f] = new Array(p),
					y = a[f] = new Array(p),
					v = c[f] = new Array(h);
				e(s, l, g, y, v, d, n);
				for (var _, b, m = 0, x = 0; m < p; ++m)
					if (_ = g[m]) {
						for (m >= x && (x = m + 1); !(b = y[x]) && ++x < p;);
						_._next = b || null
					}
			}
			return (a = new Un(a, r))._enter = u, a._exit = c, a
		},
		enter: function() {
			return new Un(this._enter || this._groups.map(Lt), this._parents)
		},
		exit: function() {
			return new Un(this._exit || this._groups.map(Lt), this._parents)
		},
		join: function(t, n, e) {
			var r = this.enter(),
				i = this,
				o = this.exit();
			return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != n && (i = n(i)) && (i = i.selection()), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
		},
		merge: function(t) {
			for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), c = 0; c < a; ++c)
				for (var f, s = e[c], l = r[c], h = s.length, d = u[c] = new Array(h), p = 0; p < h; ++p)(f = s[p] || l[p]) && (d[p] = f);
			for (; c < i; ++c) u[c] = e[c];
			return new Un(u, this._parents)
		},
		selection: function() {
			return this
		},
		order: function() {
			for (var t = this._groups, n = -1, e = t.length; ++n < e;)
				for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;)(r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r);
			return this
		},
		sort: function(t) {
			function n(n, e) {
				return n && e ? t(n.__data__, e.__data__) : !n - !e
			}
			t || (t = Wt);
			for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
				for (var a, u = e[o], c = u.length, f = i[o] = new Array(c), s = 0; s < c; ++s)(a = u[s]) && (f[s] = a);
				f.sort(n)
			}
			return new Un(i, this._parents).order()
		},
		call: function() {
			var t = arguments[0];
			return arguments[0] = this, t.apply(null, arguments), this
		},
		nodes: function() {
			return Array.from(this)
		},
		node: function() {
			for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
				for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
					var a = r[i];
					if (a) return a
				}
			return null
		},
		size: function() {
			let t = 0;
			for (const n of this) ++t;
			return t
		},
		empty: function() {
			return !this.node()
		},
		each: function(t) {
			for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
				for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)(i = o[a]) && t.call(i, i.__data__, a, o);
			return this
		},
		attr: function(t, n) {
			var e = Et(t);
			if (arguments.length < 2) {
				var r = this.node();
				return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
			}
			return this.each((null == n ? e.local ? Kt : Zt : "function" == typeof n ? e.local ? nn : tn : e.local ? Jt : Qt)(e, n))
		},
		style: function(t, n, e) {
			return arguments.length > 1 ? this.each((null == n ? rn : "function" == typeof n ? an : on)(t, n, null == e ? "" : e)) : un(this.node(), t)
		},
		property: function(t, n) {
			return arguments.length > 1 ? this.each((null == n ? cn : "function" == typeof n ? sn : fn)(t, n)) : this.node()[t]
		},
		classed: function(t, n) {
			var e = ln(t + "");
			if (arguments.length < 2) {
				for (var r = hn(this.node()), i = -1, o = e.length; ++i < o;)
					if (!r.contains(e[i])) return !1;
				return !0
			}
			return this.each(("function" == typeof n ? _n : n ? yn : vn)(e, n))
		},
		text: function(t) {
			return arguments.length ? this.each(null == t ? bn : ("function" == typeof t ? xn : mn)(t)) : this.node().textContent
		},
		html: function(t) {
			return arguments.length ? this.each(null == t ? wn : ("function" == typeof t ? An : Mn)(t)) : this.node().innerHTML
		},
		raise: function() {
			return this.each(Tn)
		},
		lower: function() {
			return this.each(Sn)
		},
		append: function(t) {
			var n = "function" == typeof t ? t : Ct(t);
			return this.select((function() {
				return this.appendChild(n.apply(this, arguments))
			}))
		},
		insert: function(t, n) {
			var e = "function" == typeof t ? t : Ct(t),
				r = null == n ? En : "function" == typeof n ? n : zt(n);
			return this.select((function() {
				return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
			}))
		},
		remove: function() {
			return this.each(kn)
		},
		clone: function(t) {
			return this.select(t ? Cn : Nn)
		},
		datum: function(t) {
			return arguments.length ? this.property("__data__", t) : this.node().__data__
		},
		on: function(t, n, e) {
			var r, i, o = Pn(t + ""),
				a = o.length;
			if (!(arguments.length < 2)) {
				for (u = n ? Dn : zn, r = 0; r < a; ++r) this.each(u(o[r], n, e));
				return this
			}
			var u = this.node().__on;
			if (u)
				for (var c, f = 0, s = u.length; f < s; ++f)
					for (r = 0, c = u[f]; r < a; ++r)
						if ((i = o[r]).type === c.type && i.name === c.name) return c.value
		},
		dispatch: function(t, n) {
			return this.each(("function" == typeof n ? qn : Fn)(t, n))
		},
		[Symbol.iterator]: function*() {
			for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
				for (var r, i = t[n], o = 0, a = i.length; o < a; ++o)(r = i[o]) && (yield r)
		}
	};
	var Yn = 0;

	function Ln() {
		return new jn
	}

	function jn() {
		this._ = "@" + (++Yn).toString(36)
	}

	function $n(t) {
		let n;
		for (; n = t.sourceEvent;) t = n;
		return t
	}

	function Hn(t, n) {
		if (t = $n(t), void 0 === n && (n = t.currentTarget), n) {
			var e = n.ownerSVGElement || n;
			if (e.createSVGPoint) {
				var r = e.createSVGPoint();
				return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
			}
			if (n.getBoundingClientRect) {
				var i = n.getBoundingClientRect();
				return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
			}
		}
		return [t.pageX, t.pageY]
	}
	jn.prototype = Ln.prototype = {
		constructor: jn,
		get: function(t) {
			for (var n = this._; !(n in t);)
				if (!(t = t.parentNode)) return;
			return t[n]
		},
		set: function(t, n) {
			return t[this._] = n
		},
		remove: function(t) {
			return this._ in t && delete t[this._]
		},
		toString: function() {
			return this._
		}
	};
	const Xn = {
			passive: !1
		},
		Gn = {
			capture: !0,
			passive: !1
		};

	function Vn(t) {
		t.stopImmediatePropagation()
	}

	function Wn(t) {
		t.preventDefault(), t.stopImmediatePropagation()
	}

	function Zn(t) {
		var n = t.document.documentElement,
			e = Bn(t).on("dragstart.drag", Wn, Gn);
		"onselectstart" in n ? e.on("selectstart.drag", Wn, Gn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
	}

	function Kn(t, n) {
		var e = t.document.documentElement,
			r = Bn(t).on("dragstart.drag", null);
		n && (r.on("click.drag", Wn, Gn), setTimeout((function() {
			r.on("click.drag", null)
		}), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
	}
	var Qn = t => () => t;

	function Jn(t, {
		sourceEvent: n,
		subject: e,
		target: r,
		identifier: i,
		active: o,
		x: a,
		y: u,
		dx: c,
		dy: f,
		dispatch: s
	}) {
		Object.defineProperties(this, {
			type: {
				value: t,
				enumerable: !0,
				configurable: !0
			},
			sourceEvent: {
				value: n,
				enumerable: !0,
				configurable: !0
			},
			subject: {
				value: e,
				enumerable: !0,
				configurable: !0
			},
			target: {
				value: r,
				enumerable: !0,
				configurable: !0
			},
			identifier: {
				value: i,
				enumerable: !0,
				configurable: !0
			},
			active: {
				value: o,
				enumerable: !0,
				configurable: !0
			},
			x: {
				value: a,
				enumerable: !0,
				configurable: !0
			},
			y: {
				value: u,
				enumerable: !0,
				configurable: !0
			},
			dx: {
				value: c,
				enumerable: !0,
				configurable: !0
			},
			dy: {
				value: f,
				enumerable: !0,
				configurable: !0
			},
			_: {
				value: s
			}
		})
	}

	function te(t) {
		return !t.ctrlKey && !t.button
	}

	function ne() {
		return this.parentNode
	}

	function ee(t, n) {
		return null == n ? {
			x: t.x,
			y: t.y
		} : n
	}

	function re() {
		return navigator.maxTouchPoints || "ontouchstart" in this
	}

	function ie(t, n, e) {
		t.prototype = n.prototype = e, e.constructor = t
	}

	function oe(t, n) {
		var e = Object.create(t.prototype);
		for (var r in n) e[r] = n[r];
		return e
	}

	function ae() {}
	Jn.prototype.on = function() {
		var t = this._.on.apply(this._, arguments);
		return t === this._ ? this : t
	};
	var ue = .7,
		ce = 1 / ue,
		fe = "\\s*([+-]?\\d+)\\s*",
		se = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
		le = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
		he = /^#([0-9a-f]{3,8})$/,
		de = new RegExp(`^rgb\\(${fe},${fe},${fe}\\)$`),
		pe = new RegExp(`^rgb\\(${le},${le},${le}\\)$`),
		ge = new RegExp(`^rgba\\(${fe},${fe},${fe},${se}\\)$`),
		ye = new RegExp(`^rgba\\(${le},${le},${le},${se}\\)$`),
		ve = new RegExp(`^hsl\\(${se},${le},${le}\\)$`),
		_e = new RegExp(`^hsla\\(${se},${le},${le},${se}\\)$`),
		be = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		};

	function me() {
		return this.rgb().formatHex()
	}

	function xe() {
		return this.rgb().formatRgb()
	}

	function we(t) {
		var n, e;
		return t = (t + "").trim().toLowerCase(), (n = he.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? Me(n) : 3 === e ? new Ee(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? Ae(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? Ae(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = de.exec(t)) ? new Ee(n[1], n[2], n[3], 1) : (n = pe.exec(t)) ? new Ee(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = ge.exec(t)) ? Ae(n[1], n[2], n[3], n[4]) : (n = ye.exec(t)) ? Ae(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = ve.exec(t)) ? De(n[1], n[2] / 100, n[3] / 100, 1) : (n = _e.exec(t)) ? De(n[1], n[2] / 100, n[3] / 100, n[4]) : be.hasOwnProperty(t) ? Me(be[t]) : "transparent" === t ? new Ee(NaN, NaN, NaN, 0) : null
	}

	function Me(t) {
		return new Ee(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
	}

	function Ae(t, n, e, r) {
		return r <= 0 && (t = n = e = NaN), new Ee(t, n, e, r)
	}

	function Te(t) {
		return t instanceof ae || (t = we(t)), t ? new Ee((t = t.rgb()).r, t.g, t.b, t.opacity) : new Ee
	}

	function Se(t, n, e, r) {
		return 1 === arguments.length ? Te(t) : new Ee(t, n, e, null == r ? 1 : r)
	}

	function Ee(t, n, e, r) {
		this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
	}

	function ke() {
		return `#${ze(this.r)}${ze(this.g)}${ze(this.b)}`
	}

	function Ne() {
		const t = Ce(this.opacity);
		return `${1===t?"rgb(":"rgba("}${Pe(this.r)}, ${Pe(this.g)}, ${Pe(this.b)}${1===t?")":`, ${t})`}`
	}

	function Ce(t) {
		return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
	}

	function Pe(t) {
		return Math.max(0, Math.min(255, Math.round(t) || 0))
	}

	function ze(t) {
		return ((t = Pe(t)) < 16 ? "0" : "") + t.toString(16)
	}

	function De(t, n, e, r) {
		return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new qe(t, n, e, r)
	}

	function Re(t) {
		if (t instanceof qe) return new qe(t.h, t.s, t.l, t.opacity);
		if (t instanceof ae || (t = we(t)), !t) return new qe;
		if (t instanceof qe) return t;
		var n = (t = t.rgb()).r / 255,
			e = t.g / 255,
			r = t.b / 255,
			i = Math.min(n, e, r),
			o = Math.max(n, e, r),
			a = NaN,
			u = o - i,
			c = (o + i) / 2;
		return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new qe(a, u, c, t.opacity)
	}

	function Fe(t, n, e, r) {
		return 1 === arguments.length ? Re(t) : new qe(t, n, e, null == r ? 1 : r)
	}

	function qe(t, n, e, r) {
		this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
	}

	function Oe(t) {
		return (t = (t || 0) % 360) < 0 ? t + 360 : t
	}

	function Ue(t) {
		return Math.max(0, Math.min(1, t || 0))
	}

	function Ie(t, n, e) {
		return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
	}
	ie(ae, we, {
		copy(t) {
			return Object.assign(new this.constructor, this, t)
		},
		displayable() {
			return this.rgb().displayable()
		},
		hex: me,
		formatHex: me,
		formatHex8: function() {
			return this.rgb().formatHex8()
		},
		formatHsl: function() {
			return Re(this).formatHsl()
		},
		formatRgb: xe,
		toString: xe
	}), ie(Ee, Se, oe(ae, {
		brighter(t) {
			return t = null == t ? ce : Math.pow(ce, t), new Ee(this.r * t, this.g * t, this.b * t, this.opacity)
		},
		darker(t) {
			return t = null == t ? ue : Math.pow(ue, t), new Ee(this.r * t, this.g * t, this.b * t, this.opacity)
		},
		rgb() {
			return this
		},
		clamp() {
			return new Ee(Pe(this.r), Pe(this.g), Pe(this.b), Ce(this.opacity))
		},
		displayable() {
			return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
		},
		hex: ke,
		formatHex: ke,
		formatHex8: function() {
			return `#${ze(this.r)}${ze(this.g)}${ze(this.b)}${ze(255*(isNaN(this.opacity)?1:this.opacity))}`
		},
		formatRgb: Ne,
		toString: Ne
	})), ie(qe, Fe, oe(ae, {
		brighter(t) {
			return t = null == t ? ce : Math.pow(ce, t), new qe(this.h, this.s, this.l * t, this.opacity)
		},
		darker(t) {
			return t = null == t ? ue : Math.pow(ue, t), new qe(this.h, this.s, this.l * t, this.opacity)
		},
		rgb() {
			var t = this.h % 360 + 360 * (this.h < 0),
				n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
				e = this.l,
				r = e + (e < .5 ? e : 1 - e) * n,
				i = 2 * e - r;
			return new Ee(Ie(t >= 240 ? t - 240 : t + 120, i, r), Ie(t, i, r), Ie(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
		},
		clamp() {
			return new qe(Oe(this.h), Ue(this.s), Ue(this.l), Ce(this.opacity))
		},
		displayable() {
			return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
		},
		formatHsl() {
			const t = Ce(this.opacity);
			return `${1===t?"hsl(":"hsla("}${Oe(this.h)}, ${100*Ue(this.s)}%, ${100*Ue(this.l)}%${1===t?")":`, ${t})`}`
		}
	}));
	const Be = Math.PI / 180,
		Ye = 180 / Math.PI,
		Le = .96422,
		je = .82521,
		$e = 4 / 29,
		He = 6 / 29,
		Xe = 3 * He * He;

	function Ge(t) {
		if (t instanceof We) return new We(t.l, t.a, t.b, t.opacity);
		if (t instanceof er) return rr(t);
		t instanceof Ee || (t = Te(t));
		var n, e, r = Je(t.r),
			i = Je(t.g),
			o = Je(t.b),
			a = Ze((.2225045 * r + .7168786 * i + .0606169 * o) / 1);
		return r === i && i === o ? n = e = a : (n = Ze((.4360747 * r + .3850649 * i + .1430804 * o) / Le), e = Ze((.0139322 * r + .0971045 * i + .7141733 * o) / je)), new We(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity)
	}

	function Ve(t, n, e, r) {
		return 1 === arguments.length ? Ge(t) : new We(t, n, e, null == r ? 1 : r)
	}

	function We(t, n, e, r) {
		this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
	}

	function Ze(t) {
		return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / Xe + $e
	}

	function Ke(t) {
		return t > He ? t * t * t : Xe * (t - $e)
	}

	function Qe(t) {
		return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
	}

	function Je(t) {
		return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
	}

	function tr(t) {
		if (t instanceof er) return new er(t.h, t.c, t.l, t.opacity);
		if (t instanceof We || (t = Ge(t)), 0 === t.a && 0 === t.b) return new er(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
		var n = Math.atan2(t.b, t.a) * Ye;
		return new er(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
	}

	function nr(t, n, e, r) {
		return 1 === arguments.length ? tr(t) : new er(t, n, e, null == r ? 1 : r)
	}

	function er(t, n, e, r) {
		this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
	}

	function rr(t) {
		if (isNaN(t.h)) return new We(t.l, 0, 0, t.opacity);
		var n = t.h * Be;
		return new We(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
	}
	ie(We, Ve, oe(ae, {
		brighter(t) {
			return new We(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
		},
		darker(t) {
			return new We(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
		},
		rgb() {
			var t = (this.l + 16) / 116,
				n = isNaN(this.a) ? t : t + this.a / 500,
				e = isNaN(this.b) ? t : t - this.b / 200;
			return new Ee(Qe(3.1338561 * (n = Le * Ke(n)) - 1.6168667 * (t = 1 * Ke(t)) - .4906146 * (e = je * Ke(e))), Qe(-.9787684 * n + 1.9161415 * t + .033454 * e), Qe(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
		}
	})), ie(er, nr, oe(ae, {
		brighter(t) {
			return new er(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
		},
		darker(t) {
			return new er(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
		},
		rgb() {
			return rr(this).rgb()
		}
	}));
	var ir = -.14861,
		or = 1.78277,
		ar = -.29227,
		ur = -.90649,
		cr = 1.97294,
		fr = cr * ur,
		sr = cr * or,
		lr = or * ar - ur * ir;

	function hr(t) {
		if (t instanceof pr) return new pr(t.h, t.s, t.l, t.opacity);
		t instanceof Ee || (t = Te(t));
		var n = t.r / 255,
			e = t.g / 255,
			r = t.b / 255,
			i = (lr * r + fr * n - sr * e) / (lr + fr - sr),
			o = r - i,
			a = (cr * (e - i) - ar * o) / ur,
			u = Math.sqrt(a * a + o * o) / (cr * i * (1 - i)),
			c = u ? Math.atan2(a, o) * Ye - 120 : NaN;
		return new pr(c < 0 ? c + 360 : c, u, i, t.opacity)
	}

	function dr(t, n, e, r) {
		return 1 === arguments.length ? hr(t) : new pr(t, n, e, null == r ? 1 : r)
	}

	function pr(t, n, e, r) {
		this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
	}

	function gr(t, n, e, r, i) {
		var o = t * t,
			a = o * t;
		return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
	}

	function yr(t) {
		var n = t.length - 1;
		return function(e) {
			var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
				i = t[r],
				o = t[r + 1],
				a = r > 0 ? t[r - 1] : 2 * i - o,
				u = r < n - 1 ? t[r + 2] : 2 * o - i;
			return gr((e - r / n) * n, a, i, o, u)
		}
	}

	function vr(t) {
		var n = t.length;
		return function(e) {
			var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
				i = t[(r + n - 1) % n],
				o = t[r % n],
				a = t[(r + 1) % n],
				u = t[(r + 2) % n];
			return gr((e - r / n) * n, i, o, a, u)
		}
	}
	ie(pr, dr, oe(ae, {
		brighter(t) {
			return t = null == t ? ce : Math.pow(ce, t), new pr(this.h, this.s, this.l * t, this.opacity)
		},
		darker(t) {
			return t = null == t ? ue : Math.pow(ue, t), new pr(this.h, this.s, this.l * t, this.opacity)
		},
		rgb() {
			var t = isNaN(this.h) ? 0 : (this.h + 120) * Be,
				n = +this.l,
				e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
				r = Math.cos(t),
				i = Math.sin(t);
			return new Ee(255 * (n + e * (ir * r + or * i)), 255 * (n + e * (ar * r + ur * i)), 255 * (n + e * (cr * r)), this.opacity)
		}
	}));
	var _r = t => () => t;

	function br(t, n) {
		return function(e) {
			return t + e * n
		}
	}

	function mr(t, n) {
		var e = n - t;
		return e ? br(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : _r(isNaN(t) ? n : t)
	}

	function xr(t) {
		return 1 == (t = +t) ? wr : function(n, e) {
			return e - n ? function(t, n, e) {
				return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
					function(r) {
						return Math.pow(t + r * n, e)
					}
			}(n, e, t) : _r(isNaN(n) ? e : n)
		}
	}

	function wr(t, n) {
		var e = n - t;
		return e ? br(t, e) : _r(isNaN(t) ? n : t)
	}
	var Mr = function t(n) {
		var e = xr(n);

		function r(t, n) {
			var r = e((t = Se(t)).r, (n = Se(n)).r),
				i = e(t.g, n.g),
				o = e(t.b, n.b),
				a = wr(t.opacity, n.opacity);
			return function(n) {
				return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + ""
			}
		}
		return r.gamma = t, r
	}(1);

	function Ar(t) {
		return function(n) {
			var e, r, i = n.length,
				o = new Array(i),
				a = new Array(i),
				u = new Array(i);
			for (e = 0; e < i; ++e) r = Se(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0;
			return o = t(o), a = t(a), u = t(u), r.opacity = 1,
				function(t) {
					return r.r = o(t), r.g = a(t), r.b = u(t), r + ""
				}
		}
	}
	var Tr = Ar(yr),
		Sr = Ar(vr);

	function Er(t, n) {
		n || (n = []);
		var e, r = t ? Math.min(n.length, t.length) : 0,
			i = n.slice();
		return function(o) {
			for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
			return i
		}
	}

	function kr(t) {
		return ArrayBuffer.isView(t) && !(t instanceof DataView)
	}

	function Nr(t, n) {
		var e, r = n ? n.length : 0,
			i = t ? Math.min(r, t.length) : 0,
			o = new Array(i),
			a = new Array(r);
		for (e = 0; e < i; ++e) o[e] = qr(t[e], n[e]);
		for (; e < r; ++e) a[e] = n[e];
		return function(t) {
			for (e = 0; e < i; ++e) a[e] = o[e](t);
			return a
		}
	}

	function Cr(t, n) {
		var e = new Date;
		return t = +t, n = +n,
			function(r) {
				return e.setTime(t * (1 - r) + n * r), e
			}
	}

	function Pr(t, n) {
		return t = +t, n = +n,
			function(e) {
				return t * (1 - e) + n * e
			}
	}

	function zr(t, n) {
		var e, r = {},
			i = {};
		for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = qr(t[e], n[e]) : i[e] = n[e];
		return function(t) {
			for (e in r) i[e] = r[e](t);
			return i
		}
	}
	var Dr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		Rr = new RegExp(Dr.source, "g");

	function Fr(t, n) {
		var e, r, i, o = Dr.lastIndex = Rr.lastIndex = 0,
			a = -1,
			u = [],
			c = [];
		for (t += "", n += "";
			(e = Dr.exec(t)) && (r = Rr.exec(n));)(i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, c.push({
			i: a,
			x: Pr(e, r)
		})), o = Rr.lastIndex;
		return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? c[0] ? function(t) {
			return function(n) {
				return t(n) + ""
			}
		}(c[0].x) : function(t) {
			return function() {
				return t
			}
		}(n) : (n = c.length, function(t) {
			for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
			return u.join("")
		})
	}

	function qr(t, n) {
		var e, r = typeof n;
		return null == n || "boolean" === r ? _r(n) : ("number" === r ? Pr : "string" === r ? (e = we(n)) ? (n = e, Mr) : Fr : n instanceof we ? Mr : n instanceof Date ? Cr : kr(n) ? Er : Array.isArray(n) ? Nr : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? zr : Pr)(t, n)
	}

	function Or(t, n) {
		return t = +t, n = +n,
			function(e) {
				return Math.round(t * (1 - e) + n * e)
			}
	}
	var Ur, Ir = 180 / Math.PI,
		Br = {
			translateX: 0,
			translateY: 0,
			rotate: 0,
			skewX: 0,
			scaleX: 1,
			scaleY: 1
		};

	function Yr(t, n, e, r, i, o) {
		var a, u, c;
		return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
			translateX: i,
			translateY: o,
			rotate: Math.atan2(n, t) * Ir,
			skewX: Math.atan(c) * Ir,
			scaleX: a,
			scaleY: u
		}
	}

	function Lr(t, n, e, r) {
		function i(t) {
			return t.length ? t.pop() + " " : ""
		}
		return function(o, a) {
			var u = [],
				c = [];
			return o = t(o), a = t(a),
				function(t, r, i, o, a, u) {
					if (t !== i || r !== o) {
						var c = a.push("translate(", null, n, null, e);
						u.push({
							i: c - 4,
							x: Pr(t, i)
						}, {
							i: c - 2,
							x: Pr(r, o)
						})
					} else(i || o) && a.push("translate(" + i + n + o + e)
				}(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
				function(t, n, e, o) {
					t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
						i: e.push(i(e) + "rotate(", null, r) - 2,
						x: Pr(t, n)
					})) : n && e.push(i(e) + "rotate(" + n + r)
				}(o.rotate, a.rotate, u, c),
				function(t, n, e, o) {
					t !== n ? o.push({
						i: e.push(i(e) + "skewX(", null, r) - 2,
						x: Pr(t, n)
					}) : n && e.push(i(e) + "skewX(" + n + r)
				}(o.skewX, a.skewX, u, c),
				function(t, n, e, r, o, a) {
					if (t !== e || n !== r) {
						var u = o.push(i(o) + "scale(", null, ",", null, ")");
						a.push({
							i: u - 4,
							x: Pr(t, e)
						}, {
							i: u - 2,
							x: Pr(n, r)
						})
					} else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
				}(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c), o = a = null,
				function(t) {
					for (var n, e = -1, r = c.length; ++e < r;) u[(n = c[e]).i] = n.x(t);
					return u.join("")
				}
		}
	}
	var jr = Lr((function(t) {
			const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
			return n.isIdentity ? Br : Yr(n.a, n.b, n.c, n.d, n.e, n.f)
		}), "px, ", "px)", "deg)"),
		$r = Lr((function(t) {
			return null == t ? Br : (Ur || (Ur = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ur.setAttribute("transform", t), (t = Ur.transform.baseVal.consolidate()) ? Yr((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Br)
		}), ", ", ")", ")");

	function Hr(t) {
		return ((t = Math.exp(t)) + 1 / t) / 2
	}
	var Xr = function t(n, e, r) {
		function i(t, i) {
			var o, a, u = t[0],
				c = t[1],
				f = t[2],
				s = i[0],
				l = i[1],
				h = i[2],
				d = s - u,
				p = l - c,
				g = d * d + p * p;
			if (g < 1e-12) a = Math.log(h / f) / n, o = function(t) {
				return [u + t * d, c + t * p, f * Math.exp(n * t * a)]
			};
			else {
				var y = Math.sqrt(g),
					v = (h * h - f * f + r * g) / (2 * f * e * y),
					_ = (h * h - f * f - r * g) / (2 * h * e * y),
					b = Math.log(Math.sqrt(v * v + 1) - v),
					m = Math.log(Math.sqrt(_ * _ + 1) - _);
				a = (m - b) / n, o = function(t) {
					var r = t * a,
						i = Hr(b),
						o = f / (e * y) * (i * function(t) {
							return ((t = Math.exp(2 * t)) - 1) / (t + 1)
						}(n * r + b) - function(t) {
							return ((t = Math.exp(t)) - 1 / t) / 2
						}(b));
					return [u + o * d, c + o * p, f * i / Hr(n * r + b)]
				}
			}
			return o.duration = 1e3 * a * n / Math.SQRT2, o
		}
		return i.rho = function(n) {
			var e = Math.max(.001, +n),
				r = e * e;
			return t(e, r, r * r)
		}, i
	}(Math.SQRT2, 2, 4);

	function Gr(t) {
		return function(n, e) {
			var r = t((n = Fe(n)).h, (e = Fe(e)).h),
				i = wr(n.s, e.s),
				o = wr(n.l, e.l),
				a = wr(n.opacity, e.opacity);
			return function(t) {
				return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + ""
			}
		}
	}
	var Vr = Gr(mr),
		Wr = Gr(wr);

	function Zr(t) {
		return function(n, e) {
			var r = t((n = nr(n)).h, (e = nr(e)).h),
				i = wr(n.c, e.c),
				o = wr(n.l, e.l),
				a = wr(n.opacity, e.opacity);
			return function(t) {
				return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + ""
			}
		}
	}
	var Kr = Zr(mr),
		Qr = Zr(wr);

	function Jr(t) {
		return function n(e) {
			function r(n, r) {
				var i = t((n = dr(n)).h, (r = dr(r)).h),
					o = wr(n.s, r.s),
					a = wr(n.l, r.l),
					u = wr(n.opacity, r.opacity);
				return function(t) {
					return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + ""
				}
			}
			return e = +e, r.gamma = n, r
		}(1)
	}
	var ti = Jr(mr),
		ni = Jr(wr);

	function ei(t, n) {
		void 0 === n && (n = t, t = qr);
		for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = t(i, i = n[++e]);
		return function(t) {
			var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
			return o[n](t - n)
		}
	}
	var ri, ii, oi = 0,
		ai = 0,
		ui = 0,
		ci = 0,
		fi = 0,
		si = 0,
		li = "object" == typeof performance && performance.now ? performance : Date,
		hi = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
			setTimeout(t, 17)
		};

	function di() {
		return fi || (hi(pi), fi = li.now() + si)
	}

	function pi() {
		fi = 0
	}

	function gi() {
		this._call = this._time = this._next = null
	}

	function yi(t, n, e) {
		var r = new gi;
		return r.restart(t, n, e), r
	}

	function vi() {
		di(), ++oi;
		for (var t, n = ri; n;)(t = fi - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
		--oi
	}

	function _i() {
		fi = (ci = li.now()) + si, oi = ai = 0;
		try {
			vi()
		} finally {
			oi = 0,
				function() {
					var t, n, e = ri,
						r = 1 / 0;
					for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ri = n);
					ii = t, mi(r)
				}(), fi = 0
		}
	}

	function bi() {
		var t = li.now(),
			n = t - ci;
		n > 1e3 && (si -= n, ci = t)
	}

	function mi(t) {
		oi || (ai && (ai = clearTimeout(ai)), t - fi > 24 ? (t < 1 / 0 && (ai = setTimeout(_i, t - li.now() - si)), ui && (ui = clearInterval(ui))) : (ui || (ci = li.now(), ui = setInterval(bi, 1e3)), oi = 1, hi(_i)))
	}

	function xi(t, n, e) {
		var r = new gi;
		return n = null == n ? 0 : +n, r.restart((e => {
			r.stop(), t(e + n)
		}), n, e), r
	}
	gi.prototype = yi.prototype = {
		constructor: gi,
		restart: function(t, n, e) {
			if ("function" != typeof t) throw new TypeError("callback is not a function");
			e = (null == e ? di() : +e) + (null == n ? 0 : +n), this._next || ii === this || (ii ? ii._next = this : ri = this, ii = this), this._call = t, this._time = e, mi()
		},
		stop: function() {
			this._call && (this._call = null, this._time = 1 / 0, mi())
		}
	};
	var wi = mt("start", "end", "cancel", "interrupt"),
		Mi = [];

	function Ai(t, n, e, r, i, o) {
		var a = t.__transition;
		if (a) {
			if (e in a) return
		} else t.__transition = {};
		! function(t, n, e) {
			var r, i = t.__transition;

			function o(t) {
				e.state = 1, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay)
			}

			function a(o) {
				var f, s, l, h;
				if (1 !== e.state) return c();
				for (f in i)
					if ((h = i[f]).name === e.name) {
						if (3 === h.state) return xi(a);
						4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[f])
					} if (xi((function() {
						3 === e.state && (e.state = 4, e.timer.restart(u, e.delay, e.time), u(o))
					})), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
					for (e.state = 3, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
					r.length = s + 1
				}
			}

			function u(n) {
				for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(c), e.state = 5, 1), o = -1, a = r.length; ++o < a;) r[o].call(t, i);
				5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), c())
			}

			function c() {
				for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
				delete t.__transition
			}
			i[n] = e, e.timer = yi(o, 0, e.time)
		}(t, e, {
			name: n,
			index: r,
			group: i,
			on: wi,
			tween: Mi,
			time: o.time,
			delay: o.delay,
			duration: o.duration,
			ease: o.ease,
			timer: null,
			state: 0
		})
	}

	function Ti(t, n) {
		var e = Ei(t, n);
		if (e.state > 0) throw new Error("too late; already scheduled");
		return e
	}

	function Si(t, n) {
		var e = Ei(t, n);
		if (e.state > 3) throw new Error("too late; already running");
		return e
	}

	function Ei(t, n) {
		var e = t.__transition;
		if (!e || !(e = e[n])) throw new Error("transition not found");
		return e
	}

	function ki(t, n) {
		var e, r, i, o = t.__transition,
			a = !0;
		if (o) {
			for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
			a && delete t.__transition
		}
	}

	function Ni(t, n) {
		var e, r;
		return function() {
			var i = Si(this, t),
				o = i.tween;
			if (o !== e)
				for (var a = 0, u = (r = e = o).length; a < u; ++a)
					if (r[a].name === n) {
						(r = r.slice()).splice(a, 1);
						break
					} i.tween = r
		}
	}

	function Ci(t, n, e) {
		var r, i;
		if ("function" != typeof e) throw new Error;
		return function() {
			var o = Si(this, t),
				a = o.tween;
			if (a !== r) {
				i = (r = a).slice();
				for (var u = {
						name: n,
						value: e
					}, c = 0, f = i.length; c < f; ++c)
					if (i[c].name === n) {
						i[c] = u;
						break
					} c === f && i.push(u)
			}
			o.tween = i
		}
	}

	function Pi(t, n, e) {
		var r = t._id;
		return t.each((function() {
				var t = Si(this, r);
				(t.value || (t.value = {}))[n] = e.apply(this, arguments)
			})),
			function(t) {
				return Ei(t, r).value[n]
			}
	}

	function zi(t, n) {
		var e;
		return ("number" == typeof n ? Pr : n instanceof we ? Mr : (e = we(n)) ? (n = e, Mr) : Fr)(t, n)
	}

	function Di(t) {
		return function() {
			this.removeAttribute(t)
		}
	}

	function Ri(t) {
		return function() {
			this.removeAttributeNS(t.space, t.local)
		}
	}

	function Fi(t, n, e) {
		var r, i, o = e + "";
		return function() {
			var a = this.getAttribute(t);
			return a === o ? null : a === r ? i : i = n(r = a, e)
		}
	}

	function qi(t, n, e) {
		var r, i, o = e + "";
		return function() {
			var a = this.getAttributeNS(t.space, t.local);
			return a === o ? null : a === r ? i : i = n(r = a, e)
		}
	}

	function Oi(t, n, e) {
		var r, i, o;
		return function() {
			var a, u, c = e(this);
			if (null != c) return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
			this.removeAttribute(t)
		}
	}

	function Ui(t, n, e) {
		var r, i, o;
		return function() {
			var a, u, c = e(this);
			if (null != c) return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
			this.removeAttributeNS(t.space, t.local)
		}
	}

	function Ii(t, n) {
		return function(e) {
			this.setAttribute(t, n.call(this, e))
		}
	}

	function Bi(t, n) {
		return function(e) {
			this.setAttributeNS(t.space, t.local, n.call(this, e))
		}
	}

	function Yi(t, n) {
		var e, r;

		function i() {
			var i = n.apply(this, arguments);
			return i !== r && (e = (r = i) && Bi(t, i)), e
		}
		return i._value = n, i
	}

	function Li(t, n) {
		var e, r;

		function i() {
			var i = n.apply(this, arguments);
			return i !== r && (e = (r = i) && Ii(t, i)), e
		}
		return i._value = n, i
	}

	function ji(t, n) {
		return function() {
			Ti(this, t).delay = +n.apply(this, arguments)
		}
	}

	function $i(t, n) {
		return n = +n,
			function() {
				Ti(this, t).delay = n
			}
	}

	function Hi(t, n) {
		return function() {
			Si(this, t).duration = +n.apply(this, arguments)
		}
	}

	function Xi(t, n) {
		return n = +n,
			function() {
				Si(this, t).duration = n
			}
	}

	function Gi(t, n) {
		if ("function" != typeof n) throw new Error;
		return function() {
			Si(this, t).ease = n
		}
	}

	function Vi(t, n, e) {
		var r, i, o = function(t) {
			return (t + "").trim().split(/^|\s+/).every((function(t) {
				var n = t.indexOf(".");
				return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
			}))
		}(n) ? Ti : Si;
		return function() {
			var a = o(this, t),
				u = a.on;
			u !== r && (i = (r = u).copy()).on(n, e), a.on = i
		}
	}
	var Wi = In.prototype.constructor;

	function Zi(t) {
		return function() {
			this.style.removeProperty(t)
		}
	}

	function Ki(t, n, e) {
		return function(r) {
			this.style.setProperty(t, n.call(this, r), e)
		}
	}

	function Qi(t, n, e) {
		var r, i;

		function o() {
			var o = n.apply(this, arguments);
			return o !== i && (r = (i = o) && Ki(t, o, e)), r
		}
		return o._value = n, o
	}

	function Ji(t) {
		return function(n) {
			this.textContent = t.call(this, n)
		}
	}

	function to(t) {
		var n, e;

		function r() {
			var r = t.apply(this, arguments);
			return r !== e && (n = (e = r) && Ji(r)), n
		}
		return r._value = t, r
	}
	var no = 0;

	function eo(t, n, e, r) {
		this._groups = t, this._parents = n, this._name = e, this._id = r
	}

	function ro(t) {
		return In().transition(t)
	}

	function io() {
		return ++no
	}
	var oo = In.prototype;
	eo.prototype = ro.prototype = {
		constructor: eo,
		select: function(t) {
			var n = this._name,
				e = this._id;
			"function" != typeof t && (t = zt(t));
			for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
				for (var u, c, f = r[a], s = f.length, l = o[a] = new Array(s), h = 0; h < s; ++h)(u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, Ai(l[h], n, e, h, l, Ei(u, e)));
			return new eo(o, this._parents, n, e)
		},
		selectAll: function(t) {
			var n = this._name,
				e = this._id;
			"function" != typeof t && (t = Ft(t));
			for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
				for (var c, f = r[u], s = f.length, l = 0; l < s; ++l)
					if (c = f[l]) {
						for (var h, d = t.call(c, c.__data__, l, f), p = Ei(c, e), g = 0, y = d.length; g < y; ++g)(h = d[g]) && Ai(h, n, e, g, d, p);
						o.push(d), a.push(c)
					} return new eo(o, a, n, e)
		},
		selectChild: oo.selectChild,
		selectChildren: oo.selectChildren,
		filter: function(t) {
			"function" != typeof t && (t = qt(t));
			for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
				for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f)(o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
			return new eo(r, this._parents, this._name, this._id)
		},
		merge: function(t) {
			if (t._id !== this._id) throw new Error;
			for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
				for (var c, f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
			for (; u < r; ++u) a[u] = n[u];
			return new eo(a, this._parents, this._name, this._id)
		},
		selection: function() {
			return new Wi(this._groups, this._parents)
		},
		transition: function() {
			for (var t = this._name, n = this._id, e = io(), r = this._groups, i = r.length, o = 0; o < i; ++o)
				for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
					if (a = u[f]) {
						var s = Ei(a, n);
						Ai(a, t, e, f, u, {
							time: s.time + s.delay + s.duration,
							delay: 0,
							duration: s.duration,
							ease: s.ease
						})
					} return new eo(r, this._parents, t, e)
		},
		call: oo.call,
		nodes: oo.nodes,
		node: oo.node,
		size: oo.size,
		empty: oo.empty,
		each: oo.each,
		on: function(t, n) {
			var e = this._id;
			return arguments.length < 2 ? Ei(this.node(), e).on.on(t) : this.each(Vi(e, t, n))
		},
		attr: function(t, n) {
			var e = Et(t),
				r = "transform" === e ? $r : zi;
			return this.attrTween(t, "function" == typeof n ? (e.local ? Ui : Oi)(e, r, Pi(this, "attr." + t, n)) : null == n ? (e.local ? Ri : Di)(e) : (e.local ? qi : Fi)(e, r, n))
		},
		attrTween: function(t, n) {
			var e = "attr." + t;
			if (arguments.length < 2) return (e = this.tween(e)) && e._value;
			if (null == n) return this.tween(e, null);
			if ("function" != typeof n) throw new Error;
			var r = Et(t);
			return this.tween(e, (r.local ? Yi : Li)(r, n))
		},
		style: function(t, n, e) {
			var r = "transform" == (t += "") ? jr : zi;
			return null == n ? this.styleTween(t, function(t, n) {
				var e, r, i;
				return function() {
					var o = un(this, t),
						a = (this.style.removeProperty(t), un(this, t));
					return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a)
				}
			}(t, r)).on("end.style." + t, Zi(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
				var r, i, o;
				return function() {
					var a = un(this, t),
						u = e(this),
						c = u + "";
					return null == u && (this.style.removeProperty(t), c = u = un(this, t)), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u))
				}
			}(t, r, Pi(this, "style." + t, n))).each(function(t, n) {
				var e, r, i, o, a = "style." + n,
					u = "end." + a;
				return function() {
					var c = Si(this, t),
						f = c.on,
						s = null == c.value[a] ? o || (o = Zi(n)) : void 0;
					f === e && i === s || (r = (e = f).copy()).on(u, i = s), c.on = r
				}
			}(this._id, t)) : this.styleTween(t, function(t, n, e) {
				var r, i, o = e + "";
				return function() {
					var a = un(this, t);
					return a === o ? null : a === r ? i : i = n(r = a, e)
				}
			}(t, r, n), e).on("end.style." + t, null)
		},
		styleTween: function(t, n, e) {
			var r = "style." + (t += "");
			if (arguments.length < 2) return (r = this.tween(r)) && r._value;
			if (null == n) return this.tween(r, null);
			if ("function" != typeof n) throw new Error;
			return this.tween(r, Qi(t, n, null == e ? "" : e))
		},
		text: function(t) {
			return this.tween("text", "function" == typeof t ? function(t) {
				return function() {
					var n = t(this);
					this.textContent = null == n ? "" : n
				}
			}(Pi(this, "text", t)) : function(t) {
				return function() {
					this.textContent = t
				}
			}(null == t ? "" : t + ""))
		},
		textTween: function(t) {
			var n = "text";
			if (arguments.length < 1) return (n = this.tween(n)) && n._value;
			if (null == t) return this.tween(n, null);
			if ("function" != typeof t) throw new Error;
			return this.tween(n, to(t))
		},
		remove: function() {
			return this.on("end.remove", function(t) {
				return function() {
					var n = this.parentNode;
					for (var e in this.__transition)
						if (+e !== t) return;
					n && n.removeChild(this)
				}
			}(this._id))
		},
		tween: function(t, n) {
			var e = this._id;
			if (t += "", arguments.length < 2) {
				for (var r, i = Ei(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
					if ((r = i[o]).name === t) return r.value;
				return null
			}
			return this.each((null == n ? Ni : Ci)(e, t, n))
		},
		delay: function(t) {
			var n = this._id;
			return arguments.length ? this.each(("function" == typeof t ? ji : $i)(n, t)) : Ei(this.node(), n).delay
		},
		duration: function(t) {
			var n = this._id;
			return arguments.length ? this.each(("function" == typeof t ? Hi : Xi)(n, t)) : Ei(this.node(), n).duration
		},
		ease: function(t) {
			var n = this._id;
			return arguments.length ? this.each(Gi(n, t)) : Ei(this.node(), n).ease
		},
		easeVarying: function(t) {
			if ("function" != typeof t) throw new Error;
			return this.each(function(t, n) {
				return function() {
					var e = n.apply(this, arguments);
					if ("function" != typeof e) throw new Error;
					Si(this, t).ease = e
				}
			}(this._id, t))
		},
		end: function() {
			var t, n, e = this,
				r = e._id,
				i = e.size();
			return new Promise((function(o, a) {
				var u = {
						value: a
					},
					c = {
						value: function() {
							0 == --i && o()
						}
					};
				e.each((function() {
					var e = Si(this, r),
						i = e.on;
					i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), e.on = n
				})), 0 === i && o()
			}))
		},
		[Symbol.iterator]: oo[Symbol.iterator]
	};

	function ao(t) {
		return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
	}

	function uo(t) {
		return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
	}
	var co = function t(n) {
			function e(t) {
				return Math.pow(t, n)
			}
			return n = +n, e.exponent = t, e
		}(3),
		fo = function t(n) {
			function e(t) {
				return 1 - Math.pow(1 - t, n)
			}
			return n = +n, e.exponent = t, e
		}(3),
		so = function t(n) {
			function e(t) {
				return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
			}
			return n = +n, e.exponent = t, e
		}(3),
		lo = Math.PI,
		ho = lo / 2;

	function po(t) {
		return (1 - Math.cos(lo * t)) / 2
	}

	function go(t) {
		return 1.0009775171065494 * (Math.pow(2, -10 * t) - .0009765625)
	}

	function yo(t) {
		return ((t *= 2) <= 1 ? go(1 - t) : 2 - go(t - 1)) / 2
	}

	function vo(t) {
		return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
	}
	var _o = 4 / 11,
		bo = 7.5625;

	function mo(t) {
		return (t = +t) < _o ? bo * t * t : t < .7272727272727273 ? bo * (t -= .5454545454545454) * t + .75 : t < .9090909090909091 ? bo * (t -= .8181818181818182) * t + .9375 : bo * (t -= .9545454545454546) * t + .984375
	}
	var xo = 1.70158,
		wo = function t(n) {
			function e(t) {
				return (t = +t) * t * (n * (t - 1) + t)
			}
			return n = +n, e.overshoot = t, e
		}(xo),
		Mo = function t(n) {
			function e(t) {
				return --t * t * ((t + 1) * n + t) + 1
			}
			return n = +n, e.overshoot = t, e
		}(xo),
		Ao = function t(n) {
			function e(t) {
				return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
			}
			return n = +n, e.overshoot = t, e
		}(xo),
		To = 2 * Math.PI,
		So = function t(n, e) {
			var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= To);

			function i(t) {
				return n * go(- --t) * Math.sin((r - t) / e)
			}
			return i.amplitude = function(n) {
				return t(n, e * To)
			}, i.period = function(e) {
				return t(n, e)
			}, i
		}(1, .3),
		Eo = function t(n, e) {
			var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= To);

			function i(t) {
				return 1 - n * go(t = +t) * Math.sin((t + r) / e)
			}
			return i.amplitude = function(n) {
				return t(n, e * To)
			}, i.period = function(e) {
				return t(n, e)
			}, i
		}(1, .3),
		ko = function t(n, e) {
			var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= To);

			function i(t) {
				return ((t = 2 * t - 1) < 0 ? n * go(-t) * Math.sin((r - t) / e) : 2 - n * go(t) * Math.sin((r + t) / e)) / 2
			}
			return i.amplitude = function(n) {
				return t(n, e * To)
			}, i.period = function(e) {
				return t(n, e)
			}, i
		}(1, .3),
		No = {
			time: null,
			delay: 0,
			duration: 250,
			ease: uo
		};

	function Co(t, n) {
		for (var e; !(e = t.__transition) || !(e = e[n]);)
			if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
		return e
	}
	In.prototype.interrupt = function(t) {
		return this.each((function() {
			ki(this, t)
		}))
	}, In.prototype.transition = function(t) {
		var n, e;
		t instanceof eo ? (n = t._id, t = t._name) : (n = io(), (e = No).time = di(), t = null == t ? null : t + "");
		for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
			for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)(a = u[f]) && Ai(a, t, n, f, u, e || Co(a, n));
		return new eo(r, this._parents, t, n)
	};
	var Po = [null];
	var zo = t => () => t;

	function Do(t, {
		sourceEvent: n,
		target: e,
		selection: r,
		mode: i,
		dispatch: o
	}) {
		Object.defineProperties(this, {
			type: {
				value: t,
				enumerable: !0,
				configurable: !0
			},
			sourceEvent: {
				value: n,
				enumerable: !0,
				configurable: !0
			},
			target: {
				value: e,
				enumerable: !0,
				configurable: !0
			},
			selection: {
				value: r,
				enumerable: !0,
				configurable: !0
			},
			mode: {
				value: i,
				enumerable: !0,
				configurable: !0
			},
			_: {
				value: o
			}
		})
	}

	function Ro(t) {
		t.stopImmediatePropagation()
	}

	function Fo(t) {
		t.preventDefault(), t.stopImmediatePropagation()
	}
	var qo = {
			name: "drag"
		},
		Oo = {
			name: "space"
		},
		Uo = {
			name: "handle"
		},
		Io = {
			name: "center"
		};
	const {
		abs: Bo,
		max: Yo,
		min: Lo
	} = Math;

	function jo(t) {
		return [+t[0], +t[1]]
	}

	function $o(t) {
		return [jo(t[0]), jo(t[1])]
	}
	var Ho = {
			name: "x",
			handles: ["w", "e"].map(Jo),
			input: function(t, n) {
				return null == t ? null : [
					[+t[0], n[0][1]],
					[+t[1], n[1][1]]
				]
			},
			output: function(t) {
				return t && [t[0][0], t[1][0]]
			}
		},
		Xo = {
			name: "y",
			handles: ["n", "s"].map(Jo),
			input: function(t, n) {
				return null == t ? null : [
					[n[0][0], +t[0]],
					[n[1][0], +t[1]]
				]
			},
			output: function(t) {
				return t && [t[0][1], t[1][1]]
			}
		},
		Go = {
			name: "xy",
			handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Jo),
			input: function(t) {
				return null == t ? null : $o(t)
			},
			output: function(t) {
				return t
			}
		},
		Vo = {
			overlay: "crosshair",
			selection: "move",
			n: "ns-resize",
			e: "ew-resize",
			s: "ns-resize",
			w: "ew-resize",
			nw: "nwse-resize",
			ne: "nesw-resize",
			se: "nwse-resize",
			sw: "nesw-resize"
		},
		Wo = {
			e: "w",
			w: "e",
			nw: "ne",
			ne: "nw",
			se: "sw",
			sw: "se"
		},
		Zo = {
			n: "s",
			s: "n",
			nw: "sw",
			ne: "se",
			se: "ne",
			sw: "nw"
		},
		Ko = {
			overlay: 1,
			selection: 1,
			n: null,
			e: 1,
			s: null,
			w: -1,
			nw: -1,
			ne: 1,
			se: 1,
			sw: -1
		},
		Qo = {
			overlay: 1,
			selection: 1,
			n: -1,
			e: null,
			s: 1,
			w: null,
			nw: -1,
			ne: -1,
			se: 1,
			sw: 1
		};

	function Jo(t) {
		return {
			type: t
		}
	}

	function ta(t) {
		return !t.ctrlKey && !t.button
	}

	function na() {
		var t = this.ownerSVGElement || this;
		return t.hasAttribute("viewBox") ? [
			[(t = t.viewBox.baseVal).x, t.y],
			[t.x + t.width, t.y + t.height]
		] : [
			[0, 0],
			[t.width.baseVal.value, t.height.baseVal.value]
		]
	}

	function ea() {
		return navigator.maxTouchPoints || "ontouchstart" in this
	}

	function ra(t) {
		for (; !t.__brush;)
			if (!(t = t.parentNode)) return;
		return t.__brush
	}

	function ia(t) {
		return t[0][0] === t[1][0] || t[0][1] === t[1][1]
	}

	function oa(t) {
		var n, e = na,
			r = ta,
			i = ea,
			o = !0,
			a = mt("start", "brush", "end"),
			u = 6;

		function c(n) {
			var e = n.property("__brush", g).selectAll(".overlay").data([Jo("overlay")]);
			e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Vo.overlay).merge(e).each((function() {
				var t = ra(this).extent;
				Bn(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
			})), n.selectAll(".selection").data([Jo("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Vo.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
			var r = n.selectAll(".handle").data(t.handles, (function(t) {
				return t.type
			}));
			r.exit().remove(), r.enter().append("rect").attr("class", (function(t) {
				return "handle handle--" + t.type
			})).attr("cursor", (function(t) {
				return Vo[t.type]
			})), n.each(f).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", h).filter(i).on("touchstart.brush", h).on("touchmove.brush", d).on("touchend.brush touchcancel.brush", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
		}

		function f() {
			var t = Bn(this),
				n = ra(this).selection;
			n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", (function(t) {
				return "e" === t.type[t.type.length - 1] ? n[1][0] - u / 2 : n[0][0] - u / 2
			})).attr("y", (function(t) {
				return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2
			})).attr("width", (function(t) {
				return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + u : u
			})).attr("height", (function(t) {
				return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + u : u
			}))) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
		}

		function s(t, n, e) {
			var r = t.__brush.emitter;
			return !r || e && r.clean ? new l(t, n, e) : r
		}

		function l(t, n, e) {
			this.that = t, this.args = n, this.state = t.__brush, this.active = 0, this.clean = e
		}

		function h(e) {
			if ((!n || e.touches) && r.apply(this, arguments)) {
				var i, a, u, c, l, h, d, p, g, y, v, _ = this,
					b = e.target.__data__.type,
					m = "selection" === (o && e.metaKey ? b = "overlay" : b) ? qo : o && e.altKey ? Io : Uo,
					x = t === Xo ? null : Ko[b],
					w = t === Ho ? null : Qo[b],
					M = ra(_),
					A = M.extent,
					T = M.selection,
					S = A[0][0],
					E = A[0][1],
					k = A[1][0],
					N = A[1][1],
					C = 0,
					P = 0,
					z = x && w && o && e.shiftKey,
					D = Array.from(e.touches || [e], (t => {
						const n = t.identifier;
						return (t = Hn(t, _)).point0 = t.slice(), t.identifier = n, t
					}));
				ki(_);
				var R = s(_, arguments, !0).beforestart();
				if ("overlay" === b) {
					T && (g = !0);
					const n = [D[0], D[1] || D[0]];
					M.selection = T = [
						[i = t === Xo ? S : Lo(n[0][0], n[1][0]), u = t === Ho ? E : Lo(n[0][1], n[1][1])],
						[l = t === Xo ? k : Yo(n[0][0], n[1][0]), d = t === Ho ? N : Yo(n[0][1], n[1][1])]
					], D.length > 1 && I(e)
				} else i = T[0][0], u = T[0][1], l = T[1][0], d = T[1][1];
				a = i, c = u, h = l, p = d;
				var F = Bn(_).attr("pointer-events", "none"),
					q = F.selectAll(".overlay").attr("cursor", Vo[b]);
				if (e.touches) R.moved = U, R.ended = B;
				else {
					var O = Bn(e.view).on("mousemove.brush", U, !0).on("mouseup.brush", B, !0);
					o && O.on("keydown.brush", Y, !0).on("keyup.brush", L, !0), Zn(e.view)
				}
				f.call(_), R.start(e, m.name)
			}

			function U(t) {
				for (const n of t.changedTouches || [t])
					for (const t of D) t.identifier === n.identifier && (t.cur = Hn(n, _));
				if (z && !y && !v && 1 === D.length) {
					const t = D[0];
					Bo(t.cur[0] - t[0]) > Bo(t.cur[1] - t[1]) ? v = !0 : y = !0
				}
				for (const t of D) t.cur && (t[0] = t.cur[0], t[1] = t.cur[1]);
				g = !0, Fo(t), I(t)
			}

			function I(t) {
				const n = D[0],
					e = n.point0;
				var r;
				switch (C = n[0] - e[0], P = n[1] - e[1], m) {
					case Oo:
					case qo:
						x && (C = Yo(S - i, Lo(k - l, C)), a = i + C, h = l + C), w && (P = Yo(E - u, Lo(N - d, P)), c = u + P, p = d + P);
						break;
					case Uo:
						D[1] ? (x && (a = Yo(S, Lo(k, D[0][0])), h = Yo(S, Lo(k, D[1][0])), x = 1), w && (c = Yo(E, Lo(N, D[0][1])), p = Yo(E, Lo(N, D[1][1])), w = 1)) : (x < 0 ? (C = Yo(S - i, Lo(k - i, C)), a = i + C, h = l) : x > 0 && (C = Yo(S - l, Lo(k - l, C)), a = i, h = l + C), w < 0 ? (P = Yo(E - u, Lo(N - u, P)), c = u + P, p = d) : w > 0 && (P = Yo(E - d, Lo(N - d, P)), c = u, p = d + P));
						break;
					case Io:
						x && (a = Yo(S, Lo(k, i - C * x)), h = Yo(S, Lo(k, l + C * x))), w && (c = Yo(E, Lo(N, u - P * w)), p = Yo(E, Lo(N, d + P * w)))
				}
				h < a && (x *= -1, r = i, i = l, l = r, r = a, a = h, h = r, b in Wo && q.attr("cursor", Vo[b = Wo[b]])), p < c && (w *= -1, r = u, u = d, d = r, r = c, c = p, p = r, b in Zo && q.attr("cursor", Vo[b = Zo[b]])), M.selection && (T = M.selection), y && (a = T[0][0], h = T[1][0]), v && (c = T[0][1], p = T[1][1]), T[0][0] === a && T[0][1] === c && T[1][0] === h && T[1][1] === p || (M.selection = [
					[a, c],
					[h, p]
				], f.call(_), R.brush(t, m.name))
			}

			function B(t) {
				if (Ro(t), t.touches) {
					if (t.touches.length) return;
					n && clearTimeout(n), n = setTimeout((function() {
						n = null
					}), 500)
				} else Kn(t.view, g), O.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
				F.attr("pointer-events", "all"), q.attr("cursor", Vo.overlay), M.selection && (T = M.selection), ia(T) && (M.selection = null, f.call(_)), R.end(t, m.name)
			}

			function Y(t) {
				switch (t.keyCode) {
					case 16:
						z = x && w;
						break;
					case 18:
						m === Uo && (x && (l = h - C * x, i = a + C * x), w && (d = p - P * w, u = c + P * w), m = Io, I(t));
						break;
					case 32:
						m !== Uo && m !== Io || (x < 0 ? l = h - C : x > 0 && (i = a - C), w < 0 ? d = p - P : w > 0 && (u = c - P), m = Oo, q.attr("cursor", Vo.selection), I(t));
						break;
					default:
						return
				}
				Fo(t)
			}

			function L(t) {
				switch (t.keyCode) {
					case 16:
						z && (y = v = z = !1, I(t));
						break;
					case 18:
						m === Io && (x < 0 ? l = h : x > 0 && (i = a), w < 0 ? d = p : w > 0 && (u = c), m = Uo, I(t));
						break;
					case 32:
						m === Oo && (t.altKey ? (x && (l = h - C * x, i = a + C * x), w && (d = p - P * w, u = c + P * w), m = Io) : (x < 0 ? l = h : x > 0 && (i = a), w < 0 ? d = p : w > 0 && (u = c), m = Uo), q.attr("cursor", Vo[b]), I(t));
						break;
					default:
						return
				}
				Fo(t)
			}
		}

		function d(t) {
			s(this, arguments).moved(t)
		}

		function p(t) {
			s(this, arguments).ended(t)
		}

		function g() {
			var n = this.__brush || {
				selection: null
			};
			return n.extent = $o(e.apply(this, arguments)), n.dim = t, n
		}
		return c.move = function(n, e, r) {
			n.tween ? n.on("start.brush", (function(t) {
				s(this, arguments).beforestart().start(t)
			})).on("interrupt.brush end.brush", (function(t) {
				s(this, arguments).end(t)
			})).tween("brush", (function() {
				var n = this,
					r = n.__brush,
					i = s(n, arguments),
					o = r.selection,
					a = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
					u = qr(o, a);

				function c(t) {
					r.selection = 1 === t && null === a ? null : u(t), f.call(n), i.brush()
				}
				return null !== o && null !== a ? c : c(1)
			})) : n.each((function() {
				var n = this,
					i = arguments,
					o = n.__brush,
					a = t.input("function" == typeof e ? e.apply(n, i) : e, o.extent),
					u = s(n, i).beforestart();
				ki(n), o.selection = null === a ? null : a, f.call(n), u.start(r).brush(r).end(r)
			}))
		}, c.clear = function(t, n) {
			c.move(t, null, n)
		}, l.prototype = {
			beforestart: function() {
				return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
			},
			start: function(t, n) {
				return this.starting ? (this.starting = !1, this.emit("start", t, n)) : this.emit("brush", t), this
			},
			brush: function(t, n) {
				return this.emit("brush", t, n), this
			},
			end: function(t, n) {
				return 0 == --this.active && (delete this.state.emitter, this.emit("end", t, n)), this
			},
			emit: function(n, e, r) {
				var i = Bn(this.that).datum();
				a.call(n, this.that, new Do(n, {
					sourceEvent: e,
					target: c,
					selection: t.output(this.state.selection),
					mode: r,
					dispatch: a
				}), i)
			}
		}, c.extent = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : zo($o(t)), c) : e
		}, c.filter = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : zo(!!t), c) : r
		}, c.touchable = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : zo(!!t), c) : i
		}, c.handleSize = function(t) {
			return arguments.length ? (u = +t, c) : u
		}, c.keyModifiers = function(t) {
			return arguments.length ? (o = !!t, c) : o
		}, c.on = function() {
			var t = a.on.apply(a, arguments);
			return t === a ? c : t
		}, c
	}
	var aa = Math.abs,
		ua = Math.cos,
		ca = Math.sin,
		fa = Math.PI,
		sa = fa / 2,
		la = 2 * fa,
		ha = Math.max,
		da = 1e-12;

	function pa(t, n) {
		return Array.from({
			length: n - t
		}, ((n, e) => t + e))
	}

	function ga(t) {
		return function(n, e) {
			return t(n.source.value + n.target.value, e.source.value + e.target.value)
		}
	}

	function ya(t, n) {
		var e = 0,
			r = null,
			i = null,
			o = null;

		function a(a) {
			var u, c = a.length,
				f = new Array(c),
				s = pa(0, c),
				l = new Array(c * c),
				h = new Array(c),
				d = 0;
			a = Float64Array.from({
				length: c * c
			}, n ? (t, n) => a[n % c][n / c | 0] : (t, n) => a[n / c | 0][n % c]);
			for (let n = 0; n < c; ++n) {
				let e = 0;
				for (let r = 0; r < c; ++r) e += a[n * c + r] + t * a[r * c + n];
				d += f[n] = e
			}
			u = (d = ha(0, la - e * c) / d) ? e : la / c; {
				let n = 0;
				r && s.sort(((t, n) => r(f[t], f[n])));
				for (const e of s) {
					const r = n;
					if (t) {
						const t = pa(1 + ~c, c).filter((t => t < 0 ? a[~t * c + e] : a[e * c + t]));
						i && t.sort(((t, n) => i(t < 0 ? -a[~t * c + e] : a[e * c + t], n < 0 ? -a[~n * c + e] : a[e * c + n])));
						for (const r of t)
							if (r < 0) {
								(l[~r * c + e] || (l[~r * c + e] = {
									source: null,
									target: null
								})).target = {
									index: e,
									startAngle: n,
									endAngle: n += a[~r * c + e] * d,
									value: a[~r * c + e]
								}
							} else {
								(l[e * c + r] || (l[e * c + r] = {
									source: null,
									target: null
								})).source = {
									index: e,
									startAngle: n,
									endAngle: n += a[e * c + r] * d,
									value: a[e * c + r]
								}
							} h[e] = {
							index: e,
							startAngle: r,
							endAngle: n,
							value: f[e]
						}
					} else {
						const t = pa(0, c).filter((t => a[e * c + t] || a[t * c + e]));
						i && t.sort(((t, n) => i(a[e * c + t], a[e * c + n])));
						for (const r of t) {
							let t;
							if (e < r ? (t = l[e * c + r] || (l[e * c + r] = {
									source: null,
									target: null
								}), t.source = {
									index: e,
									startAngle: n,
									endAngle: n += a[e * c + r] * d,
									value: a[e * c + r]
								}) : (t = l[r * c + e] || (l[r * c + e] = {
									source: null,
									target: null
								}), t.target = {
									index: e,
									startAngle: n,
									endAngle: n += a[e * c + r] * d,
									value: a[e * c + r]
								}, e === r && (t.source = t.target)), t.source && t.target && t.source.value < t.target.value) {
								const n = t.source;
								t.source = t.target, t.target = n
							}
						}
						h[e] = {
							index: e,
							startAngle: r,
							endAngle: n,
							value: f[e]
						}
					}
					n += u
				}
			}
			return (l = Object.values(l)).groups = h, o ? l.sort(o) : l
		}
		return a.padAngle = function(t) {
			return arguments.length ? (e = ha(0, t), a) : e
		}, a.sortGroups = function(t) {
			return arguments.length ? (r = t, a) : r
		}, a.sortSubgroups = function(t) {
			return arguments.length ? (i = t, a) : i
		}, a.sortChords = function(t) {
			return arguments.length ? (null == t ? o = null : (o = ga(t))._ = t, a) : o && o._
		}, a
	}
	const va = Math.PI,
		_a = 2 * va,
		ba = 1e-6,
		ma = _a - ba;

	function xa() {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
	}

	function wa() {
		return new xa
	}
	xa.prototype = wa.prototype = {
		constructor: xa,
		moveTo: function(t, n) {
			this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
		},
		closePath: function() {
			null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
		},
		lineTo: function(t, n) {
			this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
		},
		quadraticCurveTo: function(t, n, e, r) {
			this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
		},
		bezierCurveTo: function(t, n, e, r, i, o) {
			this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
		},
		arcTo: function(t, n, e, r, i) {
			t = +t, n = +n, e = +e, r = +r, i = +i;
			var o = this._x1,
				a = this._y1,
				u = e - t,
				c = r - n,
				f = o - t,
				s = a - n,
				l = f * f + s * s;
			if (i < 0) throw new Error("negative radius: " + i);
			if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
			else if (l > ba)
				if (Math.abs(s * u - c * f) > ba && i) {
					var h = e - o,
						d = r - a,
						p = u * u + c * c,
						g = h * h + d * d,
						y = Math.sqrt(p),
						v = Math.sqrt(l),
						_ = i * Math.tan((va - Math.acos((p + l - g) / (2 * y * v))) / 2),
						b = _ / v,
						m = _ / y;
					Math.abs(b - 1) > ba && (this._ += "L" + (t + b * f) + "," + (n + b * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + m * u) + "," + (this._y1 = n + m * c)
				} else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
			else;
		},
		arc: function(t, n, e, r, i, o) {
			t = +t, n = +n, o = !!o;
			var a = (e = +e) * Math.cos(r),
				u = e * Math.sin(r),
				c = t + a,
				f = n + u,
				s = 1 ^ o,
				l = o ? r - i : i - r;
			if (e < 0) throw new Error("negative radius: " + e);
			null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > ba || Math.abs(this._y1 - f) > ba) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % _a + _a), l > ma ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > ba && (this._ += "A" + e + "," + e + ",0," + +(l >= va) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
		},
		rect: function(t, n, e, r) {
			this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
		},
		toString: function() {
			return this._
		}
	};
	var Ma = Array.prototype.slice;

	function Aa(t) {
		return function() {
			return t
		}
	}

	function Ta(t) {
		return t.source
	}

	function Sa(t) {
		return t.target
	}

	function Ea(t) {
		return t.radius
	}

	function ka(t) {
		return t.startAngle
	}

	function Na(t) {
		return t.endAngle
	}

	function Ca() {
		return 0
	}

	function Pa() {
		return 10
	}

	function za(t) {
		var n = Ta,
			e = Sa,
			r = Ea,
			i = Ea,
			o = ka,
			a = Na,
			u = Ca,
			c = null;

		function f() {
			var f, s = n.apply(this, arguments),
				l = e.apply(this, arguments),
				h = u.apply(this, arguments) / 2,
				d = Ma.call(arguments),
				p = +r.apply(this, (d[0] = s, d)),
				g = o.apply(this, d) - sa,
				y = a.apply(this, d) - sa,
				v = +i.apply(this, (d[0] = l, d)),
				_ = o.apply(this, d) - sa,
				b = a.apply(this, d) - sa;
			if (c || (c = f = wa()), h > da && (aa(y - g) > 2 * h + da ? y > g ? (g += h, y -= h) : (g -= h, y += h) : g = y = (g + y) / 2, aa(b - _) > 2 * h + da ? b > _ ? (_ += h, b -= h) : (_ -= h, b += h) : _ = b = (_ + b) / 2), c.moveTo(p * ua(g), p * ca(g)), c.arc(0, 0, p, g, y), g !== _ || y !== b)
				if (t) {
					var m = +t.apply(this, arguments),
						x = v - m,
						w = (_ + b) / 2;
					c.quadraticCurveTo(0, 0, x * ua(_), x * ca(_)), c.lineTo(v * ua(w), v * ca(w)), c.lineTo(x * ua(b), x * ca(b))
				} else c.quadraticCurveTo(0, 0, v * ua(_), v * ca(_)), c.arc(0, 0, v, _, b);
			if (c.quadraticCurveTo(0, 0, p * ua(g), p * ca(g)), c.closePath(), f) return c = null, f + "" || null
		}
		return t && (f.headRadius = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Aa(+n), f) : t
		}), f.radius = function(t) {
			return arguments.length ? (r = i = "function" == typeof t ? t : Aa(+t), f) : r
		}, f.sourceRadius = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : Aa(+t), f) : r
		}, f.targetRadius = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Aa(+t), f) : i
		}, f.startAngle = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : Aa(+t), f) : o
		}, f.endAngle = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : Aa(+t), f) : a
		}, f.padAngle = function(t) {
			return arguments.length ? (u = "function" == typeof t ? t : Aa(+t), f) : u
		}, f.source = function(t) {
			return arguments.length ? (n = t, f) : n
		}, f.target = function(t) {
			return arguments.length ? (e = t, f) : e
		}, f.context = function(t) {
			return arguments.length ? (c = null == t ? null : t, f) : c
		}, f
	}
	var Da = Array.prototype.slice;

	function Ra(t, n) {
		return t - n
	}
	var Fa = t => () => t;

	function qa(t, n) {
		for (var e, r = -1, i = n.length; ++r < i;)
			if (e = Oa(t, n[r])) return e;
		return 0
	}

	function Oa(t, n) {
		for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
			var c = t[o],
				f = c[0],
				s = c[1],
				l = t[u],
				h = l[0],
				d = l[1];
			if (Ua(c, l, n)) return 0;
			s > r != d > r && e < (h - f) * (r - s) / (d - s) + f && (i = -i)
		}
		return i
	}

	function Ua(t, n, e) {
		var r, i, o, a;
		return function(t, n, e) {
			return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1])
		}(t, n, e) && (i = t[r = +(t[0] === n[0])], o = e[r], a = n[r], i <= o && o <= a || a <= o && o <= i)
	}

	function Ia() {}
	var Ba = [
		[],
		[
			[
				[1, 1.5],
				[.5, 1]
			]
		],
		[
			[
				[1.5, 1],
				[1, 1.5]
			]
		],
		[
			[
				[1.5, 1],
				[.5, 1]
			]
		],
		[
			[
				[1, .5],
				[1.5, 1]
			]
		],
		[
			[
				[1, 1.5],
				[.5, 1]
			],
			[
				[1, .5],
				[1.5, 1]
			]
		],
		[
			[
				[1, .5],
				[1, 1.5]
			]
		],
		[
			[
				[1, .5],
				[.5, 1]
			]
		],
		[
			[
				[.5, 1],
				[1, .5]
			]
		],
		[
			[
				[1, 1.5],
				[1, .5]
			]
		],
		[
			[
				[.5, 1],
				[1, .5]
			],
			[
				[1.5, 1],
				[1, 1.5]
			]
		],
		[
			[
				[1.5, 1],
				[1, .5]
			]
		],
		[
			[
				[.5, 1],
				[1.5, 1]
			]
		],
		[
			[
				[1, 1.5],
				[1.5, 1]
			]
		],
		[
			[
				[.5, 1],
				[1, 1.5]
			]
		],
		[]
	];

	function Ya() {
		var t = 1,
			n = 1,
			e = $,
			r = u;

		function i(t) {
			var n = e(t);
			if (Array.isArray(n)) n = n.slice().sort(Ra);
			else {
				const e = v(t),
					r = L(e[0], e[1], n);
				n = B(Math.floor(e[0] / r) * r, Math.floor(e[1] / r - 1) * r, n)
			}
			return n.map((n => o(t, n)))
		}

		function o(e, i) {
			var o = [],
				u = [];
			return function(e, r, i) {
				var o, u, c, f, s, l, h = new Array,
					d = new Array;
				o = u = -1, f = e[0] >= r, Ba[f << 1].forEach(p);
				for (; ++o < t - 1;) c = f, f = e[o + 1] >= r, Ba[c | f << 1].forEach(p);
				Ba[f << 0].forEach(p);
				for (; ++u < n - 1;) {
					for (o = -1, f = e[u * t + t] >= r, s = e[u * t] >= r, Ba[f << 1 | s << 2].forEach(p); ++o < t - 1;) c = f, f = e[u * t + t + o + 1] >= r, l = s, s = e[u * t + o + 1] >= r, Ba[c | f << 1 | s << 2 | l << 3].forEach(p);
					Ba[f | s << 3].forEach(p)
				}
				o = -1, s = e[u * t] >= r, Ba[s << 2].forEach(p);
				for (; ++o < t - 1;) l = s, s = e[u * t + o + 1] >= r, Ba[s << 2 | l << 3].forEach(p);

				function p(t) {
					var n, e, r = [t[0][0] + o, t[0][1] + u],
						c = [t[1][0] + o, t[1][1] + u],
						f = a(r),
						s = a(c);
					(n = d[f]) ? (e = h[s]) ? (delete d[n.end], delete h[e.start], n === e ? (n.ring.push(c), i(n.ring)) : h[n.start] = d[e.end] = {
						start: n.start,
						end: e.end,
						ring: n.ring.concat(e.ring)
					}) : (delete d[n.end], n.ring.push(c), d[n.end = s] = n) : (n = h[s]) ? (e = d[f]) ? (delete h[n.start], delete d[e.end], n === e ? (n.ring.push(c), i(n.ring)) : h[e.start] = d[n.end] = {
						start: e.start,
						end: n.end,
						ring: e.ring.concat(n.ring)
					}) : (delete h[n.start], n.ring.unshift(r), h[n.start = f] = n) : h[f] = d[s] = {
						start: f,
						end: s,
						ring: [r, c]
					}
				}
				Ba[s << 3].forEach(p)
			}(e, i, (function(t) {
				r(t, e, i),
					function(t) {
						for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
						return r
					}(t) > 0 ? o.push([t]) : u.push(t)
			})), u.forEach((function(t) {
				for (var n, e = 0, r = o.length; e < r; ++e)
					if (-1 !== qa((n = o[e])[0], t)) return void n.push(t)
			})), {
				type: "MultiPolygon",
				value: i,
				coordinates: o
			}
		}

		function a(n) {
			return 2 * n[0] + n[1] * (t + 1) * 4
		}

		function u(e, r, i) {
			e.forEach((function(e) {
				var o, a = e[0],
					u = e[1],
					c = 0 | a,
					f = 0 | u,
					s = r[f * t + c];
				a > 0 && a < t && c === a && (o = r[f * t + c - 1], e[0] = a + (i - o) / (s - o) - .5), u > 0 && u < n && f === u && (o = r[(f - 1) * t + c], e[1] = u + (i - o) / (s - o) - .5)
			}))
		}
		return i.contour = o, i.size = function(e) {
			if (!arguments.length) return [t, n];
			var r = Math.floor(e[0]),
				o = Math.floor(e[1]);
			if (!(r >= 0 && o >= 0)) throw new Error("invalid size");
			return t = r, n = o, i
		}, i.thresholds = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? Fa(Da.call(t)) : Fa(t), i) : e
		}, i.smooth = function(t) {
			return arguments.length ? (r = t ? u : Ia, i) : r === u
		}, i
	}

	function La(t, n, e) {
		for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < i; ++a)
			for (var u = 0, c = 0; u < r + e; ++u) u < r && (c += t.data[u + a * r]), u >= e && (u >= o && (c -= t.data[u - o + a * r]), n.data[u - e + a * r] = c / Math.min(u + 1, r - 1 + o - u, o))
	}

	function ja(t, n, e) {
		for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < r; ++a)
			for (var u = 0, c = 0; u < i + e; ++u) u < i && (c += t.data[a + u * r]), u >= e && (u >= o && (c -= t.data[a + (u - o) * r]), n.data[a + (u - e) * r] = c / Math.min(u + 1, i - 1 + o - u, o))
	}

	function $a(t) {
		return t[0]
	}

	function Ha(t) {
		return t[1]
	}

	function Xa() {
		return 1
	}
	const Ga = 134217729;

	function Va(t, n, e, r, i) {
		let o, a, u, c, f = n[0],
			s = r[0],
			l = 0,
			h = 0;
		s > f == s > -f ? (o = f, f = n[++l]) : (o = s, s = r[++h]);
		let d = 0;
		if (l < t && h < e)
			for (s > f == s > -f ? (a = f + o, u = o - (a - f), f = n[++l]) : (a = s + o, u = o - (a - s), s = r[++h]), o = a, 0 !== u && (i[d++] = u); l < t && h < e;) s > f == s > -f ? (a = o + f, c = a - o, u = o - (a - c) + (f - c), f = n[++l]) : (a = o + s, c = a - o, u = o - (a - c) + (s - c), s = r[++h]), o = a, 0 !== u && (i[d++] = u);
		for (; l < t;) a = o + f, c = a - o, u = o - (a - c) + (f - c), f = n[++l], o = a, 0 !== u && (i[d++] = u);
		for (; h < e;) a = o + s, c = a - o, u = o - (a - c) + (s - c), s = r[++h], o = a, 0 !== u && (i[d++] = u);
		return 0 === o && 0 !== d || (i[d++] = o), d
	}

	function Wa(t) {
		return new Float64Array(t)
	}
	const Za = Wa(4),
		Ka = Wa(8),
		Qa = Wa(12),
		Ja = Wa(16),
		tu = Wa(4);

	function nu(t, n, e, r, i, o) {
		const a = (n - o) * (e - i),
			u = (t - i) * (r - o),
			c = a - u;
		if (0 === a || 0 === u || a > 0 != u > 0) return c;
		const f = Math.abs(a + u);
		return Math.abs(c) >= 33306690738754716e-32 * f ? c : - function(t, n, e, r, i, o, a) {
			let u, c, f, s, l, h, d, p, g, y, v, _, b, m, x, w, M, A;
			const T = t - i,
				S = e - i,
				E = n - o,
				k = r - o;
			m = T * k, h = Ga * T, d = h - (h - T), p = T - d, h = Ga * k, g = h - (h - k), y = k - g, x = p * y - (m - d * g - p * g - d * y), w = E * S, h = Ga * E, d = h - (h - E), p = E - d, h = Ga * S, g = h - (h - S), y = S - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, Za[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, Za[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, Za[2] = _ - (A - l) + (v - l), Za[3] = A;
			let N = function(t, n) {
					let e = n[0];
					for (let r = 1; r < t; r++) e += n[r];
					return e
				}(4, Za),
				C = 22204460492503146e-32 * a;
			if (N >= C || -N >= C) return N;
			if (l = t - T, u = t - (T + l) + (l - i), l = e - S, f = e - (S + l) + (l - i), l = n - E, c = n - (E + l) + (l - o), l = r - k, s = r - (k + l) + (l - o), 0 === u && 0 === c && 0 === f && 0 === s) return N;
			if (C = 11093356479670487e-47 * a + 33306690738754706e-32 * Math.abs(N), N += T * s + k * u - (E * f + S * c), N >= C || -N >= C) return N;
			m = u * k, h = Ga * u, d = h - (h - u), p = u - d, h = Ga * k, g = h - (h - k), y = k - g, x = p * y - (m - d * g - p * g - d * y), w = c * S, h = Ga * c, d = h - (h - c), p = c - d, h = Ga * S, g = h - (h - S), y = S - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, tu[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, tu[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, tu[2] = _ - (A - l) + (v - l), tu[3] = A;
			const P = Va(4, Za, 4, tu, Ka);
			m = T * s, h = Ga * T, d = h - (h - T), p = T - d, h = Ga * s, g = h - (h - s), y = s - g, x = p * y - (m - d * g - p * g - d * y), w = E * f, h = Ga * E, d = h - (h - E), p = E - d, h = Ga * f, g = h - (h - f), y = f - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, tu[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, tu[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, tu[2] = _ - (A - l) + (v - l), tu[3] = A;
			const z = Va(P, Ka, 4, tu, Qa);
			m = u * s, h = Ga * u, d = h - (h - u), p = u - d, h = Ga * s, g = h - (h - s), y = s - g, x = p * y - (m - d * g - p * g - d * y), w = c * f, h = Ga * c, d = h - (h - c), p = c - d, h = Ga * f, g = h - (h - f), y = f - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, tu[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, tu[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, tu[2] = _ - (A - l) + (v - l), tu[3] = A;
			const D = Va(z, Qa, 4, tu, Ja);
			return Ja[D - 1]
		}(t, n, e, r, i, o, f)
	}
	const eu = Math.pow(2, -52),
		ru = new Uint32Array(512);
	class iu {
		static from(t, n = su, e = lu) {
			const r = t.length,
				i = new Float64Array(2 * r);
			for (let o = 0; o < r; o++) {
				const r = t[o];
				i[2 * o] = n(r), i[2 * o + 1] = e(r)
			}
			return new iu(i)
		}
		constructor(t) {
			const n = t.length >> 1;
			if (n > 0 && "number" != typeof t[0]) throw new Error("Expected coords to contain numbers.");
			this.coords = t;
			const e = Math.max(2 * n - 5, 0);
			this._triangles = new Uint32Array(3 * e), this._halfedges = new Int32Array(3 * e), this._hashSize = Math.ceil(Math.sqrt(n)), this._hullPrev = new Uint32Array(n), this._hullNext = new Uint32Array(n), this._hullTri = new Uint32Array(n), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(n), this._dists = new Float64Array(n), this.update()
		}
		update() {
			const {
				coords: t,
				_hullPrev: n,
				_hullNext: e,
				_hullTri: r,
				_hullHash: i
			} = this, o = t.length >> 1;
			let a = 1 / 0,
				u = 1 / 0,
				c = -1 / 0,
				f = -1 / 0;
			for (let n = 0; n < o; n++) {
				const e = t[2 * n],
					r = t[2 * n + 1];
				e < a && (a = e), r < u && (u = r), e > c && (c = e), r > f && (f = r), this._ids[n] = n
			}
			const s = (a + c) / 2,
				l = (u + f) / 2;
			let h, d, p, g = 1 / 0;
			for (let n = 0; n < o; n++) {
				const e = ou(s, l, t[2 * n], t[2 * n + 1]);
				e < g && (h = n, g = e)
			}
			const y = t[2 * h],
				v = t[2 * h + 1];
			g = 1 / 0;
			for (let n = 0; n < o; n++) {
				if (n === h) continue;
				const e = ou(y, v, t[2 * n], t[2 * n + 1]);
				e < g && e > 0 && (d = n, g = e)
			}
			let _ = t[2 * d],
				b = t[2 * d + 1],
				m = 1 / 0;
			for (let n = 0; n < o; n++) {
				if (n === h || n === d) continue;
				const e = uu(y, v, _, b, t[2 * n], t[2 * n + 1]);
				e < m && (p = n, m = e)
			}
			let x = t[2 * p],
				w = t[2 * p + 1];
			if (m === 1 / 0) {
				for (let n = 0; n < o; n++) this._dists[n] = t[2 * n] - t[0] || t[2 * n + 1] - t[1];
				cu(this._ids, this._dists, 0, o - 1);
				const n = new Uint32Array(o);
				let e = 0;
				for (let t = 0, r = -1 / 0; t < o; t++) {
					const i = this._ids[t];
					this._dists[i] > r && (n[e++] = i, r = this._dists[i])
				}
				return this.hull = n.subarray(0, e), this.triangles = new Uint32Array(0), void(this.halfedges = new Uint32Array(0))
			}
			if (nu(y, v, _, b, x, w) < 0) {
				const t = d,
					n = _,
					e = b;
				d = p, _ = x, b = w, p = t, x = n, w = e
			}
			const M = function(t, n, e, r, i, o) {
				const a = e - t,
					u = r - n,
					c = i - t,
					f = o - n,
					s = a * a + u * u,
					l = c * c + f * f,
					h = .5 / (a * f - u * c);
				return {
					x: t + (f * s - u * l) * h,
					y: n + (a * l - c * s) * h
				}
			}(y, v, _, b, x, w);
			this._cx = M.x, this._cy = M.y;
			for (let n = 0; n < o; n++) this._dists[n] = ou(t[2 * n], t[2 * n + 1], M.x, M.y);
			cu(this._ids, this._dists, 0, o - 1), this._hullStart = h;
			let A = 3;
			e[h] = n[p] = d, e[d] = n[h] = p, e[p] = n[d] = h, r[h] = 0, r[d] = 1, r[p] = 2, i.fill(-1), i[this._hashKey(y, v)] = h, i[this._hashKey(_, b)] = d, i[this._hashKey(x, w)] = p, this.trianglesLen = 0, this._addTriangle(h, d, p, -1, -1, -1);
			for (let o, a, u = 0; u < this._ids.length; u++) {
				const c = this._ids[u],
					f = t[2 * c],
					s = t[2 * c + 1];
				if (u > 0 && Math.abs(f - o) <= eu && Math.abs(s - a) <= eu) continue;
				if (o = f, a = s, c === h || c === d || c === p) continue;
				let l = 0;
				for (let t = 0, n = this._hashKey(f, s); t < this._hashSize && (l = i[(n + t) % this._hashSize], -1 === l || l === e[l]); t++);
				l = n[l];
				let g, y = l;
				for (; g = e[y], nu(f, s, t[2 * y], t[2 * y + 1], t[2 * g], t[2 * g + 1]) >= 0;)
					if (y = g, y === l) {
						y = -1;
						break
					} if (-1 === y) continue;
				let v = this._addTriangle(y, c, e[y], -1, -1, r[y]);
				r[c] = this._legalize(v + 2), r[y] = v, A++;
				let _ = e[y];
				for (; g = e[_], nu(f, s, t[2 * _], t[2 * _ + 1], t[2 * g], t[2 * g + 1]) < 0;) v = this._addTriangle(_, c, g, r[c], -1, r[_]), r[c] = this._legalize(v + 2), e[_] = _, A--, _ = g;
				if (y === l)
					for (; g = n[y], nu(f, s, t[2 * g], t[2 * g + 1], t[2 * y], t[2 * y + 1]) < 0;) v = this._addTriangle(g, c, y, -1, r[y], r[g]), this._legalize(v + 2), r[g] = v, e[y] = y, A--, y = g;
				this._hullStart = n[c] = y, e[y] = n[_] = c, e[c] = _, i[this._hashKey(f, s)] = c, i[this._hashKey(t[2 * y], t[2 * y + 1])] = y
			}
			this.hull = new Uint32Array(A);
			for (let t = 0, n = this._hullStart; t < A; t++) this.hull[t] = n, n = e[n];
			this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen)
		}
		_hashKey(t, n) {
			return Math.floor(function(t, n) {
				const e = t / (Math.abs(t) + Math.abs(n));
				return (n > 0 ? 3 - e : 1 + e) / 4
			}(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize
		}
		_legalize(t) {
			const {
				_triangles: n,
				_halfedges: e,
				coords: r
			} = this;
			let i = 0,
				o = 0;
			for (;;) {
				const a = e[t],
					u = t - t % 3;
				if (o = u + (t + 2) % 3, -1 === a) {
					if (0 === i) break;
					t = ru[--i];
					continue
				}
				const c = a - a % 3,
					f = u + (t + 1) % 3,
					s = c + (a + 2) % 3,
					l = n[o],
					h = n[t],
					d = n[f],
					p = n[s];
				if (au(r[2 * l], r[2 * l + 1], r[2 * h], r[2 * h + 1], r[2 * d], r[2 * d + 1], r[2 * p], r[2 * p + 1])) {
					n[t] = p, n[a] = l;
					const r = e[s];
					if (-1 === r) {
						let n = this._hullStart;
						do {
							if (this._hullTri[n] === s) {
								this._hullTri[n] = t;
								break
							}
							n = this._hullPrev[n]
						} while (n !== this._hullStart)
					}
					this._link(t, r), this._link(a, e[o]), this._link(o, s);
					const u = c + (a + 1) % 3;
					i < ru.length && (ru[i++] = u)
				} else {
					if (0 === i) break;
					t = ru[--i]
				}
			}
			return o
		}
		_link(t, n) {
			this._halfedges[t] = n, -1 !== n && (this._halfedges[n] = t)
		}
		_addTriangle(t, n, e, r, i, o) {
			const a = this.trianglesLen;
			return this._triangles[a] = t, this._triangles[a + 1] = n, this._triangles[a + 2] = e, this._link(a, r), this._link(a + 1, i), this._link(a + 2, o), this.trianglesLen += 3, a
		}
	}

	function ou(t, n, e, r) {
		const i = t - e,
			o = n - r;
		return i * i + o * o
	}

	function au(t, n, e, r, i, o, a, u) {
		const c = t - a,
			f = n - u,
			s = e - a,
			l = r - u,
			h = i - a,
			d = o - u,
			p = s * s + l * l,
			g = h * h + d * d;
		return c * (l * g - p * d) - f * (s * g - p * h) + (c * c + f * f) * (s * d - l * h) < 0
	}

	function uu(t, n, e, r, i, o) {
		const a = e - t,
			u = r - n,
			c = i - t,
			f = o - n,
			s = a * a + u * u,
			l = c * c + f * f,
			h = .5 / (a * f - u * c),
			d = (f * s - u * l) * h,
			p = (a * l - c * s) * h;
		return d * d + p * p
	}

	function cu(t, n, e, r) {
		if (r - e <= 20)
			for (let i = e + 1; i <= r; i++) {
				const r = t[i],
					o = n[r];
				let a = i - 1;
				for (; a >= e && n[t[a]] > o;) t[a + 1] = t[a--];
				t[a + 1] = r
			} else {
				let i = e + 1,
					o = r;
				fu(t, e + r >> 1, i), n[t[e]] > n[t[r]] && fu(t, e, r), n[t[i]] > n[t[r]] && fu(t, i, r), n[t[e]] > n[t[i]] && fu(t, e, i);
				const a = t[i],
					u = n[a];
				for (;;) {
					do {
						i++
					} while (n[t[i]] < u);
					do {
						o--
					} while (n[t[o]] > u);
					if (o < i) break;
					fu(t, i, o)
				}
				t[e + 1] = t[o], t[o] = a, r - i + 1 >= o - e ? (cu(t, n, i, r), cu(t, n, e, o - 1)) : (cu(t, n, e, o - 1), cu(t, n, i, r))
			}
	}

	function fu(t, n, e) {
		const r = t[n];
		t[n] = t[e], t[e] = r
	}

	function su(t) {
		return t[0]
	}

	function lu(t) {
		return t[1]
	}
	const hu = 1e-6;
	class du {
		constructor() {
			this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
		}
		moveTo(t, n) {
			this._ += `M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`
		}
		closePath() {
			null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
		}
		lineTo(t, n) {
			this._ += `L${this._x1=+t},${this._y1=+n}`
		}
		arc(t, n, e) {
			const r = (t = +t) + (e = +e),
				i = n = +n;
			if (e < 0) throw new Error("negative radius");
			null === this._x1 ? this._ += `M${r},${i}` : (Math.abs(this._x1 - r) > hu || Math.abs(this._y1 - i) > hu) && (this._ += "L" + r + "," + i), e && (this._ += `A${e},${e},0,1,1,${t-e},${n}A${e},${e},0,1,1,${this._x1=r},${this._y1=i}`)
		}
		rect(t, n, e, r) {
			this._ += `M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${+e}v${+r}h${-e}Z`
		}
		value() {
			return this._ || null
		}
	}
	class pu {
		constructor() {
			this._ = []
		}
		moveTo(t, n) {
			this._.push([t, n])
		}
		closePath() {
			this._.push(this._[0].slice())
		}
		lineTo(t, n) {
			this._.push([t, n])
		}
		value() {
			return this._.length ? this._ : null
		}
	}
	class gu {
		constructor(t, [n, e, r, i] = [0, 0, 960, 500]) {
			if (!((r = +r) >= (n = +n) && (i = +i) >= (e = +e))) throw new Error("invalid bounds");
			this.delaunay = t, this._circumcenters = new Float64Array(2 * t.points.length), this.vectors = new Float64Array(2 * t.points.length), this.xmax = r, this.xmin = n, this.ymax = i, this.ymin = e, this._init()
		}
		update() {
			return this.delaunay.update(), this._init(), this
		}
		_init() {
			const {
				delaunay: {
					points: t,
					hull: n,
					triangles: e
				},
				vectors: r
			} = this, i = this.circumcenters = this._circumcenters.subarray(0, e.length / 3 * 2);
			for (let n, r, o = 0, a = 0, u = e.length; o < u; o += 3, a += 2) {
				const u = 2 * e[o],
					c = 2 * e[o + 1],
					f = 2 * e[o + 2],
					s = t[u],
					l = t[u + 1],
					h = t[c],
					d = t[c + 1],
					p = t[f],
					g = t[f + 1],
					y = h - s,
					v = d - l,
					_ = p - s,
					b = g - l,
					m = 2 * (y * b - v * _);
				if (Math.abs(m) < 1e-9) {
					let i = 1e9;
					const o = 2 * e[0];
					i *= Math.sign((t[o] - s) * b - (t[o + 1] - l) * _), n = (s + p) / 2 - i * b, r = (l + g) / 2 + i * _
				} else {
					const t = 1 / m,
						e = y * y + v * v,
						i = _ * _ + b * b;
					n = s + (b * e - v * i) * t, r = l + (y * i - _ * e) * t
				}
				i[a] = n, i[a + 1] = r
			}
			let o, a, u, c = n[n.length - 1],
				f = 4 * c,
				s = t[2 * c],
				l = t[2 * c + 1];
			r.fill(0);
			for (let e = 0; e < n.length; ++e) c = n[e], o = f, a = s, u = l, f = 4 * c, s = t[2 * c], l = t[2 * c + 1], r[o + 2] = r[f] = u - l, r[o + 3] = r[f + 1] = s - a
		}
		render(t) {
			const n = null == t ? t = new du : void 0,
				{
					delaunay: {
						halfedges: e,
						inedges: r,
						hull: i
					},
					circumcenters: o,
					vectors: a
				} = this;
			if (i.length <= 1) return null;
			for (let n = 0, r = e.length; n < r; ++n) {
				const r = e[n];
				if (r < n) continue;
				const i = 2 * Math.floor(n / 3),
					a = 2 * Math.floor(r / 3),
					u = o[i],
					c = o[i + 1],
					f = o[a],
					s = o[a + 1];
				this._renderSegment(u, c, f, s, t)
			}
			let u, c = i[i.length - 1];
			for (let n = 0; n < i.length; ++n) {
				u = c, c = i[n];
				const e = 2 * Math.floor(r[c] / 3),
					f = o[e],
					s = o[e + 1],
					l = 4 * u,
					h = this._project(f, s, a[l + 2], a[l + 3]);
				h && this._renderSegment(f, s, h[0], h[1], t)
			}
			return n && n.value()
		}
		renderBounds(t) {
			const n = null == t ? t = new du : void 0;
			return t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), n && n.value()
		}
		renderCell(t, n) {
			const e = null == n ? n = new du : void 0,
				r = this._clip(t);
			if (null === r || !r.length) return;
			n.moveTo(r[0], r[1]);
			let i = r.length;
			for (; r[0] === r[i - 2] && r[1] === r[i - 1] && i > 1;) i -= 2;
			for (let t = 2; t < i; t += 2) r[t] === r[t - 2] && r[t + 1] === r[t - 1] || n.lineTo(r[t], r[t + 1]);
			return n.closePath(), e && e.value()
		}* cellPolygons() {
			const {
				delaunay: {
					points: t
				}
			} = this;
			for (let n = 0, e = t.length / 2; n < e; ++n) {
				const t = this.cellPolygon(n);
				t && (t.index = n, yield t)
			}
		}
		cellPolygon(t) {
			const n = new pu;
			return this.renderCell(t, n), n.value()
		}
		_renderSegment(t, n, e, r, i) {
			let o;
			const a = this._regioncode(t, n),
				u = this._regioncode(e, r);
			0 === a && 0 === u ? (i.moveTo(t, n), i.lineTo(e, r)) : (o = this._clipSegment(t, n, e, r, a, u)) && (i.moveTo(o[0], o[1]), i.lineTo(o[2], o[3]))
		}
		contains(t, n, e) {
			return (n = +n) == n && (e = +e) == e && this.delaunay._step(t, n, e) === t
		}* neighbors(t) {
			const n = this._clip(t);
			if (n)
				for (const e of this.delaunay.neighbors(t)) {
					const t = this._clip(e);
					if (t) t: for (let r = 0, i = n.length; r < i; r += 2)
						for (let o = 0, a = t.length; o < a; o += 2)
							if (n[r] == t[o] && n[r + 1] == t[o + 1] && n[(r + 2) % i] == t[(o + a - 2) % a] && n[(r + 3) % i] == t[(o + a - 1) % a]) {
								yield e;
								break t
							}
				}
		}
		_cell(t) {
			const {
				circumcenters: n,
				delaunay: {
					inedges: e,
					halfedges: r,
					triangles: i
				}
			} = this, o = e[t];
			if (-1 === o) return null;
			const a = [];
			let u = o;
			do {
				const e = Math.floor(u / 3);
				if (a.push(n[2 * e], n[2 * e + 1]), u = u % 3 == 2 ? u - 2 : u + 1, i[u] !== t) break;
				u = r[u]
			} while (u !== o && -1 !== u);
			return a
		}
		_clip(t) {
			if (0 === t && 1 === this.delaunay.hull.length) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
			const n = this._cell(t);
			if (null === n) return null;
			const {
				vectors: e
			} = this, r = 4 * t;
			return e[r] || e[r + 1] ? this._clipInfinite(t, n, e[r], e[r + 1], e[r + 2], e[r + 3]) : this._clipFinite(t, n)
		}
		_clipFinite(t, n) {
			const e = n.length;
			let r, i, o, a, u = null,
				c = n[e - 2],
				f = n[e - 1],
				s = this._regioncode(c, f),
				l = 0;
			for (let h = 0; h < e; h += 2)
				if (r = c, i = f, c = n[h], f = n[h + 1], o = s, s = this._regioncode(c, f), 0 === o && 0 === s) a = l, l = 0, u ? u.push(c, f) : u = [c, f];
				else {
					let n, e, h, d, p;
					if (0 === o) {
						if (null === (n = this._clipSegment(r, i, c, f, o, s))) continue;
						[e, h, d, p] = n
					} else {
						if (null === (n = this._clipSegment(c, f, r, i, s, o))) continue;
						[d, p, e, h] = n, a = l, l = this._edgecode(e, h), a && l && this._edge(t, a, l, u, u.length), u ? u.push(e, h) : u = [e, h]
					}
					a = l, l = this._edgecode(d, p), a && l && this._edge(t, a, l, u, u.length), u ? u.push(d, p) : u = [d, p]
				} if (u) a = l, l = this._edgecode(u[0], u[1]), a && l && this._edge(t, a, l, u, u.length);
			else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
			return u
		}
		_clipSegment(t, n, e, r, i, o) {
			for (;;) {
				if (0 === i && 0 === o) return [t, n, e, r];
				if (i & o) return null;
				let a, u, c = i || o;
				8 & c ? (a = t + (e - t) * (this.ymax - n) / (r - n), u = this.ymax) : 4 & c ? (a = t + (e - t) * (this.ymin - n) / (r - n), u = this.ymin) : 2 & c ? (u = n + (r - n) * (this.xmax - t) / (e - t), a = this.xmax) : (u = n + (r - n) * (this.xmin - t) / (e - t), a = this.xmin), i ? (t = a, n = u, i = this._regioncode(t, n)) : (e = a, r = u, o = this._regioncode(e, r))
			}
		}
		_clipInfinite(t, n, e, r, i, o) {
			let a, u = Array.from(n);
			if ((a = this._project(u[0], u[1], e, r)) && u.unshift(a[0], a[1]), (a = this._project(u[u.length - 2], u[u.length - 1], i, o)) && u.push(a[0], a[1]), u = this._clipFinite(t, u))
				for (let n, e = 0, r = u.length, i = this._edgecode(u[r - 2], u[r - 1]); e < r; e += 2) n = i, i = this._edgecode(u[e], u[e + 1]), n && i && (e = this._edge(t, n, i, u, e), r = u.length);
			else this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
			return u
		}
		_edge(t, n, e, r, i) {
			for (; n !== e;) {
				let e, o;
				switch (n) {
					case 5:
						n = 4;
						continue;
					case 4:
						n = 6, e = this.xmax, o = this.ymin;
						break;
					case 6:
						n = 2;
						continue;
					case 2:
						n = 10, e = this.xmax, o = this.ymax;
						break;
					case 10:
						n = 8;
						continue;
					case 8:
						n = 9, e = this.xmin, o = this.ymax;
						break;
					case 9:
						n = 1;
						continue;
					case 1:
						n = 5, e = this.xmin, o = this.ymin
				}
				r[i] === e && r[i + 1] === o || !this.contains(t, e, o) || (r.splice(i, 0, e, o), i += 2)
			}
			if (r.length > 4)
				for (let t = 0; t < r.length; t += 2) {
					const n = (t + 2) % r.length,
						e = (t + 4) % r.length;
					(r[t] === r[n] && r[n] === r[e] || r[t + 1] === r[n + 1] && r[n + 1] === r[e + 1]) && (r.splice(n, 2), t -= 2)
				}
			return i
		}
		_project(t, n, e, r) {
			let i, o, a, u = 1 / 0;
			if (r < 0) {
				if (n <= this.ymin) return null;
				(i = (this.ymin - n) / r) < u && (a = this.ymin, o = t + (u = i) * e)
			} else if (r > 0) {
				if (n >= this.ymax) return null;
				(i = (this.ymax - n) / r) < u && (a = this.ymax, o = t + (u = i) * e)
			}
			if (e > 0) {
				if (t >= this.xmax) return null;
				(i = (this.xmax - t) / e) < u && (o = this.xmax, a = n + (u = i) * r)
			} else if (e < 0) {
				if (t <= this.xmin) return null;
				(i = (this.xmin - t) / e) < u && (o = this.xmin, a = n + (u = i) * r)
			}
			return [o, a]
		}
		_edgecode(t, n) {
			return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (n === this.ymin ? 4 : n === this.ymax ? 8 : 0)
		}
		_regioncode(t, n) {
			return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (n < this.ymin ? 4 : n > this.ymax ? 8 : 0)
		}
	}
	const yu = 2 * Math.PI,
		vu = Math.pow;

	function _u(t) {
		return t[0]
	}

	function bu(t) {
		return t[1]
	}

	function mu(t, n, e) {
		return [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e]
	}
	class xu {
		static from(t, n = _u, e = bu, r) {
			return new xu("length" in t ? function(t, n, e, r) {
				const i = t.length,
					o = new Float64Array(2 * i);
				for (let a = 0; a < i; ++a) {
					const i = t[a];
					o[2 * a] = n.call(r, i, a, t), o[2 * a + 1] = e.call(r, i, a, t)
				}
				return o
			}(t, n, e, r) : Float64Array.from(function*(t, n, e, r) {
				let i = 0;
				for (const o of t) yield n.call(r, o, i, t), yield e.call(r, o, i, t), ++i
			}(t, n, e, r)))
		}
		constructor(t) {
			this._delaunator = new iu(t), this.inedges = new Int32Array(t.length / 2), this._hullIndex = new Int32Array(t.length / 2), this.points = this._delaunator.coords, this._init()
		}
		update() {
			return this._delaunator.update(), this._init(), this
		}
		_init() {
			const t = this._delaunator,
				n = this.points;
			if (t.hull && t.hull.length > 2 && function(t) {
					const {
						triangles: n,
						coords: e
					} = t;
					for (let t = 0; t < n.length; t += 3) {
						const r = 2 * n[t],
							i = 2 * n[t + 1],
							o = 2 * n[t + 2];
						if ((e[o] - e[r]) * (e[i + 1] - e[r + 1]) - (e[i] - e[r]) * (e[o + 1] - e[r + 1]) > 1e-10) return !1
					}
					return !0
				}(t)) {
				this.collinear = Int32Array.from({
					length: n.length / 2
				}, ((t, n) => n)).sort(((t, e) => n[2 * t] - n[2 * e] || n[2 * t + 1] - n[2 * e + 1]));
				const t = this.collinear[0],
					e = this.collinear[this.collinear.length - 1],
					r = [n[2 * t], n[2 * t + 1], n[2 * e], n[2 * e + 1]],
					i = 1e-8 * Math.hypot(r[3] - r[1], r[2] - r[0]);
				for (let t = 0, e = n.length / 2; t < e; ++t) {
					const e = mu(n[2 * t], n[2 * t + 1], i);
					n[2 * t] = e[0], n[2 * t + 1] = e[1]
				}
				this._delaunator = new iu(n)
			} else delete this.collinear;
			const e = this.halfedges = this._delaunator.halfedges,
				r = this.hull = this._delaunator.hull,
				i = this.triangles = this._delaunator.triangles,
				o = this.inedges.fill(-1),
				a = this._hullIndex.fill(-1);
			for (let t = 0, n = e.length; t < n; ++t) {
				const n = i[t % 3 == 2 ? t - 2 : t + 1]; - 1 !== e[t] && -1 !== o[n] || (o[n] = t)
			}
			for (let t = 0, n = r.length; t < n; ++t) a[r[t]] = t;
			r.length <= 2 && r.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = r[0], o[r[0]] = 1, 2 === r.length && (o[r[1]] = 0, this.triangles[1] = r[1], this.triangles[2] = r[1]))
		}
		voronoi(t) {
			return new gu(this, t)
		}* neighbors(t) {
			const {
				inedges: n,
				hull: e,
				_hullIndex: r,
				halfedges: i,
				triangles: o,
				collinear: a
			} = this;
			if (a) {
				const n = a.indexOf(t);
				return n > 0 && (yield a[n - 1]), void(n < a.length - 1 && (yield a[n + 1]))
			}
			const u = n[t];
			if (-1 === u) return;
			let c = u,
				f = -1;
			do {
				if (yield f = o[c], c = c % 3 == 2 ? c - 2 : c + 1, o[c] !== t) return;
				if (c = i[c], -1 === c) {
					const n = e[(r[t] + 1) % e.length];
					return void(n !== f && (yield n))
				}
			} while (c !== u)
		}
		find(t, n, e = 0) {
			if ((t = +t) != t || (n = +n) != n) return -1;
			const r = e;
			let i;
			for (;
				(i = this._step(e, t, n)) >= 0 && i !== e && i !== r;) e = i;
			return i
		}
		_step(t, n, e) {
			const {
				inedges: r,
				hull: i,
				_hullIndex: o,
				halfedges: a,
				triangles: u,
				points: c
			} = this;
			if (-1 === r[t] || !c.length) return (t + 1) % (c.length >> 1);
			let f = t,
				s = vu(n - c[2 * t], 2) + vu(e - c[2 * t + 1], 2);
			const l = r[t];
			let h = l;
			do {
				let r = u[h];
				const l = vu(n - c[2 * r], 2) + vu(e - c[2 * r + 1], 2);
				if (l < s && (s = l, f = r), h = h % 3 == 2 ? h - 2 : h + 1, u[h] !== t) break;
				if (h = a[h], -1 === h) {
					if (h = i[(o[t] + 1) % i.length], h !== r && vu(n - c[2 * h], 2) + vu(e - c[2 * h + 1], 2) < s) return h;
					break
				}
			} while (h !== l);
			return f
		}
		render(t) {
			const n = null == t ? t = new du : void 0,
				{
					points: e,
					halfedges: r,
					triangles: i
				} = this;
			for (let n = 0, o = r.length; n < o; ++n) {
				const o = r[n];
				if (o < n) continue;
				const a = 2 * i[n],
					u = 2 * i[o];
				t.moveTo(e[a], e[a + 1]), t.lineTo(e[u], e[u + 1])
			}
			return this.renderHull(t), n && n.value()
		}
		renderPoints(t, n) {
			void 0 !== n || t && "function" == typeof t.moveTo || (n = t, t = null), n = null == n ? 2 : +n;
			const e = null == t ? t = new du : void 0,
				{
					points: r
				} = this;
			for (let e = 0, i = r.length; e < i; e += 2) {
				const i = r[e],
					o = r[e + 1];
				t.moveTo(i + n, o), t.arc(i, o, n, 0, yu)
			}
			return e && e.value()
		}
		renderHull(t) {
			const n = null == t ? t = new du : void 0,
				{
					hull: e,
					points: r
				} = this,
				i = 2 * e[0],
				o = e.length;
			t.moveTo(r[i], r[i + 1]);
			for (let n = 1; n < o; ++n) {
				const i = 2 * e[n];
				t.lineTo(r[i], r[i + 1])
			}
			return t.closePath(), n && n.value()
		}
		hullPolygon() {
			const t = new pu;
			return this.renderHull(t), t.value()
		}
		renderTriangle(t, n) {
			const e = null == n ? n = new du : void 0,
				{
					points: r,
					triangles: i
				} = this,
				o = 2 * i[t *= 3],
				a = 2 * i[t + 1],
				u = 2 * i[t + 2];
			return n.moveTo(r[o], r[o + 1]), n.lineTo(r[a], r[a + 1]), n.lineTo(r[u], r[u + 1]), n.closePath(), e && e.value()
		}* trianglePolygons() {
			const {
				triangles: t
			} = this;
			for (let n = 0, e = t.length / 3; n < e; ++n) yield this.trianglePolygon(n)
		}
		trianglePolygon(t) {
			const n = new pu;
			return this.renderTriangle(t, n), n.value()
		}
	}
	var wu = {},
		Mu = {};

	function Au(t) {
		return new Function("d", "return {" + t.map((function(t, n) {
			return JSON.stringify(t) + ": d[" + n + '] || ""'
		})).join(",") + "}")
	}

	function Tu(t) {
		var n = Object.create(null),
			e = [];
		return t.forEach((function(t) {
			for (var r in t) r in n || e.push(n[r] = r)
		})), e
	}

	function Su(t, n) {
		var e = t + "",
			r = e.length;
		return r < n ? new Array(n - r + 1).join(0) + e : e
	}

	function Eu(t) {
		var n = t.getUTCHours(),
			e = t.getUTCMinutes(),
			r = t.getUTCSeconds(),
			i = t.getUTCMilliseconds();
		return isNaN(t) ? "Invalid Date" : function(t) {
			return t < 0 ? "-" + Su(-t, 6) : t > 9999 ? "+" + Su(t, 6) : Su(t, 4)
		}(t.getUTCFullYear()) + "-" + Su(t.getUTCMonth() + 1, 2) + "-" + Su(t.getUTCDate(), 2) + (i ? "T" + Su(n, 2) + ":" + Su(e, 2) + ":" + Su(r, 2) + "." + Su(i, 3) + "Z" : r ? "T" + Su(n, 2) + ":" + Su(e, 2) + ":" + Su(r, 2) + "Z" : e || n ? "T" + Su(n, 2) + ":" + Su(e, 2) + "Z" : "")
	}

	function ku(t) {
		var n = new RegExp('["' + t + "\n\r]"),
			e = t.charCodeAt(0);

		function r(t, n) {
			var r, i = [],
				o = t.length,
				a = 0,
				u = 0,
				c = o <= 0,
				f = !1;

			function s() {
				if (c) return Mu;
				if (f) return f = !1, wu;
				var n, r, i = a;
				if (34 === t.charCodeAt(i)) {
					for (; a++ < o && 34 !== t.charCodeAt(a) || 34 === t.charCodeAt(++a););
					return (n = a) >= o ? c = !0 : 10 === (r = t.charCodeAt(a++)) ? f = !0 : 13 === r && (f = !0, 10 === t.charCodeAt(a) && ++a), t.slice(i + 1, n - 1).replace(/""/g, '"')
				}
				for (; a < o;) {
					if (10 === (r = t.charCodeAt(n = a++))) f = !0;
					else if (13 === r) f = !0, 10 === t.charCodeAt(a) && ++a;
					else if (r !== e) continue;
					return t.slice(i, n)
				}
				return c = !0, t.slice(i, o)
			}
			for (10 === t.charCodeAt(o - 1) && --o, 13 === t.charCodeAt(o - 1) && --o;
				(r = s()) !== Mu;) {
				for (var l = []; r !== wu && r !== Mu;) l.push(r), r = s();
				n && null == (l = n(l, u++)) || i.push(l)
			}
			return i
		}

		function i(n, e) {
			return n.map((function(n) {
				return e.map((function(t) {
					return a(n[t])
				})).join(t)
			}))
		}

		function o(n) {
			return n.map(a).join(t)
		}

		function a(t) {
			return null == t ? "" : t instanceof Date ? Eu(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
		}
		return {
			parse: function(t, n) {
				var e, i, o = r(t, (function(t, r) {
					if (e) return e(t, r - 1);
					i = t, e = n ? function(t, n) {
						var e = Au(t);
						return function(r, i) {
							return n(e(r), i, t)
						}
					}(t, n) : Au(t)
				}));
				return o.columns = i || [], o
			},
			parseRows: r,
			format: function(n, e) {
				return null == e && (e = Tu(n)), [e.map(a).join(t)].concat(i(n, e)).join("\n")
			},
			formatBody: function(t, n) {
				return null == n && (n = Tu(t)), i(t, n).join("\n")
			},
			formatRows: function(t) {
				return t.map(o).join("\n")
			},
			formatRow: o,
			formatValue: a
		}
	}
	var Nu = ku(","),
		Cu = Nu.parse,
		Pu = Nu.parseRows,
		zu = Nu.format,
		Du = Nu.formatBody,
		Ru = Nu.formatRows,
		Fu = Nu.formatRow,
		qu = Nu.formatValue,
		Ou = ku("\t"),
		Uu = Ou.parse,
		Iu = Ou.parseRows,
		Bu = Ou.format,
		Yu = Ou.formatBody,
		Lu = Ou.formatRows,
		ju = Ou.formatRow,
		$u = Ou.formatValue;
	const Hu = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

	function Xu(t) {
		if (!t.ok) throw new Error(t.status + " " + t.statusText);
		return t.blob()
	}

	function Gu(t) {
		if (!t.ok) throw new Error(t.status + " " + t.statusText);
		return t.arrayBuffer()
	}

	function Vu(t) {
		if (!t.ok) throw new Error(t.status + " " + t.statusText);
		return t.text()
	}

	function Wu(t, n) {
		return fetch(t, n).then(Vu)
	}

	function Zu(t) {
		return function(n, e, r) {
			return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), Wu(n, e).then((function(n) {
				return t(n, r)
			}))
		}
	}
	var Ku = Zu(Cu),
		Qu = Zu(Uu);

	function Ju(t) {
		if (!t.ok) throw new Error(t.status + " " + t.statusText);
		if (204 !== t.status && 205 !== t.status) return t.json()
	}

	function tc(t) {
		return (n, e) => Wu(n, e).then((n => (new DOMParser).parseFromString(n, t)))
	}
	var nc = tc("application/xml"),
		ec = tc("text/html"),
		rc = tc("image/svg+xml");

	function ic(t, n, e, r) {
		if (isNaN(n) || isNaN(e)) return t;
		var i, o, a, u, c, f, s, l, h, d = t._root,
			p = {
				data: r
			},
			g = t._x0,
			y = t._y0,
			v = t._x1,
			_ = t._y1;
		if (!d) return t._root = p, t;
		for (; d.length;)
			if ((f = n >= (o = (g + v) / 2)) ? g = o : v = o, (s = e >= (a = (y + _) / 2)) ? y = a : _ = a, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t;
		if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;
		do {
			i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (o = (g + v) / 2)) ? g = o : v = o, (s = e >= (a = (y + _) / 2)) ? y = a : _ = a
		} while ((l = s << 1 | f) == (h = (c >= a) << 1 | u >= o));
		return i[h] = d, i[l] = p, t
	}

	function oc(t, n, e, r, i) {
		this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
	}

	function ac(t) {
		return t[0]
	}

	function uc(t) {
		return t[1]
	}

	function cc(t, n, e) {
		var r = new fc(null == n ? ac : n, null == e ? uc : e, NaN, NaN, NaN, NaN);
		return null == t ? r : r.addAll(t)
	}

	function fc(t, n, e, r, i, o) {
		this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
	}

	function sc(t) {
		for (var n = {
				data: t.data
			}, e = n; t = t.next;) e = e.next = {
			data: t.data
		};
		return n
	}
	var lc = cc.prototype = fc.prototype;

	function hc(t) {
		return function() {
			return t
		}
	}

	function dc(t) {
		return 1e-6 * (t() - .5)
	}

	function pc(t) {
		return t.x + t.vx
	}

	function gc(t) {
		return t.y + t.vy
	}

	function yc(t) {
		return t.index
	}

	function vc(t, n) {
		var e = t.get(n);
		if (!e) throw new Error("node not found: " + n);
		return e
	}
	lc.copy = function() {
		var t, n, e = new fc(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
			r = this._root;
		if (!r) return e;
		if (!r.length) return e._root = sc(r), e;
		for (t = [{
				source: r,
				target: e._root = new Array(4)
			}]; r = t.pop();)
			for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
				source: n,
				target: r.target[i] = new Array(4)
			}) : r.target[i] = sc(n));
		return e
	}, lc.add = function(t) {
		const n = +this._x.call(null, t),
			e = +this._y.call(null, t);
		return ic(this.cover(n, e), n, e, t)
	}, lc.addAll = function(t) {
		var n, e, r, i, o = t.length,
			a = new Array(o),
			u = new Array(o),
			c = 1 / 0,
			f = 1 / 0,
			s = -1 / 0,
			l = -1 / 0;
		for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r, u[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
		if (c > s || f > l) return this;
		for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e) ic(this, a[e], u[e], t[e]);
		return this
	}, lc.cover = function(t, n) {
		if (isNaN(t = +t) || isNaN(n = +n)) return this;
		var e = this._x0,
			r = this._y0,
			i = this._x1,
			o = this._y1;
		if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
		else {
			for (var a, u, c = i - e || 1, f = this._root; e > t || t >= i || r > n || n >= o;) switch (u = (n < r) << 1 | t < e, (a = new Array(4))[u] = f, f = a, c *= 2, u) {
				case 0:
					i = e + c, o = r + c;
					break;
				case 1:
					e = i - c, o = r + c;
					break;
				case 2:
					i = e + c, r = o - c;
					break;
				case 3:
					e = i - c, r = o - c
			}
			this._root && this._root.length && (this._root = f)
		}
		return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
	}, lc.data = function() {
		var t = [];
		return this.visit((function(n) {
			if (!n.length)
				do {
					t.push(n.data)
				} while (n = n.next)
		})), t
	}, lc.extent = function(t) {
		return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
			[this._x0, this._y0],
			[this._x1, this._y1]
		]
	}, lc.find = function(t, n, e) {
		var r, i, o, a, u, c, f, s = this._x0,
			l = this._y0,
			h = this._x1,
			d = this._y1,
			p = [],
			g = this._root;
		for (g && p.push(new oc(g, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();)
			if (!(!(g = c.node) || (i = c.x0) > h || (o = c.y0) > d || (a = c.x1) < s || (u = c.y1) < l))
				if (g.length) {
					var y = (i + a) / 2,
						v = (o + u) / 2;
					p.push(new oc(g[3], y, v, a, u), new oc(g[2], i, v, y, u), new oc(g[1], y, o, a, v), new oc(g[0], i, o, y, v)), (f = (n >= v) << 1 | t >= y) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
				} else {
					var _ = t - +this._x.call(null, g.data),
						b = n - +this._y.call(null, g.data),
						m = _ * _ + b * b;
					if (m < e) {
						var x = Math.sqrt(e = m);
						s = t - x, l = n - x, h = t + x, d = n + x, r = g.data
					}
				} return r
	}, lc.remove = function(t) {
		if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;
		var n, e, r, i, o, a, u, c, f, s, l, h, d = this._root,
			p = this._x0,
			g = this._y0,
			y = this._x1,
			v = this._y1;
		if (!d) return this;
		if (d.length)
			for (;;) {
				if ((f = o >= (u = (p + y) / 2)) ? p = u : y = u, (s = a >= (c = (g + v) / 2)) ? g = c : v = c, n = d, !(d = d[l = s << 1 | f])) return this;
				if (!d.length) break;
				(n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
			}
		for (; d.data !== t;)
			if (r = d, !(d = d.next)) return this;
		return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this)
	}, lc.removeAll = function(t) {
		for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
		return this
	}, lc.root = function() {
		return this._root
	}, lc.size = function() {
		var t = 0;
		return this.visit((function(n) {
			if (!n.length)
				do {
					++t
				} while (n = n.next)
		})), t
	}, lc.visit = function(t) {
		var n, e, r, i, o, a, u = [],
			c = this._root;
		for (c && u.push(new oc(c, this._x0, this._y0, this._x1, this._y1)); n = u.pop();)
			if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && c.length) {
				var f = (r + o) / 2,
					s = (i + a) / 2;
				(e = c[3]) && u.push(new oc(e, f, s, o, a)), (e = c[2]) && u.push(new oc(e, r, s, f, a)), (e = c[1]) && u.push(new oc(e, f, i, o, s)), (e = c[0]) && u.push(new oc(e, r, i, f, s))
			} return this
	}, lc.visitAfter = function(t) {
		var n, e = [],
			r = [];
		for (this._root && e.push(new oc(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
			var i = n.node;
			if (i.length) {
				var o, a = n.x0,
					u = n.y0,
					c = n.x1,
					f = n.y1,
					s = (a + c) / 2,
					l = (u + f) / 2;
				(o = i[0]) && e.push(new oc(o, a, u, s, l)), (o = i[1]) && e.push(new oc(o, s, u, c, l)), (o = i[2]) && e.push(new oc(o, a, l, s, f)), (o = i[3]) && e.push(new oc(o, s, l, c, f))
			}
			r.push(n)
		}
		for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
		return this
	}, lc.x = function(t) {
		return arguments.length ? (this._x = t, this) : this._x
	}, lc.y = function(t) {
		return arguments.length ? (this._y = t, this) : this._y
	};
	const _c = 4294967296;

	function bc(t) {
		return t.x
	}

	function mc(t) {
		return t.y
	}
	var xc = Math.PI * (3 - Math.sqrt(5));

	function wc(t, n) {
		if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
		var e, r = t.slice(0, e);
		return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
	}

	function Mc(t) {
		return (t = wc(Math.abs(t))) ? t[1] : NaN
	}
	var Ac, Tc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

	function Sc(t) {
		if (!(n = Tc.exec(t))) throw new Error("invalid format: " + t);
		var n;
		return new Ec({
			fill: n[1],
			align: n[2],
			sign: n[3],
			symbol: n[4],
			zero: n[5],
			width: n[6],
			comma: n[7],
			precision: n[8] && n[8].slice(1),
			trim: n[9],
			type: n[10]
		})
	}

	function Ec(t) {
		this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
	}

	function kc(t, n) {
		var e = wc(t, n);
		if (!e) return t + "";
		var r = e[0],
			i = e[1];
		return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
	}
	Sc.prototype = Ec.prototype, Ec.prototype.toString = function() {
		return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
	};
	var Nc = {
		"%": (t, n) => (100 * t).toFixed(n),
		b: t => Math.round(t).toString(2),
		c: t => t + "",
		d: function(t) {
			return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
		},
		e: (t, n) => t.toExponential(n),
		f: (t, n) => t.toFixed(n),
		g: (t, n) => t.toPrecision(n),
		o: t => Math.round(t).toString(8),
		p: (t, n) => kc(100 * t, n),
		r: kc,
		s: function(t, n) {
			var e = wc(t, n);
			if (!e) return t + "";
			var r = e[0],
				i = e[1],
				o = i - (Ac = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
				a = r.length;
			return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + wc(t, Math.max(0, n + o - 1))[0]
		},
		X: t => Math.round(t).toString(16).toUpperCase(),
		x: t => Math.round(t).toString(16)
	};

	function Cc(t) {
		return t
	}
	var Pc, zc = Array.prototype.map,
		Dc = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

	function Rc(t) {
		var n, e, r = void 0 === t.grouping || void 0 === t.thousands ? Cc : (n = zc.call(t.grouping, Number), e = t.thousands + "", function(t, r) {
				for (var i = t.length, o = [], a = 0, u = n[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(t.substring(i -= u, i + u)), !((c += u + 1) > r));) u = n[a = (a + 1) % n.length];
				return o.reverse().join(e)
			}),
			i = void 0 === t.currency ? "" : t.currency[0] + "",
			o = void 0 === t.currency ? "" : t.currency[1] + "",
			a = void 0 === t.decimal ? "." : t.decimal + "",
			u = void 0 === t.numerals ? Cc : function(t) {
				return function(n) {
					return n.replace(/[0-9]/g, (function(n) {
						return t[+n]
					}))
				}
			}(zc.call(t.numerals, String)),
			c = void 0 === t.percent ? "%" : t.percent + "",
			f = void 0 === t.minus ? "−" : t.minus + "",
			s = void 0 === t.nan ? "NaN" : t.nan + "";

		function l(t) {
			var n = (t = Sc(t)).fill,
				e = t.align,
				l = t.sign,
				h = t.symbol,
				d = t.zero,
				p = t.width,
				g = t.comma,
				y = t.precision,
				v = t.trim,
				_ = t.type;
			"n" === _ ? (g = !0, _ = "g") : Nc[_] || (void 0 === y && (y = 12), v = !0, _ = "g"), (d || "0" === n && "=" === e) && (d = !0, n = "0", e = "=");
			var b = "$" === h ? i : "#" === h && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "",
				m = "$" === h ? o : /[%p]/.test(_) ? c : "",
				x = Nc[_],
				w = /[defgprs%]/.test(_);

			function M(t) {
				var i, o, c, h = b,
					M = m;
				if ("c" === _) M = x(t) + M, t = "";
				else {
					var A = (t = +t) < 0 || 1 / t < 0;
					if (t = isNaN(t) ? s : x(Math.abs(t), y), v && (t = function(t) {
							t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
								case ".":
									i = n = r;
									break;
								case "0":
									0 === i && (i = r), n = r;
									break;
								default:
									if (!+t[r]) break t;
									i > 0 && (i = 0)
							}
							return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
						}(t)), A && 0 == +t && "+" !== l && (A = !1), h = (A ? "(" === l ? l : f : "-" === l || "(" === l ? "" : l) + h, M = ("s" === _ ? Dc[8 + Ac / 3] : "") + M + (A && "(" === l ? ")" : ""), w)
						for (i = -1, o = t.length; ++i < o;)
							if (48 > (c = t.charCodeAt(i)) || c > 57) {
								M = (46 === c ? a + t.slice(i + 1) : t.slice(i)) + M, t = t.slice(0, i);
								break
							}
				}
				g && !d && (t = r(t, 1 / 0));
				var T = h.length + t.length + M.length,
					S = T < p ? new Array(p - T + 1).join(n) : "";
				switch (g && d && (t = r(S + t, S.length ? p - M.length : 1 / 0), S = ""), e) {
					case "<":
						t = h + t + M + S;
						break;
					case "=":
						t = h + S + t + M;
						break;
					case "^":
						t = S.slice(0, T = S.length >> 1) + h + t + M + S.slice(T);
						break;
					default:
						t = S + h + t + M
				}
				return u(t)
			}
			return y = void 0 === y ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y)), M.toString = function() {
				return t + ""
			}, M
		}
		return {
			format: l,
			formatPrefix: function(t, n) {
				var e = l(((t = Sc(t)).type = "f", t)),
					r = 3 * Math.max(-8, Math.min(8, Math.floor(Mc(n) / 3))),
					i = Math.pow(10, -r),
					o = Dc[8 + r / 3];
				return function(t) {
					return e(i * t) + o
				}
			}
		}
	}

	function Fc(n) {
		return Pc = Rc(n), t.format = Pc.format, t.formatPrefix = Pc.formatPrefix, Pc
	}

	function qc(t) {
		return Math.max(0, -Mc(Math.abs(t)))
	}

	function Oc(t, n) {
		return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Mc(n) / 3))) - Mc(Math.abs(t)))
	}

	function Uc(t, n) {
		return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Mc(n) - Mc(t)) + 1
	}
	t.format = void 0, t.formatPrefix = void 0, Fc({
		thousands: ",",
		grouping: [3],
		currency: ["$", ""]
	});
	var Ic = 1e-6,
		Bc = 1e-12,
		Yc = Math.PI,
		Lc = Yc / 2,
		jc = Yc / 4,
		$c = 2 * Yc,
		Hc = 180 / Yc,
		Xc = Yc / 180,
		Gc = Math.abs,
		Vc = Math.atan,
		Wc = Math.atan2,
		Zc = Math.cos,
		Kc = Math.ceil,
		Qc = Math.exp,
		Jc = Math.hypot,
		tf = Math.log,
		nf = Math.pow,
		ef = Math.sin,
		rf = Math.sign || function(t) {
			return t > 0 ? 1 : t < 0 ? -1 : 0
		},
		of = Math.sqrt,
		af = Math.tan;

	function uf(t) {
		return t > 1 ? 0 : t < -1 ? Yc : Math.acos(t)
	}

	function cf(t) {
		return t > 1 ? Lc : t < -1 ? -Lc : Math.asin(t)
	}

	function ff(t) {
		return (t = ef(t / 2)) * t
	}

	function sf() {}

	function lf(t, n) {
		t && df.hasOwnProperty(t.type) && df[t.type](t, n)
	}
	var hf = {
			Feature: function(t, n) {
				lf(t.geometry, n)
			},
			FeatureCollection: function(t, n) {
				for (var e = t.features, r = -1, i = e.length; ++r < i;) lf(e[r].geometry, n)
			}
		},
		df = {
			Sphere: function(t, n) {
				n.sphere()
			},
			Point: function(t, n) {
				t = t.coordinates, n.point(t[0], t[1], t[2])
			},
			MultiPoint: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
			},
			LineString: function(t, n) {
				pf(t.coordinates, n, 0)
			},
			MultiLineString: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) pf(e[r], n, 0)
			},
			Polygon: function(t, n) {
				gf(t.coordinates, n)
			},
			MultiPolygon: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) gf(e[r], n)
			},
			GeometryCollection: function(t, n) {
				for (var e = t.geometries, r = -1, i = e.length; ++r < i;) lf(e[r], n)
			}
		};

	function pf(t, n, e) {
		var r, i = -1,
			o = t.length - e;
		for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
		n.lineEnd()
	}

	function gf(t, n) {
		var e = -1,
			r = t.length;
		for (n.polygonStart(); ++e < r;) pf(t[e], n, 1);
		n.polygonEnd()
	}

	function yf(t, n) {
		t && hf.hasOwnProperty(t.type) ? hf[t.type](t, n) : lf(t, n)
	}
	var vf, _f, bf, mf, xf, wf, Mf, Af, Tf, Sf, Ef, kf, Nf, Cf, Pf, zf, Df = new _,
		Rf = new _,
		Ff = {
			point: sf,
			lineStart: sf,
			lineEnd: sf,
			polygonStart: function() {
				Df = new _, Ff.lineStart = qf, Ff.lineEnd = Of
			},
			polygonEnd: function() {
				var t = +Df;
				Rf.add(t < 0 ? $c + t : t), this.lineStart = this.lineEnd = this.point = sf
			},
			sphere: function() {
				Rf.add($c)
			}
		};

	function qf() {
		Ff.point = Uf
	}

	function Of() {
		If(vf, _f)
	}

	function Uf(t, n) {
		Ff.point = If, vf = t, _f = n, bf = t *= Xc, mf = Zc(n = (n *= Xc) / 2 + jc), xf = ef(n)
	}

	function If(t, n) {
		var e = (t *= Xc) - bf,
			r = e >= 0 ? 1 : -1,
			i = r * e,
			o = Zc(n = (n *= Xc) / 2 + jc),
			a = ef(n),
			u = xf * a,
			c = mf * o + u * Zc(i),
			f = u * r * ef(i);
		Df.add(Wc(f, c)), bf = t, mf = o, xf = a
	}

	function Bf(t) {
		return [Wc(t[1], t[0]), cf(t[2])]
	}

	function Yf(t) {
		var n = t[0],
			e = t[1],
			r = Zc(e);
		return [r * Zc(n), r * ef(n), ef(e)]
	}

	function Lf(t, n) {
		return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
	}

	function jf(t, n) {
		return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
	}

	function $f(t, n) {
		t[0] += n[0], t[1] += n[1], t[2] += n[2]
	}

	function Hf(t, n) {
		return [t[0] * n, t[1] * n, t[2] * n]
	}

	function Xf(t) {
		var n = of (t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
		t[0] /= n, t[1] /= n, t[2] /= n
	}
	var Gf, Vf, Wf, Zf, Kf, Qf, Jf, ts, ns, es, rs, is, os, as, us, cs, fs = {
		point: ss,
		lineStart: hs,
		lineEnd: ds,
		polygonStart: function() {
			fs.point = ps, fs.lineStart = gs, fs.lineEnd = ys, Cf = new _, Ff.polygonStart()
		},
		polygonEnd: function() {
			Ff.polygonEnd(), fs.point = ss, fs.lineStart = hs, fs.lineEnd = ds, Df < 0 ? (wf = -(Af = 180), Mf = -(Tf = 90)) : Cf > Ic ? Tf = 90 : Cf < -1e-6 && (Mf = -90), zf[0] = wf, zf[1] = Af
		},
		sphere: function() {
			wf = -(Af = 180), Mf = -(Tf = 90)
		}
	};

	function ss(t, n) {
		Pf.push(zf = [wf = t, Af = t]), n < Mf && (Mf = n), n > Tf && (Tf = n)
	}

	function ls(t, n) {
		var e = Yf([t * Xc, n * Xc]);
		if (Nf) {
			var r = jf(Nf, e),
				i = jf([r[1], -r[0], 0], r);
			Xf(i), i = Bf(i);
			var o, a = t - Sf,
				u = a > 0 ? 1 : -1,
				c = i[0] * Hc * u,
				f = Gc(a) > 180;
			f ^ (u * Sf < c && c < u * t) ? (o = i[1] * Hc) > Tf && (Tf = o) : f ^ (u * Sf < (c = (c + 360) % 360 - 180) && c < u * t) ? (o = -i[1] * Hc) < Mf && (Mf = o) : (n < Mf && (Mf = n), n > Tf && (Tf = n)), f ? t < Sf ? vs(wf, t) > vs(wf, Af) && (Af = t) : vs(t, Af) > vs(wf, Af) && (wf = t) : Af >= wf ? (t < wf && (wf = t), t > Af && (Af = t)) : t > Sf ? vs(wf, t) > vs(wf, Af) && (Af = t) : vs(t, Af) > vs(wf, Af) && (wf = t)
		} else Pf.push(zf = [wf = t, Af = t]);
		n < Mf && (Mf = n), n > Tf && (Tf = n), Nf = e, Sf = t
	}

	function hs() {
		fs.point = ls
	}

	function ds() {
		zf[0] = wf, zf[1] = Af, fs.point = ss, Nf = null
	}

	function ps(t, n) {
		if (Nf) {
			var e = t - Sf;
			Cf.add(Gc(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
		} else Ef = t, kf = n;
		Ff.point(t, n), ls(t, n)
	}

	function gs() {
		Ff.lineStart()
	}

	function ys() {
		ps(Ef, kf), Ff.lineEnd(), Gc(Cf) > Ic && (wf = -(Af = 180)), zf[0] = wf, zf[1] = Af, Nf = null
	}

	function vs(t, n) {
		return (n -= t) < 0 ? n + 360 : n
	}

	function _s(t, n) {
		return t[0] - n[0]
	}

	function bs(t, n) {
		return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
	}
	var ms = {
		sphere: sf,
		point: xs,
		lineStart: Ms,
		lineEnd: Ss,
		polygonStart: function() {
			ms.lineStart = Es, ms.lineEnd = ks
		},
		polygonEnd: function() {
			ms.lineStart = Ms, ms.lineEnd = Ss
		}
	};

	function xs(t, n) {
		t *= Xc;
		var e = Zc(n *= Xc);
		ws(e * Zc(t), e * ef(t), ef(n))
	}

	function ws(t, n, e) {
		++Gf, Wf += (t - Wf) / Gf, Zf += (n - Zf) / Gf, Kf += (e - Kf) / Gf
	}

	function Ms() {
		ms.point = As
	}

	function As(t, n) {
		t *= Xc;
		var e = Zc(n *= Xc);
		as = e * Zc(t), us = e * ef(t), cs = ef(n), ms.point = Ts, ws(as, us, cs)
	}

	function Ts(t, n) {
		t *= Xc;
		var e = Zc(n *= Xc),
			r = e * Zc(t),
			i = e * ef(t),
			o = ef(n),
			a = Wc( of ((a = us * o - cs * i) * a + (a = cs * r - as * o) * a + (a = as * i - us * r) * a), as * r + us * i + cs * o);
		Vf += a, Qf += a * (as + (as = r)), Jf += a * (us + (us = i)), ts += a * (cs + (cs = o)), ws(as, us, cs)
	}

	function Ss() {
		ms.point = xs
	}

	function Es() {
		ms.point = Ns
	}

	function ks() {
		Cs(is, os), ms.point = xs
	}

	function Ns(t, n) {
		is = t, os = n, t *= Xc, n *= Xc, ms.point = Cs;
		var e = Zc(n);
		as = e * Zc(t), us = e * ef(t), cs = ef(n), ws(as, us, cs)
	}

	function Cs(t, n) {
		t *= Xc;
		var e = Zc(n *= Xc),
			r = e * Zc(t),
			i = e * ef(t),
			o = ef(n),
			a = us * o - cs * i,
			u = cs * r - as * o,
			c = as * i - us * r,
			f = Jc(a, u, c),
			s = cf(f),
			l = f && -s / f;
		ns.add(l * a), es.add(l * u), rs.add(l * c), Vf += s, Qf += s * (as + (as = r)), Jf += s * (us + (us = i)), ts += s * (cs + (cs = o)), ws(as, us, cs)
	}

	function Ps(t) {
		return function() {
			return t
		}
	}

	function zs(t, n) {
		function e(e, r) {
			return e = t(e, r), n(e[0], e[1])
		}
		return t.invert && n.invert && (e.invert = function(e, r) {
			return (e = n.invert(e, r)) && t.invert(e[0], e[1])
		}), e
	}

	function Ds(t, n) {
		return [Gc(t) > Yc ? t + Math.round(-t / $c) * $c : t, n]
	}

	function Rs(t, n, e) {
		return (t %= $c) ? n || e ? zs(qs(t), Os(n, e)) : qs(t) : n || e ? Os(n, e) : Ds
	}

	function Fs(t) {
		return function(n, e) {
			return [(n += t) > Yc ? n - $c : n < -Yc ? n + $c : n, e]
		}
	}

	function qs(t) {
		var n = Fs(t);
		return n.invert = Fs(-t), n
	}

	function Os(t, n) {
		var e = Zc(t),
			r = ef(t),
			i = Zc(n),
			o = ef(n);

		function a(t, n) {
			var a = Zc(n),
				u = Zc(t) * a,
				c = ef(t) * a,
				f = ef(n),
				s = f * e + u * r;
			return [Wc(c * i - s * o, u * e - f * r), cf(s * i + c * o)]
		}
		return a.invert = function(t, n) {
			var a = Zc(n),
				u = Zc(t) * a,
				c = ef(t) * a,
				f = ef(n),
				s = f * i - c * o;
			return [Wc(c * i + f * o, u * e + s * r), cf(s * e - u * r)]
		}, a
	}

	function Us(t) {
		function n(n) {
			return (n = t(n[0] * Xc, n[1] * Xc))[0] *= Hc, n[1] *= Hc, n
		}
		return t = Rs(t[0] * Xc, t[1] * Xc, t.length > 2 ? t[2] * Xc : 0), n.invert = function(n) {
			return (n = t.invert(n[0] * Xc, n[1] * Xc))[0] *= Hc, n[1] *= Hc, n
		}, n
	}

	function Is(t, n, e, r, i, o) {
		if (e) {
			var a = Zc(n),
				u = ef(n),
				c = r * e;
			null == i ? (i = n + r * $c, o = n - c / 2) : (i = Bs(a, i), o = Bs(a, o), (r > 0 ? i < o : i > o) && (i += r * $c));
			for (var f, s = i; r > 0 ? s > o : s < o; s -= c) f = Bf([a, -u * Zc(s), -u * ef(s)]), t.point(f[0], f[1])
		}
	}

	function Bs(t, n) {
		(n = Yf(n))[0] -= t, Xf(n);
		var e = uf(-n[1]);
		return ((-n[2] < 0 ? -e : e) + $c - Ic) % $c
	}

	function Ys() {
		var t, n = [];
		return {
			point: function(n, e, r) {
				t.push([n, e, r])
			},
			lineStart: function() {
				n.push(t = [])
			},
			lineEnd: sf,
			rejoin: function() {
				n.length > 1 && n.push(n.pop().concat(n.shift()))
			},
			result: function() {
				var e = n;
				return n = [], t = null, e
			}
		}
	}

	function Ls(t, n) {
		return Gc(t[0] - n[0]) < Ic && Gc(t[1] - n[1]) < Ic
	}

	function js(t, n, e, r) {
		this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
	}

	function $s(t, n, e, r, i) {
		var o, a, u = [],
			c = [];
		if (t.forEach((function(t) {
				if (!((n = t.length - 1) <= 0)) {
					var n, e, r = t[0],
						a = t[n];
					if (Ls(r, a)) {
						if (!r[2] && !a[2]) {
							for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
							return void i.lineEnd()
						}
						a[0] += 2e-6
					}
					u.push(e = new js(r, t, null, !0)), c.push(e.o = new js(r, null, e, !1)), u.push(e = new js(a, t, null, !1)), c.push(e.o = new js(a, null, e, !0))
				}
			})), u.length) {
			for (c.sort(n), Hs(u), Hs(c), o = 0, a = c.length; o < a; ++o) c[o].e = e = !e;
			for (var f, s, l = u[0];;) {
				for (var h = l, d = !0; h.v;)
					if ((h = h.n) === l) return;
				f = h.z, i.lineStart();
				do {
					if (h.v = h.o.v = !0, h.e) {
						if (d)
							for (o = 0, a = f.length; o < a; ++o) i.point((s = f[o])[0], s[1]);
						else r(h.x, h.n.x, 1, i);
						h = h.n
					} else {
						if (d)
							for (f = h.p.z, o = f.length - 1; o >= 0; --o) i.point((s = f[o])[0], s[1]);
						else r(h.x, h.p.x, -1, i);
						h = h.p
					}
					f = (h = h.o).z, d = !d
				} while (!h.v);
				i.lineEnd()
			}
		}
	}

	function Hs(t) {
		if (n = t.length) {
			for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
			i.n = e = t[0], e.p = i
		}
	}

	function Xs(t) {
		return Gc(t[0]) <= Yc ? t[0] : rf(t[0]) * ((Gc(t[0]) + Yc) % $c - Yc)
	}

	function Gs(t, n) {
		var e = Xs(n),
			r = n[1],
			i = ef(r),
			o = [ef(e), -Zc(e), 0],
			a = 0,
			u = 0,
			c = new _;
		1 === i ? r = Lc + Ic : -1 === i && (r = -Lc - Ic);
		for (var f = 0, s = t.length; f < s; ++f)
			if (h = (l = t[f]).length)
				for (var l, h, d = l[h - 1], p = Xs(d), g = d[1] / 2 + jc, y = ef(g), v = Zc(g), b = 0; b < h; ++b, p = x, y = M, v = A, d = m) {
					var m = l[b],
						x = Xs(m),
						w = m[1] / 2 + jc,
						M = ef(w),
						A = Zc(w),
						T = x - p,
						S = T >= 0 ? 1 : -1,
						E = S * T,
						k = E > Yc,
						N = y * M;
					if (c.add(Wc(N * S * ef(E), v * A + N * Zc(E))), a += k ? T + S * $c : T, k ^ p >= e ^ x >= e) {
						var C = jf(Yf(d), Yf(m));
						Xf(C);
						var P = jf(o, C);
						Xf(P);
						var z = (k ^ T >= 0 ? -1 : 1) * cf(P[2]);
						(r > z || r === z && (C[0] || C[1])) && (u += k ^ T >= 0 ? 1 : -1)
					}
				}
		return (a < -1e-6 || a < Ic && c < -1e-12) ^ 1 & u
	}

	function Vs(t, n, e, r) {
		return function(i) {
			var o, a, u, c = n(i),
				f = Ys(),
				s = n(f),
				l = !1,
				h = {
					point: d,
					lineStart: g,
					lineEnd: y,
					polygonStart: function() {
						h.point = v, h.lineStart = _, h.lineEnd = b, a = [], o = []
					},
					polygonEnd: function() {
						h.point = d, h.lineStart = g, h.lineEnd = y, a = J(a);
						var t = Gs(o, r);
						a.length ? (l || (i.polygonStart(), l = !0), $s(a, Zs, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), a = o = null
					},
					sphere: function() {
						i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
					}
				};

			function d(n, e) {
				t(n, e) && i.point(n, e)
			}

			function p(t, n) {
				c.point(t, n)
			}

			function g() {
				h.point = p, c.lineStart()
			}

			function y() {
				h.point = d, c.lineEnd()
			}

			function v(t, n) {
				u.push([t, n]), s.point(t, n)
			}

			function _() {
				s.lineStart(), u = []
			}

			function b() {
				v(u[0][0], u[0][1]), s.lineEnd();
				var t, n, e, r, c = s.clean(),
					h = f.result(),
					d = h.length;
				if (u.pop(), o.push(u), u = null, d)
					if (1 & c) {
						if ((n = (e = h[0]).length - 1) > 0) {
							for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
							i.lineEnd()
						}
					} else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(Ws))
			}
			return h
		}
	}

	function Ws(t) {
		return t.length > 1
	}

	function Zs(t, n) {
		return ((t = t.x)[0] < 0 ? t[1] - Lc - Ic : Lc - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Lc - Ic : Lc - n[1])
	}
	Ds.invert = Ds;
	var Ks = Vs((function() {
		return !0
	}), (function(t) {
		var n, e = NaN,
			r = NaN,
			i = NaN;
		return {
			lineStart: function() {
				t.lineStart(), n = 1
			},
			point: function(o, a) {
				var u = o > 0 ? Yc : -Yc,
					c = Gc(o - e);
				Gc(c - Yc) < Ic ? (t.point(e, r = (r + a) / 2 > 0 ? Lc : -Lc), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && c >= Yc && (Gc(e - i) < Ic && (e -= i * Ic), Gc(o - u) < Ic && (o -= u * Ic), r = function(t, n, e, r) {
					var i, o, a = ef(t - e);
					return Gc(a) > Ic ? Vc((ef(n) * (o = Zc(r)) * ef(e) - ef(r) * (i = Zc(n)) * ef(t)) / (i * o * a)) : (n + r) / 2
				}(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u
			},
			lineEnd: function() {
				t.lineEnd(), e = r = NaN
			},
			clean: function() {
				return 2 - n
			}
		}
	}), (function(t, n, e, r) {
		var i;
		if (null == t) i = e * Lc, r.point(-Yc, i), r.point(0, i), r.point(Yc, i), r.point(Yc, 0), r.point(Yc, -i), r.point(0, -i), r.point(-Yc, -i), r.point(-Yc, 0), r.point(-Yc, i);
		else if (Gc(t[0] - n[0]) > Ic) {
			var o = t[0] < n[0] ? Yc : -Yc;
			i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
		} else r.point(n[0], n[1])
	}), [-Yc, -Lc]);

	function Qs(t) {
		var n = Zc(t),
			e = 6 * Xc,
			r = n > 0,
			i = Gc(n) > Ic;

		function o(t, e) {
			return Zc(t) * Zc(e) > n
		}

		function a(t, e, r) {
			var i = [1, 0, 0],
				o = jf(Yf(t), Yf(e)),
				a = Lf(o, o),
				u = o[0],
				c = a - u * u;
			if (!c) return !r && t;
			var f = n * a / c,
				s = -n * u / c,
				l = jf(i, o),
				h = Hf(i, f);
			$f(h, Hf(o, s));
			var d = l,
				p = Lf(h, d),
				g = Lf(d, d),
				y = p * p - g * (Lf(h, h) - 1);
			if (!(y < 0)) {
				var v = of (y),
					_ = Hf(d, (-p - v) / g);
				if ($f(_, h), _ = Bf(_), !r) return _;
				var b, m = t[0],
					x = e[0],
					w = t[1],
					M = e[1];
				x < m && (b = m, m = x, x = b);
				var A = x - m,
					T = Gc(A - Yc) < Ic;
				if (!T && M < w && (b = w, w = M, M = b), T || A < Ic ? T ? w + M > 0 ^ _[1] < (Gc(_[0] - m) < Ic ? w : M) : w <= _[1] && _[1] <= M : A > Yc ^ (m <= _[0] && _[0] <= x)) {
					var S = Hf(d, (-p + v) / g);
					return $f(S, h), [_, Bf(S)]
				}
			}
		}

		function u(n, e) {
			var i = r ? t : Yc - t,
				o = 0;
			return n < -i ? o |= 1 : n > i && (o |= 2), e < -i ? o |= 4 : e > i && (o |= 8), o
		}
		return Vs(o, (function(t) {
			var n, e, c, f, s;
			return {
				lineStart: function() {
					f = c = !1, s = 1
				},
				point: function(l, h) {
					var d, p = [l, h],
						g = o(l, h),
						y = r ? g ? 0 : u(l, h) : g ? u(l + (l < 0 ? Yc : -Yc), h) : 0;
					if (!n && (f = c = g) && t.lineStart(), g !== c && (!(d = a(n, p)) || Ls(n, d) || Ls(p, d)) && (p[2] = 1), g !== c) s = 0, g ? (t.lineStart(), d = a(p, n), t.point(d[0], d[1])) : (d = a(n, p), t.point(d[0], d[1], 2), t.lineEnd()), n = d;
					else if (i && n && r ^ g) {
						var v;
						y & e || !(v = a(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(v[0][0], v[0][1]), t.point(v[1][0], v[1][1]), t.lineEnd()) : (t.point(v[1][0], v[1][1]), t.lineEnd(), t.lineStart(), t.point(v[0][0], v[0][1], 3)))
					}!g || n && Ls(n, p) || t.point(p[0], p[1]), n = p, c = g, e = y
				},
				lineEnd: function() {
					c && t.lineEnd(), n = null
				},
				clean: function() {
					return s | (f && c) << 1
				}
			}
		}), (function(n, r, i, o) {
			Is(o, t, e, i, n, r)
		}), r ? [0, -t] : [-Yc, t - Yc])
	}
	var Js, tl, nl, el, rl = 1e9,
		il = -rl;

	function ol(t, n, e, r) {
		function i(i, o) {
			return t <= i && i <= e && n <= o && o <= r
		}

		function o(i, o, u, f) {
			var s = 0,
				l = 0;
			if (null == i || (s = a(i, u)) !== (l = a(o, u)) || c(i, o) < 0 ^ u > 0)
				do {
					f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
				} while ((s = (s + u + 4) % 4) !== l);
			else f.point(o[0], o[1])
		}

		function a(r, i) {
			return Gc(r[0] - t) < Ic ? i > 0 ? 0 : 3 : Gc(r[0] - e) < Ic ? i > 0 ? 2 : 1 : Gc(r[1] - n) < Ic ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
		}

		function u(t, n) {
			return c(t.x, n.x)
		}

		function c(t, n) {
			var e = a(t, 1),
				r = a(n, 1);
			return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
		}
		return function(a) {
			var c, f, s, l, h, d, p, g, y, v, _, b = a,
				m = Ys(),
				x = {
					point: w,
					lineStart: function() {
						x.point = M, f && f.push(s = []);
						v = !0, y = !1, p = g = NaN
					},
					lineEnd: function() {
						c && (M(l, h), d && y && m.rejoin(), c.push(m.result()));
						x.point = w, y && b.lineEnd()
					},
					polygonStart: function() {
						b = m, c = [], f = [], _ = !0
					},
					polygonEnd: function() {
						var n = function() {
								for (var n = 0, e = 0, i = f.length; e < i; ++e)
									for (var o, a, u = f[e], c = 1, s = u.length, l = u[0], h = l[0], d = l[1]; c < s; ++c) o = h, a = d, h = (l = u[c])[0], d = l[1], a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;
								return n
							}(),
							e = _ && n,
							i = (c = J(c)).length;
						(e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && $s(c, u, n, o, a), a.polygonEnd());
						b = a, c = f = s = null
					}
				};

			function w(t, n) {
				i(t, n) && b.point(t, n)
			}

			function M(o, a) {
				var u = i(o, a);
				if (f && s.push([o, a]), v) l = o, h = a, d = u, v = !1, u && (b.lineStart(), b.point(o, a));
				else if (u && y) b.point(o, a);
				else {
					var c = [p = Math.max(il, Math.min(rl, p)), g = Math.max(il, Math.min(rl, g))],
						m = [o = Math.max(il, Math.min(rl, o)), a = Math.max(il, Math.min(rl, a))];
					! function(t, n, e, r, i, o) {
						var a, u = t[0],
							c = t[1],
							f = 0,
							s = 1,
							l = n[0] - u,
							h = n[1] - c;
						if (a = e - u, l || !(a > 0)) {
							if (a /= l, l < 0) {
								if (a < f) return;
								a < s && (s = a)
							} else if (l > 0) {
								if (a > s) return;
								a > f && (f = a)
							}
							if (a = i - u, l || !(a < 0)) {
								if (a /= l, l < 0) {
									if (a > s) return;
									a > f && (f = a)
								} else if (l > 0) {
									if (a < f) return;
									a < s && (s = a)
								}
								if (a = r - c, h || !(a > 0)) {
									if (a /= h, h < 0) {
										if (a < f) return;
										a < s && (s = a)
									} else if (h > 0) {
										if (a > s) return;
										a > f && (f = a)
									}
									if (a = o - c, h || !(a < 0)) {
										if (a /= h, h < 0) {
											if (a > s) return;
											a > f && (f = a)
										} else if (h > 0) {
											if (a < f) return;
											a < s && (s = a)
										}
										return f > 0 && (t[0] = u + f * l, t[1] = c + f * h), s < 1 && (n[0] = u + s * l, n[1] = c + s * h), !0
									}
								}
							}
						}
					}(c, m, t, n, e, r) ? u && (b.lineStart(), b.point(o, a), _ = !1): (y || (b.lineStart(), b.point(c[0], c[1])), b.point(m[0], m[1]), u || b.lineEnd(), _ = !1)
				}
				p = o, g = a, y = u
			}
			return x
		}
	}
	var al = {
		sphere: sf,
		point: sf,
		lineStart: function() {
			al.point = cl, al.lineEnd = ul
		},
		lineEnd: sf,
		polygonStart: sf,
		polygonEnd: sf
	};

	function ul() {
		al.point = al.lineEnd = sf
	}

	function cl(t, n) {
		tl = t *= Xc, nl = ef(n *= Xc), el = Zc(n), al.point = fl
	}

	function fl(t, n) {
		t *= Xc;
		var e = ef(n *= Xc),
			r = Zc(n),
			i = Gc(t - tl),
			o = Zc(i),
			a = r * ef(i),
			u = el * e - nl * r * o,
			c = nl * e + el * r * o;
		Js.add(Wc( of (a * a + u * u), c)), tl = t, nl = e, el = r
	}

	function sl(t) {
		return Js = new _, yf(t, al), +Js
	}
	var ll = [null, null],
		hl = {
			type: "LineString",
			coordinates: ll
		};

	function dl(t, n) {
		return ll[0] = t, ll[1] = n, sl(hl)
	}
	var pl = {
			Feature: function(t, n) {
				return yl(t.geometry, n)
			},
			FeatureCollection: function(t, n) {
				for (var e = t.features, r = -1, i = e.length; ++r < i;)
					if (yl(e[r].geometry, n)) return !0;
				return !1
			}
		},
		gl = {
			Sphere: function() {
				return !0
			},
			Point: function(t, n) {
				return vl(t.coordinates, n)
			},
			MultiPoint: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
					if (vl(e[r], n)) return !0;
				return !1
			},
			LineString: function(t, n) {
				return _l(t.coordinates, n)
			},
			MultiLineString: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
					if (_l(e[r], n)) return !0;
				return !1
			},
			Polygon: function(t, n) {
				return bl(t.coordinates, n)
			},
			MultiPolygon: function(t, n) {
				for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
					if (bl(e[r], n)) return !0;
				return !1
			},
			GeometryCollection: function(t, n) {
				for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
					if (yl(e[r], n)) return !0;
				return !1
			}
		};

	function yl(t, n) {
		return !(!t || !gl.hasOwnProperty(t.type)) && gl[t.type](t, n)
	}

	function vl(t, n) {
		return 0 === dl(t, n)
	}

	function _l(t, n) {
		for (var e, r, i, o = 0, a = t.length; o < a; o++) {
			if (0 === (r = dl(t[o], n))) return !0;
			if (o > 0 && (i = dl(t[o], t[o - 1])) > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < Bc * i) return !0;
			e = r
		}
		return !1
	}

	function bl(t, n) {
		return !!Gs(t.map(ml), xl(n))
	}

	function ml(t) {
		return (t = t.map(xl)).pop(), t
	}

	function xl(t) {
		return [t[0] * Xc, t[1] * Xc]
	}

	function wl(t, n, e) {
		var r = et(t, n - Ic, e).concat(n);
		return function(t) {
			return r.map((function(n) {
				return [t, n]
			}))
		}
	}

	function Ml(t, n, e) {
		var r = et(t, n - Ic, e).concat(n);
		return function(t) {
			return r.map((function(n) {
				return [n, t]
			}))
		}
	}

	function Al() {
		var t, n, e, r, i, o, a, u, c, f, s, l, h = 10,
			d = h,
			p = 90,
			g = 360,
			y = 2.5;

		function v() {
			return {
				type: "MultiLineString",
				coordinates: _()
			}
		}

		function _() {
			return et(Kc(r / p) * p, e, p).map(s).concat(et(Kc(u / g) * g, a, g).map(l)).concat(et(Kc(n / h) * h, t, h).filter((function(t) {
				return Gc(t % p) > Ic
			})).map(c)).concat(et(Kc(o / d) * d, i, d).filter((function(t) {
				return Gc(t % g) > Ic
			})).map(f))
		}
		return v.lines = function() {
			return _().map((function(t) {
				return {
					type: "LineString",
					coordinates: t
				}
			}))
		}, v.outline = function() {
			return {
				type: "Polygon",
				coordinates: [s(r).concat(l(a).slice(1), s(e).reverse().slice(1), l(u).reverse().slice(1))]
			}
		}, v.extent = function(t) {
			return arguments.length ? v.extentMajor(t).extentMinor(t) : v.extentMinor()
		}, v.extentMajor = function(t) {
			return arguments.length ? (r = +t[0][0], e = +t[1][0], u = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), u > a && (t = u, u = a, a = t), v.precision(y)) : [
				[r, u],
				[e, a]
			]
		}, v.extentMinor = function(e) {
			return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), o > i && (e = o, o = i, i = e), v.precision(y)) : [
				[n, o],
				[t, i]
			]
		}, v.step = function(t) {
			return arguments.length ? v.stepMajor(t).stepMinor(t) : v.stepMinor()
		}, v.stepMajor = function(t) {
			return arguments.length ? (p = +t[0], g = +t[1], v) : [p, g]
		}, v.stepMinor = function(t) {
			return arguments.length ? (h = +t[0], d = +t[1], v) : [h, d]
		}, v.precision = function(h) {
			return arguments.length ? (y = +h, c = wl(o, i, 90), f = Ml(n, t, y), s = wl(u, a, 90), l = Ml(r, e, y), v) : y
		}, v.extentMajor([
			[-180, -89.999999],
			[180, 89.999999]
		]).extentMinor([
			[-180, -80.000001],
			[180, 80.000001]
		])
	}
	var Tl, Sl, El, kl, Nl = t => t,
		Cl = new _,
		Pl = new _,
		zl = {
			point: sf,
			lineStart: sf,
			lineEnd: sf,
			polygonStart: function() {
				zl.lineStart = Dl, zl.lineEnd = ql
			},
			polygonEnd: function() {
				zl.lineStart = zl.lineEnd = zl.point = sf, Cl.add(Gc(Pl)), Pl = new _
			},
			result: function() {
				var t = Cl / 2;
				return Cl = new _, t
			}
		};

	function Dl() {
		zl.point = Rl
	}

	function Rl(t, n) {
		zl.point = Fl, Tl = El = t, Sl = kl = n
	}

	function Fl(t, n) {
		Pl.add(kl * t - El * n), El = t, kl = n
	}

	function ql() {
		Fl(Tl, Sl)
	}
	var Ol = zl,
		Ul = 1 / 0,
		Il = Ul,
		Bl = -Ul,
		Yl = Bl,
		Ll = {
			point: function(t, n) {
				t < Ul && (Ul = t);
				t > Bl && (Bl = t);
				n < Il && (Il = n);
				n > Yl && (Yl = n)
			},
			lineStart: sf,
			lineEnd: sf,
			polygonStart: sf,
			polygonEnd: sf,
			result: function() {
				var t = [
					[Ul, Il],
					[Bl, Yl]
				];
				return Bl = Yl = -(Il = Ul = 1 / 0), t
			}
		};
	var jl, $l, Hl, Xl, Gl = Ll,
		Vl = 0,
		Wl = 0,
		Zl = 0,
		Kl = 0,
		Ql = 0,
		Jl = 0,
		th = 0,
		nh = 0,
		eh = 0,
		rh = {
			point: ih,
			lineStart: oh,
			lineEnd: ch,
			polygonStart: function() {
				rh.lineStart = fh, rh.lineEnd = sh
			},
			polygonEnd: function() {
				rh.point = ih, rh.lineStart = oh, rh.lineEnd = ch
			},
			result: function() {
				var t = eh ? [th / eh, nh / eh] : Jl ? [Kl / Jl, Ql / Jl] : Zl ? [Vl / Zl, Wl / Zl] : [NaN, NaN];
				return Vl = Wl = Zl = Kl = Ql = Jl = th = nh = eh = 0, t
			}
		};

	function ih(t, n) {
		Vl += t, Wl += n, ++Zl
	}

	function oh() {
		rh.point = ah
	}

	function ah(t, n) {
		rh.point = uh, ih(Hl = t, Xl = n)
	}

	function uh(t, n) {
		var e = t - Hl,
			r = n - Xl,
			i = of (e * e + r * r);
		Kl += i * (Hl + t) / 2, Ql += i * (Xl + n) / 2, Jl += i, ih(Hl = t, Xl = n)
	}

	function ch() {
		rh.point = ih
	}

	function fh() {
		rh.point = lh
	}

	function sh() {
		hh(jl, $l)
	}

	function lh(t, n) {
		rh.point = hh, ih(jl = Hl = t, $l = Xl = n)
	}

	function hh(t, n) {
		var e = t - Hl,
			r = n - Xl,
			i = of (e * e + r * r);
		Kl += i * (Hl + t) / 2, Ql += i * (Xl + n) / 2, Jl += i, th += (i = Xl * t - Hl * n) * (Hl + t), nh += i * (Xl + n), eh += 3 * i, ih(Hl = t, Xl = n)
	}
	var dh = rh;

	function ph(t) {
		this._context = t
	}
	ph.prototype = {
		_radius: 4.5,
		pointRadius: function(t) {
			return this._radius = t, this
		},
		polygonStart: function() {
			this._line = 0
		},
		polygonEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			0 === this._line && this._context.closePath(), this._point = NaN
		},
		point: function(t, n) {
			switch (this._point) {
				case 0:
					this._context.moveTo(t, n), this._point = 1;
					break;
				case 1:
					this._context.lineTo(t, n);
					break;
				default:
					this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, $c)
			}
		},
		result: sf
	};
	var gh, yh, vh, _h, bh, mh = new _,
		xh = {
			point: sf,
			lineStart: function() {
				xh.point = wh
			},
			lineEnd: function() {
				gh && Mh(yh, vh), xh.point = sf
			},
			polygonStart: function() {
				gh = !0
			},
			polygonEnd: function() {
				gh = null
			},
			result: function() {
				var t = +mh;
				return mh = new _, t
			}
		};

	function wh(t, n) {
		xh.point = Mh, yh = _h = t, vh = bh = n
	}

	function Mh(t, n) {
		_h -= t, bh -= n, mh.add( of (_h * _h + bh * bh)), _h = t, bh = n
	}
	var Ah = xh;

	function Th() {
		this._string = []
	}

	function Sh(t) {
		return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
	}

	function Eh(t) {
		return function(n) {
			var e = new kh;
			for (var r in t) e[r] = t[r];
			return e.stream = n, e
		}
	}

	function kh() {}

	function Nh(t, n, e) {
		var r = t.clipExtent && t.clipExtent();
		return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), yf(e, t.stream(Gl)), n(Gl.result()), null != r && t.clipExtent(r), t
	}

	function Ch(t, n, e) {
		return Nh(t, (function(e) {
			var r = n[1][0] - n[0][0],
				i = n[1][1] - n[0][1],
				o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
				a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
				u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
			t.scale(150 * o).translate([a, u])
		}), e)
	}

	function Ph(t, n, e) {
		return Ch(t, [
			[0, 0], n
		], e)
	}

	function zh(t, n, e) {
		return Nh(t, (function(e) {
			var r = +n,
				i = r / (e[1][0] - e[0][0]),
				o = (r - i * (e[1][0] + e[0][0])) / 2,
				a = -i * e[0][1];
			t.scale(150 * i).translate([o, a])
		}), e)
	}

	function Dh(t, n, e) {
		return Nh(t, (function(e) {
			var r = +n,
				i = r / (e[1][1] - e[0][1]),
				o = -i * e[0][0],
				a = (r - i * (e[1][1] + e[0][1])) / 2;
			t.scale(150 * i).translate([o, a])
		}), e)
	}
	Th.prototype = {
		_radius: 4.5,
		_circle: Sh(4.5),
		pointRadius: function(t) {
			return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
		},
		polygonStart: function() {
			this._line = 0
		},
		polygonEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			0 === this._line && this._string.push("Z"), this._point = NaN
		},
		point: function(t, n) {
			switch (this._point) {
				case 0:
					this._string.push("M", t, ",", n), this._point = 1;
					break;
				case 1:
					this._string.push("L", t, ",", n);
					break;
				default:
					null == this._circle && (this._circle = Sh(this._radius)), this._string.push("M", t, ",", n, this._circle)
			}
		},
		result: function() {
			if (this._string.length) {
				var t = this._string.join("");
				return this._string = [], t
			}
			return null
		}
	}, kh.prototype = {
		constructor: kh,
		point: function(t, n) {
			this.stream.point(t, n)
		},
		sphere: function() {
			this.stream.sphere()
		},
		lineStart: function() {
			this.stream.lineStart()
		},
		lineEnd: function() {
			this.stream.lineEnd()
		},
		polygonStart: function() {
			this.stream.polygonStart()
		},
		polygonEnd: function() {
			this.stream.polygonEnd()
		}
	};
	var Rh = Zc(30 * Xc);

	function Fh(t, n) {
		return +n ? function(t, n) {
			function e(r, i, o, a, u, c, f, s, l, h, d, p, g, y) {
				var v = f - r,
					_ = s - i,
					b = v * v + _ * _;
				if (b > 4 * n && g--) {
					var m = a + h,
						x = u + d,
						w = c + p,
						M = of (m * m + x * x + w * w),
						A = cf(w /= M),
						T = Gc(Gc(w) - 1) < Ic || Gc(o - l) < Ic ? (o + l) / 2 : Wc(x, m),
						S = t(T, A),
						E = S[0],
						k = S[1],
						N = E - r,
						C = k - i,
						P = _ * N - v * C;
					(P * P / b > n || Gc((v * N + _ * C) / b - .5) > .3 || a * h + u * d + c * p < Rh) && (e(r, i, o, a, u, c, E, k, T, m /= M, x /= M, w, g, y), y.point(E, k), e(E, k, T, m, x, w, f, s, l, h, d, p, g, y))
				}
			}
			return function(n) {
				var r, i, o, a, u, c, f, s, l, h, d, p, g = {
					point: y,
					lineStart: v,
					lineEnd: b,
					polygonStart: function() {
						n.polygonStart(), g.lineStart = m
					},
					polygonEnd: function() {
						n.polygonEnd(), g.lineStart = v
					}
				};

				function y(e, r) {
					e = t(e, r), n.point(e[0], e[1])
				}

				function v() {
					s = NaN, g.point = _, n.lineStart()
				}

				function _(r, i) {
					var o = Yf([r, i]),
						a = t(r, i);
					e(s, l, f, h, d, p, s = a[0], l = a[1], f = r, h = o[0], d = o[1], p = o[2], 16, n), n.point(s, l)
				}

				function b() {
					g.point = y, n.lineEnd()
				}

				function m() {
					v(), g.point = x, g.lineEnd = w
				}

				function x(t, n) {
					_(r = t, n), i = s, o = l, a = h, u = d, c = p, g.point = _
				}

				function w() {
					e(s, l, f, h, d, p, i, o, r, a, u, c, 16, n), g.lineEnd = b, b()
				}
				return g
			}
		}(t, n) : function(t) {
			return Eh({
				point: function(n, e) {
					n = t(n, e), this.stream.point(n[0], n[1])
				}
			})
		}(t)
	}
	var qh = Eh({
		point: function(t, n) {
			this.stream.point(t * Xc, n * Xc)
		}
	});

	function Oh(t, n, e, r, i, o) {
		if (!o) return function(t, n, e, r, i) {
			function o(o, a) {
				return [n + t * (o *= r), e - t * (a *= i)]
			}
			return o.invert = function(o, a) {
				return [(o - n) / t * r, (e - a) / t * i]
			}, o
		}(t, n, e, r, i);
		var a = Zc(o),
			u = ef(o),
			c = a * t,
			f = u * t,
			s = a / t,
			l = u / t,
			h = (u * e - a * n) / t,
			d = (u * n + a * e) / t;

		function p(t, o) {
			return [c * (t *= r) - f * (o *= i) + n, e - f * t - c * o]
		}
		return p.invert = function(t, n) {
			return [r * (s * t - l * n + h), i * (d - l * t - s * n)]
		}, p
	}

	function Uh(t) {
		return Ih((function() {
			return t
		}))()
	}

	function Ih(t) {
		var n, e, r, i, o, a, u, c, f, s, l = 150,
			h = 480,
			d = 250,
			p = 0,
			g = 0,
			y = 0,
			v = 0,
			_ = 0,
			b = 0,
			m = 1,
			x = 1,
			w = null,
			M = Ks,
			A = null,
			T = Nl,
			S = .5;

		function E(t) {
			return c(t[0] * Xc, t[1] * Xc)
		}

		function k(t) {
			return (t = c.invert(t[0], t[1])) && [t[0] * Hc, t[1] * Hc]
		}

		function N() {
			var t = Oh(l, 0, 0, m, x, b).apply(null, n(p, g)),
				r = Oh(l, h - t[0], d - t[1], m, x, b);
			return e = Rs(y, v, _), u = zs(n, r), c = zs(e, u), a = Fh(u, S), C()
		}

		function C() {
			return f = s = null, E
		}
		return E.stream = function(t) {
				return f && s === t ? f : f = qh(function(t) {
					return Eh({
						point: function(n, e) {
							var r = t(n, e);
							return this.stream.point(r[0], r[1])
						}
					})
				}(e)(M(a(T(s = t)))))
			}, E.preclip = function(t) {
				return arguments.length ? (M = t, w = void 0, C()) : M
			}, E.postclip = function(t) {
				return arguments.length ? (T = t, A = r = i = o = null, C()) : T
			}, E.clipAngle = function(t) {
				return arguments.length ? (M = +t ? Qs(w = t * Xc) : (w = null, Ks), C()) : w * Hc
			}, E.clipExtent = function(t) {
				return arguments.length ? (T = null == t ? (A = r = i = o = null, Nl) : ol(A = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]), C()) : null == A ? null : [
					[A, r],
					[i, o]
				]
			}, E.scale = function(t) {
				return arguments.length ? (l = +t, N()) : l
			}, E.translate = function(t) {
				return arguments.length ? (h = +t[0], d = +t[1], N()) : [h, d]
			}, E.center = function(t) {
				return arguments.length ? (p = t[0] % 360 * Xc, g = t[1] % 360 * Xc, N()) : [p * Hc, g * Hc]
			}, E.rotate = function(t) {
				return arguments.length ? (y = t[0] % 360 * Xc, v = t[1] % 360 * Xc, _ = t.length > 2 ? t[2] % 360 * Xc : 0, N()) : [y * Hc, v * Hc, _ * Hc]
			}, E.angle = function(t) {
				return arguments.length ? (b = t % 360 * Xc, N()) : b * Hc
			}, E.reflectX = function(t) {
				return arguments.length ? (m = t ? -1 : 1, N()) : m < 0
			}, E.reflectY = function(t) {
				return arguments.length ? (x = t ? -1 : 1, N()) : x < 0
			}, E.precision = function(t) {
				return arguments.length ? (a = Fh(u, S = t * t), C()) : of (S)
			}, E.fitExtent = function(t, n) {
				return Ch(E, t, n)
			}, E.fitSize = function(t, n) {
				return Ph(E, t, n)
			}, E.fitWidth = function(t, n) {
				return zh(E, t, n)
			}, E.fitHeight = function(t, n) {
				return Dh(E, t, n)
			},
			function() {
				return n = t.apply(this, arguments), E.invert = n.invert && k, N()
			}
	}

	function Bh(t) {
		var n = 0,
			e = Yc / 3,
			r = Ih(t),
			i = r(n, e);
		return i.parallels = function(t) {
			return arguments.length ? r(n = t[0] * Xc, e = t[1] * Xc) : [n * Hc, e * Hc]
		}, i
	}

	function Yh(t, n) {
		var e = ef(t),
			r = (e + ef(n)) / 2;
		if (Gc(r) < Ic) return function(t) {
			var n = Zc(t);

			function e(t, e) {
				return [t * n, ef(e) / n]
			}
			return e.invert = function(t, e) {
				return [t / n, cf(e * n)]
			}, e
		}(t);
		var i = 1 + e * (2 * r - e),
			o = of (i) / r;

		function a(t, n) {
			var e = of (i - 2 * r * ef(n)) / r;
			return [e * ef(t *= r), o - e * Zc(t)]
		}
		return a.invert = function(t, n) {
			var e = o - n,
				a = Wc(t, Gc(e)) * rf(e);
			return e * r < 0 && (a -= Yc * rf(t) * rf(e)), [a / r, cf((i - (t * t + e * e) * r * r) / (2 * r))]
		}, a
	}

	function Lh() {
		return Bh(Yh).scale(155.424).center([0, 33.6442])
	}

	function jh() {
		return Lh().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
	}

	function $h(t) {
		return function(n, e) {
			var r = Zc(n),
				i = Zc(e),
				o = t(r * i);
			return o === 1 / 0 ? [2, 0] : [o * i * ef(n), o * ef(e)]
		}
	}

	function Hh(t) {
		return function(n, e) {
			var r = of (n * n + e * e),
				i = t(r),
				o = ef(i),
				a = Zc(i);
			return [Wc(n * o, r * a), cf(r && e * o / r)]
		}
	}
	var Xh = $h((function(t) {
		return of(2 / (1 + t))
	}));
	Xh.invert = Hh((function(t) {
		return 2 * cf(t / 2)
	}));
	var Gh = $h((function(t) {
		return (t = uf(t)) && t / ef(t)
	}));

	function Vh(t, n) {
		return [t, tf(af((Lc + n) / 2))]
	}

	function Wh(t) {
		var n, e, r, i = Uh(t),
			o = i.center,
			a = i.scale,
			u = i.translate,
			c = i.clipExtent,
			f = null;

		function s() {
			var o = Yc * a(),
				u = i(Us(i.rotate()).invert([0, 0]));
			return c(null == f ? [
				[u[0] - o, u[1] - o],
				[u[0] + o, u[1] + o]
			] : t === Vh ? [
				[Math.max(u[0] - o, f), n],
				[Math.min(u[0] + o, e), r]
			] : [
				[f, Math.max(u[1] - o, n)],
				[e, Math.min(u[1] + o, r)]
			])
		}
		return i.scale = function(t) {
			return arguments.length ? (a(t), s()) : a()
		}, i.translate = function(t) {
			return arguments.length ? (u(t), s()) : u()
		}, i.center = function(t) {
			return arguments.length ? (o(t), s()) : o()
		}, i.clipExtent = function(t) {
			return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null : [
				[f, n],
				[e, r]
			]
		}, s()
	}

	function Zh(t) {
		return af((Lc + t) / 2)
	}

	function Kh(t, n) {
		var e = Zc(t),
			r = t === n ? ef(t) : tf(e / Zc(n)) / tf(Zh(n) / Zh(t)),
			i = e * nf(Zh(t), r) / r;
		if (!r) return Vh;

		function o(t, n) {
			i > 0 ? n < -Lc + Ic && (n = -Lc + Ic) : n > Lc - Ic && (n = Lc - Ic);
			var e = i / nf(Zh(n), r);
			return [e * ef(r * t), i - e * Zc(r * t)]
		}
		return o.invert = function(t, n) {
			var e = i - n,
				o = rf(r) * of (t * t + e * e),
				a = Wc(t, Gc(e)) * rf(e);
			return e * r < 0 && (a -= Yc * rf(t) * rf(e)), [a / r, 2 * Vc(nf(i / o, 1 / r)) - Lc]
		}, o
	}

	function Qh(t, n) {
		return [t, n]
	}

	function Jh(t, n) {
		var e = Zc(t),
			r = t === n ? ef(t) : (e - Zc(n)) / (n - t),
			i = e / r + t;
		if (Gc(r) < Ic) return Qh;

		function o(t, n) {
			var e = i - n,
				o = r * t;
			return [e * ef(o), i - e * Zc(o)]
		}
		return o.invert = function(t, n) {
			var e = i - n,
				o = Wc(t, Gc(e)) * rf(e);
			return e * r < 0 && (o -= Yc * rf(t) * rf(e)), [o / r, i - rf(r) * of (t * t + e * e)]
		}, o
	}
	Gh.invert = Hh((function(t) {
		return t
	})), Vh.invert = function(t, n) {
		return [t, 2 * Vc(Qc(n)) - Lc]
	}, Qh.invert = Qh;
	var td = 1.340264,
		nd = -.081106,
		ed = 893e-6,
		rd = .003796,
		id = of (3) / 2;

	function od(t, n) {
		var e = cf(id * ef(n)),
			r = e * e,
			i = r * r * r;
		return [t * Zc(e) / (id * (td + 3 * nd * r + i * (7 * ed + 9 * rd * r))), e * (td + nd * r + i * (ed + rd * r))]
	}

	function ad(t, n) {
		var e = Zc(n),
			r = Zc(t) * e;
		return [e * ef(t) / r, ef(n) / r]
	}

	function ud(t, n) {
		var e = n * n,
			r = e * e;
		return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
	}

	function cd(t, n) {
		return [Zc(n) * ef(t), ef(n)]
	}

	function fd(t, n) {
		var e = Zc(n),
			r = 1 + Zc(t) * e;
		return [e * ef(t) / r, ef(n) / r]
	}

	function sd(t, n) {
		return [tf(af((Lc + n) / 2)), -t]
	}

	function ld(t, n) {
		return t.parent === n.parent ? 1 : 2
	}

	function hd(t, n) {
		return t + n.x
	}

	function dd(t, n) {
		return Math.max(t, n.y)
	}

	function pd(t) {
		var n = 0,
			e = t.children,
			r = e && e.length;
		if (r)
			for (; --r >= 0;) n += e[r].value;
		else n = 1;
		t.value = n
	}

	function gd(t, n) {
		t instanceof Map ? (t = [void 0, t], void 0 === n && (n = vd)) : void 0 === n && (n = yd);
		for (var e, r, i, o, a, u = new md(t), c = [u]; e = c.pop();)
			if ((i = n(e.data)) && (a = (i = Array.from(i)).length))
				for (e.children = i, o = a - 1; o >= 0; --o) c.push(r = i[o] = new md(i[o])), r.parent = e, r.depth = e.depth + 1;
		return u.eachBefore(bd)
	}

	function yd(t) {
		return t.children
	}

	function vd(t) {
		return Array.isArray(t) ? t[1] : null
	}

	function _d(t) {
		void 0 !== t.data.value && (t.value = t.data.value), t.data = t.data.data
	}

	function bd(t) {
		var n = 0;
		do {
			t.height = n
		} while ((t = t.parent) && t.height < ++n)
	}

	function md(t) {
		this.data = t, this.depth = this.height = 0, this.parent = null
	}

	function xd(t) {
		return null == t ? null : wd(t)
	}

	function wd(t) {
		if ("function" != typeof t) throw new Error;
		return t
	}

	function Md() {
		return 0
	}

	function Ad(t) {
		return function() {
			return t
		}
	}
	od.invert = function(t, n) {
		for (var e, r = n, i = r * r, o = i * i * i, a = 0; a < 12 && (o = (i = (r -= e = (r * (td + nd * i + o * (ed + rd * i)) - n) / (td + 3 * nd * i + o * (7 * ed + 9 * rd * i))) * r) * i * i, !(Gc(e) < Bc)); ++a);
		return [id * t * (td + 3 * nd * i + o * (7 * ed + 9 * rd * i)) / Zc(r), cf(ef(r) / id)]
	}, ad.invert = Hh(Vc), ud.invert = function(t, n) {
		var e, r = n,
			i = 25;
		do {
			var o = r * r,
				a = o * o;
			r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)))
		} while (Gc(e) > Ic && --i > 0);
		return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r]
	}, cd.invert = Hh(cf), fd.invert = Hh((function(t) {
		return 2 * Vc(t)
	})), sd.invert = function(t, n) {
		return [-n, 2 * Vc(Qc(t)) - Lc]
	}, md.prototype = gd.prototype = {
		constructor: md,
		count: function() {
			return this.eachAfter(pd)
		},
		each: function(t, n) {
			let e = -1;
			for (const r of this) t.call(n, r, ++e, this);
			return this
		},
		eachAfter: function(t, n) {
			for (var e, r, i, o = this, a = [o], u = [], c = -1; o = a.pop();)
				if (u.push(o), e = o.children)
					for (r = 0, i = e.length; r < i; ++r) a.push(e[r]);
			for (; o = u.pop();) t.call(n, o, ++c, this);
			return this
		},
		eachBefore: function(t, n) {
			for (var e, r, i = this, o = [i], a = -1; i = o.pop();)
				if (t.call(n, i, ++a, this), e = i.children)
					for (r = e.length - 1; r >= 0; --r) o.push(e[r]);
			return this
		},
		find: function(t, n) {
			let e = -1;
			for (const r of this)
				if (t.call(n, r, ++e, this)) return r
		},
		sum: function(t) {
			return this.eachAfter((function(n) {
				for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
				n.value = e
			}))
		},
		sort: function(t) {
			return this.eachBefore((function(n) {
				n.children && n.children.sort(t)
			}))
		},
		path: function(t) {
			for (var n = this, e = function(t, n) {
					if (t === n) return t;
					var e = t.ancestors(),
						r = n.ancestors(),
						i = null;
					t = e.pop(), n = r.pop();
					for (; t === n;) i = t, t = e.pop(), n = r.pop();
					return i
				}(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
			for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
			return r
		},
		ancestors: function() {
			for (var t = this, n = [t]; t = t.parent;) n.push(t);
			return n
		},
		descendants: function() {
			return Array.from(this)
		},
		leaves: function() {
			var t = [];
			return this.eachBefore((function(n) {
				n.children || t.push(n)
			})), t
		},
		links: function() {
			var t = this,
				n = [];
			return t.each((function(e) {
				e !== t && n.push({
					source: e.parent,
					target: e
				})
			})), n
		},
		copy: function() {
			return gd(this).eachBefore(_d)
		},
		[Symbol.iterator]: function*() {
			var t, n, e, r, i = this,
				o = [i];
			do {
				for (t = o.reverse(), o = []; i = t.pop();)
					if (yield i, n = i.children)
						for (e = 0, r = n.length; e < r; ++e) o.push(n[e])
			} while (o.length)
		}
	};
	const Td = 4294967296;

	function Sd() {
		let t = 1;
		return () => (t = (1664525 * t + 1013904223) % Td) / Td
	}

	function Ed(t, n) {
		for (var e, r, i = 0, o = (t = function(t, n) {
				let e, r, i = t.length;
				for (; i;) r = n() * i-- | 0, e = t[i], t[i] = t[r], t[r] = e;
				return t
			}(Array.from(t), n)).length, a = []; i < o;) e = t[i], r && Cd(r, e) ? ++i : (r = zd(a = kd(a, e)), i = 0);
		return r
	}

	function kd(t, n) {
		var e, r;
		if (Pd(n, t)) return [n];
		for (e = 0; e < t.length; ++e)
			if (Nd(n, t[e]) && Pd(Dd(t[e], n), t)) return [t[e], n];
		for (e = 0; e < t.length - 1; ++e)
			for (r = e + 1; r < t.length; ++r)
				if (Nd(Dd(t[e], t[r]), n) && Nd(Dd(t[e], n), t[r]) && Nd(Dd(t[r], n), t[e]) && Pd(Rd(t[e], t[r], n), t)) return [t[e], t[r], n];
		throw new Error
	}

	function Nd(t, n) {
		var e = t.r - n.r,
			r = n.x - t.x,
			i = n.y - t.y;
		return e < 0 || e * e < r * r + i * i
	}

	function Cd(t, n) {
		var e = t.r - n.r + 1e-9 * Math.max(t.r, n.r, 1),
			r = n.x - t.x,
			i = n.y - t.y;
		return e > 0 && e * e > r * r + i * i
	}

	function Pd(t, n) {
		for (var e = 0; e < n.length; ++e)
			if (!Cd(t, n[e])) return !1;
		return !0
	}

	function zd(t) {
		switch (t.length) {
			case 1:
				return function(t) {
					return {
						x: t.x,
						y: t.y,
						r: t.r
					}
				}(t[0]);
			case 2:
				return Dd(t[0], t[1]);
			case 3:
				return Rd(t[0], t[1], t[2])
		}
	}

	function Dd(t, n) {
		var e = t.x,
			r = t.y,
			i = t.r,
			o = n.x,
			a = n.y,
			u = n.r,
			c = o - e,
			f = a - r,
			s = u - i,
			l = Math.sqrt(c * c + f * f);
		return {
			x: (e + o + c / l * s) / 2,
			y: (r + a + f / l * s) / 2,
			r: (l + i + u) / 2
		}
	}

	function Rd(t, n, e) {
		var r = t.x,
			i = t.y,
			o = t.r,
			a = n.x,
			u = n.y,
			c = n.r,
			f = e.x,
			s = e.y,
			l = e.r,
			h = r - a,
			d = r - f,
			p = i - u,
			g = i - s,
			y = c - o,
			v = l - o,
			_ = r * r + i * i - o * o,
			b = _ - a * a - u * u + c * c,
			m = _ - f * f - s * s + l * l,
			x = d * p - h * g,
			w = (p * m - g * b) / (2 * x) - r,
			M = (g * y - p * v) / x,
			A = (d * b - h * m) / (2 * x) - i,
			T = (h * v - d * y) / x,
			S = M * M + T * T - 1,
			E = 2 * (o + w * M + A * T),
			k = w * w + A * A - o * o,
			N = -(Math.abs(S) > 1e-6 ? (E + Math.sqrt(E * E - 4 * S * k)) / (2 * S) : k / E);
		return {
			x: r + w + M * N,
			y: i + A + T * N,
			r: N
		}
	}

	function Fd(t, n, e) {
		var r, i, o, a, u = t.x - n.x,
			c = t.y - n.y,
			f = u * u + c * c;
		f ? (i = n.r + e.r, i *= i, a = t.r + e.r, i > (a *= a) ? (r = (f + a - i) / (2 * f), o = Math.sqrt(Math.max(0, a / f - r * r)), e.x = t.x - r * u - o * c, e.y = t.y - r * c + o * u) : (r = (f + i - a) / (2 * f), o = Math.sqrt(Math.max(0, i / f - r * r)), e.x = n.x + r * u - o * c, e.y = n.y + r * c + o * u)) : (e.x = n.x + e.r, e.y = n.y)
	}

	function qd(t, n) {
		var e = t.r + n.r - 1e-6,
			r = n.x - t.x,
			i = n.y - t.y;
		return e > 0 && e * e > r * r + i * i
	}

	function Od(t) {
		var n = t._,
			e = t.next._,
			r = n.r + e.r,
			i = (n.x * e.r + e.x * n.r) / r,
			o = (n.y * e.r + e.y * n.r) / r;
		return i * i + o * o
	}

	function Ud(t) {
		this._ = t, this.next = null, this.previous = null
	}

	function Id(t, n) {
		if (!(o = (t = function(t) {
				return "object" == typeof t && "length" in t ? t : Array.from(t)
			}(t)).length)) return 0;
		var e, r, i, o, a, u, c, f, s, l, h;
		if ((e = t[0]).x = 0, e.y = 0, !(o > 1)) return e.r;
		if (r = t[1], e.x = -r.r, r.x = e.r, r.y = 0, !(o > 2)) return e.r + r.r;
		Fd(r, e, i = t[2]), e = new Ud(e), r = new Ud(r), i = new Ud(i), e.next = i.previous = r, r.next = e.previous = i, i.next = r.previous = e;
		t: for (c = 3; c < o; ++c) {
			Fd(e._, r._, i = t[c]), i = new Ud(i), f = r.next, s = e.previous, l = r._.r, h = e._.r;
			do {
				if (l <= h) {
					if (qd(f._, i._)) {
						r = f, e.next = r, r.previous = e, --c;
						continue t
					}
					l += f._.r, f = f.next
				} else {
					if (qd(s._, i._)) {
						(e = s).next = r, r.previous = e, --c;
						continue t
					}
					h += s._.r, s = s.previous
				}
			} while (f !== s.next);
			for (i.previous = e, i.next = r, e.next = r.previous = r = i, a = Od(e);
				(i = i.next) !== r;)(u = Od(i)) < a && (e = i, a = u);
			r = e.next
		}
		for (e = [r._], i = r;
			(i = i.next) !== r;) e.push(i._);
		for (i = Ed(e, n), c = 0; c < o; ++c)(e = t[c]).x -= i.x, e.y -= i.y;
		return i.r
	}

	function Bd(t) {
		return Math.sqrt(t.value)
	}

	function Yd(t) {
		return function(n) {
			n.children || (n.r = Math.max(0, +t(n) || 0))
		}
	}

	function Ld(t, n, e) {
		return function(r) {
			if (i = r.children) {
				var i, o, a, u = i.length,
					c = t(r) * n || 0;
				if (c)
					for (o = 0; o < u; ++o) i[o].r += c;
				if (a = Id(i, e), c)
					for (o = 0; o < u; ++o) i[o].r -= c;
				r.r = a + c
			}
		}
	}

	function jd(t) {
		return function(n) {
			var e = n.parent;
			n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
		}
	}

	function $d(t) {
		t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
	}

	function Hd(t, n, e, r, i) {
		for (var o, a = t.children, u = -1, c = a.length, f = t.value && (r - n) / t.value; ++u < c;)(o = a[u]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f
	}
	var Xd = {
			depth: -1
		},
		Gd = {},
		Vd = {};

	function Wd(t) {
		return t.id
	}

	function Zd(t) {
		return t.parentId
	}

	function Kd(t) {
		let n = t.length;
		if (n < 2) return "";
		for (; --n > 1 && !Qd(t, n););
		return t.slice(0, n)
	}

	function Qd(t, n) {
		if ("/" === t[n]) {
			let e = 0;
			for (; n > 0 && "\\" === t[--n];) ++e;
			if (0 == (1 & e)) return !0
		}
		return !1
	}

	function Jd(t, n) {
		return t.parent === n.parent ? 1 : 2
	}

	function tp(t) {
		var n = t.children;
		return n ? n[0] : t.t
	}

	function np(t) {
		var n = t.children;
		return n ? n[n.length - 1] : t.t
	}

	function ep(t, n, e) {
		var r = e / (n.i - t.i);
		n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
	}

	function rp(t, n, e) {
		return t.a.parent === n.parent ? t.a : e
	}

	function ip(t, n) {
		this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
	}

	function op(t, n, e, r, i) {
		for (var o, a = t.children, u = -1, c = a.length, f = t.value && (i - e) / t.value; ++u < c;)(o = a[u]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f
	}
	ip.prototype = Object.create(md.prototype);
	var ap = (1 + Math.sqrt(5)) / 2;

	function up(t, n, e, r, i, o) {
		for (var a, u, c, f, s, l, h, d, p, g, y, v = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x;) {
			c = i - e, f = o - r;
			do {
				s = _[m++].value
			} while (!s && m < x);
			for (l = h = s, y = s * s * (g = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / y, y / l); m < x; ++m) {
				if (s += u = _[m].value, u < l && (l = u), u > h && (h = u), y = s * s * g, (d = Math.max(h / y, y / l)) > p) {
					s -= u;
					break
				}
				p = d
			}
			v.push(a = {
				value: s,
				dice: c < f,
				children: _.slice(b, m)
			}), a.dice ? Hd(a, e, r, i, w ? r += f * s / w : o) : op(a, e, r, w ? e += c * s / w : i, o), w -= s, b = m
		}
		return v
	}
	var cp = function t(n) {
		function e(t, e, r, i, o) {
			up(n, t, e, r, i, o)
		}
		return e.ratio = function(n) {
			return t((n = +n) > 1 ? n : 1)
		}, e
	}(ap);
	var fp = function t(n) {
		function e(t, e, r, i, o) {
			if ((a = t._squarify) && a.ratio === n)
				for (var a, u, c, f, s, l = -1, h = a.length, d = t.value; ++l < h;) {
					for (c = (u = a[l]).children, f = u.value = 0, s = c.length; f < s; ++f) u.value += c[f].value;
					u.dice ? Hd(u, e, r, i, d ? r += (o - r) * u.value / d : o) : op(u, e, r, d ? e += (i - e) * u.value / d : i, o), d -= u.value
				} else t._squarify = a = up(n, t, e, r, i, o), a.ratio = n
		}
		return e.ratio = function(n) {
			return t((n = +n) > 1 ? n : 1)
		}, e
	}(ap);

	function sp(t, n, e) {
		return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
	}

	function lp(t, n) {
		return t[0] - n[0] || t[1] - n[1]
	}

	function hp(t) {
		const n = t.length,
			e = [0, 1];
		let r, i = 2;
		for (r = 2; r < n; ++r) {
			for (; i > 1 && sp(t[e[i - 2]], t[e[i - 1]], t[r]) <= 0;) --i;
			e[i++] = r
		}
		return e.slice(0, i)
	}
	var dp = Math.random,
		pp = function t(n) {
			function e(t, e) {
				return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
					function() {
						return n() * e + t
					}
			}
			return e.source = t, e
		}(dp),
		gp = function t(n) {
			function e(t, e) {
				return arguments.length < 2 && (e = t, t = 0), t = Math.floor(t), e = Math.floor(e) - t,
					function() {
						return Math.floor(n() * e + t)
					}
			}
			return e.source = t, e
		}(dp),
		yp = function t(n) {
			function e(t, e) {
				var r, i;
				return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
					function() {
						var o;
						if (null != r) o = r, r = null;
						else
							do {
								r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o
							} while (!i || i > 1);
						return t + e * o * Math.sqrt(-2 * Math.log(i) / i)
					}
			}
			return e.source = t, e
		}(dp),
		vp = function t(n) {
			var e = yp.source(n);

			function r() {
				var t = e.apply(this, arguments);
				return function() {
					return Math.exp(t())
				}
			}
			return r.source = t, r
		}(dp),
		_p = function t(n) {
			function e(t) {
				return (t = +t) <= 0 ? () => 0 : function() {
					for (var e = 0, r = t; r > 1; --r) e += n();
					return e + r * n()
				}
			}
			return e.source = t, e
		}(dp),
		bp = function t(n) {
			var e = _p.source(n);

			function r(t) {
				if (0 == (t = +t)) return n;
				var r = e(t);
				return function() {
					return r() / t
				}
			}
			return r.source = t, r
		}(dp),
		mp = function t(n) {
			function e(t) {
				return function() {
					return -Math.log1p(-n()) / t
				}
			}
			return e.source = t, e
		}(dp),
		xp = function t(n) {
			function e(t) {
				if ((t = +t) < 0) throw new RangeError("invalid alpha");
				return t = 1 / -t,
					function() {
						return Math.pow(1 - n(), t)
					}
			}
			return e.source = t, e
		}(dp),
		wp = function t(n) {
			function e(t) {
				if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
				return function() {
					return Math.floor(n() + t)
				}
			}
			return e.source = t, e
		}(dp),
		Mp = function t(n) {
			function e(t) {
				if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
				return 0 === t ? () => 1 / 0 : 1 === t ? () => 1 : (t = Math.log1p(-t), function() {
					return 1 + Math.floor(Math.log1p(-n()) / t)
				})
			}
			return e.source = t, e
		}(dp),
		Ap = function t(n) {
			var e = yp.source(n)();

			function r(t, r) {
				if ((t = +t) < 0) throw new RangeError("invalid k");
				if (0 === t) return () => 0;
				if (r = null == r ? 1 : +r, 1 === t) return () => -Math.log1p(-n()) * r;
				var i = (t < 1 ? t + 1 : t) - 1 / 3,
					o = 1 / (3 * Math.sqrt(i)),
					a = t < 1 ? () => Math.pow(n(), 1 / t) : () => 1;
				return function() {
					do {
						do {
							var t = e(),
								u = 1 + o * t
						} while (u <= 0);
						u *= u * u;
						var c = 1 - n()
					} while (c >= 1 - .0331 * t * t * t * t && Math.log(c) >= .5 * t * t + i * (1 - u + Math.log(u)));
					return i * u * a() * r
				}
			}
			return r.source = t, r
		}(dp),
		Tp = function t(n) {
			var e = Ap.source(n);

			function r(t, n) {
				var r = e(t),
					i = e(n);
				return function() {
					var t = r();
					return 0 === t ? 0 : t / (t + i())
				}
			}
			return r.source = t, r
		}(dp),
		Sp = function t(n) {
			var e = Mp.source(n),
				r = Tp.source(n);

			function i(t, n) {
				return t = +t, (n = +n) >= 1 ? () => t : n <= 0 ? () => 0 : function() {
					for (var i = 0, o = t, a = n; o * a > 16 && o * (1 - a) > 16;) {
						var u = Math.floor((o + 1) * a),
							c = r(u, o - u + 1)();
						c <= a ? (i += u, o -= u, a = (a - c) / (1 - c)) : (o = u - 1, a /= c)
					}
					for (var f = a < .5, s = e(f ? a : 1 - a), l = s(), h = 0; l <= o; ++h) l += s();
					return i + (f ? h : o - h)
				}
			}
			return i.source = t, i
		}(dp),
		Ep = function t(n) {
			function e(t, e, r) {
				var i;
				return 0 == (t = +t) ? i = t => -Math.log(t) : (t = 1 / t, i = n => Math.pow(n, t)), e = null == e ? 0 : +e, r = null == r ? 1 : +r,
					function() {
						return e + r * i(-Math.log1p(-n()))
					}
			}
			return e.source = t, e
		}(dp),
		kp = function t(n) {
			function e(t, e) {
				return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
					function() {
						return t + e * Math.tan(Math.PI * n())
					}
			}
			return e.source = t, e
		}(dp),
		Np = function t(n) {
			function e(t, e) {
				return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
					function() {
						var r = n();
						return t + e * Math.log(r / (1 - r))
					}
			}
			return e.source = t, e
		}(dp),
		Cp = function t(n) {
			var e = Ap.source(n),
				r = Sp.source(n);

			function i(t) {
				return function() {
					for (var i = 0, o = t; o > 16;) {
						var a = Math.floor(.875 * o),
							u = e(a)();
						if (u > o) return i + r(a - 1, o / u)();
						i += a, o -= u
					}
					for (var c = -Math.log1p(-n()), f = 0; c <= o; ++f) c -= Math.log1p(-n());
					return i + f
				}
			}
			return i.source = t, i
		}(dp);
	const Pp = 1 / 4294967296;

	function zp(t, n) {
		switch (arguments.length) {
			case 0:
				break;
			case 1:
				this.range(t);
				break;
			default:
				this.range(n).domain(t)
		}
		return this
	}

	function Dp(t, n) {
		switch (arguments.length) {
			case 0:
				break;
			case 1:
				"function" == typeof t ? this.interpolator(t) : this.range(t);
				break;
			default:
				this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n)
		}
		return this
	}
	const Rp = Symbol("implicit");

	function Fp() {
		var t = new InternMap,
			n = [],
			e = [],
			r = Rp;

		function i(i) {
			let o = t.get(i);
			if (void 0 === o) {
				if (r !== Rp) return r;
				t.set(i, o = n.push(i) - 1)
			}
			return e[o % e.length]
		}
		return i.domain = function(e) {
			if (!arguments.length) return n.slice();
			n = [], t = new InternMap;
			for (const r of e) t.has(r) || t.set(r, n.push(r) - 1);
			return i
		}, i.range = function(t) {
			return arguments.length ? (e = Array.from(t), i) : e.slice()
		}, i.unknown = function(t) {
			return arguments.length ? (r = t, i) : r
		}, i.copy = function() {
			return Fp(n, e).unknown(r)
		}, zp.apply(i, arguments), i
	}

	function qp() {
		var t, n, e = Fp().unknown(void 0),
			r = e.domain,
			i = e.range,
			o = 0,
			a = 1,
			u = !1,
			c = 0,
			f = 0,
			s = .5;

		function l() {
			var e = r().length,
				l = a < o,
				h = l ? a : o,
				d = l ? o : a;
			t = (d - h) / Math.max(1, e - c + 2 * f), u && (t = Math.floor(t)), h += (d - h - t * (e - c)) * s, n = t * (1 - c), u && (h = Math.round(h), n = Math.round(n));
			var p = et(e).map((function(n) {
				return h + t * n
			}));
			return i(l ? p.reverse() : p)
		}
		return delete e.unknown, e.domain = function(t) {
			return arguments.length ? (r(t), l()) : r()
		}, e.range = function(t) {
			return arguments.length ? ([o, a] = t, o = +o, a = +a, l()) : [o, a]
		}, e.rangeRound = function(t) {
			return [o, a] = t, o = +o, a = +a, u = !0, l()
		}, e.bandwidth = function() {
			return n
		}, e.step = function() {
			return t
		}, e.round = function(t) {
			return arguments.length ? (u = !!t, l()) : u
		}, e.padding = function(t) {
			return arguments.length ? (c = Math.min(1, f = +t), l()) : c
		}, e.paddingInner = function(t) {
			return arguments.length ? (c = Math.min(1, t), l()) : c
		}, e.paddingOuter = function(t) {
			return arguments.length ? (f = +t, l()) : f
		}, e.align = function(t) {
			return arguments.length ? (s = Math.max(0, Math.min(1, t)), l()) : s
		}, e.copy = function() {
			return qp(r(), [o, a]).round(u).paddingInner(c).paddingOuter(f).align(s)
		}, zp.apply(l(), arguments)
	}

	function Op(t) {
		var n = t.copy;
		return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
			return Op(n())
		}, t
	}

	function Up(t) {
		return +t
	}
	var Ip = [0, 1];

	function Bp(t) {
		return t
	}

	function Yp(t, n) {
		return (n -= t = +t) ? function(e) {
			return (e - t) / n
		} : function(t) {
			return function() {
				return t
			}
		}(isNaN(n) ? NaN : .5)
	}

	function Lp(t, n, e) {
		var r = t[0],
			i = t[1],
			o = n[0],
			a = n[1];
		return i < r ? (r = Yp(i, r), o = e(a, o)) : (r = Yp(r, i), o = e(o, a)),
			function(t) {
				return o(r(t))
			}
	}

	function jp(t, n, e) {
		var r = Math.min(t.length, n.length) - 1,
			i = new Array(r),
			o = new Array(r),
			a = -1;
		for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r;) i[a] = Yp(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
		return function(n) {
			var e = s(t, n, 1, r) - 1;
			return o[e](i[e](n))
		}
	}

	function $p(t, n) {
		return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
	}

	function Hp() {
		var t, n, e, r, i, o, a = Ip,
			u = Ip,
			c = qr,
			f = Bp;

		function s() {
			var t = Math.min(a.length, u.length);
			return f !== Bp && (f = function(t, n) {
				var e;
				return t > n && (e = t, t = n, n = e),
					function(e) {
						return Math.max(t, Math.min(n, e))
					}
			}(a[0], a[t - 1])), r = t > 2 ? jp : Lp, i = o = null, l
		}

		function l(n) {
			return null == n || isNaN(n = +n) ? e : (i || (i = r(a.map(t), u, c)))(t(f(n)))
		}
		return l.invert = function(e) {
				return f(n((o || (o = r(u, a.map(t), Pr)))(e)))
			}, l.domain = function(t) {
				return arguments.length ? (a = Array.from(t, Up), s()) : a.slice()
			}, l.range = function(t) {
				return arguments.length ? (u = Array.from(t), s()) : u.slice()
			}, l.rangeRound = function(t) {
				return u = Array.from(t), c = Or, s()
			}, l.clamp = function(t) {
				return arguments.length ? (f = !!t || Bp, s()) : f !== Bp
			}, l.interpolate = function(t) {
				return arguments.length ? (c = t, s()) : c
			}, l.unknown = function(t) {
				return arguments.length ? (e = t, l) : e
			},
			function(e, r) {
				return t = e, n = r, s()
			}
	}

	function Xp() {
		return Hp()(Bp, Bp)
	}

	function Gp(n, e, r, i) {
		var o, a = L(n, e, r);
		switch ((i = Sc(null == i ? ",f" : i)).type) {
			case "s":
				var u = Math.max(Math.abs(n), Math.abs(e));
				return null != i.precision || isNaN(o = Oc(a, u)) || (i.precision = o), t.formatPrefix(i, u);
			case "":
			case "e":
			case "g":
			case "p":
			case "r":
				null != i.precision || isNaN(o = Uc(a, Math.max(Math.abs(n), Math.abs(e)))) || (i.precision = o - ("e" === i.type));
				break;
			case "f":
			case "%":
				null != i.precision || isNaN(o = qc(a)) || (i.precision = o - 2 * ("%" === i.type))
		}
		return t.format(i)
	}

	function Vp(t) {
		var n = t.domain;
		return t.ticks = function(t) {
			var e = n();
			return B(e[0], e[e.length - 1], null == t ? 10 : t)
		}, t.tickFormat = function(t, e) {
			var r = n();
			return Gp(r[0], r[r.length - 1], null == t ? 10 : t, e)
		}, t.nice = function(e) {
			null == e && (e = 10);
			var r, i, o = n(),
				a = 0,
				u = o.length - 1,
				c = o[a],
				f = o[u],
				s = 10;
			for (f < c && (i = c, c = f, f = i, i = a, a = u, u = i); s-- > 0;) {
				if ((i = Y(c, f, e)) === r) return o[a] = c, o[u] = f, n(o);
				if (i > 0) c = Math.floor(c / i) * i, f = Math.ceil(f / i) * i;
				else {
					if (!(i < 0)) break;
					c = Math.ceil(c * i) / i, f = Math.floor(f * i) / i
				}
				r = i
			}
			return t
		}, t
	}

	function Wp(t, n) {
		var e, r = 0,
			i = (t = t.slice()).length - 1,
			o = t[r],
			a = t[i];
		return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t
	}

	function Zp(t) {
		return Math.log(t)
	}

	function Kp(t) {
		return Math.exp(t)
	}

	function Qp(t) {
		return -Math.log(-t)
	}

	function Jp(t) {
		return -Math.exp(-t)
	}

	function tg(t) {
		return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
	}

	function ng(t) {
		return (n, e) => -t(-n, e)
	}

	function eg(n) {
		const e = n(Zp, Kp),
			r = e.domain;
		let i, o, a = 10;

		function u() {
			return i = function(t) {
				return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), n => Math.log(n) / t)
			}(a), o = function(t) {
				return 10 === t ? tg : t === Math.E ? Math.exp : n => Math.pow(t, n)
			}(a), r()[0] < 0 ? (i = ng(i), o = ng(o), n(Qp, Jp)) : n(Zp, Kp), e
		}
		return e.base = function(t) {
			return arguments.length ? (a = +t, u()) : a
		}, e.domain = function(t) {
			return arguments.length ? (r(t), u()) : r()
		}, e.ticks = t => {
			const n = r();
			let e = n[0],
				u = n[n.length - 1];
			const c = u < e;
			c && ([e, u] = [u, e]);
			let f, s, l = i(e),
				h = i(u);
			const d = null == t ? 10 : +t;
			let p = [];
			if (!(a % 1) && h - l < d) {
				if (l = Math.floor(l), h = Math.ceil(h), e > 0) {
					for (; l <= h; ++l)
						for (f = 1; f < a; ++f)
							if (s = l < 0 ? f / o(-l) : f * o(l), !(s < e)) {
								if (s > u) break;
								p.push(s)
							}
				} else
					for (; l <= h; ++l)
						for (f = a - 1; f >= 1; --f)
							if (s = l > 0 ? f / o(-l) : f * o(l), !(s < e)) {
								if (s > u) break;
								p.push(s)
							} 2 * p.length < d && (p = B(e, u, d))
			} else p = B(l, h, Math.min(h - l, d)).map(o);
			return c ? p.reverse() : p
		}, e.tickFormat = (n, r) => {
			if (null == n && (n = 10), null == r && (r = 10 === a ? "s" : ","), "function" != typeof r && (a % 1 || null != (r = Sc(r)).precision || (r.trim = !0), r = t.format(r)), n === 1 / 0) return r;
			const u = Math.max(1, a * n / e.ticks().length);
			return t => {
				let n = t / o(Math.round(i(t)));
				return n * a < a - .5 && (n *= a), n <= u ? r(t) : ""
			}
		}, e.nice = () => r(Wp(r(), {
			floor: t => o(Math.floor(i(t))),
			ceil: t => o(Math.ceil(i(t)))
		})), e
	}

	function rg(t) {
		return function(n) {
			return Math.sign(n) * Math.log1p(Math.abs(n / t))
		}
	}

	function ig(t) {
		return function(n) {
			return Math.sign(n) * Math.expm1(Math.abs(n)) * t
		}
	}

	function og(t) {
		var n = 1,
			e = t(rg(n), ig(n));
		return e.constant = function(e) {
			return arguments.length ? t(rg(n = +e), ig(n)) : n
		}, Vp(e)
	}

	function ag(t) {
		return function(n) {
			return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
		}
	}

	function ug(t) {
		return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
	}

	function cg(t) {
		return t < 0 ? -t * t : t * t
	}

	function fg(t) {
		var n = t(Bp, Bp),
			e = 1;

		function r() {
			return 1 === e ? t(Bp, Bp) : .5 === e ? t(ug, cg) : t(ag(e), ag(1 / e))
		}
		return n.exponent = function(t) {
			return arguments.length ? (e = +t, r()) : e
		}, Vp(n)
	}

	function sg() {
		var t = fg(Hp());
		return t.copy = function() {
			return $p(t, sg()).exponent(t.exponent())
		}, zp.apply(t, arguments), t
	}

	function lg(t) {
		return Math.sign(t) * t * t
	}

	function hg(t) {
		return Math.sign(t) * Math.sqrt(Math.abs(t))
	}
	var dg = new Date,
		pg = new Date;

	function gg(t, n, e, r) {
		function i(n) {
			return t(n = 0 === arguments.length ? new Date : new Date(+n)), n
		}
		return i.floor = function(n) {
			return t(n = new Date(+n)), n
		}, i.ceil = function(e) {
			return t(e = new Date(e - 1)), n(e, 1), t(e), e
		}, i.round = function(t) {
			var n = i(t),
				e = i.ceil(t);
			return t - n < e - t ? n : e
		}, i.offset = function(t, e) {
			return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
		}, i.range = function(e, r, o) {
			var a, u = [];
			if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;
			do {
				u.push(a = new Date(+e)), n(e, o), t(e)
			} while (a < e && e < r);
			return u
		}, i.filter = function(e) {
			return gg((function(n) {
				if (n >= n)
					for (; t(n), !e(n);) n.setTime(n - 1)
			}), (function(t, r) {
				if (t >= t)
					if (r < 0)
						for (; ++r <= 0;)
							for (; n(t, -1), !e(t););
					else
						for (; --r >= 0;)
							for (; n(t, 1), !e(t););
			}))
		}, e && (i.count = function(n, r) {
			return dg.setTime(+n), pg.setTime(+r), t(dg), t(pg), Math.floor(e(dg, pg))
		}, i.every = function(t) {
			return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) {
				return r(n) % t == 0
			} : function(n) {
				return i.count(0, n) % t == 0
			}) : i : null
		}), i
	}
	var yg = gg((function() {}), (function(t, n) {
		t.setTime(+t + n)
	}), (function(t, n) {
		return n - t
	}));
	yg.every = function(t) {
		return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? gg((function(n) {
			n.setTime(Math.floor(n / t) * t)
		}), (function(n, e) {
			n.setTime(+n + e * t)
		}), (function(n, e) {
			return (e - n) / t
		})) : yg : null
	};
	var vg = yg,
		_g = yg.range;
	const bg = 1e3,
		mg = 6e4,
		xg = 36e5,
		wg = 864e5,
		Mg = 6048e5,
		Ag = 2592e6,
		Tg = 31536e6;
	var Sg = gg((function(t) {
			t.setTime(t - t.getMilliseconds())
		}), (function(t, n) {
			t.setTime(+t + n * bg)
		}), (function(t, n) {
			return (n - t) / bg
		}), (function(t) {
			return t.getUTCSeconds()
		})),
		Eg = Sg,
		kg = Sg.range,
		Ng = gg((function(t) {
			t.setTime(t - t.getMilliseconds() - t.getSeconds() * bg)
		}), (function(t, n) {
			t.setTime(+t + n * mg)
		}), (function(t, n) {
			return (n - t) / mg
		}), (function(t) {
			return t.getMinutes()
		})),
		Cg = Ng,
		Pg = Ng.range,
		zg = gg((function(t) {
			t.setTime(t - t.getMilliseconds() - t.getSeconds() * bg - t.getMinutes() * mg)
		}), (function(t, n) {
			t.setTime(+t + n * xg)
		}), (function(t, n) {
			return (n - t) / xg
		}), (function(t) {
			return t.getHours()
		})),
		Dg = zg,
		Rg = zg.range,
		Fg = gg((t => t.setHours(0, 0, 0, 0)), ((t, n) => t.setDate(t.getDate() + n)), ((t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * mg) / wg), (t => t.getDate() - 1)),
		qg = Fg,
		Og = Fg.range;

	function Ug(t) {
		return gg((function(n) {
			n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
		}), (function(t, n) {
			t.setDate(t.getDate() + 7 * n)
		}), (function(t, n) {
			return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * mg) / Mg
		}))
	}
	var Ig = Ug(0),
		Bg = Ug(1),
		Yg = Ug(2),
		Lg = Ug(3),
		jg = Ug(4),
		$g = Ug(5),
		Hg = Ug(6),
		Xg = Ig.range,
		Gg = Bg.range,
		Vg = Yg.range,
		Wg = Lg.range,
		Zg = jg.range,
		Kg = $g.range,
		Qg = Hg.range,
		Jg = gg((function(t) {
			t.setDate(1), t.setHours(0, 0, 0, 0)
		}), (function(t, n) {
			t.setMonth(t.getMonth() + n)
		}), (function(t, n) {
			return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
		}), (function(t) {
			return t.getMonth()
		})),
		ty = Jg,
		ny = Jg.range,
		ey = gg((function(t) {
			t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
		}), (function(t, n) {
			t.setFullYear(t.getFullYear() + n)
		}), (function(t, n) {
			return n.getFullYear() - t.getFullYear()
		}), (function(t) {
			return t.getFullYear()
		}));
	ey.every = function(t) {
		return isFinite(t = Math.floor(t)) && t > 0 ? gg((function(n) {
			n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
		}), (function(n, e) {
			n.setFullYear(n.getFullYear() + e * t)
		})) : null
	};
	var ry = ey,
		iy = ey.range,
		oy = gg((function(t) {
			t.setUTCSeconds(0, 0)
		}), (function(t, n) {
			t.setTime(+t + n * mg)
		}), (function(t, n) {
			return (n - t) / mg
		}), (function(t) {
			return t.getUTCMinutes()
		})),
		ay = oy,
		uy = oy.range,
		cy = gg((function(t) {
			t.setUTCMinutes(0, 0, 0)
		}), (function(t, n) {
			t.setTime(+t + n * xg)
		}), (function(t, n) {
			return (n - t) / xg
		}), (function(t) {
			return t.getUTCHours()
		})),
		fy = cy,
		sy = cy.range,
		ly = gg((function(t) {
			t.setUTCHours(0, 0, 0, 0)
		}), (function(t, n) {
			t.setUTCDate(t.getUTCDate() + n)
		}), (function(t, n) {
			return (n - t) / wg
		}), (function(t) {
			return t.getUTCDate() - 1
		})),
		hy = ly,
		dy = ly.range;

	function py(t) {
		return gg((function(n) {
			n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
		}), (function(t, n) {
			t.setUTCDate(t.getUTCDate() + 7 * n)
		}), (function(t, n) {
			return (n - t) / Mg
		}))
	}
	var gy = py(0),
		yy = py(1),
		vy = py(2),
		_y = py(3),
		by = py(4),
		my = py(5),
		xy = py(6),
		wy = gy.range,
		My = yy.range,
		Ay = vy.range,
		Ty = _y.range,
		Sy = by.range,
		Ey = my.range,
		ky = xy.range,
		Ny = gg((function(t) {
			t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
		}), (function(t, n) {
			t.setUTCMonth(t.getUTCMonth() + n)
		}), (function(t, n) {
			return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
		}), (function(t) {
			return t.getUTCMonth()
		})),
		Cy = Ny,
		Py = Ny.range,
		zy = gg((function(t) {
			t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
		}), (function(t, n) {
			t.setUTCFullYear(t.getUTCFullYear() + n)
		}), (function(t, n) {
			return n.getUTCFullYear() - t.getUTCFullYear()
		}), (function(t) {
			return t.getUTCFullYear()
		}));
	zy.every = function(t) {
		return isFinite(t = Math.floor(t)) && t > 0 ? gg((function(n) {
			n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
		}), (function(n, e) {
			n.setUTCFullYear(n.getUTCFullYear() + e * t)
		})) : null
	};
	var Dy = zy,
		Ry = zy.range;

	function Fy(t, n, e, i, o, a) {
		const u = [
			[Eg, 1, bg],
			[Eg, 5, 5e3],
			[Eg, 15, 15e3],
			[Eg, 30, 3e4],
			[a, 1, mg],
			[a, 5, 3e5],
			[a, 15, 9e5],
			[a, 30, 18e5],
			[o, 1, xg],
			[o, 3, 108e5],
			[o, 6, 216e5],
			[o, 12, 432e5],
			[i, 1, wg],
			[i, 2, 1728e5],
			[e, 1, Mg],
			[n, 1, Ag],
			[n, 3, 7776e6],
			[t, 1, Tg]
		];

		function c(n, e, i) {
			const o = Math.abs(e - n) / i,
				a = r((([, , t]) => t)).right(u, o);
			if (a === u.length) return t.every(L(n / Tg, e / Tg, i));
			if (0 === a) return vg.every(Math.max(L(n, e, i), 1));
			const [c, f] = u[o / u[a - 1][2] < u[a][2] / o ? a - 1 : a];
			return c.every(f)
		}
		return [function(t, n, e) {
			const r = n < t;
			r && ([t, n] = [n, t]);
			const i = e && "function" == typeof e.range ? e : c(t, n, e),
				o = i ? i.range(t, +n + 1) : [];
			return r ? o.reverse() : o
		}, c]
	}
	const [qy, Oy] = Fy(Dy, Cy, gy, hy, fy, ay), [Uy, Iy] = Fy(ry, ty, Ig, qg, Dg, Cg);

	function By(t) {
		if (0 <= t.y && t.y < 100) {
			var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
			return n.setFullYear(t.y), n
		}
		return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
	}

	function Yy(t) {
		if (0 <= t.y && t.y < 100) {
			var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
			return n.setUTCFullYear(t.y), n
		}
		return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
	}

	function Ly(t, n, e) {
		return {
			y: t,
			m: n,
			d: e,
			H: 0,
			M: 0,
			S: 0,
			L: 0
		}
	}

	function jy(t) {
		var n = t.dateTime,
			e = t.date,
			r = t.time,
			i = t.periods,
			o = t.days,
			a = t.shortDays,
			u = t.months,
			c = t.shortMonths,
			f = Ky(i),
			s = Qy(i),
			l = Ky(o),
			h = Qy(o),
			d = Ky(a),
			p = Qy(a),
			g = Ky(u),
			y = Qy(u),
			v = Ky(c),
			_ = Qy(c),
			b = {
				a: function(t) {
					return a[t.getDay()]
				},
				A: function(t) {
					return o[t.getDay()]
				},
				b: function(t) {
					return c[t.getMonth()]
				},
				B: function(t) {
					return u[t.getMonth()]
				},
				c: null,
				d: bv,
				e: bv,
				f: Av,
				g: Fv,
				G: Ov,
				H: mv,
				I: xv,
				j: wv,
				L: Mv,
				m: Tv,
				M: Sv,
				p: function(t) {
					return i[+(t.getHours() >= 12)]
				},
				q: function(t) {
					return 1 + ~~(t.getMonth() / 3)
				},
				Q: a_,
				s: u_,
				S: Ev,
				u: kv,
				U: Nv,
				V: Pv,
				w: zv,
				W: Dv,
				x: null,
				X: null,
				y: Rv,
				Y: qv,
				Z: Uv,
				"%": o_
			},
			m = {
				a: function(t) {
					return a[t.getUTCDay()]
				},
				A: function(t) {
					return o[t.getUTCDay()]
				},
				b: function(t) {
					return c[t.getUTCMonth()]
				},
				B: function(t) {
					return u[t.getUTCMonth()]
				},
				c: null,
				d: Iv,
				e: Iv,
				f: $v,
				g: n_,
				G: r_,
				H: Bv,
				I: Yv,
				j: Lv,
				L: jv,
				m: Hv,
				M: Xv,
				p: function(t) {
					return i[+(t.getUTCHours() >= 12)]
				},
				q: function(t) {
					return 1 + ~~(t.getUTCMonth() / 3)
				},
				Q: a_,
				s: u_,
				S: Gv,
				u: Vv,
				U: Wv,
				V: Kv,
				w: Qv,
				W: Jv,
				x: null,
				X: null,
				y: t_,
				Y: e_,
				Z: i_,
				"%": o_
			},
			x = {
				a: function(t, n, e) {
					var r = d.exec(n.slice(e));
					return r ? (t.w = p.get(r[0].toLowerCase()), e + r[0].length) : -1
				},
				A: function(t, n, e) {
					var r = l.exec(n.slice(e));
					return r ? (t.w = h.get(r[0].toLowerCase()), e + r[0].length) : -1
				},
				b: function(t, n, e) {
					var r = v.exec(n.slice(e));
					return r ? (t.m = _.get(r[0].toLowerCase()), e + r[0].length) : -1
				},
				B: function(t, n, e) {
					var r = g.exec(n.slice(e));
					return r ? (t.m = y.get(r[0].toLowerCase()), e + r[0].length) : -1
				},
				c: function(t, e, r) {
					return A(t, n, e, r)
				},
				d: fv,
				e: fv,
				f: gv,
				g: ov,
				G: iv,
				H: lv,
				I: lv,
				j: sv,
				L: pv,
				m: cv,
				M: hv,
				p: function(t, n, e) {
					var r = f.exec(n.slice(e));
					return r ? (t.p = s.get(r[0].toLowerCase()), e + r[0].length) : -1
				},
				q: uv,
				Q: vv,
				s: _v,
				S: dv,
				u: tv,
				U: nv,
				V: ev,
				w: Jy,
				W: rv,
				x: function(t, n, r) {
					return A(t, e, n, r)
				},
				X: function(t, n, e) {
					return A(t, r, n, e)
				},
				y: ov,
				Y: iv,
				Z: av,
				"%": yv
			};

		function w(t, n) {
			return function(e) {
				var r, i, o, a = [],
					u = -1,
					c = 0,
					f = t.length;
				for (e instanceof Date || (e = new Date(+e)); ++u < f;) 37 === t.charCodeAt(u) && (a.push(t.slice(c, u)), null != (i = Hy[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), a.push(r), c = u + 1);
				return a.push(t.slice(c, u)), a.join("")
			}
		}

		function M(t, n) {
			return function(e) {
				var r, i, o = Ly(1900, void 0, 1);
				if (A(o, t, e += "", 0) != e.length) return null;
				if ("Q" in o) return new Date(o.Q);
				if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
				if (n && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) {
					if (o.V < 1 || o.V > 53) return null;
					"w" in o || (o.w = 1), "Z" in o ? (i = (r = Yy(Ly(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? yy.ceil(r) : yy(r), r = hy.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = By(Ly(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? Bg.ceil(r) : Bg(r), r = qg.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7)
				} else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? Yy(Ly(o.y, 0, 1)).getUTCDay() : By(Ly(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);
				return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, Yy(o)) : By(o)
			}
		}

		function A(t, n, e, r) {
			for (var i, o, a = 0, u = n.length, c = e.length; a < u;) {
				if (r >= c) return -1;
				if (37 === (i = n.charCodeAt(a++))) {
					if (i = n.charAt(a++), !(o = x[i in Hy ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0) return -1
				} else if (i != e.charCodeAt(r++)) return -1
			}
			return r
		}
		return b.x = w(e, b), b.X = w(r, b), b.c = w(n, b), m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), {
			format: function(t) {
				var n = w(t += "", b);
				return n.toString = function() {
					return t
				}, n
			},
			parse: function(t) {
				var n = M(t += "", !1);
				return n.toString = function() {
					return t
				}, n
			},
			utcFormat: function(t) {
				var n = w(t += "", m);
				return n.toString = function() {
					return t
				}, n
			},
			utcParse: function(t) {
				var n = M(t += "", !0);
				return n.toString = function() {
					return t
				}, n
			}
		}
	}
	var $y, Hy = {
			"-": "",
			_: " ",
			0: "0"
		},
		Xy = /^\s*\d+/,
		Gy = /^%/,
		Vy = /[\\^$*+?|[\]().{}]/g;

	function Wy(t, n, e) {
		var r = t < 0 ? "-" : "",
			i = (r ? -t : t) + "",
			o = i.length;
		return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
	}

	function Zy(t) {
		return t.replace(Vy, "\\$&")
	}

	function Ky(t) {
		return new RegExp("^(?:" + t.map(Zy).join("|") + ")", "i")
	}

	function Qy(t) {
		return new Map(t.map(((t, n) => [t.toLowerCase(), n])))
	}

	function Jy(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 1));
		return r ? (t.w = +r[0], e + r[0].length) : -1
	}

	function tv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 1));
		return r ? (t.u = +r[0], e + r[0].length) : -1
	}

	function nv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.U = +r[0], e + r[0].length) : -1
	}

	function ev(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.V = +r[0], e + r[0].length) : -1
	}

	function rv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.W = +r[0], e + r[0].length) : -1
	}

	function iv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 4));
		return r ? (t.y = +r[0], e + r[0].length) : -1
	}

	function ov(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
	}

	function av(t, n, e) {
		var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
		return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
	}

	function uv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 1));
		return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1
	}

	function cv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.m = r[0] - 1, e + r[0].length) : -1
	}

	function fv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.d = +r[0], e + r[0].length) : -1
	}

	function sv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 3));
		return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
	}

	function lv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.H = +r[0], e + r[0].length) : -1
	}

	function hv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.M = +r[0], e + r[0].length) : -1
	}

	function dv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 2));
		return r ? (t.S = +r[0], e + r[0].length) : -1
	}

	function pv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 3));
		return r ? (t.L = +r[0], e + r[0].length) : -1
	}

	function gv(t, n, e) {
		var r = Xy.exec(n.slice(e, e + 6));
		return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
	}

	function yv(t, n, e) {
		var r = Gy.exec(n.slice(e, e + 1));
		return r ? e + r[0].length : -1
	}

	function vv(t, n, e) {
		var r = Xy.exec(n.slice(e));
		return r ? (t.Q = +r[0], e + r[0].length) : -1
	}

	function _v(t, n, e) {
		var r = Xy.exec(n.slice(e));
		return r ? (t.s = +r[0], e + r[0].length) : -1
	}

	function bv(t, n) {
		return Wy(t.getDate(), n, 2)
	}

	function mv(t, n) {
		return Wy(t.getHours(), n, 2)
	}

	function xv(t, n) {
		return Wy(t.getHours() % 12 || 12, n, 2)
	}

	function wv(t, n) {
		return Wy(1 + qg.count(ry(t), t), n, 3)
	}

	function Mv(t, n) {
		return Wy(t.getMilliseconds(), n, 3)
	}

	function Av(t, n) {
		return Mv(t, n) + "000"
	}

	function Tv(t, n) {
		return Wy(t.getMonth() + 1, n, 2)
	}

	function Sv(t, n) {
		return Wy(t.getMinutes(), n, 2)
	}

	function Ev(t, n) {
		return Wy(t.getSeconds(), n, 2)
	}

	function kv(t) {
		var n = t.getDay();
		return 0 === n ? 7 : n
	}

	function Nv(t, n) {
		return Wy(Ig.count(ry(t) - 1, t), n, 2)
	}

	function Cv(t) {
		var n = t.getDay();
		return n >= 4 || 0 === n ? jg(t) : jg.ceil(t)
	}

	function Pv(t, n) {
		return t = Cv(t), Wy(jg.count(ry(t), t) + (4 === ry(t).getDay()), n, 2)
	}

	function zv(t) {
		return t.getDay()
	}

	function Dv(t, n) {
		return Wy(Bg.count(ry(t) - 1, t), n, 2)
	}

	function Rv(t, n) {
		return Wy(t.getFullYear() % 100, n, 2)
	}

	function Fv(t, n) {
		return Wy((t = Cv(t)).getFullYear() % 100, n, 2)
	}

	function qv(t, n) {
		return Wy(t.getFullYear() % 1e4, n, 4)
	}

	function Ov(t, n) {
		var e = t.getDay();
		return Wy((t = e >= 4 || 0 === e ? jg(t) : jg.ceil(t)).getFullYear() % 1e4, n, 4)
	}

	function Uv(t) {
		var n = t.getTimezoneOffset();
		return (n > 0 ? "-" : (n *= -1, "+")) + Wy(n / 60 | 0, "0", 2) + Wy(n % 60, "0", 2)
	}

	function Iv(t, n) {
		return Wy(t.getUTCDate(), n, 2)
	}

	function Bv(t, n) {
		return Wy(t.getUTCHours(), n, 2)
	}

	function Yv(t, n) {
		return Wy(t.getUTCHours() % 12 || 12, n, 2)
	}

	function Lv(t, n) {
		return Wy(1 + hy.count(Dy(t), t), n, 3)
	}

	function jv(t, n) {
		return Wy(t.getUTCMilliseconds(), n, 3)
	}

	function $v(t, n) {
		return jv(t, n) + "000"
	}

	function Hv(t, n) {
		return Wy(t.getUTCMonth() + 1, n, 2)
	}

	function Xv(t, n) {
		return Wy(t.getUTCMinutes(), n, 2)
	}

	function Gv(t, n) {
		return Wy(t.getUTCSeconds(), n, 2)
	}

	function Vv(t) {
		var n = t.getUTCDay();
		return 0 === n ? 7 : n
	}

	function Wv(t, n) {
		return Wy(gy.count(Dy(t) - 1, t), n, 2)
	}

	function Zv(t) {
		var n = t.getUTCDay();
		return n >= 4 || 0 === n ? by(t) : by.ceil(t)
	}

	function Kv(t, n) {
		return t = Zv(t), Wy(by.count(Dy(t), t) + (4 === Dy(t).getUTCDay()), n, 2)
	}

	function Qv(t) {
		return t.getUTCDay()
	}

	function Jv(t, n) {
		return Wy(yy.count(Dy(t) - 1, t), n, 2)
	}

	function t_(t, n) {
		return Wy(t.getUTCFullYear() % 100, n, 2)
	}

	function n_(t, n) {
		return Wy((t = Zv(t)).getUTCFullYear() % 100, n, 2)
	}

	function e_(t, n) {
		return Wy(t.getUTCFullYear() % 1e4, n, 4)
	}

	function r_(t, n) {
		var e = t.getUTCDay();
		return Wy((t = e >= 4 || 0 === e ? by(t) : by.ceil(t)).getUTCFullYear() % 1e4, n, 4)
	}

	function i_() {
		return "+0000"
	}

	function o_() {
		return "%"
	}

	function a_(t) {
		return +t
	}

	function u_(t) {
		return Math.floor(+t / 1e3)
	}

	function c_(n) {
		return $y = jy(n), t.timeFormat = $y.format, t.timeParse = $y.parse, t.utcFormat = $y.utcFormat, t.utcParse = $y.utcParse, $y
	}
	t.timeFormat = void 0, t.timeParse = void 0, t.utcFormat = void 0, t.utcParse = void 0, c_({
		dateTime: "%x, %X",
		date: "%-m/%-d/%Y",
		time: "%-I:%M:%S %p",
		periods: ["AM", "PM"],
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});
	var f_ = "%Y-%m-%dT%H:%M:%S.%LZ";
	var s_ = Date.prototype.toISOString ? function(t) {
			return t.toISOString()
		} : t.utcFormat(f_),
		l_ = s_;
	var h_ = +new Date("2000-01-01T00:00:00.000Z") ? function(t) {
			var n = new Date(t);
			return isNaN(n) ? null : n
		} : t.utcParse(f_),
		d_ = h_;

	function p_(t) {
		return new Date(t)
	}

	function g_(t) {
		return t instanceof Date ? +t : +new Date(+t)
	}

	function y_(t, n, e, r, i, o, a, u, c, f) {
		var s = Xp(),
			l = s.invert,
			h = s.domain,
			d = f(".%L"),
			p = f(":%S"),
			g = f("%I:%M"),
			y = f("%I %p"),
			v = f("%a %d"),
			_ = f("%b %d"),
			b = f("%B"),
			m = f("%Y");

		function x(t) {
			return (c(t) < t ? d : u(t) < t ? p : a(t) < t ? g : o(t) < t ? y : r(t) < t ? i(t) < t ? v : _ : e(t) < t ? b : m)(t)
		}
		return s.invert = function(t) {
			return new Date(l(t))
		}, s.domain = function(t) {
			return arguments.length ? h(Array.from(t, g_)) : h().map(p_)
		}, s.ticks = function(n) {
			var e = h();
			return t(e[0], e[e.length - 1], null == n ? 10 : n)
		}, s.tickFormat = function(t, n) {
			return null == n ? x : f(n)
		}, s.nice = function(t) {
			var e = h();
			return t && "function" == typeof t.range || (t = n(e[0], e[e.length - 1], null == t ? 10 : t)), t ? h(Wp(e, t)) : s
		}, s.copy = function() {
			return $p(s, y_(t, n, e, r, i, o, a, u, c, f))
		}, s
	}

	function v_() {
		var t, n, e, r, i, o = 0,
			a = 1,
			u = Bp,
			c = !1;

		function f(n) {
			return null == n || isNaN(n = +n) ? i : u(0 === e ? .5 : (n = (r(n) - t) * e, c ? Math.max(0, Math.min(1, n)) : n))
		}

		function s(t) {
			return function(n) {
				var e, r;
				return arguments.length ? ([e, r] = n, u = t(e, r), f) : [u(0), u(1)]
			}
		}
		return f.domain = function(i) {
				return arguments.length ? ([o, a] = i, t = r(o = +o), n = r(a = +a), e = t === n ? 0 : 1 / (n - t), f) : [o, a]
			}, f.clamp = function(t) {
				return arguments.length ? (c = !!t, f) : c
			}, f.interpolator = function(t) {
				return arguments.length ? (u = t, f) : u
			}, f.range = s(qr), f.rangeRound = s(Or), f.unknown = function(t) {
				return arguments.length ? (i = t, f) : i
			},
			function(i) {
				return r = i, t = i(o), n = i(a), e = t === n ? 0 : 1 / (n - t), f
			}
	}

	function __(t, n) {
		return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
	}

	function b_() {
		var t = fg(v_());
		return t.copy = function() {
			return __(t, b_()).exponent(t.exponent())
		}, Dp.apply(t, arguments)
	}

	function m_() {
		var t, n, e, r, i, o, a, u = 0,
			c = .5,
			f = 1,
			s = 1,
			l = Bp,
			h = !1;

		function d(t) {
			return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - n) * (s * t < s * n ? r : i), l(h ? Math.max(0, Math.min(1, t)) : t))
		}

		function p(t) {
			return function(n) {
				var e, r, i;
				return arguments.length ? ([e, r, i] = n, l = ei(t, [e, r, i]), d) : [l(0), l(.5), l(1)]
			}
		}
		return d.domain = function(a) {
				return arguments.length ? ([u, c, f] = a, t = o(u = +u), n = o(c = +c), e = o(f = +f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), s = n < t ? -1 : 1, d) : [u, c, f]
			}, d.clamp = function(t) {
				return arguments.length ? (h = !!t, d) : h
			}, d.interpolator = function(t) {
				return arguments.length ? (l = t, d) : l
			}, d.range = p(qr), d.rangeRound = p(Or), d.unknown = function(t) {
				return arguments.length ? (a = t, d) : a
			},
			function(a) {
				return o = a, t = a(u), n = a(c), e = a(f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), s = n < t ? -1 : 1, d
			}
	}

	function x_() {
		var t = fg(m_());
		return t.copy = function() {
			return __(t, x_()).exponent(t.exponent())
		}, Dp.apply(t, arguments)
	}

	function w_(t) {
		for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
		return e
	}
	var M_ = w_("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
		A_ = w_("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
		T_ = w_("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
		S_ = w_("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
		E_ = w_("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
		k_ = w_("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
		N_ = w_("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
		C_ = w_("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
		P_ = w_("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
		z_ = w_("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),
		D_ = t => Tr(t[t.length - 1]),
		R_ = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(w_),
		F_ = D_(R_),
		q_ = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(w_),
		O_ = D_(q_),
		U_ = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(w_),
		I_ = D_(U_),
		B_ = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(w_),
		Y_ = D_(B_),
		L_ = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(w_),
		j_ = D_(L_),
		$_ = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(w_),
		H_ = D_($_),
		X_ = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(w_),
		G_ = D_(X_),
		V_ = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(w_),
		W_ = D_(V_),
		Z_ = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(w_),
		K_ = D_(Z_),
		Q_ = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(w_),
		J_ = D_(Q_),
		tb = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(w_),
		nb = D_(tb),
		eb = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(w_),
		rb = D_(eb),
		ib = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(w_),
		ob = D_(ib),
		ab = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(w_),
		ub = D_(ab),
		cb = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(w_),
		fb = D_(cb),
		sb = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(w_),
		lb = D_(sb),
		hb = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(w_),
		db = D_(hb),
		pb = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(w_),
		gb = D_(pb),
		yb = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(w_),
		vb = D_(yb),
		_b = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(w_),
		bb = D_(_b),
		mb = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(w_),
		xb = D_(mb),
		wb = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(w_),
		Mb = D_(wb),
		Ab = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(w_),
		Tb = D_(Ab),
		Sb = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(w_),
		Eb = D_(Sb),
		kb = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(w_),
		Nb = D_(kb),
		Cb = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(w_),
		Pb = D_(Cb),
		zb = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(w_),
		Db = D_(zb);
	var Rb = ni(dr(300, .5, 0), dr(-240, .5, 1)),
		Fb = ni(dr(-100, .75, .35), dr(80, 1.5, .8)),
		qb = ni(dr(260, .75, .35), dr(80, 1.5, .8)),
		Ob = dr();
	var Ub = Se(),
		Ib = Math.PI / 3,
		Bb = 2 * Math.PI / 3;

	function Yb(t) {
		var n = t.length;
		return function(e) {
			return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
		}
	}
	var Lb = Yb(w_("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
		jb = Yb(w_("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
		$b = Yb(w_("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
		Hb = Yb(w_("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

	function Xb(t) {
		return function() {
			return t
		}
	}
	const Gb = Math.abs,
		Vb = Math.atan2,
		Wb = Math.cos,
		Zb = Math.max,
		Kb = Math.min,
		Qb = Math.sin,
		Jb = Math.sqrt,
		tm = 1e-12,
		nm = Math.PI,
		em = nm / 2,
		rm = 2 * nm;

	function im(t) {
		return t > 1 ? 0 : t < -1 ? nm : Math.acos(t)
	}

	function om(t) {
		return t >= 1 ? em : t <= -1 ? -em : Math.asin(t)
	}

	function am(t) {
		return t.innerRadius
	}

	function um(t) {
		return t.outerRadius
	}

	function cm(t) {
		return t.startAngle
	}

	function fm(t) {
		return t.endAngle
	}

	function sm(t) {
		return t && t.padAngle
	}

	function lm(t, n, e, r, i, o, a, u) {
		var c = e - t,
			f = r - n,
			s = a - i,
			l = u - o,
			h = l * c - s * f;
		if (!(h * h < tm)) return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f]
	}

	function hm(t, n, e, r, i, o, a) {
		var u = t - e,
			c = n - r,
			f = (a ? o : -o) / Jb(u * u + c * c),
			s = f * c,
			l = -f * u,
			h = t + s,
			d = n + l,
			p = e + s,
			g = r + l,
			y = (h + p) / 2,
			v = (d + g) / 2,
			_ = p - h,
			b = g - d,
			m = _ * _ + b * b,
			x = i - o,
			w = h * g - p * d,
			M = (b < 0 ? -1 : 1) * Jb(Zb(0, x * x * m - w * w)),
			A = (w * b - _ * M) / m,
			T = (-w * _ - b * M) / m,
			S = (w * b + _ * M) / m,
			E = (-w * _ + b * M) / m,
			k = A - y,
			N = T - v,
			C = S - y,
			P = E - v;
		return k * k + N * N > C * C + P * P && (A = S, T = E), {
			cx: A,
			cy: T,
			x01: -s,
			y01: -l,
			x11: A * (i / x - 1),
			y11: T * (i / x - 1)
		}
	}
	var dm = Array.prototype.slice;

	function pm(t) {
		return "object" == typeof t && "length" in t ? t : Array.from(t)
	}

	function gm(t) {
		this._context = t
	}

	function ym(t) {
		return new gm(t)
	}

	function vm(t) {
		return t[0]
	}

	function _m(t) {
		return t[1]
	}

	function bm(t, n) {
		var e = Xb(!0),
			r = null,
			i = ym,
			o = null;

		function a(a) {
			var u, c, f, s = (a = pm(a)).length,
				l = !1;
			for (null == r && (o = i(f = wa())), u = 0; u <= s; ++u) !(u < s && e(c = a[u], u, a)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+t(c, u, a), +n(c, u, a));
			if (f) return o = null, f + "" || null
		}
		return t = "function" == typeof t ? t : void 0 === t ? vm : Xb(t), n = "function" == typeof n ? n : void 0 === n ? _m : Xb(n), a.x = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Xb(+n), a) : t
		}, a.y = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : Xb(+t), a) : n
		}, a.defined = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : Xb(!!t), a) : e
		}, a.curve = function(t) {
			return arguments.length ? (i = t, null != r && (o = i(r)), a) : i
		}, a.context = function(t) {
			return arguments.length ? (null == t ? r = o = null : o = i(r = t), a) : r
		}, a
	}

	function mm(t, n, e) {
		var r = null,
			i = Xb(!0),
			o = null,
			a = ym,
			u = null;

		function c(c) {
			var f, s, l, h, d, p = (c = pm(c)).length,
				g = !1,
				y = new Array(p),
				v = new Array(p);
			for (null == o && (u = a(d = wa())), f = 0; f <= p; ++f) {
				if (!(f < p && i(h = c[f], f, c)) === g)
					if (g = !g) s = f, u.areaStart(), u.lineStart();
					else {
						for (u.lineEnd(), u.lineStart(), l = f - 1; l >= s; --l) u.point(y[l], v[l]);
						u.lineEnd(), u.areaEnd()
					} g && (y[f] = +t(h, f, c), v[f] = +n(h, f, c), u.point(r ? +r(h, f, c) : y[f], e ? +e(h, f, c) : v[f]))
			}
			if (d) return u = null, d + "" || null
		}

		function f() {
			return bm().defined(i).curve(a).context(o)
		}
		return t = "function" == typeof t ? t : void 0 === t ? vm : Xb(+t), n = "function" == typeof n ? n : Xb(void 0 === n ? 0 : +n), e = "function" == typeof e ? e : void 0 === e ? _m : Xb(+e), c.x = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Xb(+n), r = null, c) : t
		}, c.x0 = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Xb(+n), c) : t
		}, c.x1 = function(t) {
			return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Xb(+t), c) : r
		}, c.y = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : Xb(+t), e = null, c) : n
		}, c.y0 = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : Xb(+t), c) : n
		}, c.y1 = function(t) {
			return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : Xb(+t), c) : e
		}, c.lineX0 = c.lineY0 = function() {
			return f().x(t).y(n)
		}, c.lineY1 = function() {
			return f().x(t).y(e)
		}, c.lineX1 = function() {
			return f().x(r).y(n)
		}, c.defined = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Xb(!!t), c) : i
		}, c.curve = function(t) {
			return arguments.length ? (a = t, null != o && (u = a(o)), c) : a
		}, c.context = function(t) {
			return arguments.length ? (null == t ? o = u = null : u = a(o = t), c) : o
		}, c
	}

	function xm(t, n) {
		return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
	}

	function wm(t) {
		return t
	}
	gm.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
				default:
					this._context.lineTo(t, n)
			}
		}
	};
	var Mm = Tm(ym);

	function Am(t) {
		this._curve = t
	}

	function Tm(t) {
		function n(n) {
			return new Am(t(n))
		}
		return n._curve = t, n
	}

	function Sm(t) {
		var n = t.curve;
		return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
			return arguments.length ? n(Tm(t)) : n()._curve
		}, t
	}

	function Em() {
		return Sm(bm().curve(Mm))
	}

	function km() {
		var t = mm().curve(Mm),
			n = t.curve,
			e = t.lineX0,
			r = t.lineX1,
			i = t.lineY0,
			o = t.lineY1;
		return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
			return Sm(e())
		}, delete t.lineX0, t.lineEndAngle = function() {
			return Sm(r())
		}, delete t.lineX1, t.lineInnerRadius = function() {
			return Sm(i())
		}, delete t.lineY0, t.lineOuterRadius = function() {
			return Sm(o())
		}, delete t.lineY1, t.curve = function(t) {
			return arguments.length ? n(Tm(t)) : n()._curve
		}, t
	}

	function Nm(t, n) {
		return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
	}
	Am.prototype = {
		areaStart: function() {
			this._curve.areaStart()
		},
		areaEnd: function() {
			this._curve.areaEnd()
		},
		lineStart: function() {
			this._curve.lineStart()
		},
		lineEnd: function() {
			this._curve.lineEnd()
		},
		point: function(t, n) {
			this._curve.point(n * Math.sin(t), n * -Math.cos(t))
		}
	};
	class Cm {
		constructor(t, n) {
			this._context = t, this._x = n
		}
		areaStart() {
			this._line = 0
		}
		areaEnd() {
			this._line = NaN
		}
		lineStart() {
			this._point = 0
		}
		lineEnd() {
			(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		}
		point(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
				default:
					this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n)
			}
			this._x0 = t, this._y0 = n
		}
	}
	class Pm {
		constructor(t) {
			this._context = t
		}
		lineStart() {
			this._point = 0
		}
		lineEnd() {}
		point(t, n) {
			if (t = +t, n = +n, 0 == this._point++) this._x0 = t, this._y0 = n;
			else {
				const e = Nm(this._x0, this._y0),
					r = Nm(this._x0, this._y0 = (this._y0 + n) / 2),
					i = Nm(t, this._y0),
					o = Nm(t, n);
				this._context.moveTo(...e), this._context.bezierCurveTo(...r, ...i, ...o)
			}
		}
	}

	function zm(t) {
		return new Cm(t, !0)
	}

	function Dm(t) {
		return new Cm(t, !1)
	}

	function Rm(t) {
		return new Pm(t)
	}

	function Fm(t) {
		return t.source
	}

	function qm(t) {
		return t.target
	}

	function Om(t) {
		let n = Fm,
			e = qm,
			r = vm,
			i = _m,
			o = null,
			a = null;

		function u() {
			let u;
			const c = dm.call(arguments),
				f = n.apply(this, c),
				s = e.apply(this, c);
			if (null == o && (a = t(u = wa())), a.lineStart(), c[0] = f, a.point(+r.apply(this, c), +i.apply(this, c)), c[0] = s, a.point(+r.apply(this, c), +i.apply(this, c)), a.lineEnd(), u) return a = null, u + "" || null
		}
		return u.source = function(t) {
			return arguments.length ? (n = t, u) : n
		}, u.target = function(t) {
			return arguments.length ? (e = t, u) : e
		}, u.x = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : Xb(+t), u) : r
		}, u.y = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Xb(+t), u) : i
		}, u.context = function(n) {
			return arguments.length ? (null == n ? o = a = null : a = t(o = n), u) : o
		}, u
	}
	const Um = Jb(3);
	var Im = {
			draw(t, n) {
				const e = .59436 * Jb(n + Kb(n / 28, .75)),
					r = e / 2,
					i = r * Um;
				t.moveTo(0, e), t.lineTo(0, -e), t.moveTo(-i, -r), t.lineTo(i, r), t.moveTo(-i, r), t.lineTo(i, -r)
			}
		},
		Bm = {
			draw(t, n) {
				const e = Jb(n / nm);
				t.moveTo(e, 0), t.arc(0, 0, e, 0, rm)
			}
		},
		Ym = {
			draw(t, n) {
				const e = Jb(n / 5) / 2;
				t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
			}
		};
	const Lm = Jb(1 / 3),
		jm = 2 * Lm;
	var $m = {
			draw(t, n) {
				const e = Jb(n / jm),
					r = e * Lm;
				t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
			}
		},
		Hm = {
			draw(t, n) {
				const e = .62625 * Jb(n);
				t.moveTo(0, -e), t.lineTo(e, 0), t.lineTo(0, e), t.lineTo(-e, 0), t.closePath()
			}
		},
		Xm = {
			draw(t, n) {
				const e = .87559 * Jb(n - Kb(n / 7, 2));
				t.moveTo(-e, 0), t.lineTo(e, 0), t.moveTo(0, e), t.lineTo(0, -e)
			}
		},
		Gm = {
			draw(t, n) {
				const e = Jb(n),
					r = -e / 2;
				t.rect(r, r, e, e)
			}
		},
		Vm = {
			draw(t, n) {
				const e = .4431 * Jb(n);
				t.moveTo(e, e), t.lineTo(e, -e), t.lineTo(-e, -e), t.lineTo(-e, e), t.closePath()
			}
		};
	const Wm = Qb(nm / 10) / Qb(7 * nm / 10),
		Zm = Qb(rm / 10) * Wm,
		Km = -Wb(rm / 10) * Wm;
	var Qm = {
		draw(t, n) {
			const e = Jb(.8908130915292852 * n),
				r = Zm * e,
				i = Km * e;
			t.moveTo(0, -e), t.lineTo(r, i);
			for (let n = 1; n < 5; ++n) {
				const o = rm * n / 5,
					a = Wb(o),
					u = Qb(o);
				t.lineTo(u * e, -a * e), t.lineTo(a * r - u * i, u * r + a * i)
			}
			t.closePath()
		}
	};
	const Jm = Jb(3);
	var tx = {
		draw(t, n) {
			const e = -Jb(n / (3 * Jm));
			t.moveTo(0, 2 * e), t.lineTo(-Jm * e, -e), t.lineTo(Jm * e, -e), t.closePath()
		}
	};
	const nx = Jb(3);
	var ex = {
		draw(t, n) {
			const e = .6824 * Jb(n),
				r = e / 2,
				i = e * nx / 2;
			t.moveTo(0, -e), t.lineTo(i, r), t.lineTo(-i, r), t.closePath()
		}
	};
	const rx = -.5,
		ix = Jb(3) / 2,
		ox = 1 / Jb(12),
		ax = 3 * (ox / 2 + 1);
	var ux = {
			draw(t, n) {
				const e = Jb(n / ax),
					r = e / 2,
					i = e * ox,
					o = r,
					a = e * ox + e,
					u = -o,
					c = a;
				t.moveTo(r, i), t.lineTo(o, a), t.lineTo(u, c), t.lineTo(rx * r - ix * i, ix * r + rx * i), t.lineTo(rx * o - ix * a, ix * o + rx * a), t.lineTo(rx * u - ix * c, ix * u + rx * c), t.lineTo(rx * r + ix * i, rx * i - ix * r), t.lineTo(rx * o + ix * a, rx * a - ix * o), t.lineTo(rx * u + ix * c, rx * c - ix * u), t.closePath()
			}
		},
		cx = {
			draw(t, n) {
				const e = .6189 * Jb(n - Kb(n / 6, 1.7));
				t.moveTo(-e, -e), t.lineTo(e, e), t.moveTo(-e, e), t.lineTo(e, -e)
			}
		};
	const fx = [Bm, Ym, $m, Gm, Qm, tx, ux],
		sx = [Bm, Xm, cx, ex, Im, Vm, Hm];

	function lx() {}

	function hx(t, n, e) {
		t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
	}

	function dx(t) {
		this._context = t
	}

	function px(t) {
		this._context = t
	}

	function gx(t) {
		this._context = t
	}

	function yx(t, n) {
		this._basis = new dx(t), this._beta = n
	}
	dx.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 3:
					hx(this, this._x1, this._y1);
				case 2:
					this._context.lineTo(this._x1, this._y1)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
				default:
					hx(this, t, n)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
		}
	}, px.prototype = {
		areaStart: lx,
		areaEnd: lx,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x2, this._y2), this._context.closePath();
					break;
				case 2:
					this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
					break;
				case 3:
					this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
			}
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._x2 = t, this._y2 = n;
					break;
				case 1:
					this._point = 2, this._x3 = t, this._y3 = n;
					break;
				case 2:
					this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
					break;
				default:
					hx(this, t, n)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
		}
	}, gx.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3;
					var e = (this._x0 + 4 * this._x1 + t) / 6,
						r = (this._y0 + 4 * this._y1 + n) / 6;
					this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
					break;
				case 3:
					this._point = 4;
				default:
					hx(this, t, n)
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
		}
	}, yx.prototype = {
		lineStart: function() {
			this._x = [], this._y = [], this._basis.lineStart()
		},
		lineEnd: function() {
			var t = this._x,
				n = this._y,
				e = t.length - 1;
			if (e > 0)
				for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * a), this._beta * n[c] + (1 - this._beta) * (o + r * u));
			this._x = this._y = null, this._basis.lineEnd()
		},
		point: function(t, n) {
			this._x.push(+t), this._y.push(+n)
		}
	};
	var vx = function t(n) {
		function e(t) {
			return 1 === n ? new dx(t) : new yx(t, n)
		}
		return e.beta = function(n) {
			return t(+n)
		}, e
	}(.85);

	function _x(t, n, e) {
		t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
	}

	function bx(t, n) {
		this._context = t, this._k = (1 - n) / 6
	}
	bx.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x2, this._y2);
					break;
				case 3:
					_x(this, this._x1, this._y1)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2, this._x1 = t, this._y1 = n;
					break;
				case 2:
					this._point = 3;
				default:
					_x(this, t, n)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var mx = function t(n) {
		function e(t) {
			return new bx(t, n)
		}
		return e.tension = function(n) {
			return t(+n)
		}, e
	}(0);

	function xx(t, n) {
		this._context = t, this._k = (1 - n) / 6
	}
	xx.prototype = {
		areaStart: lx,
		areaEnd: lx,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x3, this._y3), this._context.closePath();
					break;
				case 2:
					this._context.lineTo(this._x3, this._y3), this._context.closePath();
					break;
				case 3:
					this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
			}
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._x3 = t, this._y3 = n;
					break;
				case 1:
					this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
					break;
				case 2:
					this._point = 3, this._x5 = t, this._y5 = n;
					break;
				default:
					_x(this, t, n)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var wx = function t(n) {
		function e(t) {
			return new xx(t, n)
		}
		return e.tension = function(n) {
			return t(+n)
		}, e
	}(0);

	function Mx(t, n) {
		this._context = t, this._k = (1 - n) / 6
	}
	Mx.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
					break;
				case 3:
					this._point = 4;
				default:
					_x(this, t, n)
			}
			this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Ax = function t(n) {
		function e(t) {
			return new Mx(t, n)
		}
		return e.tension = function(n) {
			return t(+n)
		}, e
	}(0);

	function Tx(t, n, e) {
		var r = t._x1,
			i = t._y1,
			o = t._x2,
			a = t._y2;
		if (t._l01_a > tm) {
			var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
				c = 3 * t._l01_a * (t._l01_a + t._l12_a);
			r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
		}
		if (t._l23_a > tm) {
			var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
				s = 3 * t._l23_a * (t._l23_a + t._l12_a);
			o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / s
		}
		t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2)
	}

	function Sx(t, n) {
		this._context = t, this._alpha = n
	}
	Sx.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x2, this._y2);
					break;
				case 3:
					this.point(this._x2, this._y2)
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			if (t = +t, n = +n, this._point) {
				var e = this._x2 - t,
					r = this._y2 - n;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3;
				default:
					Tx(this, t, n)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Ex = function t(n) {
		function e(t) {
			return n ? new Sx(t, n) : new bx(t, 0)
		}
		return e.alpha = function(n) {
			return t(+n)
		}, e
	}(.5);

	function kx(t, n) {
		this._context = t, this._alpha = n
	}
	kx.prototype = {
		areaStart: lx,
		areaEnd: lx,
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 1:
					this._context.moveTo(this._x3, this._y3), this._context.closePath();
					break;
				case 2:
					this._context.lineTo(this._x3, this._y3), this._context.closePath();
					break;
				case 3:
					this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
			}
		},
		point: function(t, n) {
			if (t = +t, n = +n, this._point) {
				var e = this._x2 - t,
					r = this._y2 - n;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1, this._x3 = t, this._y3 = n;
					break;
				case 1:
					this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
					break;
				case 2:
					this._point = 3, this._x5 = t, this._y5 = n;
					break;
				default:
					Tx(this, t, n)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Nx = function t(n) {
		function e(t) {
			return n ? new kx(t, n) : new xx(t, 0)
		}
		return e.alpha = function(n) {
			return t(+n)
		}, e
	}(.5);

	function Cx(t, n) {
		this._context = t, this._alpha = n
	}
	Cx.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
		},
		lineEnd: function() {
			(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			if (t = +t, n = +n, this._point) {
				var e = this._x2 - t,
					r = this._y2 - n;
				this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
			}
			switch (this._point) {
				case 0:
					this._point = 1;
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
					break;
				case 3:
					this._point = 4;
				default:
					Tx(this, t, n)
			}
			this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
		}
	};
	var Px = function t(n) {
		function e(t) {
			return n ? new Cx(t, n) : new Mx(t, 0)
		}
		return e.alpha = function(n) {
			return t(+n)
		}, e
	}(.5);

	function zx(t) {
		this._context = t
	}

	function Dx(t) {
		return t < 0 ? -1 : 1
	}

	function Rx(t, n, e) {
		var r = t._x1 - t._x0,
			i = n - t._x1,
			o = (t._y1 - t._y0) / (r || i < 0 && -0),
			a = (e - t._y1) / (i || r < 0 && -0),
			u = (o * i + a * r) / (r + i);
		return (Dx(o) + Dx(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0
	}

	function Fx(t, n) {
		var e = t._x1 - t._x0;
		return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
	}

	function qx(t, n, e) {
		var r = t._x0,
			i = t._y0,
			o = t._x1,
			a = t._y1,
			u = (o - r) / 3;
		t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a)
	}

	function Ox(t) {
		this._context = t
	}

	function Ux(t) {
		this._context = new Ix(t)
	}

	function Ix(t) {
		this._context = t
	}

	function Bx(t) {
		this._context = t
	}

	function Yx(t) {
		var n, e, r = t.length - 1,
			i = new Array(r),
			o = new Array(r),
			a = new Array(r);
		for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1];
		for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, a[n] -= e * a[n - 1];
		for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n];
		for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
		return [i, o]
	}

	function Lx(t, n) {
		this._context = t, this._t = n
	}

	function jx(t, n) {
		if ((i = t.length) > 1)
			for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o)
				for (r = a, a = t[n[o]], e = 0; e < u; ++e) a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
	}

	function $x(t) {
		for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
		return e
	}

	function Hx(t, n) {
		return t[n]
	}

	function Xx(t) {
		const n = [];
		return n.key = t, n
	}

	function Gx(t) {
		var n = t.map(Vx);
		return $x(t).sort((function(t, e) {
			return n[t] - n[e]
		}))
	}

	function Vx(t) {
		for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;)(n = +t[e][1]) > o && (o = n, r = e);
		return r
	}

	function Wx(t) {
		var n = t.map(Zx);
		return $x(t).sort((function(t, e) {
			return n[t] - n[e]
		}))
	}

	function Zx(t) {
		for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
		return e
	}
	zx.prototype = {
		areaStart: lx,
		areaEnd: lx,
		lineStart: function() {
			this._point = 0
		},
		lineEnd: function() {
			this._point && this._context.closePath()
		},
		point: function(t, n) {
			t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
		}
	}, Ox.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
		},
		lineEnd: function() {
			switch (this._point) {
				case 2:
					this._context.lineTo(this._x1, this._y1);
					break;
				case 3:
					qx(this, this._t0, Fx(this, this._t0))
			}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
		},
		point: function(t, n) {
			var e = NaN;
			if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
				switch (this._point) {
					case 0:
						this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3, qx(this, Fx(this, e = Rx(this, t, n)), e);
						break;
					default:
						qx(this, this._t0, e = Rx(this, t, n))
				}
				this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
			}
		}
	}, (Ux.prototype = Object.create(Ox.prototype)).point = function(t, n) {
		Ox.prototype.point.call(this, n, t)
	}, Ix.prototype = {
		moveTo: function(t, n) {
			this._context.moveTo(n, t)
		},
		closePath: function() {
			this._context.closePath()
		},
		lineTo: function(t, n) {
			this._context.lineTo(n, t)
		},
		bezierCurveTo: function(t, n, e, r, i, o) {
			this._context.bezierCurveTo(n, t, r, e, o, i)
		}
	}, Bx.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x = [], this._y = []
		},
		lineEnd: function() {
			var t = this._x,
				n = this._y,
				e = t.length;
			if (e)
				if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
				else
					for (var r = Yx(t), i = Yx(n), o = 0, a = 1; a < e; ++o, ++a) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
			(this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
		},
		point: function(t, n) {
			this._x.push(+t), this._y.push(+n)
		}
	}, Lx.prototype = {
		areaStart: function() {
			this._line = 0
		},
		areaEnd: function() {
			this._line = NaN
		},
		lineStart: function() {
			this._x = this._y = NaN, this._point = 0
		},
		lineEnd: function() {
			0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
		},
		point: function(t, n) {
			switch (t = +t, n = +n, this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
					break;
				case 1:
					this._point = 2;
				default:
					if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
					else {
						var e = this._x * (1 - this._t) + t * this._t;
						this._context.lineTo(e, this._y), this._context.lineTo(e, n)
					}
			}
			this._x = t, this._y = n
		}
	};
	var Kx = t => () => t;

	function Qx(t, {
		sourceEvent: n,
		target: e,
		transform: r,
		dispatch: i
	}) {
		Object.defineProperties(this, {
			type: {
				value: t,
				enumerable: !0,
				configurable: !0
			},
			sourceEvent: {
				value: n,
				enumerable: !0,
				configurable: !0
			},
			target: {
				value: e,
				enumerable: !0,
				configurable: !0
			},
			transform: {
				value: r,
				enumerable: !0,
				configurable: !0
			},
			_: {
				value: i
			}
		})
	}

	function Jx(t, n, e) {
		this.k = t, this.x = n, this.y = e
	}
	Jx.prototype = {
		constructor: Jx,
		scale: function(t) {
			return 1 === t ? this : new Jx(this.k * t, this.x, this.y)
		},
		translate: function(t, n) {
			return 0 === t & 0 === n ? this : new Jx(this.k, this.x + this.k * t, this.y + this.k * n)
		},
		apply: function(t) {
			return [t[0] * this.k + this.x, t[1] * this.k + this.y]
		},
		applyX: function(t) {
			return t * this.k + this.x
		},
		applyY: function(t) {
			return t * this.k + this.y
		},
		invert: function(t) {
			return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
		},
		invertX: function(t) {
			return (t - this.x) / this.k
		},
		invertY: function(t) {
			return (t - this.y) / this.k
		},
		rescaleX: function(t) {
			return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
		},
		rescaleY: function(t) {
			return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
		},
		toString: function() {
			return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
		}
	};
	var tw = new Jx(1, 0, 0);

	function nw(t) {
		for (; !t.__zoom;)
			if (!(t = t.parentNode)) return tw;
		return t.__zoom
	}

	function ew(t) {
		t.stopImmediatePropagation()
	}

	function rw(t) {
		t.preventDefault(), t.stopImmediatePropagation()
	}

	function iw(t) {
		return !(t.ctrlKey && "wheel" !== t.type || t.button)
	}

	function ow() {
		var t = this;
		return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
			[(t = t.viewBox.baseVal).x, t.y],
			[t.x + t.width, t.y + t.height]
		] : [
			[0, 0],
			[t.width.baseVal.value, t.height.baseVal.value]
		] : [
			[0, 0],
			[t.clientWidth, t.clientHeight]
		]
	}

	function aw() {
		return this.__zoom || tw
	}

	function uw(t) {
		return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1)
	}

	function cw() {
		return navigator.maxTouchPoints || "ontouchstart" in this
	}

	function fw(t, n, e) {
		var r = t.invertX(n[0][0]) - e[0][0],
			i = t.invertX(n[1][0]) - e[1][0],
			o = t.invertY(n[0][1]) - e[0][1],
			a = t.invertY(n[1][1]) - e[1][1];
		return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a))
	}
	nw.prototype = Jx.prototype, t.Adder = _, t.Delaunay = xu, t.FormatSpecifier = Ec, t.InternMap = InternMap, t.InternSet = InternSet, t.Node = md, t.Voronoi = gu, t.ZoomTransform = Jx, t.active = function(t, n) {
		var e, r, i = t.__transition;
		if (i)
			for (r in n = null == n ? null : n + "", i)
				if ((e = i[r]).state > 1 && e.name === n) return new eo([
					[t]
				], Po, n, +r);
		return null
	}, t.arc = function() {
		var t = am,
			n = um,
			e = Xb(0),
			r = null,
			i = cm,
			o = fm,
			a = sm,
			u = null;

		function c() {
			var c, f, s = +t.apply(this, arguments),
				l = +n.apply(this, arguments),
				h = i.apply(this, arguments) - em,
				d = o.apply(this, arguments) - em,
				p = Gb(d - h),
				g = d > h;
			if (u || (u = c = wa()), l < s && (f = l, l = s, s = f), l > tm)
				if (p > rm - tm) u.moveTo(l * Wb(h), l * Qb(h)), u.arc(0, 0, l, h, d, !g), s > tm && (u.moveTo(s * Wb(d), s * Qb(d)), u.arc(0, 0, s, d, h, g));
				else {
					var y, v, _ = h,
						b = d,
						m = h,
						x = d,
						w = p,
						M = p,
						A = a.apply(this, arguments) / 2,
						T = A > tm && (r ? +r.apply(this, arguments) : Jb(s * s + l * l)),
						S = Kb(Gb(l - s) / 2, +e.apply(this, arguments)),
						E = S,
						k = S;
					if (T > tm) {
						var N = om(T / s * Qb(A)),
							C = om(T / l * Qb(A));
						(w -= 2 * N) > tm ? (m += N *= g ? 1 : -1, x -= N) : (w = 0, m = x = (h + d) / 2), (M -= 2 * C) > tm ? (_ += C *= g ? 1 : -1, b -= C) : (M = 0, _ = b = (h + d) / 2)
					}
					var P = l * Wb(_),
						z = l * Qb(_),
						D = s * Wb(x),
						R = s * Qb(x);
					if (S > tm) {
						var F, q = l * Wb(b),
							O = l * Qb(b),
							U = s * Wb(m),
							I = s * Qb(m);
						if (p < nm && (F = lm(P, z, U, I, q, O, D, R))) {
							var B = P - F[0],
								Y = z - F[1],
								L = q - F[0],
								j = O - F[1],
								$ = 1 / Qb(im((B * L + Y * j) / (Jb(B * B + Y * Y) * Jb(L * L + j * j))) / 2),
								H = Jb(F[0] * F[0] + F[1] * F[1]);
							E = Kb(S, (s - H) / ($ - 1)), k = Kb(S, (l - H) / ($ + 1))
						}
					}
					M > tm ? k > tm ? (y = hm(U, I, P, z, l, k, g), v = hm(q, O, D, R, l, k, g), u.moveTo(y.cx + y.x01, y.cy + y.y01), k < S ? u.arc(y.cx, y.cy, k, Vb(y.y01, y.x01), Vb(v.y01, v.x01), !g) : (u.arc(y.cx, y.cy, k, Vb(y.y01, y.x01), Vb(y.y11, y.x11), !g), u.arc(0, 0, l, Vb(y.cy + y.y11, y.cx + y.x11), Vb(v.cy + v.y11, v.cx + v.x11), !g), u.arc(v.cx, v.cy, k, Vb(v.y11, v.x11), Vb(v.y01, v.x01), !g))) : (u.moveTo(P, z), u.arc(0, 0, l, _, b, !g)) : u.moveTo(P, z), s > tm && w > tm ? E > tm ? (y = hm(D, R, q, O, s, -E, g), v = hm(P, z, U, I, s, -E, g), u.lineTo(y.cx + y.x01, y.cy + y.y01), E < S ? u.arc(y.cx, y.cy, E, Vb(y.y01, y.x01), Vb(v.y01, v.x01), !g) : (u.arc(y.cx, y.cy, E, Vb(y.y01, y.x01), Vb(y.y11, y.x11), !g), u.arc(0, 0, s, Vb(y.cy + y.y11, y.cx + y.x11), Vb(v.cy + v.y11, v.cx + v.x11), g), u.arc(v.cx, v.cy, E, Vb(v.y11, v.x11), Vb(v.y01, v.x01), !g))) : u.arc(0, 0, s, x, m, g) : u.lineTo(D, R)
				}
			else u.moveTo(0, 0);
			if (u.closePath(), c) return u = null, c + "" || null
		}
		return c.centroid = function() {
			var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
				r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - nm / 2;
			return [Wb(r) * e, Qb(r) * e]
		}, c.innerRadius = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Xb(+n), c) : t
		}, c.outerRadius = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : Xb(+t), c) : n
		}, c.cornerRadius = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : Xb(+t), c) : e
		}, c.padRadius = function(t) {
			return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Xb(+t), c) : r
		}, c.startAngle = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Xb(+t), c) : i
		}, c.endAngle = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : Xb(+t), c) : o
		}, c.padAngle = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : Xb(+t), c) : a
		}, c.context = function(t) {
			return arguments.length ? (u = null == t ? null : t, c) : u
		}, c
	}, t.area = mm, t.areaRadial = km, t.ascending = n, t.autoType = function(t) {
		for (var n in t) {
			var e, r, i = t[n].trim();
			if (i)
				if ("true" === i) i = !0;
				else if ("false" === i) i = !1;
			else if ("NaN" === i) i = NaN;
			else if (isNaN(e = +i)) {
				if (!(r = i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))) continue;
				Hu && r[4] && !r[7] && (i = i.replace(/-/g, "/").replace(/T/, " ")), i = new Date(i)
			} else i = e;
			else i = null;
			t[n] = i
		}
		return t
	}, t.axisBottom = function(t) {
		return _t(3, t)
	}, t.axisLeft = function(t) {
		return _t(4, t)
	}, t.axisRight = function(t) {
		return _t(2, t)
	}, t.axisTop = function(t) {
		return _t(1, t)
	}, t.bin = H, t.bisect = s, t.bisectCenter = f, t.bisectLeft = c, t.bisectRight = u, t.bisector = r, t.blob = function(t, n) {
		return fetch(t, n).then(Xu)
	}, t.brush = function() {
		return oa(Go)
	}, t.brushSelection = function(t) {
		var n = t.__brush;
		return n ? n.dim.output(n.selection) : null
	}, t.brushX = function() {
		return oa(Ho)
	}, t.brushY = function() {
		return oa(Xo)
	}, t.buffer = function(t, n) {
		return fetch(t, n).then(Gu)
	}, t.chord = function() {
		return ya(!1, !1)
	}, t.chordDirected = function() {
		return ya(!0, !1)
	}, t.chordTranspose = function() {
		return ya(!1, !0)
	}, t.cluster = function() {
		var t = ld,
			n = 1,
			e = 1,
			r = !1;

		function i(i) {
			var o, a = 0;
			i.eachAfter((function(n) {
				var e = n.children;
				e ? (n.x = function(t) {
					return t.reduce(hd, 0) / t.length
				}(e), n.y = function(t) {
					return 1 + t.reduce(dd, 0)
				}(e)) : (n.x = o ? a += t(n, o) : 0, n.y = 0, o = n)
			}));
			var u = function(t) {
					for (var n; n = t.children;) t = n[0];
					return t
				}(i),
				c = function(t) {
					for (var n; n = t.children;) t = n[n.length - 1];
					return t
				}(i),
				f = u.x - t(u, c) / 2,
				s = c.x + t(c, u) / 2;
			return i.eachAfter(r ? function(t) {
				t.x = (t.x - i.x) * n, t.y = (i.y - t.y) * e
			} : function(t) {
				t.x = (t.x - f) / (s - f) * n, t.y = (1 - (i.y ? t.y / i.y : 1)) * e
			})
		}
		return i.separation = function(n) {
			return arguments.length ? (t = n, i) : t
		}, i.size = function(t) {
			return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
		}, i.nodeSize = function(t) {
			return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
		}, i
	}, t.color = we, t.contourDensity = function() {
		var t = $a,
			n = Ha,
			e = Xa,
			r = 960,
			i = 500,
			o = 20,
			a = 2,
			u = 3 * o,
			c = r + 2 * u >> a,
			f = i + 2 * u >> a,
			s = Fa(20);

		function l(r) {
			var i = new Float32Array(c * f),
				l = new Float32Array(c * f),
				d = Math.pow(2, -a);
			r.forEach((function(r, o, a) {
				var s = (t(r, o, a) + u) * d,
					l = (n(r, o, a) + u) * d,
					h = +e(r, o, a);
				if (s >= 0 && s < c && l >= 0 && l < f) {
					var p = Math.floor(s),
						g = Math.floor(l),
						y = s - p - .5,
						v = l - g - .5;
					i[p + g * c] += (1 - y) * (1 - v) * h, i[p + 1 + g * c] += y * (1 - v) * h, i[p + 1 + (g + 1) * c] += y * v * h, i[p + (g + 1) * c] += (1 - y) * v * h
				}
			})), La({
				width: c,
				height: f,
				data: i
			}, {
				width: c,
				height: f,
				data: l
			}, o >> a), ja({
				width: c,
				height: f,
				data: l
			}, {
				width: c,
				height: f,
				data: i
			}, o >> a), La({
				width: c,
				height: f,
				data: i
			}, {
				width: c,
				height: f,
				data: l
			}, o >> a), ja({
				width: c,
				height: f,
				data: l
			}, {
				width: c,
				height: f,
				data: i
			}, o >> a), La({
				width: c,
				height: f,
				data: i
			}, {
				width: c,
				height: f,
				data: l
			}, o >> a), ja({
				width: c,
				height: f,
				data: l
			}, {
				width: c,
				height: f,
				data: i
			}, o >> a);
			var p = s(i);
			if (Array.isArray(p)) {
				const t = Math.pow(2, 2 * a);
				p = p.map((n => n * t))
			} else {
				var g = X(i);
				p = L(0, g, p), (p = et(0, Math.floor(g / p) * p, p)).shift()
			}
			return Ya().thresholds(p).size([c, f])(i).map(h)
		}

		function h(t) {
			return t.value *= Math.pow(2, -2 * a), t.coordinates.forEach(d), t
		}

		function d(t) {
			t.forEach(p)
		}

		function p(t) {
			t.forEach(g)
		}

		function g(t) {
			t[0] = t[0] * Math.pow(2, a) - u, t[1] = t[1] * Math.pow(2, a) - u
		}

		function y() {
			return c = r + 2 * (u = 3 * o) >> a, f = i + 2 * u >> a, l
		}
		return l.x = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Fa(+n), l) : t
		}, l.y = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : Fa(+t), l) : n
		}, l.weight = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : Fa(+t), l) : e
		}, l.size = function(t) {
			if (!arguments.length) return [r, i];
			var n = +t[0],
				e = +t[1];
			if (!(n >= 0 && e >= 0)) throw new Error("invalid size");
			return r = n, i = e, y()
		}, l.cellSize = function(t) {
			if (!arguments.length) return 1 << a;
			if (!((t = +t) >= 1)) throw new Error("invalid cell size");
			return a = Math.floor(Math.log(t) / Math.LN2), y()
		}, l.thresholds = function(t) {
			return arguments.length ? (s = "function" == typeof t ? t : Array.isArray(t) ? Fa(Da.call(t)) : Fa(t), l) : s
		}, l.bandwidth = function(t) {
			if (!arguments.length) return Math.sqrt(o * (o + 1));
			if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
			return o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), y()
		}, l
	}, t.contours = Ya, t.count = l, t.create = function(t) {
		return Bn(Ct(t).call(document.documentElement))
	}, t.creator = Ct, t.cross = function(...t) {
		const n = "function" == typeof t[t.length - 1] && function(t) {
				return n => t(...n)
			}(t.pop()),
			e = (t = t.map(p)).map(h),
			r = t.length - 1,
			i = new Array(r + 1).fill(0),
			o = [];
		if (r < 0 || e.some(d)) return o;
		for (;;) {
			o.push(i.map(((n, e) => t[e][n])));
			let a = r;
			for (; ++i[a] === e[a];) {
				if (0 === a) return n ? o.map(n) : o;
				i[a--] = 0
			}
		}
	}, t.csv = Ku, t.csvFormat = zu, t.csvFormatBody = Du, t.csvFormatRow = Fu, t.csvFormatRows = Ru, t.csvFormatValue = qu, t.csvParse = Cu, t.csvParseRows = Pu, t.cubehelix = dr, t.cumsum = function(t, n) {
		var e = 0,
			r = 0;
		return Float64Array.from(t, void 0 === n ? t => e += +t || 0 : i => e += +n(i, r++, t) || 0)
	}, t.curveBasis = function(t) {
		return new dx(t)
	}, t.curveBasisClosed = function(t) {
		return new px(t)
	}, t.curveBasisOpen = function(t) {
		return new gx(t)
	}, t.curveBumpX = zm, t.curveBumpY = Dm, t.curveBundle = vx, t.curveCardinal = mx, t.curveCardinalClosed = wx, t.curveCardinalOpen = Ax, t.curveCatmullRom = Ex, t.curveCatmullRomClosed = Nx, t.curveCatmullRomOpen = Px, t.curveLinear = ym, t.curveLinearClosed = function(t) {
		return new zx(t)
	}, t.curveMonotoneX = function(t) {
		return new Ox(t)
	}, t.curveMonotoneY = function(t) {
		return new Ux(t)
	}, t.curveNatural = function(t) {
		return new Bx(t)
	}, t.curveStep = function(t) {
		return new Lx(t, .5)
	}, t.curveStepAfter = function(t) {
		return new Lx(t, 1)
	}, t.curveStepBefore = function(t) {
		return new Lx(t, 0)
	}, t.descending = e, t.deviation = y, t.difference = function(t, ...n) {
		t = new InternSet(t);
		for (const e of n)
			for (const n of e) t.delete(n);
		return t
	}, t.disjoint = function(t, n) {
		const e = n[Symbol.iterator](),
			r = new InternSet;
		for (const n of t) {
			if (r.has(n)) return !1;
			let t, i;
			for (;
				({
					value: t,
					done: i
				} = e.next()) && !i;) {
				if (Object.is(n, t)) return !1;
				r.add(t)
			}
		}
		return !0
	}, t.dispatch = mt, t.drag = function() {
		var t, n, e, r, i = te,
			o = ne,
			a = ee,
			u = re,
			c = {},
			f = mt("start", "drag", "end"),
			s = 0,
			l = 0;

		function h(t) {
			t.on("mousedown.drag", d).filter(u).on("touchstart.drag", y).on("touchmove.drag", v, Xn).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
		}

		function d(a, u) {
			if (!r && i.call(this, a, u)) {
				var c = b(this, o.call(this, a, u), a, u, "mouse");
				c && (Bn(a.view).on("mousemove.drag", p, Gn).on("mouseup.drag", g, Gn), Zn(a.view), Vn(a), e = !1, t = a.clientX, n = a.clientY, c("start", a))
			}
		}

		function p(r) {
			if (Wn(r), !e) {
				var i = r.clientX - t,
					o = r.clientY - n;
				e = i * i + o * o > l
			}
			c.mouse("drag", r)
		}

		function g(t) {
			Bn(t.view).on("mousemove.drag mouseup.drag", null), Kn(t.view, e), Wn(t), c.mouse("end", t)
		}

		function y(t, n) {
			if (i.call(this, t, n)) {
				var e, r, a = t.changedTouches,
					u = o.call(this, t, n),
					c = a.length;
				for (e = 0; e < c; ++e)(r = b(this, u, t, n, a[e].identifier, a[e])) && (Vn(t), r("start", t, a[e]))
			}
		}

		function v(t) {
			var n, e, r = t.changedTouches,
				i = r.length;
			for (n = 0; n < i; ++n)(e = c[r[n].identifier]) && (Wn(t), e("drag", t, r[n]))
		}

		function _(t) {
			var n, e, i = t.changedTouches,
				o = i.length;
			for (r && clearTimeout(r), r = setTimeout((function() {
					r = null
				}), 500), n = 0; n < o; ++n)(e = c[i[n].identifier]) && (Vn(t), e("end", t, i[n]))
		}

		function b(t, n, e, r, i, o) {
			var u, l, d, p = f.copy(),
				g = Hn(o || e, n);
			if (null != (d = a.call(t, new Jn("beforestart", {
					sourceEvent: e,
					target: h,
					identifier: i,
					active: s,
					x: g[0],
					y: g[1],
					dx: 0,
					dy: 0,
					dispatch: p
				}), r))) return u = d.x - g[0] || 0, l = d.y - g[1] || 0,
				function e(o, a, f) {
					var y, v = g;
					switch (o) {
						case "start":
							c[i] = e, y = s++;
							break;
						case "end":
							delete c[i], --s;
						case "drag":
							g = Hn(f || a, n), y = s
					}
					p.call(o, t, new Jn(o, {
						sourceEvent: a,
						subject: d,
						target: h,
						identifier: i,
						active: y,
						x: g[0] + u,
						y: g[1] + l,
						dx: g[0] - v[0],
						dy: g[1] - v[1],
						dispatch: p
					}), r)
				}
		}
		return h.filter = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Qn(!!t), h) : i
		}, h.container = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : Qn(t), h) : o
		}, h.subject = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : Qn(t), h) : a
		}, h.touchable = function(t) {
			return arguments.length ? (u = "function" == typeof t ? t : Qn(!!t), h) : u
		}, h.on = function() {
			var t = f.on.apply(f, arguments);
			return t === f ? h : t
		}, h.clickDistance = function(t) {
			return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l)
		}, h
	}, t.dragDisable = Zn, t.dragEnable = Kn, t.dsv = function(t, n, e, r) {
		3 === arguments.length && "function" == typeof e && (r = e, e = void 0);
		var i = ku(t);
		return Wu(n, e).then((function(t) {
			return i.parse(t, r)
		}))
	}, t.dsvFormat = ku, t.easeBack = Ao, t.easeBackIn = wo, t.easeBackInOut = Ao, t.easeBackOut = Mo, t.easeBounce = mo, t.easeBounceIn = function(t) {
		return 1 - mo(1 - t)
	}, t.easeBounceInOut = function(t) {
		return ((t *= 2) <= 1 ? 1 - mo(1 - t) : mo(t - 1) + 1) / 2
	}, t.easeBounceOut = mo, t.easeCircle = vo, t.easeCircleIn = function(t) {
		return 1 - Math.sqrt(1 - t * t)
	}, t.easeCircleInOut = vo, t.easeCircleOut = function(t) {
		return Math.sqrt(1 - --t * t)
	}, t.easeCubic = uo, t.easeCubicIn = function(t) {
		return t * t * t
	}, t.easeCubicInOut = uo, t.easeCubicOut = function(t) {
		return --t * t * t + 1
	}, t.easeElastic = Eo, t.easeElasticIn = So, t.easeElasticInOut = ko, t.easeElasticOut = Eo, t.easeExp = yo, t.easeExpIn = function(t) {
		return go(1 - +t)
	}, t.easeExpInOut = yo, t.easeExpOut = function(t) {
		return 1 - go(t)
	}, t.easeLinear = t => +t, t.easePoly = so, t.easePolyIn = co, t.easePolyInOut = so, t.easePolyOut = fo, t.easeQuad = ao, t.easeQuadIn = function(t) {
		return t * t
	}, t.easeQuadInOut = ao, t.easeQuadOut = function(t) {
		return t * (2 - t)
	}, t.easeSin = po, t.easeSinIn = function(t) {
		return 1 == +t ? 1 : 1 - Math.cos(t * ho)
	}, t.easeSinInOut = po, t.easeSinOut = function(t) {
		return Math.sin(t * ho)
	}, t.every = function(t, n) {
		if ("function" != typeof n) throw new TypeError("test is not a function");
		let e = -1;
		for (const r of t)
			if (!n(r, ++e, t)) return !1;
		return !0
	}, t.extent = v, t.fcumsum = function(t, n) {
		const e = new _;
		let r = -1;
		return Float64Array.from(t, void 0 === n ? t => e.add(+t || 0) : i => e.add(+n(i, ++r, t) || 0))
	}, t.filter = function(t, n) {
		if ("function" != typeof n) throw new TypeError("test is not a function");
		const e = [];
		let r = -1;
		for (const i of t) n(i, ++r, t) && e.push(i);
		return e
	}, t.flatGroup = function(t, ...n) {
		return S(T(t, ...n), n)
	}, t.flatRollup = function(t, n, ...e) {
		return S(k(t, n, ...e), e)
	}, t.forceCenter = function(t, n) {
		var e, r = 1;

		function i() {
			var i, o, a = e.length,
				u = 0,
				c = 0;
			for (i = 0; i < a; ++i) u += (o = e[i]).x, c += o.y;
			for (u = (u / a - t) * r, c = (c / a - n) * r, i = 0; i < a; ++i)(o = e[i]).x -= u, o.y -= c
		}
		return null == t && (t = 0), null == n && (n = 0), i.initialize = function(t) {
			e = t
		}, i.x = function(n) {
			return arguments.length ? (t = +n, i) : t
		}, i.y = function(t) {
			return arguments.length ? (n = +t, i) : n
		}, i.strength = function(t) {
			return arguments.length ? (r = +t, i) : r
		}, i
	}, t.forceCollide = function(t) {
		var n, e, r, i = 1,
			o = 1;

		function a() {
			for (var t, a, c, f, s, l, h, d = n.length, p = 0; p < o; ++p)
				for (a = cc(n, pc, gc).visitAfter(u), t = 0; t < d; ++t) c = n[t], l = e[c.index], h = l * l, f = c.x + c.vx, s = c.y + c.vy, a.visit(g);

			function g(t, n, e, o, a) {
				var u = t.data,
					d = t.r,
					p = l + d;
				if (!u) return n > f + p || o < f - p || e > s + p || a < s - p;
				if (u.index > c.index) {
					var g = f - u.x - u.vx,
						y = s - u.y - u.vy,
						v = g * g + y * y;
					v < p * p && (0 === g && (v += (g = dc(r)) * g), 0 === y && (v += (y = dc(r)) * y), v = (p - (v = Math.sqrt(v))) / v * i, c.vx += (g *= v) * (p = (d *= d) / (h + d)), c.vy += (y *= v) * p, u.vx -= g * (p = 1 - p), u.vy -= y * p)
				}
			}
		}

		function u(t) {
			if (t.data) return t.r = e[t.data.index];
			for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
		}

		function c() {
			if (n) {
				var r, i, o = n.length;
				for (e = new Array(o), r = 0; r < o; ++r) i = n[r], e[i.index] = +t(i, r, n)
			}
		}
		return "function" != typeof t && (t = hc(null == t ? 1 : +t)), a.initialize = function(t, e) {
			n = t, r = e, c()
		}, a.iterations = function(t) {
			return arguments.length ? (o = +t, a) : o
		}, a.strength = function(t) {
			return arguments.length ? (i = +t, a) : i
		}, a.radius = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : hc(+n), c(), a) : t
		}, a
	}, t.forceLink = function(t) {
		var n, e, r, i, o, a, u = yc,
			c = function(t) {
				return 1 / Math.min(i[t.source.index], i[t.target.index])
			},
			f = hc(30),
			s = 1;

		function l(r) {
			for (var i = 0, u = t.length; i < s; ++i)
				for (var c, f, l, h, d, p, g, y = 0; y < u; ++y) f = (c = t[y]).source, h = (l = c.target).x + l.vx - f.x - f.vx || dc(a), d = l.y + l.vy - f.y - f.vy || dc(a), h *= p = ((p = Math.sqrt(h * h + d * d)) - e[y]) / p * r * n[y], d *= p, l.vx -= h * (g = o[y]), l.vy -= d * g, f.vx += h * (g = 1 - g), f.vy += d * g
		}

		function h() {
			if (r) {
				var a, c, f = r.length,
					s = t.length,
					l = new Map(r.map(((t, n) => [u(t, n, r), t])));
				for (a = 0, i = new Array(f); a < s; ++a)(c = t[a]).index = a, "object" != typeof c.source && (c.source = vc(l, c.source)), "object" != typeof c.target && (c.target = vc(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1;
				for (a = 0, o = new Array(s); a < s; ++a) c = t[a], o[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
				n = new Array(s), d(), e = new Array(s), p()
			}
		}

		function d() {
			if (r)
				for (var e = 0, i = t.length; e < i; ++e) n[e] = +c(t[e], e, t)
		}

		function p() {
			if (r)
				for (var n = 0, i = t.length; n < i; ++n) e[n] = +f(t[n], n, t)
		}
		return null == t && (t = []), l.initialize = function(t, n) {
			r = t, a = n, h()
		}, l.links = function(n) {
			return arguments.length ? (t = n, h(), l) : t
		}, l.id = function(t) {
			return arguments.length ? (u = t, l) : u
		}, l.iterations = function(t) {
			return arguments.length ? (s = +t, l) : s
		}, l.strength = function(t) {
			return arguments.length ? (c = "function" == typeof t ? t : hc(+t), d(), l) : c
		}, l.distance = function(t) {
			return arguments.length ? (f = "function" == typeof t ? t : hc(+t), p(), l) : f
		}, l
	}, t.forceManyBody = function() {
		var t, n, e, r, i, o = hc(-30),
			a = 1,
			u = 1 / 0,
			c = .81;

		function f(e) {
			var i, o = t.length,
				a = cc(t, bc, mc).visitAfter(l);
			for (r = e, i = 0; i < o; ++i) n = t[i], a.visit(h)
		}

		function s() {
			if (t) {
				var n, e, r = t.length;
				for (i = new Array(r), n = 0; n < r; ++n) e = t[n], i[e.index] = +o(e, n, t)
			}
		}

		function l(t) {
			var n, e, r, o, a, u = 0,
				c = 0;
			if (t.length) {
				for (r = o = a = 0; a < 4; ++a)(n = t[a]) && (e = Math.abs(n.value)) && (u += n.value, c += e, r += e * n.x, o += e * n.y);
				t.x = r / c, t.y = o / c
			} else {
				(n = t).x = n.data.x, n.y = n.data.y;
				do {
					u += i[n.data.index]
				} while (n = n.next)
			}
			t.value = u
		}

		function h(t, o, f, s) {
			if (!t.value) return !0;
			var l = t.x - n.x,
				h = t.y - n.y,
				d = s - o,
				p = l * l + h * h;
			if (d * d / c < p) return p < u && (0 === l && (p += (l = dc(e)) * l), 0 === h && (p += (h = dc(e)) * h), p < a && (p = Math.sqrt(a * p)), n.vx += l * t.value * r / p, n.vy += h * t.value * r / p), !0;
			if (!(t.length || p >= u)) {
				(t.data !== n || t.next) && (0 === l && (p += (l = dc(e)) * l), 0 === h && (p += (h = dc(e)) * h), p < a && (p = Math.sqrt(a * p)));
				do {
					t.data !== n && (d = i[t.data.index] * r / p, n.vx += l * d, n.vy += h * d)
				} while (t = t.next)
			}
		}
		return f.initialize = function(n, r) {
			t = n, e = r, s()
		}, f.strength = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : hc(+t), s(), f) : o
		}, f.distanceMin = function(t) {
			return arguments.length ? (a = t * t, f) : Math.sqrt(a)
		}, f.distanceMax = function(t) {
			return arguments.length ? (u = t * t, f) : Math.sqrt(u)
		}, f.theta = function(t) {
			return arguments.length ? (c = t * t, f) : Math.sqrt(c)
		}, f
	}, t.forceRadial = function(t, n, e) {
		var r, i, o, a = hc(.1);

		function u(t) {
			for (var a = 0, u = r.length; a < u; ++a) {
				var c = r[a],
					f = c.x - n || 1e-6,
					s = c.y - e || 1e-6,
					l = Math.sqrt(f * f + s * s),
					h = (o[a] - l) * i[a] * t / l;
				c.vx += f * h, c.vy += s * h
			}
		}

		function c() {
			if (r) {
				var n, e = r.length;
				for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) o[n] = +t(r[n], n, r), i[n] = isNaN(o[n]) ? 0 : +a(r[n], n, r)
			}
		}
		return "function" != typeof t && (t = hc(+t)), null == n && (n = 0), null == e && (e = 0), u.initialize = function(t) {
			r = t, c()
		}, u.strength = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : hc(+t), c(), u) : a
		}, u.radius = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : hc(+n), c(), u) : t
		}, u.x = function(t) {
			return arguments.length ? (n = +t, u) : n
		}, u.y = function(t) {
			return arguments.length ? (e = +t, u) : e
		}, u
	}, t.forceSimulation = function(t) {
		var n, e = 1,
			r = .001,
			i = 1 - Math.pow(r, 1 / 300),
			o = 0,
			a = .6,
			u = new Map,
			c = yi(l),
			f = mt("tick", "end"),
			s = function() {
				let t = 1;
				return () => (t = (1664525 * t + 1013904223) % _c) / _c
			}();

		function l() {
			h(), f.call("tick", n), e < r && (c.stop(), f.call("end", n))
		}

		function h(r) {
			var c, f, s = t.length;
			void 0 === r && (r = 1);
			for (var l = 0; l < r; ++l)
				for (e += (o - e) * i, u.forEach((function(t) {
						t(e)
					})), c = 0; c < s; ++c) null == (f = t[c]).fx ? f.x += f.vx *= a : (f.x = f.fx, f.vx = 0), null == f.fy ? f.y += f.vy *= a : (f.y = f.fy, f.vy = 0);
			return n
		}

		function d() {
			for (var n, e = 0, r = t.length; e < r; ++e) {
				if ((n = t[e]).index = e, null != n.fx && (n.x = n.fx), null != n.fy && (n.y = n.fy), isNaN(n.x) || isNaN(n.y)) {
					var i = 10 * Math.sqrt(.5 + e),
						o = e * xc;
					n.x = i * Math.cos(o), n.y = i * Math.sin(o)
				}(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
			}
		}

		function p(n) {
			return n.initialize && n.initialize(t, s), n
		}
		return null == t && (t = []), d(), n = {
			tick: h,
			restart: function() {
				return c.restart(l), n
			},
			stop: function() {
				return c.stop(), n
			},
			nodes: function(e) {
				return arguments.length ? (t = e, d(), u.forEach(p), n) : t
			},
			alpha: function(t) {
				return arguments.length ? (e = +t, n) : e
			},
			alphaMin: function(t) {
				return arguments.length ? (r = +t, n) : r
			},
			alphaDecay: function(t) {
				return arguments.length ? (i = +t, n) : +i
			},
			alphaTarget: function(t) {
				return arguments.length ? (o = +t, n) : o
			},
			velocityDecay: function(t) {
				return arguments.length ? (a = 1 - t, n) : 1 - a
			},
			randomSource: function(t) {
				return arguments.length ? (s = t, u.forEach(p), n) : s
			},
			force: function(t, e) {
				return arguments.length > 1 ? (null == e ? u.delete(t) : u.set(t, p(e)), n) : u.get(t)
			},
			find: function(n, e, r) {
				var i, o, a, u, c, f = 0,
					s = t.length;
				for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(a = (i = n - (u = t[f]).x) * i + (o = e - u.y) * o) < r && (c = u, r = a);
				return c
			},
			on: function(t, e) {
				return arguments.length > 1 ? (f.on(t, e), n) : f.on(t)
			}
		}
	}, t.forceX = function(t) {
		var n, e, r, i = hc(.1);

		function o(t) {
			for (var i, o = 0, a = n.length; o < a; ++o)(i = n[o]).vx += (r[o] - i.x) * e[o] * t
		}

		function a() {
			if (n) {
				var o, a = n.length;
				for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n)
			}
		}
		return "function" != typeof t && (t = hc(null == t ? 0 : +t)), o.initialize = function(t) {
			n = t, a()
		}, o.strength = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : hc(+t), a(), o) : i
		}, o.x = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : hc(+n), a(), o) : t
		}, o
	}, t.forceY = function(t) {
		var n, e, r, i = hc(.1);

		function o(t) {
			for (var i, o = 0, a = n.length; o < a; ++o)(i = n[o]).vy += (r[o] - i.y) * e[o] * t
		}

		function a() {
			if (n) {
				var o, a = n.length;
				for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n)
			}
		}
		return "function" != typeof t && (t = hc(null == t ? 0 : +t)), o.initialize = function(t) {
			n = t, a()
		}, o.strength = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : hc(+t), a(), o) : i
		}, o.y = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : hc(+n), a(), o) : t
		}, o
	}, t.formatDefaultLocale = Fc, t.formatLocale = Rc, t.formatSpecifier = Sc, t.fsum = function(t, n) {
		const e = new _;
		if (void 0 === n)
			for (let n of t)(n = +n) && e.add(n);
		else {
			let r = -1;
			for (let i of t)(i = +n(i, ++r, t)) && e.add(i)
		}
		return +e
	}, t.geoAlbers = jh, t.geoAlbersUsa = function() {
		var t, n, e, r, i, o, a = jh(),
			u = Lh().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
			c = Lh().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
			f = {
				point: function(t, n) {
					o = [t, n]
				}
			};

		function s(t) {
			var n = t[0],
				a = t[1];
			return o = null, e.point(n, a), o || (r.point(n, a), o) || (i.point(n, a), o)
		}

		function l() {
			return t = n = null, s
		}
		return s.invert = function(t) {
			var n = a.scale(),
				e = a.translate(),
				r = (t[0] - e[0]) / n,
				i = (t[1] - e[1]) / n;
			return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? u : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : a).invert(t)
		}, s.stream = function(e) {
			return t && n === e ? t : (r = [a.stream(n = e), u.stream(e), c.stream(e)], i = r.length, t = {
				point: function(t, n) {
					for (var e = -1; ++e < i;) r[e].point(t, n)
				},
				sphere: function() {
					for (var t = -1; ++t < i;) r[t].sphere()
				},
				lineStart: function() {
					for (var t = -1; ++t < i;) r[t].lineStart()
				},
				lineEnd: function() {
					for (var t = -1; ++t < i;) r[t].lineEnd()
				},
				polygonStart: function() {
					for (var t = -1; ++t < i;) r[t].polygonStart()
				},
				polygonEnd: function() {
					for (var t = -1; ++t < i;) r[t].polygonEnd()
				}
			});
			var r, i
		}, s.precision = function(t) {
			return arguments.length ? (a.precision(t), u.precision(t), c.precision(t), l()) : a.precision()
		}, s.scale = function(t) {
			return arguments.length ? (a.scale(t), u.scale(.35 * t), c.scale(t), s.translate(a.translate())) : a.scale()
		}, s.translate = function(t) {
			if (!arguments.length) return a.translate();
			var n = a.scale(),
				o = +t[0],
				s = +t[1];
			return e = a.translate(t).clipExtent([
				[o - .455 * n, s - .238 * n],
				[o + .455 * n, s + .238 * n]
			]).stream(f), r = u.translate([o - .307 * n, s + .201 * n]).clipExtent([
				[o - .425 * n + Ic, s + .12 * n + Ic],
				[o - .214 * n - Ic, s + .234 * n - Ic]
			]).stream(f), i = c.translate([o - .205 * n, s + .212 * n]).clipExtent([
				[o - .214 * n + Ic, s + .166 * n + Ic],
				[o - .115 * n - Ic, s + .234 * n - Ic]
			]).stream(f), l()
		}, s.fitExtent = function(t, n) {
			return Ch(s, t, n)
		}, s.fitSize = function(t, n) {
			return Ph(s, t, n)
		}, s.fitWidth = function(t, n) {
			return zh(s, t, n)
		}, s.fitHeight = function(t, n) {
			return Dh(s, t, n)
		}, s.scale(1070)
	}, t.geoArea = function(t) {
		return Rf = new _, yf(t, Ff), 2 * Rf
	}, t.geoAzimuthalEqualArea = function() {
		return Uh(Xh).scale(124.75).clipAngle(179.999)
	}, t.geoAzimuthalEqualAreaRaw = Xh, t.geoAzimuthalEquidistant = function() {
		return Uh(Gh).scale(79.4188).clipAngle(179.999)
	}, t.geoAzimuthalEquidistantRaw = Gh, t.geoBounds = function(t) {
		var n, e, r, i, o, a, u;
		if (Tf = Af = -(wf = Mf = 1 / 0), Pf = [], yf(t, fs), e = Pf.length) {
			for (Pf.sort(_s), n = 1, o = [r = Pf[0]]; n < e; ++n) bs(r, (i = Pf[n])[0]) || bs(r, i[1]) ? (vs(r[0], i[1]) > vs(r[0], r[1]) && (r[1] = i[1]), vs(i[0], r[1]) > vs(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
			for (a = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (u = vs(r[1], i[0])) > a && (a = u, wf = i[0], Af = r[1])
		}
		return Pf = zf = null, wf === 1 / 0 || Mf === 1 / 0 ? [
			[NaN, NaN],
			[NaN, NaN]
		] : [
			[wf, Mf],
			[Af, Tf]
		]
	}, t.geoCentroid = function(t) {
		Gf = Vf = Wf = Zf = Kf = Qf = Jf = ts = 0, ns = new _, es = new _, rs = new _, yf(t, ms);
		var n = +ns,
			e = +es,
			r = +rs,
			i = Jc(n, e, r);
		return i < Bc && (n = Qf, e = Jf, r = ts, Vf < Ic && (n = Wf, e = Zf, r = Kf), (i = Jc(n, e, r)) < Bc) ? [NaN, NaN] : [Wc(e, n) * Hc, cf(r / i) * Hc]
	}, t.geoCircle = function() {
		var t, n, e = Ps([0, 0]),
			r = Ps(90),
			i = Ps(6),
			o = {
				point: function(e, r) {
					t.push(e = n(e, r)), e[0] *= Hc, e[1] *= Hc
				}
			};

		function a() {
			var a = e.apply(this, arguments),
				u = r.apply(this, arguments) * Xc,
				c = i.apply(this, arguments) * Xc;
			return t = [], n = Rs(-a[0] * Xc, -a[1] * Xc, 0).invert, Is(o, u, c, 1), a = {
				type: "Polygon",
				coordinates: [t]
			}, t = n = null, a
		}
		return a.center = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : Ps([+t[0], +t[1]]), a) : e
		}, a.radius = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : Ps(+t), a) : r
		}, a.precision = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Ps(+t), a) : i
		}, a
	}, t.geoClipAntimeridian = Ks, t.geoClipCircle = Qs, t.geoClipExtent = function() {
		var t, n, e, r = 0,
			i = 0,
			o = 960,
			a = 500;
		return e = {
			stream: function(e) {
				return t && n === e ? t : t = ol(r, i, o, a)(n = e)
			},
			extent: function(u) {
				return arguments.length ? (r = +u[0][0], i = +u[0][1], o = +u[1][0], a = +u[1][1], t = n = null, e) : [
					[r, i],
					[o, a]
				]
			}
		}
	}, t.geoClipRectangle = ol, t.geoConicConformal = function() {
		return Bh(Kh).scale(109.5).parallels([30, 30])
	}, t.geoConicConformalRaw = Kh, t.geoConicEqualArea = Lh, t.geoConicEqualAreaRaw = Yh, t.geoConicEquidistant = function() {
		return Bh(Jh).scale(131.154).center([0, 13.9389])
	}, t.geoConicEquidistantRaw = Jh, t.geoContains = function(t, n) {
		return (t && pl.hasOwnProperty(t.type) ? pl[t.type] : yl)(t, n)
	}, t.geoDistance = dl, t.geoEqualEarth = function() {
		return Uh(od).scale(177.158)
	}, t.geoEqualEarthRaw = od, t.geoEquirectangular = function() {
		return Uh(Qh).scale(152.63)
	}, t.geoEquirectangularRaw = Qh, t.geoGnomonic = function() {
		return Uh(ad).scale(144.049).clipAngle(60)
	}, t.geoGnomonicRaw = ad, t.geoGraticule = Al, t.geoGraticule10 = function() {
		return Al()()
	}, t.geoIdentity = function() {
		var t, n, e, r, i, o, a, u = 1,
			c = 0,
			f = 0,
			s = 1,
			l = 1,
			h = 0,
			d = null,
			p = 1,
			g = 1,
			y = Eh({
				point: function(t, n) {
					var e = b([t, n]);
					this.stream.point(e[0], e[1])
				}
			}),
			v = Nl;

		function _() {
			return p = u * s, g = u * l, o = a = null, b
		}

		function b(e) {
			var r = e[0] * p,
				i = e[1] * g;
			if (h) {
				var o = i * t - r * n;
				r = r * t + i * n, i = o
			}
			return [r + c, i + f]
		}
		return b.invert = function(e) {
			var r = e[0] - c,
				i = e[1] - f;
			if (h) {
				var o = i * t + r * n;
				r = r * t - i * n, i = o
			}
			return [r / p, i / g]
		}, b.stream = function(t) {
			return o && a === t ? o : o = y(v(a = t))
		}, b.postclip = function(t) {
			return arguments.length ? (v = t, d = e = r = i = null, _()) : v
		}, b.clipExtent = function(t) {
			return arguments.length ? (v = null == t ? (d = e = r = i = null, Nl) : ol(d = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), _()) : null == d ? null : [
				[d, e],
				[r, i]
			]
		}, b.scale = function(t) {
			return arguments.length ? (u = +t, _()) : u
		}, b.translate = function(t) {
			return arguments.length ? (c = +t[0], f = +t[1], _()) : [c, f]
		}, b.angle = function(e) {
			return arguments.length ? (n = ef(h = e % 360 * Xc), t = Zc(h), _()) : h * Hc
		}, b.reflectX = function(t) {
			return arguments.length ? (s = t ? -1 : 1, _()) : s < 0
		}, b.reflectY = function(t) {
			return arguments.length ? (l = t ? -1 : 1, _()) : l < 0
		}, b.fitExtent = function(t, n) {
			return Ch(b, t, n)
		}, b.fitSize = function(t, n) {
			return Ph(b, t, n)
		}, b.fitWidth = function(t, n) {
			return zh(b, t, n)
		}, b.fitHeight = function(t, n) {
			return Dh(b, t, n)
		}, b
	}, t.geoInterpolate = function(t, n) {
		var e = t[0] * Xc,
			r = t[1] * Xc,
			i = n[0] * Xc,
			o = n[1] * Xc,
			a = Zc(r),
			u = ef(r),
			c = Zc(o),
			f = ef(o),
			s = a * Zc(e),
			l = a * ef(e),
			h = c * Zc(i),
			d = c * ef(i),
			p = 2 * cf( of (ff(o - r) + a * c * ff(i - e))),
			g = ef(p),
			y = p ? function(t) {
				var n = ef(t *= p) / g,
					e = ef(p - t) / g,
					r = e * s + n * h,
					i = e * l + n * d,
					o = e * u + n * f;
				return [Wc(i, r) * Hc, Wc(o, of (r * r + i * i)) * Hc]
			} : function() {
				return [e * Hc, r * Hc]
			};
		return y.distance = p, y
	}, t.geoLength = sl, t.geoMercator = function() {
		return Wh(Vh).scale(961 / $c)
	}, t.geoMercatorRaw = Vh, t.geoNaturalEarth1 = function() {
		return Uh(ud).scale(175.295)
	}, t.geoNaturalEarth1Raw = ud, t.geoOrthographic = function() {
		return Uh(cd).scale(249.5).clipAngle(90.000001)
	}, t.geoOrthographicRaw = cd, t.geoPath = function(t, n) {
		var e, r, i = 4.5;

		function o(t) {
			return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), yf(t, e(r))), r.result()
		}
		return o.area = function(t) {
			return yf(t, e(Ol)), Ol.result()
		}, o.measure = function(t) {
			return yf(t, e(Ah)), Ah.result()
		}, o.bounds = function(t) {
			return yf(t, e(Gl)), Gl.result()
		}, o.centroid = function(t) {
			return yf(t, e(dh)), dh.result()
		}, o.projection = function(n) {
			return arguments.length ? (e = null == n ? (t = null, Nl) : (t = n).stream, o) : t
		}, o.context = function(t) {
			return arguments.length ? (r = null == t ? (n = null, new Th) : new ph(n = t), "function" != typeof i && r.pointRadius(i), o) : n
		}, o.pointRadius = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i
		}, o.projection(t).context(n)
	}, t.geoProjection = Uh, t.geoProjectionMutator = Ih, t.geoRotation = Us, t.geoStereographic = function() {
		return Uh(fd).scale(250).clipAngle(142)
	}, t.geoStereographicRaw = fd, t.geoStream = yf, t.geoTransform = function(t) {
		return {
			stream: Eh(t)
		}
	}, t.geoTransverseMercator = function() {
		var t = Wh(sd),
			n = t.center,
			e = t.rotate;
		return t.center = function(t) {
			return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
		}, t.rotate = function(t) {
			return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
		}, e([0, 0, 90]).scale(159.155)
	}, t.geoTransverseMercatorRaw = sd, t.gray = function(t, n) {
		return new We(t, 0, 0, null == n ? 1 : n)
	}, t.greatest = function(t, e = n) {
		let r, i = !1;
		if (1 === e.length) {
			let o;
			for (const a of t) {
				const t = e(a);
				(i ? n(t, o) > 0 : 0 === n(t, t)) && (r = a, o = t, i = !0)
			}
		} else
			for (const n of t)(i ? e(n, r) > 0 : 0 === e(n, n)) && (r = n, i = !0);
		return r
	}, t.greatestIndex = function(t, e = n) {
		if (1 === e.length) return Q(t, e);
		let r, i = -1,
			o = -1;
		for (const n of t) ++o, (i < 0 ? 0 === e(n, n) : e(n, r) > 0) && (r = n, i = o);
		return i
	}, t.group = A, t.groupSort = function(t, e, r) {
		return (2 !== e.length ? z(E(t, e, r), (([t, e], [r, i]) => n(e, i) || n(t, r))) : z(A(t, r), (([t, r], [i, o]) => e(r, o) || n(t, i)))).map((([t]) => t))
	}, t.groups = T, t.hcl = nr, t.hierarchy = gd, t.histogram = H, t.hsl = Fe, t.html = ec, t.image = function(t, n) {
		return new Promise((function(e, r) {
			var i = new Image;
			for (var o in n) i[o] = n[o];
			i.onerror = r, i.onload = function() {
				e(i)
			}, i.src = t
		}))
	}, t.index = function(t, ...n) {
		return C(t, M, N, n)
	}, t.indexes = function(t, ...n) {
		return C(t, Array.from, N, n)
	}, t.interpolate = qr, t.interpolateArray = function(t, n) {
		return (kr(n) ? Er : Nr)(t, n)
	}, t.interpolateBasis = yr, t.interpolateBasisClosed = vr, t.interpolateBlues = Mb, t.interpolateBrBG = F_, t.interpolateBuGn = J_, t.interpolateBuPu = nb, t.interpolateCividis = function(t) {
		return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))))) + ")"
	}, t.interpolateCool = qb, t.interpolateCubehelix = ti, t.interpolateCubehelixDefault = Rb, t.interpolateCubehelixLong = ni, t.interpolateDate = Cr, t.interpolateDiscrete = function(t) {
		var n = t.length;
		return function(e) {
			return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
		}
	}, t.interpolateGnBu = rb, t.interpolateGreens = Tb, t.interpolateGreys = Eb, t.interpolateHcl = Kr, t.interpolateHclLong = Qr, t.interpolateHsl = Vr, t.interpolateHslLong = Wr, t.interpolateHue = function(t, n) {
		var e = mr(+t, +n);
		return function(t) {
			var n = e(t);
			return n - 360 * Math.floor(n / 360)
		}
	}, t.interpolateInferno = $b, t.interpolateLab = function(t, n) {
		var e = wr((t = Ve(t)).l, (n = Ve(n)).l),
			r = wr(t.a, n.a),
			i = wr(t.b, n.b),
			o = wr(t.opacity, n.opacity);
		return function(n) {
			return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
		}
	}, t.interpolateMagma = jb, t.interpolateNumber = Pr, t.interpolateNumberArray = Er, t.interpolateObject = zr, t.interpolateOrRd = ob, t.interpolateOranges = Db, t.interpolatePRGn = O_, t.interpolatePiYG = I_, t.interpolatePlasma = Hb, t.interpolatePuBu = fb, t.interpolatePuBuGn = ub, t.interpolatePuOr = Y_, t.interpolatePuRd = lb, t.interpolatePurples = Nb, t.interpolateRainbow = function(t) {
		(t < 0 || t > 1) && (t -= Math.floor(t));
		var n = Math.abs(t - .5);
		return Ob.h = 360 * t - 100, Ob.s = 1.5 - 1.5 * n, Ob.l = .8 - .9 * n, Ob + ""
	}, t.interpolateRdBu = j_, t.interpolateRdGy = H_, t.interpolateRdPu = db, t.interpolateRdYlBu = G_, t.interpolateRdYlGn = W_, t.interpolateReds = Pb, t.interpolateRgb = Mr, t.interpolateRgbBasis = Tr, t.interpolateRgbBasisClosed = Sr, t.interpolateRound = Or, t.interpolateSinebow = function(t) {
		var n;
		return t = (.5 - t) * Math.PI, Ub.r = 255 * (n = Math.sin(t)) * n, Ub.g = 255 * (n = Math.sin(t + Ib)) * n, Ub.b = 255 * (n = Math.sin(t + Bb)) * n, Ub + ""
	}, t.interpolateSpectral = K_, t.interpolateString = Fr, t.interpolateTransformCss = jr, t.interpolateTransformSvg = $r, t.interpolateTurbo = function(t) {
		return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - 14825.05 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))))) + ")"
	}, t.interpolateViridis = Lb, t.interpolateWarm = Fb, t.interpolateYlGn = vb, t.interpolateYlGnBu = gb, t.interpolateYlOrBr = bb, t.interpolateYlOrRd = xb, t.interpolateZoom = Xr, t.interrupt = ki, t.intersection = function(t, ...n) {
		t = new InternSet(t), n = n.map(ct);
		t: for (const e of t)
			for (const r of n)
				if (!r.has(e)) {
					t.delete(e);
					continue t
				}
		return t
	}, t.interval = function(t, n, e) {
		var r = new gi,
			i = n;
		return null == n ? (r.restart(t, n, e), r) : (r._restart = r.restart, r.restart = function(t, n, e) {
			n = +n, e = null == e ? di() : +e, r._restart((function o(a) {
				a += i, r._restart(o, i += n, e), t(a)
			}), n, e)
		}, r.restart(t, n, e), r)
	}, t.isoFormat = l_, t.isoParse = d_, t.json = function(t, n) {
		return fetch(t, n).then(Ju)
	}, t.lab = Ve, t.lch = function(t, n, e, r) {
		return 1 === arguments.length ? tr(t) : new er(e, n, t, null == r ? 1 : r)
	}, t.least = function(t, e = n) {
		let r, i = !1;
		if (1 === e.length) {
			let o;
			for (const a of t) {
				const t = e(a);
				(i ? n(t, o) < 0 : 0 === n(t, t)) && (r = a, o = t, i = !0)
			}
		} else
			for (const n of t)(i ? e(n, r) < 0 : 0 === e(n, n)) && (r = n, i = !0);
		return r
	}, t.leastIndex = rt, t.line = bm, t.lineRadial = Em, t.link = Om, t.linkHorizontal = function() {
		return Om(zm)
	}, t.linkRadial = function() {
		const t = Om(Rm);
		return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
	}, t.linkVertical = function() {
		return Om(Dm)
	}, t.local = Ln, t.map = function(t, n) {
		if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
		if ("function" != typeof n) throw new TypeError("mapper is not a function");
		return Array.from(t, ((e, r) => n(e, r, t)))
	}, t.matcher = qt, t.max = X, t.maxIndex = Q, t.mean = function(t, n) {
		let e = 0,
			r = 0;
		if (void 0 === n)
			for (let n of t) null != n && (n = +n) >= n && (++e, r += n);
		else {
			let i = -1;
			for (let o of t) null != (o = n(o, ++i, t)) && (o = +o) >= o && (++e, r += o)
		}
		if (e) return r / e
	}, t.median = function(t, n) {
		return Z(t, .5, n)
	}, t.merge = J, t.min = G, t.minIndex = tt, t.mode = function(t, n) {
		const e = new InternMap;
		if (void 0 === n)
			for (let n of t) null != n && n >= n && e.set(n, (e.get(n) || 0) + 1);
		else {
			let r = -1;
			for (let i of t) null != (i = n(i, ++r, t)) && i >= i && e.set(i, (e.get(i) || 0) + 1)
		}
		let r, i = 0;
		for (const [t, n] of e) n > i && (i = n, r = t);
		return r
	}, t.namespace = Et, t.namespaces = St, t.nice = j, t.now = di, t.pack = function() {
		var t = null,
			n = 1,
			e = 1,
			r = Md;

		function i(i) {
			const o = Sd();
			return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(Yd(t)).eachAfter(Ld(r, .5, o)).eachBefore(jd(1)) : i.eachBefore(Yd(Bd)).eachAfter(Ld(Md, 1, o)).eachAfter(Ld(r, i.r / Math.min(n, e), o)).eachBefore(jd(Math.min(n, e) / (2 * i.r))), i
		}
		return i.radius = function(n) {
			return arguments.length ? (t = xd(n), i) : t
		}, i.size = function(t) {
			return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
		}, i.padding = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : Ad(+t), i) : r
		}, i
	}, t.packEnclose = function(t) {
		return Ed(t, Sd())
	}, t.packSiblings = function(t) {
		return Id(t, Sd()), t
	}, t.pairs = function(t, n = nt) {
		const e = [];
		let r, i = !1;
		for (const o of t) i && e.push(n(r, o)), r = o, i = !0;
		return e
	}, t.partition = function() {
		var t = 1,
			n = 1,
			e = 0,
			r = !1;

		function i(i) {
			var o = i.height + 1;
			return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function(t, n) {
				return function(r) {
					r.children && Hd(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
					var i = r.x0,
						o = r.y0,
						a = r.x1 - e,
						u = r.y1 - e;
					a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), r.x0 = i, r.y0 = o, r.x1 = a, r.y1 = u
				}
			}(n, o)), r && i.eachBefore($d), i
		}
		return i.round = function(t) {
			return arguments.length ? (r = !!t, i) : r
		}, i.size = function(e) {
			return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n]
		}, i.padding = function(t) {
			return arguments.length ? (e = +t, i) : e
		}, i
	}, t.path = wa, t.permute = P, t.pie = function() {
		var t = wm,
			n = xm,
			e = null,
			r = Xb(0),
			i = Xb(rm),
			o = Xb(0);

		function a(a) {
			var u, c, f, s, l, h = (a = pm(a)).length,
				d = 0,
				p = new Array(h),
				g = new Array(h),
				y = +r.apply(this, arguments),
				v = Math.min(rm, Math.max(-rm, i.apply(this, arguments) - y)),
				_ = Math.min(Math.abs(v) / h, o.apply(this, arguments)),
				b = _ * (v < 0 ? -1 : 1);
			for (u = 0; u < h; ++u)(l = g[p[u] = u] = +t(a[u], u, a)) > 0 && (d += l);
			for (null != n ? p.sort((function(t, e) {
					return n(g[t], g[e])
				})) : null != e && p.sort((function(t, n) {
					return e(a[t], a[n])
				})), u = 0, f = d ? (v - h * b) / d : 0; u < h; ++u, y = s) c = p[u], s = y + ((l = g[c]) > 0 ? l * f : 0) + b, g[c] = {
				data: a[c],
				index: u,
				value: l,
				startAngle: y,
				endAngle: s,
				padAngle: _
			};
			return g
		}
		return a.value = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Xb(+n), a) : t
		}, a.sortValues = function(t) {
			return arguments.length ? (n = t, e = null, a) : n
		}, a.sort = function(t) {
			return arguments.length ? (e = t, n = null, a) : e
		}, a.startAngle = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : Xb(+t), a) : r
		}, a.endAngle = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Xb(+t), a) : i
		}, a.padAngle = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : Xb(+t), a) : o
		}, a
	}, t.piecewise = ei, t.pointRadial = Nm, t.pointer = Hn, t.pointers = function(t, n) {
		return t.target && (t = $n(t), void 0 === n && (n = t.currentTarget), t = t.touches || [t]), Array.from(t, (t => Hn(t, n)))
	}, t.polygonArea = function(t) {
		for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
		return o / 2
	}, t.polygonCentroid = function(t) {
		for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], c = 0; ++r < i;) n = u, u = t[r], c += e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e;
		return [o / (c *= 3), a / c]
	}, t.polygonContains = function(t, n) {
		for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) e = (o = t[l])[0], (r = o[1]) > u != f > u && a < (c - e) * (u - r) / (f - r) + e && (s = !s), c = e, f = r;
		return s
	}, t.polygonHull = function(t) {
		if ((e = t.length) < 3) return null;
		var n, e, r = new Array(e),
			i = new Array(e);
		for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
		for (r.sort(lp), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
		var o = hp(r),
			a = hp(i),
			u = a[0] === o[0],
			c = a[a.length - 1] === o[o.length - 1],
			f = [];
		for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]);
		for (n = +u; n < a.length - c; ++n) f.push(t[r[a[n]][2]]);
		return f
	}, t.polygonLength = function(t) {
		for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], c = 0; ++r < i;) n = a, e = u, n -= a = (o = t[r])[0], e -= u = o[1], c += Math.hypot(n, e);
		return c
	}, t.precisionFixed = qc, t.precisionPrefix = Oc, t.precisionRound = Uc, t.quadtree = cc, t.quantile = Z, t.quantileSorted = K, t.quantize = function(t, n) {
		for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
		return e
	}, t.quickselect = V, t.radialArea = km, t.radialLine = Em, t.randomBates = bp, t.randomBernoulli = wp, t.randomBeta = Tp, t.randomBinomial = Sp, t.randomCauchy = kp, t.randomExponential = mp, t.randomGamma = Ap, t.randomGeometric = Mp, t.randomInt = gp, t.randomIrwinHall = _p, t.randomLcg = function(t = Math.random()) {
		let n = 0 | (0 <= t && t < 1 ? t / Pp : Math.abs(t));
		return () => (n = 1664525 * n + 1013904223 | 0, Pp * (n >>> 0))
	}, t.randomLogNormal = vp, t.randomLogistic = Np, t.randomNormal = yp, t.randomPareto = xp, t.randomPoisson = Cp, t.randomUniform = pp, t.randomWeibull = Ep, t.range = et, t.rank = function(t, e = n) {
		if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
		let r = Array.from(t);
		const i = new Float64Array(r.length);
		2 !== e.length && (r = r.map(e), e = n);
		const o = (t, n) => e(r[t], r[n]);
		let a, u;
		return Uint32Array.from(r, ((t, n) => n)).sort(e === n ? (t, n) => R(r[t], r[n]) : D(o)).forEach(((t, n) => {
			const e = o(t, void 0 === a ? t : a);
			e >= 0 ? ((void 0 === a || e > 0) && (a = t, u = n), i[t] = u) : i[t] = NaN
		})), i
	}, t.reduce = function(t, n, e) {
		if ("function" != typeof n) throw new TypeError("reducer is not a function");
		const r = t[Symbol.iterator]();
		let i, o, a = -1;
		if (arguments.length < 3) {
			if (({
					done: i,
					value: e
				} = r.next()), i) return;
			++a
		}
		for (;
			({
				done: i,
				value: o
			} = r.next()), !i;) e = n(e, o, ++a, t);
		return e
	}, t.reverse = function(t) {
		if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
		return Array.from(t).reverse()
	}, t.rgb = Se, t.ribbon = function() {
		return za()
	}, t.ribbonArrow = function() {
		return za(Pa)
	}, t.rollup = E, t.rollups = k, t.scaleBand = qp, t.scaleDiverging = function t() {
		var n = Vp(m_()(Bp));
		return n.copy = function() {
			return __(n, t())
		}, Dp.apply(n, arguments)
	}, t.scaleDivergingLog = function t() {
		var n = eg(m_()).domain([.1, 1, 10]);
		return n.copy = function() {
			return __(n, t()).base(n.base())
		}, Dp.apply(n, arguments)
	}, t.scaleDivergingPow = x_, t.scaleDivergingSqrt = function() {
		return x_.apply(null, arguments).exponent(.5)
	}, t.scaleDivergingSymlog = function t() {
		var n = og(m_());
		return n.copy = function() {
			return __(n, t()).constant(n.constant())
		}, Dp.apply(n, arguments)
	}, t.scaleIdentity = function t(n) {
		var e;

		function r(t) {
			return null == t || isNaN(t = +t) ? e : t
		}
		return r.invert = r, r.domain = r.range = function(t) {
			return arguments.length ? (n = Array.from(t, Up), r) : n.slice()
		}, r.unknown = function(t) {
			return arguments.length ? (e = t, r) : e
		}, r.copy = function() {
			return t(n).unknown(e)
		}, n = arguments.length ? Array.from(n, Up) : [0, 1], Vp(r)
	}, t.scaleImplicit = Rp, t.scaleLinear = function t() {
		var n = Xp();
		return n.copy = function() {
			return $p(n, t())
		}, zp.apply(n, arguments), Vp(n)
	}, t.scaleLog = function t() {
		const n = eg(Hp()).domain([1, 10]);
		return n.copy = () => $p(n, t()).base(n.base()), zp.apply(n, arguments), n
	}, t.scaleOrdinal = Fp, t.scalePoint = function() {
		return Op(qp.apply(null, arguments).paddingInner(1))
	}, t.scalePow = sg, t.scaleQuantile = function t() {
		var e, r = [],
			i = [],
			o = [];

		function a() {
			var t = 0,
				n = Math.max(1, i.length);
			for (o = new Array(n - 1); ++t < n;) o[t - 1] = K(r, t / n);
			return u
		}

		function u(t) {
			return null == t || isNaN(t = +t) ? e : i[s(o, t)]
		}
		return u.invertExtent = function(t) {
			var n = i.indexOf(t);
			return n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : r[0], n < o.length ? o[n] : r[r.length - 1]]
		}, u.domain = function(t) {
			if (!arguments.length) return r.slice();
			r = [];
			for (let n of t) null == n || isNaN(n = +n) || r.push(n);
			return r.sort(n), a()
		}, u.range = function(t) {
			return arguments.length ? (i = Array.from(t), a()) : i.slice()
		}, u.unknown = function(t) {
			return arguments.length ? (e = t, u) : e
		}, u.quantiles = function() {
			return o.slice()
		}, u.copy = function() {
			return t().domain(r).range(i).unknown(e)
		}, zp.apply(u, arguments)
	}, t.scaleQuantize = function t() {
		var n, e = 0,
			r = 1,
			i = 1,
			o = [.5],
			a = [0, 1];

		function u(t) {
			return null != t && t <= t ? a[s(o, t, 0, i)] : n
		}

		function c() {
			var t = -1;
			for (o = new Array(i); ++t < i;) o[t] = ((t + 1) * r - (t - i) * e) / (i + 1);
			return u
		}
		return u.domain = function(t) {
			return arguments.length ? ([e, r] = t, e = +e, r = +r, c()) : [e, r]
		}, u.range = function(t) {
			return arguments.length ? (i = (a = Array.from(t)).length - 1, c()) : a.slice()
		}, u.invertExtent = function(t) {
			var n = a.indexOf(t);
			return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]]
		}, u.unknown = function(t) {
			return arguments.length ? (n = t, u) : u
		}, u.thresholds = function() {
			return o.slice()
		}, u.copy = function() {
			return t().domain([e, r]).range(a).unknown(n)
		}, zp.apply(Vp(u), arguments)
	}, t.scaleRadial = function t() {
		var n, e = Xp(),
			r = [0, 1],
			i = !1;

		function o(t) {
			var r = hg(e(t));
			return isNaN(r) ? n : i ? Math.round(r) : r
		}
		return o.invert = function(t) {
			return e.invert(lg(t))
		}, o.domain = function(t) {
			return arguments.length ? (e.domain(t), o) : e.domain()
		}, o.range = function(t) {
			return arguments.length ? (e.range((r = Array.from(t, Up)).map(lg)), o) : r.slice()
		}, o.rangeRound = function(t) {
			return o.range(t).round(!0)
		}, o.round = function(t) {
			return arguments.length ? (i = !!t, o) : i
		}, o.clamp = function(t) {
			return arguments.length ? (e.clamp(t), o) : e.clamp()
		}, o.unknown = function(t) {
			return arguments.length ? (n = t, o) : n
		}, o.copy = function() {
			return t(e.domain(), r).round(i).clamp(e.clamp()).unknown(n)
		}, zp.apply(o, arguments), Vp(o)
	}, t.scaleSequential = function t() {
		var n = Vp(v_()(Bp));
		return n.copy = function() {
			return __(n, t())
		}, Dp.apply(n, arguments)
	}, t.scaleSequentialLog = function t() {
		var n = eg(v_()).domain([1, 10]);
		return n.copy = function() {
			return __(n, t()).base(n.base())
		}, Dp.apply(n, arguments)
	}, t.scaleSequentialPow = b_, t.scaleSequentialQuantile = function t() {
		var e = [],
			r = Bp;

		function i(t) {
			if (null != t && !isNaN(t = +t)) return r((s(e, t, 1) - 1) / (e.length - 1))
		}
		return i.domain = function(t) {
			if (!arguments.length) return e.slice();
			e = [];
			for (let n of t) null == n || isNaN(n = +n) || e.push(n);
			return e.sort(n), i
		}, i.interpolator = function(t) {
			return arguments.length ? (r = t, i) : r
		}, i.range = function() {
			return e.map(((t, n) => r(n / (e.length - 1))))
		}, i.quantiles = function(t) {
			return Array.from({
				length: t + 1
			}, ((n, r) => Z(e, r / t)))
		}, i.copy = function() {
			return t(r).domain(e)
		}, Dp.apply(i, arguments)
	}, t.scaleSequentialSqrt = function() {
		return b_.apply(null, arguments).exponent(.5)
	}, t.scaleSequentialSymlog = function t() {
		var n = og(v_());
		return n.copy = function() {
			return __(n, t()).constant(n.constant())
		}, Dp.apply(n, arguments)
	}, t.scaleSqrt = function() {
		return sg.apply(null, arguments).exponent(.5)
	}, t.scaleSymlog = function t() {
		var n = og(Hp());
		return n.copy = function() {
			return $p(n, t()).constant(n.constant())
		}, zp.apply(n, arguments)
	}, t.scaleThreshold = function t() {
		var n, e = [.5],
			r = [0, 1],
			i = 1;

		function o(t) {
			return null != t && t <= t ? r[s(e, t, 0, i)] : n
		}
		return o.domain = function(t) {
			return arguments.length ? (e = Array.from(t), i = Math.min(e.length, r.length - 1), o) : e.slice()
		}, o.range = function(t) {
			return arguments.length ? (r = Array.from(t), i = Math.min(e.length, r.length - 1), o) : r.slice()
		}, o.invertExtent = function(t) {
			var n = r.indexOf(t);
			return [e[n - 1], e[n]]
		}, o.unknown = function(t) {
			return arguments.length ? (n = t, o) : n
		}, o.copy = function() {
			return t().domain(e).range(r).unknown(n)
		}, zp.apply(o, arguments)
	}, t.scaleTime = function() {
		return zp.apply(y_(Uy, Iy, ry, ty, Ig, qg, Dg, Cg, Eg, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
	}, t.scaleUtc = function() {
		return zp.apply(y_(qy, Oy, Dy, Cy, gy, hy, fy, ay, Eg, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
	}, t.scan = function(t, n) {
		const e = rt(t, n);
		return e < 0 ? void 0 : e
	}, t.schemeAccent = A_, t.schemeBlues = wb, t.schemeBrBG = R_, t.schemeBuGn = Q_, t.schemeBuPu = tb, t.schemeCategory10 = M_, t.schemeDark2 = T_, t.schemeGnBu = eb, t.schemeGreens = Ab, t.schemeGreys = Sb, t.schemeOrRd = ib, t.schemeOranges = zb, t.schemePRGn = q_, t.schemePaired = S_, t.schemePastel1 = E_, t.schemePastel2 = k_, t.schemePiYG = U_, t.schemePuBu = cb, t.schemePuBuGn = ab, t.schemePuOr = B_, t.schemePuRd = sb, t.schemePurples = kb, t.schemeRdBu = L_, t.schemeRdGy = $_, t.schemeRdPu = hb, t.schemeRdYlBu = X_, t.schemeRdYlGn = V_, t.schemeReds = Cb, t.schemeSet1 = N_, t.schemeSet2 = C_, t.schemeSet3 = P_, t.schemeSpectral = Z_, t.schemeTableau10 = z_, t.schemeYlGn = yb, t.schemeYlGnBu = pb, t.schemeYlOrBr = _b, t.schemeYlOrRd = mb, t.select = Bn, t.selectAll = function(t) {
		return "string" == typeof t ? new Un([document.querySelectorAll(t)], [document.documentElement]) : new Un([Dt(t)], On)
	}, t.selection = In, t.selector = zt, t.selectorAll = Ft, t.shuffle = it, t.shuffler = ot, t.some = function(t, n) {
		if ("function" != typeof n) throw new TypeError("test is not a function");
		let e = -1;
		for (const r of t)
			if (n(r, ++e, t)) return !0;
		return !1
	}, t.sort = z, t.stack = function() {
		var t = Xb([]),
			n = $x,
			e = jx,
			r = Hx;

		function i(i) {
			var o, a, u = Array.from(t.apply(this, arguments), Xx),
				c = u.length,
				f = -1;
			for (const t of i)
				for (o = 0, ++f; o < c; ++o)(u[o][f] = [0, +r(t, u[o].key, f, i)]).data = t;
			for (o = 0, a = pm(n(u)); o < c; ++o) u[a[o]].index = o;
			return e(u, a), u
		}
		return i.keys = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Xb(Array.from(n)), i) : t
		}, i.value = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : Xb(+t), i) : r
		}, i.order = function(t) {
			return arguments.length ? (n = null == t ? $x : "function" == typeof t ? t : Xb(Array.from(t)), i) : n
		}, i.offset = function(t) {
			return arguments.length ? (e = null == t ? jx : t, i) : e
		}, i
	}, t.stackOffsetDiverging = function(t, n) {
		if ((u = t.length) > 0)
			for (var e, r, i, o, a, u, c = 0, f = t[n[0]].length; c < f; ++c)
				for (o = a = 0, e = 0; e < u; ++e)(i = (r = t[n[e]][c])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = a, r[0] = a += i) : (r[0] = 0, r[1] = i)
	}, t.stackOffsetExpand = function(t, n) {
		if ((r = t.length) > 0) {
			for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
				for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
				if (i)
					for (e = 0; e < r; ++e) t[e][o][1] /= i
			}
			jx(t, n)
		}
	}, t.stackOffsetNone = jx, t.stackOffsetSilhouette = function(t, n) {
		if ((e = t.length) > 0) {
			for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
				for (var a = 0, u = 0; a < e; ++a) u += t[a][r][1] || 0;
				i[r][1] += i[r][0] = -u / 2
			}
			jx(t, n)
		}
	}, t.stackOffsetWiggle = function(t, n) {
		if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
			for (var e, r, i, o = 0, a = 1; a < r; ++a) {
				for (var u = 0, c = 0, f = 0; u < i; ++u) {
					for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) {
						var p = t[n[d]];
						h += (p[a][1] || 0) - (p[a - 1][1] || 0)
					}
					c += l, f += h * l
				}
				e[a - 1][1] += e[a - 1][0] = o, c && (o -= f / c)
			}
			e[a - 1][1] += e[a - 1][0] = o, jx(t, n)
		}
	}, t.stackOrderAppearance = Gx, t.stackOrderAscending = Wx, t.stackOrderDescending = function(t) {
		return Wx(t).reverse()
	}, t.stackOrderInsideOut = function(t) {
		var n, e, r = t.length,
			i = t.map(Zx),
			o = Gx(t),
			a = 0,
			u = 0,
			c = [],
			f = [];
		for (n = 0; n < r; ++n) e = o[n], a < u ? (a += i[e], c.push(e)) : (u += i[e], f.push(e));
		return f.reverse().concat(c)
	}, t.stackOrderNone = $x, t.stackOrderReverse = function(t) {
		return $x(t).reverse()
	}, t.stratify = function() {
		var t, n = Wd,
			e = Zd;

		function r(r) {
			var i, o, a, u, c, f, s, l, h = Array.from(r),
				d = n,
				p = e,
				g = new Map;
			if (null != t) {
				const n = h.map(((n, e) => function(t) {
						let n = (t = `${t}`).length;
						Qd(t, n - 1) && !Qd(t, n - 2) && (t = t.slice(0, -1));
						return "/" === t[0] ? t : `/${t}`
					}(t(n, e, r)))),
					e = n.map(Kd),
					i = new Set(n).add("");
				for (const t of e) i.has(t) || (i.add(t), n.push(t), e.push(Kd(t)), h.push(Vd));
				d = (t, e) => n[e], p = (t, n) => e[n]
			}
			for (a = 0, i = h.length; a < i; ++a) o = h[a], f = h[a] = new md(o), null != (s = d(o, a, r)) && (s += "") && (l = f.id = s, g.set(l, g.has(l) ? Gd : f)), null != (s = p(o, a, r)) && (s += "") && (f.parent = s);
			for (a = 0; a < i; ++a)
				if (s = (f = h[a]).parent) {
					if (!(c = g.get(s))) throw new Error("missing: " + s);
					if (c === Gd) throw new Error("ambiguous: " + s);
					c.children ? c.children.push(f) : c.children = [f], f.parent = c
				} else {
					if (u) throw new Error("multiple roots");
					u = f
				} if (!u) throw new Error("no root");
			if (null != t) {
				for (; u.data === Vd && 1 === u.children.length;) u = u.children[0], --i;
				for (let t = h.length - 1; t >= 0 && (f = h[t], f.data === Vd); --t) f.data = null
			}
			if (u.parent = Xd, u.eachBefore((function(t) {
					t.depth = t.parent.depth + 1, --i
				})).eachBefore(bd), u.parent = null, i > 0) throw new Error("cycle");
			return u
		}
		return r.id = function(t) {
			return arguments.length ? (n = xd(t), r) : n
		}, r.parentId = function(t) {
			return arguments.length ? (e = xd(t), r) : e
		}, r.path = function(n) {
			return arguments.length ? (t = xd(n), r) : t
		}, r
	}, t.style = un, t.subset = function(t, n) {
		return ft(n, t)
	}, t.sum = function(t, n) {
		let e = 0;
		if (void 0 === n)
			for (let n of t)(n = +n) && (e += n);
		else {
			let r = -1;
			for (let i of t)(i = +n(i, ++r, t)) && (e += i)
		}
		return e
	}, t.superset = ft, t.svg = rc, t.symbol = function(t, n) {
		let e = null;

		function r() {
			let r;
			if (e || (e = r = wa()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null
		}
		return t = "function" == typeof t ? t : Xb(t || Bm), n = "function" == typeof n ? n : Xb(void 0 === n ? 64 : +n), r.type = function(n) {
			return arguments.length ? (t = "function" == typeof n ? n : Xb(n), r) : t
		}, r.size = function(t) {
			return arguments.length ? (n = "function" == typeof t ? t : Xb(+t), r) : n
		}, r.context = function(t) {
			return arguments.length ? (e = null == t ? null : t, r) : e
		}, r
	}, t.symbolAsterisk = Im, t.symbolCircle = Bm, t.symbolCross = Ym, t.symbolDiamond = $m, t.symbolDiamond2 = Hm, t.symbolPlus = Xm, t.symbolSquare = Gm, t.symbolSquare2 = Vm, t.symbolStar = Qm, t.symbolTriangle = tx, t.symbolTriangle2 = ex, t.symbolWye = ux, t.symbolX = cx, t.symbols = fx, t.symbolsFill = fx, t.symbolsStroke = sx, t.text = Wu, t.thresholdFreedmanDiaconis = function(t, n, e) {
		return Math.ceil((e - n) / (2 * (Z(t, .75) - Z(t, .25)) * Math.pow(l(t), -1 / 3)))
	}, t.thresholdScott = function(t, n, e) {
		return Math.ceil((e - n) * Math.cbrt(l(t)) / (3.49 * y(t)))
	}, t.thresholdSturges = $, t.tickFormat = Gp, t.tickIncrement = Y, t.tickStep = L, t.ticks = B, t.timeDay = qg, t.timeDays = Og, t.timeFormatDefaultLocale = c_, t.timeFormatLocale = jy, t.timeFriday = $g, t.timeFridays = Kg, t.timeHour = Dg, t.timeHours = Rg, t.timeInterval = gg, t.timeMillisecond = vg, t.timeMilliseconds = _g, t.timeMinute = Cg, t.timeMinutes = Pg, t.timeMonday = Bg, t.timeMondays = Gg, t.timeMonth = ty, t.timeMonths = ny, t.timeSaturday = Hg, t.timeSaturdays = Qg, t.timeSecond = Eg, t.timeSeconds = kg, t.timeSunday = Ig, t.timeSundays = Xg, t.timeThursday = jg, t.timeThursdays = Zg, t.timeTickInterval = Iy, t.timeTicks = Uy, t.timeTuesday = Yg, t.timeTuesdays = Vg, t.timeWednesday = Lg, t.timeWednesdays = Wg, t.timeWeek = Ig, t.timeWeeks = Xg, t.timeYear = ry, t.timeYears = iy, t.timeout = xi, t.timer = yi, t.timerFlush = vi, t.transition = ro, t.transpose = at, t.tree = function() {
		var t = Jd,
			n = 1,
			e = 1,
			r = null;

		function i(i) {
			var c = function(t) {
				for (var n, e, r, i, o, a = new ip(t, 0), u = [a]; n = u.pop();)
					if (r = n._.children)
						for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) u.push(e = n.children[i] = new ip(r[i], i)), e.parent = n;
				return (a.parent = new ip(null, 0)).children = [a], a
			}(i);
			if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(a), r) i.eachBefore(u);
			else {
				var f = i,
					s = i,
					l = i;
				i.eachBefore((function(t) {
					t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t)
				}));
				var h = f === s ? 1 : t(f, s) / 2,
					d = h - f.x,
					p = n / (s.x + h + d),
					g = e / (l.depth || 1);
				i.eachBefore((function(t) {
					t.x = (t.x + d) * p, t.y = t.depth * g
				}))
			}
			return i
		}

		function o(n) {
			var e = n.children,
				r = n.parent.children,
				i = n.i ? r[n.i - 1] : null;
			if (e) {
				! function(t) {
					for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
				}(n);
				var o = (e[0].z + e[e.length - 1].z) / 2;
				i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o
			} else i && (n.z = i.z + t(n._, i._));
			n.parent.A = function(n, e, r) {
				if (e) {
					for (var i, o = n, a = n, u = e, c = o.parent.children[0], f = o.m, s = a.m, l = u.m, h = c.m; u = np(u), o = tp(o), u && o;) c = tp(c), (a = np(a)).a = n, (i = u.z + l - o.z - f + t(u._, o._)) > 0 && (ep(rp(u, n, r), n, i), f += i, s += i), l += u.m, f += o.m, h += c.m, s += a.m;
					u && !np(a) && (a.t = u, a.m += l - s), o && !tp(c) && (c.t = o, c.m += f - h, r = n)
				}
				return r
			}(n, i, n.parent.A || r[0])
		}

		function a(t) {
			t._.x = t.z + t.parent.m, t.m += t.parent.m
		}

		function u(t) {
			t.x *= n, t.y = t.depth * e
		}
		return i.separation = function(n) {
			return arguments.length ? (t = n, i) : t
		}, i.size = function(t) {
			return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
		}, i.nodeSize = function(t) {
			return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
		}, i
	}, t.treemap = function() {
		var t = cp,
			n = !1,
			e = 1,
			r = 1,
			i = [0],
			o = Md,
			a = Md,
			u = Md,
			c = Md,
			f = Md;

		function s(t) {
			return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(l), i = [0], n && t.eachBefore($d), t
		}

		function l(n) {
			var e = i[n.depth],
				r = n.x0 + e,
				s = n.y0 + e,
				l = n.x1 - e,
				h = n.y1 - e;
			l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), n.x0 = r, n.y0 = s, n.x1 = l, n.y1 = h, n.children && (e = i[n.depth + 1] = o(n) / 2, r += f(n) - e, s += a(n) - e, (l -= u(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h))
		}
		return s.round = function(t) {
			return arguments.length ? (n = !!t, s) : n
		}, s.size = function(t) {
			return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r]
		}, s.tile = function(n) {
			return arguments.length ? (t = wd(n), s) : t
		}, s.padding = function(t) {
			return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
		}, s.paddingInner = function(t) {
			return arguments.length ? (o = "function" == typeof t ? t : Ad(+t), s) : o
		}, s.paddingOuter = function(t) {
			return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
		}, s.paddingTop = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : Ad(+t), s) : a
		}, s.paddingRight = function(t) {
			return arguments.length ? (u = "function" == typeof t ? t : Ad(+t), s) : u
		}, s.paddingBottom = function(t) {
			return arguments.length ? (c = "function" == typeof t ? t : Ad(+t), s) : c
		}, s.paddingLeft = function(t) {
			return arguments.length ? (f = "function" == typeof t ? t : Ad(+t), s) : f
		}, s
	}, t.treemapBinary = function(t, n, e, r, i) {
		var o, a, u = t.children,
			c = u.length,
			f = new Array(c + 1);
		for (f[0] = a = o = 0; o < c; ++o) f[o + 1] = a += u[o].value;
		! function t(n, e, r, i, o, a, c) {
			if (n >= e - 1) {
				var s = u[n];
				return s.x0 = i, s.y0 = o, s.x1 = a, void(s.y1 = c)
			}
			var l = f[n],
				h = r / 2 + l,
				d = n + 1,
				p = e - 1;
			for (; d < p;) {
				var g = d + p >>> 1;
				f[g] < h ? d = g + 1 : p = g
			}
			h - f[d - 1] < f[d] - h && n + 1 < d && --d;
			var y = f[d] - l,
				v = r - y;
			if (a - i > c - o) {
				var _ = r ? (i * v + a * y) / r : a;
				t(n, d, y, i, o, _, c), t(d, e, v, _, o, a, c)
			} else {
				var b = r ? (o * v + c * y) / r : c;
				t(n, d, y, i, o, a, b), t(d, e, v, i, b, a, c)
			}
		}(0, c, t.value, n, e, r, i)
	}, t.treemapDice = Hd, t.treemapResquarify = fp, t.treemapSlice = op, t.treemapSliceDice = function(t, n, e, r, i) {
		(1 & t.depth ? op : Hd)(t, n, e, r, i)
	}, t.treemapSquarify = cp, t.tsv = Qu, t.tsvFormat = Bu, t.tsvFormatBody = Yu, t.tsvFormatRow = ju, t.tsvFormatRows = Lu, t.tsvFormatValue = $u, t.tsvParse = Uu, t.tsvParseRows = Iu, t.union = function(...t) {
		const n = new InternSet;
		for (const e of t)
			for (const t of e) n.add(t);
		return n
	}, t.utcDay = hy, t.utcDays = dy, t.utcFriday = my, t.utcFridays = Ey, t.utcHour = fy, t.utcHours = sy, t.utcMillisecond = vg, t.utcMilliseconds = _g, t.utcMinute = ay, t.utcMinutes = uy, t.utcMonday = yy, t.utcMondays = My, t.utcMonth = Cy, t.utcMonths = Py, t.utcSaturday = xy, t.utcSaturdays = ky, t.utcSecond = Eg, t.utcSeconds = kg, t.utcSunday = gy, t.utcSundays = wy, t.utcThursday = by, t.utcThursdays = Sy, t.utcTickInterval = Oy, t.utcTicks = qy, t.utcTuesday = vy, t.utcTuesdays = Ay, t.utcWednesday = _y, t.utcWednesdays = Ty, t.utcWeek = gy, t.utcWeeks = wy, t.utcYear = Dy, t.utcYears = Ry, t.variance = g, t.version = "7.4.5", t.window = en, t.xml = nc, t.zip = function() {
		return at(arguments)
	}, t.zoom = function() {
		var t, n, e, r = iw,
			i = ow,
			o = fw,
			a = uw,
			u = cw,
			c = [0, 1 / 0],
			f = [
				[-1 / 0, -1 / 0],
				[1 / 0, 1 / 0]
			],
			s = 250,
			l = Xr,
			h = mt("start", "zoom", "end"),
			d = 500,
			p = 0,
			g = 10;

		function y(t) {
			t.property("__zoom", aw).on("wheel.zoom", M, {
				passive: !1
			}).on("mousedown.zoom", A).on("dblclick.zoom", T).filter(u).on("touchstart.zoom", S).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
		}

		function v(t, n) {
			return (n = Math.max(c[0], Math.min(c[1], n))) === t.k ? t : new Jx(n, t.x, t.y)
		}

		function _(t, n, e) {
			var r = n[0] - e[0] * t.k,
				i = n[1] - e[1] * t.k;
			return r === t.x && i === t.y ? t : new Jx(t.k, r, i)
		}

		function b(t) {
			return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
		}

		function m(t, n, e, r) {
			t.on("start.zoom", (function() {
				x(this, arguments).event(r).start()
			})).on("interrupt.zoom end.zoom", (function() {
				x(this, arguments).event(r).end()
			})).tween("zoom", (function() {
				var t = this,
					o = arguments,
					a = x(t, o).event(r),
					u = i.apply(t, o),
					c = null == e ? b(u) : "function" == typeof e ? e.apply(t, o) : e,
					f = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
					s = t.__zoom,
					h = "function" == typeof n ? n.apply(t, o) : n,
					d = l(s.invert(c).concat(f / s.k), h.invert(c).concat(f / h.k));
				return function(t) {
					if (1 === t) t = h;
					else {
						var n = d(t),
							e = f / n[2];
						t = new Jx(e, c[0] - n[0] * e, c[1] - n[1] * e)
					}
					a.zoom(null, t)
				}
			}))
		}

		function x(t, n, e) {
			return !e && t.__zooming || new w(t, n)
		}

		function w(t, n) {
			this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = i.apply(t, n), this.taps = 0
		}

		function M(t, ...n) {
			if (r.apply(this, arguments)) {
				var e = x(this, n).event(t),
					i = this.__zoom,
					u = Math.max(c[0], Math.min(c[1], i.k * Math.pow(2, a.apply(this, arguments)))),
					s = Hn(t);
				if (e.wheel) e.mouse[0][0] === s[0] && e.mouse[0][1] === s[1] || (e.mouse[1] = i.invert(e.mouse[0] = s)), clearTimeout(e.wheel);
				else {
					if (i.k === u) return;
					e.mouse = [s, i.invert(s)], ki(this), e.start()
				}
				rw(t), e.wheel = setTimeout(l, 150), e.zoom("mouse", o(_(v(i, u), e.mouse[0], e.mouse[1]), e.extent, f))
			}

			function l() {
				e.wheel = null, e.end()
			}
		}

		function A(t, ...n) {
			if (!e && r.apply(this, arguments)) {
				var i = t.currentTarget,
					a = x(this, n, !0).event(t),
					u = Bn(t.view).on("mousemove.zoom", h, !0).on("mouseup.zoom", d, !0),
					c = Hn(t, i),
					s = t.clientX,
					l = t.clientY;
				Zn(t.view), ew(t), a.mouse = [c, this.__zoom.invert(c)], ki(this), a.start()
			}

			function h(t) {
				if (rw(t), !a.moved) {
					var n = t.clientX - s,
						e = t.clientY - l;
					a.moved = n * n + e * e > p
				}
				a.event(t).zoom("mouse", o(_(a.that.__zoom, a.mouse[0] = Hn(t, i), a.mouse[1]), a.extent, f))
			}

			function d(t) {
				u.on("mousemove.zoom mouseup.zoom", null), Kn(t.view, a.moved), rw(t), a.event(t).end()
			}
		}

		function T(t, ...n) {
			if (r.apply(this, arguments)) {
				var e = this.__zoom,
					a = Hn(t.changedTouches ? t.changedTouches[0] : t, this),
					u = e.invert(a),
					c = e.k * (t.shiftKey ? .5 : 2),
					l = o(_(v(e, c), a, u), i.apply(this, n), f);
				rw(t), s > 0 ? Bn(this).transition().duration(s).call(m, l, a, t) : Bn(this).call(y.transform, l, a, t)
			}
		}

		function S(e, ...i) {
			if (r.apply(this, arguments)) {
				var o, a, u, c, f = e.touches,
					s = f.length,
					l = x(this, i, e.changedTouches.length === s).event(e);
				for (ew(e), a = 0; a < s; ++a) c = [c = Hn(u = f[a], this), this.__zoom.invert(c), u.identifier], l.touch0 ? l.touch1 || l.touch0[2] === c[2] || (l.touch1 = c, l.taps = 0) : (l.touch0 = c, o = !0, l.taps = 1 + !!t);
				t && (t = clearTimeout(t)), o && (l.taps < 2 && (n = c[0], t = setTimeout((function() {
					t = null
				}), d)), ki(this), l.start())
			}
		}

		function E(t, ...n) {
			if (this.__zooming) {
				var e, r, i, a, u = x(this, n).event(t),
					c = t.changedTouches,
					s = c.length;
				for (rw(t), e = 0; e < s; ++e) i = Hn(r = c[e], this), u.touch0 && u.touch0[2] === r.identifier ? u.touch0[0] = i : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i);
				if (r = u.that.__zoom, u.touch1) {
					var l = u.touch0[0],
						h = u.touch0[1],
						d = u.touch1[0],
						p = u.touch1[1],
						g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g,
						y = (y = p[0] - h[0]) * y + (y = p[1] - h[1]) * y;
					r = v(r, Math.sqrt(g / y)), i = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], a = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]
				} else {
					if (!u.touch0) return;
					i = u.touch0[0], a = u.touch0[1]
				}
				u.zoom("touch", o(_(r, i, a), u.extent, f))
			}
		}

		function k(t, ...r) {
			if (this.__zooming) {
				var i, o, a = x(this, r).event(t),
					u = t.changedTouches,
					c = u.length;
				for (ew(t), e && clearTimeout(e), e = setTimeout((function() {
						e = null
					}), d), i = 0; i < c; ++i) o = u[i], a.touch0 && a.touch0[2] === o.identifier ? delete a.touch0 : a.touch1 && a.touch1[2] === o.identifier && delete a.touch1;
				if (a.touch1 && !a.touch0 && (a.touch0 = a.touch1, delete a.touch1), a.touch0) a.touch0[1] = this.__zoom.invert(a.touch0[0]);
				else if (a.end(), 2 === a.taps && (o = Hn(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < g)) {
					var f = Bn(this).on("dblclick.zoom");
					f && f.apply(this, arguments)
				}
			}
		}
		return y.transform = function(t, n, e, r) {
			var i = t.selection ? t.selection() : t;
			i.property("__zoom", aw), t !== i ? m(t, n, e, r) : i.interrupt().each((function() {
				x(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
			}))
		}, y.scaleBy = function(t, n, e, r) {
			y.scaleTo(t, (function() {
				var t = this.__zoom.k,
					e = "function" == typeof n ? n.apply(this, arguments) : n;
				return t * e
			}), e, r)
		}, y.scaleTo = function(t, n, e, r) {
			y.transform(t, (function() {
				var t = i.apply(this, arguments),
					r = this.__zoom,
					a = null == e ? b(t) : "function" == typeof e ? e.apply(this, arguments) : e,
					u = r.invert(a),
					c = "function" == typeof n ? n.apply(this, arguments) : n;
				return o(_(v(r, c), a, u), t, f)
			}), e, r)
		}, y.translateBy = function(t, n, e, r) {
			y.transform(t, (function() {
				return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), f)
			}), null, r)
		}, y.translateTo = function(t, n, e, r, a) {
			y.transform(t, (function() {
				var t = i.apply(this, arguments),
					a = this.__zoom,
					u = null == r ? b(t) : "function" == typeof r ? r.apply(this, arguments) : r;
				return o(tw.translate(u[0], u[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, f)
			}), r, a)
		}, w.prototype = {
			event: function(t) {
				return t && (this.sourceEvent = t), this
			},
			start: function() {
				return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
			},
			zoom: function(t, n) {
				return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
			},
			end: function() {
				return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
			},
			emit: function(t) {
				var n = Bn(this.that).datum();
				h.call(t, this.that, new Qx(t, {
					sourceEvent: this.sourceEvent,
					target: y,
					type: t,
					transform: this.that.__zoom,
					dispatch: h
				}), n)
			}
		}, y.wheelDelta = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : Kx(+t), y) : a
		}, y.filter = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : Kx(!!t), y) : r
		}, y.touchable = function(t) {
			return arguments.length ? (u = "function" == typeof t ? t : Kx(!!t), y) : u
		}, y.extent = function(t) {
			return arguments.length ? (i = "function" == typeof t ? t : Kx([
				[+t[0][0], +t[0][1]],
				[+t[1][0], +t[1][1]]
			]), y) : i
		}, y.scaleExtent = function(t) {
			return arguments.length ? (c[0] = +t[0], c[1] = +t[1], y) : [c[0], c[1]]
		}, y.translateExtent = function(t) {
			return arguments.length ? (f[0][0] = +t[0][0], f[1][0] = +t[1][0], f[0][1] = +t[0][1], f[1][1] = +t[1][1], y) : [
				[f[0][0], f[0][1]],
				[f[1][0], f[1][1]]
			]
		}, y.constrain = function(t) {
			return arguments.length ? (o = t, y) : o
		}, y.duration = function(t) {
			return arguments.length ? (s = +t, y) : s
		}, y.interpolate = function(t) {
			return arguments.length ? (l = t, y) : l
		}, y.on = function() {
			var t = h.on.apply(h, arguments);
			return t === h ? y : t
		}, y.clickDistance = function(t) {
			return arguments.length ? (p = (t = +t) * t, y) : Math.sqrt(p)
		}, y.tapDistance = function(t) {
			return arguments.length ? (g = +t, y) : g
		}, y
	}, t.zoomIdentity = tw, t.zoomTransform = nw, Object.defineProperty(t, "__esModule", {
		value: !0
	})
}));