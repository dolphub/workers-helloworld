const random = () => Math.floor(Math.random() * 100);

const defaultHeaders = { 'Access-Control-Allow-Origin': '*', Vary: 'Origin' };

const jsonHeaders = {
  'content-type': 'application/json',
};

const response = {
  json: (data: {}) =>
    new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...defaultHeaders, ...jsonHeaders },
    }),
};

export async function handleRequest(request: Request): Promise<Response> {
  return response.json({ data: random() });
}
