import axios from "axios";
import apiOptions from "./endpoints";

const AxiosApi = axios.create();

// Request interceptor to add token
AxiosApi.interceptors.request.use(
  async (request_config) => {
    const authorization_token = localStorage.getItem("access");
    request_config.headers.Authorization = "Bearer " + authorization_token;

    // if api request for refreshing token
    // if (request_config.url === apiOptions(REFRESH_TOKEN_API).url) {
    //   request_config.data = { refresh: localStorage.getItem("refresh") };
    // }
    return request_config;
  },
  (err) => Promise.reject(err)
);

// Response interceptor to refresh token
// AxiosApi.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (
//       error.response.status === 401 &&
//       error.response.config.url !== apiOptions(REFRESH_TOKEN_API).url
//     ) {
//       // 401(Unauthorized) error in api's except refresh token api
//       await updateRefreshToken();
//     }
//     return Promise.reject(error);
//   }
// );

export default AxiosApi;

const updateRefreshToken = async () => {
  await AxiosApi(apiOptions(REFRESH_TOKEN_API))
    .then((token_response) => {
      console.log(token_response);
      //   localStorage.setItem("acess", token_response)
    })
    .catch((token_err) => {
      console.log("token_failed");
    });
};