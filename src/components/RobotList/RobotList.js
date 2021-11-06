import Robot from "../Robot/Robot";

const RobotList = ({ robots }) => {
  return (
    <ul className="list-unstyled row row-cols-md-3">
      {robots.map((robot, index) => (
        <li className="col mt-3" key={index}>
          <Robot robot={robot} key={robot.id} />
        </li>
      ))}
    </ul>
  );
};

export default RobotList;
