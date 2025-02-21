import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    const mediaChanged = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    matchQueryList.addEventListener('change', mediaChanged);

    setMatches(matchQueryList.matches);
    return () => {
      matchQueryList.removeEventListener('change', mediaChanged);
    };
  }, [query]);
  return matches;
}

export const useIsMobileViewPort = () => useMediaQuery('(max-width: 48em)');
