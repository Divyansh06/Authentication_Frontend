import { LOGIN_USER, CREATE_USER, FETCH_POST } from "./actionTypes";
import Axios from "axios";
import store from "../store";

const Root_url = "http://localhost:9000";

export function Login(data, dispatch) {
  Axios.post(`${Root_url}/auth/loginuser`, data)
    .then((Response) => {
      dispatch({
        type: LOGIN_USER,
        payload: Response.data,
      });
    })
    .catch((error) => console.log(error));
}

export function Signup(data, dispatch) {
  Axios.post(`${Root_url}/auth/createuser`, data)
    .then((Response) => {
      dispatch({
        type: CREATE_USER,
        payload: Response.data.user,
      });
    })
    .catch((error) => console.log(error));
}

export function FetchPosts(dispatch) {
  const { token, userId } = store.getState().sign_in;
  console.log(token, userId);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  Axios.post(`${Root_url}/auth/getallpost`, { userId }, { headers })
    .then((Response) => {
      dispatch({
        type: FETCH_POST,
        payload: Response.data,
        loading: false,
      });
    })
    .catch((error) => console.log(error));
}
