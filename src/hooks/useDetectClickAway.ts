import { useEffect, MutableRefObject } from "react";

export const useDetectClickAway = (
  ref: MutableRefObject<any>,
  callback: () => void
) => {
  useEffect(() => {
    const ecentHandler = (e: MouseEvent) => {
      if (
        ref.current &&
        e.target &&
        !ref.current.contains(e.target) &&
        ref.current !== e.target
      ) {
        callback();
      }
    };
    document.addEventListener("mousedown", ecentHandler);
    return () => {
      document.removeEventListener("mousedown", ecentHandler);
    };
  }, [ref, callback]);
};
