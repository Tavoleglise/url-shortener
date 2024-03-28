export async function GET({ params }) {
  const id = params.id;

  return new Response(JSON.stringify(id), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
