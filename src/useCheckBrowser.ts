import { useEffect, useState } from "react";

type Browser =
  | "edge"
  | "firefox"
  | "opera"
  | "safari"
  | "chrome"
  | "whale"
  | "brave"
  | "other"
  | "ie"
  | "inApp-kakao"
  | "inApp-works"
  | "inApp-naver";

const useCheckBrowser = () => {
  const [browser, setBrowser] = useState<Browser>("other");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const braveNavigator = navigator.brave;

    if (userAgent.match(/kakao/i)) {
      setBrowser("inApp-kakao");
    } else if (userAgent.match(/naver/i)) {
      setBrowser("inApp-naver");
    } else if (userAgent.match(/worksmobile/i)) {
      setBrowser("inApp-works");
    } else if (userAgent.match(/edg/i)) {
      setBrowser("edge");
    } else if (userAgent.match(/firefox|fxios/i)) {
      setBrowser("firefox");
    } else if (userAgent.match(/opr\//i)) {
      setBrowser("opera");
    } else if (userAgent.match(/safari/i)) {
      setBrowser("safari");
    } else if (userAgent.match(/whale/i)) {
      setBrowser("whale");
    } else if (braveNavigator !== undefined) {
      setBrowser("brave");
    } else if (userAgent.search("trident") != -1 || userAgent.match(/msie/i)) {
      setBrowser("ie");
    } else if (userAgent.match(/chrome|chromium|crios/i)) {
      setBrowser("chrome");
    } else {
      setBrowser("other");
    }
  }, []);

  return browser;
};

export default useCheckBrowser;
