import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import RobotList from "./components/RobotList/RobotList";

function App() {
  const { isAuthenticated } = useSelector(({ user }) => user);

  return (
    <div className="robot-app container">
      <header className="header d-flex flex-column align-items-center">
        <h2 className="mt-4">Meet the Bots</h2>
        <LoginForm />
      </header>
      {isAuthenticated ? <RobotList /> : ""}
    </div>
  );
}

export default App;
