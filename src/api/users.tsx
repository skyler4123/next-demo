import axios from 'axios';
import { BaseUrl } from './base';

export const UsersApi = {
  index({params} = {}) {
    return axios.get(BaseUrl + '/users', {params: params})
  },
  show(params = {}) {
    return params
  },
  create() {
    return axios.post(BaseUrl + '/users')
  }
}