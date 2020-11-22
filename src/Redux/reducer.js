import { CREATE_USER, FETCH_POST, LOGIN_USER } from "./Actions/actionTypes";

const initialstate = {
  sign_up: {
    userId: "",
    name: "",
    email: "",
  },
  signed_in: false,
  sign_in: {
    username: "",
    userId: "",
    token: "",
    expiresIn: "",
  },
  posts: [],
  postloading: true,
};

export default function reducer(state = initialstate, action) {
  console.log(action);
  switch (action.type) {
    case CREATE_USER:
      return (state = {
        ...state,
        sign_up: action.payload,
      });
    case LOGIN_USER:
      return (state = {
        ...state,
        sign_in: action.payload,
        signed_in: true,
      });
    case FETCH_POST:
      return (state = {
        ...state,
        posts: action.payload,
        postloading: action.loading,
      });

    default:
      return state;
  }
}
