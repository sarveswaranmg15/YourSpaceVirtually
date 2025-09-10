import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    globalThis.matchMedia ? globalThis.matchMedia(query).matches : false
  );
  useEffect(() => {
    if (!globalThis.matchMedia) return;
    const mql = globalThis.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    setMatches(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}
