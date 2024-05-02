import React, { useState, useEffect } from "react";
import CircularLoader from "../../commons/CircularLoader";
import { useStore } from "@nanostores/react";
import { shortUrl, loading } from "../../store/url-store";

const UrlResponseSection = () => {
  const $shortUrl = useStore(shortUrl);
  const $loading = useStore(loading);
  useEffect(() => {
    console.log("shortUrl", $shortUrl);
  }, [$shortUrl]);
  if ($loading) {
    return <CircularLoader />;
  }
  return (
    <div className="width-full flex justify-center p-16">
      {$shortUrl && (
        <div className="text-white">
          <a
            target="_blank"
            href={`http://localhost:3000/url/${$shortUrl.code}`}
          >{`http://localhost:3000/url/${$shortUrl.code}`}</a>
        </div>
      )}
    </div>
  );
};

export default UrlResponseSection;
