import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import RobotList from "./components/RobotList/RobotList";
import useUser from "./hooks/useUser";
import { userLoginAction } from "./redux/actions/actionCreators";

function App() {
  const { user } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    if (token) {
      dispatch(userLoginAction(jwtDecode(token.token)));
    }
  }, [dispatch]);

  return (
    <div className="robot-app container">
      <header className="header d-flex flex-column align-items-center">
        <h2 className="mt-4">Meet the Bots</h2>
        <LoginForm isAuthenticated={user.isAuthenticated} />
      </header>
      {user.isAuthenticated ? <RobotList /> : ""}
    </div>
  );
}

export default App;
