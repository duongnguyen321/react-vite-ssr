import { useState, useEffect } from 'react';

 const useIsSSR = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(typeof window === "undefined");
  }, []);

  return isSSR;
};

export default useIsSSR;
