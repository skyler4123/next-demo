import axios from 'axios';
import { BaseUrl } from './base';

interface ParamsType {
  id?: number | string;
  params?: object;
  body?: object;
  headers?: object;
}
export const TeachersApi = {
  index({params = {}, headers = {}}: ParamsType = {}) {
    return axios.get(BaseUrl + '/teachers', {params: params, headers: headers})
  },
  show({id, headers}: ParamsType = {}) {
    return axios.get(BaseUrl + '/teachers/' + `${id}`, {headers: headers})
  },
  create({body, headers}: ParamsType = {}) {
    return axios.post(BaseUrl + '/users', body, {headers: headers})
  }
}