import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRobotThunk,
  deleteRobotThunk,
  loadRobotsThunk,
  updateRobotThunk,
} from "../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(
    (robot) => {
      dispatch(createRobotThunk(robot));
    },
    [dispatch]
  );

  const deleteRobot = useCallback(
    (id) => {
      dispatch(deleteRobotThunk(id));
    },
    [dispatch]
  );

  const updateRobot = useCallback(
    (robot) => {
      dispatch(updateRobotThunk(robot));
    },
    [dispatch]
  );

  return {
    robots,
    loadRobots,
    createRobot,
    deleteRobot,
    updateRobot,
  };
};

export default useRobots;
