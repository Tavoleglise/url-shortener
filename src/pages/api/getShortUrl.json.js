export const POST = async ({ request }) => {
  try {
    if (request.headers.get("Content-Type") === "application/json") {
      const data = await request.json();
      return new Response(
        JSON.stringify({
          message: "This was a POST!",
          data,
        })
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Invalid or empty JSON in request body",
      })
    );
  }
};
