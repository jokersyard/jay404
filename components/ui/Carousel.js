export const Carousel = ({ items = [], autoPlay = true, interval = 5000, className = '' }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
