import { useEffect, useRef } from 'react';

export const useMemoCallback = (callback, dependencies) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const memoizedCallback = useRef((...args) => ref.current?.(...args)).current;

  useEffect(() => {
    // Update reference on dependency change
  }, dependencies);

  return memoizedCallback;
};
