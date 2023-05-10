import { useEffect, useCallback } from 'react';

export const useEventListener = (type: string, handler: Function, deps: any[]) => {
  const memoizedHandler = useCallback(handler, deps);

  useEffect(() => {
    document.addEventListener(type, memoizedHandler);

    return () => {
      document.removeEventListener(type, memoizedHandler);
    };
  }, [type, memoizedHandler, ...deps]);
};
