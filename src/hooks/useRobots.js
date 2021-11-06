import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadBooks = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return {
    robots,
    loadBooks,
  };
};

export default useRobots;
