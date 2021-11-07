import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});

export const updateRobotAction = (robot) => ({
  type: actionTypes.updateRobotAction,
  robot,
});

export const loadEditRobotAction = (robot) => ({
  type: actionTypes.loadEditRobot,
  robot,
});

export const resetEditRobotAction = () => ({
  type: actionTypes.loadEditRobot,
});
