import actionTypes from "../actions/actionTypes";

const userReducer = (
  user = {
    isAuthenthicated: false,
    user: {},
  },
  action
) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = {
        isAuthenthicated: true,
        user: action.user,
      };
      break;
    case actionTypes.logoutUser:
      newUser = {
        isAuthenthicated: false,
        user: {},
      };
      break;
    default:
      newUser = user;
  }

  return newUser;
};

export default userReducer;
