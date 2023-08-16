import { USER_SIGNIN, USER_SIGNOUT } from "./reducerActions";


export const authReducer = (state, { type, payload }) => {
  switch (type) {

      case USER_SIGNIN:
          return {
              ...state,
              userInfo: payload
          }
      case USER_SIGNOUT:
          localStorage.removeItem('userInfo');
          return {
              ...state,
              userInfo: null,
          }
      default:
          return state;
  }
}
