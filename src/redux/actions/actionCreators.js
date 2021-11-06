import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadRobotAction = (robot) => ({
  type: actionTypes.loadRobot,
  robot,
});
