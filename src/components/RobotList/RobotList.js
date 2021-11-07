import { useEffect } from "react";
import useRobots from "../../hooks/useRobots";
import Form from "../Form/Form";
import Robot from "../Robot/Robot";

const RobotList = () => {
  const { robots, loadRobots, createRobot } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <>
      <h2 className="text-center mt-4">Meet the Bots</h2>
      <ul className="list-unstyled row row-cols-md-4">
        <li className="form-container col mt-3">
          <Form createRobot={createRobot} />
        </li>
        {robots.map((robot, index) => (
          <li className="col mt-3" key={index}>
            <Robot robot={robot} key={robot.id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotList;
