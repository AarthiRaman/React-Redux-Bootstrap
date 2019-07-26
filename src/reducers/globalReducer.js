import { ON_LOGIN_CLICK } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
  user: {}
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case ON_LOGIN_CLICK:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user
      };

    default:
      return state;
  }
}
