import actionTypes from "../actions/actionTypes";

const editRobotReducer = (
  editRobot = { isEditing: false, robot: {} },
  action
) => {
  let newEditRobot;
  switch (action.type) {
    case actionTypes.loadEditRobot:
      newEditRobot = { robot: action.robot, isEditing: true };
      break;
    case actionTypes.resetEditRobot:
      newEditRobot = { robot: {}, isEditing: false };
      break;
    default:
      newEditRobot = editRobot;
  }
  return newEditRobot;
};

export default editRobotReducer;
