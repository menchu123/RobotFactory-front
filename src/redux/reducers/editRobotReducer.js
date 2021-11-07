import actionTypes from "../actions/actionTypes";

const editRobotReducer = (
  editRobot = { isEditing: false, robot: {} },
  action
) => {
  let newEditRobot;
  switch (action.type) {
    case actionTypes.loadCurrentChallenge:
      newEditRobot = { robot: action.challenge, isEditing: true };
      break;
    case actionTypes.resetCurrentChallenge:
      newEditRobot = { robot: {}, isEditing: false };
      break;
    default:
      newEditRobot = editRobot;
  }
  return newEditRobot;
};

export default editRobotReducer;
