import Router from './worker-router';
import { KVNamespace } from '@cloudflare/workers-types';

import WorkerRouter from './worker-router';

declare const ns1: KVNamespace;

const random = () => Math.floor(Math.random() * 100);

const defaultHeaders = { 'Access-Control-Allow-Origin': '*', Vary: 'Origin' };

const jsonHeaders = {
  'content-type': 'application/json',
};

const response = {
  json: (data: {} | null) =>
    new Response(typeof data === 'string' ? data : JSON.stringify(data), {
      status: 200,
      headers: { ...defaultHeaders, ...jsonHeaders },
    }),
};

const router = new WorkerRouter();
router.get('/random', generateRandomNumber);
router.get('/data', getData);
router.get('/data/:val', getData);
router.put('/data', putData);

async function getData(req: Request) {
  const data = await ns1.get('test');
  return response.json(data);
}

async function putData(req: Request) {
  const body = await req.json();
  const result = await ns1.put('test', JSON.stringify(body));
  return response.json({ body: result });
}

async function generateRandomNumber(req: Request) {
  return response.json({ data: random() });
}

export { router };
