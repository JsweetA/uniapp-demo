import { request } from '@/api/apiConfig';
import { API } from '@/types/index';

// GET, POST, PUT, DELETE
const {
  Methods: { GET },
} = API;

export const queryXXX = async (params: API.Params) => {
  console.log(params);

  const res = await request({
    url: '/xxx',
    method: GET,
  });
  return res;
};
