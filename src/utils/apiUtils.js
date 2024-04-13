export const request = async (url, body) => {
  try {
    const StringifiedBody = JSON.stringify(body);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: StringifiedBody,
    };
    const res = await fetch(url, options);
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(`Request failed in ${url}`);
    }
  } catch (error) {
    console.error(error, "MAMO");
  }
};
