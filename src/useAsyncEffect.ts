import { DependencyList, useEffect } from "react";

const useAsyncEffect = (
  asyncEffect: () => Promise<void>,
  deps: DependencyList
) => {
  useEffect(() => {
    asyncEffect();
  }, deps);
};

export default useAsyncEffect;
