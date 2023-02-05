import user_types from "./types";

const init_state = {
  id: 0,
  email: "",
  username: "",
  phonenumber: "",
  fullname: "",
  avatarUrl: "",
};

// state itu statenya action itu setStatenya
function userReducer(state = init_state, action) {
  //property type dan payload merupakan bawaan
  if (action.type === user_types.USER_LOGIN) {
    return {
      ...state,
      id: action.payload.id,
      email: action.payload.email,
      username: action.payload.username,
      phoneNumber: action.payload.phoneNumber,
      fullname: action.payload.fullname,
      avatarUrl: action.payload.avatarUrl,
    };
  } else if (action.type === user_types.USER_LOGOUT) {
    return init_state;
  }
  return state;
}

export default userReducer;
