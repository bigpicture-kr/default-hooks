import { RefObject, useEffect, useState } from "react";

const useInterSection = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit
): IntersectionObserverEntry | null => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0]);
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => null;
    // 이것 수정하면 오류납니다!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, options.threshold, options.root, options.rootMargin]);

  return intersectionObserverEntry;
};

export default useInterSection;
