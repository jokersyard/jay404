export const CountUp = ({ end = 100, duration = 2000, prefix = '', suffix = '', className = '' }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(Math.ceil(end));
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
