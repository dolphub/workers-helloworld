// import Router from './worker-router';
import { KVNamespace } from '@cloudflare/workers-types';

import * as url from 'url';

declare const testData: KVNamespace;

export const originHeaders = req => {
  const referer = req.headers.get('Referer');
  const { origin } = new URL(referer);
  return {
    'Access-Control-Allow-Origin': origin,
  };
};

export async function getData(key: string) {
  return testData.get(key);
}

export async function putData(key: string, body: string) {
  const result = await testData.put(key, JSON.stringify(body));
  return { result };
}

// async function generateRandomNumber(req: Request) {
//   return response.json({ data: random() });
// }

// export { router };
