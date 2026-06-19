export const useUnmount = (callback) => {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(
    () => () => {
      callbackRef.current();
    },
    []
  );
};
