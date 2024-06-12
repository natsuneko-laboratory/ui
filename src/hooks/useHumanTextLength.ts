import { type RefObject, useCallback, useEffect, useState } from "react";

const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });

const useTextLength = () => {
  const get = useCallback((val: string) => {
    const segments = segmenter.segment(val);
    return [...segments].length;
  }, []);

  return { get };
};

const useTextLengthWatch = (
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { get } = useTextLength();
  const [length, setLength] = useState(0);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      const listener = () => {
        const segments = get(current.value);
        setLength(segments);
      };

      current.addEventListener("input", listener);
      listener();
      return () => current.removeEventListener("input", listener);
    }

    return () => {};
  }, [ref, get]);

  return { length };
};

export { useTextLength, useTextLengthWatch };
