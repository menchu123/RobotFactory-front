import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUserThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loginUser = () => {
    dispatch(loginUserThunk(user));
  };

  return { user, loginUser };
};

export default useUser;
