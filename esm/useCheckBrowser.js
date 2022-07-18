import { useEffect, useState } from "react";
var useCheckBrowser = function () {
    var _a = useState(""), browser = _a[0], setBrowser = _a[1];
    useEffect(function () {
        var userAgent = navigator.userAgent;
        if (userAgent.match(/edg/i)) {
            setBrowser("edge");
        }
        else if (userAgent.match(/firefox|fxios/i)) {
            setBrowser("firefox");
        }
        else if (userAgent.match(/opr\//i)) {
            setBrowser("opera");
        }
        else if (userAgent.match(/chrome|chromium|crios/i)) {
            setBrowser("chrome");
        }
        else if (userAgent.match(/safari/i)) {
            setBrowser("safari");
        }
        else {
            setBrowser("other");
        }
    }, []);
    return browser;
};
export default useCheckBrowser;
