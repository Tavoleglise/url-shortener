import { useState, useEffect } from "react";
import Input from "../../commons/Input";
import { request } from "../../utils";
import { useStore } from "@nanostores/react";
import { shortUrl } from "../../store/url-store";

const MainInput = () => {
  const [typedUrl, setTypedUrl] = useState("");
  const $shortUrl = useStore(shortUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const data = await fetchData(typedUrl);
    console.log("@DATA", data);
    shortUrl.set(data);
  };

  const handleChange = (e) => {
    setTypedUrl(e.target.value);
  };

  const fetchData = async (newUrl) => {
    const data = await request("http://localhost:3000/url/add-url", {
      url: newUrl,
    });
    return data;
  };
  useEffect(() => {
    console.log("typedUrl", typedUrl);
  });

  return (
    <div>
      <form
        className="w-full flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <Input
          onChange={handleChange}
          className=""
          type="text"
          label="Your URL"
          value={typedUrl}
        />
        <Input type="submit" value="Make it short" className="ml-4">
          Make it short
        </Input>
      </form>
    </div>
  );
};

export default MainInput;
