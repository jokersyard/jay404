export const useCountdown = (initialValue = 0) => {
  const [count, setCount] = React.useState(initialValue);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (isActive && count > 0) {
      interval = setInterval(() => setCount(count - 1), 1000);
    } else if (count === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, count]);

  return {
    count,
    start: () => setIsActive(true),
    pause: () => setIsActive(false),
    reset: () => { setCount(initialValue); setIsActive(false); },
  };
};
