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
      data-w="9fc763e2bec60bcb5ab63ed47528dcf7"
      data-height="450px"
      style={{ minHeight: "450px" }}
    />
  );
}
