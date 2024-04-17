import React, { useState, useEffect } from "react";
import CircularLoader from "../../commons/CircularLoader";
import { useStore } from "@nanostores/react";
import { shortUrl } from "../../store/url-store";

const UrlResponseSection = () => {
  const $shortUrl = useStore(shortUrl);
  useEffect(() => {
    console.log("shortUrl", $shortUrl);
  }, [$shortUrl]);
  return (
    <div className="width-full flex justify-center p-16">
      {($shortUrl && (
        <div className="text-white">
          <a
            target="_blank"
            href={`http://localhost:3000/url/${$shortUrl.code}`}
          >{`http://localhost:3000/url/${$shortUrl.code}`}</a>
        </div>
      )) || <CircularLoader />}
    </div>
  );
};

export default UrlResponseSection;
