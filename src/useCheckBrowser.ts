import { useEffect, useState } from "react";

const useCheckBrowser = () => {
  const [browser, setBrowser] = useState<string>("");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/edg/i)) {
      setBrowser("edge");
    } else if (userAgent.match(/firefox|fxios/i)) {
      setBrowser("firefox");
    } else if (userAgent.match(/opr\//i)) {
      setBrowser("opera");
    } else if (userAgent.match(/chrome|chromium|crios/i)) {
      setBrowser("chrome");
    } else if (userAgent.match(/safari/i)) {
      setBrowser("safari");
    } else {
      setBrowser("other");
    }
  }, []);
  return browser;
};

export default useCheckBrowser;
