import { useState, useEffect } from "react";

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeoutHandler);
    };
    // eslint-disable-next-line
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
