import user_types from "./types";

const init_state = {
  id: 0,
  username: "",
  password: "",
  avatarUrl: "",
  fullname: "",
};

// state itu statenya action itu setStatenya
function userReducer(state = init_state, action) {
  //property type dan payload merupakan bawaan
  if (action.type === user_types.USER_LOGIN) {
    return {
      ...state,
      id: action.payload.id,
      username: action.payload.username,
      password: action.payload.password,
      avatarUrl: action.payload.avatarUrl,
      fullname: action.payload.fullname,
    };
  } else if (action.type === user_types.USER_LOGOUT) {
    return init_state;
  }
  return state;
}

export default userReducer;
