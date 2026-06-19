export const useStateWithPrevious = (initialValue) => {
  const [state, setState] = React.useState(initialValue);
  const prevStateRef = React.useRef();

  React.useEffect(() => {
    prevStateRef.current = state;
  }, [state]);

  return [state, setState, prevStateRef.current];
};
