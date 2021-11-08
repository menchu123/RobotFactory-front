import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAction,
  updateRobotAction,
} from "../actions/actionCreators";

const urlApi = "https://w06-robots-menchu.herokuapp.com/robots";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(urlApi, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODkxYzU1YzFiMWI3YzEzYjlhZmFlMSIsIm5hbWUiOiJNYXLDrWEiLCJpYXQiOjE2MzYzOTIzMDUsImV4cCI6MTYzNjQ3ODcwNX0.AV88YvPnI_DJ80z9dTWVuzBXavC2woX_6NW-ApEbvVI",
    },
  });
  const robots = await response.json();

  dispatch(loadRobotsAction(robots));
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    urlApi + "/create?token=" + process.env.REACT_APP_TOKEN,
    {
      method: "POST",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  robot = await response.json();
  dispatch(createRobotAction(robot));
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(
    urlApi + "/delete/" + id + "?token=" + process.env.REACT_APP_TOKEN,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    dispatch(deleteRobotAction(id));
  }
};

export const updateRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    urlApi + "/update?token=" + process.env.REACT_APP_TOKEN,
    {
      method: "PUT",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  robot = await response.json();
  dispatch(updateRobotAction(robot));
};
