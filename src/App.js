import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import RobotList from "./components/RobotList/RobotList";
import useRobots from "./hooks/useRobots";

function App() {
  const { robots, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <div className="robot-app container">
      <RobotList robots={robots} />
      {/* <Form /> */}
    </div>
  );
}

export default App;
