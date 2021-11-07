import { useEffect } from "react";
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
    </div>
  );
}

export default App;
