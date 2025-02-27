"use client";
import { useEffect } from "react";

const TawkToMessenger = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/67b3c97e96ac16190cf59214/1ikb4m6j3";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();

    // Hide the widget when it loads
    Tawk_API.onLoad = function () {
      Tawk_API.hideWidget();
    };
  }, []);

  return null;
};

export default TawkToMessenger;
