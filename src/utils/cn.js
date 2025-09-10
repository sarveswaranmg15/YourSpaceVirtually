export function cn(...args) {
  return args
    .flatMap((a) =>
      typeof a === "string"
        ? a
        : Array.isArray(a)
        ? a
        : a && typeof a === "object"
        ? Object.entries(a)
            .filter(([, v]) => !!v)
            .map(([k]) => k)
        : []
    )
    .filter(Boolean)
    .join(" ");
}
