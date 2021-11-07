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
    case actionTypes.deleteRobot:
      newRobots = robots.filter((robot) => robot._id !== action.id);
      break;
    case actionTypes.updateRobot:
      newRobots = robots.map((robot) =>
        robot._id === action.robot._id
          ? {
              ...robot,
              ...action.robot,
            }
          : robot
      );
      break;
    default:
      return [...robots];
  }

  return newRobots;
};

export default robotsReducer;
