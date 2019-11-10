import axios from 'axios';

const DEFAULT_DOMAIN = 'dolphub.workers.dev';

// const env = process.env.REACT_APP_NODE_ENV;
const API_DOMAIN = process.env.REACT_APP_API_DOMAIN || DEFAULT_DOMAIN;
axios.defaults.baseURL = `https://api.${API_DOMAIN}`;

export { axios };
