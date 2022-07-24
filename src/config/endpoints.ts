

// Generate api url
const apiUrl = (api, uriParams = null) => {
  const regex = RegExp("{([^/]*)}", "g");
  const keys = api.match(regex);
  if (keys != null) {
    keys.forEach((key) => {
      const clean_key_id = key.replace("{", "").replace("}", "");
      api = api.replace(key, uriParams[clean_key_id]);
    });
  }
  return process.env.NEXT_PUBLIC_API_URL + api;
};

const REQUEST_METHODS = {
  POST: "post",
  GET: "get"
};
  
// Generate Axios api options
export default function apiOptions(
  apiObject,
  uriParams = null,
  master_url = null
) {
  const url = master_url ? master_url : apiUrl(apiObject.url, uriParams);
  return { ...apiObject, url };
}
  
//Login, Signup and User
export const USER_SIGNUP = {url: "/api:0ZC7IWne/auth/signup", method: REQUEST_METHODS.POST};
export const USER_LOGIN = {url: "/api:0ZC7IWne/auth/login", method: REQUEST_METHODS.POST};
export const GET_USER = {url: "/api:0ZC7IWne/auth/me", method: REQUEST_METHODS.GET};
// export const SIGNUP_API = { url: "user/signup", method: "post" };
// export const LOGIN_API = { url: "user/login", method: "post" };
// export const UPDATE_PROFILE_API = {
//   url: "user/updateProfile",
//   method: "patch",
// };
// export const UPLOAD_PROFILE_PIC = {
//   url: "user/profilePicture",
//   method: "get",
// };
// export const REFRESH_TOKEN_API = { url: "tokenexchange", method: "post" };
// export const CURRENT_USER_API = { url: "user/myProfile", method: "get" };
// export const GET_USER_API = { url: "user/profile/{user_id}", method: "get" };
  
// //Posts
// export const CREATE_POST_API = { url: "posts", method: "post" };
// export const UPDATE_POST_API = { url: "post/{post_id}", method: "patch" };
// export const DELETE_POST_API = { url: "user/login", method: "delete" };
// export const GET_POST_DETAIL_API = { url: "post/{post_id}", method: "get" };
// export const GET_RELATED_POSTS_API = { url: "posts", method: "get" };
// export const GET_ALL_POSTS_API = { url: "all_posts", method: "get" };
// export const LIKE_POST = { url: "like_post", method: "patch" };
// export const GET_MY_POSTS = { url: "my_posts", method: "get" };
// export const UPLOAD_POST_PIC = { url: "image/{post_id}", method: "get" };
  
// //Connection
  
// export const SEND_FRIEND_REQUEST = { url: "user/send_request", method: "post" };
// export const ACCEPT_FRIEND_REQUEST = {
//   url: "user/accept_request",
//   method: "post",
// };
// export const GET_FRIENDS_LIST = { url: "user/friends", method: "get" };
// export const GET_REQUESTS_LIST = { url: "user/pending_request", method: "get" };