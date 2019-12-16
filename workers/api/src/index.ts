import tini from '@helloandre/tini';

tini(router => {
  router.get('/hello', req => {
    return { hello: 'world' };
  });
  router.get('/:key', req => {
    // outputs "myKey, 1"
    return `${req.params.key}`;
  });
});
// const random = () => Math.floor(Math.random() * 100);

// const defaultHeaders = { 'Access-Control-Allow-Origin': '*', Vary: 'Origin' };

// const jsonHeaders = {
//   'content-type': 'application/json',
// };

// const response = {
//   json: (data: {} | null) =>
//     new Response(typeof data === 'string' ? data : JSON.stringify(data), {
//       status: 200,
//       headers: { ...defaultHeaders, ...jsonHeaders },
//     }),
// };

// addEventListener('fetch', event => {
//   event.respondWith(handleRequest(event.request));
// });

// async function handleRequest(request: Request): Promise<Response> {
//   return response.json('Hello');
// }
