import createRequest from './requestFactory/createRequest';
import createGetBaseUrl from './requestFactory/createBaseUrl';

// 接口地址
const hosts = {
  DEV: '...',
  UAT: '...',
  PRO: '...',
};

const getBaseUrl = createGetBaseUrl(hosts);
const request = createRequest(getBaseUrl);

export { getBaseUrl, request };
