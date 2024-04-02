import axios from 'axios';
import { BaseUrl } from './base';

export const UsersApi = {
  index(params = {}) {
    return axios.get(BaseUrl + '/users')
  },
  show(params = {}) {
    return params
  }
}