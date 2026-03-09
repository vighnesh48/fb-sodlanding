import { useEffect } from "react";

export default function NoPaperFormWidget() {
  useEffect(() => {
    if (window.__npfLoaded) return;
    window.__npfLoaded = true;

    const script = document.createElement("script");
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="npf_wgts"
      data-w="61eadc64fb6a2a3ab9d22e77978e3a4c"
      data-height="500px"
      style={{ minHeight: "500px" }}
    />
  );
}
