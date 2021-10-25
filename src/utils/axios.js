import axios from "axios";
const BaseURL = "http://studentdesk.in/api/v1/";
const AxiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    // log the request
    // console.debug(
    //   "%cRequest:",
    //   "color: " + "#13446b" + "AF" + "; font-weight: bold",
    //   {
    //     address: `${config.baseURL}${config.url}`,
    //     requestBody: config.data,
    //   }
    // );
    // return the request config
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  async (response) => {
    //   log the response
    // console.debug(
    //   "%cResponse:",
    //   "color: " + "#339999" + "AF" + "; font-weight: bold",
    //   {
    //     address: `${response.config.baseURL}${response.config.url}`,
    //     responseBody: response.data,
    //   }
    // );
    // return the response
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
