import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as response from '@/services/data';

export const instance = axios.create({
  baseURL: '/api/form',
});

const mock = new MockAdapter(instance);

mock.onGet().reply(200, response);
