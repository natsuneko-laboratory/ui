import { useCallback, useEffect, useState } from "react";

const useHashParams = () => {
  const [value, setHash] = useState(() => window.location.hash.substring(1));

  const onHashChanged = useCallback(() => {
    setHash(window.location.hash.substring(1));
  }, []);

  const write = useCallback((newValue: string) => {
    if (newValue !== value) {
      window.location.hash = newValue;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChanged);

    return () => window.removeEventListener("hashchange", onHashChanged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, write] as const;
};

export { useHashParams };
