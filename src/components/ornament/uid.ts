/**
 * Per-build unique element ids for the ornament SVGs.
 *
 * Every ornament that uses <defs> + <use> needs an id, and two instances of the
 * same component on one page must not collide. A module-scoped counter gives a
 * short, stable-per-build id without pulling in a dependency.
 */
let n = 0;

export const uid = (prefix: string): string => `${prefix}${(++n).toString(36)}`;
