import { loadRobotsAction } from "../actions/actionCreators";

const urlApi = "https://w06-robots-menchu.herokuapp.com/robots";

export const loadTasksThunk = () => async (dispatch) => {
  const response = await fetch(urlApi);
  const tasks = await response.json();

  dispatch(loadRobotsAction(tasks));
};
