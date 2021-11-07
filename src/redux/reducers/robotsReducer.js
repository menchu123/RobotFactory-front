import actionTypes from "../actions/actionTypes";

const robotsReducer = (robots = [], action) => {
  let newRobots = robots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    case actionTypes.createRobot:
      newRobots = [...robots, action.robot];
      break;
    default:
      return [...robots];
  }

  return newRobots;
};

export default robotsReducer;
