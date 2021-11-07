import { createRobotAction, loadRobotsAction } from "../actions/actionCreators";

const urlApi = "https://w06-robots-menchu.herokuapp.com/robots";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(urlApi);
  const robots = await response.json();

  dispatch(loadRobotsAction(robots));
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(urlApi, {
    method: "POST",
    body: JSON.stringify(robot),
    headers: {
      "Content-Type": "application/json",
    },
  });
  robot = await response.json();
  dispatch(createRobotAction(robot));
};
