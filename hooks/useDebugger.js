import { useEffect } from 'react';

export const useDebugger = (componentName, props) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.group(`🔍 ${componentName}`);
      console.table(props);
      console.groupEnd();
    }
  }, [componentName, props]);
};
