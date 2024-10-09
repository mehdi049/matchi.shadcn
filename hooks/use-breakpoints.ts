import { useEffect, useLayoutEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => window.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export function useBreakpoints() {
  const [isClient, setIsClient] = useState(false);

  const breakpoints = {
    isXs: useMediaQuery("(max-width: 640px)"),
    isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
    isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
    isLg: useMediaQuery("(min-width: 1025px) and (max-width: 1280px)"),
    isXl: useMediaQuery("(min-width: 1281px) and (max-width: 1536px)"),
    is2Xl: useMediaQuery("(min-width: 1537px)"),
    isMobile: useMediaQuery("(max-width: 768px)"),
    active: "SSR",
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  if (isClient && breakpoints.isXs) breakpoints.active = "xs";
  if (isClient && breakpoints.isSm) breakpoints.active = "sm";
  if (isClient && breakpoints.isMd) breakpoints.active = "md";
  if (isClient && breakpoints.isLg) breakpoints.active = "lg";
  if (isClient && breakpoints.isXl) breakpoints.active = "xl";
  if (isClient && breakpoints.is2Xl) breakpoints.active = "2xl";
  if (isClient && breakpoints.isMobile) breakpoints.active = "mobile";

  return breakpoints;
}
