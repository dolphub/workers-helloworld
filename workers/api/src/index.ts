import tini from '@helloandre/tini';
import { KVNamespace } from '@cloudflare/workers-types';

import { getData, putData, originHeaders } from './handlers';

const random = () => Math.floor(Math.random() * 100);

const putKV = req => {};

tini(router => {
  router.get('/api/data/:key', async req => {
    const data = await getData(req.params.key);
    return new Response(data, {
      headers: {
        ...originHeaders(req),
      },
    });
  });

  router.put('/api/data/:key', async req => {
    const body = await req.json();
    return putData(req.params.key, body);
  });
  router.get('/api/hello', (req: Request) => {
    const responseObj = {
      req,
      referrer: req.referrer,
      referer: req.headers.get('Referer'),
      rPolicies: req.headers.get('Referer-Policy'),
      CT: req.headers.get('Content-Type'),
    };
    return new Response(JSON.stringify(responseObj), {
      headers: {
        ...originHeaders(req),
      },
    });
  });
  router.get('/api/random', req => {
    const num = random();
    return new Response(JSON.stringify({ data: num }), {
      headers: {
        ...originHeaders(req),
      },
    });
  });
});

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
