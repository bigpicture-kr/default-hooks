import { useEffect } from "react";
import { Router } from "next/router";

const useRouterFinish = (handler: (...evts: any[]) => void) => {
  useEffect(() => {
    Router.events.on("routeChangeComplete", handler);
    Router.events.on("routeChangeError", handler);

    return () => {
      Router.events.off("routeChangeComplete", handler);
      Router.events.off("routeChangeError", handler);
    };
  }, [handler]);
};

export default useRouterFinish;
