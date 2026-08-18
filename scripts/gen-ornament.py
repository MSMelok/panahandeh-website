#!/usr/bin/env python3
"""
Ornament geometry generator for the RAVOMA site.

The client's ornament (brand/newPattern01.jpeg, newPattern02.jpeg, the FULL
PATTERN tile on the identity board) is islimi/khatai: curvilinear, floral,
spiralling. Not girih. Every coordinate below is computed — no Bezier control
point is guessed by hand — and the result is written to

    src/components/ornament/geometry.ts

which the .astro components import. Re-run after changing any constant:

    python3 scripts/gen-ornament.py

Conventions
-----------
* Angles in radians, 0 = +x, clockwise on screen (SVG y grows downward).
* Every number is rounded to 2 decimals on the way out.
* Motifs that repeat around a circle are emitted ONCE at angle 0 and replayed
  with <use transform="rotate(...)"> by the component. Same for the 8-fold tile
  and the field's archetypes. This keeps the inlined markup small.
"""

from __future__ import annotations

import json
import math
import os
from typing import List, Tuple

TAU = math.pi * 2
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_TS = os.path.join(ROOT, "src", "components", "ornament", "geometry.ts")

Pt = Tuple[float, float]


# --------------------------------------------------------------------------
# number / path helpers
# --------------------------------------------------------------------------
def f(v: float) -> str:
    """Round to 2dp and strip the noise."""
    s = f"{v:.2f}"
    if s.startswith("-") and float(s) == 0:
        s = s[1:]
    if "." in s:
        s = s.rstrip("0").rstrip(".")
    return s or "0"


def n2(p: Pt) -> str:
    return f"{f(p[0])},{f(p[1])}"


def polar(r: float, a: float, c: Pt = (0.0, 0.0)) -> Pt:
    return (c[0] + r * math.cos(a), c[1] + r * math.sin(a))


def M(p: Pt) -> str:
    return f"M{n2(p)}"


def L(p: Pt) -> str:
    return f"L{n2(p)}"


def C(c1: Pt, c2: Pt, p: Pt) -> str:
    return f"C{n2(c1)} {n2(c2)} {n2(p)}"


def dot(p: Pt) -> str:
    """Zero-length subpath — renders as a disc under stroke-linecap:round."""
    return f"M{n2(p)}l0 0"


def circle(r: float, c: Pt = (0.0, 0.0)) -> str:
    a = (c[0] + r, c[1])
    b = (c[0] - r, c[1])
    return f"M{n2(a)}A{f(r)},{f(r)} 0 1 1 {n2(b)}A{f(r)},{f(r)} 0 1 1 {n2(a)}Z"


def cubic_at(p0: Pt, c1: Pt, c2: Pt, p1: Pt, t: float) -> Pt:
    u = 1 - t
    return (
        u * u * u * p0[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * p1[0],
        u * u * u * p0[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * p1[1],
    )


def hermite_curve(pos, vel, t0: float, t1: float, segs: int) -> str:
    """Exact cubic Hermite sampling of any parametric curve."""
    out = [M(pos(t0))]
    h = (t1 - t0) / segs
    for i in range(segs):
        a = t0 + i * h
        b = a + h
        pa, pb = pos(a), pos(b)
        va, vb = vel(a), vel(b)
        out.append(
            C(
                (pa[0] + va[0] * h / 3, pa[1] + va[1] * h / 3),
                (pb[0] - vb[0] * h / 3, pb[1] - vb[1] * h / 3),
                pb,
            )
        )
    return "".join(out)


def spiral(c: Pt, r0: float, r1: float, turns: float, phase: float = 0.0,
           segs_per_turn: float = 5.0) -> str:
    """Archimedean spiral — the islimi signature in newPattern02."""
    T = turns * TAU
    dr = (r1 - r0) / T

    def pos(t):
        r = r0 + dr * t
        return (c[0] + r * math.cos(t + phase), c[1] + r * math.sin(t + phase))

    def vel(t):
        r = r0 + dr * t
        cs, sn = math.cos(t + phase), math.sin(t + phase)
        return (dr * cs - r * sn, dr * sn + r * cs)

    return hermite_curve(pos, vel, 0.0, T, max(3, int(round(turns * segs_per_turn))))


# --------------------------------------------------------------------------
# petal primitives
# --------------------------------------------------------------------------
def leaf_petal(r0: float, r1: float, th: float, hw: float,
               c: Pt = (0.0, 0.0), belly: float = 0.24, waist: float = 0.55) -> str:
    """Lanceolate petal: point at r0, point at r1, bulging to +/-hw between."""
    h = r1 - r0
    base = polar(r0, th, c)
    tip = polar(r1, th, c)
    return "".join([
        M(base),
        C(polar(r0 + h * belly, th + hw, c), polar(r1 - h * (1 - waist), th + hw * waist, c), tip),
        C(polar(r1 - h * (1 - waist), th - hw * waist, c), polar(r0 + h * belly, th - hw, c), base),
        "Z",
    ])


def arch_petal(r0: float, r1: float, th: float, hw: float,
               c: Pt = (0.0, 0.0), shoulder: float = 0.50, neck: float = 0.42,
               close: bool = False) -> str:
    """Cusped pointed lobe: spans +/-hw at r0, rises to a point at r1.

    This is the shape of the outer ring in newPattern01 — a pointed lobe, not a
    round scallop."""
    h = r1 - r0
    a = polar(r0, th - hw, c)
    b = polar(r0, th + hw, c)
    tip = polar(r1, th, c)
    d = "".join([
        M(a),
        C(polar(r0 + h * shoulder, th - hw * 0.97, c), polar(r1 - h * 0.30, th - hw * neck, c), tip),
        C(polar(r1 - h * 0.30, th + hw * neck, c), polar(r0 + h * shoulder, th + hw * 0.97, c), b),
    ])
    return d + "Z" if close else d


def daisy(c: Pt, r0: float, r1: float, rays: int, phase: float = 0.0) -> str:
    """The many-rayed floret that repeats all through newPattern01."""
    out = []
    for i in range(rays):
        a = phase + TAU * i / rays
        out.append(M(polar(r0, a, c)))
        out.append(L(polar(r1, a, c)))
    return "".join(out)


def petal_floret(c: Pt, r0: float, r1: float, n: int, phase: float = 0.0,
                 hw_k: float = 0.80) -> str:
    hw = (TAU / n) / 2 * hw_k
    return "".join(leaf_petal(r0, r1, phase + TAU * i / n, hw, c) for i in range(n))


def zigzag_arc(c: Pt, ra: float, rb: float, th: float, hw: float, teeth: int) -> str:
    """Sawtooth band — the tooth rings inside newPattern01's outer lobes."""
    pts = []
    steps = teeth * 2
    for i in range(steps + 1):
        t = i / steps
        a = th - hw + 2 * hw * t
        pts.append(polar(ra if i % 2 == 0 else rb, a, c))
    return M(pts[0]) + "".join(L(p) for p in pts[1:])


def lens(r0: float, r1: float, th: float, hw: float, c: Pt = (0.0, 0.0)) -> str:
    """Almond / eye — the inner outline inside the big petals of the tile."""
    return leaf_petal(r0, r1, th, hw, c, belly=0.30, waist=0.70)


def blade(ln: float, wd: float, rot: float, c: Pt = (0.0, 0.0), veins: int = 5) -> str:
    """A single leaf blade: base at c, tip at distance ln along `rot`, with a
    midrib and lateral veins that all rake toward the tip."""
    cs, sn = math.cos(rot), math.sin(rot)

    def T(p: Pt) -> Pt:
        return (c[0] + p[0] * cs - p[1] * sn, c[1] + p[0] * sn + p[1] * cs)

    p0 = T((0.0, 0.0))
    p1 = T((ln, 0.0))
    cA = T((ln * 0.26, -wd * 0.58))
    cB = T((ln * 0.64, -wd * 0.44))
    cC = T((ln * 0.64, wd * 0.44))
    cD = T((ln * 0.26, wd * 0.58))
    out = [M(p0) + C(cA, cB, p1) + C(cC, cD, p0) + "Z", M(p0) + L(p1)]
    for k in range(1, veins + 1):
        t = k / (veins + 1.0)
        spine = (p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t)
        out.append(M(spine) + L(cubic_at(p0, cA, cB, p1, min(0.94, t + 0.15))))
        out.append(M(spine) + L(cubic_at(p1, cC, cD, p0, max(0.06, (1 - t) - 0.15))))
    return "".join(out)


def boteh(r: float, c: Pt = (0.0, 0.0), rot: float = 0.0) -> str:
    """Paisley outline — teardrop with the hooked tip, drawn from unit
    proportions so the hook keeps its shape at any size."""
    cs, sn = math.cos(rot), math.sin(rot)

    def T(u: float, v: float) -> Pt:
        x, y = u * r, v * r
        return (c[0] + x * cs - y * sn, c[1] + x * sn + y * cs)

    return "".join([
        M(T(0, 1)),
        C(T(0.92, 0.56), T(0.82, -0.44), T(0.20, -0.90)),
        C(T(-0.28, -1.10), T(-0.74, -0.86), T(-0.62, -0.44)),
        C(T(-0.54, -0.18), T(-0.96, 0.38), T(0, 1)),
        "Z",
    ])


# ==========================================================================
# 1. SHAMSA  — the radiating medallion of brand/newPattern01.jpeg
# ==========================================================================
def build_shamsa():
    R = 498.0
    bands = []

    def band(kind, d, w, level, cap=False, n=1):
        bands.append({"kind": kind, "d": d, "w": round(w, 2), "level": level,
                      "cap": cap, "n": n})

    # --- core ------------------------------------------------------------
    core = [
        circle(0.026 * R),
        circle(0.050 * R),
        circle(0.132 * R),
    ]
    band("path", "".join(core), 2.2, 1)
    band("path", dot((0, 0)), 9, 1, cap=True)
    band("path", daisy((0, 0), 0.062 * R, 0.116 * R, 16), 1.5, 1)
    band("path", "".join(dot(polar(0.090 * R, TAU * i / 16 + TAU / 32)) for i in range(16)),
         5, 2, cap=True)

    # --- ring A: 16 lanceolate petals -----------------------------------
    band("path", petal_floret((0, 0), 0.140 * R, 0.235 * R, 16, hw_k=0.86), 1.6, 1)
    band("path", "".join(dot(polar(0.188 * R, TAU * i / 16 + TAU / 32)) for i in range(16)),
         5, 2, cap=True)

    # --- bead ring 1 ------------------------------------------------------
    band("path", circle(0.252 * R) + circle(0.290 * R), 1.4, 4)
    band("path", "".join(dot(polar(0.271 * R, TAU * i / 28)) for i in range(28)), 5.5, 4, cap=True)

    # --- ring C: 12 arch petals with radial hatch ------------------------
    hw_c = (TAU / 12) / 2 * 0.93
    r0c, r1c = 0.296 * R, 0.440 * R
    motif = [arch_petal(r0c, r1c, 0.0, hw_c),
             arch_petal(r0c + 7, r1c - 12, 0.0, hw_c * 0.78)]
    for k in range(-3, 4):
        a = hw_c * 0.62 * (k / 3.0)
        motif.append(M(polar(r0c + 13, a)))
        motif.append(L(polar(r1c - 26 - abs(k) * 8, a)))
    band("radial", "".join(motif), 1.5, 2, n=12)

    # --- dentil ladder 1 --------------------------------------------------
    r0d, r1d = 0.452 * R, 0.505 * R
    band("path", circle(r0d) + circle(r1d), 2.2, 1)
    bars = []
    for i in range(56):
        a = TAU * i / 56
        bars.append(M(polar(r0d + 2.5, a)))
        bars.append(L(polar(r1d - 2.5, a)))
    band("path", "".join(bars), 2.6, 1)

    # --- ring E: 16 cusped teardrops, each with a spiral ------------------
    hw_e = (TAU / 16) / 2 * 0.95
    r0e, r1e = 0.516 * R, 0.646 * R
    motif = [arch_petal(r0e, r1e, 0.0, hw_e),
             arch_petal(r0e + 6, r1e - 11, 0.0, hw_e * 0.76),
             spiral((r0e + 30, 0.0), 1.5, 15.0, 1.9, phase=math.pi, segs_per_turn=5)]
    motif.append(daisy((r1e - 26, 0.0), 3.0, 12.0, 9))
    band("radial", "".join(motif), 1.5, 3, n=16)

    # --- bead ring 2 ------------------------------------------------------
    band("path", circle(0.655 * R), 1.4, 5)
    band("path", "".join(dot(polar(0.668 * R, TAU * i / 36)) for i in range(36)), 5, 5, cap=True)

    # --- ring G: 20 arch petals with a floret -----------------------------
    hw_g = (TAU / 20) / 2 * 0.95
    r0g, r1g = 0.681 * R, 0.776 * R
    motif = [arch_petal(r0g, r1g, 0.0, hw_g),
             daisy(((r0g + r1g) / 2 - 4, 0.0), 3.0, 14.0, 8),
             dot(((r0g + r1g) / 2 - 4, 0.0))]
    band("radial", "".join(motif), 1.5, 4, n=20)

    # --- dentil ladder 2 --------------------------------------------------
    r0h, r1h = 0.788 * R, 0.830 * R
    band("path", circle(r0h) + circle(r1h), 2.2, 5)
    bars = []
    for i in range(72):
        a = TAU * i / 72
        bars.append(M(polar(r0h + 2, a)))
        bars.append(L(polar(r1h - 2, a)))
    band("path", "".join(bars), 2.4, 5)

    # --- outer ring: 20 large cusped lobes --------------------------------
    hw_o = (TAU / 20) / 2 * 0.99
    r0o, r1o = 0.840 * R, 1.0 * R
    outline = [arch_petal(r0o, r1o, 0.0, hw_o)]
    band("radial", "".join(outline), 2.0, 1, n=20)

    inner = [arch_petal(r0o + 9, r1o - 15, 0.0, hw_o * 0.80)]
    inner.append(zigzag_arc((0, 0), r0o + 16, r0o + 30, 0.0, hw_o * 0.72, 7))
    band("radial", "".join(inner), 1.4, 2, n=20)

    fill = [daisy((r0o + 52, 0.0), 4.0, 17.0, 10),
            dot((r0o + 52, 0.0)),
            spiral((r0o + 96, 0.0), 1.5, 10.0, 1.6, phase=math.pi, segs_per_turn=5)]
    band("radial", "".join(fill), 1.4, 3, n=20)

    # tiny scrolls seated in the valleys between the outer lobes
    valley = [spiral((r0o + 4, 0.0), 1.2, 9.0, 1.5, phase=0.0, segs_per_turn=5)]
    band("radial", "".join(valley), 1.3, 6, n=20)

    return {"r": R, "bands": bands}


# ==========================================================================
# 2. FIELD — the seamless all-over floral of brand/newPattern02.jpeg
# ==========================================================================
def m_spiral_disc(r: float) -> str:
    out = [circle(r), circle(r * 0.60)]
    out.append(spiral((0, 0), 1.2, r * 0.30, 2.6, segs_per_turn=5))
    for i in range(22):
        a = TAU * i / 22
        out.append(M(polar(r * 0.36, a)))
        out.append(L(polar(r * 0.57, a)))
    n = 18
    hw = (TAU / n) / 2 * 0.92
    for i in range(n):
        out.append(arch_petal(r * 0.62, r * 0.98, TAU * i / n, hw))
    return "".join(out)


def m_sunflower(r: float) -> str:
    out = [circle(r * 0.30), circle(r * 0.62), circle(r * 0.70)]
    out.append(daisy((0, 0), 3.0, r * 0.26, 12))
    for i in range(20):
        a = TAU * i / 20 + TAU / 40
        out.append(M(polar(r * 0.34, a)))
        out.append(L(polar(r * 0.58, a)))
    n = 16
    hw = (TAU / n) / 2 * 0.86
    for i in range(n):
        out.append(leaf_petal(r * 0.72, r, TAU * i / n, hw))
    return "".join(out)


def m_boteh(r: float) -> str:
    """Paisley — outline, inner echo, spiral eye, ring of dashes."""
    eye = (0.0, r * 0.16)
    out = [boteh(r), boteh(r * 0.80, (0.0, r * 0.12))]
    out.append(spiral(eye, 1.5, r * 0.30, 2.4, segs_per_turn=5))
    out.append(circle(r * 0.36, eye))
    for i in range(16):
        a = TAU * i / 16
        out.append(M(polar(r * 0.40, a, eye)))
        out.append(L(polar(r * 0.54, a, eye)))
    return "".join(out)


def m_leaf(ln: float, wd: float) -> str:
    """Split leaf — the islimi lobe pair, both blades springing from one base."""
    out = [blade(ln, wd, -0.34), blade(ln * 0.86, wd * 0.88, 0.36)]
    out.append(spiral((0.0, 0.0), 1.2, wd * 0.26, 1.3, phase=math.pi, segs_per_turn=5))
    return "".join(out)


def m_fan(r: float) -> str:
    """Nested scallop rows — the 'scale' filler in newPattern02."""
    out = []
    for k in range(4):
        rr = r * (0.34 + 0.22 * k)
        a0, a1 = math.pi * 1.08, math.pi * 1.92
        steps = 7
        pts = [polar(rr, a0 + (a1 - a0) * i / steps) for i in range(steps + 1)]
        seg = [M(pts[0])]
        for i in range(steps):
            mid = polar(rr * (1.0 if i % 2 else 0.88),
                        a0 + (a1 - a0) * (i + 0.5) / steps)
            seg.append(f"Q{n2(mid)} {n2(pts[i + 1])}")
        out.append("".join(seg))
    return "".join(out)


def m_rosette(r: float) -> str:
    out = [circle(r * 0.34), daisy((0, 0), 2.0, r * 0.28, 9), dot((0, 0))]
    n = 10
    hw = (TAU / n) / 2 * 0.84
    for i in range(n):
        out.append(leaf_petal(r * 0.40, r, TAU * i / n, hw))
    return "".join(out)


def build_field():
    W = H = 380.0
    archetypes = [
        m_spiral_disc(46),   # 0
        m_sunflower(40),     # 1
        m_boteh(44),         # 2
        m_leaf(88, 34),      # 3
        m_fan(36),           # 4
        m_rosette(22),       # 5
    ]
    # `radius` drives spacing; `bound` is the generous extent used to decide
    # which wrapped copies must be emitted, so nothing is clipped at a seam.
    radius = [46, 40, 48, 58, 36, 22]
    bound = [50, 44, 56, 96, 40, 26]

    # deterministic LCG so the tile never changes between runs
    state = 20260818

    def rnd() -> float:
        nonlocal state
        state = (state * 1103515245 + 12345) % (1 << 31)
        return state / (1 << 31)

    plan = ([0] * 5) + ([1] * 6) + ([2] * 5) + ([3] * 14) + ([4] * 7) + ([5] * 13)
    placed: List[dict] = []
    for kind in plan:
        best = None
        for _ in range(160):
            x, y = rnd() * W, rnd() * H
            s = 0.70 + rnd() * 0.62
            rr = radius[kind] * s
            worst = 1e9
            for q in placed:
                dx = abs(q["x"] - x)
                dy = abs(q["y"] - y)
                dx = min(dx, W - dx)
                dy = min(dy, H - dy)
                gap = math.hypot(dx, dy) - (q["r"] + rr) * 0.46
                worst = min(worst, gap)
            if best is None or worst > best[0]:
                best = (worst, x, y, s, rr)
            if worst > 0:
                break
        _, x, y, s, rr = best
        placed.append({"k": kind, "x": x, "y": y, "s": s, "rot": rnd() * 360.0,
                       "r": rr, "b": bound[kind] * s})

    # torus wrap: emit every copy whose extent still touches the tile
    uses = []
    for p in placed:
        for dx in (-W, 0.0, W):
            for dy in (-H, 0.0, H):
                cx, cy = p["x"] + dx, p["y"] + dy
                if cx + p["b"] < 0 or cx - p["b"] > W:
                    continue
                if cy + p["b"] < 0 or cy - p["b"] > H:
                    continue
                uses.append({"k": p["k"],
                             "t": f"translate({f(cx)} {f(cy)}) rotate({f(p['rot'])}) scale({f(p['s'])})"})

    return {"w": W, "h": H, "motifs": archetypes, "uses": uses}


# ==========================================================================
# 3. TILE — the 8-fold star-floral of the board's FULL PATTERN
# ==========================================================================
def build_tile():
    S = 200.0
    c = (S / 2, S / 2)
    frame_paths = [
        f"M6,6H{f(S-6)}V{f(S-6)}H6Z",
        f"M12,12H{f(S-12)}V{f(S-12)}H12Z",
    ]

    # one 45-degree wedge, replayed 8x by the component
    wedge = []
    # narrow spike on the axis
    wedge.append(leaf_petal(9, 86, 0.0, 0.085, c, belly=0.16, waist=0.62))
    wedge.append(lens(24, 70, 0.0, 0.045, c))
    # big lanceolate petal at 22.5 degrees
    th = TAU / 16
    wedge.append(leaf_petal(13, 72, th, 0.285, c, belly=0.26, waist=0.52))
    wedge.append(lens(26, 62, th, 0.150, c))
    wedge.append(lens(34, 54, th, 0.070, c))
    # interlaced arabesque arc bridging the two
    wedge.append(arch_petal(58, 84, th, 0.30, c, shoulder=0.55, neck=0.50))
    # axis arm out to the frame with a lozenge bead
    wedge.append(M(polar(88, 0.0, c)) + L(polar(94, 0.0, c)))
    wedge.append(M(polar(74, 0.0, c)) + L(polar(80, -0.05, c))
                 + L(polar(86, 0.0, c)) + L(polar(80, 0.05, c)) + "Z")
    wedge_d = "".join(wedge)

    centre = [circle(9, c), circle(4.5, c), dot(c),
              daisy(c, 5.5, 8.0, 8, phase=TAU / 16)]
    centre_d = "".join(centre)

    # corner scroll, drawn once in the top-inline-start corner, replayed 4x
    corner = []
    corner.append(spiral((30, 30), 2.0, 12.0, 1.8, phase=0.6, segs_per_turn=5))
    corner.append(spiral((52, 22), 1.5, 8.0, 1.5, phase=2.4, segs_per_turn=5))
    corner.append(spiral((22, 52), 1.5, 8.0, 1.5, phase=-1.0, segs_per_turn=5))
    corner.append(M((16, 44)) + C((22, 34), (34, 22), (44, 16)))
    corner.append(M((18, 58)) + C((30, 46), (46, 30), (58, 18)))
    corner.append(leaf_petal(0, 22, math.pi * 0.75, 0.22, (58, 58)))
    corner_d = "".join(corner)

    return {"size": S, "frame": "".join(frame_paths),
            "centre": centre_d, "wedge": wedge_d, "corner": corner_d}


# ==========================================================================
# 4. RAIL — seamless horizontal band: scrolling vine + bead keyline
# ==========================================================================
def build_rail():
    W, H = 180.0, 34.0
    mid = 15.0
    amp = 7.0

    def pos(x):
        return (x, mid - amp * math.sin(TAU * x / W))

    def vel(x):
        return (1.0, -amp * TAU / W * math.cos(TAU * x / W))

    stem = hermite_curve(pos, vel, 0.0, W, 8)

    orn = []
    # split palmettes at the crest and the trough
    for cx, sgn in ((W * 0.25, -1.0), (W * 0.75, 1.0)):
        base = pos(cx)
        up = -math.pi / 2 if sgn < 0 else math.pi / 2
        orn.append(leaf_petal(0, 13, up, 0.30, base))
        orn.append(leaf_petal(0, 9, up - 0.72, 0.24, base))
        orn.append(leaf_petal(0, 9, up + 0.72, 0.24, base))
        orn.append(dot((base[0], base[1] + sgn * 5)))
    # tendrils at the zero crossings (x = 0 duplicated at x = W for the seam)
    for cx in (0.0, W * 0.5, W):
        base = pos(cx)
        ph = 0.0 if cx == W * 0.5 else math.pi
        orn.append(spiral((base[0], base[1]), 1.2, 6.0, 1.4, phase=ph, segs_per_turn=5))
    orn_d = "".join(orn)

    # fine bead keyline below the vine
    key = [f"M0,{f(H-5)}H{f(W)}"]
    beads = []
    for i in range(12):
        beads.append(dot((W * i / 12 + W / 24, H - 5)))
    return {"w": W, "h": H, "stem": stem, "orn": orn_d,
            "key": "".join(key), "beads": "".join(beads)}


# ==========================================================================
# 5. FLOURISH — the board's LINE ELEMENT
# ==========================================================================
def build_flourish():
    W, H = 300.0, 40.0
    y = H / 2
    c = (W / 2, y)
    out_main = []
    out_fine = []

    # tapering rule with arrow terminals
    out_main.append(f"M22,{f(y)}H118")
    out_main.append(f"M{f(W-22)},{f(y)}H{f(W-118)}")
    out_main.append(M((32, y - 4.5)) + L((22, y)) + L((32, y + 4.5)))
    out_main.append(M((W - 32, y - 4.5)) + L((W - 22, y)) + L((W - 32, y + 4.5)))

    # lozenge beads
    for cx in (66.0, W - 66.0):
        out_fine.append(M((cx - 6, y)) + L((cx, y - 4.2)) + L((cx + 6, y))
                        + L((cx, y + 4.2)) + "Z")

    # central quatrefoil rosette
    for i in range(4):
        a = TAU * i / 4 + TAU / 8
        out_main.append(leaf_petal(3.5, 15.0, a, 0.42, c))
    out_fine.append(circle(5.5, c))
    out_fine.append(dot((c[0] - 3.4, y)))
    out_fine.append(dot((c[0] + 3.4, y)))

    # C-scrolls flanking the rosette
    for sgn in (-1.0, 1.0):
        base = (c[0] + sgn * 17, y)
        out_fine.append(spiral(base, 1.2, 7.5, 1.4,
                               phase=0.0 if sgn > 0 else math.pi, segs_per_turn=5))
        out_fine.append(M((c[0] + sgn * 24, y)) + L((c[0] + sgn * 118, y)))

    return {"w": W, "h": H, "main": "".join(out_main), "fine": "".join(out_fine)}


# ==========================================================================
# 6. ARCH — the four-centred pointed arch, unchanged from the shipped pages
# ==========================================================================
ARCH_CLIP = ("M0,1 V0.46 C0,0.29 0.13,0.135 0.35,0.055 C0.43,0.025 0.475,0.008 "
             "0.5,0 C0.525,0.008 0.57,0.025 0.65,0.055 C0.87,0.135 1,0.29 1,0.46 V1 Z")
ARCH_LINE = ("M0,100 V46 C0,29 13,13.5 35,5.5 C43,2.5 47.5,0.8 50,0 C52.5,0.8 57,2.5 "
             "65,5.5 C87,13.5 100,29 100,46 V100")


# --------------------------------------------------------------------------
def main() -> None:
    shamsa = build_shamsa()
    field = build_field()
    tile = build_tile()
    rail = build_rail()
    flourish = build_flourish()

    def j(v) -> str:
        return json.dumps(v, separators=(",", ":"))

    ts = f"""/* eslint-disable */
/**
 * GENERATED FILE — do not edit by hand.
 * Produced by scripts/gen-ornament.py; re-run that script to change anything.
 *
 * Islimi/khatai geometry for the RAVOMA ornament set. Every petal, spiral and
 * tooth is computed from polar coordinates, so the curves are mathematically
 * symmetrical rather than eyeballed. Coordinates are rounded to 2dp.
 *
 * `radial` bands and the field's `uses` carry a motif drawn once; the components
 * replay them with <use transform>, which keeps the inlined SVG small.
 */

export interface Band {{
  /** 'path' draws d as-is; 'radial' repeats d n times around the centre. */
  kind: 'path' | 'radial';
  d: string;
  /** stroke-width in viewBox units */
  w: number;
  /** lowest `rings` value at which this band is drawn */
  level: number;
  /** round linecap — used for bead/dot rings */
  cap: boolean;
  n: number;
}}

/** brand/newPattern01.jpeg — concentric rosette, petal rings, dentil ladders,
 *  cusped outer lobes. Centred on (0,0); outer radius `r`. */
export const SHAMSA: {{ r: number; bands: Band[] }} = {j(shamsa)};

/** brand/newPattern02.jpeg — seamless all-over floral. Motifs are placed on a
 *  torus (every copy that crosses an edge is repeated on the opposite edge), so
 *  the tile joins with no seam. */
export const FIELD: {{
  w: number;
  h: number;
  motifs: string[];
  uses: {{ k: number; t: string }}[];
}} = {j(field)};

/** The identity board's FULL PATTERN tile — 8-fold star-floral, framed. */
export const TILE: {{
  size: number;
  frame: string;
  centre: string;
  wedge: string;
  corner: string;
}} = {j(tile)};

/** Seamless horizontal band — periodic vine (sine stem, exactly periodic at the
 *  tile edge) with split palmettes and a fine bead keyline. */
export const RAIL: {{
  w: number;
  h: number;
  stem: string;
  orn: string;
  key: string;
  beads: string;
}} = {j(rail)};

/** The board's LINE ELEMENT — tapering rule, arrow terminals, central rosette. */
export const FLOURISH: {{ w: number; h: number; main: string; fine: string }} = {j(flourish)};

/** Four-centred pointed arch. CLIP is objectBoundingBox units, LINE is a
 *  0-100 viewBox outline. */
export const ARCH_CLIP = {j(ARCH_CLIP)};
export const ARCH_LINE = {j(ARCH_LINE)};
"""

    os.makedirs(os.path.dirname(OUT_TS), exist_ok=True)
    with open(OUT_TS, "w") as fh:
        fh.write(ts)

    size = len(ts)
    print(f"wrote {OUT_TS}  ({size/1024:.1f} KB)")
    print(f"  shamsa bands : {len(shamsa['bands'])}")
    print(f"  field motifs : {len(field['motifs'])} archetypes, {len(field['uses'])} placements")
    print(f"  tile / rail / flourish generated")


if __name__ == "__main__":
    main()
