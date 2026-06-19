export const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = React.useState(value);
  const lastRanRef = React.useRef(Date.now());

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRanRef.current >= delay) {
        setThrottledValue(value);
        lastRanRef.current = Date.now();
      }
    }, delay - (Date.now() - lastRanRef.current));

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttledValue;
};
