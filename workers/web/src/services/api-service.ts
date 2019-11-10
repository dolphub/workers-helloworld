import { axios } from './api';
import { AxiosInstance } from 'axios';

class ApiService {
  constructor(private readonly axios: AxiosInstance) {}

  async random() {
    return await this.axios.get('');
  }
}

export default new ApiService(axios);
