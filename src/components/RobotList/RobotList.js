import { useEffect, useState } from "react";
import useRobots from "../../hooks/useRobots";
import Form from "../Form/Form";
import Robot from "../Robot/Robot";

const RobotList = () => {
  const { robots, loadRobots, createRobot, deleteRobot, updateRobot } =
    useRobots();

  const [currentRobot, setCurrentRobot] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  const onDelete = (id) => {
    deleteRobot(id);
  };

  const onEdit = (robot) => {
    setCurrentRobot(robot);
    setIsEditing(true);
  };

  return (
    <>
      <ul className="list-unstyled row row-cols-md-4">
        <li className="form-container col mt-3">
          <Form
            createRobot={createRobot}
            currentRobot={currentRobot}
            updateRobot={updateRobot}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </li>
        {robots.map((robot, index) => (
          <li className="col mt-3" key={index}>
            <Robot
              robot={robot}
              key={robot.id}
              onDeleteClick={onDelete}
              onEditClick={onEdit}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotList;
