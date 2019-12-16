import { axios } from './api';
import { AxiosInstance } from 'axios';

class ApiService {
  constructor(private readonly axios: AxiosInstance) {}

  async random() {
    const data = await this.axios.get('/hello');
    console.log(data);
    return await this.axios.get('/random');
  }
}

export default new ApiService(axios);
