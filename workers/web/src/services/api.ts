import axios from 'axios';

// Reference from api/wrangler.toml name
const DEFAULT_API = 'api-helloworkers.dolphub.workers.dev';

// const env = process.env.REACT_APP_NODE_ENV;
const API_DOMAIN = process.env.REACT_APP_API_DOMAIN || DEFAULT_API;
// axios.defaults.baseURL = `https://${API_DOMAIN}`;
axios.defaults.baseURL = `https://${DEFAULT_API}/api`;

export { axios };
