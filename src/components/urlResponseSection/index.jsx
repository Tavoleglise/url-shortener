import React, { useState, useEffect } from "react";
import CircularLoader from "../../commons/CircularLoader";
import { useStore } from "@nanostores/react";
import { shortUrl } from "../../store/url-store";

const UrlResponseSection = ({ data = "hola" }) => {
  const $shortUrl = useStore(shortUrl);
  const [url, setUrl] = useState("");
  useEffect(() => {
    console.log("QSHORTURL", $shortUrl);
  }, [$shortUrl]);
  return (
    <div className="width-full flex justify-center p-16">
      {(data && (
        <div className="text-white">
          <a href={url}>{url}</a>
        </div>
      )) || <CircularLoader />}
    </div>
  );
};

export default UrlResponseSection;
